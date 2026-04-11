'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  ArrowUpRight,
  Globe,
  Layout,
  Layers,
  Activity,
  ShoppingBag,
  Briefcase,
  Users,
  Heart,
} from 'lucide-react';

export const allProjects = [
  {
    id: 'looklify',
    title: 'Looklify - Skincare E-Commerce',
    category: 'Full Stack (MERN)',
    description:
      'A premium beauty & skincare platform with automated product filtering, secure EPS payment gateway integration, and user-centric dashboard.',
    icon: <ShoppingBag size={20} className="text-pink-400" />,
    tags: ['Next.js', 'MongoDB', 'EPS Gateway', 'Tailwind'],
    gradient: 'from-pink-600/30 via-pink-500/5 to-transparent',
    status: 'Operational',
    liveUrl: 'https://looklifybd.com',
    // Realistic cosmetics and skincare arrangement
    imageUrl:
      'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'career-ostad',
    title: 'CareerOstad - AI Job Portal',
    category: 'AI & EdTech',
    description:
      'Intelligent job matching platform featuring AI-powered career guidance, skill gap analysis, and real-time recruitment synchronization.',
    icon: <Briefcase size={20} className="text-blue-400" />,
    tags: ['Next.js', 'React', 'JavaScript', 'Node.js'],
    gradient: 'from-blue-600/30 via-blue-500/5 to-transparent',
    status: 'Live System',
    liveUrl: 'https://career-ostad.vercel.app',
    // Professional workspace with laptop (EdTech vibe)
    imageUrl:
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'bogurabashi',
    title: 'Bogurabashi Web - Service Hub',
    category: 'Community Platform',
    description:
      'A comprehensive local service directory and blood donation network designed to facilitate digital accessibility for Bogura citizens.',
    icon: <Users size={20} className="text-emerald-400" />,
    tags: ['React', 'Framer Motion', 'JavaScript', 'Tailwind'],
    gradient: 'from-emerald-600/30 via-emerald-500/5 to-transparent',
    status: 'Deployed',
    liveUrl: 'https://bogurabashi.com',
    imageUrl: 'https://i.ibb.co.com/FtZk9yg/image.png',
  },
  {
    id: 'apporbit',
    title: 'AppOrbit - SaaS Starter Kit',
    category: 'Digital Marketplace',
    description:
      'A powerful, customizable SaaS engine built with MERN stack for rapid product deployment and digital asset management.',
    icon: <Layout size={20} className="text-indigo-400" />,
    tags: ['React', 'MongoDB', 'Node.js', 'Tailwind'],
    gradient: 'from-indigo-600/30 via-indigo-500/5 to-transparent',
    status: 'Commercial',
    liveUrl: 'https://app-orbit12.web.app',
    // Enterprise software / dashboard screen visualization
    imageUrl:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'matrimony-app',
    title: 'Matrimony App',
    category: 'Social Platform',
    description:
      'Secure biodata management platform with premium membership tiers and advanced matchmaking algorithms for matrimony services.',
    icon: <Heart size={20} className="text-red-400" />,
    tags: ['React', 'Node.js', 'MongoDB', 'Express'],
    gradient: 'from-red-600/30 via-red-500/5 to-transparent',
    status: 'Live Protocol',
    liveUrl: 'https://metrimony-auth.web.app',
    // High-quality wedding aesthetic (rings, floral, couple)
    imageUrl:
      'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'plant-care',
    title: 'Plant Care App',
    category: 'Internet of Plants',
    description:
      'An automated botanical management system with watering reminders, health logging, and comprehensive plant care documentation.',
    icon: <Activity size={20} className="text-green-400" />,
    tags: ['React', 'Express', 'MongoDB', 'Auth'],
    gradient: 'from-green-600/30 via-green-500/5 to-transparent',
    status: 'Active Node',
    liveUrl: 'https://mango-store-app.web.app',
    // Indoor plants, systematic greenhouse vibe
    imageUrl:
      'https://images.unsplash.com/photo-1485955900006-10f4d324d411?q=80&w=800&auto=format&fit=crop',
  },
];

