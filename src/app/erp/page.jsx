'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  BarChart3,
  ShieldCheck,
  Workflow,
  Layers,
  Cpu,
  Database,
  Network,
  Activity,
  Box,
  Users2,
  Lock,
  Globe,
  Zap,
  Terminal,
  Server,
  CloudLightning,
  Binary,
  Microscope,
  ShieldAlert,
  Fingerprint,
} from 'lucide-react';

const erpModules = [
  {
    title: 'Inventory Intelligence',
    desc: 'Automated real-time stock synchronization across global nodes. Features AI-driven demand forecasting to prevent stock-outs through predictive procurement logic.',
    icon: <Box size={24} className="text-blue-400" />,
    features: [
      'Batch Lifecycle Tracking',
      'Multi-Warehouse Sync',
      'Predictive SKU Logic',
      'RFID Integration Support',
    ],
    tag: 'LOGISTICS_NODE',
  },
  {
    title: 'Financial Matrix',
    desc: 'Unified accounting automation with real-time fiscal reporting. Supporting multi-currency handshakes, automated reconciliation, and global tax compliance.',
    icon: <BarChart3 size={24} className="text-indigo-400" />,
    features: [
      'Automated Ledgers',
      'Global Tax Compliance',
      'Fiscal Reporting',
      'Real-time Audit Trail',
    ],
    tag: 'REVENUE_CORE',
  },
  {
    title: 'Supply Chain Mesh',
    desc: 'High-throughput vendor management workflows. Streamlined procurement cycles designed for industrial-scale logistics and cross-border trade management.',
    icon: <Network size={24} className="text-cyan-400" />,
    features: [
      'Vendor Management Portal',
      'PO Lifecycle Automation',
      'Tracking API',
      'Smart Contract Readiness',
    ],
    tag: 'SUPPLY_SYNC',
  },
  {
    title: 'Human Capital Engine',
    desc: 'Next-gen workforce management including biometric gateway integration, automated payroll distribution, and deep performance analytics.',
    icon: <Users2 size={24} className="text-purple-400" />,
    features: [
      'Biometric Gateway',
      'Payroll Automation',
      'Asset Management',
      'Shift-Logic Matrix',
    ],
    tag: 'HUMAN_INFRA',
  },
];

