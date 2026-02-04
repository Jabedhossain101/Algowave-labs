"use client";

import { motion } from "framer-motion";
import SectionWrapper from "../shared/SectionWrapper";
import AnimatedHeading from "../shared/AnimatedHeading";
import { fadeUp } from "@/lib/animations";

const services = [
  {
    title: "Web Development",
    desc: "Modern, scalable web applications using cutting-edge technologies.",
  },
  {
    title: "Backend Engineering",
    desc: "Secure, high-performance APIs and system architectures.",
  },
  {
    title: "UI/UX Design",
    desc: "Clean, intuitive and conversion-focused user experiences.",
  },
];

const ServicesSection = () => {
  return (
    <SectionWrapper>
      <AnimatedHeading
        title="Our Services"
        subtitle="We help businesses grow with reliable and scalable technology."
      />

      <div className="mt-16 grid md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={index}
            variants={fadeUp}
            className="card bg-base-200 shadow-lg hover:shadow-xl transition"
          >
            <div className="card-body">
              <h3 className="card-title text-primary">
                {service.title}
              </h3>
              <p className="text-base-content/70">
                {service.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default ServicesSection;
