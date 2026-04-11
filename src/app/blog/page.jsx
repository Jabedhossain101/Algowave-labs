'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import {
  ArrowUpRight,
  ShieldCheck,
  Zap,
  Cpu,
  Layers,
  Activity,
  Workflow,
  Network,
  Database,
  Code2,
  BarChart3,
  Globe,
  Terminal,
  Server,
  CloudLightning,
  Lock,
  MousePointer2,
  CheckCircle2,
  Rocket,
} from 'lucide-react';

const categories = [
  'All Protocols',
  'Strategic Advantage',
  'MERN Infrastructure',
  'Architecture Logic',
  'Business ROI',
];

const blogPosts = [
  {
    id: 'mern-strategic-advantage',
    title: 'The MERN Framework: Architecting for Infinite Scalability',
    excerpt:
      'Discover why our implementation of MongoDB, Express, React, and Node.js is the gold standard for high-growth enterprises.',
    fullContent:
      'Our specialized MERN stack architecture is engineered to eliminate performance bottlenecks. By utilizing a non-blocking I/O model via Node.js and a flexible schema with MongoDB, we provide clients with an infrastructure that adapts as rapidly as their market demands. This results in a 40% reduction in long-term maintenance costs and provides a unified language ecosystem for faster feature rollouts.',
    tag: 'MERN Infrastructure',
    icon: <Layers size={24} className="text-blue-400" />,
    imageUrl:
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800&auto=format&fit=crop',
    metrics: [
      'Rapid Feature Deployment',
      'Zero Migration Friction',
      'Unified JS Logic',
    ],
    gradient: 'from-blue-600/20 via-blue-500/5 to-transparent',
  },
  {
    id: 'full-stack-integration',
    title: 'End-to-End Synergy: Why Full-Stack Ownership Matters',
    excerpt:
      'Explore how our holistic engineering approach ensures seamless communication between user interfaces and secure data vaults.',
    fullContent:
      'Fragmented development leads to systemic failure. At AlgoWave Labs, our Full-Stack engineers own the logic from the database triggers to the frontend state management. This end-to-end oversight ensures that security protocols are consistent across all layers, reducing the risk of data leaks and ensuring that the final product is a perfect reflection of the initial business strategy.',
    tag: 'Architecture Logic',
    icon: <Network size={24} className="text-purple-400" />,
    imageUrl: 'https://i.ibb.co.com/chbH6PxJ/image.png',
    metrics: [
      'Eliminated Logic Silos',
      'Optimized Data Pipelines',
      '30% Faster Execution',
    ],
    gradient: 'from-purple-600/20 via-indigo-500/5 to-transparent',
  },
  {
    id: 'backend-reliability',
    title: 'The Backend Engine: Powering Mission-Critical Realities',
    excerpt:
      'Deep dive into the server-side logic that manages complex transactions and ensures 99.9% system availability.',
    fullContent:
      'The backend is the silent partner of business success. We build resilient server environments using Node.js and Python that are capable of handling millions of requests with sub-second latency. Our systems integrate automated load balancing and self-healing protocols, meaning your business stays operational even during massive traffic surges.',
    tag: 'Strategic Advantage',
    icon: <Server size={24} className="text-emerald-400" />,
    imageUrl:
      'https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=800&auto=format&fit=crop',
    metrics: [
      '99.9% Guaranteed Uptime',
      'Military-Grade Encryption',
      'High Throughput Logic',
    ],
    gradient: 'from-emerald-600/20 via-teal-500/5 to-transparent',
  },
  {
    id: 'roi-engineering',
    title: 'Value Engineering: Turning Source Code into Strategic Assets',
    excerpt:
      'Understanding the long-term financial benefits of investing in custom industrial software versus generic templates.',
    fullContent:
      'Generic templates are a debt, not an asset. Our custom-engineered systems are built as modular technical assets that increase your company’s valuation. By investing in clean, documented architecture today, you avoid the "Rebuild Trap" common in growing startups, ensuring your tech stack scales proportionally with your revenue.',
    tag: 'Business ROI',
    icon: <BarChart3 size={24} className="text-orange-400" />,
    imageUrl:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop',
    metrics: [
      'Long-term Cost Reduction',
      'Increased IP Valuation',
      'Investor-Ready Tech',
    ],
    gradient: 'from-orange-600/20 via-red-500/5 to-transparent',
  },
  {
    id: 'frontend-conversion',
    title: 'Frontend Precision: Engineering Interfaces for Conversion',
    excerpt:
      'Why we treat the frontend as a performance-driven rendering engine instead of just a visual layer.',
    fullContent:
      'We leverage Next.js 14 to create frontend experiences that are as fast as native applications. Our focus on Core Web Vitals ensures that your site ranks higher in search engines and keeps users engaged. By optimizing the "Critical Path" of user interaction, we directly impact your conversion rates and reduce user bounce through lightning-fast rendering.',
    tag: 'MERN Infrastructure',
    icon: <Globe size={24} className="text-cyan-400" />,
    imageUrl: 'https://i.ibb.co.com/b5Pj4bck/image.png',
    metrics: [
      'SEO Performance Peak',
      'Mobile-First Fluidity',
      '0.1s Interaction Delay',
    ],
    gradient: 'from-cyan-600/20 via-blue-500/5 to-transparent',
  },
  {
    id: 'security-protocols',
    title: 'Security by Design: Safeguarding the Enterprise Perimeter',
    excerpt:
      'Our rigorous protocol for protecting intellectual property, user data, and financial transactions.',
    fullContent:
      'At AlgoWave Labs, security is woven into every line of code. We utilize JWT-based authentication, AES-256 data encryption, and isolated database clusters to ensure your business is protected against modern cyber threats. Our "Zero Trust" architecture means that every internal node is validated, ensuring complete system integrity.',
    tag: 'Strategic Advantage',
    icon: <Lock size={24} className="text-red-400" />,
    imageUrl:
      'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format&fit=crop',
    metrics: [
      'SOC-2 Compliance Path',
      'Encrypted Data Storage',
      'Multi-Layer Auth',
    ],
    gradient: 'from-red-600/20 via-pink-500/5 to-transparent',
  },
];

