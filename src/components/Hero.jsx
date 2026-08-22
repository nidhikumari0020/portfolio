import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, ChevronDown, ArrowRight, Volume2, VolumeX } from './icons';
import heroVideo from '../assets/hero video/hero-video.mp4';


export default function Hero({ onOpenContact }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    // Attempt autoplay muted on load
    if (videoRef.current) {
      videoRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch((err) => {
        console.warn('Autoplay prevented by browser:', err);
        setIsPlaying(false);
      });
    }
  }, []);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch((err) => {
        console.warn('Play error:', err);
        setIsPlaying(false);
      });
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  };

  const handleScrollToProjects = () => {
    const projectsSection = document.querySelector('#projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToAbout = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const TECH_TAGS = [
    'JavaScript',
    'React.js',
    'Node.js',
    'Express.js',
    'REST APIs',
    'MySQL',
    'MongoDB',
  ];

  return (
    <section
      id="home"
      className="relative w-full h-screen min-h-[720px] flex items-center justify-center overflow-hidden bg-[#17151A]"
    >
      {/* Background Hero Video with Subtle Dark Cinematic Gradient Overlay */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
        <video
          ref={videoRef}
          loop
          muted={isMuted}
          
          playsInline
          preload="metadata"
          className="w-full h-full object-cover scale-105 filter brightness-90 contrast-110"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>

        {/* Multi-layer Dark Cinematic Overlay - transparent enough to keep subject visible */}
        <div className="absolute inset-0 bg-[#17151A]/60 backdrop-blur-[1px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#17151A] via-transparent to-[#17151A]/70" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,rgba(23,21,26,0.85)_100%)]" />
      </div>

      {/* Main Hero Content Container */}
      <div className="relative z-10 max-w-7xl w-full mx-auto px-6 sm:px-8 lg:px-12 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-12 pt-20">

        {/* Left Editorial Content */}
        <div className="max-w-2xl lg:max-w-3xl">
          {/* Top Status Pill */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#17151A]/80 border border-[#EAE5F2]/20 backdrop-blur-md mb-6 shadow-md"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#8B6F8F] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#8B6F8F]" />
            </span>
            <span className="text-xs uppercase tracking-widest font-mono text-[#EAE5F2]">
              Full Stack Developer & Engineer
            </span>
          </motion.div>

          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-1 sm:space-y-2"
          >
            <h2 className="font-display font-bold text-3xl sm:text-5xl lg:text-6xl text-[#F7F5F2] tracking-tight">
              Hi, I'm Nidhi.
            </h2>
            <h1 className="font-display font-black text-4xl sm:text-6xl lg:text-8xl tracking-tight uppercase leading-[0.95] text-stroke-white-thick drop-shadow-2xl">
              Full Stack
              <br />
              <span className="text-[#F7F5F2]">Developer</span>
            </h1>
          </motion.div>

          {/* Supporting Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="mt-6 text-base sm:text-lg text-[#EAE5F2]/90 font-normal leading-relaxed max-w-xl"
          >
            I build modern, responsive web applications with clean interfaces and thoughtful user experiences.
          </motion.p>

          {/* Technology Focus Badges */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="mt-6 flex flex-wrap gap-2"
          >
            {TECH_TAGS.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-full text-xs font-mono bg-white/10 hover:bg-[#8B6F8F]/25 border border-white/15 text-[#F7F5F2] transition-colors"
              >
                {tech}
              </span>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="mt-8 sm:mt-10 flex flex-wrap items-center gap-4 sm:gap-6"
          >
            {/* Primary CTA (Muted Plum) */}
            <button
              onClick={handleScrollToProjects}
              className="px-8 py-4 rounded-full bg-[#8B6F8F] hover:bg-[#7B5F7F] text-white font-mono font-bold text-xs sm:text-sm uppercase tracking-wider transition-all duration-300 hover:scale-105 hover:shadow-glow-plum active:scale-95 flex items-center gap-2.5 group shadow-lg"
            >
              <span>View My Work</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>

            {/* Secondary CTA (Outlined) */}
            <button
              onClick={onOpenContact}
              className="px-8 py-4 rounded-full bg-[#17151A]/60 hover:bg-white/10 text-[#F7F5F2] font-mono font-bold text-xs sm:text-sm uppercase tracking-wider border border-[#EAE5F2]/30 hover:border-[#EAE5F2] backdrop-blur-xl transition-all duration-300 hover:shadow-md active:scale-95"
            >
              Let's Connect
            </button>
          </motion.div>
        </div>

        {/* Right Side: Circular Video Control & Sound Toggle */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="flex flex-col items-center justify-center self-center lg:self-center"
        >
          <div className="relative group flex flex-col items-center">
            {/* Ambient Plum Glow on hover/play */}
            <div
              className={`absolute -inset-4 rounded-full bg-[#8B6F8F] filter blur-2xl transition-opacity duration-500 ${isPlaying
                ? 'opacity-30 scale-110'
                : 'opacity-0 group-hover:opacity-25 group-hover:scale-105'
                }`}
            />

            {/* Circular Glassmorphism Play/Pause Button */}
            <button
              onClick={togglePlay}
              aria-label={isPlaying ? 'Pause Video' : 'Play Video'}
              className="relative w-28 h-28 sm:w-36 sm:h-36 rounded-full bg-[#17151A]/70 hover:bg-[#17151A]/90 border border-white/30 hover:border-[#8B6F8F] transition-all duration-500 backdrop-blur-2xl flex items-center justify-center group-hover:scale-105 shadow-2xl active:scale-95 focus:outline-none"
            >
              {/* Rotating outer dash ring */}
              <div className="absolute inset-1.5 rounded-full border border-dashed border-[#EAE5F2]/25 animate-spin-slow pointer-events-none" />

              {/* Icon */}
              {isPlaying ? (
                <Pause className="w-10 h-10 sm:w-12 sm:h-12 text-[#8B6F8F] fill-[#8B6F8F] transition-transform duration-300 group-hover:scale-110" />
              ) : (
                <Play className="w-10 h-10 sm:w-12 sm:h-12 text-white fill-white translate-x-1 transition-transform duration-300 group-hover:scale-110 group-hover:text-[#8B6F8F] group-hover:fill-[#8B6F8F]" />
              )}
            </button>

            {/* Label below button */}
            <span className="mt-4 text-xs font-mono uppercase tracking-widest text-[#EAE5F2]/90 font-bold transition-colors group-hover:text-[#8B6F8F]">
              {isPlaying ? 'PAUSE' : 'PLAY'}
            </span>

            {/* Sound On / Sound Off Toggle */}
            <button
              onClick={toggleMute}
              className="mt-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#17151A]/80 hover:bg-[#8B6F8F]/30 border border-white/15 text-[11px] font-mono uppercase tracking-wider text-[#EAE5F2]/80 hover:text-white transition-all backdrop-blur-md"
              aria-label={isMuted ? 'Turn Sound On' : 'Turn Sound Off'}
            >
              {isMuted ? (
                <>
                  <VolumeX className="w-3.5 h-3.5 text-[#C9A7B5]" />
                  <span>SOUND OFF</span>
                </>
              ) : (
                <>
                  <Volume2 className="w-3.5 h-3.5 text-[#8B6F8F]" />
                  <span>SOUND ON</span>
                </>
              )}
            </button>
          </div>
        </motion.div>
      </div>

      {/* Bottom Center Scroll Indicator (Desktop Only) */}
      <motion.button
        onClick={handleScrollToAbout}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.5 }}
        className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-1.5 text-[#EAE5F2]/60 hover:text-white transition-colors cursor-pointer"
        aria-label="Scroll to About Section"
      >
        <span className="text-[10px] uppercase font-mono tracking-widest text-[#EAE5F2]/50">
          Scroll Down
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
        >
          <ChevronDown className="w-4 h-4 text-[#8B6F8F]" />
        </motion.div>
      </motion.button>
    </section>
  );
}

