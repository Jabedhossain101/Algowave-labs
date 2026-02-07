'use client';
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight, Activity, Cpu } from 'lucide-react';

export default function AdvancedNavbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Updated Links to match your original set
  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'ERP Systems', href: '/erp' },
    { name: 'SaaS', href: '/saas' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'About', href: '/about' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 will-change-auto ${
        isScrolled
          ? 'py-4 bg-black/60 backdrop-blur-xl border-b border-white/10 shadow-2xl'
          : 'py-8 bg-transparent'
      }`}
    >
      <div className="w-full px-6 md:px-10 lg:px-16 flex justify-between items-center transition-all duration-500">
        {/* --- LOGO --- */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-3 group cursor-pointer shrink-0"
        >
          <div className="relative flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-40"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-blue-600 border border-blue-400/50 shadow-[0_0_15px_#3b82f6]"></span>
          </div>
          <div className="text-xl md:text-2xl font-black text-white tracking-tighter flex items-center gap-1">
            AlgoWave<span className="text-blue-600 italic">.</span>Labs
            <span className="text-[8px] font-mono text-slate-400 bg-white/5 px-1.5 py-0.5 rounded border border-white/10 ml-2 hidden sm:block">
              v4.0
            </span>
          </div>
        </motion.div>

        {/* --- DESKTOP NAV --- */}
        <div className="hidden lg:flex items-center lg:gap-6 xl:gap-10">
          <div className="flex items-center lg:gap-4 xl:gap-8">
            {navLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="relative text-[10px] uppercase tracking-[0.3em] font-bold text-slate-400 hover:text-white transition-colors duration-300 group"
              >
                <span className="relative z-10">{link.name}</span>
                <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-blue-600 transition-all duration-300 group-hover:w-full" />
              </motion.a>
            ))}
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-[10px] font-black uppercase tracking-[0.2em] rounded-sm skew-x-[-12deg] flex items-center gap-3 transition-all shadow-[0_0_20px_rgba(37,99,235,0.2)]"
          >
            <span className="skew-x-[12deg] flex items-center gap-2 text-white">
              INITIATE PROJECT <ArrowRight size={14} />
            </span>
          </motion.button>
        </div>

        {/* --- MOBILE TOGGLE --- */}
        <div className="lg:hidden flex items-center gap-4">
          <div className="hidden xs:flex flex-col items-end mr-2">
            <span className="text-[7px] font-mono text-blue-500 uppercase tracking-widest">
              System
            </span>
            <span className="text-[9px] font-black text-white">ONLINE</span>
          </div>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2.5 text-white bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-all"
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* --- MOBILE MENU --- */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: '100vh' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden fixed top-0 left-0 w-full bg-[#030303] z-[-1] overflow-hidden"
          >
            <div className="flex flex-col pt-32 p-10 gap-8 h-full">
              <div className="space-y-4">
                {navLinks.map((link, idx) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="text-3xl font-black text-white hover:text-blue-500 tracking-tighter uppercase block"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </motion.a>
                ))}
              </div>

              <div className="mt-auto mb-20 p-6 rounded-2xl bg-white/5 border border-white/10 space-y-4">
                <div className="flex items-center justify-between text-blue-400 text-[10px] font-black tracking-widest uppercase">
                  <span className="flex items-center gap-2">
                    <Activity size={14} className="animate-pulse" /> Status:
                    Active
                  </span>
                  <Cpu size={14} />
                </div>
                <button className="w-full py-4 bg-blue-600 text-white font-black uppercase tracking-widest text-xs rounded-sm">
                  Connect Terminal
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
