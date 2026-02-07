'use client';
import React from 'react';
import { motion } from 'framer-motion';
import {
  Layers,
  Cpu,
  Globe,
  Zap,
  Database,
  ShieldCheck,
  Workflow,
  Infinity,
  Activity,
} from 'lucide-react';

const techStack = [
  {
    name: 'MongoDB',
    version: 'v6.0.4',
    icon: <Database size={24} />,
    color: 'text-green-400',
    glow: 'group-hover:shadow-[0_0_20px_rgba(74,222,128,0.2)]',
  },
  {
    name: 'Express.js',
    version: 'v4.18.2',
    icon: <Workflow size={24} />,
    color: 'text-slate-300',
    glow: 'group-hover:shadow-[0_0_20px_rgba(203,213,225,0.2)]',
  },
  {
    name: 'React',
    version: 'v18.2.0',
    icon: <Zap size={24} />,
    color: 'text-blue-400',
    glow: 'group-hover:shadow-[0_0_20px_rgba(96,165,250,0.2)]',
  },
  {
    name: 'Node.js',
    version: 'v20.9.0',
    icon: <Cpu size={24} />,
    color: 'text-emerald-400',
    glow: 'group-hover:shadow-[0_0_20px_rgba(52,211,153,0.2)]',
  },
  {
    name: 'Next.js',
    version: 'v14.0.1',
    icon: <Globe size={24} />,
    color: 'text-white',
    glow: 'group-hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]',
  },
  {
    name: 'Tailwind',
    version: 'v3.3.5',
    icon: <Layers size={24} />,
    color: 'text-cyan-400',
    glow: 'group-hover:shadow-[0_0_20_rgba(34,211,238,0.2)]',
  },
  {
    name: 'Prisma',
    version: 'v5.5.2',
    icon: <ShieldCheck size={24} />,
    color: 'text-indigo-400',
    glow: 'group-hover:shadow-[0_0_20px_rgba(129,140,248,0.2)]',
  },
  {
    name: 'AWS Cloud',
    version: 'v2.1.0',
    icon: <Infinity size={24} />,
    color: 'text-orange-400',
    glow: 'group-hover:shadow-[0_0_20px_rgba(251,146,60,0.2)]',
  },
];

export default function AdvancedTechStack() {
  return (
    <section className="relative py-24 bg-[#050505] overflow-hidden border-y border-white/5">
      {/* --- BACKGROUND DEPTH --- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full opacity-60" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[400px] bg-gradient-to-b from-blue-500/[0.05] to-transparent" />

        {/* Perspective Grid Sync */}
        <div
          className="absolute inset-0 opacity-[0.1]"
          style={{
            backgroundImage: `linear-gradient(#3b82f6 1px, transparent 1px), linear-gradient(90deg, #3b82f6 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
            transform:
              'perspective(1000px) rotateX(60deg) translateY(-100px) scale(2)',
            willChange: 'transform',
          }}
        />
      </div>

      {/* --- CONTENT WRAPPER (Full Width Sync) --- */}
      <div className="relative z-10 w-full px-6 md:px-12 lg:px-20">
        {/* --- HEADER --- */}
        <div className="flex flex-col items-center mb-24 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="flex items-center gap-3 mb-6 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md"
          >
            <Activity size={12} className="text-blue-400 animate-pulse" />
            <span className="text-[10px] font-bold tracking-[0.5em] uppercase text-blue-400/90">
              Technical Infrastructure
            </span>
          </motion.div>

          <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tighter leading-[1.1]">
            POWERING NEXT-GEN <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-white/40 italic font-light tracking-tight">
              SYSTEM MATRIX.
            </span>
          </h2>
        </div>

        {/* --- TECH GRID --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {techStack.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ y: -8 }}
              className="group relative p-7 rounded-[2.5rem] border border-white/10 bg-[#0A0A0A]/50 backdrop-blur-xl hover:border-blue-500/40 transition-all duration-500 ease-out overflow-hidden"
            >
              {/* Card Meta Info */}
              <div className="flex justify-between items-start mb-8">
                <div
                  className={`p-3 rounded-xl bg-black border border-white/5 transition-all duration-500 ${tech.color} ${tech.glow} opacity-90 group-hover:opacity-100 group-hover:scale-110 shadow-lg`}
                >
                  {tech.icon}
                </div>
                <div className="text-[9px] font-mono text-white/20 group-hover:text-blue-500/50 transition-colors uppercase tracking-widest">
                  SECURE_NODE
                </div>
              </div>

              {/* Title & Version */}
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-white/90 group-hover:text-white transition-colors">
                  {tech.name}
                </h3>
                <div className="flex items-center gap-3">
                  <span
                    className={`text-[10px] font-mono uppercase tracking-widest ${tech.color} opacity-80`}
                  >
                    {tech.version}
                  </span>
                  <div className="h-[1px] flex-1 bg-white/5 group-hover:bg-blue-500/20 transition-all" />
                </div>
              </div>

              {/* Decorative Code Trace */}
              <p className="mt-8 text-[9px] font-mono text-zinc-600 uppercase tracking-tighter group-hover:text-zinc-400 transition-colors">
                // module_status: active_v4
              </p>

              {/* Subtle Bottom Glow */}
              <div className="absolute -bottom-10 -right-10 w-24 h-24 bg-blue-500/5 blur-[40px] rounded-full group-hover:bg-blue-500/10 transition-all" />
            </motion.div>
          ))}
        </div>

        {/* --- PERFORMANCE SCROLLER --- */}
        <div className="mt-32">
          <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-white/10 to-transparent mb-16" />

          <div className="w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
            <motion.div
              animate={{ x: [0, -2000] }}
              transition={{ repeat: Infinity, duration: 50, ease: 'linear' }}
              className="flex items-center gap-20 whitespace-nowrap"
            >
              {[...techStack, ...techStack, ...techStack].map((tech, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-6 group/scroll opacity-20 hover:opacity-100 transition-opacity"
                >
                  <span className="text-4xl font-black italic text-zinc-800 group-hover/scroll:text-white/20 transition-all uppercase tracking-tighter">
                    {tech.name}
                  </span>
                  <div className="w-2.5 h-2.5 rounded-full bg-blue-600/40 shadow-[0_0_12px_rgba(37,99,235,0.4)]" />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Grainy Noise Overlay */}
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
    </section>
  );
}
