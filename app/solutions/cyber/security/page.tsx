import { Lock, ShieldCheck } from "lucide-react";
import { SimplePageHero } from "../../../components/simple-page-hero";

const securityFocus = [
  "Auth and session hardening",
  "Permission boundary reviews",
  "Secure API interaction patterns",
  "Data handling and encryption checks",
  "Threat-aware frontend architecture",
  "Incident readiness playbooks",
];

export default function CyberSecuritySolutionPage() {
  return (
    <main>
      <SimplePageHero
        eyebrow="Solution / Cyber Security"
        title="Security that protects without slowing teams down."
        description="Crackheads Studio applies modern cyber security patterns that strengthen product safety while keeping developer velocity high."
      />

      <section className="px-6 pb-18 md:px-10 md:pb-20">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2">
          <article className="rounded-4xl bg-white/55 p-7 shadow-[0_20px_45px_rgba(176,170,243,0.22)] backdrop-blur-xl">
            <ShieldCheck className="mb-4 text-[#5b5288]" />
            <h2 className="text-2xl font-black text-[#4f477b]">Hardening</h2>
            <p className="mt-2 font-semibold text-[#5f588c]/90">Secure-by-default architecture, permissions review, and safer release practices.</p>
          </article>
          <article className="rounded-4xl bg-white/55 p-7 shadow-[0_20px_45px_rgba(176,170,243,0.22)] backdrop-blur-xl">
            <Lock className="mb-4 text-[#5b5288]" />
            <h2 className="text-2xl font-black text-[#4f477b]">Identity & Access</h2>
            <p className="mt-2 font-semibold text-[#5f588c]/90">Robust authentication and authorization patterns designed for modern web apps.</p>
          </article>
        </div>

        <div className="mx-auto mt-6 max-w-6xl rounded-4xl bg-white/55 p-7 shadow-[0_20px_45px_rgba(176,170,243,0.22)] backdrop-blur-xl md:p-8">
          <h2 className="text-2xl font-black text-[#4f477b] md:text-3xl">Security workstreams we cover</h2>
          <div className="mt-4 grid gap-3 md:grid-cols-3">
            {securityFocus.map((item) => (
              <p key={item} className="rounded-2xl bg-[#fdfbff]/80 px-4 py-3 font-semibold text-[#5f588c]/90">
                {item}
              </p>
            ))}
          </div>
        </div>

        <div className="mx-auto mt-6 max-w-6xl rounded-4xl bg-white/55 p-7 shadow-[0_20px_45px_rgba(176,170,243,0.22)] backdrop-blur-xl md:p-8">
          <h2 className="text-2xl font-black text-[#4f477b] md:text-3xl">Security + velocity, together</h2>
          <p className="mt-3 font-semibold text-[#5f588c]/90">
            Our approach keeps teams shipping while steadily raising baseline security through practical architecture, patterns, and review loops.
          </p>
        </div>
      </section>
    </main>
  );
}
