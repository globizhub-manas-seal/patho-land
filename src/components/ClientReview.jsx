import React from 'react';
import Image from 'next/image';
import { Star, Play } from 'lucide-react';
import { featuredReview } from '../data/testimonials';

export default function ClientReview() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-50 rounded-[3rem] p-8 lg:p-16 border border-slate-200/90 shadow-xl relative overflow-hidden reveal">
          {/* Subtle decorative quotation background SVG */}
          <div className="absolute top-10 right-10 text-emerald-100 w-36 h-36 opacity-60 pointer-events-none">
            <svg fill="currentColor" viewBox="0 0 32 32">
              <path d="M9.333 13.333c0-3.682 2.985-6.667 6.667-6.667s6.667 2.985 6.667 6.667c0 3.513-2.716 6.392-6.154 6.643l-.513.024v5.333h-2.667v-6.667h2.667v-1.333h-6.667v-4zM24 13.333c0-3.682 2.985-6.667 6.667-6.667s6.667 2.985 6.667 6.667c0 3.513-2.716 6.392-6.154 6.643l-.513.024v5.333h-2.667v-6.667h2.667v-1.333h-6.667v-4z" />
            </svg>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
            {/* Left: Lab Story Image */}
            <a 
              href="/#demo"
              aria-label="Watch Apex Diagnostics customer walkthrough video"
              className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl group cursor-pointer border-4 border-white bg-slate-900 reveal-left delay-100 block"
            >
              <Image
                src={featuredReview.imageSrc}
                alt="Apex Diagnostics Lab Environment"
                width={800}
                height={600}
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 bg-white/95 backdrop-blur rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <Play className="w-6 h-6 text-emerald-600 ml-1 fill-emerald-600" />
                </div>
              </div>
              <div className="absolute bottom-4 left-4 right-4 bg-slate-900/80 backdrop-blur-md px-4 py-2.5 rounded-xl text-white text-xs flex justify-between items-center">
                <span className="font-medium">Apex Diagnostics Customer Story</span>
                <span className="text-emerald-400 font-semibold">Watch Demo ▶</span>
              </div>
            </a>

            {/* Right: Quote Content */}
            <div className="reveal-right delay-200">
              <div className="flex items-center gap-1.5 mb-6">
                {[...Array(featuredReview.rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-amber-400 fill-amber-400" />
                ))}
              </div>

              <blockquote className="text-2xl lg:text-4xl font-bold text-slate-800 leading-snug mb-8">
                "{featuredReview.quote}"
              </blockquote>

              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-emerald-100 rounded-full flex items-center justify-center font-bold text-xl text-emerald-700 shadow-sm">
                  {featuredReview.avatarText}
                </div>
                <div>
                  <p className="font-bold text-lg text-[#0B1120]">{featuredReview.author}</p>
                  <p className="text-slate-500 font-medium">{featuredReview.role}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
