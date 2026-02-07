'use client';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Activity,
  Cpu,
  ShieldCheck,
  Command,
  ArrowRight,
} from 'lucide-react';

export default function AdvancedContact() {
  const [formState, setFormState] = useState('idle'); // idle, sending, success
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleSubmit = e => {
    e.preventDefault();
    setFormState('sending');
    setTimeout(() => setFormState('success'), 2000);
  };

  if (!mounted) return <div className="min-h-screen bg-[#030303]" />;

  return (
    <main className="min-h-screen bg-[#030303] text-white selection:bg-blue-500/30 overflow-hidden font-sans pt-20">
      {/* --- LAYER 1: AMBIENT DEPTH & GRID SYNC --- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-5%] w-[50%] h-[50%] bg-blue-600/[0.04] blur-[150px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[40%] h-[40%] bg-indigo-600/[0.04] blur-[120px] rounded-full" />

        {/* Sync with Global Perspective Grid */}
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: `linear-gradient(#3b82f6 1px, transparent 1px), linear-gradient(90deg, #3b82f6 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
            transform: 'perspective(1200px) rotateX(25deg) translateY(-80px)',
            willChange: 'transform',
          }}
        />
      </div>

      {/* --- HERO SECTION --- */}
      <section className="relative pt-20 pb-12 border-b border-white/[0.03] backdrop-blur-3xl bg-black/40">
        <div className="w-full px-6 md:px-12 lg:px-20 relative z-10 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-blue-500/20 bg-blue-500/5 mb-8"
          >
            <Cpu size={12} className="text-blue-500 animate-pulse" />
            <span className="text-[9px] font-bold tracking-[0.6em] uppercase text-blue-400">
              Technical Support Terminal
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-[0.9] mb-8"
          >
            INITIATE <br />
            <span className="text-white/20 italic font-light tracking-tight">
              CONNECTION.
            </span>
          </motion.h1>

          <p className="max-w-xl text-slate-500 text-base md:text-lg font-light leading-relaxed mx-auto lg:mx-0">
            Ready to architect your next digital legacy? Our team is standing by
            to transform{' '}
            <span className="text-white/80">
              complex logic into scalable reality.
            </span>
          </p>
        </div>
      </section>

      {/* --- CONTENT GRID --- */}
      <section className="py-20 relative z-10">
        <div className="w-full px-6 md:px-12 lg:px-20">
          <div className="grid lg:grid-cols-12 gap-16">
            {/* LEFT: SYSTEM METADATA */}
            <div className="lg:col-span-5 space-y-12">
              <div className="space-y-6">
                <h2 className="text-xs font-bold tracking-[0.4em] uppercase text-slate-600">
                  SYSTEM_ACCESS_NODES
                </h2>
                <div className="flex items-center gap-5 p-6 rounded-[2rem] bg-white/[0.02] border border-white/[0.05] border-l-blue-600/40 border-l-4 backdrop-blur-xl">
                  <Activity size={18} className="text-blue-500" />
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-white/50">
                      Latency Check
                    </p>
                    <p className="text-xl font-mono text-blue-400">
                      &lt; 120ms{' '}
                      <span className="text-[9px] text-slate-600 ml-2">
                        Global Avg
                      </span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                {[
                  {
                    icon: <Mail size={20} />,
                    label: 'Data Protocol',
                    val: 'ops@algowave.labs',
                  },
                  {
                    icon: <Phone size={20} />,
                    label: 'Voice Channel',
                    val: '+880 1234 567 890',
                  },
                  {
                    icon: <MapPin size={20} />,
                    label: 'Base Station',
                    val: 'Tech District, Level 4',
                  },
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ x: 8 }}
                    className="flex items-start gap-6 group cursor-pointer"
                  >
                    <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 group-hover:border-blue-500/30 transition-all text-slate-600 group-hover:text-blue-400 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.1)]">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-[9px] font-bold tracking-[0.3em] uppercase text-slate-600 mb-1">
                        {item.label}
                      </p>
                      <p className="text-xl font-bold text-white/90 group-hover:text-blue-400 transition-colors tracking-tight">
                        {item.val}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Secure Status Card */}
              <div className="p-10 rounded-[2.5rem] bg-white/[0.01] border border-white/[0.05] relative overflow-hidden group backdrop-blur-md">
                <div className="absolute -bottom-10 -right-10 opacity-5 group-hover:opacity-10 transition-opacity">
                  <ShieldCheck size={180} />
                </div>
                <div className="relative z-10 flex items-center gap-5">
                  <div className="relative flex h-3 w-3">
                    <span className="animate-ping absolute h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold tracking-[0.2em] uppercase text-white/80">
                      Status: OPTIMAL
                    </h4>
                    <p className="text-[9px] font-mono text-slate-600 uppercase mt-1">
                      Global Transmission Nodes Online
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT: THE COMMAND FORM */}
            <div className="lg:col-span-7">
              <motion.form
                onSubmit={handleSubmit}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-8 md:p-14 rounded-[3rem] bg-white/[0.01] border border-white/10 backdrop-blur-3xl shadow-2xl relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-8 opacity-10">
                  <Command size={20} />
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div className="space-y-3">
                    <label className="text-[9px] font-bold tracking-[0.2em] uppercase text-slate-600 ml-4">
                      Identifier
                    </label>
                    <input
                      type="text"
                      placeholder="NAME / COMPANY"
                      required
                      className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-6 py-4 text-xs font-mono focus:outline-none focus:border-blue-500/40 focus:bg-blue-500/5 transition-all"
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[9px] font-bold tracking-[0.2em] uppercase text-slate-600 ml-4">
                      Address
                    </label>
                    <input
                      type="email"
                      placeholder="EMAIL@DOMAIN.COM"
                      required
                      className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-6 py-4 text-xs font-mono focus:outline-none focus:border-blue-500/40 focus:bg-blue-500/5 transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-3 mb-8">
                  <label className="text-[9px] font-bold tracking-[0.2em] uppercase text-slate-600 ml-4">
                    Classification
                  </label>
                  <div className="relative">
                    <select className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-6 py-4 text-xs font-mono focus:outline-none focus:border-blue-500/40 transition-all appearance-none cursor-pointer">
                      <option className="bg-[#030303]">ERP ARCHITECTURE</option>
                      <option className="bg-[#030303]">SAAS ECOSYSTEM</option>
                      <option className="bg-[#030303]">AI LOGIC</option>
                    </select>
                    <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none opacity-20">
                      <ArrowRight size={14} className="rotate-90" />
                    </div>
                  </div>
                </div>

                <div className="space-y-3 mb-10">
                  <label className="text-[9px] font-bold tracking-[0.2em] uppercase text-slate-600 ml-4">
                    Parameters
                  </label>
                  <textarea
                    rows="4"
                    placeholder="DESCRIBE TECHNICAL REQUIREMENTS..."
                    required
                    className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-6 py-4 text-xs font-mono focus:outline-none focus:border-blue-500/40 focus:bg-blue-500/5 transition-all resize-none"
                  ></textarea>
                </div>

                <button
                  disabled={formState !== 'idle'}
                  className={`w-full py-5 rounded-2xl font-bold text-[10px] uppercase tracking-[0.3em] flex items-center justify-center gap-3 transition-all duration-500 relative overflow-hidden group ${
                    formState === 'success'
                      ? 'bg-green-600/20 border border-green-500/30 text-green-400'
                      : 'bg-blue-600 text-white hover:brightness-110'
                  }`}
                >
                  <AnimatePresence mode="wait">
                    {formState === 'idle' && (
                      <motion.div
                        key="idle"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="flex items-center gap-3"
                      >
                        <Send
                          size={16}
                          className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                        />
                        Transmit Message
                      </motion.div>
                    )}
                    {formState === 'sending' && (
                      <motion.div
                        key="sending"
                        className="flex items-center gap-3"
                      >
                        <div className="h-4 w-4 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                        Processing...
                      </motion.div>
                    )}
                    {formState === 'success' && (
                      <motion.div
                        key="success"
                        initial={{ y: 10 }}
                        animate={{ y: 0 }}
                        className="flex items-center gap-3"
                      >
                        <ShieldCheck size={16} /> Handshake Complete
                      </motion.div>
                    )}
                  </AnimatePresence>
                </button>
              </motion.form>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER METADATA */}
      <div className="absolute right-12 bottom-12 hidden 2xl:flex flex-col items-center gap-8 opacity-10 pointer-events-none">
        <p className="[writing-mode:vertical-lr] text-[8px] tracking-[1.5em] text-slate-500 uppercase font-black">
          Algo_Wave_Labs // Terminal_2026
        </p>
        <div className="w-px h-24 bg-gradient-to-t from-blue-500 to-transparent" />
      </div>

      <div className="absolute inset-0 opacity-[0.015] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
    </main>
  );
}
