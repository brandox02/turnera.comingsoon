'use client';

import Image from 'next/image';
import { BOOK_TURNERA_URL, TURNERA_BUSINESS_APPSTORE_URL, TURNERA_BUSINESS_PLAY_URL } from '@/lib/constants';
import { ArrowUpRight } from 'lucide-react';

export default function Hero() {
  return (
    <header
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-16 sm:pt-28 sm:pb-20 md:pt-32 md:pb-24 overflow-x-hidden"
    >
      {/* ── Background ── */}
      <div className="absolute inset-0 bg-[#080808]" />
      <div
        className="absolute inset-0 opacity-40"
        style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(169,30,31,0.35) 0%, transparent 70%)' }}
      />
      <div
        className="absolute inset-0 opacity-20"
        style={{ background: 'radial-gradient(ellipse 50% 40% at 15% 60%, rgba(169,30,31,0.25) 0%, transparent 60%)' }}
      />
      {/* Noise grain */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "url('data:image/svg+xml,%3Csvg viewBox=%220 0 256 256%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22n%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%224%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23n)%22/%3E%3C/svg%3E')",
        }}
      />
      {/* Subtle horizontal rule at top */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* ── Content ── */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-5 sm:px-8 md:px-12 flex flex-col items-center text-center">

        {/* Eyebrow pill */}
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur-sm">
          
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-white/50">
            Barbería · Salón · Spa
          </span>
        </div>

        {/* ── Main headline ── */}
        <h1 className="font-black tracking-tighter leading-[0.9] text-white mb-6 sm:mb-8"
          style={{ fontSize: 'clamp(3.5rem, 12vw, 8.5rem)' }}>
          <span
            className="block"
            style={{
              backgroundImage: 'linear-gradient(135deg, #e84040 0%, #A91E1F 40%, #7a1313 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Turnera
          </span>
          <span className="block text-white/90" style={{ fontSize: '0.55em', letterSpacing: '-0.04em' }}>
            reserva y gestiona por ti 
          </span>
        </h1>

        {/* Subheading */}
        <p className="max-w-xl text-white/55 leading-relaxed mb-12 sm:mb-14"
          style={{ fontSize: 'clamp(1rem, 2.5vw, 1.2rem)' }}>
          Reservas automáticas, clientes felices, cero caos —<br className="hidden sm:block" />
          Todo funciona mientras tú trabajas
        </p>

        {/* ── Store badges ── */}
        <div className="w-full max-w-md mb-10 sm:mb-12 flex flex-col sm:flex-row gap-3 sm:gap-4">
          {/* App Store */}
          <a
            href={TURNERA_BUSINESS_APPSTORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Descargar en App Store"
            className="group relative flex-1 flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.06] px-5 py-4 backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:bg-white/[0.1] active:scale-[0.98]"
          >
            {/* Apple icon */}
            <svg className="h-8 w-8 shrink-0 text-white" viewBox="0 0 814 1000" fill="currentColor" aria-hidden>
              <path d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76 0-103.7 40.8-165.9 40.8s-105-37.5-157.7-108.6c-60.7-82.1-108.5-212.9-108.5-337.9C0 445.7 70.7 327.7 160.7 271.6c45.5-28.3 97.6-45.2 151.4-44.5 73.3 1.3 128.2 48 168.7 48 40.5 0 102.2-50.7 190.5-50.7 34.1 0 130.3 4.5 190.5 70.7z M545.7 210.3C577 173.1 593 122.5 593 71.9c0-7.1-.6-14.3-1.9-20.7-44.5 1.9-98.3 29.3-131.5 71.9-28.6 36.3-49.7 86.8-49.7 138.1 0 7.7 1.3 15.4 1.9 17.9 2.6.6 6.5 1.3 10.4 1.3 40.5 0 90.3-26.1 123.5-70.1z" />
            </svg>
            <div className="text-left">
              <p className="text-[10px] uppercase tracking-widest text-white/40 leading-none mb-0.5">Descargar en</p>
              <p className="text-base font-bold text-white leading-none">App Store</p>
            </div>
            <ArrowUpRight
              className="ml-auto h-4 w-4 text-white/20 transition-all duration-300 group-hover:text-white/50 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              aria-hidden
            />
          </a>

          {/* Google Play */}
          <a
            href={TURNERA_BUSINESS_PLAY_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Descargar en Google Play"
            className="group relative flex-1 flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.06] px-5 py-4 backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:bg-white/[0.1] active:scale-[0.98]"
          >
            {/* Google Play icon */}
            <svg className="h-8 w-8 shrink-0" viewBox="0 0 512 512" aria-hidden>
              <defs>
                <linearGradient id="gp1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#00C6FF" />
                  <stop offset="100%" stopColor="#0072FF" />
                </linearGradient>
                <linearGradient id="gp2" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#FFD945" />
                  <stop offset="100%" stopColor="#FFA000" />
                </linearGradient>
                <linearGradient id="gp3" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#FF3D00" />
                  <stop offset="100%" stopColor="#DD2C00" />
                </linearGradient>
                <linearGradient id="gp4" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#00E676" />
                  <stop offset="100%" stopColor="#00897B" />
                </linearGradient>
              </defs>
              <path fill="url(#gp1)" d="M48 32l208 224L48 480c-8-8-16-20-16-36V68c0-16 8-28 16-36z" />
              <path fill="url(#gp2)" d="M352 224L256 128l96-68 80 56c16 11 24 27 24 40s-8 29-24 40l-80 28z" />
              <path fill="url(#gp3)" d="M48 480l208-224 96 96-224 160c-24 16-56 0-80-32z" />
              <path fill="url(#gp4)" d="M48 32c24-32 56-48 80-32l224 160-96 96L48 32z" />
            </svg>
            <div className="text-left">
              <p className="text-[10px] uppercase tracking-widest text-white/40 leading-none mb-0.5">Disponible en</p>
              <p className="text-base font-bold text-white leading-none">Google Play</p>
            </div>
            <ArrowUpRight
              className="ml-auto h-4 w-4 text-white/20 transition-all duration-300 group-hover:text-white/50 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              aria-hidden
            />
          </a>
        </div>

        {/* ── Divider ── */}
        <div className="flex items-center gap-4 w-full max-w-xs mb-8">
          <div className="flex-1 h-px bg-white/10" />
          <span className="text-[11px] uppercase tracking-[0.2em] text-white/25 font-semibold">¿eres cliente?</span>
          <div className="flex-1 h-px bg-white/10" />
        </div>

        {/* Client CTA */}
        <a
          href={BOOK_TURNERA_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-2.5 rounded-full border border-white/15 px-7 py-3 text-sm font-semibold uppercase tracking-widest text-white/60 transition-all duration-300 hover:border-white/30 hover:text-white hover:bg-white/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/40"
        >
          Reservar cita
          <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden />
        </a>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-[#080808] to-transparent pointer-events-none" />
    </header>
  );
}