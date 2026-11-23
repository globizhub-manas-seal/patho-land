'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Activity, Menu, X, CheckCircle2, MessageCircle } from 'lucide-react';
import { brandConfig } from '../data/brand';

const navLinks = [
  { name: 'Features', href: '/#features' },
  { name: 'Why Us', href: '/#comparison' },
  { name: 'IoT Interfacing', href: '/#integration' },
  { name: 'Sample Reports', href: '/#reports' },
  { name: 'Reviews', href: '/#reviews' },
  { name: 'FAQ', href: '/#faq' },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [hoveredNav, setHoveredNav] = useState<string | null>(null);
  const lastScrollY = useRef(0);

  // Scroll Progress Bar
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < 40) {
        setIsScrolled(false);
        setIsVisible(true);
      } else {
        setIsScrolled(true);
        if (currentScrollY > lastScrollY.current + 8 && currentScrollY > 140) {
          setIsVisible(false);
        } else if (currentScrollY < lastScrollY.current - 6) {
          setIsVisible(true);
        }
      }
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const whatsappDemoUrl = `https://wa.me/${brandConfig.contact.whatsappNumber}?text=${encodeURIComponent(
    brandConfig.contact.whatsappMessage
  )}`;

  return (
    <>
      {/* Top Scroll Progress Indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] bg-saffron origin-left z-[60]"
        style={{ scaleX }}
      />

      <header
        className={`fixed left-0 right-0 z-50 transition-all duration-300 ease-out ${
          isVisible ? 'translate-y-0 opacity-100' : '-translate-y-24 opacity-0 pointer-events-none'
        } ${
          isScrolled ? 'top-2 sm:top-3 px-3 sm:px-6' : 'top-0 px-0'
        }`}
      >
        <div
          className={`mx-auto transition-all duration-300 ${
            isScrolled
              ? 'max-w-6xl bg-white/95 backdrop-blur-md border border-borderSubtle rounded-full px-4 sm:px-6 py-2 shadow-subtle'
              : 'max-w-7xl px-4 sm:px-6 lg:px-8 py-3.5 bg-paper/90 backdrop-blur-sm border-b border-borderSubtle'
          }`}
        >
          <div className="flex items-center justify-between h-11 sm:h-12">
            {/* Brand Logo & Name */}
            <Link
              href="/"
              className="flex items-center gap-2.5 cursor-pointer group flex-shrink-0 mr-4 xl:mr-8"
            >
              {brandConfig.logoUrl ? (
                <Image
                  src={brandConfig.logoUrl}
                  alt={brandConfig.logoAlt}
                  width={36}
                  height={36}
                  priority
                  className="w-8 h-8 sm:w-9 sm:h-9 object-contain rounded-lg border border-borderSubtle/60"
                />
              ) : (
                <div className="w-8 h-8 sm:w-9 sm:h-9 bg-accent rounded-lg flex items-center justify-center shadow-sm">
                  <Activity className="text-white w-4 h-4" />
                </div>
              )}
              <div className="flex flex-col">
                <span className="font-bold text-lg sm:text-xl tracking-tight text-ink leading-tight">
                  {brandConfig.brandName}
                  <span className="text-[#01A9B4]">{brandConfig.brandHighlight}</span>
                </span>
                <span className="text-[9px] uppercase tracking-wider text-mutedText font-semibold hidden sm:block">
                  {brandConfig.tagline}
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links with Capsule Hover Pill Effect */}
            <nav
              onMouseLeave={() => setHoveredNav(null)}
              className="hidden lg:flex items-center gap-0.5 xl:gap-1 flex-shrink-0 bg-paper-alt/60 border border-borderSubtle/80 p-1 rounded-full shadow-inner"
            >
              {navLinks.map((link) => {
                const isHovered = hoveredNav === link.name;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onMouseEnter={() => setHoveredNav(link.name)}
                    className="relative px-3.5 py-1.5 text-xs xl:text-sm font-medium text-bodyText hover:text-ink transition-colors rounded-full whitespace-nowrap select-none"
                  >
                    {isHovered && (
                      <motion.div
                        layoutId="navHoverPill"
                        className="absolute inset-0 bg-white border border-borderSubtle rounded-full shadow-sm"
                        transition={{ type: 'spring', stiffness: 450, damping: 30 }}
                      />
                    )}
                    <span className={`relative z-10 ${isHovered ? 'font-semibold text-ink' : ''}`}>
                      {link.name}
                    </span>
                  </a>
                );
              })}
            </nav>

            {/* Desktop Action Buttons */}
            <div className="hidden md:flex items-center gap-2.5 flex-shrink-0">
              {/* Accreditation Badge */}
              <div className="hidden xl:flex items-center gap-1.5 px-3 py-1 rounded-full border border-borderSubtle text-[11px] font-medium text-ink bg-sage/40">
                <CheckCircle2 className="w-3.5 h-3.5 text-accent flex-shrink-0" />
                <span>ISO 9001 & ISO 27001</span>
              </div>

              {/* Login Button with Capsule Hover Pill */}
              <a
                href="https://app.patholab.cloud/login"
                onMouseEnter={() => setHoveredNav('Login')}
                onMouseLeave={() => setHoveredNav(null)}
                className="relative text-bodyText font-semibold text-xs lg:text-sm hover:text-ink transition-colors px-3 py-1.5 rounded-full whitespace-nowrap"
              >
                {hoveredNav === 'Login' && (
                  <motion.div
                    layoutId="actionHoverPill"
                    className="absolute inset-0 bg-paper-alt border border-borderSubtle rounded-full shadow-sm"
                    transition={{ type: 'spring', stiffness: 450, damping: 30 }}
                  />
                )}
                <span className="relative z-10">Login</span>
              </a>

              {/* Saffron Primary Book Demo Button with Hover Lift and Inset Depth */}
              <a
                href={whatsappDemoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative bg-saffron hover:bg-saffron-hover text-ink font-semibold text-xs px-4 py-2 rounded-full transition-all duration-200 shadow-sm hover:shadow-[0_4px_14px_rgba(242,163,58,0.35)] hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] flex items-center gap-1.5 whitespace-nowrap"
              >
                <MessageCircle className="w-3.5 h-3.5 fill-ink/20 group-hover:scale-110 transition-transform" />
                <span>Book Demo</span>
              </a>
            </div>

            {/* Mobile Hamburger Toggle */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 text-ink hover:text-accent focus:outline-none rounded-lg"
                aria-label="Toggle Navigation Menu"
              >
                {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-2 mx-4 bg-white border border-borderSubtle rounded-2xl p-5 space-y-2 shadow-lift animate-in fade-in slide-in-from-top-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-bodyText font-medium px-3 py-2 rounded-full hover:bg-paper-alt hover:text-ink transition-colors"
              >
                {link.name}
              </a>
            ))}

            <div className="pt-3 border-t border-borderSubtle flex flex-col gap-2">
              <a
                href={whatsappDemoUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMobileMenuOpen(false)}
                className="bg-saffron hover:bg-saffron-hover text-ink font-bold text-center py-2.5 rounded-full text-sm shadow-sm flex items-center justify-center gap-2 transition-all active:scale-[0.98]"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Book a Demo (WhatsApp)</span>
              </a>
              <a
                href="https://app.patholab.cloud/login"
                onClick={() => setIsMobileMenuOpen(false)}
                className="bg-paper-alt text-ink font-medium text-center py-2 rounded-full text-sm border border-borderSubtle hover:bg-paper-warm transition-colors"
              >
                Login to Portal
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
