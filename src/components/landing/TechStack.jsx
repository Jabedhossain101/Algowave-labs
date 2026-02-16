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
    <section className="relative py-20 bg-[#050505] overflow-hidden border-y border-white/5">
      {/* BACKGROUND DEPTH - Reduced blur for mobile */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-blue-600/10 blur-[80px] md:blur-[120px] rounded-full opacity-60" />

        {/* Perspective Grid - Disabled on mobile, only desktop */}
        <div
          className="absolute inset-0 opacity-[0.07] hidden md:block"
          style={{
            backgroundImage: `linear-gradient(#3b82f6 1px, transparent 1px), linear-gradient(90deg, #3b82f6 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
            transform:
              'perspective(1000px) rotateX(60deg) translateY(-100px) scale(2)',
          }}
        />
      </div>

      <div className="relative z-10 w-full px-6 md:px-12 lg:px-20">
        <div className="flex flex-col items-center mb-16 md:mb-24 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-6 px-4 py-1.5 rounded-full bg-white/5 border border-white/10"
          >
            <Activity size={12} className="text-blue-400 md:animate-pulse" />
            <span className="text-[10px] font-bold tracking-[0.5em] uppercase text-blue-400/90">
              Technical Infrastructure
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-7xl font-bold text-white tracking-tighter leading-[1.1]">
            POWERING NEXT-GEN <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-white/40 italic font-light">
              SYSTEM MATRIX.
            </span>
          </h2>
        </div>

        {/* TECH GRID - Mobile performance focus */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {techStack.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: index * 0.03 }}
              // Hover only on desktop
              whileHover={{ y: -5 }}
              className="group relative p-6 md:p-7 rounded-[2rem] md:rounded-[2.5rem] border border-white/10 bg-[#0A0A0A]/50 md:backdrop-blur-xl transition-all duration-300 overflow-hidden"
            >
              <div className="flex justify-between items-start mb-6 md:mb-8">
                <div
                  className={`p-3 rounded-xl bg-black border border-white/5 transition-all duration-300 ${tech.color} group-hover:scale-110 shadow-lg`}
                >
                  {tech.icon}
                </div>
                <div className="text-[9px] font-mono text-white/20 uppercase tracking-widest">
                  SECURE_NODE
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="text-xl font-bold text-white/90">{tech.name}</h3>
                <div className="flex items-center gap-3">
                  <span
                    className={`text-[10px] font-mono uppercase tracking-widest ${tech.color} opacity-80`}
                  >
                    {tech.version}
                  </span>
                  <div className="h-[1px] flex-1 bg-white/5" />
                </div>
              </div>

              {/* Removed bottom glow on mobile for better FPS */}
              <div className="absolute -bottom-10 -right-10 w-24 h-24 bg-blue-500/5 blur-[30px] rounded-full hidden md:block" />
            </motion.div>
          ))}
        </div>

        {/* PERFORMANCE SCROLLER - Optimized speed & elements */}
        <div className="mt-24 md:mt-32">
          <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-white/10 to-transparent mb-12 md:mb-16" />
          <div className="w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
            <motion.div
              animate={{ x: [0, -1000] }} // Reduced distance for faster calculation
              transition={{ repeat: Infinity, duration: 40, ease: 'linear' }}
              style={{ willChange: 'transform', transform: 'translateZ(0)' }}
              className="flex items-center gap-12 md:gap-20 whitespace-nowrap"
            >
              {[...techStack, ...techStack].map((tech, idx) => (
                <div key={idx} className="flex items-center gap-6 opacity-20">
                  <span className="text-3xl md:text-4xl font-black italic text-zinc-800 uppercase tracking-tighter">
                    {tech.name}
                  </span>
                  <div className="w-2 h-2 rounded-full bg-blue-600/40" />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
