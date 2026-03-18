"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const marqueeText = "LATEST WORK • SWEET APPS • BEAUTIFUL WEBSITES • ";

const projects = [
  {
    name: "Clothing Storefront",
    tone: "from-[#ffc9da] to-[#ffdfb8]",
    screenshot: "/images/ss/clothing-example.webp",
  },
  {
    name: "Pet Marketplace",
    tone: "from-[#bbecff] to-[#c7f3d5]",
    screenshot: "/images/ss/pet-example.webp",
  },
  {
    name: "Vape Commerce",
    tone: "from-[#d9ccff] to-[#ffcce4]",
    screenshot: "/images/ss/vape-example.webp",
  },
  {
    name: "Mindspace",
    tone: "from-[#fff1b0] to-[#c8f5c9]",
    screenshot: "/images/projects/mindspace.webp",
  },
];

export function WorkSection() {
  return (
    <section id="work" className="overflow-hidden py-18 md:py-24">
      <div className="relative mb-10 overflow-hidden border-y border-white/60 bg-white/45 py-5 backdrop-blur-xl">
        <motion.div
          className="flex min-w-max gap-2 text-3xl font-black tracking-wide text-[#62588d] md:text-5xl"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 17, repeat: Infinity, ease: "linear" }}
        >
          <span>{marqueeText.repeat(5)}</span>
          <span>{marqueeText.repeat(5)}</span>
        </motion.div>
      </div>

      <motion.div
        className="mx-auto grid max-w-7xl gap-5 px-6 pb-2 sm:grid-cols-2 lg:grid-cols-4 md:px-10"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ type: "spring", stiffness: 90, damping: 18 }}
      >
        {projects.map((project, index) => (
          <motion.article
            key={project.name}
            className={`group relative h-88 w-full overflow-hidden rounded-4xl bg-linear-to-br ${project.tone} p-6 shadow-[0_24px_45px_rgba(154,155,235,0.32)]`}
            initial={{ opacity: 0, y: 80, rotate: -4 }}
            whileInView={{ opacity: 1, y: 0, rotate: -2 }}
            viewport={{ once: true }}
            transition={{
              type: "spring",
              stiffness: 110,
              damping: 18,
              delay: index * 0.08,
            }}
            whileHover={{
              rotate: 0,
              y: -8,
              scale: 1.02,
              boxShadow: "0 40px 70px rgba(255,170,198,0.35)",
            }}
          >
            <div className="absolute inset-0">
              <Image
                src={project.screenshot}
                alt={`${project.name} screenshot`}
                fill
                className="object-cover opacity-70 transition duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
              />
            </div>
            <div className="absolute inset-0 bg-white/35" />
            <div className="relative flex h-full flex-col justify-between rounded-3xl bg-white/40 p-5 backdrop-blur-md">
              <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#675c95]/75">
                Featured Project
              </span>
              <h3 className="text-3xl font-black text-[#534a84] md:text-4xl">{project.name}</h3>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}
