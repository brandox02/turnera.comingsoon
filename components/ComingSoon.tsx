'use client';

import { APP_TURNERA_URL, BOOK_TURNERA_URL } from '@/lib/constants';
import { Store, Calendar, ArrowRight } from 'lucide-react';

export default function ComingSoon() {
  return (
    <section
      id="coming-soon"
      className="py-24 md:py-32 px-6 md:px-12 border-b border-text/5"
    >
      <div className="max-w-screen-xl mx-auto">
        <div className="text-center fade-in-up mb-16">
          <h2 className="font-sans font-black text-5xl md:text-7xl lg:text-8xl tracking-tighter mb-6">
            Accede a <span className="text-primary">Turnera</span>
          </h2>
          <p className="text-xl md:text-2xl text-text/70 font-body font-medium max-w-2xl mx-auto leading-relaxed">
            Elige cómo quieres usar Turnera.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-4xl mx-auto">
          {/* Para negocios */}
          <a
            href={APP_TURNERA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative bg-white border border-primary/20 rounded-3xl p-8 md:p-10 hover:border-primary/40 hover:shadow-[0_20px_60px_rgba(172,33,33,0.15)] transition-all duration-500 hover:scale-[1.02] text-left"
          >
            <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-primary via-primary-dark to-primary-light rounded-2xl flex items-center justify-center mb-6">
              <Store className="w-8 h-8 md:w-10 md:h-10 text-white" />
            </div>
            <h3 className="font-sans font-bold text-2xl md:text-3xl text-text mb-3">
              Para negocios
            </h3>
            <p className="text-text/70 font-body text-base md:text-lg leading-relaxed mb-6">
              Gestiona citas, filas, pagos y clientes desde tu celular. Automatiza reservas y maximiza tus ingresos.
            </p>
            <span className="inline-flex items-center gap-2 text-primary font-sans font-bold text-sm uppercase tracking-wider group-hover:gap-3 transition-all">
              Gestionar mi negocio
              <ArrowRight className="w-4 h-4" />
            </span>
          </a>

          {/* Para clientes */}
          <a
            href={BOOK_TURNERA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative bg-white border border-primary/20 rounded-3xl p-8 md:p-10 hover:border-primary/40 hover:shadow-[0_20px_60px_rgba(172,33,33,0.15)] transition-all duration-500 hover:scale-[1.02] text-left"
          >
            <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-primary via-primary-dark to-primary-light rounded-2xl flex items-center justify-center mb-6">
              <Calendar className="w-8 h-8 md:w-10 md:h-10 text-white" />
            </div>
            <h3 className="font-sans font-bold text-2xl md:text-3xl text-text mb-3">
              Para clientes
            </h3>
            <p className="text-text/70 font-body text-base md:text-lg leading-relaxed mb-6">
              Agenda tu cita en barberías y salones en segundos. Elige horario, servicio y listo.
            </p>
            <span className="inline-flex items-center gap-2 text-primary font-sans font-bold text-sm uppercase tracking-wider group-hover:gap-3 transition-all">
              Turnera cliente
              <ArrowRight className="w-4 h-4" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
