import { Sparkles, Zap } from "lucide-react";
import { SimplePageHero } from "../components/simple-page-hero";
import { buildPageMetadata } from "../lib/seo";

export const metadata = buildPageMetadata({
  title: "About Crackheads Studio",
  description:
    "Learn how Crackheads Studio combines product strategy, design, and engineering to deliver fast, maintainable web and app experiences.",
  path: "/about",
  keywords: [
    "about crackheads studio",
    "product design team",
    "web engineering studio",
    "app development experts",
  ],
});

const principles = [
  "Design with emotion, ship with precision.",
  "Move quickly without sacrificing maintainability.",
  "Use data to refine product decisions post-launch.",
  "Keep communication clear, transparent, and proactive.",
];

export default function AboutPage() {
  return (
    <main>
      <SimplePageHero
        eyebrow="About Us"
        title="Crackheads Studio is where cute meets seriously fast."
        description="We are a Web and App Development studio obsessed with delightful interfaces, thoughtful architecture, and product outcomes that feel effortless for users."
      />

      <section className="px-6 pb-18 md:px-10 md:pb-20">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2">
          <article className="rounded-4xl bg-white/55 p-7 shadow-[0_20px_45px_rgba(176,170,243,0.22)] backdrop-blur-xl">
            <Sparkles className="mb-4 text-[#5b5288]" />
            <h2 className="text-2xl font-black text-[#4f477b]">Our Approach</h2>
            <p className="mt-2 font-semibold text-[#5f588c]/90">
              We blend product strategy, motion design, and robust engineering into one continuous flow so launches are smooth and measurable.
            </p>
          </article>
          <article className="rounded-4xl bg-white/55 p-7 shadow-[0_20px_45px_rgba(176,170,243,0.22)] backdrop-blur-xl">
            <Zap className="mb-4 text-[#5b5288]" />
            <h2 className="text-2xl font-black text-[#4f477b]">What We Value</h2>
            <p className="mt-2 font-semibold text-[#5f588c]/90">
              Performance first, joyful interfaces, and transparent collaboration. We ship with care and maintain with pride.
            </p>
          </article>
        </div>

        <div className="mx-auto mt-6 max-w-6xl rounded-4xl bg-white/55 p-7 shadow-[0_20px_45px_rgba(176,170,243,0.22)] backdrop-blur-xl md:p-8">
          <h2 className="text-2xl font-black text-[#4f477b] md:text-3xl">How we work with clients</h2>
          <div className="mt-5 grid gap-3 md:grid-cols-2">
            <article className="rounded-2xl bg-[#fdfbff]/80 p-5">
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#6b6298]/75">01 Discovery</p>
              <p className="mt-2 font-semibold text-[#5f588c]/90">We clarify goals, constraints, and user needs in focused strategy sessions.</p>
            </article>
            <article className="rounded-2xl bg-[#fdfbff]/80 p-5">
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#6b6298]/75">02 Product Design</p>
              <p className="mt-2 font-semibold text-[#5f588c]/90">We prototype flows, define visual direction, and align interaction behavior before build.</p>
            </article>
            <article className="rounded-2xl bg-[#fdfbff]/80 p-5">
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#6b6298]/75">03 Engineering</p>
              <p className="mt-2 font-semibold text-[#5f588c]/90">We implement scalable frontend and backend systems with performance and maintainability in mind.</p>
            </article>
            <article className="rounded-2xl bg-[#fdfbff]/80 p-5">
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#6b6298]/75">04 Growth</p>
              <p className="mt-2 font-semibold text-[#5f588c]/90">After launch, we optimize conversion, retention, and speed with measurable improvement loops.</p>
            </article>
          </div>
        </div>

        <div className="mx-auto mt-6 max-w-6xl rounded-4xl bg-white/55 p-7 shadow-[0_20px_45px_rgba(176,170,243,0.22)] backdrop-blur-xl md:p-8">
          <h2 className="text-2xl font-black text-[#4f477b] md:text-3xl">Studio principles</h2>
          <ul className="mt-4 grid gap-3 md:grid-cols-2">
            {principles.map((item) => (
              <li key={item} className="rounded-2xl bg-[#fdfbff]/80 px-4 py-3 font-semibold text-[#5f588c]/90">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
