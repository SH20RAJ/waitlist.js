'use client';

import React, { useState } from 'react';
import PageHeader from '@/components/PageHeader';
import { motion } from 'framer-motion';
import { FiArrowRight, FiDownload, FiPlay } from 'react-icons/fi';

const industries = [
  "All",
  "SaaS",
  "E-commerce",
  "Fintech",
  "Healthcare",
  "Education",
  "Enterprise"
];

const caseStudies = [
  {
    title: "How TechNova Generated 50,000 Waitlist Signups in 30 Days",
    company: "TechNova",
    industry: "SaaS",
    results: "50,000 signups, 32% referral rate, 28% conversion to paid",
    image: "/images/case-studies/technova.jpg",
    slug: "technova-case-study"
  },
  {
    title: "LaunchPad's Viral Waitlist Strategy That Drove 3x Growth",
    company: "LaunchPad",
    industry: "SaaS",
    results: "120,000 signups, 45% referral rate, 3x growth in 60 days",
    image: "/images/case-studies/launchpad.jpg",
    slug: "launchpad-case-study"
  },
  {
    title: "How FashionFwd Used Waitlists to Create Buzz for Product Drops",
    company: "FashionFwd",
    industry: "E-commerce",
    results: "200% increase in sales, 15,000 waitlist signups per drop",
    image: "/images/case-studies/fashionfwd.jpg",
    slug: "fashionfwd-case-study"
  },
  {
    title: "SecurePay's Enterprise Waitlist Strategy for New Feature Rollouts",
    company: "SecurePay",
    industry: "Fintech",
    results: "98% feature adoption, 45% reduction in support tickets",
    image: "/images/case-studies/securepay.jpg",
    slug: "securepay-case-study"
  },
  {
    title: "HealthConnect's Waitlist Approach for Limited Service Availability",
    company: "HealthConnect",
    industry: "Healthcare",
    results: "85% reduction in no-shows, 40% increase in patient satisfaction",
    image: "/images/case-studies/healthconnect.jpg",
    slug: "healthconnect-case-study"
  },
  {
    title: "EduTech's Strategy for Course Launches Using Waitlist.js",
    company: "EduTech",
    industry: "Education",
    results: "10,000+ course signups, 92% student satisfaction rate",
    image: "/images/case-studies/edutech.jpg",
    slug: "edutech-case-study"
  },
  {
    title: "Enterprise Solutions Inc's Multi-Product Waitlist Management",
    company: "Enterprise Solutions Inc",
    industry: "Enterprise",
    results: "Managed 12 product waitlists, 65% increase in lead quality",
    image: "/images/case-studies/enterprise-solutions.jpg",
    slug: "enterprise-solutions-case-study"
  },
  {
    title: "GreenGrocer's Membership Waitlist That Drove 5x Growth",
    company: "GreenGrocer",
    industry: "E-commerce",
    results: "25,000 membership signups, 78% conversion rate, 5x growth",
    image: "/images/case-studies/greengrocer.jpg",
    slug: "greengrocer-case-study"
  }
];

const featuredCaseStudy = {
  title: "How TechNova Generated 50,000 Waitlist Signups in 30 Days",
  company: "TechNova",
  industry: "SaaS",
  results: [
    "50,000 waitlist signups in 30 days",
    "32% of signups came from referrals",
    "28% conversion rate from waitlist to paid customers",
    "85% reduction in customer acquisition cost"
  ],
  quote: "Waitlist.js transformed our product launch strategy. The referral system and analytics tools helped us create a viral loop that drove exponential growth for our waitlist.",
  author: "Marcus Johnson, CMO at TechNova",
  image: "/images/case-studies/technova-featured.jpg",
  slug: "technova-case-study"
};

const testimonials = [
  {
    quote: "Waitlist.js helped us generate over 50,000 signups for our product launch, with 32% coming from referrals. The insights from their analytics helped us prioritize our feature roadmap based on actual user interest.",
    author: "Sarah Chen",
    position: "Founder & CEO at LaunchPad",
    company: "LaunchPad",
    image: "/images/testimonials/sarah-chen.jpg"
  },
  {
    quote: "We switched from a basic form to Waitlist.js and saw our conversion rate increase by 3x. The gamification elements created a viral loop we never expected.",
    author: "Marcus Johnson",
    position: "CMO at TechNova",
    company: "TechNova",
    image: "/images/testimonials/marcus-johnson.jpg"
  },
  {
    quote: "The enterprise features allowed us to manage waitlists for multiple product lines while maintaining our brand standards. The ROI has been incredible.",
    author: "Jennifer Williams",
    position: "Product Director at Enterprise Solutions Inc.",
    company: "Enterprise Solutions Inc.",
    image: "/images/testimonials/jennifer-williams.jpg"
  },
  {
    quote: "As a D2C brand, creating exclusivity is key to our strategy. Waitlist.js helped us build anticipation for our product drops and significantly increased our conversion rates.",
    author: "Alex Thompson",
    position: "Marketing Director at FashionFwd",
    company: "FashionFwd",
    image: "/images/testimonials/alex-thompson.jpg"
  }
];

