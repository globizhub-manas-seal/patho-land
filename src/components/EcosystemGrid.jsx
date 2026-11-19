'use client';

import React, { useState } from 'react';
import { platformFeatures } from '../data/features';
import { ArrowRight, CheckCircle2, Sparkles, Layers, ChevronRight } from 'lucide-react';

export default function EcosystemGrid() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [activeCardId, setActiveCardId] = useState(null);

  const categories = ['All', 'Diagnostics', 'Operations', 'Financials'];

  const filteredFeatures = activeCategory === 'All'
    ? platformFeatures
    : platformFeatures.filter((item) => item.category === activeCategory);

  return (
    <section id="features" className="py-24 bg-gradient-to-b from-slate-50 via-slate-100/50 to-slate-50 relative overflow-hidden">
      {/* Background Subtle Gradient Blobs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[1100px] h-[500px] bg-emerald-200/20 blur-[140px] rounded-full pointer-events-none -z-10"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-200/20 blur-[120px] rounded-full pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 reveal">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100/90 text-emerald-800 text-xs sm:text-sm font-semibold mb-4 border border-emerald-200/80 shadow-sm">
            <Sparkles className="w-4 h-4 text-emerald-600" />
            <span>Complete 8-Module LIMS Ecosystem</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B1120] tracking-tight leading-tight mb-5">
            Everything Your Lab Needs. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500">
              Built for Modern Speed.
            </span>
          </h2>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Replace disconnected legacy desktop tools with a unified, high-performance cloud suite tailored for fast-paced Indian pathology and diagnostic workflows.
          </p>
        </div>

        {/* Interactive Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12 reveal">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-[#0B1120] text-white shadow-lg shadow-slate-900/15 scale-105'
                  : 'bg-white/80 backdrop-blur-sm text-slate-600 border border-slate-200/80 hover:bg-white hover:text-slate-900 hover:border-slate-300'
              }`}
            >
              {cat === 'All' ? 'All 8 Engines' : cat}
            </button>
          ))}
        </div>

        {/* Modern Dynamic Feature Grid (8 Modern Glassmorphic Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredFeatures.map((item, i) => {
            const Icon = item.icon;
            const isHovered = activeCardId === item.id;
            const delays = ['delay-100', 'delay-150', 'delay-200', 'delay-250'];
            const delayClass = delays[i % delays.length];

            return (
              <div
                key={item.id}
                onMouseEnter={() => setActiveCardId(item.id)}
                onMouseLeave={() => setActiveCardId(null)}
                className={`group relative rounded-[2rem] bg-white/90 backdrop-blur-xl border border-slate-200/80 p-7 flex flex-col justify-between transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-slate-300/60 hover:border-emerald-500/50 reveal ${delayClass} overflow-hidden`}
              >
                {/* Subtle Card Ambient Glow on Hover */}
                <div
                  className={`absolute -top-24 -right-24 w-48 h-48 rounded-full bg-gradient-to-br ${item.gradient} blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`}
                ></div>

                {/* Card Top: Icon & Micro Category Pill */}
                <div>
                  <div className="flex items-center justify-between mb-6">
                    {/* Modern Floating Icon Box */}
                    <div
                      className={`w-13 h-13 p-3 rounded-2xl ${item.iconBg} border flex items-center justify-center shadow-sm group-hover:scale-110 group-hover:rotate-1 transition-all duration-300`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>

                    {/* Category Micro Badge */}
                    <span className={`text-[11px] font-semibold px-2.5 py-1 rounded-full border ${item.badgeColor}`}>
                      {item.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-[#0B1120] mb-3 group-hover:text-emerald-700 transition-colors flex items-center justify-between">
                    <span>{item.title}</span>
                  </h3>

                  {/* Description from provided content */}
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    {item.desc}
                  </p>
                </div>

                {/* Card Bottom: Interactive Live Micro-Widget & Highlights */}
                <div>
                  {/* Modern Simulated Live Feature Chip */}
                  <div className="bg-slate-50/90 border border-slate-200/60 rounded-xl px-3.5 py-2.5 mb-5 flex items-center justify-between text-xs group-hover:bg-emerald-50/40 group-hover:border-emerald-200/60 transition-colors">
                    <div className="flex items-center gap-2 text-slate-700 font-medium">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                      <span className="font-semibold text-slate-800">{item.microPill}</span>
                    </div>
                    <span className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider hidden sm:block">
                      Active
                    </span>
                  </div>

                  {/* Quick Feature Checklist */}
                  <ul className="space-y-1.5 mb-5 pt-3 border-t border-slate-100 text-xs text-slate-500">
                    {item.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Interactive Action Link */}
                  <a
                    href="https://app.patholab.cloud/register"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between pt-3 border-t border-slate-100 text-xs font-bold text-slate-700 group-hover:text-emerald-600 transition-colors cursor-pointer"
                  >
                    <span>Explore module</span>
                    <div className="w-7 h-7 rounded-full bg-slate-100 group-hover:bg-emerald-500 group-hover:text-white flex items-center justify-center transition-all duration-300">
                      <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </a>
                </div>

              </div>
            );
          })}
        </div>

        {/* Bottom Banner Note */}
        <div className="mt-14 text-center reveal">
          <p className="text-sm font-medium text-slate-500 flex items-center justify-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-500"></span>
            All 8 engines are fully integrated with real-time zero-lag cloud sync across all your branches.
          </p>
        </div>

      </div>
    </section>
  );
}
