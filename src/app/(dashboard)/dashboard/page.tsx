'use client';

import React from 'react';
import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';

export default function DashboardPage() {
  const { data: session, status } = useSession();

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'unauthenticated') {
    redirect('/login');
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
      
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">Welcome, {session?.user?.name || 'User'}!</h2>
        <p className="text-gray-600">
          This is your dashboard where you can manage your waitlists and track their performance.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold mb-2">Total Waitlists</h3>
          <p className="text-3xl font-bold text-primary-600">0</p>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold mb-2">Total Subscribers</h3>
          <p className="text-3xl font-bold text-primary-600">0</p>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold mb-2">Conversion Rate</h3>
          <p className="text-3xl font-bold text-primary-600">0%</p>
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">Your Waitlists</h2>
          <button className="btn btn-primary">Create New Waitlist</button>
        </div>
        
        <div className="bg-gray-50 rounded-lg p-8 text-center">
          <h3 className="text-lg font-semibold mb-2">No waitlists yet</h3>
          <p className="text-gray-600 mb-4">
            Create your first waitlist to start collecting subscribers and growing your audience.
          </p>
          <button className="btn btn-primary">Create Your First Waitlist</button>
        </div>
      </div>
    </div>
  );
}
