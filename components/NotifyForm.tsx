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
      <div className="bg-gradient-to-br from-primary/5 to-primary-light/5 border border-primary/10 rounded-3xl p-8">
        <div className="flex gap-4 mb-6">
          <button
            type="button"
            onClick={() => setUserType('business')}
            className={`flex-1 px-6 py-3 rounded-full font-sans font-bold text-sm transition-colors ${userType === 'business'
                ? 'bg-primary text-white hover:bg-primary-dark'
                : 'bg-background border border-text/20 text-text hover:bg-text/5'
              }`}
          >
            Soy un Negocio
          </button>
          <button
            type="button"
            onClick={() => setUserType('client')}
            className={`flex-1 px-6 py-3 rounded-full font-sans font-bold text-sm transition-colors ${userType === 'client'
                ? 'bg-primary text-white hover:bg-primary-dark'
                : 'bg-background border border-text/20 text-text hover:bg-text/5'
              }`}
          >
            Soy Cliente
          </button>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-3 mb-4">
          <input
            type="email"
            id="email-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="tu@email.com"
            required
            disabled={status === 'loading'}
            className="flex-1 bg-background border border-text/20 rounded-full px-6 py-4 text-text placeholder:text-text/40 focus:outline-none focus:border-primary transition-colors font-body disabled:opacity-50"
          />
          <button
            type="submit"
            disabled={status === 'loading'}
            className="bg-gradient-to-r from-primary via-primary-dark to-primary-light text-white px-8 py-4 rounded-full font-sans font-bold text-sm uppercase tracking-widest hover:shadow-[0_0_30px_rgba(172,33,33,0.4)] transition-all duration-300 whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {status === 'loading' ? 'Enviando...' : 'Notificarme'}
          </button>
        </form>
        <p className="text-text/60 text-xs font-body text-center mb-4">
          Cero spam. Solo te escribiremos para el lanzamiento.
        </p>
        {message && (
          <p
            className={`text-sm font-body mt-4 text-center ${status === 'success'
                ? 'text-[#4ade80]'
                : status === 'error'
                  ? 'text-[#ef4444]'
                  : 'text-text/60'
              }`}
          >
            {message}
          </p>
        )}
      </div>
    </div>
  );
}
