'use client';

import React from 'react';
import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';
import { FiPlus, FiSearch } from 'react-icons/fi';

export default function WaitlistsPage() {
  const { data: session, status } = useSession();

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'unauthenticated') {
    redirect('/login');
  }

  return (
    <div className="p-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
        <h1 className="text-2xl font-bold">Your Waitlists</h1>
        <button className="btn btn-primary mt-4 md:mt-0 flex items-center">
          <FiPlus className="mr-2" />
          Create New Waitlist
        </button>
      </div>
      
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
          <div className="relative w-full md:w-64">
            <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search waitlists..."
              className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
            />
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <select className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-primary-500 focus:border-primary-500">
              <option value="all">All Status</option>
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>
            
            <select className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-primary-500 focus:border-primary-500">
              <option value="newest">Newest First</option>
              <option value="oldest">Oldest First</option>
              <option value="subscribers">Most Subscribers</option>
            </select>
          </div>
        </div>
        
        <div className="bg-gray-50 rounded-lg p-8 text-center">
          <h3 className="text-lg font-semibold mb-2">No waitlists yet</h3>
          <p className="text-gray-600 mb-4">
            Create your first waitlist to start collecting subscribers and growing your audience.
          </p>
          <button className="btn btn-primary">Create Your First Waitlist</button>
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4">Getting Started</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="border border-gray-200 rounded-lg p-4">
            <div className="bg-primary-100 text-primary-600 rounded-full w-10 h-10 flex items-center justify-center mb-3">1</div>
            <h3 className="font-medium mb-2">Create a Waitlist</h3>
            <p className="text-gray-600 text-sm">Set up your waitlist with a name, description, and customize its appearance.</p>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-4">
            <div className="bg-primary-100 text-primary-600 rounded-full w-10 h-10 flex items-center justify-center mb-3">2</div>
            <h3 className="font-medium mb-2">Embed on Your Site</h3>
            <p className="text-gray-600 text-sm">Add the waitlist widget to your website using our easy embed code or integrations.</p>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-4">
            <div className="bg-primary-100 text-primary-600 rounded-full w-10 h-10 flex items-center justify-center mb-3">3</div>
            <h3 className="font-medium mb-2">Grow Your Audience</h3>
            <p className="text-gray-600 text-sm">Use our referral system and analytics to optimize and grow your waitlist.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
