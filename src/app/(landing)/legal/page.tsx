'use client';

import React from 'react';
import PageHeader from '@/components/PageHeader';
import { motion } from 'framer-motion';
import { FiFileText, FiShield, FiUsers, FiGlobe, FiCreditCard } from 'react-icons/fi';
import { legalDocuments, legalFaqQuestions } from '@/constants';

// Using imported legalDocuments from constants, but with local icon components
const localLegalDocuments = [
  {
    icon: <FiFileText size={24} />,
    title: "Terms of Service",
    description: "The agreement between you and Waitlist.js governing your use of our services.",
    lastUpdated: "April 1, 2025",
    link: "/terms"
  },
  {
    icon: <FiShield size={24} />,
    title: "Privacy Policy",
    description: "How we collect, use, and protect your personal information.",
    lastUpdated: "March 15, 2025",
    link: "/privacy"
  },
  {
    icon: <FiFileText size={24} />, // Using FiFileText instead of FiCookie
    title: "Cookie Policy",
    description: "Information about the cookies and tracking technologies we use.",
    lastUpdated: "March 15, 2025",
    link: "/cookies"
  },
  {
    icon: <FiUsers size={24} />,
    title: "Data Processing Agreement",
    description: "Terms governing how we process data on behalf of our customers.",
    lastUpdated: "February 10, 2025",
    link: "/dpa"
  },
  {
    icon: <FiGlobe size={24} />,
    title: "Acceptable Use Policy",
    description: "Guidelines for appropriate use of our services.",
    lastUpdated: "January 20, 2025",
    link: "/acceptable-use"
  },
  {
    icon: <FiCreditCard size={24} />,
    title: "Refund Policy",
    description: "Our policies regarding refunds and cancellations.",
    lastUpdated: "December 5, 2024",
    link: "/refunds"
  }
];

const LegalPage = () => {
  return (
    <>
      <PageHeader
        title="Legal Information"
        subtitle="Access our terms of service, privacy policy, and other legal documents."
      />

      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <p className="text-gray-600 mb-12">
              At Waitlist.js, we're committed to transparency and compliance with applicable laws and regulations. Below you'll find all our legal documents, which govern your use of our services and explain how we handle your data.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {legalDocuments.map((doc, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-50 rounded-xl p-6 border border-gray-100"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <div className="rounded-full bg-primary-100 p-3 w-12 h-12 flex items-center justify-center text-primary-600 mb-4">
                    {doc.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{doc.title}</h3>
                  <p className="text-gray-600 mb-4">{doc.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">Last updated: {doc.lastUpdated}</span>
                    <a
                      href={doc.link}
                      className="text-primary-600 font-medium hover:text-primary-700 flex items-center"
                    >
                      View
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                      </svg>
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">
              Data Protection & <span className="gradient-text">Compliance</span>
            </h2>
            <p className="text-gray-600 mb-12 text-center">
              We take data protection and regulatory compliance seriously. Here's how we ensure your data is safe and our services meet regulatory requirements.
            </p>

            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-6">GDPR Compliance</h3>
                <p className="text-gray-600 mb-6">
                  Waitlist.js is fully compliant with the General Data Protection Regulation (GDPR). We provide tools and features to help our customers meet their GDPR obligations, including:
                </p>
                <ul className="space-y-2 mb-8">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-700">Data Processing Agreements (DPAs) for all customers</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-700">Data export and deletion capabilities</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-700">Consent management tools for waitlist forms</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-700">Data breach notification procedures</span>
                  </li>
                </ul>

                <h3 className="text-2xl font-bold mb-6">CCPA Compliance</h3>
                <p className="text-gray-600 mb-6">
                  We comply with the California Consumer Privacy Act (CCPA) and provide tools to help our customers meet their CCPA obligations, including:
                </p>
                <ul className="space-y-2 mb-8">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-700">Data access and deletion capabilities</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-700">Opt-out mechanisms for data sales</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-700">Detailed records of data processing activities</span>
                  </li>
                </ul>

                <h3 className="text-2xl font-bold mb-6">Security Certifications</h3>
                <p className="text-gray-600 mb-6">
                  We maintain industry-standard security certifications to ensure your data is protected:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-700">SOC 2 Type II compliance</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-700">ISO 27001 certification</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-700">Regular penetration testing and security audits</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">
              Legal <span className="gradient-text">FAQ</span>
            </h2>
            <p className="text-gray-600 mb-12 text-center">
              Answers to common legal questions about using Waitlist.js.
            </p>

            <div className="space-y-6">
              {legalFaqQuestions.map((faq, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-50 rounded-xl p-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <h3 className="text-xl font-bold mb-3">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="bg-white rounded-xl shadow-md overflow-hidden max-w-4xl mx-auto">
            <div className="p-8">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="md:w-2/3">
                  <h3 className="text-2xl font-bold mb-4">Have Legal Questions?</h3>
                  <p className="text-gray-600 mb-6">
                    If you have specific legal questions about our services or need assistance with compliance matters, our legal team is here to help.
                  </p>
                  <a href="mailto:legal@waitlistjs.com" className="btn btn-primary">
                    Contact Legal Team
                  </a>
                </div>
                <div className="md:w-1/3">
                  <div className="rounded-full bg-primary-100 p-6 w-24 h-24 flex items-center justify-center text-primary-600 mx-auto">
                    <FiFileText size={40} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LegalPage;
