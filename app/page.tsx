'use client';

import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import WhatIsTurnera from '@/components/WhatIsTurnera';
import Features from '@/components/Features';
import ComingSoon from '@/components/ComingSoon';
import Footer from '@/components/Footer';
import { useScrollAnimation } from './hooks/useScrollAnimation';

export default function Home() {
  useScrollAnimation();

  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <WhatIsTurnera />
      <Features />
      <ComingSoon />
      <Footer />
    </main>
  );
}
