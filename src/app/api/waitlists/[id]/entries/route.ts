import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/auth/auth-options';
import { db } from '@/db';
import { waitlists, waitlistEntries, analyticsEvents } from '@/db/schema';
import { v4 as uuid } from 'uuid';
import { eq, and, desc, sql } from 'drizzle-orm';
import { nanoid } from 'nanoid';

// GET /api/waitlists/[id]/entries - Get all entries for a waitlist
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
    const page = parseInt(url.searchParams.get('page') || '1');
    const limit = parseInt(url.searchParams.get('limit') || '50');
    const offset = (page - 1) * limit;

    // Get entries for the waitlist
    const entries = await db
      .select()
      .from(waitlistEntries)
      .where(eq(waitlistEntries.waitlistId, params.id))
      .orderBy(desc(waitlistEntries.createdAt))
      .limit(limit)
      .offset(offset);

    // Get total count
    const totalCount = await db
      .select({ count: sql`count(*)` })
      .from(waitlistEntries)
      .where(eq(waitlistEntries.waitlistId, params.id))
      .then((res) => res[0]?.count || 0);

    return NextResponse.json({
      entries,
      pagination: {
        page,
        limit,
        totalCount,
        totalPages: Math.ceil(totalCount / limit)
      }
    });
  } catch (error) {
    console.error('Error fetching waitlist entries:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

// POST /api/waitlists/[id]/entries - Add a new entry to a waitlist
export async function POST(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    // For public access, we don't require authentication
    const body = await req.json();
    const { email, name, referredBy, metadata } = body;

    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 });
    }

    // Check if the waitlist exists
    const existingWaitlist = await db
      .select()
      .from(waitlists)
      .where(eq(waitlists.id, params.id))
      .then((res) => res[0] || null);

    if (!existingWaitlist) {
      return NextResponse.json({ error: 'Waitlist not found' }, { status: 404 });
    }

    // Check if the email is already in the waitlist
    const existingEntry = await db
      .select()
      .from(waitlistEntries)
      .where(
        and(
          eq(waitlistEntries.waitlistId, params.id),
          eq(waitlistEntries.email, email)
        )
      )
      .then((res) => res[0] || null);

    if (existingEntry) {
      return NextResponse.json({ error: 'Email already exists in waitlist' }, { status: 400 });
    }

    // Get the current position (count + 1)
    const currentPosition = await db
      .select({ count: sql`count(*)` })
      .from(waitlistEntries)
      .where(eq(waitlistEntries.waitlistId, params.id))
      .then((res) => (res[0]?.count || 0) + 1);

    // Generate a unique referral code
    const referralCode = nanoid(8);

    // Create the new entry
    const newEntry = {
      id: uuid(),
      waitlistId: params.id,
      email,
      name: name || '',
      referralCode,
      referredBy: referredBy || null,
      position: currentPosition,
      status: 'pending',
      referralCount: 0,
      engagementScore: 0,
      ipAddress: req.headers.get('x-forwarded-for') || '',
      userAgent: req.headers.get('user-agent') || '',
      metadata: metadata ? JSON.stringify(metadata) : null
    };

    await db.insert(waitlistEntries).values(newEntry);

    // If this entry was referred, update the referrer's count
    if (referredBy) {
      await db
        .update(waitlistEntries)
        .set({
          referralCount: sql`${waitlistEntries.referralCount} + 1`
        })
        .where(eq(waitlistEntries.referralCode, referredBy));
    }

    // Update the waitlist total signups
    await db
      .update(waitlists)
      .set({
        totalSignups: sql`${waitlists.totalSignups} + 1`
      })
      .where(eq(waitlists.id, params.id));

    // Log the signup event
    await db.insert(analyticsEvents).values({
      id: uuid(),
      waitlistId: params.id,
      entryId: newEntry.id,
      eventType: 'signup',
      eventData: JSON.stringify({
        referredBy: referredBy || null
      }),
      ipAddress: req.headers.get('x-forwarded-for') || '',
      userAgent: req.headers.get('user-agent') || ''
    });

    return NextResponse.json(newEntry, { status: 201 });
  } catch (error) {
    console.error('Error creating waitlist entry:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
