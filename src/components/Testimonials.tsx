import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    quote: "Waitlist.js helped us generate over 50,000 signups for our product launch, with 32% coming from referrals. The insights from their analytics helped us prioritize our feature roadmap based on actual user interest.",
    author: "Sarah Chen",
    position: "Founder & CEO at LaunchPad",
    image: "/images/testimonial1.jpg"
  },
  {
    quote: "We switched from a basic form to Waitlist.js and saw our conversion rate increase by 3x. The gamification elements created a viral loop we never expected.",
    author: "Marcus Johnson",
    position: "CMO at TechNova",
    image: "/images/testimonial2.jpg"
  },
  {
    quote: "The enterprise features allowed us to manage waitlists for multiple product lines while maintaining our brand standards. The ROI has been incredible.",
    author: "Jennifer Williams",
    position: "Product Director at Enterprise Solutions Inc.",
    image: "/images/testimonial3.jpg"
  }
];

const Testimonials = () => {
  return (
    <section className="section bg-primary-900 text-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="mb-4 text-white">What Our <span className="text-primary-300">Customers</span> Say</h2>
          <p className="text-primary-100 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what businesses using Waitlist.js have achieved.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index} 
              className="bg-primary-800 rounded-xl p-6 shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="mb-6">
                <svg className="w-10 h-10 text-primary-500 mb-4" fill="currentColor" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H8c0-1.1.9-2 2-2V8zm18-2c-3.3 0-6 2.7-6 6v10h10V14h-6c0-1.1.9-2 2-2V6z" />
                </svg>
                <p className="text-primary-100 italic mb-4">{testimonial.quote}</p>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-primary-700 mr-4"></div>
                <div>
                  <p className="font-bold">{testimonial.author}</p>
                  <p className="text-primary-300 text-sm">{testimonial.position}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-primary-100 mb-8 max-w-3xl mx-auto">
              Join thousands of businesses that have transformed their waitlists from simple email collectors into powerful growth engines.
            </p>
            <button className="btn bg-white text-primary-900 hover:bg-primary-50">
              Read More Success Stories
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