const CustomersPage = () => {
  const [activeIndustry, setActiveIndustry] = useState("All");
  
  const filteredCaseStudies = activeIndustry === "All" 
    ? caseStudies 
    : caseStudies.filter(study => study.industry === activeIndustry);
  
  return (
    <>
      <PageHeader 
        title="Customer Success Stories"
        subtitle="Discover how businesses across industries use Waitlist.js to drive growth, engagement, and conversion."
      />
      
      <section className="py-20 bg-white">
        <div className="container-custom">
          {/* Featured Case Study */}
          <motion.div 
            className="bg-gray-50 rounded-xl overflow-hidden mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex flex-col lg:flex-row">
              <div className="lg:w-1/2 bg-gray-200 h-64 lg:h-auto">
                <div className="w-full h-full flex items-center justify-center text-gray-400">
                  Featured Case Study Image
                </div>
              </div>
              <div className="lg:w-1/2 p-8">
                <div className="flex items-center mb-4">
                  <span className="bg-primary-100 text-primary-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    {featuredCaseStudy.industry}
                  </span>
                  <span className="mx-2 text-gray-300">•</span>
                  <span className="text-gray-500 text-sm">
                    Case Study
                  </span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  {featuredCaseStudy.title}
                </h2>
                <div className="mb-6">
                  <h4 className="text-lg font-bold mb-2">Results:</h4>
                  <ul className="space-y-2">
                    {featuredCaseStudy.results.map((result, index) => (
                      <li key={index} className="flex items-start">
                        <svg className="w-5 h-5 text-green-500 mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span className="text-gray-700">{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-gray-300 mr-3"></div>
                    <div>
                      <p className="font-medium">{featuredCaseStudy.author.split(',')[0]}</p>
                      <p className="text-sm text-gray-500">{featuredCaseStudy.author.split(',')[1]}</p>
                    </div>
                  </div>
                  <a href={`/customers/${featuredCaseStudy.slug}`} className="btn btn-primary flex items-center">
                    Read Case Study
                    <FiArrowRight className="ml-2" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Industry Filter */}
          <div className="mb-12">
            <div className="flex flex-wrap gap-2 justify-center">
              {industries.map((industry, index) => (
                <button
                  key={index}
                  className={`px-4 py-2 rounded-full text-sm font-medium ${
                    activeIndustry === industry
                      ? 'bg-primary-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                  onClick={() => setActiveIndustry(industry)}
                >
                  {industry}
                </button>
              ))}
            </div>
          </div>
          
          {/* Case Studies Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCaseStudies.map((study, index) => (
              <motion.div 
                key={index} 
                className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <div className="h-48 bg-gray-200 flex items-center justify-center text-gray-400">
                  Case Study Image
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <span className="bg-primary-100 text-primary-800 text-xs font-medium px-2.5 py-0.5 rounded">
                      {study.industry}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-3">
                    {study.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    <span className="font-medium">Results:</span> {study.results}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">{study.company}</span>
                    <a href={`/customers/${study.slug}`} className="text-primary-600 font-medium hover:text-primary-700 flex items-center">
                      Read More
                      <FiArrowRight className="ml-1" size={14} />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="mb-4">What Our <span className="gradient-text">Customers Say</span></h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our customers have to say about Waitlist.js.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div 
                key={index} 
                className="bg-white rounded-xl p-6 shadow-md border border-gray-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <div className="mb-6">
                  <svg className="w-10 h-10 text-primary-500 mb-4" fill="currentColor" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H8c0-1.1.9-2 2-2V8zm18-2c-3.3 0-6 2.7-6 6v10h10V14h-6c0-1.1.9-2 2-2V6z" />
                  </svg>
                  <p className="text-gray-600 italic mb-4">{testimonial.quote}</p>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-gray-300 mr-4"></div>
                  <div>
                    <p className="font-bold">{testimonial.author}</p>
                    <p className="text-gray-500 text-sm">{testimonial.position}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="mb-4">Customer <span className="gradient-text">Resources</span></h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Download case studies, whitepapers, and other resources to learn how our customers achieve success with Waitlist.js.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "The Complete Guide to Waitlist Optimization", type: "Whitepaper", pages: 35 },
              { title: "TechNova Case Study: 50,000 Signups in 30 Days", type: "Case Study", pages: 12 },
              { title: "Waitlist ROI Calculator", type: "Tool", pages: null }
            ].map((resource, index) => (
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
                      {resource.type}
                    </span>
                    {resource.pages && (
                      <>
                        <span className="mx-2 text-gray-300">•</span>
                        <span className="text-gray-500 text-xs">
                          {resource.pages} pages
                        </span>
                      </>
                    )}
                  </div>
                  <h3 className="text-xl font-bold mb-6">
                    {resource.title}
                  </h3>
                  <a 
                    href="#" 
                    className="btn btn-primary w-full flex items-center justify-center"
                  >
                    <FiDownload className="mr-2" />
                    Download
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <a href="/resources" className="btn btn-outline">
              View All Resources
            </a>
          </div>
        </div>
      </section>
      
      <section className="py-20 bg-primary-900 text-white">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Join Our Success Stories?
            </h2>
            <p className="text-xl mb-10 text-white/90">
              Start creating exceptional waitlist experiences that drive growth and engagement for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/signup" className="btn bg-white text-primary-600 hover:bg-primary-50 text-lg px-8 py-4">
                Get Started Free
              </a>
              <a href="/demo" className="btn border-2 border-white text-white hover:bg-white/10 text-lg px-8 py-4 flex items-center justify-center">
                <FiPlay className="mr-2" />
                Watch Demo
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CustomersPage;
