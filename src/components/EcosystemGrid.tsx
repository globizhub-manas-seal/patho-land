'use client';

import React, { useState } from 'react';
import { platformFeatures } from '../data/features';
import { CheckCircle2, ChevronRight, Layers } from 'lucide-react';
import Eyebrow from './ui/Eyebrow';

export default function EcosystemGrid() {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Diagnostics', 'Operations', 'Financials'];

  const filteredFeatures =
    activeCategory === 'All'
      ? platformFeatures
      : platformFeatures.filter((item) => item.category === activeCategory);

  return (
    <section id="features" className="py-20 lg:py-28 bg-paper-alt border-b border-borderSubtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <Eyebrow variant="sage" icon={Layers} className="mb-4">
            Unified Cloud Ecosystem
          </Eyebrow>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-ink tracking-tight mb-5 leading-[1.35] sm:leading-[1.4]">
            Everything Your Lab Needs. <br className="hidden sm:inline" />
            <span className="inline-block bg-sage/60 border border-borderSubtle px-3.5 py-1 rounded-xl text-ink font-bold shadow-sm my-1.5 sm:my-2">
              Built for Modern Speed.
            </span>
          </h2>

          <p className="text-bodyText text-base sm:text-lg leading-relaxed">
            Replace disconnected legacy desktop software with a single clinical cloud suite tailored for fast-paced Indian pathology and diagnostic workflows.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-ink text-paper shadow-sm'
                  : 'bg-white text-bodyText border border-borderSubtle hover:bg-paper hover:text-ink'
              }`}
            >
              {cat === 'All' ? 'All 8 Engines' : cat}
            </button>
          ))}
        </div>

        {/* Bento Grid with varied card sizes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredFeatures.map((item, index) => {
            const Icon = item.icon;
            // First two items in 'All' view can span 2 columns on lg screens for bento texture
            const isFeatured = activeCategory === 'All' && (index === 0 || index === 3);

            return (
              <div
                key={item.id}
                className={`bg-white border border-borderSubtle rounded-card p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-lift hover:border-accent/60 ${
                  isFeatured ? 'md:col-span-2 lg:col-span-2 bg-gradient-to-br from-white via-white to-sage/20' : ''
                }`}
              >
                <div>
                  {/* Top Bar: Icon + Category Badge */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-11 h-11 rounded-xl bg-sage/60 border border-borderSubtle flex items-center justify-center text-accent">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-semibold text-ink bg-paper-alt px-2.5 py-0.5 rounded-full border border-borderSubtle">
                      {item.category}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="font-serif text-xl sm:text-2xl font-semibold text-ink mb-2">
                    {item.title}
                  </h3>

                  <p className="text-bodyText text-sm leading-relaxed mb-5">
                    {item.desc}
                  </p>
                </div>

                <div>
                  {/* Micro Pill */}
                  <div className="bg-paper border border-borderSubtle rounded-lg px-3 py-2 mb-4 flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2 text-ink font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                      <span>{item.microPill}</span>
                    </div>
                    <span className="text-[10px] text-mutedText font-mono uppercase">
                      Included
                    </span>
                  </div>

                  {/* Highlights checklist */}
                  <ul className="space-y-1.5 mb-5 pt-3 border-t border-borderSubtle/60 text-xs text-bodyText">
                    {item.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-accent flex-shrink-0" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Bottom link */}
                  <a
                    href="https://app.patholab.cloud/register"
                    className="flex items-center justify-between pt-3 border-t border-borderSubtle/60 text-xs font-semibold text-ink hover:text-accent transition-colors"
                  >
                    <span>Explore module specifications</span>
                    <ChevronRight className="w-4 h-4 text-accent" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
