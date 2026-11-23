import React from 'react';
import { Microscope, MapPin } from 'lucide-react';
import { clientLabs } from '../data/clients';

export default function ClientMarquee() {
  // Row 1 list (duplicated for infinite loop)
  const row1List = [...clientLabs, ...clientLabs];

  // Row 2 list (offset by 3 items and duplicated so both rows show distinct labs side-by-side)
  const offsetLabs = [...clientLabs.slice(3), ...clientLabs.slice(0, 3)];
  const row2List = [...offsetLabs, ...offsetLabs];

  return (
    <section className="py-12 bg-paper border-b border-borderSubtle overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 text-center">
        <p className="text-xs uppercase tracking-widest font-semibold text-mutedText">
          Trusted by <strong className="text-ink font-bold">100+ Leading Diagnostic Centers</strong> across 18+ Indian States
        </p>
      </div>

      {/* Marquee Wrapper with Paper Edge Gradient Fade Masks */}
      <div className="relative w-full overflow-hidden space-y-3.5">
        {/* Left Paper Mask */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-paper via-paper/90 to-transparent z-10 pointer-events-none" />
        
        {/* Right Paper Mask */}
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-paper via-paper/90 to-transparent z-10 pointer-events-none" />

        {/* Row 1: Right to Left (translateX 0 -> -50%) */}
        <div className="flex w-max gap-4 animate-marquee hover:[animation-play-state:paused] py-1">
          {row1List.map((lab, index) => (
            <div
              key={`row1-${lab.name}-${index}`}
              className="flex items-center gap-3 bg-white border border-borderSubtle rounded-card px-4 py-3 shadow-subtle hover:border-accent/50 hover:shadow-lift transition-all duration-200 min-w-[260px] sm:min-w-[290px] grayscale hover:grayscale-0 cursor-pointer"
            >
              <div className="w-9 h-9 rounded-lg bg-paper-alt flex items-center justify-center flex-shrink-0 text-accent">
                <Microscope className="w-4 h-4" />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="font-semibold text-sm text-ink truncate">
                  {lab.name}
                </h4>
                <div className="flex items-center gap-1.5 text-xs text-mutedText">
                  <MapPin className="w-3 h-3 text-mutedText flex-shrink-0" />
                  <span className="truncate">{lab.city}</span>
                  {lab.centers && (
                    <>
                      <span>•</span>
                      <span className="truncate">{lab.centers}</span>
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Row 2: Left to Right (translateX -50% -> 0) */}
        <div className="flex w-max gap-4 animate-marquee-reverse hover:[animation-play-state:paused] py-1">
          {row2List.map((lab, index) => (
            <div
              key={`row2-${lab.name}-${index}`}
              className="flex items-center gap-3 bg-white border border-borderSubtle rounded-card px-4 py-3 shadow-subtle hover:border-accent/50 hover:shadow-lift transition-all duration-200 min-w-[260px] sm:min-w-[290px] grayscale hover:grayscale-0 cursor-pointer"
            >
              <div className="w-9 h-9 rounded-lg bg-paper-alt flex items-center justify-center flex-shrink-0 text-accent">
                <Microscope className="w-4 h-4" />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="font-semibold text-sm text-ink truncate">
                  {lab.name}
                </h4>
                <div className="flex items-center gap-1.5 text-xs text-mutedText">
                  <MapPin className="w-3 h-3 text-mutedText flex-shrink-0" />
                  <span className="truncate">{lab.city}</span>
                  {lab.centers && (
                    <>
                      <span>•</span>
                      <span className="truncate">{lab.centers}</span>
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
