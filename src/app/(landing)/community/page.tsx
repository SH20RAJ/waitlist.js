'use client';

import React from 'react';
import PageHeader from '@/components/PageHeader';
import { motion } from 'framer-motion';
import { FiUsers, FiMessageSquare, FiCalendar, FiAward, FiGlobe, FiGithub } from 'react-icons/fi';

const communityFeatures = [
  {
    icon: <FiUsers className="w-8 h-8" />,
    title: "Connect with Peers",
    description: "Join a community of product managers, marketers, and founders who are using waitlists to drive growth."
  },
  {
    icon: <FiMessageSquare className="w-8 h-8" />,
    title: "Discussion Forums",
    description: "Participate in discussions about waitlist strategies, share your experiences, and get advice from experts."
  },
  {
    icon: <FiCalendar className="w-8 h-8" />,
    title: "Virtual Events",
    description: "Attend webinars, workshops, and AMAs with industry experts and the Waitlist.js team."
  },
  {
    icon: <FiAward className="w-8 h-8" />,
    title: "Recognition Program",
    description: "Get recognized for your contributions to the community and earn badges and rewards."
  },
  {
    icon: <FiGlobe className="w-8 h-8" />,
    title: "Global Network",
    description: "Connect with waitlist enthusiasts from around the world and expand your professional network."
  },
  {
    icon: <FiGithub className="w-8 h-8" />,
    title: "Open Source",
    description: "Contribute to our open source projects and help shape the future of waitlist management."
  }
];

const upcomingEvents = [
  {
    title: "Waitlist Optimization Masterclass",
    date: "April 20, 2025",
    time: "11:00 AM - 12:30 PM PST",
    speaker: "Sarah Johnson, Growth Lead at TechNova",
    description: "Learn advanced strategies for optimizing your waitlist conversion rates and engagement.",
    type: "Webinar"
  },
  {
    title: "Ask Me Anything: Waitlist.js Product Team",
    date: "April 25, 2025",
    time: "2:00 PM - 3:00 PM PST",
    speaker: "Waitlist.js Product Team",
    description: "Get your questions answered by the team behind Waitlist.js and learn about upcoming features.",
    type: "AMA"
  },
  {
    title: "Building Viral Referral Programs",
    date: "May 5, 2025",
    time: "10:00 AM - 11:30 AM PST",
    speaker: "Michael Chen, Founder of GrowthEngine",
    description: "Discover the secrets to creating referral programs that drive exponential growth for your waitlist.",
    type: "Workshop"
  }
];

