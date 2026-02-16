'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Twitter,
  Linkedin,
  Github,
  Instagram,
  Mail,
  Phone,
  MapPin,
  ArrowUpRight,
  Activity,
  Cpu,
  Command,
  ShieldCheck,
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { name: 'About Engineering', href: '/about' },
      { name: 'Lab Careers', href: '/careers' },
      { name: 'Tech Blog', href: '/blog' },
      { name: 'Contact Hub', href: '/contact' },
    ],
    services: [
      { name: 'Next.js Development', href: '/services/web-development' },
      { name: 'SaaS Architecture', href: '/services/saas' },
      { name: 'ERP Solutions', href: '/services/erp' },
      { name: 'Cloud Infrastructure', href: '/services/cloud' },
    ],
    legal: [
      { name: 'Privacy', href: '/privacy' },
      { name: 'Terms', href: '/terms' },
      { name: 'Security', href: '/security' },
    ],
  };

  return (
    <footer className="relative bg-[#020203] text-white border-t border-white/10 overflow-hidden selection:bg-blue-500/30">
      {/* --- LAYER 1: OPTIMIZED BACKGROUND --- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute bottom-[-5%] left-[-5%] w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-blue-600/[0.03] blur-[80px] md:blur-[150px] rounded-full" />

        <div
          className="absolute inset-0 opacity-[0.02] md:opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(#3b82f6 1px, transparent 1px), linear-gradient(90deg, #3b82f6 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
            transform:
              typeof window !== 'undefined' && window.innerWidth > 768
                ? 'perspective(1000px) rotateX(45deg) translateY(100px)'
                : 'none',
          }}
        />
      </div>

      <div className="relative z-10 w-full px-6 md:px-12 lg:px-20 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-12">
          {/* BRAND COLUMN */}
          <div className="lg:col-span-4 space-y-8 md:space-y-10">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative flex h-3.5 w-3.5 md:h-4 md:w-4">
                <span className="animate-ping absolute h-full w-full rounded-full bg-blue-400 opacity-40"></span>
                <span className="relative inline-flex rounded-full h-full w-full bg-blue-600 border border-blue-400/50"></span>
              </div>
              <span className="font-black text-2xl md:text-3xl tracking-tighter transition-all">
                AlgoWave<span className="text-blue-600 italic">.</span>Labs
              </span>
            </Link>

            <p className="text-slate-500 text-sm md:text-base leading-relaxed max-w-sm font-light">
              Premium engineering studio transforming complex logic into{' '}
              <span className="text-white">
                high-performance digital ecosystems
              </span>
              .
            </p>

            <div className="flex gap-3 md:gap-4">
              {[
                { icon: <Twitter size={18} />, name: 'Twitter' },
                { icon: <Linkedin size={18} />, name: 'LinkedIn' },
                { icon: <Github size={18} />, name: 'GitHub' },
                { icon: <Instagram size={18} />, name: 'Instagram' },
              ].map(social => (
                <motion.a
                  key={social.name}
                  href="#"
                  whileHover={{ y: -3 }}
                  className="w-10 h-10 md:w-11 md:h-11 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-center text-slate-400 hover:text-blue-400 transition-all"
                  aria-label={social.name}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* NAVIGATION COLUMNS */}
          <div className="grid grid-cols-2 lg:grid-cols-4 lg:col-span-4 gap-8">
            <div className="space-y-6">
              <h3 className="text-[9px] md:text-[10px] font-black tracking-[0.4em] uppercase text-slate-700 flex items-center gap-2">
                <Command size={10} /> Navigation
              </h3>
              <ul className="space-y-3">
                {footerLinks.company.map(link => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-xs md:text-sm text-slate-500 hover:text-blue-400 transition-colors font-light"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-6">
              <h3 className="text-[9px] md:text-[10px] font-black tracking-[0.4em] uppercase text-slate-700 flex items-center gap-2">
                <Cpu size={10} /> Specialized
              </h3>
              <ul className="space-y-3">
                {footerLinks.services.map(link => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-xs md:text-sm text-slate-500 hover:text-blue-400 transition-colors font-light"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* OPERATIONS HUB CARD */}
          <div className="lg:col-span-4 bg-white/[0.02] border border-white/10 p-6 md:p-10 rounded-[2rem] md:rounded-[2.5rem] relative overflow-hidden group">
            <h3 className="text-[9px] md:text-[10px] font-black tracking-[0.4em] uppercase text-blue-500 mb-6 md:mb-10 flex items-center gap-3">
              <Activity size={14} /> Operations_Hub
            </h3>

            <ul className="space-y-6 md:space-y-8 relative z-10">
              <li className="flex items-start gap-4 md:gap-5">
                <MapPin
                  size={18}
                  className="text-slate-700 shrink-0 group-hover:text-blue-500 transition-colors"
                />
                <span className="text-xs md:text-sm text-slate-500 leading-relaxed font-light">
                  Innovation Plaza, Dhaka, BD
                </span>
              </li>
              <li className="flex items-center gap-4 md:gap-5">
                <Mail
                  size={18}
                  className="text-slate-700 shrink-0 group-hover:text-blue-500 transition-colors"
                />
                <a
                  href="mailto:ops@algowave.labs"
                  className="text-xs md:text-sm text-slate-500 hover:text-white transition-colors font-mono"
                >
                  ops@algowave.labs
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* BOTTOM ARCHITECTURE */}
        <div className="mt-16 md:mt-32 pt-8 md:pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 md:gap-10">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-12 text-center md:text-left">
            <p className="text-slate-700 text-[8px] md:text-[10px] font-mono tracking-widest uppercase">
              © {currentYear} ALGOWAVE LABS // ENGINE_V4.0
            </p>
            <div className="flex gap-6 md:gap-8">
              {footerLinks.legal.map(link => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-[8px] md:text-[10px] uppercase tracking-[0.2em] text-slate-700 hover:text-blue-500 transition-colors font-bold"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-3 px-4 py-1.5 rounded-full bg-blue-500/5 border border-blue-500/10">
            <div className="w-1.5 h-1.5 rounded-full bg-green-500 shadow-[0_0_8px_#22c55e]" />
            <span className="text-[9px] font-black text-blue-400 uppercase tracking-[0.1em]">
              Systems: Operational
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
