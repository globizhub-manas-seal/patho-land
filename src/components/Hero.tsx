'use client';

import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play, Volume, Volume1, Volume2, VolumeX, Maximize2, CheckCircle2 } from 'lucide-react';
import { heroProductVideo } from '../data/productVideo';
import { brandConfig } from '../data/brand';
import Eyebrow from './ui/Eyebrow';
import CountUp from './ui/CountUp';

function getYouTubeInfo(url: string) {
  if (!url) return null;
  const match = url.match(
    /(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=|shorts\/))([\w-]{11})/
  );
  if (match) {
    return {
      videoId: match[1],
      embedUrl: `https://www.youtube-nocookie.com/embed/${match[1]}?autoplay=1&mute=1&loop=1&rel=0&modestbranding=1`,
      thumbnailUrl: `https://img.youtube.com/vi/${match[1]}/maxresdefault.jpg`,
    };
  }
  return null;
}

function optimizeVideoUrl(url: string) {
  if (!url) return url;
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
}: {
  videoUrl?: string;
  autoPlay?: boolean;
  loop?: boolean;
  muted?: boolean;
  posterUrl?: string;
  objectFit?: string;
}) {
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const [isMuted, setIsMuted] = useState(true);
  const [volume, setVolume] = useState(0.6);
  const [volumeIndicatorVisible, setVolumeIndicatorVisible] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const volumeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const showVolumeIndicator = () => {
    setVolumeIndicatorVisible(true);
    if (volumeTimeoutRef.current) clearTimeout(volumeTimeoutRef.current);
    volumeTimeoutRef.current = setTimeout(() => {
      setVolumeIndicatorVisible(false);
    }, 1500);
  };

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch((err) => console.warn('Video play prevented:', err));
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    if (isMuted) {
      const restoreVol = volume === 0 ? 0.6 : volume;
      videoRef.current.muted = false;
      videoRef.current.volume = restoreVol;
      setIsMuted(false);
      setVolume(restoreVol);
    } else {
      videoRef.current.muted = true;
      setIsMuted(true);
    }
  };

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.stopPropagation();
    const newVol = parseFloat(e.target.value);
    if (!videoRef.current) return;
    videoRef.current.volume = newVol;
    setVolume(newVol);
    if (newVol === 0) {
      videoRef.current.muted = true;
      setIsMuted(true);
    } else {
      videoRef.current.muted = false;
      setIsMuted(false);
    }
  };

  const handleVolumeUp = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    const newVol = Math.min(1, Math.round((volume + 0.1) * 100) / 100);
    videoRef.current.volume = newVol;
    videoRef.current.muted = false;
    setVolume(newVol);
    setIsMuted(false);
  };

  const handleVolumeDown = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    const newVol = Math.max(0, Math.round((volume - 0.1) * 100) / 100);
    videoRef.current.volume = newVol;
    setVolume(newVol);
    if (newVol === 0) {
      videoRef.current.muted = true;
      setIsMuted(true);
    }
  };

  const toggleFullscreen = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    if (videoRef.current.requestFullscreen) {
      videoRef.current.requestFullscreen();
    }
  };

  const youtubeInfo = getYouTubeInfo(videoUrl);
  const isYouTube = Boolean(youtubeInfo);
  const isIframeEmbed = Boolean(
    isYouTube || (videoUrl && (videoUrl.includes('player.cloudinary.com') || videoUrl.includes('vimeo.com')))
  );
  const effectiveIframeSrc = isYouTube ? youtubeInfo?.embedUrl : videoUrl;
  const effectiveDirectVideoSrc = optimizeVideoUrl(videoUrl);
  const hasVideo = Boolean(videoUrl && !videoError);

  const whatsappDemoUrl = `https://wa.me/${brandConfig.contact.whatsappNumber}?text=${encodeURIComponent(
    brandConfig.contact.whatsappMessage
  )}`;

  // Stagger animation container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 18 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  return (
    <section className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 bg-paper overflow-hidden border-b border-borderSubtle">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-12 xl:gap-16">
          
          {/* Left Column: Editorial Headline & Copy */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex-1 max-w-2xl text-left"
          >
            {/* Eyebrow Label with Warm Orange Highlight Badge */}
            <motion.div variants={itemVariants} className="mb-5">
              <Eyebrow variant="orange">
                India&apos;s First Pay-As-You-Go LIMS • ₹2.5 / Patient
              </Eyebrow>
            </motion.div>

            {/* Editorial Heading with Soft Cyan Highlight Badge matching .cloud */}
            <motion.h1
              variants={itemVariants}
              className="text-3xl sm:text-4xl lg:text-[2.85rem] xl:text-[3.15rem] font-bold text-ink leading-[1.32] sm:leading-[1.38] tracking-tight mb-6"
            >
              Stop Paying <br />
              <span className="inline-block bg-[#01A9B4]/15 border border-[#01A9B4]/30 px-3.5 py-1 rounded-xl text-[#01A9B4] whitespace-nowrap shadow-sm my-1.5 sm:my-2">
                ₹20,000 – ₹1 Lakh
              </span> <br />
              Every Year for Lab Software.
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-bodyText mb-7 max-w-xl leading-relaxed"
            >
              Transform your diagnostic lab with India&apos;s first 100%{' '}
              <strong className="text-ink font-semibold">Pay-As-You-Go</strong> cloud
              ecosystem at just{' '}
              <strong className="text-ink font-semibold">₹2.5 per patient registration</strong>.
              Zero server costs, zero annual maintenance, and seamless syncing across every
              collection center.
            </motion.p>

            {/* Stat Card: Big Numeral ₹2.5 */}
            <motion.div
              variants={itemVariants}
              className="bg-white border border-borderSubtle rounded-card p-4 sm:p-5 mb-7 flex items-center gap-4 sm:gap-6 shadow-subtle max-w-lg"
            >
              <div className="flex-shrink-0">
                <span className="text-3xl sm:text-4xl lg:text-5xl font-bold text-ink tracking-tight">
                  <CountUp value={2.5} decimals={1} prefix="₹" />
                </span>
                <span className="text-xs text-mutedText font-medium block mt-0.5">
                  / patient registration
                </span>
              </div>
              <div className="h-10 w-px bg-borderSubtle" />
              <div className="text-xs sm:text-sm text-bodyText leading-snug">
                <span className="font-semibold text-ink block">
                  India&apos;s First Pay-As-You-Go Model
                </span>
                No lock-ins, no upfront server purchases. Pay only when you register patients.
              </div>
            </motion.div>

            {/* CTA Buttons in a single line on sm+ */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5"
            >
              <a
                href="https://app.patholab.cloud/register"
                className="group bg-saffron hover:bg-saffron-hover text-ink px-6 py-3.5 sm:px-7 sm:py-4 rounded-full font-bold text-sm sm:text-base whitespace-nowrap transition-all duration-200 shadow-sm hover:shadow flex items-center justify-center gap-2 active:scale-[0.98]"
              >
                <span>Create Account (₹0 setup)</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-200 group-hover:translate-x-1 flex-shrink-0" />
              </a>

              <a
                href={whatsappDemoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white hover:bg-paper-alt text-ink border border-borderSubtle px-6 py-3.5 sm:px-7 sm:py-4 rounded-full font-semibold text-sm sm:text-base whitespace-nowrap transition-all flex items-center justify-center gap-2 shadow-subtle active:scale-[0.98]"
              >
                <Play className="w-4 h-4 fill-ink flex-shrink-0" />
                <span>Book a Demo</span>
              </a>
            </motion.div>

            {/* Trust Micro-Bullets */}
            <motion.div
              variants={itemVariants}
              className="mt-7 flex flex-wrap items-center gap-3 text-xs sm:text-sm text-mutedText"
            >
              <span className="flex items-center gap-1.5 text-ink font-medium bg-sage/60 px-3 py-1 rounded-full border border-borderSubtle">
                <CheckCircle2 className="w-3.5 h-3.5 text-accent flex-shrink-0" />
                ₹2.5 / Patient Registration
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-accent flex-shrink-0" />
                Unlimited Collection Centers
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-accent flex-shrink-0" />
                Zero AMC Forever
              </span>
            </motion.div>
          </motion.div>

          {/* Right Column: Realistic Smartphone Device with Titanium Chassis & Floating Controls */}
          <motion.div
            initial={{ opacity: 0, rotate: -1.2, y: 24 }}
            animate={{ opacity: 1, rotate: 0, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.25 }}
            className="w-full max-w-[290px] sm:max-w-[320px] lg:max-w-[330px] xl:max-w-[350px] flex-shrink-0 flex flex-col items-center"
          >
            {/* Realistic Smartphone Chassis with Warm Titanium Edge & Interactive Hardware Buttons */}
            <div className="relative w-full rounded-[48px] sm:rounded-[52px] bg-gradient-to-b from-[#F2994A] via-[#E27A26] to-[#C96E15] p-[3px] sm:p-[3.5px] shadow-[0_20px_50px_rgba(201,110,21,0.22),0_10px_20px_rgba(0,0,0,0.08)]">
              
              {/* Left Hardware Buttons (Interactive Volume Up & Down) */}
              <button
                type="button"
                onClick={handleVolumeUp}
                className="absolute -left-[5px] top-24 w-[3.5px] h-9 bg-[#C96E15] hover:bg-saffron active:scale-95 rounded-l-md shadow-sm z-50 cursor-pointer transition-colors"
                title="Volume Up (+)"
                aria-label="Volume Up"
              />
              <button
                type="button"
                onClick={handleVolumeDown}
                className="absolute -left-[5px] top-36 w-[3.5px] h-9 bg-[#C96E15] hover:bg-saffron active:scale-95 rounded-l-md shadow-sm z-50 cursor-pointer transition-colors"
                title="Volume Down (-)"
                aria-label="Volume Down"
              />

              {/* Right Hardware Button (Power / Play-Pause) */}
              <button
                type="button"
                onClick={togglePlay}
                className="absolute -right-[5px] top-28 w-[3.5px] h-12 bg-[#C96E15] hover:bg-saffron active:scale-95 rounded-r-md shadow-sm z-50 cursor-pointer transition-colors"
                title="Power / Play"
                aria-label="Power Button"
              />

              {/* Inner Black Bezel */}
              <div className="relative w-full rounded-[45px] sm:rounded-[49px] bg-black p-[7px] sm:p-[8px]">
                {/* Screen Display Container (Vertical Aspect Ratio) */}
                <div className="relative w-full aspect-[9/18.5] rounded-[38px] sm:rounded-[42px] overflow-hidden bg-black flex items-center justify-center">
                  
                  {/* Top Left: Full Screen Button */}
                  {hasVideo && !isIframeEmbed && (
                    <button
                      type="button"
                      onClick={toggleFullscreen}
                      className="absolute top-2.5 sm:top-3 left-2.5 sm:left-3 z-40 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/85 hover:bg-white text-ink shadow-md border border-black/10 backdrop-blur-md flex items-center justify-center transition-all active:scale-90"
                      title="Fullscreen"
                      aria-label="Fullscreen"
                    >
                      <Maximize2 className="w-3.5 h-3.5" />
                    </button>
                  )}

                  {/* Top Center: Dynamic Island (Camera cutout - compact so controls have ample space) */}
                  <div className="absolute top-2.5 left-1/2 -translate-x-1/2 z-40 w-16 sm:w-20 h-4.5 sm:h-5 bg-black rounded-full flex items-center justify-end pr-1.5 shadow-sm pointer-events-none">
                    {/* Camera Lens Circle */}
                    <div className="w-1.5 h-1.5 rounded-full bg-[#151515] ring-1 ring-white/10" />
                  </div>

                  {/* Top Right: Volume Controls */}
                  {hasVideo && !isIframeEmbed && (
                    isMuted ? (
                      /* When Muted: Single round unmute button */
                      <button
                        type="button"
                        onClick={toggleMute}
                        className="absolute top-2.5 sm:top-3 right-2.5 sm:right-3 z-40 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/85 hover:bg-white text-ink shadow-md border border-black/10 backdrop-blur-md flex items-center justify-center transition-all active:scale-90 group"
                        title="Click to Unmute"
                        aria-label="Unmute Video"
                      >
                        <VolumeX className="w-3.5 h-3.5 text-brick group-hover:scale-110 transition-transform" />
                      </button>
                    ) : (
                      /* When Unmuted: Vertical Volume Control Capsule */
                      <div
                        onClick={(e) => e.stopPropagation()}
                        className="absolute top-2.5 sm:top-3 right-2.5 sm:right-3 z-40 flex flex-col items-center gap-1.5 bg-white/95 hover:bg-white backdrop-blur-md p-1.5 rounded-full border border-black/10 shadow-lg transition-all"
                      >
                        {/* Mute Button (Click to mute and collapse) */}
                        <button
                          type="button"
                          onClick={toggleMute}
                          className="w-7 h-7 rounded-full text-ink hover:text-brick hover:bg-black/5 transition-colors flex items-center justify-center flex-shrink-0"
                          title="Click to Mute"
                          aria-label="Mute Video"
                        >
                          {volume < 0.5 ? (
                            <Volume1 className="w-3.5 h-3.5 text-accent flex-shrink-0" />
                          ) : (
                            <Volume2 className="w-3.5 h-3.5 text-accent flex-shrink-0" />
                          )}
                        </button>

                        {/* Vertical Range Slider */}
                        <div className="py-1 flex items-center justify-center h-16 sm:h-20">
                          <input
                            type="range"
                            min="0"
                            max="1"
                            step="0.02"
                            value={volume}
                            onChange={handleSliderChange}
                            style={{
                              writingMode: 'vertical-lr',
                              direction: 'rtl',
                              WebkitAppearance: 'slider-vertical',
                            }}
                            className="h-16 sm:h-20 w-1.5 bg-black/20 rounded-full cursor-pointer accent-accent focus:outline-none"
                            title={`Volume: ${Math.round(volume * 100)}%`}
                            aria-label="Vertical Volume Slider"
                          />
                        </div>

                        {/* Volume Percentage */}
                        <span className="text-[9px] font-mono text-ink font-semibold select-none pb-0.5">
                          {`${Math.round(volume * 100)}%`}
                        </span>
                      </div>
                    )
                  )}

                  {/* Video Player */}
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
                        className="relative w-full h-full flex items-center justify-center group cursor-pointer"
                        onClick={togglePlay}
                        role="button"
                        tabIndex={0}
                        aria-label={isPlaying ? 'Pause video' : 'Play video'}
                      >
                        <video
                          ref={videoRef}
                          src={effectiveDirectVideoSrc}
                          poster={posterUrl}
                          autoPlay={autoPlay}
                          loop={loop}
                          muted={isMuted}
                          playsInline
                          onError={() => setVideoError(true)}
                          className="w-full h-full object-cover"
                        />
                        {!isPlaying && (
                          <div className="absolute inset-0 bg-ink/30 flex items-center justify-center backdrop-blur-[1px]">
                            <div className="w-14 h-14 bg-white/95 rounded-full flex items-center justify-center shadow-lift text-ink group-hover:scale-105 transition-transform">
                              <Play className="w-6 h-6 ml-0.5 fill-ink" />
                            </div>
                          </div>
                        )}
                      </div>
                    )
                  ) : (
                    <div className="p-6 text-center text-mutedText text-xs">
                      Mobile Walkthrough Video
                    </div>
                  )}

                  {/* Bottom Home Indicator Bar */}
                  <div className="w-24 sm:w-28 h-1 bg-white/70 rounded-full absolute bottom-2 left-1/2 -translate-x-1/2 z-30 pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Sub-pill badge below phone */}
            <div className="mt-4 px-3.5 py-1 rounded-full bg-paper-alt border border-borderSubtle text-[11px] font-medium text-bodyText shadow-sm flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              <span>Over 100+ diagnostic labs onboarded</span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
