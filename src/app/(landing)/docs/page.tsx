'use client';

import React from 'react';
import PageHeader from '@/components/PageHeader';
import { motion } from 'framer-motion';
import { FiSearch, FiBook, FiCode, FiVideo, FiHelpCircle, FiFileText } from 'react-icons/fi';

const docCategories = [
  {
    icon: <FiBook className="w-6 h-6" />,
    title: "Getting Started",
    description: "Learn the basics of Waitlist.js and set up your first waitlist.",
    links: [
      { title: "Quick Start Guide", url: "/docs/quick-start" },
      { title: "Creating Your First Waitlist", url: "/docs/first-waitlist" },
      { title: "Dashboard Overview", url: "/docs/dashboard" },
      { title: "Widget Customization", url: "/docs/widget-customization" }
    ]
  },
  {
    icon: <FiCode className="w-6 h-6" />,
    title: "Developer Guides",
    description: "Technical documentation for developers integrating Waitlist.js.",
    links: [
      { title: "API Reference", url: "/api" },
      { title: "Webhooks", url: "/docs/webhooks" },
      { title: "JavaScript SDK", url: "/docs/js-sdk" },
      { title: "Custom Integrations", url: "/docs/custom-integrations" }
    ]
  },
  {
    icon: <FiVideo className="w-6 h-6" />,
    title: "Video Tutorials",
    description: "Step-by-step video guides for using Waitlist.js features.",
    links: [
      { title: "Platform Overview", url: "/docs/videos/overview" },
      { title: "Advanced Widget Configuration", url: "/docs/videos/widget-config" },
      { title: "Analytics Deep Dive", url: "/docs/videos/analytics" },
      { title: "Referral System Setup", url: "/docs/videos/referrals" }
    ]
  },
  {
    icon: <FiHelpCircle className="w-6 h-6" />,
    title: "Troubleshooting",
    description: "Solutions to common issues and frequently asked questions.",
    links: [
      { title: "Common Issues", url: "/docs/troubleshooting" },
      { title: "FAQ", url: "/docs/faq" },
      { title: "Error Messages", url: "/docs/errors" },
      { title: "Contact Support", url: "/contact" }
    ]
  },
  {
    icon: <FiFileText className="w-6 h-6" />,
    title: "Best Practices",
    description: "Learn how to get the most out of Waitlist.js for your business.",
    links: [
      { title: "Waitlist Optimization", url: "/docs/optimization" },
      { title: "Conversion Strategies", url: "/docs/conversion" },
      { title: "Engagement Tactics", url: "/docs/engagement" },
      { title: "Case Studies", url: "/docs/case-studies" }
    ]
  }
];

const popularArticles = [
  { title: "Setting Up Your First Waitlist", url: "/docs/first-waitlist" },
  { title: "Customizing Your Widget", url: "/docs/widget-customization" },
  { title: "Implementing the Referral System", url: "/docs/referral-system" },
  { title: "Understanding Analytics", url: "/docs/analytics" },
  { title: "API Authentication", url: "/api/authentication" },
  { title: "Webhook Integration", url: "/docs/webhooks" }
];

const DocsPage = () => {
  return (
    <>
      <PageHeader 
        title="Documentation"
        subtitle="Comprehensive guides and resources to help you get the most out of Waitlist.js."
      />
      
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto mb-16">
            <div className="relative">
              <FiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input 
                type="text" 
                placeholder="Search documentation..." 
                className="w-full pl-12 pr-4 py-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none text-lg"
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {docCategories.map((category, index) => (
              <motion.div 
                key={index} 
                className="bg-white rounded-xl p-6 shadow-md border border-gray-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <div className="rounded-full bg-primary-100 p-3 w-12 h-12 flex items-center justify-center text-primary-600 mb-4">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{category.title}</h3>
                <p className="text-gray-600 mb-4">{category.description}</p>
                <ul className="space-y-2">
                  {category.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a href={link.url} className="text-primary-600 hover:text-primary-700 font-medium flex items-center">
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                        </svg>
                        {link.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="mb-4">Popular <span className="gradient-text">Articles</span></h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Our most frequently accessed documentation to help you get started quickly.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {popularArticles.map((article, index) => (
              <motion.a 
                key={index} 
                href={article.url}
                className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-md transition-shadow"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <h3 className="text-lg font-bold text-primary-600 mb-2">{article.title}</h3>
                <div className="flex items-center text-gray-500 text-sm">
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                  </svg>
                  Documentation
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="bg-gray-50 rounded-xl p-8 max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/3 flex justify-center">
                <div className="rounded-full bg-primary-100 p-6 w-24 h-24 flex items-center justify-center text-primary-600">
                  <FiHelpCircle size={40} />
                </div>
              </div>
              <div className="md:w-2/3">
                <h3 className="text-2xl font-bold mb-4">Need Additional Help?</h3>
                <p className="text-gray-600 mb-6">
                  Our support team is available to assist you with any questions or issues you may have.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a href="/contact" className="btn btn-primary">
                    Contact Support
                  </a>
                  <a href="/community" className="btn btn-outline">
                    Join Community
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DocsPage;
