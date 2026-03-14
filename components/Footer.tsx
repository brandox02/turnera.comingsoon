'use client';

import { Facebook, Instagram } from 'lucide-react';
import { scrollToElement } from '@/lib/utils';
import { APP_TURNERA_URL, BOOK_TURNERA_URL } from '@/lib/constants';
import Logo from './Logo';

export default function Footer() {
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    scrollToElement(sectionId);
  };

  return (
    <footer className="relative bg-text text-white py-16 md:py-20 px-6 md:px-12 border-t border-white/10 overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-transparent to-transparent pointer-events-none" />

      <div className="relative max-w-screen-2xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-8">
          {/* Logo Section */}
          <div className="flex flex-col items-center md:items-start">
            <Logo
              variant="horizontal"
              color="white"
              size="md"
              priority={false}
              className="h-12 mb-4"
            />
            <p className="text-white/60 text-sm font-body leading-relaxed max-w-xs text-center md:text-left">
              La solución completa para gestionar tu barbería o salón de belleza.
            </p>
          </div>

          {/* Navigation + Productos */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="font-sans font-bold text-sm uppercase tracking-wider text-white/80 mb-4">
              Navegación
            </h3>
            <nav className="flex flex-col gap-3">
              <a
                href="#what-is"
                onClick={(e) => handleLinkClick(e, 'what-is')}
                className="text-white/70 hover:text-primary-light transition-colors duration-300 font-body text-sm relative group"
              >
                <span className="relative z-10">Acerca de</span>
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-primary-light group-hover:w-full transition-all duration-300" />
              </a>
              <a
                href="#features"
                onClick={(e) => handleLinkClick(e, 'features')}
                className="text-white/70 hover:text-primary-light transition-colors duration-300 font-body text-sm relative group"
              >
                <span className="relative z-10">Funcionalidades</span>
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-primary-light group-hover:w-full transition-all duration-300" />
              </a>
              <a
                href="#coming-soon"
                onClick={(e) => handleLinkClick(e, 'coming-soon')}
                className="text-white/70 hover:text-primary-light transition-colors duration-300 font-body text-sm relative group"
              >
                <span className="relative z-10">Acceso</span>
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-primary-light group-hover:w-full transition-all duration-300" />
              </a>
              <a
                href="#soporte"
                onClick={(e) => handleLinkClick(e, 'soporte')}
                className="text-white/70 hover:text-primary-light transition-colors duration-300 font-body text-sm relative group"
              >
                <span className="relative z-10">Soporte</span>
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-primary-light group-hover:w-full transition-all duration-300" />
              </a>
            </nav>
            <h3 className="font-sans font-bold text-sm uppercase tracking-wider text-white/80 mb-4 mt-8">
              Productos
            </h3>
            <nav className="flex flex-col gap-3">
              <a
                href={APP_TURNERA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-primary-light transition-colors duration-300 font-body text-sm relative group"
              >
                <span className="relative z-10">Turnera para negocios</span>
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-primary-light group-hover:w-full transition-all duration-300" />
              </a>
              <a
                href={BOOK_TURNERA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-primary-light transition-colors duration-300 font-body text-sm relative group"
              >
                <span className="relative z-10">Turnera cliente</span>
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-primary-light group-hover:w-full transition-all duration-300" />
              </a>
            </nav>
          </div>

          {/* Social & Contact */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="font-sans font-bold text-sm uppercase tracking-wider text-white/80 mb-4">
              Síguenos
            </h3>
            <div className="flex items-center gap-3 mb-6">
              <a
                href="https://www.instagram.com/turnera.app"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative w-12 h-12 rounded-xl border-2 border-white/20 flex items-center justify-center hover:border-primary hover:bg-primary/10 transition-all duration-300 hover:scale-110 hover:shadow-[0_0_20px_rgba(172,33,33,0.3)]"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-white/80 group-hover:text-primary-light transition-colors duration-300" />
              </a>
              <a
                href="https://www.instagram.com/turnera.app"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative w-12 h-12 rounded-xl border-2 border-white/20 flex items-center justify-center hover:border-primary hover:bg-primary/10 transition-all duration-300 hover:scale-110 hover:shadow-[0_0_20px_rgba(172,33,33,0.3)]"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5 text-white/80 group-hover:text-primary-light transition-colors duration-300" />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 my-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/50 text-xs md:text-sm font-body text-center md:text-left">
            © 2026 Turnera. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-1 text-white/40 text-xs font-body">
            <span>Hecho con</span>
            <span className="text-primary-light">❤️</span>
            <span>para RD </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
