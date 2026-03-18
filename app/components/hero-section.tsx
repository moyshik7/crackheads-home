"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const headline = "We build sweet digital experiences.";

const shapeAnimation = {
  y: [0, -18, 0],
  rotate: [0, 6, 0],
};

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center justify-center px-6 pt-32 pb-16 md:px-10">
      <motion.div
        className="pointer-events-none absolute left-[10%] top-[22%] h-24 w-24 rounded-full bg-[#b9d9ff]/70 blur-[1px]"
        animate={shapeAnimation}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="pointer-events-none absolute right-[8%] top-[25%] h-16 w-16 rounded-[40%] bg-[#ffc6dd]/70"
        animate={{ y: [0, 14, 0], rotate: [0, -12, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="pointer-events-none absolute bottom-[20%] left-[14%] h-14 w-14 rounded-full bg-[#fff1b0]/85"
        animate={{ y: [0, -12, 0], x: [0, 8, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="pointer-events-none absolute right-[14%] bottom-[22%] h-24 w-24 rounded-[44%_56%_67%_33%/50%_40%_60%_50%] bg-[#c8f5c9]/75"
        animate={{ y: [0, -16, 0], x: [0, -10, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 mx-auto max-w-6xl text-center">
        <h1 className="text-balance text-5xl font-black leading-[0.9] text-[#534a84] sm:text-6xl md:text-8xl lg:text-9xl">
          {headline.split("").map((letter, index) => (
            <motion.span
              key={`${letter}-${index}`}
              className="inline-block"
              initial={{ opacity: 0, y: 60, rotate: -8 }}
              animate={{ opacity: 1, y: 0, rotate: 0 }}
              transition={{
                type: "spring",
                stiffness: 320,
                damping: 17,
                mass: 0.35,
                delay: 0.35 + index * 0.03,
              }}
            >
              {letter === " " ? "\u00A0" : letter}
            </motion.span>
          ))}
        </h1>

        <motion.div
          className="mx-auto mt-8 grid max-w-3xl gap-3 sm:grid-cols-2"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, type: "spring", stiffness: 110, damping: 17 }}
        >
          <Link
            href="/webdev"
            className="rounded-3xl bg-white/70 p-4 text-left shadow-[0_14px_30px_rgba(161,172,250,0.28)] backdrop-blur-xl transition hover:-translate-y-0.5"
          >
            <p className="text-xs font-black uppercase tracking-widest text-[#6a6298]">Web Development</p>
            <p className="mt-1 text-2xl font-black text-[#4f477b]">See process + pricing</p>
            <p className="mt-1 text-sm font-semibold text-[#5f588c]/90">/webdev</p>
          </Link>
          <Link
            href="/appdev"
            className="rounded-3xl bg-white/70 p-4 text-left shadow-[0_14px_30px_rgba(161,172,250,0.28)] backdrop-blur-xl transition hover:-translate-y-0.5"
          >
            <p className="text-xs font-black uppercase tracking-widest text-[#6a6298]">App Development</p>
            <p className="mt-1 text-2xl font-black text-[#4f477b]">See process + pricing</p>
            <p className="mt-1 text-sm font-semibold text-[#5f588c]/90">/appdev</p>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
