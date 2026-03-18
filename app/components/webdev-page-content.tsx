"use client";

import { motion } from "framer-motion";
import { ArrowRight, BadgeCheck, Globe, Sparkles, Workflow } from "lucide-react";
import Link from "next/link";

const webTypes = [
  "Landing pages and launch websites",
  "Corporate and brand websites",
  "eCommerce storefronts (catalog, cart, checkout)",
  "SaaS marketing + product websites",
  "Portfolio and creator websites",
  "News, blog, and content-heavy websites",
  "Booking and appointment websites",
  "Membership and gated content platforms",
  "Custom dashboards and internal portals",
];

const processSteps = [
  {
    title: "Discovery and positioning",
    detail:
      "We map your goals, target audience, and business model first. Then we define the messaging hierarchy and page intent so each section has a conversion purpose.",
  },
  {
    title: "Wireframes and visual direction",
    detail:
      "Before coding, we prototype layouts, interaction ideas, and a visual system that matches your brand. You approve the direction early, which keeps delivery fast.",
  },
  {
    title: "Build with performance in mind",
    detail:
      "We implement responsive UI, SEO architecture, content structure, and analytics hooks. Every page is built to be fast, maintainable, and easy to extend.",
  },
  {
    title: "QA, launch, and growth loop",
    detail:
      "We test across devices, clean up edge cases, and ship with a checklist. After launch, we track behavior and optimize pages for better conversions.",
  },
];

const pricing = [
  {
    name: "Starter",
    scope: "Perfect for simple websites and fresh online launches.",
    range: "3,500 to 6,000 BDT",
    note: "Best for startups and small teams needing a clean web presence.",
  },
  {
    name: "Business",
    scope: "For growing businesses that need deeper structure and clearer conversion flow.",
    range: "6,000 to 10,000 BDT",
    note: "Great balance of polish, structure, and affordability.",
  },
  {
    name: "Pro",
    scope: "For custom feature-rich websites with stronger UX and technical depth.",
    range: "10,000 to 15,000 BDT",
    note: "Ideal when you need higher-end pages and custom behavior.",
  },
  {
    name: "E commerce",
    scope: "Catalog size, payment flow, and operational complexity drive scope.",
    range: "Depending on volume",
    note: "We quote based on product volume and required ecommerce features.",
  },
];

const operatingModel = [
  "Weekly milestone planning and progress reports",
  "Shared task board with transparent status",
  "Fast async communication with same-day updates",
  "Review checkpoints before every major build decision",
  "Post-launch support and iterative optimization",
];

