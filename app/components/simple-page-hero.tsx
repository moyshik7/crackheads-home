"use client";

import { motion } from "framer-motion";

type SimplePageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function SimplePageHero({ eyebrow, title, description }: SimplePageHeroProps) {
  return (
    <section className="px-6 pt-32 pb-10 md:px-10 md:pt-36 md:pb-14">
      <motion.div
        className="mx-auto max-w-6xl rounded-[2.3rem] bg-white/55 p-8 shadow-[0_25px_55px_rgba(172,180,255,0.28)] backdrop-blur-xl md:p-12"
        initial={{ opacity: 0, y: 70 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 90, damping: 16 }}
      >
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#6b6298]">{eyebrow}</p>
        <h1 className="mt-3 text-4xl font-black leading-tight text-[#534a84] sm:text-5xl md:text-7xl">
          {title}
        </h1>
        <p className="mt-4 max-w-3xl text-base font-semibold text-[#5f588c]/85 md:text-lg">
          {description}
        </p>
      </motion.div>
    </section>
  );
}
