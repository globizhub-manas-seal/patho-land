import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Shield, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function LegalPageLayout({ title, lastUpdated, children }) {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col selection:bg-emerald-200 selection:text-emerald-900">
      <Navbar />

      <main className="flex-grow pt-32 pb-24 md:pb-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Breadcrumb */}
        <div className="mb-6">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-600 hover:text-emerald-700 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Home</span>
          </Link>
        </div>

        {/* Header */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/80 shadow-sm mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 text-emerald-700 text-xs font-semibold mb-4 border border-emerald-100">
            <Shield className="w-3.5 h-3.5" />
            <span>Official Policy & Compliance</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0B1120] mb-3">
            {title}
          </h1>
          <p className="text-xs text-slate-400">
            Last Updated: {lastUpdated || 'November 2026'} • Patholab Cloud Technologies Pvt Ltd
          </p>
        </div>

        {/* Policy Body */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/80 shadow-sm legal-prose leading-relaxed text-sm sm:text-base space-y-6">
          {children}
        </div>
      </main>

      <Footer />
    </div>
  );
}
