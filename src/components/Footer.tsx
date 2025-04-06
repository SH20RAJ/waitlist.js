import React from 'react';
import Link from 'next/link';
import { FiTwitter, FiGithub, FiLinkedin, FiYoutube } from 'react-icons/fi';
import { footerNavigation, siteConfig } from '@/constants';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-4">
              <span className="text-2xl font-display font-bold text-white">Waitlist.js</span>
            </Link>
            <p className="text-gray-400 mb-4 max-w-md">
              {siteConfig.website.description}
            </p>
            <div className="flex space-x-4">
              <a href="https://twitter.com/waitlistjs" className="text-gray-400 hover:text-white transition-colors">
                <FiTwitter size={20} />
              </a>
              <a href="https://github.com/waitlistjs" className="text-gray-400 hover:text-white transition-colors">
                <FiGithub size={20} />
              </a>
              <a href="https://linkedin.com/company/waitlistjs" className="text-gray-400 hover:text-white transition-colors">
                <FiLinkedin size={20} />
              </a>
              <a href="https://youtube.com/waitlistjs" className="text-gray-400 hover:text-white transition-colors">
                <FiYoutube size={20} />
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-lg font-bold mb-4">Product</h3>
            <ul className="space-y-2">
              {footerNavigation.product.map((item, index) => (
                <li key={index}>
                  <Link href={item.href} className="text-gray-400 hover:text-white transition-colors">
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-bold mb-4">Resources</h3>
            <ul className="space-y-2">
              {footerNavigation.resources.map((item, index) => (
                <li key={index}>
                  <Link href={item.href} className="text-gray-400 hover:text-white transition-colors">
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-bold mb-4">Company</h3>
            <ul className="space-y-2">
              {footerNavigation.company.map((item, index) => (
                <li key={index}>
                  <Link href={item.href} className="text-gray-400 hover:text-white transition-colors">
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} {siteConfig.website.name}. All rights reserved.
          </p>
          <div className="flex space-x-6">
            {footerNavigation.legal.slice(0, 3).map((item, index) => (
              <Link key={index} href={item.href} className="text-gray-500 hover:text-white text-sm transition-colors">
                {item.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
