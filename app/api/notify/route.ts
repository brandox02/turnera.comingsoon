import { NextRequest, NextResponse } from 'next/server';
import { validateEmail } from '@/lib/utils';
import { addContactToAudience, isResendConfigured } from '@/lib/resend';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, userType } = body;

    if (!email) {
      return NextResponse.json(
        { error: 'El email es requerido' },
        { status: 400 }
      );
    }

    if (!validateEmail(email)) {
      return NextResponse.json(
        { error: 'El email no es válido' },
        { status: 400 }
      );
    }

    // Validar userType
    const validUserType = userType === 'business' || userType === 'client' ? userType : 'business';

    // Verificar si Resend está configurado
    if (!isResendConfigured()) {
      console.warn('RESEND_API_KEY no está configurada. Email no se guardará en Resend.');
      // Retornar éxito incluso si Resend no está configurado (para desarrollo)
      return NextResponse.json(
        { message: 'Email registrado exitosamente (modo desarrollo)', email },
        { status: 200 }
      );
    }

    // Agregar contacto a Resend
    const result = await addContactToAudience({
      email,
      userType: validUserType,
    });

    if (!result.success) {
      console.error('Error agregando contacto a Resend:', result.error);
      return NextResponse.json(
        { error: result.error || 'Error al guardar el email. Por favor, intenta de nuevo.' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: 'Email registrado exitosamente', email },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error en API /api/notify:', error);
    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    );
  }
}
