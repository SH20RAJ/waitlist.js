'use client';

import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

type StatsCardProps = {
  title: string;
  value: string;
  icon: ReactNode;
  trend?: string;
  color: 'primary' | 'success' | 'warning' | 'info' | 'danger';
};

const colorClasses = {
  primary: {
    bg: 'bg-primary-50',
    text: 'text-primary-600',
    iconBg: 'bg-primary-100'
  },
  success: {
    bg: 'bg-green-50',
    text: 'text-green-600',
    iconBg: 'bg-green-100'
  },
  warning: {
    bg: 'bg-yellow-50',
    text: 'text-yellow-600',
    iconBg: 'bg-yellow-100'
  },
  info: {
    bg: 'bg-blue-50',
    text: 'text-blue-600',
    iconBg: 'bg-blue-100'
  },
  danger: {
    bg: 'bg-red-50',
    text: 'text-red-600',
    iconBg: 'bg-red-100'
  }
};

export default function StatsCard({ title, value, icon, trend, color }: StatsCardProps) {
  const colors = colorClasses[color];
  
  return (
    <motion.div 
      className={`bg-white rounded-lg shadow-md p-6 border-l-4 ${colors.text.replace('text', 'border')}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-sm font-medium text-gray-500 mb-1">{title}</h3>
          <p className="text-3xl font-bold">{value}</p>
          {trend && (
            <p className="text-xs text-gray-500 mt-1">{trend}</p>
          )}
        </div>
        <div className={`rounded-full ${colors.iconBg} p-3 ${colors.text}`}>
          {icon}
        </div>
      </div>
    </motion.div>
  );
}
