import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Copy, Check, Code, Github, Linkedin, Mail } from './icons';

export default function Footer({ onOpenContact }) {
  const [copied, setCopied] = useState(false);
  const email = 'nidhi.developer@gmail.com';

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleScrollToProjects = (e) => {
    e.preventDefault();
    const projects = document.querySelector('#projects');
    if (projects) {
      projects.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer
      id="footer"
      className="relative w-full min-h-[60vh] bg-[#17151A] text-[#F7F5F2] pt-24 pb-12 overflow-hidden border-t border-white/10 flex flex-col justify-between"
    >
      {/* Ambient background aura in Muted Plum */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-64 bg-[#8B6F8F]/10 blur-[160px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full flex-1 flex flex-col justify-between gap-16">
        
        {/* 1. TOP INFORMATION GRID (3 Columns) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 sm:gap-8 pb-12 border-b border-white/10">
          
          {/* Left Column: Core Disciplines */}
          <div className="flex flex-col space-y-3">
            <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-[#8B6F8F]">
              // DISCIPLINE & FOCUS
            </span>
            <div className="space-y-1.5 font-mono text-xs text-[#EAE5F2]/75 uppercase tracking-wider leading-relaxed">
              <p className="hover:text-white transition-colors cursor-default">
                • FULL STACK WEB DEVELOPMENT
              </p>
              <p className="hover:text-white transition-colors cursor-default">
                • REACT & COMPONENT ARCHITECTURE
              </p>
              <p className="hover:text-white transition-colors cursor-default">
                • REST API & NODE.JS SERVICES
              </p>
              <p className="hover:text-white transition-colors cursor-default">
                • DATABASE DESIGN & OPTIMIZATION
              </p>
            </div>
          </div>

          {/* Center Column: Work Showcase Navigation */}
          <div className="flex flex-col md:items-center justify-start space-y-3">
            <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-[#8B6F8F]">
              // SELECTED WORK
            </span>
            <div className="text-left md:text-center space-y-2">
              <p className="font-display font-bold text-lg sm:text-xl text-[#F7F5F2] tracking-tight">
                Software & Web Applications
              </p>
              <a
                href="#projects"
                onClick={handleScrollToProjects}
                className="group inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-[#EAE5F2]/80 hover:text-white relative border-b border-white/30 hover:border-[#8B6F8F] pb-0.5 transition-colors"
              >
                <span>Explore Projects</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#8B6F8F] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </div>

          {/* Right Column: Availability Status */}
          <div className="flex flex-col md:items-end justify-start space-y-3">
            <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-[#8B6F8F]">
              // STATUS & LOCATION
            </span>
            <div className="text-left md:text-right space-y-1.5">
              <div className="inline-flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#8B6F8F] animate-ping" />
                <span className="font-mono text-xs font-semibold text-white uppercase tracking-wider">
                  Open to Opportunities
                </span>
              </div>
              <p className="font-mono text-xs text-[#EAE5F2]/70">
                Full-Time Roles & Project Inquiries
              </p>
              <p className="font-mono text-[11px] text-[#EAE5F2]/50">
                TIMEZONE UTC+5:30 / REMOTE FRIENDLY
              </p>
            </div>
          </div>
        </div>

        {/* 2. CENTER HERO BRANDING: Giant "NIDHI" Typography Centerpiece */}
        <div className="my-6 sm:my-10 text-center overflow-hidden select-none">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="group relative inline-block cursor-pointer"
            onClick={onOpenContact}
          >
            {/* Ambient hover aura behind text */}
            <div className="absolute inset-0 -inset-x-8 bg-gradient-to-r from-transparent via-[#8B6F8F]/25 to-transparent blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

            <h1 className="font-display font-black text-[18vw] leading-[0.82] tracking-tighter text-[#EAE5F2] group-hover:text-white transition-colors duration-500">
              NIDHI
            </h1>

            {/* Supporting Line / Subtitle pill */}
            <div className="mt-4 flex flex-col items-center gap-2">
              <span className="text-xs sm:text-sm font-mono uppercase tracking-[0.25em] text-[#C9A7B5] font-bold">
                LET'S CREATE SOMETHING USEFUL.
              </span>
              <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 inline-flex items-center gap-1.5 px-4 py-1 rounded-full bg-[#8B6F8F] text-white text-xs font-mono uppercase tracking-wider font-bold shadow-lg shadow-[#8B6F8F]/30">
                <span>Start a Conversation</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </motion.div>
        </div>

        {/* 3. BOTTOM CONTACT GRID (3 Columns) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center pt-8 border-t border-white/10 text-xs font-mono text-[#EAE5F2]/70">
          {/* Left: Copyright & Tech */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2">
            <span>© {new Date().getFullYear()} NIDHI. All rights reserved.</span>
            <span className="hidden sm:inline text-white/30">•</span>
            <span className="inline-flex items-center gap-1 text-[#EAE5F2]/90">
              <Code className="w-3.5 h-3.5 text-[#8B6F8F]" />
              <span>React & Tailwind CSS</span>
            </span>
          </div>

          {/* Center: Email with Instant Copy */}
          <div className="flex justify-start md:justify-center">
            <button
              onClick={copyEmail}
              className="group inline-flex items-center gap-2 text-[#EAE5F2]/90 hover:text-white transition-colors py-1 px-3 rounded-full hover:bg-white/5 border border-transparent hover:border-white/10"
              title="Click to copy email"
            >
              <span className="underline decoration-[#8B6F8F]/50 underline-offset-4 group-hover:decoration-[#8B6F8F]">
                {email}
              </span>
              {copied ? (
                <span className="inline-flex items-center gap-1 text-[#C9A7B5] font-bold">
                  <Check className="w-3.5 h-3.5" />
                  <span>Copied!</span>
                </span>
              ) : (
                <Copy className="w-3 h-3 text-[#8B6F8F] group-hover:text-white transition-colors" />
              )}
            </button>
          </div>

          {/* Right: Social Connections */}
          <div className="flex items-center justify-start md:justify-end gap-5 text-[#EAE5F2]/80">
            <a
              href="#home"
              className="hover:text-white transition-colors"
            >
              Back to Top ↑
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors flex items-center gap-1"
            >
              <Github className="w-3.5 h-3.5 text-[#8B6F8F]" />
              <span>GitHub</span>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors flex items-center gap-1"
            >
              <Linkedin className="w-3.5 h-3.5 text-[#8B6F8F]" />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}

