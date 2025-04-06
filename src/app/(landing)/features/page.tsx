'use client';

import React from 'react';
import PageHeader from '@/components/PageHeader';
import Features from '@/components/Features';
import CTA from '@/components/CTA';
import { motion } from 'framer-motion';
import { FiBarChart2, FiUsers, FiLayers, FiZap, FiTarget, FiShuffle, FiSmartphone, FiCode, FiMessageCircle, FiShield } from 'react-icons/fi';
import { featuresDetails } from '@/constants';

// Map the icon names from constants to actual icon components
const getIconComponent = (iconName: string, className: string) => {
  const icons: Record<string, JSX.Element> = {
    BarChart2: <FiBarChart2 className={className} />,
    Users: <FiUsers className={className} />,
    Layers: <FiLayers className={className} />,
    Shuffle: <FiShuffle className={className} />,
    Target: <FiTarget className={className} />,
    Zap: <FiZap className={className} />,
    Smartphone: <FiSmartphone className={className} />,
    Code: <FiCode className={className} />,
    MessageCircle: <FiMessageCircle className={className} />,
    Shield: <FiShield className={className} />
  };

  return icons[iconName] || <FiBarChart2 className={className} />;
};

// Transform the features details to include the icon component
const featureDetailsWithIcons = featuresDetails.map(feature => ({
  ...feature,
  icon: getIconComponent(feature.icon, "w-10 h-10")
}));

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
