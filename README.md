# Turnera - Landing Page Coming Soon

Landing page optimizada para SEO construida con Next.js 14+ para el lanzamiento de Turnera.

## Características

- ✅ Next.js 14+ con App Router
- ✅ TypeScript
- ✅ Tailwind CSS con paleta de colores de Turnera
- ✅ Optimización SEO completa (metadata, Open Graph, Twitter Cards, Schema.org)
- ✅ Animaciones de scroll con Intersection Observer
- ✅ Countdown timer en tiempo real
- ✅ Formulario de notificación con API route
- ✅ Responsive design
- ✅ Todo el contenido en español

## Instalación

```bash
npm install
```

## Desarrollo

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## Build

```bash
npm run build
npm start
```

## Estructura del Proyecto

```
comingsoon/
├── app/
│   ├── layout.tsx          # Layout principal con metadata SEO
│   ├── page.tsx             # Página principal
│   ├── globals.css          # Estilos globales
│   ├── sitemap.ts           # Sitemap para SEO
│   ├── robots.ts            # Robots.txt
│   ├── hooks/
│   │   └── useScrollAnimation.ts
│   └── api/
│       └── notify/
│           └── route.ts     # API route para formulario
├── components/
│   ├── Navigation.tsx
│   ├── Hero.tsx
│   ├── CountdownTimer.tsx
│   ├── WhatIsTurnera.tsx
│   ├── Features.tsx
│   ├── Preview.tsx
│   ├── ComingSoon.tsx
│   ├── NotifyForm.tsx
│   └── Footer.tsx
└── lib/
    ├── constants.ts
    └── utils.ts
```

## Configuración

### Variables de Entorno

Crea un archivo `.env.local` basado en `.env.local.example`:

```env
NEXT_PUBLIC_SITE_URL=https://turnera.com
RESEND_API_KEY=re_xxxxxxxxxxxxx
RESEND_AUDIENCE_ID=78261eea-8f8b-4381-83c6-79fa7120f1cf
```

### Configuración de Resend

1. **Crear cuenta en Resend**: Ve a [resend.com](https://resend.com) y crea una cuenta gratuita

2. **Obtener API Key**:
   - Ve a [API Keys](https://resend.com/api-keys) en el dashboard de Resend
   - Crea una nueva API key
   - Cópiala y agrégala a `.env.local` como `RESEND_API_KEY`

3. **Crear Audiencia (REQUERIDO)**:
   - Ve a [Audiences](https://resend.com/audiences) en el dashboard
   - Crea una nueva audiencia llamada "Waitlist Turnera" (o el nombre que prefieras)
   - **IMPORTANTE**: El ID de la audiencia es un UUID (formato: `78261eea-8f8b-4381-83c6-79fa7120f1cf`)
   - Copia el UUID completo de la audiencia desde el dashboard
   - Agrégala a `.env.local` como `RESEND_AUDIENCE_ID`
   - **Nota**: `RESEND_AUDIENCE_ID` es obligatorio y debe ser un UUID válido

4. **Verificar configuración**:
   - Los emails de suscripción se guardarán automáticamente en la audiencia de Resend
   - Puedes ver los contactos en el dashboard de Resend
   - Cuando lances Turnera, podrás enviar emails a toda la audiencia desde Resend

## SEO

El proyecto incluye:

- Metadata completa en español
- Open Graph tags
- Twitter Card tags
- Schema.org JSON-LD
- Sitemap dinámico
- Robots.txt configurado

## Tecnologías

- Next.js 14+
- React 18+
- TypeScript
- Tailwind CSS
- Lucide React (iconos)
- Resend (almacenamiento de emails de lista de espera)
