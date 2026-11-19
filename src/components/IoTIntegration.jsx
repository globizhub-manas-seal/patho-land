import React from 'react';
import Image from 'next/image';
import { Microscope, CheckCircle2 } from 'lucide-react';

export default function IoTIntegration() {
  const highlights = [
    'Zero Manual Data Entry Errors',
    'Bidirectional & Unidirectional Interfacing',
    'Real-time Result Ingestion (Under 2 Seconds)',
    'Over 500+ Biochemistry, Hematology & Immunoassay Analyzers'
  ];

  return (
    <section id="integration" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#0B1120] rounded-[2.5rem] overflow-hidden flex flex-col lg:flex-row shadow-2xl relative border border-slate-800 reveal">
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/20 blur-[100px] rounded-full pointer-events-none"></div>

          {/* Left Column */}
          <div className="lg:w-1/2 p-8 sm:p-12 lg:p-16 relative z-10 flex flex-col justify-center reveal-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-900/50 text-emerald-400 font-medium text-sm mb-6 border border-emerald-800/50 w-fit">
              <Microscope className="w-4 h-4" /> Seamless Interfacing
            </div>

            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Automate Your Lab with <span className="text-emerald-400">IoT Machine Integration.</span>
            </h2>

            <p className="text-slate-300 text-base md:text-lg mb-8 leading-relaxed">
              Eliminate manual entry errors. Connect over 500+ analyzers directly to the cloud. Results flow straight from the machine to the validated patient report instantly.
            </p>

            <ul className="space-y-4 mb-10">
              {highlights.map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-200 font-medium">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div>
              <a
                href="/#demo"
                className="inline-flex items-center justify-center bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-3.5 rounded-full font-bold transition-all shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/40 hover:-translate-y-0.5 cursor-pointer"
              >
                View 500+ Supported Machines
              </a>
            </div>
          </div>

          {/* Right Column: Real Software Command Center Showcase */}
          <div className="lg:w-1/2 p-4 sm:p-6 lg:p-8 flex items-center justify-center relative reveal-scale delay-200">
            <div className="relative w-full rounded-2xl lg:rounded-3xl overflow-hidden shadow-2xl border border-slate-700/80 bg-slate-900 group hover:border-emerald-500/60 transition-all duration-500">
              <Image
                src="/images/iot-mockup-frame.png"
                alt="Patholab Cloud Machine Integration Command Center"
                width={1280}
                height={720}
                className="w-full h-auto object-cover group-hover:scale-[1.02] transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none"></div>
              
              {/* Live Status Overlay Bar */}
              <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 bg-slate-900/95 backdrop-blur-md px-4 py-2.5 rounded-xl border border-slate-700/80 text-xs text-slate-300 flex items-center justify-between shadow-lg">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span className="font-semibold text-white">Live Ingestion Active</span>
                </div>
                <span className="text-[11px] text-emerald-400 font-semibold bg-emerald-950/60 border border-emerald-800/60 px-2 py-0.5 rounded-full">
                  ASTM & HL7 Connected
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
