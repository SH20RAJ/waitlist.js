import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  {
    number: '01',
    title: 'Create Your Waitlist',
    description: 'Set up your waitlist in minutes with our intuitive dashboard. Choose from templates or build your own custom design.',
    image: '/images/step1.svg'
  },
  {
    number: '02',
    title: 'Customize Your Experience',
    description: 'Tailor the waitlist to match your brand. Add custom fields, referral incentives, and engagement features.',
    image: '/images/step2.svg'
  },
  {
    number: '03',
    title: 'Embed & Share',
    description: 'Add the waitlist to your website with a simple code snippet or share directly via dedicated landing page.',
    image: '/images/step3.svg'
  },
  {
    number: '04',
    title: 'Analyze & Optimize',
    description: 'Track performance in real-time. Use A/B testing and AI insights to continuously improve conversion.',
    image: '/images/step4.svg'
  }
];

const HowItWorks = () => {
  return (
    <section className="section bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="mb-4">How It <span className="gradient-text">Works</span></h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Getting started with Waitlist.js is simple. Follow these steps to create, customize, and optimize your waitlist experience.
          </p>
        </div>

        <div className="space-y-24">
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
            >
              <div className="lg:w-1/2">
                <div className="flex items-start mb-4">
                  <span className="text-4xl font-bold text-gray-200 mr-4">{step.number}</span>
                  <h3 className="text-2xl font-bold">{step.title}</h3>
                </div>
                <p className="text-gray-600 mb-6">{step.description}</p>
                <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <div className="text-xs text-gray-500 ml-2">waitlist.js</div>
                  </div>
                  <div className="h-32 bg-gray-100 rounded flex items-center justify-center">
                    <p className="text-gray-400 text-sm">Step {parseInt(step.number)} visualization</p>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/2 bg-white p-6 rounded-xl shadow-md border border-gray-100">
                <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
                  <p className="text-gray-400">Step {parseInt(step.number)} screenshot</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
