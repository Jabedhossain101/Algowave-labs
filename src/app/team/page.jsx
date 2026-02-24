'use client';
import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import {
  Github,
  Linkedin,
  Cpu,
  ShieldAlert,
  Database,
  ExternalLink,
  Terminal,
  Layers,
  Container,
  Zap,
} from 'lucide-react';

const team = [
  {
    name: 'MD. Jabed Hossain',
    role: 'Full Stack Engineer',
    focus: 'SaaS Architecture',
    status: 'LEAD_SYS_ADMIN',
    skills: ['Next.js', 'TypeScript', 'Prisma'],
    latency: '2ms',
    avatar:
      'https://i.ibb.co.com/twT6FyMG/Screenshot-2025-08-08-012445-removebg-preview-1.png',
    github: 'https://github.com/Jabedhossain101',
    linkedin: 'https://www.linkedin.com/in/mdjabedhossain12',
    accent: 'from-blue-600/30',
    glow: 'shadow-blue-500/20',
  },
  {
    name: 'Tazminur Rahman Tanim',
    role: 'Full Stack Engineer',
    focus: 'Backend Systems',
    status: 'CORE_ENGINEER',
    skills: ['SQL', 'Postgres', 'Docker'],
    latency: '4ms',
    avatar: 'https://i.ibb.co.com/qYQVSpKb/image.png',
    github: 'https://github.com/tazminur12',
    linkedin: 'https://www.linkedin.com/in/tazminur-rahman-tanim-305315336/',
    accent: 'from-indigo-600/30',
    glow: 'shadow-indigo-500/20',
  },
  {
    name: 'Md. Adnan Wasti',
    role: 'Full Stack Engineer',
    focus: 'API Logic',
    status: 'NODE_CONTROLLER',
    skills: ['TypeScript', 'Prisma', 'Next.js'],
    latency: '3ms',
    avatar: 'https://i.ibb.co.com/xKZ1Sv6y/image.png',
    github: 'https://github.com/MuhammadAdnanWasti',
    linkedin: 'https://www.linkedin.com/in/md-adnan-wasti/',
    accent: 'from-cyan-600/30',
    glow: 'shadow-cyan-500/20',
  },
  {
    name: 'Naeem Haider',
    role: 'Full Stack Engineer',
    focus: 'DevOps & Scaling',
    status: 'CLOUD_ARCHITECT',
    skills: ['Docker', 'Postgres', 'SQL'],
    latency: '5ms',
    avatar: 'https://i.ibb.co.com/G4Nds0qf/image.png',
    github: 'https://github.com/Naeem240',
    linkedin: 'https://www.linkedin.com/in/md-naeem-haider/',
    accent: 'from-blue-400/30',
    glow: 'shadow-blue-400/20',
  },
];

export default function AdvancedTeam() {
  const containerRef = useRef(null);

  return (
    <section
      ref={containerRef}
      id="team"
      className="relative py-32 bg-[#030303] overflow-hidden"
    >
      {/* Background Grid */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="h-[1px] w-8 bg-blue-600"></span>
              <p className="text-[10px] font-black uppercase tracking-[0.5em] text-blue-500">
                Personnel_Inventory
              </p>
            </div>
            <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tighter leading-none uppercase">
              The{' '}
              <span className="text-white/20 italic font-light">Engineers</span>
            </h2>
          </div>
          <p className="text-slate-500 text-xs md:text-sm max-w-sm font-light leading-relaxed border-l border-white/10 pl-6">
            A specialized collective of full-stack architects engineering the
            next generation of AlgoWave infrastructures.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {team.map((member, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`group relative bg-[#080808] border border-white/[0.05] rounded-[2rem] p-6 h-[550px] flex flex-col justify-between transition-all duration-500 hover:border-blue-500/30 hover:${member.glow}`}
            >
              {/* Top Meta Bar */}
              <div className="flex justify-between items-center relative z-10">
                <div className="px-2 py-0.5 rounded-md bg-blue-500/5 border border-blue-500/20 text-[8px] font-mono text-blue-400">
                  {member.status}
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-1 h-1 rounded-full bg-green-500 animate-pulse"></div>
                  <span className="text-[8px] font-mono text-slate-500 tracking-tighter">
                    LATENCY: {member.latency}
                  </span>
                </div>
              </div>

              {/* Central Profile Area */}
              <div className="relative flex flex-col items-center mt-6">
                <div className="relative w-32 h-32 mb-6 group-hover:scale-105 transition-transform duration-500">
                  {/* Decorative Frame */}
                  <div className="absolute inset-0 border border-dashed border-white/10 rounded-full animate-[spin_20s_linear_infinite]"></div>
                  <div className="absolute inset-1 border border-blue-500/20 rounded-full"></div>

                  <div className="absolute inset-2 overflow-hidden rounded-full bg-[#0a0a0a] border border-white/10">
                    <img
                      src={member.avatar}
                      alt={member.name}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 object-top"
                    />
                  </div>
                </div>

                <div className="text-center space-y-1">
                  <h3 className="text-lg font-bold text-white tracking-tight">
                    {member.name}
                  </h3>
                  <p className="text-[10px] font-mono text-blue-500 uppercase tracking-widest">
                    {member.focus}
                  </p>
                  <p className="text-[9px] text-slate-600 font-medium tracking-tight uppercase">
                    {member.role}
                  </p>
                </div>
              </div>

              {/* Technical Stack Section */}
              <div className="space-y-4 mt-4 bg-white/[0.02] p-4 rounded-2xl border border-white/[0.03]">
                <p className="text-[8px] font-black text-slate-500 uppercase tracking-widest text-center">
                  Stack_Verification
                </p>
                <div className="flex flex-wrap justify-center gap-1.5">
                  {member.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2 py-1 rounded bg-black border border-white/5 text-[8px] font-mono text-white/60 group-hover:text-blue-400 group-hover:border-blue-500/20 transition-all"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Link Nodes */}
              <div className="grid grid-cols-2 gap-2 mt-auto pt-6 border-t border-white/5 relative z-10">
                <a
                  href={member.github}
                  target="_blank"
                  className="flex items-center justify-center gap-2 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-slate-400 hover:text-white hover:bg-blue-600 transition-all text-[9px] font-bold tracking-widest uppercase"
                >
                  <Github size={12} /> Github
                </a>
                <a
                  href={member.linkedin}
                  target="_blank"
                  className="flex items-center justify-center gap-2 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-slate-400 hover:text-white hover:bg-blue-600 transition-all text-[9px] font-bold tracking-widest uppercase"
                >
                  <Linkedin size={12} /> Linkedin
                </a>
              </div>

              {/* Subtle Gradient Glow */}
              <div
                className={`absolute inset-0 bg-gradient-to-b ${member.accent} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none rounded-[2rem]`}
              ></div>
            </motion.div>
          ))}
        </div>

        {/* Footer Section Info */}
        <div className="mt-20 flex flex-wrap justify-center gap-12 opacity-20">
          <div className="flex items-center gap-3">
            <Cpu size={14} className="text-blue-500" />
            <span className="text-[8px] font-mono tracking-[0.4em] text-white">
              SYSTEM_COMPLIANCE: 100%
            </span>
          </div>
          <div className="flex items-center gap-3">
            <ShieldAlert size={14} className="text-blue-500" />
            <span className="text-[8px] font-mono tracking-[0.4em] text-white">
              HANDSHAKE_ENCRYPTED
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
