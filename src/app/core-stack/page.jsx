'use client';

import React, { useState, useEffect } from 'react';
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
    category: 'Database',
  },
  {
    name: 'Express.js',
    version: 'v4.18.2',
    icon: <Workflow size={24} />,
    color: 'text-slate-300',
    category: 'Backend',
  },
  {
    name: 'React',
    version: 'v18.2.0',
    icon: <Zap size={24} />,
    color: 'text-blue-400',
    category: 'Frontend',
  },
  {
    name: 'Node.js',
    version: 'v20.9.0',
    icon: <Cpu size={24} />,
    color: 'text-emerald-400',
    category: 'Runtime',
  },
  {
    name: 'Next.js',
    version: 'v14.0.1',
    icon: <Globe size={24} />,
    color: 'text-white',
    category: 'Framework',
  },
  {
    name: 'Tailwind',
    version: 'v3.3.5',
    icon: <Layers size={24} />,
    color: 'text-cyan-400',
    category: 'Styling',
  },
  {
    name: 'Prisma',
    version: 'v5.5.2',
    icon: <ShieldCheck size={24} />,
    color: 'text-indigo-400',
    category: 'ORM',
  },
  {
    name: 'AWS Cloud',
    version: 'v2.1.0',
    icon: <Infinity size={24} />,
    color: 'text-orange-400',
    category: 'DevOps',
  },
];

export default function CoreStackSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section
      id="core-stack"
      className="relative py-20 bg-[#050505] overflow-hidden border-y border-white/5"
    >
      {/* --- BACKGROUND DEPTH --- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-blue-600/5 blur-[100px] md:blur-[150px] rounded-full opacity-50" />

        {/* Sync Perspective Grid with CTA Style */}
        <div
          className="absolute inset-0 opacity-[0.03] hidden md:block"
          style={{
            backgroundImage: `linear-gradient(#3b82f6 1px, transparent 1px), linear-gradient(90deg, #3b82f6 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
            transform:
              'perspective(1000px) rotateX(60deg) translateY(-100px) scale(2)',
          }}
        />
      </div>

      <div className="relative z-10 w-full px-6 md:px-12 lg:px-20">
        <div className="flex flex-col items-center mb-16 md:mb-24 text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-6 px-4 py-1.5 rounded-full bg-white/5 border border-white/10"
          >
            <Activity size={12} className="text-blue-400 md:animate-pulse" />
            <span className="text-[9px] font-bold tracking-[0.4em] uppercase text-blue-400/90">
              Technical Infrastructure
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-7xl font-bold text-white tracking-tighter leading-[1.1] uppercase">
            Powering Next-Gen <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-white/40 italic font-light">
              System Matrix.
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
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{
                y: -5,
                backgroundColor: 'rgba(255, 255, 255, 0.04)',
              }}
              className="group relative p-8 rounded-[2rem] border border-white/5 bg-white/[0.02] transition-all duration-300 overflow-hidden"
            >
              <div className="flex justify-between items-start mb-10">
                <div
                  className={`p-3 rounded-2xl bg-black border border-white/10 transition-all duration-500 ${tech.color} group-hover:scale-110 group-hover:border-blue-500/30`}
                >
                  {tech.icon}
                </div>
                <div className="text-[8px] font-mono text-white/10 uppercase tracking-[0.3em]">
                  {tech.category}
                </div>
              </div>

              <div className="space-y-3">
                <h3 className="text-xl font-bold text-white/90 tracking-tight">
                  {tech.name}
                </h3>
                <div className="flex items-center gap-3">
                  <span
                    className={`text-[10px] font-mono uppercase tracking-widest ${tech.color} opacity-60`}
                  >
                    {tech.version}
                  </span>
                  <div className="h-[1px] flex-1 bg-white/5" />
                </div>
              </div>

              {/* Decorative Corner */}
              <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-white/5 rounded-tr-[2rem] transition-colors group-hover:border-blue-500/20" />
            </motion.div>
          ))}
        </div>

        {/* --- PERFORMANCE SCROLLER (Optional) --- */}
        {mounted && (
          <div className="mt-24 md:mt-32 opacity-30">
            <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-white/10 to-transparent mb-12" />
            <div className="w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
              <motion.div
                animate={{ x: [0, -1000] }}
                transition={{ repeat: Infinity, duration: 30, ease: 'linear' }}
                className="flex items-center gap-20 whitespace-nowrap"
              >
                {[...techStack, ...techStack].map((t, i) => (
                  <span
                    key={i}
                    className="text-4xl font-black italic text-zinc-800 uppercase tracking-tighter"
                  >
                    {t.name} • {t.category}
                  </span>
                ))}
              </motion.div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
