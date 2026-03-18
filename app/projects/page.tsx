import { SimplePageHero } from "../components/simple-page-hero";

const projects = [
  "Bloom Basket Commerce",
  "PulseFit Companion App",
  "Clover Cloud Dashboard",
  "SunnyCart Checkout Revamp",
  "Nook Hosting Control Panel",
  "Kindred SaaS Analytics",
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
              key={project}
              className="group rounded-4xl bg-linear-to-br from-[#ffe0ec] via-[#d9e8ff] to-[#ccf6d8] p-5 shadow-[0_22px_44px_rgba(173,184,255,0.27)] transition hover:-translate-y-2 hover:shadow-[0_35px_60px_rgba(255,170,198,0.32)]"
            >
              <div className="rounded-[1.4rem] bg-white/60 p-5 backdrop-blur-md">
                <p className="text-xs font-bold uppercase tracking-[0.17em] text-[#6b6298]/75">Case Study</p>
                <h2 className="mt-2 text-2xl font-black leading-tight text-[#4f477b]">{project}</h2>
                <p className="mt-3 text-sm font-semibold text-[#5f588c]/90">High-converting visuals, snappy UX, and scalable code foundations.</p>
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

        <div className="mx-auto mt-6 grid max-w-6xl gap-5 md:grid-cols-2">
          <article className="rounded-4xl bg-white/55 p-7 shadow-[0_22px_44px_rgba(173,184,255,0.27)] backdrop-blur-xl">
            <h2 className="text-2xl font-black text-[#4f477b]">How our case studies are structured</h2>
            <ul className="mt-3 space-y-2 font-semibold text-[#5f588c]/90">
              <li>Problem framing and target metrics.</li>
              <li>Design and engineering decisions made.</li>
              <li>Performance and conversion outcomes.</li>
              <li>Post-launch iteration roadmap.</li>
            </ul>
          </article>
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
