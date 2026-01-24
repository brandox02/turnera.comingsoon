'use client';

import {
  Bell,
  CreditCard,
  Users,
  Clock,
  Globe,
  BarChart3,
  Smartphone,
} from 'lucide-react';

const features = [
  {
    icon: Bell,
    title: 'Notificaciones Automáticas que Reducen Ausencias',
    description:
      'Recordatorios automáticos 1 hora antes de la cita, seguimiento después de una semana para asegurar que vuelva, y alertas cuando detectamos inactividad para reactivar clientes.',
    highlight: 'Reduce ausencias hasta en un 80% y recupera clientes inactivos automáticamente',
  },
  {
    icon: CreditCard,
    title: 'Cobra Antes con Pagos Online Flexibles',
    description:
      'Configura pagos online opcionales: cobra el total, la mitad o un abono. Acepta tarjeta de crédito, transferencia o pago en el local. Tú decides cómo quieres cobrar.',
    highlight: 'Asegura tu flujo de caja y compromiso del cliente desde la reserva',
  },
  {
    icon: Users,
    title: 'Gestiona Múltiples Colaboradores Sin Límites',
    description:
      'Crea agendas o filas individuales para cada barbero o estilista. Maximiza tu capacidad de atención y asegura que cada colaborador pueda atender la mayor cantidad de clientes posible.',
    highlight: 'Escala tu negocio sin complicaciones, sin importar cuántos colaboradores tengas',
  },
  {
    icon: Clock,
    title: 'Tu Negocio Nunca Cierra',
    description:
      'Recibe reservas 24/7, incluso mientras duermes o estás ocupado. Los clientes agendan citas en cualquier momento sin preocupaciones.',
    highlight: 'No pierdas clientes por horarios limitados. Captura reservas mientras duermes',
  },
  {
    icon: Globe,
    title: 'Página de Reserva Profesional y Personalizada',
    description:
      'Configura tu página online de reserva con todos los detalles de tu negocio. Detalla tus servicios de manera profesional para que los clientes lleguen informados y elijan exactamente lo que desean.',
    highlight: 'Brinda mayor comodidad y flexibilidad a tus clientes, aumenta conversión',
  },
  {
    icon: BarChart3,
    title: 'Conoce a tus Clientes para Vender Más',
    description:
      'Listado completo de clientes con información clave: quiénes asisten más, quiénes gastan más, qué servicios se hacen y cada cuánto tiempo. Métricas de asistencia para personalizar el trato y aplicar estrategias de ventas y marketing.',
    highlight: 'Fideliza clientes con trato personalizado y estrategias de marketing dirigidas',
  },
];

export default function WhatIsTurnera() {
  return (
    <section
      id="what-is"
      className="py-24 md:py-32 px-6 md:px-12 border-b border-text/5"
    >
      <div className="max-w-screen-xl mx-auto">
        <div className="text-center mb-16 fade-in-up">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-xs font-sans font-bold uppercase tracking-widest mb-6">
            Tu solución completa para barberías y salones
          </span>
          <h2 className="font-sans font-black text-5xl md:text-7xl tracking-tighter mb-6">
            ¿Qué es <span className="text-primary">Turnera</span>?
          </h2>
          <p className="text-xl md:text-2xl text-text/70 font-body font-medium max-w-3xl mx-auto leading-relaxed mb-6">
            Una aplicación fácil de usar que resuelve los problemas reales de tu negocio desde tu celular.
            Automatiza reservas, reduce ausencias y te ayuda a ganar más dinero.
          </p>
          {/* Mención de App Móvil */}
          {false && < div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-primary/10 via-primary/5 to-primary-light/10 border border-primary/20 rounded-full shadow-[0_4px_20px_rgba(172,33,33,0.1)] hover:shadow-[0_6px_30px_rgba(172,33,33,0.15)] transition-all duration-300 hover:scale-105">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary-light rounded-xl flex items-center justify-center flex-shrink-0">
              <Smartphone className="w-5 h-5 text-white" />
            </div>
            <span className="text-sm md:text-base font-sans font-bold text-text">
              Aplicación móvil fácil de usar. Gestiona tu negocio desde tu teléfono, rápido y sin complicaciones.
            </span>
          </div>}
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 fade-in-up">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-gradient-to-br from-primary/5 to-primary-light/5 border border-primary/10 rounded-3xl p-8 hover:shadow-[0_0_30px_rgba(172,33,33,0.15)] transition-all duration-300 hover:scale-[1.02]"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-light rounded-2xl flex items-center justify-center mb-6">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-sans font-bold text-2xl mb-3">{feature.title}</h3>
                <p className="text-text/70 font-body leading-relaxed mb-3">{feature.description}</p>
                {feature.highlight && (
                  <p className="text-primary font-body font-semibold text-sm flex items-center gap-2">
                    <span>✨</span>
                    <span>{feature.highlight}</span>
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section >
  );
}
