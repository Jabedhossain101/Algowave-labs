'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import {
  ArrowLeft,
  ExternalLink,
  ShieldCheck,
  CheckCircle2,
  Server,
  Cpu,
  Activity,
  Zap,
  Globe,
  Lock,
  Workflow,
} from 'lucide-react';
import { allProjects } from '../page';

export default function ProjectDetails() {
  const { id } = useParams();
  const project = allProjects?.find(p => p.id === id);

  if (!project)
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center font-mono tracking-widest uppercase">
        Node_Not_Found: 404
      </div>
    );

  return (
    <main className="min-h-screen bg-[#020202] text-white py-24 md:py-40 px-6 relative overflow-hidden">
      {/* --- BACKGROUND DECOR & IMAGE OVERLAY --- */}
      <div className="absolute top-0 left-0 w-full h-[50vh] opacity-20 pointer-events-none">
        <img
          src={project.imageUrl}
          alt=""
          className="w-full h-full object-cover mask-image-b"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#020202]/80 to-[#020202]" />
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <Link
          href="/portfolio"
          className="inline-flex items-center gap-3 text-slate-500 hover:text-blue-400 transition-all mb-16 group text-[10px] font-black tracking-[0.4em] uppercase"
        >
          <ArrowLeft
            size={16}
            className="group-hover:-translate-x-2 transition-transform"
          />
          Back to Core Registry
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-32">
          {/* --- LEFT: DEEP DOCUMENTATION --- */}
          <div className="lg:col-span-8 space-y-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              {/* Feature Image Card for Details Page */}
              <div className="relative w-full aspect-video rounded-[3rem] overflow-hidden mb-12 border border-white/10 shadow-2xl">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-[2s] hover:scale-105"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent`}
                />
                <div className="absolute bottom-8 left-8">
                  <div className="flex items-center gap-3 px-4 py-2 bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl">
                    <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                    <span className="text-[10px] font-mono font-bold tracking-widest uppercase text-white/80">
                      {project.status} // Live_Data
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4 mb-10">
                <div className="p-4 bg-blue-500/10 rounded-3xl border border-blue-500/20 text-blue-400">
                  {project.icon}
                </div>
                <span className="text-[11px] font-bold text-blue-500 tracking-[0.5em] uppercase">
                  {project.category}
                </span>
              </div>

              <h1 className="text-5xl md:text-8xl font-black tracking-tighter mb-12 leading-[0.9] uppercase italic selection:bg-blue-500">
                {project.title.split('-')[0]} <br />
                <span className="text-slate-800 font-extralight not-italic">
                  {project.title.split('-')[1] || 'Project'}
                </span>
              </h1>

              <p className="text-slate-400 text-xl md:text-2xl leading-relaxed font-light">
                {project.fullDescription}
              </p>
            </motion.div>

            {/* Architecture Section */}
            <section className="pt-12 border-t border-white/5 space-y-8">
              <h3 className="flex items-center gap-3 text-[10px] font-black tracking-[0.4em] uppercase text-blue-500">
                <Server size={14} /> System_Architecture
              </h3>
              <div className="p-10 rounded-[3rem] bg-white/[0.01] border border-white/5 shadow-inner">
                <p className="text-slate-400 leading-relaxed font-light italic">
                  "{project.architecture}"
                </p>
              </div>
            </section>

            {/* Feature Matrix */}
            <section className="space-y-12">
              <h3 className="flex items-center gap-3 text-[10px] font-black tracking-[0.4em] uppercase text-blue-500">
                <Zap size={14} /> Feature_Matrix
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {project.features.map((feat, idx) => (
                  <div
                    key={idx}
                    className="p-8 rounded-[2.5rem] bg-gradient-to-br from-white/[0.03] to-transparent border border-white/5 group hover:border-blue-500/30 transition-all"
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <CheckCircle2 size={20} className="text-blue-600" />
                      <h4 className="text-sm font-bold text-white uppercase tracking-tighter">
                        {feat}
                      </h4>
                    </div>
                    <p className="text-xs text-slate-500 leading-relaxed font-light">
                      Implemented with a focus on high-performance scaling and
                      mission-critical reliability for the {project.category}{' '}
                      layer.
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Technical Logic */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-12 border-t border-white/5">
              <div className="space-y-4 p-8 rounded-[2rem] bg-blue-500/[0.02] border border-blue-500/5">
                <h4 className="flex items-center gap-3 text-[10px] font-black tracking-[0.4em] uppercase text-slate-400">
                  <Workflow size={14} /> Workflow_Integration
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed font-mono">
                  [LOG]: Automated CI/CD pipeline integrated. <br />
                  [LOG]: Environment optimized for Node_v20.x <br />
                  [LOG]: Data sharding enabled for global consistency.
                </p>
              </div>
              <div className="space-y-4 p-8 rounded-[2rem] bg-blue-500/[0.02] border border-blue-500/5">
                <h4 className="flex items-center gap-3 text-[10px] font-black tracking-[0.4em] uppercase text-slate-400">
                  <Lock size={14} /> Security_Vault
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed font-mono">
                  [SEC]: End-to-end encryption active. <br />
                  [SEC]: RBAC permission matrix enforced. <br />
                  [SEC]: Multi-factor node validation ready.
                </p>
              </div>
            </section>
          </div>

          {/* --- RIGHT: OPERATIONS HUB --- */}
          <aside className="lg:col-span-4">
            <div className="sticky top-32 space-y-8">
              <div className="p-10 rounded-[3rem] bg-[#0A0A0A] border border-white/10 backdrop-blur-3xl relative overflow-hidden group shadow-2xl">
                <div className="absolute top-[-20%] right-[-20%] w-64 h-64 bg-blue-600/10 blur-3xl rounded-full" />

                <h3 className="text-[10px] font-black tracking-[0.5em] uppercase text-slate-600 mb-10 flex items-center gap-3">
                  <Activity size={14} className="text-blue-500" />{' '}
                  Operational_Hub
                </h3>

                <div className="space-y-6 mb-12">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3 w-full py-6 bg-blue-600 text-white rounded-2xl font-black text-[11px] tracking-[0.2em] uppercase hover:bg-blue-700 transition-all shadow-[0_10px_40px_rgba(37,99,235,0.25)] active:scale-[0.98]"
                  >
                    <ExternalLink size={18} /> Initialize Live System
                  </a>
                </div>

                <div className="pt-10 border-t border-white/5">
                  <h3 className="text-[10px] font-black tracking-[0.5em] uppercase text-slate-600 mb-8">
                    Technical Stack
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <span
                        key={tag}
                        className="px-4 py-2 rounded-xl bg-white/5 border border-white/5 text-[9px] font-mono font-bold text-slate-500 hover:text-blue-400 hover:border-blue-500/30 transition-colors uppercase"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Status Indicator */}
              <div className="p-8 rounded-[2.5rem] bg-gradient-to-r from-blue-900/10 to-transparent border border-blue-500/10 flex items-center gap-6 opacity-60">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_10px_#22c55e]" />
                <span className="text-[9px] font-mono text-blue-400 uppercase tracking-widest">
                  Protocol: Stable_Build_V4
                </span>
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* Visual Grain Overlay */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
    </main>
  );
}
