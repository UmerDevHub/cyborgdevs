"use client";

import { useState, useEffect, useRef } from "react";
import {
  Globe,
  Smartphone,
  Sparkles,
  Box,
  ShoppingBag,
  CodeXml,
  ArrowRight,
} from "lucide-react";

interface ServiceItem {
  id: string;
  number: string;
  title: string;
  description: string;
  icon: typeof Globe;
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
    icon: Box,
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
  { value: 24, suffix: "/7", label: "Technical Support", isFraction: true },
];

export default function ServicesSection() {
  const [activeCard, setActiveCard] = useState<string>("01");
  const [hasCounted, setHasCounted] = useState(false);
  const [counts, setCounts] = useState<number[]>([0, 0, 0, 0]);
  const metricsRef = useRef<HTMLDivElement>(null);

  // Animated number counter triggered when scrolled into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasCounted) {
          setHasCounted(true);
          const duration = 1800; // ms
          const startTime = performance.now();

          const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease out cubic
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
      { threshold: 0.25 }
    );

    if (metricsRef.current) {
      observer.observe(metricsRef.current);
    }

    return () => observer.disconnect();
  }, [hasCounted]);

  return (
    <section id="services" className="relative w-full bg-white text-zinc-900 py-20 lg:py-28 px-6 sm:px-10 lg:px-16 overflow-hidden">
      {/* Background ambient accents */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[1px] bg-gradient-to-r from-transparent via-zinc-200 to-transparent" />

      <div className="max-w-[1520px] mx-auto">
        {/* ── HEADER AREA ───────────────────────────────────────── */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 lg:mb-20 gap-6">
          <div>
            {/* Tag / Category */}
            <span className="inline-block text-[#0066FF] text-[12px] font-bold tracking-[0.22em] uppercase mb-3.5">
              SERVICES
            </span>
            {/* Main Headline */}
            <h2 className="text-[34px] sm:text-[42px] lg:text-[48px] font-extrabold tracking-tight text-zinc-950 leading-[1.12] max-w-[640px]">
              Everything you need to build your digital product.
            </h2>
          </div>

          {/* Subtitle / Value statement */}
          <p className="text-[14.5px] sm:text-[15.5px] font-normal leading-relaxed text-zinc-500 max-w-[380px] lg:text-right pb-1">
            From concept to code to scale — we deliver end-to-end digital solutions.
          </p>
        </div>

        {/* ── 6 SERVICES CARDS (DESKTOP FIRST GRID) ─────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 border-y border-zinc-200/80 bg-white">
          {services.map((item, index) => {
            const Icon = item.icon;
            const isActive = activeCard === item.id;

            return (
              <div
                key={item.id}
                onMouseEnter={() => setActiveCard(item.id)}
                onClick={() => setActiveCard(item.id)}
                className={`group relative flex flex-col justify-between p-7 sm:p-8 cursor-pointer transition-all duration-300 ${
                  index !== services.length - 1
                    ? "lg:border-r border-b lg:border-b-0 border-zinc-200/70"
                    : "border-b lg:border-b-0 border-zinc-200/70"
                } ${
                  isActive
                    ? "bg-white lg:-translate-y-2 lg:shadow-[0_20px_45px_rgba(0,0,0,0.08)] z-10 rounded-b-2xl"
                    : "hover:bg-zinc-50/70"
                }`}
              >
                {/* Active / Hover Top Blue Line Accent */}
                <div
                  className={`absolute top-0 left-0 right-0 h-[2.5px] bg-[#0066FF] transition-all duration-300 ${
                    isActive ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0 group-hover:opacity-100 group-hover:scale-x-100"
                  }`}
                  style={{ transformOrigin: "left" }}
                />

                {/* Top: Number and Icon */}
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <span
                      className={`text-[19px] font-bold tracking-tight transition-colors duration-200 ${
                        isActive ? "text-[#0066FF]" : "text-zinc-400 group-hover:text-[#0066FF]"
                      }`}
                    >
                      {item.number}
                    </span>
                  </div>

                  {/* Icon */}
                  <div className="mb-6">
                    <div
                      className={`inline-flex items-center justify-center transition-transform duration-300 group-hover:scale-110 ${
                        isActive ? "text-[#0066FF]" : "text-[#0066FF]"
                      }`}
                    >
                      <Icon className="w-8 h-8 stroke-[1.8]" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-[17px] font-bold text-zinc-950 tracking-tight leading-snug mb-3 group-hover:text-[#0066FF] transition-colors duration-200">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[13px] font-normal leading-[1.65] text-zinc-500 mb-8">
                    {item.description}
                  </p>
                </div>

                {/* Bottom: Interactive Circular Arrow Button */}
                <div className="pt-2">
                  <div
                    className={`inline-flex h-[36px] w-[36px] items-center justify-center rounded-full border transition-all duration-300 ${
                      isActive
                        ? "border-[#0066FF] bg-[#0066FF] text-white shadow-[0_4px_12px_rgba(0,102,255,0.35)]"
                        : "border-zinc-300 text-zinc-400 group-hover:border-[#0066FF] group-hover:text-[#0066FF] group-hover:bg-[#0066FF]/5"
                    }`}
                  >
                    <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ── BOTTOM METRICS & TRUSTED BRANDS BAR ───────────────── */}
        <div
          ref={metricsRef}
          className="mt-14 lg:mt-20 rounded-[22px] bg-[#f8f9fb] border border-zinc-200/80 p-8 sm:p-10 lg:p-12 shadow-[0_4px_24px_rgba(0,0,0,0.02)]"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
            
            {/* Left: 4 Animated Metrics Counters */}
            <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-4 gap-6 lg:gap-0">
              {metrics.map((item, idx) => (
                <div
                  key={item.label}
                  className={`flex flex-col justify-center ${
                    idx !== metrics.length - 1
                      ? "sm:border-r border-zinc-200/80 sm:pr-6 lg:pr-8 sm:mr-6 lg:mr-8"
                      : ""
                  }`}
                >
                  <p className="text-[32px] sm:text-[38px] lg:text-[42px] font-black tracking-tight text-[#0066FF] leading-none mb-2">
                    {counts[idx]}
                    <span className="text-[#0066FF]">{item.suffix}</span>
                  </p>
                  <p className="text-[12.5px] font-medium text-zinc-500 tracking-normal leading-tight">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Right: Trusted by Innovative Companies & Logos */}
            <div className="lg:col-span-5 flex flex-col justify-center lg:border-l border-zinc-200/80 lg:pl-10">
              <p className="text-[11px] font-bold tracking-[0.18em] uppercase text-zinc-400 mb-5">
                TRUSTED BY INNOVATIVE COMPANIES
              </p>

              {/* Company Logo Marks */}
              <div className="flex flex-wrap items-center gap-6 sm:gap-7 text-zinc-800">
                
                {/* 1. Sisyphus */}
                <div className="flex items-center gap-2 font-bold text-[15px] tracking-tight hover:text-zinc-950 transition-colors">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="3" />
                    <circle cx="12" cy="5" r="2" />
                    <circle cx="12" cy="19" r="2" />
                    <circle cx="5" cy="12" r="2" />
                    <circle cx="19" cy="12" r="2" />
                  </svg>
                  <span>Sisyphus</span>
                </div>

                {/* 2. KANBAAN */}
                <div className="flex items-center gap-1.5 font-black text-[13px] tracking-wider uppercase hover:text-zinc-950 transition-colors">
                  <span className="text-[16px] text-zinc-900 font-extrabold">&gt;&gt;</span>
                  <span>KANBAAN</span>
                </div>

                {/* 3. treva. */}
                <div className="flex items-center font-bold text-[16px] tracking-tight hover:text-zinc-950 transition-colors">
                  <span>treva<span className="text-[#0066FF]">.</span></span>
                </div>

                {/* 4. Vertuo */}
                <div className="flex items-center gap-1.5 font-semibold text-[14.5px] tracking-tight hover:text-zinc-950 transition-colors">
                  <svg className="w-4 h-4 fill-none stroke-current stroke-[2.2]" viewBox="0 0 24 24">
                    <polygon points="12 2 22 20 2 20" />
                  </svg>
                  <span>Vertuo</span>
                </div>

                {/* 5. Cactus */}
                <div className="flex items-center gap-1.5 font-bold text-[14px] tracking-tight hover:text-zinc-950 transition-colors">
                  <svg className="w-4 h-4 fill-none stroke-current stroke-[2]" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="9" />
                    <path d="M12 7v10M8 10v4M16 10v4" />
                  </svg>
                  <span>Cactus</span>
                </div>

              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
