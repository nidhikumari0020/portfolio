import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from './icons';

const NAV_LINKS = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Process', href: '#process' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#footer' },
];

export default function Navbar({ onOpenHireModal }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'py-3.5 bg-[#17151A]/85 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-black/20'
            : 'py-6 bg-transparent border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
          {/* Logo / Wordmark */}
          <a
            href="#home"
            className="group flex items-center gap-1 text-2xl sm:text-3xl font-display font-extrabold tracking-tight text-[#F7F5F2] focus:outline-none"
          >
            <span>NIDHI</span>
            <span className="w-2 h-2 rounded-full bg-[#8B6F8F] transition-transform duration-300 group-hover:scale-150" />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 xl:gap-9">
            {NAV_LINKS.map((link, idx) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="relative text-xs uppercase tracking-widest font-mono font-medium text-[#EAE5F2]/80 hover:text-white transition-colors duration-200 py-1"
              >
                {link.name}
                {/* Animated underline expanding left to right */}
                <span
                  className={`absolute left-0 bottom-0 h-[2px] bg-[#8B6F8F] rounded-full transition-all duration-300 ease-out ${
                    hoveredIndex === idx ? 'w-full opacity-100' : 'w-0 opacity-0'
                  }`}
                />
              </a>
            ))}
          </nav>

          {/* Right Action: Let's Connect CTA */}
          <div className="hidden sm:flex items-center gap-4">
            <button
              onClick={onOpenHireModal}
              className="relative group px-5 py-2.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider text-white overflow-hidden transition-all duration-300 bg-[#8B6F8F]/25 hover:bg-[#8B6F8F]/40 border border-[#8B6F8F]/40 hover:border-[#8B6F8F] backdrop-blur-md shadow-lg shadow-black/10 hover:shadow-glow-plum active:scale-95"
            >
              <span className="relative z-10 flex items-center gap-2">
                <span>Let's Connect</span>
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-[#C9A7B5]" />
              </span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl text-[#F7F5F2] hover:bg-white/10 transition-colors focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Slide-Down Menu in Sophisticated Dark Charcoal */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-40 bg-[#17151A] text-[#F7F5F2] flex flex-col justify-between px-8 py-24 lg:hidden overflow-y-auto"
          >
            <div className="flex flex-col gap-5 mt-4">
              <span className="text-xs uppercase tracking-widest text-[#8B6F8F] font-mono font-bold">
                // MENU
              </span>
              {NAV_LINKS.map((link, idx) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.08 + idx * 0.05, duration: 0.3 }}
                  className="font-display font-bold text-3xl sm:text-4xl text-[#F7F5F2] hover:text-[#8B6F8F] transition-colors"
                >
                  {link.name}
                </motion.a>
              ))}
            </div>

            <div className="flex flex-col gap-4 pt-8 border-t border-white/10">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenHireModal();
                }}
                className="w-full py-4 rounded-full bg-[#8B6F8F] hover:bg-[#7B5F7F] text-white text-center font-mono font-bold text-sm uppercase tracking-wider transition-colors shadow-xl"
              >
                Let's Connect
              </button>
              <p className="text-center text-xs text-[#EAE5F2]/60 font-mono">
                Nidhi • Full Stack Developer
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

