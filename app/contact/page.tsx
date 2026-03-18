import { Mail, MessageSquare, Phone } from "lucide-react";
import { SimplePageHero } from "../components/simple-page-hero";

const faqs = [
  {
    q: "How quickly can we start?",
    a: "Most projects kick off within one to two weeks after scope alignment.",
  },
  {
    q: "Do you work with existing products?",
    a: "Yes. We frequently improve existing codebases, redesign key flows, and optimize performance.",
  },
  {
    q: "Can you handle design and development together?",
    a: "Absolutely. We run integrated product design and engineering cycles for faster outcomes.",
  },
];

export default function ContactPage() {
  return (
    <main>
      <SimplePageHero
        eyebrow="Contact"
        title="Let&apos;s build your next standout product."
        description="Tell Crackheads Studio what you want to launch, and we&apos;ll bring strategy, design, and engineering together in one smooth build cycle."
      />

      <section className="px-6 pb-18 md:px-10 md:pb-20">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
          <article className="rounded-4xl bg-white/55 p-6 shadow-[0_20px_40px_rgba(176,170,243,0.23)] backdrop-blur-xl">
            <Mail className="mb-4 text-[#5b5288]" />
            <h2 className="text-2xl font-black text-[#4f477b]">Email</h2>
            <a href="mailto:crackheads.dev@gmail.com" className="mt-2 block font-semibold text-[#5f588c]">
              crackheads.dev@gmail.com
            </a>
          </article>
          <article className="rounded-4xl bg-white/55 p-6 shadow-[0_20px_40px_rgba(176,170,243,0.23)] backdrop-blur-xl">
            <Phone className="mb-4 text-[#5b5288]" />
            <h2 className="text-2xl font-black text-[#4f477b]">Phone</h2>
            <p className="mt-2 font-semibold text-[#5f588c]">(+880)18855-96054</p>
          </article>
          <article className="rounded-4xl bg-white/55 p-6 shadow-[0_20px_40px_rgba(176,170,243,0.23)] backdrop-blur-xl">
            <MessageSquare className="mb-4 text-[#5b5288]" />
            <h2 className="text-2xl font-black text-[#4f477b]">Response Time</h2>
            <p className="mt-2 font-semibold text-[#5f588c]">Typically within 24 hours.</p>
          </article>
        </div>

        <div className="mx-auto mt-6 max-w-6xl rounded-4xl bg-white/55 p-7 shadow-[0_20px_45px_rgba(176,170,243,0.23)] backdrop-blur-xl md:p-8">
          <h2 className="text-2xl font-black text-[#4f477b] md:text-3xl">What happens after you reach out</h2>
          <div className="mt-4 grid gap-3 md:grid-cols-3">
            <article className="rounded-2xl bg-[#fdfbff]/80 p-4">
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#6b6298]/75">Intro Call</p>
              <p className="mt-2 font-semibold text-[#5f588c]/90">We map goals, timeline, technical constraints, and key product priorities.</p>
            </article>
            <article className="rounded-2xl bg-[#fdfbff]/80 p-4">
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#6b6298]/75">Scoping</p>
              <p className="mt-2 font-semibold text-[#5f588c]/90">You receive a practical roadmap, delivery phases, and a transparent execution plan.</p>
            </article>
            <article className="rounded-2xl bg-[#fdfbff]/80 p-4">
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#6b6298]/75">Kickoff</p>
              <p className="mt-2 font-semibold text-[#5f588c]/90">We start with shared milestones, weekly updates, and measurable product outcomes.</p>
            </article>
          </div>
        </div>

        <div className="mx-auto mt-6 max-w-6xl rounded-4xl bg-white/55 p-7 shadow-[0_20px_45px_rgba(176,170,243,0.23)] backdrop-blur-xl md:p-8">
          <h2 className="text-2xl font-black text-[#4f477b] md:text-3xl">Frequently asked questions</h2>
          <div className="mt-4 grid gap-3 md:grid-cols-3">
            {faqs.map((faq) => (
              <article key={faq.q} className="rounded-2xl bg-[#fdfbff]/80 p-4">
                <h3 className="font-extrabold text-[#4f477b]">{faq.q}</h3>
                <p className="mt-2 font-semibold text-[#5f588c]/90">{faq.a}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
