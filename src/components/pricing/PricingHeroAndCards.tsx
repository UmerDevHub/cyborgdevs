"use client";

import React from "react";
import Image from "next/image";
import {
  Rocket,
  ShieldCheck,
  Gem,
  Building2,
  Files,
  Clock,
  RotateCcw,
  Check,
  ArrowRight,
} from "lucide-react";

interface PlanPackage {
  id: string;
  name: string;
  subtitle: string;
  price: string;
  pages: string;
  duration: string;
  revisions: string;
  isPopular?: boolean;
  icon: React.ReactNode;
  features: string[];
}

const packages: PlanPackage[] = [
  {
    id: "starter",
    name: "Starter Website",
    subtitle: "Ideal for a new, small or local business",
    price: "PKR 15,000",
    pages: "1–3 pages",
    duration: "5–7 working days",
    revisions: "3 revision rounds",
    icon: <Rocket className="w-5 h-5 text-[#0066FF]" />,
    features: [
      "Custom professional design",
      "Mobile responsive layout",
      "WhatsApp button",
      "Contact form",
      "Social media links",
      "Basic on-page SEO",
      "Fast-loading structure",
    ],
  },
  {
    id: "business",
    name: "Business Website",
    subtitle: "Ideal for growing service businesses",
    price: "PKR 25,000",
    pages: "Up to 6 pages",
    duration: "8–12 working days",
    revisions: "5 revision rounds",
    isPopular: true,
    icon: <ShieldCheck className="w-5 h-5 text-[#0066FF]" />,
    features: [
      "Custom business design",
      "Professional animations",
      "Services section",
      "Image gallery",
      "Reviews section",
      "Google Maps",
      "WhatsApp integration",
      "Contact or quotation form",
      "Basic SEO",
      "Speed optimisation",
    ],
  },
  {
    id: "premium",
    name: "Premium Website",
    subtitle: "For brands needing a stronger premium presence",
    price: "PKR 50,000",
    pages: "Up to 10 pages",
    duration: "12–18 working days",
    revisions: "7 revision rounds",
    icon: <Gem className="w-5 h-5 text-[#0066FF]" />,
    features: [
      "Fully customised UI design",
      "Advanced smooth animations",
      "Service-detail pages",
      "Portfolio or gallery",
      "Appointment or quotation form",
      "Customer reviews",
      "Google Maps",
      "Analytics setup",
      "On-page SEO",
      "Performance optimisation",
    ],
  },
  {
    id: "corporate",
    name: "Corporate Website",
    subtitle: "For larger businesses and multi-service companies",
    price: "PKR 75,000+",
    pages: "10–15+ pages",
    duration: "18–25 working days",
    revisions: "10 revision rounds",
    icon: <Building2 className="w-5 h-5 text-[#0066FF]" />,
    features: [
      "Corporate information architecture",
      "Advanced branded interface",
      "Multiple service pages",
      "Team and project sections",
      "Advanced forms",
      "Case studies or portfolio",
      "Analytics and SEO setup",
      "Priority launch support",
      "30-day post-launch support",
    ],
  },
];

