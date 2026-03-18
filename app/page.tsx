import { AboutSection } from "./components/about-section";
import { CtaFooter } from "./components/cta-footer";
import { HeroSection } from "./components/hero-section";
import { HostingHomeSection } from "./components/hosting-home-section";
import { ReviewsSection } from "./components/reviews-section";
import { ServicesSection } from "./components/services-section";
import { WorkSection } from "./components/work-section";
import { buildPageMetadata } from "./lib/seo";

export const metadata = buildPageMetadata({
  title: "Web Development, App Development and Managed Hosting",
  description:
    "Crackheads Studio builds high-performance websites, SaaS products, ecommerce experiences, and managed hosting systems that scale with your business.",
  path: "/",
  keywords: [
    "web development agency",
    "app development studio",
    "managed hosting provider",
    "product design and development",
    "software development company",
  ],
});

export default function Home() {
  return (
    <main className="pt-4">
      <HeroSection />
      <ServicesSection />
      <HostingHomeSection />
      <AboutSection />
      <WorkSection />
      <ReviewsSection />
      <CtaFooter />
    </main>
  );
}
