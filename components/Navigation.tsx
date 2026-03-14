'use client';

import { useState } from 'react';
import { scrollToElement } from '@/lib/utils';
import { LogIn } from 'lucide-react';
import Logo from './Logo';
import AccessModal from './AccessModal';

export default function Navigation() {
  const [isAccessModalOpen, setIsAccessModalOpen] = useState(false);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    scrollToElement(sectionId);
  };

  const navLinks = [
    { id: 'what-is', label: 'Acerca de' },
    { id: 'features', label: 'Funcionalidades' },
    { id: 'coming-soon', label: 'Acceso' },
    { id: 'soporte', label: 'Soporte' },
  ];

  return (
    <>
      <nav className="fixed top-0 w-full z-50 backdrop-blur-md border-b border-text/5">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 md:px-12 h-16 md:h-20 flex items-center justify-between gap-3">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center group transition-transform group-hover:scale-105 flex-shrink-0 min-w-0"
          >
            <Logo
              variant="horizontal"
              color="white"
              size="xl"
              priority={true}
              showTextOnMobile={false}
              className="h-10 sm:h-12"
            />
          </a>

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

          <div className="flex-shrink-0">
            <button
              type="button"
              onClick={() => setIsAccessModalOpen(true)}
              className="bg-gradient-to-r from-primary via-primary-dark to-primary-light text-white px-4 md:px-6 py-2.5 rounded-full font-sans font-bold text-xs md:text-sm uppercase tracking-wider hover:shadow-[0_0_20px_rgba(172,33,33,0.4)] transition-all duration-300 hover:scale-105 inline-flex items-center gap-2"
            >
              <LogIn className="w-4 h-4 flex-shrink-0" />
              <span>Entrar</span>
            </button>
          </div>
        </div>
      </nav>

      <AccessModal isOpen={isAccessModalOpen} onClose={() => setIsAccessModalOpen(false)} />
    </>
  );
}
