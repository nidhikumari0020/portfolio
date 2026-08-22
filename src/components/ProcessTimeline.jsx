import React, { useRef, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Compass, Palette, Code2, Rocket, Sparkles, CheckCircle2 } from './icons';

const PROCESS_STEPS = [
  {
    step: '01',
    title: 'Understand',
    position: 'right',
    rotation: 1.5,
    icon: Compass,
    subtitle: 'Requirements & Scope',
    desc: 'Understand the problem, user goals, and technical requirements before writing code to establish clear milestones.',
    bullets: ['Requirements Analysis', 'User Needs Mapping', 'System Architecture'],
  },
  {
    step: '02',
    title: 'Design',
    position: 'left',
    rotation: -1.5,
    icon: Palette,
    subtitle: 'UX & Interface Structure',
    desc: 'Plan the interface structure, component layout, and user experience with clean design tokens and responsive flows.',
    bullets: ['Layout & Typography', 'Component Hierarchy', 'Interactive Flow'],
  },
  {
    step: '03',
    title: 'Build',
    position: 'right',
    rotation: 1.5,
    icon: Code2,
    subtitle: 'Frontend & Backend Code',
    desc: 'Develop modular frontend components with React, write clean REST APIs with Node.js & Express, and configure databases.',
    bullets: ['React Component Tree', 'Express & REST APIs', 'MySQL / MongoDB Schemas'],
  },
  {
    step: '04',
    title: 'Improve',
    position: 'left',
    rotation: -1.5,
    icon: Rocket,
    subtitle: 'Testing & Optimization',
    desc: 'Test functionality across screen sizes, optimize bundle size and database queries, resolve issues, and polish details.',
    bullets: ['Cross-Device Testing', 'Performance Tuning', 'Code Refactoring'],
  },
];

