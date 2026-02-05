import React from 'react';

export default function CTA() {
  return (
    <section className="py-24 container mx-auto px-6">
      <div className="relative rounded-[40px] bg-gradient-to-br from-blue-600 to-indigo-900 p-12 md:p-20 overflow-hidden text-center">
        {/* Decorative Circle */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-20 -mt-20 blur-3xl" />

        <div className="relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tight">
            Ready to build something <br className="hidden md:block" /> amazing
            together?
          </h2>
          <p className="text-blue-100 text-lg mb-10 max-w-xl mx-auto">
            Let's transform your business with modern technology and scale your
            operations globally.
          </p>
          <button className="px-12 py-5 bg-white text-blue-600 rounded-full font-bold text-lg hover:bg-blue-50 transition-all shadow-2xl">
            Book a Free Consultation
          </button>
        </div>
      </div>
    </section>
  );
}
