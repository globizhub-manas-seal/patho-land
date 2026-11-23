import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Shield, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function LegalPageLayout({
  title,
  lastUpdated,
  children,
}: {
  title: string;
  lastUpdated?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-paper text-bodyText flex flex-col selection:bg-sage selection:text-ink">
      <Navbar />

      <main className="flex-grow pt-28 pb-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Breadcrumb */}
        <div className="mb-6">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent hover:text-ink transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Home</span>
          </Link>
        </div>

        {/* Header */}
        <div className="bg-white rounded-card-lg p-8 sm:p-12 border border-borderSubtle shadow-subtle mb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sage/60 text-ink text-xs font-semibold mb-4 border border-borderSubtle">
            <Shield className="w-3.5 h-3.5 text-accent" />
            <span>Official Policy & Compliance</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl font-semibold text-ink mb-3">
            {title}
          </h1>
          <p className="text-xs text-mutedText">
            Last Updated: {lastUpdated || 'November 2026'} • Patholab Cloud Technologies Pvt Ltd
          </p>
        </div>

        {/* Policy Body */}
        <div className="bg-white rounded-card-lg p-8 sm:p-12 border border-borderSubtle shadow-subtle legal-prose leading-relaxed text-sm sm:text-base space-y-6">
          {children}
        </div>
      </main>

      <Footer />
    </div>
  );
}
