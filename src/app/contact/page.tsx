import React from 'react';
import LegalPageLayout from '../../components/LegalPageLayout';
import { Mail, Phone, MapPin, Clock, MessageSquare } from 'lucide-react';
import { brandConfig } from '../../data/brand';

export const metadata = {
  title: 'Contact Us | Patholab Cloud',
  description: 'Get in touch with Patholab Cloud support, sales, and corporate headquarters.',
};

export default function ContactPage() {
  const cleanWhatsappNumber = (brandConfig.contact?.whatsappNumber || '919876543210').replace(/\D/g, '');

  return (
    <LegalPageLayout title="Contact Us" lastUpdated="November 2026">
      <section>
        <p className="text-slate-600 text-base leading-relaxed mb-8">
          Have questions about onboarding your laboratory, machine interfacing, or pay-as-you-go pricing? Reach our dedicated technical support and sales team directly.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 not-prose mb-10">
          {/* Toll Free Support */}
          <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-6">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-700 mb-4">
              <Phone className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-900 text-base mb-1">Toll-Free Helpline</h3>
            <p className="text-xs text-slate-500 mb-3">Mon - Sat from 9:00 AM to 8:00 PM IST</p>
            <a href={`tel:${brandConfig.contact?.phone || '1800-123-4567'}`} className="text-emerald-600 font-bold text-lg hover:underline">
              {brandConfig.contact?.phone || '1800-123-4567'}
            </a>
          </div>

          {/* Email Support */}
          <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-6">
            <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center text-blue-700 mb-4">
              <Mail className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-900 text-base mb-1">Email Desk</h3>
            <p className="text-xs text-slate-500 mb-3">Guaranteed response within 4 hours</p>
            <a href={`mailto:${brandConfig.contact?.supportEmail || 'support@patholabcloud.com'}`} className="text-blue-600 font-bold text-sm hover:underline">
              {brandConfig.contact?.supportEmail || 'support@patholabcloud.com'}
            </a>
          </div>

          {/* WhatsApp Direct */}
          <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-6">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-700 mb-4">
              <MessageSquare className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-900 text-base mb-1">WhatsApp Live Support</h3>
            <p className="text-xs text-slate-500 mb-3">Instant sample report formats & live demos</p>
            <a 
              href={`https://wa.me/${cleanWhatsappNumber}?text=${encodeURIComponent(brandConfig.contact?.whatsappMessage || 'Hi, I need assistance with Patholab Cloud.')}`}
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-emerald-700 font-bold text-sm bg-emerald-100/70 hover:bg-emerald-200 px-3.5 py-1.5 rounded-full transition-colors"
            >
              <span>Chat on WhatsApp</span>
            </a>
          </div>

          {/* Hours */}
          <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-6">
            <div className="w-10 h-10 rounded-xl bg-purple-100 flex items-center justify-center text-purple-700 mb-4">
              <Clock className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-900 text-base mb-1">Technical Support Hours</h3>
            <p className="text-xs text-slate-500 mb-1">Emergency Escalations: 24/7</p>
            <p className="text-xs text-slate-500">Standard Onboarding: 9:00 AM - 8:00 PM</p>
          </div>
        </div>
      </section>

      <section>
        <div className="border-t border-slate-200 pt-6">
          <div className="flex items-start gap-3">
            <MapPin className="w-5 h-5 text-slate-400 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-bold text-slate-900 text-base mb-1">Corporate Headquarters</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Globizhub India Pvt Ltd / Patholab Cloud Technologies<br />
                NO 594/4/2, First Floor, Opp. to BDS Nagar, RK Nagar 2,<br />
                Kothanur Main Road, Bengaluru - 560077, Karnataka, India.
              </p>
            </div>
          </div>
        </div>
      </section>
    </LegalPageLayout>
  );
}
