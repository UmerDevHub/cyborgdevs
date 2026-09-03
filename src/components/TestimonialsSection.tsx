"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Check, ChevronLeft, ChevronRight, Star, BookOpen } from "lucide-react";
import gsap from "gsap";

interface Review {
  id: number;
  quote: string;
  author: string;
  role: string;
  avatar: string;
  stars: number;
}

const reviewsData: Review[] = [
  {
    id: 1,
    quote:
      "They understood our vision perfectly and delivered a product that exceeded our expectations. The team is highly professional and incredibly talented.",
    author: "Sarah Johnson",
    role: "CTO, FinTech Solutions",
    avatar: "/images/avatar-1.jpg",
    stars: 5,
  },
  {
    id: 2,
    quote:
      "Excellent communication, amazing quality, and delivered on time. Highly recommended for any ambitious tech project!",
    author: "Michael Chen",
    role: "Founder, Kanbaan",
    avatar: "/images/avatar-2.jpg",
    stars: 5,
  },
  {
    id: 3,
    quote:
      "Their AI solution transformed our business operations. Outstanding work that gave us a tangible competitive edge.",
    author: "Emily Davis",
    role: "Product Manager, Treva",
    avatar: "/images/avatar-3.jpg",
    stars: 5,
  },
  {
    id: 4,
    quote:
      "The scalable architecture they designed helped us handle a 10x traffic spike seamlessly without a single hiccup.",
    author: "David Miller",
    role: "VP of Engineering, Sisyphus",
    avatar: "/images/avatar-4.jpg",
    stars: 5,
  },
  {
    id: 5,
    quote:
      "From UI/UX design to production deployment, their engineering execution was flawless, beautifully designed, and ahead of schedule.",
    author: "Sophia Patel",
    role: "Head of Product, Vertuo",
    avatar: "/images/avatar-2.jpg",
    stars: 5,
  },
];

