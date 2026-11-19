'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { faqs } from '../data/faqs';

export default function Faq() {
  const [activeFaq, setActiveFaq] = useState(0);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 reveal">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-emerald-50 text-emerald-700 text-xs font-semibold mb-3">
            Got Questions?
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0B1120] mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-600">
            Everything you need to know about migrating and scaling with Patholab Cloud.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => {
            const isOpen = activeFaq === i;
            return (
              <div
                key={i}
                className={`border border-slate-200 rounded-2xl overflow-hidden transition-all duration-300 hover:border-slate-300 shadow-sm reveal ${
                  i === 0 ? 'delay-100' : i === 1 ? 'delay-150' : i === 2 ? 'delay-200' : 'delay-250'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(i)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between bg-slate-50/50 hover:bg-slate-50 transition-colors focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-semibold text-slate-800 pr-4 text-base md:text-lg">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 transition-transform duration-300 flex-shrink-0 ${
                      isOpen ? 'rotate-180 text-emerald-600' : ''
                    }`}
                  />
                </button>
                <div
                  className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? 'max-h-60 py-5 bg-white border-t border-slate-100' : 'max-h-0'
                  }`}
                >
                  <p className="text-slate-600 leading-relaxed text-sm md:text-base">
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
