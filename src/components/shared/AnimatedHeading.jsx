"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";

const AnimatedHeading = ({ title, subtitle }) => {
  return (
    <motion.div variants={fadeUp} className="text-center max-w-3xl mx-auto">
      <h2 className="text-4xl md:text-5xl font-bold text-primary">
        {title}
      </h2>
      <p className="mt-4 text-base-content/70">
        {subtitle}
      </p>
    </motion.div>
  );
};

export default AnimatedHeading;
