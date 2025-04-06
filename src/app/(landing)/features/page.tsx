'use client';

import React from 'react';
import PageHeader from '@/components/PageHeader';
import Features from '@/components/Features';
import CTA from '@/components/CTA';
import { motion } from 'framer-motion';
import { FiBarChart2, FiUsers, FiLayers, FiZap, FiTarget, FiShuffle } from 'react-icons/fi';

const featureDetailsWithIcons = [
  {
    icon: <FiBarChart2 className="w-10 h-10" />,
    title: 'Smart Analytics Dashboard',
    description: 'Gain deep insights into your waitlist performance with real-time metrics, conversion tracking, and growth forecasting. Our analytics dashboard provides comprehensive data visualization, custom reports, and actionable insights to help you optimize your waitlist strategy.',
    image: '/images/analytics-dashboard.jpg'
  },
  {
    icon: <FiUsers className="w-10 h-10" />,
    title: 'Viral Growth Mechanics',
    description: 'Turn waitlist members into advocates with our multi-tier referral system, social challenges, and leaderboards. Our viral growth tools incentivize sharing, track referral sources, and reward your most active promoters, helping you achieve exponential growth without additional marketing spend.',
    image: '/images/viral-growth.jpg'
  },
  {
    icon: <FiLayers className="w-10 h-10" />,
    title: 'Intuitive Widget Builder',
    description: 'Create stunning, conversion-optimized waitlist forms with our drag-and-drop builder. Choose from dozens of templates or build your own custom design. Our widget builder includes advanced styling options, custom fields, and responsive design to ensure your waitlist looks perfect on any device.',
    image: '/images/widget-builder.jpg'
  },
  {
    icon: <FiZap className="w-10 h-10" />,
    title: 'AI-Powered Engagement',
    description: 'Leverage machine learning to predict which members are most likely to convert and automatically personalize their experience. Our AI analyzes user behavior, engagement patterns, and demographic data to help you focus your efforts on high-value prospects and deliver targeted messaging.',
    image: '/images/ai-engagement.jpg'
  },
  {
    icon: <FiTarget className="w-10 h-10" />,
    title: 'Advanced Segmentation',
    description: 'Group waitlist members by source, behavior, or custom attributes to deliver targeted messaging and experiences. Our segmentation tools allow you to create dynamic groups based on any data point, enabling personalized communication strategies that drive higher engagement and conversion rates.',
    image: '/images/segmentation.jpg'
  },
  {
    icon: <FiShuffle className="w-10 h-10" />,
    title: 'A/B Testing Engine',
    description: 'Optimize every aspect of your waitlist with our built-in testing tools for messaging, design, and incentives. Our A/B testing engine allows you to run controlled experiments, measure statistical significance, and automatically implement winning variations to continuously improve performance.',
    image: '/images/ab-testing.jpg'
  }
];

const FeaturesPage = () => {
  return (
    <>
      <PageHeader
        title="Powerful Features to Supercharge Your Waitlist"
        subtitle="Discover the tools and capabilities that make Waitlist.js the most comprehensive waitlist management platform on the market."
      />

      <Features />

      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="mb-4">Detailed <span className="gradient-text">Feature Breakdown</span></h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Explore the powerful capabilities that make Waitlist.js the preferred choice for businesses of all sizes.
            </p>
          </div>

          <div className="space-y-24">
            {featureDetailsWithIcons.map((feature, index) => (
              <motion.div
                key={index}
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5 }}
              >
                <div className="lg:w-1/2">
                  <div className="flex items-start mb-4">
                    <div className="rounded-full bg-primary-100 p-3 w-16 h-16 flex items-center justify-center text-primary-600 mr-4">
                      {feature.icon}
                    </div>
                    <h3 className="text-2xl font-bold mt-3">{feature.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-6">{feature.description}</p>
                  <ul className="space-y-2">
                    {[1, 2, 3].map((item) => (
                      <li key={item} className="flex items-start">
                        <svg className="w-5 h-5 text-primary-600 mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span className="text-gray-700">Feature benefit example {item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="lg:w-1/2 bg-white p-6 rounded-xl shadow-md border border-gray-100">
                  <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
                    <p className="text-gray-400">{feature.title} visualization</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
};

export default FeaturesPage;
