'use client';

import React from 'react';
import PageHeader from '@/components/PageHeader';
import { motion } from 'framer-motion';
import { FiBook, FiArrowRight, FiDownload } from 'react-icons/fi';

const guides = [
  {
    title: "The Ultimate Waitlist Strategy Guide",
    description: "A comprehensive guide to creating, managing, and optimizing your waitlist for maximum impact and conversion.",
    category: "Strategy",
    level: "Beginner",
    duration: "15 min read",
    image: "/images/guides/waitlist-strategy.jpg",
    slug: "waitlist-strategy-guide"
  },
  {
    title: "Mastering Referral Programs for Viral Growth",
    description: "Learn how to design and implement a referral program that drives exponential growth for your waitlist.",
    category: "Growth",
    level: "Intermediate",
    duration: "12 min read",
    image: "/images/guides/referral-programs.jpg",
    slug: "referral-programs-guide"
  },
  {
    title: "A/B Testing Your Waitlist for Optimal Conversion",
    description: "Discover the most effective A/B testing strategies to optimize your waitlist conversion rates.",
    category: "Optimization",
    level: "Advanced",
    duration: "18 min read",
    image: "/images/guides/ab-testing.jpg",
    slug: "ab-testing-guide"
  },
  {
    title: "Creating Compelling Waitlist Messaging",
    description: "Learn how to craft messaging that resonates with your audience and drives waitlist signups.",
    category: "Copywriting",
    level: "Beginner",
    duration: "10 min read",
    image: "/images/guides/waitlist-messaging.jpg",
    slug: "waitlist-messaging-guide"
  },
  {
    title: "Segmentation Strategies for Personalized Engagement",
    description: "Discover how to segment your waitlist to deliver personalized experiences that increase engagement and conversion.",
    category: "Engagement",
    level: "Intermediate",
    duration: "14 min read",
    image: "/images/guides/segmentation-strategies.jpg",
    slug: "segmentation-guide"
  },
  {
    title: "Analyzing Waitlist Metrics That Matter",
    description: "Learn which metrics to track and how to use data to optimize your waitlist performance.",
    category: "Analytics",
    level: "Intermediate",
    duration: "16 min read",
    image: "/images/guides/waitlist-metrics.jpg",
    slug: "waitlist-metrics-guide"
  }
];

const featuredGuides = [
  {
    title: "Product Launch Playbook",
    description: "A step-by-step guide to planning and executing a successful product launch using waitlists.",
    category: "Strategy",
    format: "PDF",
    pages: 45,
    image: "/images/guides/product-launch-playbook.jpg",
    slug: "product-launch-playbook"
  },
  {
    title: "Waitlist Conversion Blueprint",
    description: "Proven strategies and tactics to convert waitlist members into paying customers.",
    category: "Conversion",
    format: "PDF",
    pages: 38,
    image: "/images/guides/conversion-blueprint.jpg",
    slug: "conversion-blueprint"
  },
  {
    title: "The Viral Waitlist Formula",
    description: "How to create a viral loop that turns your waitlist into a powerful growth engine.",
    category: "Growth",
    format: "PDF",
    pages: 52,
    image: "/images/guides/viral-waitlist-formula.jpg",
    slug: "viral-waitlist-formula"
  }
];

const GuidesPage = () => {
  return (
    <>
      <PageHeader 
        title="Guides & Resources"
        subtitle="Comprehensive guides, templates, and resources to help you create and optimize successful waitlists."
      />
      
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="mb-4">Featured <span className="gradient-text">Resources</span></h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Download our most popular guides and resources to level up your waitlist strategy.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredGuides.map((guide, index) => (
              <motion.div 
                key={index} 
                className="bg-gray-50 rounded-xl overflow-hidden shadow-md"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <div className="h-48 bg-gray-200 flex items-center justify-center text-gray-400">
                  Resource Cover
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <span className="bg-primary-100 text-primary-800 text-xs font-medium px-2.5 py-0.5 rounded">
                      {guide.category}
                    </span>
                    <span className="mx-2 text-gray-300">•</span>
                    <span className="text-gray-500 text-xs">
                      {guide.format} • {guide.pages} pages
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-3">
                    {guide.title}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {guide.description}
                  </p>
                  <a 
                    href={`/guides/${guide.slug}`} 
                    className="btn btn-primary w-full flex items-center justify-center"
                  >
                    <FiDownload className="mr-2" />
                    Download Free
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="mb-4">Waitlist <span className="gradient-text">Guides</span></h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Explore our collection of in-depth guides to help you master every aspect of waitlist management.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {guides.map((guide, index) => (
              <motion.div 
                key={index} 
                className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <div className="h-40 bg-gray-200 flex items-center justify-center text-gray-400">
                  Guide Image
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <span className="bg-primary-100 text-primary-800 text-xs font-medium px-2.5 py-0.5 rounded">
                      {guide.category}
                    </span>
                    <span className="mx-2 text-gray-300">•</span>
                    <span className="text-gray-500 text-xs">
                      {guide.level} • {guide.duration}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-3">
                    {guide.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {guide.description}
                  </p>
                  <a 
                    href={`/guides/${guide.slug}`} 
                    className="text-primary-600 font-medium hover:text-primary-700 flex items-center"
                  >
                    Read Guide
                    <FiArrowRight className="ml-2" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <a href="/guides/all" className="btn btn-outline">
              View All Guides
            </a>
          </div>
        </div>
      </section>
      
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="mb-4">Templates & <span className="gradient-text">Tools</span></h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Ready-to-use templates and tools to streamline your waitlist strategy and implementation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Waitlist Strategy Template", format: "Google Doc", icon: <FiBook size={24} /> },
              { title: "Referral Program Calculator", format: "Google Sheet", icon: <FiBook size={24} /> },
              { title: "Email Sequence Templates", format: "PDF", icon: <FiBook size={24} /> },
              { title: "Waitlist Analytics Dashboard", format: "Google Data Studio", icon: <FiBook size={24} /> },
              { title: "A/B Testing Framework", format: "PDF", icon: <FiBook size={24} /> },
              { title: "Conversion Rate Optimizer", format: "Google Sheet", icon: <FiBook size={24} /> },
              { title: "Waitlist Launch Checklist", format: "PDF", icon: <FiBook size={24} /> },
              { title: "Social Media Announcement Kit", format: "ZIP", icon: <FiBook size={24} /> }
            ].map((template, index) => (
              <motion.div 
                key={index} 
                className="bg-gray-50 rounded-lg p-6 border border-gray-100"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <div className="rounded-full bg-primary-100 p-3 w-12 h-12 flex items-center justify-center text-primary-600 mb-4">
                  {template.icon}
                </div>
                <h3 className="text-lg font-bold mb-1">{template.title}</h3>
                <p className="text-gray-500 text-sm mb-4">{template.format}</p>
                <a 
                  href="#" 
                  className="text-primary-600 font-medium hover:text-primary-700 text-sm flex items-center"
                >
                  Download
                  <FiDownload className="ml-2" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-20 bg-primary-900 text-white">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Need Custom Guidance?
            </h2>
            <p className="text-xl mb-10 text-white/90">
              Our team of waitlist experts is available to provide personalized advice and strategies for your specific needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="btn bg-white text-primary-600 hover:bg-primary-50 text-lg px-8 py-4">
                Schedule Consultation
              </a>
              <a href="/enterprise" className="btn border-2 border-white text-white hover:bg-white/10 text-lg px-8 py-4">
                Learn About Enterprise
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default GuidesPage;
