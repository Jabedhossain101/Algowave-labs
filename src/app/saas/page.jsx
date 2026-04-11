'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  Cloud,
  Zap,
  ShieldCheck,
  Users,
  Repeat,
  ArrowRight,
  Activity,
  Server,
  Workflow,
  Database,
  Lock,
  Globe,
  Cpu,
  RefreshCw,
  Terminal,
} from 'lucide-react';
import Link from 'next/link';

const saasCapabilities = [
  {
    title: 'Multi-Tenant Logic',
    desc: 'Engineered with strict data isolation protocols, allowing secure multi-tenant environments on a singular, high-performance infrastructure.',
    icon: <Users size={24} className="text-blue-400" />,
    tag: 'CORE_INFRA',
  },
  {
    title: 'Subscription Matrix',
    desc: 'Automated recurring billing cycles with deep Stripe/Paddle integrations, supporting tiered logic, seat-based pricing, and global tax compliance.',
    icon: <Repeat size={24} className="text-cyan-400" />,
    tag: 'REVENUE_ENGINE',
  },
  {
    title: 'Edge Distribution',
    desc: 'Global deployment via Vercel Edge and AWS CloudFront ensuring sub-second execution logic for users across all continents.',
    icon: <Zap size={24} className="text-indigo-400" />,
    tag: 'LATENCY_ZERO',
  },
  {
    title: 'Security Hardening',
    desc: 'SOC2-ready development with AES-256 end-to-end encryption and advanced RBAC (Role-Based Access Control) permission matrices.',
    icon: <ShieldCheck size={24} className="text-purple-400" />,
    tag: 'BANK_GRADE',
  },
];

