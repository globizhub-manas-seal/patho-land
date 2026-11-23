import React from 'react';
import Image from 'next/image';
import { Star, Play } from 'lucide-react';
import { featuredReview } from '../data/testimonials';
import Eyebrow from './ui/Eyebrow';

export default function ClientReview() {
  return (
    <section className="py-20 lg:py-24 bg-paper-alt border-b border-borderSubtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-card-lg p-8 sm:p-12 lg:p-16 border border-borderSubtle shadow-subtle relative overflow-hidden">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            {/* Left: Lab Story Image */}
            <div className="lg:col-span-5">
              <a
                href="#demo"
                aria-label="Watch customer story video"
                className="relative aspect-[4/3] rounded-card overflow-hidden block border border-borderSubtle group cursor-pointer shadow-sm"
              >
                <Image
                  src={featuredReview.imageSrc}
                  alt="Apex Diagnostics Lab Environment"
                  width={800}
                  height={600}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-ink/20 group-hover:bg-ink/10 transition-colors" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-lift group-hover:scale-105 transition-transform">
                    <Play className="w-5 h-5 ml-0.5 fill-ink text-ink" />
                  </div>
                </div>
                <div className="absolute bottom-3 left-3 right-3 bg-white/95 backdrop-blur px-3.5 py-2 rounded-lg text-xs flex justify-between items-center text-ink font-medium border border-borderSubtle">
                  <span>Apex Diagnostics Case Study</span>
                  <span className="text-accent font-semibold">Watch Tour ▶</span>
                </div>
              </a>
            </div>

            {/* Right: Editorial Quote */}
            <div className="lg:col-span-7">
              <Eyebrow variant="sage" className="mb-4">
                Diagnostic Center Spotlight
              </Eyebrow>

              <div className="flex items-center gap-1 mb-4 text-saffron">
                {[...Array(featuredReview.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-saffron" />
                ))}
              </div>

              <blockquote className="font-serif text-xl sm:text-2xl lg:text-3xl font-semibold text-ink leading-snug mb-6">
                &ldquo;{featuredReview.quote}&rdquo;
              </blockquote>

              <div className="flex items-center gap-3.5 pt-4 border-t border-borderSubtle/60">
                <div className="w-12 h-12 bg-sage rounded-full flex items-center justify-center font-serif font-bold text-lg text-ink">
                  {featuredReview.avatarText}
                </div>
                <div>
                  <p className="font-serif font-semibold text-base text-ink">
                    {featuredReview.author}
                  </p>
                  <p className="text-xs text-mutedText">{featuredReview.role}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
