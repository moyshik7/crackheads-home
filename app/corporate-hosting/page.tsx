import Link from "next/link";
import { ShieldCheck, Zap, Headphones, BarChart3 } from "lucide-react";
import { SimplePageHero } from "../components/simple-page-hero";

const EXCHANGE_RATE = 140;

const corporateHighlights = [
  {
    title: "Priority expert support",
    body: "Get hands-on onboarding, migration guidance, and technical escalation paths for critical launches.",
    icon: Headphones,
  },
  {
    title: "Security-first stack",
    body: "Managed firewall baselines, continuous patching schedules, and hardened runtime defaults.",
    icon: ShieldCheck,
  },
  {
    title: "High-performance architecture",
    body: "Regional delivery options, cache strategy tuning, and low-latency app routing for fast experiences.",
    icon: Zap,
  },
  {
    title: "Agency reporting",
    body: "Usage and uptime visibility with monthly summaries you can share with your clients.",
    icon: BarChart3,
  },
];

const plansInUsd = [
  {
    name: "Launch",
    usd: 49,
    bestFor: "Growing teams managing a few client projects",
    features: ["Up to 10 sites", "Managed updates", "Priority chat support", "Performance dashboard"],
  },
  {
    name: "Scale",
    usd: 149,
    bestFor: "Agencies with multiple active client retainers",
    features: ["Up to 50 sites", "Team access controls", "Advanced caching", "Dedicated success manager"],
  },
  {
    name: "Enterprise",
    usd: 399,
    bestFor: "Large delivery teams and high-traffic workloads",
    features: ["Unlimited projects", "Architecture review", "24/7 priority support", "Quarterly optimization sessions"],
  },
];

