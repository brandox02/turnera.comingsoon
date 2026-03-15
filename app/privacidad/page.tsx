import type { Metadata } from 'next';
import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { SITE_URL } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Políticas de Privacidad | Turnera',
  description:
    'En Turnera nos tomamos muy en serio la protección de sus datos personales. Conozca cómo recopilamos, usamos y protegemos su información.',
  openGraph: {
    title: 'Políticas de Privacidad | Turnera',
    url: `${SITE_URL}/privacidad`,
  },
  alternates: { canonical: `${SITE_URL}/privacidad` },
};

const LAST_UPDATED = '14 de marzo de 2026';

export default function PrivacidadPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <article className="pt-24 md:pt-28 pb-16 px-4 md:px-12">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/"
            className="inline-flex items-center gap-1 text-text/70 hover:text-primary font-body text-sm mb-8 transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            Volver
          </Link>

          <h1 className="font-sans font-bold text-3xl md:text-4xl text-text mb-2">
            Políticas de Privacidad
          </h1>
          <p className="text-text/60 text-sm font-body mb-10">
            Última actualización: {LAST_UPDATED}
          </p>

          <p className="font-body text-text/90 leading-relaxed mb-10">
            En Turnera nos tomamos muy en serio la protección de sus datos personales. Esta política
            detalla cómo gestionamos su información para ofrecerle el mejor servicio posible.
          </p>

          {/* Recopilación de Datos */}
          <section className="mb-10 pl-4 border-l-2 border-text/20">
            <h2 className="font-sans font-bold text-xl text-text mb-3">Recopilación de Datos</h2>
            <p className="font-body text-text/90 leading-relaxed mb-4">
              Recopilamos información que usted nos proporciona directamente al registrarse, como su
              nombre, correo electrónico y número de teléfono. También podemos recopilar datos
              técnicos de su dispositivo para mejorar la compatibilidad.
            </p>
            <ul className="space-y-2 font-body text-text/90">
              <li className="flex items-center gap-2">
                <span className="text-primary">✓</span> Información de perfil y contacto
              </li>
              <li className="flex items-center gap-2">
                <span className="text-primary">✓</span> Historial de citas y preferencias
              </li>
            </ul>
          </section>

          {/* Tipos de datos (Apple Connect) */}
          <section className="mb-10 pl-4 border-l-2 border-text/20">
            <h2 className="font-sans font-bold text-xl text-text mb-3">Tipos de datos que recopilamos</h2>
            <p className="font-body text-text/90 leading-relaxed mb-4">
              En nuestra app Turnera para clientes recopilamos los siguientes tipos de datos, tal
              como se declara en las tiendas de aplicaciones:
            </p>
            <div className="space-y-4">
              <div>
                <h3 className="font-sans font-semibold text-text mb-1">Datos de contacto</h3>
                <p className="font-body text-sm text-text/80">
                  <strong>Nombre</strong>, <strong>dirección de correo electrónico</strong> y{' '}
                  <strong>número de teléfono</strong>. Se usan para la funcionalidad de la app y se
                  vinculan con la identidad del usuario.
                </p>
              </div>
              <div>
                <h3 className="font-sans font-semibold text-text mb-1">Identificadores</h3>
                <p className="font-body text-sm text-text/80">
                  <strong>ID de usuario</strong>: utilizado para la funcionalidad de la app y
                  vinculado con la identidad del usuario.{' '}
                  <strong>ID del dispositivo</strong>: utilizado para la funcionalidad de la app.
                </p>
              </div>
            </div>
          </section>

          {/* Uso de la Información */}
          <section className="mb-10 pl-4 border-l-2 border-text/20">
            <h2 className="font-sans font-bold text-xl text-text mb-3">Uso de la Información</h2>
            <p className="font-body text-text/90 leading-relaxed mb-4">
              Su información se utiliza principalmente para gestionar sus reservas y mejorar su
              experiencia en la aplicación. No vendemos sus datos personales a terceros.
            </p>
            <blockquote className="bg-text/5 border-l-4 border-primary pl-4 py-3 italic text-text/90 font-body text-sm">
              Nuestro objetivo es utilizar sus datos únicamente para asegurar que su agenda esté
              siempre organizada y accesible.
            </blockquote>
          </section>

          {/* Seguridad */}
          <section className="mb-10 pl-4 border-l-2 border-text/20">
            <h2 className="font-sans font-bold text-xl text-text mb-3">Seguridad</h2>
            <p className="font-body text-text/90 leading-relaxed">
              Implementamos medidas de seguridad robustas, incluyendo encriptación de datos en
              tránsito y en reposo, para proteger su información contra accesos no autorizados,
              alteración o destrucción.
            </p>
          </section>

          {/* Contacto */}
          <section className="pt-6 border-t border-text/10">
            <p className="font-body text-text/90 mb-2">¿Tiene alguna duda?</p>
            <a
              href="mailto:brandox02.dev@gmail.com"
              className="font-body text-primary font-medium hover:underline"
            >
              Contáctenos en brandox02.dev@gmail.com
            </a>
          </section>
        </div>
      </article>
      <Footer />
    </main>
  );
}
