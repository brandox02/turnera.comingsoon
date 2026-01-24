import { Resend } from 'resend';

// Inicializar cliente de Resend
const resend = new Resend(process.env.RESEND_API_KEY);

// Validar formato UUID (v4)
const UUID_REGEX = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

// ID de la audiencia (debe ser un UUID válido)
function getAudienceId(): string {
  const audienceId = process.env.RESEND_AUDIENCE_ID;
  
  if (!audienceId) {
    throw new Error(
      'RESEND_AUDIENCE_ID no está configurada. ' +
      'Por favor, crea una audiencia en Resend y agrega su UUID a .env.local'
    );
  }
  
  if (!UUID_REGEX.test(audienceId)) {
    throw new Error(
      `RESEND_AUDIENCE_ID debe ser un UUID válido. Valor actual: "${audienceId}". ` +
      'Obtén el UUID de tu audiencia desde el dashboard de Resend.'
    );
  }
  
  return audienceId;
}

export interface AddContactParams {
  email: string;
  userType: 'business' | 'client';
}

/**
 * Agrega un contacto a la audiencia de Resend
 * @param email - Email del contacto
 * @param userType - Tipo de usuario (business o client)
 * @returns Promise con el resultado de la operación
 */
export async function addContactToAudience({
  email,
  userType,
}: AddContactParams): Promise<{ success: boolean; error?: string }> {
  try {
    if (!process.env.RESEND_API_KEY) {
      throw new Error('RESEND_API_KEY no está configurada');
    }

    // Obtener y validar audienceId
    const audienceId = getAudienceId();

    // Agregar contacto a la audiencia
    // Nota: Las propiedades personalizadas deben configurarse en el dashboard de Resend
    // y se pueden agregar después de crear el contacto usando la API de actualización
    const result = await resend.contacts.create({
      email,
      audienceId,
      unsubscribed: false,
    });

    // Si el contacto ya existe, Resend puede retornar un error
    // pero también puede retornar éxito, así que manejamos ambos casos
    if (result.error) {
      // Si el error es que el contacto ya existe, lo consideramos éxito
      if (result.error.message?.includes('already exists') || result.error.message?.includes('duplicate')) {
        return { success: true };
      }
      throw new Error(result.error.message || 'Error al agregar contacto');
    }

    return { success: true };
  } catch (error: any) {
    console.error('Error agregando contacto a Resend:', error);
    
    // Si el error es que el contacto ya existe, retornamos éxito
    if (error?.message?.includes('already exists') || error?.message?.includes('duplicate')) {
      return { success: true };
    }

    return {
      success: false,
      error: error?.message || 'Error desconocido al agregar contacto',
    };
  }
}

/**
 * Verifica si Resend está configurado correctamente
 */
export function isResendConfigured(): boolean {
  return !!process.env.RESEND_API_KEY;
}
