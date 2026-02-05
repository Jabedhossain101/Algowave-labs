'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Code2, Globe, Layout, Layers } from 'lucide-react';

const projects = [
  {
    title: 'Zaffran - Fine Dining',
    category: 'Full Stack (MERN)',
    description:
      'A mission-critical restaurant ecosystem with real-time inventory and automated POS logic.',
    icon: <Globe size={20} className="text-blue-400" />,
    tags: ['Next.js', 'Redux', 'AWS'],
    imageColor: 'from-blue-600/20 to-indigo-900/20',
  },
  {
    title: 'CareerOstad',
    category: 'EdTech Platform',
    description:
      'AI-powered career guidance portal transforming recruitment with intelligent skill-matching.',
    icon: <Layers size={20} className="text-cyan-400" />,
    tags: ['React', 'Node.js', 'MongoDB'],
    imageColor: 'from-cyan-600/20 to-teal-900/20',
  },
  {
    title: 'AlgoWave ERP',
    category: 'Software Architecture',
    description:
      'Enterprise resource planning system designed for high-throughput business automation.',
    icon: <Layout size={20} className="text-purple-400" />,
    tags: ['TypeScript', 'Express', 'PostgreSQL'],
    imageColor: 'from-purple-600/20 to-blue-900/20',
  },
];

export default function Portfolio() {
  return (
    <section className="relative py-32 bg-[#050505] overflow-hidden border-y border-white/5">
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="flex items-center gap-2 mb-4"
            >
              <Code2 size={16} className="text-blue-500" />
              <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-blue-500">
                Selected Works
              </span>
            </motion.div>
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-4 leading-none">
              CRAFTING <span className="text-slate-500 italic">DIGITAL</span>{' '}
              LEGACIES
            </h2>
            <p className="text-slate-400 text-lg font-light leading-relaxed">
              We transform complex problems into high-performance software
              solutions.
            </p>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group flex items-center gap-3 px-6 py-3 border border-white/10 rounded-full hover:bg-white/5 transition-all"
          >
            <span className="text-sm font-bold tracking-widest text-white/80 group-hover:text-white uppercase">
              Exploration
            </span>
            <ArrowUpRight
              size={18}
              className="text-blue-500 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
            />
          </motion.button>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group flex flex-col h-full"
            >
              {/* Image / Visual Container */}
              <div className="relative aspect-[4/3] rounded-[40px] overflow-hidden bg-[#0a0a0a] border border-white/5 mb-8 group-hover:border-blue-500/30 transition-all duration-500 shadow-2xl">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.imageColor} group-hover:scale-110 transition-transform duration-700`}
                />

                {/* Overlay Icon */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 backdrop-blur-sm bg-black/40">
                  <div className="p-5 bg-white/10 border border-white/20 rounded-full text-white">
                    <ArrowUpRight size={32} />
                  </div>
                </div>

                {/* Status Badge */}
                <div className="absolute top-6 left-6 px-4 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-[10px] font-bold tracking-widest uppercase text-blue-400">
                  Live System
                </div>
              </div>

              {/* Text Content */}
              <div className="flex flex-col flex-grow px-2">
                <div className="flex items-center gap-2 mb-4 text-slate-500">
                  {project.icon}
                  <span className="text-[10px] font-mono font-bold uppercase tracking-[0.2em]">
                    {project.category}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors tracking-tight">
                  {project.title}
                </h3>

                <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow">
                  {project.description}
                </p>

                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-2 pt-6 border-t border-white/5">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 text-[9px] font-bold tracking-widest uppercase rounded-lg bg-blue-500/5 text-blue-400/70 border border-blue-500/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
