import React from 'react';

const zeroProps = [
  {
    oldWay: "₹1.5L+ Local Servers",
    numeral: "₹0",
    title: "Hardware & Server Fees",
    desc: "No expensive local servers, NAS boxes, or annual hardware maintenance contracts.",
    sla: "100% Cloud-Managed Infrastructure"
  },
  {
    oldWay: "2–4 Weeks Deployment",
    numeral: "0",
    title: "Days Setup Wait Time",
    desc: "Instantly cloud-ready. Onboard your lab and go live in hours, not weeks.",
    sla: "Instant Self-Serve Onboarding"
  },
  {
    oldWay: "Dedicated IT Staff",
    numeral: "0",
    title: "IT Maintenance",
    desc: "Automatic cloud backups, auto-updates, and enterprise bank-grade security.",
    sla: "Automated Daily Cloud Backups"
  }
];

export default function ValueProps() {
  return (
    <section className="py-16 lg:py-20 bg-paper-alt border-b border-borderSubtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-widest font-semibold text-accent block mb-2">
            The Zero-Friction Promise
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-ink tracking-tight">
            Designed to Eliminate Every Hidden Cost of Running a Lab
          </h2>
        </div>

        {/* 3-column row separated by thin vertical rules */}
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-borderSubtle border border-borderSubtle rounded-card bg-white shadow-subtle overflow-hidden">
          {zeroProps.map((item, i) => (
            <div
              key={i}
              className="p-8 sm:p-10 flex flex-col justify-between transition-colors hover:bg-paper/40 group"
            >
              <div>
                {/* Crossed-out "Old Way" Hidden Cost Strikethrough Tag */}
                <div className="flex items-center gap-2 mb-3.5">
                  <span className="inline-flex items-center px-2.5 py-1 rounded-md bg-brick/10 border border-brick/20 text-xs font-semibold text-brick line-through">
                    {item.oldWay}
                  </span>
                  <span className="text-xs text-mutedText font-medium">→</span>
                </div>

                {/* Giant Numeral & Title */}
                <div className="flex items-baseline gap-2.5 mb-4">
                  <span className="text-5xl sm:text-6xl lg:text-7xl font-bold text-ink leading-none group-hover:text-accent transition-colors">
                    {item.numeral}
                  </span>
                  <span className="text-lg sm:text-xl lg:text-2xl font-bold text-ink tracking-tight">
                    {item.title}
                  </span>
                </div>

                <p className="text-bodyText leading-relaxed text-sm sm:text-base">
                  {item.desc}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-borderSubtle/60 flex items-center gap-2 text-xs font-semibold text-accent uppercase tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                <span>{item.sla}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
