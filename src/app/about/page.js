'use client';
import React from 'react';
import { motion } from 'framer-motion';
import {
  Target,
  Cpu,
  Users2,
  ShieldCheck,
  ArrowRight,
  Zap,
  Code2,
  Activity,
} from 'lucide-react';

const values = [
  {
    title: 'Engineering Excellence',
    desc: "We don't just write code; we architect systems that are scalable, maintainable, and built on SOLID principles.",
    icon: <Code2 className="text-blue-400" />,
  },
  {
    title: 'Mission Critical Reliability',
    desc: 'Our software is the backbone of businesses. We ensure 99.9% uptime and enterprise-grade security protocol.',
    icon: <ShieldCheck className="text-indigo-400" />,
  },
  {
    title: 'Client-Centric Innovation',
    desc: 'Every line of code is written to solve a business problem and drive measurable growth for our partners.',
    icon: <Zap className="text-cyan-400" />,
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white selection:bg-blue-500/30 overflow-hidden">
      {/* --- HERO SECTION: IDENTITY ARCHITECTURE --- */}
      <section className="relative pt-40 pb-24 px-6 border-b border-white/5">
        {/* Advanced Background: Mesh and Cyber Grid */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-[-10%] left-[-10%] w-[45%] h-[45%] bg-blue-600/10 blur-[130px] rounded-full" />
          <div className="absolute bottom-[10%] right-[-5%] w-[35%] h-[35%] bg-indigo-600/10 blur-[110px] rounded-full" />
        </div>

        <div
          className="absolute inset-0 opacity-[0.05] pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(#3b82f6 1px, transparent 1px), linear-gradient(90deg, #3b82f6 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
            transform: 'perspective(1000px) rotateX(20deg) translateY(-50px)',
          }}
        />

        <div className="container mx-auto relative z-10 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/20 bg-blue-500/5 mb-8"
          >
            <Target size={14} className="text-blue-400" />
            <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-blue-400">
              Our Studio Identity
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-8xl font-black tracking-tighter leading-none mb-8"
          >
            ENGINEERING <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-500">
              THE FUTURE
            </span>
          </motion.h1>

          <div className="grid lg:grid-cols-2 gap-12 items-end mt-12">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-slate-400 text-lg md:text-xl font-light leading-relaxed"
            >
              AlgoWave Labs is a{' '}
              <span className="text-white font-medium">
                premier engineering studio
              </span>{' '}
              dedicated to pushing the boundaries of digital innovation. We
              don't just build apps; we architect high-impact ecosystems that
              redefine industrial standards.
            </motion.p>

            <div className="flex gap-8 justify-center md:justify-end border-l border-white/10 pl-8">
              <div className="flex flex-col">
                <span className="text-3xl font-black text-white tracking-tighter">
                  50+
                </span>
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-slate-500">
                  Deployments
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-black text-white tracking-tighter">
                  98%
                </span>
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-slate-500">
                  Retention
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- CORE VALUES: THE LOGIC GATE --- */}
      <section className="py-32 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter mb-4 uppercase">
              CORE ARCHITECTURE
            </h2>
            <p className="text-slate-500 text-sm tracking-[0.2em] font-bold uppercase">
              The principles that drive every commit
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
                className="group p-10 rounded-[40px] border border-white/5 bg-[#0a0a0a] hover:border-blue-500/30 transition-all duration-500"
              >
                <div className="mb-10 p-5 w-fit rounded-2xl bg-white/5 border border-white/10 group-hover:bg-blue-500/10 transition-all">
                  {value.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 tracking-tight group-hover:text-blue-400 transition-colors">
                  {value.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {value.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- TEAM STATUS SECTION --- */}
      <section className="py-32 px-6 bg-[#0a0a0a]/50 border-t border-white/5">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-20">
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 mb-6 text-blue-500">
                <Users2 size={20} />
                <span className="text-[10px] font-black tracking-[0.4em] uppercase">
                  Human Capital
                </span>
              </div>
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-white mb-8">
                ELITE SQUAD <br /> OF{' '}
                <span className="text-slate-500 italic">ARCHITECTS.</span>
              </h2>
              <p className="text-slate-400 text-lg leading-relaxed mb-10">
                Our team consists of senior engineers, product strategists, and
                UI architects who have built systems for global scale. We
                operate like an elite lab, where every project is a challenge to
                push technology further.
              </p>
              <button className="group flex items-center gap-4 px-10 py-5 bg-white text-black rounded-2xl font-black text-xs uppercase tracking-[0.2em] hover:bg-blue-600 hover:text-white transition-all">
                Join the Lab{' '}
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Visual Stat Card */}
            <div className="flex-1 w-full grid grid-cols-2 gap-4">
              {[
                { label: 'Frontend Lab', stat: 'React / Next' },
                { label: 'Backend Lab', stat: 'Node / Go' },
                { label: 'DevOps Lab', stat: 'AWS / Docker' },
                { label: 'AI Lab', stat: 'Python / Logic' },
              ].map((lab, i) => (
                <div
                  key={i}
                  className="p-8 rounded-[32px] border border-white/5 bg-[#050505] flex flex-col justify-between aspect-square hover:border-blue-500/20 transition-all"
                >
                  <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-slate-500">
                    {lab.label}
                  </span>
                  <span className="text-xl font-black text-white tracking-tighter italic">
                    {lab.stat}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Side Decorative Element */}
      <div className="absolute right-10 top-1/2 -translate-y-1/2 hidden 2xl:flex flex-col items-center gap-8 opacity-20">
        <div className="flex items-center gap-2 text-blue-500">
          <Activity size={14} className="animate-pulse" />
          <span className="text-[8px] font-black tracking-[1.5em] text-slate-500 uppercase">
            System Identity: Verified
          </span>
        </div>
        <div className="w-[1px] h-32 bg-gradient-to-b from-blue-500 to-transparent" />
      </div>
    </main>
  );
}
