'use client';

import React, { useState } from 'react';
import { 
  FileText, QrCode, CheckCircle2, AlertTriangle, 
  ShieldCheck, Download, Share2, Award, ArrowRight
} from 'lucide-react';
import { reportsData, defaultLabInfo, samplePatient } from '../data/reports';
import Eyebrow from './ui/Eyebrow';

export default function ReportViewer() {
  const [activeTest, setActiveTest] = useState<'cbc' | 'lipid' | 'thyroid'>('cbc');
  const [showAbnormal, setShowAbnormal] = useState(true);

  const currentReport = reportsData[activeTest] || reportsData.cbc;

  return (
    <section id="reports" className="py-20 lg:py-28 bg-paper border-b border-borderSubtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <Eyebrow variant="sage" icon={FileText} className="mb-4">
            Interactive NABL Sample Report Viewer
          </Eyebrow>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-ink tracking-tight mb-4">
            Reports That Doctors Respect & Patients Trust.
          </h2>

          <p className="text-bodyText text-base sm:text-lg leading-relaxed">
            Every report is generated directly from your machine results. Crisp typography, dynamic QR verification, automatic abnormal flags, and verified digital signatures.
          </p>
        </div>

        {/* Controls Toolbar */}
        <div className="bg-white rounded-card p-4 border border-borderSubtle shadow-subtle mb-8 max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Department Tabs */}
          <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">
            <button
              onClick={() => setActiveTest('cbc')}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                activeTest === 'cbc'
                  ? 'bg-ink text-paper shadow-sm'
                  : 'bg-paper text-bodyText hover:bg-paper-alt'
              }`}
            >
              Hematology (CBC)
            </button>
            <button
              onClick={() => setActiveTest('lipid')}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                activeTest === 'lipid'
                  ? 'bg-ink text-paper shadow-sm'
                  : 'bg-paper text-bodyText hover:bg-paper-alt'
              }`}
            >
              Biochemistry (Lipid)
            </button>
            <button
              onClick={() => setActiveTest('thyroid')}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                activeTest === 'thyroid'
                  ? 'bg-ink text-paper shadow-sm'
                  : 'bg-paper text-bodyText hover:bg-paper-alt'
              }`}
            >
              Immunoassay (Thyroid)
            </button>
          </div>

          {/* Simulate Abnormal Toggle */}
          <div className="flex items-center gap-2.5 text-xs text-bodyText">
            <span className="font-medium">Simulate Abnormal Flags:</span>
            <button
              onClick={() => setShowAbnormal(!showAbnormal)}
              role="switch"
              aria-checked={showAbnormal}
              className={`relative inline-flex h-5 w-10 items-center rounded-full transition-colors ${
                showAbnormal ? 'bg-brick' : 'bg-borderSubtle'
              }`}
            >
              <span
                className={`inline-block h-3.5 w-3.5 transform rounded-full bg-white transition-transform ${
                  showAbnormal ? 'translate-x-5' : 'translate-x-1'
                }`}
              />
            </button>
          </div>
        </div>

        {/* Clinical Editorial Report Sheet */}
        <div className="max-w-4xl mx-auto bg-white rounded-card-lg border border-borderSubtle shadow-lift p-6 sm:p-10 font-sans">
          {/* Report Header: Lab Info */}
          <div className="border-b-2 border-ink pb-6 mb-6">
            <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
              <div>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-ink">
                  {defaultLabInfo.name}
                </h3>
                <p className="text-xs text-mutedText">{defaultLabInfo.accreditation}</p>
                <p className="text-xs text-bodyText mt-1">{defaultLabInfo.address}</p>
              </div>
              <div className="sm:text-right">
                <span className="inline-block bg-sage/60 border border-borderSubtle px-2.5 py-1 rounded text-[11px] font-semibold text-ink">
                  {defaultLabInfo.regNo}
                </span>
                <p className="text-xs text-mutedText mt-1">{defaultLabInfo.contact}</p>
              </div>
            </div>
          </div>

          {/* Patient Details Table */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-3.5 rounded-lg bg-paper-alt/50 border border-borderSubtle text-xs mb-6">
            <div>
              <span className="text-mutedText block">Patient Name:</span>
              <strong className="text-ink">{samplePatient.name}</strong>
            </div>
            <div>
              <span className="text-mutedText block">Age / Gender:</span>
              <strong className="text-ink">{samplePatient.ageSex}</strong>
            </div>
            <div>
              <span className="text-mutedText block">Referred By:</span>
              <strong className="text-ink">{samplePatient.referredBy}</strong>
            </div>
            <div>
              <span className="text-mutedText block">Sample ID / Barcode:</span>
              <strong className="text-ink font-mono">{samplePatient.barcode}</strong>
            </div>
          </div>

          {/* Test Department Banner */}
          <div className="bg-sage/40 border-l-4 border-accent px-4 py-2 mb-4 flex items-center justify-between text-xs font-semibold text-ink">
            <span>{currentReport.department}</span>
            <span className="text-mutedText font-normal">Method: {currentReport.method}</span>
          </div>

          {/* Results Table */}
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-xs sm:text-sm text-left">
              <thead>
                <tr className="border-b border-borderSubtle text-mutedText text-[11px] uppercase tracking-wider">
                  <th className="py-2.5 font-semibold">Test Parameter</th>
                  <th className="py-2.5 font-semibold">Result</th>
                  <th className="py-2.5 font-semibold">Biological Ref Range</th>
                  <th className="py-2.5 font-semibold">Unit</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-borderSubtle/60">
                {currentReport.parameters.map((param, i) => {
                  const isAbnormalParam = showAbnormal && param.isAbnormal;
                  const displayValue = isAbnormalParam ? param.valueAbnormal : param.valueNormal;

                  return (
                    <tr
                      key={i}
                      className={isAbnormalParam ? 'bg-brick/10 font-semibold' : ''}
                    >
                      <td className="py-2.5 text-ink font-medium">{param.name}</td>
                      <td className="py-2.5">
                        <span className={isAbnormalParam ? 'text-brick font-bold' : 'text-ink'}>
                          {displayValue}
                        </span>
                        {isAbnormalParam && (
                          <span className="ml-2 text-[10px] text-brick font-bold uppercase tracking-wider bg-brick/15 px-1.5 py-0.5 rounded">
                            {param.flag}
                          </span>
                        )}
                      </td>
                      <td className="py-2.5 text-mutedText">{param.range}</td>
                      <td className="py-2.5 text-mutedText">{param.unit}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* Report Footer: Signatures & QR Verification */}
          <div className="pt-6 border-t border-borderSubtle flex flex-col sm:flex-row justify-between items-center gap-4 text-xs">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 border border-borderSubtle rounded flex items-center justify-center bg-paper">
                <QrCode className="w-8 h-8 text-ink" />
              </div>
              <div className="text-[11px] text-mutedText">
                <p className="font-semibold text-ink">Scan to verify digital authenticity</p>
                <p>NABL & ISO 15189 Verified Report Hash</p>
              </div>
            </div>

            <div className="text-right">
              <p className="font-serif font-bold text-ink text-sm">{defaultLabInfo.pathologist.name}</p>
              <p className="text-[11px] text-mutedText">{defaultLabInfo.pathologist.title}</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
