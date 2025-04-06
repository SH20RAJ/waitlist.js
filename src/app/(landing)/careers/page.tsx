'use client';

import React, { useState } from 'react';
import PageHeader from '@/components/PageHeader';
import { motion } from 'framer-motion';
import { FiMapPin, FiClock, FiBriefcase, FiFilter, FiSearch } from 'react-icons/fi';

const departments = [
  "All",
  "Engineering",
  "Product",
  "Marketing",
  "Sales",
  "Customer Success",
  "Operations"
];

const locations = [
  "All",
  "Remote",
  "San Francisco, CA",
  "New York, NY",
  "London, UK",
  "Toronto, Canada",
  "Singapore"
];

const jobOpenings = [
  {
    title: "Senior Frontend Engineer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    description: "We're looking for a Senior Frontend Engineer to help build and improve our web application. You'll work closely with our product and design teams to create intuitive and performant user interfaces.",
    slug: "senior-frontend-engineer"
  },
  {
    title: "Backend Engineer",
    department: "Engineering",
    location: "San Francisco, CA",
    type: "Full-time",
    description: "Join our engineering team to build scalable backend systems that power our waitlist platform. You'll work on API development, database optimization, and infrastructure management.",
    slug: "backend-engineer"
  },
  {
    title: "Product Manager",
    department: "Product",
    location: "Remote",
    type: "Full-time",
    description: "We're seeking a Product Manager to drive the vision and execution of our waitlist platform. You'll work closely with engineering, design, and marketing to deliver features that delight our customers.",
    slug: "product-manager"
  },
  {
    title: "Growth Marketing Manager",
    department: "Marketing",
    location: "New York, NY",
    type: "Full-time",
    description: "Join our marketing team to drive user acquisition and retention strategies. You'll be responsible for developing and executing marketing campaigns that help us reach our growth targets.",
    slug: "growth-marketing-manager"
  },
  {
    title: "Customer Success Manager",
    department: "Customer Success",
    location: "Remote",
    type: "Full-time",
    description: "Help our customers get the most out of Waitlist.js. You'll be responsible for onboarding new customers, providing ongoing support, and ensuring customer satisfaction and retention.",
    slug: "customer-success-manager"
  },
  {
    title: "Sales Development Representative",
    department: "Sales",
    location: "London, UK",
    type: "Full-time",
    description: "Join our sales team to identify and qualify new business opportunities. You'll be responsible for outbound prospecting, qualifying leads, and setting up meetings for our account executives.",
    slug: "sales-development-representative"
  },
  {
    title: "UX/UI Designer",
    department: "Product",
    location: "San Francisco, CA",
    type: "Full-time",
    description: "We're looking for a UX/UI Designer to create beautiful and intuitive user experiences. You'll work closely with our product and engineering teams to design features that delight our users.",
    slug: "ux-ui-designer"
  },
  {
    title: "DevOps Engineer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    description: "Join our engineering team to build and maintain our infrastructure. You'll be responsible for CI/CD pipelines, monitoring, and ensuring the reliability and performance of our platform.",
    slug: "devops-engineer"
  }
];

const perks = [
  {
    title: "Competitive Compensation",
    description: "We offer competitive salaries, equity, and a comprehensive benefits package."
  },
  {
    title: "Remote-First Culture",
    description: "Work from anywhere with flexible hours and a focus on results, not hours worked."
  },
  {
    title: "Health & Wellness",
    description: "Comprehensive health insurance, mental health support, and wellness stipend."
  },
  {
    title: "Learning & Development",
    description: "Annual learning budget, regular workshops, and opportunities for growth."
  },
  {
    title: "Team Retreats",
    description: "Regular team retreats to connect, collaborate, and have fun together."
  },
  {
    title: "Work-Life Balance",
    description: "Unlimited PTO, flexible working hours, and a focus on sustainable pace."
  }
];

