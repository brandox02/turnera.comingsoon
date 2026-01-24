'use client';

import { scrollToElement } from '@/lib/utils';
import Logo from './Logo';

export default function Navigation() {
  const handleNotifyClick = () => {
    scrollToElement('notify-form');
    setTimeout(() => {
      const emailInput = document.getElementById('email-input');
      if (emailInput) {
        emailInput.focus();
      }
    }, 500);
  };

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-background/80 border-b border-text/5 bg-white">
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center group transition-transform group-hover:scale-105">
          <Logo
            variant="horizontal"
            color="white"
            size="xl"
            priority={true}
            showTextOnMobile={false}
            className="h-10 md:h-12"
          />
        </a>

        {/* CTA Button */}
        <button
          onClick={handleNotifyClick}
          className="bg-gradient-to-r from-primary via-primary-dark to-primary-light text-white px-6 py-2.5 rounded-full font-sans font-bold text-sm uppercase tracking-wider hover:shadow-[0_0_20px_rgba(172,33,33,0.4)] transition-all duration-300 hover:scale-105"
        >
          Notificarme
        </button>
      </div>
    </nav>
  );
}
