'use client';

import React from 'react';
import PageHeader from '@/components/PageHeader';
import { motion } from 'framer-motion';
import { FiCode, FiDatabase, FiUsers, FiSettings, FiBarChart2, FiLock } from 'react-icons/fi';

const apiEndpoints = [
  {
    category: "Waitlist Management",
    endpoints: [
      { method: "GET", path: "/v1/waitlists", description: "List all waitlists" },
      { method: "POST", path: "/v1/waitlists", description: "Create a new waitlist" },
      { method: "GET", path: "/v1/waitlists/{id}", description: "Get waitlist details" },
      { method: "PUT", path: "/v1/waitlists/{id}", description: "Update a waitlist" },
      { method: "DELETE", path: "/v1/waitlists/{id}", description: "Delete a waitlist" }
    ]
  },
  {
    category: "Entries",
    endpoints: [
      { method: "GET", path: "/v1/entries", description: "List all waitlist entries" },
      { method: "POST", path: "/v1/entries", description: "Add a new entry to a waitlist" },
      { method: "GET", path: "/v1/entries/{id}", description: "Get entry details" },
      { method: "PUT", path: "/v1/entries/{id}", description: "Update an entry" },
      { method: "DELETE", path: "/v1/entries/{id}", description: "Remove an entry" }
    ]
  },
  {
    category: "Referrals",
    endpoints: [
      { method: "GET", path: "/v1/referrals", description: "List all referrals" },
      { method: "POST", path: "/v1/referrals", description: "Create a referral" },
      { method: "GET", path: "/v1/referrals/{id}", description: "Get referral details" },
      { method: "GET", path: "/v1/entries/{id}/referrals", description: "Get referrals by entry" }
    ]
  },
  {
    category: "Analytics",
    endpoints: [
      { method: "GET", path: "/v1/analytics/overview", description: "Get waitlist overview stats" },
      { method: "GET", path: "/v1/analytics/conversion", description: "Get conversion metrics" },
      { method: "GET", path: "/v1/analytics/growth", description: "Get growth metrics" },
      { method: "GET", path: "/v1/analytics/referrals", description: "Get referral metrics" }
    ]
  }
];

