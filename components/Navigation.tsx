'use client';

import { scrollToElement } from '@/lib/utils';
import Logo from './Logo';

export default function Navigation() {
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    scrollToElement(sectionId);
  };

  const handleNotifyClick = () => {
    scrollToElement('notify-form');
    setTimeout(() => {
      const emailInput = document.getElementById('email-input');
      if (emailInput) {
        emailInput.focus();
      }
    }, 500);
  };

  const navLinks = [
    { id: 'what-is', label: 'Acerca de' },
    { id: 'features', label: 'Funcionalidades' },
    { id: 'coming-soon', label: 'Contacto' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-md border-b border-text/5">
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="flex items-center group transition-transform group-hover:scale-105"
        >
          <Logo
            variant="horizontal"
            color="white"
            size="xl"
            priority={true}
            showTextOnMobile={false}
            className="h-12"
          />
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={(e) => handleLinkClick(e, link.id)}
              className="text-text/70 hover:text-primary font-body text-sm font-medium transition-colors duration-300 relative group"
            >
              <span className="relative z-10">{link.label}</span>
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </div>

        {/* CTA Button - Visible on all screens */}
        <button
          onClick={handleNotifyClick}
          className="bg-gradient-to-r from-primary via-primary-dark to-primary-light text-white px-5 md:px-6 py-2.5 rounded-full font-sans font-bold text-xs md:text-sm uppercase tracking-wider hover:shadow-[0_0_20px_rgba(172,33,33,0.4)] transition-all duration-300 hover:scale-105 whitespace-nowrap"
        >
          Notificarme
        </button>
      </div>
    </nav>
  );
}
