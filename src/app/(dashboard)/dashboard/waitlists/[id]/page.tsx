'use client';

import React, { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { redirect, useRouter } from 'next/navigation';
import Link from 'next/link';
import { 
  FiArrowLeft, FiUsers, FiBarChart2, FiTrendingUp, FiUserPlus, 
  FiSettings, FiEdit, FiEye, FiDownload, FiMail, FiLink
} from 'react-icons/fi';
import { motion } from 'framer-motion';

// Dashboard components
import StatsCard from '@/components/dashboard/StatsCard';
import LineChart from '@/components/dashboard/LineChart';
import TabNavigation from '@/components/dashboard/TabNavigation';
import EntriesTable from '@/components/dashboard/EntriesTable';
import WidgetPreview from '@/components/dashboard/WidgetPreview';

// Types
type Waitlist = {
  id: string;
  name: string;
  description: string;
  isActive: boolean;
  totalSignups: number;
  conversionRate: string;
  createdAt: number;
  widgetSettings: string;
  brandColor: string;
};

type WaitlistEntry = {
  id: string;
  email: string;
  name: string;
  referralCode: string;
  referredBy: string | null;
  position: number;
  status: string;
  referralCount: number;
  createdAt: number;
};

type AnalyticsData = {
  overview: {
    totalSignups: number;
    signupsInPeriod: number;
    referralCount: number;
    referralsInPeriod: number;
    conversionRate: string;
  };
  topReferrers: {
    id: string;
    email: string;
    name: string;
    referralCount: number;
  }[];
  recentEvents: any[];
  signupTrend: {
    date: string;
    count: number;
  }[];
};

export default function WaitlistDetailPage({ params }: { params: { id: string } }) {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [waitlist, setWaitlist] = useState<Waitlist | null>(null);
  const [entries, setEntries] = useState<WaitlistEntry[]>([]);
  const [analytics, setAnalytics] = useState<AnalyticsData | null>(null);
  const [activeTab, setActiveTab] = useState('overview');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [period, setPeriod] = useState('week');

  useEffect(() => {
    if (status === 'authenticated') {
      fetchWaitlist();
    }
  }, [status, params.id]);

  useEffect(() => {
    if (waitlist) {
      fetchAnalytics();
      if (activeTab === 'subscribers') {
        fetchEntries();
      }
    }
  }, [waitlist, period, activeTab]);

  const fetchWaitlist = async () => {
    try {
      setLoading(true);
      const response = await fetch(`/api/waitlists/${params.id}`);
      
      if (!response.ok) {
        throw new Error('Failed to fetch waitlist');
      }
      
      const data = await response.json();
      setWaitlist(data);
      setLoading(false);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
      setLoading(false);
    }
  };

  const fetchEntries = async () => {
    try {
      const response = await fetch(`/api/waitlists/${params.id}/entries`);
      
      if (!response.ok) {
        throw new Error('Failed to fetch entries');
      }
      
      const data = await response.json();
      setEntries(data.entries);
    } catch (err) {
      console.error('Error fetching entries:', err);
    }
  };

  const fetchAnalytics = async () => {
    try {
      const response = await fetch(`/api/waitlists/${params.id}/analytics?period=${period}`);
      
      if (!response.ok) {
        throw new Error('Failed to fetch analytics');
      }
      
      const data = await response.json();
      setAnalytics(data);
    } catch (err) {
      console.error('Error fetching analytics:', err);
    }
  };

  const handleExportCSV = () => {
    // In a real app, this would call an API endpoint to generate and download a CSV
    alert('Export functionality would be implemented here');
  };

  const handleSendEmail = () => {
    router.push(`/dashboard/waitlists/${params.id}/email`);
  };

  const handleCopyLink = () => {
    // In a real app, this would copy a public link to the clipboard
    const link = `${window.location.origin}/w/${params.id}`;
    navigator.clipboard.writeText(link);
    alert('Link copied to clipboard!');
  };

  const tabs = [
    { id: 'overview', label: 'Overview', icon: <FiBarChart2 /> },
    { id: 'subscribers', label: 'Subscribers', icon: <FiUsers /> },
    { id: 'widget', label: 'Widget', icon: <FiEye /> },
  ];

  if (status === 'loading' || loading) {
    return (
      <div className="p-6">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-64 mb-4"></div>
          <div className="h-4 bg-gray-200 rounded w-32 mb-8"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="bg-white rounded-lg shadow-md p-6">
                <div className="h-4 bg-gray-200 rounded w-1/2 mb-4"></div>
                <div className="h-8 bg-gray-200 rounded w-1/4"></div>
              </div>
            ))}
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <div className="h-64 bg-gray-200 rounded"></div>
          </div>
        </div>
      </div>
    );
  }

  if (status === 'unauthenticated') {
    redirect('/login');
  }

  if (error || !waitlist) {
    return (
      <div className="p-6">
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md mb-6">
          {error || 'Waitlist not found'}
        </div>
        <Link 
          href="/dashboard"
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700"
        >
          <FiArrowLeft className="mr-2" />
          Back to Dashboard
        </Link>
      </div>
    );
  }

  return (
    <div className="p-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
        <div className="flex items-center">
          <Link href="/dashboard" className="mr-4 text-gray-500 hover:text-gray-700">
            <FiArrowLeft className="w-5 h-5" />
          </Link>
          <div>
            <div className="flex items-center">
              <h1 className="text-2xl font-bold mr-2">{waitlist.name}</h1>
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                waitlist.isActive ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
              }`}>
                {waitlist.isActive ? 'Active' : 'Inactive'}
              </span>
            </div>
            <p className="text-gray-600">{waitlist.description || 'No description'}</p>
          </div>
        </div>
        
        <div className="flex mt-4 md:mt-0 space-x-2">
          <button 
            onClick={handleExportCSV}
            className="inline-flex items-center px-3 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
          >
            <FiDownload className="mr-2" />
            Export
          </button>
          
          <button 
            onClick={handleSendEmail}
            className="inline-flex items-center px-3 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
          >
            <FiMail className="mr-2" />
            Email
          </button>
          
          <button 
            onClick={handleCopyLink}
            className="inline-flex items-center px-3 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
          >
            <FiLink className="mr-2" />
            Share
          </button>
          
          <Link 
            href={`/dashboard/waitlists/${params.id}/settings`}
            className="inline-flex items-center px-3 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
          >
            <FiSettings className="mr-2" />
            Settings
          </Link>
        </div>
      </div>
      
      <TabNavigation 
        tabs={tabs} 
        activeTab={activeTab} 
        onChange={setActiveTab} 
      />
      
      {activeTab === 'overview' && (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <StatsCard 
              title="Total Subscribers" 
              value={analytics?.overview.totalSignups.toString() || '0'} 
              icon={<FiUsers className="w-6 h-6" />}
              trend={`+${analytics?.overview.signupsInPeriod || 0} this ${period}`}
              color="primary"
            />
            
            <StatsCard 
              title="Conversion Rate" 
              value={analytics?.overview.conversionRate || '0%'} 
              icon={<FiTrendingUp className="w-6 h-6" />}
              color="success"
            />
            
            <StatsCard 
              title="Total Referrals" 
              value={analytics?.overview.referralCount.toString() || '0'} 
              icon={<FiUserPlus className="w-6 h-6" />}
              trend={`+${analytics?.overview.referralsInPeriod || 0} this ${period}`}
              color="warning"
            />
            
            <StatsCard 
              title="Average Position" 
              value="42" 
              icon={<FiBarChart2 className="w-6 h-6" />}
              color="info"
            />
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            <div className="lg:col-span-2 bg-white rounded-lg shadow-md p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold">Signup Trend</h2>
                <select 
                  className="border border-gray-300 rounded-md px-3 py-1 text-sm"
                  value={period}
                  onChange={(e) => setPeriod(e.target.value)}
                >
                  <option value="day">Last 24 hours</option>
                  <option value="week">Last 7 days</option>
                  <option value="month">Last 30 days</option>
                  <option value="year">Last 12 months</option>
                </select>
              </div>
              
              <div className="h-64">
                {analytics?.signupTrend ? (
                  <LineChart data={analytics.signupTrend} />
                ) : (
                  <div className="h-full flex items-center justify-center text-gray-500">
                    No data available
                  </div>
                )}
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold mb-4">Top Referrers</h2>
              
              {analytics?.topReferrers && analytics.topReferrers.length > 0 ? (
                <div className="space-y-4">
                  {analytics.topReferrers.map((referrer, index) => (
                    <div key={referrer.id} className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center font-semibold mr-3">
                        {index + 1}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-medium truncate">{referrer.name || 'Anonymous'}</p>
                        <p className="text-sm text-gray-500 truncate">{referrer.email}</p>
                      </div>
                      <div className="ml-4 text-right">
                        <p className="font-semibold">{referrer.referralCount}</p>
                        <p className="text-xs text-gray-500">referrals</p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="py-8 text-center text-gray-500">
                  No referrals yet
                </div>
              )}
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
            
            {analytics?.recentEvents && analytics.recentEvents.length > 0 ? (
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Event</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Details</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Time</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {analytics.recentEvents.map((event) => (
                      <tr key={event.id}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-gray-900">{event.eventType}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-500">{event.details}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {new Date(event.timestamp).toLocaleString()}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <div className="py-8 text-center text-gray-500">
                No recent activity
              </div>
            )}
          </div>
        </>
      )}
      
      {activeTab === 'subscribers' && (
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold">Subscribers</h2>
            <div className="flex space-x-2">
              <button 
                onClick={handleExportCSV}
                className="inline-flex items-center px-3 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
              >
                <FiDownload className="mr-2" />
                Export CSV
              </button>
              
              <button 
                onClick={handleSendEmail}
                className="inline-flex items-center px-3 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700"
              >
                <FiMail className="mr-2" />
                Email All
              </button>
            </div>
          </div>
          
          <EntriesTable 
            entries={entries} 
            waitlistId={params.id} 
            onRefresh={fetchEntries} 
          />
        </div>
      )}
      
      {activeTab === 'widget' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">Widget Preview</h2>
            <WidgetPreview waitlist={waitlist} />
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">Embed Code</h2>
            <div className="mb-4">
              <p className="text-sm text-gray-600 mb-2">
                Copy and paste this code into your website to embed the waitlist widget.
              </p>
              <div className="bg-gray-50 p-4 rounded-md">
                <pre className="text-sm overflow-x-auto">
                  {`<script src="${window.location.origin}/api/widget/${params.id}" async></script>
<div id="waitlist-js" data-waitlist-id="${params.id}"></div>`}
                </pre>
              </div>
              <button 
                onClick={() => {
                  const code = `<script src="${window.location.origin}/api/widget/${params.id}" async></script>\n<div id="waitlist-js" data-waitlist-id="${params.id}"></div>`;
                  navigator.clipboard.writeText(code);
                  alert('Code copied to clipboard!');
                }}
                className="mt-2 inline-flex items-center px-3 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
              >
                Copy Code
              </button>
            </div>
            
            <div>
              <h3 className="font-medium mb-2">Direct Link</h3>
              <p className="text-sm text-gray-600 mb-2">
                Share this link directly with your users.
              </p>
              <div className="flex">
                <input 
                  type="text" 
                  readOnly 
                  value={`${window.location.origin}/w/${params.id}`}
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-l-md focus:ring-primary-500 focus:border-primary-500"
                />
                <button 
                  onClick={handleCopyLink}
                  className="inline-flex items-center px-3 py-2 border border-l-0 border-gray-300 rounded-r-md text-sm font-medium text-gray-700 bg-gray-50 hover:bg-gray-100"
                >
                  Copy
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