const ApiPage = () => {
  return (
    <>
      <PageHeader 
        title="API Reference"
        subtitle="Comprehensive documentation for the Waitlist.js API. Integrate waitlist functionality directly into your applications."
      />
      
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row gap-12">
            <motion.div 
              className="lg:w-1/2"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Powerful <span className="gradient-text">RESTful API</span>
              </h2>
              <p className="text-gray-600 mb-6">
                Our comprehensive API gives you full control over your waitlists, allowing you to integrate waitlist functionality directly into your applications and create custom experiences for your users.
              </p>
              <p className="text-gray-600 mb-8">
                With our well-documented endpoints and developer-friendly tools, you can easily manage waitlists, entries, referrals, and analytics programmatically.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="/docs/api/getting-started" className="btn btn-primary">
                  Get Started
                </a>
                <a href="/docs/api/examples" className="btn btn-outline">
                  View Examples
                </a>
              </div>
            </motion.div>
            <motion.div 
              className="lg:w-1/2"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="bg-gray-800 rounded-xl overflow-hidden shadow-xl">
                <div className="bg-gray-900 p-4 flex items-center">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="ml-4 text-gray-400 text-sm">API Example</div>
                </div>
                <div className="p-6 text-gray-300 font-mono text-sm overflow-x-auto">
                  <pre>{`// Example: Create a new waitlist entry
const response = await fetch('https://api.waitlistjs.com/v1/entries', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer YOUR_API_KEY'
  },
  body: JSON.stringify({
    waitlist_id: '12345',
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
console.log(data);

// Response
{
  "id": "entry_789012",
  "waitlist_id": "12345",
  "email": "user@example.com",
  "name": "John Doe",
  "position": 127,
  "referrer": "abc123",
  "custom_fields": {
    "company": "Acme Inc",
    "role": "Developer"
  },
  "created_at": "2025-04-07T12:34:56Z"
}`}</pre>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="mb-4">API <span className="gradient-text">Features</span></h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Our API is designed to be powerful, flexible, and easy to use.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <FiCode className="w-8 h-8" />,
                title: "RESTful Design",
                description: "Clean, intuitive RESTful API with consistent patterns and comprehensive documentation."
              },
              {
                icon: <FiDatabase className="w-8 h-8" />,
                title: "Complete Data Access",
                description: "Full CRUD operations for waitlists, entries, referrals, and more."
              },
              {
                icon: <FiUsers className="w-8 h-8" />,
                title: "User Management",
                description: "Manage waitlist entries, positions, and user data programmatically."
              },
              {
                icon: <FiSettings className="w-8 h-8" />,
                title: "Customization",
                description: "Configure waitlist behavior, appearance, and functionality via API."
              },
              {
                icon: <FiBarChart2 className="w-8 h-8" />,
                title: "Analytics",
                description: "Access detailed analytics and metrics to track performance."
              },
              {
                icon: <FiLock className="w-8 h-8" />,
                title: "Secure Authentication",
                description: "API keys, OAuth, and token-based authentication options."
              }
            ].map((feature, index) => (
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
            <h2 className="mb-4">API <span className="gradient-text">Endpoints</span></h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Explore our comprehensive API endpoints for managing waitlists, entries, referrals, and analytics.
            </p>
          </div>
          
          <div className="space-y-12">
            {apiEndpoints.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <h3 className="text-2xl font-bold mb-6">{category.category}</h3>
                <div className="bg-gray-50 rounded-lg overflow-hidden">
                  <table className="min-w-full">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="py-3 px-6 text-left text-gray-700 font-medium">Method</th>
                        <th className="py-3 px-6 text-left text-gray-700 font-medium">Endpoint</th>
                        <th className="py-3 px-6 text-left text-gray-700 font-medium">Description</th>
                      </tr>
                    </thead>
                    <tbody>
                      {category.endpoints.map((endpoint, endpointIndex) => (
                        <tr key={endpointIndex} className={endpointIndex % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                          <td className="py-3 px-6">
                            <span className={`inline-block px-2 py-1 rounded text-xs font-medium ${
                              endpoint.method === "GET" ? "bg-green-100 text-green-800" :
                              endpoint.method === "POST" ? "bg-blue-100 text-blue-800" :
                              endpoint.method === "PUT" ? "bg-yellow-100 text-yellow-800" :
                              "bg-red-100 text-red-800"
                            }`}>
                              {endpoint.method}
                            </span>
                          </td>
                          <td className="py-3 px-6 font-mono text-sm">{endpoint.path}</td>
                          <td className="py-3 px-6 text-gray-700">{endpoint.description}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <a href="/docs/api/reference" className="btn btn-primary">
              View Full API Reference
            </a>
          </div>
        </div>
      </section>
      
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="bg-white rounded-xl shadow-md overflow-hidden max-w-4xl mx-auto">
            <div className="p-8">
              <h3 className="text-2xl font-bold mb-6">Getting Started with the API</h3>
              <ol className="space-y-6">
                <li className="flex">
                  <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-primary-100 text-primary-600 font-bold mr-4">
                    1
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-2">Generate API Keys</h4>
                    <p className="text-gray-600 mb-2">
                      Create API keys in your dashboard under Settings → API. Keep your keys secure and never expose them in client-side code.
                    </p>
                    <a href="/docs/api/authentication" className="text-primary-600 font-medium hover:text-primary-700">
                      Learn more about authentication →
                    </a>
                  </div>
                </li>
                <li className="flex">
                  <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-primary-100 text-primary-600 font-bold mr-4">
                    2
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-2">Make Your First API Call</h4>
                    <p className="text-gray-600 mb-2">
                      Use your API key to make a simple GET request to /v1/waitlists to retrieve your waitlists.
                    </p>
                    <a href="/docs/api/examples" className="text-primary-600 font-medium hover:text-primary-700">
                      View code examples →
                    </a>
                  </div>
                </li>
                <li className="flex">
                  <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-primary-100 text-primary-600 font-bold mr-4">
                    3
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-2">Implement Webhooks</h4>
                    <p className="text-gray-600 mb-2">
                      Set up webhooks to receive real-time notifications when users join your waitlist or when other important events occur.
                    </p>
                    <a href="/docs/api/webhooks" className="text-primary-600 font-medium hover:text-primary-700">
                      Learn about webhooks →
                    </a>
                  </div>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ApiPage;
