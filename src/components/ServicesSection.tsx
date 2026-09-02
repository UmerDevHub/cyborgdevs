"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  Globe,
  Smartphone,
  Sparkles,
  ShoppingBag,
  CodeXml,
  ArrowRight,
  ChevronDown,
} from "lucide-react";

// Isometric SaaS Cube SVG matching reference design
function IsometricCube({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 2L2 7l10 5 10-5-10-5z" />
      <path d="M2 17l10 5 10-5" />
      <path d="M2 12l10 5 10-5" />
    </svg>
  );
}

interface ServiceItem {
  id: string;
  number: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

const services: ServiceItem[] = [
  {
    id: "01",
    number: "01",
    title: "Web Development",
    description:
      "High-performance websites and web applications built for speed, scalability, and conversion.",
    icon: Globe,
  },
  {
    id: "02",
    number: "02",
    title: "Mobile App Development",
    description:
      "Native-quality iOS and Android experiences using modern technologies.",
    icon: Smartphone,
  },
  {
    id: "03",
    number: "03",
    title: "AI Development",
    description:
      "AI-powered products, automation, AI agents, and machine learning solutions.",
    icon: Sparkles,
  },
  {
    id: "04",
    number: "04",
    title: "SaaS Development",
    description:
      "Scalable SaaS platforms designed from architecture to deployment.",
    icon: IsometricCube,
  },
  {
    id: "05",
    number: "05",
    title: "E-commerce Development",
    description:
      "High-converting and scalable commerce experiences that drive sales.",
    icon: ShoppingBag,
  },
  {
    id: "06",
    number: "06",
    title: "Custom Software Development",
    description:
      "Business-specific software engineered around real operational needs.",
    icon: CodeXml,
  },
];

const metrics = [
  { value: 50, suffix: "+", label: "Projects Delivered" },
  { value: 20, suffix: "+", label: "Businesses Transformed" },
  { value: 99, suffix: "%", label: "Client Satisfaction" },
  { value: 24, suffix: "/7", label: "Technical Support" },
];

const clientLogos = [
  {
    name: "Sisyphus",
    textClass: "text-[15.5px] font-bold tracking-tight",
    icon: (
      <svg className="w-5 h-5 fill-current flex-shrink-0" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="3" />
        <circle cx="12" cy="5" r="2" />
        <circle cx="12" cy="19" r="2" />
        <circle cx="5" cy="12" r="2" />
        <circle cx="19" cy="12" r="2" />
      </svg>
    ),
  },
  {
    name: "KANBAAN",
    textClass: "text-[13px] font-black tracking-wider uppercase",
    icon: (
      <span className="text-[15px] font-black leading-none text-zinc-900 mr-0.5">
        &gt;&gt;
      </span>
    ),
  },
  {
    name: "treva.",
    textClass: "text-[16px] font-extrabold tracking-tight",
    icon: null,
  },
  {
    name: "Vertuo",
    textClass: "text-[14.5px] font-semibold tracking-tight",
    icon: (
      <svg
        className="w-4 h-4 fill-none stroke-current stroke-[2.2] flex-shrink-0"
        viewBox="0 0 24 24"
      >
        <polygon points="12 2 22 20 2 20" />
      </svg>
    ),
  },
  {
    name: "Cactus",
    textClass: "text-[14px] font-bold tracking-tight",
    icon: (
      <svg
        className="w-4 h-4 fill-none stroke-current stroke-[2] flex-shrink-0"
        viewBox="0 0 24 24"
      >
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v10M8 10v4M16 10v4" />
      </svg>
    ),
  },
];

export default function ServicesSection() {
  const [activeCard, setActiveCard] = useState<string>("01");
  const [showAllMobile, setShowAllMobile] = useState<boolean>(false);
  const [hasCounted, setHasCounted] = useState(false);
  const [counts, setCounts] = useState<number[]>([0, 0, 0, 0]);
  const metricsRef = useRef<HTMLDivElement>(null);

  // Smooth live counter effect when scrolled into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasCounted) {
          setHasCounted(true);
          const duration = 1600; // ms
          const startTime = performance.now();

          const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease-out cubic
            const easeOut = 1 - Math.pow(1 - progress, 3);

            const nextCounts = metrics.map((m) => {
              return Math.floor(easeOut * m.value);
            });
            setCounts(nextCounts);

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setCounts(metrics.map((m) => m.value));
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.2 }
    );

    if (metricsRef.current) {
      observer.observe(metricsRef.current);
    }

    return () => observer.disconnect();
  }, [hasCounted]);

  return (
    <section
      id="services"
      className="relative w-full bg-white text-zinc-900 py-16 sm:py-20 lg:py-28 px-5 sm:px-10 lg:px-16 overflow-hidden"
    >
      {/* Background divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[1px] bg-gradient-to-r from-transparent via-zinc-200 to-transparent" />

      <div className="max-w-[1520px] mx-auto">
        {/* ── HEADER AREA ───────────────────────────────────────── */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 sm:mb-16 lg:mb-20 gap-4 sm:gap-6">
          <div>
            {/* Tag / Category */}
            <span className="inline-block text-[#0066FF] text-[11.5px] sm:text-[12px] font-bold tracking-[0.22em] uppercase mb-2.5 sm:mb-3.5">
              SERVICES
            </span>
            {/* Main Headline */}
            <h2 className="text-[28px] sm:text-[38px] lg:text-[48px] font-extrabold tracking-tight text-zinc-950 leading-[1.12] max-w-[650px]">
              Everything you need to build your digital product.
            </h2>
          </div>

          {/* Subtitle / Value statement */}
          <p className="text-[13.5px] sm:text-[15px] font-normal leading-relaxed text-zinc-500 max-w-[380px] lg:text-right pb-1">
            From concept to code to scale — we deliver end-to-end digital
            solutions.
          </p>
        </div>

        {/* ── 6 SERVICES CARDS (3 on Mobile with "See More", 6 on Laptop/Desktop) ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 border-y border-zinc-200/80 bg-white">
          {services.map((item, index) => {
            const Icon = item.icon;
            const isActive = activeCard === item.id;
            // On mobile (< 1024px), hide services after the first 3 unless showAllMobile is true
            const isHiddenOnMobile = index >= 3 && !showAllMobile;

            return (
              <div
                key={item.id}
                onMouseEnter={() => setActiveCard(item.id)}
                onClick={() => setActiveCard(item.id)}
                className={`group relative flex-col justify-between p-6 sm:p-7 lg:p-8 cursor-pointer transition-all duration-300 ${
                  isHiddenOnMobile ? "hidden lg:flex" : "flex"
                } ${
                  index !== services.length - 1
                    ? "lg:border-r border-b lg:border-b-0 border-zinc-200/70"
                    : "border-b lg:border-b-0 border-zinc-200/70"
                } ${
                  isActive
                    ? "bg-white lg:-translate-y-2 shadow-[0_10px_30px_rgba(0,0,0,0.06)] lg:shadow-[0_20px_45px_rgba(0,0,0,0.08)] z-10 rounded-b-xl lg:rounded-b-2xl"
                    : "hover:bg-zinc-50/70"
                }`}
              >
                {/* Active / Hover Top Blue Line Accent */}
                <div
                  className={`absolute top-0 left-0 right-0 h-[2.5px] bg-[#0066FF] transition-all duration-300 ${
                    isActive
                      ? "opacity-100 scale-x-100"
                      : "opacity-0 scale-x-0 group-hover:opacity-100 group-hover:scale-x-100"
                  }`}
                  style={{ transformOrigin: "left" }}
                />

                {/* Top: Number and Icon */}
                <div>
                  <div className="flex items-center justify-between mb-5 sm:mb-7">
                    <span
                      className={`text-[17px] sm:text-[19px] font-bold tracking-tight transition-colors duration-200 ${
                        isActive
                          ? "text-[#0066FF]"
                          : "text-zinc-400 group-hover:text-[#0066FF]"
                      }`}
                    >
                      {item.number}
                    </span>
                  </div>

                  {/* Icon */}
                  <div className="mb-4 sm:mb-6">
                    <div
                      className={`inline-flex items-center justify-center transition-transform duration-300 group-hover:scale-110 text-[#0066FF]`}
                    >
                      <Icon className="w-7 h-7 sm:w-8 sm:h-8" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-[16px] sm:text-[17px] font-bold text-zinc-950 tracking-tight leading-snug mb-2 sm:mb-3 group-hover:text-[#0066FF] transition-colors duration-200">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[13px] font-normal leading-[1.62] text-zinc-500 mb-6 sm:mb-8">
                    {item.description}
                  </p>
                </div>

                {/* Bottom: Interactive Circular Arrow Button */}
                <div className="pt-1 sm:pt-2">
                  <div
                    className={`inline-flex h-[34px] w-[34px] sm:h-[36px] sm:w-[36px] items-center justify-center rounded-full border transition-all duration-300 ${
                      isActive
                        ? "border-[#0066FF] bg-[#0066FF] text-white shadow-[0_4px_12px_rgba(0,102,255,0.35)]"
                        : "border-zinc-300 text-zinc-400 group-hover:border-[#0066FF] group-hover:text-[#0066FF] group-hover:bg-[#0066FF]/5"
                    }`}
                  >
                    <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ── MOBILE "SEE MORE" / "SHOW LESS" BUTTON (MOBILE ONLY) ── */}
        <div className="flex justify-center mt-7 lg:hidden">
          <button
            type="button"
            onClick={() => setShowAllMobile(!showAllMobile)}
            className="group flex items-center gap-2 rounded-full border border-zinc-300 bg-white px-7 py-3 text-[13.5px] font-semibold text-zinc-900 shadow-sm transition-all hover:border-[#0066FF] hover:text-[#0066FF] active:scale-95 cursor-pointer"
          >
            <span>{showAllMobile ? "Show Less" : "See More Services (3 more)"}</span>
            <ChevronDown
              className={`w-4 h-4 text-zinc-500 group-hover:text-[#0066FF] transition-transform duration-300 ${
                showAllMobile ? "rotate-180" : ""
              }`}
            />
          </button>
        </div>

        {/* ── BOTTOM METRICS & TRUSTED BRANDS BAR ───────────────── */}
        <div
          ref={metricsRef}
          className="mt-12 sm:mt-16 lg:mt-20 rounded-[20px] sm:rounded-[22px] bg-[#f8f9fb] border border-zinc-200/80 p-6 sm:p-10 lg:p-12 shadow-[0_4px_24px_rgba(0,0,0,0.02)]"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
            {/* Left: 4 Animated Metrics Counters */}
            <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-4 gap-y-7 gap-x-4 lg:gap-0">
              {metrics.map((item, idx) => (
                <div
                  key={item.label}
                  className={`flex flex-col justify-center ${
                    idx % 2 === 0
                      ? "pr-3 sm:pr-6 lg:pr-8 sm:border-r border-zinc-200/80 sm:mr-6 lg:mr-8"
                      : "pl-3 sm:pl-0 sm:pr-6 lg:pr-8 sm:border-r border-zinc-200/80 sm:mr-6 lg:mr-8"
                  } ${idx >= 2 ? "sm:border-r-0 lg:border-r" : ""}`}
                >
                  <p className="text-[28px] sm:text-[36px] lg:text-[42px] font-black tracking-tight text-[#0066FF] leading-none mb-2">
                    {counts[idx]}
                    <span className="text-[#0066FF]">{item.suffix}</span>
                  </p>
                  <p className="text-[12px] sm:text-[12.5px] font-medium text-zinc-500 tracking-normal leading-tight">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Right: Trusted by Innovative Companies & CONTINUOUS SLIDING MARQUEE */}
            <div className="lg:col-span-5 flex flex-col justify-center lg:border-l border-zinc-200/80 pt-6 lg:pt-0 lg:pl-10 border-t lg:border-t-0 border-zinc-200/80 overflow-hidden">
              <p className="text-[10.5px] sm:text-[11px] font-bold tracking-[0.18em] uppercase text-zinc-400 mb-4 sm:mb-5 select-none text-center sm:text-left">
                TRUSTED BY INNOVATIVE COMPANIES
              </p>

              {/* Continuous Infinite Sliding Marquee with gradient fade edges */}
              <div className="relative w-full overflow-hidden">
                {/* Left & Right gradient edge fades */}
                <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-8 z-10 bg-gradient-to-r from-[#f8f9fb] to-transparent" />
                <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-8 z-10 bg-gradient-to-l from-[#f8f9fb] to-transparent" />

                {/* Infinite Marquee Track */}
                <div className="animate-marquee flex items-center gap-9 sm:gap-10 text-zinc-800 select-none py-1">
                  {/* First Track */}
                  {clientLogos.map((logo, i) => (
                    <div
                      key={`track1-${i}`}
                      className="flex items-center gap-2 tracking-tight hover:text-[#0066FF] transition-colors whitespace-nowrap cursor-pointer opacity-85 hover:opacity-100 flex-shrink-0"
                    >
                      {logo.icon}
                      <span className={logo.textClass}>{logo.name}</span>
                    </div>
                  ))}

                  {/* Duplicate Track (for seamless infinite loop) */}
                  {clientLogos.map((logo, i) => (
                    <div
                      key={`track2-${i}`}
                      className="flex items-center gap-2 tracking-tight hover:text-[#0066FF] transition-colors whitespace-nowrap cursor-pointer opacity-85 hover:opacity-100 flex-shrink-0"
                    >
                      {logo.icon}
                      <span className={logo.textClass}>{logo.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
