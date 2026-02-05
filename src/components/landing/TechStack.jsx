import React from 'react';

const stacks = [
  'MongoDB',
  'Express.js',
  'React',
  'Node.js',
  'Next.js',
  'Tailwind CSS',
  'Prisma',
  'AWS',
];

export default function TechStack() {
  return (
    <section className="py-16 border-y border-white/5 bg-[#0a0a0a]">
      <div className="container mx-auto px-6">
        <p className="text-center text-gray-600 font-medium uppercase tracking-[0.2em] text-xs mb-10">
          Trusted Technologies We Use
        </p>
        <div className="flex flex-wrap justify-center gap-10 md:gap-20">
          {stacks.map(tech => (
            <span
              key={tech}
              className="text-gray-500 text-xl md:text-2xl font-semibold hover:text-white transition-colors cursor-default"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}