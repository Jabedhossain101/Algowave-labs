'use client';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight, Activity } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'ERP Systems', href: '/erp' },
    { name: 'SaaS', href: '/saas' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'About', href: '/about' },
    { name: 'Blog', href: '/blog' },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-[100] transition-all duration-500 ${
        isScrolled
          ? 'py-4 bg-[#050505]/70 backdrop-blur-2xl border-b border-white/5'
          : 'py-8 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2 group cursor-pointer"
        >
          <div className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-600"></span>
          </div>
          <div className="text-xl md:text-2xl font-black text-white tracking-tighter group-hover:tracking-normal transition-all duration-500">
            AlgoWave<span className="text-blue-600">.</span>Labs
          </div>
        </motion.div>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-10">
          <div className="flex items-center gap-8">
            {navLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="relative text-[11px] uppercase tracking-[0.2em] font-bold text-slate-400 hover:text-white transition-colors group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-blue-600 transition-all duration-500 group-hover:w-full" />
              </motion.a>
            ))}
          </div>

          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: '0 0 20px rgba(37,99,235,0.3)',
            }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-2.5 bg-blue-600 text-white text-[11px] font-black uppercase tracking-[0.1em] rounded-full flex items-center gap-2 transition-all shadow-lg shadow-blue-600/20"
          >
            Initiate Project
            <ArrowRight size={14} />
          </motion.button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-white bg-white/5 rounded-lg border border-white/10"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden absolute top-full left-0 w-full bg-[#050505]/95 backdrop-blur-3xl border-b border-white/5 overflow-hidden"
          >
            <div className="flex flex-col p-10 gap-6">
              {navLinks.map((link, idx) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  className="text-2xl font-black text-slate-300 hover:text-blue-500 tracking-tighter uppercase"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </motion.a>
              ))}
              <div className="h-[1px] w-full bg-white/5 my-4" />
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-2 text-blue-400 text-[10px] font-bold tracking-[0.3em] uppercase">
                  <Activity size={12} /> System Status: Optimal
                </div>
                <button className="py-5 bg-blue-600 text-white font-black uppercase tracking-widest rounded-2xl">
                  Start a Conversation
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
