"use client";

import React, { useState } from "react";
import { Check, Minus, Table2, Layers, ChevronRight } from "lucide-react";

interface RowData {
  feature: string;
  starter: string | boolean;
  business: string | boolean;
  premium: string | boolean;
  corporate: string | boolean;
}

type PackageKey = "starter" | "business" | "premium" | "corporate";

const packageMeta: Record<
  PackageKey,
  {
    id: string;
    name: string;
    price: string;
    subtitle: string;
    turnaround: string;
    isPopular?: boolean;
  }
> = {
  starter: {
    id: "starter",
    name: "Starter",
    price: "PKR 15,000",
    subtitle: "Ideal for a new, small or local business",
    turnaround: "5–7 working days",
  },
  business: {
    id: "business",
    name: "Business",
    price: "PKR 25,000",
    subtitle: "Ideal for growing service businesses",
    turnaround: "8–12 working days",
    isPopular: true,
  },
  premium: {
    id: "premium",
    name: "Premium",
    price: "PKR 50,000",
    subtitle: "For brands needing a stronger premium presence",
    turnaround: "12–18 working days",
  },
  corporate: {
    id: "corporate",
    name: "Corporate",
    price: "PKR 75,000+",
    subtitle: "For larger businesses and multi-service companies",
    turnaround: "18–25 working days",
  },
};

const tableRows: RowData[] = [
  {
    feature: "Pages",
    starter: "1–3",
    business: "Up to 6",
    premium: "Up to 10",
    corporate: "10–15+",
  },
  {
    feature: "Website responsive",
    starter: true,
    business: true,
    premium: true,
    corporate: true,
  },
  {
    feature: "WhatsApp integration",
    starter: true,
    business: true,
    premium: true,
    corporate: true,
  },
  {
    feature: "Professional animations",
    starter: false,
    business: true,
    premium: "Advanced",
    corporate: "Advanced",
  },
  {
    feature: "Gallery / portfolio",
    starter: false,
    business: true,
    premium: true,
    corporate: true,
  },
  {
    feature: "Appointment / quotation form",
    starter: "Contact form",
    business: true,
    premium: true,
    corporate: "Advanced",
  },
  {
    feature: "Analytics setup",
    starter: false,
    business: false,
    premium: true,
    corporate: true,
  },
  {
    feature: "SEO",
    starter: "Basic",
    business: "Basic",
    premium: "On-page",
    corporate: "SEO setup",
  },
  {
    feature: "Post-launch support",
    starter: "Basic",
    business: "Basic",
    premium: "Included",
    corporate: "30 days",
  },
];

