'use client';

import {
  TrendingUp,
  Shield,
  Clock,
  Zap,
  Heart,
  Rocket,
} from 'lucide-react';

const features = [
  {
    icon: TrendingUp,
    title: 'Aumenta tus Ingresos Automáticamente',
    description: 'Recibe reservas 24/7 incluso cuando duermes. Cada cita perdida es dinero que se va.',
    // highlight: 'Hasta +40% más reservas en el primer mes',
  },
  {
    icon: Shield,
    title: 'Elimina los Ausencias para Siempre',
    description: 'Con pagos anticipados y recordatorios inteligentes, los clientes llegan. Punto.',
    highlight: 'Reduce ausencias hasta en un 80%',
  },
  {
    icon: Clock,
    title: 'Recupera tu Tiempo y Libertad',
    description: 'Deja de estar pegado al teléfono. Automatiza todo y enfócate en lo que realmente importa.',
    highlight: 'Ahorra 10+ horas semanales en gestión',
  },
  {
    icon: Zap,
    title: 'Competencia? Ya No es un Problema',
    description: 'Mientras otros pierden clientes por no estar disponibles, tú los recibes todos.',
    highlight: 'Tu negocio nunca cierra',
  },
  {
    icon: Heart,
    title: 'Clientes Más Felices, Más Fieles',
    description: 'Experiencia moderna que tus clientes amarán. Reservas fáciles, sin esperas, sin complicaciones.',
    highlight: 'Aumenta la retención de clientes',
  },
  {
    icon: Rocket,
    title: 'Escala Sin Límites',
    description: 'No importa cuantos colaboradores tengas, Turnera crece contigo. Sin complicaciones, sin límites.',
    highlight: 'Diseñado para crecer contigo',
  },
];

export default function Features() {
  return (
    <section
      id="features"
      className="py-24 md:py-32 px-6 md:px-12 text-white relative overflow-hidden"
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

      <div className="max-w-screen-xl mx-auto relative z-10">
        <div className="text-center mb-20 fade-in-up">
          <span className="inline-block px-4 py-1.5 bg-primary text-white rounded-full text-xs font-sans font-bold uppercase tracking-widest mb-6">
            Transforma tu negocio hoy
          </span>
          <h2 className="font-sans font-black text-5xl md:text-7xl tracking-tighter mb-6">
            ¿Por qué <span className="text-primary-light">Turnera</span>?
          </h2>
          <p className="text-xl md:text-2xl text-white/80 font-body font-medium max-w-3xl mx-auto leading-relaxed mb-12">
            No es solo una herramienta. Es tu ventaja competitiva.{' '}
            <span className="text-primary-light font-semibold">
              Mientras otros pierden clientes, tú los ganas.
            </span>
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-300 group relative overflow-hidden feature-card"
                data-delay={index * 0.1}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-light rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-sans font-bold text-2xl mb-3 group-hover:text-primary-light transition-colors">
                  {feature.title}
                </h3>
                <p className="text-white/70 font-body mb-3 leading-relaxed">
                  {feature.description}
                </p>
                {feature.highlight && (
                  <p className="text-primary-light font-body font-semibold text-sm flex items-center gap-2">
                    <span>✨</span>
                    <span>{feature.highlight}</span>
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
