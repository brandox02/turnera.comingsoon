'use client';

import { useEffect, useState } from 'react';
import { calculateCountdown, type CountdownTime } from '@/lib/utils';

interface CountdownTimerProps {
  variant?: 'small' | 'large' | 'horizontal';
}

export default function CountdownTimer({ variant = 'small' }: CountdownTimerProps) {
  const [countdown, setCountdown] = useState<CountdownTime>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const update = () => {
      setCountdown(calculateCountdown());
    };

    update();
    // Update every second for horizontal variant, every minute for others
    const interval = setInterval(update, variant === 'horizontal' ? 1000 : 60000);

    return () => clearInterval(interval);
  }, [variant]);

  const formatNumber = (num: number): string => {
    return String(num).padStart(2, '0');
  };

  // Horizontal variant for hero
  if (variant === 'horizontal') {
    return (
      <div className="flex flex-row justify-center items-center gap-2 md:gap-4">
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-primary to-primary-light rounded-xl md:rounded-2xl flex items-center justify-center shadow-[0_0_20px_rgba(172,33,33,0.3)] transition-all duration-300">
            <span className="text-3xl md:text-4xl font-sans font-black text-white transition-all duration-300">
              {formatNumber(countdown.days)}
            </span>
          </div>
          <span className="text-white/70 text-xs font-body uppercase tracking-wider mt-1">
            Días
          </span>
        </div>
        <span className="text-white/70 text-2xl md:text-3xl font-sans font-black mx-1">:</span>
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-primary to-primary-light rounded-xl md:rounded-2xl flex items-center justify-center shadow-[0_0_20px_rgba(172,33,33,0.3)] transition-all duration-300">
            <span className="text-3xl md:text-4xl font-sans font-black text-white transition-all duration-300">
              {formatNumber(countdown.hours)}
            </span>
          </div>
          <span className="text-white/70 text-xs font-body uppercase tracking-wider mt-1">
            Horas
          </span>
        </div>
        <span className="text-white/70 text-2xl md:text-3xl font-sans font-black mx-1">:</span>
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-primary to-primary-light rounded-xl md:rounded-2xl flex items-center justify-center shadow-[0_0_20px_rgba(172,33,33,0.3)] transition-all duration-300">
            <span className="text-3xl md:text-4xl font-sans font-black text-white transition-all duration-300">
              {formatNumber(countdown.minutes)}
            </span>
          </div>
          <span className="text-white/70 text-xs font-body uppercase tracking-wider mt-1">
            Minutos
          </span>
        </div>
        <span className="text-white/70 text-2xl md:text-3xl font-sans font-black mx-1">:</span>
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-primary to-primary-light rounded-xl md:rounded-2xl flex items-center justify-center shadow-[0_0_20px_rgba(172,33,33,0.3)] transition-all duration-300">
            <span className="text-3xl md:text-4xl font-sans font-black text-white transition-all duration-300">
              {formatNumber(countdown.seconds)}
            </span>
          </div>
          <span className="text-white/70 text-xs font-body uppercase tracking-wider mt-1">
            Seg
          </span>
        </div>
      </div>
    );
  }

  // Large variant - responsive for mobile
  if (variant === 'large') {
    return (
      <>
        <div className="flex flex-col items-center">
          <div className="w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 bg-gradient-to-br from-primary to-primary-light rounded-2xl md:rounded-3xl flex items-center justify-center mb-3 md:mb-4 shadow-[0_0_40px_rgba(172,33,33,0.3)]">
            <span className="text-4xl md:text-6xl lg:text-7xl font-sans font-black text-white">
              {formatNumber(countdown.days)}
            </span>
          </div>
          <span className="text-text/60 text-xs md:text-sm font-body uppercase tracking-wider">
            Días
          </span>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 bg-gradient-to-br from-primary to-primary-light rounded-2xl md:rounded-3xl flex items-center justify-center mb-3 md:mb-4 shadow-[0_0_40px_rgba(172,33,33,0.3)]">
            <span className="text-4xl md:text-6xl lg:text-7xl font-sans font-black text-white">
              {formatNumber(countdown.hours)}
            </span>
          </div>
          <span className="text-text/60 text-xs md:text-sm font-body uppercase tracking-wider">
            Horas
          </span>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 bg-gradient-to-br from-primary to-primary-light rounded-2xl md:rounded-3xl flex items-center justify-center mb-3 md:mb-4 shadow-[0_0_40px_rgba(172,33,33,0.3)]">
            <span className="text-4xl md:text-6xl lg:text-7xl font-sans font-black text-white">
              {formatNumber(countdown.minutes)}
            </span>
          </div>
          <span className="text-text/60 text-xs md:text-sm font-body uppercase tracking-wider">
            Minutos
          </span>
        </div>
      </>
    );
  }

  // Small variant
  const textSize = 'text-4xl';
  const containerSize = 'w-20 h-20';
  const containerBg = 'bg-white/20 backdrop-blur-md';

  return (
    <>
      <div className="flex flex-col items-center">
        <div
          className={`${containerSize} ${containerBg} rounded-3xl flex items-center justify-center mb-4`}
        >
          <span className={`${textSize} font-sans font-black text-white`}>
            {formatNumber(countdown.days)}
          </span>
        </div>
        <span className="text-white/60 text-sm font-body uppercase tracking-wider">
          Días
        </span>
      </div>
      <div className="flex flex-col items-center">
        <div
          className={`${containerSize} ${containerBg} rounded-3xl flex items-center justify-center mb-4`}
        >
          <span className={`${textSize} font-sans font-black text-white`}>
            {formatNumber(countdown.hours)}
          </span>
        </div>
        <span className="text-white/60 text-sm font-body uppercase tracking-wider">
          Horas
        </span>
      </div>
      <div className="flex flex-col items-center">
        <div
          className={`${containerSize} ${containerBg} rounded-3xl flex items-center justify-center mb-4`}
        >
          <span className={`${textSize} font-sans font-black text-white`}>
            {formatNumber(countdown.minutes)}
          </span>
        </div>
        <span className="text-white/60 text-sm font-body uppercase tracking-wider">
          Min
        </span>
      </div>
    </>
  );
}
