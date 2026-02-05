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

export default function Marquee() {
  return (
    <section className="relative py-24 bg-[#050505] overflow-hidden border-y border-white/5">
      {/* --- PREMIUM ATMOSPHERE --- */}
      {/* Central Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[400px] bg-blue-600/[0.03] blur-[150px] pointer-events-none rounded-full" />

      {/* Glassy Side Masks for Depth */}
      <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-[#050505] via-[#050505]/80 to-transparent z-20 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-[#050505] via-[#050505]/80 to-transparent z-20 pointer-events-none" />

      <div className="relative z-10">
        {/* Subtle Section Info */}
        <div className="flex flex-col items-center mb-12 px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="flex items-center gap-3 mb-4"
          >
            <div className="h-[1px] w-8 bg-blue-500/30" />
            <span className="text-[10px] tracking-[0.6em] text-blue-400 font-bold uppercase">
              Proven Excellence
            </span>
            <div className="h-[1px] w-8 bg-blue-500/30" />
          </motion.div>
          <h2 className="text-zinc-500 text-xs font-medium tracking-widest uppercase">
            Trusted by internal ventures & global clients
          </h2>
        </div>

        {/* --- THE MARQUEE ENGINE --- */}
        <div className="flex overflow-hidden select-none">
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: '-50%' }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: 'linear',
            }}
            className="flex gap-20 items-center whitespace-nowrap"
          >
            {/* Seamless Double Loop */}
            {[...brands, ...brands].map((brand, index) => (
              <div key={index} className="group relative px-4">
                {/* Background "Shadow" Text */}
                <span className="absolute inset-0 text-blue-500/0 group-hover:text-blue-500/5 transition-colors duration-700 text-5xl md:text-7xl font-black uppercase italic tracking-tighter select-none">
                  {brand}
                </span>

                {/* Main Outlined Text */}
                <span
                  className="relative z-10 text-5xl md:text-7xl font-black 
                             text-transparent transition-all duration-500 
                             uppercase tracking-tighter italic"
                  style={{
                    WebkitTextStroke: '1px rgba(255,255,255,0.08)',
                  }}
                >
                  <span className="group-hover:text-white/10 group-hover:border-white/20 transition-all duration-700">
                    {brand}
                  </span>
                </span>

                {/* Decorative Tech Dot */}
                <div className="absolute -right-10 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-zinc-800 border border-white/10" />
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Subtle Noise Texture Overlay (Optional for extra "Pro" feel) */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
    </section>
  );
}
