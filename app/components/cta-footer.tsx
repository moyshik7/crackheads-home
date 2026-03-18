"use client";

import { ArrowRight } from "lucide-react";
import { motion, useSpring } from "framer-motion";
import { useRef } from "react";

export function CtaFooter() {
  const sectionRef = useRef<HTMLElement | null>(null);

  const x = useSpring(0, { stiffness: 120, damping: 15 });
  const y = useSpring(0, { stiffness: 120, damping: 15 });

  const handleMove = (event: React.MouseEvent<HTMLElement>) => {
    if (!sectionRef.current) return;

    const rect = sectionRef.current.getBoundingClientRect();
    const dx = event.clientX - (rect.left + rect.width / 2);
    const dy = event.clientY - (rect.top + rect.height / 2);

    x.set(dx * 0.08);
    y.set(dy * 0.08);
  };

  const handleLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.footer
      id="contact-cta"
      ref={sectionRef}
      className="px-6 pb-14 pt-24 md:px-10 md:pb-16"
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ type: "spring", stiffness: 90, damping: 18 }}
    >
      <div className="mx-auto max-w-6xl rounded-[2.6rem] bg-white/55 p-8 shadow-[0_28px_60px_rgba(171,182,255,0.32)] backdrop-blur-2xl md:p-14">
        <h2 className="max-w-4xl text-5xl font-black leading-[0.95] text-[#534a84] sm:text-6xl md:text-7xl lg:text-8xl">
          Ready to build something new?
        </h2>
        <motion.div
          style={{ x, y }}
          className="mt-10"
          transition={{ type: "spring", stiffness: 160, damping: 16 }}
        >
          <a
            href="https://wa.me/+8801885596054"
            target="_blank"
            rel="noreferrer"
            data-cursor="hover"
            className="group flex w-full items-center justify-between gap-3 rounded-full bg-linear-to-r from-[#bcefd8] via-[#b9d9ff] to-[#ffd0de] px-6 py-5 text-left shadow-[0_18px_35px_rgba(157,177,255,0.35)] transition hover:scale-[1.02] md:max-w-2xl md:px-8 md:py-6"
          >
            <span className="text-lg font-extrabold text-[#4e467b] md:text-2xl">
              Chat on WhatsApp
            </span>
            <span className="rounded-full bg-white/65 p-2 text-[#4e467b] transition group-hover:translate-x-1">
              <ArrowRight size={24} />
            </span>
          </a>
        </motion.div>
      </div>
    </motion.footer>
  );
}
