'use client';
import React from 'react';
import { motion } from 'framer-motion';
import {
  Cloud,
  Zap,
  ShieldCheck,
  Users,
  Repeat,
  Layers,
  ArrowRight,
  Activity,
  Server,
} from 'lucide-react';

const saasFeatures = [
  {
    title: 'Multi-Tenant Architecture',
    desc: 'Engineered for security and isolation, allowing thousands of companies to run on a single, scalable infrastructure.',
    icon: <Users className="text-blue-400" />,
    meta: 'Secure Isolation',
  },
  {
    title: 'Subscription Ecosystems',
    desc: 'Complex billing logic with Stripe/Paddle integration, supporting tiered plans, trials, and automated recurring cycles.',
    icon: <Repeat className="text-cyan-400" />,
    meta: 'Automated Billing',
  },
  {
    title: 'Edge Performance',
    desc: 'Global distribution using Vercel Edge or AWS CloudFront to ensure sub-second response times for users worldwide.',
    icon: <Zap className="text-indigo-400" />,
    meta: 'Ultra-low Latency',
  },
  {
    title: 'Compliance & Security',
    desc: 'SOC2-ready development practices with end-to-end encryption and robust RBAC (Role-Based Access Control).',
    icon: <ShieldCheck className="text-purple-400" />,
    meta: 'Bank-Grade',
  },
];

export default function SaaSPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white selection:bg-blue-500/30">
      {/* --- HERO SECTION: CLOUD SAAS ARCHITECTURE --- */}
      <section className="relative pt-40 pb-24 px-6 border-b border-white/5 overflow-hidden">
        {/* Advanced Background: Mesh and Grid */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-[-15%] left-[-5%] w-[45%] h-[45%] bg-blue-600/10 blur-[130px] rounded-full" />
          <div className="absolute bottom-[10%] right-[-10%] w-[35%] h-[35%] bg-indigo-600/10 blur-[110px] rounded-full" />
        </div>

        <div
          className="absolute inset-0 opacity-[0.05] pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(#3b82f6 1px, transparent 1px), linear-gradient(90deg, #3b82f6 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
            transform: 'perspective(1200px) rotateX(55deg) translateY(-120px)',
          }}
        />

        <div className="container mx-auto relative z-10 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/20 bg-blue-500/5 mb-8"
          >
            <Cloud size={14} className="text-blue-400" />
            <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-blue-400">
              Scale Without Limits
            </span>
          </motion.div>

          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-8">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-5xl md:text-8xl font-black tracking-tighter leading-none mb-8"
              >
                SOFTWARE <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-500">
                  AS A SERVICE
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="max-w-xl text-slate-400 text-lg md:text-xl font-light leading-relaxed mb-10"
              >
                We turn your SaaS vision into a{' '}
                <span className="text-white font-medium text-xl">
                  Cloud-Native Reality
                </span>
                . From multi-tenant architecture to high-performance
                subscription engines, we build for the next million users.
              </motion.p>

              <div className="flex flex-wrap gap-6 justify-center md:justify-start">
                <button className="px-10 py-5 bg-blue-600 text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-blue-700 transition-all shadow-xl shadow-blue-600/20">
                  Build Your SaaS
                </button>
                <div className="flex items-center gap-4 px-6 border-l border-white/10">
                  <Activity className="text-green-500" size={20} />
                  <div className="flex flex-col">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">
                      Global Uptime
                    </span>
                    <span className="text-lg font-mono text-white tracking-tighter">
                      99.99%
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 hidden lg:block">
              <div className="p-8 rounded-[40px] bg-white/5 border border-white/10 backdrop-blur-3xl relative">
                <div className="absolute -top-4 -right-4 p-3 bg-blue-600 rounded-2xl shadow-lg">
                  <Server size={24} className="text-white" />
                </div>
                <h4 className="text-sm font-bold tracking-widest uppercase mb-4 text-blue-400">
                  Architecture
                </h4>
                <div className="space-y-4 font-mono text-[11px] text-slate-500 leading-relaxed italic">
                  <p>// Initializing Cloud Cluster</p>
                  <p className="text-green-400 tracking-tighter">
                    &gt; LoadBalancer: Active
                  </p>
                  <p className="text-green-400 tracking-tighter">
                    &gt; Multi-Tenancy: Enabled
                  </p>
                  <p className="text-green-400 tracking-tighter">
                    &gt; Auth-Service: OIDC Secure
                  </p>
                  <p>// Scale Mode: Automatic</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SaaS CAPABILITIES GRID --- */}
      <section className="py-24 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {saasFeatures.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group p-10 rounded-[48px] border border-white/5 bg-[#0a0a0a] hover:border-blue-500/20 transition-all duration-500 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-10 opacity-[0.02] group-hover:opacity-[0.05] transition-opacity">
                  {feature.icon}
                </div>

                <div className="flex flex-col h-full relative z-10">
                  <div className="mb-8 p-4 w-fit rounded-2xl bg-white/5 border border-white/10 group-hover:bg-blue-500/10 group-hover:border-blue-500/20 transition-all">
                    {feature.icon}
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-4 tracking-tight group-hover:text-blue-400 transition-colors">
                    {feature.title}
                  </h3>

                  <p className="text-slate-400 text-sm leading-relaxed mb-10 flex-grow">
                    {feature.desc}
                  </p>

                  <div className="pt-6 border-t border-white/5 flex justify-between items-center">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-slate-500 group-hover:text-blue-500 transition-colors italic">
                      {feature.meta}
                    </span>
                    <ArrowRight
                      size={18}
                      className="text-slate-700 group-hover:text-blue-400 transition-all"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- TECHNICAL ARCHITECTURE VISUAL --- */}
      <section className="py-24 px-6 bg-[#0a0a0a]/50 border-t border-white/5">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-black tracking-tighter mb-16">
            SCALABLE <span className="text-slate-500">ECOSYSTEM</span>
          </h2>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: 'Logic', val: 'Microservices' },
              { label: 'Data', val: 'Isolated/Shared' },
              { label: 'CI/CD', val: 'Zero-Downtime' },
              { label: 'Edge', val: 'Wasm Enabled' },
            ].map((spec, i) => (
              <div key={i} className="flex flex-col">
                <span className="text-[10px] font-black tracking-[0.3em] uppercase text-blue-500 mb-2">
                  {spec.label}
                </span>
                <span className="text-lg font-bold text-white tracking-tighter">
                  {spec.val}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