const AdvancedPortfolio = () => {
  return (
    <section className="relative py-20 md:py-32 bg-[#030303] overflow-hidden border-y border-white/5 selection:bg-blue-500/30">
      {/* --- BACKGROUND DEPTH --- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[800px] h-[300px] md:h-[800px] bg-blue-600/[0.05] blur-[100px] md:blur-[160px] rounded-full opacity-60" />

        <div
          className="absolute inset-0 opacity-[0.05] md:opacity-[0.08]"
          style={{
            backgroundImage: `linear-gradient(#3b82f6 1px, transparent 1px), linear-gradient(90deg, #3b82f6 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
            transform:
              'perspective(1200px) rotateX(35deg) translateY(-50px) scale(1.5)',
            willChange: 'transform',
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* --- HEADER --- */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 md:mb-24 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-blue-500/10 rounded-lg border border-blue-500/20">
                <Activity
                  size={14}
                  className="text-blue-500 md:animate-pulse"
                />
              </div>
              <span className="text-[9px] md:text-[10px] font-black tracking-[0.4em] md:tracking-[0.6em] uppercase text-blue-500/80">
                Project Repository v2.0
              </span>
            </div>

            <h2 className="text-4xl md:text-7xl font-black text-white tracking-tighter mb-6 leading-tight uppercase selection:bg-blue-600">
              Crafting <br />
              <span className="italic font-extralight text-slate-600">
                Digital
              </span>{' '}
              Legacies.
            </h2>
          </motion.div>

          <motion.a
            href="/portfolio"
            whileTap={{ scale: 0.95 }}
            className="group flex items-center gap-4 px-6 py-3 md:px-8 md:py-4 bg-white/[0.02] border border-white/10 rounded-full transition-all hover:bg-white/[0.05] hover:border-white/20"
          >
            <span className="text-[9px] md:text-[10px] font-black tracking-widest text-white uppercase">
              Full Archive
            </span>
            <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-blue-600 flex items-center justify-center text-white md:group-hover:rotate-45 transition-transform">
              <ArrowUpRight size={14} />
            </div>
          </motion.a>
        </div>

        {/* --- PROJECTS GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
          {allProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-20px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, borderColor: 'rgba(255,255,255,0.2)' }}
              className="group relative flex flex-col h-full bg-[#0A0A0A] border border-white/10 rounded-[2rem] md:rounded-[2.5rem] p-5 transition-all duration-300 overflow-hidden"
              style={{ transform: 'translateZ(0)' }}
            >
              {/* --- IMAGE PREVIEW SLOT --- */}
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="relative aspect-[16/10] rounded-[1.5rem] md:rounded-[1.8rem] overflow-hidden bg-[#080808] mb-6 md:mb-8 border border-white/5 cursor-pointer block"
              >
                {/* Background Unsplash Image */}
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 md:group-hover:scale-110"
                />

                {/* Dark & Gradient Overlay for readability */}
                <div
                  className={`absolute inset-0 bg-black/50 transition-opacity md:group-hover:opacity-60`}
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.gradient} transition-opacity md:group-hover:opacity-90`}
                />

                {/* Visual Feedback on Link Hover */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 md:group-hover:opacity-100 transition-all backdrop-blur-sm bg-black/30">
                  <div className="p-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20 shadow-xl">
                    <ArrowUpRight size={20} className="text-white" />
                  </div>
                </div>

                {/* Status Badge */}
                <div className="absolute bottom-4 left-4 flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/10 z-10 shadow-lg">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500 md:animate-pulse" />
                  <span className="text-[8px] font-bold tracking-widest uppercase text-white/90">
                    {project.status}
                  </span>
                </div>
              </a>

              {/* Content */}
              <div className="flex flex-col flex-grow px-2">
                <div className="flex items-center gap-3 mb-3 md:mb-4">
                  <div className="text-slate-500 transition-colors md:group-hover:text-blue-400">
                    {project.icon}
                  </div>
                  <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-slate-500">
                    {project.category}
                  </span>
                </div>

                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl md:text-2xl font-bold text-white mb-3 tracking-tight transition-colors md:hover:text-blue-400 uppercase tracking-tight"
                >
                  {project.title}
                </a>

                <p className="text-slate-400 text-xs md:text-sm leading-relaxed mb-6 md:mb-8 flex-grow font-light selection:bg-blue-500/20">
                  {project.description}
                </p>

                {/* Tech Matrix Tags */}
                <div className="flex flex-wrap gap-2 pt-5 md:pt-6 border-t border-white/[0.05]">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 text-[7px] md:text-[8px] font-mono font-bold tracking-tighter rounded-full bg-white/[0.03] text-slate-500 border border-white/5 transition-colors md:group-hover:text-blue-300 md:group-hover:border-blue-500/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Decorative Corner Glow */}
              <div className="absolute -bottom-10 -right-10 w-24 h-24 bg-blue-500/5 blur-[30px] rounded-full hidden md:block" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdvancedPortfolio;
