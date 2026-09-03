"use client";

import React, { useState } from "react";
import {
  FileText,
  PenLine,
  Palette,
  Megaphone,
  Camera,
  Image as ImageIcon,
  Images,
  UtensilsCrossed,
  Sparkles,
  LayoutGrid,
  MapPin,
  MessageCircle,
  Mail,
  Calendar,
  Search,
  SearchCheck,
  Gauge,
  BarChart3,
  Share2,
  RefreshCw,
  Bug,
  Wrench,
  Clock,
  ArrowRight,
  Check,
  Zap,
} from "lucide-react";

type CategoryType = "design" | "features" | "seo" | "maintenance";

interface AddonItem {
  id: string;
  title: string;
  subtitle: string;
  price: string;
  numericPrice: number;
  icon: React.ReactNode;
  highlight?: string;
}

const categoriesData: Record<
  CategoryType,
  {
    title: string;
    subtitle: string;
    items: AddonItem[];
  }
> = {
  design: {
    title: "Design & Content Creation",
    subtitle: "Professional graphics, copywriting, menu designs and photography assets to elevate your brand identity.",
    items: [
      {
        id: "logo-design",
        title: "Logo design",
        subtitle: "Custom vector logo, favicon & brand color palette",
        price: "PKR 6,000",
        numericPrice: 6000,
        highlight: "Popular",
        icon: <Palette className="w-5 h-5" />,
      },
      {
        id: "hero-animation",
        title: "Advanced hero animation",
        subtitle: "Interactive 3D or custom GSAP animation effects",
        price: "PKR 8,000",
        numericPrice: 8000,
        icon: <Sparkles className="w-5 h-5" />,
      },
      {
        id: "additional-page",
        title: "Additional website page",
        subtitle: "Custom designed responsive page matching your theme",
        price: "PKR 4,000",
        numericPrice: 4000,
        icon: <FileText className="w-5 h-5" />,
      },
      {
        id: "content-writing",
        title: "Website content writing",
        subtitle: "SEO-friendly, professional conversion copywriting",
        price: "PKR 2,000 / page",
        numericPrice: 2000,
        icon: <PenLine className="w-5 h-5" />,
      },
      {
        id: "menu-design",
        title: "Restaurant menu design",
        subtitle: "Clean interactive layout or digital QR menu",
        price: "From PKR 8,000",
        numericPrice: 8000,
        icon: <UtensilsCrossed className="w-5 h-5" />,
      },
      {
        id: "custom-pic",
        title: "Custom product or food picture",
        subtitle: "High-resolution edited photography per image",
        price: "From PKR 1,500 / image",
        numericPrice: 1500,
        icon: <Camera className="w-5 h-5" />,
      },
      {
        id: "5-pics",
        title: "5 custom pictures package",
        subtitle: "5 retouched photos with background enhancement",
        price: "PKR 6,000",
        numericPrice: 6000,
        icon: <ImageIcon className="w-5 h-5" />,
      },
      {
        id: "10-pics",
        title: "10 custom pictures package",
        subtitle: "10 professional studio shots with color grading",
        price: "PKR 10,000",
        numericPrice: 10000,
        icon: <Images className="w-5 h-5" />,
      },
    ],
  },
  features: {
    title: "Interactive Features & Forms",
    subtitle: "High-converting inquiry forms, direct messaging links, maps and interactive visual galleries.",
    items: [
      {
        id: "whatsapp-integration",
        title: "WhatsApp integration",
        subtitle: "Direct floating WhatsApp button & instant chat link",
        price: "PKR 1,500",
        numericPrice: 1500,
        highlight: "Essential",
        icon: <MessageCircle className="w-5 h-5" />,
      },
      {
        id: "contact-form",
        title: "Contact form",
        subtitle: "Automated email notifications & anti-spam security",
        price: "PKR 3,000",
        numericPrice: 3000,
        icon: <Mail className="w-5 h-5" />,
      },
      {
        id: "appointment-form",
        title: "Appointment form",
        subtitle: "Customer booking & date slot quotation intake",
        price: "PKR 6,000",
        numericPrice: 6000,
        highlight: "Recommended",
        icon: <Calendar className="w-5 h-5" />,
      },
      {
        id: "google-maps",
        title: "Google Maps integration",
        subtitle: "Custom interactive map pin with your exact location",
        price: "PKR 2,000",
        numericPrice: 2000,
        icon: <MapPin className="w-5 h-5" />,
      },
      {
        id: "image-gallery",
        title: "Image gallery",
        subtitle: "Responsive lightbox popup & filtered photo grid",
        price: "PKR 4,000",
        numericPrice: 4000,
        icon: <LayoutGrid className="w-5 h-5" />,
      },
      {
        id: "social-media-integration",
        title: "Social-media integration",
        subtitle: "Profile badges, feed embeds & direct share buttons",
        price: "PKR 2,500",
        numericPrice: 2500,
        icon: <Share2 className="w-5 h-5" />,
      },
    ],
  },
  seo: {
    title: "SEO & Digital Marketing",
    subtitle: "Boost search engine rankings, track user engagement and grow your business with monthly marketing.",
    items: [
      {
        id: "basic-seo",
        title: "Basic SEO setup",
        subtitle: "Meta tags, sitemap, robot.txt & Google Search Console",
        price: "PKR 8,000",
        numericPrice: 8000,
        highlight: "Recommended",
        icon: <Search className="w-5 h-5" />,
      },
      {
        id: "advanced-seo",
        title: "Advanced on-page SEO",
        subtitle: "Keyword architecture, rich schema & internal linking",
        price: "PKR 18,000",
        numericPrice: 18000,
        icon: <SearchCheck className="w-5 h-5" />,
      },
      {
        id: "google-analytics",
        title: "Google Analytics setup",
        subtitle: "GA4 analytics property & user conversion tracking",
        price: "PKR 4,000",
        numericPrice: 4000,
        icon: <BarChart3 className="w-5 h-5" />,
      },
      {
        id: "social-media-management",
        title: "Social media marketing & management",
        subtitle: "Monthly custom posts, content calendar & audience growth",
        price: "From PKR 20,000 / month",
        numericPrice: 20000,
        icon: <Megaphone className="w-5 h-5" />,
      },
    ],
  },
  maintenance: {
    title: "Speed, Support & Maintenance",
    subtitle: "Ensure your site runs at lightning speeds, stays bug-free and receives prompt technical assistance.",
    items: [
      {
        id: "speed-optimisation",
        title: "Speed optimisation",
        subtitle: "90+ PageSpeed score, asset minification & caching",
        price: "PKR 8,000",
        numericPrice: 8000,
        highlight: "Essential",
        icon: <Gauge className="w-5 h-5" />,
      },
      {
        id: "bug-fixing",
        title: "Website bug fixing",
        subtitle: "Fast resolution of layout bugs, script errors & issues",
        price: "From PKR 4,000",
        numericPrice: 4000,
        icon: <Bug className="w-5 h-5" />,
      },
      {
        id: "monthly-maintenance",
        title: "Monthly maintenance",
        subtitle: "Weekly backups, core updates & uptime monitoring",
        price: "From PKR 6,000",
        numericPrice: 6000,
        icon: <Wrench className="w-5 h-5" />,
      },
      {
        id: "website-redesign",
        title: "Website redesign",
        subtitle: "Complete UI/UX modernize of your existing website",
        price: "From PKR 15,000",
        numericPrice: 15000,
        icon: <RefreshCw className="w-5 h-5" />,
      },
      {
        id: "urgent-delivery",
        title: "Urgent delivery",
        subtitle: "Priority fast-track turnaround for urgent launches",
        price: "+25% project price",
        numericPrice: 0,
        icon: <Clock className="w-5 h-5" />,
      },
    ],
  },
};

