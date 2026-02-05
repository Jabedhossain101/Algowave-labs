import React from 'react';

const steps = [
  {
    n: '01',
    title: 'Discovery',
    desc: 'Understanding your goals and target audience.',
  },
  {
    n: '02',
    title: 'Design',
    desc: 'Creating modern UI/UX wireframes and prototypes.',
  },
  {
    n: '03',
    title: 'Development',
    desc: 'Writing clean, scalable code with MERN stack.',
  },
  {
    n: '04',
    title: 'Deployment',
    desc: 'Launching your product with cloud optimization.',
  },
];

export default function Process() {
  return (
    <section className="py-24 bg-[#0a0a0a]">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-16 text-center">
          How We Work
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative p-8 rounded-3xl bg-zinc-900/20 border border-white/5 group hover:bg-blue-600/5 transition-all"
            >
              <span className="text-5xl font-black text-blue-600/20 absolute top-4 right-6 group-hover:text-blue-600/40">
                {step.n}
              </span>
              <h3 className="text-xl font-bold text-white mb-4 mt-8">
                {step.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
