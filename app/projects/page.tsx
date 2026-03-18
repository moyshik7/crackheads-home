import Image from "next/image";
import Link from "next/link";
import { CaseStudyFlowchart } from "../components/case-study-flowchart";
import { SimplePageHero } from "../components/simple-page-hero";
import { buildPageMetadata } from "../lib/seo";

export const metadata = buildPageMetadata({
  title: "Project Portfolio and Case Studies",
  description:
    "Explore Crackheads Studio case studies across ecommerce, SaaS, mobile apps, hosting tools, and product growth systems.",
  path: "/projects",
  keywords: [
    "web development portfolio",
    "saas case studies",
    "ecommerce project examples",
    "software project gallery",
  ],
});

const projects = [
  {
    name: "Mindspace",
    description:
      "Mental health awareness platform combining social content, Moner Golpogulo podcast, Vent hotline support, and future community care initiatives.",
    image: "/images/projects/mindspace.webp",
    href: "https://www.mindspacebd.com/",
  },
  {
    name: "চিত্রলেখা",
    description: "অনলাইনে প্রকাশিত ত্রৈমাসিক ম্যাগাজিন, যেখানে শিল্প, সাহিত্য ও সমসাময়িক ভাবনা নিয়মিতভাবে প্রকাশিত হয়।",
    image: "/images/projects/chitrolekha.webp",
    href: "https://www.instagram.com/chitrolekha200",
  },
  {
    name: "Acequad Clothing Store",
    description: "Fashion ecommerce storefront with fast filtering, bold product storytelling, and conversion-focused checkout interactions.",
    image: "/images/ss/clothing-example.webp",
  },
  {
    name: "PulseFit Companion App",
    description: "Companion app experience with clear navigation, interactive modules, and smooth mobile-first performance tuning.",
    image: "/images/ss/pet-example.webp",
  },
  {
    name: "Clover Cloud Shop",
    description: "Cloud commerce interface designed for quick discovery, stronger retention loops, and maintainable frontend architecture.",
    image: "/images/ss/vape-example.webp",
  },
  {
    name: "Nook Hosting Control Panel",
    description: "Hosting dashboard concept focused on clarity, operational speed, and scalable controls for growing teams.",
    image: "/images/logo-round.png",
  },
];

const categories = ["Ecommerce", "SaaS Platforms", "Mobile Apps", "Hosting Tools", "Cyber Security", "Growth Systems"];

export default function ProjectsPage() {
  return (
    <main>
      <SimplePageHero
        eyebrow="Projects Gallery"
        title="A playful gallery of things we&apos;ve built."
        description="From expressive commerce to production-ready SaaS and reliable infrastructure tooling, these are crafted by Crackheads Studio."
      />

      <section className="px-6 pb-18 md:px-10 md:pb-20">
        <div className="mx-auto grid max-w-6xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.name}
              className="group rounded-4xl bg-linear-to-br from-[#ffe0ec] via-[#d9e8ff] to-[#ccf6d8] p-5 shadow-[0_22px_44px_rgba(173,184,255,0.27)] transition hover:-translate-y-2 hover:shadow-[0_35px_60px_rgba(255,170,198,0.32)]"
            >
              <div className="rounded-[1.4rem] bg-white/60 p-5 backdrop-blur-md">
                <div className="relative mb-4 h-44 overflow-hidden rounded-2xl">
                  <Image
                    src={project.image}
                    alt={`${project.name} project cover`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <p className="text-xs font-bold uppercase tracking-[0.17em] text-[#6b6298]/75">Case Study</p>
                <h2 className="mt-2 text-2xl font-black leading-tight text-[#4f477b]">{project.name}</h2>
                <p className="mt-3 text-sm font-semibold text-[#5f588c]/90">{project.description}</p>
                {project.href ? (
                  <Link
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex rounded-full bg-[#4f477b] px-4 py-2 text-xs font-black uppercase tracking-[0.12em] text-white transition hover:-translate-y-0.5"
                  >
                    Visit Project
                  </Link>
                ) : null}
              </div>
            </article>
          ))}
        </div>

        <div className="mx-auto mt-6 max-w-6xl rounded-4xl bg-white/55 p-7 shadow-[0_22px_44px_rgba(173,184,255,0.27)] backdrop-blur-xl md:p-8">
          <h2 className="text-2xl font-black text-[#4f477b] md:text-3xl">Project categories we actively ship</h2>
          <div className="mt-4 flex flex-wrap gap-3">
            {categories.map((category) => (
              <span
                key={category}
                className="rounded-full bg-linear-to-r from-[#ffe0ec] via-[#d9e8ff] to-[#ccf6d8] px-4 py-2 text-sm font-bold text-[#4f477b] shadow-[0_10px_20px_rgba(173,184,255,0.22)]"
              >
                {category}
              </span>
            ))}
          </div>
        </div>

        <div className="mx-auto mt-6 max-w-6xl">
          <CaseStudyFlowchart />
        </div>

        <div className="mx-auto mt-6 max-w-6xl">
          <article className="rounded-4xl bg-white/55 p-7 shadow-[0_22px_44px_rgba(173,184,255,0.27)] backdrop-blur-xl">
            <h2 className="text-2xl font-black text-[#4f477b]">Delivery standards across every build</h2>
            <ul className="mt-3 space-y-2 font-semibold text-[#5f588c]/90">
              <li>Responsive-first layouts and smooth interactions.</li>
              <li>Performance budgets and Core Web Vitals focus.</li>
              <li>Clean code with maintainable component systems.</li>
              <li>Clear analytics hooks for growth tracking.</li>
            </ul>
          </article>
        </div>
      </section>
    </main>
  );
}
