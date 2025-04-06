import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/auth/auth-options';
import { db } from '@/db';
import { waitlists } from '@/db/schema';
import { eq, and } from 'drizzle-orm';

// GET /api/waitlists/[id] - Get a specific waitlist
export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const waitlist = await db
      .select()
      .from(waitlists)
      .where(
        and(
          eq(waitlists.id, params.id),
          eq(waitlists.userId, session.user.id)
        )
      )
      .then((res) => res[0] || null);

    if (!waitlist) {
      return NextResponse.json({ error: 'Waitlist not found' }, { status: 404 });
    }

    return NextResponse.json(waitlist);
  } catch (error) {
    console.error('Error fetching waitlist:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

// PUT /api/waitlists/[id] - Update a waitlist
export async function PUT(
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
    
    // Update the waitlist
    await db
      .update(waitlists)
      .set({
        ...body,
        updatedAt: new Date(),
      })
      .where(eq(waitlists.id, params.id));

    // Get the updated waitlist
    const updatedWaitlist = await db
      .select()
      .from(waitlists)
      .where(eq(waitlists.id, params.id))
      .then((res) => res[0]);

    return NextResponse.json(updatedWaitlist);
  } catch (error) {
    console.error('Error updating waitlist:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

// DELETE /api/waitlists/[id] - Delete a waitlist
export async function DELETE(
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

    // Delete the waitlist
    await db
      .delete(waitlists)
      .where(eq(waitlists.id, params.id));

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error deleting waitlist:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
