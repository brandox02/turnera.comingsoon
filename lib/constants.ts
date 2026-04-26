export const APP_TURNERA_URL = 'https://app.turnera.net';
export const BOOK_TURNERA_URL = 'https://book.turnera.net';

/** Turnera Business (app para negocios) — enlaces oficiales de tiendas */
export const TURNERA_BUSINESS_PLAY_URL =
  'https://play.google.com/store/apps/details?id=com.turnera.business';
export const TURNERA_BUSINESS_APPSTORE_URL =
  'https://apps.apple.com/us/app/turnera-para-negocios/id6760616548';
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://turnera.com';

export const SUPPORT_EMAIL = 'brandox02.dev@gmail.com';
export const SUPPORT_PHONE = '18497392210';
export const SUPPORT_WHATSAPP_MSG = 'Hola, necesito ayuda con la app Turnera.';
export const getWhatsAppUrl = (text?: string) =>
  `https://wa.me/${SUPPORT_PHONE}${text ? `?text=${encodeURIComponent(text)}` : ''}`;
