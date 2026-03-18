import { brandName, siteUrl } from "../lib/seo";
import { buildPageMetadata } from "../lib/seo";
import { AppdevPageContent } from "../components/appdev-page-content";

export const metadata = buildPageMetadata({
  title: "App Development Services, Process, Pricing in BDT",
  description:
    "Crackheads Studio builds mobile and cross-platform apps with clear process documentation, practical UX, and below-market pricing estimates in BDT.",
  path: "/appdev",
  keywords: [
    "app development bangladesh",
    "mobile app development cost bdt",
    "affordable app development dhaka",
    "android ios app development agency",
    "mvp app development price",
    "cross platform app development",
    "startup app developers bangladesh",
    "app development process and pricing",
  ],
});

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "App Development",
  name: "App Development Services by Crackheads Studio",
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
      name: "What kinds of apps can Crackheads Studio build?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We build consumer apps, operations apps, marketplace apps, booking and delivery apps, SaaS companion apps, and internal business apps.",
      },
    },
    {
      "@type": "Question",
      name: "How much does app development cost in BDT?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Starter is 3,500 to 6,000 BDT, Business is 6,000 to 10,000 BDT, Pro is 10,000 to 15,000 BDT, and E commerce pricing depends on volume.",
      },
    },
    {
      "@type": "Question",
      name: "Do you include hosting in the package?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. The first year of hosting is on us for eligible projects.",
      },
    },
    {
      "@type": "Question",
      name: "How does your app development process work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We run discovery, UX planning, agile build cycles, and launch prep with weekly milestones and transparent client communication.",
      },
    },
  ],
};

export default function AppdevPage() {
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
      <AppdevPageContent />
    </>
  );
}
