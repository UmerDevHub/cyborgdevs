"use client";

import React from "react";
import { ArrowRight, MessageCircle } from "lucide-react";

export default function PricingCta() {
  return (
    <section id="contact" className="relative w-full bg-white pb-24">
      <div className="max-w-[1480px] mx-auto px-5 sm:px-8 lg:px-12">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 rounded-[22px] bg-[#0A1128] border border-white/10 p-8 sm:p-10 shadow-xl">
          {/* Left Text */}
          <div className="flex flex-col">
            <h3 className="text-[22px] sm:text-[26px] md:text-[28px] font-extrabold text-white tracking-tight mb-2">
              Still unsure which package is right for you?
            </h3>
            <p className="text-[13.5px] sm:text-[14.5px] text-gray-400 leading-relaxed max-w-[500px]">
              Let&apos;s discuss your goals and build the perfect solution.
            </p>
          </div>

          {/* Right 2 Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 shrink-0">
            {/* Primary Blue Button */}
            <a
              href="https://wa.me/?text=Hello%20Cyborg%20Developers,%20I%20would%20like%20to%20book%20a%20free%20consultation"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#0066FF] px-6 py-3.5 text-[14px] font-semibold text-white shadow-md shadow-blue-500/25 hover:bg-[#0052cc] transition-all duration-200 cursor-pointer text-center"
            >
              <span>Book a Free Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            {/* WhatsApp Outline Button */}
            <a
              href="https://wa.me/?text=Hello%20Cyborg%20Developers"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/5 hover:bg-white/10 px-6 py-3.5 text-[14px] font-semibold text-white transition-all duration-200 cursor-pointer text-center"
            >
              <span>Chat on WhatsApp</span>
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#25D366] text-white">
                <MessageCircle className="w-3.5 h-3.5 fill-white" />
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
