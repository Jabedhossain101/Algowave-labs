'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  MessageSquare,
  Clock,
  Globe,
  Activity,
  ArrowRight,
} from 'lucide-react';

export default function ContactPage() {
  const [formState, setFormState] = useState('idle'); // idle, sending, success

  const handleSubmit = e => {
    e.preventDefault();
    setFormState('sending');
    setTimeout(() => setFormState('success'), 2000);
  };

  return (
    <main className="min-h-screen bg-[#050505] text-white selection:bg-blue-500/30 overflow-hidden">
      {/* --- HERO SECTION: COMMUNICATION ARCHITECTURE --- */}
      <section className="relative pt-40 pb-20 px-6 border-b border-white/5">
        {/* Dynamic Background Glows */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-[-10%] left-[-10%] w-[45%] h-[45%] bg-blue-600/10 blur-[130px] rounded-full" />
          <div className="absolute bottom-[10%] right-[-5%] w-[35%] h-[35%] bg-indigo-600/10 blur-[110px] rounded-full" />
        </div>

        {/* Cyber Grid Overlay */}
        <div
          className="absolute inset-0 opacity-[0.05] pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(#3b82f6 1px, transparent 1px), linear-gradient(90deg, #3b82f6 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
            transform: 'perspective(1000px) rotateX(20deg) translateY(-50px)',
          }}
        />

        <div className="container mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/20 bg-blue-500/5 mb-8"
          >
            <Activity size={14} className="text-blue-500 animate-pulse" />
            <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-blue-400">
              Direct Command Center
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-8xl font-black tracking-tighter leading-none mb-8"
          >
            INITIATE <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-500">
              CONNECTION
            </span>
          </motion.h1>

          <p className="max-w-2xl text-slate-400 text-lg md:text-xl font-light leading-relaxed">
            Ready to architect your next digital legacy? Our engineering team is
            standing by to transform your{' '}
            <span className="text-white font-medium">
              complex logic into scalable reality.
            </span>
          </p>
        </div>
      </section>

      {/* --- CONTACT GRID: FORM & INFO --- */}
      <section className="py-24 px-6 relative">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-12 gap-16">
            {/* Left Column: Metadata & Info */}
            <div className="lg:col-span-5 space-y-12">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold tracking-tight uppercase">
                  System Access
                </h2>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Choose your preferred communication protocol. Our average
                  response latency is{' '}
                  <span className="text-blue-500 font-bold tracking-tighter">
                    &lt; 120ms
                  </span>{' '}
                  (Business Hours).
                </p>
              </div>

              <div className="space-y-8">
                {[
                  {
                    icon: <Mail />,
                    label: 'Email Protocol',
                    val: 'ops@algowave.labs',
                    sub: 'For project inquiries',
                  },
                  {
                    icon: <Phone />,
                    label: 'Voice Channel',
                    val: '+880 1234 567 890',
                    sub: 'Mon-Fri, 10am-6pm',
                  },
                  {
                    icon: <MapPin />,
                    label: 'Base Station',
                    val: 'Tech District, Level 4',
                    sub: 'Dhaka, Bangladesh',
                  },
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ x: 10 }}
                    className="flex items-start gap-6 group"
                  >
                    <div className="p-4 rounded-2xl bg-white/5 border border-white/10 group-hover:bg-blue-600/10 group-hover:border-blue-500/20 transition-all text-slate-500 group-hover:text-blue-400">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-[10px] font-black tracking-[0.3em] uppercase text-slate-600 mb-1">
                        {item.label}
                      </p>
                      <p className="text-xl font-bold text-white tracking-tight">
                        {item.val}
                      </p>
                      <p className="text-xs text-slate-500 mt-1 italic">
                        {item.sub}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Status Indicator Box */}
              <div className="p-8 rounded-[32px] bg-[#0a0a0a] border border-white/5 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-5">
                  <Globe size={100} />
                </div>
                <div className="relative z-10 flex items-center gap-4">
                  <div className="h-3 w-3 rounded-full bg-green-500 animate-pulse" />
                  <div>
                    <p className="text-sm font-bold text-white tracking-tight">
                      System Status: Optimal
                    </p>
                    <p className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">
                      Global Nodes Operational
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: The Command Form */}
            <div className="lg:col-span-7">
              <motion.form
                onSubmit={handleSubmit}
                className="p-8 md:p-12 rounded-[48px] bg-[#0a0a0a] border border-white/5 shadow-2xl relative"
              >
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black tracking-[0.2em] uppercase text-slate-500 ml-2">
                      Operator Name
                    </label>
                    <input
                      type="text"
                      placeholder="MD JABED"
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-sm focus:outline-none focus:border-blue-500/50 transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black tracking-[0.2em] uppercase text-slate-500 ml-2">
                      Digital Address
                    </label>
                    <input
                      type="email"
                      placeholder="jabed@company.com"
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-sm focus:outline-none focus:border-blue-500/50 transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-2 mb-8">
                  <label className="text-[10px] font-black tracking-[0.2em] uppercase text-slate-500 ml-2">
                    Project Classification
                  </label>
                  <select className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-sm focus:outline-none focus:border-blue-500/50 transition-all appearance-none text-slate-400">
                    <option>ERP Architecture</option>
                    <option>SaaS Ecosystem</option>
                    <option>Custom Web Engine</option>
                    <option>AI Logic Integration</option>
                  </select>
                </div>

                <div className="space-y-2 mb-10">
                  <label className="text-[10px] font-black tracking-[0.2em] uppercase text-slate-500 ml-2">
                    Mission Parameters
                  </label>
                  <textarea
                    rows="5"
                    placeholder="Describe your technical requirements..."
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-sm focus:outline-none focus:border-blue-500/50 transition-all resize-none"
                  ></textarea>
                </div>

                <button
                  disabled={formState !== 'idle'}
                  className={`w-full py-5 rounded-2xl font-black text-xs uppercase tracking-[0.3em] flex items-center justify-center gap-3 transition-all ${
                    formState === 'success'
                      ? 'bg-green-600 text-white'
                      : 'bg-blue-600 text-white hover:bg-blue-700 shadow-xl shadow-blue-600/20'
                  }`}
                >
                  {formState === 'idle' && (
                    <>
                      <Send size={16} /> Transmit Message
                    </>
                  )}
                  {formState === 'sending' && (
                    <div className="h-5 w-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  )}
                  {formState === 'success' && 'Transmission Successful'}
                </button>

                <p className="text-center text-[10px] text-slate-600 mt-6 tracking-widest uppercase font-bold">
                  By transmitting, you agree to our secure data protocol.
                </p>
              </motion.form>
            </div>
          </div>
        </div>
      </section>

      {/* Decorative Sidebar */}
      <div className="absolute left-10 bottom-20 hidden 2xl:flex flex-col items-center gap-8 opacity-20">
        <span className="[writing-mode:vertical-lr] text-[8px] tracking-[1.2em] text-slate-500 uppercase font-black">
          AlgoWave Communication Terminal // 2026
        </span>
        <div className="w-[1px] h-32 bg-gradient-to-t from-blue-500 to-transparent" />
      </div>
    </main>
  );
}
