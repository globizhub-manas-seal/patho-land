import React from 'react';
import { Lock, Shield, CheckCircle2 } from 'lucide-react';

export default function Security() {
  const securityItems = [
    "256-bit AES Encryption for Data at Rest & in Transit",
    "HIPAA & NABL Compliance Ready Guidelines",
    "Granular Role-based Access, OTP Verification & Audit Logs"
  ];

  return (
    <section id="security" className="py-24 bg-[#0B1120] relative overflow-hidden border-t border-slate-800">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-900/50 skew-x-12 transform origin-top-right pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="reveal-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/80 text-slate-300 font-medium text-sm mb-6 border border-slate-700 shadow-sm">
              <Lock className="w-4 h-4 text-emerald-400" /> ISO 27001 Certified Infrastructure
            </div>

            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Bank-Grade <span className="text-emerald-400">Cloud Security</span>
            </h2>

            <p className="text-slate-400 text-base md:text-lg mb-8 leading-relaxed">
              Your patients' health data and diagnostic records are highly sensitive. We protect it with the same encryption standards and disaster recovery pipelines used by global financial institutions.
            </p>

            <ul className="space-y-4">
              {securityItems.map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-200 text-sm md:text-base">
                  <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  </div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex justify-center lg:justify-end reveal-scale delay-200">
            <div className="w-64 h-64 md:w-80 md:h-80 bg-gradient-to-br from-slate-800 to-slate-900 rounded-full flex items-center justify-center border-4 border-slate-800 shadow-2xl relative">
              <div
                className="absolute inset-0 rounded-full border border-emerald-500/30 animate-ping pointer-events-none"
                style={{ animationDuration: '3s' }}
              ></div>
              <Shield className="w-32 h-32 text-emerald-500 drop-shadow-[0_0_20px_rgba(16,185,129,0.5)]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
