'use client';

import { Mail, MessageCircle } from 'lucide-react';
import { SUPPORT_EMAIL, getWhatsAppUrl, SUPPORT_WHATSAPP_MSG } from '@/lib/constants';

export default function SoporteSection() {
  const whatsappUrl = getWhatsAppUrl(SUPPORT_WHATSAPP_MSG);
  const mailtoUrl = `mailto:${SUPPORT_EMAIL}`;

  return (
    <section id="soporte" className="py-16 md:py-24 px-4 sm:px-6 md:px-12 bg-background border-t border-t-gray-300">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="font-sans font-bold text-3xl md:text-4xl text-text mb-2">
          Soporte
        </h2>
        <p className="font-sans font-semibold text-lg text-text/80 mb-2">
          Envíanos un mensaje
        </p>
        <p className="text-text/70 font-body text-base mb-12">
          Estamos aquí para ayudarte. Elige cómo quieres contactarnos.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={mailtoUrl}
            className="flex items-center justify-center gap-3 bg-text text-white py-4 px-6 rounded-xl font-sans font-semibold hover:bg-primary transition-colors duration-300 hover:scale-[1.02]"
          >
            <Mail className="w-5 h-5" />
            Enviar correo
          </a>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 bg-[#25D366] text-white py-4 px-6 rounded-xl font-sans font-semibold hover:bg-[#20BD5A] transition-colors duration-300 hover:scale-[1.02]"
          >
            <MessageCircle className="w-5 h-5" />
            WhatsApp
          </a>
        </div>

        <p className="mt-8 text-text/50 font-body text-sm">
          Correo:{' '}
          <a href={mailtoUrl} className="text-primary hover:underline">
            {SUPPORT_EMAIL}
          </a>
          <br />
          Teléfono / WhatsApp: +1 849 739 2210
        </p>
      </div>
    </section>
  );
}
