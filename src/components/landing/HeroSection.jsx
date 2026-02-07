'use client';
import React, { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
  Zap,
  Globe,
  Command,
  ChevronRight,
  ShieldCheck,
  Activity,
} from 'lucide-react';

export default function UltraAdvanceHero() {
  const [mounted, setMounted] = useState(false);
  const containerRef = useRef(null);

  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 100]);
  const y2 = useTransform(scrollY, [0, 500], [0, -100]);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div className="min-h-screen bg-[#030303]" />;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen w-full bg-[#030303] overflow-hidden flex items-center justify-center pt-24 pb-12"
    >
      {/* --- BACKGROUND LAYERS --- */}
      <div className="absolute inset-0 z-0">
        <motion.div
          style={{ y: y1 }}
          className="absolute top-[-10%] left-[-5%] w-[50%] h-[50%] bg-blue-600/10 blur-[120px] rounded-full"
        />
        <motion.div
          style={{ y: y2 }}
          className="absolute bottom-[-10%] right-[-5%] w-[40%] h-[40%] bg-indigo-600/10 blur-[120px] rounded-full"
        />

        {/* Perspective Grid */}
        <div
          className="absolute inset-0 opacity-[0.15]"
          style={{
            backgroundImage: `linear-gradient(#3b82f6 1px, transparent 1px), linear-gradient(90deg, #3b82f6 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
            maskImage:
              'radial-gradient(circle at 50% 50%, black, transparent 85%)',
            transform:
              'perspective(1000px) rotateX(60deg) scale(2) translateY(-100px)',
          }}
        />
      </div>

      {/* --- MAIN CONTENT WRAPPER --- */}
      <div className="relative z-10 w-full px-6 md:px-12 lg:px-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT: TEXT CONTENT */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-start"
          >
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-blue-500/5 border border-blue-500/20 mb-6 backdrop-blur-md"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-blue-400">
                AlgoWave Labs v4.0 Alpha
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-7xl xl:text-[90px] font-bold leading-[0.9] tracking-tighter mb-8 text-white"
            >
              NEXT GEN <br />
              <span className="text-white/30 font-light italic">SYSTEMS.</span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="max-w-md text-base md:text-lg text-slate-400 mb-10 leading-relaxed font-light"
            >
              Engineering autonomous digital infrastructures. We scale
              <span className="text-white font-medium">
                {' '}
                AI-Integrated SaaS
              </span>{' '}
              and
              <span className="text-white font-medium">
                {' '}
                Real-time ERPs
              </span>{' '}
              with zero-latency logic.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center gap-6"
            >
              <motion.button
                whileHover={{ scale: 1.05, backgroundColor: '#2563eb' }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-black font-bold text-sm tracking-tight rounded-full flex items-center gap-3 transition-colors duration-300 shadow-xl shadow-blue-500/10"
              >
                INITIATE PROJECT <Command size={18} />
              </motion.button>

              <button className="flex items-center gap-2 text-sm font-bold tracking-widest text-white/50 hover:text-white transition-all group">
                EXPLORE ARCHITECTURE
                <ChevronRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>
            </motion.div>

            {/* Micro Stats */}
            <motion.div
              variants={itemVariants}
              className="mt-16 w-full max-w-lg grid grid-cols-3 gap-8 border-t border-white/10 pt-8"
            >
              {[
                { label: 'Uptime', value: '99.99%' },
                { label: 'Latency', value: '2ms', color: 'text-blue-500' },
                { label: 'Engine', value: 'V8-Turbo', italic: true },
              ].map((stat, i) => (
                <div key={i}>
                  <p className="text-[10px] text-slate-500 uppercase tracking-widest mb-1">
                    {stat.label}
                  </p>
                  <p
                    className={`text-lg md:text-xl font-mono ${stat.color || ''} ${stat.italic ? 'italic' : ''}`}
                  >
                    {stat.value}
                  </p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* RIGHT: RESPONSIVE BENTO GRID */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative grid grid-cols-6 grid-rows-6 gap-3 md:gap-4 h-[500px] md:h-[600px] w-full"
          >
            {/* Main Card */}
            <div className="col-span-4 row-span-4 bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-[2rem] p-6 md:p-8 flex flex-col justify-between relative overflow-hidden group hover:border-blue-500/40 transition-all duration-500">
              <div className="absolute top-4 right-4 md:top-6 md:right-6">
                <div className="h-10 w-10 md:h-12 md:w-12 rounded-2xl bg-blue-600/10 flex items-center justify-center border border-blue-500/20 group-hover:scale-110 transition-transform">
                  <Zap size={24} className="text-blue-400" />
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex gap-2">
                  <div className="w-12 h-1.5 bg-blue-600 rounded-full" />
                  <div className="w-4 h-1.5 bg-white/10 rounded-full" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white">
                  Neural Engine
                </h3>
                <p className="text-xs md:text-sm text-slate-400 max-w-[200px]">
                  Real-time node processing with end-to-end encryption.
                </p>
              </div>

              <div className="flex items-end gap-1.5 h-20 md:h-24">
                {[40, 70, 45, 90, 65, 80, 50, 95, 70, 60].map((h, i) => (
                  <motion.div
                    key={i}
                    animate={{ height: [h * 0.5, h, h * 0.7] }}
                    transition={{
                      repeat: Infinity,
                      duration: 2 + i * 0.1,
                      ease: 'easeInOut',
                    }}
                    className="flex-1 bg-gradient-to-t from-blue-600/40 to-blue-400/10 rounded-t-md"
                  />
                ))}
              </div>
            </div>

            {/* Shield Card */}
            <motion.div
              whileHover={{ y: -5 }}
              className="col-span-2 row-span-2 bg-blue-600/5 border border-blue-500/20 rounded-[2rem] flex flex-col items-center justify-center gap-2 backdrop-blur-md"
            >
              <ShieldCheck className="text-blue-500" size={28} />
              <span className="text-[10px] font-mono tracking-widest text-blue-400">
                SECURE
              </span>
            </motion.div>

            {/* System Log Card */}
            <div className="col-span-2 row-span-4 bg-white/[0.02] border border-white/5 rounded-[2rem] p-5 flex flex-col">
              <div className="text-[9px] font-mono text-slate-500 mb-4 uppercase tracking-tighter">
                System_Log
              </div>
              <div className="space-y-3">
                {[1, 2, 3, 4, 5].map(i => (
                  <motion.div
                    key={i}
                    initial={{ width: 0 }}
                    animate={{ width: `${Math.random() * 60 + 40}%` }}
                    transition={{
                      repeat: Infinity,
                      repeatType: 'reverse',
                      duration: 2 + i,
                    }}
                    className="h-1 bg-white/10 rounded-full"
                  />
                ))}
              </div>
              <div className="mt-auto">
                <Globe size={32} className="text-white/5" />
              </div>
            </div>

            {/* Bottom Wide Card */}
            <motion.div
              whileHover={{ y: -5 }}
              className="col-span-4 row-span-2 bg-gradient-to-r from-blue-600/10 to-transparent border border-white/5 rounded-[2rem] p-6 flex items-center justify-between backdrop-blur-sm"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 bg-black rounded-xl border border-white/10">
                  <Activity size={20} className="text-blue-400" />
                </div>
                <div>
                  <p className="text-xs font-bold text-white uppercase tracking-tight">
                    Global Edge
                  </p>
                  <p className="text-[10px] text-slate-500">24 Nodes Active</p>
                </div>
              </div>
              <div className="flex gap-1">
                {[1, 2, 3].map(i => (
                  <motion.div
                    key={i}
                    animate={{ opacity: [0.2, 1, 0.2] }}
                    transition={{
                      repeat: Infinity,
                      duration: 1.5,
                      delay: i * 0.3,
                    }}
                    className="w-1.5 h-1.5 rounded-full bg-blue-500"
                  />
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Side Label */}
      <div className="absolute right-8 bottom-12 hidden xl:flex flex-col items-center gap-6">
        <span className="[writing-mode:vertical-lr] text-[9px] font-bold tracking-[0.6em] text-white/20 uppercase">
          Autonomous Infrastructure
        </span>
        <motion.div
          animate={{ height: [30, 80, 30] }}
          transition={{ repeat: Infinity, duration: 4, ease: 'linear' }}
          className="w-px bg-gradient-to-b from-blue-500 to-transparent"
        />
      </div>
    </section>
  );
}
