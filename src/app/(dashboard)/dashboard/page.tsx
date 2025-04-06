'use client';

import React, { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { redirect, useRouter } from 'next/navigation';
import Link from 'next/link';
import { FiPlus, FiBarChart2, FiUsers, FiTrendingUp, FiActivity, FiEye, FiUserPlus } from 'react-icons/fi';
import { motion } from 'framer-motion';

// Dashboard components
import DashboardSkeleton from '@/components/dashboard/DashboardSkeleton';
import WaitlistCard from '@/components/dashboard/WaitlistCard';
import EmptyState from '@/components/dashboard/EmptyState';
import StatsCard from '@/components/dashboard/StatsCard';
import LineChart from '@/components/dashboard/LineChart';

// Types
type Waitlist = {
  id: string;
  name: string;
  description: string;
  isActive: boolean;
  totalSignups: number;
  conversionRate: string;
  createdAt: number;
};

export default function DashboardPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [waitlists, setWaitlists] = useState<Waitlist[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [stats, setStats] = useState({
    totalWaitlists: 0,
    totalSubscribers: 0,
    averageConversionRate: '0%',
    totalReferrals: 0
  });
  const [signupTrend, setSignupTrend] = useState<{date: string; count: number}[]>([]);

  useEffect(() => {
    if (status === 'authenticated') {
      fetchWaitlists();
    }
  }, [status]);

  const fetchWaitlists = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/waitlists');

      if (!response.ok) {
        throw new Error('Failed to fetch waitlists');
      }

      const data = await response.json();
      setWaitlists(data);

      // Calculate stats
      const totalWaitlists = data.length;
      const totalSubscribers = data.reduce((sum: number, waitlist: Waitlist) => sum + waitlist.totalSignups, 0);

      // Calculate average conversion rate
      let totalConversionRate = 0;
      data.forEach((waitlist: Waitlist) => {
        totalConversionRate += parseFloat(waitlist.conversionRate || '0');
      });
      const averageConversionRate = totalWaitlists > 0 ?
        `${(totalConversionRate / totalWaitlists).toFixed(1)}%` : '0%';

      setStats({
        totalWaitlists,
        totalSubscribers,
        averageConversionRate,
        totalReferrals: 0 // We'll need to fetch this separately
      });

      // Generate mock signup trend data for now
      // In a real app, this would come from the API
      const mockTrendData = generateMockTrendData();
      setSignupTrend(mockTrendData);

      setLoading(false);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
      setLoading(false);
    }
  };

  const generateMockTrendData = () => {
    const data = [];
    const now = new Date();

    for (let i = 30; i >= 0; i--) {
      const date = new Date(now);
      date.setDate(date.getDate() - i);
      const dateStr = date.toISOString().split('T')[0];

      // Generate a random count between 0 and 20
      const count = Math.floor(Math.random() * 20);

      data.push({ date: dateStr, count });
    }

    return data;
  };

  const handleCreateWaitlist = () => {
    router.push('/dashboard/waitlists/new');
  };

  if (status === 'loading') {
    return <DashboardSkeleton />;
  }

  if (status === 'unauthenticated') {
    redirect('/login');
  }

  return (
    <div className="p-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <p className="text-gray-600">Welcome back, {session?.user?.name || 'User'}!</p>
        </div>

        <button
          onClick={handleCreateWaitlist}
          className="mt-4 md:mt-0 btn btn-primary flex items-center"
        >
          <FiPlus className="mr-2" />
          Create New Waitlist
        </button>
      </div>

      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="bg-white rounded-lg shadow-md p-6 animate-pulse">
              <div className="h-4 bg-gray-200 rounded w-1/2 mb-4"></div>
              <div className="h-8 bg-gray-200 rounded w-1/4"></div>
            </div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatsCard
            title="Total Waitlists"
            value={stats.totalWaitlists.toString()}
            icon={<FiActivity className="w-6 h-6" />}
            trend="+2 this month"
            color="primary"
          />

          <StatsCard
            title="Total Subscribers"
            value={stats.totalSubscribers.toString()}
            icon={<FiUsers className="w-6 h-6" />}
            trend="+124 this week"
            color="success"
          />

          <StatsCard
            title="Conversion Rate"
            value={stats.averageConversionRate}
            icon={<FiTrendingUp className="w-6 h-6" />}
            trend="+1.2% from last month"
            color="warning"
          />

          <StatsCard
            title="Total Referrals"
            value={stats.totalReferrals.toString()}
            icon={<FiUserPlus className="w-6 h-6" />}
            trend="+18 this week"
            color="info"
          />
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="lg:col-span-2 bg-white rounded-lg shadow-md p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold">Signup Trend</h2>
            <select className="border border-gray-300 rounded-md px-3 py-1 text-sm">
              <option value="30">Last 30 days</option>
              <option value="7">Last 7 days</option>
              <option value="90">Last 90 days</option>
            </select>
          </div>

          {loading ? (
            <div className="h-64 bg-gray-100 rounded-lg animate-pulse flex items-center justify-center">
              <FiBarChart2 className="w-12 h-12 text-gray-300" />
            </div>
          ) : (
            <div className="h-64">
              <LineChart data={signupTrend} />
            </div>
          )}
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>

          {loading ? (
            <div className="space-y-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="flex items-center animate-pulse">
                  <div className="w-10 h-10 rounded-full bg-gray-200 mr-3"></div>
                  <div className="flex-1">
                    <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                    <div className="h-3 bg-gray-200 rounded w-1/2"></div>
                  </div>
                </div>
              ))}
            </div>
          ) : waitlists.length > 0 ? (
            <div className="space-y-4">
              <div className="flex items-center p-3 bg-green-50 rounded-lg">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mr-3">
                  <FiUserPlus className="text-green-600" />
                </div>
                <div>
                  <p className="font-medium">New subscriber</p>
                  <p className="text-sm text-gray-600">john.doe@example.com joined {waitlists[0].name}</p>
                  <p className="text-xs text-gray-500">2 minutes ago</p>
                </div>
              </div>

              <div className="flex items-center p-3 bg-blue-50 rounded-lg">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                  <FiEye className="text-blue-600" />
                </div>
                <div>
                  <p className="font-medium">Widget viewed</p>
                  <p className="text-sm text-gray-600">Your {waitlists[0].name} widget was viewed 24 times</p>
                  <p className="text-xs text-gray-500">1 hour ago</p>
                </div>
              </div>

              <div className="flex items-center p-3 bg-purple-50 rounded-lg">
                <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center mr-3">
                  <FiTrendingUp className="text-purple-600" />
                </div>
                <div>
                  <p className="font-medium">Conversion milestone</p>
                  <p className="text-sm text-gray-600">{waitlists[0].name} reached 10% conversion rate</p>
                  <p className="text-xs text-gray-500">Yesterday</p>
                </div>
              </div>
            </div>
          ) : (
            <p className="text-gray-500 text-center py-8">No recent activity</p>
          )}
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">Your Waitlists</h2>
          <button
            onClick={handleCreateWaitlist}
            className="btn btn-primary flex items-center"
          >
            <FiPlus className="mr-2" />
            Create New Waitlist
          </button>
        </div>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="border border-gray-200 rounded-lg p-6 animate-pulse">
                <div className="h-6 bg-gray-200 rounded w-3/4 mb-4"></div>
                <div className="h-4 bg-gray-200 rounded w-full mb-4"></div>
                <div className="h-4 bg-gray-200 rounded w-1/2 mb-6"></div>
                <div className="flex justify-between">
                  <div className="h-8 bg-gray-200 rounded w-1/4"></div>
                  <div className="h-8 bg-gray-200 rounded w-1/4"></div>
                </div>
              </div>
            ))}
          </div>
        ) : waitlists.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {waitlists.map((waitlist) => (
              <WaitlistCard key={waitlist.id} waitlist={waitlist} />
            ))}
          </div>
        ) : (
          <EmptyState
            title="No waitlists yet"
            description="Create your first waitlist to start collecting subscribers and growing your audience."
            buttonText="Create Your First Waitlist"
            buttonAction={handleCreateWaitlist}
            icon={<FiUsers className="w-12 h-12" />}
          />
        )}
      </div>
    </div>
  );
}
