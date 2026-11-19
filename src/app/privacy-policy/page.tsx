import React from 'react';
import LegalPageLayout from '../../components/LegalPageLayout';
import Link from 'next/link';

export const metadata = {
  title: 'Privacy Policy | Patholab.cloud',
  description: 'Official Privacy Policy of Patholab.cloud by Globizhub India Private Limited under the Digital Personal Data Protection (DPDP) framework.',
};

export default function PrivacyPage() {
  return (
    <LegalPageLayout title="Privacy Policy" lastUpdated="November 2026">
      {/* 1. Introduction */}
      <section className="space-y-3">
        <h2 className="text-xl font-bold text-[#0B1120]">1. Introduction</h2>
        <p className="text-slate-600">
          Globizhub India Private Limited (&ldquo;Company&rdquo;, &ldquo;Globizhub&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) operates Patholab.cloud, a cloud-based Laboratory Information Management System (&ldquo;LIMS&rdquo;) and laboratory information platform for laboratories, diagnostic centres, clinics, hospitals, healthcare providers, and their authorised personnel.
        </p>
        <p className="text-slate-600">
          Patholab.cloud may process information relating to subscribing laboratories and healthcare organisations (&ldquo;Customers&rdquo; or &ldquo;Licensees&rdquo;), their authorised personnel (&ldquo;Permitted Users&rdquo;), and patients whose information is entered into or processed through the Platform.
        </p>
        <p className="text-slate-600">
          This Privacy Policy explains the categories of personal data that may be processed through the Platform, the purposes for which such information is processed, the roles of Globizhub and its Customers, the security and retention practices applicable to such information, and the rights and responsibilities applicable under Indian law.
        </p>
        <p className="text-slate-600">
          This Privacy Policy is principally intended for processing activities connected with Patholab.cloud in India. Country-specific privacy requirements applicable to other jurisdictions may be addressed separately where Patholab.cloud is made available in such jurisdictions.
        </p>
        <p className="text-slate-600">
          This Privacy Policy should be read together with the Patholab.cloud Terms and Conditions, applicable subscription or service agreements, Data Processing Agreement (&ldquo;DPA&rdquo;), and other applicable contractual or legal documentation.
        </p>
        <p className="text-slate-600">
          Where applicable law requires a specific consent, notice, authorisation, or other legal basis for processing, the relevant Data Fiduciary is responsible for ensuring that such requirement is satisfied.
        </p>
      </section>

      {/* 2. Scope */}
      <section className="space-y-3 pt-4 border-t border-slate-200">
        <h2 className="text-xl font-bold text-[#0B1120]">2. Scope</h2>
        <p className="text-slate-600">This Privacy Policy applies to personal data processed through:</p>
        <ul className="list-disc pl-5 text-slate-600 space-y-1">
          <li>The Patholab.cloud web platform;</li>
          <li>Patholab.cloud mobile applications;</li>
          <li>Laboratory and administrative portals;</li>
          <li>Patient-facing functionality, where enabled;</li>
          <li>Doctor/referrer portals, where enabled;</li>
          <li>APIs and system integrations;</li>
          <li>Laboratory analyser and instrument integrations;</li>
          <li>Report-generation and reporting functionality;</li>
          <li>Communication and notification functionality;</li>
          <li>Billing and subscription functionality; and</li>
          <li>Other services forming part of the Patholab.cloud Platform.</li>
        </ul>
        <p className="text-slate-600">
          This Policy does not govern the independent privacy practices of third-party websites, applications, payment providers, communication providers, healthcare organisations, or other external services that may be integrated with or accessed through the Platform.
        </p>
      </section>

      {/* 3. Definitions */}
      <section className="space-y-3 pt-4 border-t border-slate-200">
        <h2 className="text-xl font-bold text-[#0B1120]">3. Definitions</h2>
        <p className="text-slate-600">For purposes of this Privacy Policy, the following definitions apply under applicable Indian data protection law:</p>
        <ul className="list-disc pl-5 text-slate-600 space-y-2">
          <li>
            <strong>&ldquo;Data Fiduciary&rdquo;</strong> means a person who, alone or in conjunction with other persons, determines the purpose and means of processing of personal data.
          </li>
          <li>
            <strong>&ldquo;Data Processor&rdquo;</strong> means any person who processes personal data on behalf of a Data Fiduciary.
          </li>
          <li>
            <strong>&ldquo;Data Principal&rdquo;</strong> means the individual to whom the personal data relates. For personal data of a child, it includes the parent or lawful guardian.
          </li>
          <li>
            <strong>&ldquo;Personal Data&rdquo;</strong> means any data about an individual who is identifiable by or in relation to such data.
          </li>
          <li>
            <strong>&ldquo;Customer Data&rdquo;</strong> means all data submitted, uploaded, generated, transmitted, or stored by or on behalf of a Customer through the Platform, including patient information, laboratory records, reports, and configuration information.
          </li>
          <li>
            <strong>&ldquo;DPDP Act&rdquo;</strong> means the Digital Personal Data Protection Act, 2023, as applicable and in force from time to time.
          </li>
          <li>
            <strong>&ldquo;DPDP Rules&rdquo;</strong> means the Digital Personal Data Protection Rules, 2025, as notified and in force from time to time.
          </li>
        </ul>
      </section>

      {/* 4. Roles of the Parties */}
      <section className="space-y-3 pt-4 border-t border-slate-200">
        <h2 className="text-xl font-bold text-[#0B1120]">4. Roles of the Parties</h2>
        <p className="text-slate-600">
          Globizhub processes personal data in two distinct capacities, depending on the category of information and the relevant processing activity.
        </p>

        <div className="space-y-2 pt-2">
          <h3 className="text-base font-bold text-[#0B1120]">4.1 Globizhub as Data Fiduciary</h3>
          <p className="text-slate-600">
            Globizhub acts as a Data Fiduciary where it independently determines the purpose and means of processing personal data relating to its own business operations. This includes:
          </p>
          <ul className="list-disc pl-5 text-slate-600 space-y-1">
            <li>Customer account information;</li>
            <li>Administrator and Permitted User information;</li>
            <li>Billing and transaction information;</li>
            <li>Subscription information;</li>
            <li>Support and service records;</li>
            <li>Security and authentication information;</li>
            <li>Website and application usage information;</li>
            <li>Technical and diagnostic information; and</li>
            <li>Information required to comply with legal obligations.</li>
          </ul>
          <p className="text-slate-600">
            In relation to such information, Globizhub exercises control over the purposes and means of processing and is accordingly the Data Fiduciary under applicable Indian law.
          </p>
        </div>

        <div className="space-y-2 pt-2">
          <h3 className="text-base font-bold text-[#0B1120]">4.2 Globizhub as Data Processor</h3>
          <p className="text-slate-600">
            Globizhub acts as a Data Processor when it processes patient or clinical information on behalf of a Customer and in accordance with the Customer&rsquo;s instructions.
          </p>
          <p className="text-slate-600">
            Such processing may include hosting, storage, retrieval, synchronisation, formatting, reporting, security, technical support, integration, backup, maintenance, and other services necessary to provide the Platform.
          </p>
          <p className="text-slate-600">
            In this capacity, Globizhub does not independently determine the purposes for which patient information is collected or clinically used by the subscribing laboratory, except where such processing is necessary for the operation, security, maintenance, or legal compliance of the Platform.
          </p>
        </div>

        <div className="space-y-2 pt-2">
          <h3 className="text-base font-bold text-[#0B1120]">4.3 Customer as Data Fiduciary</h3>
          <p className="text-slate-600">
            The subscribing laboratory, clinic, hospital, or healthcare organisation is the Data Fiduciary for patient and clinical information that it submits through or generates using the Platform. The Customer determines:
          </p>
          <ul className="list-disc pl-5 text-slate-600 space-y-1">
            <li>What patient information is collected and for what purposes;</li>
            <li>The lawful basis for such processing;</li>
            <li>Which Permitted Users are authorised to access patient information;</li>
            <li>How patient notifications and communications are configured; and</li>
            <li>How patient rights requests are received and handled.</li>
          </ul>
          <p className="text-slate-600">
            Questions from Permitted Users concerning how their organisation handles patient or account information should generally be directed to the organisation&rsquo;s administrator, as the subscribing organisation is the Data Fiduciary for such information.
          </p>
        </div>
      </section>

      {/* 5. Information We Collect or Process */}
      <section className="space-y-3 pt-4 border-t border-slate-200">
        <h2 className="text-xl font-bold text-[#0B1120]">5. Information We Collect or Process</h2>

        <div className="space-y-2">
          <h3 className="text-base font-bold text-[#0B1120]">5.1 Laboratory and Customer Information</h3>
          <p className="text-slate-600">When a laboratory or healthcare organisation creates an account, we may process:</p>
          <ul className="list-disc pl-5 text-slate-600 space-y-1">
            <li>Laboratory or organisation name;</li>
            <li>Registration, licence, accreditation, or establishment information;</li>
            <li>Owner, administrator, or authorised representative name;</li>
            <li>Business address, business email address, and business telephone number;</li>
            <li>GST and PAN information;</li>
            <li>Billing and subscription information;</li>
            <li>Contractual information; and</li>
            <li>Other information reasonably required to establish and operate the Customer relationship.</li>
          </ul>
        </div>

        <div className="space-y-2 pt-2">
          <h3 className="text-base font-bold text-[#0B1120]">5.2 Permitted User Information</h3>
          <p className="text-slate-600">Depending on the Platform functionality used, we may process:</p>
          <ul className="list-disc pl-5 text-slate-600 space-y-1">
            <li>Name and designation;</li>
            <li>Professional details and credentials;</li>
            <li>Department and role information;</li>
            <li>Username and authentication information;</li>
            <li>Email address and mobile number;</li>
            <li>Role and access permissions;</li>
            <li>Account activity and login information; and</li>
            <li>Security and audit information.</li>
          </ul>
        </div>

        <div className="space-y-2 pt-2">
          <h3 className="text-base font-bold text-[#0B1120]">5.3 Patient and Clinical Information</h3>
          <p className="text-slate-600">On behalf of the Customer, Patholab.cloud may process patient and clinical information including:</p>
          <ul className="list-disc pl-5 text-slate-600 space-y-1.5">
            <li>
              <strong>Patient Identification:</strong> Patient name; patient ID / UHID; laboratory registration number; age or date of birth where collected; sex or gender where collected; address; mobile number; email address where collected; emergency contact information where collected; ABHA identification where ABDM functionality is enabled; other government-issued identification where lawfully collected.
            </li>
            <li>
              <strong>Clinical Information:</strong> Prescribing doctor or referrer information; clinical history or clinical indications where entered; diagnosis-related information where entered; allergies where captured; specimen and pathology information; microbiology information; imaging-related information where supported; genetic or molecular test information where supported.
            </li>
            <li>
              <strong>Operational Laboratory Data:</strong> Sample collection information; specimen identifiers and accession numbers; barcode information; sample tracking and processing timestamps; test requests and orders; laboratory department information; instrument-generated results; raw laboratory test values; diagnostic calculations; observations and findings; reference ranges; quality-control or validation information; critical-value information; report information; final diagnostic reports; report release and authorisation records; report history.
            </li>
          </ul>
        </div>

        <div className="space-y-2 pt-2">
          <h3 className="text-base font-bold text-[#0B1120]">5.4 Technical and Device Information</h3>
          <p className="text-slate-600">We may process:</p>
          <ul className="list-disc pl-5 text-slate-600 space-y-1">
            <li>IP address and device identifiers;</li>
            <li>Device type and hardware information;</li>
            <li>Operating system and browser information;</li>
            <li>Application version and session information;</li>
            <li>Application event logs and feature usage information;</li>
            <li>Crash and diagnostic information;</li>
            <li>Security and authentication logs; and</li>
            <li>Other technical information necessary for operating and securing the Platform.</li>
          </ul>
        </div>

        <div className="space-y-2 pt-2">
          <h3 className="text-base font-bold text-[#0B1120]">5.5 Billing and Payment Information</h3>
          <p className="text-slate-600">We may process:</p>
          <ul className="list-disc pl-5 text-slate-600 space-y-1">
            <li>Subscription and billing information;</li>
            <li>Invoices and transaction references;</li>
            <li>Payment status and payment-related records;</li>
            <li>Billing contact information; and</li>
            <li>Other information required to administer payments and subscriptions.</li>
          </ul>
          <p className="text-slate-600">
            Payment transactions may be processed through third-party payment service providers. Globizhub does not intentionally store raw card numbers, CVV information, or bank account passwords on its own servers.
          </p>
        </div>
      </section>

      {/* 6. Sources of Personal Data */}
      <section className="space-y-3 pt-4 border-t border-slate-200">
        <h2 className="text-xl font-bold text-[#0B1120]">6. Sources of Personal Data</h2>
        <p className="text-slate-600">Personal data processed through Patholab.cloud may be received from:</p>
        <ul className="list-disc pl-5 text-slate-600 space-y-1">
          <li>Patients;</li>
          <li>Laboratory staff, reception, and registration personnel;</li>
          <li>Doctors and referrers;</li>
          <li>Hospitals and clinics;</li>
          <li>Authorised Customer administrators and Permitted Users;</li>
          <li>Laboratory instruments and analysers;</li>
          <li>Barcode and sample-management systems;</li>
          <li>Integrated healthcare or laboratory information systems;</li>
          <li>APIs and system integrations;</li>
          <li>ABDM/ABHA-enabled integrations, where applicable;</li>
          <li>Patient portals, where enabled;</li>
          <li>Imported historical records; and</li>
          <li>Other sources authorised by the Customer or permitted by applicable law.</li>
        </ul>
        <p className="text-slate-600">
          The source of information may vary depending on the functionality and integrations enabled by the Customer.
        </p>
      </section>

      {/* 7. Information We Do Not Intentionally Collect */}
      <section className="space-y-3 pt-4 border-t border-slate-200">
        <h2 className="text-xl font-bold text-[#0B1120]">7. Information We Do Not Intentionally Collect</h2>
        <p className="text-slate-600">
          Unless specifically required for a supported feature and appropriately disclosed, Patholab.cloud does not intentionally collect:
        </p>
        <ul className="list-disc pl-5 text-slate-600 space-y-1">
          <li>Personal contacts stored on a device;</li>
          <li>SMS messages;</li>
          <li>Call logs;</li>
          <li>Photographs or videos unrelated to Platform functionality;</li>
          <li>Precise device location;</li>
          <li>Microphone recordings; or</li>
          <li>Advertising identifiers for behavioural advertising.</li>
        </ul>
        <p className="text-slate-600">
          If a future feature requires access to additional device permissions, appropriate information and, where required, permission will be requested before such access is used.
        </p>
      </section>

      {/* 8. Purposes of Processing */}
      <section className="space-y-3 pt-4 border-t border-slate-200">
        <h2 className="text-xl font-bold text-[#0B1120]">8. Purposes of Processing</h2>
        <p className="text-slate-600">Personal data may be processed for purposes including:</p>
        <ul className="list-disc pl-5 text-slate-600 space-y-1">
          <li>Creating and maintaining laboratory accounts;</li>
          <li>Managing Customer subscriptions;</li>
          <li>Registering patients and bookings;</li>
          <li>Registering and tracking samples;</li>
          <li>Processing test orders and laboratory results;</li>
          <li>Performing laboratory calculations and generating diagnostic reports;</li>
          <li>Formatting reports and letterheads;</li>
          <li>Validating and authorising reports;</li>
          <li>Synchronising supported laboratory analysers and instruments;</li>
          <li>Facilitating patient and doctor access where enabled;</li>
          <li>Sending OTPs, service notifications, and communications;</li>
          <li>Billing and payment processing;</li>
          <li>Generating invoices and billing alerts;</li>
          <li>Resolving technical support issues;</li>
          <li>Maintaining Platform functionality and performance;</li>
          <li>Detecting and preventing unauthorised access and fraud;</li>
          <li>Protecting the Platform against cybersecurity threats;</li>
          <li>Maintaining audit trails and security records;</li>
          <li>Maintaining backups and supporting disaster recovery;</li>
          <li>Improving reliability and security; and</li>
          <li>Complying with legal, regulatory, and contractual obligations.</li>
        </ul>
        <p className="text-slate-600 font-semibold text-emerald-800 bg-emerald-50 p-4 rounded-xl border border-emerald-200">
          Globizhub does not sell personal information. Globizhub does not use identifiable patient clinical information for advertising purposes. Globizhub does not sell, rent, trade, or otherwise commercially exploit identifiable patient clinical information for advertising or unrelated marketing purposes.
        </p>
      </section>

      {/* 9. Notice and Lawful Processing */}
      <section className="space-y-3 pt-4 border-t border-slate-200">
        <h2 className="text-xl font-bold text-[#0B1120]">9. Notice and Lawful Processing</h2>
        <p className="text-slate-600">
          This Privacy Policy describes how Globizhub processes personal data in connection with the Platform.
        </p>
        <p className="text-slate-600">
          Where consent or another lawful basis is required by applicable law, the relevant Data Fiduciary will provide the appropriate notice and obtain such consent or establish such lawful basis through an appropriate mechanism.
        </p>
        <p className="text-slate-600">
          Where Globizhub acts as a Data Fiduciary, it will provide applicable notices and obtain consent where consent is the applicable basis for processing, subject to the requirements of Indian law.
        </p>
        <p className="text-slate-600">
          Where Globizhub acts as a Data Processor, the Customer is generally responsible for providing appropriate notice to Data Principals and obtaining consent or relying on another lawful basis where required.
        </p>
        <p className="text-slate-600">
          Notices concerning patient information should identify the relevant categories of personal data and the purposes for which such information is processed.
        </p>
        <p className="text-slate-600">
          Where a Data Principal withdraws consent, the consequences of withdrawal may depend on the nature of the processing and the applicable legal basis. Withdrawal of consent does not invalidate processing lawfully carried out before withdrawal.
        </p>
      </section>

      {/* 10. Disclosure and Sharing of Information */}
      <section className="space-y-3 pt-4 border-t border-slate-200">
        <h2 className="text-xl font-bold text-[#0B1120]">10. Disclosure and Sharing of Information</h2>
        <p className="text-slate-600">
          Personal data may be disclosed or made available where necessary for providing the Platform or complying with applicable obligations. Depending on the circumstances, information may be disclosed to:
        </p>
        <ul className="list-disc pl-5 text-slate-600 space-y-1">
          <li>The subscribing laboratory or healthcare organisation;</li>
          <li>Authorised personnel of the Customer;</li>
          <li>Doctors or referrers authorised by the laboratory to access patient information;</li>
          <li>Patients through authorised patient functionality and portals;</li>
          <li>Authorised healthcare or laboratory information systems integrated with the Platform;</li>
          <li>Payment service providers for billing and subscription processing;</li>
          <li>SMS, email, OTP, or communication service providers for Customer-configured communications;</li>
          <li>Cloud and infrastructure service providers necessary to operate the Platform;</li>
          <li>Security and monitoring service providers;</li>
          <li>ABDM/ABHA infrastructure where specifically enabled and with applicable consent;</li>
          <li>Technical support providers;</li>
          <li>Other approved sub-processors engaged by Globizhub;</li>
          <li>Government or regulatory authorities where legally required;</li>
          <li>Courts, law-enforcement agencies, or other competent authorities where legally required;</li>
          <li>Professional advisers where reasonably necessary and permitted by law; and</li>
          <li>Parties involved in a merger, acquisition, restructuring, or transfer of business, subject to applicable law and appropriate safeguards.</li>
        </ul>
        <p className="text-slate-600 font-semibold">
          Globizhub does not disclose identifiable patient information to third parties for unrelated advertising or sale.
        </p>
      </section>

      {/* 11. Sub-Processors and Service Providers */}
      <section className="space-y-3 pt-4 border-t border-slate-200">
        <h2 className="text-xl font-bold text-[#0B1120]">11. Sub-Processors and Service Providers</h2>
        <p className="text-slate-600">
          Globizhub may engage carefully selected third-party service providers to perform services required to operate Patholab.cloud. Such providers may process Customer Data on behalf of Globizhub as part of delivering the Platform and related services.
        </p>
        <p className="text-slate-600">Categories of sub-processors and service providers may include providers of:</p>
        <ul className="list-disc pl-5 text-slate-600 space-y-1">
          <li>Cloud hosting and infrastructure;</li>
          <li>Database and storage services;</li>
          <li>Backup and disaster-recovery services;</li>
          <li>Payment processing;</li>
          <li>Email delivery services;</li>
          <li>SMS, OTP, and communication services;</li>
          <li>Push notification services;</li>
          <li>Security and monitoring services;</li>
          <li>Error tracking and diagnostics;</li>
          <li>Analytics services;</li>
          <li>Document and PDF processing;</li>
          <li>AI or machine-learning services where applicable;</li>
          <li>Content delivery network (CDN) services;</li>
          <li>Technical support and infrastructure management; and</li>
          <li>Other specialised technology services.</li>
        </ul>
        <p className="text-slate-600">
          Where such providers process Customer Data on behalf of Globizhub, Globizhub will seek to impose appropriate contractual confidentiality, security, and data-processing obligations consistent with applicable law and the applicable Customer agreement.
        </p>
        <p className="text-slate-600">
          Globizhub may maintain a separate Sub-Processor Register or provide applicable sub-processor information to Customers through contractual or other appropriate channels.
        </p>
      </section>

      {/* 12. Data Security and Protection Safeguards */}
      <section className="space-y-3 pt-4 border-t border-slate-200">
        <h2 className="text-xl font-bold text-[#0B1120]">12. Data Security and Protection Safeguards</h2>
        <p className="text-slate-600">
          Globizhub implements reasonable technical and organisational safeguards appropriate to the nature of information processed through the Platform, consistent with applicable Indian law including the DPDP framework.
        </p>

        <div className="space-y-2 pt-2">
          <h3 className="text-base font-bold text-[#0B1120]">12.1 Access Controls</h3>
          <p className="text-slate-600">Platform access safeguards include:</p>
          <ul className="list-disc pl-5 text-slate-600 space-y-1">
            <li>Role-based access control (RBAC) restricting access to authorised Permitted Users;</li>
            <li>Least-privilege access principles limiting access to information to that necessary for each role;</li>
            <li>Multi-factor authentication where implemented;</li>
            <li>Privileged access management for administrative personnel;</li>
            <li>Session management and automatic session controls; and</li>
            <li>Administrative access restrictions and audit logging.</li>
          </ul>
        </div>

        <div className="space-y-2 pt-2">
          <h3 className="text-base font-bold text-[#0B1120]">12.2 Data Protection</h3>
          <p className="text-slate-600">Data protection safeguards include:</p>
          <ul className="list-disc pl-5 text-slate-600 space-y-1">
            <li>Encryption of data in transit using industry-standard TLS/HTTPS protocols;</li>
            <li>Encryption or equivalent protection of stored information where appropriate;</li>
            <li>Secure cryptographic hashing of passwords using appropriate mechanisms;</li>
            <li>Secure key management practices; and</li>
            <li>Logical Customer tenancy isolation designed to separate Customer environments.</li>
          </ul>
        </div>

        <div className="space-y-2 pt-2">
          <h3 className="text-base font-bold text-[#0B1120]">12.3 Infrastructure Security</h3>
          <p className="text-slate-600">Infrastructure safeguards include:</p>
          <ul className="list-disc pl-5 text-slate-600 space-y-1">
            <li>Network segmentation and firewall controls;</li>
            <li>Secure cloud infrastructure hosted with reputable third-party cloud service providers;</li>
            <li>Backup and disaster-recovery controls;</li>
            <li>System redundancy and resilience measures; and</li>
            <li>Security monitoring and logging.</li>
          </ul>
        </div>

        <div className="space-y-2 pt-2">
          <h3 className="text-base font-bold text-[#0B1120]">12.4 Application Security</h3>
          <p className="text-slate-600">Application security measures include:</p>
          <ul className="list-disc pl-5 text-slate-600 space-y-1">
            <li>Vulnerability management and regular security assessments;</li>
            <li>Secure software development practices;</li>
            <li>Dependency and patch management;</li>
            <li>Security testing and review; and</li>
            <li>Application and activity logging.</li>
          </ul>
        </div>

        <div className="space-y-2 pt-2">
          <h3 className="text-base font-bold text-[#0B1120]">12.5 Operational Security</h3>
          <p className="text-slate-600">Operational security measures include:</p>
          <ul className="list-disc pl-5 text-slate-600 space-y-1">
            <li>Access reviews and periodic permission audits;</li>
            <li>Employee and contractor confidentiality obligations;</li>
            <li>Incident detection and response procedures;</li>
            <li>Vendor and sub-processor security assessment; and</li>
            <li>Controls governing third-party service providers.</li>
          </ul>
        </div>

        <div className="space-y-2 pt-2">
          <h3 className="text-base font-bold text-[#0B1120]">12.6 Security Limitations</h3>
          <p className="text-slate-600">
            No electronic transmission, storage system, or processing environment can be guaranteed to be completely secure. Globizhub cannot guarantee absolute protection against every possible cyberattack, unauthorised access, data loss, system failure, or security incident. Customers are responsible for maintaining the security of their own devices, networks, credentials, and access controls.
          </p>
        </div>
      </section>

      {/* 13. Customer Tenancy and Access Control */}
      <section className="space-y-3 pt-4 border-t border-slate-200">
        <h2 className="text-xl font-bold text-[#0B1120]">13. Customer Tenancy and Access Control</h2>
        <p className="text-slate-600">
          Patholab.cloud is designed to maintain logical separation between Customer environments. Subject to authorised access rights:
        </p>
        <ul className="list-disc pl-5 text-slate-600 space-y-1">
          <li>One laboratory&rsquo;s users should not be permitted to access another laboratory&rsquo;s clinical records;</li>
          <li>Customer administrators control permitted user access within their organisation;</li>
          <li>Role-based permissions may restrict access to specific functions;</li>
          <li>Administrative access by Globizhub personnel is restricted to authorised personnel; and</li>
          <li>Access may be logged for security, operational, audit, and troubleshooting purposes.</li>
        </ul>
        <p className="text-slate-600">
          Customers are responsible for maintaining the confidentiality of their account credentials and for promptly disabling access for personnel who no longer require access.
        </p>
      </section>

      {/* 14. Audit Logs and Activity Records */}
      <section className="space-y-3 pt-4 border-t border-slate-200">
        <h2 className="text-xl font-bold text-[#0B1120]">14. Audit Logs and Activity Records</h2>
        <p className="text-slate-600">
          Patholab.cloud may maintain audit and activity logs relating to system and user activity. These logs support security, traceability, quality management, and operational requirements, including those relevant to NABL and NABH accreditation.
        </p>
        <p className="text-slate-600">Depending on the functionality used, logs may record events such as:</p>
        <ul className="list-disc pl-5 text-slate-600 space-y-1">
          <li>User login, logout, and authentication events;</li>
          <li>Creation of patient records;</li>
          <li>Modification of patient or clinical records;</li>
          <li>Access to clinical records;</li>
          <li>Changes to test results or diagnostic information;</li>
          <li>Validation or authorisation of results;</li>
          <li>Report generation, release, and distribution;</li>
          <li>Export or download activity;</li>
          <li>Changes to user permissions and access levels;</li>
          <li>Administrative actions; and</li>
          <li>Security events.</li>
        </ul>
        <p className="text-slate-600">
          Audit logs may be retained for security, troubleshooting, operational, compliance, dispute-resolution, and legitimate record-keeping purposes. Customers remain responsible for determining the appropriate use of audit information within their organisation.
        </p>
      </section>

      {/* 15. Communications, SMS, Email and Notifications */}
      <section className="space-y-3 pt-4 border-t border-slate-200">
        <h2 className="text-xl font-bold text-[#0B1120]">15. Communications, SMS, Email and Notifications</h2>
        <p className="text-slate-600">
          Patholab.cloud may use third-party communication service providers to send communications to patients, doctors, and laboratory personnel. Such communications may include:
        </p>
        <ul className="list-disc pl-5 text-slate-600 space-y-1">
          <li>OTPs and account verification messages;</li>
          <li>Password-reset and security messages;</li>
          <li>Billing notifications and invoice alerts;</li>
          <li>System notifications and operational alerts;</li>
          <li>Appointment or booking notifications where enabled;</li>
          <li>Report-availability notifications (e.g., &ldquo;Your report is ready&rdquo;); and</li>
          <li>Other Customer-configured communications.</li>
        </ul>
        <p className="text-slate-600">
          Where third-party communication providers (including SMS, email, or messaging services) are used, relevant communication metadata and information necessary to deliver the message may be processed by those providers.
        </p>
        <p className="text-slate-600">
          The complete content of diagnostic reports is not transmitted through SMS or third-party messaging services unless this is specifically enabled and disclosed to the Customer.
        </p>
        <p className="text-slate-600">
          Customers are responsible for configuring patient communications appropriately and ensuring that the communication method selected is suitable for the intended information and complies with applicable law.
        </p>
      </section>

      {/* 16. Patient and Doctor/Referrer Access */}
      <section className="space-y-3 pt-4 border-t border-slate-200">
        <h2 className="text-xl font-bold text-[#0B1120]">16. Patient and Doctor/Referrer Access</h2>
        <p className="text-slate-600">Where patient or doctor/referrer portals are enabled, the following principles apply:</p>
        <ul className="list-disc pl-5 text-slate-600 space-y-1">
          <li>Access is provided according to the Customer&rsquo;s configured permissions and authorisations;</li>
          <li>The Customer determines who is authorised to access patient information through the Platform;</li>
          <li>Globizhub provides the technical functionality to enforce such access, but does not independently determine the clinical entitlement of a patient, doctor, or referrer to receive a particular record;</li>
          <li>Authentication may involve OTPs, passwords, or other mechanisms supported by the Platform;</li>
          <li>Access events may be logged; and</li>
          <li>Report availability and notification functionality may be enabled by the Customer.</li>
        </ul>
        <p className="text-slate-600">
          Where a doctor or referrer is granted access to patient reports, such access is authorised by the subscribing laboratory or clinic as the Data Fiduciary, not independently by Globizhub. Patients seeking access to their own records should ordinarily contact the laboratory that collected the information.
        </p>
      </section>

      {/* 17. Data Retention */}
      <section className="space-y-3 pt-4 border-t border-slate-200">
        <h2 className="text-xl font-bold text-[#0B1120]">17. Data Retention</h2>
        <p className="text-slate-600">
          Globizhub retains information for periods reasonably necessary for the purposes for which it is processed and for applicable contractual, legal, security, accounting, audit, dispute-resolution, and operational requirements.
        </p>

        <div className="space-y-2 pt-2">
          <h3 className="text-base font-bold text-[#0B1120]">17.1 Account and Business Records</h3>
          <p className="text-slate-600">
            Account, billing, transaction, and business records may be retained for the duration of the Customer relationship and thereafter for a reasonable period required for applicable legal, tax, accounting, audit, security, dispute-resolution, and legitimate business purposes.
          </p>
        </div>

        <div className="space-y-2 pt-2">
          <h3 className="text-base font-bold text-[#0B1120]">17.2 Clinical Records</h3>
          <p className="text-slate-600">
            Patient and diagnostic information processed on behalf of a Customer may be retained for the duration of the Customer&rsquo;s active service and for such additional period as may be required by Customer instructions, contractual requirements, applicable law, healthcare or laboratory record-keeping requirements, accreditation requirements, dispute resolution, security requirements, or other legitimate and applicable requirements.
          </p>
          <p className="text-slate-600">
            The Customer, as the Data Fiduciary for patient information, is generally responsible for determining appropriate clinical record-retention requirements applicable to its operations.
          </p>
        </div>

        <div className="space-y-2 pt-2">
          <h3 className="text-base font-bold text-[#0B1120]">17.3 Retention Periods</h3>
          <p className="text-slate-600">
            Globizhub does not establish a single universal retention period for all categories of information because the appropriate retention period may depend on the purpose of processing, the category and sensitivity of the information, Customer instructions, and specific retention obligations applicable to the laboratory or clinic as Data Fiduciary.
          </p>
          <p className="text-slate-600">
            Globizhub maintains internal data-retention and deletion procedures governing its operational handling of information.
          </p>
        </div>
      </section>

      {/* 18. Data Export and Account Closure */}
      <section className="space-y-3 pt-4 border-t border-slate-200">
        <h2 className="text-xl font-bold text-[#0B1120]">18. Data Export and Account Closure</h2>
        <p className="text-slate-600">
          Following termination or cancellation of a Customer account, the Customer may request export of its Customer Data before applicable deletion processes commence, subject to the Customer&rsquo;s contractual terms.
        </p>
        <p className="text-slate-600">
          Upon termination, the Customer may request export of its Customer Data in a reasonably usable, machine-readable format supported by the Platform, subject to applicable contractual terms, technical limitations, and applicable law. Where supported, exported information may include:
        </p>
        <ul className="list-disc pl-5 text-slate-600 space-y-1">
          <li>Patient records and laboratory results;</li>
          <li>Diagnostic reports and attachments;</li>
          <li>Account records;</li>
          <li>Audit logs where technically available; and</li>
          <li>Other Customer Data maintained by the Platform.</li>
        </ul>
        <p className="text-slate-600">
          The availability, format, scope, timing, and applicable charges for data export may depend on the Customer&rsquo;s subscription, technical capabilities, contractual terms, and applicable law. Globizhub may charge a reasonable fee for unusually large, custom, or technically complex data-export requests.
        </p>
        <p className="text-slate-600">
          After the applicable export or transition period, Customer Data may be scheduled for secure deletion from active systems.
        </p>
      </section>

      {/* 19. Backups and Disaster Recovery */}
      <section className="space-y-3 pt-4 border-t border-slate-200">
        <h2 className="text-xl font-bold text-[#0B1120]">19. Backups and Disaster Recovery</h2>
        <p className="text-slate-600">For operational resilience, Patholab.cloud may maintain backups and disaster-recovery copies of information:</p>
        <ul className="list-disc pl-5 text-slate-600 space-y-1">
          <li>Backups are not individually deletable immediately following deletion of information from active systems; deletion from active systems does not guarantee immediate deletion from all backup copies.</li>
          <li>Backups are subject to appropriate access restrictions and are accessible only to authorised Globizhub personnel for legitimate operational purposes.</li>
          <li>Backup retention is governed by Globizhub&rsquo;s internal retention schedule.</li>
          <li>Expired backups are intended to be securely deleted, overwritten, or otherwise rendered inaccessible in accordance with applicable technical processes and Globizhub&rsquo;s internal retention practices.</li>
          <li>Where information is restored from backup following a system recovery event, applicable security and access controls continue to apply.</li>
        </ul>
      </section>

      {/* 20. Data Deletion and Erasure */}
      <section className="space-y-3 pt-4 border-t border-slate-200">
        <h2 className="text-xl font-bold text-[#0B1120]">20. Data Deletion and Erasure</h2>
        <p className="text-slate-600">
          Where personal data is no longer required for the purpose for which it was processed and no legal, contractual, security, dispute-resolution, or other applicable requirement requires continued retention, Globizhub may delete or otherwise securely dispose of such information.
        </p>
        <p className="text-slate-600">
          Requests concerning patient information for which the Customer is the Data Fiduciary should ordinarily be directed to the relevant laboratory or healthcare organisation. Where Globizhub acts as Data Processor, Globizhub will provide reasonable assistance to the Customer in responding to lawful deletion or erasure requests, subject to applicable law and technical and contractual requirements.
        </p>
      </section>

      {/* 21. Data Minimisation and Storage Limitation */}
      <section className="space-y-3 pt-4 border-t border-slate-200">
        <h2 className="text-xl font-bold text-[#0B1120]">21. Data Minimisation and Storage Limitation</h2>
        <p className="text-slate-600">
          Globizhub seeks to process only information reasonably necessary for the applicable purposes of the Platform and related services. Customers should avoid entering unnecessary personal information into the Platform.
        </p>
        <p className="text-slate-600">
          Retention periods may vary according to purpose, category of information, Customer instructions, contractual requirements, applicable law, healthcare requirements, security requirements, and operational requirements.
        </p>
      </section>

      {/* 22. Data Breach and Security Incident Response */}
      <section className="space-y-3 pt-4 border-t border-slate-200">
        <h2 className="text-xl font-bold text-[#0B1120]">22. Data Breach and Security Incident Response</h2>
        <p className="text-slate-600">
          Globizhub maintains procedures designed to detect, investigate, assess, contain, and respond to suspected or actual security incidents. A security incident may include unauthorised access, disclosure, acquisition, sharing, use, alteration, destruction, loss, or loss of access to personal data.
        </p>

        <div className="space-y-2 pt-2">
          <h3 className="text-base font-bold text-[#0B1120]">22.1 Where Globizhub is Data Processor</h3>
          <p className="text-slate-600">
            Where an incident involving Customer Data (for which the Customer is the Data Fiduciary) is identified, Globizhub will, subject to applicable law and the relevant contractual arrangement:
          </p>
          <ul className="list-disc pl-5 text-slate-600 space-y-1">
            <li>Investigate the incident and take reasonable containment and remediation measures;</li>
            <li>Assess the information and Customers potentially affected;</li>
            <li>Notify affected Customers within the applicable contractual and legal framework and without undue delay;</li>
            <li>Provide reasonably available information required for the Customer&rsquo;s own incident response; and</li>
            <li>Cooperate with reasonable incident-response activities.</li>
          </ul>
          <p className="text-slate-600">
            Where the Customer is the Data Fiduciary, the Customer remains solely responsible for fulfilling its own statutory notification and communication obligations applicable to Data Principals and to the Data Protection Board of India or other competent authority under applicable law, including any requirements under the DPDP Rules 2025.
          </p>
        </div>

        <div className="space-y-2 pt-2">
          <h3 className="text-base font-bold text-[#0B1120]">22.2 Where Globizhub is Data Fiduciary</h3>
          <p className="text-slate-600">
            Where Globizhub itself is the Data Fiduciary for particular information (such as account, billing, or administrative information), Globizhub will fulfil the obligations applicable to it under Indian law, including applicable notification requirements under the DPDP framework as and when the relevant provisions come into force.
          </p>
        </div>

        <div className="space-y-2 pt-2">
          <h3 className="text-base font-bold text-[#0B1120]">22.3 Incident Response Framework</h3>
          <p className="text-slate-600">
            Globizhub&rsquo;s incident response procedures include mechanisms for detection, containment, investigation, assessment, notification, and post-incident review in accordance with applicable law, including applicable requirements under the DPDP framework as and when the relevant provisions come into force.
          </p>
        </div>
      </section>

      {/* 23. Cross-Border Hosting and Processing */}
      <section className="space-y-3 pt-4 border-t border-slate-200">
        <h2 className="text-xl font-bold text-[#0B1120]">23. Cross-Border Hosting and Processing</h2>
        <p className="text-slate-600">
          Patholab.cloud is operated by an Indian company. Depending on the infrastructure and service configuration, certain hosting, technology, support, or service providers engaged by Globizhub may be located or operate outside India, and may accordingly process information from locations outside India.
        </p>
        <p className="text-slate-600">
          In such cases, Globizhub will apply reasonable contractual, technical, and organisational measures with the relevant third-party providers as part of its vendor management and subprocessor oversight, consistent with its obligations as a Data Processor or Data Fiduciary under applicable Indian law.
        </p>
        <p className="text-slate-600">
          The Customer, as the Data Fiduciary for patient and clinical information it submits to the Platform, is solely responsible for:
        </p>
        <ul className="list-disc pl-5 text-slate-600 space-y-1">
          <li>Assessing whether cross-border processing of such information is permitted under applicable law;</li>
          <li>Ensuring that any cross-border transfer of the Customer&rsquo;s data complies with applicable Indian data-protection laws and any sector-specific requirements applicable to the Customer&rsquo;s operations; and</li>
          <li>Obtaining any necessary consent, authorisation, or approvals required under applicable law before submitting information to the Platform where cross-border processing may occur.</li>
        </ul>
        <p className="text-slate-600">
          Globizhub does not represent that its infrastructure arrangements satisfy the specific cross-border compliance requirements applicable to any particular Customer or category of information. Customers are encouraged to seek independent legal advice regarding their own cross-border data-transfer obligations.
        </p>
      </section>

      {/* 24. Data Principal Rights */}
      <section className="space-y-3 pt-4 border-t border-slate-200">
        <h2 className="text-xl font-bold text-[#0B1120]">24. Data Principal Rights</h2>
        <p className="text-slate-600">
          Subject to applicable Indian law, a Data Principal may have rights in relation to personal data processed through the Platform:
        </p>

        <div className="space-y-2 pt-2">
          <h3 className="text-base font-bold text-[#0B1120]">24.1 Right to Notice</h3>
          <p className="text-slate-600">
            A Data Principal has the right to receive appropriate notice regarding the personal information collected and the purposes for which it is processed, at or before the point at which consent is sought, where required by applicable law.
          </p>
        </div>

        <div className="space-y-2 pt-2">
          <h3 className="text-base font-bold text-[#0B1120]">24.2 Right of Access</h3>
          <p className="text-slate-600">
            Subject to applicable law, a Data Principal has the right to obtain confirmation regarding whether personal information relating to that individual is being processed, and to receive a summary of such personal information and the processing activities carried out in relation to it.
          </p>
        </div>

        <div className="space-y-2 pt-2">
          <h3 className="text-base font-bold text-[#0B1120]">24.3 Right to Correction and Erasure</h3>
          <p className="text-slate-600">
            A Data Principal has the right to request correction of inaccurate or incomplete personal information. Where applicable, a Data Principal may also request erasure of personal information that is no longer necessary for the purpose for which it was collected.
          </p>
        </div>

        <div className="space-y-2 pt-2">
          <h3 className="text-base font-bold text-[#0B1120]">24.4 Right to Withdraw Consent</h3>
          <p className="text-slate-600">
            Where processing of personal data is based on the consent of the Data Principal, the Data Principal has the right to withdraw such consent at any time, subject to applicable law. Withdrawal of consent does not affect the lawfulness of processing carried out before the withdrawal.
          </p>
        </div>

        <div className="space-y-2 pt-2">
          <h3 className="text-base font-bold text-[#0B1120]">24.5 Right to Grievance Redressal</h3>
          <p className="text-slate-600">
            A Data Principal may raise a grievance concerning the processing of personal information using the contact details provided in Section 37 of this Policy (Privacy and Grievance Redressal).
          </p>
        </div>

        <div className="space-y-2 pt-2">
          <h3 className="text-base font-bold text-[#0B1120]">24.6 Right of Nomination</h3>
          <p className="text-slate-600">
            Where provided for under applicable Indian law, a Data Principal may nominate another individual to exercise applicable rights on that Data Principal&rsquo;s behalf in the event of the Data Principal&rsquo;s death or incapacity.
          </p>
        </div>

        <div className="space-y-2 pt-2">
          <h3 className="text-base font-bold text-[#0B1120]">24.7 Right to Complain to the Relevant Authority</h3>
          <p className="text-slate-600">
            A Data Principal may lodge a complaint with the Data Protection Board of India or another competent authority designated under applicable Indian data protection law, in accordance with its applicable procedures, where the Data Principal considers that the processing of personal information is not in compliance with applicable law.
          </p>
        </div>

        <div className="space-y-2 pt-2">
          <h3 className="text-base font-bold text-[#0B1120]">24.8 Requests Concerning Patient Information</h3>
          <p className="text-slate-600">
            Where the subscribing laboratory or clinic is the Data Fiduciary for patient and clinical information, patients should ordinarily direct requests concerning such information to the laboratory or clinic that collected the information, as that organisation is responsible for responding to Data Principal rights requests in its capacity as Data Fiduciary.
          </p>
          <p className="text-slate-600">
            The Customer may, where appropriate, instruct Globizhub to assist with implementing a deletion, correction, or access request in relation to data held on the Platform, and Globizhub will provide reasonable assistance to the Customer in doing so, subject to applicable law and contractual requirements.
          </p>
          <p className="text-slate-600">
            Requests may be declined, in whole or in part, where retention or processing is required by applicable law, contractual obligations, the establishment or defence of legal claims, legitimate security requirements, or patient safety considerations, to the extent permitted by applicable law.
          </p>
        </div>
      </section>

      {/* 25. Customer Responsibilities */}
      <section className="space-y-3 pt-4 border-t border-slate-200">
        <h2 className="text-xl font-bold text-[#0B1120]">25. Customer Responsibilities</h2>
        <p className="text-slate-600">Customers using Patholab.cloud are responsible for:</p>
        <ul className="list-disc pl-5 text-slate-600 space-y-1">
          <li>Ensuring that personal data is collected and processed lawfully;</li>
          <li>Providing appropriate notices to Data Principals;</li>
          <li>Obtaining consent or establishing another lawful basis for processing where required;</li>
          <li>Maintaining appropriate records and documentation;</li>
          <li>Ensuring the accuracy of information entered into the Platform;</li>
          <li>Ensuring appropriate patient identification procedures;</li>
          <li>Configuring appropriate user roles and permissions;</li>
          <li>Preventing unauthorised account sharing;</li>
          <li>Disabling access when personnel leave or no longer require access;</li>
          <li>Determining appropriate retention requirements for patient information;</li>
          <li>Responding to patient/Data Principal requests relating to information for which the Customer is the Data Fiduciary;</li>
          <li>Determining authorised disclosure of clinical information;</li>
          <li>Configuring patient and doctor access appropriately;</li>
          <li>Using communication functionality appropriately; and</li>
          <li>Complying with healthcare, laboratory, accreditation, contractual, and other obligations applicable to the Customer.</li>
        </ul>
      </section>

      {/* 26. Correction and Editing of Information */}
      <section className="space-y-3 pt-4 border-t border-slate-200">
        <h2 className="text-xl font-bold text-[#0B1120]">26. Correction and Editing of Information</h2>
        <p className="text-slate-600">
          The Platform may allow authorised Customers and Permitted Users to review, update, or correct certain information. Customers are responsible for ensuring that information entered or modified through the Platform is accurate, complete, current, and appropriately authorised.
        </p>
        <p className="text-slate-600">
          Where enabled by the subscribing laboratory, authorised Permitted Users may also be able to edit certain patient or clinical records through the Platform&rsquo;s editing functionality. Customers and their Permitted Users are solely responsible for ensuring that information entered, edited, or corrected through the Platform is true, accurate, current, complete, and submitted with appropriate authorisation.
        </p>
        <p className="text-slate-600">
          The Customer shall restrict editing functionality to Permitted Users who are duly authorised to make such changes. Where clinical information has already been reported, validated, authorised, or released, additional controls may apply to ensure that modifications are traceable and appropriately documented.
        </p>
        <p className="text-slate-600">
          Where a Permitted User or any other person misuses the editing functionality &mdash; including by entering false, misleading, unauthorised, fraudulent, or otherwise improper information &mdash; Globizhub, its officers, employees, contractors, developers, and engineers shall not be liable for any loss, damage, regulatory consequence, or third-party claim arising from or connected with such misuse, to the fullest extent permitted by applicable law.
        </p>
        <p className="text-slate-600">
          Nothing in this section limits or excludes any liability that cannot lawfully be limited or excluded. Globizhub reserves the right to monitor, audit, restrict, disable, or suspend access to editing functionality where misuse, unauthorised access, fraud, security concerns, or other improper activity is suspected, consistent with the Terms and Conditions and applicable law.
        </p>
      </section>

      {/* 27. Artificial Intelligence and Automated Processing */}
      <section className="space-y-3 pt-4 border-t border-slate-200">
        <h2 className="text-xl font-bold text-[#0B1120]">27. Artificial Intelligence and Automated Processing</h2>
        <p className="text-slate-600">
          Patholab.cloud may, now or in the future, include functionality involving automation, machine learning, artificial intelligence, decision-support, OCR, report assistance, analytics, or other automated processing. Where such functionality processes personal or clinical information:
        </p>
        <ul className="list-disc pl-5 text-slate-600 space-y-1">
          <li>Processing will be limited to the applicable purpose;</li>
          <li>Appropriate technical and organisational safeguards will be applied;</li>
          <li>Customer instructions and applicable contractual requirements will be respected;</li>
          <li>Information will not be used for unrelated advertising; and</li>
          <li>Identifiable patient information will not be used to train general-purpose AI models unless such processing is specifically introduced, appropriately disclosed, and supported by the applicable legal and contractual framework.</li>
        </ul>
        <p className="text-slate-600">
          Where AI functionality produces suggestions, summaries, classifications, calculations, or other outputs relating to laboratory information, such functionality is intended to assist authorised users and should not be treated as a substitute for appropriate professional clinical or laboratory judgment unless expressly designed and approved for that purpose.
        </p>
      </section>

      {/* 28. Aggregated and De-Identified Information */}
      <section className="space-y-3 pt-4 border-t border-slate-200">
        <h2 className="text-xl font-bold text-[#0B1120]">28. Aggregated and De-Identified Information</h2>
        <p className="text-slate-600">
          Subject to applicable law and contractual commitments, Globizhub may generate or use information that has been appropriately aggregated or de-identified so that it is not reasonably used to identify an individual. Such information may be used for purposes including:
        </p>
        <ul className="list-disc pl-5 text-slate-600 space-y-1">
          <li>Service improvement and system performance analysis;</li>
          <li>Security analysis and product development;</li>
          <li>Operational analytics and benchmarking;</li>
          <li>Statistical analysis; and</li>
          <li>Research or development activities where legally permitted.</li>
        </ul>
        <p className="text-slate-600">
          Globizhub will not represent information as anonymous or de-identified where it continues to contain information that reasonably permits identification of an individual. Identifiable patient information remains subject to the full protections applicable to personal data under this Policy and applicable law.
        </p>
      </section>

      {/* 29. Payments */}
      <section className="space-y-3 pt-4 border-t border-slate-200">
        <h2 className="text-xl font-bold text-[#0B1120]">29. Payments</h2>
        <p className="text-slate-600">
          Patholab.cloud may use third-party payment providers for subscription and other payment transactions. Payment providers may independently process payment information according to their own terms, privacy policies, security controls, and applicable law.
        </p>
        <p className="text-slate-600">
          Globizhub does not intentionally store raw card numbers, CVV information, or bank account passwords on its own servers.
        </p>
      </section>

      {/* 30. Cookies and Similar Technologies */}
      <section className="space-y-3 pt-4 border-t border-slate-200">
        <h2 className="text-xl font-bold text-[#0B1120]">30. Cookies and Similar Technologies</h2>
        <p className="text-slate-600">
          Patholab.cloud may use cookies, local storage, session identifiers, or similar technologies where necessary to:
        </p>
        <ul className="list-disc pl-5 text-slate-600 space-y-1">
          <li>Maintain secure sessions;</li>
          <li>Authenticate users;</li>
          <li>Remember applicable preferences;</li>
          <li>Maintain platform functionality;</li>
          <li>Protect against unauthorised access;</li>
          <li>Monitor technical performance; and</li>
          <li>Diagnose application problems.</li>
        </ul>
        <p className="text-slate-600">
          The Platform does not use patient clinical information for behavioural advertising.
        </p>
      </section>

      {/* 31. Children and Minors */}
      <section className="space-y-3 pt-4 border-t border-slate-200">
        <h2 className="text-xl font-bold text-[#0B1120]">31. Children and Minors</h2>
        <p className="text-slate-600">
          The Platform is primarily intended for laboratories, diagnostic centres, hospitals, clinics, healthcare organisations, and their authorised personnel. It is not intended for independent account registration by children.
        </p>
        <p className="text-slate-600">
          Patient information relating to minors may nevertheless be processed where a laboratory, hospital, clinic, or healthcare organisation provides healthcare services to a minor. Where required by applicable Indian law, the relevant Data Fiduciary is responsible for obtaining the necessary consent, authorisation, notice, or other lawful basis for processing information relating to children.
        </p>
        <p className="text-slate-600">
          For purposes of the DPDP Act, a child is an individual who has not completed eighteen years of age.
        </p>
      </section>

      {/* 32. ABDM and ABHA */}
      <section className="space-y-3 pt-4 border-t border-slate-200">
        <h2 className="text-xl font-bold text-[#0B1120]">32. ABDM and ABHA</h2>
        <p className="text-slate-600">
          Where Patholab.cloud integrates with India&rsquo;s Ayushman Bharat Digital Mission (&ldquo;ABDM&rdquo;), ABHA, or related digital health infrastructure, the relevant integration and data sharing will be implemented in accordance with applicable ABDM/National Health Authority requirements, technical specifications, consent-management mechanisms, contractual arrangements, and applicable Indian law.
        </p>
        <p className="text-slate-600">
          ABDM or ABHA functionality may involve additional notices, consent mechanisms, authentication, authorisation, or data-sharing requirements depending on the specific integration. The availability of ABDM/ABHA functionality does not by itself mean that all Customers or all Platform features are integrated with or compliant with every ABDM requirement.
        </p>
      </section>

      {/* 33. NABL and NABH */}
      <section className="space-y-3 pt-4 border-t border-slate-200">
        <h2 className="text-xl font-bold text-[#0B1120]">33. NABL and NABH</h2>
        <p className="text-slate-600">
          Patholab.cloud may provide features that assist laboratories and healthcare organisations with operational activities relevant to accreditation and quality management, including:
        </p>
        <ul className="list-disc pl-5 text-slate-600 space-y-1">
          <li>Audit logging;</li>
          <li>Access control;</li>
          <li>Record management;</li>
          <li>Report traceability;</li>
          <li>User permissions;</li>
          <li>Operational documentation; and</li>
          <li>Electronic record management.</li>
        </ul>
        <p className="text-slate-600">
          Use of Patholab.cloud does not by itself guarantee, confer, or establish NABL or NABH accreditation. The subscribing laboratory or healthcare organisation remains solely responsible for obtaining and maintaining any accreditation, certification, licence, registration, or regulatory approval applicable to its operations.
        </p>
      </section>

      {/* 34. Legal and Regulatory Framework */}
      <section className="space-y-3 pt-4 border-t border-slate-200">
        <h2 className="text-xl font-bold text-[#0B1120]">34. Legal and Regulatory Framework</h2>
        <p className="text-slate-600">
          This Privacy Policy is principally structured for India and is intended to operate consistently with applicable Indian data protection and technology laws, including the Digital Personal Data Protection Act, 2023 and the Digital Personal Data Protection Rules, 2025, to the extent applicable and in force for the relevant processing activity.
        </p>
        <p className="text-slate-600">
          The DPDP Act and Rules have been notified with phased commencement provisions. Accordingly, references in this Policy to requirements under the DPDP framework shall be interpreted according to the provisions applicable and in force from time to time.
        </p>
        <p className="text-slate-600">
          Globizhub does not represent that Patholab.cloud has achieved full compliance with every DPDP provision solely by publishing this Policy. Nothing in this Policy should be interpreted as a representation that Globizhub or Patholab.cloud has automatically achieved compliance with every healthcare, laboratory, cybersecurity, accreditation, or other regulatory requirement. Customers remain responsible for obligations applicable specifically to their healthcare or laboratory operations.
        </p>
      </section>

      {/* 35. Non-Indian Privacy Frameworks */}
      <section className="space-y-3 pt-4 border-t border-slate-200">
        <h2 className="text-xl font-bold text-[#0B1120]">35. Non-Indian Privacy Frameworks</h2>
        <p className="text-slate-600">
          This Privacy Policy is currently intended for India-focused operations. It does not represent compliance with privacy or healthcare frameworks applicable exclusively or primarily outside India, including HIPAA, GDPR, UK GDPR, CCPA/CPRA, or other foreign privacy frameworks.
        </p>
        <p className="text-slate-600">
          Where Patholab.cloud is subsequently offered in other jurisdictions, Globizhub may publish country-specific privacy notices, contractual provisions, Data Processing Agreements, or other documentation appropriate to those jurisdictions.
        </p>
      </section>

      {/* 36. Changes to This Privacy Policy */}
      <section className="space-y-3 pt-4 border-t border-slate-200">
        <h2 className="text-xl font-bold text-[#0B1120]">36. Changes to This Privacy Policy</h2>
        <p className="text-slate-600">
          Globizhub may update this Privacy Policy from time to time to reflect changes in the Platform, new features, changes in data-processing practices, changes in security measures, legal or regulatory developments, changes in service providers, changes in business operations, or other operational requirements.
        </p>
        <p className="text-slate-600">
          Where appropriate, material changes may be communicated through the Platform, mobile application, website, email, account notifications, or other official communication channels.
        </p>
        <p className="text-slate-600">
          The revised Policy will include an updated &ldquo;Last Updated&rdquo; date and becomes effective from the date specified in the updated version, unless otherwise stated.
        </p>
      </section>

      {/* 37. Privacy and Grievance Redressal */}
      <section className="space-y-3 pt-4 border-t border-slate-200">
        <h2 className="text-xl font-bold text-[#0B1120]">37. Privacy and Grievance Redressal</h2>
        <p className="text-slate-600">
          For privacy-related questions, requests, or grievances concerning information processed by Globizhub, individuals and Customers may contact the Globizhub Privacy &amp; Grievance Officer using the contact details set out in Section 38 below.
        </p>
        <p className="text-slate-600">
          Where the matter concerns patient information for which a subscribing laboratory or healthcare organisation is the Data Fiduciary, Globizhub may refer the matter to the relevant Customer or require the Customer&rsquo;s instructions before taking action, subject to applicable law.
        </p>
        <p className="text-slate-600">When submitting a grievance, the requester should provide, where reasonably available:</p>
        <ul className="list-disc pl-5 text-slate-600 space-y-1">
          <li>Name and relevant contact details;</li>
          <li>Laboratory or organisation name, where applicable;</li>
          <li>Description of the request or grievance;</li>
          <li>Relevant account information, where applicable; and</li>
          <li>Supporting information reasonably necessary to investigate the matter.</li>
        </ul>
        <p className="text-slate-600">
          Globizhub will acknowledge and address applicable grievances in accordance with applicable law and its internal procedures.
        </p>
      </section>

      {/* 38. Contact Details */}
      <section className="space-y-4 pt-4 border-t border-slate-200">
        <h2 className="text-xl font-bold text-[#0B1120]">38. Contact Details</h2>
        <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-6 space-y-3 text-sm">
          <div>
            <span className="font-semibold text-slate-900 block">Company:</span>
            <span className="text-slate-700">Globizhub India Private Limited</span>
          </div>
          <div>
            <span className="font-semibold text-slate-900 block">Product:</span>
            <span className="text-slate-700">Patholab.cloud</span>
          </div>
          <div>
            <span className="font-semibold text-slate-900 block">Registered Office:</span>
            <span className="text-slate-700 leading-relaxed">
              No. 594/4/2, First Floor, Opposite to BDS Nagar, RK Nagar 2, Kothanur Main Road, Bangalore, Karnataka &ndash; 560077, India
            </span>
          </div>
          <div>
            <span className="font-semibold text-slate-900 block">Product / Development Office:</span>
            <span className="text-slate-700 leading-relaxed">
              1st Floor, No. 59, Nayanpur Road, GMC Ward Number 44, Ganeshguri, Guwahati, Assam &ndash; 781006, India
            </span>
          </div>
          <div className="pt-2 border-t border-slate-200 grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <span className="font-semibold text-slate-900 block">Product Website:</span>
              <a href="https://www.patholab.cloud" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:underline">
                www.patholab.cloud
              </a>
            </div>
            <div>
              <span className="font-semibold text-slate-900 block">Corporate Website:</span>
              <a href="https://www.globizhub.com" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:underline">
                www.globizhub.com
              </a>
            </div>
            <div>
              <span className="font-semibold text-slate-900 block">Privacy / Support Email:</span>
              <a href="mailto:support@patholab.cloud" className="text-emerald-600 hover:underline">
                support@patholab.cloud
              </a>
            </div>
            <div>
              <span className="font-semibold text-slate-900 block">Support Phone:</span>
              <a href="tel:+918402010207" className="text-emerald-600 font-semibold hover:underline">
                +91 84020 10207
              </a>
            </div>
          </div>
        </div>
      </section>
    </LegalPageLayout>
  );
}
