"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const categories = [
  { id: "general", name: "General" },
  { id: "services", name: "Services" },
  { id: "process", name: "Process" },
  { id: "pricing", name: "Pricing" },
];

const faqData = {
  general: [
    {
      question: "What is Algo Wave?",
      answer: "Algo Wave is a full-service digital agency specializing in custom software development, mobile apps, and digital transformation strategies. We help businesses of all sizes bring their ideas to life through technology.",
    },
    {
      question: "Where are you located?",
      answer: "We are headquartered in Tech Valley, CA, but we work with clients globally. Our team is distributed across multiple time zones to ensure efficient project delivery.",
    },
    {
      question: "How can I start a project with you?",
      answer: "Starting a project is simple. You can reach out to us via our contact form or email. We'll schedule an initial consultation to discuss your needs and how we can help.",
    },
  ],
  services: [
    {
      question: "What technologies do you specialize in?",
      answer: "We specialize in a modern tech stack including React, Next.js, Node.js, Python, Flutter, and React Native. We also have extensive experience with cloud platforms like AWS, Azure, and Google Cloud.",
    },
    {
      question: "Do you offer post-launch support?",
      answer: "Yes, we offer comprehensive maintenance and support packages to ensure your software remains secure, up-to-date, and performs optimally after launch.",
    },
    {
      question: "Can you help with legacy system modernization?",
      answer: "Absolutely. We have significant experience in auditing legacy systems and creating strategies to modernize them using current technologies while preserving data integrity.",
    },
  ],
  process: [
    {
      question: "How long does a typical project take?",
      answer: "Project timelines vary significantly depending on scope and complexity. A simple website might take 4-6 weeks, while a complex custom software solution could take 3-6 months or more. We provide detailed timelines during the planning phase.",
    },
    {
      question: "What is your development methodology?",
      answer: "We follow Agile methodologies, typically working in 2-week sprints. This allows for regular feedback loops, flexibility to adapt to changes, and transparent progress tracking.",
    },
    {
      question: "Will I have a dedicated project manager?",
      answer: "Yes, every project is assigned a dedicated project manager who serves as your primary point of contact, ensuring clear communication and keeping the project on track.",
    },
  ],
  pricing: [
    {
      question: "How much does a custom software project cost?",
      answer: "Costs depend on the specific requirements of your project. We offer both fixed-price contracts for well-defined scopes and time-and-materials models for more flexible ongoing work. Contact us for a custom quote.",
    },
    {
      question: "Do you require a deposit?",
      answer: "Yes, typically we require a deposit to schedule resources and kick off the project. The exact percentage depends on the total project value and contract terms.",
    },
    {
      question: "Are there any hidden costs?",
      answer: "We believe in complete transparency. All costs, including potential third-party service fees (like hosting or APIs), are discussed and documented upfront in our proposal.",
    },
  ],
};

const AccordionItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border border-base-200 rounded-xl overflow-hidden mb-4 bg-base-100 hover:border-primary/30 transition-colors">
      <button
        className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none"
        onClick={onClick}
      >
        <span className="font-semibold text-lg pr-4">{question}</span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="flex-shrink-0 text-primary"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </motion.span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-6 pb-4 text-base-content/70 leading-relaxed border-t border-base-200/50 pt-4">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState("general");
  const [openIndex, setOpenIndex] = useState(0);

  const handleCategoryChange = (id) => {
    setActiveCategory(id);
    setOpenIndex(0); // Reset open item when changing category
  };

  return (
    <div className="bg-base-100 min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-base-200/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Frequently Asked <span className="text-primary">Questions</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg text-base-content/70 max-w-2xl mx-auto"
          >
            Find answers to common questions about our services, process, and pricing. Can't find what you're looking for? Feel free to contact us.
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-12">
            {/* Sidebar Categories */}
            <div className="md:w-1/4">
              <div className="sticky top-24 space-y-2">
                <h3 className="font-bold text-lg mb-4 px-4">Categories</h3>
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => handleCategoryChange(category.id)}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-200 ${
                      activeCategory === category.id
                        ? "bg-primary text-primary-content shadow-md"
                        : "hover:bg-base-200 text-base-content/70 hover:text-base-content"
                    }`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>

            {/* FAQ Accordion */}
            <div className="md:w-3/4">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
              >
                <h2 className="text-2xl font-bold mb-6 capitalize">{activeCategory} Questions</h2>
                {faqData[activeCategory].map((item, index) => (
                  <AccordionItem
                    key={index}
                    question={item.question}
                    answer={item.answer}
                    isOpen={openIndex === index}
                    onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                  />
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Still have questions CTA */}
      <section className="py-20 bg-base-200/30">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Still have questions?</h2>
            <p className="text-lg text-base-content/70 mb-8">
              We're here to help. If you couldn't find the answer you were looking for, please don't hesitate to reach out to our team.
            </p>
            <div className="flex gap-4 justify-center">
              <Link href="/contact" className="btn btn-primary btn-lg px-8">
                Contact Support
              </Link>
              <Link href="mailto:support@algowave.com" className="btn btn-ghost btn-lg">
                Email Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
