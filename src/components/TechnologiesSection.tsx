"use client";

import React from "react";
import Image from "next/image";

interface TechItem {
  name: string;
  image: string;
}

const technologies: TechItem[] = [
  {
    name: "React",
    image: "/images/react_clean.png",
  },
  {
    name: "Next.js",
    image: "/images/nextjs_clean.png",
  },
  {
    name: "Node.js",
    image: "/images/node_clean.png",
  },
  {
    name: "Laravel",
    image: "/images/laravel_clean.png",
  },
  {
    name: "Flutter",
    image: "/images/flutter_clean.png",
  },
  {
    name: "React Native",
    image: "/images/react_clean.png",
  },
  {
    name: "Python",
    image: "/images/python_clean.png",
  },
  {
    name: "AWS",
    image: "/images/aws_clean.png",
  },
  {
    name: "Docker",
    image: "/images/docker_clean.png",
  },
  {
    name: "PostgreSQL",
    image: "/images/postgre_clean.png",
  },
  {
    name: "MongoDB",
    image: "/images/mongo_clean.png",
  },
  {
    name: "OpenAI",
    image: "/images/gpt_clean.png",
  },
];

export default function TechnologiesSection() {
  return (
    <section
      id="technologies"
      className="relative w-full bg-white text-zinc-900 py-18 lg:py-24 px-5 sm:px-10 lg:px-16 overflow-hidden border-t border-zinc-100"
    >
      <div className="max-w-[1520px] mx-auto">
        {/* ── HEADER ROW ────────────────────────────────────────── */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-14 sm:mb-18 gap-5">
          <div>
            {/* Category tag */}
            <span className="inline-block text-[#0066FF] text-[12px] font-bold tracking-[0.22em] uppercase mb-3">
              TECHNOLOGIES
            </span>
            {/* Main Title */}
            <h2 className="text-[32px] sm:text-[40px] lg:text-[46px] font-extrabold tracking-tight text-zinc-950 leading-[1.12]">
              Modern technologies. <br />
              Powerful solutions.
            </h2>
          </div>

          {/* Right Subtitle */}
          <p className="text-[14px] sm:text-[15px] font-normal leading-relaxed text-zinc-500 max-w-[360px] sm:text-right pb-1">
            We use cutting-edge technologies <br className="hidden sm:inline" />
            to build scalable and future-ready products.
          </p>
        </div>

        {/* ── DESKTOP: ALL 12 LOGOS IN ONE EVEN HORIZONTAL ROW ── */}
        <div className="hidden lg:grid grid-cols-12 gap-2 xl:gap-4 items-center justify-between pt-2 pb-4 bg-white">
          {technologies.map((tech) => (
            <div
              key={tech.name}
              className="group flex flex-col items-center justify-center gap-3 p-2 rounded-2xl transition-all duration-300 hover:-translate-y-1.5 cursor-pointer bg-white"
            >
              {/* Isolated Logo image */}
              <div className="relative flex h-[52px] w-[52px] items-center justify-center transition-transform duration-300 group-hover:scale-110">
                <Image
                  src={tech.image}
                  alt={`${tech.name} logo`}
                  width={104}
                  height={104}
                  className="h-full w-full object-contain select-none"
                  priority
                />
              </div>

              {/* Technology Name */}
              <span className="text-[13px] font-medium text-zinc-700 transition-colors duration-200 group-hover:text-zinc-950 text-center whitespace-nowrap">
                {tech.name}
              </span>
            </div>
          ))}
        </div>

        {/* ── MOBILE: ONE CONTINUOUS HORIZONTAL ROW WITH SMOOTH SLIDE ── */}
        <div className="lg:hidden relative w-full overflow-hidden pt-2 pb-4 bg-white">
          {/* Subtle gradient edge masks for clean fade in/out */}
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-6 z-10 bg-gradient-to-r from-white to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-6 z-10 bg-gradient-to-l from-white to-transparent" />

          {/* Continuous Infinite Sliding Marquee on pure white background */}
          <div className="animate-marquee flex items-center gap-7 select-none py-1 bg-white">
            {/* Track 1 */}
            {technologies.map((tech, i) => (
              <div
                key={`m1-${tech.name}-${i}`}
                className="flex flex-col items-center justify-center gap-2 flex-shrink-0 min-w-[72px] p-2 bg-white"
              >
                <div className="relative flex h-[46px] w-[46px] items-center justify-center">
                  <Image
                    src={tech.image}
                    alt={`${tech.name} logo`}
                    width={92}
                    height={92}
                    className="h-full w-full object-contain select-none"
                    priority
                  />
                </div>
                <span className="text-[12px] font-medium text-zinc-700 whitespace-nowrap">
                  {tech.name}
                </span>
              </div>
            ))}

            {/* Track 2 (Duplicate for infinite seamless loop) */}
            {technologies.map((tech, i) => (
              <div
                key={`m2-${tech.name}-${i}`}
                className="flex flex-col items-center justify-center gap-2 flex-shrink-0 min-w-[72px] p-2 bg-white"
              >
                <div className="relative flex h-[46px] w-[46px] items-center justify-center">
                  <Image
                    src={tech.image}
                    alt={`${tech.name} logo`}
                    width={92}
                    height={92}
                    className="h-full w-full object-contain select-none"
                    priority
                  />
                </div>
                <span className="text-[12px] font-medium text-zinc-700 whitespace-nowrap">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
