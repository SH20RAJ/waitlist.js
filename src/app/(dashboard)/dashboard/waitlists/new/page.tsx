'use client';

import React, { useState } from 'react';
import { useSession } from 'next-auth/react';
import { redirect, useRouter } from 'next/navigation';
import { FiArrowLeft, FiSave, FiX } from 'react-icons/fi';
import Link from 'next/link';

export default function NewWaitlistPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  if (status === 'loading') {
    return <div className="p-6">Loading...</div>;
  }
  
  if (status === 'unauthenticated') {
    redirect('/login');
  }
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name.trim()) {
      setError('Waitlist name is required');
      return;
    }
    
    try {
      setLoading(true);
      setError(null);
      
      const response = await fetch('/api/waitlists', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          description,
        }),
      });
      
      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || 'Failed to create waitlist');
      }
      
      const waitlist = await response.json();
      
      // Redirect to the waitlist details page
      router.push(`/dashboard/waitlists/${waitlist.id}`);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
      setLoading(false);
    }
  };
  
  return (
    <div className="p-6">
      <div className="flex items-center mb-6">
        <Link href="/dashboard" className="mr-4 text-gray-500 hover:text-gray-700">
          <FiArrowLeft className="w-5 h-5" />
        </Link>
        <h1 className="text-2xl font-bold">Create New Waitlist</h1>
      </div>
      
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md mb-6 flex justify-between items-center">
          <span>{error}</span>
          <button onClick={() => setError(null)}>
            <FiX className="w-5 h-5" />
          </button>
        </div>
      )}
      
      <div className="bg-white rounded-lg shadow-md p-6">
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Waitlist Name *
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              placeholder="e.g., Product Launch, Beta Access"
              required
            />
          </div>
          
          <div className="mb-6">
            <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
              Description
            </label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              placeholder="Describe what this waitlist is for..."
              rows={4}
            />
            <p className="mt-1 text-sm text-gray-500">
              This will be displayed to your users when they sign up.
            </p>
          </div>
          
          <div className="flex justify-end space-x-4">
            <Link
              href="/dashboard"
              className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
            >
              Cancel
            </Link>
            
            <button
              type="submit"
              disabled={loading}
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
            >
              {loading ? (
                <>
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Creating...
                </>
              ) : (
                <>
                  <FiSave className="mr-2" />
                  Create Waitlist
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
