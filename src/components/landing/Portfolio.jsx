// 1. Ekdom upore ei line-ti thaktei hobe
'use client';

import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Zaffran - Fine Dining',
    category: 'Full Stack (MERN)',
    description:
      'A premium restaurant management and online ordering platform.',
  },
  {
    title: 'CareerOstad',
    category: 'EdTech Platform',
    description: 'Personalized career guidance and skill development system.',
  },
  {
    title: 'Enterprise ERP',
    category: 'Software Solution',
    description:
      'Complex inventory and business automation for growing industries.',
  },
];

export default function Portfolio() {
  return (
    <section className="py-24 bg-[#0a0a0a]">
      <div className="container mx-auto px-6 text-white">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Featured Work
            </h2>
            <p className="text-gray-500">Excellence in every line of code.</p>
          </div>
          <button className="text-blue-500 font-semibold border-b border-blue-500 hover:text-white hover:border-white transition-all">
            View All Projects
          </button>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-video rounded-3xl overflow-hidden bg-zinc-900 mb-6 border border-white/5">
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent opacity-60" />
              </div>
              <p className="text-blue-500 text-sm font-medium mb-2">
                {project.category}
              </p>
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                {project.title}
              </h3>
              <p className="text-gray-500 leading-relaxed">
                {project.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
