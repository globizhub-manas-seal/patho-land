import React from 'react';
import { ArrowRight, Play } from 'lucide-react';

export default function FooterCta() {
  return (
    <section id="pricing" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-[#0B1120] to-slate-900 rounded-[3rem] p-8 sm:p-14 lg:p-16 text-center border border-slate-800 shadow-2xl relative overflow-hidden reveal-scale">
          {/* Subtle Background Pattern */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxjaXJjbGUgY3g9IjMiIGN5PSIzIiByPSIzIiBmaWxsPSIjMWYyOTM3IiBmaWxsLW9wYWNpdHk9IjAuNCIvPjwvZz48L3N2Zz4=')]"></div>

          <div className="relative z-10 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 text-emerald-400 font-medium text-xs sm:text-sm mb-6 border border-emerald-500/20">
              No Risk • No Long-term Locks • Fast Onboarding
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Ready to Upgrade and Scale Your Lab?
            </h2>

            <p className="text-slate-300 text-base md:text-lg mb-10 leading-relaxed">
              Join thousands of diagnostic centers across India moving to the modern cloud. Start your 14-day free trial today. No setup fees, no credit card required.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="https://app.patholab.cloud/register"
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 hover:-translate-y-0.5 flex items-center justify-center gap-2 group"
              >
                <span>Start Free Trial Now</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href={`https://wa.me/918402010207?text=${encodeURIComponent('Hi, I want to book a live demo of Patholab Cloud for my lab.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-white/20 text-white border border-slate-700 px-8 py-4 rounded-full font-bold text-lg transition-all backdrop-blur-sm flex items-center justify-center gap-2"
              >
                <Play className="w-5 h-5 fill-white" />
                <span>Book a Live Demo</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
