'use client';

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
    <footer className="relative bg-[#020203] text-white border-t border-white/10 overflow-hidden selection:bg-blue-500/30 font-sans">
      {/* --- LAYER 1: UNIFIED BACKGROUND --- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-600/[0.03] blur-[150px] rounded-full" />

        {/* Sync with Global Perspective Grid */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(#3b82f6 1px, transparent 1px), linear-gradient(90deg, #3b82f6 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
            transform: 'perspective(1000px) rotateX(45deg) translateY(100px)',
            willChange: 'transform',
          }}
        />
      </div>

      {/* --- MAIN CONTENT WRAPPER (Full Width Sync) --- */}
      <div className="relative z-10 w-full px-6 md:px-12 lg:px-20 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 lg:gap-12">
          {/* BRAND COLUMN */}
          <div className="lg:col-span-4 space-y-10">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative flex h-4 w-4">
                <span className="animate-ping absolute h-full w-full rounded-full bg-blue-400 opacity-40"></span>
                <span className="relative inline-flex rounded-full h-4 w-4 bg-blue-600 border border-blue-400/50 shadow-[0_0_15px_#3b82f6]"></span>
              </div>
              <span className="font-black text-3xl tracking-tighter transition-all duration-500 group-hover:tracking-tight">
                AlgoWave<span className="text-blue-600 italic">.</span>Labs
              </span>
            </Link>

            <p className="text-slate-500 text-base leading-relaxed max-w-sm font-light">
              Premium engineering studio transforming complex logic into{' '}
              <span className="text-white">
                high-performance digital ecosystems
              </span>
              . We build the future of autonomous infrastructure.
            </p>

            <div className="flex gap-4">
              {[
                { icon: <Twitter size={18} />, name: 'Twitter' },
                { icon: <Linkedin size={18} />, name: 'LinkedIn' },
                { icon: <Github size={18} />, name: 'GitHub' },
                { icon: <Instagram size={18} />, name: 'Instagram' },
              ].map(social => (
                <motion.a
                  key={social.name}
                  href="#"
                  whileHover={{
                    y: -5,
                    backgroundColor: 'rgba(59,130,246,0.1)',
                    borderColor: 'rgba(59,130,246,0.3)',
                  }}
                  className="w-11 h-11 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-center text-slate-400 hover:text-blue-400 transition-all shadow-xl"
                  aria-label={social.name}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* NAVIGATION COLUMNS */}
          <div className="lg:col-span-2 space-y-8">
            <h3 className="text-[10px] font-black tracking-[0.5em] uppercase text-slate-700 flex items-center gap-2">
              <Command size={12} /> Navigation
            </h3>
            <ul className="space-y-4">
              {footerLinks.company.map(link => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="group flex items-center gap-2 text-sm text-slate-500 hover:text-blue-400 transition-all font-light"
                  >
                    {link.name}
                    <ArrowUpRight
                      size={12}
                      className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2 space-y-8">
            <h3 className="text-[10px] font-black tracking-[0.5em] uppercase text-slate-700 flex items-center gap-2">
              <Cpu size={12} /> Specialized
            </h3>
            <ul className="space-y-4">
              {footerLinks.services.map(link => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-500 hover:text-blue-400 transition-all font-light"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* OPERATIONS HUB CARD */}
          <div className="lg:col-span-4 bg-white/[0.01] border border-white/10 p-8 lg:p-10 rounded-[2.5rem] backdrop-blur-3xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
              <ShieldCheck size={120} className="text-blue-500" />
            </div>

            <h3 className="text-[10px] font-black tracking-[0.4em] uppercase text-blue-500 mb-10 flex items-center gap-3">
              <Activity size={14} className="animate-pulse" /> Operations_Hub
            </h3>

            <ul className="space-y-8 relative z-10">
              <li className="flex items-start gap-5">
                <MapPin
                  size={20}
                  className="text-slate-700 shrink-0 group-hover:text-blue-500 transition-colors"
                />
                <span className="text-sm text-slate-500 leading-relaxed font-light">
                  Innovation Plaza, Level 4, Tech District, Dhaka, BD
                </span>
              </li>
              <li className="flex items-center gap-5 group/link">
                <Mail
                  size={20}
                  className="text-slate-700 shrink-0 group-hover:text-blue-500 transition-colors"
                />
                <a
                  href="mailto:ops@algowave.labs"
                  className="text-sm text-slate-500 hover:text-white transition-colors tracking-tight font-mono"
                >
                  ops@algowave.labs
                </a>
              </li>
              <li className="flex items-center gap-5 group/link">
                <Phone
                  size={20}
                  className="text-slate-700 shrink-0 group-hover:text-blue-500 transition-colors"
                />
                <a
                  href="tel:+880123456789"
                  className="text-sm text-slate-500 hover:text-white transition-colors tracking-tight font-mono"
                >
                  +880 1234 567 890
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* BOTTOM ARCHITECTURE */}
        <div className="mt-32 pt-10 border-t border-white/5 flex flex-col lg:flex-row justify-between items-center gap-10">
          <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-12 text-center lg:text-left">
            <p className="text-slate-700 text-[10px] font-mono tracking-widest uppercase">
              © {currentYear} ALGOWAVE LABS // ENGINE_V4.0 // ALL RIGHTS
              RESERVED.
            </p>
            <div className="flex gap-8">
              {footerLinks.legal.map(link => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-[10px] uppercase tracking-[0.3em] text-slate-700 hover:text-blue-500 transition-all font-bold"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-3 px-5 py-2 rounded-full bg-blue-500/5 border border-blue-500/10 backdrop-blur-md">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_10px_#22c55e]" />
            <span className="text-[10px] font-black text-blue-400 uppercase tracking-[0.2em]">
              Systems: Operational
            </span>
          </div>
        </div>
      </div>

      {/* Noise Overlay */}
      <div className="absolute inset-0 opacity-[0.012] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
    </footer>
  );
};

export default Footer;
