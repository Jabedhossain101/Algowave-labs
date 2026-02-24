'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Cpu, Code2, Terminal, Layers } from 'lucide-react';

const teamMembers = [
  {
    name: 'MD. Jabed Hossain',
    role: 'Full Stack Developer',
    image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Jabed',
    tech: 'Next.js / Node.js',
    icon: <Layers size={20} className="text-blue-500" />,
  },
  {
    name: 'Afridi Rahman',
    role: 'Software Engineer',
    image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Afridi',
    tech: 'Python / Docker',
    icon: <Terminal size={20} className="text-indigo-500" />,
  },
  {
    name: 'Samiul Islam',
    role: 'Full Stack Developer',
    image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Samiul',
    tech: 'MERN Stack',
    icon: <Code2 size={20} className="text-cyan-500" />,
  },
  {
    name: 'Tanvir Ahmed',
    role: 'Software Engineer',
    image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Tanvir',
    tech: 'C# / Cloud Architect',
    icon: <Cpu size={20} className="text-blue-400" />,
  },
];

export default function AdvancedTeam() {
  return (
    <section id="team" className="relative py-24 bg-[#030303] overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col items-center mb-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 mb-4"
          >
            <Cpu size={14} className="text-blue-500" />
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-blue-400">
              Human Infrastructure
            </span>
          </motion.div>
          <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter uppercase leading-[0.9]">
            Core{' '}
            <span className="text-white/20 italic font-light">Architects.</span>
          </h2>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.8 }}
              whileHover={{ y: -10 }}
              className="group relative bg-white/[0.02] border border-white/5 rounded-[2.5rem] p-8 overflow-hidden hover:border-blue-500/40 transition-all duration-500"
            >
              {/* Card Design Elements */}
              <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-30 transition-opacity">
                {member.icon}
              </div>

              {/* Profile Image */}
              <div className="relative w-24 h-24 mb-6 rounded-3xl overflow-hidden border border-white/10 p-1 bg-white/5">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover rounded-2xl grayscale group-hover:grayscale-0 transition-all duration-500"
                />
              </div>

              {/* Details */}
              <div className="space-y-1 mb-6">
                <h3 className="text-xl font-bold text-white tracking-tight">
                  {member.name}
                </h3>
                <p className="text-xs font-mono text-blue-500 uppercase tracking-widest">
                  {member.role}
                </p>
              </div>

              {/* Tech Stack Badge */}
              <div className="text-[10px] text-slate-500 font-mono mb-8 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                {member.tech}
              </div>

              {/* Social Links */}
              <div className="flex gap-4">
                <button className="p-2 rounded-xl bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:border-blue-500/40 transition-all">
                  <Github size={16} />
                </button>
                <button className="p-2 rounded-xl bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:border-blue-500/40 transition-all">
                  <Linkedin size={16} />
                </button>
              </div>

              {/* Decorative Corner */}
              <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-blue-600/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