export default function ERPPage() {
  return (
    <main className="min-h-screen bg-[#020203] text-white selection:bg-blue-500/30 overflow-hidden font-sans">
      {/* --- LAYER 1: STRATEGIC HERO --- */}
      <section className="relative pt-40 pb-24 px-6 border-b border-white/5">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-[-10%] right-[-10%] w-[55%] h-[55%] bg-blue-600/10 blur-[160px] rounded-full opacity-40" />
          <div className="absolute bottom-[10%] left-[-5%] w-[45%] h-[45%] bg-indigo-600/10 blur-[140px] rounded-full opacity-30" />
        </div>

        <div
          className="absolute inset-0 opacity-[0.06] pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(#3b82f6 1px, transparent 1px), linear-gradient(90deg, #3b82f6 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
            transform:
              'perspective(1200px) rotateX(60deg) translateY(-150px) scale(1.1)',
            maskImage:
              'radial-gradient(circle at center, black, transparent 90%)',
          }}
        />

        <div className="container mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/20 bg-blue-500/5 mb-12"
          >
            <Cpu size={14} className="text-blue-400 animate-spin-slow" />
            <span className="text-[9px] font-black tracking-[0.5em] uppercase text-blue-500">
              Enterprise Resource Protocol v4.0
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-9xl font-black tracking-tighter leading-[0.85] mb-12 uppercase italic"
          >
            Systemic <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-500 not-italic font-light">
              Efficiency.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="max-w-3xl mx-auto text-slate-500 text-lg md:text-xl font-light leading-relaxed mb-16"
          >
            AlgoWave architects mission-critical{' '}
            <span className="text-white">ERP Ecosystems</span> designed to
            transform fragmented business processes into a unified,
            high-performance digital core with absolute data integrity.
          </motion.p>
        </div>
      </section>

      {/* --- LAYER 2: MODULAR INFRASTRUCTURE --- */}
      <section className="py-32 px-6 relative bg-white/[0.01]">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
            <div className="max-w-xl">
              <h2 className="text-4xl md:text-7xl font-black tracking-tighter text-white mb-6 uppercase leading-none">
                Modular <br />{' '}
                <span className="italic text-slate-700">Architecture.</span>
              </h2>
              <p className="text-slate-500 font-mono text-[10px] uppercase tracking-widest font-bold">
                Scalable logic blocks for enterprise verticals
              </p>
            </div>
            <div className="flex gap-6 text-[9px] font-black text-slate-600 uppercase tracking-widest border-l border-white/10 pl-8 h-12 items-center">
              <div className="flex flex-col">
                <span>Production_Status</span>
                <span className="text-blue-500 tracking-tighter">
                  Stable_Build
                </span>
              </div>
              <div className="w-[1px] h-full bg-white/10" />
              <div className="flex flex-col">
                <span>Compliance</span>
                <span className="text-blue-500 tracking-tighter">
                  ISO_27001_READY
                </span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {erpModules.map((module, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group relative p-12 rounded-[3.5rem] border border-white/5 bg-[#0A0A0A] transition-all duration-500 overflow-hidden"
              >
                <div className="flex flex-col md:flex-row gap-10 items-start relative z-10">
                  <div className="p-7 rounded-3xl bg-black border border-white/10 group-hover:border-blue-500/50 transition-all shadow-inner">
                    {module.icon}
                  </div>
                  <div className="flex-grow">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-[0.4em] text-blue-500/60 mb-4 block">
                      {module.tag}
                    </span>
                    <h3 className="text-3xl font-black text-white mb-6 uppercase tracking-tight group-hover:text-blue-400 transition-colors">
                      {module.title}
                    </h3>
                    <p className="text-slate-500 text-sm leading-relaxed mb-10 font-light italic">
                      {module.desc}
                    </p>
                    <div className="flex flex-wrap gap-3 pt-8 border-t border-white/5">
                      {module.features.map((feat, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <div className="w-1 h-1 rounded-full bg-blue-500/50" />
                          <span className="text-[10px] font-mono font-bold uppercase tracking-tighter text-slate-500">
                            {feat}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="absolute -top-10 -right-10 p-10 opacity-[0.02] group-hover:opacity-[0.06] transition-opacity">
                  {module.icon}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- LAYER 3: DEEP ARCHITECTURE BREAKDOWN (EXPANDED) --- */}
      <section className="py-32 px-6 bg-[#030303] border-t border-white/5 relative">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-12 gap-20 items-start">
            <div className="lg:col-span-5 sticky top-32">
              <div className="inline-flex items-center gap-3 mb-8 text-blue-500">
                <Microscope size={20} />
                <span className="text-[10px] font-black tracking-[0.5em] uppercase">
                  System Analysis
                </span>
              </div>
              <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-white mb-10 uppercase leading-[0.9]">
                Inside the <br />{' '}
                <span className="italic text-slate-700">Logic Hub.</span>
              </h2>
              <p className="text-slate-500 text-lg leading-relaxed font-light mb-12">
                Our ERP logic is decoupled using a micro-kernel architecture.
                This allows individual modules to scale independently without
                affecting the primary system uptime.
              </p>
              <div className="space-y-6">
                {[
                  { l: 'Orchestration', v: 'Kubernetes Cluster' },
                  { l: 'Data Flow', v: 'Event-Driven Bus' },
                  { l: 'Load Logic', v: 'Dynamic Sharding' },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex justify-between items-center border-b border-white/5 pb-4"
                  >
                    <span className="text-[10px] font-mono uppercase tracking-widest text-slate-600">
                      {item.l}
                    </span>
                    <span className="text-xs font-bold text-white uppercase tracking-tighter">
                      {item.v}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6">
              {[
                {
                  t: 'High-Concurrency Transaction Engine',
                  d: 'Capable of handling 50,000+ simultaneous database read/write operations with zero record locking conflicts.',
                  icon: <Zap size={20} className="text-yellow-500" />,
                },
                {
                  t: 'AI-Enhanced Predictive Analysis',
                  d: 'Integrated LLM nodes that scan historical inventory data to predict supply chain disruptions before they occur.',
                  icon: <Binary size={20} className="text-blue-500" />,
                },
                {
                  t: 'Global Node Synchronization',
                  d: 'Multi-region data replication ensuring that local warehouse data is consistent with HQ in under 100ms.',
                  icon: <Globe size={20} className="text-emerald-500" />,
                },
                {
                  t: 'Elastic Infrastructure Scaling',
                  d: 'Proprietary scaling logic that automatically provisions server resources based on real-time module load.',
                  icon: (
                    <CloudLightning size={20} className="text-indigo-500" />
                  ),
                },
              ].map((card, i) => (
                <motion.div
                  key={i}
                  whileHover={{ x: 10, borderColor: 'rgba(59,130,246,0.2)' }}
                  className="p-10 rounded-[3rem] bg-white/[0.02] border border-white/5 transition-all flex gap-8 items-center"
                >
                  <div className="p-5 bg-black rounded-2xl border border-white/5">
                    {card.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white uppercase tracking-tight mb-2">
                      {card.t}
                    </h4>
                    <p className="text-slate-500 text-sm leading-relaxed font-light">
                      {card.d}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- LAYER 4: SECURITY PROTOCOL NODE (NEW) --- */}
      <section className="py-32 px-6 border-t border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-600/[0.02]" />
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto bg-[#050505] border border-white/10 rounded-[4rem] p-12 md:p-24 shadow-2xl">
            <div className="flex flex-col items-center text-center mb-16">
              <ShieldAlert size={48} className="text-red-500 mb-8" />
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase mb-6">
                Hardened Perimeter
              </h2>
              <p className="text-slate-500 text-sm uppercase tracking-[0.4em] font-bold">
                Absolute data sovereignty protocol
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-12">
              <div className="text-center space-y-4">
                <Fingerprint className="mx-auto text-blue-500" size={32} />
                <h4 className="text-sm font-bold uppercase tracking-widest text-white">
                  Biometric Auth
                </h4>
                <p className="text-[11px] text-slate-500 leading-relaxed font-light">
                  Hardware-level integration for multi-factor entry.
                </p>
              </div>
              <div className="text-center space-y-4">
                <Lock className="mx-auto text-blue-500" size={32} />
                <h4 className="text-sm font-bold uppercase tracking-widest text-white">
                  AES-256 Mesh
                </h4>
                <p className="text-[11px] text-slate-500 leading-relaxed font-light">
                  Data remains encrypted both at rest and in transit.
                </p>
              </div>
              <div className="text-center space-y-4">
                <Activity className="mx-auto text-blue-500" size={32} />
                <h4 className="text-sm font-bold uppercase tracking-widest text-white">
                  Anomalous Logs
                </h4>
                <p className="text-[11px] text-slate-500 leading-relaxed font-light">
                  AI nodes monitor logs for unauthorized patterns.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- LAYER 5: THROUGHPUT REGISTRY --- */}
      <section className="py-24 px-6 bg-[#020203] border-t border-white/5">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            {[
              { label: 'Core Build', val: 'V4.2.1-Stable' },
              { label: 'Uptime Protocol', val: '99.999%' },
              { label: 'Sync Latency', val: '78ms Avg' },
              { label: 'Data Node', val: 'Encrypted' },
            ].map((spec, i) => (
              <div key={i} className="flex flex-col gap-3">
                <span className="text-[10px] font-black tracking-[0.3em] uppercase text-slate-700">
                  {spec.label}
                </span>
                <span className="text-2xl font-black text-white italic tracking-tighter">
                  {spec.val}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Decorative Lateral Navigation */}
      <div className="absolute left-10 top-1/2 -translate-y-1/2 hidden 2xl:flex flex-col items-center gap-12 opacity-20">
        <span className="[writing-mode:vertical-lr] rotate-180 text-[8px] tracking-[1.5em] text-slate-600 uppercase font-black">
          AlgoWave Industrial Core // Enterprise Hub
        </span>
        <div className="w-[1px] h-40 bg-gradient-to-t from-blue-500 via-blue-500/50 to-transparent" />
      </div>

      <div className="absolute inset-0 opacity-[0.01] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
    </main>
  );
}
