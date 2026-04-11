'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
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
  Eye,
  ExternalLink,
} from 'lucide-react';

export const allProjects = [
  {
    id: 'looklify',
    title: 'Looklify - Skincare E-Commerce',
    category: 'Full Stack (MERN)',
    description:
      'A premium beauty & skincare platform with automated product filtering and secure EPS payment gateway.',
    fullDescription:
      'Looklify is a mission-critical e-commerce engine designed for high-end beauty brands. It addresses the complexity of skincare product variations through a sophisticated attribute-matching algorithm.',
    icon: <ShoppingBag size={20} className="text-pink-400" />,
    tags: ['Next.js', 'MongoDB', 'EPS Gateway', 'Tailwind'],
    gradient: 'from-pink-600/30 via-pink-500/5 to-transparent',
    status: 'Operational',
    liveUrl: 'https://looklifybd.com',
    imageUrl:
      'https://images.unsplash.com/photo-1556229010-6c3f2c9ca5f8?q=80&w=800&auto=format&fit=crop',
    architecture:
      'Micro-frontend architecture with a centralized MongoDB Atlas cluster.',
    features: [
      'Attribute-Based Filtering',
      'EPS Secure Vault',
      'Multi-Step Checkout',
    ],
  },
  {
    id: 'career-ostad',
    title: 'CareerOstad - AI Job Portal',
    category: 'AI & EdTech',
    description:
      'Intelligent job matching platform featuring AI-powered career guidance and recruitment sync.',
    fullDescription:
      'CareerOstad transforms the traditional recruitment funnel into an intelligent ecosystem using NLP for resume semantics analysis.',
    icon: <Briefcase size={20} className="text-blue-400" />,
    tags: ['Next.js', 'React', 'JavaScript', 'Node.js'],
    gradient: 'from-blue-600/30 via-blue-500/5 to-transparent',
    status: 'Live System',
    liveUrl: 'https://career-ostad.vercel.app',
    imageUrl:
      'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=800&auto=format&fit=crop',
    architecture:
      'Event-driven architecture using Node.js streams for real-time processing.',
    features: [
      'AI Compatibility Scoring',
      'NLP Resume Parser',
      'Analytics Dashboard',
    ],
  },
  {
    id: 'bogurabashi',
    title: 'Bogurabashi Web - Service Hub',
    category: 'Community Platform',
    description:
      'A comprehensive local service directory and blood donation network for Bogura citizens.',
    fullDescription:
      'Bogurabashi is a localized digital infrastructure designed to solve real-world community problems like blood matching and service verification.',
    icon: <Users size={20} className="text-emerald-400" />,
    tags: ['React', 'Framer Motion', 'JavaScript', 'Tailwind'],
    gradient: 'from-emerald-600/30 via-emerald-500/5 to-transparent',
    status: 'Deployed',
    liveUrl: 'https://bogurabashi.com',
    
    imageUrl:
      'https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?q=80&w=800&auto=format&fit=crop',
    architecture:
      'Client-side optimized React application with a serverless backend.',
    features: [
      'Real-time Blood Matcher',
      'Emergency Contact Mesh',
      'Community News',
    ],
  },
  {
    id: 'apporbit',
    title: 'AppOrbit - SaaS Starter Kit',
    category: 'Digital Marketplace',
    description:
      'A powerful, customizable SaaS engine built with MERN stack for rapid product deployment.',
    fullDescription:
      'AppOrbit is an enterprise-grade SaaS boilerplate designed to eliminate initial development hurdles.',
    icon: <Layout size={20} className="text-indigo-400" />,
    tags: ['React', 'MongoDB', 'Node.js', 'Tailwind'],
    gradient: 'from-indigo-600/30 via-indigo-500/5 to-transparent',
    status: 'Commercial',
    liveUrl: 'https://app-orbit12.web.app',
    imageUrl:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop',
    architecture: 'Multi-tenant SaaS architecture with isolated data layers.',
    features: ['Isolated Workspaces', 'Subscription Webhooks', 'Asset Sync'],
  },
  {
    id: 'matrimony-app',
    title: 'Matrimony App',
    category: 'Social Platform',
    description:
      'Secure biodata management platform with premium membership and advanced matchmaking.',
    fullDescription:
      'This Matrimony Protocol is built on the principle of absolute privacy and weighted preference algorithms.',
    icon: <Heart size={20} className="text-red-400" />,
    tags: ['React', 'Node.js', 'MongoDB', 'Express'],
    gradient: 'from-red-600/30 via-red-500/5 to-transparent',
    status: 'Live Protocol',
    liveUrl: 'https://metrimony-auth.web.app',
    // Elegant, premium wedding/matrimony aesthetic
    imageUrl:
      'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=800&auto=format&fit=crop',
    architecture:
      'Security-first MERN architecture with JWT and encrypted PII.',
    features: ['3-Tier Verification', 'Weighted Matchmaking', 'Privacy Shield'],
  },
  {
    id: 'plant-care',
    title: 'Plant Care App',
    category: 'Internet of Plants',
    description:
      'Automated botanical management system with watering reminders and health logging.',
    fullDescription:
      'Plant Care is a botanical management ecosystem providing an automated scheduling engine.',
    icon: <Activity size={20} className="text-green-400" />,
    tags: ['React', 'Express', 'MongoDB', 'Auth'],
    gradient: 'from-green-600/30 via-green-500/5 to-transparent',
    status: 'Active Node',
    liveUrl: 'https://mango-store-app.web.app',
    imageUrl:
      'https://images.unsplash.com/photo-1453904300235-0f2f60b15b5d?q=80&w=800&auto=format&fit=crop',
    architecture: 'Modular MERN stack with a custom notification engine.',
    features: ['Care Scheduler', 'Health Logs', 'Species Knowledge Base'],
  },
];

