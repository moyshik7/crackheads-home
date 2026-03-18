"use client";

import { motion } from "framer-motion";

export function AboutSection() {
  return (
    <section id="about" className="px-6 py-20 md:px-10 md:py-24">
      <motion.div
        className="mx-auto max-w-6xl rounded-[2.5rem] bg-white/50 p-8 shadow-[0_24px_55px_rgba(176,170,243,0.26)] backdrop-blur-xl md:p-12"
        initial={{ opacity: 0, y: 70 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ type: "spring", stiffness: 95, damping: 18 }}
      >
        <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#6f67a5]/75">
          About Crackheads Studio
        </p>
        <h2 className="mt-3 max-w-4xl text-4xl font-black leading-tight text-[#534a84] sm:text-5xl md:text-6xl">
          We shape delightful digital products with playful design systems and high-performance engineering.
        </h2>
        <p className="mt-6 max-w-3xl text-base font-medium leading-relaxed text-[#5c5588]/90 md:text-lg">
          Our team blends expressive interfaces, smooth motion, and robust technical foundations to craft websites and apps people genuinely enjoy using.
        </p>
      </motion.div>
    </section>
  );
}
