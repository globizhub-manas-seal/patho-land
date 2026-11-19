import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Activity, ShieldCheck, Award } from 'lucide-react';
import { brandConfig } from '../data/brand';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#050810] text-slate-400 pt-16 pb-28 md:pb-16 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-12">
          {/* Brand Col */}
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 mb-6 group">
              {brandConfig.logoUrl ? (
                <Image
                  src={brandConfig.logoUrl}
                  alt={brandConfig.logoAlt}
                  width={32}
                  height={32}
                  className="w-8 h-8 object-contain rounded-lg shadow-sm"
                />
              ) : (
                <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center">
                  <Activity className="text-white w-5 h-5" />
                </div>
              )}
              <span className="font-bold text-xl text-white tracking-tight">
                {brandConfig.brandName}<span className="text-orange-400">{brandConfig.brandHighlight}</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed mb-6 text-slate-400">
              India's First Fully Pay-As-You-Go Cloud Pathology Software. Designed for speed, security, and true scalability without the massive subscription fees.
            </p>

            {/* Social Media Links */}
            <div className="mb-8">
              <span className="block text-xs uppercase tracking-wider font-semibold text-slate-400 mb-3.5">
                Follow Us
              </span>
              <div className="flex items-center gap-3">
                {/* 1. LinkedIn */}
                <a
                  href={brandConfig.socialLinks?.linkedin || '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-[14px] bg-white flex items-center justify-center shadow-md hover:scale-110 hover:shadow-xl transition-all duration-300"
                  aria-label="LinkedIn"
                >
                  <svg className="w-6 h-6 text-[#0A66C2]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.53 1.53 0 0 0 0-3.06 1.53 1.53 0 0 0 0 3.06m1.4 9.74V9.93H5.06v8.57h2.8z"/>
                  </svg>
                </a>

                {/* 2. Instagram */}
                <a
                  href={brandConfig.socialLinks?.instagram || '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-[14px] bg-gradient-to-tr from-[#f9a03f] via-[#e1306c] to-[#833ab4] flex items-center justify-center shadow-md hover:scale-110 hover:shadow-xl transition-all duration-300 text-white"
                  aria-label="Instagram"
                >
                  <svg className="w-5 h-5 fill-none stroke-white stroke-[2.2]" viewBox="0 0 24 24">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>

                {/* 3. YouTube */}
                <a
                  href={brandConfig.socialLinks?.youtube || '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-[14px] bg-[#FF0000] flex items-center justify-center shadow-md hover:scale-110 hover:shadow-xl transition-all duration-300 text-white"
                  aria-label="YouTube"
                >
                  <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>

                {/* 4. Facebook */}
                <a
                  href={brandConfig.socialLinks?.facebook || '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-[14px] bg-[#1877F2] flex items-center justify-center shadow-md hover:scale-110 hover:shadow-xl transition-all duration-300 text-white"
                  aria-label="Facebook"
                >
                  <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Below Social Media: ISO Certifications & Make In India Badges/Logos */}
            <div>
              <span className="block text-xs uppercase tracking-wider font-semibold text-slate-400 mb-3">
                Accreditations & Certifications
              </span>
              <div className="flex flex-wrap items-center gap-2.5">
                {/* 1. ISO 9001 Logo */}
                {brandConfig.isoLogoUrl ? (
                  <div className="bg-white/5 border border-slate-800 hover:border-slate-700 rounded-xl p-2 transition-all shadow-sm">
                    <img
                      src={brandConfig.isoLogoUrl}
                      alt="ISO 9001 Certified"
                      className="h-9 sm:h-10 w-auto object-contain brightness-95 hover:brightness-105"
                    />
                  </div>
                ) : (
                  <div className="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs font-semibold text-slate-300 shadow-sm hover:border-slate-700 transition-all">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    <span>ISO 9001</span>
                  </div>
                )}

                {/* 2. ISO Logo 2 (e.g. ISO 27001) */}
                {brandConfig.isoLogo2Url ? (
                  <div className="bg-white/5 border border-slate-800 hover:border-slate-700 rounded-xl p-2 transition-all shadow-sm">
                    <img
                      src={brandConfig.isoLogo2Url}
                      alt="ISO 27001 Certified"
                      className="h-9 sm:h-10 w-auto object-contain brightness-95 hover:brightness-105"
                    />
                  </div>
                ) : (
                  <div className="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs font-semibold text-slate-300 shadow-sm hover:border-slate-700 transition-all">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    <span>ISO 27001</span>
                  </div>
                )}

                {/* 3. ISO Logo 3 (e.g. ISO 15189 / ISO 13485) */}
                {brandConfig.isoLogo3Url ? (
                  <div className="bg-white/5 border border-slate-800 hover:border-slate-700 rounded-xl p-2 transition-all shadow-sm">
                    <img
                      src={brandConfig.isoLogo3Url}
                      alt="ISO 15189 Certified"
                      className="h-9 sm:h-10 w-auto object-contain brightness-95 hover:brightness-105"
                    />
                  </div>
                ) : (
                  <div className="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs font-semibold text-slate-300 shadow-sm hover:border-slate-700 transition-all">
                    <Award className="w-4 h-4 text-emerald-400" />
                    <span>ISO 15189</span>
                  </div>
                )}

                {/* 4. Make in India Logo */}
                {brandConfig.makeInIndiaLogoUrl ? (
                  <div className="bg-white/5 border border-slate-800 hover:border-slate-700 rounded-xl p-2 transition-all shadow-sm">
                    <img
                      src={brandConfig.makeInIndiaLogoUrl}
                      alt="Make in India"
                      className="h-9 sm:h-10 w-auto object-contain brightness-95 hover:brightness-105"
                    />
                  </div>
                ) : (
                  <div className="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs font-semibold text-slate-300 shadow-sm hover:border-slate-700 transition-all">
                    <span className="text-sm">🇮🇳</span>
                    <span>Make In India</span>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Product Col */}
          <div>
            <h4 className="text-white font-semibold mb-6 text-sm tracking-wider uppercase">Product</h4>
            <ul className="space-y-3.5 text-sm">
              <li>
                <a href="/#features" className="hover:text-emerald-400 transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="/#pricing" className="hover:text-emerald-400 transition-colors">
                  Pricing & Wallet
                </a>
              </li>
              <li>
                <a href="https://app.patholab.cloud/login" className="hover:text-emerald-400 transition-colors">
                  Partner Login
                </a>
              </li>
              <li>
                <a
                  href={`https://wa.me/918402010207?text=${encodeURIComponent('Hi, I want to book a live demo of Patholab Cloud for my lab.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-400 transition-colors"
                >
                  Book a Demo
                </a>
              </li>
            </ul>
          </div>

          {/* Legal Col */}
          <div>
            <h4 className="text-white font-semibold mb-6 text-sm tracking-wider uppercase">Legal</h4>
            <ul className="space-y-3.5 text-sm">
              <li>
                <Link href="/terms-and-conditions" className="hover:text-emerald-400 transition-colors">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:text-emerald-400 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/refund-policy" className="hover:text-emerald-400 transition-colors">
                  Refund & Cancellation
                </Link>
              </li>
              <li>
                <Link href="/shipping-policy" className="hover:text-emerald-400 transition-colors">
                  Shipping & Delivery
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-emerald-400 transition-colors">
                  Contact Us 
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Col */}
          <div>
            <h4 className="text-white font-semibold mb-6 text-sm tracking-wider uppercase">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <span className="text-slate-500">Email:</span>
                <a href="mailto:sales@patholab.cloud" className="text-slate-300 hover:text-emerald-400 transition-colors">
                  sales@patholab.cloud
                </a>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-slate-500">Phone:</span>
                <a href="tel:+918402010207" className="text-slate-300 font-semibold hover:text-emerald-400 transition-colors">
                  +91 84020 10207
                </a>
              </li>
              <li className="mt-4 pt-4 border-t border-slate-800">
                <span className="block text-slate-500 text-xs mb-1 font-semibold uppercase tracking-wider">
                  Corporate Headquarters
                </span>
                <span className="text-slate-300 text-xs leading-relaxed block">
                 NO 594/4/2, First Floor,
Opp. to BDS Nagar, RK Nagar 2,
Kothanur Main Road, Bengaluru- 560077, India.

                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
       <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
  <p>© {currentYear} Patholab.Cloud. All rights reserved.</p>
  
  <div className="flex flex-wrap items-center gap-2">
    <p className="text-slate-400">A product of</p>
    <a 
      href="https://globizhub.com/" 
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-white transition-colors font-bold inline-flex items-center gap-1"
    >
      GlobizHub India Pvt Ltd.
      
      {/* External Link Icon */}
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        className="w-3 h-3 opacity-70"
      >
        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
        <polyline points="15 3 21 3 21 9" />
        <line x1="10" y1="14" x2="21" y2="3" />
      </svg>
    </a>
  </div>
</div>
      </div>
    </footer>
  );
}
