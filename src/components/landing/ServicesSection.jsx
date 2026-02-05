'use client';

import { motion } from 'framer-motion';
import {
  Code2,
  Server,
  LayoutTemplate,
  ArrowUpRight,
  Cpu,
  Zap,
  Database,
} from 'lucide-react';
import SectionWrapper from '../shared/SectionWrapper';
import AnimatedHeading from '../shared/AnimatedHeading';
import { fadeUp } from '@/lib/animations';

const services = [
  {
    title: 'Web Development',
    desc: 'Building mission-critical web applications with Next.js, prioritizing speed, SEO, and flawless user journeys.',
    icon: <Code2 className="text-blue-400" />,
    features: ['PWA Ready', 'Edge Computing', 'SEO Optimized'],
    bgGradient: 'from-blue-500/10 via-transparent to-transparent',
  },
  {
    title: 'Backend Engineering',
    desc: 'Robust, scalable server architectures and secure API ecosystems designed to handle high-traffic loads.',
    icon: <Server className="text-indigo-400" />,
    features: ['Microservices', 'PostgreSQL/NoSQL', 'Real-time Data'],
    bgGradient: 'from-indigo-500/10 via-transparent to-transparent',
  },
  {
    title: 'UI/UX Architecture',
    desc: 'Data-driven design systems that bridge the gap between complex logic and human-centric interfaces.',
    icon: <LayoutTemplate className="text-cyan-400" />,
    features: ['Design Systems', 'Interactive Prototyping', 'User Research'],
    bgGradient: 'from-cyan-500/10 via-transparent to-transparent',
  },
];

const ServicesSection = () => {
  return (
    <SectionWrapper className="bg-[#050505] relative overflow-hidden">
      {/* Background Subtle Elements */}
      <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-blue-600/5 blur-[100px] rounded-full -z-10" />

      <div className="relative z-10">
        <div className="flex flex-col items-center md:items-start text-center md:text-left mb-16">
          <AnimatedHeading
            title="CORE CAPABILITIES"
            subtitle="We don't just build apps; we engineer high-performance digital ecosystems for the future."
          />
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              whileHover={{ y: -8 }}
              className={`group relative p-8 rounded-[32px] border border-white/5 bg-[#0a0a0a] hover:border-blue-500/30 transition-all duration-500 overflow-hidden`}
            >
              {/* Dynamic Gradient Background */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${service.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />

              <div className="relative z-10 flex flex-col h-full">
                {/* Icon & Action Button */}
                <div className="flex justify-between items-start mb-8">
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/10 group-hover:scale-110 group-hover:bg-blue-500/10 group-hover:border-blue-500/20 transition-all duration-500">
                    {service.icon}
                  </div>
                  <motion.div className="opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowUpRight
                      className="text-slate-500 group-hover:text-blue-400"
                      size={20}
                    />
                  </motion.div>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">
                  {service.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-8 flex-grow">
                  {service.desc}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {service.features.map((feature, idx) => (
                    <span
                      key={idx}
                      className="text-[10px] font-mono font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-white/5 text-slate-500 border border-white/5 group-hover:border-blue-500/10 group-hover:text-blue-400/80 transition-colors"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Decorative Line */}
              <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-blue-500 to-indigo-500 group-hover:w-full transition-all duration-700" />
            </motion.div>
          ))}
        </div>

        {/* Bottom Industry Stats */}
        <div className="mt-20 py-8 border-t border-white/5 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { label: 'Uptime', val: '99.9%', icon: <Zap size={14} /> },
            { label: 'Execution', val: 'Sub-100ms', icon: <Cpu size={14} /> },
            {
              label: 'Architecture',
              val: 'Clean Code',
              icon: <Database size={14} />,
            },
            { label: 'Support', val: '24/7/365', icon: <Server size={14} /> },
          ].map((stat, i) => (
            <div
              key={i}
              className="flex flex-col items-center md:items-start gap-1"
            >
              <div className="flex items-center gap-2 text-slate-500">
                {stat.icon}
                <span className="text-[10px] uppercase font-bold tracking-widest">
                  {stat.label}
                </span>
              </div>
              <span className="text-lg font-mono text-white/80">
                {stat.val}
              </span>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default ServicesSection;
