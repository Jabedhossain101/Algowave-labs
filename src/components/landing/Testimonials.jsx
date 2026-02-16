'use client';

import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
  Quote,
  Star,
  CheckCircle2,
  Activity,
  ShieldCheck,
  Cpu,
} from 'lucide-react';

const reviews = [
  {
    name: 'Rahat Ahmed',
    role: 'Founder, Zaffran',
    comment:
      'AlgoWave Labs turned our restaurant vision into a digital reality. The POS and inventory systems they built are flawless.',
    rating: 5,
    highlight: 'Operational Excellence',
  },
  {
    name: 'Alex Johnson',
    role: 'CEO, TechFlow',
    comment:
      'Their expertise in SaaS architecture is unmatched. We saw a 40% increase in system performance after migration.',
    rating: 5,
    highlight: 'Performance Boost',
  },
  {
    name: 'Sarah Chen',
    role: 'Product Lead, Nexus',
    comment:
      'The UI/UX design is not just beautiful; it is conversion-focused. Our user retention rate jumped significantly.',
    rating: 5,
    highlight: 'Modern Aesthetics',
  },
  {
    name: 'Md. Jabed',
    role: 'Director, CareerOstad',
    comment:
      'Highly reliable engineering partner. They handled our complex logic and AI matching with absolute precision.',
    rating: 5,
    highlight: 'Precision Engineering',
  },
];

export default function AdvancedTestimonials() {
  const containerRef = useRef(null);
  const [isDesktop, setIsDesktop] = useState(false);

  // Safety check for window to prevent Hydration Error
  useEffect(() => {
    const checkRes = () => setIsDesktop(window.innerWidth > 768);
    checkRes();
    window.addEventListener('resize', checkRes);
    return () => window.removeEventListener('resize', checkRes);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const yValue = useTransform(scrollYProgress, [0, 1], [-40, 40]);
  const opacityValue = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [0, 1, 1, 0],
  );

  return (
    <section
      ref={containerRef}
      className="relative py-20 md:py-32 bg-[#030303] overflow-hidden border-y border-white/5"
    >
      {/* --- BACKGROUND --- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Parallax Orbs - Hydration Safe */}
        <motion.div
          style={{
            y: isDesktop ? yValue : 0,
            opacity: opacityValue,
          }}
          className="absolute top-0 left-1/4 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-blue-600/[0.04] blur-[80px] md:blur-[150px] rounded-full"
        />

        <div
          className="absolute inset-0 opacity-[0.04] md:opacity-[0.06]"
          style={{
            backgroundImage: `linear-gradient(#3b82f6 1px, transparent 1px), linear-gradient(90deg, #3b82f6 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
            transform:
              'perspective(1200px) rotateX(25deg) scale(1.2) translateY(50px)',
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* --- HEADER --- */}
        <div className="mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-blue-500/10 rounded-lg border border-blue-500/20">
                <Activity size={14} className="text-blue-500" />
              </div>
              <span className="text-[9px] md:text-[10px] font-black tracking-[0.4em] md:tracking-[0.6em] uppercase text-blue-500/80">
                Verified Trust Matrix
              </span>
            </div>

            <h2 className="text-4xl md:text-7xl font-black text-white tracking-tighter mb-6 leading-tight uppercase">
              Engineered For <br />
              <span className="italic font-extralight text-slate-600">
                Success.
              </span>
            </h2>
          </motion.div>
        </div>

        {/* --- TESTIMONIALS GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-20px' }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ y: -5 }}
              className="group relative p-8 md:p-12 rounded-[2rem] md:rounded-[2.5rem] border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] transition-all duration-300 overflow-hidden"
              style={{ transform: 'translateZ(0)' }}
            >
              <div className="flex justify-between items-start mb-8 md:mb-10">
                <div className="p-3 md:p-4 bg-black border border-white/10 rounded-2xl group-hover:border-blue-500/30 transition-all">
                  <Quote
                    size={20}
                    className="text-blue-500"
                    fill="currentColor"
                  />
                </div>
                <div className="flex gap-1 px-3 py-1.5 bg-white/[0.03] rounded-full border border-white/5">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star
                      key={i}
                      size={10}
                      className="fill-blue-500 text-blue-500"
                    />
                  ))}
                </div>
              </div>

              <div className="mb-4 inline-flex items-center gap-2 text-blue-400 text-[8px] md:text-[9px] font-bold uppercase tracking-widest bg-blue-500/5 px-3 py-1 rounded-md border border-blue-500/10">
                <CheckCircle2 size={10} />
                {review.highlight}
              </div>

              <p className="text-slate-300 text-lg md:text-xl leading-relaxed mb-8 font-light italic tracking-tight group-hover:text-white transition-colors">
                "{review.comment}"
              </p>

              <div className="flex items-center gap-4 pt-6 md:pt-8 border-t border-white/5">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center font-bold text-blue-400">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <h4 className="text-base md:text-lg font-bold text-white group-hover:text-blue-400 transition-colors">
                    {review.name}
                  </h4>
                  <p className="text-[8px] md:text-[9px] font-black uppercase tracking-[0.2em] text-slate-500">
                    {review.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* --- BOTTOM METRICS PANEL --- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 md:mt-24 grid grid-cols-1 md:grid-cols-3 gap-8 p-8 md:p-14 border border-white/5 bg-white/[0.02] rounded-[2rem] md:rounded-[3rem]"
        >
          {[
            {
              label: 'System Deployments',
              val: '50+',
              icon: <Cpu size={16} className="text-blue-500" />,
            },
            {
              label: 'Partner Retention',
              val: '98%',
              icon: <ShieldCheck size={16} className="text-blue-500" />,
            },
            {
              label: 'Response Protocol',
              val: '24/7',
              icon: <Activity size={16} className="text-blue-500" />,
            },
          ].map((stat, i) => (
            <div
              key={i}
              className="flex flex-col items-center md:items-start group"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-black border border-white/5 rounded-lg group-hover:border-blue-500/30 transition-all">
                  {stat.icon}
                </div>
                <span className="text-[8px] md:text-[9px] font-black tracking-widest uppercase text-slate-500">
                  {stat.label}
                </span>
              </div>
              <span className="text-4xl md:text-5xl font-mono text-white/90 group-hover:text-blue-400 transition-colors">
                {stat.val}
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="absolute inset-0 opacity-[0.01] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
    </section>
  );
}
