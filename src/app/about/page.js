'use client';
import React from 'react';
import { motion } from 'framer-motion';
import {
  Target,
  Users2,
  ShieldCheck,
  Zap,
  Code2,
  Activity,
  Cpu,
} from 'lucide-react';

const values = [
  {
    title: 'Engineering Excellence',
    desc: 'We design and develop scalable, maintainable systems following industry best practices and proven architectural patterns.',
    icon: <Code2 className="text-blue-400" />,
  },
  {
    title: 'Reliability & Security',
    desc: 'Our solutions are built with a strong focus on performance, stability, and enterprise-grade security standards.',
    icon: <ShieldCheck className="text-indigo-400" />,
  },
  {
    title: 'Business-Driven Innovation',
    desc: 'We align technology with business goals to deliver impactful and measurable results for our clients.',
    icon: <Zap className="text-cyan-400" />,
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white overflow-hidden">
      {/* HERO */}
      <section className="relative pt-40 pb-24 px-6 border-b border-white/5">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-[-10%] left-[-10%] w-[45%] h-[45%] bg-blue-600/10 blur-[130px] rounded-full" />
          <div className="absolute bottom-[10%] right-[-5%] w-[35%] h-[35%] bg-indigo-600/10 blur-[110px] rounded-full" />
        </div>

        <div className="container mx-auto relative z-10 text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/20 bg-blue-500/5 mb-8">
            <Target size={14} className="text-blue-400" />
            <span className="text-[10px] uppercase tracking-[0.4em] text-blue-400">
              About Us
            </span>
          </div>

          <h1 className="text-5xl md:text-8xl font-black mb-8">
            ENGINEERING <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">
              DIGITAL SOLUTIONS
            </span>
          </h1>

          <p className="text-slate-400 max-w-2xl text-lg">
            AlgoWave Labs builds scalable, high-performance software systems
            designed to solve real-world business problems and drive measurable
            impact.
          </p>
        </div>
      </section>

      {/* TIMELINE */}
      {/* WHAT WE DO / CAPABILITIES */}
      <section className="py-32 px-6 border-t border-white/5">
        <div className="container mx-auto">
          {/* Header */}
          <div className="text-center mb-24">
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter mb-4 uppercase">
              What We Do
            </h2>
            <p className="text-slate-500 text-sm tracking-[0.2em] font-bold uppercase">
              Our core capabilities
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Web Application Development',
                desc: 'We build scalable and high-performance web applications using modern technologies like React, Next.js, and Node.js.',
              },
              {
                title: 'Backend & API Systems',
                desc: 'Robust backend architectures with secure APIs, database design, and optimized server-side logic.',
              },
              {
                title: 'UI/UX Engineering',
                desc: 'Clean, intuitive, and user-focused interfaces designed to enhance user experience and engagement.',
              },
              {
                title: 'Cloud & Deployment',
                desc: 'Deploying and managing applications on cloud platforms with scalability and reliability in mind.',
              },
              {
                title: 'Performance Optimization',
                desc: 'Improving speed, scalability, and efficiency of existing systems to ensure smooth user experience.',
              },
              {
                title: 'Custom Software Solutions',
                desc: 'Tailored software systems designed to meet unique business needs and workflows.',
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group p-10 rounded-[32px] border border-white/5 bg-[#0a0a0a] hover:border-blue-500/30 transition-all duration-500"
              >
                <h3 className="text-xl font-bold text-white mb-4 tracking-tight group-hover:text-blue-400 transition-colors">
                  {item.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="py-32 px-6">
        <div className="container mx-auto grid md:grid-cols-3 gap-8">
          {values.map((v, i) => (
            <div key={i} className="p-8 border border-white/5 rounded-3xl">
              {v.icon}
              <h3 className="text-xl font-bold mt-4">{v.title}</h3>
              <p className="text-slate-400 text-sm mt-2">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TEAM (UPDATED) */}
      <section className="py-32 px-6 bg-[#030303] border-t border-white/5">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-6">
            <h2 className="text-5xl font-bold uppercase">
              Expert Team of <span className="text-white/30">Engineers</span>
            </h2>

            <p className="text-slate-500 max-w-sm text-sm">
              A team of skilled engineers working across frontend, backend, and
              cloud systems to deliver production-ready solutions.
            </p>
          </div>

          {/* Tech badges */}
          <div className="flex flex-wrap gap-3 mb-16">
            {['React', 'Next.js', 'Node.js', 'MongoDB', 'AWS', 'Docker'].map(
              (t, i) => (
                <span
                  key={i}
                  className="px-4 py-2 text-xs border border-white/10 rounded-full text-slate-400"
                >
                  {t}
                </span>
              ),
            )}
          </div>

          {/* Team cards */}
          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                name: 'MD. Jabed Hossain',
                role: 'Full Stack Engineer',
                img: 'https://i.ibb.co.com/twT6FyMG/Screenshot-2025-08-08-012445-removebg-preview-1.png',
              },
              {
                name: 'Tazminur Rahman Tanim',
                role: 'Backend Engineer',
                img: 'https://i.ibb.co.com/qYQVSpKb/image.png',
              },
              {
                name: 'Md. Adnan Wasti',
                role: 'API Engineer',
                img: 'https://i.ibb.co.com/xKZ1Sv6y/image.png',
              },
              {
                name: 'Naeem Haider',
                role: 'DevOps Engineer',
                img: 'https://i.ibb.co.com/G4Nds0qf/image.png',
              },
            ].map((m, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                className="p-6 border border-white/5 rounded-3xl text-center"
              >
                <img
                  src={m.img}
                  className="w-24 h-24 rounded-full mx-auto mb-4"
                />
                <h3 className="font-bold">{m.name}</h3>
                <p className="text-xs text-slate-500">{m.role}</p>
              </motion.div>
            ))}
          </div>

          {/* bottom info */}
          <div className="mt-16 flex justify-center gap-10 opacity-30">
            <div className="flex items-center gap-2">
              <Cpu size={14} />
              <span className="text-xs">TEAM_EFFICIENCY: 100%</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck size={14} />
              <span className="text-xs">SECURE_WORKFLOW</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-6 border-t border-white/5 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Let’s Build Something
            <span className="block text-blue-400">Great Together</span>
          </h2>

          <p className="text-slate-400 mb-10">
            Have an idea or project? Our team is ready to help you design,
            develop, and scale your product.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="/contact"
              className="px-8 py-4 bg-blue-600 rounded-xl text-sm font-bold"
            >
              Hire Us
            </a>
            <a
              href="/contact"
              className="px-8 py-4 border border-white/10 rounded-xl text-sm"
            >
              Contact
            </a>
          </div>
        </div>
      </section>

      {/* Side Indicator */}
      <div className="absolute right-10 top-1/2 hidden 2xl:flex flex-col items-center gap-6 opacity-20">
        <Activity size={14} className="animate-pulse text-blue-400" />
        <div className="w-[1px] h-24 bg-gradient-to-b from-blue-500 to-transparent" />
      </div>
    </main>
  );
}
