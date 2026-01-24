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

const schemaOrg = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Turnera",
  applicationCategory: "BusinessApplication",
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
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Turnera - La revolución en gestión para Barberías y Salones | Lanzamiento en menos de 20 días",
  description:
    "Turnera automatiza tus citas, gestiona tu cola y maximiza tus ingresos. Deja de perder clientes y empieza a escalar tu negocio. Sistema operativo completo para barberías y salones.",
  keywords: [
    "Turnera",
    "sistema de citas barberías",
    "gestión turnos salones",
    "app barberías",
    "reservas online 24/7",
    "pagos online citas",
    "software salones belleza",
  ],
  authors: [{ name: "Turnera" }],
  creator: "Turnera",
  publisher: "Turnera",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: SITE_URL,
    siteName: "Turnera",
    title: "Turnera - Sistema de Citas 24/7 para Barberías",
    description:
      "La plataforma completa para gestionar citas y turnos. Lanzamiento en 18 días.",
    images: [
      {
        url: `${SITE_URL}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Turnera - Sistema de Citas para Barberías",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Turnera - La revolución en gestión para Barberías y Salones",
    description:
      "Lanzamiento en menos de 20 días. Automatiza tus citas, gestiona tu cola y maximiza tus ingresos.",
    images: [`${SITE_URL}/twitter-image.jpg`],
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
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
