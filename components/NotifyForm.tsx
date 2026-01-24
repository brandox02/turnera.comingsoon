'use client';

import { useState, FormEvent } from 'react';
import { validateEmail } from '@/lib/utils';

export default function NotifyForm() {
  const [email, setEmail] = useState('');
  const [userType, setUserType] = useState<'business' | 'client'>('business');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setStatus('error');
      setMessage('Por favor, ingresa un email válido');
      return;
    }

    setStatus('loading');
    setMessage('');

    try {
      const response = await fetch('/api/notify', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, userType }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('success');
        setMessage('¡Listo! Te notificaremos cuando Turnera esté disponible.');
        setEmail('');
        setTimeout(() => {
          setStatus('idle');
          setMessage('');
        }, 5000);
      } else {
        setStatus('error');
        setMessage(data.error || 'Hubo un error. Por favor, intenta de nuevo.');
      }
    } catch (error) {
      setStatus('error');
      setMessage('Hubo un error al enviar tu email. Por favor, intenta de nuevo.');
    }
  };

  return (
    <div id="notify-form" className="max-w-xl mx-auto">
      <div className="group relative bg-white border border-primary/20 rounded-3xl p-8 md:p-10 shadow-[0_8px_32px_rgba(0,0,0,0.12)] hover:shadow-[0_12px_48px_rgba(172,33,33,0.15)] transition-all duration-500 overflow-hidden">
        {/* Glassmorphism overlay effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary-light/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
        
        {/* Subtle shine effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none" />

        {/* User Type Selection */}
        <div className="relative mb-8">
          <label className="block text-sm font-sans font-semibold text-text/70 mb-3">
            Soy:
          </label>
          <div className="flex gap-3 bg-text/5 p-1 rounded-2xl">
            <button
              type="button"
              onClick={() => setUserType('business')}
              className={`flex-1 px-5 py-3 rounded-xl font-sans font-bold text-sm transition-all duration-300 relative overflow-hidden ${
                userType === 'business'
                  ? 'bg-gradient-to-r from-primary via-primary-dark to-primary-light text-white shadow-[0_4px_16px_rgba(172,33,33,0.3)] scale-[1.02]'
                  : 'bg-transparent text-text/60 hover:text-text hover:bg-white/50'
              }`}
            >
              <span className="relative z-10">Soy un Negocio</span>
              {userType === 'business' && (
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent" />
              )}
            </button>
            <button
              type="button"
              onClick={() => setUserType('client')}
              className={`flex-1 px-5 py-3 rounded-xl font-sans font-bold text-sm transition-all duration-300 relative overflow-hidden ${
                userType === 'client'
                  ? 'bg-gradient-to-r from-primary via-primary-dark to-primary-light text-white shadow-[0_4px_16px_rgba(172,33,33,0.3)] scale-[1.02]'
                  : 'bg-transparent text-text/60 hover:text-text hover:bg-white/50'
              }`}
            >
              <span className="relative z-10">Soy Cliente</span>
              {userType === 'client' && (
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent" />
              )}
            </button>
          </div>
        </div>

        {/* Email Form */}
        <form onSubmit={handleSubmit} className="relative mb-6">
          <div className="flex flex-col md:flex-row gap-3">
            <div className="flex-1 relative">
              <input
                type="email"
                id="email-input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="tu@email.com"
                required
                disabled={status === 'loading'}
                className="w-full bg-background border-2 border-text/15 rounded-full px-6 py-4 md:py-4.5 text-text placeholder:text-text/40 focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all duration-300 font-body disabled:opacity-50 disabled:cursor-not-allowed shadow-sm hover:shadow-md hover:border-text/25"
              />
            </div>
            <button
              type="submit"
              disabled={status === 'loading'}
              className="relative bg-gradient-to-r from-primary via-primary-dark to-primary-light text-white px-8 md:px-10 py-4 md:py-4.5 rounded-full font-sans font-bold text-sm uppercase tracking-widest hover:shadow-[0_8px_32px_rgba(172,33,33,0.4)] hover:scale-105 active:scale-100 transition-all duration-300 whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 overflow-hidden group"
            >
              <span className="relative z-10">
                {status === 'loading' ? 'Enviando...' : 'Notificarme'}
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
            </button>
          </div>
        </form>

        {/* Privacy Message */}
        <p className="relative text-text/60 text-xs md:text-sm font-body text-center mb-4 flex items-center justify-center gap-2">
          <svg className="w-4 h-4 text-primary/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
          <span>Cero spam. Solo te escribiremos para el lanzamiento.</span>
        </p>

        {/* Status Message */}
        {message && (
          <div
            className={`relative mt-4 p-4 rounded-2xl text-sm font-body text-center transition-all duration-300 ${
              status === 'success'
                ? 'bg-[#4ade80]/10 text-[#16a34a] border border-[#4ade80]/20'
                : status === 'error'
                  ? 'bg-[#ef4444]/10 text-[#dc2626] border border-[#ef4444]/20'
                  : 'bg-text/5 text-text/60'
            }`}
          >
            {status === 'success' && (
              <svg className="w-5 h-5 inline-block mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            )}
            {status === 'error' && (
              <svg className="w-5 h-5 inline-block mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            )}
            {message}
          </div>
        )}
      </div>
    </div>
  );
}
