'use client';
import React, { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import {
  Terminal,
  Cpu,
  Zap,
  Activity,
  ShieldCheck,
  ArrowRight,
  Code2,
  Globe,
  Database,
} from 'lucide-react';

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div className="min-h-screen bg-[#050505]"></div>;

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center bg-[#050505] text-[#ffffff] px-6 overflow-hidden"
    >
      {/* --- ADVANCED BACKGROUND ARCHITECTURE --- */}
      {/* 1. Dynamic Mesh Gradient */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/20 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-[10%] right-[-5%] w-[30%] h-[30%] bg-indigo-600/20 blur-[100px] rounded-full" />
      </div>

      {/* 2. Cyber Grid with Perspective */}
      <div
        className="absolute inset-0 opacity-[0.1] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#3b82f6 1px, transparent 1px), linear-gradient(90deg, #3b82f6 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
          transform: 'perspective(1000px) rotateX(60deg) translateY(-100px)',
          maskImage:
            'radial-gradient(circle at center, black, transparent 90%)',
        }}
      />

      <div className="relative z-10 max-w-7xl w-full py-20">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* LEFT CONTENT */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              {/* Ultra Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/20 bg-blue-500/5 backdrop-blur-md mb-6">
                <div className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                </div>
                <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-blue-400">
                  v2.0 Logic Architecture
                </span>
              </div>

              <h1 className="text-5xl md:text-[80px] xl:text-[100px] font-extrabold leading-[0.85] tracking-tight mb-8">
                BUILDING <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-500 animate-gradient-x">
                  INTELLIGENT
                </span>{' '}
                <br />
                SYSTEMS
              </h1>

              <p className="max-w-xl text-lg md:text-xl text-slate-400 leading-relaxed mb-10 font-light">
                <span className="text-blue-400 font-medium">AlgoWave Labs</span>{' '}
                is a premium engineering studio. We transform complex logic into
                high-performance{' '}
                <span className="text-white">
                  ERP, SaaS, and AI infrastructures.
                </span>
              </p>

              <div className="flex flex-wrap gap-6">
                <motion.button
                  whileHover={{
                    scale: 1.02,
                    boxShadow: '0 0 30px rgba(37,99,235,0.5)',
                  }}
                  whileTap={{ scale: 0.98 }}
                  className="px-10 py-5 bg-blue-600 text-white rounded-xl font-bold flex items-center gap-3 transition-all relative overflow-hidden group"
                >
                  <span className="relative z-10">INITIATE PROJECT</span>
                  <ArrowRight
                    size={20}
                    className="relative z-10 group-hover:translate-x-1 transition-transform"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.button>

                <motion.button
                  whileHover={{
                    backgroundColor: 'rgba(255,255,255,0.05)',
                    borderColor: 'rgba(255,255,255,0.2)',
                  }}
                  className="px-10 py-5 border border-white/10 rounded-xl font-bold transition-all text-slate-300"
                >
                  CORE STACK
                </motion.button>
              </div>
            </motion.div>
          </div>

          {/* RIGHT CONTENT: ADVANCED VISUALIZER */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2 }}
              className="relative aspect-square"
            >
              {/* Main "Server" Box */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent border border-white/10 rounded-[40px] backdrop-blur-3xl shadow-2xl overflow-hidden">
                <div className="p-8 h-full flex flex-col justify-between">
                  {/* Real-time Header */}
                  <div className="flex justify-between items-center">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500/50" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                      <div className="w-3 h-3 rounded-full bg-green-500/50" />
                    </div>
                    <div className="text-[10px] font-mono text-blue-400/70 uppercase">
                      Status: Operational
                    </div>
                  </div>

                  {/* Animated Waveform */}
                  <div className="flex items-center justify-center gap-1.5 h-32">
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(i => (
                      <motion.div
                        key={i}
                        animate={{ height: [20, 80, 40, 90, 20][i % 5] }}
                        transition={{
                          repeat: Infinity,
                          duration: 2,
                          delay: i * 0.1,
                          ease: 'easeInOut',
                        }}
                        className="w-2 bg-blue-500/40 rounded-full"
                      />
                    ))}
                  </div>

                  {/* Stats Grid */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/5 border border-white/5 p-4 rounded-2xl">
                      <div className="flex items-center gap-2 mb-2">
                        <Database size={14} className="text-cyan-400" />
                        <span className="text-[10px] text-slate-400 uppercase">
                          Throughput
                        </span>
                      </div>
                      <div className="text-xl font-mono">1.2GB/s</div>
                    </div>
                    <div className="bg-white/5 border border-white/5 p-4 rounded-2xl">
                      <div className="flex items-center gap-2 mb-2">
                        <Globe size={14} className="text-indigo-400" />
                        <span className="text-[10px] text-slate-400 uppercase">
                          Uptime
                        </span>
                      </div>
                      <div className="text-xl font-mono">99.99%</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Code Card */}
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 4,
                  ease: 'easeInOut',
                }}
                className="absolute -right-6 top-1/4 bg-[#0a0a0a]/90 border border-white/10 p-4 rounded-xl shadow-2xl backdrop-blur-xl hidden md:block"
              >
                <div className="flex items-center gap-3 mb-2">
                  <Code2 size={16} className="text-blue-400" />
                  <span className="text-[10px] font-mono text-slate-500">
                    deploy.config.js
                  </span>
                </div>
                <div className="text-[12px] font-mono text-blue-300">
                  <p>{'{'}</p>
                  <p className="pl-4">
                    engine: <span className="text-yellow-400">'next-gen'</span>,
                  </p>
                  <p className="pl-4">
                    scaling: <span className="text-green-400">true</span>
                  </p>
                  <p>{'}'}</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* --- BOTTOM SECTION: TRUSTED STACK --- */}
        <div className="mt-24 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="space-y-1">
            <p className="text-[10px] tracking-[0.3em] text-slate-500 uppercase font-bold">
              Industry Standards
            </p>
            <div className="flex items-center gap-6 opacity-40">
              <span className="font-mono text-xl italic">ISO-27001</span>
              <span className="font-mono text-xl italic">SOC-2</span>
              <span className="font-mono text-xl italic">HIPAA</span>
            </div>
          </div>

          <div className="flex gap-12 items-center grayscale opacity-60">
            <div className="flex items-center gap-2">
              <div className="p-2 bg-blue-500/10 rounded-lg">
                <Cpu size={20} className="text-blue-400" />
              </div>
              <span className="font-bold text-sm">NVIDIA AI</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="p-2 bg-blue-500/10 rounded-lg">
                <Terminal size={20} className="text-blue-400" />
              </div>
              <span className="font-bold text-sm">DOCKER PRO</span>
            </div>
          </div>
        </div>
      </div>

      {/* Side "Innovative" Text with Progress Line */}
      <div className="absolute left-10 bottom-20 hidden 2xl:flex flex-col items-center gap-8">
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: 150 }}
          transition={{ duration: 1.5 }}
          className="w-[1px] bg-gradient-to-t from-blue-500 via-blue-500/20 to-transparent"
        />
        <span className="[writing-mode:vertical-lr] text-[10px] tracking-[0.8em] text-slate-500 uppercase font-bold">
          Future Proof Solutions
        </span>
      </div>
    </section>
  );
}
