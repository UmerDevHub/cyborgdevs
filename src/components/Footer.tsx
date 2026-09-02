"use client";

import React from "react";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#020612] text-zinc-300 border-t border-white/10 pt-12 lg:pt-14 pb-8 px-6 sm:px-10 lg:px-16 overflow-hidden">
      <div className="max-w-[1520px] mx-auto">
        {/* ── MAIN FOOTER GRID ──────────────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-8 pb-16 border-b border-white/10">
          
          {/* ── LEFT BRAND COLUMN (Takes 3-4 cols on desktop) ───── */}
          <div className="md:col-span-4 lg:col-span-3 flex flex-col justify-start">
            {/* CD Monogram Logo */}
            <div className="flex items-center gap-2.5 mb-5">
              <div className="relative h-9 w-9 flex-shrink-0">
                <Image
                  src="/images/logo_cropped.png"
                  alt="Agency Logo"
                  width={72}
                  height={72}
                  className="h-full w-full object-contain"
                />
              </div>
              <span className="text-[20px] font-extrabold tracking-tight text-white">
                CYBORG<span className="text-[#0066FF]">DEVS</span>
              </span>
            </div>

            {/* Bio Paragraph */}
            <p className="text-[13.5px] leading-relaxed text-zinc-400 max-w-[280px] mb-6">
              We are a digital development agency that builds high-performance
              digital products for ambitious businesses.
            </p>

            {/* Social Icons in Dark Rounded Square Badges */}
            <div className="flex items-center gap-2.5">
              {/* LinkedIn */}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/5 border border-white/10 text-zinc-400 transition-all duration-200 hover:bg-[#0066FF]/20 hover:border-[#0066FF] hover:text-[#0066FF] hover:scale-105 active:scale-95 cursor-pointer"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76c.97 0 1.75-.79 1.75-1.76s-.78-1.75-1.75-1.75a1.76 1.76 0 0 0-1.76 1.75c0 .97.79 1.76 1.76 1.76m1.4 9.74v-8.37H5.06v8.37z" />
                </svg>
              </a>

              {/* Twitter / X */}
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Twitter / X"
                className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/5 border border-white/10 text-zinc-400 transition-all duration-200 hover:bg-[#0066FF]/20 hover:border-[#0066FF] hover:text-[#0066FF] hover:scale-105 active:scale-95 cursor-pointer"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/5 border border-white/10 text-zinc-400 transition-all duration-200 hover:bg-[#0066FF]/20 hover:border-[#0066FF] hover:text-[#0066FF] hover:scale-105 active:scale-95 cursor-pointer"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  />
                </svg>
              </a>

              {/* Dribbble / Portfolio */}
              <a
                href="https://dribbble.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Dribbble"
                className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/5 border border-white/10 text-zinc-400 transition-all duration-200 hover:bg-[#0066FF]/20 hover:border-[#0066FF] hover:text-[#0066FF] hover:scale-105 active:scale-95 cursor-pointer"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.326-.067-2.68-.535-5.143-.23.11-.27.214-.542.311-.813 1.01-2.793 1.516-4.27 2.902-4.271zm-4.372.484c-.097.26-.197.524-.303.791-2.28 5.733-6.19 8.167-8.082 8.92A8.47 8.47 0 013.5 12c0-3.66 2.31-6.78 5.56-7.97.106.12.79.88 1.62 2.054 1.15 1.624 1.58 2.01 1.553 2.01zm-7.97 10.428a8.51 8.51 0 005.86 2.478 8.46 8.46 0 005.74-2.263c-.156-.23-.96-1.39-2.92-2.12-.42-.16-.89-.28-1.39-.37-.02.04-.04.08-.06.12-.66 1.34-1.63 2.61-3.23 2.155h-.001c-1.39-.4-2.8-1.55-4-3.52z"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* ── RIGHT 5 NAVIGATION COLUMNS (Takes 8-9 cols on desktop) ── */}
          <div className="md:col-span-8 lg:col-span-9 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8">
            
            {/* Column 1: Services */}
            <div>
              <h4 className="text-[14px] font-bold text-white tracking-wide mb-4">
                Services
              </h4>
              <ul className="flex flex-col gap-2.5 text-[13px] text-zinc-400">
                <li>
                  <a href="#services" className="hover:text-white transition-colors">
                    Web Development
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-white transition-colors">
                    Mobile App Development
                  </a>
                </li>
                <li>
                  <a href="#solutions" className="hover:text-white transition-colors">
                    AI Development
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-white transition-colors">
                    SaaS Development
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-white transition-colors">
                    E-commerce
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-white transition-colors">
                    Custom Software
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 2: Solutions */}
            <div>
              <h4 className="text-[14px] font-bold text-white tracking-wide mb-4">
                Solutions
              </h4>
              <ul className="flex flex-col gap-2.5 text-[13px] text-zinc-400">
                <li>
                  <a href="#solutions" className="hover:text-white transition-colors">
                    Startups
                  </a>
                </li>
                <li>
                  <a href="#solutions" className="hover:text-white transition-colors">
                    Enterprise
                  </a>
                </li>
                <li>
                  <a href="#solutions" className="hover:text-white transition-colors">
                    AI Automation
                  </a>
                </li>
                <li>
                  <a href="#solutions" className="hover:text-white transition-colors">
                    Digital Transformation
                  </a>
                </li>
                <li>
                  <a href="#solutions" className="hover:text-white transition-colors">
                    API Development
                  </a>
                </li>
                <li>
                  <a href="#solutions" className="hover:text-white transition-colors">
                    Cloud Solutions
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 3: Company */}
            <div>
              <h4 className="text-[14px] font-bold text-white tracking-wide mb-4">
                Company
              </h4>
              <ul className="flex flex-col gap-2.5 text-[13px] text-zinc-400">
                <li>
                  <a href="#about" className="hover:text-white transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#process" className="hover:text-white transition-colors">
                    Our Process
                  </a>
                </li>
                <li>
                  <a href="#work" className="hover:text-white transition-colors">
                    Our Work
                  </a>
                </li>
                <li>
                  <a href="#careers" className="hover:text-white transition-colors">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#blog" className="hover:text-white transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 4: Resources */}
            <div>
              <h4 className="text-[14px] font-bold text-white tracking-wide mb-4">
                Resources
              </h4>
              <ul className="flex flex-col gap-2.5 text-[13px] text-zinc-400">
                <li>
                  <a href="#work" className="hover:text-white transition-colors">
                    Case Studies
                  </a>
                </li>
                <li>
                  <a href="#docs" className="hover:text-white transition-colors">
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="#guides" className="hover:text-white transition-colors">
                    Guides
                  </a>
                </li>
                <li>
                  <a href="#faq" className="hover:text-white transition-colors">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="#privacy" className="hover:text-white transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#terms" className="hover:text-white transition-colors">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 5: Contact */}
            <div>
              <h4 className="text-[14px] font-bold text-white tracking-wide mb-4">
                Contact
              </h4>
              <div className="flex flex-col gap-2 text-[13px] text-zinc-400">
                <a
                  href="mailto:hello@agency.com"
                  className="hover:text-white transition-colors font-medium text-zinc-300"
                >
                  hello@agency.com
                </a>
                <a
                  href="tel:+15551234567"
                  className="hover:text-white transition-colors"
                >
                  +1 (555) 123-4567
                </a>
                <address className="not-italic leading-relaxed text-zinc-400 mt-1">
                  123 Innovation Drive, <br />
                  Tech City, TC 12345
                </address>
              </div>
            </div>

          </div>

        </div>

        {/* ── BOTTOM COPYRIGHT BAR ──────────────────────────────── */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[12.5px] text-zinc-500">
          <p>© {currentYear} Agency. All rights reserved.</p>
          <p className="text-zinc-500">Let&apos;s build something extraordinary.</p>
        </div>

      </div>
    </footer>
  );
}