const categoryTabs: { id: CategoryType; label: string; count: number }[] = [
  { id: "design", label: "Design & Content", count: 8 },
  { id: "features", label: "Features & Forms", count: 6 },
  { id: "seo", label: "SEO & Marketing", count: 4 },
  { id: "maintenance", label: "Speed & Support", count: 5 },
];

export default function PricingAddons() {
  const [activeCategory, setActiveCategory] = useState<CategoryType>("design");
  const [selectedIds, setSelectedIds] = useState<string[]>([]);

  const toggleSelect = (id: string) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const currentCategory = categoriesData[activeCategory];

  // Calculate selected total
  const selectedItems = Object.values(categoriesData)
    .flatMap((c) => c.items)
    .filter((item) => selectedIds.includes(item.id));

  const totalEstimate = selectedItems.reduce(
    (sum, item) => sum + item.numericPrice,
    0
  );

  const whatsappInquiryUrl = () => {
    if (selectedItems.length === 0) return "#contact";
    const names = selectedItems.map((i) => `• ${i.title} (${i.price})`).join("%0A");
    const totalText =
      totalEstimate > 0
        ? `%0A%0AEstimated Add-ons Total: PKR ${totalEstimate.toLocaleString()}`
        : "";
    const msg = `Hello Cyborg Developers, I would like to inquire about these website add-ons:%0A%0A${names}${totalText}`;
    return `https://wa.me/?text=${msg}`;
  };

  return (
    <section className="relative w-full bg-white pb-24">
      <div className="max-w-[1480px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* Header with Title and Custom Quote Button */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 pb-2">
          <div className="max-w-[820px]">
            <span className="text-[12px] font-bold tracking-[0.2em] text-[#0066FF] uppercase block mb-2">
              OPTIONAL ADD-ONS
            </span>
            <h2 className="text-[28px] sm:text-[34px] font-extrabold text-gray-900 tracking-tight leading-tight mb-2.5">
              Add Only What Your Business Actually Needs
            </h2>
            <p className="text-[13.5px] sm:text-[14px] text-gray-500 leading-relaxed">
              Every extra is priced separately so your quotation remains transparent. <br className="hidden sm:block" />
              Select a category below to explore specific add-ons or customize your scope.
            </p>
          </div>

          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-1.5 rounded-full border border-[#0066FF]/40 bg-white px-5 py-2.5 text-[13px] font-semibold text-[#0066FF] hover:bg-blue-50/80 transition-colors shadow-2xs self-start md:self-end shrink-0 cursor-pointer"
          >
            <span>Request Custom Quote</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* ── MEDIUM-LEVEL PROPERLY DIVIDED CATEGORY SELECTOR ─────────────── */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          {/* 4 Clean Category Pills */}
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1 sm:pb-0">
            {categoryTabs.map((tab) => {
              const isActive = activeCategory === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveCategory(tab.id)}
                  className={`group relative inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-[13px] font-bold transition-all duration-200 shrink-0 cursor-pointer ${
                    isActive
                      ? "bg-[#0066FF] text-white shadow-md shadow-blue-500/25"
                      : "bg-slate-100/80 text-slate-600 hover:bg-slate-200/70 hover:text-slate-900"
                  }`}
                >
                  <span>{tab.label}</span>
                  <span
                    className={`text-[11px] font-bold px-2 py-0.5 rounded-full ${
                      isActive
                        ? "bg-white/25 text-white"
                        : "bg-white text-slate-500 shadow-2xs"
                    }`}
                  >
                    {tab.count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Interactive Selection Tracker Pill */}
          {selectedIds.length > 0 && (
            <div className="flex items-center gap-2.5 bg-blue-50 border border-blue-200/80 px-3.5 py-1.5 rounded-full text-[12px] self-start sm:self-auto">
              <Zap className="w-3.5 h-3.5 text-[#0066FF] fill-[#0066FF]" />
              <span className="font-semibold text-slate-800">
                {selectedIds.length} selected
                {totalEstimate > 0 && ` • PKR ${totalEstimate.toLocaleString()}`}
              </span>
              <a
                href={whatsappInquiryUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#0066FF] font-bold hover:underline ml-1"
              >
                Inquire ➔
              </a>
              <button
                onClick={() => setSelectedIds([])}
                className="text-slate-400 hover:text-slate-600 ml-1 cursor-pointer"
              >
                Clear
              </button>
            </div>
          )}
        </div>

        {/* Category Description Banner */}
        <div className="mb-6 p-4 rounded-xl bg-gradient-to-r from-slate-50 to-blue-50/30 border border-slate-200/70 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <span className="font-extrabold text-slate-900 text-[14px] mr-2">
              {currentCategory.title}
            </span>
            <span className="text-[13px] text-slate-500">
              — {currentCategory.subtitle}
            </span>
          </div>
        </div>

        {/* ── MEDIUM-LEVEL 4-COLUMN CARDS GRID ─────────────────────────────── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {currentCategory.items.map((item) => {
            const isSelected = selectedIds.includes(item.id);

            return (
              <div
                key={item.id}
                onClick={() => toggleSelect(item.id)}
                className={`group relative flex flex-col justify-between rounded-2xl p-5 border transition-all duration-200 cursor-pointer select-none ${
                  isSelected
                    ? "border-[#0066FF] bg-gradient-to-b from-blue-50/50 to-white shadow-md shadow-blue-500/10 ring-2 ring-blue-500/20 -translate-y-1"
                    : "border-slate-200/90 bg-white shadow-[0_2px_10px_rgba(0,0,0,0.03)] hover:border-blue-300 hover:shadow-[0_12px_28px_-6px_rgba(0,102,255,0.12)] hover:-translate-y-1"
                }`}
              >
                {/* Card Top: Icon & Badge */}
                <div className="flex items-start justify-between gap-2 mb-3.5">
                  <div
                    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border transition-all duration-200 ${
                      isSelected
                        ? "bg-[#0066FF] border-[#0066FF] text-white shadow-sm shadow-blue-500/25"
                        : "bg-blue-50/90 border-blue-100/80 text-[#0066FF] group-hover:bg-blue-100/90 group-hover:scale-105"
                    }`}
                  >
                    {isSelected ? (
                      <Check className="w-5 h-5 stroke-[2.5]" />
                    ) : (
                      item.icon
                    )}
                  </div>

                  {item.highlight && (
                    <span className="text-[10.5px] font-extrabold uppercase tracking-wide bg-blue-50 text-[#0066FF] border border-blue-100/80 px-2.5 py-0.5 rounded-full">
                      {item.highlight}
                    </span>
                  )}
                </div>

                {/* Card Body: Title & Subtitle */}
                <div className="mb-4">
                  <h4 className="text-[14px] sm:text-[14.5px] font-bold text-slate-900 leading-snug group-hover:text-blue-950 transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-[12px] text-slate-500 mt-1 leading-relaxed line-clamp-2">
                    {item.subtitle}
                  </p>
                </div>

                {/* Card Bottom: Price & Subtle Action Indicator */}
                <div className="pt-3 border-t border-slate-100/90 flex items-center justify-between">
                  <span className="text-[13.5px] font-black tracking-tight text-[#0066FF]">
                    {item.price}
                  </span>
                  <span
                    className={`text-[11px] font-bold transition-colors ${
                      isSelected
                        ? "text-[#0066FF]"
                        : "text-slate-400 group-hover:text-slate-600"
                    }`}
                  >
                    {isSelected ? "Selected ✓" : "Click to select"}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}



