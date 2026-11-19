import React from 'react';
import { Star } from 'lucide-react';
import { testimonials } from '../data/testimonials';

export default function Testimonials() {
  return (
    <section id="reviews" className="py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 reveal">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-slate-200/60 text-slate-700 text-xs font-semibold mb-3">
            Real Lab Experiences
          </div>
          <h2 className="text-3xl font-bold text-[#0B1120] mb-4">
            Trusted by 100+ Labs Across India
          </h2>
          <p className="text-slate-600 max-w-xl mx-auto">
            From single collection centers to multi-chain hospital diagnostics.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((test, i) => (
            <div
              key={i}
              className={`bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-slate-200/80 flex flex-col justify-between reveal ${
                i === 0 ? 'delay-100' : i === 1 ? 'delay-200' : 'delay-300'
              }`}
            >
              <div>
                <div className="flex items-center gap-1 mb-4 text-amber-400">
                  {[...Array(test.rating)].map((_, idx) => (
                    <Star key={idx} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <p className="text-slate-700 mb-6 font-medium leading-relaxed italic">
                  "{test.q}"
                </p>
              </div>

              <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center font-bold text-slate-700 shadow-inner">
                  {test.n.charAt(0)}
                </div>
                <div>
                  <p className="font-bold text-sm text-[#0B1120]">{test.n}</p>
                  <p className="text-xs text-slate-500">{test.l}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
