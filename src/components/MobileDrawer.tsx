"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, X } from "lucide-react";

export const NAV_LINKS = [
  { name: "Services", href: "/#services" },
  { name: "Solutions", href: "/#solutions" },
  { name: "Work", href: "/#work" },
  { name: "Process", href: "/#process" },
  { name: "About", href: "/#about" },
  { name: "Pricing", href: "/pricing" },
];

interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export function HamburgerButton({
  isOpen,
  onClick,
  className = "",
}: {
  isOpen: boolean;
  onClick: () => void;
  className?: string;
}) {
  return (
    <button
      onClick={onClick}
      className={`relative flex items-center justify-center w-10 h-10 rounded-xl border border-white/15 bg-white/5 hover:bg-white/10 text-white transition-all active:scale-95 cursor-pointer ${className}`}
      aria-label="Toggle Navigation Menu"
    >
      <div className="w-5 h-3.5 flex flex-col justify-between items-center relative">
        <span
          className={`block h-[2px] w-5 rounded-full bg-white transition-all duration-300 ease-out origin-center ${
            isOpen ? "rotate-45 translate-y-[6px] bg-[#0066FF]" : ""
          }`}
        />
        <span
          className={`block h-[2px] w-5 rounded-full bg-white transition-all duration-200 ease-out ${
            isOpen ? "opacity-0 scale-x-0" : "opacity-100"
          }`}
        />
        <span
          className={`block h-[2px] w-5 rounded-full bg-white transition-all duration-300 ease-out origin-center ${
            isOpen ? "-rotate-45 -translate-y-[6px] bg-[#0066FF]" : ""
          }`}
        />
      </div>
    </button>
  );
}

export default function MobileDrawer({ isOpen, onClose }: MobileDrawerProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <div
      className={`fixed inset-0 z-[999] lg:hidden transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        isOpen
          ? "opacity-100 pointer-events-auto visible"
          : "opacity-0 pointer-events-none invisible"
      }`}
    >
      {/* 100% Solid Opaque Dark Backdrop — prevents any background navbar bleed-through */}
      <div className="absolute inset-0 bg-[#02050D]" />

      {/* Ambient Glowing Orbs */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-[#0066FF]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-60 h-60 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      {/* Drawer Inner Content */}
      <div className="relative z-10 h-full flex flex-col justify-between p-6 sm:p-8 pt-6">
        {/* Header Row with Logo and perfectly aligned crisp Close Cross */}
        <div className="flex items-center justify-between pb-5 border-b border-white/10">
          <Link
            href="/"
            onClick={onClose}
            className="flex items-center gap-2.5"
          >
            <Image
              src="/images/logo.png"
              alt="Cyborg Developers"
              width={75}
              height={32}
              className="h-[30px] w-auto object-contain"
              priority
            />
          </Link>
          <button
            onClick={onClose}
            className="flex items-center justify-center w-10 h-10 rounded-xl bg-white/[0.08] hover:bg-white/[0.16] border border-white/20 text-white transition-all active:scale-95 cursor-pointer shadow-sm"
            aria-label="Close menu"
          >
            <X className="w-5 h-5 text-white stroke-[2.5]" />
          </button>
        </div>

        {/* Navigation Links with Boutique Stagger & Numbering */}
        <nav className="flex flex-col gap-3 py-6 my-auto">
          {NAV_LINKS.map((link, idx) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={onClose}
              className={`group flex items-center justify-between py-3 px-3.5 rounded-xl hover:bg-white/[0.04] border-b border-white/[0.05] transition-all duration-300 ${
                isOpen
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
              style={{
                transitionDelay: isOpen ? `${70 + idx * 40}ms` : "0ms",
              }}
            >
              <div className="flex items-center gap-3.5">
                <span className="text-[11px] font-mono text-[#0066FF] font-bold">
                  0{idx + 1}
                </span>
                <span className="text-[20px] font-bold text-white/90 group-hover:text-white group-hover:translate-x-1.5 transition-transform duration-200">
                  {link.name}
                </span>
              </div>
              <ArrowRight className="w-4 h-4 text-white/30 group-hover:text-[#0066FF] group-hover:translate-x-1 transition-all" />
            </Link>
          ))}
        </nav>

        {/* Drawer Bottom Action Bar */}
        <div className="pt-4 border-t border-white/10 flex flex-col gap-3.5">
          <div className="flex items-center justify-between text-[11.5px] text-slate-400">
            <span className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              Available for Q2 Projects
            </span>
            <span className="text-white/60 font-mono">Lahore, PK</span>
          </div>

          <div className="grid grid-cols-2 gap-2.5">
            <a
              href="https://wa.me/?text=Hello%20Cyborg%20Developers"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 rounded-xl border border-white/15 bg-white/5 hover:bg-white/10 py-3 px-3 text-[13px] font-semibold text-white transition-colors text-center"
            >
              <span>WhatsApp</span>
            </a>
            <Link
              href="/#contact"
              onClick={onClose}
              className="inline-flex items-center justify-center gap-1.5 rounded-xl bg-[#0066FF] hover:bg-[#0052cc] py-3 px-3 text-[13px] font-semibold text-white shadow-[0_4px_20px_rgba(0,102,255,0.4)] transition-all text-center"
            >
              <span>Start Project</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
