'use client';
import React from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-[#0a0a0a]">
      {/* Background Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-600/10 blur-[120px] rounded-full" />

      <div className="container mx-auto px-6 text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-8xl font-bold text-white mb-6 tracking-tight">
            AlgoWave <span className="text-blue-500 text-glow">Labs</span>
          </h1>
          <p className="text-gray-400 text-lg md:text-2xl max-w-3xl mx-auto mb-10 leading-relaxed">
            Delivering modern websites, ERP systems, and SaaS platforms. We
            build digital solutions that scale with your business.
          </p>

          <div className="flex flex-col md:flex-row gap-5 justify-center">
            <button className="px-10 py-4 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-all transform hover:scale-105 shadow-xl shadow-blue-600/20">
              Start Your Project
            </button>
            <button className="px-10 py-4 border border-gray-700 text-white rounded-xl font-bold hover:bg-white/10 transition-all">
              Our Portfolio
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
