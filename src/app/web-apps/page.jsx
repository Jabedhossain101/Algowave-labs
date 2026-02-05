'use client';
import React from 'react';
import { motion } from 'framer-motion';
import {
  ShoppingBag,
  Zap,
  Globe,
  ShieldCheck,
  Code2,
  ArrowRight,
  Smartphone,
  Search,
} from 'lucide-react';

const solutions = [
  {
    title: 'Headless E-commerce',
    desc: 'Decoupled frontend and backend for ultimate speed and flexibility using Next.js and Shopify/Custom APIs.',
    icon: <ShoppingBag className="text-blue-400" />,
    stats: 'Sub-2s Load Time',
  },
  {
    title: 'Custom Web Engines',
    desc: 'Bespoke web applications built with the MERN stack, optimized for complex business logic and high traffic.',
    icon: <Code2 className="text-cyan-400" />,
    stats: 'Scalable Core',
  },
  {
    title: 'SEO & Performance',
    desc: 'Vitals-optimized architectures that ensure 95+ Lighthouse scores and dominant search engine visibility.',
    icon: <Search className="text-indigo-400" />,
    stats: '99+ Performance',
  },
  {
    title: 'Secure Gateways',
    desc: 'PCI-DSS compliant payment integration supporting SSL, Stripe, SSLCommerz, and Global gateways.',
    icon: <ShieldCheck className="text-purple-400" />,
    stats: 'Bank-grade Security',
  },
];

export default function WebAppsPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white selection:bg-blue-500/30">
      {/* --- HERO SECTION: COMMERCE ENGINEERING --- */}
      <section className="relative pt-40 pb-24 px-6 border-b border-white/5 overflow-hidden">
        {/* Advanced Background Architecture */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-[-10%] left-[-10%] w-[45%] h-[45%] bg-blue-600/10 blur-[130px] rounded-full" />
          <div className="absolute bottom-[10%] right-[-5%] w-[35%] h-[35%] bg-indigo-600/10 blur-[110px] rounded-full" />
        </div>

        {/* Perspective Cyber Grid */}
        <div
          className="absolute inset-0 opacity-[0.05] pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(#3b82f6 1px, transparent 1px), linear-gradient(90deg, #3b82f6 1px, transparent 1px)`,
            backgroundSize: '45px 45px',
            transform: 'perspective(1200px) rotateX(45deg) translateY(-100px)',
          }}
        />

        <div className="container mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/20 bg-blue-500/5 mb-8"
          >
            <Globe size={14} className="text-blue-400" />
            <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-blue-400">
              High-Performance Web Solutions
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-8xl font-black tracking-tighter leading-none mb-8"
          >
            DIGITAL <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-500">
              DOMINANCE
            </span>
          </motion.h1>

          <div className="grid lg:grid-cols-2 gap-12 items-end">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-slate-400 text-lg md:text-xl font-light leading-relaxed"
            >
              We don't just build websites; we engineer{' '}
              <span className="text-white font-medium">
                conversion-focused platforms
              </span>
              . From bespoke E-commerce engines to progressive web apps (PWA),
              we ensure your digital presence is as fast as your growth.
            </motion.p>

            <div className="flex gap-4">
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex flex-col items-center flex-1">
                <Zap size={20} className="text-blue-400 mb-2" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500 leading-none">
                  Speed
                </span>
                <span className="text-lg font-mono text-white mt-1">99+</span>
              </div>
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex flex-col items-center flex-1">
                <Smartphone size={20} className="text-indigo-400 mb-2" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500 leading-none">
                  PWA
                </span>
                <span className="text-lg font-mono text-white mt-1">Ready</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SOLUTIONS GRID --- */}
      <section className="py-24 px-6 relative">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {solutions.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group p-8 rounded-[40px] border border-white/5 bg-[#0a0a0a] hover:border-blue-500/30 transition-all duration-500 flex flex-col h-full"
              >
                <div className="mb-8 p-4 w-fit rounded-2xl bg-white/5 border border-white/10 group-hover:bg-blue-500/10 group-hover:border-blue-500/20 transition-all">
                  {item.icon}
                </div>

                <h3 className="text-xl font-bold text-white mb-4 tracking-tight group-hover:text-blue-400 transition-colors">
                  {item.title}
                </h3>

                <p className="text-slate-400 text-sm leading-relaxed mb-10 flex-grow">
                  {item.desc}
                </p>

                <div className="pt-6 border-t border-white/5 flex justify-between items-center">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-blue-500/70">
                    {item.stats}
                  </span>
                  <ArrowRight
                    size={16}
                    className="text-slate-700 group-hover:text-blue-400 transition-all translate-x-[-10px] group-hover:translate-x-0 opacity-0 group-hover:opacity-100"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- TECH SPEC SECTION --- */}
      <section className="py-24 px-6 border-t border-white/5 bg-[#0a0a0a]/30">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="flex-1">
              <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-white mb-8">
                THE STACK <br /> THAT CONVERTS.
              </h2>
              <div className="space-y-6">
                {[
                  { label: 'Frontend', val: 'Next.js 16, React, Tailwind CSS' },
                  { label: 'Backend', val: 'Node.js, Express, Prisma ORM' },
                  {
                    label: 'Database',
                    val: 'MongoDB Atlas, PostgreSQL, Redis',
                  },
                  { label: 'Cloud', val: 'AWS, Vercel Edge, Docker' },
                ].map((tech, i) => (
                  <div
                    key={i}
                    className="flex justify-between border-b border-white/5 pb-2"
                  >
                    <span className="text-[10px] font-mono uppercase text-slate-500">
                      {tech.label}
                    </span>
                    <span className="text-xs font-bold text-slate-200">
                      {tech.val}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Visual Callout */}
            <div className="flex-1 w-full p-1 bg-gradient-to-br from-blue-500/20 to-transparent rounded-[50px]">
              <div className="bg-[#050505] rounded-[49px] p-10 text-center">
                <div className="inline-block p-4 bg-blue-600/10 rounded-full mb-6 text-blue-400">
                  <ShoppingBag size={40} />
                </div>
                <h4 className="text-2xl font-bold mb-4 tracking-tight uppercase italic">
                  Custom Storefronts
                </h4>
                <p className="text-slate-500 text-sm mb-8 leading-relaxed">
                  Automate your sales pipeline with our custom-built e-commerce
                  storefronts designed for speed and reliability.
                </p>
                <button className="px-10 py-4 border border-blue-500/30 text-blue-400 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-blue-600 hover:text-white transition-all">
                  Initiate Build
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
