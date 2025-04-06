import React from 'react';
import { FiBarChart2, FiUsers, FiLayers, FiShuffle, FiTarget, FiZap, FiSmartphone, FiCode, FiMessageCircle, FiShield } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { coreFeatures } from '@/constants';

// Map the icon names from constants to actual icon components
const getIconComponent = (iconName: string, className: string) => {
  const icons: Record<string, JSX.Element> = {
    BarChart2: <FiBarChart2 className={className} />,
    Users: <FiUsers className={className} />,
    Layers: <FiLayers className={className} />,
    Shuffle: <FiShuffle className={className} />,
    Target: <FiTarget className={className} />,
    Zap: <FiZap className={className} />,
    Smartphone: <FiSmartphone className={className} />,
    Code: <FiCode className={className} />,
    MessageCircle: <FiMessageCircle className={className} />,
    Shield: <FiShield className={className} />
  };

  return icons[iconName] || <FiBarChart2 className={className} />;
};

// Transform the core features to include the icon component
const features = coreFeatures.map(feature => ({
  ...feature,
  icon: getIconComponent(feature.icon, "w-6 h-6")
}));

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
