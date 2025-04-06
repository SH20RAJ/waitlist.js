import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-primary-600 to-secondary-600 text-white">
      <div className="container-custom">
        <motion.div 
          className="text-center max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Waitlist Experience?
          </h2>
          <p className="text-xl mb-10 text-white/90">
            Join thousands of businesses that have turned their waitlists into powerful growth engines. Get started for free today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/signup" className="btn bg-white text-primary-600 hover:bg-primary-50 text-lg px-8 py-4">
              Get Started Free
            </Link>
            <Link href="/demo" className="btn border-2 border-white text-white hover:bg-white/10 text-lg px-8 py-4">
              Request Demo
            </Link>
          </div>
          <p className="mt-6 text-white/80">
            No credit card required. 14-day free trial on all paid plans.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
