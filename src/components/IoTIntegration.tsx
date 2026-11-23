'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Microscope, CheckCircle2, Cloud, FileText, ArrowRight, Activity, Cpu } from 'lucide-react';
import Eyebrow from './ui/Eyebrow';
import CountUp from './ui/CountUp';

export default function IoTIntegration() {
  const highlights = [
    'Zero manual data entry errors from human transcription',
    'Bidirectional & unidirectional RS232 / TCP-IP interfacing',
    'Real-time automated result ingestion in under 2 seconds',
    'Pre-configured drivers for 500+ biochemistry & hematology analyzers',
  ];

  return (
    <section id="integration" className="py-20 lg:py-28 bg-ink text-paper relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Header */}
        <div className="max-w-3xl mb-14 text-left">
          <Eyebrow variant="dark" icon={Microscope} className="mb-4">
            Machine Interfacing Engine
          </Eyebrow>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-paper leading-[1.3] sm:leading-[1.35] tracking-tight mb-5">
            Automate Your Lab with Direct{' '}
            <span className="text-saffron font-extrabold inline-block">
              IoT Machine Interfacing
            </span>
          </h2>

          <p className="text-sage text-base sm:text-lg leading-relaxed max-w-2xl">
            Eliminate manual entry errors. Connect over{' '}
            <strong className="text-paper font-semibold">
              <CountUp value={500} suffix="+" /> analyzers
            </strong>{' '}
            directly to the cloud. Results flow straight from the machine sensor into the validated patient report instantly.
          </p>
        </div>

        {/* SVG Line Diagram: Analyzers -> Cloud -> Report */}
        <div className="bg-ink-soft/70 border border-accent/30 rounded-card-lg p-6 sm:p-10 mb-14 shadow-lift">
          <div className="text-xs uppercase tracking-widest font-semibold text-sage mb-6">
            Live Clinical Data Flow Architecture
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative items-center">
            {/* Step 1: Physical Analyzers */}
            <div className="bg-ink border border-accent/40 rounded-card p-5 text-center flex flex-col items-center">
              <div className="w-12 h-12 rounded-xl bg-sage/10 border border-accent/40 flex items-center justify-center mb-3">
                <Cpu className="w-6 h-6 text-saffron" />
              </div>
              <h3 className="font-serif text-lg font-semibold text-paper mb-1">
                1. Lab Analyzers
              </h3>
              <p className="text-xs text-sage leading-relaxed">
                Biochemistry, Hematology, Immunoassay, Electrolyte instruments.
              </p>
              <div className="mt-3 text-[11px] font-mono text-saffron bg-ink-soft px-2.5 py-1 rounded-full border border-saffron/20">
                ASTM / HL7 Protocol
              </div>
            </div>

            {/* Step 2: Patholab Cloud Engine */}
            <div className="bg-ink border border-saffron/40 rounded-card p-5 text-center flex flex-col items-center shadow-md relative">
              <div className="w-12 h-12 rounded-xl bg-saffron/15 border border-saffron/40 flex items-center justify-center mb-3">
                <Cloud className="w-6 h-6 text-saffron" />
              </div>
              <h3 className="font-serif text-lg font-semibold text-paper mb-1">
                2. Patholab Cloud
              </h3>
              <p className="text-xs text-sage leading-relaxed">
                Direct IoT bridge parses raw machine frames into structured test parameters.
              </p>
              <div className="mt-3 text-[11px] font-mono text-sage bg-ink-soft px-2.5 py-1 rounded-full border border-accent/30">
                &lt; 2 Sec Ingestion
              </div>
            </div>

            {/* Step 3: Verified NABL Report */}
            <div className="bg-ink border border-accent/40 rounded-card p-5 text-center flex flex-col items-center">
              <div className="w-12 h-12 rounded-xl bg-sage/10 border border-accent/40 flex items-center justify-center mb-3">
                <FileText className="w-6 h-6 text-saffron" />
              </div>
              <h3 className="font-serif text-lg font-semibold text-paper mb-1">
                3. Validated Report
              </h3>
              <p className="text-xs text-sage leading-relaxed">
                Abnormal values auto-flagged. Pathologist reviews and signs digitally.
              </p>
              <div className="mt-3 text-[11px] font-mono text-sage bg-ink-soft px-2.5 py-1 rounded-full border border-accent/30">
                Auto-Dispatched on WhatsApp
              </div>
            </div>
          </div>

          {/* SVG Animated Connector Line for Desktop */}
          <div className="hidden md:block mt-8">
            <svg className="w-full h-8" viewBox="0 0 800 24" fill="none">
              <line
                x1="130"
                y1="12"
                x2="670"
                y2="12"
                stroke="#1F7A6D"
                strokeWidth="2"
                strokeDasharray="6 6"
              />
              <circle cx="130" cy="12" r="4" fill="#F2A33A" />
              <circle cx="400" cy="12" r="5" fill="#F2A33A" />
              <circle cx="670" cy="12" r="4" fill="#F2A33A" />
            </svg>
          </div>
        </div>

        {/* 2-Column Split: Highlights + Machine Mockup */}
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 space-y-4">
            <ul className="space-y-3.5">
              {highlights.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm sm:text-base text-sage">
                  <CheckCircle2 className="w-5 h-5 text-saffron flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="pt-6">
              <a
                href="#demo"
                className="inline-flex items-center gap-2 bg-saffron hover:bg-saffron-hover text-ink font-bold px-7 py-3.5 rounded-full text-sm transition-all shadow-subtle active:scale-[0.98]"
              >
                <span>View 500+ Supported Analyzers</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Real Software Command Center Frame */}
          <div className="lg:col-span-6">
            <div className="rounded-card bg-ink-soft border border-accent/40 p-2 shadow-lift overflow-hidden">
              <div className="relative rounded-lg overflow-hidden border border-accent/30 bg-ink">
                <Image
                  src="/images/iot-mockup-frame.png"
                  alt="Patholab Cloud Machine Integration Command Center"
                  width={1280}
                  height={720}
                  className="w-full h-auto object-cover opacity-90 hover:opacity-100 transition-opacity"
                />
                
                {/* Live Status Overlay Bar */}
                <div className="absolute bottom-2 left-2 right-2 sm:bottom-3 sm:left-3 sm:right-3 bg-ink/95 border border-accent/50 px-3.5 py-2 rounded-lg text-xs text-paper flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-saffron animate-pulse" />
                    <span className="font-semibold text-paper">Live Ingestion Active</span>
                  </div>
                  <span className="text-[11px] text-sage font-mono bg-ink-soft px-2 py-0.5 rounded border border-accent/30">
                    ASTM & HL7 Connected
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
