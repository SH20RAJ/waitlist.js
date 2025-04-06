'use client';

import React, { useState } from 'react';
import PageHeader from '@/components/PageHeader';
import { motion } from 'framer-motion';
import { FiMail, FiMessageSquare, FiPhone, FiMapPin, FiHelpCircle, FiDollarSign, FiUsers } from 'react-icons/fi';

const contactReasons = [
  { value: "general", label: "General Inquiry" },
  { value: "sales", label: "Sales Question" },
  { value: "support", label: "Technical Support" },
  { value: "partnership", label: "Partnership Opportunity" },
  { value: "press", label: "Press Inquiry" },
  { value: "careers", label: "Careers" }
];

const faqs = [
  {
    question: "How do I get started with Waitlist.js?",
    answer: "Getting started is easy! Simply sign up for a free account, create your first waitlist, customize it to match your brand, and embed it on your website. Our step-by-step guide will walk you through the process."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards (Visa, Mastercard, American Express, Discover) as well as PayPal. For Enterprise plans, we can also accommodate invoicing and wire transfers."
  },
  {
    question: "Can I cancel my subscription at any time?",
    answer: "Yes, you can cancel your subscription at any time. There are no long-term contracts or cancellation fees. Your subscription will remain active until the end of your current billing period."
  },
  {
    question: "Do you offer a free trial?",
    answer: "Yes, we offer a 14-day free trial on all paid plans. No credit card is required to start your trial, and you can upgrade or cancel at any time."
  },
  {
    question: "How do I get support if I have questions?",
    answer: "We offer multiple support channels including email, live chat, and our comprehensive knowledge base. Paid plans also include priority support with faster response times."
  }
];

const ContactPage = () => {
  const [contactReason, setContactReason] = useState("general");
  
  return (
    <>
      <PageHeader 
        title="Contact Us"
        subtitle="Get in touch with our team. We're here to help with any questions or feedback you may have."
      />
      
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row gap-12">
            <motion.div 
              className="lg:w-2/3"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold mb-6">
                Send Us a <span className="gradient-text">Message</span>
              </h2>
              <p className="text-gray-600 mb-8">
                Fill out the form below and we'll get back to you as soon as possible. Our team is available Monday through Friday, 9am-5pm PT.
              </p>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none"
                    placeholder="john@example.com"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Company</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none"
                    placeholder="Acme Inc"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Reason for Contact</label>
                  <select 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none"
                    value={contactReason}
                    onChange={(e) => setContactReason(e.target.value)}
                  >
                    {contactReasons.map((reason) => (
                      <option key={reason.value} value={reason.value}>{reason.label}</option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none h-32"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>
                
                <div className="flex items-start">
                  <input 
                    type="checkbox" 
                    id="privacy" 
                    className="mt-1 mr-2"
                  />
                  <label htmlFor="privacy" className="text-sm text-gray-600">
                    I agree to the <a href="/privacy" className="text-primary-600 hover:text-primary-700">Privacy Policy</a> and consent to being contacted by Waitlist.js.
                  </label>
                </div>
                
                <button type="submit" className="btn btn-primary w-full md:w-auto">
                  Send Message
                </button>
              </form>
            </motion.div>
            
            <motion.div 
              className="lg:w-1/3"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="bg-gray-50 rounded-xl p-8">
                <h3 className="text-xl font-bold mb-6">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="rounded-full bg-primary-100 p-3 flex items-center justify-center text-primary-600 mr-4">
                      <FiMail size={20} />
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Email</h4>
                      <p className="text-gray-600">support@waitlistjs.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="rounded-full bg-primary-100 p-3 flex items-center justify-center text-primary-600 mr-4">
                      <FiPhone size={20} />
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Phone</h4>
                      <p className="text-gray-600">+1 (800) 123-4567</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="rounded-full bg-primary-100 p-3 flex items-center justify-center text-primary-600 mr-4">
                      <FiMapPin size={20} />
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Office</h4>
                      <p className="text-gray-600">
                        123 Market Street<br />
                        Suite 456<br />
                        San Francisco, CA 94105
                      </p>
                    </div>
                  </div>
                </div>
                
                <hr className="my-6 border-gray-200" />
                
                <h3 className="text-xl font-bold mb-6">Connect With Us</h3>
                
                <div className="space-y-4">
                  <a href="#" className="flex items-center text-gray-700 hover:text-primary-600 transition-colors">
                    <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center mr-3">
                      <span className="text-gray-500">T</span>
                    </div>
                    Twitter
                  </a>
                  <a href="#" className="flex items-center text-gray-700 hover:text-primary-600 transition-colors">
                    <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center mr-3">
                      <span className="text-gray-500">L</span>
                    </div>
                    LinkedIn
                  </a>
                  <a href="#" className="flex items-center text-gray-700 hover:text-primary-600 transition-colors">
                    <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center mr-3">
                      <span className="text-gray-500">G</span>
                    </div>
                    GitHub
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
            <h2 className="mb-4">Specialized <span className="gradient-text">Support</span></h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Get in touch with the right team for your specific needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <FiHelpCircle size={24} />,
                title: "Technical Support",
                description: "Get help with technical issues, account management, or product questions.",
                cta: "Contact Support",
                link: "mailto:support@waitlistjs.com"
              },
              {
                icon: <FiDollarSign size={24} />,
                title: "Sales Inquiries",
                description: "Talk to our sales team about pricing, enterprise plans, or custom solutions.",
                cta: "Contact Sales",
                link: "mailto:sales@waitlistjs.com"
              },
              {
                icon: <FiUsers size={24} />,
                title: "Partnerships",
                description: "Explore partnership opportunities, integrations, or affiliate programs.",
                cta: "Contact Partnerships",
                link: "mailto:partnerships@waitlistjs.com"
              }
            ].map((support, index) => (
              <motion.div 
                key={index} 
                className="bg-white rounded-xl p-6 shadow-md border border-gray-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <div className="rounded-full bg-primary-100 p-3 w-12 h-12 flex items-center justify-center text-primary-600 mb-4">
                  {support.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{support.title}</h3>
                <p className="text-gray-600 mb-4">{support.description}</p>
                <a 
                  href={support.link} 
                  className="text-primary-600 font-medium hover:text-primary-700 flex items-center"
                >
                  {support.cta}
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="mb-4">Frequently Asked <span className="gradient-text">Questions</span></h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Find quick answers to common questions about Waitlist.js.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {faqs.map((faq, index) => (
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
            
            <div className="mt-12 text-center">
              <p className="text-gray-600 mb-4">
                Still have questions? Check out our comprehensive documentation or contact our support team.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/docs" className="btn btn-outline">
                  View Documentation
                </a>
                <a href="mailto:support@waitlistjs.com" className="btn btn-primary">
                  Contact Support
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="p-8">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="md:w-1/2">
                  <h3 className="text-2xl font-bold mb-4">Need Immediate Assistance?</h3>
                  <p className="text-gray-600 mb-6">
                    Our live chat support is available Monday through Friday, 9am-5pm PT. Start a conversation with our team for real-time assistance.
                  </p>
                  <button className="btn btn-primary flex items-center">
                    <FiMessageSquare className="mr-2" />
                    Start Live Chat
                  </button>
                </div>
                <div className="md:w-1/2">
                  <div className="bg-gray-100 rounded-lg h-64 flex items-center justify-center text-gray-400">
                    Live Chat Illustration
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

export default ContactPage;
