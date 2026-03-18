"use client";

import { motion } from "framer-motion";
import { ArrowRight, BadgeCheck, Smartphone, Sparkles, Workflow } from "lucide-react";
import Link from "next/link";

const appTypes = [
  "Android and iOS consumer apps",
  "Cross-platform apps for startups",
  "Booking, delivery, and service apps",
  "Marketplace and commerce apps",
  "SaaS companion apps and mobile dashboards",
  "Internal operations and field-force apps",
  "Community and social interaction apps",
  "Education, coaching, and learning apps",
  "Loyalty and subscription product apps",
];

const processSteps = [
  {
    title: "Product discovery and feature planning",
    detail:
      "We identify the minimum lovable version of your app, prioritize features, and map user journeys so the first release stays useful and focused.",
  },
  {
    title: "UX flows and interface system",
    detail:
      "We design intuitive app screens, transitions, and reusable components. The goal is a playful but practical interface your users can navigate effortlessly.",
  },
  {
    title: "Agile build and API integration",
    detail:
      "We develop in weekly milestones, connect backend services, and implement core states like auth, notifications, payments, and sync logic.",
  },
  {
    title: "Testing, release prep, and iteration",
    detail:
      "We test on real device sizes and network conditions, support release handoff, and then improve retention and performance with real usage data.",
  },
];

const pricing = [
  {
    name: "Starter",
    scope: "Perfect for simple app/web launches and lightweight product goals.",
    range: "3,500 to 6,000 BDT",
    note: "Best for early products that need speed and low cost.",
  },
  {
    name: "Business",
    scope: "For businesses that need stronger flows, better UX, and extra functionality.",
    range: "6,000 to 10,000 BDT",
    note: "Balanced package for teams growing their product quality.",
  },
  {
    name: "Pro",
    scope: "For advanced builds with higher customization and conversion-focused UX.",
    range: "10,000 to 15,000 BDT",
    note: "Good fit when you need premium design and deeper feature work.",
  },
  {
    name: "E commerce",
    scope: "Catalog size, checkout complexity, and order volume define the quote.",
    range: "Depending on volume",
    note: "We estimate this after understanding product count and operational flow.",
  },
];

const operatingModel = [
  "Weekly sprint updates with clear priorities",
  "Direct founder or manager communication channel",
  "Clickable previews before full feature completion",
  "Transparent estimate updates when scope changes",
  "Post-launch roadmap support and maintenance",
];

export function AppdevPageContent() {
  return (
    <main className="px-6 pb-16 pt-28 md:px-10 md:pb-20 md:pt-34">
      <section className="relative mx-auto max-w-6xl overflow-hidden rounded-[2.5rem] bg-linear-to-br from-[#ffe8f2]/90 via-[#e4ecff]/90 to-[#d9ffed]/90 p-8 shadow-[0_30px_65px_rgba(162,176,255,0.3)] backdrop-blur-xl md:p-12">
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

        <p className="text-xs font-black uppercase tracking-widest text-[#665c95]/85">App Development</p>
        <h1 className="mt-3 max-w-4xl text-4xl font-black leading-tight text-[#4f477b] sm:text-5xl md:text-7xl">
          We craft mobile and cross-platform apps users actually enjoy using.
        </h1>
        <p className="mt-5 max-w-3xl text-base font-semibold text-[#5f588c]/90 md:text-lg">
          From MVP launches to feature-rich app products, we combine thoughtful UX, practical architecture, and continuous iteration.
          You get a team that ships quickly while keeping long-term maintainability in check.
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
          <p className="text-sm font-black uppercase tracking-widest">What apps we can build</p>
        </div>
        <p className="max-w-4xl text-sm font-semibold text-[#5f588c]/88 md:text-base">
          We build customer-facing products, business apps, and hybrid systems that work across devices. Need a lightweight MVP or an operations-heavy app?
          We scope for your current stage and future roadmap.
        </p>
        <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {appTypes.map((item, index) => (
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
          <p className="text-sm font-black uppercase tracking-widest">How we build apps</p>
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
          <p className="text-sm font-black uppercase tracking-widest">Experience and reliability</p>
        </div>
        <p className="max-w-4xl text-sm font-semibold text-[#5f588c]/88 md:text-base">
          We have shipped app projects for early-stage products and scaling teams. Our focus is to move quickly without sacrificing architecture,
          so your app remains stable while new features are added over time.
        </p>
        <div className="mt-5 grid gap-3 md:grid-cols-3">
          <article className="rounded-2xl bg-[#fefcff]/88 p-5">
            <p className="text-3xl font-black text-[#4f477b]">30+</p>
            <p className="mt-1 text-sm font-bold text-[#5f588c]/90">App experiences and product modules delivered</p>
          </article>
          <article className="rounded-2xl bg-[#fefcff]/88 p-5">
            <p className="text-3xl font-black text-[#4f477b]">Weekly</p>
            <p className="mt-1 text-sm font-bold text-[#5f588c]/90">Milestones with visible progress checkpoints</p>
          </article>
          <article className="rounded-2xl bg-[#fefcff]/88 p-5">
            <p className="text-3xl font-black text-[#4f477b]">Real-time</p>
            <p className="mt-1 text-sm font-bold text-[#5f588c]/90">Support for blockers and release-critical updates</p>
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
          <Smartphone size={18} />
          <p className="text-sm font-black uppercase tracking-widest">App pricing estimates (BDT)</p>
        </div>
        <p className="max-w-4xl text-sm font-semibold text-[#5f588c]/88 md:text-base">
          We keep app pricing lower than typical market quotes while maintaining polished UI and dependable code quality.
          Share your roadmap and we will prepare a clearer estimate.
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
          We operate as a delivery partner, not a black-box vendor. You get visibility into tasks, tradeoffs, and release planning from start to finish.
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
            href="/webdev"
            className="group inline-flex items-center gap-2 rounded-full bg-[#4f477b] px-5 py-3 text-sm font-black text-white shadow-[0_10px_24px_rgba(79,71,123,0.35)] transition hover:-translate-y-0.5"
          >
            Explore Web Development
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
