'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface PageHeaderProps {
  title: string;
  subtitle: string;
  gradient?: boolean;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, subtitle, gradient = true }) => {
  return (
    <section className="bg-white py-20 border-b border-gray-100">
      <div className="container-custom">
        <motion.div 
          className="text-center max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className={`mb-6 ${gradient ? 'gradient-text' : ''}`}>
            {title}
          </h1>
          <p className="text-gray-600 text-xl">
            {subtitle}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default PageHeader;
