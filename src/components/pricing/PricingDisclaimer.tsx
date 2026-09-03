"use client";

import React from "react";
import { FileText } from "lucide-react";

export default function PricingDisclaimer() {
  return (
    <section className="relative w-full bg-white pb-14 pt-6">
      <div className="max-w-[1480px] mx-auto px-5 sm:px-8 lg:px-12">
        <div className="flex flex-col sm:flex-row sm:items-center gap-5 rounded-2xl bg-[#F4F7FC] border border-blue-100/70 p-6 sm:p-7 shadow-xs">
          {/* Icon */}
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#E6F0FD] text-[#0066FF]">
            <FileText className="w-7 h-7 stroke-[1.8]" />
          </div>

          {/* Text */}
          <div className="flex flex-col">
            <h3 className="text-[17px] sm:text-[18px] font-bold text-gray-900 mb-1.5 tracking-tight">
              What is charged separately?
            </h3>
            <p className="text-[13.5px] sm:text-[14px] text-gray-600 leading-relaxed max-w-[1100px]">
              Domain, hosting, premium plugins, paid fonts, licensed stock images, premium integrations and third-party services are charged separately.{" "}
              <strong className="font-semibold text-gray-900">
                E-commerce stores, custom dashboards, portals, user accounts and database systems are not offered in these packages.
              </strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
