import type { Metadata } from "next";
import PricingNavbar from "@/components/pricing/PricingNavbar";
import PricingHeroAndCards from "@/components/pricing/PricingHeroAndCards";
import PricingAddons from "@/components/pricing/PricingAddons";
import PricingComparison from "@/components/pricing/PricingComparison";
import PricingCta from "@/components/pricing/PricingCta";
import PricingFooter from "@/components/pricing/PricingFooter";

export const metadata: Metadata = {
  title: "Pricing Plans — Simple, Transparent Pricing | Cyborg Developers",
  description:
    "Simple, transparent pricing for every business. Professional websites built with performance, design and results in mind.",
  keywords: [
    "Cyborg Developers",
    "Pricing Plans",
    "Website Packages",
    "Pakistan",
    "Web Development Cost",
  ],
};

export default function PricingPage() {
  return (
    <main className="relative w-full min-h-screen bg-white text-slate-900 selection:bg-[#0066FF] selection:text-white overflow-x-hidden font-sans">
      {/* 01 — NAVIGATION (Transparent Fixed Header) */}
      <PricingNavbar />

      {/* 02 — HERO & 4 PRICING CARDS (Matches Screenshot Exactly) */}
      <PricingHeroAndCards />

      {/* 03 — OPTIONAL ADD-ONS (4-COLUMN CARD GRID) */}
      <PricingAddons />

      {/* 05 — COMPARE EVERY WEBSITE PACKAGE */}
      <PricingComparison />

      {/* 06 — STILL UNSURE WHICH PACKAGE IS RIGHT FOR YOU? */}
      <PricingCta />

      {/* 07 — 5-COLUMN AGENCY FOOTER */}
      <PricingFooter />
    </main>
  );
}
