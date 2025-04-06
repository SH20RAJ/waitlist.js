'use client';

import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

type EmptyStateProps = {
  title: string;
  description: string;
  buttonText: string;
  buttonAction: () => void;
  icon: ReactNode;
};

export default function EmptyState({ 
  title, 
  description, 
  buttonText, 
  buttonAction, 
  icon 
}: EmptyStateProps) {
  return (
    <motion.div 
      className="bg-gray-50 rounded-lg p-8 text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div 
        className="mx-auto w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center text-gray-500 mb-4"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {icon}
      </motion.div>
      
      <motion.h3 
        className="text-lg font-semibold mb-2"
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        {title}
      </motion.h3>
      
      <motion.p 
        className="text-gray-600 mb-6 max-w-md mx-auto"
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        {description}
      </motion.p>
      
      <motion.button 
        className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
        onClick={buttonAction}
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {buttonText}
      </motion.button>
    </motion.div>
  );
}
