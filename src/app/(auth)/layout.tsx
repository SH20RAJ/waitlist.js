import React from 'react';
import Link from 'next/link';
import { siteConfig } from '@/constants';

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="py-4 px-6 bg-white shadow-sm">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-primary-600">
            {siteConfig.website.name}
          </Link>
          <nav>
            <Link href="/" className="text-gray-600 hover:text-primary-600 transition-colors">
              Back to Home
            </Link>
          </nav>
        </div>
      </header>
      <main className="flex-grow">
        {children}
      </main>
      <footer className="py-4 px-6 bg-gray-50 border-t">
        <div className="container mx-auto text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} {siteConfig.website.name}. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
