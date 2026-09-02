"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function CtaSection() {
  return (
    <section
      id="contact"
      className="relative w-full overflow-hidden bg-[#030712] text-white"
    >
      {/* ── BACKGROUND FOR DESKTOP / LAPTOP (>= 1024px) ────────── */}
      <div className="hidden lg:block absolute inset-0 z-0">
        <Image
          src="/images/cta_back.png"
          alt="Glowing blue particle wave landscape for desktop CTA"
          fill
          priority
          className="object-cover object-center select-none"
        />
        {/* Subtle vignette gradient for smooth text contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/30 pointer-events-none" />
      </div>

      {/* ── BACKGROUND FOR MOBILE & TABLET (< 1024px) ──────────── */}
      <div className="block lg:hidden absolute inset-0 z-0">
        <Image
          src="/images/cta_mob.png"
          alt="Vertical glowing blue cyber particle wave for mobile CTA"
          fill
          priority
          className="object-cover object-center select-none"
        />
        <div className="absolute inset-0 bg-black/40 pointer-events-none" />
      </div>

      {/* ── CONTENT CONTAINER ─────────────────────────────────── */}
      <div className="relative z-10 max-w-[1520px] mx-auto px-6 sm:px-10 lg:px-16 py-12 sm:py-14 lg:py-16">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-10 lg:gap-14">
          
          {/* Left Text Block */}
          <div className="flex flex-col max-w-[680px]">
            {/* Pre-heading Tag */}
            <span className="text-blue-200/90 text-[11.5px] sm:text-[12px] font-bold tracking-[0.24em] uppercase mb-3">
              READY TO BUILD SOMETHING AMAZING?
            </span>

            {/* Main Headline */}
            <h2 className="text-[34px] sm:text-[44px] lg:text-[50px] font-extrabold tracking-tight text-white leading-[1.12] mb-3">
              Have an idea worth building?
            </h2>

            {/* Subtitle */}
            <p className="text-[15px] sm:text-[16.5px] font-normal leading-relaxed text-blue-100/80 max-w-[520px]">
              Let&apos;s turn your idea into a digital product people love to use.
            </p>
          </div>

          {/* Right Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4 flex-shrink-0">
            {/* Primary Blue Button */}
            <a
              href="mailto:hello@agency.com"
              className="group inline-flex items-center justify-center gap-2.5 rounded-xl bg-[#0066FF] px-8 py-3.5 text-[15px] font-semibold text-white shadow-[0_4px_24px_rgba(0,102,255,0.45)] transition-all duration-200 hover:bg-[#0052cc] hover:scale-105 active:scale-95 cursor-pointer text-center"
            >
              <span>Start Your Project</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </a>

            {/* Secondary Glass Outline Button */}
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-xl border border-white/25 bg-white/5 backdrop-blur-md px-8 py-3.5 text-[15px] font-semibold text-white transition-all duration-200 hover:border-white/60 hover:bg-white/10 hover:scale-105 active:scale-95 cursor-pointer text-center"
            >
              Book a Consultation
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
