'use client'
import React from 'react';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import HowItWorks from '@/components/HowItWorks';
import Testimonials from '@/components/Testimonials';
import Pricing from '@/components/Pricing';
import CTA from '@/components/CTA';

export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <HowItWorks />
      <Testimonials />
      <Pricing />
      <CTA />
    </main>
  );
}
