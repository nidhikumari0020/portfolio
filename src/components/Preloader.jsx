import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Preloader({ onComplete }) {
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    // 1.6s fill + 0.4s hold = 2.0s before starting shutter exit
    const timer = setTimeout(() => {
      setIsDone(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence onExitComplete={onComplete}>
      {!isDone && (
        <motion.div
          key="preloader"
          initial={{ y: '0%' }}
          exit={{
            y: '-100%',
            transition: {
              duration: 0.85,
              ease: [0.76, 0, 0.24, 1], // Cinematic shutter opening curve
            },
          }}
          className="fixed inset-0 z-[100000] flex items-center justify-center bg-[#17151A] overflow-hidden select-none pointer-events-auto"
        >
          {/* Ambient Glow */}
          <div className="absolute w-96 h-96 rounded-full bg-[#8B6F8F]/15 blur-3xl pointer-events-none" />

          {/* Logo container with exit scale-down and fade */}
          <motion.div
            initial={{ scale: 1, opacity: 1 }}
            exit={{
              scale: 0.92,
              opacity: 0,
              transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] },
            }}
            className="relative flex flex-col items-center justify-center px-6"
          >
            <div className="relative flex items-center justify-center">
              {/* 1. Subtle dark lavender background text layer */}
              <h1 className="font-display font-black text-6xl sm:text-7xl md:text-8xl lg:text-9xl tracking-tight text-[#EAE5F2]/20 select-none text-center">
                NIDHI
              </h1>

              {/* 2. Crisp Warm Off-White foreground text with bottom-to-top water-fill clip-path */}
              <motion.h1
                initial={{ clipPath: 'inset(100% 0% 0% 0%)' }}
                animate={{ clipPath: 'inset(0% 0% 0% 0%)' }}
                transition={{
                  duration: 1.6,
                  ease: [0.65, 0, 0.35, 1], // Smooth cinematic fluid ease
                  delay: 0.2,
                }}
                aria-hidden="true"
                className="absolute inset-0 flex items-center justify-center font-display font-black text-6xl sm:text-7xl md:text-8xl lg:text-9xl tracking-tight text-[#F7F5F2] select-none text-center px-6"
              >
                NIDHI
              </motion.h1>
            </div>

            {/* Subtle bottom tagline */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="mt-4 flex items-center gap-2"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#8B6F8F] animate-ping" />
              <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#EAE5F2]/70">
                Full Stack Developer
              </span>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

