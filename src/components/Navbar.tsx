import React, { useState } from 'react';
import Link from 'next/link';
import { FiMenu, FiX, FiChevronDown } from 'react-icons/fi';
import { mainNavigation, siteConfig } from '@/constants';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container-custom py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-display font-bold text-primary-600">Waitlist.js</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {mainNavigation.map((item, index) => (
              <div key={index} className="relative group">
                {item.submenu ? (
                  <button className="flex items-center text-gray-700 hover:text-primary-600 transition-colors">
                    {item.title}
                    <FiChevronDown className="ml-1 h-4 w-4" />
                  </button>
                ) : (
                  <Link href={item.href} className="text-gray-700 hover:text-primary-600 transition-colors">
                    {item.title}
                  </Link>
                )}

                {item.submenu && (
                  <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10 hidden group-hover:block">
                    {item.submenu.map((subItem, subIndex) => (
                      <Link
                        key={subIndex}
                        href={subItem.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        {subItem.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/login" className="text-gray-700 hover:text-primary-600 transition-colors">
              Log in
            </Link>
            <Link href={siteConfig.cta.primary.url} className="btn btn-primary">
              {siteConfig.cta.primary.text}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-primary-600 focus:outline-none"
            >
              {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              {mainNavigation.map((item, index) => (
                <div key={index} className="flex flex-col">
                  {item.submenu ? (
                    <>
                      <button
                        className="flex items-center justify-between text-gray-700 hover:text-primary-600 transition-colors py-2"
                        onClick={() => {
                          // Toggle submenu visibility
                          const submenu = document.getElementById(`mobile-submenu-${index}`);
                          if (submenu) {
                            submenu.classList.toggle('hidden');
                          }
                        }}
                      >
                        {item.title}
                        <FiChevronDown className="ml-1 h-4 w-4" />
                      </button>
                      <div id={`mobile-submenu-${index}`} className="pl-4 mt-2 hidden space-y-2">
                        {item.submenu.map((subItem, subIndex) => (
                          <Link
                            key={subIndex}
                            href={subItem.href}
                            className="block text-gray-600 hover:text-primary-600 py-1"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {subItem.title}
                          </Link>
                        ))}
                      </div>
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      className="text-gray-700 hover:text-primary-600 transition-colors py-2"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.title}
                    </Link>
                  )}
                </div>
              ))}
              <div className="pt-4 flex flex-col space-y-4">
                <Link
                  href="/login"
                  className="text-center text-gray-700 hover:text-primary-600 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Log in
                </Link>
                <Link
                  href={siteConfig.cta.primary.url}
                  className="btn btn-primary text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {siteConfig.cta.primary.text}
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
