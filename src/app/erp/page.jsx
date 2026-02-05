'use client';
import React from 'react';
import { motion } from 'framer-motion';
import {
  BarChart3,
  ShieldCheck,
  Workflow,
  Layers,
  Cpu,
  ArrowRight,
  Database,
  Network,
} from 'lucide-react';

const modules = [
  {
    title: 'Inventory Intelligence',
    desc: 'Real-time stock tracking with AI-driven demand forecasting and automated reordering logic.',
    icon: <Layers className="text-blue-400" />,
    features: ['Batch Tracking', 'Multi-warehouse Support', 'SKU Management'],
  },
  {
    title: 'Financial Ecosystem',
    desc: 'End-to-end accounting automation with multi-currency support and real-time fiscal reporting.',
    icon: <BarChart3 className="text-indigo-400" />,
    features: ['Automated Invoicing', 'Tax Compliance', 'Ledger Management'],
  },
  {
    title: 'Supply Chain Sync',
    desc: 'Streamlined vendor management and procurement workflows designed for high-throughput logistics.',
    icon: <Network className="text-cyan-400" />,
    features: ['Vendor Portal', 'PO Automation', 'Logistics Tracking'],
  },
  {
    title: 'Human Capital Management',
    desc: 'Next-gen HR management including automated payroll, attendance, and performance tracking.',
    icon: <ShieldCheck className="text-purple-400" />,
    features: ['Biometric Sync', 'Payroll Engine', 'Employee Portal'],
  },
];

export default function ERPPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white selection:bg-blue-500/30">
      {/* --- HERO SECTION: ENTERPRISE ARCHITECTURE --- */}
      <section className="relative pt-40 pb-24 px-6 border-b border-white/5 overflow-hidden">
        {/* Advanced Background: Cyber Grid and Glows */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-600/10 blur-[120px] rounded-full" />
          <div className="absolute bottom-[10%] left-[-5%] w-[30%] h-[40%] bg-indigo-600/10 blur-[100px] rounded-full" />
        </div>

        <div
          className="absolute inset-0 opacity-[0.07] pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(#3b82f6 1px, transparent 1px), linear-gradient(90deg, #3b82f6 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
            transform: 'perspective(1200px) rotateX(60deg) translateY(-120px)',
            maskImage:
              'radial-gradient(circle at center, black, transparent 80%)',
          }}
        />

        <div className="container mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/20 bg-blue-500/5 mb-8"
          >
            <Cpu size={14} className="text-blue-400 animate-spin-slow" />
            <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-blue-400">
              Next-Gen ERP Engine
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-8xl font-black tracking-tighter leading-none mb-8"
          >
            SYSTEMIC <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-500">
              EFFICIENCY
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="max-w-2xl mx-auto text-slate-400 text-lg md:text-xl font-light leading-relaxed mb-12"
          >
            We engineer mission-critical{' '}
            <span className="text-white font-medium">ERP Ecosystems</span> that
            transform fragmented business processes into a unified,
            high-performance digital core.
          </motion.p>

          <div className="flex flex-wrap justify-center gap-6">
            <button className="px-10 py-5 bg-blue-600 text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-blue-700 transition-all shadow-xl shadow-blue-600/20">
              Request Demo
            </button>
            <button className="px-10 py-5 border border-white/10 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-white/5 transition-all text-slate-300">
              Architecture Overview
            </button>
          </div>
        </div>
      </section>

      {/* --- MODULES GRID --- */}
      <section className="py-24 px-6">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-xl">
              <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white mb-4">
                MODULAR CORE
              </h2>
              <p className="text-slate-500 font-mono text-xs uppercase tracking-widest font-bold">
                Scalable components for every business vertical
              </p>
            </div>
            <div className="flex gap-4 text-[10px] font-bold text-slate-500 uppercase tracking-widest border-l border-white/10 pl-8">
              <span>Production Ready</span>
              <span className="text-blue-500">//</span>
              <span>ISO 27001 Secure</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {modules.map((module, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group relative p-10 rounded-[40px] border border-white/5 bg-[#0a0a0a] hover:border-blue-500/30 transition-all duration-500"
              >
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  <div className="p-5 rounded-2xl bg-white/5 border border-white/10 group-hover:bg-blue-500/10 group-hover:border-blue-500/20 transition-all">
                    {module.icon}
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-2xl font-bold text-white mb-4 tracking-tight group-hover:text-blue-400 transition-colors">
                      {module.title}
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed mb-8">
                      {module.desc}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {module.features.map((feat, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 rounded-lg bg-white/5 border border-white/5 text-[9px] font-mono font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-300"
                        >
                          {feat}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- TECHNICAL ARCHITECTURE CTA --- */}
      <section className="py-24 px-6 border-t border-white/5">
        <div className="container mx-auto">
          <div className="relative p-12 md:p-20 rounded-[50px] bg-gradient-to-br from-blue-600/10 to-transparent border border-white/5 overflow-hidden">
            <div className="absolute top-0 right-0 p-10 opacity-5">
              <Database size={200} />
            </div>

            <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-white mb-6">
                  BUILT FOR <br /> HIGH THROUGHPUT.
                </h2>
                <p className="text-slate-400 mb-8 leading-relaxed">
                  Our ERP architecture is designed on a microservices-based
                  model, ensuring that your system can scale horizontally as
                  your business grows globally.
                </p>
                <div className="flex items-center gap-6">
                  <div className="flex flex-col">
                    <span className="text-2xl font-bold text-white tracking-tighter">
                      Sub-100ms
                    </span>
                    <span className="text-[10px] font-mono text-slate-500 uppercase font-bold tracking-widest">
                      Latency
                    </span>
                  </div>
                  <div className="w-[1px] h-10 bg-white/10" />
                  <div className="flex flex-col">
                    <span className="text-2xl font-bold text-white tracking-tighter">
                      99.99%
                    </span>
                    <span className="text-[10px] font-mono text-slate-500 uppercase font-bold tracking-widest">
                      Uptime
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex justify-end">
                <button className="group flex items-center gap-4 px-10 py-5 bg-white text-black rounded-2xl font-black text-xs uppercase tracking-[0.2em] hover:bg-blue-600 hover:text-white transition-all">
                  Technical Whitepaper{' '}
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vertical Decorative Element */}
      <div className="absolute left-10 top-1/2 -translate-y-1/2 hidden 2xl:flex flex-col items-center gap-8 opacity-20">
        <span className="[writing-mode:vertical-lr] text-[8px] tracking-[1.5em] text-slate-500 uppercase font-black">
          AlgoWave Enterprise Systems // Modular Core
        </span>
        <div className="w-[1px] h-32 bg-gradient-to-b from-blue-500 to-transparent" />
      </div>
    </main>
  );
}
