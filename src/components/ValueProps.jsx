import React from 'react';
import { valueProps } from '../data/features';

export default function ValueProps() {
  return (
    <section className="py-12 -mt-10 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {valueProps.map((prop, i) => {
            const Icon = prop.icon;
            return (
              <div
                key={i}
                className={`bg-white rounded-2xl p-8 shadow-xl shadow-slate-200/50 border border-slate-100 hover:-translate-y-1 transition-all duration-300 text-center group reveal ${
                  i === 0 ? 'delay-100' : i === 1 ? 'delay-200' : 'delay-300'
                }`}
              >
                <div className="w-16 h-16 mx-auto bg-emerald-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Icon className="w-8 h-8 text-emerald-600" />
                </div>
                <h3 className="text-xl font-bold text-[#0B1120] mb-3">{prop.title}</h3>
                <p className="text-slate-600 leading-relaxed text-sm md:text-base">{prop.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
