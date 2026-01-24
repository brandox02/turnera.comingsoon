'use client';

import CountdownTimer from './CountdownTimer';
import NotifyForm from './NotifyForm';
import {
  TrendingDown,
  TrendingUp,
  CreditCard,
  Bell,
  BarChart3,
  Headphones,
  Zap,
  Shield,
} from 'lucide-react';

const businessBadges = [
  {
    icon: TrendingDown,
    iconColor: '#4ade80',
    text: 'Reduce no-shows 80%',
  },
  {
    icon: TrendingUp,
    iconColor: '#3b82f6',
    text: '+40% más reservas',
  },
  {
    icon: CreditCard,
    iconColor: '#fbbf24',
    text: 'Pagos automáticos',
  },
  {
    icon: Bell,
    iconColor: '#a855f7',
    text: 'Notificaciones inteligentes',
  },
  {
    icon: BarChart3,
    iconColor: '#ec4899',
    text: 'Panel en tiempo real',
  },
  {
    icon: Headphones,
    iconColor: '#06b6d4',
    text: 'Soporte 24/7',
  },
  {
    icon: Zap,
    iconColor: '#f59e0b',
    text: 'Configuración en minutos',
  },
  {
    icon: Shield,
    iconColor: '#10b981',
    text: 'Sin comisiones ocultas',
  },
];

export default function ComingSoon() {
  return (
    <section
      id="coming-soon"
      className="py-24 md:py-32 px-6 md:px-12 border-b border-text/5"
    >
      <div className="max-w-screen-xl mx-auto">
        <div className="text-center fade-in-up">
          <h2 className="font-sans font-black text-5xl md:text-7xl lg:text-8xl tracking-tighter mb-6">
            Sé el primero en probar <span className="text-primary">Turnera</span>
          </h2>
          <p className="text-xl md:text-2xl text-text/70 font-body font-medium max-w-2xl mx-auto leading-relaxed mb-16">
            Únete a la lista de espera exclusiva. Recibirás una notificación prioritaria y un beneficio especial de lanzamiento.
          </p>

          {/* Large Countdown - Responsive */}
          <div className="flex justify-center gap-4 md:gap-8 mb-16">
            <div className="flex flex-row justify-center items-center gap-3 md:gap-6">
              <CountdownTimer variant="large" />
            </div>
          </div>



          {/* Email Form */}
          <NotifyForm />
        </div>
      </div>
    </section>
  );
}
