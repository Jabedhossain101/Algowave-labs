"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { 
  Twitter, 
  Linkedin, 
  Github, 
  Instagram, 
  Mail, 
  Phone, 
  MapPin, 
  ArrowUpRight,
  Activity
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { name: "About Engineering", href: "/about" },
      { name: "Lab Careers", href: "/careers" },
      { name: "Tech Blog", href: "/blog" },
      { name: "Contact Hub", href: "/contact" },
    ],
    services: [
      { name: "Next.js Development", href: "/services/web-development" },
      { name: "SaaS Architecture", href: "/services/saas" },
      { name: "ERP Solutions", href: "/services/erp" },
      { name: "Cloud Infrastructure", href: "/services/cloud" },
    ],
    legal: [
      { name: "Privacy", href: "/privacy" },
      { name: "Terms", href: "/terms" },
      { name: "Security", href: "/security" },
    ],
  };

  return (
    <footer className="relative bg-[#050505] text-white border-t border-white/5 overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-600/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 lg:gap-8">
          
          {/* Brand Column (Span 4) */}
          <div className="lg:col-span-4 space-y-8">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-600"></span>
              </div>
              <span className="font-black text-2xl tracking-tighter group-hover:text-blue-500 transition-colors">
                AlgoWave<span className="text-blue-600">.</span>Labs
              </span>
            </Link>
            
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              Premium engineering studio transforming complex logic into high-performance digital ecosystems. We build the future of ERP, SaaS, and AI infrastructure.
            </p>
            
            <div className="flex gap-4">
              {[
                { icon: <Twitter size={18} />, name: "Twitter" },
                { icon: <Linkedin size={18} />, name: "LinkedIn" },
                { icon: <Github size={18} />, name: "GitHub" },
                { icon: <Instagram size={18} />, name: "Instagram" }
              ].map((social) => (
                <motion.a
                  key={social.name}
                  href="#"
                  whileHover={{ y: -3, backgroundColor: "rgba(37,99,235,0.1)" }}
                  className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-blue-400 hover:border-blue-500/30 transition-all"
                  aria-label={social.name}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links Columns (Span 2 each) */}
          <div className="lg:col-span-2">
            <h3 className="text-[10px] font-black tracking-[0.3em] uppercase text-slate-500 mb-8">Navigation</h3>
            <ul className="space-y-4">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="group flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors">
                    {link.name}
                    <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-[10px] font-black tracking-[0.3em] uppercase text-slate-500 mb-8">Specialized</h3>
            <ul className="space-y-4">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="group flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column (Span 4) */}
          <div className="lg:col-span-4 bg-white/[0.02] border border-white/5 p-8 rounded-[32px] backdrop-blur-sm">
            <h3 className="text-[10px] font-black tracking-[0.3em] uppercase text-blue-500 mb-8 flex items-center gap-2">
              <Activity size={14} /> Global Operations
            </h3>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <MapPin size={20} className="text-slate-600 shrink-0" />
                <span className="text-sm text-slate-400">Innovation Plaza, Level 4, Tech District, Dhaka, BD</span>
              </li>
              <li className="flex items-center gap-4 group">
                <Mail size={20} className="text-slate-600 shrink-0 group-hover:text-blue-400 transition-colors" />
                <a href="mailto:ops@algowave.labs" className="text-sm text-slate-400 hover:text-white transition-colors tracking-tight font-mono">
                  ops@algowave.labs
                </a>
              </li>
              <li className="flex items-center gap-4 group">
                <Phone size={20} className="text-slate-600 shrink-0 group-hover:text-blue-400 transition-colors" />
                <a href="tel:+880123456789" className="text-sm text-slate-400 hover:text-white transition-colors tracking-tight font-mono">
                  +880 1234 567 890
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <p className="text-slate-600 text-[11px] font-mono tracking-tighter">
              © {currentYear} ALGOWAVE LABS // ALL RIGHTS RESERVED.
            </p>
            <div className="flex gap-6">
              {footerLinks.legal.map((link) => (
                <Link key={link.name} href={link.href} className="text-[11px] uppercase tracking-widest text-slate-600 hover:text-blue-500 transition-colors">
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
          
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/5 border border-blue-500/10">
            <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
            <span className="text-[9px] font-bold text-blue-400 uppercase tracking-widest">Systems: Operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;