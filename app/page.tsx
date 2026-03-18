import { AboutSection } from "./components/about-section";
import { CtaFooter } from "./components/cta-footer";
import { HeroSection } from "./components/hero-section";
import { HostingHomeSection } from "./components/hosting-home-section";
import { ReviewsSection } from "./components/reviews-section";
import { ServicesSection } from "./components/services-section";
import { WorkSection } from "./components/work-section";

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
