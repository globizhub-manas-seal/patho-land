'use client';

import { useEffect } from 'react';

export default function ScrollRevealProvider() {
  useEffect(() => {
    // 1. Feature detection & accessibility check
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      return; // Gracefully degrade: elements remain opacity: 1
    }

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return; // Respect user preference: elements remain visible without motion
    }

    // 2. Enable animations now that JS + IntersectionObserver are confirmed active
    const root = document.documentElement;
    root.classList.add('anim-ready');

    // 3. Create observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.08,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    // 4. Observe elements
    const targets = document.querySelectorAll(
      '.reveal, .reveal-scale, .reveal-left, .reveal-right'
    );

    targets.forEach((el) => {
      // If element is already in the viewport on initial load, reveal immediately
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        el.classList.add('revealed');
      } else {
        observer.observe(el);
      }
    });

    // 5. Cleanup
    return () => {
      observer.disconnect();
    };
  }, []);

  return null;
}
