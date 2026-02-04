"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-base-100">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        className="text-center max-w-4xl px-6"
      >
        <h1 className="text-5xl md:text-6xl font-extrabold text-primary">
          Building Intelligent <br /> Software Solutions
        </h1>

        <p className="mt-6 text-lg text-base-content/70">
          Algo Wave Labs crafts scalable, modern, and performance-driven
          software for startups and enterprises.
        </p>

        <div className="mt-10 flex justify-center gap-4">
          <button className="btn btn-primary">
            Get Started
          </button>
          <button className="btn btn-outline btn-secondary">
            View Our Work
          </button>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