function formatBdt(value: number) {
  return new Intl.NumberFormat("en-US", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
}

export default function CorporateHostingPage() {
  return (
    <main>
      <SimplePageHero
        eyebrow="Corporate Hosting"
        title="Managed hosting for agencies and enterprise teams"
        description="Run client projects with predictable performance, stronger security, and a support layer built for delivery teams."
      />

      <section className="px-6 pb-18 md:px-10 md:pb-20">
        <div className="mx-auto max-w-6xl rounded-4xl bg-white/55 p-7 shadow-[0_20px_45px_rgba(176,170,243,0.22)] backdrop-blur-xl md:p-8">
          <p className="text-sm font-black uppercase tracking-[0.14em] text-[#6b6298]">All prices are in BDT</p>
          <p className="mt-2 font-semibold text-[#5f588c]/90">Converted at 1 USD = 140 BDT.</p>
        </div>

        <div className="mx-auto mt-6 grid max-w-6xl gap-5 md:grid-cols-2">
          {corporateHighlights.map((item) => {
            const Icon = item.icon;
            return (
              <article key={item.title} className="rounded-4xl bg-white/55 p-7 shadow-[0_20px_45px_rgba(176,170,243,0.22)] backdrop-blur-xl">
                <Icon className="mb-4 text-[#5b5288]" />
                <h2 className="text-2xl font-black text-[#4f477b]">{item.title}</h2>
                <p className="mt-2 font-semibold text-[#5f588c]/90">{item.body}</p>
              </article>
            );
          })}
        </div>

        <div className="mx-auto mt-6 max-w-6xl rounded-4xl bg-white/55 p-7 shadow-[0_20px_45px_rgba(176,170,243,0.22)] backdrop-blur-xl md:p-8">
          <h2 className="text-2xl font-black text-[#4f477b] md:text-3xl">Corporate hosting plans</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {plansInUsd.map((plan) => {
              const bdtMonthly = plan.usd * EXCHANGE_RATE;
              return (
                <article key={plan.name} className="rounded-3xl bg-[#fdfbff]/90 p-5">
                  <p className="text-sm font-black uppercase tracking-[0.14em] text-[#6b6298]">{plan.name}</p>
                  <p className="mt-2 text-3xl font-black text-[#4f477b]">{formatBdt(bdtMonthly)} BDT</p>
                  <p className="text-sm font-semibold text-[#5f588c]/90">per month</p>
                  <p className="mt-3 font-semibold text-[#5f588c]/90">{plan.bestFor}</p>
                  <ul className="mt-4 space-y-2">
                    {plan.features.map((feature) => (
                      <li key={feature} className="rounded-xl bg-white px-3 py-2 text-sm font-semibold text-[#5f588c]/90">
                        {feature}
                      </li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>
        </div>

        <div className="mx-auto mt-6 max-w-6xl rounded-4xl bg-white/55 p-7 shadow-[0_20px_45px_rgba(176,170,243,0.22)] backdrop-blur-xl md:p-8">
          <h2 className="text-2xl font-black text-[#4f477b] md:text-3xl">What is included in every plan</h2>
          <div className="mt-5 overflow-x-auto">
            <table className="min-w-full border-separate border-spacing-0 overflow-hidden rounded-2xl">
              <thead>
                <tr>
                  <th className="bg-[#ece8ff] px-4 py-3 text-left text-sm font-black text-[#4f477b]">Capability</th>
                  <th className="bg-[#ece8ff] px-4 py-3 text-left text-sm font-black text-[#4f477b]">Delivery</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border-t border-[#e4ddff] bg-white/70 px-4 py-3 text-sm font-semibold text-[#5f588c]/90">Hosting infrastructure</td>
                  <td className="border-t border-[#e4ddff] bg-white/70 px-4 py-3 text-sm font-semibold text-[#5f588c]/90">Managed deployment stack with uptime-focused configuration</td>
                </tr>
                <tr>
                  <td className="border-t border-[#e4ddff] bg-white/70 px-4 py-3 text-sm font-semibold text-[#5f588c]/90">Support coverage</td>
                  <td className="border-t border-[#e4ddff] bg-white/70 px-4 py-3 text-sm font-semibold text-[#5f588c]/90">Technical support with defined response priorities</td>
                </tr>
                <tr>
                  <td className="border-t border-[#e4ddff] bg-white/70 px-4 py-3 text-sm font-semibold text-[#5f588c]/90">Client scaling</td>
                  <td className="border-t border-[#e4ddff] bg-white/70 px-4 py-3 text-sm font-semibold text-[#5f588c]/90">Resource adjustments for launches, promotions, and growth windows</td>
                </tr>
                <tr>
                  <td className="border-t border-[#e4ddff] bg-white/70 px-4 py-3 text-sm font-semibold text-[#5f588c]/90">Visibility</td>
                  <td className="border-t border-[#e4ddff] bg-white/70 px-4 py-3 text-sm font-semibold text-[#5f588c]/90">Reporting around uptime, usage, and operational health</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="mx-auto mt-6 max-w-6xl rounded-4xl bg-white/55 p-7 text-center shadow-[0_20px_45px_rgba(176,170,243,0.22)] backdrop-blur-xl md:p-10">
          <h2 className="text-3xl font-black text-[#4f477b] md:text-4xl">Need a custom corporate setup?</h2>
          <p className="mt-3 font-semibold text-[#5f588c]/90">
            We can tailor a plan around your client load, security posture, and deployment needs.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/contact"
              className="rounded-full bg-[#4f477b] px-6 py-3 text-sm font-black uppercase tracking-widest text-white shadow-[0_10px_26px_rgba(79,71,123,0.35)] transition hover:-translate-y-0.5"
            >
              Talk to Sales
            </Link>
            <Link
              href="/hosting"
              className="rounded-full bg-white px-6 py-3 text-sm font-black uppercase tracking-widest text-[#4f477b] shadow-[0_10px_26px_rgba(79,71,123,0.18)] transition hover:-translate-y-0.5"
            >
              View Core Hosting Prices
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
