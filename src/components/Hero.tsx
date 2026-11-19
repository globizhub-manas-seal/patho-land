'use client';

import React, { useState, useRef } from 'react';
import { Zap, ArrowRight, Play, Pause, Volume2, VolumeX, CheckCircle2, Maximize2 } from 'lucide-react';
import { heroProductVideo } from '../data/productVideo';

function getYouTubeInfo(url) {
  if (!url) return null;
  const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=|shorts\/))([\w-]{11})/);
  if (match) {
    return {
      videoId: match[1],
      embedUrl: `https://www.youtube-nocookie.com/embed/${match[1]}?autoplay=1&mute=1&loop=1&rel=0&modestbranding=1`,
      thumbnailUrl: `https://img.youtube.com/vi/${match[1]}/maxresdefault.jpg`
    };
  }
  return null;
}

function optimizeVideoUrl(url) {
  if (!url) return url;
  // If it's a Cloudinary video URL without transformations, automatically inject q_auto,f_auto,w_1080
  if (url.includes('res.cloudinary.com') && url.includes('/video/upload/') && !url.includes('q_auto')) {
    return url.replace('/video/upload/', '/video/upload/q_auto,f_auto,w_1080/');
  }
  return url;
}

export default function Hero({
  videoUrl = heroProductVideo.videoUrl,
  autoPlay = heroProductVideo.autoPlay,
  loop = heroProductVideo.loop,
  muted = heroProductVideo.muted,
  posterUrl = heroProductVideo.posterUrl,
  objectFit = heroProductVideo.objectFit || "contain"
}) {
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const [isMuted, setIsMuted] = useState(muted);
  const [videoError, setVideoError] = useState(false);
  const videoRef = useRef(null);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch((err) => {
        console.warn("Video play prevented:", err);
      });
    }
  };

  const toggleMute = (e) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const toggleFullscreen = (e) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    if (videoRef.current.requestFullscreen) {
      videoRef.current.requestFullscreen();
    } else if (videoRef.current.webkitRequestFullscreen) {
      videoRef.current.webkitRequestFullscreen();
    }
  };

  const youtubeInfo = getYouTubeInfo(videoUrl);
  const isYouTube = Boolean(youtubeInfo);
  const isIframeEmbed = Boolean(
    isYouTube || (videoUrl && (videoUrl.includes('player.cloudinary.com') || videoUrl.includes('vimeo.com')))
  );
  const effectiveIframeSrc = isYouTube ? youtubeInfo.embedUrl : videoUrl;
  const effectiveDirectVideoSrc = optimizeVideoUrl(videoUrl);

  const hasVideo = Boolean(videoUrl && !videoError);

  return (
    <section className="relative pt-32 pb-20 lg:pt-44 lg:pb-32 overflow-hidden">
      {/* Abstract Background Gradient Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[650px] opacity-25 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 via-teal-300 to-blue-500 blur-[120px] rounded-full mix-blend-multiply"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:grid lg:grid-cols-12 lg:gap-12 xl:gap-14 items-center">

          {/* Left: Content (5 of 12 columns for balanced text + large video) */}
          <div className="lg:col-span-5 text-center lg:text-left mb-14 lg:mb-0">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100/90 text-emerald-800 font-semibold text-xs sm:text-sm mb-6 border border-emerald-200 shadow-sm">
              <Zap className="w-4 h-4 text-emerald-600 flex-shrink-0" />
              <span>India&apos;s First Pay-As-You-Go LIMS • Just ₹2.5 / Patient</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] font-extrabold text-[#0B1120] leading-[1.12] tracking-tight mb-6">
              Stop Paying <br className="hidden lg:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500">
                ₹20,000 - ₹1L
              </span>
              <br />
              Every Year for Lab Software.
            </h1>

            <p className="text-base sm:text-lg text-slate-600 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Transform your diagnostic lab with India&apos;s first 100% <strong className="text-slate-900 font-bold"> Pay-As-You-Go </strong> cloud ecosystem at just <strong className="text-slate-900 font-bold">₹2.5 per patient registration</strong>. Zero server costs, zero maintenance, and infinite scalability across all your collection centers.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="https://app.patholab.cloud/register"
                className="group bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 md:px-8 md:py-4 rounded-full font-bold text-base md:text-lg transition-all duration-300 shadow-lg shadow-orange-500/30 hover:shadow-xl hover:shadow-orange-500/40 hover:-translate-y-1 flex items-center justify-center gap-2"
              >
                Create Account (₹0 setup)
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              <a
                href={`https://wa.me/918402010207?text=${encodeURIComponent('Hi, I want to book a live demo of Patholab Cloud for my lab.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white hover:bg-slate-50 text-[#0B1120] border-2 border-slate-200 px-8 py-4 rounded-full font-bold text-lg transition-all flex items-center justify-center gap-2 hover:border-slate-300 shadow-sm"
              >
                <Play className="w-5 h-5 fill-slate-800" /> Book a Demo
              </a>
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-5 text-sm font-medium text-slate-500">
              <span className="flex items-center gap-1.5 text-emerald-700 font-semibold bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200/70">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" /> ₹2.5 / Patient Registration
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" /> Unlimited Branches
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" /> Zero AMC Forever
              </span>
            </div>
          </div>

          {/* Right: Enlarged & Rounded Product Video Window (7 of 12 columns) */}
          <div className="lg:col-span-7 relative">
            <div className="relative rounded-3xl lg:rounded-[2.5rem] bg-white border border-slate-200/90 shadow-2xl shadow-slate-300/40 overflow-hidden transition-all duration-500 hover:shadow-emerald-500/10">

              {/* Mac OS Window Header */}
              <div className="h-11 bg-slate-50 border-b border-slate-200/80 flex items-center justify-between px-5">
                <div className="flex items-center gap-2">
                  <div className="w-3.5 h-3.5 rounded-full bg-red-400/90 hover:opacity-80 transition-opacity"></div>
                  <div className="w-3.5 h-3.5 rounded-full bg-amber-400/90 hover:opacity-80 transition-opacity"></div>
                  <div className="w-3.5 h-3.5 rounded-full bg-emerald-400/90 hover:opacity-80 transition-opacity"></div>
                  <span className="text-xs text-slate-500 font-medium ml-3">
                    {heroProductVideo.browserUrl}
                  </span>
                </div>

                {/* Video Quick Controls (Sound + Fullscreen) */}
                {hasVideo && !isIframeEmbed && (
                  <div className="flex items-center gap-1">
                    <button
                      onClick={toggleMute}
                      className="p-1.5 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-200/60 transition-colors"
                      title={isMuted ? "Unmute sound" : "Mute sound"}
                      aria-label="Toggle mute"
                    >
                      {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 text-emerald-600" />}
                    </button>
                    <button
                      onClick={toggleFullscreen}
                      className="p-1.5 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-200/60 transition-colors"
                      title="Fullscreen"
                      aria-label="Fullscreen"
                    >
                      <Maximize2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                )}
              </div>

              {/* Video Player Frame with 100% Visibility (object-contain) and Expanded Height */}
              <div className="relative w-full aspect-video min-h-[340px] sm:min-h-[420px] lg:min-h-[460px] bg-black flex items-center justify-center overflow-hidden">
                {hasVideo ? (
                  isIframeEmbed ? (
                    <iframe
                      src={effectiveIframeSrc}
                      className="w-full h-full border-0"
                      allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
                      allowFullScreen
                    />
                  ) : (
                    <div
                      className="relative w-full h-full flex items-center justify-center group"
                      onClick={togglePlay}
                      role="button"
                      tabIndex={0}
                      aria-label={isPlaying ? "Pause video" : "Play video"}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault();
                          togglePlay();
                        }
                      }}
                    >
                      <video
                        ref={videoRef}
                        src={effectiveDirectVideoSrc}
                        poster={posterUrl || undefined}
                        autoPlay={autoPlay}
                        muted={isMuted}
                        loop={loop}
                        playsInline
                        controls={false}
                        onPlay={() => setIsPlaying(true)}
                        onPause={() => setIsPlaying(false)}
                        onError={() => setVideoError(true)}
                        className={`w-full h-full ${objectFit === 'contain' ? 'object-contain' : 'object-cover'
                          } cursor-pointer transition-all`}
                      />

                      {/* Play / Pause Centered Overlay (Visible when paused or on hover) */}
                      {!isPlaying && (
                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center transition-all cursor-pointer">
                          <div className="w-18 h-18 sm:w-20 sm:h-20 bg-white/95 rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                            <Play className="w-8 h-8 text-emerald-600 ml-1 fill-emerald-600" />
                          </div>
                        </div>
                      )}

                      {/* Gentle play hint badge when playing */}
                      {isPlaying && (
                        <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity bg-black/60 backdrop-blur-sm text-white px-3 py-1.5 rounded-full text-xs flex items-center gap-1.5 pointer-events-none">
                          <Pause className="w-3.5 h-3.5" />
                          <span>Click to pause</span>
                        </div>
                      )}
                    </div>
                  )
                ) : (
                  /* Fallback Interactive Mockup (Shown if video URL isn't reachable) */
                  <div className="flex h-full w-full bg-slate-50/50">
                    <div className="w-48 bg-slate-50 border-r border-slate-100 p-4 hidden sm:block">
                      <div className="h-7 w-24 bg-emerald-100 rounded-md mb-6 flex items-center px-2">
                        <span className="text-[10px] font-bold text-emerald-700">CLINICAL LAB</span>
                      </div>
                      <div className="space-y-2.5">
                        {[
                          { label: "Dashboard", active: true },
                          { label: "Sample Entry", active: false },
                          { label: "Analyzers", active: false },
                          { label: "Reports", active: false },
                          { label: "Billing & GST", active: false },
                        ].map((item, i) => (
                          <div
                            key={i}
                            className={`h-7 rounded-lg text-xs font-medium px-2.5 flex items-center ${item.active ? 'bg-emerald-500 text-white font-semibold' : 'bg-slate-100/80 text-slate-500'
                              }`}
                          >
                            {item.label}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex-1 p-6 bg-slate-50/50 flex flex-col justify-between">
                      <div className="flex justify-between items-center mb-4">
                        <div>
                          <div className="text-xs font-bold text-slate-800">Today's Overview</div>
                          <div className="text-[10px] text-slate-400">142 Samples Processed</div>
                        </div>
                        <div className="text-[10px] bg-emerald-500 text-white px-3 py-1 rounded-full font-semibold shadow-sm">
                          Live Syncing
                        </div>
                      </div>

                      <div className="grid grid-cols-3 gap-3 mb-4">
                        <div className="bg-white border border-slate-100 rounded-xl p-3 shadow-sm">
                          <div className="text-[10px] text-slate-400">Total Patients</div>
                          <div className="text-sm font-bold text-slate-800 mt-1">1,280</div>
                          <div className="text-[9px] text-emerald-600 font-medium">+14% today</div>
                        </div>
                        <div className="bg-white border border-slate-100 rounded-xl p-3 shadow-sm">
                          <div className="text-[10px] text-slate-400">IoT Reports</div>
                          <div className="text-sm font-bold text-slate-800 mt-1">94% Auto</div>
                          <div className="text-[9px] text-emerald-600 font-medium">Zero Error</div>
                        </div>
                        <div className="bg-white border border-slate-100 rounded-xl p-3 shadow-sm">
                          <div className="text-[10px] text-slate-400">WhatsApp Sent</div>
                          <div className="text-sm font-bold text-emerald-600 mt-1">100%</div>
                          <div className="text-[9px] text-slate-500">Delivered</div>
                        </div>
                      </div>

                      <div className="bg-white border border-slate-100 rounded-xl shadow-sm p-4 flex-1 flex flex-col justify-between">
                        <div className="flex justify-between items-center text-[10px] font-semibold text-slate-400 pb-2 border-b border-slate-100">
                          <span>PATIENT</span>
                          <span>TEST PROFILE</span>
                          <span>STATUS</span>
                        </div>
                        <div className="space-y-2 mt-1">
                          {[
                            { name: "Rahul Verma", test: "Complete Blood Count (CBC)", status: "Approved" },
                            { name: "Pooja Sharma", test: "Lipid Profile + Thyroid", status: "In IoT Queue" },
                            { name: "Amit Patel", test: "HbA1c & Fasting Glucose", status: "Dispatched" },
                          ].map((row, i) => (
                            <div key={i} className="flex justify-between items-center text-[11px] py-1 border-b border-slate-50 last:border-0">
                              <span className="font-medium text-slate-700">{row.name}</span>
                              <span className="text-slate-400 truncate max-w-[140px]">{row.test}</span>
                              <span className="text-[9px] font-semibold px-2 py-0.5 rounded bg-emerald-50 text-emerald-700">
                                {row.status}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>




          </div>
        </div>
      </div>
    </section>
  );
}
