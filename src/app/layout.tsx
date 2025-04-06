import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Waitlist.js - Transform Your Waitlist Into a Growth Engine',
  description: 'Waitlist.js is a revolutionary SaaS platform that transforms traditional waitlists into powerful growth engines with AI, gamification, and behavioral psychology.',
  keywords: 'waitlist, product launch, growth engine, referral system, SaaS, AI, gamification',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Poppins:wght@500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-light text-dark">
        {children}
      </body>
    </html>
  );
}
