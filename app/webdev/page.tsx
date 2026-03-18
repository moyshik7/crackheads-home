import { brandName, siteUrl } from "../lib/seo";
import { buildPageMetadata } from "../lib/seo";
import { WebdevPageContent } from "../components/webdev-page-content";

export const metadata = buildPageMetadata({
  title: "Web Development Services, Process, Pricing in BDT",
  description:
    "Crackheads Studio builds fast, conversion-focused websites with a transparent process and below-market pricing estimates in BDT for startups, brands, and growing businesses.",
  path: "/webdev",
  keywords: [
    "web development bangladesh",
    "website development cost bdt",
    "affordable web development dhaka",
    "website design and development process",
    "landing page development price",
    "ecommerce website pricing bdt",
    "custom website agency bangladesh",
    "nextjs website development",
  ],
});

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Web Development",
  name: "Web Development Services by Crackheads Studio",
  provider: {
    "@type": "Organization",
    name: brandName,
    url: siteUrl,
  },
  areaServed: "BD",
  offers: [
    {
      "@type": "Offer",
      priceCurrency: "BDT",
      lowPrice: "3500",
      highPrice: "6000",
      description: "Starter",
    },
    {
      "@type": "Offer",
      priceCurrency: "BDT",
      lowPrice: "6000",
      highPrice: "10000",
      description: "Business",
    },
    {
      "@type": "Offer",
      priceCurrency: "BDT",
      lowPrice: "10000",
      highPrice: "15000",
      description: "Pro",
    },
    {
      "@type": "Offer",
      priceCurrency: "BDT",
      description: "E commerce - Depending on volume",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What kinds of websites can Crackheads Studio build?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We build launch sites, business websites, ecommerce storefronts, SaaS websites, portfolios, blogs, booking sites, and custom web portals.",
      },
    },
    {
      "@type": "Question",
      name: "How much does a website cost in BDT?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Starter packages are 3,500 to 6,000 BDT, Business is 6,000 to 10,000 BDT, Pro is 10,000 to 15,000 BDT, and E commerce pricing depends on product volume.",
      },
    },
    {
      "@type": "Question",
      name: "Do you include hosting with website development?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. The first year of hosting is on us for eligible projects.",
      },
    },
    {
      "@type": "Question",
      name: "How do you operate with clients during web development?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We use weekly milestones, transparent task updates, and clear review checkpoints to keep delivery fast and collaborative.",
      },
    },
  ],
};

export default function WebdevPage() {
  return (
    <>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <WebdevPageContent />
    </>
  );
}
