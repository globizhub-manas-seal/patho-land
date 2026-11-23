'use client';

import React, { useState } from 'react';
import { 
  FileText, QrCode, CheckCircle2, MapPin, Phone, 
  Mail, ShieldCheck, Download, Share2, Sparkles, Check
} from 'lucide-react';
import { 
  defaultLabInfo, samplePatient, reportsData, 
  widalMatrix, importantNotes 
} from '../data/reports';
import Eyebrow from './ui/Eyebrow';

export default function ReportViewer() {
  const [activeTab, setActiveTab] = useState<'all' | 'cbc' | 'widal' | 'biochem'>('all');
  const [showAbnormal, setShowAbnormal] = useState(true);

  return (
    <section id="reports" className="py-20 lg:py-28 bg-paper border-b border-borderSubtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <Eyebrow variant="sage" icon={FileText} className="mb-4">
            Interactive Clinical Sample Report
          </Eyebrow>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-ink tracking-tight mb-4 leading-[1.3] sm:leading-[1.38]">
            Authentic Clinical Reports That <br className="hidden sm:inline" />
            <span className="inline-block bg-sage/60 border border-borderSubtle px-3.5 py-1 rounded-xl text-ink font-bold shadow-sm my-1.5 sm:my-2">
              Doctors Respect & Patients Trust.
            </span>
          </h2>

          <p className="text-bodyText text-base sm:text-lg leading-relaxed">
            Direct output from connected laboratory analyzers into standardized clinical formats. Barcode-indexed, abnormal-flagged, complete with Widal dilution matrix tables and instant QR verification.
          </p>
        </div>

        {/* Controls Toolbar */}
        <div className="bg-white rounded-card p-4 border border-borderSubtle shadow-subtle mb-8 max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          
          {/* Department Tabs */}
          <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                activeTab === 'all'
                  ? 'bg-ink text-paper shadow-sm'
                  : 'bg-paper text-bodyText hover:bg-paper-alt'
              }`}
            >
              Complete Multi-Test Report
            </button>
            <button
              onClick={() => setActiveTab('cbc')}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                activeTab === 'cbc'
                  ? 'bg-ink text-paper shadow-sm'
                  : 'bg-paper text-bodyText hover:bg-paper-alt'
              }`}
            >
              Hematology (CBC)
            </button>
            <button
              onClick={() => setActiveTab('widal')}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                activeTab === 'widal'
                  ? 'bg-ink text-paper shadow-sm'
                  : 'bg-paper text-bodyText hover:bg-paper-alt'
              }`}
            >
              Widal & Serology
            </button>
            <button
              onClick={() => setActiveTab('biochem')}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                activeTab === 'biochem'
                  ? 'bg-ink text-paper shadow-sm'
                  : 'bg-paper text-bodyText hover:bg-paper-alt'
              }`}
            >
              Biochemistry & TSH
            </button>
          </div>

          {/* Simulate Abnormal Toggle */}
          <div className="flex items-center gap-2.5 text-xs text-bodyText">
            <span className="font-medium">Highlight Abnormal Flags:</span>
            <button
              onClick={() => setShowAbnormal(!showAbnormal)}
              role="switch"
              aria-checked={showAbnormal}
              className={`relative inline-flex h-5 w-10 items-center rounded-full transition-colors cursor-pointer ${
                showAbnormal ? 'bg-brick' : 'bg-borderSubtle'
              }`}
              title="Toggle abnormal flags"
            >
              <span
                className={`inline-block h-3.5 w-3.5 transform rounded-full bg-white transition-transform ${
                  showAbnormal ? 'translate-x-5' : 'translate-x-1'
                }`}
              />
            </button>
          </div>
        </div>

        {/* Clinical Sample Report Sheet (Modeled exactly after the Diagnostic Lab Report) */}
        <div className="max-w-4xl mx-auto bg-white rounded-card-lg border border-borderSubtle shadow-lift p-6 sm:p-10 font-sans relative overflow-hidden">
          
          {/* Top Decorative Green-Cyan Banner with Medical Cross */}
          <div className="absolute top-0 right-0 w-36 sm:w-44 h-24 sm:h-28 overflow-hidden pointer-events-none">
            <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-gradient-to-br from-[#01A9B4] to-[#2ecc71] opacity-90 flex items-end justify-start p-6">
              <div className="w-8 h-8 rounded-md border-2 border-white flex items-center justify-center font-bold text-white text-xl">
                +
              </div>
            </div>
          </div>

          {/* 1. Header: Lab Logo & Contact Information */}
          <div className="border-b-2 border-[#01A9B4] pb-5 mb-5 relative pr-16 sm:pr-24">
            <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
              
              {/* Lab Logo & Name */}
              <div className="flex items-center gap-3.5">
                {/* Stylized SK Diagnostic Logo Symbol */}
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#0052cc] to-[#01A9B4] flex items-center justify-center text-white font-black text-2xl shadow-sm tracking-tighter">
                  SK
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-black text-[#0B3B60] tracking-tight flex items-center gap-2">
                    <span>{defaultLabInfo.name}</span>
                  </h3>
                  <p className="font-serif italic text-sm text-[#01A9B4] font-semibold -mt-0.5">
                    {defaultLabInfo.tagline}
                  </p>
                  <p className="text-[11px] text-mutedText font-medium mt-0.5">
                    {defaultLabInfo.accreditation}
                  </p>
                </div>
              </div>

              {/* Lab Contact & Registration Info */}
              <div className="text-xs text-bodyText space-y-1 sm:text-right">
                <div className="flex items-center sm:justify-end gap-1.5 text-mutedText text-[11px]">
                  <MapPin className="w-3.5 h-3.5 text-[#01A9B4] flex-shrink-0" />
                  <span>{defaultLabInfo.address}</span>
                </div>
                <div className="flex items-center sm:justify-end gap-1.5 text-[11px]">
                  <Phone className="w-3.5 h-3.5 text-[#2ecc71] flex-shrink-0" />
                  <span className="font-semibold text-ink">{defaultLabInfo.phone}</span>
                </div>
                <div className="flex items-center sm:justify-end gap-1.5 text-[11px] text-mutedText">
                  <Mail className="w-3.5 h-3.5 text-[#01A9B4] flex-shrink-0" />
                  <span>{defaultLabInfo.email}</span>
                </div>
                <div className="pt-0.5">
                  <span className="inline-block bg-[#0B3B60] text-white text-[10px] font-bold px-2 py-0.5 rounded">
                    Registration No: {defaultLabInfo.regNo}
                  </span>
                </div>
              </div>

            </div>
          </div>

          {/* 2. Patient Demographics & Barcode Card */}
          <div className="border border-borderSubtle rounded-lg p-4 bg-paper/40 mb-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-xs">
            
            {/* Left Demographics */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 flex-1">
              <div>
                <span className="text-mutedText text-[11px]">Patient Name: </span>
                <strong className="text-ink font-bold text-sm tracking-wide">{samplePatient.name}</strong>
              </div>
              <div>
                <span className="text-mutedText text-[11px]">Age / Sex: </span>
                <strong className="text-ink font-semibold">{samplePatient.ageSex}</strong>
              </div>
              <div>
                <span className="text-mutedText text-[11px]">Patient ID/UHID: </span>
                <strong className="text-ink font-mono font-semibold">{samplePatient.uhid}</strong>
              </div>
              <div>
                <span className="text-mutedText text-[11px]">Sample Collected: </span>
                <span className="text-bodyText">{samplePatient.sampleCollected}</span>
              </div>
              <div>
                <span className="text-mutedText text-[11px]">Referred By: </span>
                <strong className="text-ink font-semibold">{samplePatient.referredBy}</strong>
              </div>
              <div>
                <span className="text-mutedText text-[11px]">Report Released: </span>
                <span className="text-bodyText">{samplePatient.reportReleased}</span>
              </div>
            </div>

            {/* Right: Barcode Box */}
            <div className="flex-shrink-0 border-t md:border-t-0 md:border-l border-borderSubtle pt-3 md:pt-0 md:pl-5 flex flex-col items-center">
              {/* Synthetic Visual SVG Barcode */}
              <div className="h-8 flex items-stretch gap-[2px] bg-white p-1 rounded border border-borderSubtle">
                <span className="w-1 bg-ink" />
                <span className="w-0.5 bg-ink" />
                <span className="w-1.5 bg-ink" />
                <span className="w-0.5 bg-ink" />
                <span className="w-1 bg-ink" />
                <span className="w-2 bg-ink" />
                <span className="w-0.5 bg-ink" />
                <span className="w-1.5 bg-ink" />
                <span className="w-1 bg-ink" />
                <span className="w-0.5 bg-ink" />
                <span className="w-2 bg-ink" />
                <span className="w-1 bg-ink" />
                <span className="w-0.5 bg-ink" />
                <span className="w-1.5 bg-ink" />
                <span className="w-0.5 bg-ink" />
                <span className="w-1 bg-ink" />
              </div>
              <span className="text-[10px] font-mono text-mutedText font-semibold mt-1 tracking-wider">
                {samplePatient.barcode}
              </span>
            </div>

          </div>

          {/* 3. Clinical Test Sections */}
          <div className="space-y-8">
            
            {/* Section A: Complete Blood Count (CBC) */}
            {(activeTab === 'all' || activeTab === 'cbc') && (
              <div className="border border-borderSubtle/80 rounded-lg overflow-hidden shadow-sm">
                {/* Test Section Title */}
                <div className="bg-[#0B3B60] text-white px-4 py-2 font-bold text-xs uppercase tracking-wider flex items-center justify-between">
                  <span>COMPLETE BLOOD COUNT (CBC)</span>
                  <span className="text-[10px] text-white/80 font-normal">Method: Automated Cell Counter</span>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-xs text-left">
                    <thead className="bg-[#F0F5F1] text-ink border-b border-borderSubtle text-[11px] font-bold uppercase tracking-wider">
                      <tr>
                        <th className="py-2.5 px-4">Test Parameter</th>
                        <th className="py-2.5 px-4">Result</th>
                        <th className="py-2.5 px-4">Unit</th>
                        <th className="py-2.5 px-4">Bio. Ref. Range</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-borderSubtle/50">
                      {reportsData.cbc.parameters.map((param, i) => {
                        const isAbnormal = showAbnormal && param.isAbnormal;
                        const displayVal = isAbnormal ? param.valueAbnormal : param.valueNormal;

                        return (
                          <tr key={i} className={isAbnormal ? 'bg-red-50/60 font-medium' : 'hover:bg-paper/30'}>
                            <td className="py-2 px-4 text-ink font-medium">{param.name}</td>
                            <td className="py-2 px-4 font-semibold">
                              <span className={isAbnormal ? 'text-red-600 font-bold' : 'text-ink'}>
                                {displayVal} {isAbnormal ? '*' : ''}
                              </span>
                            </td>
                            <td className="py-2 px-4 text-mutedText">{param.unit}</td>
                            <td className="py-2 px-4 text-mutedText font-mono text-[11px]">{param.range}</td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>

                <div className="p-2.5 bg-paper/50 border-t border-borderSubtle text-[10px] text-mutedText">
                  (Collected: {samplePatient.sampleCollected} | Received: - | Reported: {samplePatient.reportReleased})
                </div>
              </div>
            )}

            {/* Section B: Widal Test with Antigen Dilution Matrix Table */}
            {(activeTab === 'all' || activeTab === 'widal') && (
              <div className="space-y-4">
                <div className="border border-borderSubtle/80 rounded-lg overflow-hidden shadow-sm">
                  <div className="bg-[#0B3B60] text-white px-4 py-2 font-bold text-xs uppercase tracking-wider flex items-center justify-between">
                    <span>WIDAL TEST (SLIDE & TUBE AGGLUTINATION)</span>
                    <span className="text-[10px] text-white/80 font-normal">Method: Agglutination Assay</span>
                  </div>

                  <div className="overflow-x-auto">
                    <table className="w-full text-xs text-left">
                      <thead className="bg-[#F0F5F1] text-ink border-b border-borderSubtle text-[11px] font-bold uppercase tracking-wider">
                        <tr>
                          <th className="py-2.5 px-4">Test Parameter</th>
                          <th className="py-2.5 px-4">Result</th>
                          <th className="py-2.5 px-4">Unit</th>
                          <th className="py-2.5 px-4">Bio. Ref. Range</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b border-borderSubtle/50">
                          <td className="py-2.5 px-4 font-medium text-ink">Widal Titre</td>
                          <td className="py-2.5 px-4 font-bold text-ink">INSIGNIFICANT</td>
                          <td className="py-2.5 px-4 text-mutedText">Titre</td>
                          <td className="py-2.5 px-4 text-mutedText">Non-Reactive (&lt; 1:80)</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  {/* Antigen Dilution Matrix (Exactly matching Page 2 of the PDF) */}
                  <div className="p-4 bg-white">
                    <div className="text-[11px] font-bold text-ink uppercase tracking-wider mb-2">
                      Antigen Dilution Titre Matrix:
                    </div>
                    <div className="overflow-x-auto">
                      <table className="w-full max-w-lg border border-borderSubtle text-center text-xs">
                        <thead className="bg-paper-alt font-bold text-ink text-[11px]">
                          <tr>
                            <th className="border border-borderSubtle py-1.5 px-3">Antigen</th>
                            <th className="border border-borderSubtle py-1.5 px-3">1:20</th>
                            <th className="border border-borderSubtle py-1.5 px-3">1:40</th>
                            <th className="border border-borderSubtle py-1.5 px-3">1:80</th>
                            <th className="border border-borderSubtle py-1.5 px-3">1:160</th>
                            <th className="border border-borderSubtle py-1.5 px-3">1:320</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-borderSubtle">
                          {widalMatrix.map((row, idx) => (
                            <tr key={idx} className="hover:bg-paper/30">
                              <td className="border border-borderSubtle py-1.5 px-3 font-semibold text-ink bg-paper/20">
                                {row.antigen}
                              </td>
                              <td className="border border-borderSubtle py-1.5 px-3 font-mono font-bold text-accent">
                                {row.t20}
                              </td>
                              <td className="border border-borderSubtle py-1.5 px-3 font-mono font-bold text-accent">
                                {row.t40}
                              </td>
                              <td className="border border-borderSubtle py-1.5 px-3 font-mono text-mutedText">
                                {row.t80}
                              </td>
                              <td className="border border-borderSubtle py-1.5 px-3 font-mono text-mutedText">
                                {row.t160}
                              </td>
                              <td className="border border-borderSubtle py-1.5 px-3 font-mono text-mutedText">
                                {row.t320}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div className="p-2.5 bg-paper/50 border-t border-borderSubtle text-[10px] text-mutedText">
                    (Collected: {samplePatient.sampleCollected} | Received: - | Reported: {samplePatient.reportReleased})
                  </div>
                </div>

                {/* Serology Extra: RA Factor & PBS for MP */}
                <div className="border border-borderSubtle/80 rounded-lg overflow-hidden shadow-sm">
                  <div className="bg-[#0B3B60] text-white px-4 py-2 font-bold text-xs uppercase tracking-wider">
                    RA FACTOR & MALARIA PARASITE (PBS FOR MP)
                  </div>
                  <table className="w-full text-xs text-left">
                    <thead className="bg-[#F0F5F1] text-ink border-b border-borderSubtle text-[11px] font-bold uppercase tracking-wider">
                      <tr>
                        <th className="py-2 px-4">Test Parameter</th>
                        <th className="py-2 px-4">Result</th>
                        <th className="py-2 px-4">Unit</th>
                        <th className="py-2 px-4">Bio. Ref. Range</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-borderSubtle/50">
                      <tr>
                        <td className="py-2 px-4 font-medium text-ink">RA FACTOR</td>
                        <td className="py-2 px-4 font-bold text-ink">8.2</td>
                        <td className="py-2 px-4 text-mutedText">IU/ML</td>
                        <td className="py-2 px-4 text-mutedText">&lt; 20 (Negative)</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-4 font-medium text-ink">PBS FOR MP</td>
                        <td className="py-2 px-4 font-bold text-ink">NOT SEEN</td>
                        <td className="py-2 px-4 text-mutedText">-</td>
                        <td className="py-2 px-4 text-mutedText">Nil / Negative</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Section C: Biochemistry & Thyroid */}
            {(activeTab === 'all' || activeTab === 'biochem') && (
              <div className="border border-borderSubtle/80 rounded-lg overflow-hidden shadow-sm">
                <div className="bg-[#0B3B60] text-white px-4 py-2 font-bold text-xs uppercase tracking-wider flex items-center justify-between">
                  <span>BIOCHEMISTRY & THYROID PROFILE</span>
                  <span className="text-[10px] text-white/80 font-normal">Method: Spectrophotometry & CLIA</span>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-xs text-left">
                    <thead className="bg-[#F0F5F1] text-ink border-b border-borderSubtle text-[11px] font-bold uppercase tracking-wider">
                      <tr>
                        <th className="py-2.5 px-4">Test Parameter</th>
                        <th className="py-2.5 px-4">Result</th>
                        <th className="py-2.5 px-4">Unit</th>
                        <th className="py-2.5 px-4">Bio. Ref. Range</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-borderSubtle/50">
                      {reportsData.biochem.parameters.map((param, i) => {
                        const isAbnormal = showAbnormal && param.isAbnormal;
                        const displayVal = isAbnormal ? param.valueAbnormal : param.valueNormal;

                        return (
                          <tr key={i} className={isAbnormal ? 'bg-red-50/60 font-medium' : 'hover:bg-paper/30'}>
                            <td className="py-2.5 px-4 text-ink font-medium">{param.name}</td>
                            <td className="py-2.5 px-4 font-semibold">
                              <span className={isAbnormal ? 'text-red-600 font-bold' : 'text-ink'}>
                                {displayVal} {isAbnormal ? '*' : ''}
                              </span>
                            </td>
                            <td className="py-2.5 px-4 text-mutedText">{param.unit}</td>
                            <td className="py-2.5 px-4 text-mutedText font-mono text-[11px]">{param.range}</td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>

                <div className="p-2.5 bg-paper/50 border-t border-borderSubtle text-[10px] text-mutedText">
                  (Collected: {samplePatient.sampleCollected} | Received: - | Reported: {samplePatient.reportReleased})
                </div>
              </div>
            )}

          </div>

          {/* End of Report Indicator */}
          <div className="text-center my-6">
            <span className="text-[11px] font-mono tracking-widest text-mutedText font-semibold">
              * * * E N D  O F  R E P O R T * * *
            </span>
          </div>

          {/* 4. Signatures (Technician & Pathologist) */}
          <div className="pt-4 border-t border-borderSubtle flex justify-between items-end mb-6">
            
            {/* Technician Signature */}
            <div className="text-center sm:text-left">
              <div className="h-9 font-serif italic text-lg text-ink font-semibold flex items-center">
                <span className="border-b border-ink/40 pb-0.5 px-2">B. Bora</span>
              </div>
              <p className="text-xs font-bold text-ink">Technician</p>
              <p className="text-[10px] text-mutedText">{defaultLabInfo.technician.title}</p>
            </div>

            {/* Pathologist Signature */}
            <div className="text-right">
              <div className="h-9 font-serif italic text-xl text-[#0B3B60] font-bold flex items-center justify-end">
                <span className="border-b-2 border-[#0B3B60] pb-0.5 px-3">Dr. John Das</span>
              </div>
              <p className="text-xs font-bold text-ink">{defaultLabInfo.pathologist.name}</p>
              <p className="text-[11px] text-bodyText font-medium">{defaultLabInfo.pathologist.degrees}</p>
              <p className="text-[10px] font-mono text-accent font-semibold">{defaultLabInfo.pathologist.regNo}</p>
            </div>

          </div>

          {/* 5. Important Notes Card & QR Code Verification (Exact replica of the PDF footer) */}
          <div className="border border-borderSubtle rounded-xl bg-paper/30 p-4 relative overflow-hidden flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            
            {/* Left Notes List */}
            <div className="space-y-2 flex-1">
              <div className="inline-block bg-[#0B3B60] text-white px-3 py-1 rounded text-xs font-bold uppercase tracking-wider mb-1">
                IMPORTANT NOTES
              </div>
              
              <ul className="space-y-1.5 text-[11px] text-bodyText">
                {importantNotes.map((note, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="w-3.5 h-3.5 rounded-full bg-[#2ecc71] text-white flex items-center justify-center text-[9px] flex-shrink-0 mt-0.5">
                      ✓
                    </span>
                    <span>{note}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right: QR Code for Verification with Medical Pattern */}
            <div className="flex-shrink-0 border-t md:border-t-0 md:border-l border-borderSubtle pt-3 md:pt-0 md:pl-5 flex items-center gap-3">
              <div className="w-16 h-16 border-2 border-[#01A9B4] rounded-lg p-1 bg-white shadow-sm flex items-center justify-center">
                <QrCode className="w-12 h-12 text-[#0B3B60]" />
              </div>
              <div className="text-[10px] text-mutedText">
                <p className="font-bold text-ink">Scan to Verify</p>
                <p>NABL / ISO Authenticated</p>
                <p className="font-mono text-accent mt-0.5">Secure Cloud Hash</p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
