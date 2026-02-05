'use client';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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
    { name: 'Web & E-commerce', href: '/web-apps' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'About', href: '/about' },
    { name: 'Blog', href: '/blog' },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'py-3 bg-[#0a0a0a]/80 backdrop-blur-xl border-b border-white/10'
          : 'py-6 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <div className="text-xl md:text-2xl font-bold text-white tracking-tighter">
          AlgoWave<span className="text-blue-600">.</span>Labs
        </div>

        {/* Desktop Links - Optimized spacing for more items */}
        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map(link => (
            <a
              key={link.name}
              href={link.href}
              className="text-[13px] uppercase tracking-widest font-semibold text-gray-400 hover:text-blue-500 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <button className="px-5 py-2 bg-blue-600 text-white text-[13px] font-bold rounded-full hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/30">
            Hire Us
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white text-2xl"
          >
            {isMobileMenuOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden absolute top-full left-0 w-full bg-[#0d0d0d] border-b border-white/10 shadow-2xl"
          >
            <div className="flex flex-col p-8 gap-5 text-center">
              {navLinks.map(link => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-lg font-medium text-gray-300 hover:text-blue-500"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <hr className="border-white/5" />
              <button className="py-4 bg-blue-600 text-white font-bold rounded-2xl">
                Get a Quote
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
