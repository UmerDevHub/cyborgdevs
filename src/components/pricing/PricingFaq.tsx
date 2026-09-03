"use client";

import React, { useState } from "react";
import { Plus } from "lucide-react";

interface FaqItem {
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    question: "Are these fixed prices?",
    answer:
      "Yes. The package prices listed (PKR 15K, 25K, 50K, 75K+) are 100% fixed for the exact deliverables detailed in each package. If your project fits within the specified page counts and feature sets, you will never pay more. Any custom features outside the scope can be transparently added via our itemized add-ons menu.",
  },
  {
    question: "Do you provide domain and hosting?",
    answer:
      "We help you configure, secure, and deploy to your preferred hosting provider (such as Vercel, AWS, Cloudflare, or Hostinger). To ensure you maintain 100% ownership and control over your digital assets, domain registration and cloud hosting subscriptions are registered under your name and billed directly by the provider.",
  },
  {
    question: "Can I request a custom package?",
    answer:
      "Absolutely. We frequently work with startups and businesses that need specialized architectures, bespoke workflows, or tailored feature combinations. Simply reach out via our Custom Quote form or book an engineering consultation, and we will prepare a milestone-based proposal.",
  },
  {
    question: "Do you build e-commerce websites?",
    answer:
      "Yes. We engineer high-conversion e-commerce stores, custom checkout flows, inventory systems, and payment gateway integrations (including local Pakistani gateways like JazzCash, Easypaisa, PayFast, Safepay, as well as Stripe and PayPal for international stores). E-commerce solutions are scoped and priced tailored to catalogue size and architecture.",
  },
  {
    question: "Do you build custom software?",
    answer:
      "Yes. Beyond marketing websites, our core engineering studio specializes in bespoke SaaS platforms, internal management portals, AI-powered workflow automation, mobile apps (React Native / Flutter), and complex cloud backends.",
  },
  {
    question: "Can I request urgent delivery?",
    answer:
      "Yes. For time-sensitive business launches, we offer an expedited sprint option (+25% project price). When selected, our dedicated senior engineers prioritize your project full-time to reduce turnaround time by up to 50% without compromising QA or code quality.",
  },
  {
    question: "How do revisions work?",
    answer:
      "Every package includes designated revision rounds (3 rounds for Starter, 5 for Business, 7 for Premium, and 10 for Corporate). During each round, you review the live staging build and compile feedback. Revisions are completed quickly before progressing to the subsequent milestone.",
  },
  {
    question: "Do you provide post-launch support?",
    answer:
      "Yes. All packages include post-launch support to guarantee everything operates smoothly in production. Premium includes dedicated post-launch support, and Corporate includes 30 days of comprehensive priority engineering support. We also provide ongoing monthly maintenance add-ons.",
  },
];

export default function PricingFaq() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenIdx((current) => (current === idx ? null : idx));
  };

  return (
    <section id="faq" className="relative w-full bg-[#050912] py-24 sm:py-28 overflow-hidden">
      <div className="max-w-[1520px] mx-auto px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column */}
          <div className="lg:col-span-4 flex flex-col justify-start lg:sticky lg:top-32">
            <div className="flex items-center gap-2 mb-3">
              <span className="h-1.5 w-1.5 rounded-full bg-[#0066FF] shadow-[0_0_8px_#0066FF]" />
              <span className="text-[11.5px] font-bold tracking-[0.24em] text-[#0066FF] uppercase">
                QUESTIONS?
              </span>
            </div>

            <h2 className="text-[36px] sm:text-[46px] font-black tracking-tight text-white leading-[1.08] mb-4">
              Before you start.
            </h2>

            <p className="text-[15px] sm:text-[16px] text-[#8B95A5] leading-relaxed">
              Everything you need to know about our packages, billing, timelines, and engineering standards.
            </p>
          </div>

          {/* Right Column: Accordion */}
          <div className="lg:col-span-8 flex flex-col divide-y divide-white/10 border-t border-b border-white/10">
            {faqs.map((faq, idx) => {
              const isOpen = openIdx === idx;

              return (
                <div key={idx} className="transition-colors">
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full py-6 flex items-center justify-between gap-4 text-left transition-colors group cursor-pointer focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <span
                      className={`text-[17px] sm:text-[18px] font-bold tracking-tight transition-colors ${
                        isOpen ? "text-[#0066FF]" : "text-white group-hover:text-white/90"
                      }`}
                    >
                      {faq.question}
                    </span>

                    <div
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                        isOpen
                          ? "rotate-45 border-[#0066FF] bg-[#0066FF]/15 text-[#0066FF]"
                          : "border-white/15 bg-white/5 text-white/70 group-hover:border-white/40 group-hover:text-white"
                      }`}
                    >
                      <Plus className="w-4 h-4 stroke-[2.5]" />
                    </div>
                  </button>

                  <div
                    className={`grid transition-all duration-300 ease-in-out ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100 pb-6"
                        : "grid-rows-[0fr] opacity-0 pb-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="text-[14px] sm:text-[15px] text-[#8B95A5] leading-relaxed pr-4 sm:pr-8">
                        {faq.answer}
                      </p>
                    </div>
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
