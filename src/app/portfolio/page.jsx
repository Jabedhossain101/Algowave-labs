'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowUpRight,
  Code2,
  Globe,
  Layout,
  Layers,
  Search,
  Filter,
  Terminal,
} from 'lucide-react';

const categories = ['All Systems', 'ERP', 'SaaS', 'Web Engine', 'E-commerce'];

const projects = [
  {
    title: 'Zaffran - Fine Dining',
    category: 'E-commerce',
    description:
      'A mission-critical restaurant ecosystem with real-time inventory and automated POS logic.',
    icon: <Globe size={20} className="text-blue-400" />,
    tags: ['Next.js', 'Redux', 'AWS'],
    imageColor: 'from-blue-600/20 to-indigo-900/20',
    status: 'Operational',
  },
  {
    title: 'CareerOstad',
    category: 'SaaS',
    description:
      'AI-powered career guidance portal transforming recruitment with intelligent skill-matching.',
    icon: <Layers size={20} className="text-cyan-400" />,
    tags: ['React', 'Node.js', 'MongoDB'],
    imageColor: 'from-cyan-600/20 to-teal-900/20',
    status: 'Live',
  },
  {
    title: 'AlgoWave ERP',
    category: 'ERP',
    description:
      'Enterprise resource planning system designed for high-throughput business automation.',
    icon: <Layout size={20} className="text-purple-400" />,
    tags: ['TypeScript', 'Express', 'PostgreSQL'],
    imageColor: 'from-purple-600/20 to-blue-900/20',
    status: 'Deployed',
  },
  {
    title: 'TechFlow SaaS',
    category: 'SaaS',
    description:
      'Cloud-native project management tool with zero-latency collaborative features.',
    icon: <Terminal size={20} className="text-indigo-400" />,
    tags: ['Next.js', 'Socket.io', 'Redis'],
    imageColor: 'from-indigo-600/20 to-blue-900/20',
    status: 'Active',
  },
];

export default function PortfolioPage() {
  const [activeTab, setActiveTab] = useState('All Systems');

  const filteredProjects =
    activeTab === 'All Systems'
      ? projects
      : projects.filter(p => p.category === activeTab);

  return (
    <main className="min-h-screen bg-[#050505] text-white selection:bg-blue-500/30">
      {/* --- HERO SECTION: PORTFOLIO ARCHITECTURE --- */}
      <section className="relative pt-40 pb-20 px-6 border-b border-white/5 overflow-hidden">
        {/* Advanced Background Glows */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-[-10%] left-[-10%] w-[45%] h-[45%] bg-blue-600/10 blur-[130px] rounded-full" />
          <div className="absolute bottom-[10%] right-[-5%] w-[35%] h-[35%] bg-indigo-600/10 blur-[110px] rounded-full" />
        </div>

        <div className="container mx-auto relative z-10 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/20 bg-blue-500/5 mb-8"
          >
            <Code2 size={14} className="text-blue-400" />
            <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-blue-400">
              Project Archive v2.0
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-8xl font-black tracking-tighter leading-none mb-8"
          >
            ENGINEERING <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-500">
              EXCELLENCE
            </span>
          </motion.h1>

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mt-12">
            <p className="max-w-xl text-slate-400 text-lg md:text-xl font-light leading-relaxed">
              Explore our curated selection of{' '}
              <span className="text-white">high-performance systems</span> built
              for global scalability and mission-critical reliability.
            </p>

            {/* Search Placeholder */}
            <div className="relative group w-full md:w-80">
              <Search
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-blue-400 transition-colors"
                size={18}
              />
              <input
                type="text"
                placeholder="Search projects..."
                className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-sm focus:outline-none focus:border-blue-500/50 transition-all backdrop-blur-md"
              />
            </div>
          </div>
        </div>
      </section>

      {/* --- FILTER & GALLERY SECTION --- */}
      <section className="py-20 px-6 relative">
        <div className="container mx-auto">
          {/* Tabs Filter */}
          <div className="flex flex-wrap items-center gap-3 mb-16">
            <div className="p-3 bg-blue-600/10 rounded-xl text-blue-400 border border-blue-500/20 mr-2">
              <Filter size={18} />
            </div>
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`px-6 py-2.5 rounded-full border text-[10px] font-bold tracking-[0.2em] uppercase transition-all duration-300 ${
                  activeTab === cat
                    ? 'bg-blue-600 border-blue-500 text-white shadow-lg shadow-blue-600/20'
                    : 'bg-white/5 border-white/5 text-slate-500 hover:text-white hover:border-white/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Project Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            <AnimatePresence mode="wait">
              {filteredProjects.map((project, idx) => (
                <motion.article
                  key={project.title}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="group flex flex-col"
                >
                  {/* Project Visual */}
                  <div className="relative aspect-[16/10] rounded-[48px] overflow-hidden bg-[#0a0a0a] border border-white/5 mb-8 group-hover:border-blue-500/30 transition-all duration-500">
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${project.imageColor} group-hover:scale-110 transition-transform duration-700 opacity-60`}
                    />

                    {/* Status Badge */}
                    <div className="absolute top-8 left-8 flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-[9px] font-black tracking-[0.2em] uppercase text-blue-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
                      {project.status}
                    </div>

                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 backdrop-blur-sm bg-black/40">
                      <div className="p-6 bg-white/10 border border-white/20 rounded-full text-white">
                        <ArrowUpRight size={32} />
                      </div>
                    </div>
                  </div>

                  {/* Project Meta */}
                  <div className="px-4">
                    <div className="flex items-center gap-3 mb-4 text-slate-500">
                      <div className="p-2 bg-white/5 rounded-lg border border-white/10">
                        {project.icon}
                      </div>
                      <span className="text-[10px] font-mono font-black uppercase tracking-[0.3em]">
                        {project.category}
                      </span>
                    </div>

                    <h3 className="text-3xl font-bold text-white mb-4 tracking-tighter group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-slate-400 text-sm leading-relaxed mb-8 max-w-lg">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 pt-6 border-t border-white/5">
                      {project.tags.map(tag => (
                        <span
                          key={tag}
                          className="px-3 py-1 text-[9px] font-bold tracking-widest uppercase rounded-lg bg-white/5 text-slate-500 border border-white/5 group-hover:text-blue-400 transition-colors"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Decorative Sidebar */}
      <div className="absolute right-10 top-1/2 -translate-y-1/2 hidden 2xl:flex flex-col items-center gap-8 opacity-20">
        <span className="[writing-mode:vertical-lr] text-[8px] tracking-[1.5em] text-slate-500 uppercase font-black">
          AlgoWave Project Registry // 2026
        </span>
        <div className="w-[1px] h-32 bg-gradient-to-b from-blue-500 to-transparent" />
      </div>
    </main>
  );
}
