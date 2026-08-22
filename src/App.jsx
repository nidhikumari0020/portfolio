import React, { useState } from 'react';
import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import ProcessTimeline from './components/ProcessTimeline';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Footer from './components/Footer';
import ContactModal from './components/ContactModal';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-[#17151A] text-[#F7F5F2] overflow-x-hidden font-sans">
      {/* 1. Fullscreen Cinematic Water-fill Preloader */}
      <Preloader onComplete={() => setIsLoading(false)} />

      {/* 2. Floating Navbar */}
      <Navbar onOpenHireModal={() => setIsModalOpen(true)} />

      {/* 3. Main Page Content */}
      <main className="relative z-10">
        {/* Hero Section with Local Video and Controls */}
        <Hero onOpenContact={() => setIsModalOpen(true)} />

        {/* Personal About Me Section with Dev Pass */}
        <About />

        {/* Technical Toolkit & Capabilities */}
        <Skills />

        {/* How I Build Process Timeline */}
        <ProcessTimeline />

        {/* Selected Full-Stack Projects */}
        <Projects />

        {/* Growth & Learning Milestones */}
        <Experience />
      </main>

      {/* 4. Luxury Dark Footer with Giant NIDHI Branding */}
      <Footer onOpenContact={() => setIsModalOpen(true)} />

      {/* 5. Contact & Connect Modal */}
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}

