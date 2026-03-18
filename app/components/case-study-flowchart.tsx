"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";

type Step = {
  title: string;
  blurb: string;
  cue: string;
};

const steps: Step[] = [
  {
    title: "Problem framing and target metrics",
    blurb:
      "We align on user pain points, business constraints, and success criteria before touching UI or code.",
    cue: "Inputs: goals, constraints, audience",
  },
  {
    title: "Design and engineering decisions made",
    blurb:
      "We map interaction choices to technical architecture so implementation stays fast, clear, and scalable.",
    cue: "Outputs: wireflows, component rules, system choices",
  },
  {
    title: "Performance and conversion outcomes",
    blurb:
      "We track speed, usability, and conversion signals to validate real-world impact after shipping.",
    cue: "Signals: Core Web Vitals, CVR, retention",
  },
  {
    title: "Post-launch iteration roadmap",
    blurb:
      "We prioritize next improvements with a staged roadmap based on evidence, not guesswork.",
    cue: "Plan: quick wins, medium bets, long-term upgrades",
  },
];

export function CaseStudyFlowchart() {
  const [activeStep, setActiveStep] = useState(0);

  const progress = useMemo(() => ((activeStep + 1) / steps.length) * 100, [activeStep]);

  return (
    <article className="relative">

      <h2 className="relative z-10 text-2xl font-black text-[#4f477b]">How our case studies are structured</h2>
      <p className="relative z-10 mt-2 max-w-2xl text-sm font-semibold text-[#5f588c]/85">
        Click any step in the flow to inspect what we produce at that stage.
      </p>

      <div className="relative z-10 mt-5 h-2 w-full overflow-hidden rounded-full bg-white/70">
        <motion.div
          className="h-full rounded-full bg-linear-to-r from-[#6a5fd2] via-[#4f477b] to-[#4f477b]"
          animate={{ width: `${progress}%` }}
          transition={{ type: "spring", stiffness: 180, damping: 24 }}
        />
      </div>

      <div className="relative z-10 mt-6 flex flex-col gap-3 md:flex-row md:items-stretch">
        {steps.map((step, index) => {
          const isActive = index === activeStep;

          return (
            <div key={step.title} className="flex items-center gap-3 md:flex-1 md:gap-2">
              <motion.button
                type="button"
                onClick={() => setActiveStep(index)}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full rounded-2xl border px-4 py-3 text-left transition ${
                  isActive
                    ? "border-[#5a4fac] bg-[#4f477b] text-white shadow-[0_16px_32px_rgba(79,71,123,0.35)]"
                    : "border-white/80 bg-white/75 text-[#4f477b] hover:border-[#d3cbff]"
                }`}
              >
                <p className={`text-xs font-black uppercase tracking-[0.14em] ${isActive ? "text-white/85" : "text-[#6b6298]/75"}`}>
                  Step {index + 1}
                </p>
                <p className="mt-1 text-sm font-extrabold leading-snug">{step.title}</p>
              </motion.button>

              {index < steps.length - 1 ? (
                <motion.span
                  className="hidden text-lg font-black text-[#6b6298]/65 md:inline"
                  animate={{ x: [0, 4, 0], opacity: [0.45, 1, 0.45] }}
                  transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut", delay: index * 0.15 }}
                >
                  -&gt;
                </motion.span>
              ) : null}
            </div>
          );
        })}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={steps[activeStep].title}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="relative z-10 mt-5 rounded-2xl border border-white/70 bg-white/70 p-5"
        >
          <p className="text-xs font-black uppercase tracking-[0.15em] text-[#6b6298]/75">Active Stage</p>
          <h3 className="mt-1 text-xl font-black text-[#4f477b]">{steps[activeStep].title}</h3>
          <p className="mt-2 font-semibold text-[#5f588c]/90">{steps[activeStep].blurb}</p>
          <p className="mt-3 rounded-xl bg-[#f3efff] px-3 py-2 text-xs font-bold uppercase tracking-[0.12em] text-[#5e55a0]">
            {steps[activeStep].cue}
          </p>
        </motion.div>
      </AnimatePresence>
    </article>
  );
}