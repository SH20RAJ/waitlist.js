'use client';

import React from 'react';
import PageHeader from '@/components/PageHeader';
import Pricing from '@/components/Pricing';
import CTA from '@/components/CTA';
import { motion } from 'framer-motion';
import { FiCheck } from 'react-icons/fi';
import { pricingFAQs, pricingComparisonFeatures } from '@/constants';

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
            {pricingFAQs.map((faq, index) => (
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
                  <th className="py-4 px-6 text-center">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                {pricingComparisonFeatures.map((row, index) => (
                  <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="py-4 px-6 font-medium">{row.feature}</td>
                    <td className="py-4 px-6 text-center">{row.free}</td>
                    <td className="py-4 px-6 text-center">{row.growth}</td>
                    <td className="py-4 px-6 text-center">{row.pro}</td>
                    <td className="py-4 px-6 text-center">{row.scale}</td>
                    <td className="py-4 px-6 text-center">{row.enterprise}</td>
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
