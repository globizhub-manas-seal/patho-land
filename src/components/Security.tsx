import React from 'react';
import { Lock, Shield, CheckCircle2 } from 'lucide-react';
import Eyebrow from './ui/Eyebrow';

export default function Security() {
  const securityItems = [
    '256-bit AES encryption for all diagnostic patient data at rest and in transit',
    'Full HIPAA & NABL digital compliance guidelines pre-configured',
    'Granular role-based access control (RBAC), OTP-based staff sign-ins, and tamper-proof audit trails',
    'Automated triple-redundant daily cloud backups across Indian data centers',
  ];

  return (
    <section id="security" className="py-20 lg:py-24 bg-paper-alt border-b border-borderSubtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-card-lg border border-borderSubtle p-8 sm:p-12 lg:p-16 shadow-subtle">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            {/* Left Col: Security Architecture */}
            <div className="lg:col-span-7">
              <Eyebrow variant="sage" icon={Lock} className="mb-4">
                Bank-Grade Clinical Security
              </Eyebrow>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-ink tracking-tight mb-4">
                Enterprise Data Protection for Sensitive Patient Health Records.
              </h2>

              <p className="text-bodyText text-base sm:text-lg mb-8 leading-relaxed">
                Your patients&apos; health data and diagnostic records are sacred. We protect them with the exact encryption standards and disaster recovery pipelines used by leading financial and defense institutions.
              </p>

              <ul className="space-y-3.5">
                {securityItems.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm sm:text-base text-bodyText">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Col: ISO & Compliance Trust Card */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-sm rounded-card bg-paper border border-borderSubtle p-8 text-center shadow-sm">
                <div className="w-16 h-16 mx-auto bg-sage/60 rounded-2xl flex items-center justify-center mb-5 text-accent">
                  <Shield className="w-9 h-9" />
                </div>

                <h3 className="font-serif text-xl font-semibold text-ink mb-2">
                  ISO 27001 Certified
                </h3>
                <p className="text-xs text-mutedText mb-6">
                  Information Security Management Systems audited & validated.
                </p>

                <div className="space-y-2 text-xs font-semibold text-ink">
                  <div className="p-2.5 rounded-lg bg-white border border-borderSubtle flex items-center justify-between">
                    <span>Data Sovereignty:</span>
                    <span className="text-accent">100% In India</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-white border border-borderSubtle flex items-center justify-between">
                    <span>Uptime SLA:</span>
                    <span className="text-accent">99.98% Cloud SLA</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-white border border-borderSubtle flex items-center justify-between">
                    <span>Backup Frequency:</span>
                    <span className="text-accent">Every 6 Hours</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
