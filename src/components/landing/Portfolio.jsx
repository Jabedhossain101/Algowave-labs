'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Globe, Layout, Layers, Activity } from 'lucide-react';

const projects = [
  {
    title: 'Zaffran - Fine Dining',
    category: 'Full Stack (MERN)',
    description:
      'A mission-critical restaurant ecosystem with real-time inventory and automated POS logic.',
    icon: <Globe size={20} className="text-blue-400" />,
    tags: ['Next.js', 'Redux', 'AWS'],
    gradient: 'from-blue-600/30 via-blue-500/5 to-transparent',
    status: 'Operational',
  },
  {
    title: 'CareerOstad',
    category: 'EdTech Platform',
    description:
      'AI-powered career guidance portal transforming recruitment with intelligent skill-matching.',
    icon: <Layers size={20} className="text-cyan-400" />,
    tags: ['React', 'Node.js', 'MongoDB'],
    gradient: 'from-cyan-600/30 via-cyan-500/5 to-transparent',
    status: 'Live System',
  },
  {
    title: 'AlgoWave ERP',
    category: 'Enterprise Suite',
    description:
      'Advanced resource planning system designed for high-throughput business automation.',
    icon: <Layout size={20} className="text-indigo-400" />,
    tags: ['TypeScript', 'Express', 'Postgres'],
    gradient: 'from-indigo-600/30 via-indigo-500/5 to-transparent',
    status: 'Encrypted',
  },
];

const AdvancedPortfolio = () => {
  return (
    <section className="relative py-20 md:py-32 bg-[#030303] overflow-hidden border-y border-white/5">
      {/* --- BACKGROUND --- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Simplified Glow for Mobile */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[800px] h-[300px] md:h-[800px] bg-blue-600/[0.05] blur-[100px] md:blur-[160px] rounded-full opacity-60" />

        {/* Perspective Grid - Optimized Angle for Mobile */}
        <div
          className="absolute inset-0 opacity-[0.05] md:opacity-[0.08]"
          style={{
            backgroundImage: `linear-gradient(#3b82f6 1px, transparent 1px), linear-gradient(90deg, #3b82f6 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
            transform:
              'perspective(1200px) rotateX(35deg) translateY(-50px) scale(1.5)',
            willChange: 'transform',
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* --- HEADER --- */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 md:mb-24 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-blue-500/10 rounded-lg border border-blue-500/20">
                <Activity
                  size={14}
                  className="text-blue-500 md:animate-pulse"
                />
              </div>
              <span className="text-[9px] md:text-[10px] font-black tracking-[0.4em] md:tracking-[0.6em] uppercase text-blue-500/80">
                Project Repository v2.0
              </span>
            </div>

            <h2 className="text-4xl md:text-7xl font-black text-white tracking-tighter mb-6 leading-tight uppercase">
              Crafting <br />
              <span className="italic font-extralight text-slate-600">
                Digital
              </span>{' '}
              Legacies.
            </h2>
          </motion.div>

          <motion.button
            whileTap={{ scale: 0.95 }}
            className="group flex items-center gap-4 px-6 py-3 md:px-8 md:py-4 bg-white/[0.02] border border-white/10 rounded-full transition-all"
          >
            <span className="text-[9px] md:text-[10px] font-black tracking-widest text-white uppercase">
              Full Archive
            </span>
            <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-blue-600 flex items-center justify-center text-white md:group-hover:rotate-45 transition-transform">
              <ArrowUpRight size={14} />
            </div>
          </motion.button>
        </div>

        {/* --- PROJECTS GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-20px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              // Performance focus: whileHover desktop-er jonno
              whileHover={{ y: -5 }}
              className="group relative flex flex-col h-full bg-[#0A0A0A]/80 border border-white/10 rounded-[2rem] md:rounded-[2.5rem] p-5 transition-all duration-300 overflow-hidden"
              style={{ transform: 'translateZ(0)' }} // GPU acceleration
            >
              {/* Preview Slot */}
              <div className="relative aspect-[16/10] rounded-[1.5rem] md:rounded-[1.8rem] overflow-hidden bg-[#080808] mb-6 md:mb-8 border border-white/5">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.gradient} md:group-hover:scale-110 transition-transform duration-1000`}
                />

                {/* Status Badge */}
                <div className="absolute bottom-4 left-4 flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/10">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500 md:animate-pulse" />
                  <span className="text-[8px] font-bold tracking-widest uppercase text-white/90">
                    {project.status}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col flex-grow px-2">
                <div className="flex items-center gap-3 mb-3 md:mb-4">
                  <div className="text-slate-500 group-hover:text-blue-400 transition-colors">
                    {project.icon}
                  </div>
                  <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-slate-500">
                    {project.category}
                  </span>
                </div>

                <h3 className="text-xl md:text-2xl font-bold text-white mb-3 tracking-tight">
                  {project.title}
                </h3>

                <p className="text-slate-400 text-xs md:text-sm leading-relaxed mb-6 md:mb-8 flex-grow font-light">
                  {project.description}
                </p>

                {/* Tech Matrix Tags */}
                <div className="flex flex-wrap gap-2 pt-5 md:pt-6 border-t border-white/[0.05]">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 text-[7px] md:text-[8px] font-mono font-bold tracking-tighter rounded-full bg-white/[0.03] text-slate-500 border border-white/5 group-hover:text-blue-300 transition-all"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Glow - Only for Desktop */}
              <div className="absolute -bottom-10 -right-10 w-24 h-24 bg-blue-500/5 blur-[30px] rounded-full hidden md:block" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdvancedPortfolio;
