"use client";

import { motion } from "framer-motion";
import { staggerContainer } from "@/lib/animations";

const SectionWrapper = ({ children, className = "" }) => {
  return (
    <motion.section
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={`py-24 px-6 md:px-12 ${className}`}
    >
      {children}
    </motion.section>
  );
};

export default SectionWrapper;
