import type { Metadata } from "next";
import { Plus_Jakarta_Sans, DM_Sans, Reenie_Beanie } from "next/font/google";
import "./globals.css";
import { SITE_URL } from "@/lib/constants";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-dm-sans",
  display: "swap",
});

const reenieBeanie = Reenie_Beanie({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-reenie",
  display: "swap",
});

const softwareApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Turnera",
  applicationCategory: "BusinessApplication",
  applicationSubCategory: "Scheduling Software",
  operatingSystem: "iOS, Android, Web",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
    availability: "https://schema.org/PreOrder",
  },
  description:
    "Sistema completo de gestión de citas y turnos para barberías y salones con reservas online 24/7, pagos integrados y notificaciones inteligentes.",
  featureList: [
    "Reservas online 24/7",
    "Sistema de pagos integrado",
    "Notificaciones automáticas",
    "Gestión de múltiples especialistas",
    "Métricas y analytics",
    "Gestión de clientes y marketing",
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    ratingCount: "1",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Turnera",
  url: SITE_URL,
  logo: `${SITE_URL}/images/logos/turnera-logotipo-horizontal.jpg`,
  description:
    "Plataforma de gestión de citas y turnos para barberías y salones de belleza. Sistema completo con reservas online 24/7, pagos integrados y notificaciones inteligentes.",
  sameAs: [
    "https://www.instagram.com/turnera.official",
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Turnera",
  url: SITE_URL,
  description:
    "Sistema de gestión de citas y turnos para barberías y salones. Reservas online 24/7, pagos integrados y notificaciones automáticas.",
  publisher: {
    "@type": "Organization",
    name: "Turnera",
  },
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Turnera - Sistema de Citas para Barberías y Salones",
  description:
    "Turnera automatiza tus citas, gestiona tu cola y maximiza tus ingresos. Reservas online 24/7, pagos integrados y notificaciones automáticas. Sistema completo para barberías y salones de belleza.",
  keywords: [
    "Turnera",
    "sistema de citas barberías",
    "gestión turnos salones",
    "app barberías",
    "reservas online 24/7",
    "pagos online citas",
    "software salones belleza",
    "sistema de citas para barberías",
    "gestión de turnos salones de belleza",
    "app para barberías",
    "software de citas para salones",
    "sistema de reservas online barbería",
    "gestión de colas barbería",
    "app de citas para salones de belleza",
    "notificaciones automáticas citas",
    "sistema de gestión barbería",
    "software para salones de belleza",
    "app gestión citas barbería",
    "sistema de citas latinoamérica",
    "reservas online barberías",
    "pagos anticipados citas",
    "reducción ausencias barberías",
  ],
  authors: [{ name: "Turnera" }],
  creator: "Turnera",
  publisher: "Turnera",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  themeColor: "#AC2121",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.png", type: "image/png", sizes: "32x32" },
    ],
    apple: [
      { url: "/favicon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: SITE_URL,
    siteName: "Turnera",
    title: "Turnera - Sistema de Citas 24/7 para Barberías",
    description:
      "La plataforma completa para gestionar citas y turnos. Reservas online 24/7, pagos integrados y notificaciones automáticas.",
    images: [
      {
        // Usar logo existente hasta que se cree og-image.jpg (1200x630px)
        // Para mejor resultado, crear og-image.jpg con el tamaño correcto
        url: `${SITE_URL}/images/logos/turnera-logotipo-horizontal.jpg`,
        width: 1200,
        height: 630,
        alt: "Turnera - Sistema de Citas para Barberías y Salones",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Turnera - Sistema de Citas para Barberías y Salones",
    description:
      "Reservas online 24/7, pagos integrados y notificaciones automáticas. Automatiza tus citas y maximiza tus ingresos.",
    images: [
      // Usar logo existente hasta que se cree twitter-image.jpg (1200x675px)
      // Para mejor resultado, crear twitter-image.jpg con el tamaño correcto
      `${SITE_URL}/images/logos/turnera-logotipo-horizontal.jpg`,
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: SITE_URL,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              softwareApplicationSchema,
              organizationSchema,
              websiteSchema,
            ]),
          }}
        />
      </head>
      <body
        className={`${plusJakarta.variable} ${dmSans.variable} ${reenieBeanie.variable} bg-background text-text antialiased selection:bg-primary selection:text-white overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