const CommunityPage = () => {
  return (
    <>
      <PageHeader 
        title="Join Our Community"
        subtitle="Connect with fellow waitlist enthusiasts, share knowledge, and stay up-to-date with the latest trends and best practices."
      />
      
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <motion.div 
              className="lg:w-1/2"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                A Thriving Community of <span className="gradient-text">Waitlist Enthusiasts</span>
              </h2>
              <p className="text-gray-600 mb-6">
                The Waitlist.js community brings together product managers, marketers, founders, and developers who are passionate about creating exceptional waitlist experiences.
              </p>
              <p className="text-gray-600 mb-8">
                Whether you're just getting started with waitlists or you're looking to optimize your existing strategy, our community provides the resources, support, and connections you need to succeed.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="https://community.waitlistjs.com" className="btn btn-primary">
                  Join Community
                </a>
                <a href="/community/events" className="btn btn-outline">
                  View Events
                </a>
              </div>
            </motion.div>
            <motion.div 
              className="lg:w-1/2"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="bg-gray-50 rounded-xl p-8">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white rounded-lg p-4 text-center">
                    <div className="text-3xl font-bold text-primary-600 mb-2">10,000+</div>
                    <div className="text-gray-600">Community Members</div>
                  </div>
                  <div className="bg-white rounded-lg p-4 text-center">
                    <div className="text-3xl font-bold text-primary-600 mb-2">50+</div>
                    <div className="text-gray-600">Countries Represented</div>
                  </div>
                  <div className="bg-white rounded-lg p-4 text-center">
                    <div className="text-3xl font-bold text-primary-600 mb-2">200+</div>
                    <div className="text-gray-600">Monthly Events</div>
                  </div>
                  <div className="bg-white rounded-lg p-4 text-center">
                    <div className="text-3xl font-bold text-primary-600 mb-2">5,000+</div>
                    <div className="text-gray-600">Forum Discussions</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="mb-4">Community <span className="gradient-text">Benefits</span></h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Discover the advantages of joining the Waitlist.js community.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {communityFeatures.map((feature, index) => (
              <motion.div 
                key={index} 
                className="bg-white rounded-xl p-6 shadow-md border border-gray-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <div className="rounded-full bg-primary-100 p-3 w-14 h-14 flex items-center justify-center text-primary-600 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="mb-4">Upcoming <span className="gradient-text">Events</span></h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Join our virtual events to learn from experts and connect with the community.
            </p>
          </div>
          
          <div className="space-y-8 max-w-4xl mx-auto">
            {upcomingEvents.map((event, index) => (
              <motion.div 
                key={index} 
                className="bg-gray-50 rounded-xl overflow-hidden shadow-sm border border-gray-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/3 bg-primary-900 text-white p-6 flex flex-col justify-center">
                    <div className="text-sm font-medium text-primary-300 mb-1">{event.type}</div>
                    <div className="text-xl font-bold mb-2">{event.date}</div>
                    <div className="text-sm">{event.time}</div>
                  </div>
                  <div className="md:w-2/3 p-6">
                    <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                    <p className="text-gray-600 mb-4">{event.description}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="w-8 h-8 rounded-full bg-gray-300 mr-2"></div>
                        <span className="text-sm font-medium">{event.speaker}</span>
                      </div>
                      <a href={`/community/events/${index}`} className="btn btn-sm btn-primary">
                        Register
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <a href="/community/events" className="btn btn-outline">
              View All Events
            </a>
          </div>
        </div>
      </section>
      
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="mb-4">Community <span className="gradient-text">Channels</span></h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Connect with the Waitlist.js community across multiple platforms.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { name: "Discord", description: "Join our Discord server for real-time discussions and support.", button: "Join Discord", icon: "discord" },
              { name: "Forum", description: "Participate in in-depth discussions on our community forum.", button: "Visit Forum", icon: "forum" },
              { name: "Slack", description: "Connect with other users in our Slack community.", button: "Join Slack", icon: "slack" },
              { name: "GitHub", description: "Contribute to our open source projects and documentation.", button: "View GitHub", icon: "github" },
              { name: "Twitter", description: "Follow us on Twitter for the latest updates and announcements.", button: "Follow Us", icon: "twitter" },
              { name: "LinkedIn", description: "Join our LinkedIn group for professional networking.", button: "Connect", icon: "linkedin" }
            ].map((channel, index) => (
              <motion.div 
                key={index} 
                className="bg-white rounded-xl p-6 shadow-md border border-gray-100"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <div className="h-12 w-12 bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-gray-500">{channel.icon.charAt(0).toUpperCase()}</span>
                </div>
                <h3 className="text-xl font-bold mb-2">{channel.name}</h3>
                <p className="text-gray-600 mb-4">{channel.description}</p>
                <a href="#" className="btn btn-sm btn-outline w-full">
                  {channel.button}
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-20 bg-primary-900 text-white">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Join Our Community?
            </h2>
            <p className="text-xl mb-10 text-white/90">
              Connect with thousands of waitlist enthusiasts, share knowledge, and grow together.
            </p>
            <a href="https://community.waitlistjs.com" className="btn bg-white text-primary-600 hover:bg-primary-50 text-lg px-8 py-4">
              Join the Community
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default CommunityPage;
