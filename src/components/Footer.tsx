import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Activity, ShieldCheck, Award } from 'lucide-react';
import { brandConfig } from '../data/brand';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-paper-alt text-bodyText pt-16 pb-28 md:pb-16 border-t border-borderSubtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8 mb-12">
          {/* Brand Col */}
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 mb-5 group">
              {brandConfig.logoUrl ? (
                <Image
                  src={brandConfig.logoUrl}
                  alt={brandConfig.logoAlt}
                  width={32}
                  height={32}
                  className="w-8 h-8 object-contain rounded-lg border border-borderSubtle"
                />
              ) : (
                <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
                  <Activity className="text-white w-5 h-5" />
                </div>
              )}
              <span className="font-serif font-bold text-xl text-ink tracking-tight">
                {brandConfig.brandName}
                <span className="text-[#01A9B4]">{brandConfig.brandHighlight}</span>
              </span>
            </Link>

            <p className="text-xs sm:text-sm leading-relaxed mb-6 text-bodyText">
              India&apos;s First Fully Pay-As-You-Go Cloud Pathology Software. Designed for speed, clinical accuracy, and scalability without expensive annual software contracts.
            </p>

            {/* Social Media Links */}
            <div className="mb-6">
              <span className="block text-[11px] uppercase tracking-wider font-semibold text-mutedText mb-3">
                Follow Us
              </span>
              <div className="flex items-center gap-2.5">
                {/* 1. LinkedIn */}
                <a
                  href={brandConfig.socialLinks?.linkedin || '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl bg-white border border-borderSubtle flex items-center justify-center shadow-subtle hover:scale-105 transition-all text-[#0A66C2]"
                  aria-label="LinkedIn"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.53 1.53 0 0 0 0-3.06 1.53 1.53 0 0 0 0 3.06m1.4 9.74V9.93H5.06v8.57h2.8z"/>
                  </svg>
                </a>

                {/* 2. Instagram */}
                <a
                  href={brandConfig.socialLinks?.instagram || '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl bg-white border border-borderSubtle flex items-center justify-center shadow-subtle hover:scale-105 transition-all text-[#E1306C]"
                  aria-label="Instagram"
                >
                  <svg className="w-4 h-4 fill-none stroke-current stroke-[2.2]" viewBox="0 0 24 24">
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
                  className="w-9 h-9 rounded-xl bg-white border border-borderSubtle flex items-center justify-center shadow-subtle hover:scale-105 transition-all text-[#FF0000]"
                  aria-label="YouTube"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>

                {/* 4. Facebook */}
                <a
                  href={brandConfig.socialLinks?.facebook || '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl bg-white border border-borderSubtle flex items-center justify-center shadow-subtle hover:scale-105 transition-all text-[#1877F2]"
                  aria-label="Facebook"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Accreditations */}
            <div>
              <span className="block text-[11px] uppercase tracking-wider font-semibold text-mutedText mb-2.5">
                Accreditations
              </span>
              <div className="flex flex-wrap items-center gap-2">
                {brandConfig.isoLogoUrl ? (
                  <div className="bg-white border border-borderSubtle rounded-lg p-1.5 shadow-subtle">
                    <img
                      src={brandConfig.isoLogoUrl}
                      alt="ISO 9001 Certified"
                      className="h-8 w-auto object-contain"
                    />
                  </div>
                ) : (
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-white border border-borderSubtle text-xs font-semibold text-ink">
                    <ShieldCheck className="w-3.5 h-3.5 text-accent" />
                    <span>ISO 9001</span>
                  </div>
                )}

                {brandConfig.isoLogo2Url ? (
                  <div className="bg-white border border-borderSubtle rounded-lg p-1.5 shadow-subtle">
                    <img
                      src={brandConfig.isoLogo2Url}
                      alt="ISO 27001 Certified"
                      className="h-8 w-auto object-contain"
                    />
                  </div>
                ) : (
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-white border border-borderSubtle text-xs font-semibold text-ink">
                    <ShieldCheck className="w-3.5 h-3.5 text-accent" />
                    <span>ISO 27001</span>
                  </div>
                )}

                {brandConfig.makeInIndiaLogoUrl && (
                  <div className="bg-white border border-borderSubtle rounded-lg p-1.5 shadow-subtle">
                    <img
                      src={brandConfig.makeInIndiaLogoUrl}
                      alt="Make in India"
                      className="h-8 w-auto object-contain"
                    />
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Product Col */}
          <div>
            <h4 className="font-serif text-ink font-semibold mb-5 text-sm tracking-wide uppercase">
              Product
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm">
              <li>
                <a href="/#features" className="hover:text-ink transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="/#pricing" className="hover:text-ink transition-colors">
                  Pricing & Wallet
                </a>
              </li>
              <li>
                <a href="https://app.patholab.cloud/login" className="hover:text-ink transition-colors">
                  Partner Login
                </a>
              </li>
              <li>
                <a
                  href={`https://wa.me/${brandConfig.contact.whatsappNumber}?text=${encodeURIComponent(
                    brandConfig.contact.whatsappMessage
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-ink transition-colors font-semibold text-accent"
                >
                  Book a Demo (WhatsApp)
                </a>
              </li>
            </ul>
          </div>

          {/* Legal Col */}
          <div>
            <h4 className="font-serif text-ink font-semibold mb-5 text-sm tracking-wide uppercase">
              Legal
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm">
              <li>
                <Link href="/terms-and-conditions" className="hover:text-ink transition-colors">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:text-ink transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/refund-policy" className="hover:text-ink transition-colors">
                  Refund & Cancellation
                </Link>
              </li>
              <li>
                <Link href="/shipping-policy" className="hover:text-ink transition-colors">
                  Shipping & Delivery
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-ink transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Col */}
          <div>
            <h4 className="font-serif text-ink font-semibold mb-5 text-sm tracking-wide uppercase">
              Contact Us
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li className="flex items-center gap-2">
                <span className="text-mutedText">Email:</span>
                <a href="mailto:sales@patholab.cloud" className="text-ink hover:text-accent transition-colors font-medium">
                  sales@patholab.cloud
                </a>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-mutedText">Phone:</span>
                <a href="tel:+918402010207" className="text-ink hover:text-accent transition-colors font-semibold">
                  +91 84020 10207
                </a>
              </li>
              <li className="mt-4 pt-4 border-t border-borderSubtle">
                <span className="block text-mutedText text-[11px] mb-1 font-semibold uppercase tracking-wider">
                  Corporate Headquarters
                </span>
                <span className="text-bodyText text-xs leading-relaxed block">
                  NO 594/4/2, First Floor, Opp. to BDS Nagar, RK Nagar 2, Kothanur Main Road, Bengaluru- 560077, India.
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-borderSubtle flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-mutedText">
          <p>© {currentYear} Patholab.Cloud. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-2">
            <span>A product of</span>
            <a
              href="https://globizhub.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-ink hover:text-accent transition-colors font-semibold inline-flex items-center gap-1"
            >
              GlobizHub India Pvt Ltd.
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
