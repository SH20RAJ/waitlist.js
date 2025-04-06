import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/auth/auth-options';
import { db } from '@/db';
import { waitlists } from '@/db/schema';
import { v4 as uuid } from 'uuid';
import { eq } from 'drizzle-orm';

// GET /api/waitlists - Get all waitlists for the current user
export async function GET(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const userWaitlists = await db
      .select()
      .from(waitlists)
      .where(eq(waitlists.userId, session.user.id));

    return NextResponse.json(userWaitlists);
  } catch (error) {
    console.error('Error fetching waitlists:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

// POST /api/waitlists - Create a new waitlist
export async function POST(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await req.json();
    const { name, description } = body;

    if (!name) {
      return NextResponse.json({ error: 'Name is required' }, { status: 400 });
    }

    // Default widget settings
    const defaultWidgetSettings = JSON.stringify({
      theme: 'light',
      layout: 'standard',
      fields: [
        { name: 'email', label: 'Email', type: 'email', required: true },
        { name: 'name', label: 'Name', type: 'text', required: false }
      ],
      submitButton: {
        text: 'Join Waitlist',
        color: '#0ea5e9'
      },
      successMessage: 'Thanks for joining our waitlist!',
      referralEnabled: true,
      referralMessage: 'Share with friends to move up the list!'
    });

    const newWaitlist = {
      id: uuid(),
      name,
      description: description || '',
      userId: session.user.id,
      isActive: true,
      widgetSettings: defaultWidgetSettings,
      brandColor: '#0ea5e9',
      logo: '',
      accessMode: 'fifo',
      accessRate: 10,
      accessPeriod: 'day',
      referralEnabled: 1,
      referralBonus: 5,
      totalSignups: 0,
      conversionRate: '0'
    };

    await db.insert(waitlists).values(newWaitlist);

    return NextResponse.json(newWaitlist, { status: 201 });
  } catch (error) {
    console.error('Error creating waitlist:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
