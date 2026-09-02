import MobileHero from "@/components/MobileHero";
import DesktopHero from "@/components/DesktopHero";
import ServicesSection from "@/components/ServicesSection";
import FeaturedWorkSection from "@/components/FeaturedWorkSection";
import TechnologiesSection from "@/components/TechnologiesSection";
import AiDevelopmentSection from "@/components/AiDevelopmentSection";
import ProcessSection from "@/components/ProcessSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="w-full min-h-screen bg-black overflow-x-hidden">
      {/* Mobile hero section (mobile & tablet < 1024px) */}
      <div className="block lg:hidden">
        <MobileHero />
      </div>

      {/* Desktop hero section (laptop & desktop >= 1024px) */}
      <div className="hidden lg:block">
        <DesktopHero />
      </div>

      {/* Services & Metrics Section */}
      <ServicesSection />

      {/* Featured Work / Case Studies Section */}
      <FeaturedWorkSection />

      {/* Technologies Section */}
      <TechnologiesSection />

      {/* AI Development Section */}
      <AiDevelopmentSection />

      {/* Our Process Section */}
      <ProcessSection />

      {/* Why Choose Us & Testimonials Reviews Section */}
      <TestimonialsSection />

      {/* Call to Action Banner (Desktop cta_back.png & Mobile cta_mob.png) */}
      <CtaSection />

      {/* Global Agency Footer */}
      <Footer />
    </main>
  );
}
