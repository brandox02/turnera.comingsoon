'use client';

import Image from 'next/image';
import { useState } from 'react';

interface LogoProps {
  variant?: 'horizontal' | 'vertical' | 'isotipo';
  color?: 'default' | 'white';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  priority?: boolean;
  showTextOnMobile?: boolean;
}

const sizeMap = {
  sm: { height: 32, width: 130 },
  md: { height: 40, width: 165 },
  lg: { height: 50, width: 200 },
  xl: { height: 60, width: 240 },
};

export default function Logo({
  variant = 'horizontal',
  color = 'default',
  size = 'md',
  className = '',
  priority = false,
  showTextOnMobile = true,
}: LogoProps) {
  const [imageError, setImageError] = useState(false);

  // Determinar qué imagen usar según variant y color
  const getImagePath = () => {
    if (variant === 'isotipo') {
      return '/images/logos/isotipo-turnera-blanco.png';
    }

    if (variant === 'vertical') {
      return color === 'white'
        ? '/images/logos/result_vertical.png'
        : '/images/logos/turnera-logotipo-vertical.jpg';
    }

    // horizontal (default)
    return color === 'white'
      ? '/images/logos/result_horizontal.png'
      : '/images/logos/turnera-logotipo-horizontal.jpg';
  };

  const imagePath = getImagePath();
  const dimensions = sizeMap[size];

  // Si hay error cargando la imagen, mostrar fallback
  if (imageError) {
    return (
      <div
        className={`flex items-center gap-2 ${className}`}
        style={{ height: `${dimensions.height}px` }}
      >
        <div
          className="bg-gradient-to-br from-primary to-primary-light rounded-xl flex items-center justify-center text-white font-bold"
          style={{
            width: `${dimensions.height}px`,
            height: `${dimensions.height}px`,
            fontSize: `${dimensions.height * 0.5}px`,
          }}
        >
          T
        </div>
        {showTextOnMobile && (
          <span className="font-sans font-bold text-xl tracking-tight hidden md:block">
            Turnera
          </span>
        )}
      </div>
    );
  }

  // Si className tiene height, usar eso; si no, usar el sizeMap
  const hasHeightClass = className.includes('h-');
  const containerHeight = hasHeightClass ? undefined : `${dimensions.height}px`;

  return (
    <div
      className={`relative flex items-center ${className}`}
      style={containerHeight ? { height: containerHeight, width: 'auto' } : { width: 'auto' }}
    >
      <Image
        src={imagePath}
        alt="Turnera Logo"
        height={dimensions.height}
        width={dimensions.width}
        className="h-full w-auto object-contain"
        priority={priority}
        onError={() => setImageError(true)}
        unoptimized={false}
      />
    </div>
  );
}
