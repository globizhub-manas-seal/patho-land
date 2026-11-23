'use client';

import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { faqs } from '../data/faqs';
import Eyebrow from './ui/Eyebrow';

export default function Faq() {
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 lg:py-28 bg-paper border-b border-borderSubtle">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Eyebrow variant="sage" className="mb-3">
            Got Questions?
          </Eyebrow>
          <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-ink tracking-tight mb-3">
            Frequently Asked Questions
          </h2>
          <p className="text-bodyText text-base sm:text-lg">
            Everything you need to know about migrating and scaling with Patholab Cloud.
          </p>
        </div>

        <div className="space-y-3.5">
          {faqs.map((faq, i) => {
            const isOpen = activeFaq === i;
            return (
              <div
                key={i}
                className="border border-borderSubtle rounded-card bg-white overflow-hidden transition-all duration-200 hover:border-accent/40 shadow-subtle"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(i)}
                  className="w-full text-left px-6 py-4 sm:py-5 flex items-center justify-between bg-white hover:bg-paper-alt/30 transition-colors focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif font-semibold text-ink pr-4 text-base sm:text-lg">
                    {faq.q}
                  </span>
                  <div className="w-7 h-7 rounded-full bg-paper-alt flex items-center justify-center flex-shrink-0 text-ink">
                    {isOpen ? <Minus className="w-4 h-4 text-accent" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                <div
                  className={`px-6 overflow-hidden transition-all duration-300 ease-out ${
                    isOpen ? 'max-h-80 py-4 bg-paper/30 border-t border-borderSubtle/60' : 'max-h-0'
                  }`}
                >
                  <p className="text-bodyText leading-relaxed text-sm sm:text-base">
                    {faq.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
