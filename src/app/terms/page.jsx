import React from 'react';
import LegalPageLayout from '../../components/LegalPageLayout';

export const metadata = {
  title: 'Terms & Conditions | Patholab Cloud',
  description: 'Terms of service and subscription agreement for Patholab Cloud LIMS users.',
};

export default function TermsPage() {
  return (
    <LegalPageLayout title="Terms & Conditions" lastUpdated="November 2026">
      <section>
        <h2 className="text-xl font-bold text-[#0B1120] mb-3">1. Agreement to Terms</h2>
        <p className="text-slate-600">
          By accessing or using Patholab Cloud (a product of Globizhub / Patholab Cloud Technologies Pvt Ltd, accessible at patholab.cloud), you agree to be bound by these Terms and Conditions. If you do not agree with any of these terms, you are prohibited from using or accessing this software platform.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-[#0B1120] mb-3">2. Service Description & SaaS License</h2>
        <p className="text-slate-600 mb-2">
          Patholab Cloud provides a cloud-based Laboratory Information Management System (LIMS) for medical diagnostics labs, diagnostic centers, and healthcare providers. Services include patient registration, sample tracking, barcode generation, bidirectional analyzer interfacing, automated reporting, WhatsApp/SMS distribution, and accounting.
        </p>
        <p className="text-slate-600">
          We grant you a non-exclusive, non-transferable, revocable license to access and use our platform according to your subscription tier or prepaid pay-as-you-go wallet.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-[#0B1120] mb-3">3. User Responsibilities & Patient Data Security</h2>
        <p className="text-slate-600 mb-2">
          As a diagnostic lab or medical provider, you are solely responsible for ensuring the accuracy of medical reports, test results, doctor signatures, and patient data input into the platform.
        </p>
        <p className="text-slate-600">
          You agree to maintain the confidentiality of your login credentials and are responsible for all activities that occur under your laboratory account.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-[#0B1120] mb-3">4. Pricing, Pay-Per-Patient Wallet & Billing</h2>
        <p className="text-slate-600 mb-2">
          Our pay-as-you-go pricing operates on a per-patient consumption model (e.g., ₹2.5 per patient report generated) deducted from your prepaid laboratory wallet balance, or via annual enterprise contracts.
        </p>
        <p className="text-slate-600">
          Wallet recharges are processed instantly via secure authorized payment gateways. All prices are in Indian Rupees (INR) and are exclusive of applicable GST unless stated otherwise.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-[#0B1120] mb-3">5. Service Availability & SLA</h2>
        <p className="text-slate-600">
          Patholab Cloud strives to maintain 99.9% platform availability on Google Cloud/AWS infrastructure. Scheduled maintenance will be communicated in advance via dashboard notifications. We are not liable for laboratory downtime caused by local hardware faults, local internet disruptions, or third-party analyzer serial port failures.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-[#0B1120] mb-3">6. Contact Information</h2>
        <p className="text-slate-600">
          If you have questions regarding these Terms, contact us at <a href="mailto:support@patholabcloud.com" className="text-emerald-600 font-semibold underline">support@patholabcloud.com</a> or call Toll-Free 1800-123-4567.
        </p>
      </section>
    </LegalPageLayout>
  );
}
