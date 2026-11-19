import React from 'react';
import { Microscope, CheckCircle2, Building2, MapPin } from 'lucide-react';
import { clientLabs } from '../data/clients';

export default function ClientMarquee() {
  // Duplicate array to ensure a seamless infinite loop
  const marqueeList = [...clientLabs, ...clientLabs];

  return (
    <section className="py-12 bg-white/70 border-y border-slate-200/60 overflow-hidden relative reveal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 text-center">
        <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-slate-500">
          Trusted by <span className="text-emerald-600 font-bold">100+</span> Leading Pathology Labs & Diagnostic Centers across India
        </p>
      </div>

      {/* Marquee Wrapper with Edge Gradient Masks */}
      <div className="relative w-full overflow-hidden group">
        {/* Left Fade Mask */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none"></div>

        {/* Right Fade Mask */}
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none"></div>

        {/* Moving Track */}
        <div className="flex w-max gap-5 animate-marquee group-hover:[animation-play-state:paused] py-2">
          {marqueeList.map((lab, index) => (
            <div
              key={`${lab.name}-${index}`}
              className="flex items-center gap-3.5 bg-white border border-slate-200/80 rounded-2xl px-5 py-3.5 shadow-sm hover:shadow-md hover:border-emerald-500/50 hover:bg-emerald-50/20 transition-all duration-300 cursor-pointer min-w-[280px] sm:min-w-[310px]"
            >
              <div className="w-11 h-11 rounded-xl bg-slate-100 flex items-center justify-center flex-shrink-0 text-emerald-600 group-hover:bg-emerald-100 transition-colors">
                <Microscope className="w-5 h-5 text-emerald-600" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-1">
                  <h4 className="font-bold text-sm text-[#0B1120] truncate">{lab.name}</h4>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-500 mt-0.5">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-slate-400" />
                    {lab.city}
                  </span>
                  {lab.centers && (
                    <>
                      <span>•</span>
                      <span className="text-slate-600 font-medium">{lab.centers}</span>
                    </>
                  )}
                </div>
                {lab.type && (
                  <div className="mt-1.5 flex items-center gap-1 text-[11px] font-semibold text-emerald-700 bg-emerald-50/80 px-2 py-0.5 rounded-full w-fit border border-emerald-100">
                    <CheckCircle2 className="w-3 h-3 text-emerald-600 flex-shrink-0" />
                    <span>{lab.type}</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
