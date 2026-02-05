'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Star, CheckCircle2, MessageSquare } from 'lucide-react';

const reviews = [
  {
    name: 'Rahat Ahmed',
    role: 'Founder, Zaffran',
    comment:
      'AlgoWave Labs turned our restaurant vision into a digital reality. The POS and inventory systems they built are flawless. Our operations are now 100% automated.',
    rating: 5,
    highlight: 'Operational Excellence',
  },
  {
    name: 'Alex Johnson',
    role: 'CEO, TechFlow',
    comment:
      'Their expertise in SaaS architecture is unmatched. We saw a 40% increase in system performance after migrating to their optimized engine.',
    rating: 5,
    highlight: 'Performance Boost',
  },
  {
    name: 'Sarah Chen',
    role: 'Product Lead, Nexus',
    comment:
      'The UI/UX design is not just beautiful; it is conversion-focused. Our user retention rate jumped significantly within the first month of launch.',
    rating: 5,
    highlight: 'Modern Aesthetics',
  },
  {
    name: 'Md. Jabed',
    role: 'Director, CareerOstad',
    comment:
      'Highly reliable engineering partner. They handled our complex recruitment logic and AI matching with absolute precision and security.',
    rating: 5,
    highlight: 'Precision Engineering',
  },
];

export default function Testimonials() {
  return (
    <section className="relative py-32 bg-[#050505] overflow-hidden border-y border-white/5">
      {/* Background Ambience */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-600/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-indigo-600/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header Content */}
        <div className="flex flex-col items-center text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/20 bg-blue-500/5 mb-6"
          >
            <MessageSquare size={14} className="text-blue-400" />
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-blue-400">
              Trusted Voices
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-6">
            ENGINEERED FOR <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">
              SUCCESS
            </span>
          </h2>
          <p className="max-w-2xl text-slate-500 text-lg">
            We measure our success by the growth and reliability of the systems
            we build for our global partners.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group relative p-8 md:p-10 rounded-[40px] border border-white/5 bg-[#0a0a0a] transition-all duration-500 hover:border-blue-500/20"
            >
              {/* Top Row: Quote Icon & Highlight */}
              <div className="flex justify-between items-start mb-8">
                <div className="p-3 bg-blue-500/10 rounded-2xl">
                  <Quote
                    size={24}
                    className="text-blue-500"
                    fill="currentColor"
                  />
                </div>
                <div className="flex gap-1">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star
                      key={i}
                      size={14}
                      className="fill-blue-500 text-blue-500"
                    />
                  ))}
                </div>
              </div>

              {/* Highlight Badge */}
              <div className="mb-4 inline-flex items-center gap-2 text-blue-400/80 text-[10px] font-mono font-bold uppercase tracking-widest">
                <CheckCircle2 size={12} />
                {review.highlight}
              </div>

              {/* Comment */}
              <p className="text-slate-300 text-lg leading-relaxed mb-10 italic">
                "{review.comment}"
              </p>

              {/* Author Info */}
              <div className="flex items-center gap-4 pt-8 border-t border-white/5">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500/20 to-indigo-500/20 border border-white/10 flex items-center justify-center font-bold text-blue-400">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <h4 className="text-white font-bold tracking-tight group-hover:text-blue-400 transition-colors">
                    {review.name}
                  </h4>
                  <p className="text-slate-500 text-xs uppercase tracking-widest font-medium">
                    {review.role}
                  </p>
                </div>
              </div>

              {/* Animated Accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 blur-[50px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>

        {/* Global Impact Bar */}
        <div className="mt-20 py-10 border-t border-white/5 flex flex-wrap justify-around gap-10 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
          <div className="text-center">
            <p className="text-2xl font-black text-white">50+</p>
            <p className="text-[10px] tracking-widest uppercase text-slate-500 font-bold">
              Projects Delivered
            </p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-black text-white">98%</p>
            <p className="text-[10px] tracking-widest uppercase text-slate-500 font-bold">
              Client Retention
            </p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-black text-white">24/7</p>
            <p className="text-[10px] tracking-widest uppercase text-slate-500 font-bold">
              System Support
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
