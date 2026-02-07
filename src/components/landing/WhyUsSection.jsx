'use client';
import React from 'react';
import { motion } from 'framer-motion';
import {
  ShieldCheck,
  Code2,
  Users2,
  Rocket,
  ChevronRight,
  Activity,
  Command,
  Cpu,
} from 'lucide-react';

const highlights = [
  {
    title: 'Elite Engineering Core',
    desc: 'Elite developers specializing in high-performance MERN & Next.js ecosystems.',
    icon: <Users2 className="text-blue-400" size={24} />,
    stat: '100% Senior',
  },
  {
    title: 'Clean Architecture',
    desc: 'Strict SOLID principles and clean architecture to ensure long-term scalability.',
    icon: <Code2 className="text-cyan-400" size={24} />,
    stat: 'Zero Debt',
  },
  {
    title: 'Agile Collaborative Unit',
    desc: 'Transparent communication and agile workflows tailored to your business goals.',
    icon: <ShieldCheck className="text-indigo-400" size={24} />,
    stat: '99.9% Sync',
  },
  {
    title: 'Autonomous Scaling',
    desc: 'Cloud-optimized infrastructures designed to handle millions of requests.',
    icon: <Rocket className="text-purple-400" size={24} />,
    stat: 'Enterprise',
  },
];

const AdvancedWhyUs = () => {
  return (
    <section className="relative py-24 bg-[#030303] overflow-hidden">
      {/* --- STATIC BACKGROUND DEPTH (Image Sync) --- */}
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
        {/* Soft Ambient Glows */}
        <div className="absolute top-0 left-[-10%] w-[50%] h-[50%] bg-blue-600/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 right-[-10%] w-[40%] h-[40%] bg-indigo-600/5 blur-[120px] rounded-full" />
      </div>

      <div className="relative z-10 w-full px-6 md:px-12 lg:px-20 max-w-[1400px] mx-auto">
        {/* --- SECTION HEADER --- */}
        <div className="mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-bold text-white tracking-tighter leading-none mb-12"
          >
            FEXL-STACK FONT <br />
            ENGINEERING TEST <br />
            <span className="text-blue-500 italic font-light tracking-tight">
              WHY CHOOSE US?
            </span>
          </motion.h2>

          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 backdrop-blur-md"
            >
              <Activity size={14} className="text-blue-400" />
              <span className="text-[10px] font-bold tracking-[0.5em] uppercase text-blue-400">
                Advantage Matrix v4.0
              </span>
            </motion.div>

            <p className="max-w-md text-slate-400 text-sm leading-relaxed md:text-right">
              We don’t just write code — we engineer high-throughput digital
              legacies that stand the test of time through autonomous logic.
            </p>
          </div>
        </div>

        {/* --- BENTO GRID (Image UI Style) --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {highlights.map((item, i) => (
            <div
              key={i}
              className="group relative flex flex-col bg-white/[0.03] border border-white/[0.08] rounded-[2.5rem] p-8 transition-all duration-300 hover:bg-white/[0.05] hover:border-blue-500/30 overflow-hidden"
            >
              {/* Refractive Top Glow */}
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-32 h-20 bg-blue-500/20 blur-[40px] opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="flex justify-between items-start mb-10">
                <div className="p-4 rounded-2xl bg-black border border-white/10 shadow-inner group-hover:border-blue-500/40 transition-colors">
                  {item.icon}
                </div>
                <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/40 group-hover:text-white transition-colors">
                  <ChevronRight size={20} />
                </div>
              </div>

              <div className="flex-grow">
                <div className="flex items-center gap-3 mb-4">
                  <h3 className="text-xl font-bold text-white tracking-tight">
                    {item.title}
                  </h3>
                </div>

                <p className="text-slate-500 text-sm leading-relaxed mb-8">
                  {item.desc}
                </p>
              </div>

              {/* Stat Footer */}
              <div className="flex items-center justify-between pt-6 border-t border-white/5">
                <div className="flex items-center gap-2">
                  <Cpu size={12} className="text-blue-500" />
                  <span className="text-[9px] font-mono font-bold text-blue-400 uppercase tracking-widest">
                    {item.stat}
                  </span>
                </div>
                <div className="text-[8px] font-mono text-white/10 uppercase tracking-tighter">
                  Status_Active
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* --- BOTTOM SYSTEM STATS BAR (Image Style) --- */}
        <div className="pt-12 border-t border-white/10">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {[
              { label: 'Latency', val: '< 2ms', icon: <Activity size={12} /> },
              {
                label: 'Security',
                val: 'AES-256',
                icon: <ShieldCheck size={12} />,
              },
              { label: 'Sync Rate', val: '99.9%', icon: <Command size={12} /> },
              { label: 'Uptime', val: '99.99%', icon: <Activity size={12} /> },
              {
                label: 'Dev Grade',
                val: 'Senior+',
                icon: <Users2 size={12} />,
              },
              {
                label: 'Architecture',
                val: 'SOLID',
                icon: <Code2 size={12} />,
              },
              { label: 'Scaling', val: 'Auto', icon: <Rocket size={12} /> },
            ].map((stat, i) => (
              <div
                key={i}
                className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 flex flex-col items-center justify-center gap-2 group hover:bg-white/[0.04] transition-colors"
              >
                <span className="text-[8px] font-bold text-slate-500 uppercase tracking-widest">
                  {stat.label}
                </span>
                <div className="flex items-center gap-2 text-blue-400">
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

      {/* Industrial Side Label */}
      <div className="absolute right-8 bottom-32 hidden xl:block opacity-10 pointer-events-none">
        <p className="[writing-mode:vertical-lr] text-[9px] tracking-[1.5em] text-blue-500 uppercase font-black">
          ALGO_WAVE_LABS_ADVANTAGE
        </p>
      </div>

      {/* Grain Overlay */}
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
    </section>
  );
};

export default AdvancedWhyUs;
