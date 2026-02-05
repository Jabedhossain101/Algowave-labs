'use client';

import { motion } from 'framer-motion';
import {
  ShieldCheck,
  Code2,
  Users2,
  Rocket,
  ArrowRight,
  Activity,
} from 'lucide-react';
import SectionWrapper from '../shared/SectionWrapper';
import AnimatedHeading from '../shared/AnimatedHeading';
import { fadeUp } from '@/lib/animations';

const highlights = [
  {
    title: 'Experienced Engineering Team',
    desc: 'A group of elite developers specializing in high-performance MERN & Next.js ecosystems.',
    icon: <Users2 className="text-blue-400" />,
    stat: '100% Senior Level',
  },
  {
    title: 'Clean & Maintainable Codebase',
    desc: 'We follow strict SOLID principles and clean architecture to ensure long-term scalability.',
    icon: <Code2 className="text-cyan-400" />,
    stat: 'Zero Debt',
  },
  {
    title: 'Client-First Development',
    desc: 'Transparent communication and agile workflows tailored to your specific business goals.',
    icon: <ShieldCheck className="text-indigo-400" />,
    stat: 'Highly Collaborative',
  },
  {
    title: 'Modern & Scalable Architecture',
    desc: 'Cloud-optimized infrastructures designed to handle millions of requests with zero downtime.',
    icon: <Rocket className="text-purple-400" />,
    stat: 'Enterprise Grade',
  },
];

const WhyUsSection = () => {
  return (
    <SectionWrapper className="bg-[#050505] relative overflow-hidden">
      {/* Decorative Cyber Grid Background */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />

      <div className="relative z-10">
        <div className="flex flex-col items-center mb-20">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/20 bg-blue-500/5 mb-4"
          >
            <Activity size={12} className="text-blue-500 animate-pulse" />
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-blue-400">
              The AlgoWave Advantage
            </span>
          </motion.div>

          <AnimatedHeading
            title="WHY CHOOSE US?"
            subtitle="We don’t just write code — we engineer long-term digital legacies."
          />
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {highlights.map((item, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              whileHover={{ scale: 1.02 }}
              className="group relative p-8 rounded-[32px] border border-white/5 bg-[#0a0a0a] hover:border-blue-500/30 transition-all duration-500 overflow-hidden"
            >
              {/* Subtle Gradient Glow on Hover */}
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="relative z-10 flex gap-6 items-start">
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 group-hover:bg-blue-500/10 group-hover:border-blue-500/20 transition-all">
                  {item.icon}
                </div>

                <div className="flex-grow">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors tracking-tight">
                      {item.title}
                    </h3>
                    <span className="text-[9px] font-mono font-bold text-slate-600 group-hover:text-blue-500/60 uppercase tracking-widest border border-white/5 px-2 py-1 rounded">
                      {item.stat}
                    </span>
                  </div>

                  <p className="text-slate-400 text-sm leading-relaxed mb-4">
                    {item.desc}
                  </p>

                  <div className="flex items-center gap-2 text-[10px] font-bold text-slate-500 group-hover:text-white transition-all opacity-0 group-hover:opacity-100 translate-x-[-10px] group-hover:translate-x-0">
                    LEARN OUR STANDARDS <ArrowRight size={12} />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default WhyUsSection;
