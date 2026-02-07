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
  ChevronRight,
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
    <section className="relative py-24 bg-[#030303] overflow-hidden border-y border-white/[0.03]">
      {/* --- STATIC IMAGE-INSPIRED BACKGROUND --- */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: `linear-gradient(#3b82f6 1px, transparent 1px), linear-gradient(90deg, #3b82f6 1px, transparent 1px)`,
            backgroundSize: '45px 45px',
            maskImage:
              'radial-gradient(circle at 50% 50%, black, transparent 90%)',
          }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/5 blur-[120px] rounded-full opacity-40" />
      </div>

      <div className="relative z-10 w-full px-6 md:px-12 lg:px-20 max-w-[1400px] mx-auto">
        {/* --- HEADER (As per Image UI) --- */}
        <div className="mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-bold text-white tracking-tighter leading-none mb-12"
          >
            FEXL-STACK FONT <br />
            OPERATIONAL ROADMAP <br />
            <span className="text-blue-500 italic font-light tracking-tight">
              IDEA TO PRODUCTION.
            </span>
          </motion.h2>

          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
            <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 backdrop-blur-md">
              <Activity size={14} className="text-blue-400 animate-pulse" />
              <span className="text-[10px] font-bold tracking-[0.5em] uppercase text-blue-400">
                Process Matrix v4.0
              </span>
            </div>
            <p className="max-w-md text-slate-400 text-sm leading-relaxed md:text-right">
              Engineering high-throughput digital infrastructures through a
              systematic approach that ensures scalability and zero-latency
              logic.
            </p>
          </div>
        </div>

        {/* --- PROCESS GRID (Image Style Bento) --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {steps.map((step, index) => (
            <div
              key={index}
              className="group relative flex flex-col bg-white/[0.02] border border-white/[0.08] rounded-[2.5rem] p-8 transition-all duration-300 hover:bg-white/[0.04] hover:border-blue-500/30 overflow-hidden h-full"
            >
              {/* Neon Glow on Top */}
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-32 h-20 bg-blue-500/20 blur-[40px] opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="flex justify-between items-start mb-10">
                <div className="p-4 rounded-2xl bg-black border border-white/10 group-hover:border-blue-500/40 transition-colors">
                  {step.icon}
                </div>
                <div className="text-4xl font-black text-white/[0.03] group-hover:text-blue-500/[0.08] transition-colors select-none">
                  {step.n}
                </div>
              </div>

              <div className="flex-grow">
                <h3 className="text-xl font-bold text-white mb-3 tracking-tight group-hover:text-blue-400 transition-colors">
                  {step.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-8">
                  {step.desc}
                </p>
              </div>

              {/* Tags Footer */}
              <div className="flex flex-wrap gap-2 pt-6 border-t border-white/5">
                {step.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="text-[8px] font-mono font-bold uppercase tracking-widest px-3 py-1.5 rounded-full bg-white/5 text-slate-600 border border-white/5 group-hover:text-blue-400 transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* --- BOTTOM SYSTEM STATS BAR (Image Style) --- */}
        <div className="pt-12 border-t border-white/10">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
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
              { label: 'Node', val: 'v18.x', icon: <Activity size={12} /> },
            ].map((stat, i) => (
              <div
                key={i}
                className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 flex flex-col items-center justify-center gap-2 group hover:bg-white/[0.04] transition-all"
              >
                <span className="text-[8px] font-bold text-slate-600 uppercase tracking-widest">
                  {stat.label}
                </span>
                <div className="flex items-center gap-2 text-blue-500/80">
                  {stat.icon}
                  <span className="text-xs font-mono font-bold text-white">
                    {stat.val}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative Label */}
      <div className="absolute left-8 bottom-32 hidden 2xl:block opacity-5 pointer-events-none rotate-180">
        <p className="[writing-mode:vertical-lr] text-[9px] tracking-[1.5em] text-blue-500 uppercase font-black">
          OPERATIONAL_EXCELLENCE_MATRIX
        </p>
      </div>

      {/* Grain Texture */}
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
    </section>
  );
}
