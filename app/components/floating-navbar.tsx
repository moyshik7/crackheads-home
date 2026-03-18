"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const navItems = [
  { href: "/webdev", label: "Web Dev" },
  { href: "/appdev", label: "App Dev" },
  { href: "/solutions", label: "Solutions" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
];

export function FloatingNavbar() {
  return (
    <motion.header
      className="fixed top-4 left-1/2 z-50 w-[92%] max-w-3xl -translate-x-1/2"
      initial={{ opacity: 0, y: -40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 130, damping: 18 }}
    >
      <nav className="mx-auto flex items-center justify-between rounded-full border border-white/40 bg-white/45 px-4 py-3 backdrop-blur-2xl shadow-[0_10px_40px_rgba(255,190,214,0.35)] md:px-6">
        <Link
          href="/"
          className="text-sm font-extrabold tracking-wide text-[#6f67a5] md:text-base"
        >
          Crackheads Studio
        </Link>
        <ul className="hidden items-center gap-5 md:flex">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="text-sm font-semibold text-[#6f67a5]/90 transition hover:text-[#4f477b]"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <Link
          href="/contact"
          data-cursor="hover"
          className="rounded-full bg-linear-to-r from-[#ffc2dc] via-[#b9d9ff] to-[#bff4cf] px-4 py-2 text-sm font-bold text-[#4f477b] shadow-[0_8px_22px_rgba(173,206,255,0.55)] transition hover:scale-105"
        >
          Let&apos;s Talk
        </Link>
      </nav>
    </motion.header>
  );
}
