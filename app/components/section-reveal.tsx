"use client";

import { motion } from "framer-motion";

type SectionRevealProps = {
  children: React.ReactNode;
  className?: string;
};

export function SectionReveal({ children, className }: SectionRevealProps) {
  return (
    <motion.section
      className={className}
      initial={{ opacity: 0, y: 70 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ type: "spring", stiffness: 70, damping: 18 }}
    >
      {children}
    </motion.section>
  );
}