export default function ProcessTimeline() {
  const containerRef = useRef(null);
  const [hoveredCard, setHoveredCard] = useState(null);

  // Scroll progress for the timeline curve
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start center', 'end center'],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <section
      id="process"
      ref={containerRef}
      className="relative w-full bg-[#F7F5F2] text-[#17151A] py-28 sm:py-36 overflow-hidden"
    >
      {/* Background Subtle Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern-light opacity-50 pointer-events-none" />

      {/* Header Section */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-8 text-center flex flex-col items-center">
        {/* Rounded Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#EAE5F2] border border-[#8B6F8F]/30 text-xs font-mono font-bold uppercase tracking-widest text-[#8B6F8F] shadow-sm mb-6"
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>Workflow & Engineering</span>
        </motion.div>

        {/* Large Bold Headline */}
        <div className="relative inline-block max-w-3xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display font-black text-3xl sm:text-5xl lg:text-6xl tracking-tight text-[#17151A] leading-[1.15]"
          >
            HOW I BUILD
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-3 font-display font-bold text-xl sm:text-2xl text-[#8B6F8F]"
          >
            From idea to working product.
          </motion.p>
        </div>

        {/* Supporting Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-5 text-base sm:text-lg text-[#6F6A70] max-w-2xl leading-relaxed"
        >
          My approach to turning ideas into useful, scalable, and thoughtful digital experiences.
        </motion.p>
      </div>

      {/* Main Timeline S-Curve and Floating Process Cards */}
      <div className="relative max-w-6xl mx-auto px-6 sm:px-8 mt-20 sm:mt-28">
        
        {/* Giant Organic S-Curve SVG Line running through the section */}
        <div className="absolute inset-0 pointer-events-none hidden md:block">
          <svg
            className="w-full h-full"
            viewBox="0 0 1000 1400"
            fill="none"
            preserveAspectRatio="none"
          >
            {/* Background static dashed track */}
            <path
              d="M 500 50 C 900 200, 950 400, 500 550 C 50 700, 50 900, 500 1050 C 900 1200, 800 1350, 500 1380"
              stroke="#D6CCE3"
              strokeWidth="4"
              strokeDasharray="10 10"
            />
            {/* Animated scroll-driven path that fills in Muted Plum */}
            <motion.path
              d="M 500 50 C 900 200, 950 400, 500 550 C 50 700, 50 900, 500 1050 C 900 1200, 800 1350, 500 1380"
              stroke="#8B6F8F"
              strokeWidth="5"
              strokeDasharray="12 12"
              style={{ pathLength: smoothProgress }}
            />
          </svg>
        </div>

        {/* Mobile vertical line */}
        <div className="md:hidden absolute top-0 bottom-0 left-6 w-1 bg-[#EAE5F2] border-l-2 border-dashed border-[#8B6F8F]/40 pointer-events-none" />

        {/* Process Cards Container */}
        <div className="flex flex-col gap-14 sm:gap-20 relative z-10">
          {PROCESS_STEPS.map((item, idx) => {
            const isEven = item.position === 'right';
            const Icon = item.icon;
            const isHovered = hoveredCard === idx;

            return (
              <div
                key={item.step}
                className={`flex items-center w-full ${
                  isEven ? 'md:justify-end' : 'md:justify-start'
                } pl-10 md:pl-0`}
              >
                <motion.div
                  initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.7, delay: idx * 0.12 }}
                  onMouseEnter={() => setHoveredCard(idx)}
                  onMouseLeave={() => setHoveredCard(null)}
                  style={{
                    rotate: `${item.rotation}deg`,
                  }}
                  className={`group relative w-full md:w-[460px] lg:w-[500px] rounded-3xl p-7 sm:p-9 transition-all duration-400 cursor-pointer ${
                    isHovered
                      ? 'bg-[#17151A] text-[#F7F5F2] shadow-2xl scale-[1.02] border border-[#8B6F8F]/40'
                      : 'bg-white text-[#17151A] border border-[#17151A]/10 shadow-xl hover:border-[#8B6F8F]/40'
                  }`}
                >
                  {/* Top Step Number & Icon */}
                  <div className="flex items-start justify-between border-b pb-4 mb-5 border-current/10">
                    <div>
                      <span className="font-display font-black text-4xl sm:text-5xl tracking-tight text-[#8B6F8F]">
                        {item.step}
                      </span>
                      <span className="ml-3 font-mono text-xs uppercase tracking-widest opacity-70">
                        PHASE
                      </span>
                    </div>

                    <div
                      className={`p-3 rounded-2xl transition-colors duration-300 ${
                        isHovered
                          ? 'bg-[#8B6F8F] text-white'
                          : 'bg-[#EAE5F2] text-[#8B6F8F] group-hover:bg-[#8B6F8F] group-hover:text-white'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="font-display font-black text-2xl sm:text-3xl tracking-tight leading-none">
                    {item.title}
                  </h3>
                  <p
                    className={`text-xs uppercase tracking-wider font-mono font-bold mt-1.5 ${
                      isHovered ? 'text-[#C9A7B5]' : 'text-[#8B6F8F]'
                    }`}
                  >
                    {item.subtitle}
                  </p>

                  {/* Description */}
                  <p
                    className={`mt-4 text-sm sm:text-base leading-relaxed ${
                      isHovered ? 'text-[#EAE5F2]/90' : 'text-[#6F6A70]'
                    }`}
                  >
                    {item.desc}
                  </p>

                  {/* Key Deliverables Bullet Tags */}
                  <div className="mt-6 flex flex-wrap gap-2 pt-4 border-t border-current/10">
                    {item.bullets.map((bullet) => (
                      <span
                        key={bullet}
                        className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium ${
                          isHovered
                            ? 'bg-white/10 text-[#EAE5F2]'
                            : 'bg-[#F7F5F2] text-[#17151A] border border-[#17151A]/5'
                        }`}
                      >
                        <CheckCircle2 className="w-3 h-3 text-[#8B6F8F]" />
                        <span>{bullet}</span>
                      </span>
                    ))}
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
