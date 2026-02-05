import React from 'react';

const reviews = [
  {
    name: 'Alex Johnson',
    role: 'CEO, TechFlow',
    comment:
      'AlgoWave Labs turned our complex vision into a stunning reality. Their expertise in SaaS is unmatched.',
  },
  {
    name: 'Rahat Ahmed',
    role: 'Owner, Zaffran',
    comment:
      'Excellent service and technical support. Our restaurant operations are now fully digital and smooth.',
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-[#0d0d0d] border-y border-white/5">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-16">
          What Our Clients Say
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="p-10 rounded-3xl bg-zinc-900/30 border border-white/5 text-left italic"
            >
              <p className="text-gray-300 text-lg mb-8 leading-relaxed italic">
                "{review.comment}"
              </p>
              <div>
                <h4 className="text-white font-bold">{review.name}</h4>
                <p className="text-blue-500 text-sm">{review.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
