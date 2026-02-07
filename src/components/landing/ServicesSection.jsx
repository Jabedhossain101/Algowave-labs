'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  Code2,
  Server,
  LayoutTemplate,
  ArrowUpRight,
  Cpu,
  Zap,
  Database,
  Command,
  Activity,
  ShieldCheck,
} from 'lucide-react';

const services = [
  {
    title: 'Full-Stack Ecosystems',
    desc: 'Building mission-critical web applications with Next.js, prioritizing speed, SEO, and flawless user journeys.',
    icon: <Code2 className="text-blue-400" size={24} />,
    features: ['PWA Ready', 'Edge Computing', 'SEO Optimized'],
  },
  {
    title: 'Backend Engineering',
    desc: 'Robust, scalable server architectures and secure API ecosystems designed to handle high-traffic loads.',
    icon: <Server className="text-indigo-400" size={24} />,
    features: ['Microservices', 'PostgreSQL/NoSQL', 'Real-time Data'],
  },
  {
    title: 'UI/UX Architecture',
    desc: 'Data-driven design systems that bridge the gap between complex logic and human-centric interfaces.',
    icon: <LayoutTemplate className="text-cyan-400" size={24} />,
    features: ['Design Systems', 'Figma to Logic', 'User Research'],
  },
];

const StableServices = () => {
  return (
    <section className="relative py-32 bg-[#030303] overflow-hidden border-y border-white/5">
      {/* --- STATIC BACKGROUND: No Pulse --- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-600/[0.03] blur-[150px] rounded-full opacity-50" />
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: `linear-gradient(#3b82f6 1px, transparent 1px), linear-gradient(90deg, #3b82f6 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
            transform: 'perspective(1000px) rotateX(20deg) translateY(-100px)',
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* --- HEADER: Entrance Animation Only --- */}
        <div className="flex flex-col lg:flex-row justify-between items-end mb-24 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-blue-500/10 rounded-lg border border-blue-500/20">
                <Command size={14} className="text-blue-500" />
              </div>
              <span className="text-[10px] font-black tracking-[0.6em] uppercase text-blue-500/80">
                Core Capabilities v4.0
              </span>
            </div>

            <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-6 leading-none uppercase">
              Engineering <br />
              <span className="italic font-extralight text-slate-600">
                Intuitive
              </span>{' '}
              Logic.
            </h2>

            <p className="max-w-lg text-slate-500 text-lg font-light">
              We don't just build apps; we architect high-performance digital
              ecosystems that outperform industry standards.
            </p>
          </motion.div>
        </div>

        {/* --- SERVICES GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} // Ensures it stays stable after loading
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: 'easeOut',
              }}
              whileHover={{ y: -8, backgroundColor: 'rgba(255,255,255,0.03)' }}
              className="group relative flex flex-col h-full bg-white/[0.01] border border-white/5 rounded-[2.5rem] p-10 transition-all duration-300 overflow-hidden"
            >
              <div className="relative z-10 flex flex-col h-full">
                {/* Icon Unit */}
                <div className="flex justify-between items-start mb-12">
                  <div className="p-5 rounded-2xl bg-black border border-white/5 group-hover:border-blue-500/30 transition-all duration-500">
                    {service.icon}
                  </div>
                  <div className="w-10 h-10 rounded-full flex items-center justify-center border border-white/5 text-slate-700 group-hover:text-blue-400 group-hover:border-blue-500/30 transition-all duration-500 group-hover:rotate-45">
                    <ArrowUpRight size={20} />
                  </div>
                </div>

                <h3 className="text-3xl font-bold text-white mb-4 tracking-tight">
                  {service.title}
                </h3>
                <p className="text-slate-500 text-base leading-relaxed mb-10 flex-grow font-light">
                  {service.desc}
                </p>

                {/* Subtle Progress Waves: Slowed down for stability */}
                <div className="flex gap-1.5 mb-8 opacity-20 group-hover:opacity-60 transition-opacity">
                  {[...Array(6)].map((_, i) => (
                    <motion.div
                      key={i}
                      animate={{ height: [4, 12, 4] }}
                      transition={{
                        repeat: Infinity,
                        duration: 2.5, // Slower duration
                        delay: i * 0.3,
                      }}
                      className="w-1.5 bg-blue-500 rounded-full"
                    />
                  ))}
                </div>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {service.features.map((feature, idx) => (
                    <span
                      key={idx}
                      className="text-[9px] font-mono font-bold uppercase px-3 py-1.5 rounded-md bg-white/[0.03] text-slate-500 border border-white/5 group-hover:text-blue-300 transition-colors"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* --- BOTTOM SYSTEM STATS: Static & Professional --- */}
        <div className="mt-24 pt-12 border-t border-white/5 grid grid-cols-2 lg:grid-cols-4 gap-12">
          {[
            {
              label: 'Latency',
              val: '< 20ms',
              icon: <Zap size={14} className="text-blue-500" />,
            },
            {
              label: 'Encryption',
              val: 'AES-256',
              icon: <ShieldCheck size={14} className="text-blue-500" />,
            },
            {
              label: 'Uptime',
              val: '99.99%',
              icon: <Activity size={14} className="text-blue-500" />,
            },
            {
              label: 'Dev Cycle',
              val: 'Agile/v4',
              icon: <Cpu size={14} className="text-blue-500" />,
            },
          ].map((stat, i) => (
            <div key={i} className="flex flex-col gap-1">
              <div className="flex items-center gap-2 text-slate-600">
                {stat.icon}
                <span className="text-[9px] font-black tracking-widest uppercase">
                  {stat.label}
                </span>
              </div>
              <span className="text-lg font-mono text-white/80">
                {stat.val}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StableServices;
