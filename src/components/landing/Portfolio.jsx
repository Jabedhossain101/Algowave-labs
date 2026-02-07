'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  ArrowUpRight,
  Globe,
  Layout,
  Layers,
  Box,
  Activity,
  Code,
} from 'lucide-react';

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
    <section className="relative py-32 bg-[#030303] overflow-hidden border-y border-white/5">
      {/* --- LAYER 1: DYNAMIC BACKGROUND (আপনার UI সেন্স অনুযায়ী) --- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Central Core Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/[0.05] blur-[160px] rounded-full opacity-60" />

        {/* Perspective Grid Sync */}
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage: `linear-gradient(#3b82f6 1px, transparent 1px), linear-gradient(90deg, #3b82f6 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
            transform:
              'perspective(1200px) rotateX(60deg) translateY(-100px) scale(2.5)',
          }}
        />

        {/* Grainy Noise Overlay */}
        <div className="absolute inset-0 opacity-[0.02] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* --- HEADER --- */}
        <div className="flex flex-col lg:flex-row justify-between items-end mb-24 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-blue-500/10 rounded-lg border border-blue-500/20 backdrop-blur-md">
                <Activity size={14} className="text-blue-500 animate-pulse" />
              </div>
              <span className="text-[10px] font-black tracking-[0.6em] uppercase text-blue-500/80">
                Project Repository v2.0
              </span>
            </div>

            <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-6 leading-none uppercase">
              Crafting <br />
              <span className="italic font-extralight text-slate-600">
                Digital
              </span>{' '}
              Legacies.
            </h2>
          </motion.div>

          <motion.button
            whileHover={{
              scale: 1.05,
              backgroundColor: 'rgba(255,255,255,0.05)',
            }}
            whileTap={{ scale: 0.95 }}
            className="group flex items-center gap-4 px-8 py-4 bg-white/[0.02] border border-white/10 rounded-full backdrop-blur-xl transition-all mb-4"
          >
            <span className="text-[10px] font-black tracking-widest text-white uppercase">
              Full Archive
            </span>
            <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white group-hover:rotate-45 transition-transform">
              <ArrowUpRight size={16} />
            </div>
          </motion.button>
        </div>

        {/* --- PROJECTS GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative flex flex-col h-full bg-[#0A0A0A]/50 border border-white/10 rounded-[2.5rem] p-5 hover:border-blue-500/30 transition-all duration-500 backdrop-blur-xl overflow-hidden"
            >
              {/* Preview Slot */}
              <div className="relative aspect-[16/10] rounded-[1.8rem] overflow-hidden bg-[#080808] mb-8 border border-white/5">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.gradient} group-hover:scale-110 transition-transform duration-1000`}
                />

                {/* Status Badge */}
                <div className="absolute bottom-4 left-4 flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/10">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
                  <span className="text-[8px] font-bold tracking-widest uppercase text-white/90">
                    {project.status}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col flex-grow px-2">
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-slate-500 group-hover:text-blue-400 transition-colors">
                    {project.icon}
                  </div>
                  <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-slate-500">
                    {project.category}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white mb-3 tracking-tight group-hover:text-white transition-colors">
                  {project.title}
                </h3>

                <p className="text-slate-400 text-sm leading-relaxed mb-8 flex-grow font-light">
                  {project.description}
                </p>

                {/* Tech Matrix Tags */}
                <div className="flex flex-wrap gap-2 pt-6 border-t border-white/[0.05]">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 text-[8px] font-mono font-bold tracking-tighter rounded-full bg-white/[0.03] text-slate-500 border border-white/5 group-hover:text-blue-300 transition-all"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Glow */}
              <div className="absolute -bottom-10 -right-10 w-24 h-24 bg-blue-500/5 blur-[40px] rounded-full group-hover:bg-blue-500/10 transition-all" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdvancedPortfolio;
