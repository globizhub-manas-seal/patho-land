'use client';

import React, { useState } from 'react';
import { 
  FileText, QrCode, CheckCircle2, AlertTriangle, 
  ShieldCheck, Download, Share2, Sparkles, 
  SlidersHorizontal, RefreshCw, Smartphone, Award, ArrowRight
} from 'lucide-react';
import { reportsData, defaultLabInfo } from '../data/reports';

export default function ReportViewer() {
  const [activeTest, setActiveTest] = useState('cbc');
  const [showAbnormal, setShowAbnormal] = useState(true);

  const currentReport = reportsData[activeTest] || reportsData.cbc;

  return (
    <section id="reports" className="py-24 bg-gradient-to-b from-slate-50 via-slate-100/60 to-slate-50 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/4 right-1/4 w-[800px] h-[400px] bg-blue-100/40 blur-[140px] rounded-full pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 reveal">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100/80 text-blue-800 text-xs sm:text-sm font-semibold mb-4 border border-blue-200">
            <Sparkles className="w-4 h-4 text-blue-600" />
            <span>Interactive NABL Sample Report Viewer</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B1120] tracking-tight leading-tight mb-4">
            Reports That Doctors Respect & Patients Trust.
          </h2>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Every report is generated directly from your machine results. Crisp typography, dynamic QR verification, automatic abnormal flags, and verified digital signatures.
          </p>
        </div>

        {/* Interactive Controls Bar */}
        <div className="bg-white rounded-3xl p-4 sm:p-5 border border-slate-200/90 shadow-lg shadow-slate-200/50 mb-8 max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 reveal">
          
          {/* Department / Test Tabs */}
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
            <button
              onClick={() => setActiveTest('cbc')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeTest === 'cbc'
                  ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/20'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              Hematology (CBC)
            </button>
            <button
              onClick={() => setActiveTest('lipid')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeTest === 'lipid'
                  ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/20'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              Biochemistry (Lipid)
            </button>
            <button
              onClick={() => setActiveTest('thyroid')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeTest === 'thyroid'
                  ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/20'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              Immunoassay (Thyroid)
            </button>
          </div>

          {/* Abnormal Flags Toggle */}
          <div className="flex items-center gap-3 w-full md:w-auto justify-end border-t md:border-t-0 pt-3 md:pt-0">
            <span className="text-xs font-semibold text-slate-600 flex items-center gap-1.5">
              <AlertTriangle className={`w-3.5 h-3.5 ${showAbnormal ? 'text-rose-500' : 'text-slate-400'}`} />
              <span>Simulate Abnormal Flags</span>
            </span>
            <button
              onClick={() => setShowAbnormal(!showAbnormal)}
              role="switch"
              aria-checked={showAbnormal}
              aria-label="Simulate abnormal clinical flags"
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 ${
                showAbnormal ? 'bg-rose-500' : 'bg-slate-300'
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  showAbnormal ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
          </div>

        </div>

        {/* The Medical Report Sheet (Authentic A4 / Letter Styled Preview) */}
        <div className="max-w-4xl mx-auto bg-white rounded-[2rem] shadow-2xl border border-slate-200/90 overflow-hidden reveal-scale">
          
          {/* Top Banner Ribbon */}
          <div className="bg-slate-900 text-slate-300 px-6 sm:px-8 py-2.5 text-xs flex justify-between items-center border-b border-slate-800">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="font-semibold text-white">Live Cloud Verified Report</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-emerald-400 font-semibold flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" /> NABL & ISO 15189 Ready
              </span>
            </div>
          </div>

          <div className="p-6 sm:p-10 lg:p-12 space-y-8">
            
            {/* Report Header: Lab Name & Verification QR */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 border-b-2 border-slate-900/90 pb-6">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <Award className="w-5 h-5 text-emerald-600" />
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                    NABL Accredited Diagnostic Center
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-black text-[#0B1120] tracking-tight">
                  {defaultLabInfo.name}
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  {defaultLabInfo.address} • Reg No: {defaultLabInfo.regNo}
                </p>
                <p className="text-xs text-slate-500">
                  {defaultLabInfo.contact}
                </p>
              </div>

              {/* Scannable Dynamic QR Code */}
              <div className="flex items-center gap-3 bg-slate-50 p-3 rounded-2xl border border-slate-200 shadow-sm flex-shrink-0">
                <div className="w-16 h-16 bg-white p-1 rounded-xl border border-slate-200 flex items-center justify-center">
                  {/* Dynamic simulated high-density QR */}
                  <QrCode className="w-full h-full text-slate-900" />
                </div>
                <div className="text-left">
                  <span className="block text-[11px] font-bold text-slate-800 leading-tight">
                    Dynamic QR
                  </span>
                  <span className="block text-[10px] text-emerald-600 font-semibold">
                    Instant Web Verify
                  </span>
                  <span className="block text-[9px] text-slate-400 mt-0.5">
                    Scan with phone
                  </span>
                </div>
              </div>
            </div>

            {/* Patient Demographics Card */}
            <div className="bg-slate-50 rounded-2xl p-4 sm:p-5 border border-slate-200/80 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
              <div>
                <span className="text-slate-400 block font-medium">Patient Name</span>
                <span className="font-bold text-slate-900 text-sm">Mr. Rahul Verma</span>
                <span className="text-slate-500 block mt-0.5">38 Yrs / Male</span>
              </div>
              <div>
                <span className="text-slate-400 block font-medium">Sample ID / Barcode</span>
                <span className="font-bold text-slate-900 font-mono text-sm">#LAB-99248</span>
                <span className="text-emerald-600 font-semibold block mt-0.5">IoT Ingested ✅</span>
              </div>
              <div>
                <span className="text-slate-400 block font-medium">Referred By</span>
                <span className="font-bold text-slate-900 text-sm">Dr. A. K. Sharma</span>
                <span className="text-slate-500 block mt-0.5">MD (General Medicine)</span>
              </div>
              <div>
                <span className="text-slate-400 block font-medium">Collected / Reported</span>
                <span className="font-semibold text-slate-800 block">Today, 08:30 AM</span>
                <span className="text-slate-500 block">Today, 09:14 AM (TAT: 44m)</span>
              </div>
            </div>

            {/* Test Department Headline */}
            <div className="pt-2">
              <div className="flex items-center justify-between border-b border-slate-200 pb-2 mb-4">
                <div>
                  <h4 className="text-lg font-bold text-[#0B1120]">
                    {currentReport.name}
                  </h4>
                  <span className="text-xs text-slate-500">
                    {currentReport.department} • Method: {currentReport.method}
                  </span>
                </div>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-100 text-slate-600">
                  Primary Specimen: Whole Blood EDTA
                </span>
              </div>

              {/* Parameter Table */}
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs sm:text-sm">
                  <thead>
                    <tr className="bg-slate-100/80 text-slate-700 uppercase tracking-wider text-[11px] font-bold border-y border-slate-200">
                      <th className="py-2.5 px-3">Test Investigation</th>
                      <th className="py-2.5 px-3">Observed Value</th>
                      <th className="py-2.5 px-3">Reference Range</th>
                      <th className="py-2.5 px-3">Unit</th>
                      <th className="py-2.5 px-3 text-center">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {currentReport.parameters.map((param, idx) => {
                      const isTriggered = showAbnormal && param.isAbnormal;
                      const value = isTriggered ? param.valueAbnormal : param.valueNormal;
                      const flag = isTriggered ? param.flag : 'NORMAL';

                      return (
                        <tr 
                          key={idx}
                          className={`transition-colors ${
                            isTriggered ? 'bg-rose-50/50 hover:bg-rose-50' : 'hover:bg-slate-50/60'
                          }`}
                        >
                          <td className="py-3 px-3 font-medium text-slate-800">
                            {param.name}
                          </td>
                          <td className={`py-3 px-3 font-bold text-sm ${
                            isTriggered ? 'text-rose-600' : 'text-slate-900'
                          }`}>
                            {value}
                          </td>
                          <td className="py-3 px-3 text-slate-500">
                            {param.range}
                          </td>
                          <td className="py-3 px-3 text-slate-400 font-mono text-xs">
                            {param.unit}
                          </td>
                          <td className="py-3 px-3 text-center">
                            {isTriggered ? (
                              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-rose-100 text-rose-700 border border-rose-200">
                                <span>{flag === 'HIGH' ? '▲' : '▼'}</span>
                                <span>{flag}</span>
                              </span>
                            ) : (
                              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                                <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                                <span>NORMAL</span>
                              </span>
                            )}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>

              {/* Automated Delta Check Note */}
              <div className="mt-4 p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span>
                  <strong>Automated Quality Control:</strong> {currentReport.deltaNote}
                </span>
              </div>
            </div>

            {/* Digital Doctor Signatures */}
            <div className="pt-6 border-t-2 border-slate-200/80 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6 text-xs">
              <div className="space-y-1">
                <span className="text-[10px] text-slate-400 uppercase tracking-wider block font-semibold">
                  Sample Processed By
                </span>
                <span className="font-bold text-slate-800 block text-sm">
                  Pooja Verma, DMLT
                </span>
                <span className="text-slate-500 block">
                  Senior Medical Lab Technologist
                </span>
                <span className="text-[10px] text-emerald-600 font-mono block">
                  Digital Verification ID: #MLT-2026-489
                </span>
              </div>

              <div className="space-y-1 text-left sm:text-right border-t sm:border-t-0 pt-3 sm:pt-0 w-full sm:w-auto">
                <div className="inline-flex items-center gap-1 text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 text-[10px] font-bold mb-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Cryptographically Signed</span>
                </div>
                <span className="font-bold text-slate-900 block text-sm">
                  Dr. Neha Sen, MBBS, MD
                </span>
                <span className="text-slate-500 block">
                  Chief Consultant Pathologist • Reg: KMC/68412
                </span>
                <span className="text-[10px] text-slate-400 font-mono block">
                  Hash: 7f8b9a2c...e14d (Verified at 09:14:22 AM)
                </span>
              </div>
            </div>

          </div>

          {/* Bottom Action Footer */}
          <div className="bg-slate-50 border-t border-slate-200 p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs text-slate-600">
              <Smartphone className="w-4 h-4 text-emerald-600" />
              <span>This exact PDF format auto-sends directly to patient & doctor WhatsApp.</span>
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <a
                href="https://app.patholab.cloud/register"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-[#0B1120] hover:bg-slate-800 text-white px-5 py-2.5 rounded-full text-xs font-bold transition-all flex items-center justify-center gap-2 shadow-sm"
              >
                <span>Get Your Custom Lab Header</span>
                <ArrowRight className="w-3.5 h-3.5 text-emerald-400" />
              </a>
              <a
                href="#pricing"
                className="w-full sm:w-auto bg-emerald-500 hover:bg-emerald-600 text-white px-5 py-2.5 rounded-full text-xs font-bold transition-all shadow-md shadow-emerald-500/20 flex items-center justify-center gap-2"
              >
                <span>Only ₹2.5 / Report</span>
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
