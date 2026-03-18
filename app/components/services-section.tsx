"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { MonitorSmartphone, Smartphone } from "lucide-react";
import Link from "next/link";

const extraServices = [
  "UI/UX Product Design",
  "Frontend Architecture",
  "Backend APIs & Integrations",
  "Performance Optimization",
  "Analytics & Experimentation",
  "Maintenance & Growth",
];

type ServiceCardProps = {
  title: string;
  description: string;
  icon: React.ReactNode;
  gradient: string;
};

function ServiceCard({ title, description, icon, gradient }: ServiceCardProps) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [9, -9]), {
    stiffness: 170,
    damping: 20,
  });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-9, 9]), {
    stiffness: 170,
    damping: 20,
  });

  const onMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const xPct = (event.clientX - rect.left) / rect.width;
    const yPct = (event.clientY - rect.top) / rect.height;
    x.set(xPct - 0.5);
    y.set(yPct - 0.5);
  };

  const onLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.article
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      whileHover={{ y: -12, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 220, damping: 18 }}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className={`relative overflow-hidden rounded-[2.25rem] p-8 md:p-10 ${gradient} shadow-[0_30px_60px_rgba(159,160,239,0.28)]`}
    >
      <div className="absolute inset-0 bg-white/25" />
      <div className="relative z-10 flex h-full flex-col gap-6">
        <div className="inline-flex w-max rounded-2xl bg-white/65 p-3 text-[#4f477b] shadow-lg backdrop-blur-md">
          {icon}
        </div>
        <h3 className="text-3xl font-extrabold text-[#4f477b] md:text-4xl">{title}</h3>
        <p className="max-w-md text-base font-medium text-[#4f477b]/85 md:text-lg">{description}</p>
        <div className="mt-4 grid flex-1 place-items-center rounded-3xl bg-white/45 p-6 backdrop-blur-xl">
          {title === "Web Development" ? (
            <div className="w-full max-w-sm rounded-2xl bg-[#fefcf8]/95 p-4 shadow-xl">
              <div className="mb-3 flex gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-[#ffc4c4]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#fff0ab]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#bef5cc]" />
              </div>
              <div className="space-y-2">
                <div className="h-3 w-2/3 rounded-full bg-[#afd6ff]" />
                <div className="h-3 w-full rounded-full bg-[#c9e8ff]" />
                <div className="h-3 w-4/5 rounded-full bg-[#bdecd6]" />
              </div>
            </div>
          ) : (
            <div className="w-44 rounded-4xl bg-[#fefcf8]/95 p-3 shadow-xl">
              <div className="mx-auto mb-3 h-1.5 w-14 rounded-full bg-[#dfd8ff]" />
              <div className="space-y-2 rounded-2xl bg-[#ffe4ef]/55 p-3">
                <div className="h-3 w-3/4 rounded-full bg-[#ffc4de]" />
                <div className="h-3 w-full rounded-full bg-[#fdd4ea]" />
                <div className="h-3 w-2/3 rounded-full bg-[#dbcfff]" />
              </div>
            </div>
          )}
        </div>
      </div>
    </motion.article>
  );
}

export function ServicesSection() {
  return (
    <section id="services" className="px-6 py-20 md:px-10 md:py-28">
      <motion.div
        className="mx-auto max-w-6xl"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ type: "spring", stiffness: 90, damping: 18 }}
      >
        <motion.h2
          className="mb-10 text-4xl font-black text-[#534a84] sm:text-5xl md:text-6xl"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 140, damping: 17 }}
        >
          What we cook up.
        </motion.h2>
        <div className="grid gap-6 md:grid-cols-2">
          <ServiceCard
            title="Web Development"
            description="Fast, expressive websites with smooth interactions and resilient architecture that scales with your growth."
            icon={<MonitorSmartphone size={30} />}
            gradient="bg-gradient-to-br from-[#baf1dd] via-[#cce9ff] to-[#d9d0ff]"
          />
          <ServiceCard
            title="App Development"
            description="Polished mobile and cross-platform app experiences crafted for delightful everyday use and strong performance."
            icon={<Smartphone size={30} />}
            gradient="bg-gradient-to-br from-[#ffd0c0] via-[#ffd7ea] to-[#d9ccff]"
          />
        </div>

        <motion.div
          className="mt-10 rounded-4xl bg-white/55 p-6 shadow-[0_20px_45px_rgba(176,170,243,0.22)] backdrop-blur-xl md:p-8"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ type: "spring", stiffness: 120, damping: 17 }}
        >
          <h3 className="text-2xl font-black text-[#4f477b] md:text-3xl">What we do beyond builds</h3>
          <p className="mt-2 max-w-3xl text-sm font-semibold text-[#5f588c]/85 md:text-base">
            We partner with teams from concept to post-launch growth with hands-on design, engineering, and optimization support.
          </p>
          <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {extraServices.map((item, index) => (
              <motion.div
                key={item}
                className="rounded-2xl bg-linear-to-r from-[#ffe4ef] via-[#d9e8ff] to-[#ccf6d8] p-4 shadow-[0_12px_25px_rgba(175,183,255,0.22)]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: index * 0.06, type: "spring", stiffness: 160, damping: 18 }}
                whileHover={{ scale: 1.02, y: -4 }}
              >
                <p className="font-bold text-[#4f477b]">{item}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="mt-6 rounded-4xl bg-linear-to-r from-[#ffe7f2]/85 via-[#e5edff]/85 to-[#defde8]/85 p-6 shadow-[0_20px_45px_rgba(176,170,243,0.18)] md:p-8"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ type: "spring", stiffness: 120, damping: 17 }}
        >
          <h3 className="text-2xl font-black text-[#4f477b] md:text-3xl">Hosting services for every scale</h3>
          <p className="mt-2 max-w-3xl text-sm font-semibold text-[#5f588c]/90 md:text-base">
            Choose standard infrastructure pricing or go straight to managed corporate plans.
          </p>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            <Link
              href="/hosting"
              className="rounded-3xl bg-white/90 p-4 shadow-[0_10px_20px_rgba(79,71,123,0.15)] transition hover:-translate-y-0.5"
            >
              <p className="text-xs font-black uppercase tracking-[0.12em] text-[#6b6298]">Standard Hosting</p>
              <p className="mt-1 text-xl font-black text-[#4f477b]">/hosting</p>
              <p className="mt-1 text-sm font-semibold text-[#5f588c]/90">VPS, load balancer, n8n, serverless, and bare metal pricing.</p>
            </Link>
            <Link
              href="/corporate-hosting"
              className="rounded-3xl bg-[#4f477b] p-4 shadow-[0_10px_22px_rgba(79,71,123,0.35)] transition hover:-translate-y-0.5"
            >
              <p className="text-xs font-black uppercase tracking-[0.12em] text-[#cfc9ff]">Corporate Hosting</p>
              <p className="mt-1 text-xl font-black text-white">/corporate-hosting</p>
              <p className="mt-1 text-sm font-semibold text-white/90">Agency-focused plans with managed support and enterprise readiness.</p>
            </Link>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
