import React from 'react';
import LegalPageLayout from '../../components/LegalPageLayout';
import Link from 'next/link';

export const metadata = {
  title: 'Terms & Conditions | Patholab.cloud',
  description: 'Official Terms and Conditions and SaaS License Agreement for Patholab.cloud by Globizhub India Private Limited.',
};

export default function TermsPage() {
  return (
    <LegalPageLayout title="Terms & Conditions" lastUpdated="November 2026">
      {/* 1. Acceptance of Terms */}
      <section className="space-y-3">
        <h2 className="text-xl font-bold text-[#0B1120]">1. Acceptance of Terms</h2>
        <p className="text-slate-600">
          Your access to or use of the Patholab.cloud mobile application, the associated web application, and related services (collectively, the &ldquo;Platform&rdquo;) on iOS or Android constitutes acceptance of these Terms and forms a legally binding agreement between You and Globizhub. If You are accepting these Terms on behalf of a laboratory, clinic, or other organization, You represent that You have the authority to bind that organization.
        </p>
      </section>

      {/* 2. About Patholab.cloud */}
      <section className="space-y-3 pt-4 border-t border-slate-200">
        <h2 className="text-xl font-bold text-[#0B1120]">2. About Patholab.cloud</h2>
        <p className="text-slate-600">
          Patholab.cloud is a cloud-based laboratory management and diagnostic workflow platform. It is owned and operated by Globizhub India Private Limited, which provides the Platform to laboratories, hospitals, diagnostic centres, clinics, and other medical care providers under these Terms. References in these Terms to &ldquo;the Platform&rdquo; or &ldquo;Patholab.cloud&rdquo; refer to the software, mobile applications, web application, APIs, and related services made available by Globizhub, and references to &ldquo;Globizhub&rdquo; refer to Globizhub India Private Limited as the company operating the Platform.
        </p>
      </section>

      {/* 3. Definitions */}
      <section className="space-y-3 pt-4 border-t border-slate-200">
        <h2 className="text-xl font-bold text-[#0B1120]">3. Definitions</h2>
        <ul className="list-disc pl-5 text-slate-600 space-y-2">
          <li>
            <strong>&ldquo;Account&rdquo;</strong> means the account created for Licensee to access and use the Platform. An Account is specific to Licensee and must not be shared with other entities, though Licensee may permit its Permitted Users to use it.
          </li>
          <li>
            <strong>&ldquo;Billable Event&rdquo;</strong> means any transaction, activity, report generation, registration, API usage, or other chargeable usage event for which Fees apply under the Pay-As-You-Go pricing model.
          </li>
          <li>
            <strong>&ldquo;Fees&rdquo;</strong> means the amounts payable by Licensee for use of the Platform, calculated on a Pay-As-You-Go basis by reference to Billable Events, unless a separate written enterprise Order establishes a different billing arrangement.
          </li>
          <li>
            <strong>&ldquo;Licensee&rdquo;</strong> means the laboratory, clinic, hospital, diagnostic centre, or other medical care provider entity that registers for or uses the Platform, and is referred to interchangeably in these Terms as &ldquo;You,&rdquo; &ldquo;Your,&rdquo; or &ldquo;Customer.&rdquo;
          </li>
          <li>
            <strong>&ldquo;Order&rdquo;</strong> means an optional, separately negotiated written agreement between the Parties establishing a subscription, minimum-commitment, or other billing arrangement that differs from the default Pay-As-You-Go model, together with any related configuration or training services and applicable Fees.
          </li>
          <li>
            <strong>&ldquo;Permitted User(s)&rdquo;</strong> means an employee or authorized personnel of Licensee who accesses the Platform under Licensee&rsquo;s Subscription.
          </li>
          <li>
            <strong>&ldquo;Services&rdquo;</strong> means the internet-accessible, cloud-hosted services made available by Globizhub through a Subscription.
          </li>
          <li>
            <strong>&ldquo;Subscription&rdquo;</strong> means the right granted to Licensee to access and use the Platform and related Services, billed on a Pay-As-You-Go basis by default, or on such other basis as established by an applicable Order.
          </li>
        </ul>
      </section>

      {/* 4. Eligibility and Authorized Use */}
      <section className="space-y-3 pt-4 border-t border-slate-200">
        <h2 className="text-xl font-bold text-[#0B1120]">4. Eligibility and Authorized Use</h2>
        <p className="text-slate-600">
          You must be of legal age and have the legal capacity to enter into a binding contract in Your jurisdiction to use the Platform. The Platform is intended for use by laboratories, clinics, and medical care providers (and their authorized personnel) for lawful laboratory management and reporting purposes only. You may use the Platform only for this intended commercial purpose; general public or personal, non-professional use is not the intended use of this Platform.
        </p>
      </section>

      {/* 5. Accounts and Account Security */}
      <section className="space-y-3 pt-4 border-t border-slate-200">
        <h2 className="text-xl font-bold text-[#0B1120]">5. Accounts and Account Security</h2>
        <ul className="list-disc pl-5 text-slate-600 space-y-1.5">
          <li>Licensee is responsible for managing and keeping its Account information accurate, complete, and up to date, through an admin appointed by Licensee.</li>
          <li>Each Permitted User is responsible for maintaining the confidentiality of their own login credentials and password.</li>
          <li>Licensee must notify Globizhub immediately of any unauthorized use of any password, user ID, or any known or suspected breach of security, and must use reasonable efforts to stop any such unauthorized use.</li>
          <li>You must not provide false identity information to gain access to the Platform or use the Services.</li>
          <li>Licensee is solely responsible for the acts and omissions of its Permitted Users in connection with the Platform. Globizhub is not liable for any loss of data or functionality caused directly or indirectly by Permitted Users.</li>
        </ul>
      </section>

      {/* 6. Laboratory Responsibilities */}
      <section className="space-y-3 pt-4 border-t border-slate-200">
        <h2 className="text-xl font-bold text-[#0B1120]">6. Laboratory Responsibilities</h2>
        <ul className="list-disc pl-5 text-slate-600 space-y-1.5">
          <li>Licensee shall comply with all applicable laws in connection with its use of the Platform, including laws relating to data privacy and the transmission of technical or personal data.</li>
          <li>Globizhub exercises no control over the content of information transmitted by Licensee or its Permitted Users through the Platform.</li>
          <li>Licensee shall not upload, post, or distribute any content protected by copyright, privacy rights, or other intellectual property rights without first obtaining the necessary permission.</li>
          <li>Licensee shall ensure all Permitted Users comply with these Terms at all times.</li>
        </ul>
      </section>

      {/* 7. Patient Information and User-Entered Information */}
      <section className="space-y-3 pt-4 border-t border-slate-200">
        <h2 className="text-xl font-bold text-[#0B1120]">7. Patient Information and User-Entered Information</h2>
        <p className="text-slate-600">
          All data, patient information, and other content that Licensee or its Permitted Users upload, enter, or generate on the Platform (&ldquo;Licensee Content&rdquo;) remains the responsibility of Licensee. Globizhub does not control, verify, or take responsibility for the accuracy of information entered by Licensee or its Permitted Users. Licensee is solely responsible for ensuring it has the necessary consents and legal basis to upload and process any patient or personal information through the Platform, and for complying with applicable healthcare, data protection, and privacy laws in doing so. Handling of personal data collected through the Platform is further described in the{' '}
          <Link href="/privacy-policy" className="text-emerald-600 font-semibold hover:underline">
            Patholab.cloud Privacy Policy
          </Link>.
        </p>
      </section>

      {/* 8. Editing and Correcting Information; Limitation of Liability for Misuse */}
      <section className="space-y-3 pt-4 border-t border-slate-200">
        <h2 className="text-xl font-bold text-[#0B1120]">8. Editing and Correcting Information; Limitation of Liability for Misuse</h2>
        <p className="text-slate-600">
          The Platform may allow Licensee and its Permitted Users to review, update, or correct information held in their Account and, where applicable, patient or clinical records, through the Platform&rsquo;s editing functionality. Licensee is responsible for ensuring that any information entered, edited, or corrected through the Platform is true, accurate, current, and submitted with proper authorization, and for restricting access to editing functionality to Permitted Users who are duly authorized to make such changes.
        </p>
        <p className="text-slate-600">
          Where a user misuses this editing functionality including by entering false, misleading, unauthorized, or otherwise improper information Globizhub, its officers, employees, developers, and engineers shall not be liable for any loss, damage, regulatory consequence, or third-party claim arising from or connected with such misuse, to the fullest extent permitted by applicable law. Nothing in this clause limits or excludes any liability that cannot lawfully be limited or excluded. Globizhub reserves the right to monitor, audit, restrict, or suspend access to editing functionality where misuse is suspected, consistent with Globizhub&rsquo;s suspension rights under the Suspension and Termination section of these Terms.
        </p>
      </section>

      {/* 9. Laboratory Reports and Results */}
      <section className="space-y-3 pt-4 border-t border-slate-200">
        <h2 className="text-xl font-bold text-[#0B1120]">9. Laboratory Reports and Results</h2>
        <p className="text-slate-600">
          Any medical documents, medical reports, and medical certificates generated by Licensee and uploaded to or produced through the Platform are owned by Licensee, and Globizhub claims no ownership rights over them. Reports and outputs generated through the Platform are produced based solely on the data uploaded by Licensee. Licensee is responsible for reviewing, evaluating, and verifying such information before it is uploaded, relied upon, or issued. Globizhub does not provide medical, legal, or compliance advice, and does not guarantee the accuracy of any report generated from data supplied by Licensee.
        </p>
      </section>

      {/* 10. Customer Data Ownership */}
      <section className="space-y-3 pt-4 border-t border-slate-200">
        <h2 className="text-xl font-bold text-[#0B1120]">10. Customer Data Ownership</h2>
        <p className="text-slate-600">
          All Licensee Content, patient information, laboratory records, configuration settings, and other data uploaded to, stored within, or generated through the Platform (collectively, &ldquo;Customer Data&rdquo;) remains the exclusive property of Licensee or the party legally entitled to it. Nothing in these Terms transfers ownership of Customer Data to Globizhub. Globizhub receives only the limited rights necessary to host, process, secure, transmit, back up, and display Customer Data solely for the purpose of providing the Platform and Services.
        </p>
        <p className="text-slate-600">
          Globizhub shall process and handle Customer Data in accordance with its applicable Data Privacy Policy and other applicable data protection and privacy requirements. Customer Data shall be retained, processed, and handled only for as long as reasonably necessary to provide the Platform and Services, comply with applicable legal and regulatory obligations, maintain security and operational records, resolve disputes, or otherwise fulfill legitimate business and legal purposes. Where Customer Data is no longer required for these purposes, Globizhub shall handle its deletion, return, anonymization, or continued retention in accordance with its applicable Data Privacy Policy, contractual obligations, and applicable law. The applicable Data Privacy Policy, as amended from time to time in accordance with applicable law and these Terms, forms part of the framework governing Globizhub&rsquo;s processing and handling of Customer Data.
        </p>
      </section>

      {/* 11. Clinical Responsibility and Medical Disclaimer */}
      <section className="space-y-3 pt-4 border-t border-slate-200">
        <h2 className="text-xl font-bold text-[#0B1120]">11. Clinical Responsibility and Medical Disclaimer</h2>
        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5 text-amber-950 text-sm leading-relaxed space-y-2">
          <p className="font-bold uppercase tracking-wider text-xs text-amber-800">Operational Software Platform Notice</p>
          <p>
            Patholab.cloud is an operational software platform. It does not practice medicine, pathology, or radiology, and does not provide medical advice, diagnosis, or treatment recommendations. All clinical judgments, diagnoses, interpretations, pathology or radiology opinions, treatment decisions, and patient care remain the sole responsibility of the qualified healthcare professionals designated by Licensee.
          </p>
          <p>
            Where the Platform generates alerts, calculations, or AI-assisted or automated outputs, such outputs are provided for operational and informational assistance only, must be reviewed and validated by qualified personnel before reliance, and do not constitute a medical opinion. Failure of any alert or automated feature does not transfer clinical responsibility to Globizhub.
          </p>
        </div>
      </section>

      {/* 12. Software License and Restrictions */}
      <section className="space-y-3 pt-4 border-t border-slate-200">
        <h2 className="text-xl font-bold text-[#0B1120]">12. Software License and Restrictions</h2>
        <p className="text-slate-600">
          Subject to compliance with these Terms and payment of applicable Fees, Globizhub grants Licensee a non-exclusive, non-transferable, revocable, non-sub-licensable, limited license to use the Platform and Services for so long as Licensee&rsquo;s Subscription remains active, provided Licensee ensures each Permitted User abides by these Terms.
        </p>
      </section>

      {/* 13. Prohibited Use */}
      <section className="space-y-3 pt-4 border-t border-slate-200">
        <h2 className="text-xl font-bold text-[#0B1120]">13. Prohibited Use</h2>
        <p className="text-slate-600">You must not, directly or indirectly:</p>
        <ul className="list-disc pl-5 text-slate-600 space-y-1">
          <li>Copy, modify, adapt, translate, reverse engineer, decompile, disassemble, or otherwise alter the Platform;</li>
          <li>Use the Subscription to provide time-sharing, benchmarking, or similar services to third parties, or allow any third party to access or benefit from the Platform&rsquo;s functionality;</li>
          <li>Use the Subscription in violation of applicable export control laws;</li>
          <li>Use the Subscription for any purpose other than its intended laboratory-management purpose;</li>
          <li>Allow use of the Subscription by anyone other than Permitted Users;</li>
          <li>Use the Subscription to develop a competing or similar product;</li>
          <li>Use any component, add-on, file, module, or content of the Platform separately from the Platform;</li>
          <li>Use the Platform with unsupported software or hardware;</li>
          <li>Impersonate Globizhub, its employees, or any other person or entity;</li>
          <li>Introduce malware, viruses, or other technologically harmful material;</li>
          <li>Use any robot, spider, or automated means to access the Platform for an unlawful purpose;</li>
          <li>Access or attempt to access data or files You are not authorized to access;</li>
          <li>Do anything that could disable, overburden, or impair the Platform or interfere with other users.</li>
        </ul>
        <p className="text-slate-600 font-semibold">
          All rights not expressly and unequivocally granted to Licensee are reserved by Globizhub.
        </p>
      </section>

      {/* 14. Additional Platform Features */}
      <section className="space-y-3 pt-4 border-t border-slate-200">
        <h2 className="text-xl font-bold text-[#0B1120]">14. Additional Platform Features</h2>

        <div className="space-y-1 pt-1">
          <h3 className="text-base font-bold text-[#0B1120]">14.1 API Access</h3>
          <p className="text-slate-600">
            Where Globizhub provides API access to the Platform, API credentials are confidential and must be securely protected by Licensee. API usage must comply with any technical documentation published by Globizhub. Excessive, abusive, or unauthorized API usage may be restricted, suspended, or terminated. Licensee remains responsible for any software it develops using the Platform&rsquo;s APIs.
          </p>
        </div>

        <div className="space-y-1 pt-2">
          <h3 className="text-base font-bold text-[#0B1120]">14.2 Third-Party Integrations</h3>
          <p className="text-slate-600">
            The Platform may integrate with third-party services, including payment gateways, messaging or notification providers, laboratory analyzers, and cloud infrastructure providers. Globizhub does not control these third-party services and is not responsible for their availability, functionality, security, or performance. Use of any third-party service remains subject to that third party&rsquo;s own terms and policies.
          </p>
        </div>

        <div className="space-y-1 pt-2">
          <h3 className="text-base font-bold text-[#0B1120]">14.3 AI-Assisted Features</h3>
          <p className="text-slate-600">
            Where the Platform includes AI-powered, machine-assisted, or automated decision-support features, such features are intended to support operational efficiency and are not a substitute for professional judgment. AI-generated outputs must be reviewed and validated by qualified personnel before reliance, and do not constitute medical advice, diagnosis, or treatment. Licensee remains solely responsible for all decisions made using AI-assisted outputs.
          </p>
        </div>

        <div className="space-y-1 pt-2">
          <h3 className="text-base font-bold text-[#0B1120]">14.4 Beta, Trial, and Promotional Features</h3>
          <p className="text-slate-600">
            Globizhub may from time to time offer trial access, beta features, or promotional credits. Unless expressly stated otherwise, such features are provided &ldquo;as available,&rdquo; may be modified or withdrawn without prior notice, and any promotional credits have no cash value and are non-transferable.
          </p>
        </div>
      </section>

      {/* 15. Intellectual Property Rights */}
      <section className="space-y-3 pt-4 border-t border-slate-200">
        <h2 className="text-xl font-bold text-[#0B1120]">15. Intellectual Property Rights</h2>
        <p className="text-slate-600">
          All rights, title, and interest in and to the Platform, its Services, and associated branding &mdash; including copyrights, trademarks, service marks, and patents &mdash; are the sole and exclusive property of Globizhub or its licensors. Nothing in these Terms transfers any right, title, or interest in the Platform to Licensee, except the limited license expressly granted herein. The Globizhub and Patholab.cloud names, logos, and related marks may not be used without prior written permission.
        </p>
        <p className="text-slate-600">
          If Licensee provides feedback, suggestions, or recommendations regarding the Platform (&ldquo;Feedback&rdquo;), Licensee assigns to Globizhub all right, title, and interest in that Feedback, including the exclusive right to develop it further.
        </p>
        <p className="text-slate-600">
          Ownership of medical reports and all other Customer Data is addressed separately in the Laboratory Reports and Results and Customer Data Ownership sections above.
        </p>
      </section>

      {/* 16. Confidentiality */}
      <section className="space-y-3 pt-4 border-t border-slate-200">
        <h2 className="text-xl font-bold text-[#0B1120]">16. Confidentiality</h2>
        <p className="text-slate-600">
          &ldquo;Confidential Information&rdquo; means non-public information disclosed by one Party to the other, including Platform, financial, business, technical, and marketing information, business plans, methods, processes, know-how, ideas, and trade secrets. It does not include information that is public, independently known or developed without breach of confidentiality, or disclosed under judicial or governmental order.
        </p>
        <p className="text-slate-600">
          Each Party shall keep the other&rsquo;s Confidential Information strictly confidential, disclosing it only to personnel on a need-to-know basis, and shall use at least a reasonable degree of care to protect it. Upon request, the receiving Party shall return or destroy all Confidential Information received. These confidentiality obligations survive for five (5) years after termination or expiry of these Terms. A breach of these confidentiality obligations may cause irreparable injury, entitling the disclosing Party to seek injunctive relief in addition to other legal remedies.
        </p>
      </section>

      {/* 17. Fees and Subscriptions */}
      <section className="space-y-3 pt-4 border-t border-slate-200">
        <h2 className="text-xl font-bold text-[#0B1120]">17. Fees and Subscriptions</h2>
        <p className="text-slate-600">
          Patholab.cloud operates on a Pay-As-You-Go basis by default: Licensee is charged only for actual Billable Events, including report generation, registrations, API usage, messaging services, optional integrations, and other chargeable services identified on the Platform. Patholab.cloud does not offer recurring monthly or annual subscription plans by default; a subscription, minimum-commitment, or other alternative billing arrangement applies only where established through a separate written enterprise Order.
        </p>
        <p className="text-slate-600">
          Fees are exclusive of taxes, which are borne by Licensee. Globizhub may revise pricing from time to time; revised pricing applies only to future Billable Events after reasonable notice through the Platform, email, or other official communication. Payment, billing dispute, refund, and cancellation terms are further set out in the{' '}
          <Link href="/refund-policy" className="text-emerald-600 font-semibold hover:underline">
            Patholab.cloud Refund and Cancellation Policy
          </Link>, which forms part of these Terms.
        </p>
      </section>

      {/* 18. Service Availability */}
      <section className="space-y-3 pt-4 border-t border-slate-200">
        <h2 className="text-xl font-bold text-[#0B1120]">18. Service Availability</h2>
        <p className="text-slate-600">
          Globizhub will make reasonable efforts to keep the Platform available, but does not guarantee uninterrupted or error-free operation. Globizhub reserves the right to change, suspend, or shut down all or part of the Platform, or any service or material provided through it, at its discretion, and is not liable if the Platform is unavailable for any reason or period. Globizhub does not control the accuracy or transfer of data over communications facilities, including the internet, and the Platform may be subject to inherent delays and limitations of such facilities.
        </p>
      </section>

      {/* 19. Suspension and Termination */}
      <section className="space-y-3 pt-4 border-t border-slate-200">
        <h2 className="text-xl font-bold text-[#0B1120]">19. Suspension and Termination</h2>
        <ul className="list-disc pl-5 text-slate-600 space-y-2">
          <li>
            <strong>Term:</strong> Licensee&rsquo;s Subscription remains active for as long as Licensee continues to use the Platform on a Pay-As-You-Go basis, subject to these Terms. Where a separate written enterprise Order establishes a fixed Subscription Term or Renewal Term, that Order governs the duration and renewal of Licensee&rsquo;s Subscription in place of this default.
          </li>
          <li>
            <strong>Termination for convenience:</strong> Either Party may terminate these Terms without cause by giving thirty (30) days&rsquo; prior written notice to the other Party.
          </li>
          <li>
            <strong>Termination for cause:</strong> Either Party may terminate if the other Party materially breaches these Terms and fails to remedy the breach within sixty (60) days of written notice, or immediately upon the other Party&rsquo;s insolvency, bankruptcy, liquidation, or similar event.
          </li>
          <li>
            <strong>Globizhub&rsquo;s right to suspend:</strong> Globizhub may monitor use of the Platform, take appropriate legal action (including referral to law enforcement) for illegal or unauthorized use, and suspend or terminate a Licensee&rsquo;s or Permitted User&rsquo;s access to all or part of the Platform for violation of these Terms.
          </li>
          <li>
            <strong>Consequences of termination:</strong> On termination or expiry, Licensee&rsquo;s right to use the Platform ceases immediately, and Licensee must return, delete, or destroy any materials provided by Globizhub, at Globizhub&rsquo;s discretion. Any Fees due prior to termination remain payable within seven (7) days of invoicing. Subject to payment of all outstanding Fees, Licensee may request export of its Customer Data in a supported electronic format prior to termination taking effect; Globizhub may charge a reasonable fee for large-scale or custom export requests.
          </li>
        </ul>
      </section>

      {/* 20. Disclaimers */}
      <section className="space-y-3 pt-4 border-t border-slate-200">
        <h2 className="text-xl font-bold text-[#0B1120]">20. Disclaimers</h2>
        <div className="bg-slate-100 border border-slate-300/80 rounded-2xl p-5 text-slate-700 text-xs sm:text-sm leading-relaxed space-y-3 font-mono">
          <p>
            THE PLATFORM AND SUBSCRIPTION ARE PROVIDED &ldquo;AS IS&rdquo; AND &ldquo;AS AVAILABLE,&rdquo; WITHOUT WARRANTIES OF ANY KIND, WHETHER EXPRESS, STATUTORY, OR IMPLIED, INCLUDING WARRANTIES OF MERCHANTABILITY, SATISFACTORY QUALITY, OR FITNESS FOR A PARTICULAR PURPOSE. THE PLATFORM MAY CONTAIN DEFECTS, BUGS, OR ERRORS, AND GLOBIZHUB DOES NOT WARRANT THAT THE PLATFORM WILL MEET LICENSEE&rsquo;S REQUIREMENTS OR OPERATE UNINTERRUPTED OR ERROR-FREE.
          </p>
          <p>
            GLOBIZHUB IS NOT RESPONSIBLE FOR THE ACTIONS, CONTENT, INFORMATION, OR DATA OF THIRD PARTIES. GLOBIZHUB DOES NOT PROVIDE LEGAL, COMPLIANCE, OR MEDICAL ADVICE. LICENSEE IS SOLELY RESPONSIBLE FOR DETERMINING AND COMPLYING WITH ITS OBLIGATIONS UNDER APPLICABLE LAWS AND SHOULD CONSULT QUALIFIED COUNSEL AS NEEDED. ANY REPORT OR OUTPUT GENERATED BY THE PLATFORM REFLECTS ONLY THE DATA UPLOADED BY LICENSEE, WHO IS RESPONSIBLE FOR REVIEWING, EVALUATING, AND VERIFYING SUCH DATA BEFORE UPLOAD OR RELIANCE.
          </p>
        </div>
      </section>

      {/* 21. Limitation of Liability */}
      <section className="space-y-3 pt-4 border-t border-slate-200">
        <h2 className="text-xl font-bold text-[#0B1120]">21. Limitation of Liability</h2>
        <div className="bg-slate-100 border border-slate-300/80 rounded-2xl p-5 text-slate-700 text-xs sm:text-sm leading-relaxed space-y-2 font-mono">
          <p>
            NEITHER PARTY SHALL BE LIABLE TO THE OTHER FOR ANY INDIRECT, CONSEQUENTIAL, INCIDENTAL, EXEMPLARY, OR SPECIAL DAMAGES, OR LOSS OF PROFIT OR BUSINESS, ARISING IN CONNECTION WITH THESE TERMS, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
          </p>
          <p>
            GLOBIZHUB&rsquo;S MAXIMUM AGGREGATE LIABILITY SHALL BE LIMITED TO THE FEES RECEIVED FROM LICENSEE IN THE THREE (3) MONTHS IMMEDIATELY PRECEDING THE EVENT GIVING RISE TO THE CLAIM. THIS LIMITATION APPLIES NOTWITHSTANDING THE FAILURE OF ESSENTIAL PURPOSE OF ANY LIMITED WARRANTY OR REMEDY HEREIN.
          </p>
        </div>
      </section>

      {/* 22. Indemnification */}
      <section className="space-y-3 pt-4 border-t border-slate-200">
        <h2 className="text-xl font-bold text-[#0B1120]">22. Indemnification</h2>
        <p className="text-slate-600">
          Licensee shall indemnify, defend, and hold harmless Globizhub against any costs or damages arising out of or connected with:
        </p>
        <ul className="list-disc pl-5 text-slate-600 space-y-1">
          <li>Licensee&rsquo;s breach of applicable laws or regulations;</li>
          <li>Licensee&rsquo;s use of the Platform other than as permitted under these Terms;</li>
          <li>Acts or omissions of Permitted Users;</li>
          <li>A third-party claim of infringement or misappropriation arising from Licensee&rsquo;s combination or use of the Subscription with third-party software, products, or services, or from Licensee Content infringing any patent, copyright, trademark, or trade secret; or</li>
          <li>Misuse of the Platform, or breach of these Terms, by Permitted Users.</li>
        </ul>
      </section>

      {/* 23. Force Majeure */}
      <section className="space-y-3 pt-4 border-t border-slate-200">
        <h2 className="text-xl font-bold text-[#0B1120]">23. Force Majeure</h2>
        <p className="text-slate-600">
          Neither Party shall be liable for non-performance to the extent and for the period that performance is prevented by strike, fire, flood, earthquake, governmental act or restriction, or any other cause beyond the reasonable control of, and not caused by the negligence of, the non-performing Party.
        </p>
      </section>

      {/* 24. Changes to the Terms */}
      <section className="space-y-3 pt-4 border-t border-slate-200">
        <h2 className="text-xl font-bold text-[#0B1120]">24. Changes to the Terms</h2>
        <p className="text-slate-600">
          Globizhub may update these Terms from time to time to reflect changes to the Platform, legal requirements, or business practices. Material changes will be notified through the app or by posting an updated version with a revised &ldquo;Last updated&rdquo; date. Continued use of the Platform after changes take effect constitutes acceptance of the revised Terms.
        </p>
      </section>

      {/* 25. Governing Law and Jurisdiction */}
      <section className="space-y-3 pt-4 border-t border-slate-200">
        <h2 className="text-xl font-bold text-[#0B1120]">25. Governing Law and Jurisdiction</h2>
        <p className="text-slate-600">
          These Terms shall be governed by and construed in accordance with the laws of India. The courts of Bangalore, Karnataka shall have exclusive jurisdiction over any dispute arising under these Terms.
        </p>
      </section>

      {/* 26. Dispute Resolution */}
      <section className="space-y-3 pt-4 border-t border-slate-200">
        <h2 className="text-xl font-bold text-[#0B1120]">26. Dispute Resolution</h2>
        <p className="text-slate-600">
          The Parties shall first attempt in good faith to resolve any dispute arising under these Terms through mutual discussion and negotiation. If a dispute is not resolved amicably within thirty (30) days, either Party may pursue legal proceedings before the courts identified in the Governing Law and Jurisdiction section above. Nothing in this clause prevents either Party from seeking urgent interim or injunctive relief from a court of competent jurisdiction at any time.
        </p>
      </section>

      {/* 27. General */}
      <section className="space-y-3 pt-4 border-t border-slate-200">
        <h2 className="text-xl font-bold text-[#0B1120]">27. General</h2>
        <ul className="list-disc pl-5 text-slate-600 space-y-2">
          <li>
            <strong>Severability:</strong> If any provision is found invalid or unenforceable, the remaining provisions remain in full force.
          </li>
          <li>
            <strong>Relationship of the Parties:</strong> The Parties are independent contractors; nothing in these Terms creates a partnership, agency, or employment relationship.
          </li>
          <li>
            <strong>Assignment:</strong> Licensee may not assign these Terms. Globizhub may assign these Terms in connection with a merger, acquisition, sale of assets, or to an affiliate, and may subcontract its duties.
          </li>
          <li>
            <strong>Waiver:</strong> Failure to enforce any right or remedy is not a waiver of that or any other right or remedy.
          </li>
          <li>
            <strong>Use of Name and Logo:</strong> Licensee grants Globizhub permission to reference Licensee&rsquo;s name and logo in marketing materials, case studies, and public communications regarding these Terms.
          </li>
          <li>
            <strong>Geographic Restrictions:</strong> The Platform is intended for use in India. Globizhub makes no representation that the Platform is appropriate or available for use in other locations, and access from jurisdictions where such use is unlawful is prohibited.
          </li>
          <li>
            <strong>Entire Agreement:</strong> These Terms, together with the Privacy Policy, the Refund and Cancellation Policy, and any applicable Order, constitute the entire agreement between the Parties regarding the Platform and supersede all prior understandings.
          </li>
          <li>
            <strong>Survival:</strong> Provisions relating to Payment Obligations, Confidentiality, Intellectual Property, Customer Data Ownership, Data Retention and Deletion, Limitation of Liability, Indemnification, Governing Law, and Dispute Resolution, together with any other provision that by its nature is intended to survive, shall survive termination or expiry of these Terms.
          </li>
        </ul>
      </section>

      {/* 28. Contact Us */}
      <section className="space-y-4 pt-4 border-t border-slate-200">
        <h2 className="text-xl font-bold text-[#0B1120]">28. Contact Us</h2>
        <p className="text-slate-600">If You have questions about these Terms, please contact:</p>
        <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-6 space-y-3 text-sm">
          <div>
            <span className="font-semibold text-slate-900 block">Company:</span>
            <span className="text-slate-700">Globizhub India Private Limited</span>
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
              <span className="font-semibold text-slate-900 block">Company Phone:</span>
              <a href="tel:+918029736966" className="text-emerald-600 hover:underline">
                +91 8029736966
              </a>
            </div>
            <div>
              <span className="font-semibold text-slate-900 block">Patholab.cloud Priority Support:</span>
              <a href="tel:+918402010207" className="text-emerald-600 font-semibold hover:underline">
                +91 84020 10207
              </a>
            </div>
            <div>
              <span className="font-semibold text-slate-900 block">Email Support:</span>
              <a href="mailto:support@patholab.cloud" className="text-emerald-600 hover:underline">
                support@patholab.cloud
              </a>
            </div>
            <div>
              <span className="font-semibold text-slate-900 block">Product Website:</span>
              <a href="https://www.patholab.cloud" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:underline">
                www.patholab.cloud
              </a>
            </div>
          </div>
        </div>
      </section>
    </LegalPageLayout>
  );
}
