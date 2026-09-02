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
  const autoPlayTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Auto-play book page fold every 5.5 seconds
  const startAutoPlay = () => {
    if (autoPlayTimerRef.current) clearInterval(autoPlayTimerRef.current);
    autoPlayTimerRef.current = setInterval(() => {
      turnPage("next", (currentIndex + 1) % reviewsData.length);
    }, 5500);
  };

  useEffect(() => {
    startAutoPlay();
    return () => {
      if (autoPlayTimerRef.current) clearInterval(autoPlayTimerRef.current);
    };
  }, [currentIndex]);

  // Physical 3D Book Page Fold and Unfold Sequence
  const turnPage = (direction: "next" | "prev", nextIdx: number) => {
    if (isAnimating || !mainCardRef.current) return;
    setIsAnimating(true);

    const card = mainCardRef.current;
    const shadow = shadowOverlayRef.current;
    const foldAngle = direction === "next" ? -84 : 84;
    const unfoldAngle = direction === "next" ? 84 : -84;
    const origin = direction === "next" ? "left center" : "right center";

    gsap.set(card, { transformOrigin: origin });

    const tl = gsap.timeline({
      onComplete: () => {
        setIsAnimating(false);
        gsap.set(card, { clearProps: "transform,boxShadow" });
        if (shadow) gsap.set(shadow, { opacity: 0 });
      },
    });

    // ── Phase 1: Physical Book Page Folds Closed (0.33s) ──────
    tl.to(
      card,
      {
        rotationY: foldAngle,
        scale: 0.94,
        boxShadow:
          direction === "next"
            ? "-28px 8px 45px rgba(0,0,0,0.22)"
            : "28px 8px 45px rgba(0,0,0,0.22)",
        duration: 0.33,
        ease: "power2.in",
      },
      0
    );

    if (shadow) {
      tl.to(
        shadow,
        {
          opacity: 0.32,
          duration: 0.33,
          ease: "power2.in",
        },
        0
      );
    }

    // ── Halfway Point: Switch content at the spine ────────────
    tl.call(() => {
      setCurrentIndex(nextIdx);
      gsap.set(card, {
        rotationY: unfoldAngle,
        transformOrigin: origin,
      });
    });

    // ── Phase 2: Physical Book Page Unfolds Flat (0.38s) ──────
    tl.to(card, {
      rotationY: 0,
      scale: 1,
      boxShadow: "0px 10px 35px rgba(0,0,0,0.04)",
      duration: 0.38,
      ease: "power2.out",
    });

    if (shadow) {
      tl.to(
        shadow,
        {
          opacity: 0,
          duration: 0.38,
          ease: "power2.out",
        },
        "-=0.38"
      );
    }

    // Secondary cards gentle page reveal
    if (rightCardsRef.current) {
      tl.fromTo(
        rightCardsRef.current,
        {
          x: direction === "next" ? 18 : -18,
          opacity: 0.6,
        },
        {
          x: 0,
          opacity: 1,
          duration: 0.42,
          ease: "power2.out",
        },
        0.33
      );
    }
  };

  const handleNext = () => {
    if (isAnimating) return;
    const nextIdx = (currentIndex + 1) % reviewsData.length;
    turnPage("next", nextIdx);
    startAutoPlay();
  };

  const handlePrev = () => {
    if (isAnimating) return;
    const prevIdx = (currentIndex - 1 + reviewsData.length) % reviewsData.length;
    turnPage("prev", prevIdx);
    startAutoPlay();
  };

  // Preview reviews for the secondary cards
  const currentReview = reviewsData[currentIndex];
  const nextReview1 = reviewsData[(currentIndex + 1) % reviewsData.length];
  const nextReview2 = reviewsData[(currentIndex + 2) % reviewsData.length];

  return (
    <section
      id="about"
      className="relative w-full bg-white text-zinc-900 py-20 lg:py-28 px-5 sm:px-10 lg:px-16 overflow-hidden border-t border-zinc-100"
    >
      <div className="max-w-[1520px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          {/* ── LEFT COLUMN: WHY CHOOSE US ─────────────────────────── */}
          <div className="lg:col-span-5 flex flex-col justify-start">
            {/* Category badge */}
            <span className="inline-block text-[#0066FF] text-[12px] font-bold tracking-[0.22em] uppercase mb-3">
              WHY CHOOSE US
            </span>

            {/* Main Headline */}
            <h2 className="text-[34px] sm:text-[42px] lg:text-[48px] font-extrabold tracking-tight text-zinc-950 leading-[1.12] mb-8 sm:mb-10">
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

          {/* ── RIGHT COLUMN: WHAT OUR CLIENTS SAY (BOOK PAGE FOLD/UNFOLD) ── */}
          <div className="lg:col-span-7 flex flex-col justify-start w-full">
            {/* Header row with arrows & page indicator */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <span className="inline-block text-[#0066FF] text-[12px] font-bold tracking-[0.22em] uppercase">
                  WHAT OUR CLIENTS SAY
                </span>
                <span className="hidden sm:inline-flex items-center gap-1.5 text-[11px] font-semibold text-zinc-400 bg-zinc-100/80 px-2.5 py-0.5 rounded-full">
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

            {/* 3D Book Stage Container */}
            <div
              className="relative w-full"
              style={{ perspective: "1500px" }}
              onMouseEnter={() => autoPlayTimerRef.current && clearInterval(autoPlayTimerRef.current)}
              onMouseLeave={startAutoPlay}
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-stretch">
                
                {/* 1. Main Book Page Review Card (Folds and Unfolds in 3D) */}
                <div
                  ref={mainCardRef}
                  className="md:col-span-7 relative flex flex-col justify-between rounded-[24px] border border-zinc-200/80 bg-white p-7 sm:p-8 shadow-[0_10px_35px_rgba(0,0,0,0.04)] overflow-hidden min-h-[320px] select-none"
                  style={{
                    transformStyle: "preserve-3d",
                    willChange: "transform, box-shadow",
                  }}
                >
                  {/* Spine Crease on Left Edge */}
                  <div className="absolute left-0 top-0 bottom-0 w-[6px] bg-gradient-to-r from-zinc-200/60 via-zinc-100/30 to-transparent pointer-events-none" />

                  {/* Top electric blue bookmark line */}
                  <div className="absolute top-0 left-0 right-0 h-[2.5px] bg-[#0066FF]" />

                  {/* Dynamic folding shadow overlay that sweeps during turn */}
                  <div
                    ref={shadowOverlayRef}
                    className="pointer-events-none absolute inset-0 z-20 bg-gradient-to-r from-black/0 via-black/10 to-black/25 opacity-0 transition-opacity"
                  />

                  {/* Large Quote Content */}
                  <div className="relative z-10 mb-8 pl-1">
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
                      turnPage("next", (currentIndex + 1) % reviewsData.length);
                      startAutoPlay();
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
                      turnPage("next", (currentIndex + 2) % reviewsData.length);
                      startAutoPlay();
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
                        turnPage(idx > currentIndex ? "next" : "prev", idx);
                        startAutoPlay();
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
