"use client";

import React from "react";
import {
  Search,
  Target,
  Palette,
  Code2,
  Rocket,
  TrendingUp,
} from "lucide-react";

interface ProcessStep {
  number: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

const steps: ProcessStep[] = [
  {
    number: "01",
    title: "Discover",
    description: "We understand your business, goals, and user needs.",
    icon: Search,
  },
  {
    number: "02",
    title: "Strategize",
    description: "We define the architecture, roadmap, and technology.",
    icon: Target,
  },
  {
    number: "03",
    title: "Design",
    description: "We create beautiful, intuitive experiences.",
    icon: Palette,
  },
  {
    number: "04",
    title: "Develop",
    description: "We build with clean, scalable, and efficient code.",
    icon: Code2,
  },
  {
    number: "05",
    title: "Launch",
    description: "We test, deploy, and launch your product.",
    icon: Rocket,
  },
  {
    number: "06",
    title: "Scale",
    description: "We optimize, grow, and scale your product.",
    icon: TrendingUp,
  },
];

export default function ProcessSection() {
  return (
    <section
      id="process"
      className="relative w-full bg-white text-zinc-900 py-10 sm:py-12 lg:py-16 px-5 sm:px-10 lg:px-16 overflow-hidden border-t border-zinc-100"
    >
      <div className="max-w-[1520px] mx-auto">
        {/* ── HEADER ROW ────────────────────────────────────────── */}
        <div className="mb-8 sm:mb-10">
          {/* Category tag */}
          <span className="inline-block text-[#0066FF] text-[12px] font-bold tracking-[0.22em] uppercase mb-3">
            OUR PROCESS
          </span>
          {/* Main Title */}
          <h2 className="text-[34px] sm:text-[42px] lg:text-[46px] font-extrabold tracking-tight text-zinc-950 leading-[1.12]">
            A proven process. <br />
            Successful results.
          </h2>
        </div>

        {/* ── DESKTOP: HORIZONTAL 6-STEP CONNECTED TIMELINE ─────── */}
        <div className="hidden lg:block relative">
          {/* Horizontal connecting line running across all nodes */}
          <div className="absolute top-[26px] left-[8%] right-[8%] h-[2px] bg-zinc-200 z-0" />

          <div className="grid grid-cols-6 gap-6 relative z-10">
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.number}
                  className="group flex flex-col items-start cursor-pointer"
                >
                  {/* Circular Node with Step Number and Icon */}
                  <div className="relative flex h-[52px] w-[52px] flex-col items-center justify-center rounded-full bg-[#0066FF] text-white shadow-[0_4px_16px_rgba(0,102,255,0.35)] transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_8px_24px_rgba(0,102,255,0.5)]">
                    <span className="text-[12px] font-bold leading-none tracking-tight text-white mb-0.5">
                      {step.number}
                    </span>
                    <Icon className="h-3.5 w-3.5 stroke-[2.4] text-white/90" />
                  </div>

                  {/* Step Title */}
                  <h3 className="mt-6 mb-2 text-[17px] font-bold tracking-tight text-zinc-950 transition-colors duration-200 group-hover:text-[#0066FF]">
                    {step.title}
                  </h3>

                  {/* Step Description */}
                  <p className="text-[13.5px] font-normal leading-relaxed text-zinc-500 max-w-[210px]">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* ── MOBILE & TABLET: VERTICAL CONNECTED TIMELINE ──────── */}
        <div className="lg:hidden relative pl-2 sm:pl-4">
          {/* Vertical connecting line running down the left */}
          <div className="absolute left-[27px] sm:left-[35px] top-6 bottom-8 w-[2px] bg-zinc-200 z-0" />

          <div className="flex flex-col gap-6 relative z-10">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.number}
                  className="group flex items-start gap-5 cursor-pointer"
                >
                  {/* Circular Blue Milestone Node */}
                  <div className="flex-shrink-0 relative flex h-[50px] w-[50px] flex-col items-center justify-center rounded-full bg-[#0066FF] text-white shadow-[0_4px_14px_rgba(0,102,255,0.35)] transition-transform duration-200 group-hover:scale-105">
                    <span className="text-[12px] font-bold leading-none tracking-tight text-white mb-0.5">
                      {step.number}
                    </span>
                    <Icon className="h-3.5 w-3.5 stroke-[2.4] text-white/90" />
                  </div>

                  {/* Step Content */}
                  <div className={`flex flex-col justify-center ${idx !== steps.length - 1 ? "pb-4" : ""}`}>
                    <h3 className="text-[17px] font-bold tracking-tight text-zinc-950 transition-colors group-hover:text-[#0066FF] mb-1">
                      {step.title}
                    </h3>
                    <p className="text-[13.5px] font-normal leading-relaxed text-zinc-500 max-w-[340px]">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