export default function PricingHeroAndCards() {
  return (
    <div className="relative w-full bg-[#02050D]">
      {/* ── TOP HERO SECTION WITH DYNAMIC BACKGROUND ───────────── */}
      <section className="relative w-full min-h-[500px] sm:min-h-[560px] lg:min-h-[640px] pt-32 sm:pt-36 lg:pt-40 pb-28 lg:pb-36 overflow-hidden">
        
        {/* DESKTOP BACKGROUND IMAGE (>= 1024px) */}
        <div className="hidden lg:block absolute inset-0 z-0">
          <Image
            src="/images/pricing_laptop_bg.png?v=3"
            alt="Cyborg Developers Pricing Plans Background"
            fill
            priority
            unoptimized
            className="object-cover object-center select-none"
            sizes="100vw"
          />
        </div>

        {/* MOBILE & TABLET BACKGROUND IMAGE (< 1024px) */}
        <div className="block lg:hidden absolute inset-0 z-0">
          <Image
            src="/images/pricing_mobile_bg.png?v=3"
            alt="Cyborg Developers Mobile Pricing Background"
            fill
            priority
            unoptimized
            className="object-cover object-top select-none"
            sizes="100vw"
          />
          {/* Subtle gradient vignette to keep text ultra crisp on smaller viewports */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60 pointer-events-none" />
        </div>

        {/* HERO CONTENT CONTAINER */}
        <div className="relative z-10 max-w-[1520px] mx-auto px-6 sm:px-10 lg:px-16 w-full">
          <div className="max-w-[680px]">
            
            {/* Eyebrow badge */}
            <div className="flex items-center gap-2 mb-3 sm:mb-4">
              <span className="text-[12px] sm:text-[13px] font-bold tracking-[0.24em] text-[#0066FF] uppercase">
                PRICING PLANS
              </span>
            </div>

            {/* Main Title */}
            <h1 className="text-[34px] sm:text-[46px] md:text-[54px] lg:text-[58px] font-black tracking-tight text-white leading-[1.08] mb-4 sm:mb-5">
              Simple, transparent <br />
              pricing for{" "}
              <span className="text-[#0066FF] drop-shadow-[0_0_24px_rgba(0,102,255,0.4)]">
                every business.
              </span>
            </h1>

            {/* Subtitle Description */}
            <p className="text-[15px] sm:text-[16.5px] text-white/80 leading-relaxed max-w-[500px]">
              Professional websites built with performance, design and results in mind.
            </p>

          </div>
        </div>
      </section>

      {/* ── WHITE SECTION WITH THE 4 PRICING CARDS ────────────────── */}
      {/* 
        In the reference screenshot, the cards sit across the transition into the white background!
        We use negative margin on desktop (-mt-20 to -mt-28) to position the cards exactly over the bottom 
        wave and into the white container below.
      */}
      <section className="relative z-20 w-full bg-white pb-16 sm:pb-20 lg:pb-24 -mt-16 sm:-mt-24 lg:-mt-28">
        <div className="max-w-[1520px] mx-auto px-5 sm:px-8 lg:px-12">
          
          {/* 4 PRICING CARDS GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
            {packages.map((pkg) => (
              <div
                key={pkg.id}
                className={`relative group flex flex-col justify-between rounded-[22px] bg-white p-6 sm:p-7 transition-all duration-300 ease-out cursor-default ${
                  pkg.isPopular
                    ? "border-2 border-[#0066FF] shadow-[0_8px_30px_-4px_rgba(0,102,255,0.16)] hover:shadow-[0_20px_42px_-6px_rgba(0,102,255,0.25)] md:-translate-y-2 md:hover:-translate-y-3.5 hover:-translate-y-1.5 z-10"
                    : "border border-slate-200/90 shadow-[0_4px_16px_rgba(0,0,0,0.04)] hover:border-blue-300 hover:shadow-[0_16px_36px_-6px_rgba(0,0,0,0.09),0_0_0_1px_rgba(0,102,255,0.15)] hover:-translate-y-1.5"
                }`}
              >
                {/* Floating "Most Popular" Pill Badge (Never clipped) */}
                {pkg.isPopular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-20 rounded-full bg-[#0066FF] px-4 py-1 text-[11px] font-bold tracking-wider text-white shadow-md shadow-blue-500/30 whitespace-nowrap uppercase">
                    Most Popular
                  </div>
                )}

                {/* Card Top Section */}
                <div className="relative z-10">
                  {/* Icon & Title Row */}
                  <div className="flex items-start gap-3.5 mb-5">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50/90 border border-blue-100/80 group-hover:bg-[#0066FF] group-hover:border-[#0066FF] group-hover:scale-105 group-hover:shadow-sm group-hover:shadow-blue-500/20 transition-all duration-300 [&>svg]:transition-colors [&>svg]:duration-300 group-hover:[&>svg]:text-white">
                      {pkg.icon}
                    </div>
                    <div>
                      <h3 className="text-[18px] sm:text-[19px] font-bold tracking-tight text-slate-900 leading-tight group-hover:text-blue-950 transition-colors">
                        {pkg.name}
                      </h3>
                      <p className="text-[12px] text-slate-500 mt-1 leading-snug">
                        {pkg.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Price */}
                  <div className="mb-5 pb-5 border-b border-slate-100">
                    <span className="text-[28px] sm:text-[30px] font-black tracking-tight text-[#0066FF]">
                      {pkg.price}
                    </span>
                  </div>

                  {/* 3 Scope Bullets (Pages, Duration, Revisions) */}
                  <div className="flex flex-col gap-2.5 mb-6 text-[12.5px] text-slate-600 font-medium">
                    <div className="flex items-center gap-2.5">
                      <Files className="w-3.5 h-3.5 text-[#0066FF] shrink-0" />
                      <span>{pkg.pages}</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <Clock className="w-3.5 h-3.5 text-[#0066FF] shrink-0" />
                      <span>{pkg.duration}</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <RotateCcw className="w-3.5 h-3.5 text-[#0066FF] shrink-0" />
                      <span>{pkg.revisions}</span>
                    </div>
                  </div>

                  {/* Deliverables Checklist */}
                  <div className="mb-6">
                    <ul className="flex flex-col gap-2.5 text-[12.5px] text-slate-600">
                      {pkg.features.map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-2.5">
                          <Check className="w-3.5 h-3.5 text-[#0066FF] shrink-0 mt-0.5 stroke-[2.5]" />
                          <span className="leading-tight">{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Bottom CTA Button */}
                <div className="pt-2 mt-auto relative z-10">
                  <a
                    href={`#contact?package=${pkg.id}`}
                    className={`group/btn w-full inline-flex items-center justify-center gap-2 rounded-xl py-3 px-4 text-[13.5px] font-semibold transition-all duration-200 cursor-pointer ${
                      pkg.isPopular
                        ? "bg-[#0066FF] text-white shadow-md shadow-blue-500/25 hover:bg-[#0052cc] hover:shadow-lg hover:shadow-blue-500/35"
                        : "border border-blue-200/90 bg-white text-[#0066FF] hover:bg-blue-50 hover:border-[#0066FF]"
                    }`}
                  >
                    <span>Choose This Package</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover/btn:translate-x-1" />
                  </a>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
}
