'use client';
import React from 'react';
import { motion } from 'framer-motion';

const brands = [
  'Zaffran',
  'CareerOstad',
  'ThymeOut',
  'AlgoWave',
  'Nexus AI',
  'EcoCompute',
  'Stellar UI',
];

export default function AdvancedMarquee() {
  return (
    <section className="relative py-16 bg-[#030303] overflow-hidden border-y border-white/[0.03]">
      {/* --- LAYER 1: AMBIENT DEPTH --- */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[120px] bg-blue-600/[0.03] blur-[120px] pointer-events-none rounded-full" />

      {/* Glassy Edge Fades - Higher Precision */}
      <div className="absolute inset-y-0 left-0 w-24 md:w-64 bg-gradient-to-r from-[#030303] via-[#030303]/90 to-transparent z-30 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-24 md:w-64 bg-gradient-to-l from-[#030303] via-[#030303]/90 to-transparent z-30 pointer-events-none" />

      <div className="relative z-20">
        {/* Section Heading - Aligned with Hero/Navbar padding */}
        <div className="flex flex-col items-start mb-10 px-6 md:px-12 lg:px-20">
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-3 mb-2"
          >
            <span className="text-[9px] tracking-[0.6em] text-blue-500 font-bold uppercase">
              Strategic Partners
            </span>
            <div className="h-[1px] w-12 bg-gradient-to-r from-blue-500/40 to-transparent" />
          </motion.div>
          <h2 className="text-zinc-600 text-[10px] font-mono tracking-[0.1em] uppercase opacity-60">
            Powering next-gen digital ventures
          </h2>
        </div>

        {/* --- THE INFINITE KINETIC ENGINE --- */}
        <div className="flex overflow-hidden select-none">
          <motion.div
            animate={{ x: ['0%', '-50%'] }}
            transition={{
              duration: 35, // Smooth slow crawl
              repeat: Infinity,
              ease: 'linear',
            }}
            style={{ willChange: 'transform' }} // Prevents jitter
            className="flex gap-16 md:gap-28 items-center whitespace-nowrap px-4"
          >
            {[...brands, ...brands].map((brand, index) => (
              <div key={index} className="group/item relative py-2">
                {/* Hover Glow */}
                <div className="absolute -inset-x-8 inset-y-0 bg-blue-500/0 group-hover/item:bg-blue-600/[0.03] blur-xl transition-all duration-700 rounded-full" />

                {/* Main Typography */}
                <span
                  className="relative z-10 text-5xl md:text-7xl lg:text-8xl font-black 
                             text-transparent transition-all duration-700 
                             uppercase tracking-tighter italic"
                  style={{
                    WebkitTextStroke: '1px rgba(255,255,255,0.06)',
                  }}
                >
                  <span className="group-hover/item:text-white/[0.12] group-hover/item:drop-shadow-[0_0_20px_rgba(59,130,246,0.2)] transition-all duration-700">
                    {brand}
                  </span>
                </span>

                {/* Decorative Node Indicator */}
                <div className="absolute -right-8 md:-right-14 top-1/2 -translate-y-1/2 flex items-center gap-1.5 opacity-10 group-hover/item:opacity-40 transition-all duration-500">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
                  <div className="w-4 md:w-8 h-[1px] bg-gradient-to-r from-blue-600 to-transparent" />
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Noise overlay for texture */}
      <div className="absolute inset-0 opacity-[0.01] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
    </section>
  );
}
