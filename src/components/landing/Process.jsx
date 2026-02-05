'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Search, PenTool, Code2, Rocket, ArrowRight } from 'lucide-react';

const steps = [
  {
    n: '01',
    title: 'Discovery & Strategy',
    desc: 'Deep diving into your business logic, user personas, and technical requirements to build a solid roadmap.',
    icon: <Search className="text-blue-400" size={20} />,
    tags: ['Market Analysis', 'SRS Documentation'],
  },
  {
    n: '02',
    title: 'Design Architecture',
    desc: 'Crafting high-fidelity UI/UX systems and wireframing the underlying database and API structures.',
    icon: <PenTool className="text-indigo-400" size={20} />,
    tags: ['Figma Prototyping', 'System Design'],
  },
  {
    n: '03',
    title: 'Agile Development',
    desc: 'Implementing clean, modular code using the MERN stack with strict adherence to industry best practices.',
    icon: <Code2 className="text-cyan-400" size={20} />,
    tags: ['Clean Code', 'CI/CD Pipeline'],
  },
  {
    n: '04',
    title: 'QA & Deployment',
    desc: 'Rigorous testing followed by cloud-optimized deployment on AWS/Vercel with 24/7 monitoring.',
    icon: <Rocket className="text-purple-400" size={20} />,
    tags: ['Unit Testing', 'Cloud Scaling'],
  },
];

export default function Process() {
  return (
    <section className="relative py-32 bg-[#050505] overflow-hidden border-y border-white/5">
      {/* Background Decorative Lines */}
      <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/10 to-transparent -translate-y-1/2 hidden md:block" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header Content */}
        <div className="text-center mb-24">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-[10px] tracking-[0.5em] text-blue-500 font-bold uppercase mb-4"
          >
            Our Workflow
          </motion.p>
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter">
            FROM IDEA TO <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-500">
              PRODUCTION
            </span>
          </h2>
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="group relative"
            >
              {/* Card Container */}
              <div className="relative p-8 rounded-[32px] border border-white/5 bg-[#0a0a0a]/50 backdrop-blur-xl group-hover:border-blue-500/30 transition-all duration-500 z-10 h-full flex flex-col">
                {/* Step Number & Icon */}
                <div className="flex justify-between items-start mb-10">
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/10 group-hover:bg-blue-500/10 group-hover:border-blue-500/20 transition-all">
                    {step.icon}
                  </div>
                  <span className="text-4xl font-black text-white/5 group-hover:text-blue-500/10 transition-colors">
                    {step.n}
                  </span>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-4 tracking-tight group-hover:text-blue-400 transition-colors">
                  {step.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-8 flex-grow">
                  {step.desc}
                </p>

                {/* Technical Tags */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {step.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-[9px] font-mono text-slate-500 bg-white/5 px-2 py-1 rounded-md border border-white/5 uppercase tracking-tighter"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Connector Arrow (Visible on Desktop) */}
              {index !== steps.length - 1 && (
                <div className="absolute top-1/2 -right-4 translate-x-1/2 -translate-y-1/2 hidden lg:block z-20 text-white/10 group-hover:text-blue-500 transition-colors">
                  <ArrowRight size={20} />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
