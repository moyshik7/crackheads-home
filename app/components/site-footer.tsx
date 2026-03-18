import Link from "next/link";

const footerLinks = [
  { href: "/solutions", label: "Solutions" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function SiteFooter() {
  return (
    <footer className="px-6 pb-8 pt-10 md:px-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-5 rounded-4xl border border-white/40 bg-white/50 p-6 shadow-[0_20px_40px_rgba(176,170,243,0.2)] backdrop-blur-xl md:flex-row md:items-center md:justify-between md:p-8">
        <div>
          <p className="text-xl font-black text-[#534a84]">Crackheads Studio</p>
          <p className="text-sm font-semibold text-[#6f67a5]/80">
            Building sweet digital experiences with speed and style.
          </p>
        </div>
        <nav className="flex flex-wrap items-center gap-4">
          {footerLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full bg-white/70 px-4 py-2 text-sm font-bold text-[#5d558a] transition hover:-translate-y-0.5 hover:bg-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
