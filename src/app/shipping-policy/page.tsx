import React from 'react';
import LegalPageLayout from '../../components/LegalPageLayout';

export const metadata = {
  title: 'Shipping & Delivery Policy | Patholab Cloud',
  description: 'Digital service delivery and hardware dispatch policy for Patholab Cloud.',
};

export default function ShippingPage() {
  return (
    <LegalPageLayout title="Shipping & Delivery Policy" lastUpdated="November 2026">
      <section>
        <h2 className="text-xl font-bold text-[#0B1120] mb-3">1. Digital SaaS Delivery & Account Provisioning</h2>
        <p className="text-slate-600 mb-2">
          Patholab Cloud is a 100% cloud-hosted SaaS (Software-as-a-Service) platform.
        </p>
        <p className="text-slate-600">
          Upon completing your online registration or wallet recharge, your account is provisioned <strong>instantaneously</strong>. Your login credentials and activation confirmation are delivered via email and WhatsApp within <strong>5 to 15 minutes</strong>. No physical shipping is required for core software access.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-[#0B1120] mb-3">2. Machine Interfacing & On-boarding Setup</h2>
        <p className="text-slate-600">
          For laboratories opting for Bi-directional Analyzer Interfacing (IoT desktop agent or bridge hardware), our technical engineering team initiates the remote onboarding session within <strong>24 to 48 business hours</strong> of purchase.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-[#0B1120] mb-3">3. Physical Hardware & Consumables (If Applicable)</h2>
        <p className="text-slate-600 mb-2">
          If your diagnostic center orders physical hardware packages (such as thermal barcode printers, USB barcode scanners, or sample label roll bundles) directly through our procurement desk:
        </p>
        <ul className="list-disc pl-5 text-slate-600 space-y-1.5">
          <li><strong>Dispatch Time:</strong> Hardware orders are packed and dispatched within 2 business days via recognized courier partners (BlueDart, Delhivery, DTDC).</li>
          <li><strong>Estimated Delivery:</strong> Metro cities: 2–4 business days; Rest of India: 4–7 business days.</li>
          <li><strong>Tracking:</strong> A live consignment tracking number will be shared over SMS and email once the package is dispatched.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold text-[#0B1120] mb-3">4. Delivery Inquiries & Escalations</h2>
        <p className="text-slate-600">
          For any delivery or setup assistance, reach our logistics and support team at <a href="mailto:support@patholabcloud.com" className="text-emerald-600 font-semibold underline">support@patholabcloud.com</a> or Toll-Free 1800-123-4567.
        </p>
      </section>
    </LegalPageLayout>
  );
}
