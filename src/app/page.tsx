import MobileHero from "@/components/MobileHero";
import DesktopHero from "@/components/DesktopHero";
import ServicesSection from "@/components/ServicesSection";

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
    </main>
  );
}
