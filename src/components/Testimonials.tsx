import React from 'react';
import { Star } from 'lucide-react';
import { testimonials } from '../data/testimonials';
import Eyebrow from './ui/Eyebrow';

export default function Testimonials() {
  return (
    <section id="reviews" className="py-20 lg:py-28 bg-paper border-b border-borderSubtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <Eyebrow variant="sage" className="mb-3">
            Real Lab Experiences
          </Eyebrow>
          <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-ink tracking-tight mb-3">
            Trusted by 100+ Diagnostic Labs Across India
          </h2>
          <p className="text-bodyText text-base sm:text-lg">
            From single collection centers to multi-chain diagnostic hospitals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((test, i) => (
            <div
              key={i}
              className="bg-white p-7 sm:p-8 rounded-card border border-borderSubtle shadow-subtle hover:shadow-lift hover:border-accent/50 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-1 mb-4 text-saffron">
                  {[...Array(test.rating)].map((_, idx) => (
                    <Star key={idx} className="w-4 h-4 fill-saffron" />
                  ))}
                </div>
                <blockquote className="text-bodyText text-sm sm:text-base leading-relaxed mb-6 italic">
                  &ldquo;{test.q}&rdquo;
                </blockquote>
              </div>

              <div className="flex items-center gap-3 pt-4 border-t border-borderSubtle/60">
                <div className="w-10 h-10 bg-sage rounded-full flex items-center justify-center font-serif font-bold text-ink">
                  {test.n.charAt(0)}
                </div>
                <div>
                  <p className="font-serif font-semibold text-sm text-ink">{test.n}</p>
                  <p className="text-xs text-mutedText">{test.l}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