export function WebdevPageContent() {
  return (
    <main className="px-6 pb-16 pt-28 md:px-10 md:pb-20 md:pt-34">
      <section className="relative mx-auto max-w-6xl overflow-hidden rounded-[2.5rem] bg-linear-to-br from-[#ffe7f2]/90 via-[#ddf1ff]/90 to-[#d9ffe8]/90 p-8 shadow-[0_30px_65px_rgba(162,176,255,0.3)] backdrop-blur-xl md:p-12">
        <motion.div
          className="pointer-events-none absolute -left-8 top-12 h-24 w-24 rounded-full bg-[#b4d5ff]/70"
          animate={{ y: [0, -12, 0], x: [0, 10, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="pointer-events-none absolute -right-6 bottom-8 h-20 w-20 rounded-[40%] bg-[#ffc8de]/80"
          animate={{ y: [0, 14, 0], rotate: [0, 12, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />

        <p className="text-xs font-black uppercase tracking-widest text-[#665c95]/85">Web Development</p>
        <h1 className="mt-3 max-w-4xl text-4xl font-black leading-tight text-[#4f477b] sm:text-5xl md:text-7xl">
          We design and build websites that look adorable, load fast, and convert.
        </h1>
        <p className="mt-5 max-w-3xl text-base font-semibold text-[#5f588c]/90 md:text-lg">
          From launch websites to full-scale ecommerce and SaaS fronts, we create polished experiences that are clear, memorable, and engineered for growth.
          Our approach balances cute visual storytelling with strong technical foundations.
        </p>

        <div className="mt-7 flex flex-wrap gap-3">
          <Link
            href="/#services"
            className="rounded-full bg-white/85 px-5 py-3 text-sm font-black text-[#4f477b] shadow-[0_10px_20px_rgba(143,163,240,0.28)] transition hover:-translate-y-0.5"
          >
            Explore Services
          </Link>
          <Link
            href="/"
            className="rounded-full bg-[#4f477b] px-5 py-3 text-sm font-black text-white shadow-[0_10px_24px_rgba(79,71,123,0.35)] transition hover:-translate-y-0.5"
          >
            Back to Homepage
          </Link>
        </div>
      </section>

      <motion.section
        className="mx-auto mt-7 max-w-6xl rounded-4xl bg-white/60 p-7 shadow-[0_20px_40px_rgba(168,168,240,0.22)] backdrop-blur-xl md:p-9"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ type: "spring", stiffness: 95, damping: 17 }}
      >
        <div className="mb-4 flex items-center gap-2 text-[#514882]">
          <Sparkles size={18} />
          <p className="text-sm font-black uppercase tracking-widest">What we can build</p>
        </div>
        <p className="max-w-4xl text-sm font-semibold text-[#5f588c]/88 md:text-base">
          We handle business websites, conversion-focused landing pages, ecommerce platforms, and content ecosystems with clean architecture.
          Whether you need a playful brand website or a high-traffic production setup, we can tailor the stack and workflow to your team.
        </p>
        <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {webTypes.map((item, index) => (
            <motion.p
              key={item}
              className="rounded-2xl bg-linear-to-r from-[#ffe5ef] via-[#e4efff] to-[#dcfce9] p-4 font-bold text-[#4f477b]"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ delay: index * 0.05, type: "spring", stiffness: 160, damping: 17 }}
            >
              {item}
            </motion.p>
          ))}
        </div>
      </motion.section>

      <motion.section
        className="mx-auto mt-7 max-w-6xl rounded-4xl bg-white/60 p-7 shadow-[0_20px_40px_rgba(168,168,240,0.22)] backdrop-blur-xl md:p-9"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ type: "spring", stiffness: 95, damping: 17 }}
      >
        <div className="mb-4 flex items-center gap-2 text-[#514882]">
          <Workflow size={18} />
          <p className="text-sm font-black uppercase tracking-widest">How we create websites</p>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {processSteps.map((step, index) => (
            <motion.article
              key={step.title}
              className="rounded-2xl bg-[#fefcff]/88 p-5"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ delay: index * 0.07, type: "spring", stiffness: 150, damping: 18 }}
            >
              <p className="text-xs font-black uppercase tracking-widest text-[#6a6297]/80">Step {index + 1}</p>
              <h2 className="mt-2 text-xl font-black text-[#4f477b]">{step.title}</h2>
              <p className="mt-2 text-sm font-semibold text-[#5f588c]/90 md:text-base">{step.detail}</p>
            </motion.article>
          ))}
        </div>
      </motion.section>

      <motion.section
        className="mx-auto mt-7 max-w-6xl rounded-4xl bg-white/60 p-7 shadow-[0_20px_40px_rgba(168,168,240,0.22)] backdrop-blur-xl md:p-9"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ type: "spring", stiffness: 95, damping: 17 }}
      >
        <div className="mb-4 flex items-center gap-2 text-[#514882]">
          <BadgeCheck size={18} />
          <p className="text-sm font-black uppercase tracking-widest">Experience and delivery confidence</p>
        </div>
        <p className="max-w-4xl text-sm font-semibold text-[#5f588c]/88 md:text-base">
          Our team has shipped work for startups, growing local businesses, and international clients. We combine practical product strategy,
          clean engineering, and conversion-aware design to help you launch with confidence and improve over time.
        </p>
        <div className="mt-5 grid gap-3 md:grid-cols-3">
          <article className="rounded-2xl bg-[#fefcff]/88 p-5">
            <p className="text-3xl font-black text-[#4f477b]">50+</p>
            <p className="mt-1 text-sm font-bold text-[#5f588c]/90">Landing pages and business websites delivered</p>
          </article>
          <article className="rounded-2xl bg-[#fefcff]/88 p-5">
            <p className="text-3xl font-black text-[#4f477b]">95%</p>
            <p className="mt-1 text-sm font-bold text-[#5f588c]/90">Projects launched within agreed timeline windows</p>
          </article>
          <article className="rounded-2xl bg-[#fefcff]/88 p-5">
            <p className="text-3xl font-black text-[#4f477b]">Ongoing</p>
            <p className="mt-1 text-sm font-bold text-[#5f588c]/90">Post-launch optimization support for growth</p>
          </article>
        </div>
      </motion.section>

      <motion.section
        className="mx-auto mt-7 max-w-6xl rounded-4xl bg-linear-to-br from-[#ffe8f1]/80 via-[#e7f0ff]/80 to-[#defde8]/80 p-7 shadow-[0_20px_40px_rgba(168,168,240,0.24)] md:p-9"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ type: "spring", stiffness: 95, damping: 17 }}
      >
        <div className="mb-4 flex items-center gap-2 text-[#514882]">
          <Globe size={18} />
          <p className="text-sm font-black uppercase tracking-widest">Website pricing estimates (BDT)</p>
        </div>
        <p className="max-w-4xl text-sm font-semibold text-[#5f588c]/88 md:text-base">
          These estimates are intentionally kept below common market averages while maintaining quality and maintainability.
          Final cost depends on features, timeline, and integrations.
        </p>
        <p className="mt-3 rounded-2xl bg-white/70 px-4 py-3 text-sm font-black text-[#4f477b] shadow-[0_10px_20px_rgba(127,129,201,0.18)] md:text-base">
          First year hosting is on us.
        </p>
        <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {pricing.map((plan, index) => (
            <motion.article
              key={plan.name}
              className="rounded-2xl bg-white/86 p-5 shadow-[0_12px_24px_rgba(127,129,201,0.2)]"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ delay: index * 0.08, type: "spring", stiffness: 150, damping: 18 }}
            >
              <p className="text-xs font-black uppercase tracking-widest text-[#6a6297]/80">{plan.name}</p>
              <p className="mt-2 text-2xl font-black text-[#4f477b]">{plan.range}</p>
              <p className="mt-2 text-sm font-semibold text-[#5f588c]/90">{plan.scope}</p>
              <p className="mt-3 text-sm font-bold text-[#554d86]">{plan.note}</p>
            </motion.article>
          ))}
        </div>
      </motion.section>

      <motion.section
        className="mx-auto mt-7 max-w-6xl rounded-4xl bg-white/60 p-7 shadow-[0_20px_40px_rgba(168,168,240,0.22)] backdrop-blur-xl md:p-9"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ type: "spring", stiffness: 95, damping: 17 }}
      >
        <h2 className="text-2xl font-black text-[#4f477b] md:text-3xl">How we operate</h2>
        <p className="mt-2 max-w-4xl text-sm font-semibold text-[#5f588c]/88 md:text-base">
          We operate like an extension of your team: fast communication, clear planning, and accountable delivery. No disappearing, no vague status, no hidden process.
        </p>
        <ul className="mt-5 grid gap-3 md:grid-cols-2">
          {operatingModel.map((item) => (
            <li key={item} className="rounded-2xl bg-[#fefcff]/88 px-4 py-3 font-bold text-[#554d86]">
              {item}
            </li>
          ))}
        </ul>

        <div className="mt-7 flex flex-wrap gap-3">
          <Link
            href="/appdev"
            className="group inline-flex items-center gap-2 rounded-full bg-[#4f477b] px-5 py-3 text-sm font-black text-white shadow-[0_10px_24px_rgba(79,71,123,0.35)] transition hover:-translate-y-0.5"
          >
            Explore App Development
            <ArrowRight size={16} className="transition group-hover:translate-x-0.5" />
          </Link>
          <Link
            href="/contact"
            className="rounded-full bg-white px-5 py-3 text-sm font-black text-[#4f477b] shadow-[0_10px_22px_rgba(131,137,214,0.26)] transition hover:-translate-y-0.5"
          >
            Request Your Quote
          </Link>
        </div>
      </motion.section>
    </main>
  );
}
