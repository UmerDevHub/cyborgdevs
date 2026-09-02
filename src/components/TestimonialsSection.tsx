"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Check, ChevronLeft, ChevronRight, Star } from "lucide-react";

interface Review {
  id: number;
  quote: string;
  author: string;
  role: string;
  avatar: string;
  stars: number;
  highlight?: boolean;
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
    highlight: true,
  },
  {
    id: 2,
    quote:
      "Excellent communication, amazing quality, and delivered on time. Highly recommended!",
    author: "Michael Chen",
    role: "Founder, Kanbaan",
    avatar: "/images/avatar-2.jpg",
    stars: 5,
  },
  {
    id: 3,
    quote:
      "Their AI solution transformed our business operations. Outstanding work!",
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
      "From UI/UX design to production deployment, their engineering execution was flawless and ahead of schedule.",
    author: "Sophia Patel",
    role: "Head of Product, Vertuo",
    avatar: "/images/avatar-2.jpg",
    stars: 5,
  },
];

const checkFeatures = [
  ["Business-first approach", "Modern engineering", "Scalable architecture", "Transparent communication"],
  ["Long-term partnership", "Fast & reliable delivery", "AI-first mindset"],
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [slideDirection, setSlideDirection] = useState<"next" | "prev">("next");
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

  // Auto-slide every 5.5 seconds like turning a book page
  const resetTimer = () => {
    if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    autoPlayRef.current = setInterval(() => {
      handleNext();
    }, 5500);
  };

  useEffect(() => {
    resetTimer();
    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, [currentIndex]);

  const handleNext = () => {
    if (isAnimating) return;
    setSlideDirection("next");
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % reviewsData.length);
      setIsAnimating(false);
    }, 380);
  };

  const handlePrev = () => {
    if (isAnimating) return;
    setSlideDirection("prev");
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + reviewsData.length) % reviewsData.length);
      setIsAnimating(false);
    }, 380);
  };

  // Get active review and adjacent preview reviews
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

          {/* ── RIGHT COLUMN: WHAT OUR CLIENTS SAY (BOOK PAGE SLIDE) ── */}
          <div className="lg:col-span-7 flex flex-col justify-start w-full">
            {/* Header row with arrows */}
            <div className="flex items-center justify-between mb-6">
              <span className="inline-block text-[#0066FF] text-[12px] font-bold tracking-[0.22em] uppercase">
                WHAT OUR CLIENTS SAY
              </span>

              {/* Carousel Next/Prev Navigation Buttons */}
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => {
                    handlePrev();
                    resetTimer();
                  }}
                  aria-label="Previous review"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-700 shadow-sm transition-all hover:border-[#0066FF] hover:text-[#0066FF] active:scale-90 cursor-pointer"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  onClick={() => {
                    handleNext();
                    resetTimer();
                  }}
                  aria-label="Next review"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-700 shadow-sm transition-all hover:border-[#0066FF] hover:text-[#0066FF] active:scale-90 cursor-pointer"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Reviews Cards Container with Book Page Turn Animation */}
            <div
              className="relative w-full"
              style={{ perspective: "1200px" }}
              onMouseEnter={() => autoPlayRef.current && clearInterval(autoPlayRef.current)}
              onMouseLeave={resetTimer}
            >
              <div
                className={`grid grid-cols-1 md:grid-cols-12 gap-5 transition-all duration-500 ease-out ${
                  isAnimating
                    ? slideDirection === "next"
                      ? "opacity-60 -translate-x-4 rotate-y-3 scale-[0.98]"
                      : "opacity-60 translate-x-4 -rotate-y-3 scale-[0.98]"
                    : "opacity-100 translate-x-0 rotate-y-0 scale-100"
                }`}
                style={{
                  transformStyle: "preserve-3d",
                  transition: "transform 0.42s cubic-bezier(0.25, 1, 0.5, 1), opacity 0.42s ease",
                }}
              >
                {/* 1. Main Featured Review Card (takes left 7 cols on desktop) */}
                <div className="md:col-span-7 flex flex-col justify-between rounded-[24px] border border-zinc-200/80 bg-white p-7 sm:p-8 shadow-[0_10px_35px_rgba(0,0,0,0.04)] relative overflow-hidden group hover:shadow-[0_16px_45px_rgba(0,0,0,0.07)] transition-shadow">
                  {/* Subtle top indicator */}
                  <div className="absolute top-0 left-0 right-0 h-[2.5px] bg-[#0066FF]" />

                  {/* Large Quote */}
                  <div className="mb-8">
                    <p className="text-[17px] sm:text-[19px] font-medium leading-[1.55] text-zinc-900 tracking-tight italic">
                      &ldquo;{currentReview.quote}&rdquo;
                    </p>
                  </div>

                  {/* Author Profile */}
                  <div className="flex items-center gap-3.5 pt-4 border-t border-zinc-100">
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
                </div>

                {/* 2. Secondary Review Cards Stack (takes right 5 cols on desktop) */}
                <div className="md:col-span-5 flex flex-col gap-5">
                  {/* Review Card 2 */}
                  <div className="flex flex-col justify-between rounded-[22px] border border-zinc-200/80 bg-white p-6 shadow-[0_8px_25px_rgba(0,0,0,0.03)] hover:border-zinc-300 transition-all">
                    {/* Author & Stars */}
                    <div className="flex items-center justify-between mb-3.5">
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
                          <h4 className="text-[14px] font-bold text-zinc-950 leading-tight">
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

                    {/* 5 Green Rating Stars matching reference */}
                    <div className="flex items-center gap-1 text-emerald-500">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-3.5 w-3.5 fill-current" />
                      ))}
                    </div>
                  </div>

                  {/* Review Card 3 */}
                  <div className="flex flex-col justify-between rounded-[22px] border border-zinc-200/80 bg-white p-6 shadow-[0_8px_25px_rgba(0,0,0,0.03)] hover:border-zinc-300 transition-all">
                    {/* Author & Stars */}
                    <div className="flex items-center justify-between mb-3.5">
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
                          <h4 className="text-[14px] font-bold text-zinc-950 leading-tight">
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

                    {/* 5 Green Rating Stars */}
                    <div className="flex items-center gap-1 text-emerald-500">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-3.5 w-3.5 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>

              </div>

              {/* Progress Dots Indicator */}
              <div className="flex items-center justify-center gap-1.5 mt-6">
                {reviewsData.map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => {
                      setCurrentIndex(idx);
                      resetTimer();
                    }}
                    className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                      currentIndex === idx ? "w-6 bg-[#0066FF]" : "w-1.5 bg-zinc-200 hover:bg-zinc-400"
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
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
