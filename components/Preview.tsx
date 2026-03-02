'use client';

import {
  Search,
  Download,
  Bell,
  CheckSquare,
  BarChart3,
  DollarSign,
  TrendingUp,
  Megaphone,
} from 'lucide-react';
import { scrollToElement } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';

const clientFlow = [
  {
    icon: Search,
    title: 'Buscar y agendar',
    description: 'El cliente encuentra tu negocio en línea y ve horarios disponibles 24/7',
    type: 'Cliente',
  },
  {
    icon: Download,
    title: 'Pagar en Línea',
    description: 'Pago seguro con tarjeta o wallet digital. Depósito o pago completo',
    type: 'Cliente',
  },
  {
    icon: Bell,
    title: 'Recibir Notificación',
    description: 'Confirmación instantánea + recordatorios automáticos 24h y 1h antes',
    type: 'Cliente',
  },
  {
    icon: CheckSquare,
    title: 'Ver Posición',
    description: 'Cola en tiempo real con posición exacta y tiempo de espera estimado',
    type: 'Cliente',
  },
];

const businessFlow = [
  {
    icon: BarChart3,
    title: 'Panel en Vivo',
    description: 'Ve todas las reservas, llegadas sin cita e ingresos en tiempo real',
    type: 'Negocio',
  },
  {
    icon: DollarSign,
    title: 'Gestionar Cola',
    description: 'Cola inteligente combina citas agendadas + turnos presenciales',
    type: 'Negocio',
  },
  {
    icon: TrendingUp,
    title: 'Analizar Métricas',
    description: 'Identifica servicios top, clientes VIP, horas pico en tiempo real',
    type: 'Negocio',
  },
  {
    icon: Megaphone,
    title: 'Enviar Promos',
    description: 'Reactiva clientes inactivos con ofertas dirigidas y personalizadas',
    type: 'Negocio',
  },
];

export default function Preview() {
  const handleNotifyClick = () => {
    scrollToElement('notify-form');
    setTimeout(() => {
      const emailInput = document.getElementById('email-input');
      if (emailInput) {
        emailInput.focus();
      }
    }, 500);
  };

  return (
    <section id="preview" className="py-24 md:py-32 px-6 md:px-12 border-b border-text/5">
      <div className="max-w-screen-xl mx-auto">
        <div className="text-center mb-20 fade-in-up">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-xs font-sans font-bold uppercase tracking-widest mb-6">
            Vista Previa Exclusiva
          </span>
          <h2 className="font-sans font-black text-5xl md:text-7xl tracking-tighter mb-6">
            Así funciona <span className="text-primary">Turnera</span>
          </h2>
          <p className="text-xl md:text-2xl text-text/70 font-body font-medium max-w-3xl mx-auto leading-relaxed">
            Descubre cómo Turnera transformará tu negocio y la experiencia de tus clientes
          </p>
        </div>

        {/* Preview Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[...clientFlow, ...businessFlow].map((item, index) => {
            const Icon = item.icon;
            const isBusiness = item.type === 'Negocio';
            return (
              <div
                key={index}
                className={`backdrop-blur-md bg-gradient-to-br ${
                  isBusiness
                    ? 'from-primary-light/5 to-primary/5 border-primary-light/20'
                    : 'from-primary/5 to-primary-light/5 border-primary/20'
                } border rounded-3xl p-6 hover:shadow-[0_0_30px_rgba(172,33,33,0.2)] transition-all duration-300 group relative overflow-hidden preview-card`}
                data-delay={index * 0.1}
              >
                <div className="absolute top-3 right-3">
                  <span
                    className={`px-2 py-1 ${
                      isBusiness ? 'bg-primary-light' : 'bg-primary'
                    } text-white text-[10px] font-sans font-bold rounded-full`}
                  >
                    {item.type}
                  </span>
                </div>
                <div className="flex items-center justify-center mb-6">
                  <div
                    className={`w-20 h-20 bg-gradient-to-br ${
                      isBusiness
                        ? 'from-primary-light/10 to-primary/10'
                        : 'from-primary/10 to-primary-light/10'
                    } rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform`}
                  >
                    <Icon
                      className={`w-10 h-10 ${
                        isBusiness ? 'text-primary-light' : 'text-primary'
                      }`}
                    />
                  </div>
                </div>
                <h3 className="font-sans font-bold text-lg mb-2 text-center">{item.title}</h3>
                <p className="text-text/60 font-body text-sm text-center leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-16 fade-in-up">
          <button
            onClick={handleNotifyClick}
            className="bg-gradient-to-r from-primary via-primary-dark to-primary-light text-white px-10 py-5 rounded-full font-sans font-black text-sm uppercase tracking-widest hover:shadow-[0_0_40px_rgba(172,33,33,0.4)] transition-all duration-300 inline-flex items-center gap-3 group"
          >
            <span>Quiero ser el primero en probarlo</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}
