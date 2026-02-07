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

  const yValue = useTransform(scrollYProgress, [0, 1], [-40, 40]);
  const glowOpacity = useTransform(
    scrollYProgress,
    [0, 0.4, 0.6, 1],
    [0, 1, 1, 0],
  );

  return (
    <section
      ref={containerRef}
      className="py-20 relative overflow-hidden bg-[#030303] border-b border-white/5"
    >
      {/* --- LAYER 1: AMBIENCE --- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <motion.div
          style={{ y: yValue, opacity: glowOpacity }}
          className="absolute top-[-20%] right-[10%] w-[400px] h-[400px] bg-blue-600/[0.05] blur-[120px] rounded-full"
        />

        {/* Sync Perspective Grid */}
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: `linear-gradient(#3b82f6 1px, transparent 1px), linear-gradient(90deg, #3b82f6 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
            transform:
              'perspective(1000px) rotateX(60deg) translateY(100px) scale(2)',
          }}
        />
      </div>

      {/* --- CONTENT WRAPPER --- */}
      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative rounded-[2.5rem] bg-white/[0.01] border border-white/5 p-10 md:p-16 overflow-hidden backdrop-blur-2xl"
        >
          {/* Internal Refraction */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/[0.03] to-transparent pointer-events-none" />

          <div className="relative z-10 flex flex-col items-center text-center">
            {/* Minimal Status Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-blue-500/20 bg-blue-500/5 mb-8">
              <Cpu size={12} className="text-blue-500" />
              <span className="text-[8px] font-black tracking-[0.4em] uppercase text-blue-500/80">
                System Finalization
              </span>
            </div>

            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none mb-6 uppercase">
              Ready to <br />
              <span className="italic font-extralight text-slate-600">
                Accelerate?
              </span>
            </h2>

            <p className="max-w-md text-slate-500 text-sm font-light leading-relaxed mb-10">
              Architecting scalable industrial-grade realities. Your future
              infrastructure starts with a single deployment.
            </p>

            {/* --- ACTION BUTTONS (Smaller & Sleeker) --- */}
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05, backgroundColor: '#2563eb' }}
                whileTap={{ scale: 0.98 }}
                className="group flex items-center gap-3 px-6 py-3.5 bg-blue-600 text-white rounded-xl transition-all"
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
                className="flex items-center gap-3 px-6 py-3.5 border border-white/10 rounded-xl text-slate-400 transition-all"
              >
                <Command size={16} />
                <span className="text-[10px] font-black tracking-widest uppercase">
                  Core Stack
                </span>
              </motion.button>
            </div>

            {/* Verification Metadata (Smallest) */}
            <div className="mt-12 flex items-center gap-6 opacity-40">
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

          {/* Corner Brackets */}
          <div className="absolute top-0 left-0 w-16 h-16 border-t border-l border-white/10 rounded-tl-[2.5rem]" />
          <div className="absolute bottom-0 right-0 w-16 h-16 border-b border-r border-white/10 rounded-br-[2.5rem]" />
        </motion.div>
      </div>

      {/* Background Texture */}
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
    </section>
  );
}
