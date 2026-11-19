'use client';

import React, { useState, useEffect } from 'react';
import { PhoneCall, Sparkles, ArrowRight } from 'lucide-react';
import { brandConfig } from '../data/brand';

export default function StickyMobileBar() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show only when scrolled past the initial hero view (> 220px)
      if (window.scrollY > 220) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // Synchronize initial state on mount (handles mid-page reloads)
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const cleanWhatsappNumber = (brandConfig.contact?.whatsappNumber || '919876543210').replace(/\D/g, '');
  const whatsappUrl = `https://wa.me/${cleanWhatsappNumber}?text=${encodeURIComponent(
    brandConfig.contact?.whatsappMessage || 'Hi, I want a live demo and sample reports of Patholab Cloud for my lab.'
  )}`;

  return (
    <aside
      aria-label="Quick mobile contact and demo actions"
      className={`fixed bottom-3 left-3 right-3 z-50 md:hidden transition-all duration-300 ease-out ${
        isVisible ? 'translate-y-0 opacity-100 pointer-events-auto' : 'translate-y-16 opacity-0 pointer-events-none'
      }`}
    >
      <div className="bg-[#0B1120]/95 backdrop-blur-2xl border border-slate-800 text-white rounded-2xl p-2.5 shadow-2xl shadow-slate-950/80">
        
        {/* Micro Trust Header */}
        <div className="flex items-center justify-between px-2 pb-2 text-[10px] text-slate-400 font-semibold border-b border-slate-800/80 mb-2">
          <span className="flex items-center gap-1 text-emerald-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>100+ Indian Labs Onboarded</span>
          </span>
          <span className="text-slate-400">₹0 Setup • 14-Day Free Access</span>
        </div>

        {/* Action Buttons Row */}
        <div className="flex items-center gap-2">
          {/* 1. Primary WhatsApp Action Button */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-emerald-500 hover:bg-emerald-600 active:scale-95 text-white py-3 px-3.5 rounded-xl font-bold text-xs flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/25 transition-all"
          >
            {/* WhatsApp Vector Icon */}
            <svg className="w-4 h-4 fill-white flex-shrink-0" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
            </svg>
            <span>WhatsApp Demo</span>
          </a>

          {/* 2. Direct Call Action Button */}
          <a
            href={`tel:${brandConfig.contact?.phone || '18001234567'}`}
            className="bg-white/10 hover:bg-white/20 active:scale-95 text-white border border-white/10 py-3 px-3.5 rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 transition-all shadow-sm"
          >
            <PhoneCall className="w-3.5 h-3.5 text-emerald-400" />
            <span>Call Lab Expert</span>
          </a>
        </div>

      </div>
    </aside>
  );
}
