import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="bg-gradient-to-b from-white to-primary-50 pt-20 pb-32">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Text Content */}
          <motion.div 
            className="lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="mb-6">
              Transform Your <span className="gradient-text">Waitlist</span> Into a <span className="gradient-text">Growth Engine</span>
            </h1>
            <p className="text-gray-700 text-xl mb-8 max-w-2xl mx-auto lg:mx-0">
              Don't just collect emails. Create excitement, drive referrals, and maximize conversions with the most powerful waitlist platform on the market.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link href="/signup" className="btn btn-primary text-lg px-8 py-4">
                Get Started Free
              </Link>
              <Link href="/demo" className="btn btn-outline text-lg px-8 py-4">
                Request Demo
              </Link>
            </div>
            <div className="mt-8 text-gray-600 flex items-center justify-center lg:justify-start">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full bg-gray-300 border-2 border-white" />
                ))}
              </div>
              <p className="ml-4 text-sm">
                Trusted by <span className="font-semibold">2,500+</span> businesses
              </p>
            </div>
          </motion.div>

          {/* Hero Image/Illustration */}
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl blur-xl opacity-50"></div>
              <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className="bg-gray-100 h-10 flex items-center px-4">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold mb-2">Join Our Exclusive Waitlist</h3>
                    <p className="text-gray-600">Be the first to experience our revolutionary product.</p>
                  </div>
                  <div className="space-y-4">
                    <div className="flex flex-col space-y-1">
                      <label className="text-sm font-medium text-gray-700">Email</label>
                      <input 
                        type="email" 
                        placeholder="you@example.com" 
                        className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none"
                      />
                    </div>
                    <div className="flex flex-col space-y-1">
                      <label className="text-sm font-medium text-gray-700">Name</label>
                      <input 
                        type="text" 
                        placeholder="John Doe" 
                        className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none"
                      />
                    </div>
                    <button className="w-full btn btn-primary">
                      Join Waitlist
                    </button>
                    <div className="text-center text-sm text-gray-500">
                      <span className="flex items-center justify-center">
                        <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd"></path>
                        </svg>
                        Your information is secure and will never be shared
                      </span>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 p-4 border-t">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-sm text-gray-500">Current position</span>
                      <p className="font-medium">#127 of 1,458</p>
                    </div>
                    <div>
                      <span className="text-sm text-gray-500">Estimated access</span>
                      <p className="font-medium">2 weeks</p>
                    </div>
                    <div>
                      <span className="text-sm text-gray-500">Referrals</span>
                      <p className="font-medium">0</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