const CareersPage = () => {
  const [activeDepartment, setActiveDepartment] = useState("All");
  const [activeLocation, setActiveLocation] = useState("All");
  
  const filteredJobs = jobOpenings.filter(job => {
    const departmentMatch = activeDepartment === "All" || job.department === activeDepartment;
    const locationMatch = activeLocation === "All" || job.location === activeLocation;
    return departmentMatch && locationMatch;
  });
  
  return (
    <>
      <PageHeader 
        title="Join Our Team"
        subtitle="Help us build the future of waitlist management and make a meaningful impact on businesses around the world."
      />
      
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <motion.div 
              className="lg:w-1/2"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Work With Us to <span className="gradient-text">Make an Impact</span>
              </h2>
              <p className="text-gray-600 mb-6">
                At Waitlist.js, we're building the most powerful waitlist platform to help businesses create exceptional experiences that drive growth and engagement.
              </p>
              <p className="text-gray-600 mb-6">
                We're a remote-first team of passionate individuals who value collaboration, innovation, and impact. We believe in giving our team members the autonomy and resources they need to do their best work.
              </p>
              <p className="text-gray-600 mb-8">
                If you're excited about building products that make a difference for thousands of businesses around the world, we'd love to hear from you.
              </p>
              <a href="#openings" className="btn btn-primary">
                View Open Positions
              </a>
            </motion.div>
            <motion.div 
              className="lg:w-1/2"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="bg-gray-100 rounded-xl overflow-hidden">
                <div className="h-80 flex items-center justify-center text-gray-400">
                  Team Image
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="mb-4">Life at <span className="gradient-text">Waitlist.js</span></h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We're building a company where people love to work. Here's what you can expect when you join our team.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {perks.map((perk, index) => (
              <motion.div 
                key={index} 
                className="bg-white rounded-xl p-6 shadow-md border border-gray-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <h3 className="text-xl font-bold mb-2">{perk.title}</h3>
                <p className="text-gray-600">{perk.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      <section id="openings" className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="mb-4">Open <span className="gradient-text">Positions</span></h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Join our team and help us build the future of waitlist management.
            </p>
          </div>
          
          {/* Filters */}
          <div className="mb-12">
            <div className="flex flex-col md:flex-row gap-6 justify-between items-center">
              <div className="w-full md:w-auto">
                <div className="relative">
                  <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                  <input 
                    type="text" 
                    placeholder="Search positions..." 
                    className="w-full md:w-64 pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none"
                  />
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
                <div className="relative w-full sm:w-auto">
                  <FiFilter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                  <select 
                    className="pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none appearance-none bg-white w-full sm:w-auto"
                    value={activeDepartment}
                    onChange={(e) => setActiveDepartment(e.target.value)}
                  >
                    {departments.map((dept, index) => (
                      <option key={index} value={dept}>{dept} Departments</option>
                    ))}
                  </select>
                </div>
                <div className="relative w-full sm:w-auto">
                  <FiMapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                  <select 
                    className="pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none appearance-none bg-white w-full sm:w-auto"
                    value={activeLocation}
                    onChange={(e) => setActiveLocation(e.target.value)}
                  >
                    {locations.map((loc, index) => (
                      <option key={index} value={loc}>{loc} Locations</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>
          
          {/* Job Listings */}
          <div className="space-y-6">
            {filteredJobs.length > 0 ? (
              filteredJobs.map((job, index) => (
                <motion.div 
                  key={index} 
                  className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-bold mb-2">{job.title}</h3>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="inline-flex items-center text-sm text-gray-600">
                          <FiBriefcase className="mr-1" size={14} />
                          {job.department}
                        </span>
                        <span className="inline-flex items-center text-sm text-gray-600">
                          <FiMapPin className="mr-1" size={14} />
                          {job.location}
                        </span>
                        <span className="inline-flex items-center text-sm text-gray-600">
                          <FiClock className="mr-1" size={14} />
                          {job.type}
                        </span>
                      </div>
                      <p className="text-gray-600 mb-4 md:mb-0">{job.description}</p>
                    </div>
                    <div className="flex-shrink-0">
                      <a href={`/careers/${job.slug}`} className="btn btn-primary whitespace-nowrap">
                        View & Apply
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))
            ) : (
              <div className="text-center py-12 bg-gray-50 rounded-xl">
                <h3 className="text-xl font-bold mb-2">No positions found</h3>
                <p className="text-gray-600">
                  Try adjusting your filters or check back later for new openings.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
      
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="mb-4">Our <span className="gradient-text">Hiring Process</span></h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We've designed our hiring process to be thorough, fair, and respectful of your time.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-1 bg-gray-200"></div>
              
              {[
                { title: "Application Review", description: "Our recruiting team reviews your application to assess your qualifications and experience." },
                { title: "Initial Interview", description: "A 30-minute call with a recruiter to discuss your background, experience, and interest in the role." },
                { title: "Technical/Skills Assessment", description: "Depending on the role, you may be asked to complete a take-home assignment or technical interview." },
                { title: "Team Interviews", description: "A series of interviews with team members and cross-functional stakeholders." },
                { title: "Final Interview", description: "A conversation with the hiring manager or a senior leader to discuss the role in depth." },
                { title: "Offer", description: "If there's a mutual fit, we'll extend an offer and welcome you to the team!" }
              ].map((step, index) => (
                <motion.div 
                  key={index} 
                  className="relative mb-8 pl-16"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <div className="absolute left-0 top-0 w-16 h-16 flex items-center justify-center">
                    <div className="w-8 h-8 rounded-full bg-primary-600 text-white flex items-center justify-center font-bold z-10">
                      {index + 1}
                    </div>
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
                    <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-20 bg-primary-900 text-white">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Don't See the Right Role?
            </h2>
            <p className="text-xl mb-10 text-white/90">
              We're always looking for talented individuals to join our team. Send us your resume and we'll keep you in mind for future opportunities.
            </p>
            <a href="/careers/general" className="btn bg-white text-primary-600 hover:bg-primary-50 text-lg px-8 py-4">
              Submit General Application
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default CareersPage;
