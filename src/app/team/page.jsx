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
} from 'lucide-react';

const team = [
  {
    name: 'MD. Jabed Hossain',
    role: 'Lead Full Stack Developer',
    status: 'SYSTEM_ADMIN',
    skills: ['Next.js', 'MERN Stack', 'AWS'],
    latency: '2ms',
    avatar:
      'https://i.ibb.co.com/twT6FyMG/Screenshot-2025-08-08-012445-removebg-preview-1.png',
    bio: 'Specializing in high-performance SaaS architecture and neural-driven UX.',
    accent: 'from-blue-600/20',
  },
  {
    name: 'Tazminur Rahman Tanim',
    role: 'Senior Software Engineer',
    status: 'CORE_ARCHITECT',
    skills: ['Python', 'Docker', 'Go'],
    latency: '4ms',
    avatar: 'https://i.ibb.co.com/qYQVSpKb/image.png',
    bio: 'Focusing on enterprise-grade ERP systems and autonomous backend logic.',
    accent: 'from-indigo-600/20',
  },
  {
    name: 'Md. Adnan Wasti',
    role: 'Full Stack Engineer',
    status: 'NODE_STATIONED',
    skills: ['React Native', 'PostgreSQL', 'Next.js'],
    latency: '5ms',
    avatar: 'https://i.ibb.co.com/xKZ1Sv6y/image.png',
    bio: 'Building zero-latency mobile ecosystems and real-time database sync.',
    accent: 'from-cyan-600/20',
  },
  {
    name: 'Naeem Haidar',
    role: 'Software Engineer',
    status: 'CLOUD_OPS',
    skills: ['C#', '.NET', 'Azure'],
    latency: '3ms',
    avatar: 'https://i.ibb.co.com/G4Nds0qf/image.png',
    bio: 'DevOps expert ensuring global deployment scalability and data security.',
    accent: 'from-blue-400/20',
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
      {/* Background Parallax Decor */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-600/10 blur-[150px] rounded-full" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-indigo-600/10 blur-[150px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="grid lg:grid-cols-2 gap-12 mb-24 items-end">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-[1px] bg-blue-600" />
              <span className="text-blue-500 text-[10px] font-black uppercase tracking-[0.4em]">
                Human_Assets // v4.0
              </span>
            </div>
            <h2 className="text-6xl md:text-8xl font-black text-white leading-[0.8] tracking-tighter uppercase">
              MEET THE <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-slate-600 italic font-light">
                Architects
              </span>
            </h2>
          </div>
          <p className="text-slate-500 text-sm md:text-base max-w-md font-light leading-relaxed border-l border-white/10 pl-8">
            The core intelligence driving AlgoWave Labs. Expert engineers
            transforming complex requirements into autonomous digital
            infrastructure.
          </p>
        </div>

        {/* Team Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {team.map((member, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.8 }}
              className="relative col-span-1 md:col-span-6 lg:col-span-3 group h-[520px] bg-white/[0.02] border border-white/10 rounded-[2.5rem] p-8 flex flex-col justify-between overflow-hidden hover:border-blue-500/50 transition-all duration-500"
            >
              {/* Card Ambient Glow */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${member.accent} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />

              {/* Header Info */}
              <div className="relative z-10 flex justify-between items-start">
                <div className="flex flex-col gap-1">
                  <span className="text-[8px] font-mono text-blue-400 uppercase tracking-widest bg-blue-500/10 px-2 py-0.5 rounded-full border border-blue-500/20">
                    {member.status}
                  </span>
                  <div className="flex items-center gap-2 mt-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-[9px] font-mono text-slate-500 uppercase tracking-tighter">
                      Latency: {member.latency}
                    </span>
                  </div>
                </div>
                <ExternalLink
                  size={14}
                  className="text-white/20 group-hover:text-white transition-colors"
                />
              </div>

              {/* Profile Image & Name */}
              <div className="relative z-10 flex flex-col items-center">
                <div className="relative mb-6">
                  {/* Outer Orbit Effect */}
                  <div className="absolute -inset-4 border border-blue-500/10 rounded-full animate-[spin_10s_linear_infinite] group-hover:border-blue-500/30 transition-colors" />
                  <div className="absolute inset-0 bg-blue-500/20 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />

                  <div className="w-28 h-28 rounded-full relative z-10 border border-white/10 p-1 bg-[#050505] overflow-hidden">
                    <img
                      src={member.avatar}
                      alt={member.name}
                      className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                    />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white tracking-tight text-center">
                  {member.name}
                </h3>
                <p className="text-[10px] font-mono text-blue-500 uppercase tracking-widest mt-1">
                  {member.role}
                </p>
              </div>

              {/* Bio & Skills */}
              <div className="relative z-10">
                <p className="text-[11px] text-slate-400 font-light mb-6 text-center leading-relaxed">
                  {member.bio}
                </p>
                <div className="flex flex-wrap justify-center gap-2">
                  {member.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="text-[8px] font-bold text-white/40 bg-white/5 border border-white/10 px-2 py-1 rounded group-hover:text-white group-hover:border-blue-500/30 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Social Action Nodes */}
              <div className="relative z-10 grid grid-cols-2 gap-4 mt-8 pt-6 border-t border-white/5">
                <button className="flex items-center justify-center gap-2 py-2.5 rounded-xl bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-blue-600 transition-all text-[9px] font-black tracking-widest uppercase">
                  <Github size={12} /> Github
                </button>
                <button className="flex items-center justify-center gap-2 py-2.5 rounded-xl bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-blue-600 transition-all text-[9px] font-black tracking-widest uppercase">
                  <Linkedin size={12} /> Linkedin
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Metadata Label */}
        <div className="mt-20 flex flex-col md:flex-row justify-between items-center gap-4 opacity-30 px-6">
          <div className="flex gap-4 items-center">
            <ShieldAlert size={16} className="text-blue-500" />
            <span className="text-[8px] md:text-[9px] font-mono text-slate-500 uppercase tracking-[0.3em]">
              Encrypted_Personnel_Stream
            </span>
          </div>
          <div className="flex gap-4 items-center">
            <Database size={16} className="text-blue-500" />
            <span className="text-[8px] md:text-[9px] font-mono text-slate-500 uppercase tracking-[0.3em]">
              System_Integrity: 100%
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