const AdvancedPortfolio = () => {
  return (
    <section className="relative py-20 md:py-32 bg-[#030303] overflow-hidden border-y border-white/5 selection:bg-blue-500/30">
      {/* Background elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[800px] h-[300px] md:h-[800px] bg-blue-600/[0.05] blur-[100px] md:blur-[160px] rounded-full opacity-60" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 md:mb-24 gap-8">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-4xl md:text-7xl font-black text-white tracking-tighter uppercase"
          >
            Portfolio{' '}
            <span className="italic font-extralight text-slate-600">
              Engine
            </span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
          {allProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group relative flex flex-col h-full bg-[#0A0A0A] border border-white/10 rounded-[2.5rem] p-5 overflow-hidden"
            >
              {/* Image Preview Slot */}
              <div className="relative aspect-[16/10] rounded-[1.8rem] overflow-hidden bg-[#080808] mb-8 border border-white/5">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                {/* Overlay for branding colors */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.gradient} mix-blend-multiply opacity-60 group-hover:opacity-40 transition-opacity`}
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors" />

                <div className="absolute bottom-4 left-4 flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/10 z-10">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
                  <span className="text-[8px] font-bold tracking-widest uppercase text-white/90">
                    {project.status}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col flex-grow px-2">
                <div className="flex items-center gap-3 mb-4 text-slate-500">
                  {project.icon}
                  <span className="text-[9px] font-bold uppercase tracking-[0.2em]">
                    {project.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors uppercase tracking-tight">
                  {project.title}
                </h3>
                <p className="text-slate-400 text-xs leading-relaxed mb-8 font-light">
                  {project.description}
                </p>

                {/* Buttons */}
                <div className="mt-auto grid grid-cols-2 gap-3 pt-6 border-t border-white/[0.05]">
                  <Link
                    href={`/portfolio/${project.id}`}
                    className="flex items-center justify-center gap-2 px-4 py-3 bg-white/[0.03] border border-white/10 rounded-xl text-white hover:bg-white/[0.08] transition-all"
                  >
                    <Eye size={14} className="text-blue-400" />
                    <span className="text-[9px] font-black tracking-widest uppercase">
                      Details
                    </span>
                  </Link>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-4 py-3 bg-blue-600 rounded-xl text-white hover:bg-blue-700 transition-all shadow-[0_0_20px_rgba(37,99,235,0.2)]"
                  >
                    <ExternalLink size={14} />
                    <span className="text-[9px] font-black tracking-widest uppercase">
                      Preview
                    </span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdvancedPortfolio;
