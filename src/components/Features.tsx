import React from 'react';
import { FiBarChart2, FiUsers, FiLayers, FiShuffle, FiTarget, FiZap, FiSmartphone, FiCode, FiMessageCircle, FiShield } from 'react-icons/fi';
import { motion } from 'framer-motion';

const features = [
  {
    icon: <FiBarChart2 className="w-6 h-6" />,
    title: 'Smart Analytics Dashboard',
    description: 'Gain deep insights into your waitlist performance with real-time metrics, conversion tracking, and growth forecasting.'
  },
  {
    icon: <FiUsers className="w-6 h-6" />,
    title: 'Viral Growth Mechanics',
    description: 'Turn waitlist members into advocates with our multi-tier referral system, social challenges, and leaderboards.'
  },
  {
    icon: <FiLayers className="w-6 h-6" />,
    title: 'Intuitive Widget Builder',
    description: 'Create stunning, conversion-optimized waitlist forms with our drag-and-drop builder. Choose from dozens of templates.'
  },
  {
    icon: <FiZap className="w-6 h-6" />,
    title: 'AI-Powered Engagement',
    description: 'Leverage machine learning to predict which members are most likely to convert and automatically personalize their experience.'
  },
  {
    icon: <FiTarget className="w-6 h-6" />,
    title: 'Advanced Segmentation',
    description: 'Group waitlist members by source, behavior, or custom attributes to deliver targeted messaging and experiences.'
  },
  {
    icon: <FiShuffle className="w-6 h-6" />,
    title: 'A/B Testing Engine',
    description: 'Optimize every aspect of your waitlist with our built-in testing tools for messaging, design, and incentives.'
  },
  {
    icon: <FiSmartphone className="w-6 h-6" />,
    title: 'Omnichannel Collection',
    description: 'Collect signups via web, mobile, social media embeds, or even QR codes at physical locations.'
  },
  {
    icon: <FiCode className="w-6 h-6" />,
    title: 'Developer-Friendly API',
    description: 'Seamlessly integrate waitlist data with your existing tools and workflows through our comprehensive API.'
  },
  {
    icon: <FiMessageCircle className="w-6 h-6" />,
    title: 'Community Building Tools',
    description: 'Foster engagement with member profiles, discussion forums, live events, and polls while people wait.'
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

const Features = () => {
  return (
    <section className="section bg-white" id="features">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="mb-4">Powerful Features to <span className="gradient-text">Supercharge</span> Your Waitlist</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Waitlist.js combines cutting-edge technology with proven psychological principles to help you build anticipation, drive viral growth, and maximize conversions.
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="card hover:shadow-glow border border-gray-100 hover:border-primary-200"
              variants={item}
            >
              <div className="rounded-full bg-primary-100 p-3 w-12 h-12 flex items-center justify-center text-primary-600 mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
