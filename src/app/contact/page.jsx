'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  MessageSquare,
  MapPin,
  Send,
  Phone,
  Activity,
  ShieldCheck,
  Command,
} from 'lucide-react';

const ContactPage = () => {
  return (
    <section className="relative py-20 md:py-32 bg-[#030303] overflow-hidden border-y border-white/5">
      {/* --- BACKGROUND ELEMENTS --- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/4 right-0 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-blue-600/[0.04] blur-[100px] rounded-full" />
        <div
          className="absolute inset-0 opacity-[0.03] md:opacity-[0.05]"
          style={{
            backgroundImage: `linear-gradient(#3b82f6 1px, transparent 1px), linear-gradient(90deg, #3b82f6 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
            transform:
              'perspective(1000px) rotateX(20deg) translateY(-50px) scale(1.5)',
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* --- HEADER --- */}
        <div className="flex flex-col items-center text-center mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-6 px-4 py-1.5 rounded-full bg-blue-500/5 border border-blue-500/20"
          >
            <Activity size={12} className="text-blue-500" />
            <span className="text-[9px] md:text-[10px] font-black tracking-[0.5em] uppercase text-blue-500">
              Communication Protocol
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-7xl font-black text-white tracking-tighter leading-tight uppercase">
            Let’s Sync <br />
            <span className="italic font-extralight text-slate-600">
              Our Logic.
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* --- CONTACT INFO (4 Columns) --- */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 space-y-8"
          >
            <div className="p-8 md:p-10 rounded-[2rem] border border-white/5 bg-white/[0.01] relative overflow-hidden">
              <div className="relative z-10 space-y-10">
                {[
                  {
                    icon: <Mail className="text-blue-400" />,
                    title: 'Direct Node',
                    detail: 'hello@algowavelabs.com',
                  },
                  {
                    icon: <Phone className="text-blue-400" />,
                    title: 'Voice Sync',
                    detail: '+880 1XXX-XXXXXX',
                  },
                  {
                    icon: <MapPin className="text-blue-400" />,
                    title: 'Base Station',
                    detail: 'Dhaka, Bangladesh',
                  },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-6 group">
                    <div className="p-4 rounded-xl bg-black border border-white/10 group-hover:border-blue-400/50 transition-colors">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-[10px] font-mono uppercase tracking-widest text-slate-500 mb-1">
                        {item.title}
                      </p>
                      <p className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors">
                        {item.detail}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 rounded-2xl border border-white/5 bg-white/[0.01] flex items-center gap-4">
                <ShieldCheck className="text-blue-500/50" size={20} />
                <span className="text-[10px] font-mono uppercase text-slate-400">
                  Secure Protocol
                </span>
              </div>
              <div className="p-6 rounded-2xl border border-white/5 bg-white/[0.01] flex items-center gap-4">
                <Command className="text-blue-500/50" size={20} />
                <span className="text-[10px] font-mono uppercase text-slate-400">
                  Fast Response
                </span>
              </div>
            </div>
          </motion.div>

          {/* --- CONTACT FORM (7 Columns) --- */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <form className="p-8 md:p-12 rounded-[2.5rem] border border-white/10 bg-white/[0.02] backdrop-blur-sm space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-mono uppercase text-slate-500 ml-4">
                    Entity Name
                  </label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full bg-black/50 border border-white/5 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-blue-500/50 transition-all placeholder:text-zinc-800"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-mono uppercase text-slate-500 ml-4">
                    Source ID (Email)
                  </label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="w-full bg-black/50 border border-white/5 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-blue-500/50 transition-all placeholder:text-zinc-800"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-mono uppercase text-slate-500 ml-4">
                  Project Architecture
                </label>
                <select className="w-full bg-black/50 border border-white/5 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-blue-500/50 transition-all appearance-none">
                  <option className="bg-[#030303]">
                    Full-Stack Development
                  </option>
                  <option className="bg-[#030303]">UI/UX Design Systems</option>
                  <option className="bg-[#030303]">ERP Solutions</option>
                  <option className="bg-[#030303]">Consultation</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-mono uppercase text-slate-500 ml-4">
                  Message Buffer
                </label>
                <textarea
                  rows={4}
                  placeholder="Describe your vision..."
                  className="w-full bg-black/50 border border-white/5 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-blue-500/50 transition-all placeholder:text-zinc-800 resize-none"
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full flex items-center justify-center gap-3 px-8 py-5 bg-blue-600 text-white rounded-2xl font-black uppercase tracking-widest text-[11px] hover:bg-blue-500 transition-colors shadow-[0_0_20px_rgba(37,99,235,0.2)]"
              >
                Execute Transmission
                <Send size={16} />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
