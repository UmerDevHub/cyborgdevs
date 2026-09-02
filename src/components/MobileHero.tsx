"use client";

import { useRef } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ChevronDown } from "lucide-react";

export default function MobileHero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // 1. Navbar entrance
      tl.fromTo(
        ".hero-nav",
        { opacity: 0, y: -18 },
        { opacity: 1, y: 0, duration: 0.6 }
      );

      // 2. Tagline entrance
      tl.fromTo(
        ".hero-tagline",
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.45 },
        "-=0.2"
      );

      // 3. Headline stagger
      tl.fromTo(
        ".hero-headline-line",
        { opacity: 0, y: 35 },
        { opacity: 1, y: 0, duration: 0.55, stagger: 0.12 },
        "-=0.25"
      );

      // 4. Description paragraph
      tl.fromTo(
        ".hero-description",
        { opacity: 0, y: 18 },
        { opacity: 1, y: 0, duration: 0.45 },
        "-=0.2"
      );

      // 5. Buttons stagger
      tl.fromTo(
        ".hero-btn",
        { opacity: 0, y: 18 },
        { opacity: 1, y: 0, duration: 0.4, stagger: 0.1 },
        "-=0.2"
      );

      // 6. Scroll indicator
      tl.fromTo(
        ".hero-scroll",
        { opacity: 0 },
        { opacity: 1, duration: 0.45 },
        "-=0.1"
      );

      // 7. Stats bar entrance
      tl.fromTo(
        ".hero-stats",
        { opacity: 0, y: 25 },
        { opacity: 1, y: 0, duration: 0.55 },
        "-=0.25"
      );

      // Micro-animations: continuous bouncing chevron & mouse dot
      gsap.to(".scroll-dot", {
        y: 5,
        duration: 0.8,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      });

      gsap.to(".scroll-chevron", {
        y: 4,
        duration: 0.8,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      });
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen w-full overflow-hidden bg-black font-sans text-white select-none"
      style={{ fontFamily: "var(--font-inter, 'Inter', -apple-system, BlinkMacSystemFont, sans-serif)" }}
    >
      {/* ── BACKGROUND IMAGE ────────────────────────────────────── */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/mobile_hero.png"
          alt="Developer working with code monitors"
          fill
          priority
          className="object-cover object-top"
          sizes="100vw"
        />
        {/* Subtle cinematic gradient: clear at top so head/monitors are visible, darkening below */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.05) 30%, rgba(5,6,8,0.65) 55%, rgba(5,6,8,0.98) 92%)",
          }}
        />
      </div>

      {/* ── MAIN CONTENT WRAPPER ───────────────────────────────── */}
      <div className="relative z-10 flex min-h-screen flex-col justify-between px-5 pb-9 pt-6">

        {/* ── TOP HEADER / NAVBAR ───────────────────────────────── */}
        <header className="hero-nav flex items-center justify-between opacity-0">
          {/* Top-left: Clean transparent CD monogram logo (28-30px height) */}
          <div className="relative flex items-center">
            <Image
              src="/images/logo.png"
              alt="CD Monogram Logo"
              width={65}
              height={28}
              className="h-[28px] w-auto object-contain"
              priority
            />
          </div>

          {/* Top-right: MENU + hamburger icon (13px, white) */}
          <div className="flex items-center gap-2 cursor-pointer">
            <span
              className="text-[13px] font-semibold uppercase tracking-[0.14em] text-white"
            >
              MENU
            </span>
            <button
              aria-label="Open menu"
              className="flex flex-col items-end justify-center gap-[4px] p-1"
            >
              <span className="block h-[2px] w-[20px] rounded-full bg-white" />
              <span className="block h-[2px] w-[14px] rounded-full bg-white" />
              <span className="block h-[2px] w-[20px] rounded-full bg-white" />
            </button>
          </div>
        </header>

        {/* ── SPACER: Keeps person's head & monitors 100% visible & uncovered ── */}
        <div className="flex-1 min-h-[35vh]" />

        {/* ── HERO CONTENT (positioned lower, left-aligned, max-width ~290px) ── */}
        <div className="flex flex-col pb-2">

          {/* 1. Small label: Blue bullet + uppercase text (10-11px, medium weight) */}
          <div className="hero-tagline mb-2.5 flex items-center gap-2 opacity-0">
            <span className="h-2 w-2 flex-shrink-0 rounded-full bg-[#0066FF] shadow-[0_0_8px_#0066FF]" />
            <p
              className="text-[10.5px] font-medium uppercase text-white/95"
              style={{ letterSpacing: "0.4px", lineHeight: 1.3 }}
            >
              DIGITAL PRODUCTS ENGINEERED TO PERFORM.
            </p>
          </div>

          {/* 2. Main headline: Controlled 34-38px max, 1.05 line-height, bold 800 */}
          <h1
            className="mb-3.5 uppercase text-white"
            style={{
              fontSize: "clamp(34px, 9vw, 37px)",
              lineHeight: 1.05,
              letterSpacing: "-0.015em",
              fontWeight: 800,
            }}
          >
            <span className="hero-headline-line block opacity-0">WE BUILD</span>
            <span className="hero-headline-line block opacity-0">WHAT&apos;S</span>
            <span className="hero-headline-line block text-[#0066FF] opacity-0">
              NEXT.
            </span>
          </h1>

          {/* 3. Description: Clean, 13-14px, max-width 290px so it stays clear of center */}
          <p
            className="hero-description mb-5 font-normal text-white/80 opacity-0"
            style={{
              fontSize: "13.5px",
              lineHeight: 1.5,
              maxWidth: "290px",
            }}
          >
            We design and develop high-performance websites, mobile apps, AI
            solutions, and custom software that turn ambitious ideas into
            scalable digital products.
          </p>

          {/* 4. Action Buttons: 13-14px text, solid padding, pill-shaped */}
          <div className="flex flex-col gap-2.5">
            {/* Primary button */}
            <button
              className="hero-btn flex w-full max-w-[285px] items-center justify-center rounded-full bg-[#0066FF] px-6 py-3 text-[13.5px] font-medium text-white opacity-0 shadow-[0_4px_18px_rgba(0,102,255,0.35)] transition-all hover:bg-[#0055d4] active:scale-[0.98]"
            >
              Start a Project &rarr;
            </button>

            {/* Secondary button */}
            <button
              className="hero-btn flex w-full max-w-[285px] items-center justify-center rounded-full border border-white/30 bg-transparent px-6 py-3 text-[13.5px] font-medium text-white opacity-0 transition-all hover:border-white/50 hover:bg-white/5 active:scale-[0.98]"
            >
              Explore Our Work
            </button>
          </div>

          {/* 5. Scroll Indicator: Centered, small mouse + text (11-12px soft white) */}
          <div className="hero-scroll mt-5 mb-1 flex flex-col items-center justify-center gap-1 opacity-0">
            <div className="flex items-center gap-1.5">
              <div
                className="flex h-[24px] w-[15px] items-start justify-center pt-[3.5px]"
                style={{
                  border: "1.5px solid rgba(255, 255, 255, 0.6)",
                  borderRadius: "8px",
                }}
              >
                <div className="scroll-dot h-[4px] w-[2px] rounded-full bg-white/90" />
              </div>
              <span className="text-[11.5px] font-light text-white/70">
                Scroll to explore
              </span>
            </div>
            <ChevronDown className="scroll-chevron -mt-0.5 h-3.5 w-3.5 text-white/70" />
          </div>

        </div>

        {/* ── 6. BOTTOM STATS BAR ───────────────────────────────── */}
        <div
          className="hero-stats relative flex items-center justify-between overflow-hidden rounded-[20px] bg-[#0c0d12]/90 px-[18px] py-[13px] opacity-0 backdrop-blur-xl border border-white/[0.09] shadow-[0_12px_32px_rgba(0,0,0,0.65)] animate-border-gleam"
        >
          {/* Continuous elegant light sheen (shimmer) sweeping smoothly across */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[20px]">
            <div
              className="animate-card-shine absolute -top-1/2 bottom-0 w-[55%] h-[200%] pointer-events-none"
              style={{
                background:
                  "linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.03) 25%, rgba(255, 255, 255, 0.2) 50%, rgba(255, 255, 255, 0.03) 75%, transparent 100%)",
              }}
            />
          </div>

          {/* Left glowing vertical blue accent indicator */}
          <div
            className="animate-blue-pulse absolute left-0 top-1/2 -translate-y-1/2 h-[34px] w-[3px] rounded-r-full bg-[#0066FF]"
          />

          {/* Left side text: 50+ & Projects Delivered */}
          <div className="pl-1.5 flex flex-col justify-center">
            <p
              className="text-[#0066FF] tracking-tight font-bold"
              style={{ fontSize: "24px", lineHeight: 1.15 }}
            >
              50+
            </p>
            <p
              className="text-white/70 font-normal tracking-wide"
              style={{ fontSize: "11.5px", marginTop: "3px" }}
            >
              Projects Delivered
            </p>
          </div>

          {/* Right side: 4 overlapping avatar photos + vibrant blue '+' circle */}
          <div className="flex items-center">
            <div className="flex -space-x-[11px]">
              {[1, 2, 3, 4].map((num) => (
                <div
                  key={num}
                  className="relative h-[38px] w-[38px] overflow-hidden rounded-full border-[2px] border-[#0c0d12] bg-[#1a1a1f] shadow-sm"
                  style={{
                    zIndex: 5 - num,
                  }}
                >
                  <Image
                    src={`/images/avatar-${num}.jpg`}
                    alt={`Team member ${num}`}
                    width={76}
                    height={76}
                    className="h-full w-full object-cover"
                    priority
                  />
                </div>
              ))}
            </div>

            {/* Blue + circle button with subtle neon glow */}
            <div
              className="relative ml-2 flex h-[36px] w-[36px] items-center justify-center rounded-full bg-[#0066FF] text-white shadow-[0_2px_12px_rgba(0,102,255,0.5)] transition-transform duration-200 active:scale-95 cursor-pointer"
            >
              <span
                className="text-[19px] font-bold leading-none mb-[1px]"
              >
                +
              </span>
            </div>
          </div>
        </div>

      </div>

      {/* ── BOTTOM ORGANIC CURVED WAVE (EXACT MATCH TO REFERENCE) ── */}
      <div className="absolute bottom-0 left-0 right-0 z-20 w-full overflow-hidden leading-none pointer-events-none">
        <svg
          viewBox="0 0 1440 90"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="relative block w-full h-[32px] sm:h-[46px]"
        >
          <path
            d="M0,90 L0,58 C220,14 430,12 600,28 C840,50 1080,56 1260,36 C1360,24 1415,16 1440,12 L1440,90 L0,90 Z"
            fill="#FFFFFF"
          />
        </svg>
      </div>
    </section>
  );
}
