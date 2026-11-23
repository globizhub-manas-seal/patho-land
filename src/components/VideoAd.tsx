'use client';

import React, { useState, useRef } from 'react';
import { Play } from 'lucide-react';
import { actionVideo } from '../data/productVideo';
import Eyebrow from './ui/Eyebrow';

function getYouTubeInfo(url: string) {
  if (!url) return null;
  const match = url.match(
    /(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=|shorts\/))([\w-]{11})/
  );
  if (match) {
    return {
      videoId: match[1],
      embedUrl: `https://www.youtube-nocookie.com/embed/${match[1]}?autoplay=1&rel=0&modestbranding=1`,
      thumbnailUrl: `https://img.youtube.com/vi/${match[1]}/maxresdefault.jpg`,
    };
  }
  return null;
}

export default function VideoAd({
  videoSrc = actionVideo?.videoUrl || '/videos/demo.mp4',
  poster = null,
}: {
  videoSrc?: string;
  poster?: string | null;
}) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasError, setHasError] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const youtubeInfo = getYouTubeInfo(videoSrc);
  const isYouTube = Boolean(youtubeInfo);
  const [thumbSrc, setThumbSrc] = useState(poster || youtubeInfo?.thumbnailUrl);

  const handlePlayClick = () => {
    if (isYouTube) {
      setIsPlaying(true);
      return;
    }
    if (!videoRef.current || hasError) return;

    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch((err) => console.warn('Video playback prevented:', err));
    }
  };

  const hasActiveVideo = Boolean((isYouTube || (videoSrc && videoSrc !== '/videos/demo.mp4')) && !hasError);

  return (
    <section id="demo" className="py-20 lg:py-24 bg-paper border-b border-borderSubtle">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <Eyebrow variant="sage" className="mb-3">
            Walkthrough Video
          </Eyebrow>
          <h2 className="text-3xl sm:text-4xl font-bold text-ink tracking-tight mb-3">
            See Patholab Cloud in Action
          </h2>
          <p className="text-bodyText text-base sm:text-lg">
            Watch how 100+ diagnostic labs simplified daily billing, machine ingestion, and WhatsApp report delivery.
          </p>
        </div>

        {/* Realistic Desktop Computer Monitor Frame */}
        <div className="relative max-w-4xl mx-auto">
          {/* 1. Monitor Chassis (Bezel & Display) */}
          <div className="relative rounded-[26px] sm:rounded-[32px] p-2.5 sm:p-3.5 bg-gradient-to-b from-[#2A2E35] via-[#1E2228] to-[#14171C] border border-[#3E4550] shadow-[0_25px_60px_rgba(15,61,62,0.16),0_10px_25px_rgba(0,0,0,0.12)]">
            
            {/* Top Webcam Dot */}
            <div className="absolute top-1.5 sm:top-2 left-1/2 -translate-x-1/2 z-20 flex items-center justify-center">
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#0a0d10] ring-1 ring-white/20" />
            </div>

            {/* Inner Display Screen with aspect-video */}
            <div
              onClick={!isPlaying ? handlePlayClick : undefined}
              role="button"
              tabIndex={0}
              aria-label={isPlaying ? 'Video playing' : 'Play product walkthrough video'}
              className="relative aspect-video rounded-[18px] sm:rounded-[22px] overflow-hidden bg-black cursor-pointer group shadow-inner"
            >
              {isYouTube && isPlaying ? (
                <iframe
                  src={youtubeInfo?.embedUrl}
                  title="Patholab Cloud Walkthrough"
                  className="w-full h-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : hasActiveVideo ? (
                <>
                  {isYouTube ? (
                    <img
                      src={thumbSrc || youtubeInfo?.thumbnailUrl}
                      alt="Patholab Cloud Demo"
                      onError={() => {
                        if (youtubeInfo?.videoId && (!thumbSrc || !thumbSrc.includes('hqdefault'))) {
                          setThumbSrc(`https://img.youtube.com/vi/${youtubeInfo.videoId}/hqdefault.jpg`);
                        }
                      }}
                      className="w-full h-full object-cover group-hover:scale-[1.01] transition-transform duration-500"
                    />
                  ) : (
                    <video
                      ref={videoRef}
                      src={videoSrc}
                      poster={thumbSrc || undefined}
                      onError={() => setHasError(true)}
                      className="w-full h-full object-cover"
                      playsInline
                    />
                  )}

                  {/* Centered Play Button */}
                  <div className="absolute inset-0 bg-ink/20 group-hover:bg-ink/10 transition-colors flex items-center justify-center">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white/95 rounded-full flex items-center justify-center shadow-lift text-ink group-hover:scale-105 transition-transform">
                      <Play className="w-6 h-6 sm:w-8 sm:h-8 ml-1 fill-ink" />
                    </div>
                  </div>

                  {/* Bottom Video Tag */}
                  <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 bg-white/95 backdrop-blur border border-borderSubtle rounded-lg px-3.5 py-1.5 sm:px-4 sm:py-2 flex items-center justify-between text-xs text-ink font-medium shadow-sm">
                    <span>Full Product Walkthrough • 3:40 min</span>
                    <span className="text-accent font-semibold">Click to Play ▶</span>
                  </div>
                </>
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-paper-alt text-mutedText text-sm">
                  Video Player Preview
                </div>
              )}
            </div>

            {/* Bottom Monitor Chin with subtle status accent */}
            <div className="h-3.5 sm:h-4.5 mt-1 sm:mt-1.5 flex items-center justify-center">
              <div className="w-8 h-1 rounded-full bg-white/20" />
            </div>
          </div>

          {/* 2. Monitor Stand Neck */}
          <div className="w-24 sm:w-32 h-7 sm:h-10 bg-gradient-to-b from-[#1C2026] via-[#2A303A] to-[#1C2026] mx-auto -mt-[1px] border-x border-[#3A4250]/40 shadow-inner" />

          {/* 3. Monitor Stand Base Plate */}
          <div className="w-52 sm:w-72 h-2.5 sm:h-3 bg-gradient-to-r from-[#22272E] via-[#3A424E] to-[#22272E] rounded-full mx-auto shadow-md border-t border-white/20" />

          {/* 4. Realistic Ground Drop Shadow */}
          <div className="w-64 sm:w-96 h-4 bg-ink/10 blur-md rounded-full mx-auto -mt-1 pointer-events-none" />
        </div>
      </div>
    </section>
  );
}
