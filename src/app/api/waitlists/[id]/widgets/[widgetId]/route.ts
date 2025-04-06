import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/auth/auth-options';
import { db } from '@/db';
import { waitlists, widgets } from '@/db/schema';
import { eq, and } from 'drizzle-orm';

// GET /api/waitlists/[id]/widgets/[widgetId] - Get a specific widget
export async function GET(
  req: NextRequest,
  { params }: { params: { id: string; widgetId: string } }
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

    // Get the widget
    const widget = await db
      .select()
      .from(widgets)
      .where(
        and(
          eq(widgets.id, params.widgetId),
          eq(widgets.waitlistId, params.id)
        )
      )
      .then((res) => res[0] || null);

    if (!widget) {
      return NextResponse.json({ error: 'Widget not found' }, { status: 404 });
    }

    return NextResponse.json(widget);
  } catch (error) {
    console.error('Error fetching widget:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

// PUT /api/waitlists/[id]/widgets/[widgetId] - Update a widget
export async function PUT(
  req: NextRequest,
  { params }: { params: { id: string; widgetId: string } }
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

    // Check if the widget exists
    const existingWidget = await db
      .select()
      .from(widgets)
      .where(
        and(
          eq(widgets.id, params.widgetId),
          eq(widgets.waitlistId, params.id)
        )
      )
      .then((res) => res[0] || null);

    if (!existingWidget) {
      return NextResponse.json({ error: 'Widget not found' }, { status: 404 });
    }

    const body = await req.json();
    
    // Update the widget
    await db
      .update(widgets)
      .set({
        ...body,
        updatedAt: new Date(),
      })
      .where(eq(widgets.id, params.widgetId));

    // Get the updated widget
    const updatedWidget = await db
      .select()
      .from(widgets)
      .where(eq(widgets.id, params.widgetId))
      .then((res) => res[0]);

    return NextResponse.json(updatedWidget);
  } catch (error) {
    console.error('Error updating widget:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

// DELETE /api/waitlists/[id]/widgets/[widgetId] - Delete a widget
export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string; widgetId: string } }
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

    // Check if the widget exists
    const existingWidget = await db
      .select()
      .from(widgets)
      .where(
        and(
          eq(widgets.id, params.widgetId),
          eq(widgets.waitlistId, params.id)
        )
      )
      .then((res) => res[0] || null);

    if (!existingWidget) {
      return NextResponse.json({ error: 'Widget not found' }, { status: 404 });
    }

    // Delete the widget
    await db
      .delete(widgets)
      .where(eq(widgets.id, params.widgetId));

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error deleting widget:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
