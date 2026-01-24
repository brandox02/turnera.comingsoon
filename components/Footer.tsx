'use client';

import { Facebook, Instagram, Twitter } from 'lucide-react';
import { scrollToElement } from '@/lib/utils';
import Logo from './Logo';

export default function Footer() {
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    scrollToElement(sectionId);
  };

  return (
    <footer className="bg-text text-white py-12 px-6 md:px-12 border-t border-white/10">
      <div className="max-w-screen-2xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Logo */}
          <div className="flex items-center">
            <Logo
              variant="horizontal"
              color="white"
              size="md"
              priority={false}
              className="h-10"
            />
          </div>

          {/* Links */}
          <div className="flex items-center gap-8 text-sm font-body">
            <a
              href="#what-is"
              onClick={(e) => handleLinkClick(e, 'what-is')}
              className="hover:text-primary-light transition-colors"
            >
              Acerca de
            </a>
            <a
              href="#features"
              onClick={(e) => handleLinkClick(e, 'features')}
              className="hover:text-primary-light transition-colors"
            >
              Funcionalidades
            </a>
            <a
              href="#coming-soon"
              onClick={(e) => handleLinkClick(e, 'coming-soon')}
              className="hover:text-primary-light transition-colors"
            >
              Contacto
            </a>
          </div>

          {/* Social & Copyright */}
          <div className="flex items-center gap-6">
            <a
              href="https://www.instagram.com/turnera.official"
              target="_blank"
              className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-primary hover:border-primary transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-[18px] h-[18px]" />
            </a>
            <a
              target='_blank'
              href="https://www.instagram.com/turnera.official"
              className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-primary hover:border-primary transition-colors"
              aria-label="Twitter"
            >
              <Facebook className="w-[18px] h-[18px]" />
            </a>
            <span className="text-white/40 text-xs font-body">© 2026 Turnera. Todos los derechos reservados.</span>
          </div>
        </div>

        {/* Legal Links */}
        {/* <div className="flex flex-col items-center gap-2 mt-8 text-xs text-white/40 font-body">
          <p>Hecho con pasión para LATAM.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">
              Privacidad
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Términos
            </a>
          </div>
        </div> */}
      </div>
    </footer>
  );
}
