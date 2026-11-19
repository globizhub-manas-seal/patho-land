'use client';

import React, { useState, useRef } from 'react';
import { Play, Activity } from 'lucide-react';
import { actionVideo } from '../data/productVideo';

function getYouTubeInfo(url) {
  if (!url) return null;
  const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=|shorts\/))([\w-]{11})/);
  if (match) {
    return {
      videoId: match[1],
      embedUrl: `https://www.youtube-nocookie.com/embed/${match[1]}?autoplay=1&rel=0&modestbranding=1`,
      thumbnailUrl: `https://img.youtube.com/vi/${match[1]}/maxresdefault.jpg`
    };
  }
  return null;
}

export default function VideoAd({ 
  videoSrc = actionVideo?.videoUrl || "/videos/demo.mp4",
  poster = null 
}) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasError, setHasError] = useState(false);
  const videoRef = useRef(null);

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
      videoRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch((err) => {
        console.warn("Autoplay or video playback prevented:", err);
      });
    }
  };

  const hasActiveVideo = Boolean((isYouTube || (videoSrc && videoSrc !== "/videos/demo.mp4")) && !hasError);

  return (
    <section id="demo" className="py-20 bg-[#0B1120] relative overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxjaXJjbGUgY3g9IjMiIGN5PSIzIiByPSIzIiBmaWxsPSIjMWYyOTM3IiBmaWxsLW9wYWNpdHk9IjAuNCIvPjwvZz48L3N2Zz4=')]"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 reveal">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            See Patholab Cloud in Action
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Watch how 100+ labs have revolutionized their daily operations in just under 2 minutes.
          </p>
        </div>

        {/* Video Player Container */}
        <div 
          onClick={!isPlaying ? handlePlayClick : undefined}
          role="button"
          tabIndex={0}
          aria-label={isPlaying ? "Video playing" : "Play product walkthrough video"}
          onKeyDown={(e) => {
            if (!isPlaying && (e.key === 'Enter' || e.key === ' ')) {
              e.preventDefault();
              handlePlayClick();
            }
          }}
          className="relative aspect-video rounded-3xl overflow-hidden bg-slate-900 border border-slate-700 shadow-2xl shadow-emerald-500/10 group cursor-pointer reveal-scale delay-150"
        >
          {isYouTube && isPlaying ? (
            /* Responsive YouTube Iframe Embed */
            <iframe
              src={youtubeInfo.embedUrl}
              title="Patholab Cloud Walkthrough"
              className="w-full h-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          ) : hasActiveVideo ? (
            <>
              {isYouTube ? (
                /* YouTube Thumbnail Preview with Pulsing Play Button */
                <img
                  src={thumbSrc || youtubeInfo.thumbnailUrl}
                  alt="Patholab Cloud Demo"
                  onError={() => {
                    if (youtubeInfo?.videoId && (!thumbSrc || !thumbSrc.includes('hqdefault'))) {
                      setThumbSrc(`https://img.youtube.com/vi/${youtubeInfo.videoId}/hqdefault.jpg`);
                    }
                  }}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              ) : (
                /* Native MP4 / Cloudinary Video */
                <video
                  ref={videoRef}
                  src={videoSrc}
                  poster={poster}
                  playsInline
                  controls={isPlaying}
                  onEnded={() => setIsPlaying(false)}
                  onError={() => setHasError(true)}
                  className="w-full h-full object-cover"
                />
              )}

              {/* Pulsing Orange Play Button Overlay */}
              {!isPlaying && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/30 transition-colors">
                  <div className="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center shadow-lg shadow-orange-500/50 group-hover:scale-110 transition-transform relative">
                    <div className="absolute inset-0 rounded-full bg-orange-500 animate-ping opacity-75"></div>
                    <Play className="w-8 h-8 text-white ml-1 relative z-10 fill-white" />
                  </div>
                </div>
              )}
            </>
          ) : (
            /* Fallback Faux Player Mock */
            <>
              <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-[#0B1120] group-hover:scale-105 transition-transform duration-700"></div>

              <div className="absolute inset-0 opacity-20 flex items-center justify-center pointer-events-none">
                <Activity className="w-64 h-64 text-slate-600" />
              </div>

              <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/10 transition-colors">
                <div className="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center shadow-lg shadow-orange-500/50 group-hover:scale-110 transition-transform relative">
                  <div className="absolute inset-0 rounded-full bg-orange-500 animate-ping opacity-75"></div>
                  <Play className="w-8 h-8 text-white ml-1 relative z-10 fill-white" />
                </div>
              </div>

              <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-black/80 to-transparent p-4 flex items-end">
                <div className="w-full flex items-center gap-3">
                  <div className="w-full h-1.5 bg-slate-600 rounded-full overflow-hidden">
                    <div className="w-1/3 h-full bg-orange-500 rounded-full"></div>
                  </div>
                  <span className="text-xs text-slate-300 font-mono">0:45 / 2:10</span>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
