"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const services = [
  {
    title: "Web Development",
    description: "Custom websites and web applications built with modern technologies like React, Next.js, and Node.js.",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    features: ["Responsive Design", "SEO Optimization", "Performance Tuning", "CMS Integration"],
  },
  {
    title: "Mobile App Development",
    description: "Native and cross-platform mobile apps that deliver seamless user experiences on iOS and Android.",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    features: ["iOS & Android", "React Native / Flutter", "App Store Optimization", "Push Notifications"],
  },
  {
    title: "UI/UX Design",
    description: "User-centric design solutions that create engaging and intuitive digital experiences for your customers.",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
    features: ["Wireframing", "Prototyping", "User Research", "Visual Design"],
  },
  {
    title: "Cloud Solutions",
    description: "Scalable and secure cloud infrastructure setup, migration, and management services.",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    ),
    features: ["AWS / Azure / GCP", "DevOps", "Serverless Architecture", "Database Management"],
  },
  {
    title: "E-Commerce",
    description: "Robust online stores that drive sales and provide secure shopping experiences.",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    features: ["Shopify / WooCommerce", "Payment Gateway Integration", "Inventory Management", "Custom Cart Solutions"],
  },
  {
    title: "Consulting",
    description: "Expert advice on technology strategy, digital transformation, and software architecture.",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    features: ["Tech Audit", "Strategy Roadmap", "Legacy Modernization", "Team Training"],
  },
];

const process = [
  { step: "01", title: "Discovery", description: "We start by understanding your business goals, target audience, and requirements." },
  { step: "02", title: "Planning", description: "Our team creates a detailed roadmap, technical architecture, and design prototypes." },
  { step: "03", title: "Development", description: "We build your solution using agile methodologies with regular updates and feedback loops." },
  { step: "04", title: "Testing", description: "Rigorous quality assurance ensures your product is bug-free and performs optimally." },
  { step: "05", title: "Launch", description: "We handle the deployment process and ensure a smooth transition to the live environment." },
  { step: "06", title: "Support", description: "Ongoing maintenance and updates keep your software secure and up-to-date." },
];

export default function ServicesPage() {
  return (
    <div className="bg-base-100 min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden bg-base-200/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.h1
              variants={fadeInUp}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-base-content mb-6"
            >
              Our <span className="text-primary">Services</span>
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-lg md:text-xl text-base-content/70 mb-8 leading-relaxed max-w-2xl mx-auto"
            >
              Comprehensive software solutions tailored to your business needs. We combine creativity with technical expertise to deliver results.
            </motion.p>
          </motion.div>
        </div>
        
        {/* Background decorative elements */}
        <div className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 -translate-x-1/2 translate-y-1/2 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-base-100 p-8 rounded-2xl shadow-sm border border-base-200 hover:shadow-lg hover:border-primary/20 transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-primary-content transition-colors duration-300">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-base-content/70 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-base-content/80">
                      <svg className="w-4 h-4 text-secondary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-base-200/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Process</h2>
            <p className="text-base-content/60 max-w-2xl mx-auto">
              A proven methodology that ensures project success from concept to delivery.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {process.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative p-6 rounded-xl border border-base-200 bg-base-100 hover:border-primary/30 transition-colors"
              >
                <div className="text-6xl font-bold text-base-200 absolute top-4 right-4 select-none">
                  {step.step}
                </div>
                <div className="relative z-10">
                  <h3 className="text-xl font-bold mb-3 mt-4">{step.title}</h3>
                  <p className="text-base-content/70 leading-relaxed">
                    {step.description}
                  </p>
                </div>
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
             <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white/10 rounded-full blur-2xl" />
             <div className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 w-64 h-64 bg-white/10 rounded-full blur-2xl" />
             
             <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Have a Project in Mind?</h2>
              <p className="text-lg opacity-90 mb-8">
                We'd love to hear about your ideas and help you bring them to life. Get in touch for a free consultation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="btn btn-secondary btn-lg px-8 border-none shadow-lg">
                  Start a Project
                </Link>
                <Link href="/portfolio" className="btn btn-outline btn-lg text-white hover:bg-white hover:text-primary border-white">
                  See Our Work
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