export default function SaaSPage() {
  return (
    <main className="min-h-screen bg-[#020203] text-white selection:bg-blue-500/30 overflow-hidden font-sans">
      {/* --- LAYER 1: CLOUD STRATEGY HERO --- */}
      <section className="relative pt-40 pb-24 px-6 border-b border-white/5">
        {/* Dynamic Atmosphere */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-600/10 blur-[150px] rounded-full opacity-40" />
          <div className="absolute bottom-[10%] right-[-5%] w-[40%] h-[40%] bg-indigo-600/10 blur-[130px] rounded-full opacity-30" />
        </div>

        {/* Sync Perspective Grid */}
        <div
          className="absolute inset-0 opacity-[0.05] pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(#3b82f6 1px, transparent 1px), linear-gradient(90deg, #3b82f6 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
            transform:
              'perspective(1200px) rotateX(40deg) translateY(-100px) scale(1.2)',
          }}
        />

        <div className="container mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/20 bg-blue-500/5 mb-10"
          >
            <Cloud size={14} className="text-blue-500 animate-pulse" />
            <span className="text-[9px] font-black tracking-[0.5em] uppercase text-blue-500">
              Cloud Native Protocol v4.0
            </span>
          </motion.div>

          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-8">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-5xl md:text-8xl font-black tracking-tighter leading-[0.9] mb-10 uppercase italic"
              >
                Scale Your <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-500 not-italic font-light">
                  SaaS Reality.
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="max-w-2xl text-slate-500 text-lg md:text-xl font-light leading-relaxed mb-12"
              >
                We architect industrial-grade SaaS platforms built for the next
                million nodes. From{' '}
                <span className="text-white">Multi-tenant isolation</span> to
                complex <span className="text-white">billing ecosystems</span>,
                your cloud vision starts with AlgoWave.
              </motion.p>

              <div className="flex flex-wrap gap-6 items-center">
                <Link href={'/contact'} className="px-10 py-5 bg-blue-600 text-white rounded-2xl font-black text-[11px] uppercase tracking-widest hover:bg-blue-700 transition-all shadow-[0_10px_40px_rgba(37,99,235,0.3)]">
                  Initialize SaaS Build
                </Link>
                <div className="flex items-center gap-4 px-8 border-l border-white/10 h-10">
                  <Activity className="text-blue-500" size={18} />
                  <div className="flex flex-col">
                    <span className="text-[8px] font-mono font-bold uppercase tracking-widest text-slate-600">
                      Global Response
                    </span>
                    <span className="text-sm font-black text-white tracking-tighter">
                      &lt; 150ms
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Architecture Node Visualization */}
            <div className="lg:col-span-4 hidden lg:block">
              <div className="p-10 rounded-[3rem] bg-[#0A0A0A] border border-white/10 backdrop-blur-3xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/5 blur-3xl rounded-full" />
                <Terminal size={24} className="text-blue-500 mb-6" />
                <h4 className="text-[10px] font-black tracking-[0.4em] uppercase mb-6 text-slate-500">
                  System_Initialization
                </h4>
                <div className="space-y-4 font-mono text-[10px] leading-relaxed italic">
                  <p className="text-blue-400/60">
                    &gt; Node_Cluster: Verified
                  </p>
                  <p className="text-blue-400/60">
                    &gt; Tenant_Isolation: Active
                  </p>
                  <p className="text-blue-400/60">&gt; Edge_Runtime: Global</p>
                  <div className="h-[1px] w-full bg-white/5 my-4" />
                  <p className="text-green-500 uppercase tracking-widest">
                    Build Status: Stable
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- LAYER 2: CAPABILITIES GRID --- */}
      <section className="py-24 px-6 relative bg-white/[0.01]">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {saasCapabilities.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -5, borderColor: 'rgba(59,130,246,0.3)' }}
                className="group p-10 rounded-[3.5rem] border border-white/5 bg-[#0A0A0A] transition-all duration-500 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-12 opacity-[0.02] group-hover:opacity-[0.08] transition-opacity">
                  {feature.icon}
                </div>

                <div className="flex flex-col h-full relative z-10">
                  <div className="mb-10 p-5 w-fit rounded-2xl bg-black border border-white/10 group-hover:border-blue-500/50 transition-all shadow-2xl">
                    {feature.icon}
                  </div>

                  <span className="text-[9px] font-mono font-bold uppercase tracking-[0.4em] text-blue-500/60 mb-4 block">
                    {feature.tag}
                  </span>

                  <h3 className="text-2xl font-black text-white mb-6 uppercase tracking-tight group-hover:text-blue-400 transition-colors">
                    {feature.title}
                  </h3>

                  <p className="text-slate-500 text-sm leading-relaxed mb-12 font-light">
                    {feature.desc}
                  </p>

                  <div className="mt-auto pt-8 border-t border-white/5 flex justify-between items-center">
                    <span className="text-[9px] font-bold uppercase tracking-widest text-slate-600">
                      Operational Integrity
                    </span>
                    <ArrowRight
                      size={18}
                      className="text-slate-800 group-hover:text-blue-500 group-hover:translate-x-1 transition-all"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- LAYER 3: THE SAAS WORKFLOW (LOGIC MATRIX) --- */}
      <section className="py-32 px-6 bg-[#020203] border-t border-white/5">
        <div className="container mx-auto">
          <div className="flex flex-col items-center text-center mb-24">
            <Cpu size={40} className="text-blue-500 mb-8 animate-pulse" />
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase leading-none">
              The Strategic <br />{' '}
              <span className="italic text-slate-700">
                Infrastructure Node.
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Data Sovereignty',
                desc: "Every tenant has an isolated logical layer. We ensure your clients' data never leaks across boundaries.",
                icon: <Database size={20} className="text-blue-500" />,
              },
              {
                title: 'Auto-Scaling Ops',
                desc: 'Elastic node clusters that grow with your traffic spikes. Zero manual intervention required for scaling.',
                icon: <RefreshCw size={20} className="text-cyan-500" />,
              },
              {
                title: 'Identity Mesh',
                desc: 'MFA, OAuth2, and SAML ready authentication flows to secure the enterprise perimeter.',
                icon: <Lock size={20} className="text-indigo-500" />,
              },
            ].map((node, i) => (
              <div
                key={i}
                className="p-10 rounded-[3rem] border border-white/5 bg-white/[0.01] flex flex-col items-center text-center group hover:bg-white/[0.02] transition-all"
              >
                <div className="mb-8 p-4 bg-white/5 rounded-2xl group-hover:scale-110 transition-transform">
                  {node.icon}
                </div>
                <h4 className="text-lg font-bold text-white mb-4 uppercase tracking-tighter">
                  {node.title}
                </h4>
                <p className="text-slate-500 text-xs leading-relaxed font-light">
                  {node.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- LAYER 4: TECHNICAL STATUS ARCHIVE --- */}
      <section className="py-24 px-6 bg-[#050505] border-t border-white/5">
        <div className="container mx-auto text-center">
          <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-blue-500/5 border border-blue-500/10 mb-16">
            <div className="w-1.5 h-1.5 rounded-full bg-green-500 shadow-[0_0_10px_#22c55e]" />
            <span className="text-[10px] font-black text-blue-400 uppercase tracking-widest">
              Global Distribution Active
            </span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {[
              { label: 'Runtime', val: 'V8_ISOLATED' },
              { label: 'Availability', val: '99.99%' },
              { label: 'Protocol', val: 'HTTP/3_QUIC' },
              { label: 'Encryption', val: 'AES_256_GCM' },
            ].map((spec, i) => (
              <div key={i} className="flex flex-col gap-2">
                <span className="text-[9px] font-black tracking-[0.4em] uppercase text-slate-700">
                  {spec.label}
                </span>
                <span className="text-lg font-black text-white italic tracking-tighter">
                  {spec.val}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Side Narrative Registry */}
      <div className="absolute right-10 top-1/2 -translate-y-1/2 hidden 2xl:flex flex-col items-center gap-12 opacity-20">
        <span className="[writing-mode:vertical-lr] text-[8px] tracking-[2em] text-slate-500 uppercase font-black">
          AlgoWave SaaS Engine // 2026
        </span>
        <div className="w-[1px] h-40 bg-gradient-to-b from-blue-500 via-blue-500/50 to-transparent" />
      </div>

      {/* Custom Grain Overlay */}
      <div className="absolute inset-0 opacity-[0.01] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
    </main>
  );
}
