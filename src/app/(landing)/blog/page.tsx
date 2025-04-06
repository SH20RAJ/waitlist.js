'use client';

import React, { useState } from 'react';
import PageHeader from '@/components/PageHeader';
import { motion } from 'framer-motion';
import { FiSearch, FiCalendar, FiUser, FiTag, FiArrowRight } from 'react-icons/fi';

const blogCategories = [
  "All",
  "Product Updates",
  "Case Studies",
  "Best Practices",
  "Growth Strategies",
  "Industry Insights"
];

const blogPosts = [
  {
    title: "How to Increase Waitlist Conversion by 300%",
    excerpt: "Learn the proven strategies that helped our customers triple their waitlist conversion rates and maximize their product launches.",
    category: "Best Practices",
    author: "Sarah Johnson",
    date: "April 5, 2025",
    image: "/images/blog/waitlist-conversion.jpg",
    slug: "increase-waitlist-conversion"
  },
  {
    title: "Introducing AI-Powered Engagement Scoring",
    excerpt: "We're excited to announce our new AI-powered engagement scoring feature that helps you identify your most valuable waitlist members.",
    category: "Product Updates",
    author: "Michael Chen",
    date: "March 28, 2025",
    image: "/images/blog/ai-engagement.jpg",
    slug: "ai-powered-engagement-scoring"
  },
  {
    title: "How TechNova Generated 50,000 Waitlist Signups in 30 Days",
    excerpt: "A detailed case study of how TechNova used Waitlist.js to create a viral referral campaign that resulted in 50,000 signups.",
    category: "Case Studies",
    author: "Emily Rodriguez",
    date: "March 15, 2025",
    image: "/images/blog/technova-case-study.jpg",
    slug: "technova-case-study"
  },
  {
    title: "The Psychology of Waitlists: Why Exclusivity Drives Demand",
    excerpt: "Explore the psychological principles behind successful waitlists and how to leverage them for your product launch.",
    category: "Industry Insights",
    author: "Dr. James Wilson",
    date: "March 8, 2025",
    image: "/images/blog/psychology-waitlists.jpg",
    slug: "psychology-of-waitlists"
  },
  {
    title: "7 Waitlist Referral Incentives That Actually Work",
    excerpt: "Discover the most effective referral incentives that motivate your waitlist members to share with their network.",
    category: "Growth Strategies",
    author: "Alex Thompson",
    date: "February 27, 2025",
    image: "/images/blog/referral-incentives.jpg",
    slug: "referral-incentives"
  },
  {
    title: "Waitlist.js 2.0: A Complete Platform Redesign",
    excerpt: "We've completely redesigned our platform with a focus on user experience, performance, and new features. Here's what's new.",
    category: "Product Updates",
    author: "Lisa Park",
    date: "February 15, 2025",
    image: "/images/blog/platform-redesign.jpg",
    slug: "waitlistjs-2-0"
  }
];

const featuredPost = {
  title: "The Ultimate Guide to Pre-Launch Marketing with Waitlists",
  excerpt: "A comprehensive guide to using waitlists as a powerful pre-launch marketing tool to build anticipation, gather feedback, and ensure a successful product launch.",
  category: "Best Practices",
  author: "Jennifer Williams",
  date: "April 10, 2025",
  image: "/images/blog/pre-launch-marketing.jpg",
  slug: "pre-launch-marketing-guide"
};

const BlogPage = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  
  const filteredPosts = activeCategory === "All" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory);
  
  return (
    <>
      <PageHeader 
        title="Blog"
        subtitle="Insights, strategies, and best practices for optimizing your waitlist and maximizing conversions."
      />
      
      <section className="py-20 bg-white">
        <div className="container-custom">
          {/* Featured Post */}
          <motion.div 
            className="bg-gray-50 rounded-xl overflow-hidden mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex flex-col lg:flex-row">
              <div className="lg:w-1/2 bg-gray-200 h-64 lg:h-auto">
                <div className="w-full h-full flex items-center justify-center text-gray-400">
                  Featured Image
                </div>
              </div>
              <div className="lg:w-1/2 p-8">
                <div className="flex items-center mb-4">
                  <span className="bg-primary-100 text-primary-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    {featuredPost.category}
                  </span>
                  <span className="mx-2 text-gray-300">•</span>
                  <span className="text-gray-500 text-sm flex items-center">
                    <FiCalendar className="mr-1" size={14} />
                    {featuredPost.date}
                  </span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  {featuredPost.title}
                </h2>
                <p className="text-gray-600 mb-6">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-gray-300 mr-3"></div>
                    <span className="font-medium">{featuredPost.author}</span>
                  </div>
                  <a href={`/blog/${featuredPost.slug}`} className="text-primary-600 font-medium hover:text-primary-700 flex items-center">
                    Read Article
                    <FiArrowRight className="ml-2" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Search and Categories */}
          <div className="mb-12">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="relative w-full md:w-auto md:min-w-[300px]">
                <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                <input 
                  type="text" 
                  placeholder="Search articles..." 
                  className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none"
                />
              </div>
              <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                {blogCategories.map((category, index) => (
                  <button
                    key={index}
                    className={`px-4 py-2 rounded-full text-sm font-medium ${
                      activeCategory === category
                        ? 'bg-primary-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                    onClick={() => setActiveCategory(category)}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
          
          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <motion.div 
                key={index} 
                className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <div className="h-48 bg-gray-200 flex items-center justify-center text-gray-400">
                  Blog Image
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <span className="bg-primary-100 text-primary-800 text-xs font-medium px-2.5 py-0.5 rounded">
                      {post.category}
                    </span>
                    <span className="mx-2 text-gray-300">•</span>
                    <span className="text-gray-500 text-xs flex items-center">
                      <FiCalendar className="mr-1" size={12} />
                      {post.date}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-3">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-gray-300 mr-2"></div>
                      <span className="text-sm font-medium">{post.author}</span>
                    </div>
                    <a href={`/blog/${post.slug}`} className="text-primary-600 font-medium hover:text-primary-700 text-sm">
                      Read More
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Pagination */}
          <div className="mt-12 flex justify-center">
            <nav className="flex items-center space-x-2">
              <a href="#" className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50">
                Previous
              </a>
              <a href="#" className="px-4 py-2 border border-gray-300 rounded-md bg-primary-600 text-white">
                1
              </a>
              <a href="#" className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50">
                2
              </a>
              <a href="#" className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50">
                3
              </a>
              <span className="px-4 py-2 text-gray-700">...</span>
              <a href="#" className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50">
                8
              </a>
              <a href="#" className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50">
                Next
              </a>
            </nav>
          </div>
        </div>
      </section>
      
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="mb-4">Subscribe to Our <span className="gradient-text">Newsletter</span></h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Get the latest insights, tips, and best practices for waitlist optimization delivered straight to your inbox.
            </p>
          </div>
          
          <div className="max-w-xl mx-auto">
            <form className="flex flex-col md:flex-row gap-4">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-grow px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none"
              />
              <button type="submit" className="btn btn-primary whitespace-nowrap">
                Subscribe
              </button>
            </form>
            <p className="text-gray-500 text-sm mt-3 text-center">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogPage;
