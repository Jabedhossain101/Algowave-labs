'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Send,
  Terminal,
  Cpu,
  ShieldCheck,
  Globe,
  Activity,
  ChevronRight,
  Database,
  Layers,
} from 'lucide-react';

export default function ContactPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <main className="min-h-screen bg-[#020203] text-white selection:bg-blue-500/30 overflow-hidden font-sans">
      {/* --- ATMOSPHERIC BACKGROUND --- */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-600/10 blur-[150px] rounded-full opacity-40" />
        <div className="absolute bottom-[10%] right-[-5%] w-[40%] h-[40%] bg-indigo-600/10 blur-[130px] rounded-full opacity-30" />
      </div>

      {/* Sync Grid Overlay */}
      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#3b82f6 1px, transparent 1px), linear-gradient(90deg, #3b82f6 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
          transform: 'perspective(1200px) rotateX(20deg) translateY(-100px)',
        }}
      />

      <section className="relative z-10 pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-6xl">
          {/* --- HEADER --- */}
          <div className="flex flex-col items-center text-center mb-20">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/20 bg-blue-500/5 mb-8"
            >
              <Activity size={12} className="text-blue-500 animate-pulse" />
              <span className="text-[9px] font-black tracking-[0.4em] uppercase text-blue-500">
                System Connection Established
              </span>
            </motion.div>

            <h1 className="text-5xl md:text-8xl font-black tracking-tighter leading-[0.9] uppercase italic mb-8">
              Initiate <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-500 not-italic font-light">
                Deployment.
              </span>
            </h1>
            <p className="max-w-2xl text-slate-500 text-lg font-light leading-relaxed">
              Ready to architect your industrial-grade ecosystem? Provide your
              project parameters below to initialize the engineering pipeline.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 items-start">
            {/* --- LEFT: TECHNICAL SPECS --- */}
            <div className="lg:col-span-4 space-y-6">
              <div className="p-8 rounded-[2.5rem] bg-[#0A0A0A] border border-white/5 relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                  <Terminal size={40} className="text-blue-500" />
                </div>
                <h3 className="text-xs font-black tracking-widest text-slate-600 uppercase mb-6 flex items-center gap-2">
                  <Cpu size={14} className="text-blue-500" /> Protocol Info
                </h3>
                <div className="space-y-4 font-mono text-[10px] text-slate-500 italic">
                  <p>&gt; Target: AlgoWave_Cloud_v4</p>
                  <p>&gt; Security: AES_256_Active</p>
                  <p>&gt; Node: Global_Mesh_Network</p>
                  <div className="h-[1px] w-full bg-white/5 my-4" />
                  <p className="text-blue-500 not-italic font-bold">
                    READY FOR UPLOAD
                  </p>
                </div>
              </div>

              {[
                {
                  title: 'Secure Handling',
                  desc: 'Enterprise data remains isolated.',
                  icon: <ShieldCheck size={20} className="text-purple-500" />,
                },
                {
                  title: 'Global Reach',
                  desc: 'Edge distribution across 40+ nodes.',
                  icon: <Globe size={20} className="text-emerald-500" />,
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="p-6 rounded-[2rem] border border-white/5 bg-white/[0.01] flex items-center gap-5"
                >
                  <div className="p-3 bg-white/5 rounded-xl">{item.icon}</div>
                  <div>
                    <h4 className="text-xs font-bold text-white uppercase">
                      {item.title}
                    </h4>
                    <p className="text-[10px] text-slate-500 uppercase tracking-tighter">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* --- RIGHT: INTAKE FORM --- */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="lg:col-span-8 bg-[#0A0A0A] border border-white/10 rounded-[3rem] p-8 md:p-12 relative overflow-hidden"
            >
              <div className="absolute top-[-20%] right-[-10%] w-96 h-96 bg-blue-600/5 blur-[120px] rounded-full" />

              <form className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-600 ml-2">
                    Project_Alias
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. NeoSaaS"
                    className="w-full bg-[#050505] border border-white/5 rounded-2xl px-6 py-4 text-xs font-mono focus:outline-none focus:border-blue-500/50 transition-all placeholder:text-slate-800"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-600 ml-2">
                    Lead_Architect_Mail
                  </label>
                  <input
                    type="email"
                    placeholder="protocol@company.io"
                    className="w-full bg-[#050505] border border-white/5 rounded-2xl px-6 py-4 text-xs font-mono focus:outline-none focus:border-blue-500/50 transition-all placeholder:text-slate-800"
                  />
                </div>
                <div className="md:col-span-2 space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-600 ml-2">
                    Architecture_Requirements
                  </label>
                  <textarea
                    rows="4"
                    placeholder="Define project scope and technical hurdles..."
                    className="w-full bg-[#050505] border border-white/5 rounded-[2rem] px-6 py-5 text-xs font-mono focus:outline-none focus:border-blue-500/50 transition-all placeholder:text-slate-800"
                  ></textarea>
                </div>

                <div className="md:col-span-2">
                  <motion.button
                    whileHover={{ scale: 1.01, backgroundColor: '#2563eb' }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-5 bg-blue-600 text-white rounded-2xl font-black text-[11px] uppercase tracking-[0.3em] flex items-center justify-center gap-4 shadow-[0_20px_50px_rgba(37,99,235,0.2)]"
                  >
                    Initialize Engineering Pipeline
                    <Send size={16} />
                  </motion.button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Decorative Sidebar Archive Indicator */}
      <div className="absolute left-10 top-1/2 -translate-y-1/2 hidden 2xl:flex flex-col items-center gap-12 opacity-20">
        <span className="[writing-mode:vertical-lr] rotate-180 text-[8px] tracking-[2em] text-slate-600 uppercase font-black">
          AlgoWave Labs Intake Module // 2026
        </span>
        <div className="w-[1px] h-40 bg-gradient-to-t from-blue-500 via-blue-500/50 to-transparent" />
      </div>

      {/* Custom Grain Overlay */}
      <div className="absolute inset-0 opacity-[0.01] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
    </main>
  );
}
