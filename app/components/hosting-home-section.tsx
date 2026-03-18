"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const highlights = [
  "VPS and dedicated servers",
  "n8n hosting from 499 BDT",
  "Serverless inference calculator",
  "Specialized Next.js hosting",
];

export function HostingHomeSection() {
  return (
    <section className="px-6 py-16 md:px-10 md:py-24">
      <motion.div
        className="mx-auto max-w-6xl overflow-hidden rounded-[2.5rem] bg-linear-to-br from-[#ffe3ef] via-[#ddf5ff] to-[#d7ffe6] p-7 shadow-[0_28px_60px_rgba(152,191,255,0.32)] md:p-10"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ type: "spring", stiffness: 100, damping: 16 }}
      >
        <p className="text-xs font-black uppercase tracking-[0.2em] text-[#5d508c]/80">Sweet new section</p>
        <h2 className="mt-3 text-4xl font-black leading-tight text-[#4f477b] md:text-5xl">Hosting, but make it cute.</h2>
        <p className="mt-3 max-w-3xl font-semibold text-[#5f588c]/90">
          Pick your stack from tiny VPS to monster bare metal, then estimate costs live with our serverless and Next.js calculator.
        </p>

        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          {highlights.map((item, index) => (
            <motion.p
              key={item}
              className="rounded-2xl bg-white/70 px-4 py-3 font-bold text-[#4f477b]"
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.06, type: "spring", stiffness: 170, damping: 18 }}
            >
              {item}
            </motion.p>
          ))}
        </div>

        <div className="mt-7">
          <Link
            href="/hosting"
            className="inline-flex rounded-full bg-[#4f477b] px-6 py-3 text-sm font-black uppercase tracking-widest text-white shadow-[0_10px_26px_rgba(79,71,123,0.35)] transition hover:-translate-y-0.5"
          >
            View Hosting Prices
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
