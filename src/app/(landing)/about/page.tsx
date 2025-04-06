'use client';

import React from 'react';
import PageHeader from '@/components/PageHeader';
import { motion } from 'framer-motion';
import { FiUsers, FiTarget, FiHeart, FiTrendingUp, FiGlobe, FiLock } from 'react-icons/fi';

const teamMembers = [
  {
    name: "Sarah Johnson",
    position: "Co-Founder & CEO",
    bio: "Sarah has over 15 years of experience in product management and growth marketing. Prior to founding Waitlist.js, she led growth at several successful SaaS startups.",
    image: "/images/team/sarah-johnson.jpg"
  },
  {
    name: "Michael Chen",
    position: "Co-Founder & CTO",
    bio: "Michael is a seasoned software engineer with expertise in building scalable web applications. He previously worked at Google and led engineering teams at two YC-backed startups.",
    image: "/images/team/michael-chen.jpg"
  },
  {
    name: "Emily Rodriguez",
    position: "VP of Product",
    bio: "Emily brings a wealth of experience in product management and user experience design. She's passionate about creating products that solve real user problems.",
    image: "/images/team/emily-rodriguez.jpg"
  },
  {
    name: "David Kim",
    position: "VP of Engineering",
    bio: "David is an experienced engineering leader with a focus on building reliable, scalable systems. He previously led engineering teams at AWS and Stripe.",
    image: "/images/team/david-kim.jpg"
  },
  {
    name: "Jessica Thompson",
    position: "VP of Marketing",
    bio: "Jessica is a marketing expert with a track record of driving growth for B2B SaaS companies. She specializes in content marketing and demand generation.",
    image: "/images/team/jessica-thompson.jpg"
  },
  {
    name: "Alex Patel",
    position: "VP of Customer Success",
    bio: "Alex is dedicated to helping customers achieve their goals. With a background in customer success at leading SaaS companies, he ensures our customers get maximum value.",
    image: "/images/team/alex-patel.jpg"
  }
];

const companyValues = [
  {
    icon: <FiUsers className="w-8 h-8" />,
    title: "Customer Obsession",
    description: "We put our customers at the center of everything we do. Their success is our success."
  },
  {
    icon: <FiTarget className="w-8 h-8" />,
    title: "Impact-Driven",
    description: "We focus on work that delivers meaningful impact for our customers and our business."
  },
  {
    icon: <FiHeart className="w-8 h-8" />,
    title: "Passion for Excellence",
    description: "We strive for excellence in everything we do, from product quality to customer service."
  },
  {
    icon: <FiTrendingUp className="w-8 h-8" />,
    title: "Continuous Improvement",
    description: "We're never satisfied with the status quo and constantly seek ways to improve."
  },
  {
    icon: <FiGlobe className="w-8 h-8" />,
    title: "Diversity & Inclusion",
    description: "We believe diverse perspectives lead to better outcomes and foster an inclusive environment."
  },
  {
    icon: <FiLock className="w-8 h-8" />,
    title: "Trust & Transparency",
    description: "We build trust through transparency with our customers, partners, and team members."
  }
];

const AboutPage = () => {
  return (
    <>
      <PageHeader 
        title="About Waitlist.js"
        subtitle="We're on a mission to help businesses create exceptional waitlist experiences that drive growth and engagement."
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
                Our <span className="gradient-text">Story</span>
              </h2>
              <p className="text-gray-600 mb-6">
                Waitlist.js was born out of frustration with existing waitlist solutions. In 2022, our founders, Sarah Johnson and Michael Chen, were building a product and needed a waitlist solution that would do more than just collect emails.
              </p>
              <p className="text-gray-600 mb-6">
                They wanted a platform that would help them build anticipation, engage potential users, and drive viral growth. When they couldn't find a solution that met their needs, they decided to build it themselves.
              </p>
              <p className="text-gray-600 mb-6">
                What started as an internal tool quickly gained interest from other startups and businesses. In early 2023, Waitlist.js was officially launched as a product, and we've been growing rapidly ever since.
              </p>
              <p className="text-gray-600">
                Today, Waitlist.js is used by thousands of businesses around the world, from early-stage startups to enterprise organizations. We're proud to help our customers create exceptional waitlist experiences that drive growth and engagement.
              </p>
            </motion.div>
            <motion.div 
              className="lg:w-1/2"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="bg-gray-100 rounded-xl overflow-hidden">
                <div className="h-80 flex items-center justify-center text-gray-400">
                  Company Image
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="mb-4">Our <span className="gradient-text">Values</span></h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              These core values guide everything we do at Waitlist.js.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {companyValues.map((value, index) => (
              <motion.div 
                key={index} 
                className="bg-white rounded-xl p-6 shadow-md border border-gray-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <div className="rounded-full bg-primary-100 p-3 w-14 h-14 flex items-center justify-center text-primary-600 mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="mb-4">Meet Our <span className="gradient-text">Team</span></h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We're a diverse team of passionate individuals dedicated to helping businesses create exceptional waitlist experiences.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div 
                key={index} 
                className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <div className="h-64 bg-gray-200 flex items-center justify-center text-gray-400">
                  Team Member Photo
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-primary-600 font-medium mb-4">{member.position}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="mb-4">Our <span className="gradient-text">Investors</span></h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We're backed by leading investors who believe in our vision.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {[1, 2, 3, 4, 5, 6].map((investor, index) => (
              <motion.div 
                key={index} 
                className="bg-white rounded-lg p-6 flex items-center justify-center h-24 shadow-sm"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <span className="text-gray-400 font-medium">Investor {investor}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="bg-primary-50 rounded-xl p-8 max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/3 flex justify-center">
                <div className="rounded-full bg-primary-100 p-6 w-24 h-24 flex items-center justify-center text-primary-600">
                  <FiUsers size={40} />
                </div>
              </div>
              <div className="md:w-2/3">
                <h3 className="text-2xl font-bold mb-4">Join Our Team</h3>
                <p className="text-gray-600 mb-6">
                  We're always looking for talented individuals who are passionate about creating exceptional products and helping businesses grow.
                </p>
                <a href="/careers" className="btn btn-primary">
                  View Open Positions
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
