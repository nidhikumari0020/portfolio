import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Github, Layers } from './icons';

const PROJECTS = [
  {
    id: '01',
    title: 'Full-Stack SaaS Web Platform',
    category: 'React & Node.js Application',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop',
    description: 'An interactive web application featuring JWT authentication, responsive dashboards, real-time state management, and modular REST API services.',
    tags: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS'],
    demoUrl: 'https://github.com',
    githubUrl: 'https://github.com',
  },
  {
    id: '02',
    title: 'Database Analytics & Management Portal',
    category: 'Relational Database System',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop',
    description: 'A comprehensive administrative dashboard designed for executing complex relational queries, data filtering, and secure CRUD operations.',
    tags: ['React.js', 'Express.js', 'MySQL', 'REST APIs', 'Chart.js'],
    demoUrl: 'https://github.com',
    githubUrl: 'https://github.com',
  },
  {
    id: '03',
    title: 'Interactive Cinematic Web Suite',
    category: 'Frontend & Creative Engineering',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop',
    description: 'A high-performance modern web application featuring custom water-fill clip-path loaders, 60fps micro-animations, and video integration.',
    tags: ['React.js', 'Framer Motion', 'Tailwind CSS', 'JavaScript ES6+'],
    demoUrl: 'https://github.com',
    githubUrl: 'https://github.com',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative w-full bg-[#17151A] text-[#F7F5F2] py-28 sm:py-36 overflow-hidden">
      {/* Background ambient lighting in Muted Plum */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#8B6F8F]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 sm:mb-20">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono font-bold uppercase tracking-widest text-[#C9A7B5] mb-4">
              <Layers className="w-3.5 h-3.5 text-[#8B6F8F]" />
              <span>Selected Projects</span>
            </div>
            <h2 className="font-display font-black text-4xl sm:text-6xl text-[#F7F5F2] tracking-tight leading-none">
              Things I've Built
            </h2>
          </div>
          <p className="text-[#EAE5F2]/70 max-w-md text-sm sm:text-base leading-relaxed font-normal">
            A selection of full-stack web applications, database architectures, and interactive digital interfaces built with modern engineering practices.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-10">
          {PROJECTS.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              whileHover={{ y: -6 }}
              className="group relative flex flex-col rounded-3xl bg-[#1E1B22] border border-white/10 overflow-hidden shadow-2xl hover:border-[#8B6F8F]/50 transition-all duration-400"
            >
              {/* Image Preview Container */}
              <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-[#110F13]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 filter brightness-90 group-hover:brightness-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1E1B22] via-transparent to-black/30" />
                
                {/* ID Tag */}
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#17151A]/80 backdrop-blur-md border border-white/20 text-xs font-mono text-[#F7F5F2] font-bold">
                  // {project.id}
                </div>

                {/* Hover Quick Action Buttons */}
                <div className="absolute bottom-4 right-4 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-full bg-[#17151A] text-white hover:bg-[#8B6F8F] transition-colors shadow-lg border border-white/20"
                    aria-label="View Source on GitHub"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-full bg-[#8B6F8F] text-white hover:bg-[#7B5F7F] transition-colors shadow-lg"
                    aria-label="Live Demo"
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-xs uppercase tracking-wider font-mono text-[#8B6F8F] font-bold">
                    {project.category}
                  </span>
                  <h3 className="font-display font-extrabold text-2xl text-[#F7F5F2] mt-1.5 group-hover:text-[#C9A7B5] transition-colors">
                    {project.title}
                  </h3>
                  <p className="mt-3 text-[#EAE5F2]/75 text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Tech Tags */}
                <div className="mt-6 pt-5 border-t border-white/10 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-[11px] font-mono text-[#EAE5F2]/80"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

