"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const stats = [
  { label: "Years of Experience", value: "5+" },
  { label: "Projects Completed", value: "100+" },
  { label: "Happy Clients", value: "50+" },
  { label: "Team Experts", value: "15+" },
];

const values = [
  {
    title: "Innovation",
    description: "We constantly push boundaries to deliver cutting-edge solutions that keep you ahead of the curve.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: "Integrity",
    description: "Honesty and transparency are at the core of our partnerships. We build trust through every interaction.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Excellence",
    description: "We are committed to delivering the highest quality code and design in every project we undertake.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
  },
  {
    title: "Collaboration",
    description: "We work closely with our clients, treating your success as our own through open communication.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
];

export default function AboutPage() {
  return (
    <div className="bg-base-100 min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden bg-base-200/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="text-center max-w-3xl mx-auto"
          >
            <motion.h1
              variants={fadeInUp}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-base-content mb-6"
            >
              We Are <span className="text-primary">Algo Wave</span>
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-lg md:text-xl text-base-content/70 mb-8 leading-relaxed"
            >
              A passionate team of developers, designers, and strategists dedicated to transforming ideas into digital reality. We build software that matters.
            </motion.p>
          </motion.div>
        </div>
        
        {/* Background decorative elements */}
        <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-primary text-primary-content">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="space-y-2"
              >
                <div className="text-4xl md:text-5xl font-bold">{stat.value}</div>
                <div className="text-sm md:text-base opacity-80">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              {/* Placeholder for an image - using a styled div for now */}
              <div className="aspect-[4/3] rounded-2xl bg-base-300 overflow-hidden relative shadow-xl">
                 <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                    <span className="text-base-content/20 text-6xl font-bold">Vision</span>
                 </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-base-100 rounded-lg shadow-lg p-6 flex items-center justify-center border border-base-200">
                 <p className="text-center font-bold text-primary">Building the future, one line of code at a time.</p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h2 className="text-3xl md:text-4xl font-bold">Our Mission</h2>
              <p className="text-base-content/70 text-lg leading-relaxed">
                At Algo Wave, our mission is to empower businesses through innovative technology. We believe in the power of digital transformation to solve complex problems and create meaningful impact.
              </p>
              <p className="text-base-content/70 text-lg leading-relaxed">
                We strive to deliver excellence in every project, ensuring that our clients not only meet their goals but exceed them. By combining technical expertise with creative thinking, we craft solutions that stand the test of time.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-base-200/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Values</h2>
            <p className="text-base-content/60 max-w-2xl mx-auto">
              These principles guide every decision we make and every line of code we write.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-base-100 p-8 rounded-2xl shadow-sm border border-base-200 hover:shadow-md transition-shadow duration-300"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-base-content/70 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-primary rounded-3xl p-8 md:p-16 text-center text-primary-content relative overflow-hidden">
             {/* Decorative circles */}
             <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-64 h-64 bg-white/10 rounded-full blur-2xl" />
             <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-64 h-64 bg-white/10 rounded-full blur-2xl" />
             
             <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Journey?</h2>
              <p className="text-lg opacity-90 mb-8">
                Let's discuss how we can help you achieve your digital goals. Our team is ready to bring your vision to life.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="btn btn-secondary btn-lg px-8 border-none shadow-lg">
                  Contact Us
                </Link>
                <Link href="/portfolio" className="btn btn-outline btn-lg text-white hover:bg-white hover:text-primary border-white">
                  View Portfolio
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
