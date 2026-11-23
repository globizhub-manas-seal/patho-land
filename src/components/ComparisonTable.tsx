'use client';

import React from 'react';
import { CheckCircle2, XCircle } from 'lucide-react';
import { comparisonData } from '../data/features';
import Eyebrow from './ui/Eyebrow';

export default function ComparisonTable() {
  return (
    <section id="comparison" className="py-20 lg:py-28 bg-paper border-b border-borderSubtle">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <Eyebrow variant="sage" className="mb-3">
            Financial & Operational Comparison
          </Eyebrow>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-ink tracking-tight mb-4">
            Why Pay Huge Annual Software Fees?
          </h2>
          <p className="text-bodyText text-base sm:text-lg">
            See how Patholab Cloud stacks up against legacy desktop solutions and expensive local installations.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="bg-white rounded-card-lg border border-borderSubtle shadow-subtle overflow-hidden">
          {/* Table Header */}
          <div className="grid grid-cols-12 border-b border-borderSubtle bg-paper-alt/60 text-xs sm:text-sm font-semibold">
            <div className="col-span-5 sm:col-span-4 p-4 sm:p-5 text-ink uppercase tracking-wider">
              Key Capability
            </div>
            <div className="col-span-3 sm:col-span-4 p-4 sm:p-5 text-mutedText text-center uppercase tracking-wider">
              Traditional Software
            </div>
            {/* Highlighted Patholab Column Header */}
            <div className="col-span-4 sm:col-span-4 p-4 sm:p-5 text-ink text-center uppercase tracking-wider bg-sage/50 border-t-4 border-saffron font-bold">
              Patholab Cloud
            </div>
          </div>

          {/* Table Rows */}
          {comparisonData.map((row, i) => (
            <div
              key={i}
              className="grid grid-cols-12 border-b border-borderSubtle last:border-0 items-center text-xs sm:text-sm transition-colors hover:bg-paper/40"
            >
              {/* Feature Title */}
              <div className="col-span-5 sm:col-span-4 p-4 sm:p-5 font-medium text-ink">
                {row.f}
              </div>

              {/* Traditional (Negative / Brick Accent) */}
              <div className="col-span-3 sm:col-span-4 p-4 sm:p-5 text-mutedText text-center flex items-center justify-center gap-1.5 bg-paper-alt/20">
                <XCircle className="w-4 h-4 text-brick flex-shrink-0 hidden sm:inline" />
                <span className="text-brick font-medium">{row.t}</span>
              </div>

              {/* Patholab Cloud (Positive / Accent & Sage Background) */}
              <div className="col-span-4 sm:col-span-4 p-4 sm:p-5 text-ink text-center flex items-center justify-center gap-2 bg-sage/40 font-semibold">
                <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 hidden sm:inline" />
                <span className="text-ink">{row.p}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Editorial Callout */}
        <div className="mt-8 p-4 rounded-card bg-paper-alt border border-borderSubtle flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-bodyText">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-accent" />
            <span>No annual maintenance charge (AMC), hidden installation fees, or version upgrade costs.</span>
          </div>
          <a
            href="https://app.patholab.cloud/register"
            className="text-accent font-semibold hover:underline whitespace-nowrap"
          >
            Start with ₹0 Setup →
          </a>
        </div>
      </div>
    </section>
  );
}
