import type { Metadata } from 'next';
import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { SITE_URL, SUPPORT_EMAIL } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Eliminar cuenta y datos | Turnera para negocios',
  description:
    'Cómo solicitar la eliminación de tu cuenta y datos personales en Turnera para negocios. Pasos en la app y qué información se borra o conserva.',
  openGraph: {
    title: 'Eliminar cuenta y datos | Turnera para negocios',
    url: `${SITE_URL}/borrar-cuenta`,
  },
  alternates: { canonical: `${SITE_URL}/borrar-cuenta` },
};

export default function BorrarCuentaPage() {
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
            Turnera para negocios
          </h1>
          <p className="text-text/80 font-body text-lg mb-8">
            Eliminación de cuenta y datos asociados
          </p>

          <p className="font-body text-text/90 leading-relaxed mb-10">
            Esta página describe cómo puedes solicitar la eliminación de tu cuenta de acceso y qué
            ocurre con tus datos personales y con la información del negocio vinculado en{' '}
            <strong>Turnera para negocios</strong>.
          </p>

          <section className="mb-10 pl-4 border-l-2 border-text/20">
            <h2 className="font-sans font-bold text-xl text-text mb-3">
              Cómo eliminar tu cuenta desde la app
            </h2>
            <ol className="list-decimal list-inside space-y-3 font-body text-text/90 leading-relaxed">
              <li>Inicia sesión en la app.</li>
              <li>
                En la barra inferior, toca el ítem del menú con el <strong>icono de configuración</strong>.
              </li>
              <li>
                Entra en <strong>Configuración de cuenta</strong>.
              </li>
              <li>
                Toca <strong>Eliminar cuenta</strong>.
              </li>
              <li>
                Toca <strong>Continuar</strong>.
              </li>
              <li>
                Escribe <strong>eliminar</strong> para confirmar.
              </li>
              <li>
                Tu cuenta y los datos asociados según lo descrito abajo se procesarán; serás
                redirigido a la pantalla de <strong>inicio de sesión</strong>.
              </li>
            </ol>
          </section>

          <section className="mb-10 pl-4 border-l-2 border-text/20">
            <h2 className="font-sans font-bold text-xl text-text mb-3">
              Qué datos se eliminan y qué se conserva
            </h2>
            <p className="font-body text-text/90 leading-relaxed mb-4">
              Tras completar el proceso de eliminación:
            </p>
            <ul className="space-y-3 font-body text-text/90 leading-relaxed">
              <li className="flex gap-2">
                <span className="text-primary shrink-0">•</span>
                <span>
                  Se elimina la <strong>información personal y de perfil</strong> de la persona, así
                  como la <strong>cuenta de acceso</strong>.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary shrink-0">•</span>
                <span>
                  El <strong>negocio</strong> asociado al usuario se <strong>anonimiza</strong> para
                  desvincularlo por completo de la persona y del usuario anterior.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary shrink-0">•</span>
                <span>
                  Se mantienen <strong>informaciones clave del negocio</strong> necesarias para la
                  visualización de <strong>históricos de citas y operaciones</strong> que las
                  relacionen con el negocio (sin datos personales identificables del usuario
                  eliminado).
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary shrink-0">•</span>
                <span>
                  En resumen: todo lo relacionado con la <strong>identidad e información personal</strong>{' '}
                  del usuario se elimina y la <strong>cuenta deja de existir</strong>.
                </span>
              </li>
            </ul>
          </section>

          <section className="pt-6 border-t border-text/10">
            <p className="font-body text-text/90 mb-2">¿Necesitas ayuda?</p>
            <a
              href={`mailto:${SUPPORT_EMAIL}`}
              className="font-body text-primary font-medium hover:underline"
            >
              {SUPPORT_EMAIL}
            </a>
          </section>
        </div>
      </article>
      <Footer />
    </main>
  );
}
