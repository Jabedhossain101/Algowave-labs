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
    <section className="relative py-16 md:py-24 bg-[#030303] overflow-hidden">
      {/* --- BACKGROUND: Simplified for Mobile Performance --- */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.03] md:opacity-[0.05]"
          style={{
            backgroundImage: `linear-gradient(#3b82f6 1px, transparent 1px), linear-gradient(90deg, #3b82f6 1px, transparent 1px)`,
            backgroundSize: '45px 45px',
            WebkitMaskImage:
              'radial-gradient(circle at 50% 50%, black, transparent 90%)',
          }}
        />
        {/* Reduced Blur and size for mobile GPU */}
        <div className="absolute top-0 left-[-5%] w-[40%] h-[30%] bg-blue-600/5 blur-[80px] md:blur-[120px] rounded-full" />
      </div>

      <div className="relative z-10 w-full px-6 md:px-12 lg:px-20 max-w-[1400px] mx-auto">
        {/* --- SECTION HEADER --- */}
        <div className="mb-12 md:mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-7xl font-bold text-white tracking-tighter leading-tight md:leading-none mb-8 md:mb-12"
          >
            FEXL-STACK FONT <br />
            ENGINEERING TEST <br />
            <span className="text-blue-500 italic font-light tracking-tight">
              WHY CHOOSE US?
            </span>
          </motion.h2>

          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 md:gap-8">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10"
            >
              <Activity size={14} className="text-blue-400" />
              <span className="text-[9px] md:text-[10px] font-bold tracking-[0.4em] md:tracking-[0.5em] uppercase text-blue-400">
                Advantage Matrix v4.0
              </span>
            </motion.div>

            <p className="max-w-md text-slate-400 text-xs md:text-sm leading-relaxed md:text-right">
              We engineer high-throughput digital legacies that stand the test
              of time through autonomous logic.
            </p>
          </div>
        </div>

        {/* --- BENTO GRID: Optimized Responsiveness --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-16 md:mb-24">
          {highlights.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-20px' }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              whileHover={{ y: -5 }}
              className="group relative flex flex-col bg-white/[0.02] md:bg-white/[0.03] border border-white/[0.08] rounded-[2rem] md:rounded-[2.5rem] p-7 md:p-8 transition-all duration-300 hover:bg-white/[0.05] overflow-hidden"
            >
              {/* Glow - Desktop only */}
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-32 h-20 bg-blue-500/20 blur-[40px] opacity-0 group-hover:opacity-100 transition-opacity hidden md:block" />

              <div className="flex justify-between items-start mb-8 md:mb-10">
                <div className="p-3 md:p-4 rounded-2xl bg-black border border-white/10 group-hover:border-blue-500/40 transition-colors">
                  {item.icon}
                </div>
                <div className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/40 group-hover:text-white transition-colors">
                  <ChevronRight size={18} />
                </div>
              </div>

              <div className="flex-grow">
                <h3 className="text-lg md:text-xl font-bold text-white mb-3 tracking-tight group-hover:text-blue-400 transition-colors">
                  {item.title}
                </h3>
                <p className="text-slate-500 text-[13px] md:text-sm leading-relaxed mb-6 md:mb-8">
                  {item.desc}
                </p>
              </div>

              {/* Stat Footer */}
              <div className="flex items-center justify-between pt-5 md:pt-6 border-t border-white/5">
                <div className="flex items-center gap-2">
                  <Cpu size={12} className="text-blue-500" />
                  <span className="text-[9px] font-mono font-bold text-blue-400 uppercase tracking-widest">
                    {item.stat}
                  </span>
                </div>
                <div className="text-[8px] font-mono text-white/10 uppercase">
                  Active
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* --- BOTTOM SYSTEM STATS BAR --- */}
        <div className="pt-10 md:pt-12 border-t border-white/10">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3 md:gap-4">
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
                className="p-4 md:p-5 rounded-xl md:rounded-2xl bg-white/[0.02] border border-white/5 flex flex-col items-center justify-center gap-2 transition-all hover:bg-white/[0.04]"
              >
                <span className="text-[7px] md:text-[8px] font-bold text-slate-500 uppercase tracking-widest text-center">
                  {stat.label}
                </span>
                <div className="flex items-center gap-1.5 md:gap-2 text-blue-400">
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

      {/* Industrial Side Label - Optimized for layout */}
      <div className="absolute right-4 bottom-32 hidden 2xl:block opacity-5 pointer-events-none">
        <p className="[writing-mode:vertical-lr] text-[9px] tracking-[1.5em] text-blue-500 uppercase font-black">
          ALGO_WAVE_LABS_ADVANTAGE
        </p>
      </div>

      {/* Grain Overlay */}
      <div className="absolute inset-0 opacity-[0.01] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
    </section>
  );
};

export default AdvancedWhyUs;
