"use client";

import { motion } from "framer-motion";
import SectionWrapper from "../shared/SectionWrapper";
import AnimatedHeading from "../shared/AnimatedHeading";
import { fadeUp } from "@/lib/animations";

const points = [
  "Experienced Engineering Team",
  "Clean & Maintainable Codebase",
  "Client-First Development Process",
  "Modern & Scalable Architecture",
];

const WhyUsSection = () => {
  return (
    <SectionWrapper className="bg-base-200">
      <AnimatedHeading
        title="Why Algo Wave Labs?"
        subtitle="We don’t just write code — we build long-term solutions."
      />

      <div className="mt-14 max-w-3xl mx-auto space-y-4">
        {points.map((point, i) => (
          <motion.div
            key={i}
            variants={fadeUp}
            className="p-4 rounded-xl bg-base-100 shadow flex items-center gap-3"
          >
            <span className="badge badge-primary badge-lg" />
            <p className="text-base-content">{point}</p>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default WhyUsSection;
