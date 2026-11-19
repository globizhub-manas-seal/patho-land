import React from 'react';
import LegalPageLayout from '../../components/LegalPageLayout';
import Link from 'next/link';

export const metadata = {
  title: 'Refund & Cancellation Policy | Patholab.cloud',
  description: 'Official Refund, Cancellation, and Billing Dispute Policy for Patholab.cloud by Globizhub India Private Limited.',
};

export default function RefundPage() {
  return (
    <LegalPageLayout title="Refund & Cancellation Policy" lastUpdated="November 2026">
      {/* 1. Introduction */}
      <section className="space-y-3">
        <h2 className="text-xl font-bold text-[#0B1120]">1. Introduction</h2>
        <p className="text-slate-600">
          This Refund and Cancellation Policy (the &ldquo;Policy&rdquo;) governs payments made for the use of Patholab.cloud, a cloud-based healthcare software and laboratory management platform owned and operated by Globizhub India Private Limited (&ldquo;Globizhub&rdquo;, &ldquo;Company&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;).
        </p>
        <p className="text-slate-600">
          This Policy forms part of and shall be read together with the{' '}
          <Link href="/terms-and-conditions" className="text-emerald-600 font-semibold hover:underline">
            Patholab.cloud Terms and Conditions
          </Link>,{' '}
          <Link href="/privacy-policy" className="text-emerald-600 font-semibold hover:underline">
            Privacy Policy
          </Link>, any applicable enterprise Order, and any other applicable legal documentation governing the Licensee&rsquo;s use of the Platform.
        </p>
        <p className="text-slate-600">
          Capitalized terms used but not defined in this Policy shall have the meanings assigned to them in the applicable Terms and Conditions or Order.
        </p>
        <p className="text-slate-600">
          By accessing or using the Platform, making a payment, purchasing usage credits, or otherwise engaging Globizhub for Platform-related services, the Customer acknowledges that it has read, understood, and agreed to this Policy, to the extent permitted by applicable law.
        </p>
      </section>

      {/* 2. Business Model and Billing Structure */}
      <section className="space-y-3 pt-4 border-t border-slate-200">
        <h2 className="text-xl font-bold text-[#0B1120]">2. Business Model and Billing Structure</h2>

        <div className="space-y-1.5 pt-1">
          <h3 className="text-base font-bold text-[#0B1120]">2.1 Pay-As-You-Go Model</h3>
          <p className="text-slate-600">
            Patholab.cloud operates on a Pay-As-You-Go (&ldquo;PAYG&rdquo;) pricing model. Customers are charged only for actual billable usage or services consumed. Patholab.cloud does not offer recurring monthly or annual subscription plans by default.
          </p>
        </div>

        <div className="space-y-1.5 pt-2">
          <h3 className="text-base font-bold text-[#0B1120]">2.2 Alternative Billing Arrangements</h3>
          <p className="text-slate-600">
            An alternative billing arrangement, including a subscription, minimum-commitment, or other recurring structure, applies only where specifically agreed between the Customer and Globizhub through a separate written enterprise Order. Where such an Order exists, the applicable fees, billing cycle, Subscription Term, Renewal Term, and payment obligations shall be governed by that Order and the Patholab.cloud Terms and Conditions.
          </p>
        </div>

        <div className="space-y-1.5 pt-2">
          <h3 className="text-base font-bold text-[#0B1120]">2.3 Billable Services</h3>
          <p className="text-slate-600">Billable services may include, without limitation:</p>
          <ul className="list-disc pl-5 text-slate-600 space-y-1">
            <li>Report generation;</li>
            <li>Patient or registration transactions;</li>
            <li>API usage;</li>
            <li>SMS and notification services;</li>
            <li>WhatsApp notification services;</li>
            <li>Email services;</li>
            <li>Optional integrations;</li>
            <li>Laboratory analyzer integrations;</li>
            <li>Implementation services;</li>
            <li>Configuration services;</li>
            <li>Training and professional services;</li>
            <li>Custom development; and</li>
            <li>Any other chargeable service expressly identified in the applicable commercial arrangement.</li>
          </ul>
        </div>
      </section>

      {/* 3. Non-Refundable Payments */}
      <section className="space-y-3 pt-4 border-t border-slate-200">
        <h2 className="text-xl font-bold text-[#0B1120]">3. Non-Refundable Payments</h2>

        <div className="space-y-1.5 pt-1">
          <h3 className="text-base font-bold text-[#0B1120]">3.1 General Rule</h3>
          <p className="text-slate-600">
            Except where a refund is required under applicable law or expressly approved by Globizhub in accordance with this Policy, payments made to Globizhub for Platform access, usage, Services, or professional services are final and non-refundable.
          </p>
        </div>

        <div className="space-y-1.5 pt-2">
          <h3 className="text-base font-bold text-[#0B1120]">3.2 Non-Refundable Charges</h3>
          <p className="text-slate-600">This includes, without limitation:</p>
          <ul className="list-disc pl-5 text-slate-600 space-y-1">
            <li>Usage charges and report generation charges;</li>
            <li>Registration and API usage charges;</li>
            <li>SMS, WhatsApp, and email notification charges;</li>
            <li>Cloud hosting charges;</li>
            <li>Implementation, software configuration, and data migration fees;</li>
            <li>Training, consultation, and custom development charges;</li>
            <li>White-label deployment fees and third-party integration charges;</li>
            <li>Professional services and technical support services;</li>
            <li>Premium feature activation fees and one-time setup charges; and</li>
            <li>Any other fees or charges expressly identified as non-refundable in the applicable commercial arrangement.</li>
          </ul>
          <p className="text-slate-600">
            Unused usage capacity, partially used Services, discontinued use of the Platform, failure to use purchased functionality, or Customer-initiated discontinuation of Services shall not, by itself, create an entitlement to a refund.
          </p>
          <p className="text-slate-600">
            Nothing in this Section excludes or limits any right to a refund that cannot lawfully be excluded or limited under applicable law.
          </p>
        </div>
      </section>

      {/* 4. Cancellation of Services */}
      <section className="space-y-3 pt-4 border-t border-slate-200">
        <h2 className="text-xl font-bold text-[#0B1120]">4. Cancellation of Services</h2>

        <div className="space-y-1.5 pt-1">
          <h3 className="text-base font-bold text-[#0B1120]">4.1 Cancellation</h3>
          <p className="text-slate-600">
            Customers may discontinue their use of the Platform at any time, subject to any applicable Order, notice requirements, and payment obligations. Cancellation or discontinuation of usage does not automatically terminate the Terms and Conditions, an applicable Order, or other contractual arrangement, unless the applicable agreement expressly provides otherwise.
          </p>
        </div>

        <div className="space-y-1.5 pt-2">
          <h3 className="text-base font-bold text-[#0B1120]">4.2 Outstanding Payment Obligations</h3>
          <p className="text-slate-600">The Customer remains responsible for:</p>
          <ul className="list-disc pl-5 text-slate-600 space-y-1">
            <li>All billable usage incurred prior to the effective date of cancellation;</li>
            <li>All outstanding invoices;</li>
            <li>Applicable taxes, duties, and governmental charges;</li>
            <li>Professional services already performed;</li>
            <li>Approved custom development or implementation work already undertaken; and</li>
            <li>Any other payment obligations accrued before termination or cancellation.</li>
          </ul>
          <p className="text-slate-600">
            Where an applicable Order requires advance notice for cancellation, the Customer must comply with that notice requirement.
          </p>
        </div>
      </section>

      {/* 5. Account Closure */}
      <section className="space-y-3 pt-4 border-t border-slate-200">
        <h2 className="text-xl font-bold text-[#0B1120]">5. Account Closure</h2>

        <div className="space-y-1.5 pt-1">
          <h3 className="text-base font-bold text-[#0B1120]">5.1 Account Closure Request</h3>
          <p className="text-slate-600">
            Customers wishing to permanently close their Patholab.cloud Account must submit a written account-closure request to Globizhub using the official contact details provided in this Policy.
          </p>
        </div>

        <div className="space-y-1.5 pt-2">
          <h3 className="text-base font-bold text-[#0B1120]">5.2 Pre-Closure Requirements</h3>
          <p className="text-slate-600">Before account closure, the Customer should ensure that:</p>
          <ul className="list-disc pl-5 text-slate-600 space-y-1">
            <li>All outstanding invoices and payment obligations have been settled;</li>
            <li>Pending billing disputes have been submitted in accordance with this Policy;</li>
            <li>Required business records, laboratory reports, and other Customer Data have been exported where appropriate; and</li>
            <li>Any required transition or data-export arrangements have been completed.</li>
          </ul>
        </div>

        <div className="space-y-1.5 pt-2">
          <h3 className="text-base font-bold text-[#0B1120]">5.3 Post-Closure Data Handling</h3>
          <p className="text-slate-600">
            Following closure, Customer Data shall be retained, archived, and deleted in accordance with the Patholab.cloud Privacy Policy, applicable Data Retention Policy, contractual obligations, and applicable legal or regulatory requirements. Account closure does not extinguish any payment obligation or liability that accrued before the effective date of closure.
          </p>
        </div>
      </section>

      {/* 6. Billing Disputes */}
      <section className="space-y-3 pt-4 border-t border-slate-200">
        <h2 className="text-xl font-bold text-[#0B1120]">6. Billing Disputes</h2>

        <div className="space-y-1.5 pt-1">
          <h3 className="text-base font-bold text-[#0B1120]">6.1 Notice of Dispute</h3>
          <p className="text-slate-600">
            If a Customer believes that an invoice contains an error, the Customer should notify Globizhub in writing within thirty (30) calendar days from the date of the relevant invoice.
          </p>
        </div>

        <div className="space-y-1.5 pt-2">
          <h3 className="text-base font-bold text-[#0B1120]">6.2 Required Information</h3>
          <p className="text-slate-600">The billing dispute should include, to the extent reasonably available:</p>
          <ul className="list-disc pl-5 text-slate-600 space-y-1">
            <li>Invoice number;</li>
            <li>Disputed amount;</li>
            <li>Specific reason for the dispute;</li>
            <li>Relevant transaction or usage information; and</li>
            <li>Supporting documentation or evidence.</li>
          </ul>
        </div>
      </section>

      {/* 7. Duplicate Payments */}
      <section className="space-y-3 pt-4 border-t border-slate-200">
        <h2 className="text-xl font-bold text-[#0B1120]">7. Duplicate Payments</h2>

        <div className="space-y-1.5 pt-1">
          <h3 className="text-base font-bold text-[#0B1120]">7.1 Duplicate Payment Notification</h3>
          <p className="text-slate-600">
            Where a Customer accidentally makes a duplicate payment as a result of a technical error, banking issue, payment gateway malfunction, or similar circumstance, the Customer should notify Globizhub promptly.
          </p>
        </div>

        <div className="space-y-1.5 pt-2">
          <h3 className="text-base font-bold text-[#0B1120]">7.2 Available Corrective Measures</h3>
          <p className="text-slate-600">
            Globizhub will investigate the transaction and, where a duplicate payment is verified, may, subject to applicable law and payment-provider procedures:
          </p>
          <ul className="list-disc pl-5 text-slate-600 space-y-1">
            <li>Reverse the duplicate transaction;</li>
            <li>Apply a credit adjustment against future amounts payable;</li>
            <li>Refund the verified duplicate amount using the original payment method, where reasonably practicable; or</li>
            <li>Adopt another commercially reasonable method for correcting the duplicate payment.</li>
          </ul>
          <p className="text-slate-600">
            Any refund or credit issued under this Section shall be limited to the verified duplicate amount.
          </p>
        </div>
      </section>

      {/* 8. Failed Transactions */}
      <section className="space-y-3 pt-4 border-t border-slate-200">
        <h2 className="text-xl font-bold text-[#0B1120]">8. Failed Transactions</h2>

        <div className="space-y-1.5 pt-1">
          <h3 className="text-base font-bold text-[#0B1120]">8.1 Customer Debited but Payment Not Received</h3>
          <p className="text-slate-600">
            Where a payment transaction fails but the Customer&rsquo;s financial institution, bank, card issuer, UPI provider, or other payment service provider indicates that the Customer&rsquo;s account has nevertheless been debited, the Customer should first contact the relevant financial institution or payment service provider.
          </p>
        </div>

        <div className="space-y-1.5 pt-2">
          <h3 className="text-base font-bold text-[#0B1120]">8.2 Payment Subsequently Confirmed</h3>
          <p className="text-slate-600">
            Where Globizhub subsequently receives confirmation that the payment has been successfully credited to Globizhub, the applicable Services, usage credits, or other purchased functionality will be activated or applied accordingly.
          </p>
        </div>

        <div className="space-y-1.5 pt-2">
          <h3 className="text-base font-bold text-[#0B1120]">8.3 Payment Not Received</h3>
          <p className="text-slate-600">
            If the payment has not been received by Globizhub, the matter may need to be resolved in coordination with the relevant payment service provider, bank, or financial institution. Globizhub shall not be responsible for delays attributable solely to banks, payment gateways, payment networks, financial institutions, or other third-party payment providers.
          </p>
        </div>
      </section>

      {/* 9. Service Interruptions */}
      <section className="space-y-3 pt-4 border-t border-slate-200">
        <h2 className="text-xl font-bold text-[#0B1120]">9. Service Interruptions</h2>

        <div className="space-y-1.5 pt-1">
          <h3 className="text-base font-bold text-[#0B1120]">9.1 Refund Position</h3>
          <p className="text-slate-600">
            Temporary interruptions, degradation, suspension, or unavailability of the Platform arising from scheduled maintenance, emergency maintenance, security measures, cloud infrastructure outages, telecommunications failures, internet failures, third-party service failures, force majeure events, or circumstances beyond Globizhub&rsquo;s reasonable control do not, by themselves, create an entitlement to a refund.
          </p>
        </div>

        <div className="space-y-1.5 pt-2">
          <h3 className="text-base font-bold text-[#0B1120]">9.2 Service Restoration</h3>
          <p className="text-slate-600">
            Globizhub will use commercially reasonable efforts to restore affected Services as promptly as reasonably practicable. Any service credits or other commercial remedies expressly provided under an applicable Order or service-level agreement shall be governed by that agreement.
          </p>
        </div>
      </section>

      {/* 10. Third-Party Services */}
      <section className="space-y-3 pt-4 border-t border-slate-200">
        <h2 className="text-xl font-bold text-[#0B1120]">10. Third-Party Services</h2>

        <div className="space-y-1.5 pt-1">
          <h3 className="text-base font-bold text-[#0B1120]">10.1 Third-Party Dependencies</h3>
          <p className="text-slate-600">
            Certain features or Services available through Patholab.cloud may rely upon third-party providers, including payment gateways, SMS providers, email providers, WhatsApp service providers, laboratory equipment and analyzer integrations, and cloud infrastructure providers.
          </p>
        </div>

        <div className="space-y-1.5 pt-2">
          <h3 className="text-base font-bold text-[#0B1120]">10.2 Third-Party Refunds</h3>
          <p className="text-slate-600">
            Charges paid to or incurred through third-party providers may be subject to that third party&rsquo;s own terms, conditions, and refund policies. Where Globizhub has no control over a third-party provider&rsquo;s refund decision, Globizhub shall not be responsible for refunds or credits that the third-party provider declines to issue, except to the extent otherwise required by applicable law or expressly agreed by Globizhub.
          </p>
        </div>
      </section>

      {/* 11. Changes to Pricing */}
      <section className="space-y-3 pt-4 border-t border-slate-200">
        <h2 className="text-xl font-bold text-[#0B1120]">11. Changes to Pricing</h2>

        <div className="space-y-1.5 pt-1">
          <h3 className="text-base font-bold text-[#0B1120]">11.1 Future Pricing</h3>
          <p className="text-slate-600">
            Globizhub reserves the right to revise pricing, usage charges, service fees, or other applicable fees from time to time. Revised pricing shall apply to future billable usage, Services, or transactions after the revised pricing becomes effective, subject to any notice requirements applicable under the relevant agreement or applicable law.
          </p>
        </div>

        <div className="space-y-1.5 pt-2">
          <h3 className="text-base font-bold text-[#0B1120]">11.2 No Retroactive Refund</h3>
          <p className="text-slate-600">
            Unless expressly stated otherwise, a pricing revision does not create an entitlement to a refund, credit, or adjustment in respect of previous transactions, completed Services, or usage already incurred.
          </p>
        </div>
      </section>

      {/* 12. Exceptional Circumstances */}
      <section className="space-y-3 pt-4 border-t border-slate-200">
        <h2 className="text-xl font-bold text-[#0B1120]">12. Exceptional Circumstances</h2>

        <div className="space-y-1.5 pt-1">
          <h3 className="text-base font-bold text-[#0B1120]">12.1 Circumstances Where an Adjustment May Be Considered</h3>
          <p className="text-slate-600">
            A refund, credit, reversal, or billing adjustment may be considered only in exceptional circumstances, including where:
          </p>
          <ul className="list-disc pl-5 text-slate-600 space-y-1">
            <li>A refund is required by applicable law;</li>
            <li>A duplicate payment has been verified;</li>
            <li>A billing error attributable solely to Globizhub has been confirmed;</li>
            <li>Globizhub has charged the Customer for a Service that Globizhub did not provide, where Globizhub determines that an adjustment is appropriate; or</li>
            <li>Globizhub expressly approves a written exception.</li>
          </ul>
        </div>

        <div className="space-y-1.5 pt-2">
          <h3 className="text-base font-bold text-[#0B1120]">12.2 Non-Precedential Effect</h3>
          <p className="text-slate-600">
            Any refund, credit, adjustment, waiver, or other exception approved by Globizhub shall apply only to the specific circumstances for which it was granted and shall not establish a precedent, customary practice, or continuing entitlement for future transactions.
          </p>
        </div>
      </section>

      {/* 13. Refund Processing */}
      <section className="space-y-3 pt-4 border-t border-slate-200">
        <h2 className="text-xl font-bold text-[#0B1120]">13. Refund Processing</h2>

        <div className="space-y-1.5 pt-1">
          <h3 className="text-base font-bold text-[#0B1120]">13.1 Method of Refund</h3>
          <p className="text-slate-600">
            Where Globizhub approves a refund, the refund shall ordinarily be processed using the original payment method, or through another method reasonably determined by Globizhub and permitted by the relevant payment provider.
          </p>
        </div>

        <div className="space-y-1.5 pt-2">
          <h3 className="text-base font-bold text-[#0B1120]">13.2 Processing Time</h3>
          <p className="text-slate-600">
            The time required for a refund to appear in the Customer&rsquo;s account may depend on the Customer&rsquo;s bank, card issuer, UPI provider, payment gateway, or other financial institution. Globizhub shall not be responsible for delays attributable solely to third-party financial institutions or payment service providers.
          </p>
        </div>

        <div className="space-y-1.5 pt-2">
          <h3 className="text-base font-bold text-[#0B1120]">13.3 Alternative Refund Method</h3>
          <p className="text-slate-600">
            Where a refund cannot reasonably be processed through the original payment method, Globizhub may request additional information reasonably necessary to process the refund through an alternative lawful payment method.
          </p>
        </div>
      </section>

      {/* 14. Taxes */}
      <section className="space-y-3 pt-4 border-t border-slate-200">
        <h2 className="text-xl font-bold text-[#0B1120]">14. Taxes</h2>

        <div className="space-y-1.5 pt-1">
          <h3 className="text-base font-bold text-[#0B1120]">14.1 Tax Treatment of Refunds</h3>
          <p className="text-slate-600">
            Any refund, credit, reversal, or billing adjustment shall be subject to applicable taxation requirements. Where taxes have already been deposited with or reported to a governmental authority, Globizhub may be required to account for such taxes separately, or may be unable to refund certain tax components, except as permitted by applicable law.
          </p>
        </div>

        <div className="space-y-1.5 pt-2">
          <h3 className="text-base font-bold text-[#0B1120]">14.2 Customer Tax Obligations</h3>
          <p className="text-slate-600">
            The Customer remains responsible for taxes properly applicable to its transactions with Globizhub, unless otherwise required by applicable law.
          </p>
        </div>
      </section>

      {/* 15. No Refund for Customer-Initiated Discontinuation */}
      <section className="space-y-3 pt-4 border-t border-slate-200">
        <h2 className="text-xl font-bold text-[#0B1120]">15. No Refund for Customer-Initiated Discontinuation</h2>

        <div className="space-y-1.5 pt-1">
          <h3 className="text-base font-bold text-[#0B1120]">15.1 General Rule</h3>
          <p className="text-slate-600">
            Unless otherwise expressly agreed in writing or required by applicable law, a Customer&rsquo;s decision to stop using the Platform, reduce its usage, discontinue a particular feature, change its internal operations, or cease conducting business shall not by itself entitle the Customer to a refund of amounts already paid or amounts relating to Services already provided.
          </p>
        </div>

        <div className="space-y-1.5 pt-2">
          <h3 className="text-base font-bold text-[#0B1120]">15.2 Enterprise Arrangements</h3>
          <p className="text-slate-600">
            Where a subscription or minimum-commitment arrangement applies under a separate written enterprise Order, any applicable early-termination or cancellation obligations shall be governed by that Order and the Patholab.cloud Terms and Conditions.
          </p>
        </div>
      </section>

      {/* 16. Data Export Following Cancellation */}
      <section className="space-y-3 pt-4 border-t border-slate-200">
        <h2 className="text-xl font-bold text-[#0B1120]">16. Data Export Following Cancellation</h2>

        <div className="space-y-1.5 pt-1">
          <h3 className="text-base font-bold text-[#0B1120]">16.1 Request for Data Export</h3>
          <p className="text-slate-600">
            Subject to the Terms and Conditions and any applicable Order, Customers may request an export of their Customer Data before account termination or deletion.
          </p>
        </div>

        <div className="space-y-1.5 pt-2">
          <h3 className="text-base font-bold text-[#0B1120]">16.2 Customer Responsibility</h3>
          <p className="text-slate-600">
            The Customer is responsible for requesting and securely retaining any data it requires for its own operational, legal, regulatory, clinical, or record-keeping purposes before the applicable deletion period expires.
          </p>
        </div>

        <div className="space-y-1.5 pt-2">
          <h3 className="text-base font-bold text-[#0B1120]">16.3 Export Fees</h3>
          <p className="text-slate-600">
            Large-scale, custom, or technically complex data-export requests may be subject to reasonable additional fees.
          </p>
        </div>

        <div className="space-y-1.5 pt-2">
          <h3 className="text-base font-bold text-[#0B1120]">16.4 Post-Export Data Handling</h3>
          <p className="text-slate-600">
            Customer Data shall otherwise be handled in accordance with the Patholab.cloud Privacy Policy and applicable data-retention requirements.
          </p>
        </div>
      </section>

      {/* 17. Policy Updates */}
      <section className="space-y-3 pt-4 border-t border-slate-200">
        <h2 className="text-xl font-bold text-[#0B1120]">17. Policy Updates</h2>

        <div className="space-y-1.5 pt-1">
          <h3 className="text-base font-bold text-[#0B1120]">17.1 Updates to the Policy</h3>
          <p className="text-slate-600">
            Globizhub may update this Policy from time to time to reflect operational, legal, regulatory, technological, or business changes. Where appropriate, Globizhub may notify Customers of material changes through the Platform, email, website, or other official communication channels.
          </p>
        </div>

        <div className="space-y-1.5 pt-2">
          <h3 className="text-base font-bold text-[#0B1120]">17.2 Effective Date of Revised Policy</h3>
          <p className="text-slate-600">
            The revised Policy becomes effective from the date specified in the updated version. Continued use of the Platform after the effective date of a revised Policy may constitute acceptance of the updated Policy, to the extent permitted by applicable law.
          </p>
        </div>
      </section>

      {/* 18. Governing Law and Jurisdiction */}
      <section className="space-y-3 pt-4 border-t border-slate-200">
        <h2 className="text-xl font-bold text-[#0B1120]">18. Governing Law and Jurisdiction</h2>

        <div className="space-y-1.5 pt-1">
          <h3 className="text-base font-bold text-[#0B1120]">18.1 Governing Law</h3>
          <p className="text-slate-600">
            This Policy is governed by and construed in accordance with the laws of India.
          </p>
        </div>

        <div className="space-y-1.5 pt-2">
          <h3 className="text-base font-bold text-[#0B1120]">18.2 Jurisdiction</h3>
          <p className="text-slate-600">
            Subject to any mandatory jurisdictional requirements under applicable law, any dispute arising out of or relating to this Policy is subject to the jurisdiction of the courts of Bangalore, Karnataka.
          </p>
        </div>

        <div className="space-y-1.5 pt-2">
          <h3 className="text-base font-bold text-[#0B1120]">18.3 Interim Relief</h3>
          <p className="text-slate-600">
            Nothing in this Section prevents either Party from seeking urgent interim, injunctive, or other equitable relief from a court of competent jurisdiction where such relief is legally available.
          </p>
        </div>
      </section>

      {/* 19. Contact Us */}
      <section className="space-y-4 pt-4 border-t border-slate-200">
        <h2 className="text-xl font-bold text-[#0B1120]">19. Contact Us</h2>
        <p className="text-slate-600">
          For billing, refund, cancellation, payment, or account-closure enquiries, please contact:
        </p>

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
          <div className="pt-2 border-t border-slate-200 grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <span className="font-semibold text-slate-900 block">Support Phone:</span>
              <a href="tel:+918402010207" className="text-emerald-600 font-semibold hover:underline">
                +91 84020 10207
              </a>
            </div>
            <div>
              <span className="font-semibold text-slate-900 block">Support Email:</span>
              <a href="mailto:support@patholab.cloud" className="text-emerald-600 hover:underline">
                support@patholab.cloud
              </a>
            </div>
            <div>
              <span className="font-semibold text-slate-900 block">Accounts &amp; Billing:</span>
              <a href="mailto:accounts@globizhub.com" className="text-emerald-600 hover:underline">
                accounts@globizhub.com
              </a>
            </div>
            <div>
              <span className="font-semibold text-slate-900 block">General Enquiries:</span>
              <a href="mailto:info@globizhub.com" className="text-emerald-600 hover:underline">
                info@globizhub.com
              </a>
            </div>
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
          </div>
        </div>
      </section>
    </LegalPageLayout>
  );
}
