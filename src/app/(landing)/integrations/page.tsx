'use client';

import React from 'react';
import PageHeader from '@/components/PageHeader';
import CTA from '@/components/CTA';
import { motion } from 'framer-motion';
import { FiSearch } from 'react-icons/fi';

const integrationCategories = [
  {
    name: "CRM & Marketing",
    integrations: [
      { name: "Salesforce", logo: "/images/integrations/salesforce.svg", description: "Sync waitlist data with your Salesforce CRM to manage leads and customer relationships." },
      { name: "HubSpot", logo: "/images/integrations/hubspot.svg", description: "Connect your waitlist to HubSpot for seamless lead management and marketing automation." },
      { name: "Mailchimp", logo: "/images/integrations/mailchimp.svg", description: "Automatically add waitlist members to your Mailchimp email campaigns." },
      { name: "ActiveCampaign", logo: "/images/integrations/activecampaign.svg", description: "Trigger automated workflows in ActiveCampaign based on waitlist activity." },
      { name: "Klaviyo", logo: "/images/integrations/klaviyo.svg", description: "Sync waitlist data with Klaviyo for targeted email and SMS marketing." }
    ]
  },
  {
    name: "Analytics & Tracking",
    integrations: [
      { name: "Google Analytics", logo: "/images/integrations/google-analytics.svg", description: "Track waitlist performance and user behavior with Google Analytics integration." },
      { name: "Mixpanel", logo: "/images/integrations/mixpanel.svg", description: "Gain deeper insights into user engagement and conversion with Mixpanel." },
      { name: "Amplitude", logo: "/images/integrations/amplitude.svg", description: "Analyze user behavior and optimize your waitlist experience with Amplitude." },
      { name: "Segment", logo: "/images/integrations/segment.svg", description: "Use Segment to route your waitlist data to multiple destinations." },
      { name: "Hotjar", logo: "/images/integrations/hotjar.svg", description: "Understand how users interact with your waitlist forms using Hotjar's heatmaps and recordings." }
    ]
  },
  {
    name: "Website & CMS",
    integrations: [
      { name: "WordPress", logo: "/images/integrations/wordpress.svg", description: "Easily embed your waitlist on any WordPress site with our plugin." },
      { name: "Webflow", logo: "/images/integrations/webflow.svg", description: "Add your waitlist to Webflow sites with our custom embed code." },
      { name: "Shopify", logo: "/images/integrations/shopify.svg", description: "Collect waitlist signups for product launches on your Shopify store." },
      { name: "Wix", logo: "/images/integrations/wix.svg", description: "Integrate your waitlist with Wix websites using our custom widget." },
      { name: "Squarespace", logo: "/images/integrations/squarespace.svg", description: "Add your waitlist to any Squarespace site with our embed code." }
    ]
  },
  {
    name: "Communication & Collaboration",
    integrations: [
      { name: "Slack", logo: "/images/integrations/slack.svg", description: "Get real-time notifications in Slack when users join your waitlist." },
      { name: "Discord", logo: "/images/integrations/discord.svg", description: "Send waitlist updates and alerts to your Discord channels." },
      { name: "Intercom", logo: "/images/integrations/intercom.svg", description: "Connect your waitlist with Intercom for seamless customer support and engagement." },
      { name: "Zendesk", logo: "/images/integrations/zendesk.svg", description: "Manage waitlist-related support tickets directly in Zendesk." },
      { name: "Microsoft Teams", logo: "/images/integrations/teams.svg", description: "Receive waitlist notifications and collaborate with your team in Microsoft Teams." }
    ]
  }
];

const IntegrationsPage = () => {
  return (
    <>
      <PageHeader 
        title="Seamless Integrations"
        subtitle="Connect Waitlist.js with your favorite tools and platforms to create a unified workflow."
      />
      
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="mb-4">Connect With Your <span className="gradient-text">Favorite Tools</span></h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Waitlist.js integrates with over 50 popular tools and platforms to help you streamline your workflow and maximize efficiency.
            </p>
            
            <div className="mt-8 max-w-xl mx-auto">
              <div className="relative">
                <FiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input 
                  type="text" 
                  placeholder="Search integrations..." 
                  className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none"
                />
              </div>
            </div>
          </div>
          
          {integrationCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-20">
              <h3 className="text-2xl font-bold mb-8">{category.name}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.integrations.map((integration, integrationIndex) => (
                  <motion.div 
                    key={integrationIndex} 
                    className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-shadow"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: integrationIndex * 0.1 }}
                  >
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mr-4">
                        <span className="text-gray-500">{integration.name.charAt(0)}</span>
                      </div>
                      <h4 className="text-xl font-bold">{integration.name}</h4>
                    </div>
                    <p className="text-gray-600 mb-4">{integration.description}</p>
                    <a href="#" className="text-primary-600 font-medium hover:text-primary-700 flex items-center">
                      Learn more
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                      </svg>
                    </a>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
          
          <div className="text-center mt-12">
            <h3 className="text-2xl font-bold mb-4">Don't See Your Tool?</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              We're constantly adding new integrations. If you don't see the tool you use, let us know and we'll prioritize it in our development roadmap.
            </p>
            <a href="/contact" className="btn btn-outline">
              Request an Integration
            </a>
          </div>
        </div>
      </section>
      
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="mb-4">Build Your Own <span className="gradient-text">Integration</span></h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Our comprehensive API and developer tools make it easy to create custom integrations for your specific needs.
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="bg-gray-800 p-4 flex items-center">
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <div className="ml-4 text-gray-400 text-sm">API Example</div>
            </div>
            <div className="p-6 bg-gray-900 text-gray-300 font-mono text-sm overflow-x-auto">
              <pre>{`// Example: Create a new waitlist entry via API
const response = await fetch('https://api.waitlistjs.com/v1/entries', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer YOUR_API_KEY'
  },
  body: JSON.stringify({
    email: 'user@example.com',
    name: 'John Doe',
    referrer: 'abc123',
    custom_fields: {
      company: 'Acme Inc',
      role: 'Developer'
    }
  })
});

const data = await response.json();
console.log(data);`}</pre>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <a href="/docs/api" className="btn btn-primary">
              Explore API Documentation
            </a>
          </div>
        </div>
      </section>
      
      <CTA />
    </>
  );
};

export default IntegrationsPage;
