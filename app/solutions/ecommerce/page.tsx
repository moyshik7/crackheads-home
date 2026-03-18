import { ShoppingBag, TrendingUp } from "lucide-react";
import { SimplePageHero } from "../../components/simple-page-hero";
import { buildPageMetadata } from "../../lib/seo";

export const metadata = buildPageMetadata({
  title: "Ecommerce Development Solutions",
  description:
    "Conversion-focused ecommerce development with fast storefront UX, checkout optimization, analytics, and scalable architecture.",
  path: "/solutions/ecommerce",
  keywords: [
    "ecommerce development company",
    "shopify alternative storefront",
    "headless ecommerce development",
    "checkout optimization",
    "ecommerce seo development",
  ],
});

const ecommerceStack = ["Next.js storefronts", "Headless CMS", "Stripe-ready checkout", "Product analytics", "A/B test hooks", "SEO foundations"];

export default function EcommerceSolutionPage() {
  return (
    <main>
      <SimplePageHero
        eyebrow="Solution / Ecommerce"
        title="Ecommerce that feels joyful and converts fast."
        description="Crackheads Studio crafts storefronts with polished catalog experiences, snappy filtering, and checkout flows built for trust and revenue."
      />

      <section className="px-6 pb-18 md:px-10 md:pb-20">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2">
          <article className="rounded-4xl bg-white/55 p-7 shadow-[0_20px_45px_rgba(176,170,243,0.22)] backdrop-blur-xl">
            <ShoppingBag className="mb-4 text-[#5b5288]" />
            <h2 className="text-2xl font-black text-[#4f477b]">Storefront UX</h2>
            <p className="mt-2 font-semibold text-[#5f588c]/90">Fast product discovery, animated micro-interactions, and mobile-first category flows.</p>
          </article>
          <article className="rounded-4xl bg-white/55 p-7 shadow-[0_20px_45px_rgba(176,170,243,0.22)] backdrop-blur-xl">
            <TrendingUp className="mb-4 text-[#5b5288]" />
            <h2 className="text-2xl font-black text-[#4f477b]">Conversion Stack</h2>
            <p className="mt-2 font-semibold text-[#5f588c]/90">Checkout optimization, lifecycle analytics, and A/B-friendly UI architecture.</p>
          </article>
        </div>

        <div className="mx-auto mt-6 max-w-6xl rounded-4xl bg-white/55 p-7 shadow-[0_20px_45px_rgba(176,170,243,0.22)] backdrop-blur-xl md:p-8">
          <h2 className="text-2xl font-black text-[#4f477b] md:text-3xl">What we deliver in ecommerce engagements</h2>
          <div className="mt-4 grid gap-3 md:grid-cols-3">
            {ecommerceStack.map((item) => (
              <p key={item} className="rounded-2xl bg-[#fdfbff]/80 px-4 py-3 font-semibold text-[#5f588c]/90">
                {item}
              </p>
            ))}
          </div>
        </div>

        <div className="mx-auto mt-6 max-w-6xl rounded-4xl bg-white/55 p-7 shadow-[0_20px_45px_rgba(176,170,243,0.22)] backdrop-blur-xl md:p-8">
          <h2 className="text-2xl font-black text-[#4f477b] md:text-3xl">Common growth wins</h2>
          <ul className="mt-3 space-y-2 font-semibold text-[#5f588c]/90">
            <li>Improved conversion rate via cleaner product-to-checkout flow.</li>
            <li>Higher repeat purchases with retention-focused UX improvements.</li>
            <li>Faster mobile interaction times for better shopping confidence.</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
