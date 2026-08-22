import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, Sparkles, CheckCircle2 } from './icons';
import confetti from 'canvas-confetti';

const INQUIRY_TYPES = [
  'Full Stack Web App',
  'Frontend / React UI',
  'Backend & REST API',
  'Database Engineering',
  'Internship / Full-time Opportunity',
];

export default function ContactModal({ isOpen, onClose }) {
  const [selectedType, setSelectedType] = useState('Full Stack Web App');
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#8B6F8F', '#C9A7B5', '#EAE5F2', '#17151A', '#ffffff'],
    });

    setTimeout(() => {
      setSubmitted(false);
      onClose();
      setFormData({ name: '', email: '', message: '' });
    }, 2800);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[99999] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/75 backdrop-blur-md"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-2xl bg-[#1E1B22] text-[#F7F5F2] rounded-3xl border border-white/15 p-6 sm:p-8 shadow-2xl shadow-black/80 z-10 my-8 overflow-hidden"
          >
            {/* Ambient Plum Lighting */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#8B6F8F]/15 rounded-full blur-3xl pointer-events-none" />

            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 p-2 rounded-full bg-white/5 hover:bg-white/15 text-white/70 hover:text-white transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {submitted ? (
              <div className="py-12 flex flex-col items-center justify-center text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#8B6F8F]/20 text-[#8B6F8F] flex items-center justify-center border border-[#8B6F8F]/40">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-display font-black text-3xl text-white">
                  Message Sent!
                </h3>
                <p className="text-[#EAE5F2]/75 max-w-sm text-sm">
                  Thank you for reaching out. Nidhi will review your note and get back to you shortly.
                </p>
              </div>
            ) : (
              <div>
                {/* Header */}
                <div className="mb-6">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#8B6F8F]/15 border border-[#8B6F8F]/30 text-xs font-mono text-[#C9A7B5] font-bold uppercase mb-2">
                    <Sparkles className="w-3 h-3 text-[#8B6F8F]" />
                    <span>Let's Connect</span>
                  </div>
                  <h2 className="font-display font-black text-3xl sm:text-4xl text-white tracking-tight">
                    Start a Conversation
                  </h2>
                  <p className="text-[#EAE5F2]/70 text-xs sm:text-sm mt-1">
                    Have a project, opportunity, or idea? Let's talk.
                  </p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Topic / Domain Selector */}
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#EAE5F2]/70 mb-2">
                      Inquiry Topic
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {INQUIRY_TYPES.map((type) => (
                        <button
                          key={type}
                          type="button"
                          onClick={() => setSelectedType(type)}
                          className={`px-3 py-1.5 rounded-full text-xs font-mono transition-all ${
                            selectedType === type
                              ? 'bg-[#8B6F8F] text-white font-bold shadow-md shadow-[#8B6F8F]/30'
                              : 'bg-white/5 hover:bg-white/10 text-[#EAE5F2]/80 border border-white/10'
                          }`}
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Name & Email Fields */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-[#EAE5F2]/70 mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Alex Morgan"
                        className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/15 focus:border-[#8B6F8F] focus:outline-none text-white text-sm placeholder:text-neutral-500 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-[#EAE5F2]/70 mb-1.5">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="alex@example.com"
                        className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/15 focus:border-[#8B6F8F] focus:outline-none text-white text-sm placeholder:text-neutral-500 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Message Field */}
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#EAE5F2]/70 mb-1.5">
                      Message Details *
                    </label>
                    <textarea
                      required
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell me about your project, idea, or questions..."
                      className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/15 focus:border-[#8B6F8F] focus:outline-none text-white text-sm placeholder:text-neutral-500 transition-colors resize-none"
                    />
                  </div>

                  {/* Submit CTA */}
                  <button
                    type="submit"
                    className="w-full py-4 rounded-full bg-[#8B6F8F] hover:bg-[#7B5F7F] text-white font-mono font-bold uppercase tracking-wider text-sm flex items-center justify-center gap-2 shadow-xl shadow-[#8B6F8F]/20 transition-all hover:scale-[1.01] active:scale-98"
                  >
                    <span>Send Message</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

