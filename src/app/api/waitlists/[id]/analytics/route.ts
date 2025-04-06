import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/auth/auth-options';
import { db } from '@/db';
import { waitlists, waitlistEntries, analyticsEvents } from '@/db/schema';
import { eq, and, sql, desc } from 'drizzle-orm';

// GET /api/waitlists/[id]/analytics - Get analytics for a waitlist
export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // Check if the waitlist exists and belongs to the user
    const existingWaitlist = await db
      .select()
      .from(waitlists)
      .where(
        and(
          eq(waitlists.id, params.id),
          eq(waitlists.userId, session.user.id)
        )
      )
      .then((res) => res[0] || null);

    if (!existingWaitlist) {
      return NextResponse.json({ error: 'Waitlist not found' }, { status: 404 });
    }

    // Get query parameters
    const url = new URL(req.url);
    const period = url.searchParams.get('period') || 'week'; // day, week, month, year, all
    
    // Calculate the start date based on the period
    let startDate;
    const now = new Date();
    
    switch (period) {
      case 'day':
        startDate = new Date(now.setDate(now.getDate() - 1));
        break;
      case 'week':
        startDate = new Date(now.setDate(now.getDate() - 7));
        break;
      case 'month':
        startDate = new Date(now.setMonth(now.getMonth() - 1));
        break;
      case 'year':
        startDate = new Date(now.setFullYear(now.getFullYear() - 1));
        break;
      default:
        startDate = new Date(0); // Beginning of time
    }
    
    const startTimestamp = startDate.getTime();

    // Get total signups
    const totalSignups = await db
      .select({ count: sql`count(*)` })
      .from(waitlistEntries)
      .where(eq(waitlistEntries.waitlistId, params.id))
      .then((res) => res[0]?.count || 0);

    // Get signups in the period
    const signupsInPeriod = await db
      .select({ count: sql`count(*)` })
      .from(waitlistEntries)
      .where(
        and(
          eq(waitlistEntries.waitlistId, params.id),
          sql`${waitlistEntries.createdAt} >= ${startTimestamp}`
        )
      )
      .then((res) => res[0]?.count || 0);

    // Get referral count
    const referralCount = await db
      .select({ sum: sql`sum(${waitlistEntries.referralCount})` })
      .from(waitlistEntries)
      .where(eq(waitlistEntries.waitlistId, params.id))
      .then((res) => res[0]?.sum || 0);

    // Get referrals in the period
    const referralsInPeriod = await db
      .select({ count: sql`count(*)` })
      .from(waitlistEntries)
      .where(
        and(
          eq(waitlistEntries.waitlistId, params.id),
          sql`${waitlistEntries.referredBy} IS NOT NULL`,
          sql`${waitlistEntries.createdAt} >= ${startTimestamp}`
        )
      )
      .then((res) => res[0]?.count || 0);

    // Get top referrers
    const topReferrers = await db
      .select({
        id: waitlistEntries.id,
        email: waitlistEntries.email,
        name: waitlistEntries.name,
        referralCount: waitlistEntries.referralCount
      })
      .from(waitlistEntries)
      .where(eq(waitlistEntries.waitlistId, params.id))
      .orderBy(desc(waitlistEntries.referralCount))
      .limit(5);

    // Get recent events
    const recentEvents = await db
      .select()
      .from(analyticsEvents)
      .where(eq(analyticsEvents.waitlistId, params.id))
      .orderBy(desc(analyticsEvents.timestamp))
      .limit(10);

    // Get signup trend (daily signups for the last 30 days)
    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
    
    const signupTrend = await db
      .select({
        date: sql`date(${waitlistEntries.createdAt} / 1000, 'unixepoch')`,
        count: sql`count(*)`
      })
      .from(waitlistEntries)
      .where(
        and(
          eq(waitlistEntries.waitlistId, params.id),
          sql`${waitlistEntries.createdAt} >= ${thirtyDaysAgo.getTime()}`
        )
      )
      .groupBy(sql`date(${waitlistEntries.createdAt} / 1000, 'unixepoch')`)
      .orderBy(sql`date(${waitlistEntries.createdAt} / 1000, 'unixepoch')`);

    return NextResponse.json({
      overview: {
        totalSignups,
        signupsInPeriod,
        referralCount,
        referralsInPeriod,
        conversionRate: existingWaitlist.conversionRate
      },
      topReferrers,
      recentEvents,
      signupTrend
    });
  } catch (error) {
    console.error('Error fetching waitlist analytics:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
