import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Code2, Server, Database, Terminal } from './icons';

const SKILL_CATEGORIES = [
  {
    id: 'frontend',
    title: 'Frontend Development',
    icon: Code2,
    badge: 'Client & UI',
    description: 'Creating responsive, accessible, and high-performance user interfaces with modern component architectures.',
    skills: [
      { name: 'HTML5', desc: 'Semantic Structure & SEO' },
      { name: 'CSS3', desc: 'Modern Layouts & Animations' },
      { name: 'JavaScript (ES6+)', desc: 'Asynchronous Logic & DOM' },
      { name: 'React.js', desc: 'Hooks, State & Component Tree' },
      { name: 'Tailwind CSS', desc: 'Utility-First Design Tokens' },
    ],
  },
  {
    id: 'backend',
    title: 'Backend Engineering',
    icon: Server,
    badge: 'Logic & Services',
    description: 'Architecting robust server-side applications, modular middleware, and secure API gateways.',
    skills: [
      { name: 'Node.js', desc: 'Runtime & Event Loop' },
      { name: 'Express.js', desc: 'RESTful Routing & Middleware' },
      { name: 'REST APIs', desc: 'CRUD, Endpoints & JSON Contracts' },
    ],
  },
  {
    id: 'database',
    title: 'Databases & Storage',
    icon: Database,
    badge: 'Persistence',
    description: 'Designing normalized relational schemas and flexible document-based databases for reliable storage.',
    skills: [
      { name: 'MySQL', desc: 'Relational Schemas, Queries & Joins' },
      { name: 'MongoDB', desc: 'NoSQL Document Store & Aggregations' },
    ],
  },
  {
    id: 'tools',
    title: 'Developer Tools',
    icon: Terminal,
    badge: 'Workflow & CI',
    description: 'Utilizing modern tooling for version control, efficient development workflows, and API testing.',
    skills: [
      { name: 'Git', desc: 'Branching & Version Control' },
      { name: 'GitHub', desc: 'Collaboration & Repositories' },
      { name: 'VS Code', desc: 'Development Environment & Extensions' },
      { name: 'Postman', desc: 'API Testing & Request Validation' },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="relative w-full bg-[#F7F5F2] text-[#17151A] py-28 sm:py-36 overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern-light opacity-60 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#EAE5F2] border border-[#8B6F8F]/30 text-xs font-mono font-bold uppercase tracking-widest text-[#8B6F8F] mb-4 shadow-sm"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-[#17151A] tracking-tight leading-none"
          >
            My Toolkit
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-5 text-base sm:text-lg text-[#6F6A70] leading-relaxed"
          >
            A focused collection of programming languages, frontend frameworks, backend runtimes, and databases I use to build complete web applications.
          </motion.p>
        </div>

        {/* Skills Grid (4 Categories) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {SKILL_CATEGORIES.map((category, idx) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                whileHover={{ y: -6 }}
                className="group relative flex flex-col justify-between p-7 sm:p-9 rounded-3xl bg-white border border-[#17151A]/10 shadow-xl shadow-black/5 hover:border-[#8B6F8F]/40 hover:shadow-card-soft transition-all duration-400"
              >
                <div>
                  {/* Category Top Row */}
                  <div className="flex items-center justify-between border-b border-[#17151A]/10 pb-5 mb-5">
                    <div className="flex items-center gap-3.5">
                      <div className="w-12 h-12 rounded-2xl bg-[#EAE5F2] text-[#8B6F8F] group-hover:bg-[#8B6F8F] group-hover:text-white transition-colors duration-300 flex items-center justify-center shadow-sm">
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="font-display font-extrabold text-xl text-[#17151A]">
                          {category.title}
                        </h3>
                        <span className="text-xs font-mono text-[#6F6A70]">
                          {category.badge}
                        </span>
                      </div>
                    </div>
                  </div>

                  <p className="text-sm text-[#6F6A70] leading-relaxed mb-6">
                    {category.description}
                  </p>

                  {/* Skills Tag Cloud with Descriptions */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {category.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="flex flex-col p-3 rounded-xl bg-[#F7F5F2] hover:bg-[#EAE5F2] border border-[#17151A]/5 transition-colors group/skill"
                      >
                        <span className="font-mono font-bold text-xs sm:text-sm text-[#17151A] group-hover/skill:text-[#8B6F8F] transition-colors">
                          {skill.name}
                        </span>
                        <span className="text-[11px] text-[#6F6A70] font-sans mt-0.5">
                          {skill.desc}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom decorative accent line */}
                <div className="mt-6 pt-4 border-t border-[#17151A]/5 flex items-center justify-between text-xs font-mono text-[#8B6F8F]">
                  <span className="inline-flex items-center gap-1.5 font-semibold">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#8B6F8F]" />
                    <span>Production-Ready</span>
                  </span>
                  <span className="text-[#6F6A70]">0{idx + 1} // 04</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
