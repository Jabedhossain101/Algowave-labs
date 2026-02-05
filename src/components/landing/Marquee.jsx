'use client';
import React from 'react';
import { motion } from 'framer-motion';

const logos = [
  'Zaffran',
  'CareerOstad',
  'ThymeOut',
  'TechFlow',
  'Nexus',
  'GlobalSystems',
];

export default function Marquee() {
  return (
    <section className="py-12 bg-[#0a0a0a] overflow-hidden border-b border-white/5">
      <div className="flex whitespace-nowrap">
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: '-50%' }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className="flex gap-20 items-center min-w-full"
        >
          {/* Double symbols for seamless loop */}
          {[...logos, ...logos].map((logo, index) => (
            <span
              key={index}
              className="text-3xl md:text-4xl font-extrabold text-zinc-800 hover:text-blue-900/40 transition-colors uppercase tracking-widest"
            >
              {logo}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