export default function BlogPage() {
  const [activeTab, setActiveTab] = useState('All Protocols');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const filteredPosts =
    activeTab === 'All Protocols'
      ? blogPosts
      : blogPosts.filter(p => p.tag === activeTab);

  if (!mounted) return null;

  return (
    <main className="min-h-screen bg-[#020203] text-white selection:bg-blue-600/30 overflow-hidden font-sans">
      {/* --- LAYER 1: HERO ARCHITECTURE --- */}
      <section className="relative pt-40 pb-24 px-6 border-b border-white/5">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-[-10%] left-[-10%] w-[45%] h-[45%] bg-blue-600/10 blur-[140px] rounded-full opacity-40" />
          <div className="absolute bottom-[10%] right-[-5%] w-[35%] h-[35%] bg-indigo-600/10 blur-[110px] rounded-full opacity-30" />
        </div>

        <div
          className="absolute inset-0 opacity-[0.05] pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(#3b82f6 1px, transparent 1px), linear-gradient(90deg, #3b82f6 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
            transform:
              'perspective(1000px) rotateX(30deg) translateY(-80px) scale(1.2)',
          }}
        />

        <div className="container mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/20 bg-blue-500/5 mb-8"
          >
            <Activity size={12} className="text-blue-500 animate-pulse" />
            <span className="text-[10px] font-bold tracking-[0.5em] uppercase text-blue-500/90">
              AlgoWave Strategic Registry v4.0
            </span>
          </motion.div>

          <div className="grid lg:grid-cols-12 gap-12 items-end">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-8"
            >
              <h1 className="text-5xl md:text-8xl font-black tracking-tighter leading-[0.9] mb-10 uppercase">
                Engineering <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-500 italic font-light">
                  Business Value.
                </span>
              </h1>
              <p className="max-w-2xl text-slate-500 text-lg md:text-xl font-light leading-relaxed">
                Why partner with a development studio? At AlgoWave, we translate
                technical complexity into measurable competitive advantages.
                Explore the logic behind{' '}
                <span className="text-white">software that scales.</span>
              </p>
            </motion.div>

            <div className="lg:col-span-4 flex justify-end gap-12 border-l border-white/5 pl-12 h-fit pb-4">
              <div className="space-y-2">
                <span className="block text-4xl font-black text-white italic tracking-tighter">
                  99.9%
                </span>
                <span className="block text-[9px] font-mono uppercase tracking-[0.3em] text-slate-600">
                  Protocol Stability
                </span>
              </div>
              <div className="space-y-2">
                <span className="block text-4xl font-black text-white italic tracking-tighter">
                  0.3s
                </span>
                <span className="block text-[9px] font-mono uppercase tracking-[0.3em] text-slate-600">
                  Latency Node
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- LAYER 2: PROTOCOL FILTER --- */}
      <section className="py-12 px-6 border-b border-white/5 bg-[#050505] sticky top-0 z-50 backdrop-blur-md">
        <div className="container mx-auto">
          <div className="flex items-center gap-4 overflow-x-auto pb-2 no-scrollbar">
            <div className="p-3 bg-blue-600/10 rounded-xl text-blue-500 border border-blue-500/20 mr-2">
              <Workflow size={18} />
            </div>
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`whitespace-nowrap px-8 py-3 rounded-full border text-[10px] font-black tracking-[0.2em] uppercase transition-all duration-300 ${
                  activeTab === cat
                    ? 'bg-blue-600 border-blue-500 text-white shadow-[0_0_25px_rgba(37,99,235,0.3)]'
                    : 'bg-white/[0.02] border-white/5 text-slate-500 hover:text-white hover:bg-white/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* --- LAYER 3: KNOWLEDGE NODES (GRID) --- */}
      <section className="py-24 px-6 relative">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            <AnimatePresence mode="wait">
              {filteredPosts.map((post, idx) => (
                <motion.article
                  key={post.id}
                  layout
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="group relative flex flex-col md:flex-row gap-8 bg-[#0A0A0A] border border-white/5 rounded-[3rem] p-6 hover:border-blue-500/20 transition-all duration-500"
                >
                  {/* Visual Metadata Side */}
                  <div className="w-full md:w-2/5 shrink-0 relative aspect-square md:aspect-auto rounded-[2rem] overflow-hidden">
                    <img
                      src={post.imageUrl}
                      alt={post.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110"
                    />
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${post.gradient} mix-blend-overlay opacity-60`}
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors" />

                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all">
                      <div className="p-4 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full shadow-2xl">
                        <ArrowUpRight size={28} className="text-white" />
                      </div>
                    </div>
                  </div>

                  {/* Content & Logistics Side */}
                  <div className="flex flex-col flex-grow py-4">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-3 bg-black border border-white/10 rounded-xl group-hover:border-blue-500/40 transition-all shadow-inner">
                        {post.icon}
                      </div>
                      <span className="text-[10px] font-mono font-bold uppercase tracking-[0.3em] text-blue-500/70">
                        {post.tag}
                      </span>
                    </div>

                    <h3 className="text-2xl md:text-3xl font-black text-white mb-6 leading-tight uppercase tracking-tighter group-hover:text-blue-400 transition-colors">
                      {post.title}
                    </h3>

                    <p className="text-slate-500 text-sm leading-relaxed mb-8 font-light italic">
                      {post.excerpt}
                    </p>

                    {/* Operational Metrics */}
                    <div className="space-y-3 mt-auto border-t border-white/5 pt-6">
                      {post.metrics.map((metric, i) => (
                        <div key={i} className="flex items-center gap-3">
                          <CloudLightning size={14} className="text-blue-600" />
                          <span className="text-[9px] font-bold uppercase tracking-widest text-slate-400">
                            {metric}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* --- LAYER 4: INTEGRATED WORKFLOW MATRIX --- */}
      <section className="py-32 px-6 bg-white/[0.01] border-t border-white/5 relative">
        <div className="container mx-auto">
          <div className="flex flex-col items-center text-center mb-24">
            <Cpu size={40} className="text-blue-500 mb-8 animate-pulse" />
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase mb-6">
              Our Engineering <br />{' '}
              <span className="italic text-slate-600">Workflow Matrix</span>
            </h2>
            <p className="max-w-2xl text-slate-500 text-sm md:text-lg font-light leading-relaxed uppercase tracking-widest">
              An architectural breakdown of how our core components synergize to
              deliver industrial-grade stability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                label: 'Interface Node',
                title: 'Frontend Delivery',
                desc: 'Utilizing Next.js 14 for lightning-fast Server-Side Rendering. Benefit: Maximum user retention through ultra-low latency navigation.',
                node: <Terminal size={20} className="text-blue-400" />,
              },
              {
                label: 'Execution Node',
                title: 'Backend Scalability',
                desc: 'Node.js and Express.js high-concurrency API layer. Benefit: Robust transaction processing capable of handling 1M+ active sessions.',
                node: <Server size={20} className="text-indigo-400" />,
              },
              {
                label: 'Persistence Node',
                title: 'Data Vault',
                desc: 'Non-relational MongoDB modeling for massive data agility. Benefit: Future-proof database structures that scale with business complexity.',
                node: <Database size={20} className="text-emerald-400" />,
              },
              {
                label: 'Security Node',
                title: 'Perimeter Defense',
                desc: 'AES-256 encryption mesh with real-time anomaly detection. Benefit: Absolute protection for user PII and internal business IP.',
                node: <ShieldCheck size={20} className="text-red-400" />,
              },
            ].map((node, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="p-10 rounded-[3rem] bg-[#050505] border border-white/5 hover:border-blue-500/30 transition-all flex flex-col h-full"
              >
                <div className="mb-12 p-4 bg-white/5 rounded-2xl w-fit">
                  {node.node}
                </div>
                <span className="text-[9px] font-mono font-bold uppercase tracking-[0.4em] text-blue-500 mb-4">
                  {node.label}
                </span>
                <h3 className="text-xl font-bold text-white mb-6 uppercase tracking-tight">
                  {node.title}
                </h3>
                <p className="text-slate-500 text-xs leading-relaxed font-light">
                  {node.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- LAYER 5: THE STRATEGIC COLLABORATION HUB --- */}
      <section className="py-32 px-6 bg-[#030303]">
        <div className="container mx-auto">
          <div className="rounded-[4rem] bg-gradient-to-br from-[#0A0A0A] to-transparent border border-white/5 p-12 md:p-24 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/5 blur-[120px] rounded-full" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-600/5 blur-[100px] rounded-full" />

            <div className="grid lg:grid-cols-2 gap-20 relative z-10">
              <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
                <h2 className="text-4xl md:text-7xl font-black tracking-tighter text-white mb-10 uppercase leading-[0.9]">
                  Why Choose <br />{' '}
                  <span className="italic text-blue-500">AlgoWave?</span>
                </h2>
                <p className="text-slate-400 text-lg md:text-xl font-light leading-relaxed mb-12 italic">
                  We don't just build apps; we architect competitive advantages.
                  Every protocol we deploy is engineered with a revenue-first
                  mindset.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link
                    href={'/contact'}
                    className="px-12 py-5 bg-white text-black rounded-2xl font-black text-xs uppercase tracking-[0.3em] hover:bg-blue-600 hover:text-white transition-all shadow-[0_15px_40px_rgba(255,255,255,0.1)] flex items-center gap-3"
                  >
                    <Rocket size={16} /> Initiate Strategy Node
                  </Link>
                  <Link href={'/portfolio'} className="px-12 py-5 bg-white/5 border border-white/10 text-white rounded-2xl font-black text-xs uppercase tracking-[0.3em] hover:bg-white/10 transition-all flex items-center gap-3">
                    <MousePointer2 size={16} /> View All Systems
                  </Link>
                </div>
              </motion.div>

              <div className="space-y-8">
                {[
                  {
                    t: 'Industrial Grade Architecture',
                    d: 'We bypass generic templates to write modular, high-throughput code that survives the test of extreme traffic.',
                  },
                  {
                    t: 'Strategic Technical Planning',
                    d: 'Get direct access to our system documentation and architectural decisions during every project cycle.',
                  },
                  {
                    t: 'Global Scalability Ready',
                    d: 'Whether your user base is 100 or 1,000,000, our systems are built to scale horizontally without friction.',
                  },
                  {
                    t: 'Privacy-First Engineering',
                    d: 'From Fintech to SaaS, we enforce AES-256 encryption and rigid data privacy protocols to protect your IP.',
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="group p-8 rounded-[2.5rem] bg-white/[0.02] border border-white/5 hover:border-blue-500/20 transition-all flex gap-6 items-start"
                  >
                    <CheckCircle2
                      className="text-blue-500 shrink-0 mt-1"
                      size={20}
                    />
                    <div>
                      <h4 className="text-lg font-bold text-white mb-2 uppercase tracking-tighter group-hover:text-blue-400 transition-colors">
                        {item.t}
                      </h4>
                      <p className="text-slate-500 text-xs leading-relaxed font-light">
                        {item.d}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Decorative Lateral Protocol */}
      <div className="absolute right-10 top-1/2 -translate-y-1/2 hidden 2xl:flex flex-col items-center gap-8 opacity-20">
        <div className="flex items-center gap-2 text-blue-500">
          <Code2 size={14} className="animate-pulse" />
          <span className="text-[8px] font-black tracking-[1.5em] text-slate-600 uppercase font-black">
            AlgoWave Intelligence Node // 2026
          </span>
        </div>
        <div className="w-[1px] h-32 bg-gradient-to-b from-blue-500 to-transparent" />
      </div>

      <div className="absolute inset-0 opacity-[0.01] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
    </main>
  );
}
