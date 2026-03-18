"use client";

import { motion } from "framer-motion";

export function PastelMeshBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-[#fffaf2]" />
      <motion.div
        className="absolute -top-28 -left-24 h-[38rem] w-[38rem] rounded-full bg-[#d9ccff]/60 blur-3xl"
        animate={{ x: [0, 60, -20, 0], y: [0, 20, 60, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/4 -right-24 h-[34rem] w-[34rem] rounded-full bg-[#ffccbc]/60 blur-3xl"
        animate={{ x: [0, -80, -20, 0], y: [0, -60, 30, 0] }}
        transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-24 left-1/4 h-[30rem] w-[30rem] rounded-full bg-[#bff3ea]/60 blur-3xl"
        animate={{ x: [0, -40, 50, 0], y: [0, 40, -30, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-20 -left-10 h-[24rem] w-[24rem] rounded-full bg-[#fff0ab]/65 blur-3xl"
        animate={{ x: [0, 30, -10, 0], y: [0, -20, 25, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
