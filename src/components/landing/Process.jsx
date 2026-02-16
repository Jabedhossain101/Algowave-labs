'use client';
import React from 'react';
import { motion } from 'framer-motion';
import {
  Search,
  PenTool,
  Code2,
  Rocket,
  Activity,
  Zap,
  ShieldCheck,
  Cpu,
  Command,
} from 'lucide-react';

const steps = [
  {
    n: '01',
    title: 'Discovery',
    desc: 'Deep diving into your business logic and requirements to build a solid roadmap.',
    icon: <Search className="text-blue-400" size={24} />,
    tags: ['Market Analysis', 'SRS'],
  },
  {
    n: '02',
    title: 'Architecture',
    desc: 'Crafting high-fidelity UI/UX systems and underlying API structures.',
    icon: <PenTool className="text-indigo-400" size={24} />,
    tags: ['Prototyping', 'System Design'],
  },
  {
    n: '03',
    title: 'Development',
    desc: 'Implementing clean code using MERN stack with strict industry best practices.',
    icon: <Code2 className="text-cyan-400" size={24} />,
    tags: ['Clean Code', 'CI/CD'],
  },
  {
    n: '04',
    title: 'Deployment',
    desc: 'Cloud-optimized deployment on AWS/Vercel with 24/7 monitoring.',
    icon: <Rocket className="text-purple-400" size={24} />,
    tags: ['Unit Testing', 'Cloud'],
  },
];

export default function AdvancedProcess() {
  return (
    <section className="relative py-16 md:py-24 bg-[#030303] overflow-hidden border-y border-white/[0.03]">
      {/* --- OPTIMIZED BACKGROUND --- */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.03] md:opacity-[0.05]"
          style={{
            backgroundImage: `linear-gradient(#3b82f6 1px, transparent 1px), linear-gradient(90deg, #3b82f6 1px, transparent 1px)`,
            backgroundSize: '45px 45px',
            WebkitMaskImage:
              'radial-gradient(circle at 50% 50%, black, transparent 90%)',
            maskImage:
              'radial-gradient(circle at 50% 50%, black, transparent 90%)',
          }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-blue-600/5 blur-[80px] md:blur-[120px] rounded-full opacity-40" />
      </div>

      <div className="relative z-10 w-full px-6 md:px-12 lg:px-20 max-w-[1400px] mx-auto">
        {/* --- HEADER --- */}
        <div className="mb-12 md:mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-7xl font-bold text-white tracking-tighter leading-tight md:leading-none mb-8 md:mb-12"
          >
            FULL-STACK FLOW <br />
            OPERATIONAL ROADMAP <br />
            <span className="text-blue-500 italic font-light tracking-tight">
              IDEA TO PRODUCTION.
            </span>
          </motion.h2>

          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 md:gap-8">
            <div className="inline-flex items-center gap-3 px-4 py-1.5 md:px-5 md:py-2 rounded-full border border-blue-500/30 bg-blue-500/10">
              <Activity size={14} className="text-blue-400 md:animate-pulse" />
              <span className="text-[9px] md:text-[10px] font-bold tracking-[0.4em] md:tracking-[0.5em] uppercase text-blue-400">
                Process Matrix v4.0
              </span>
            </div>
            <p className="max-w-md text-slate-400 text-xs md:text-sm leading-relaxed md:text-right">
              Engineering high-throughput digital infrastructures through a
              systematic approach that ensures scalability.
            </p>
          </div>
        </div>

        {/* --- PROCESS GRID --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-16 md:mb-24">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-20px' }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group relative flex flex-col bg-white/[0.02] border border-white/[0.08] rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-8 transition-all duration-300 hover:bg-white/[0.04] overflow-hidden"
            >
              {/* Neon Glow (Desktop Only) */}
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-32 h-20 bg-blue-500/20 blur-[40px] opacity-0 group-hover:opacity-100 transition-opacity hidden md:block" />

              <div className="flex justify-between items-start mb-8 md:mb-10">
                <div className="p-3 md:p-4 rounded-2xl bg-black border border-white/10 group-hover:border-blue-500/40 transition-colors">
                  {/* FIXED: Removed TypeScript 'as' syntax */}
                  {React.cloneElement(step.icon, { size: 20 })}
                </div>
                <div className="text-3xl md:text-4xl font-black text-white/[0.03] group-hover:text-blue-500/[0.08] transition-colors select-none">
                  {step.n}
                </div>
              </div>

              <div className="flex-grow">
                <h3 className="text-lg md:text-xl font-bold text-white mb-2 md:mb-3 tracking-tight group-hover:text-blue-400 transition-colors">
                  {step.title}
                </h3>
                <p className="text-slate-500 text-[13px] md:text-sm leading-relaxed mb-6 md:mb-8">
                  {step.desc}
                </p>
              </div>

              {/* Tags Footer */}
              <div className="flex flex-wrap gap-2 pt-5 md:pt-6 border-t border-white/5">
                {step.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="text-[7px] md:text-[8px] font-mono font-bold uppercase tracking-widest px-2.5 py-1 rounded-full bg-white/5 text-slate-600 border border-white/5 group-hover:text-blue-400 transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* --- BOTTOM SYSTEM STATS BAR --- */}
        <div className="pt-10 md:pt-12 border-t border-white/10">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3 md:gap-4">
            {[
              { label: 'Latency', val: '< 2ms', icon: <Zap size={12} /> },
              {
                label: 'Auth Check',
                val: 'SECURE',
                icon: <ShieldCheck size={12} />,
              },
              { label: 'Sync Rate', val: '100%', icon: <Command size={12} /> },
              { label: 'Deploy', val: 'AUTO', icon: <Rocket size={12} /> },
              {
                label: 'Monitoring',
                val: '24/7',
                icon: <Activity size={12} />,
              },
              { label: 'Process', val: 'Agile', icon: <Cpu size={12} /> },
              { label: 'Node', val: 'v20.x', icon: <Activity size={12} /> },
            ].map((stat, i) => (
              <div
                key={i}
                className="p-4 md:p-5 rounded-xl md:rounded-2xl bg-white/[0.02] border border-white/5 flex flex-col items-center justify-center gap-1.5 md:gap-2 group transition-all"
              >
                <span className="text-[7px] md:text-[8px] font-bold text-slate-600 uppercase tracking-widest text-center">
                  {stat.label}
                </span>
                <div className="flex items-center gap-1.5 md:gap-2 text-blue-500/80">
                  {stat.icon}
                  <span className="text-[10px] md:text-xs font-mono font-bold text-white">
                    {stat.val}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Grain Texture Overlay */}
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
    </section>
  );
}
