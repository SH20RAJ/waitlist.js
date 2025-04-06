'use client';

import React from 'react';
import PageHeader from '@/components/PageHeader';
import Pricing from '@/components/Pricing';
import CTA from '@/components/CTA';
import { motion } from 'framer-motion';
import { FiCheck } from 'react-icons/fi';

const PricingPage = () => {
  return (
    <>
      <PageHeader 
        title="Simple, Transparent Pricing"
        subtitle="Choose the plan that's right for your business. All plans include a 14-day free trial with no credit card required."
      />
      
      <Pricing />
      
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="mb-4">Frequently Asked <span className="gradient-text">Questions</span></h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Everything you need to know about our pricing and plans.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                question: "Can I change plans later?",
                answer: "Yes, you can upgrade, downgrade, or cancel your plan at any time. Changes to your plan will be reflected in your next billing cycle."
              },
              {
                question: "What happens when I reach my waitlist entry limit?",
                answer: "You'll receive a notification when you're approaching your limit. You can choose to upgrade to a higher tier or continue with your current plan, but new entries will be paused until you have available capacity."
              },
              {
                question: "Do you offer discounts for startups or non-profits?",
                answer: "Yes, we offer special pricing for eligible startups, non-profits, and educational institutions. Please contact our sales team for more information."
              },
              {
                question: "Can I try all features before committing?",
                answer: "Absolutely! Our 14-day free trial gives you access to all features of the Pro plan, allowing you to fully explore the platform before making a decision."
              },
              {
                question: "Is there a long-term contract?",
                answer: "No, all our plans are month-to-month or annual with no long-term commitment. You can cancel at any time."
              },
              {
                question: "What payment methods do you accept?",
                answer: "We accept all major credit cards (Visa, Mastercard, American Express, Discover) as well as PayPal. For Enterprise plans, we can also accommodate invoicing and wire transfers."
              }
            ].map((faq, index) => (
              <motion.div 
                key={index} 
                className="bg-gray-50 rounded-lg p-6 border border-gray-100"
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
          
          <div className="mt-16 text-center">
            <p className="text-gray-600 mb-6">
              Have more questions about our pricing?
            </p>
            <a href="/contact" className="btn btn-outline">
              Contact Sales
            </a>
          </div>
        </div>
      </section>
      
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="mb-4">Compare <span className="gradient-text">Plans</span></h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              A detailed breakdown of what's included in each plan.
            </p>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-lg shadow-md">
              <thead>
                <tr className="bg-gray-50">
                  <th className="py-4 px-6 text-left">Feature</th>
                  <th className="py-4 px-6 text-center">Free</th>
                  <th className="py-4 px-6 text-center">Growth</th>
                  <th className="py-4 px-6 text-center">Pro</th>
                  <th className="py-4 px-6 text-center">Scale</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: "Waitlist Entries", free: "250", growth: "5,000", pro: "25,000", scale: "100,000" },
                  { feature: "Custom Branding", free: "Limited", growth: "Yes", pro: "Yes", scale: "Yes" },
                  { feature: "Referral System", free: "Basic", growth: "Advanced", pro: "Advanced", scale: "Advanced" },
                  { feature: "Analytics", free: "Basic", growth: "Standard", pro: "Advanced", scale: "Enterprise" },
                  { feature: "A/B Testing", free: "No", growth: "Yes", pro: "Yes", scale: "Yes" },
                  { feature: "API Access", free: "No", growth: "Limited", pro: "Full", scale: "Full" },
                  { feature: "Team Members", free: "1", growth: "3", pro: "10", scale: "Unlimited" },
                  { feature: "Email Support", free: "Limited", growth: "Standard", pro: "Priority", scale: "Dedicated" },
                  { feature: "Custom Domain", free: "No", growth: "No", pro: "Yes", scale: "Yes" },
                  { feature: "White Labeling", free: "No", growth: "No", pro: "No", scale: "Yes" }
                ].map((row, index) => (
                  <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="py-4 px-6 font-medium">{row.feature}</td>
                    <td className="py-4 px-6 text-center">{row.free}</td>
                    <td className="py-4 px-6 text-center">{row.growth}</td>
                    <td className="py-4 px-6 text-center">{row.pro}</td>
                    <td className="py-4 px-6 text-center">{row.scale}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
      
      <CTA />
    </>
  );
};

export default PricingPage;
