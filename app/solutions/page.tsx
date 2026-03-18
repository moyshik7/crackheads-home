import Link from "next/link";
import { SimplePageHero } from "../components/simple-page-hero";

const solutions = [
  {
    href: "/solutions/ecommerce",
    title: "Ecommerce",
    body: "Conversion-optimized online stores with smooth checkout, analytics, and scalable content architecture.",
  },
  {
    href: "/solutions/saas",
    title: "SaaS",
    body: "Product platforms with clear onboarding, role-based access, and maintainable frontend systems.",
  },
  {
    href: "/hosting",
    title: "Hosting",
    body: "Reliable deployment foundations, performance tuning, observability, and uptime-focused operations.",
  },
  {
    href: "/solutions/cyber/security",
    title: "Cyber Security",
    body: "Security hardening, safe auth patterns, and practical protection layers for modern web products.",
  },
];

const outcomeHighlights = [
  "Faster release cycles through better product architecture.",
  "Improved conversion through interaction and UX refinement.",
  "Lower maintenance overhead with modular systems.",
  "Better visibility with practical analytics and monitoring.",
];

export default function SolutionsPage() {
  return (
    <main>
      <SimplePageHero
        eyebrow="Solutions"
        title="Built for growth, tuned for reliability."
        description="Crackheads Studio delivers complete solution tracks for ecommerce, SaaS, hosting, and cyber security needs."
      />

      <section className="px-6 pb-18 md:px-10 md:pb-20">
        <div className="mx-auto grid max-w-6xl gap-5 md:grid-cols-2">
          {solutions.map((solution) => (
            <Link
              key={solution.href}
              href={solution.href}
              className="rounded-4xl bg-white/55 p-7 shadow-[0_20px_45px_rgba(176,170,243,0.22)] backdrop-blur-xl transition hover:-translate-y-1 hover:shadow-[0_30px_55px_rgba(172,180,255,0.29)]"
            >
              <p className="text-xs font-bold uppercase tracking-[0.17em] text-[#6b6298]/75">Solution</p>
              <h2 className="mt-2 text-3xl font-black text-[#4f477b]">{solution.title}</h2>
              <p className="mt-2 font-semibold text-[#5f588c]/90">{solution.body}</p>
            </Link>
          ))}
        </div>

        <div className="mx-auto mt-6 grid max-w-6xl gap-5 md:grid-cols-2">
          <article className="rounded-4xl bg-white/55 p-7 shadow-[0_20px_45px_rgba(176,170,243,0.22)] backdrop-blur-xl">
            <h2 className="text-2xl font-black text-[#4f477b]">Our solutions workflow</h2>
            <ol className="mt-3 space-y-2 font-semibold text-[#5f588c]/90">
              <li>1. Audit current product and technical constraints.</li>
              <li>2. Design an implementation roadmap with clear phases.</li>
              <li>3. Build and ship in measurable weekly milestones.</li>
              <li>4. Optimize post-launch based on user behavior data.</li>
            </ol>
          </article>
          <article className="rounded-4xl bg-white/55 p-7 shadow-[0_20px_45px_rgba(176,170,243,0.22)] backdrop-blur-xl">
            <h2 className="text-2xl font-black text-[#4f477b]">Typical outcomes</h2>
            <ul className="mt-3 space-y-2 font-semibold text-[#5f588c]/90">
              {outcomeHighlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </div>
      </section>
    </main>
  );
}
