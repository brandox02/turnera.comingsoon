'use client';

import { useEffect } from 'react';
import { APP_TURNERA_URL, BOOK_TURNERA_URL } from '@/lib/constants';
import { Store, Calendar, X, ArrowRight } from 'lucide-react';

interface AccessModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AccessModal({ isOpen, onClose }: AccessModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="access-modal-title"
    >
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal */}
      <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-xl border border-text/10 overflow-hidden">
        <div className="p-6 md:p-8">
          <div className="flex items-start justify-between gap-4 mb-6">
            <h2 id="access-modal-title" className="font-sans font-black text-2xl md:text-3xl text-text">
              ¿Cómo quieres usar Turnera?
            </h2>
            <button
              type="button"
              onClick={onClose}
              className="p-2 rounded-full text-text/60 hover:text-text hover:bg-text/5 transition-colors"
              aria-label="Cerrar"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="flex flex-col gap-3 mt-5">
            <a
              href={APP_TURNERA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center gap-4 p-5 rounded-2xl bg-gradient-to-br from-primary/5 via-white to-primary-light/5 border border-primary/15 hover:border-primary/30 hover:shadow-[0_8px_30px_rgba(172,33,33,0.12)] transition-all duration-300 text-left overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 pointer-events-none" />
              <div className="relative w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-primary-light flex items-center justify-center flex-shrink-0 shadow-[0_8px_20px_rgba(172,33,33,0.25)] group-hover:shadow-[0_10px_28px_rgba(172,33,33,0.35)] group-hover:scale-105 transition-all duration-300">
                <Store className="w-7 h-7 text-white" />
              </div>
              <div className="relative min-w-0 flex-1">
                <h3 className="font-sans font-bold text-lg text-text mb-0.5">
                  Turnera para negocios
                </h3>
                <p className="text-text/60 font-body text-sm leading-snug mb-2">
                  Gestiona citas, pagos y clientes desde tu celular.
                </p>
                <span className="inline-flex items-center gap-2 text-primary font-sans font-bold text-sm group-hover:gap-3 transition-all">
                  Acceder
                  <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </a>

            <a
              href={BOOK_TURNERA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center gap-4 p-5 rounded-2xl bg-gradient-to-br from-primary/5 via-white to-primary-light/5 border border-primary/15 hover:border-primary/30 hover:shadow-[0_8px_30px_rgba(172,33,33,0.12)] transition-all duration-300 text-left overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 pointer-events-none" />
              <div className="relative w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-primary-light flex items-center justify-center flex-shrink-0 shadow-[0_8px_20px_rgba(172,33,33,0.25)] group-hover:shadow-[0_10px_28px_rgba(172,33,33,0.35)] group-hover:scale-105 transition-all duration-300">
                <Calendar className="w-7 h-7 text-white" />
              </div>
              <div className="relative min-w-0 flex-1">
                <h3 className="font-sans font-bold text-lg text-text mb-0.5">
                  Turnera cliente
                </h3>
                <p className="text-text/60 font-body text-sm leading-snug mb-2">
                  Agenda tu cita en barberías y salones en segundos.
                </p>
                <span className="inline-flex items-center gap-2 text-primary font-sans font-bold text-sm group-hover:gap-3 transition-all">
                  Entrar
                  <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
