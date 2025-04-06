import React, { useState } from 'react';
import { FiCheck } from 'react-icons/fi';
import { motion } from 'framer-motion';

const pricingPlans = [
  {
    name: 'Free',
    price: {
      monthly: 0,
      yearly: 0
    },
    description: 'Perfect for testing the waters',
    features: [
      'Up to 250 waitlist entries',
      'Basic waitlist widget',
      'Email notifications',
      'Simple analytics',
      'Community support'
    ],
    cta: 'Get Started',
    highlighted: false
  },
  {
    name: 'Growth',
    price: {
      monthly: 49,
      yearly: 470
    },
    description: 'For growing businesses and startups',
    features: [
      'Up to 5,000 waitlist entries',
      'Advanced widget customization',
      'Referral system',
      'A/B testing',
      'Basic segmentation',
      'Email support',
      'API access'
    ],
    cta: 'Start Free Trial',
    highlighted: true
  },
  {
    name: 'Pro',
    price: {
      monthly: 149,
      yearly: 1430
    },
    description: 'For established businesses',
    features: [
      'Up to 25,000 waitlist entries',
      'Advanced segmentation',
      'AI-powered insights',
      'Custom branding',
      'Priority support',
      'Advanced analytics',
      'Webhook integrations',
      'Team collaboration'
    ],
    cta: 'Start Free Trial',
    highlighted: false
  },
  {
    name: 'Scale',
    price: {
      monthly: 399,
      yearly: 3830
    },
    description: 'For high-growth companies',
    features: [
      'Up to 100,000 waitlist entries',
      'All Pro features',
      'Dedicated success manager',
      'Custom integrations',
      'White labeling',
      'Advanced security features',
      'Multi-product management',
      'Priority feature requests'
    ],
    cta: 'Contact Sales',
    highlighted: false
  }
];

const Pricing = () => {
  const [annual, setAnnual] = useState(true);

  return (
    <section className="section bg-white" id="pricing">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="mb-4">Simple, Transparent <span className="gradient-text">Pricing</span></h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Choose the plan that's right for your business. All plans include a 14-day free trial.
          </p>
          
          <div className="mt-8 inline-flex items-center p-1 bg-gray-100 rounded-lg">
            <button
              className={`px-4 py-2 rounded-md ${annual ? 'bg-white shadow-md' : 'text-gray-700'}`}
              onClick={() => setAnnual(true)}
            >
              Annual <span className="text-xs text-green-600 font-medium">Save 20%</span>
            </button>
            <button
              className={`px-4 py-2 rounded-md ${!annual ? 'bg-white shadow-md' : 'text-gray-700'}`}
              onClick={() => setAnnual(false)}
            >
              Monthly
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pricingPlans.map((plan, index) => (
            <motion.div 
              key={index} 
              className={`rounded-xl overflow-hidden ${
                plan.highlighted 
                  ? 'border-2 border-primary-500 shadow-glow relative' 
                  : 'border border-gray-200 shadow-md'
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {plan.highlighted && (
                <div className="bg-primary-500 text-white text-center py-1 text-sm font-medium">
                  Most Popular
                </div>
              )}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{plan.description}</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold">${annual ? plan.price.yearly : plan.price.monthly}</span>
                  <span className="text-gray-600">/{annual ? 'year' : 'month'}</span>
                </div>
                <button 
                  className={`w-full mb-6 btn ${
                    plan.highlighted ? 'btn-primary' : 'btn-outline'
                  }`}
                >
                  {plan.cta}
                </button>
                <div className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-start">
                      <FiCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center bg-gray-50 p-8 rounded-xl">
          <h3 className="text-2xl font-bold mb-4">Enterprise</h3>
          <p className="text-gray-600 mb-6 max-w-3xl mx-auto">
            Need a custom solution? We offer tailored plans for large organizations with specific requirements.
          </p>
          <button className="btn btn-primary">
            Contact Our Sales Team
          </button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
