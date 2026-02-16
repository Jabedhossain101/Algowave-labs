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
  const [formState, setFormState] = useState('idle');
  const [mounted, setMounted] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    setMounted(true);
    const checkRes = () => setIsDesktop(window.innerWidth > 768);
    checkRes();
    window.addEventListener('resize', checkRes);
    return () => window.removeEventListener('resize', checkRes);
  }, []);

  const handleSubmit = e => {
    e.preventDefault();
    setFormState('sending');
    setTimeout(() => setFormState('success'), 2000);
  };

  if (!mounted) return <div className="min-h-screen bg-[#030303]" />;

  return (
    <main className="min-h-screen bg-[#030303] text-white selection:bg-blue-500/30 overflow-hidden font-sans pt-12 md:pt-20">
      {/* --- LAYER 1: OPTIMIZED BACKGROUND --- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Glows simplified for mobile performance */}
        <div className="absolute top-[-5%] left-[-5%] w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-blue-600/[0.04] blur-[80px] md:blur-[150px] rounded-full" />

        {/* Sync with Global Perspective Grid - Disabled on mobile for smoothness */}
        <div
          className="absolute inset-0 opacity-[0.04] md:opacity-[0.06]"
          style={{
            backgroundImage: `linear-gradient(#3b82f6 1px, transparent 1px), linear-gradient(90deg, #3b82f6 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
            transform: isDesktop
              ? 'perspective(1200px) rotateX(25deg) translateY(-80px)'
              : 'none',
            willChange: 'transform',
          }}
        />
      </div>

      {/* --- HERO SECTION --- */}
      <section className="relative pt-16 md:pt-20 pb-8 md:pb-12 border-b border-white/[0.03] bg-black/40">
        <div className="w-full px-6 md:px-12 lg:px-20 relative z-10 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-blue-500/20 bg-blue-500/5 mb-6 md:mb-8"
          >
            <Cpu size={12} className="text-blue-500 md:animate-pulse" />
            <span className="text-[9px] font-bold tracking-[0.4em] md:tracking-[0.6em] uppercase text-blue-400">
              Technical Support Terminal
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-[0.9] mb-6 md:mb-8"
          >
            INITIATE <br />
            <span className="text-white/20 italic font-light tracking-tight">
              CONNECTION.
            </span>
          </motion.h1>

          <p className="max-w-xl text-slate-500 text-sm md:text-lg font-light leading-relaxed mx-auto lg:mx-0">
            Ready to architect your next digital legacy? Our team is standing by
            to transform{' '}
            <span className="text-white/80">
              complex logic into scalable reality.
            </span>
          </p>
        </div>
      </section>

      {/* --- CONTENT GRID --- */}
      <section className="py-12 md:py-20 relative z-10">
        <div className="w-full px-6 md:px-12 lg:px-20">
          <div className="grid lg:grid-cols-12 gap-10 md:gap-16">
            {/* LEFT: SYSTEM METADATA */}
            <div className="lg:col-span-5 space-y-8 md:space-y-12">
              <div className="space-y-4 md:space-y-6">
                <h2 className="text-[10px] font-bold tracking-[0.4em] uppercase text-slate-600">
                  SYSTEM_ACCESS_NODES
                </h2>
                <div className="flex items-center gap-5 p-6 rounded-[1.5rem] md:rounded-[2rem] bg-white/[0.02] border border-white/[0.05] border-l-blue-600/40 border-l-4">
                  <Activity size={18} className="text-blue-500" />
                  <div>
                    <p className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-white/50">
                      Latency Check
                    </p>
                    <p className="text-lg md:text-xl font-mono text-blue-400">
                      &lt; 120ms
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-6 md:space-y-8">
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
                    detail: 'Innovation Plaza',
                    val: 'Dhaka, Bangladesh',
                  },
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={isDesktop ? { x: 8 } : {}}
                    className="flex items-start gap-4 md:gap-6 group cursor-pointer"
                  >
                    <div className="p-3 md:p-4 rounded-xl md:rounded-2xl bg-white/[0.03] border border-white/5 transition-all text-slate-600 group-hover:text-blue-400">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-[8px] md:text-[9px] font-bold tracking-[0.2em] md:tracking-[0.3em] uppercase text-slate-600 mb-1">
                        {item.label}
                      </p>
                      <p className="text-lg md:text-xl font-bold text-white/90 group-hover:text-blue-400 transition-colors tracking-tight">
                        {item.val}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Secure Status Card */}
              <div className="p-8 md:p-10 rounded-[2rem] md:rounded-[2.5rem] bg-white/[0.01] border border-white/[0.05] relative overflow-hidden group">
                <div className="absolute -bottom-10 -right-10 opacity-5 hidden md:block">
                  <ShieldCheck size={180} />
                </div>
                <div className="relative z-10 flex items-center gap-5">
                  <div className="relative flex h-3 w-3">
                    <span className="animate-ping absolute h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                  </div>
                  <div>
                    <h4 className="text-[11px] md:text-sm font-bold tracking-[0.2em] uppercase text-white/80">
                      Status: OPTIMAL
                    </h4>
                    <p className="text-[8px] md:text-[9px] font-mono text-slate-600 uppercase mt-1">
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
                className="p-8 md:p-14 rounded-[2rem] md:rounded-[3rem] bg-white/[0.02] border border-white/10 relative overflow-hidden"
                style={{ transform: 'translateZ(0)' }}
              >
                <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-6 md:mb-8">
                  <div className="space-y-3">
                    <label className="text-[9px] font-bold tracking-[0.2em] uppercase text-slate-600 ml-4">
                      Identifier
                    </label>
                    <input
                      type="text"
                      placeholder="NAME / COMPANY"
                      required
                      className="w-full bg-white/[0.03] border border-white/10 rounded-xl md:rounded-2xl px-6 py-4 text-xs font-mono focus:outline-none focus:border-blue-500/40 focus:bg-blue-500/5 transition-all"
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
                      className="w-full bg-white/[0.03] border border-white/10 rounded-xl md:rounded-2xl px-6 py-4 text-xs font-mono focus:outline-none focus:border-blue-500/40 focus:bg-blue-500/5 transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-3 mb-6 md:mb-8">
                  <label className="text-[9px] font-bold tracking-[0.2em] uppercase text-slate-600 ml-4">
                    Classification
                  </label>
                  <div className="relative">
                    <select className="w-full bg-white/[0.03] border border-white/10 rounded-xl md:rounded-2xl px-6 py-4 text-xs font-mono focus:outline-none focus:border-blue-500/40 appearance-none cursor-pointer">
                      <option className="bg-[#030303]">ERP ARCHITECTURE</option>
                      <option className="bg-[#030303]">SAAS ECOSYSTEM</option>
                      <option className="bg-[#030303]">AI LOGIC</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-3 mb-8 md:mb-10">
                  <label className="text-[9px] font-bold tracking-[0.2em] uppercase text-slate-600 ml-4">
                    Parameters
                  </label>
                  <textarea
                    rows="4"
                    placeholder="DESCRIBE TECHNICAL REQUIREMENTS..."
                    required
                    className="w-full bg-white/[0.03] border border-white/10 rounded-xl md:rounded-2xl px-6 py-4 text-xs font-mono focus:outline-none focus:border-blue-500/40 focus:bg-blue-500/5 transition-all resize-none"
                  ></textarea>
                </div>

                <button
                  disabled={formState !== 'idle'}
                  className={`w-full py-4 md:py-5 rounded-xl md:rounded-2xl font-bold text-[10px] uppercase tracking-[0.3em] flex items-center justify-center gap-3 transition-all duration-500 relative overflow-hidden group ${
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
                          className="group-hover:translate-x-1 transition-transform"
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

      <div className="absolute inset-0 opacity-[0.01] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
    </main>
  );
}
