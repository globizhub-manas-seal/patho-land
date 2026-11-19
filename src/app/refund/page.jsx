import React from 'react';
import LegalPageLayout from '../../components/LegalPageLayout';

export const metadata = {
  title: 'Refund & Cancellation Policy | Patholab Cloud',
  description: 'Wallet recharge and subscription refund policy for Patholab Cloud.',
};

export default function RefundPage() {
  return (
    <LegalPageLayout title="Refund & Cancellation Policy" lastUpdated="November 2026">
      <section>
        <h2 className="text-xl font-bold text-[#0B1120] mb-3">1. Cancellation Policy</h2>
        <p className="text-slate-600 mb-2">
          Patholab Cloud believes in complete transparency and customer freedom. Because our core offering operates on a prepaid pay-as-you-go model (₹2.5/patient), there are <strong>no lock-in contracts</strong> or cancellation penalties for standard usage.
        </p>
        <p className="text-slate-600">
          You may discontinue using our software platform at any time by simply stopping new patient registrations.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-[#0B1120] mb-3">2. Wallet Recharges & Prepaid Balance</h2>
        <p className="text-slate-600 mb-2">
          Prepaid wallet credits purchased for patient report generation do not expire as long as your account remains active.
        </p>
        <ul className="list-disc pl-5 text-slate-600 space-y-1.5">
          <li><strong>Unused Balance Refund:</strong> If you choose to close your laboratory operations permanently, you may request a refund of your unconsumed wallet balance within 30 days of the last transaction, subject to a nominal 5% payment gateway processing fee deduction.</li>
          <li><strong>Failed Transactions:</strong> If money is debited from your bank account during a wallet top-up but does not reflect in your Patholab Cloud balance, the amount is automatically refunded by the payment aggregator to your source account within 5–7 business days.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold text-[#0B1120] mb-3">3. Annual Subscriptions & Add-ons</h2>
        <p className="text-slate-600">
          Annual enterprise subscriptions or dedicated custom machine-interfacing installations come with a <strong>14-day evaluation satisfaction guarantee</strong>. If we cannot integrate with your laboratory analyzers or meet your operational workflow requirements within the first 14 days of activation, a 100% refund will be issued.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-[#0B1120] mb-3">4. How to Request a Refund</h2>
        <p className="text-slate-600">
          To initiate a cancellation or refund inquiry, email <a href="mailto:billing@patholabcloud.com" className="text-emerald-600 font-semibold underline">billing@patholabcloud.com</a> with your Registered Lab Name, Account ID, and Transaction Receipt. Refunds are processed to the original payment source within 7-10 working days.
        </p>
      </section>
    </LegalPageLayout>
  );
}
