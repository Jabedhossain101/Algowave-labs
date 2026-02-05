'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Calendar, Zap } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative rounded-[50px] bg-[#0a0a0a] border border-white/5 p-12 md:p-24 overflow-hidden shadow-2xl"
        >
          {/* --- ADVANCED BACKGROUND --- */}
          {/* Dynamic Glows */}
          <div className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] bg-blue-600/20 blur-[120px] rounded-full animate-pulse" />
          <div className="absolute bottom-[-20%] left-[-10%] w-[400px] h-[400px] bg-indigo-600/10 blur-[100px] rounded-full" />

          {/* Grid Pattern Overlay */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />

          <div className="relative z-10 flex flex-col items-center text-center">
            {/* Ultra Badge */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/20 bg-blue-500/5 backdrop-blur-md mb-10"
            >
              <Sparkles size={14} className="text-blue-400" />
              <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-blue-400">
                Limitless Possibilities
              </span>
            </motion.div>

            <h2 className="text-4xl md:text-7xl font-black text-white tracking-tighter leading-[0.9] mb-8">
              READY TO{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-500">
                ACCELERATE
              </span>{' '}
              <br />
              YOUR VISION?
            </h2>

            <p className="max-w-2xl text-slate-400 text-lg md:text-xl font-light leading-relaxed mb-12">
              Join forces with{' '}
              <span className="text-white font-medium">AlgoWave Labs</span>. We
              engineer high-performance systems that transform complex logic
              into scalable global realities.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-6">
              {/* Primary Action */}
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: '0 0 40px rgba(37,99,235,0.4)',
                }}
                whileTap={{ scale: 0.95 }}
                className="px-12 py-5 bg-blue-600 text-white rounded-2xl font-bold text-lg flex items-center gap-3 transition-all group"
              >
                <Calendar size={20} />
                INITIATE CONSULTATION
                <ArrowRight
                  size={20}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </motion.button>

              {/* Secondary Action */}
              <motion.button
                whileHover={{ backgroundColor: 'rgba(255,255,255,0.05)' }}
                className="px-10 py-5 border border-white/10 rounded-2xl font-bold text-lg text-slate-300 flex items-center gap-3 transition-all"
              >
                <Zap size={20} className="text-blue-400" />
                OUR STACK
              </motion.button>
            </div>

            {/* Trust Indicator */}
            <div className="mt-16 flex items-center gap-6 opacity-30 grayscale hover:grayscale-0 transition-all duration-500">
              <span className="text-[10px] font-mono font-bold tracking-widest text-slate-500">
                ISO CERTIFIED WORKFLOW
              </span>
              <div className="w-1 h-1 rounded-full bg-slate-700" />
              <span className="text-[10px] font-mono font-bold tracking-widest text-slate-500">
                SECURE DATA ARCHITECTURE
              </span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Side Decorative Text */}
      <div className="absolute right-10 bottom-10 hidden 2xl:block">
        <p className="[writing-mode:vertical-lr] text-[8px] tracking-[1em] text-slate-700 uppercase font-bold">
          Innovation in every commit
        </p>
      </div>
    </section>
  );
}
