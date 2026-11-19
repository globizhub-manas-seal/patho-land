import React from 'react';
import { CheckCircle2, XCircle } from 'lucide-react';
import { comparisonData } from '../data/features';

export default function ComparisonTable() {
  return (
    <section id="comparison" className="py-24 bg-slate-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 reveal">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-slate-200/60 text-slate-700 text-xs font-semibold mb-3">
            Clear Breakdown
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0B1120] mb-4">
            Why Pay Huge Annual Software Fees?
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            See how Patholab Cloud stacks up against legacy desktop solutions and expensive local installations.
          </p>
        </div>

        <div className="bg-white rounded-[2rem] shadow-xl shadow-slate-200/50 border border-slate-100 overflow-hidden reveal-scale delay-150">
          {/* Table Header */}
          <div className="grid grid-cols-3 bg-slate-50/80 border-b border-slate-200 p-6 text-sm md:text-base">
            <div className="font-bold text-slate-800">Key Features</div>
            <div className="font-bold text-slate-500 text-center">Traditional Software</div>
            <div className="font-bold text-emerald-600 text-center">Patholab Cloud</div>
          </div>

          {/* Table Rows */}
          {comparisonData.map((row, i) => (
            <div
              key={i}
              className="grid grid-cols-3 p-6 border-b border-slate-100 last:border-0 hover:bg-slate-50/60 transition-colors items-center text-sm md:text-base"
            >
              <div className="font-medium text-slate-700">{row.f}</div>
              <div className="text-slate-500 text-center flex items-center justify-center gap-1.5">
                <span className="hidden sm:inline text-xs text-rose-500">
                  <XCircle className="w-4 h-4 inline mr-1 text-rose-400" />
                </span>
                <span>{row.t}</span>
              </div>
              <div className="font-bold text-emerald-600 text-center flex items-center justify-center gap-2">
                <CheckCircle2 className="w-5 h-5 hidden md:block text-emerald-500 flex-shrink-0" />
                <span>{row.p}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
