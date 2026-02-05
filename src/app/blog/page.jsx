'use client';
import React from 'react';
import { motion } from 'framer-motion';
import {
  Search,
  ArrowUpRight,
  Calendar,
  User,
  Clock,
  Hash,
  ChevronRight,
  Filter,
} from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    title: 'Scaling Next.js for Enterprise SaaS Infrastructure',
    excerpt:
      'Explore how we optimized server-side rendering and edge caching to handle 1M+ concurrent users at AlgoWave Labs.',
    date: 'Feb 05, 2026',
    author: 'Jabed Hossain',
    readTime: '8 min read',
    tag: 'Engineering',
    image: 'from-blue-600/20 to-indigo-900/20',
  },
  {
    id: 2,
    title: 'The Shift to AI-Native ERP Architectures',
    excerpt:
      'Traditional ERPs are dead. Learn why integrated AI logic is the new backbone for modern business automation.',
    date: 'Jan 28, 2026',
    author: 'Sarah Chen',
    readTime: '12 min read',
    tag: 'AI & Logic',
    image: 'from-purple-600/20 to-blue-900/20',
  },
  {
    id: 3,
    title: 'UI/UX Systems: Bridging Human Logic and Code',
    excerpt:
      'How design systems at AlgoWave Labs ensure seamless transitions from Figma prototypes to production-ready React components.',
    date: 'Jan 20, 2026',
    author: 'Alex Johnson',
    readTime: '6 min read',
    tag: 'Design System',
    image: 'from-cyan-600/20 to-teal-900/20',
  },
];

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white overflow-hidden selection:bg-blue-500/30">
      {/* --- HERO SECTION: BLOG ARCHITECTURE --- */}
      <section className="relative pt-40 pb-20 px-6 border-b border-white/5">
        {/* Dynamic Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/10 blur-[120px] rounded-full" />
          <div className="absolute bottom-[10%] right-[-5%] w-[30%] h-[30%] bg-indigo-600/10 blur-[100px] rounded-full" />
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

        <div className="container mx-auto relative z-10 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/20 bg-blue-500/5 mb-8"
          >
            <div className="h-2 w-2 rounded-full bg-blue-500 animate-pulse" />
            <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-blue-400">
              v3.0 Insights Hub
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-8xl font-black tracking-tighter leading-none mb-8"
          >
            ENGINEERING <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-500">
              KNOWLEDGE
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col md:flex-row md:items-center justify-between gap-8 mt-12"
          >
            <p className="max-w-xl text-slate-400 text-lg md:text-xl font-light">
              Deep dives into{' '}
              <span className="text-white">software architecture</span>,{' '}
              <span className="text-white">AI integration</span>, and the future
              of industrial-grade web applications.
            </p>

            {/* Search Bar */}
            <div className="relative group w-full md:w-80">
              <Search
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-blue-400 transition-colors"
                size={18}
              />
              <input
                type="text"
                placeholder="Search archive..."
                className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-sm focus:outline-none focus:border-blue-500/50 transition-all backdrop-blur-md"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- BLOG GRID SECTION --- */}
      <section className="py-24 px-6 relative">
        <div className="container mx-auto">
          {/* Categories Filter */}
          <div className="flex items-center gap-4 mb-16 overflow-x-auto pb-4 no-scrollbar">
            <div className="p-3 bg-blue-600/10 rounded-xl text-blue-400 border border-blue-500/20">
              <Filter size={18} />
            </div>
            {[
              'All Insights',
              'Architecture',
              'SaaS',
              'AI Research',
              'Design Systems',
              'Performance',
            ].map((cat, idx) => (
              <button
                key={idx}
                className="whitespace-nowrap px-6 py-2.5 rounded-full border border-white/5 bg-white/[0.02] text-xs font-bold tracking-widest uppercase text-slate-500 hover:text-white hover:border-white/20 transition-all"
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Posts Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, idx) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group cursor-pointer"
              >
                {/* Visual Header */}
                <div className="relative aspect-[16/10] rounded-[32px] overflow-hidden border border-white/5 bg-[#0a0a0a] mb-8">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${post.image} opacity-60 group-hover:scale-110 transition-transform duration-700`}
                  />

                  <div className="absolute top-6 left-6 flex gap-2">
                    <span className="px-3 py-1 bg-black/40 backdrop-blur-md border border-white/10 rounded-full text-[10px] font-bold tracking-widest uppercase text-blue-400">
                      {post.tag}
                    </span>
                  </div>

                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 backdrop-blur-sm bg-black/20">
                    <div className="p-4 bg-white/10 border border-white/20 rounded-full text-white">
                      <ArrowUpRight size={24} />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="px-2">
                  <div className="flex items-center gap-4 text-slate-500 text-[10px] font-mono font-bold uppercase tracking-widest mb-4">
                    <span className="flex items-center gap-1.5">
                      <Calendar size={12} /> {post.date}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock size={12} /> {post.readTime}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-4 leading-tight group-hover:text-blue-400 transition-colors tracking-tight">
                    {post.title}
                  </h3>

                  <p className="text-slate-400 text-sm leading-relaxed mb-8 line-clamp-2">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between pt-6 border-t border-white/5">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-blue-500/20 border border-blue-500/30 flex items-center justify-center text-[10px] text-blue-400 font-bold">
                        {post.author.charAt(0)}
                      </div>
                      <span className="text-xs font-bold text-slate-300 uppercase tracking-tighter">
                        {post.author}
                      </span>
                    </div>
                    <div className="flex items-center gap-1 text-[10px] font-bold text-blue-500 tracking-widest uppercase opacity-0 group-hover:opacity-100 translate-x-[-10px] group-hover:translate-x-0 transition-all">
                      Read Insight <ChevronRight size={12} />
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Newsletter / CTA inside Blog */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="mt-32 p-12 rounded-[48px] bg-[#0a0a0a] border border-white/5 relative overflow-hidden text-center"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/5 blur-[100px] rounded-full" />
            <Hash
              className="absolute top-10 left-10 text-white/5 rotate-12"
              size={80}
            />

            <h2 className="text-3xl font-black mb-4 relative z-10">
              NEVER MISS AN UPDATE.
            </h2>
            <p className="text-slate-500 mb-8 max-w-lg mx-auto relative z-10 uppercase text-[10px] tracking-[0.3em] font-bold">
              Get our latest engineering insights delivered directly to your
              inbox.
            </p>

            <div className="flex flex-col md:flex-row gap-4 max-w-md mx-auto relative z-10">
              <input
                type="email"
                placeholder="name@company.com"
                className="flex-grow bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-sm focus:outline-none focus:border-blue-500/50"
              />
              <button className="px-8 py-4 bg-blue-600 text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-blue-700 transition-all">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Decorative Side Element */}
      <div className="absolute left-10 bottom-40 hidden 2xl:flex flex-col items-center gap-8 opacity-20">
        <div className="w-[1px] h-32 bg-gradient-to-t from-blue-500 to-transparent" />
        <span className="[writing-mode:vertical-lr] text-[8px] tracking-[1.2em] text-slate-500 uppercase font-black">
          AlgoWave Technical Journal // 2026
        </span>
      </div>
    </main>
  );
}
