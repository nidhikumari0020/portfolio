import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, GraduationCap, Award, BookOpen, CheckCircle2 } from './icons';

const MILESTONES = [
  {
    period: '2025 — Present',
    title: 'Full Stack Web Development & System Design',
    subtitle: 'Self-Directed Engineering & Project Builds',
    icon: BookOpen,
    category: 'Practical Engineering',
    desc: 'Building end-to-end full stack web applications focusing on React component architecture, REST API design with Express, and persistent data storage with MySQL and MongoDB.',
    points: [
      'Engineered interactive React applications with dynamic routing and state management',
      'Developed modular Node.js/Express backend APIs with JSON schemas and CORS security',
      'Configured relational database schemas (MySQL) and flexible document stores (MongoDB)',
    ],
  },
  {
    period: '2024 — 2025',
    title: 'Computer Science & Software Foundations',
    subtitle: 'Core Curriculum & Academic Focus',
    icon: GraduationCap,
    category: 'Computer Science',
    desc: 'Studying core computer science fundamentals including algorithms, object-oriented programming, data structures, and database management systems.',
    points: [
      'Data Structures & Algorithms problem solving in modern JavaScript',
      'Database Management Systems, SQL queries, and relational integrity',
      'Web technologies, semantic markup, and responsive design systems',
    ],
  },
  {
    period: '2023 — 2024',
    title: 'Frontend Engineering & UI/UX Design',
    subtitle: 'Modern Web Interfaces & Responsive Design',
    icon: Award,
    category: 'Frontend & UI',
    desc: 'Mastered core frontend principles, asynchronous JavaScript (ES6+), CSS modern layout engines (Flexbox/Grid), and modern utility frameworks.',
    points: [
      'Mastery of modern JavaScript, DOM manipulation, and asynchronous fetch APIs',
      'Component-driven styling with Tailwind CSS and responsive breakpoints',
      'Micro-animations, layout shifts optimization, and accessible markup',
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="relative w-full bg-[#EAE5F2] text-[#17151A] py-28 sm:py-36 overflow-hidden">
      {/* Background Grid Accent */}
      <div className="absolute inset-0 bg-grid-pattern-light opacity-40 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 border border-[#8B6F8F]/30 text-xs font-mono font-bold uppercase tracking-widest text-[#8B6F8F] mb-4 shadow-sm"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Learning Journey & Background</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-[#17151A] tracking-tight leading-none"
          >
            Growth & Experience
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-5 text-base sm:text-lg text-[#6F6A70] leading-relaxed"
          >
            A progressive journey of continuous learning, software engineering practice, and practical full-stack development.
          </motion.p>
        </div>

        {/* Timeline Grid */}
        <div className="max-w-4xl mx-auto flex flex-col gap-8">
          {MILESTONES.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.12 }}
                className="group relative p-7 sm:p-9 rounded-3xl bg-white border border-[#17151A]/10 shadow-lg shadow-black/5 hover:border-[#8B6F8F]/40 hover:shadow-card-soft transition-all duration-300 flex flex-col md:flex-row gap-6 md:gap-8 items-start"
              >
                {/* Left Period & Badge */}
                <div className="flex md:flex-col items-center md:items-start justify-between w-full md:w-48 shrink-0 pb-4 md:pb-0 border-b md:border-b-0 border-[#17151A]/10">
                  <div className="w-12 h-12 rounded-2xl bg-[#EAE5F2] text-[#8B6F8F] group-hover:bg-[#8B6F8F] group-hover:text-white transition-colors duration-300 flex items-center justify-center shadow-sm mb-3">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="inline-block px-3 py-1 rounded-full bg-[#17151A]/5 text-xs font-mono font-bold text-[#8B6F8F]">
                      {item.period}
                    </span>
                    <span className="block text-[11px] font-mono text-[#6F6A70] mt-1.5 uppercase tracking-wider">
                      {item.category}
                    </span>
                  </div>
                </div>

                {/* Right Content */}
                <div className="flex-1">
                  <h3 className="font-display font-extrabold text-2xl text-[#17151A] tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-xs font-mono font-bold uppercase tracking-wider text-[#8B6F8F] mt-1">
                    {item.subtitle}
                  </p>
                  <p className="mt-3 text-sm sm:text-base text-[#6F6A70] leading-relaxed">
                    {item.desc}
                  </p>

                  {/* Bullet points */}
                  <ul className="mt-5 space-y-2 pt-4 border-t border-[#17151A]/10">
                    {item.points.map((pt, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-[#17151A]/85">
                        <CheckCircle2 className="w-4 h-4 text-[#8B6F8F] shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
