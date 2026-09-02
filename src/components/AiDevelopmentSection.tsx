"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function AiDevelopmentSection() {
  return (
    <section
      id="solutions"
      className="relative w-full bg-white text-zinc-900 py-20 lg:py-28 px-5 sm:px-10 lg:px-16 overflow-hidden border-t border-zinc-100"
    >
      <div className="max-w-[1520px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* ── LEFT COLUMN: TEXT CONTENT ─────────────────────────── */}
          <div className="lg:col-span-4 xl:col-span-4 flex flex-col justify-center z-10">
            {/* Category badge */}
            <span className="inline-block text-[#0066FF] text-[12px] font-bold tracking-[0.22em] uppercase mb-3">
              AI DEVELOPMENT
            </span>

            {/* Main Headline */}
            <h2 className="text-[34px] sm:text-[42px] lg:text-[46px] font-extrabold tracking-tight text-zinc-950 leading-[1.12] mb-4 sm:mb-5">
              Turn AI into a <br className="hidden sm:inline" />
              competitive advantage.
            </h2>

            {/* Description */}
            <p className="text-[14.5px] sm:text-[15.5px] font-normal leading-relaxed text-zinc-500 max-w-[440px] mb-8 sm:mb-9">
              We build intelligent AI solutions that automate processes, enhance
              experiences, and unlock new opportunities for your business.
            </p>

            {/* Action Pill Button */}
            <div>
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 rounded-full border border-zinc-300 bg-white px-7 py-3 text-[14px] font-semibold text-zinc-900 shadow-sm transition-all duration-200 hover:border-[#0066FF] hover:text-[#0066FF] active:scale-95 cursor-pointer"
              >
                <span>Explore AI Solutions</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </a>
            </div>
          </div>

          {/* ── RIGHT COLUMN: AI ENGINE ARCHITECTURE IMAGE ────────── */}
          <div className="lg:col-span-8 xl:col-span-8 flex items-center justify-center relative w-full">
            <div className="relative w-full overflow-hidden rounded-2xl sm:rounded-3xl transition-transform duration-500 hover:scale-[1.01]">
              <Image
                src="/images/ai_engine_pic.png"
                alt="AI Engine Process, Analyze, Learn Architecture with data inputs and outputs"
                width={1709}
                height={920}
                className="w-full h-auto object-contain select-none"
                priority
                sizes="(max-width: 1024px) 100vw, 66vw"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
