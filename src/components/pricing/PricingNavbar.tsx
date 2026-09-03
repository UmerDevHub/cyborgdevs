"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import MobileDrawer, { HamburgerButton, NAV_LINKS } from "@/components/MobileDrawer";

export default function PricingNavbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[#02050D]/85 backdrop-blur-md border-b border-white/10 py-3.5 shadow-[0_8px_30px_rgba(0,0,0,0.6)]"
            : "bg-transparent py-5 lg:py-6"
        }`}
      >
        <div className="max-w-[1520px] mx-auto px-6 sm:px-10 lg:px-16 flex items-center justify-between">
          {/* Brand Monogram Logo from /public/images/logo.png */}
          <Link href="/" className="flex items-center gap-3 group cursor-pointer">
            <div className="relative h-8 w-auto flex-shrink-0 transition-transform duration-300 group-hover:scale-105">
              <Image
                src="/images/logo.png"
                alt="Cyborg Developers Monogram Logo"
                width={85}
                height={36}
                className="h-[30px] sm:h-[34px] w-auto object-contain"
                priority
              />
            </div>
          </Link>

          {/* Center Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8 xl:gap-10">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-[14px] font-medium text-white/80 hover:text-white transition-colors duration-200 tracking-wide cursor-pointer"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Right: Glassy Start a Project Button */}
          <div className="hidden lg:flex items-center">
            <Link
              href="/#contact"
              className="rounded-full border border-white/20 bg-white/[0.06] hover:bg-white/[0.14] hover:border-white/40 text-white px-5 py-2 text-[13px] font-medium tracking-wide transition-all duration-200 cursor-pointer shadow-sm active:scale-95 flex items-center gap-1.5"
            >
              <span>Start a Project</span>
              <ArrowRight className="w-3.5 h-3.5 text-white/80" />
            </Link>
          </div>

          {/* Mobile Menu Button with Animated Morphing Hamburger */}
          <div className="flex lg:hidden items-center gap-2.5">
            <Link
              href="/#contact"
              className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/[0.08] px-3 py-1.5 text-[12px] font-medium text-white"
            >
              <span>Project</span>
              <ArrowRight className="w-3 h-3 text-[#0066FF]" />
            </Link>
            <HamburgerButton
              isOpen={mobileMenuOpen}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            />
          </div>
        </div>
      </header>

      {/* Unified Boutique Full-Screen Mobile Drawer */}
      <MobileDrawer
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </>
  );
}
