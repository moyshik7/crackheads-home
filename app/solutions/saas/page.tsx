import { BarChart3, Users } from "lucide-react";
import { SimplePageHero } from "../../components/simple-page-hero";
import { buildPageMetadata } from "../../lib/seo";

export const metadata = buildPageMetadata({
  title: "SaaS Product Development Solutions",
  description:
    "SaaS development services for onboarding, role-based product UX, analytics dashboards, billing flows, and scalable frontend systems.",
  path: "/solutions/saas",
  keywords: [
    "saas development services",
    "saas product engineering",
    "dashboard development",
    "subscription product development",
    "saas onboarding optimization",
  ],
});

const saasDeliverables = [
  "Guided onboarding flows",
  "Role and permission-aware UI",
  "Feature flag support",
  "Billing and plan UX",
  "Admin tooling",
  "Instrumentation and product analytics",
];

export default function SaasSolutionPage() {
  return (
    <main>
      <SimplePageHero
        eyebrow="Solution / SaaS"
        title="SaaS products that onboard quickly and scale cleanly."
        description="From MVP dashboards to mature platform rewrites, Crackheads Studio builds SaaS interfaces with clarity, speed, and maintainability."
      />

      <section className="px-6 pb-18 md:px-10 md:pb-20">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2">
          <article className="rounded-4xl bg-white/55 p-7 shadow-[0_20px_45px_rgba(176,170,243,0.22)] backdrop-blur-xl">
            <Users className="mb-4 text-[#5b5288]" />
            <h2 className="text-2xl font-black text-[#4f477b]">User Flows</h2>
            <p className="mt-2 font-semibold text-[#5f588c]/90">Guided onboarding, role-aware interfaces, and account management with less friction.</p>
          </article>
          <article className="rounded-4xl bg-white/55 p-7 shadow-[0_20px_45px_rgba(176,170,243,0.22)] backdrop-blur-xl">
            <BarChart3 className="mb-4 text-[#5b5288]" />
            <h2 className="text-2xl font-black text-[#4f477b]">Product Analytics</h2>
            <p className="mt-2 font-semibold text-[#5f588c]/90">Insight-rich dashboards and instrumentation to improve retention and engagement.</p>
          </article>
        </div>

        <div className="mx-auto mt-6 max-w-6xl rounded-4xl bg-white/55 p-7 shadow-[0_20px_45px_rgba(176,170,243,0.22)] backdrop-blur-xl md:p-8">
          <h2 className="text-2xl font-black text-[#4f477b] md:text-3xl">SaaS delivery scope</h2>
          <div className="mt-4 grid gap-3 md:grid-cols-3">
            {saasDeliverables.map((item) => (
              <p key={item} className="rounded-2xl bg-[#fdfbff]/80 px-4 py-3 font-semibold text-[#5f588c]/90">
                {item}
              </p>
            ))}
          </div>
        </div>

        <div className="mx-auto mt-6 grid max-w-6xl gap-5 md:grid-cols-2">
          <article className="rounded-4xl bg-white/55 p-7 shadow-[0_20px_45px_rgba(176,170,243,0.22)] backdrop-blur-xl">
            <h2 className="text-2xl font-black text-[#4f477b]">Architecture priorities</h2>
            <p className="mt-2 font-semibold text-[#5f588c]/90">Reusable component systems, scalable state patterns, and API contracts that reduce delivery risk.</p>
          </article>
          <article className="rounded-4xl bg-white/55 p-7 shadow-[0_20px_45px_rgba(176,170,243,0.22)] backdrop-blur-xl">
            <h2 className="text-2xl font-black text-[#4f477b]">Product priorities</h2>
            <p className="mt-2 font-semibold text-[#5f588c]/90">Clear activation moments, retention-oriented UX loops, and reliable dashboard performance as data scales.</p>
          </article>
        </div>
      </section>
    </main>
  );
}
