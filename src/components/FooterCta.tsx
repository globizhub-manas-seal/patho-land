import React from 'react';
import { ArrowRight, Play } from 'lucide-react';
import { brandConfig } from '../data/brand';
import Eyebrow from './ui/Eyebrow';

export default function FooterCta() {
  const whatsappUrl = `https://wa.me/${brandConfig.contact.whatsappNumber}?text=${encodeURIComponent(
    brandConfig.contact.whatsappMessage
  )}`;

  return (
    <section id="pricing" className="py-20 lg:py-24 bg-paper-alt border-b border-borderSubtle">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-card-lg p-8 sm:p-14 lg:p-16 text-center border border-borderSubtle shadow-lift relative overflow-hidden">
          <div className="relative z-10 max-w-2xl mx-auto">
            <Eyebrow variant="sage" className="mb-4">
              Zero Upfront Risk • No Long-Term Contracts
            </Eyebrow>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-ink tracking-tight mb-4">
              Ready to Upgrade and Scale Your Lab?
            </h2>

            <p className="text-bodyText text-base sm:text-lg mb-8 leading-relaxed">
              Join 100+ diagnostic centers across India moving to the modern cloud. Start your 14-day free trial today. No setup fees, no credit card required.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-3.5">
              <a
                href="https://app.patholab.cloud/register"
                className="bg-saffron hover:bg-saffron-hover text-ink px-8 py-4 rounded-full font-bold text-base whitespace-nowrap transition-all shadow-subtle hover:shadow flex items-center justify-center gap-2 group active:scale-[0.98]"
              >
                <span>Start Free Trial Now</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform flex-shrink-0" />
              </a>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-paper hover:bg-paper-warm text-ink border border-borderSubtle px-8 py-4 rounded-full font-semibold text-base whitespace-nowrap transition-all flex items-center justify-center gap-2 shadow-subtle active:scale-[0.98]"
              >
                <Play className="w-4 h-4 fill-ink flex-shrink-0" />
                <span>Book a Live Demo</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
