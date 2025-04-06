'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FiUsers, FiBarChart2, FiSettings } from 'react-icons/fi';

type WaitlistProps = {
  id: string;
  name: string;
  description: string;
  isActive: boolean;
  totalSignups: number;
  conversionRate: string;
  createdAt: number;
};

export default function WaitlistCard({ waitlist }: { waitlist: WaitlistProps }) {
  const { id, name, description, isActive, totalSignups, conversionRate } = waitlist;
  
  // Format the date
  const createdDate = new Date(waitlist.createdAt).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  });
  
  return (
    <motion.div 
      className="border border-gray-200 rounded-lg p-6 transition-all duration-200 hover:shadow-md"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-bold">{name}</h3>
        <div className={`px-2 py-1 rounded-full text-xs font-medium ${
          isActive ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
        }`}>
          {isActive ? 'Active' : 'Inactive'}
        </div>
      </div>
      
      <p className="text-gray-600 text-sm mb-4 line-clamp-2">{description || 'No description'}</p>
      
      <div className="flex items-center text-sm text-gray-500 mb-6">
        <span>Created on {createdDate}</span>
      </div>
      
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="bg-gray-50 rounded-lg p-3">
          <div className="flex items-center text-gray-500 text-xs mb-1">
            <FiUsers className="mr-1" />
            <span>Subscribers</span>
          </div>
          <p className="text-lg font-semibold">{totalSignups}</p>
        </div>
        
        <div className="bg-gray-50 rounded-lg p-3">
          <div className="flex items-center text-gray-500 text-xs mb-1">
            <FiBarChart2 className="mr-1" />
            <span>Conversion</span>
          </div>
          <p className="text-lg font-semibold">{conversionRate || '0%'}</p>
        </div>
      </div>
      
      <div className="flex justify-between">
        <Link 
          href={`/dashboard/waitlists/${id}`}
          className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700"
        >
          View Details
        </Link>
        
        <Link 
          href={`/dashboard/waitlists/${id}/settings`}
          className="inline-flex items-center justify-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
        >
          <FiSettings className="mr-2" />
          Settings
        </Link>
      </div>
    </motion.div>
  );
}
