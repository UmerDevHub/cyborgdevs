"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";

interface Project {
  id: string;
  category: string;
  title: string;
  description: string;
  image: string;
  imagePosition?: string;
  tags: string[];
}

const projects: Project[] = [
  {
    id: "analytics-dashboard",
    category: "SaaS Platform",
    title: "Analytics Dashboard",
    description:
      "A comprehensive analytics platform that helps businesses make data-driven decisions.",
    image: "/images/project-1.png",
    imagePosition: "object-top",
    tags: ["React", "Node.js", "PostgreSQL"],
  },
  {
    id: "fintrack-mobile",
    category: "Mobile App",
    title: "FinTrack Mobile App",
    description:
      "A modern finance tracking app with budgeting, analytics, and smart insights.",
    image: "/images/project-2.png",
    imagePosition: "object-top",
    tags: ["Flutter", "Firebase", "Dart"],
  },
  {
    id: "luxury-watch-store",
    category: "E-commerce",
    title: "Luxury Watch Store",
    description:
      "A premium e-commerce experience for a luxury watch brand.",
    image: "/images/project-3.png",
    imagePosition: "object-center",
    tags: ["Next.js", "Stripe", "Tailwind CSS"],
  },
];

export default function FeaturedWorkSection() {
  return (
    <section
      id="work"
      className="relative w-full bg-white text-zinc-900 py-10 sm:py-12 lg:py-16 px-5 sm:px-10 lg:px-16 overflow-hidden border-t border-zinc-100"
    >
      <div className="max-w-[1520px] mx-auto">
        {/* ── HEADER ROW ────────────────────────────────────────── */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-10 gap-5">
          <div>
            {/* Category tag */}
            <span className="inline-block text-[#0066FF] text-[12px] font-bold tracking-[0.22em] uppercase mb-3">
              FEATURED WORK
            </span>
            {/* Main Title */}
            <h2 className="text-[34px] sm:text-[42px] lg:text-[46px] font-extrabold tracking-tight text-zinc-950 leading-[1.12]">
              Work that speaks <br className="hidden sm:inline" />
              for itself.
            </h2>
          </div>

          {/* "View All Projects" Pill Button */}
          <div className="flex sm:justify-end">
            <a
              href="#work"
              className="group inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-6 py-2.5 text-[14px] font-semibold text-zinc-900 shadow-sm transition-all duration-200 hover:border-[#0066FF] hover:text-[#0066FF] active:scale-95"
            >
              <span>View All Projects</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </a>
          </div>
        </div>

        {/* ── 3 PROJECT CARDS GRID ──────────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 lg:gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative flex flex-col justify-end overflow-hidden rounded-[24px] bg-[#0c0d12] shadow-[0_12px_36px_rgba(0,0,0,0.06)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_24px_50px_rgba(0,0,0,0.16)] cursor-pointer aspect-[4/3.4] sm:aspect-[4/3.3]"
            >
              {/* Project Background Mockup Image */}
              <div className="absolute inset-0 z-0">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  priority
                  className={`object-cover ${
                    project.imagePosition || "object-top"
                  } transition-transform duration-700 ease-out group-hover:scale-105`}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                {/* Dark Vignette / Gradient Overlay to ensure crisp readability */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(0,0,0,0.08) 0%, rgba(5,6,10,0.3) 38%, rgba(5,6,10,0.88) 72%, rgba(5,6,10,0.98) 100%)",
                  }}
                />
              </div>

              {/* Card Foreground Content */}
              <div className="relative z-10 flex flex-col justify-end p-6 sm:p-7 h-full w-full">
                {/* Category Pill Badge */}
                <div className="mb-2.5">
                  <span className="inline-flex items-center rounded-full border border-white/15 bg-black/40 px-3 py-1 text-[11.5px] font-medium text-white/90 backdrop-blur-md">
                    {project.category}
                  </span>
                </div>

                {/* Project Title */}
                <h3 className="text-[21px] sm:text-[23px] font-bold tracking-tight text-white leading-snug">
                  {project.title}
                </h3>

                {/* Project Description */}
                <p className="mt-1.5 mb-5 text-[13px] sm:text-[13.5px] font-normal leading-relaxed text-white/75 line-clamp-2 max-w-[88%]">
                  {project.description}
                </p>

                {/* Bottom Row: Tech Tags & Floating White Circular Arrow Button */}
                <div className="flex items-center justify-between pt-1">
                  {/* Tech stack pills */}
                  <div className="flex flex-wrap items-center gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.08] px-2.5 py-1 text-[11px] font-medium text-white/80 backdrop-blur-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Circular White Action Button */}
                  <div className="flex-shrink-0 ml-3">
                    <div className="flex h-[42px] w-[42px] sm:h-[44px] sm:w-[44px] items-center justify-center rounded-full bg-white text-zinc-950 shadow-lg transition-all duration-300 group-hover:bg-[#0066FF] group-hover:text-white group-hover:scale-105 group-hover:shadow-[0_4px_16px_rgba(0,102,255,0.45)]">
                      <ArrowRight className="h-4 w-4 sm:h-4.5 sm:w-4.5 transition-transform duration-300 group-hover:translate-x-0.5" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
