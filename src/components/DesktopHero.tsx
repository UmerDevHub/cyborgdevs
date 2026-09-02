"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ChevronDown } from "lucide-react";

export default function DesktopHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isLoaderActive, setIsLoaderActive] = useState(true);
  const targetLogoRef = useRef<HTMLDivElement>(null);
  const loaderOverlayRef = useRef<HTMLDivElement>(null);
  const loaderLogoRef = useRef<HTMLDivElement>(null);
  const rotateTweenRef = useRef<gsap.core.Tween | null>(null);

  useGSAP(
    () => {
      if (!loaderLogoRef.current || !loaderOverlayRef.current) return;

      // 1. Continuous smooth 360° rotation during splash screen (0.5s)
      rotateTweenRef.current = gsap.to(loaderLogoRef.current, {
        rotation: 360,
        duration: 0.5,
        ease: "none",
        repeat: -1,
      });

      // 2. Subtle soft glow / pulse
      gsap.to(loaderLogoRef.current, {
        filter: "drop-shadow(0 0 28px rgba(0, 102, 255, 0.65))",
        duration: 0.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // 3. Exactly 0.5s splash duration before smooth glide to navbar
      const timer = setTimeout(() => {
        if (!targetLogoRef.current || !loaderLogoRef.current || !loaderOverlayRef.current) return;

        const targetRect = targetLogoRef.current.getBoundingClientRect();
        const loaderRect = loaderLogoRef.current.getBoundingClientRect();

        const targetCenterX = targetRect.left + targetRect.width / 2;
        const targetCenterY = targetRect.top + targetRect.height / 2;
        const loaderCenterX = loaderRect.left + loaderRect.width / 2;
        const loaderCenterY = loaderRect.top + loaderRect.height / 2;

        const deltaX = targetCenterX - loaderCenterX;
        const deltaY = targetCenterY - loaderCenterY;
        const targetScale = targetRect.height / loaderRect.height;

        if (rotateTweenRef.current) {
          rotateTweenRef.current.kill();
        }
        const currentRot = (gsap.getProperty(loaderLogoRef.current, "rotation") as number) || 0;
        const finalRot = Math.ceil(currentRot / 360) * 360;

        const masterTl = gsap.timeline({
          onComplete: () => {
            setIsLoaderActive(false);
          },
        });

        // Rotating logo smoothly scales down + glides to top-left desktop navbar
        masterTl.to(loaderLogoRef.current, {
          x: deltaX,
          y: deltaY,
          scale: targetScale,
          rotation: finalRot,
          duration: 0.75,
          ease: "power3.inOut",
        }, 0);

        // Dark loader background fades out
        masterTl.to(loaderOverlayRef.current, {
          opacity: 0,
          duration: 0.65,
          ease: "power2.inOut",
        }, 0.08);

        // Desktop nav links & CTA button fade in
        masterTl.fromTo(".desktop-nav-items", {
          opacity: 0,
          y: -18,
        }, {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: "power3.out",
        }, 0.3);

        // Hero tagline badge entrance
        masterTl.fromTo(
          ".desktop-tagline",
          { opacity: 0, y: 18 },
          { opacity: 1, y: 0, duration: 0.45, ease: "power3.out" },
          0.4
        );

        // Headline stagger
        masterTl.fromTo(
          ".desktop-headline-line",
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, duration: 0.55, stagger: 0.12, ease: "power3.out" },
          0.48
        );

        // Description
        masterTl.fromTo(
          ".desktop-description",
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.45, ease: "power3.out" },
          0.62
        );

        // Buttons
        masterTl.fromTo(
          ".desktop-btn",
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.4, stagger: 0.08, ease: "power3.out" },
          0.72
        );

        // Scroll indicator
        masterTl.fromTo(
          ".desktop-scroll",
          { opacity: 0 },
          { opacity: 1, duration: 0.45, ease: "power3.out" },
          0.8
        );

        // Bottom-right stats bar
        masterTl.fromTo(
          ".desktop-stats",
          { opacity: 0, y: 30, scale: 0.95 },
          { opacity: 1, y: 0, scale: 1, duration: 0.55, ease: "power3.out" },
          0.85
        );
      }, 500);

      // Micro-animations: bouncing mouse dot & chevron
      gsap.to(".desktop-scroll-dot", {
        y: 5,
        duration: 0.85,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      });

      gsap.to(".desktop-scroll-chevron", {
        y: 4,
        duration: 0.85,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      });

      return () => clearTimeout(timer);
    },
    { scope: containerRef }
  );

  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "Solutions", href: "#solutions" },
    { name: "Work", href: "#work" },
    { name: "Process", href: "#process" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen w-full overflow-hidden bg-black font-sans text-white select-none"
      style={{ fontFamily: "var(--font-inter-tight, 'Inter Tight', -apple-system, BlinkMacSystemFont, sans-serif)" }}
    >
      {/* ── FULL-SCREEN WEBSITE LOADER ─────────────────────────── */}
      {isLoaderActive && (
        <div
          ref={loaderOverlayRef}
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#050608] pointer-events-auto"
        >
          <div
            ref={loaderLogoRef}
            className="relative flex items-center justify-center"
            style={{
              transformOrigin: "center center",
              filter: "drop-shadow(0 0 24px rgba(0, 102, 255, 0.5))",
              willChange: "transform, opacity, filter",
            }}
          >
            <Image
              src="/images/logo.png"
              alt="Loading CD Monogram Logo"
              width={150}
              height={64}
              className="h-[64px] w-auto object-contain select-none pointer-events-none"
              priority
            />
          </div>
        </div>
      )}

      {/* ── BACKGROUND IMAGE (LAPTOP/DESKTOP) ──────────────────── */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero_laptop.png"
          alt="Developer workstation with multiple screens"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Cinematic gradient overlay: gently darkened on left for text readability, preserving right-side workspace glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(90deg, rgba(5,6,8,0.88) 0%, rgba(5,6,8,0.72) 42%, rgba(5,6,8,0.18) 72%, rgba(5,6,8,0.45) 100%), linear-gradient(180deg, rgba(5,6,8,0.6) 0%, transparent 22%, transparent 72%, rgba(5,6,8,0.92) 100%)",
          }}
        />
      </div>

      {/* ── MAIN CONTENT CONTAINER ─────────────────────────────── */}
      <div className="relative z-10 flex min-h-screen flex-col justify-between px-10 lg:px-16 pt-8 pb-10 max-w-[1600px] mx-auto w-full">

        {/* ── TOP NAVBAR ────────────────────────────────────────── */}
        <header className="flex items-center justify-between w-full">
          {/* Top-left: CD Monogram Logo */}
          <div
            ref={targetLogoRef}
            className="relative flex items-center cursor-pointer transition-opacity duration-150"
            style={{ opacity: isLoaderActive ? 0 : 1 }}
          >
            <Image
              src="/images/logo.png"
              alt="CD Monogram Logo"
              width={85}
              height={36}
              className="h-[34px] w-auto object-contain"
              priority
            />
          </div>

          {/* Middle: Navigation links */}
          <nav className="desktop-nav-items flex items-center gap-8 lg:gap-10 opacity-0">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[14px] font-medium text-white/80 hover:text-white transition-colors duration-200 tracking-wide cursor-pointer"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Top-right: Glassy CTA button */}
          <div className="desktop-nav-items flex items-center opacity-0">
            <a
              href="#contact"
              className="rounded-full border border-white/20 bg-white/[0.06] hover:bg-white/[0.14] hover:border-white/40 text-white px-5 py-2.5 text-[13.5px] font-medium tracking-wide transition-all duration-200 cursor-pointer shadow-sm active:scale-98"
            >
              Start a Project &rarr;
            </a>
          </div>
        </header>

        {/* ── MIDDLE / HERO CONTENT (LEFT ALIGNED) ──────────────── */}
        <div className="flex flex-col justify-center my-auto pt-12 pb-8 max-w-[620px]">

          {/* 1. Tagline badge */}
          <div className="desktop-tagline mb-4 flex items-center gap-2.5 opacity-0">
            <span className="h-3.5 w-[3.5px] rounded-full bg-[#0066FF] shadow-[0_0_10px_#0066FF]" />
            <p
              className="text-[11.5px] font-semibold uppercase text-white/90"
              style={{ letterSpacing: "0.14em" }}
            >
              DIGITAL PRODUCTS. ENGINEERED TO PERFORM.
            </p>
          </div>

          {/* 2. Main Headline (WE BUILD / WHAT'S NEXT.) */}
          <h1
            className="mb-5 uppercase text-white font-black tracking-tight"
            style={{
              fontSize: "clamp(50px, 4.8vw, 70px)",
              lineHeight: 0.98,
              letterSpacing: "-0.02em",
              fontWeight: 900,
            }}
          >
            <span className="desktop-headline-line block opacity-0">
              WE BUILD
            </span>
            <span className="desktop-headline-line block opacity-0">
              WHAT&apos;S <span className="text-[#0066FF]">NEXT.</span>
            </span>
          </h1>

          {/* 3. Description Paragraph */}
          <p
            className="desktop-description mb-8 text-[15px] font-normal leading-relaxed text-white/75 opacity-0 max-w-[500px]"
          >
            We design and develop high-performance websites, mobile apps, AI
            solutions, SaaS platforms, and custom software that turn ambitious
            ideas into scalable digital products.
          </p>

          {/* 4. Action Buttons (Side-by-side row) */}
          <div className="flex items-center gap-4 mb-10">
            {/* Primary button */}
            <button
              className="desktop-btn flex h-[48px] items-center justify-center rounded-full bg-[#0066FF] px-8 text-[14.5px] font-semibold text-white opacity-0 shadow-[0_4px_22px_rgba(0,102,255,0.4)] transition-all hover:bg-[#0055d4] active:scale-[0.98] cursor-pointer"
            >
              Start a Project &rarr;
            </button>

            {/* Secondary button */}
            <button
              className="desktop-btn flex h-[48px] items-center justify-center rounded-full border border-white/25 bg-transparent px-8 text-[14.5px] font-semibold text-white opacity-0 transition-all hover:border-white/50 hover:bg-white/5 active:scale-[0.98] cursor-pointer"
            >
              Explore Our Work
            </button>
          </div>

          {/* 5. Scroll Indicator (Left-aligned below buttons) */}
          <div className="desktop-scroll flex items-center gap-3 opacity-0">
            <div className="flex flex-col items-center">
              {/* Mouse pill icon */}
              <div
                className="flex h-[28px] w-[18px] items-start justify-center pt-[4px]"
                style={{
                  border: "1.5px solid rgba(255, 255, 255, 0.55)",
                  borderRadius: "9px",
                }}
              >
                <div className="desktop-scroll-dot h-[5px] w-[2px] rounded-full bg-white/90" />
              </div>
              {/* Chevron below mouse */}
              <ChevronDown className="desktop-scroll-chevron -mt-0.5 h-3.5 w-3.5 text-white/70" />
            </div>
            <span className="text-[12px] font-normal text-white/60 tracking-wide">
              Scroll to explore
            </span>
          </div>

        </div>

        {/* ── FLOATING STATS CARD (DOCKED AT BOTTOM-RIGHT) ──────── */}
        <div
          className="desktop-stats absolute bottom-10 right-10 lg:right-16 z-20 flex items-center justify-between overflow-hidden rounded-[20px] bg-[#0c0d12]/85 px-6 py-4 opacity-0 backdrop-blur-xl border border-white/[0.09] shadow-[0_16px_40px_rgba(0,0,0,0.65)] animate-border-gleam min-w-[290px]"
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
            className="animate-blue-pulse absolute left-0 top-1/2 -translate-y-1/2 h-[36px] w-[3.5px] rounded-r-full bg-[#0066FF]"
          />

          {/* Left side text: 50+ & Projects Delivered */}
          <div className="pl-2 flex flex-col justify-center">
            <p
              className="text-[#0066FF] tracking-tight font-bold"
              style={{ fontSize: "26px", lineHeight: 1.15 }}
            >
              50+
            </p>
            <p
              className="text-white/70 font-normal tracking-wide"
              style={{ fontSize: "12px", marginTop: "3px" }}
            >
              Projects Delivered
            </p>
          </div>

          {/* Right side: 4 overlapping avatar photos + vibrant blue '+' circle */}
          <div className="flex items-center ml-5">
            <div className="flex -space-x-[11px]">
              {[1, 2, 3, 4].map((num) => (
                <div
                  key={num}
                  className="relative h-[40px] w-[40px] overflow-hidden rounded-full border-[2px] border-[#0c0d12] bg-[#1a1a1f] shadow-sm"
                  style={{
                    zIndex: 5 - num,
                  }}
                >
                  <Image
                    src={`/images/avatar-${num}.jpg`}
                    alt={`Team member ${num}`}
                    width={80}
                    height={80}
                    className="h-full w-full object-cover"
                    priority
                  />
                </div>
              ))}
            </div>

            {/* Blue + circle button with subtle neon glow */}
            <div
              className="relative ml-2 flex h-[38px] w-[38px] items-center justify-center rounded-full bg-[#0066FF] text-white shadow-[0_2px_12px_rgba(0,102,255,0.5)] transition-transform duration-200 active:scale-95 cursor-pointer"
            >
              <span
                className="text-[20px] font-bold leading-none mb-[1px]"
              >
                +
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
