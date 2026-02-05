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
} from 'lucide-react';

const techStack = [
  { name: 'MongoDB', icon: <Database size={20} />, color: 'text-green-500' },
  { name: 'Express.js', icon: <Workflow size={20} />, color: 'text-gray-400' },
  { name: 'React', icon: <Zap size={20} />, color: 'text-blue-400' },
  { name: 'Node.js', icon: <Cpu size={20} />, color: 'text-green-400' },
  { name: 'Next.js', icon: <Globe size={20} />, color: 'text-white' },
  { name: 'Tailwind CSS', icon: <Layers size={20} />, color: 'text-cyan-400' },
  { name: 'Prisma', icon: <ShieldCheck size={20} />, color: 'text-indigo-400' },
  { name: 'AWS', icon: <Infinity size={20} />, color: 'text-orange-400' },
];

export default function TechStack() {
  return (
    <section className="relative py-24 bg-[#050505] overflow-hidden border-y border-white/5">
      {/* Background Glow Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[300px] bg-blue-600/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header Section */}
        <div className="flex flex-col items-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/20 bg-blue-500/5 mb-4"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-blue-400/80">
              Enterprise Grade Stack
            </span>
          </motion.div>

          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight text-center">
            POWERING NEXT-GEN <br />
            <span className="text-slate-500 italic">
              DIGITAL INFRASTRUCTURE
            </span>
          </h2>
        </div>

        {/* Tech Grid - Interactive Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {techStack.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5, backgroundColor: 'rgba(255,255,255,0.03)' }}
              className="group relative p-6 rounded-2xl border border-white/5 bg-white/[0.01] backdrop-blur-sm transition-all"
            >
              <div
                className={`mb-4 ${tech.color} opacity-60 group-hover:opacity-100 transition-opacity`}
              >
                {tech.icon}
              </div>
              <h3 className="text-sm font-mono tracking-wider text-slate-400 group-hover:text-white transition-colors">
                {tech.name}
              </h3>

              {/* Subtle Decorative Corner */}
              <div className="absolute top-0 right-0 p-1 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-2 h-2 border-t border-r border-blue-500/50" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Infinite Scroller for "Partners/Trust" feel */}
        <div className="mt-20 flex flex-col items-center">
          <p className="text-[10px] font-bold tracking-[.5em] text-slate-600 uppercase mb-8">
            Optimized for Performance
          </p>

          <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
            <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll py-4">
              {/* Duplicate the array to create seamless loop if needed, or just use the names */}
              {[...techStack, ...techStack].map((tech, idx) => (
                <li
                  key={idx}
                  className="flex items-center gap-2 grayscale opacity-30 hover:grayscale-0 hover:opacity-100 transition-all cursor-default"
                >
                  <span className="text-sm font-bold text-slate-300 whitespace-nowrap tracking-tighter uppercase italic">
                    {tech.name}
                  </span>
                  <div className="w-1 h-1 rounded-full bg-blue-500/50" />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Side Decorative Element */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 hidden xl:block opacity-20 rotate-180">
        <p className="[writing-mode:vertical-lr] text-[8px] tracking-[1em] text-slate-500 uppercase">
          Technical Excellence & Reliability
        </p>
      </div>
    </section>
  );
}
