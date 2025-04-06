import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/auth/auth-options';
import { db } from '@/db';
import { waitlists, widgets } from '@/db/schema';
import { v4 as uuid } from 'uuid';
import { eq, and } from 'drizzle-orm';

// GET /api/waitlists/[id]/widgets - Get all widgets for a waitlist
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

    // Get widgets for the waitlist
    const waitlistWidgets = await db
      .select()
      .from(widgets)
      .where(eq(widgets.waitlistId, params.id));

    return NextResponse.json(waitlistWidgets);
  } catch (error) {
    console.error('Error fetching widgets:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

// POST /api/waitlists/[id]/widgets - Create a new widget for a waitlist
export async function POST(
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

    const body = await req.json();
    const { name, type, settings, customCss, customJs } = body;

    if (!name) {
      return NextResponse.json({ error: 'Name is required' }, { status: 400 });
    }

    // Default widget settings based on waitlist settings
    const defaultSettings = existingWaitlist.widgetSettings || JSON.stringify({
      theme: 'light',
      layout: 'standard',
      fields: [
        { name: 'email', label: 'Email', type: 'email', required: true },
        { name: 'name', label: 'Name', type: 'text', required: false }
      ],
      submitButton: {
        text: 'Join Waitlist',
        color: existingWaitlist.brandColor || '#0ea5e9'
      },
      successMessage: 'Thanks for joining our waitlist!',
      referralEnabled: existingWaitlist.referralEnabled === 1,
      referralMessage: 'Share with friends to move up the list!'
    });

    const newWidget = {
      id: uuid(),
      waitlistId: params.id,
      name,
      type: type || 'inline',
      settings: settings || defaultSettings,
      customCss: customCss || '',
      customJs: customJs || '',
      isActive: true,
      views: 0,
      conversions: 0
    };

    await db.insert(widgets).values(newWidget);

    return NextResponse.json(newWidget, { status: 201 });
  } catch (error) {
    console.error('Error creating widget:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
