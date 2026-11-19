'use client';

import React, { useEffect, useRef, useState } from 'react';

/**
 * Reusable Reveal Animation Component
 * Props:
 * - animation: 'up' | 'scale' | 'left' | 'right' | 'fade' (default: 'up')
 * - delay: milliseconds (default: 0)
 * - duration: milliseconds (default: 800)
 * - threshold: intersection threshold 0 to 1 (default: 0.1)
 */
export default function Reveal({
  children,
  className = '',
  animation = 'up',
  delay = 0,
  duration = 800,
  threshold = 0.1,
}) {
  const [isRevealed, setIsRevealed] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setIsRevealed(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsRevealed(true);
          observer.disconnect();
        }
      },
      { threshold, rootMargin: '0px 0px -40px 0px' }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [threshold]);

  const getTransformClass = () => {
    if (isRevealed) return 'opacity-100 translate-y-0 translate-x-0 scale-100';
    switch (animation) {
      case 'scale':
        return 'opacity-0 scale-95 translate-y-6';
      case 'fade':
        return 'opacity-0';
      case 'left':
        return 'opacity-0 -translate-x-8';
      case 'right':
        return 'opacity-0 translate-x-8';
      case 'up':
      default:
        return 'opacity-0 translate-y-8';
    }
  };

  return (
    <div
      ref={ref}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
      }}
      className={`transition-all cubic-bezier(0.16, 1, 0.3, 1) ${getTransformClass()} ${className}`}
    >
      {children}
    </div>
  );
}
