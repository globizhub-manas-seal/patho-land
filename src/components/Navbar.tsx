'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Activity, Menu, X, CheckCircle2, PhoneCall } from 'lucide-react';
import { brandConfig } from '../data/brand';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isHero, setIsHero] = useState(true);
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);


  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;

          // 1. Check if inside Hero Section (< 120px)
          if (currentScrollY < 120) {
            setIsHero(true);
            setIsVisible(true);
            lastScrollY.current = currentScrollY;
            ticking = false;
            return;
          }

          setIsHero(false);

          // 2. While actively scrolling down, navbar disappears
          if (currentScrollY > lastScrollY.current && currentScrollY - lastScrollY.current > 6) {
            setIsVisible(false);
          } 
          // 3. While scrolling up, navbar appears
          else if (currentScrollY < lastScrollY.current - 4) {
            setIsVisible(true);
          }

          lastScrollY.current = currentScrollY;
          ticking = false;
        });
        ticking = true;
      }
    };

    // Initial scroll position synchronization on mount
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed left-0 right-0 z-50 transition-all duration-300 ease-out ${
        isVisible ? 'translate-y-0 opacity-100' : '-translate-y-24 opacity-0 pointer-events-none'
      } ${
        isHero
          ? 'top-0 w-full bg-transparent border-b border-transparent py-4'
          : 'top-3 sm:top-4 px-3 sm:px-6 w-full flex justify-center'
      }`}
    >
      <div
        className={`transition-all duration-300 ease-out w-full ${
          isHero
            ? 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'
            : 'max-w-6xl mx-auto bg-white/95 backdrop-blur-xl border border-slate-200/90 shadow-xl shadow-slate-900/5 rounded-full px-5 sm:px-7 py-2.5'
        }`}
      >
        <div className="flex justify-between items-center h-12 sm:h-14">
          
          {/* Brand Logo & Product Name */}
          <Link href="/" className="flex-shrink-0 flex items-center gap-2.5 cursor-pointer group">
            {brandConfig.logoUrl ? (
              <Image
                src={brandConfig.logoUrl}
                alt={brandConfig.logoAlt}
                width={40}
                height={40}
                priority
                className="w-9 h-9 sm:w-10 sm:h-10 object-contain rounded-xl shadow-sm group-hover:scale-105 transition-transform"
              />
            ) : (
              <div className="w-9 h-9 bg-emerald-500 rounded-xl flex items-center justify-center shadow-md shadow-emerald-500/25 group-hover:scale-105 transition-transform">
                <Activity className="text-white w-5 h-5" />
              </div>
            )}
            <div className="flex flex-col">
              <span className="font-bold text-xl sm:text-2xl tracking-tight text-[#0B1120] leading-tight group-hover:text-emerald-950 transition-colors">
                {brandConfig.brandName}<span className="text-orange-500">{brandConfig.brandHighlight}</span>
              </span>
              <span className="text-[9px] uppercase tracking-wider text-slate-400 font-semibold hidden sm:block">
                {brandConfig.tagline}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-7 lg:space-x-8">
            <a
              href="/#features"
              className="relative text-slate-800 font-semibold text-sm hover:text-emerald-600 transition-colors group py-1"
            >
              Features
            </a>
            <a
              href="/#comparison"
              className="text-slate-600 hover:text-slate-900 font-medium text-sm transition-colors py-1"
            >
              Why Us
            </a>
            <a
              href="/#integration"
              className="text-slate-600 hover:text-slate-900 font-medium text-sm transition-colors py-1"
            >
              IoT Interfacing
            </a>
            <a
              href="/#reports"
              className="text-slate-600 hover:text-slate-900 font-medium text-sm transition-colors py-1"
            >
              Sample Reports
            </a>
            <a
              href="/#reviews"
              className="text-slate-600 hover:text-slate-900 font-medium text-sm transition-colors py-1"
            >
              Reviews
            </a>
            <a
              href="/#faq"
              className="text-slate-600 hover:text-slate-900 font-medium text-sm transition-colors py-1"
            >
              FAQ
            </a>
          </nav>

          {/* Desktop Action Buttons (ISO Badge + Pill CTA) */}
          <div className="hidden md:flex items-center space-x-3.5">
            {/* ISO & NABL Accreditation Pill Badge */}
            <div className="hidden lg:flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-slate-200/90 text-[11px] font-semibold text-slate-700 bg-white/70 shadow-sm">
              <CheckCircle2 className="w-3.5 h-3.5 text-slate-800" />
              <span>ISO 9001 & ISO 27001</span>
            </div>

            <a
              href="https://app.patholab.cloud/login"
              className="text-slate-700 font-semibold text-sm hover:text-emerald-600 transition-colors px-2 py-1"
            >
              Login
            </a>

            {/* Dark Pill Primary CTA Button */}
            <a
              href="https://app.patholab.cloud/register"
              className="bg-[#0B1120] hover:bg-slate-800 text-white font-semibold text-xs px-4 py-2 rounded-full transition-all shadow-md shadow-slate-900/10 hover:shadow-lg flex items-center gap-1.5"
            >
              <span>Get Started</span>
            </a>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-[#0B1120] focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden mt-2 mx-4 bg-white/98 backdrop-blur-2xl border border-slate-200 rounded-3xl p-5 space-y-3.5 shadow-2xl animate-slide-down">
          <a
            href="/#features"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block text-slate-800 font-semibold py-1.5 hover:text-emerald-600"
          >
            Features
          </a>
          <a
            href="/#comparison"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block text-slate-600 font-medium py-1.5 hover:text-emerald-600"
          >
            Why Us
          </a>
          <a
            href="/#integration"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block text-slate-600 font-medium py-1.5 hover:text-emerald-600"
          >
            IoT Interfacing
          </a>
          <a
            href="/#reports"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block text-slate-600 font-medium py-1.5 hover:text-emerald-600"
          >
            Sample Reports
          </a>
          <a
            href="/#reviews"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block text-slate-600 font-medium py-1.5 hover:text-emerald-600"
          >
            Reviews
          </a>
          <a
            href="/#faq"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block text-slate-600 font-medium py-1.5 hover:text-emerald-600"
          >
            FAQ
          </a>

          <div className="pt-2 border-t border-slate-100 flex flex-col gap-2.5">
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-slate-200 text-xs font-semibold text-slate-700 bg-slate-50 w-fit">
              <CheckCircle2 className="w-3.5 h-3.5 text-slate-800" />
              <span>ISO 9001 & ISO 27001 Certified</span>
            </div>
            
            <div className="flex gap-2 pt-1">
              <a
                href="https://app.patholab.cloud/login"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex-1 text-center bg-slate-100 hover:bg-slate-200 text-slate-800 py-2.5 rounded-full font-semibold text-xs transition-colors"
              >
                Login
              </a>
              <a
                href="#demo"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex-1 text-center bg-[#0B1120] hover:bg-slate-800 text-white py-2.5 rounded-full font-semibold text-xs shadow-md flex items-center justify-center gap-1.5 transition-all"
              >
                <PhoneCall className="w-3 h-3" />
                <span>Talk to Expert</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
