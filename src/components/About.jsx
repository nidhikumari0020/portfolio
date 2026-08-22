import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, QrCode, FileText, ArrowRight } from './icons';

export default function About() {
  const handleDownloadResume = () => {
    // Allows Nidhi to link a real PDF resume or trigger download
    window.open('#contact', '_self');
  };

  return (
    <section
      id="about"
      className="relative w-full bg-[#EAE5F2] text-[#17151A] pt-24 pb-32 overflow-hidden"
    >
      {/* Subtle background decorative stars in Muted Plum */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.2, 1], rotate: [0, 45, 0], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-16 right-16 sm:right-28 text-[#8B6F8F]"
        >
          <svg className="w-8 h-8 sm:w-10 sm:h-10 fill-current" viewBox="0 0 24 24">
            <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" />
          </svg>
        </motion.div>

        <motion.div
          animate={{ scale: [1, 1.25, 1], rotate: [0, -45, 0], opacity: [0.25, 0.5, 0.25] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          className="absolute top-1/2 left-8 sm:left-20 text-[#8B6F8F]"
        >
          <svg className="w-6 h-6 sm:w-8 sm:h-8 fill-current" viewBox="0 0 24 24">
            <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" />
          </svg>
        </motion.div>
      </div>

      {/* Main Two-Column Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT COLUMN: Hanging Developer ID Badge & Lanyard */}
          <div className="lg:col-span-5 flex flex-col items-center justify-start relative pt-8 sm:pt-4">
            
            {/* Lanyard Top Anchor / Strap */}
            <div className="relative flex flex-col items-center w-full">
              {/* Lanyard Straps */}
              <div className="relative w-16 h-24 flex justify-center">
                {/* Left strap */}
                <div className="absolute top-0 left-3 w-4 h-full bg-[#17151A] border-r border-black/40 shadow-lg origin-top transform -rotate-6" />
                {/* Right strap */}
                <div className="absolute top-0 right-3 w-4 h-full bg-[#17151A] border-l border-black/40 shadow-lg origin-top transform rotate-6" />
                
                {/* Lanyard Print Text */}
                <div className="absolute top-4 font-mono text-[7px] font-bold text-[#F7F5F2]/60 tracking-widest uppercase rotate-90 select-none">
                  NIDHI • DEV
                </div>
              </div>

              {/* Metallic Clip */}
              <div className="relative -mt-2.5 z-20 flex flex-col items-center">
                <div className="w-8 h-3.5 rounded-full border-2 border-neutral-400 bg-neutral-300 shadow-md" />
                <div className="w-4 h-7 bg-gradient-to-b from-neutral-200 via-neutral-400 to-neutral-600 rounded-sm shadow-md border border-neutral-400 -mt-1 flex items-center justify-center">
                  <div className="w-1.5 h-3 bg-neutral-800 rounded-full opacity-60" />
                </div>
                <div className="w-6 h-2 bg-neutral-700 rounded-t-sm -mt-0.5" />
              </div>
            </div>

            {/* ID BADGE CARD - Tilted at -2.5 degrees with spring hover reaction */}
            <motion.div
              initial={{ rotate: -2.5 }}
              whileHover={{ rotate: 0, scale: 1.02, y: -4 }}
              transition={{ type: 'spring', stiffness: 260, damping: 20 }}
              className="relative w-full max-w-[340px] sm:max-w-[360px] bg-[#17151A] text-[#F7F5F2] rounded-3xl p-6 sm:p-7 shadow-2xl shadow-black/40 border border-[#EAE5F2]/20 -mt-2 cursor-pointer select-none group"
            >
              {/* Badge Slot Punch Hole */}
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 w-12 h-3.5 bg-[#EAE5F2] rounded-full border-2 border-[#17151A] shadow-inner" />

              {/* Card Header */}
              <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-5 pt-2">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#8B6F8F] animate-pulse" />
                  <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#EAE5F2]/70">
                    DEV PASS 2026
                  </span>
                </div>
                <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/10 text-[10px] font-mono text-white">
                  <Cpu className="w-3 h-3 text-[#C9A7B5]" />
                  <span>FULL STACK</span>
                </div>
              </div>

              {/* Monogram / Dev Visual */}
              <div className="flex flex-col items-center text-center">
                <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-2xl overflow-hidden border-2 border-[#8B6F8F]/40 shadow-xl bg-gradient-to-br from-[#2D2933] to-[#17151A] flex items-center justify-center group-hover:border-[#8B6F8F] transition-colors duration-300">
                  <div className="flex flex-col items-center justify-center">
                    <span className="font-display font-black text-5xl sm:text-6xl text-[#EAE5F2] tracking-tighter">
                      N
                    </span>
                    <span className="text-[9px] font-mono tracking-widest uppercase text-[#C9A7B5] mt-1">
                      Engineer
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-radial-gradient pointer-events-none bg-[radial-gradient(circle_at_center,transparent_40%,rgba(23,21,26,0.6)_100%)]" />
                </div>

                {/* Name & Role */}
                <h3 className="mt-4 font-display font-extrabold text-2xl tracking-tight text-[#F7F5F2]">
                  NIDHI
                </h3>
                <p className="text-xs uppercase tracking-widest font-mono text-[#8B6F8F] font-bold mt-0.5">
                  Full Stack Developer
                </p>
                <p className="text-xs text-[#EAE5F2]/70 mt-2 max-w-[240px] leading-relaxed">
                  Building responsive web applications, backend APIs, and modern digital experiences.
                </p>
              </div>

              {/* Barcode & Security Hologram Footer */}
              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-0.5 h-6">
                    {[3, 1, 2, 4, 1, 3, 2, 1, 4, 2, 1, 3, 2, 4, 1, 2, 3].map((h, i) => (
                      <div
                        key={i}
                        style={{ width: `${h}px` }}
                        className="h-full bg-white/70 rounded-full"
                      />
                    ))}
                  </div>
                  <span className="font-mono text-[8px] text-[#EAE5F2]/50 tracking-wider">
                    ID // ND-FS-2026
                  </span>
                </div>

                {/* QR Code / Chip */}
                <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#8B6F8F] via-[#C9A7B5] to-[#EAE5F2] p-[1px] shadow-sm">
                  <div className="w-full h-full bg-[#17151A] rounded-xl flex items-center justify-center">
                    <QrCode className="w-5 h-5 text-white/90" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* RIGHT COLUMN: Editorial Story & Highlights */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-7">
            {/* Tag badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#17151A]/10 border border-[#17151A]/15 w-fit"
            >
              <span className="w-2 h-2 rounded-full bg-[#8B6F8F]" />
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#17151A]">
                About Me
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-[#17151A] tracking-tight leading-none"
            >
              Hello, I'm Nidhi.
            </motion.h2>

            {/* Authentic Story Introduction */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="space-y-4 text-base sm:text-lg text-[#17151A]/85 leading-relaxed font-normal"
            >
              <p>
                I am a dedicated developer focused on full-stack web development, software engineering, and interactive interface design.
              </p>
              <p className="text-[#6F6A70]">
                I enjoy building practical web applications from end to end — bridging intuitive frontend user interfaces with structured backend APIs and relational & NoSQL databases.
              </p>
              <p className="text-[#6F6A70] text-sm sm:text-base">
                Whether implementing dynamic React components, building modular Express routes, or designing database schemas in MySQL and MongoDB, I focus on clean code, thoughtful details, and fast performance.
              </p>
            </motion.div>

            {/* Action Buttons: Download Resume & Contact */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="#footer"
                className="px-7 py-3.5 rounded-full bg-[#17151A] hover:bg-[#2D2933] text-[#F7F5F2] font-mono font-bold text-xs uppercase tracking-wider transition-all duration-300 hover:scale-105 flex items-center gap-2 shadow-lg"
              >
                <FileText className="w-4 h-4 text-[#C9A7B5]" />
                <span>Download Resume</span>
              </a>

              <a
                href="#contact"
                className="px-7 py-3.5 rounded-full bg-white hover:bg-neutral-100 text-[#17151A] font-mono font-bold text-xs uppercase tracking-wider border border-[#17151A]/20 transition-all duration-300 hover:scale-105 flex items-center gap-2"
              >
                <span>Get in Touch</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#8B6F8F]" />
              </a>
            </div>

            {/* Technology Highlights: 3 Floating Cards */}
            <div className="pt-4 border-t border-[#17151A]/10">
              <span className="block text-xs font-mono font-bold uppercase tracking-widest text-[#6F6A70] mb-4">
                // CORE TECHNOLOGY HIGHLIGHTS
              </span>
              
              <div className="grid grid-cols-3 gap-3 sm:gap-4">
                {/* 1. React Card */}
                <motion.div
                  whileHover={{ y: -4 }}
                  className="flex flex-col items-center p-3.5 sm:p-4 rounded-2xl bg-white border border-[#17151A]/10 shadow-sm"
                >
                  <div className="w-10 h-10 flex items-center justify-center text-[#8B6F8F]">
                    <svg className="w-8 h-8 animate-spin-slow" viewBox="-11.5 -10.23174 23 20.46348">
                      <circle cx="0" cy="0" r="2.05" fill="#8B6F8F" />
                      <g stroke="#8B6F8F" strokeWidth="1" fill="none">
                        <ellipse rx="11" ry="4.2" />
                        <ellipse rx="11" ry="4.2" transform="rotate(60)" />
                        <ellipse rx="11" ry="4.2" transform="rotate(120)" />
                      </g>
                    </svg>
                  </div>
                  <span className="mt-2 font-display font-bold text-xs sm:text-sm text-[#17151A]">
                    React.js
                  </span>
                  <span className="text-[10px] font-mono text-[#6F6A70]">UI & State</span>
                </motion.div>

                {/* 2. Node.js / Express Card */}
                <motion.div
                  whileHover={{ y: -4 }}
                  className="flex flex-col items-center p-3.5 sm:p-4 rounded-2xl bg-white border border-[#17151A]/10 shadow-sm"
                >
                  <div className="w-10 h-10 flex items-center justify-center text-[#8B6F8F]">
                    <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect width="20" height="8" x="2" y="2" rx="2" ry="2" />
                      <rect width="20" height="8" x="2" y="14" rx="2" ry="2" />
                      <line x1="6" x2="6.01" y1="6" y2="6" />
                      <line x1="6" x2="6.01" y1="18" y2="18" />
                    </svg>
                  </div>
                  <span className="mt-2 font-display font-bold text-xs sm:text-sm text-[#17151A]">
                    Node / Express
                  </span>
                  <span className="text-[10px] font-mono text-[#6F6A70]">REST APIs</span>
                </motion.div>

                {/* 3. Databases Card */}
                <motion.div
                  whileHover={{ y: -4 }}
                  className="flex flex-col items-center p-3.5 sm:p-4 rounded-2xl bg-white border border-[#17151A]/10 shadow-sm"
                >
                  <div className="w-10 h-10 flex items-center justify-center text-[#8B6F8F]">
                    <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <ellipse cx="12" cy="5" rx="9" ry="3" />
                      <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
                      <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3" />
                    </svg>
                  </div>
                  <span className="mt-2 font-display font-bold text-xs sm:text-sm text-[#17151A]">
                    MySQL & Mongo
                  </span>
                  <span className="text-[10px] font-mono text-[#6F6A70]">Data Architecture</span>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Smooth Organic SVG Transition to Warm Off-White */}
      <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none z-20 pointer-events-none">
        <svg
          className="relative block w-full h-8 sm:h-12 text-[#F7F5F2]"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          fill="currentColor"
        >
          <path d="M0,0 C300,90 800,10 1200,80 L1200,120 L0,120 Z" />
        </svg>
      </div>
    </section>
  );
}

