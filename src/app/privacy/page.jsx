import React from 'react';
import LegalPageLayout from '../../components/LegalPageLayout';

export const metadata = {
  title: 'Privacy Policy | Patholab Cloud',
  description: 'Privacy policy and patient healthcare data protection standards for Patholab Cloud.',
};

export default function PrivacyPage() {
  return (
    <LegalPageLayout title="Privacy Policy" lastUpdated="November 2026">
      <section>
        <h2 className="text-xl font-bold text-[#0B1120] mb-3">1. Commitment to Privacy</h2>
        <p className="text-slate-600">
          Patholab Cloud respects the privacy of laboratories, diagnostic centers, doctors, and their patients. This Privacy Policy outlines our policies regarding the collection, storage, encryption, and disclosure of information when you use our service.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-[#0B1120] mb-3">2. Patient Health Information & Data Ownership</h2>
        <p className="text-slate-600 mb-2">
          <strong>The Laboratory is the sole Data Owner.</strong> Patholab Cloud acts purely as a secure cloud data processor. We do not sell, rent, monetize, or publicly distribute any patient identifiable health information (PHI) or diagnostic test records.
        </p>
        <p className="text-slate-600">
          All patient diagnostic reports, test histories, and doctor notes remain the exclusive confidential property of your laboratory facility.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-[#0B1120] mb-3">3. Data Encryption & Security Standards</h2>
        <p className="text-slate-600 mb-2">
          We implement rigorous administrative, technical, and physical safeguards conforming to <strong>ISO 27001 (Information Security Management)</strong> and <strong>ISO 9001</strong> quality controls:
        </p>
        <ul className="list-disc pl-5 text-slate-600 space-y-1.5">
          <li><strong>In-Transit Encryption:</strong> All data transmitted between your browser/analyzer client and our servers is encrypted using TLS 1.3.</li>
          <li><strong>At-Rest Encryption:</strong> Database records, patient documents, and backup snapshots are encrypted using AES-256.</li>
          <li><strong>Role-Based Access Control (RBAC):</strong> Granular staff permissions ensure only authorized lab personnel can view or sign sensitive test results.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold text-[#0B1120] mb-3">4. Third-Party Integrations & Communication</h2>
        <p className="text-slate-600">
          When sending automated reports to patients via WhatsApp or SMS, patient phone numbers and encrypted PDF links are securely dispatched through authorized telecom/meta enterprise BSP partners exclusively to deliver the requested test report.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-[#0B1120] mb-3">5. Data Retention & Backups</h2>
        <p className="text-slate-600">
          Daily automated off-site backups ensure disaster recovery. Diagnostic records are archived according to state and national medical council retention mandates. You may request data exports at any time in standard formats (CSV/PDF).
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-[#0B1120] mb-3">6. Grievance Officer</h2>
        <p className="text-slate-600">
          For privacy inquiries or compliance notices, please write to our Data Protection Officer at <a href="mailto:privacy@patholabcloud.com" className="text-emerald-600 font-semibold underline">privacy@patholabcloud.com</a>.
        </p>
      </section>
    </LegalPageLayout>
  );
}
