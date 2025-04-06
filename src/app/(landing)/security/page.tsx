'use client';

import React from 'react';
import PageHeader from '@/components/PageHeader';
import { motion } from 'framer-motion';
import { FiShield, FiLock, FiUserCheck, FiServer, FiAlertTriangle, FiCheckCircle } from 'react-icons/fi';

const securityFeatures = [
  {
    icon: <FiShield className="w-8 h-8" />,
    title: "SOC 2 Compliance",
    description: "We maintain SOC 2 Type II compliance, with annual audits to ensure our security controls meet the highest standards for data protection."
  },
  {
    icon: <FiLock className="w-8 h-8" />,
    title: "Data Encryption",
    description: "All data is encrypted both in transit (TLS 1.3) and at rest (AES-256) to ensure your information remains secure at all times."
  },
  {
    icon: <FiUserCheck className="w-8 h-8" />,
    title: "Authentication & Access",
    description: "We offer SSO integration, 2FA, RBAC, and detailed audit logs to ensure only authorized users can access your data."
  },
  {
    icon: <FiServer className="w-8 h-8" />,
    title: "Infrastructure Security",
    description: "Our infrastructure is hosted on AWS with multiple layers of security, regular penetration testing, and 24/7 monitoring."
  },
  {
    icon: <FiAlertTriangle className="w-8 h-8" />,
    title: "Incident Response",
    description: "We have a comprehensive incident response plan with dedicated security team to address any potential issues quickly and effectively."
  },
  {
    icon: <FiCheckCircle className="w-8 h-8" />,
    title: "Compliance",
    description: "We're compliant with GDPR, CCPA, and other privacy regulations to help you meet your legal obligations."
  }
];

const SecurityPage = () => {
  return (
    <>
      <PageHeader 
        title="Security & Compliance"
        subtitle="We take the security and privacy of your data seriously. Learn about our comprehensive approach to keeping your information safe."
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
                Your Data Security is Our <span className="gradient-text">Top Priority</span>
              </h2>
              <p className="text-gray-600 mb-6">
                At Waitlist.js, we understand that you're trusting us with important data about your business and customers. We take this responsibility seriously and have implemented comprehensive security measures to protect your information.
              </p>
              <p className="text-gray-600 mb-8">
                Our security program is built on industry best practices and is regularly audited by independent third parties to ensure we maintain the highest standards of data protection.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="/security/whitepaper" className="btn btn-primary">
                  Security Whitepaper
                </a>
                <a href="/contact" className="btn btn-outline">
                  Contact Security Team
                </a>
              </div>
            </motion.div>
            <motion.div 
              className="lg:w-1/2"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="bg-gray-50 rounded-xl p-8">
                <div className="flex items-center mb-6">
                  <div className="rounded-full bg-green-100 p-2 flex items-center justify-center text-green-600 mr-3">
                    <FiShield size={24} />
                  </div>
                  <h3 className="text-xl font-bold">Security Status: Operational</h3>
                </div>
                <div className="space-y-4">
                  {[
                    { name: "API Services", status: "Operational" },
                    { name: "Dashboard", status: "Operational" },
                    { name: "Authentication", status: "Operational" },
                    { name: "Database", status: "Operational" },
                    { name: "Analytics", status: "Operational" }
                  ].map((service, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-white rounded-lg shadow-sm">
                      <span className="font-medium">{service.name}</span>
                      <span className="flex items-center text-green-600">
                        <FiCheckCircle className="mr-1" />
                        {service.status}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 text-center">
                  <a href="/status" className="text-primary-600 font-medium hover:text-primary-700">
                    View Status Page
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="mb-4">Security <span className="gradient-text">Features</span></h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Our comprehensive security program includes multiple layers of protection.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {securityFeatures.map((feature, index) => (
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
            <h2 className="mb-4">Compliance <span className="gradient-text">Certifications</span></h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We maintain compliance with industry standards and regulations to ensure your data is protected.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              { name: "SOC 2 Type II", logo: "/images/certifications/soc2.svg", description: "Audited annually for security, availability, and confidentiality." },
              { name: "GDPR Compliant", logo: "/images/certifications/gdpr.svg", description: "Full compliance with EU data protection regulations." },
              { name: "CCPA Compliant", logo: "/images/certifications/ccpa.svg", description: "Adherence to California Consumer Privacy Act requirements." },
              { name: "ISO 27001", logo: "/images/certifications/iso27001.svg", description: "Information security management system certification." }
            ].map((cert, index) => (
              <motion.div 
                key={index} 
                className="bg-gray-50 rounded-lg p-6 text-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <div className="h-16 flex items-center justify-center mb-4">
                  <span className="text-gray-700 font-bold text-lg">{cert.name}</span>
                </div>
                <p className="text-gray-600 text-sm">{cert.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="p-8">
              <h3 className="text-2xl font-bold mb-6">Frequently Asked Security Questions</h3>
              <div className="space-y-6">
                {[
                  {
                    question: "How is my data protected?",
                    answer: "Your data is encrypted both in transit and at rest using industry-standard encryption protocols. We implement multiple layers of security controls to protect against unauthorized access."
                  },
                  {
                    question: "Where is my data stored?",
                    answer: "We use AWS data centers located in the US and EU, with options for data residency in specific regions for enterprise customers with compliance requirements."
                  },
                  {
                    question: "Do you share my data with third parties?",
                    answer: "We never sell your data. We only share data with third-party service providers who help us deliver our services, and they are bound by strict confidentiality agreements."
                  },
                  {
                    question: "How do you handle security incidents?",
                    answer: "We have a comprehensive incident response plan with a dedicated security team that monitors our systems 24/7. In the event of a security incident, we follow a structured process for containment, investigation, and notification."
                  },
                  {
                    question: "Can I request a penetration test report?",
                    answer: "Yes, enterprise customers can request our most recent penetration test summary report under NDA. We conduct regular penetration tests with independent security firms."
                  }
                ].map((faq, index) => (
                  <div key={index} className="border-b border-gray-100 pb-6">
                    <h4 className="text-lg font-bold mb-2">{faq.question}</h4>
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-6">
              Have more questions about our security practices?
            </p>
            <a href="/contact" className="btn btn-primary">
              Contact Our Security Team
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default SecurityPage;
