'use client';

import { useEffect } from 'react';
import { APP_TURNERA_URL, BOOK_TURNERA_URL } from '@/lib/constants';
import { ArrowRight, Calendar, Store } from 'lucide-react';

export default function Hero() {
  useEffect(() => {
    const revealElements = document.querySelectorAll('.reveal-inner');
    revealElements.forEach((el, index) => {
      setTimeout(() => {
        (el as HTMLElement).style.animation = 'reveal 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards';
      }, index * 100);
    });
  }, []);

  return (
    <header
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-32 pb-20 overflow-x-hidden"
    >
      {/* Base Dark Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#1a1a1a] to-[#0f0f0f]"></div>

      {/* Radial Gradient - Top Left Red Glow */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background: 'radial-gradient(circle at 20% 30%, rgba(172, 33, 33, 0.4) 0%, transparent 50%)',
        }}
      ></div>

      {/* Radial Gradient - Bottom Right Red Glow */}
      <div
        className="absolute inset-0 opacity-25"
        style={{
          background: 'radial-gradient(circle at 80% 70%, rgba(180, 60, 58, 0.35) 0%, transparent 50%)',
        }}
      ></div>

      {/* Radial Gradient - Center Red Accent */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(174, 33, 32, 0.3) 0%, transparent 60%)',
        }}
      ></div>

      {/* Linear Gradient Overlay - Dark to Red Tint */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a] via-[#1a0f0f] to-[#0f0a0a] opacity-80"></div>

      {/* Radial Gradient - Top Right Subtle Red */}
      <div
        className="absolute inset-0 opacity-15"
        style={{
          background: 'radial-gradient(ellipse at top right, rgba(172, 33, 33, 0.2) 0%, transparent 70%)',
        }}
      ></div>

      {/* Noise Texture */}
      <div
        className="absolute inset-0 opacity-[0.03] noise-texture"
        style={{
          backgroundImage:
            "url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')",
        }}
      ></div>

      {/* Content */}
      <div className="relative z-10 w-full px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="text-center mb-16 max-w-screen-2xl mx-auto">
          {/* Badge */}
          {/* <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full mb-8 animate-pulse">
            <span className="text-white text-xs font-sans font-bold uppercase tracking-widest">
              🚀 Lanzamiento en menos de 20 días
            </span>
          </div> */}

          {/* Main Headline */}
          <div className="mb-6 md:mb-8 overflow-visible" style={{ width: '100%' }}>
            <h1 className="font-sans font-black text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl leading-none tracking-tighter text-white w-full overflow-visible">
              <span className="block overflow-visible mb-1 md:mb-0 lg:-mb-1">
                <span className="bg-gradient-to-r from-primary via-primary-dark to-primary-light bg-clip-text text-transparent">
                  Turnera
                </span>
              </span>
              <span className="block overflow-visible">
                <span className="text-white">
                  reserva y gestiona
                </span>
              </span>
            </h1>
          </div>

          {/* Subheadline */}
          <div className="max-w-2xl mx-auto mb-10 md:mb-12">
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 font-body font-medium leading-tight mb-2 md:mb-3">
              Tu barbería o salón, en un solo lugar
            </p>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/70 font-body leading-relaxed">
              Gestiona citas, filas y pagos desde tu celular — o agenda tu cita en segundos. Elige tu camino.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 md:gap-8">
            <div className="flex flex-col items-center gap-2 w-full sm:w-auto">
              <span className="text-white/60 text-xs font-sans font-bold uppercase tracking-wider">
                Para tu negocio
              </span>
              <a
                href={APP_TURNERA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-primary via-primary-dark to-primary-light text-white px-10 py-5 rounded-full font-sans font-black text-sm uppercase tracking-widest hover:shadow-[0_0_40px_rgba(172,33,33,0.4)] transition-all duration-300 inline-flex items-center gap-3 group w-full sm:w-auto justify-center"
              >
                <Store className="w-5 h-5" />
                <span>Gestionar mi negocio</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
            <div className="flex flex-col items-center gap-2 w-full sm:w-auto">
              <span className="text-white/60 text-xs font-sans font-bold uppercase tracking-wider">
                Turnera cliente
              </span>
              <a
                href={BOOK_TURNERA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-white/30 text-white px-10 py-5 rounded-full font-sans font-bold text-sm uppercase tracking-widest hover:bg-white/10 hover:border-white/50 transition-all duration-300 inline-flex items-center gap-3 group w-full sm:w-auto justify-center"
              >
                <Calendar className="w-5 h-5" />
                <span>Soy cliente</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
