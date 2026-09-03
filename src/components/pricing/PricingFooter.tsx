"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function PricingFooter() {
  const currentYear = 2026;

  return (
    <footer className="w-full bg-[#02050D] text-zinc-300 border-t border-white/10 pt-16 pb-8 px-6 sm:px-10 lg:px-16 overflow-hidden">
      <div className="max-w-[1520px] mx-auto">
        {/* ── MAIN FOOTER GRID ──────────────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-white/10">
          
          {/* ── LEFT BRAND COLUMN (Takes 3-4 cols) ────────────────── */}
          <div className="md:col-span-4 lg:col-span-3 flex flex-col justify-start">
            {/* CD Monogram Logo & Name */}
            <div className="flex items-center gap-2.5 mb-5">
              <div className="relative h-8 w-8 shrink-0">
                <Image
                  src="/images/logo_cropped.png"
                  alt="Agency Logo"
                  width={64}
                  height={64}
                  className="h-full w-full object-contain"
                />
              </div>
              <span className="text-[19px] font-extrabold tracking-tight text-white">
                CYBORG<span className="text-[#0066FF]">DEVS</span>
              </span>
            </div>

            {/* Bio */}
            <p className="text-[13px] leading-relaxed text-zinc-400 max-w-[280px] mb-6">
              We are a digital development agency that builds high-performance
              digital products for ambitious businesses.
            </p>

            {/* Social Icons in Dark Rounded Square Badges */}
            <div className="flex items-center gap-2.5">
              {/* Facebook */}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/5 border border-white/10 text-zinc-400 hover:bg-[#0066FF]/20 hover:border-[#0066FF] hover:text-[#0066FF] transition-all"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/5 border border-white/10 text-zinc-400 hover:bg-[#0066FF]/20 hover:border-[#0066FF] hover:text-[#0066FF] transition-all"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>

              {/* Twitter / X */}
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Twitter / X"
                className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/5 border border-white/10 text-zinc-400 hover:bg-[#0066FF]/20 hover:border-[#0066FF] hover:text-[#0066FF] transition-all"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/5 border border-white/10 text-zinc-400 hover:bg-[#0066FF]/20 hover:border-[#0066FF] hover:text-[#0066FF] transition-all"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76c.97 0 1.75-.79 1.75-1.76s-.78-1.75-1.75-1.75a1.76 1.76 0 0 0-1.76 1.75c0 .97.79 1.76 1.76 1.76m1.4 9.74v-8.37H5.06v8.37z" />
                </svg>
              </a>
            </div>
          </div>

          {/* ── RIGHT 5 NAVIGATION COLUMNS ────────────────────────── */}
          <div className="md:col-span-8 lg:col-span-9 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8">
            
            {/* Column 1: Services */}
            <div>
              <h4 className="text-[13.5px] font-bold text-white tracking-wide mb-4">
                Services
              </h4>
              <ul className="flex flex-col gap-2.5 text-[12.5px] text-zinc-400">
                <li><Link href="/#services" className="hover:text-white transition-colors">Web Development</Link></li>
                <li><Link href="/#services" className="hover:text-white transition-colors">Mobile App Development</Link></li>
                <li><Link href="/#solutions" className="hover:text-white transition-colors">AI Development</Link></li>
                <li><Link href="/#services" className="hover:text-white transition-colors">SaaS Development</Link></li>
                <li><Link href="/#services" className="hover:text-white transition-colors">E-commerce</Link></li>
                <li><Link href="/#services" className="hover:text-white transition-colors">Custom Software</Link></li>
              </ul>
            </div>

            {/* Column 2: Solutions */}
            <div>
              <h4 className="text-[13.5px] font-bold text-white tracking-wide mb-4">
                Solutions
              </h4>
              <ul className="flex flex-col gap-2.5 text-[12.5px] text-zinc-400">
                <li><Link href="/#solutions" className="hover:text-white transition-colors">Startups</Link></li>
                <li><Link href="/#solutions" className="hover:text-white transition-colors">Enterprise</Link></li>
                <li><Link href="/#solutions" className="hover:text-white transition-colors">E-Learning</Link></li>
                <li><Link href="/#solutions" className="hover:text-white transition-colors">Digital Transformation</Link></li>
                <li><Link href="/#solutions" className="hover:text-white transition-colors">API Development</Link></li>
                <li><Link href="/#solutions" className="hover:text-white transition-colors">Cloud Solutions</Link></li>
              </ul>
            </div>

            {/* Column 3: Company */}
            <div>
              <h4 className="text-[13.5px] font-bold text-white tracking-wide mb-4">
                Company
              </h4>
              <ul className="flex flex-col gap-2.5 text-[12.5px] text-zinc-400">
                <li><Link href="/#about" className="hover:text-white transition-colors">About Us</Link></li>
                <li><Link href="/#process" className="hover:text-white transition-colors">Our Process</Link></li>
                <li><Link href="/#work" className="hover:text-white transition-colors">Our Work</Link></li>
                <li><Link href="/#careers" className="hover:text-white transition-colors">Careers</Link></li>
                <li><Link href="/#blog" className="hover:text-white transition-colors">Blog</Link></li>
                <li><Link href="/#contact" className="hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>

            {/* Column 4: Resources */}
            <div>
              <h4 className="text-[13.5px] font-bold text-white tracking-wide mb-4">
                Resources
              </h4>
              <ul className="flex flex-col gap-2.5 text-[12.5px] text-zinc-400">
                <li><Link href="/#work" className="hover:text-white transition-colors">Case Studies</Link></li>
                <li><Link href="/#docs" className="hover:text-white transition-colors">Documentation</Link></li>
                <li><Link href="/#guides" className="hover:text-white transition-colors">Guides</Link></li>
                <li><Link href="/pricing#faq" className="hover:text-white transition-colors">FAQ</Link></li>
                <li><Link href="/#privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                <li><Link href="/#terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
              </ul>
            </div>

            {/* Column 5: Contact */}
            <div>
              <h4 className="text-[13.5px] font-bold text-white tracking-wide mb-4">
                Contact
              </h4>
              <div className="flex flex-col gap-2 text-[12.5px] text-zinc-400">
                <a href="mailto:hello@cyborgdevs.com" className="hover:text-white transition-colors text-zinc-300">
                  hello@cyborgdevs.com
                </a>
                <a href="tel:+923186434587" className="hover:text-white transition-colors">
                  +92 318 643 4587
                </a>
                <address className="not-italic leading-relaxed text-zinc-400 mt-1">
                  133 PIA Housing Scheme <br />
                  Tech City, TCS 12345
                </address>
              </div>
            </div>

          </div>

        </div>

        {/* ── BOTTOM COPYRIGHT BAR ──────────────────────────────── */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[12px] text-zinc-500">
          <p>© {currentYear} Cyborg Developers. All rights reserved.</p>
          <p className="text-zinc-500">Let&apos;s build something extraordinary.</p>
        </div>

      </div>
    </footer>
  );
}
