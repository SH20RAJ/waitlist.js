'use client';

import React from 'react';
import PageHeader from '@/components/PageHeader';
import { motion } from 'framer-motion';
import { FiShield, FiUsers, FiGlobe, FiLayers, FiSettings, FiServer } from 'react-icons/fi';

const enterpriseFeatures = [
  {
    icon: <FiShield className="w-8 h-8" />,
    title: "Enterprise-Grade Security",
    description: "Benefit from SOC 2 compliance, GDPR/CCPA tools, SSO integration, role-based access control, and advanced encryption to keep your data secure."
  },
  {
    icon: <FiUsers className="w-8 h-8" />,
    title: "Dedicated Support Team",
    description: "Get priority access to our customer success team, dedicated account management, and 24/7 technical support to ensure your success."
  },
  {
    icon: <FiGlobe className="w-8 h-8" />,
    title: "Global Infrastructure",
    description: "Our globally distributed infrastructure ensures fast performance, high availability, and compliance with regional data regulations."
  },
  {
    icon: <FiLayers className="w-8 h-8" />,
    title: "Custom Development",
    description: "Work with our team to develop custom features, integrations, and workflows tailored to your specific business requirements."
  },
  {
    icon: <FiSettings className="w-8 h-8" />,
    title: "Advanced Configuration",
    description: "Take advantage of extensive customization options, white-labeling capabilities, and multi-product management tools."
  },
  {
    icon: <FiServer className="w-8 h-8" />,
    title: "Unlimited Scale",
    description: "Handle millions of waitlist entries with ease, with no performance degradation or additional costs as your waitlist grows."
  }
];

const enterpriseLogos = [
  { name: "Acme Corp", logo: "/images/logos/acme.svg" },
  { name: "TechGiant", logo: "/images/logos/techgiant.svg" },
  { name: "Innovate Inc", logo: "/images/logos/innovate.svg" },
  { name: "Global Systems", logo: "/images/logos/globalsystems.svg" },
  { name: "Future Labs", logo: "/images/logos/futurelabs.svg" },
  { name: "Apex Solutions", logo: "/images/logos/apex.svg" }
];

const EnterprisePage = () => {
  return (
    <>
      <PageHeader 
        title="Enterprise Solutions"
        subtitle="Powerful waitlist management tools designed for large organizations with complex needs."
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
                Tailored Solutions for <span className="gradient-text">Enterprise Needs</span>
              </h2>
              <p className="text-gray-600 mb-6">
                Waitlist.js Enterprise provides large organizations with the tools, security, and support they need to manage complex waitlist operations at scale. Our enterprise solutions are trusted by leading companies across industries to drive growth, engagement, and conversion.
              </p>
              <p className="text-gray-600 mb-8">
                With dedicated account management, custom development options, and enterprise-grade security, we ensure your waitlist strategy aligns perfectly with your business objectives.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="/contact" className="btn btn-primary">
                  Contact Sales
                </a>
                <a href="/enterprise/case-studies" className="btn btn-outline">
                  View Case Studies
                </a>
              </div>
            </motion.div>
            <motion.div 
              className="lg:w-1/2"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="bg-gray-100 rounded-xl p-8 relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-xl blur-xl opacity-20"></div>
                <div className="relative bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-bold mb-4">Request Enterprise Demo</h3>
                  <form>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                        <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Work Email</label>
                        <input type="email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Company</label>
                        <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Company Size</label>
                        <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none">
                          <option>Select company size</option>
                          <option>1-10 employees</option>
                          <option>11-50 employees</option>
                          <option>51-200 employees</option>
                          <option>201-500 employees</option>
                          <option>501-1000 employees</option>
                          <option>1000+ employees</option>
                        </select>
                      </div>
                      <button type="submit" className="w-full btn btn-primary">
                        Request Demo
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="mb-4">Enterprise <span className="gradient-text">Features</span></h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Powerful capabilities designed specifically for enterprise organizations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {enterpriseFeatures.map((feature, index) => (
              <motion.div 
                key={index} 
                className="bg-white rounded-xl p-6 shadow-md border border-gray-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <div className="rounded-full bg-primary-100 p-3 w-14 h-14 flex items-center justify-center text-primary-600 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="mb-4">Trusted by <span className="gradient-text">Industry Leaders</span></h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Join the growing list of enterprise organizations that rely on Waitlist.js for their waitlist management needs.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {enterpriseLogos.map((logo, index) => (
              <motion.div 
                key={index} 
                className="bg-gray-50 rounded-lg p-6 flex items-center justify-center h-24"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <span className="text-gray-400 font-medium">{logo.name}</span>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <a href="/customers" className="btn btn-outline">
              View Customer Stories
            </a>
          </div>
        </div>
      </section>
      
      <section className="py-20 bg-primary-900 text-white">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Scale Your Waitlist?
            </h2>
            <p className="text-xl mb-10 text-white/90">
              Contact our enterprise sales team to discuss your specific requirements and learn how Waitlist.js can help you achieve your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="btn bg-white text-primary-600 hover:bg-primary-50 text-lg px-8 py-4">
                Contact Sales
              </a>
              <a href="/enterprise/demo" className="btn border-2 border-white text-white hover:bg-white/10 text-lg px-8 py-4">
                Schedule Demo
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default EnterprisePage;
