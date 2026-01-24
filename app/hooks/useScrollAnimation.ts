'use client';

import { useEffect, useRef } from 'react';

export function useScrollAnimation() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.2,
      rootMargin: '0px 0px -100px 0px',
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const delay = entry.target.getAttribute('data-delay');
          const delayMs = delay ? parseFloat(delay) * 1000 : 0;
          
          setTimeout(() => {
            entry.target.classList.add('visible');
          }, delayMs);
        }
      });
    }, observerOptions);

    // Observe fade-in elements
    document.querySelectorAll('.fade-in-up').forEach((el) => {
      observer.observe(el);
    });

    // Observe feature cards
    document.querySelectorAll('.feature-card').forEach((el) => {
      observer.observe(el);
    });

    // Observe preview cards
    document.querySelectorAll('.preview-card').forEach((el) => {
      observer.observe(el);
    });

    return () => {
      observer.disconnect();
    };
  }, []);
}