export default function PricingComparison() {
  const [activeTab, setActiveTab] = useState<PackageKey>("business");
  const [mobileView, setMobileView] = useState<"cards" | "table">("cards");

  const renderCell = (value: string | boolean, isBusiness = false) => {
    if (value === true) {
      return (
        <div className="flex items-center justify-center">
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-50 text-[#0066FF]">
            <Check className="w-3.5 h-3.5 stroke-[2.5]" />
          </span>
        </div>
      );
    }
    if (value === false) {
      return (
        <div className="flex items-center justify-center text-slate-300">
          <Minus className="w-4 h-4 stroke-[2]" />
        </div>
      );
    }
    return (
      <span
        className={`inline-block px-2.5 py-1 rounded-md text-[12.5px] ${
          isBusiness
            ? "font-bold text-[#0066FF] bg-blue-50/80 border border-blue-100"
            : "font-semibold text-slate-700 bg-slate-100/70"
        }`}
      >
        {value}
      </span>
    );
  };

  const renderMobileBadge = (val: string | boolean) => {
    if (val === true) {
      return (
        <span className="inline-flex items-center gap-1 text-[12px] font-semibold text-[#0066FF] bg-blue-50 px-2.5 py-1 rounded-full border border-blue-100">
          <Check className="w-3 h-3 stroke-[2.5]" />
          <span>Included</span>
        </span>
      );
    }
    if (val === false) {
      return (
        <span className="inline-flex items-center gap-1 text-[12px] font-medium text-slate-400 bg-slate-100 px-2.5 py-1 rounded-full">
          <Minus className="w-3 h-3 stroke-[2]" />
          <span>Not included</span>
        </span>
      );
    }
    return (
      <span className="inline-flex items-center text-[12px] font-bold text-slate-900 bg-blue-50/60 text-[#0066FF] px-2.5 py-1 rounded-full border border-blue-100">
        {val}
      </span>
    );
  };

  const selectedPkg = packageMeta[activeTab];

  return (
    <section className="relative w-full bg-white pb-24">
      <div className="max-w-[1480px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* Section Header with Responsive Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <h3 className="text-[22px] sm:text-[26px] font-extrabold text-gray-900 tracking-tight mb-1.5">
              Compare Every Website Package
            </h3>
            <p className="text-[13.5px] sm:text-[14px] text-gray-500">
              A side-by-side view of the original Starter, Business, Premium and Corporate package features.
            </p>
          </div>

          {/* Mobile View Toggle Switch (Visible on Mobile/Tablet < lg) */}
          <div className="flex lg:hidden items-center bg-slate-100 p-1 rounded-xl self-start border border-slate-200/60">
            <button
              onClick={() => setMobileView("cards")}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[12px] font-semibold transition-all cursor-pointer ${
                mobileView === "cards"
                  ? "bg-white text-[#0066FF] shadow-xs"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>Cards</span>
            </button>
            <button
              onClick={() => setMobileView("table")}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[12px] font-semibold transition-all cursor-pointer ${
                mobileView === "table"
                  ? "bg-white text-[#0066FF] shadow-xs"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <Table2 className="w-3.5 h-3.5" />
              <span>Table</span>
            </button>
          </div>
        </div>

        {/* ── MOBILE VIEW 1: INTERACTIVE TAB SWITCHER (DEFAULT ON MOBILE) ────── */}
        <div className={`block lg:hidden ${mobileView === "cards" ? "block" : "hidden"}`}>
          {/* Segmented Package Selector Tabs */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-6">
            {(Object.keys(packageMeta) as PackageKey[]).map((key) => {
              const pkg = packageMeta[key];
              const isActive = activeTab === key;
              return (
                <button
                  key={key}
                  onClick={() => setActiveTab(key)}
                  className={`relative flex flex-col items-center text-center p-3 rounded-xl border transition-all duration-200 cursor-pointer ${
                    isActive
                      ? "bg-[#0066FF] text-white border-[#0066FF] shadow-md shadow-blue-500/25 ring-2 ring-blue-500/30"
                      : "bg-white text-slate-700 border-slate-200 hover:border-blue-200 hover:bg-slate-50/80"
                  }`}
                >
                  {pkg.isPopular && (
                    <span
                      className={`text-[9px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-full mb-1 ${
                        isActive
                          ? "bg-white text-[#0066FF]"
                          : "bg-blue-100 text-[#0066FF]"
                      }`}
                    >
                      Most Popular
                    </span>
                  )}
                  <span className="text-[13.5px] font-bold tracking-tight">
                    {pkg.name}
                  </span>
                  <span
                    className={`text-[12px] font-semibold mt-0.5 ${
                      isActive ? "text-blue-100" : "text-[#0066FF]"
                    }`}
                  >
                    {pkg.price}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Active Package Detailed Feature Card */}
          <div className="rounded-2xl border-2 border-blue-100 bg-white shadow-[0_8px_30px_rgba(0,102,255,0.08)] overflow-hidden">
            {/* Header info */}
            <div className="bg-gradient-to-r from-[#0D1527] to-[#1E293B] p-5 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <h4 className="text-[20px] font-black text-white">
                    {selectedPkg.name} Package
                  </h4>
                  {selectedPkg.isPopular && (
                    <span className="bg-[#0066FF] text-white text-[10px] font-extrabold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                      Most Popular
                    </span>
                  )}
                </div>
                <p className="text-[12.5px] text-slate-300">
                  {selectedPkg.subtitle}
                </p>
              </div>

              <div className="text-left sm:text-right">
                <span className="text-[24px] font-black text-white block">
                  {selectedPkg.price}
                </span>
                <span className="text-[11.5px] text-blue-300">
                  Turnaround: {selectedPkg.turnaround}
                </span>
              </div>
            </div>

            {/* Checklist of Features */}
            <div className="p-4 sm:p-6 divide-y divide-slate-100">
              {tableRows.map((row, idx) => (
                <div
                  key={idx}
                  className="py-3 flex items-center justify-between gap-3 text-left"
                >
                  <span className="text-[13.5px] font-medium text-slate-800">
                    {row.feature}
                  </span>
                  <div>{renderMobileBadge(row[activeTab])}</div>
                </div>
              ))}
            </div>

            {/* Bottom CTA for Active Package */}
            <div className="p-4 sm:p-5 bg-slate-50 border-t border-slate-100 flex items-center justify-between gap-4">
              <span className="text-[12.5px] text-slate-500 font-medium">
                Ready to begin with {selectedPkg.name}?
              </span>
              <a
                href={`#contact?package=${selectedPkg.id}`}
                className="inline-flex items-center justify-center gap-1.5 rounded-xl bg-[#0066FF] text-white px-5 py-2.5 text-[13px] font-bold shadow-md shadow-blue-500/25 hover:bg-[#0052cc] transition-all shrink-0 cursor-pointer"
              >
                <span>Select Package</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* ── TABLE VIEW (DEFAULT ON DESKTOP, OPTIONAL ON MOBILE) ─────────── */}
        <div
          className={`${
            mobileView === "table" ? "block" : "hidden"
          } lg:block rounded-2xl border border-gray-200 overflow-hidden shadow-xs bg-white`}
        >
          <div className="overflow-x-auto">
            <table className="w-full min-w-[640px] border-collapse text-left">
              <thead>
                <tr>
                  {/* Sticky First Column for Mobile! */}
                  <th className="sticky left-0 z-20 bg-[#0D1527] py-4 px-5 text-[13.5px] sm:text-[14px] font-bold text-white tracking-wide w-[28%] min-w-[170px] shadow-[4px_0_12px_rgba(0,0,0,0.15)]">
                    Feature
                  </th>

                  {/* Starter */}
                  <th className="bg-[#0D1527] py-4 px-4 text-center w-[18%] min-w-[120px]">
                    <span className="text-[14px] font-bold text-white block">
                      Starter
                    </span>
                    <span className="text-[12px] text-gray-300 block font-normal mt-0.5">
                      PKR 15,000
                    </span>
                  </th>

                  {/* Business (Solid Blue Header) */}
                  <th className="bg-[#1D4ED8] sm:bg-[#2563EB] py-4 px-4 text-center w-[18%] min-w-[130px] border-x border-blue-400/30">
                    <span className="text-[14px] font-bold text-white block">
                      Business
                    </span>
                    <span className="text-[12px] text-blue-100 block font-normal mt-0.5">
                      PKR 25,000
                    </span>
                  </th>

                  {/* Premium */}
                  <th className="bg-[#0D1527] py-4 px-4 text-center w-[18%] min-w-[120px]">
                    <span className="text-[14px] font-bold text-white block">
                      Premium
                    </span>
                    <span className="text-[12px] text-gray-300 block font-normal mt-0.5">
                      PKR 50,000
                    </span>
                  </th>

                  {/* Corporate */}
                  <th className="bg-[#0D1527] py-4 px-4 text-center w-[18%] min-w-[120px]">
                    <span className="text-[14px] font-bold text-white block">
                      Corporate
                    </span>
                    <span className="text-[12px] text-gray-300 block font-normal mt-0.5">
                      PKR 75,000+
                    </span>
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-100 bg-white">
                {tableRows.map((row, idx) => (
                  <tr
                    key={idx}
                    className="hover:bg-slate-50/70 transition-colors group"
                  >
                    {/* Sticky Feature Name Cell */}
                    <td className="sticky left-0 z-10 bg-white group-hover:bg-slate-50 py-3.5 px-5 text-[13px] sm:text-[13.5px] font-medium text-gray-900 shadow-[4px_0_12px_rgba(0,0,0,0.04)] border-r border-slate-100">
                      {row.feature}
                    </td>
                    <td className="py-3.5 px-4 text-center">
                      {renderCell(row.starter)}
                    </td>
                    <td className="py-3.5 px-4 text-center bg-blue-50/30 border-x border-blue-100/50">
                      {renderCell(row.business, true)}
                    </td>
                    <td className="py-3.5 px-4 text-center">
                      {renderCell(row.premium)}
                    </td>
                    <td className="py-3.5 px-4 text-center">
                      {renderCell(row.corporate)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}

