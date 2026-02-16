'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
  ArrowRight,
  Sparkles,
  Calendar,
  Command,
  ShieldCheck,
  Cpu,
} from 'lucide-react';

export default function AdvancedCTA() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  // Optimized transforms: only active on desktop
  const yValue = useTransform(scrollYProgress, [0, 1], [-20, 20]);
  const glowOpacity = useTransform(
    scrollYProgress,
    [0, 0.4, 0.6, 1],
    [0, 1, 1, 0],
  );

  return (
    <section
      ref={containerRef}
      className="py-16 md:py-24 relative overflow-hidden bg-[#030303] border-b border-white/5"
    >
      {/* --- BACKGROUND --- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Parallax Glow - Reduced for mobile */}
        <motion.div
          style={{
            y:
              typeof window !== 'undefined' && window.innerWidth > 768
                ? yValue
                : 0,
            opacity: glowOpacity,
          }}
          className="absolute top-[-10%] right-[10%] w-[250px] md:w-[400px] h-[250px] md:h-[400px] bg-blue-600/[0.04] blur-[80px] md:blur-[120px] rounded-full"
        />

        {/* Sync Perspective Grid - Optimized for mobile performance */}
        <div
          className="absolute inset-0 opacity-[0.03] md:opacity-[0.05]"
          style={{
            backgroundImage: `linear-gradient(#3b82f6 1px, transparent 1px), linear-gradient(90deg, #3b82f6 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
            transform:
              'perspective(1000px) rotateX(45deg) translateY(50px) scale(1.5)',
            willChange: 'transform',
          }}
        />
      </div>

      {/* --- CONTENT WRAPPER --- */}
      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          // Backdrop blur optimized for mobile
          className="relative rounded-[2rem] md:rounded-[2.5rem] bg-white/[0.02] border border-white/5 p-8 md:p-16 overflow-hidden"
          style={{ transform: 'translateZ(0)' }}
        >
          {/* Internal Refraction - Subtle gradient instead of heavy blur */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/[0.03] to-transparent pointer-events-none" />

          <div className="relative z-10 flex flex-col items-center text-center">
            {/* Minimal Status Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-blue-500/20 bg-blue-500/5 mb-8">
              <Cpu size={12} className="text-blue-500" />
              <span className="text-[9px] font-bold tracking-[0.3em] uppercase text-blue-500/80">
                System Finalization
              </span>
            </div>

            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-tight mb-6 uppercase">
              Ready to <br />
              <span className="italic font-extralight text-slate-600">
                Accelerate?
              </span>
            </h2>

            <p className="max-w-md text-slate-500 text-sm md:text-base font-light leading-relaxed mb-10">
              Architecting scalable industrial-grade realities. Your future
              infrastructure starts with a single deployment.
            </p>

            {/* --- ACTION BUTTONS --- */}
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <motion.button
                whileHover={{ scale: 1.02, backgroundColor: '#2563eb' }}
                whileTap={{ scale: 0.98 }}
                className="group w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 bg-blue-600 text-white rounded-xl transition-all"
              >
                <Calendar size={16} />
                <span className="text-[10px] font-black tracking-widest uppercase">
                  Initiate Deployment
                </span>
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </motion.button>

              <motion.button
                whileHover={{ backgroundColor: 'rgba(255,255,255,0.03)' }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 border border-white/10 rounded-xl text-slate-400 transition-all"
              >
                <Command size={16} />
                <span className="text-[10px] font-black tracking-widest uppercase">
                  Core Stack
                </span>
              </motion.button>
            </div>

            {/* Metadata (Hidden on very small screens for better spacing) */}
            <div className="mt-12 hidden sm:flex items-center gap-6 opacity-40">
              <div className="flex items-center gap-2">
                <ShieldCheck size={12} className="text-blue-500" />
                <span className="text-[7px] font-mono tracking-widest uppercase text-white">
                  Encrypted
                </span>
              </div>
              <div className="w-1 h-1 rounded-full bg-slate-800" />
              <div className="flex items-center gap-2">
                <Sparkles size={12} className="text-blue-500" />
                <span className="text-[7px] font-mono tracking-widest uppercase text-white">
                  Verified
                </span>
              </div>
              <div className="w-1 h-1 rounded-full bg-slate-800" />
              <span className="text-[7px] font-mono text-blue-500/80 font-bold">
                Node_v20.x
              </span>
            </div>
          </div>

          {/* Corner Brackets - Optimized for mobile */}
          <div className="absolute top-0 left-0 w-12 h-12 md:w-16 md:h-16 border-t border-l border-white/10 rounded-tl-[2rem] md:rounded-tl-[2.5rem]" />
          <div className="absolute bottom-0 right-0 w-12 h-12 md:w-16 md:h-16 border-b border-r border-white/10 rounded-br-[2rem] md:rounded-br-[2.5rem]" />
        </motion.div>
      </div>

      {/* Grain Overlay */}
      <div className="absolute inset-0 opacity-[0.01] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
    </section>
  );
}