const checkFeatures = [
  [
    "Business-first approach",
    "Modern engineering",
    "Scalable architecture",
    "Transparent communication",
  ],
  ["Long-term partnership", "Fast & reliable delivery", "AI-first mindset"],
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const mainCardRef = useRef<HTMLDivElement>(null);
  const rightCardsRef = useRef<HTMLDivElement>(null);
  const shadowOverlayRef = useRef<HTMLDivElement>(null);
  const glareRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const autoPlayTimerRef = useRef<NodeJS.Timeout | null>(null);
  const progressTweenRef = useRef<gsap.core.Tween | null>(null);

  // ── ADVANCED 3D PHYSICAL BOOK PAGE CURL, FOLD & UNFOLD ──────────
  const turnPageAdvanced = (direction: "next" | "prev", nextIdx: number) => {
    if (isAnimating || !mainCardRef.current) return;
    setIsAnimating(true);

    const card = mainCardRef.current;
    const shadow = shadowOverlayRef.current;
    const glare = glareRef.current;
    const isForward = direction === "next";
    const origin = isForward ? "left center" : "right center";

    gsap.set(card, { transformOrigin: origin });

    const tl = gsap.timeline({
      onComplete: () => {
        setIsAnimating(false);
        gsap.set(card, { clearProps: "transform,boxShadow,z" });
        if (shadow) gsap.set(shadow, { opacity: 0 });
        if (glare) gsap.set(glare, { opacity: 0, x: "-100%" });
      },
    });

    // ── STAGE 1: Corner Curl & Thumb Page Lift (0.0s ➔ 0.18s) ────
    tl.to(
      card,
      {
        rotationY: isForward ? -28 : 28,
        rotationZ: isForward ? -3.5 : 3.5,
        skewY: isForward ? -1.8 : 1.8,
        z: 40,
        scale: 0.98,
        boxShadow: isForward
          ? "-16px 6px 30px rgba(0,0,0,0.14)"
          : "16px 6px 30px rgba(0,0,0,0.14)",
        duration: 0.18,
        ease: "power1.inOut",
      },
      0
    );

    // Specular paper reflection glides across
    if (glare) {
      tl.fromTo(
        glare,
        { x: isForward ? "-80%" : "120%", opacity: 0 },
        { x: isForward ? "40%" : "-40%", opacity: 0.55, duration: 0.22, ease: "power1.inOut" },
        0
      );
    }

    // ── STAGE 2: Deep 3D Arch & Mid-Air Fold Across Spine (0.18s ➔ 0.38s) ──
    tl.to(
      card,
      {
        rotationY: isForward ? -88 : 88,
        rotationZ: isForward ? -1.2 : 1.2,
        skewY: isForward ? -0.8 : 0.8,
        z: 75,
        scale: 0.91,
        boxShadow: isForward
          ? "-36px 12px 55px rgba(0,0,0,0.28)"
          : "36px 12px 55px rgba(0,0,0,0.28)",
        duration: 0.2,
        ease: "power2.in",
      },
      0.18
    );

    if (shadow) {
      tl.to(
        shadow,
        {
          opacity: 0.42,
          duration: 0.2,
          ease: "power2.in",
        },
        0.18
      );
    }

    // ── MIDPOINT (0.38s): Page flips onto next leaf at the spine ──
    tl.call(() => {
      setCurrentIndex(nextIdx);
      gsap.set(card, {
        rotationY: isForward ? 88 : -88,
        rotationZ: isForward ? 1.5 : -1.5,
        skewY: isForward ? 0.8 : -0.8,
        z: 75,
        scale: 0.91,
        transformOrigin: origin,
      });
    });

    // ── STAGE 3: Page Unfolds Across Open Spread (0.38s ➔ 0.68s) ──
    tl.to(card, {
      rotationY: isForward ? -2.5 : 2.5,
      rotationZ: isForward ? -0.4 : 0.4,
      skewY: 0,
      z: 12,
      scale: 0.995,
      boxShadow: "0px 14px 40px rgba(0,0,0,0.06)",
      duration: 0.3,
      ease: "power2.out",
    });

    if (shadow) {
      tl.to(
        shadow,
        {
          opacity: 0,
          duration: 0.3,
          ease: "power2.out",
        },
        "-=0.3"
      );
    }

    if (glare) {
      tl.to(
        glare,
        {
          x: isForward ? "140%" : "-140%",
          opacity: 0,
          duration: 0.25,
          ease: "power2.out",
        },
        "-=0.25"
      );
    }

    // ── STAGE 4: Tactile Paper Settle & Rebound (0.68s ➔ 0.82s) ──
    tl.to(card, {
      rotationY: 0,
      rotationZ: 0,
      z: 0,
      scale: 1,
      boxShadow: "0px 10px 35px rgba(0,0,0,0.04)",
      duration: 0.14,
      ease: "sine.out",
    });

    // Secondary cards organic nudge
    if (rightCardsRef.current) {
      tl.fromTo(
        rightCardsRef.current,
        {
          x: isForward ? 22 : -22,
          opacity: 0.5,
        },
        {
          x: 0,
          opacity: 1,
          duration: 0.42,
          ease: "power2.out",
        },
        0.38
      );
    }
  };

  // 3.5-second auto-play cycle with visual countdown progress bar
  const startProgressAndTimer = () => {
    if (autoPlayTimerRef.current) clearTimeout(autoPlayTimerRef.current);
    if (progressTweenRef.current) progressTweenRef.current.kill();

    if (progressBarRef.current) {
      gsap.set(progressBarRef.current, { width: "0%" });
      progressTweenRef.current = gsap.to(progressBarRef.current, {
        width: "100%",
        duration: 3.5,
        ease: "none",
      });
    }

    autoPlayTimerRef.current = setTimeout(() => {
      turnPageAdvanced("next", (currentIndex + 1) % reviewsData.length);
    }, 3500);
  };

  useEffect(() => {
    startProgressAndTimer();
    return () => {
      if (autoPlayTimerRef.current) clearTimeout(autoPlayTimerRef.current);
      if (progressTweenRef.current) progressTweenRef.current.kill();
    };
  }, [currentIndex]);

  // Pause on hover, resume on leave
  const handleMouseEnter = () => {
    if (autoPlayTimerRef.current) clearTimeout(autoPlayTimerRef.current);
    if (progressTweenRef.current) progressTweenRef.current.pause();
  };

  const handleMouseLeave = () => {
    if (progressTweenRef.current) progressTweenRef.current.resume();
    // Restart remaining timer or start fresh
    startProgressAndTimer();
  };

  const handleNext = () => {
    if (isAnimating) return;
    const nextIdx = (currentIndex + 1) % reviewsData.length;
    turnPageAdvanced("next", nextIdx);
  };

  const handlePrev = () => {
    if (isAnimating) return;
    const prevIdx = (currentIndex - 1 + reviewsData.length) % reviewsData.length;
    turnPageAdvanced("prev", prevIdx);
  };

  const currentReview = reviewsData[currentIndex];
  const nextReview1 = reviewsData[(currentIndex + 1) % reviewsData.length];
  const nextReview2 = reviewsData[(currentIndex + 2) % reviewsData.length];

  return (
    <section
      id="about"
      className="relative w-full bg-white text-zinc-900 py-10 sm:py-12 lg:py-16 px-5 sm:px-10 lg:px-16 overflow-hidden border-t border-zinc-100"
    >
      <div className="max-w-[1520px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* ── LEFT COLUMN: WHY CHOOSE US ─────────────────────────── */}
          <div className="lg:col-span-5 flex flex-col justify-start">
            {/* Category badge */}
            <span className="inline-block text-[#0066FF] text-[12px] font-bold tracking-[0.22em] uppercase mb-2.5">
              WHY CHOOSE US
            </span>

            {/* Main Headline */}
            <h2 className="text-[34px] sm:text-[42px] lg:text-[48px] font-extrabold tracking-tight text-zinc-950 leading-[1.12] mb-6 sm:mb-8">
              Not another <br />
              development <br />
              agency.
            </h2>

            {/* 2-Column Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 max-w-[480px]">
              {/* Column 1 */}
              <div className="flex flex-col gap-4">
                {checkFeatures[0].map((item) => (
                  <div key={item} className="flex items-center gap-2.5">
                    <div className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-50 text-[#0066FF] flex-shrink-0">
                      <Check className="h-3.5 w-3.5 stroke-[2.6]" />
                    </div>
                    <span className="text-[13.5px] sm:text-[14px] font-medium text-zinc-700">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              {/* Column 2 */}
              <div className="flex flex-col gap-4">
                {checkFeatures[1].map((item) => (
                  <div key={item} className="flex items-center gap-2.5">
                    <div className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-50 text-[#0066FF] flex-shrink-0">
                      <Check className="h-3.5 w-3.5 stroke-[2.6]" />
                    </div>
                    <span className="text-[13.5px] sm:text-[14px] font-medium text-zinc-700">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── RIGHT COLUMN: WHAT OUR CLIENTS SAY (ADVANCED 3.5S BOOK FOLD) ── */}
          <div className="lg:col-span-7 flex flex-col justify-start w-full">
            {/* Header row with arrows & animated 3.5s page indicator */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <span className="inline-block text-[#0066FF] text-[12px] font-bold tracking-[0.22em] uppercase">
                  WHAT OUR CLIENTS SAY
                </span>
                <span className="hidden sm:inline-flex items-center gap-1.5 text-[11px] font-semibold text-zinc-500 bg-zinc-100/90 px-2.5 py-0.5 rounded-full">
                  <BookOpen className="w-3 h-3 text-[#0066FF]" />
                  Page {currentIndex + 1} of {reviewsData.length}
                </span>
              </div>

              {/* Carousel Next/Prev Navigation Buttons */}
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handlePrev}
                  disabled={isAnimating}
                  aria-label="Previous page review"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-700 shadow-sm transition-all hover:border-[#0066FF] hover:text-[#0066FF] active:scale-90 cursor-pointer disabled:opacity-50"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  disabled={isAnimating}
                  aria-label="Next page review"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-700 shadow-sm transition-all hover:border-[#0066FF] hover:text-[#0066FF] active:scale-90 cursor-pointer disabled:opacity-50"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* 3D Book Stage Container with Perspective */}
            <div
              className="relative w-full"
              style={{ perspective: "1600px" }}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-stretch">
                {/* 1. Main Book Page Review Card (Peels, Curls, Folds & Unfolds in 3D) */}
                <div
                  ref={mainCardRef}
                  className="md:col-span-7 relative flex flex-col justify-between rounded-[24px] border border-zinc-200/80 bg-white p-7 sm:p-8 shadow-[0_10px_35px_rgba(0,0,0,0.04)] overflow-hidden min-h-[320px] select-none"
                  style={{
                    transformStyle: "preserve-3d",
                    willChange: "transform, box-shadow",
                  }}
                >
                  {/* Visual Book Spine Crease on Left Edge */}
                  <div className="absolute left-0 top-0 bottom-0 w-[8px] bg-gradient-to-r from-zinc-200/70 via-zinc-100/30 to-transparent pointer-events-none z-20" />

                  {/* Top 3.5-second live countdown reading progress bar */}
                  <div className="absolute top-0 left-0 right-0 h-[2.5px] bg-zinc-100 overflow-hidden z-30">
                    <div
                      ref={progressBarRef}
                      className="h-full bg-[#0066FF] w-0 transition-none"
                    />
                  </div>

                  {/* Dynamic Curled Paper Lighting Sheen Overlay */}
                  <div
                    ref={glareRef}
                    className="pointer-events-none absolute inset-0 z-30 opacity-0 -translate-x-full"
                    style={{
                      background:
                        "linear-gradient(105deg, transparent 20%, rgba(255, 255, 255, 0.65) 50%, transparent 80%)",
                    }}
                  />

                  {/* Dynamic Folding Crease Shadow */}
                  <div
                    ref={shadowOverlayRef}
                    className="pointer-events-none absolute inset-0 z-20 bg-gradient-to-r from-black/0 via-black/10 to-black/30 opacity-0 transition-opacity"
                  />

                  {/* Large Quote Content */}
                  <div className="relative z-10 mb-8 pl-1 pt-2">
                    <p className="text-[17px] sm:text-[19px] font-medium leading-[1.58] text-zinc-900 tracking-tight italic">
                      &ldquo;{currentReview.quote}&rdquo;
                    </p>
                  </div>

                  {/* Author Profile on Page */}
                  <div className="relative z-10 flex items-center justify-between pt-4 border-t border-zinc-100 pl-1">
                    <div className="flex items-center gap-3.5">
                      <div className="relative h-11 w-11 overflow-hidden rounded-full border border-zinc-200 shadow-sm flex-shrink-0">
                        <Image
                          src={currentReview.avatar}
                          alt={currentReview.author}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="text-[15px] font-bold text-zinc-950 leading-tight">
                          {currentReview.author}
                        </h4>
                        <p className="text-[12.5px] font-normal text-zinc-500 mt-0.5">
                          {currentReview.role}
                        </p>
                      </div>
                    </div>

                    {/* 5 Green Rating Stars */}
                    <div className="flex items-center gap-1 text-emerald-500">
                      {[...Array(currentReview.stars)].map((_, i) => (
                        <Star key={i} className="h-3.5 w-3.5 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>

                {/* 2. Secondary Review Cards Stack on the Right */}
                <div
                  ref={rightCardsRef}
                  className="md:col-span-5 flex flex-col gap-5 justify-between"
                >
                  {/* Secondary Card 1 */}
                  <div
                    onClick={() => {
                      turnPageAdvanced("next", (currentIndex + 1) % reviewsData.length);
                    }}
                    className="flex flex-col justify-between rounded-[22px] border border-zinc-200/80 bg-white p-6 shadow-[0_8px_25px_rgba(0,0,0,0.03)] hover:border-zinc-300 hover:shadow-md transition-all cursor-pointer group"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className="relative h-10 w-10 overflow-hidden rounded-full border border-zinc-200 shadow-sm flex-shrink-0">
                          <Image
                            src={nextReview1.avatar}
                            alt={nextReview1.author}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <h4 className="text-[14px] font-bold text-zinc-950 leading-tight group-hover:text-[#0066FF] transition-colors">
                            {nextReview1.author}
                          </h4>
                          <p className="text-[11.5px] font-normal text-zinc-500">
                            {nextReview1.role}
                          </p>
                        </div>
                      </div>
                    </div>

                    <p className="text-[13px] font-normal leading-relaxed text-zinc-700 line-clamp-3 mb-3">
                      &ldquo;{nextReview1.quote}&rdquo;
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1 text-emerald-500">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-3.5 w-3.5 fill-current" />
                        ))}
                      </div>
                      <span className="text-[11px] font-semibold text-zinc-400 group-hover:text-[#0066FF] transition-colors">
                        Next &rarr;
                      </span>
                    </div>
                  </div>

                  {/* Secondary Card 2 */}
                  <div
                    onClick={() => {
                      turnPageAdvanced("next", (currentIndex + 2) % reviewsData.length);
                    }}
                    className="flex flex-col justify-between rounded-[22px] border border-zinc-200/80 bg-white p-6 shadow-[0_8px_25px_rgba(0,0,0,0.03)] hover:border-zinc-300 hover:shadow-md transition-all cursor-pointer group"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className="relative h-10 w-10 overflow-hidden rounded-full border border-zinc-200 shadow-sm flex-shrink-0">
                          <Image
                            src={nextReview2.avatar}
                            alt={nextReview2.author}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <h4 className="text-[14px] font-bold text-zinc-950 leading-tight group-hover:text-[#0066FF] transition-colors">
                            {nextReview2.author}
                          </h4>
                          <p className="text-[11.5px] font-normal text-zinc-500">
                            {nextReview2.role}
                          </p>
                        </div>
                      </div>
                    </div>

                    <p className="text-[13px] font-normal leading-relaxed text-zinc-700 line-clamp-3 mb-3">
                      &ldquo;{nextReview2.quote}&rdquo;
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1 text-emerald-500">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-3.5 w-3.5 fill-current" />
                        ))}
                      </div>
                      <span className="text-[11px] font-semibold text-zinc-400 group-hover:text-[#0066FF] transition-colors">
                        Next &rarr;
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Pagination Dots Indicator */}
              <div className="flex items-center justify-center gap-1.5 mt-7">
                {reviewsData.map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => {
                      if (idx !== currentIndex && !isAnimating) {
                        turnPageAdvanced(idx > currentIndex ? "next" : "prev", idx);
                      }
                    }}
                    className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                      currentIndex === idx
                        ? "w-7 bg-[#0066FF]"
                        : "w-1.5 bg-zinc-200 hover:bg-zinc-400"
                    }`}
                    aria-label={`Turn to page ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
