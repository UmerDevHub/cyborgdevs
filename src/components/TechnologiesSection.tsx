"use client";

import React from "react";

interface TechItem {
  name: string;
  icon: React.ReactNode;
}

const technologies: TechItem[] = [
  {
    name: "React",
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 115.3 100" fill="#00D8FF">
        <path d="M57.7,0C44.3,0,33.3,10.6,26.4,22.5C21.8,15.6,16,10.2,9.3,10.2C3.6,10.2,0,14.6,0,21.3c0,13.4,14.5,29.9,35.2,40.5C28.4,72.7,21.8,84,16.2,92.5c-2.4,3.7-3.9,6.2-3.9,7.5c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c1.2,0,3.6-1.5,7.1-4c9.1-6.5,21.5-18.4,31.7-33.1c11.6,13.8,24,24.7,32.8,30.7c3.4,2.3,5.7,3.6,6.9,3.6c0.1,0,0.1,0,0.2,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c0-1.4-1.7-4.1-4.2-8C81.1,70.6,74.5,59.3,67.7,48.2c20.7-10.7,35.2-27.1,35.2-40.5c0-6.7-3.6-11.1-9.3-11.1c-6.7,0-12.5,5.4-17.1,12.3C69.6,10.6,58.6,0,45.2,0H57.7z" opacity="0" />
        <ellipse cx="57.7" cy="50" rx="14" ry="48" fill="none" stroke="#00D8FF" strokeWidth="6.5" transform="rotate(30 57.7 50)" />
        <ellipse cx="57.7" cy="50" rx="14" ry="48" fill="none" stroke="#00D8FF" strokeWidth="6.5" transform="rotate(90 57.7 50)" />
        <ellipse cx="57.7" cy="50" rx="14" ry="48" fill="none" stroke="#00D8FF" strokeWidth="6.5" transform="rotate(150 57.7 50)" />
        <circle cx="57.7" cy="50" r="7.5" fill="#00D8FF" />
      </svg>
    ),
  },
  {
    name: "Next.js",
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 180 180" fill="none">
        <circle cx="90" cy="90" r="85" fill="white" stroke="#E5E7EB" strokeWidth="6" />
        <circle cx="90" cy="90" r="78" fill="none" stroke="#111827" strokeWidth="3" />
        <path d="M60 55v70h14V87.5l37 40.5h15V55h-14v39L74 55H60z" fill="#000000" />
      </svg>
    ),
  },
  {
    name: "Node.js",
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 32 32">
        <path
          d="M16 2.5l12.5 7.2v14.6L16 31.5 3.5 24.3V9.7L16 2.5z"
          fill="#539E43"
        />
        <path
          d="M16 13.5c-1.8 0-3.3 1.2-3.3 3 0 2.4 3.7 2.4 3.7 4 0 .4-.4.7-1 .7-.8 0-1.4-.4-1.9-1l-1.3 1.1c.8 1.1 1.9 1.7 3.2 1.7 2 0 3.3-1.1 3.3-3 0-2.4-3.7-2.3-3.7-4 0-.4.3-.6.9-.6.7 0 1.2.3 1.6.8l1.3-1.1c-.7-.9-1.6-1.6-2.8-1.6z"
          fill="#FFFFFF"
        />
      </svg>
    ),
  },
  {
    name: "Laravel",
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none">
        <path
          d="M3.5 8.2L11 4l8.5 4.5L12 13 3.5 8.2zm0 3.8L11 16.5l8.5-4.5V15L11 20 3.5 15.5V12z"
          fill="#FF2D20"
        />
      </svg>
    ),
  },
  {
    name: "Flutter",
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none">
        <path d="M14.3 2L4 12.3l3.2 3.2L19.5 2h-5.2z" fill="#42A5F5" />
        <path d="M14.3 11.2L9.4 16.1l4.9 4.9h5.2l-7.5-7.5 2.3-2.3z" fill="#0D47A1" />
        <path d="M9.4 16.1l2.6 2.6-2.6 2.6H4.2l5.2-5.2z" fill="#42A5F5" />
      </svg>
    ),
  },
  {
    name: "React Native",
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 115.3 100" fill="#00D8FF">
        <ellipse cx="57.7" cy="50" rx="14" ry="48" fill="none" stroke="#00D8FF" strokeWidth="6.5" transform="rotate(30 57.7 50)" />
        <ellipse cx="57.7" cy="50" rx="14" ry="48" fill="none" stroke="#00D8FF" strokeWidth="6.5" transform="rotate(90 57.7 50)" />
        <ellipse cx="57.7" cy="50" rx="14" ry="48" fill="none" stroke="#00D8FF" strokeWidth="6.5" transform="rotate(150 57.7 50)" />
        <circle cx="57.7" cy="50" r="7.5" fill="#00D8FF" />
      </svg>
    ),
  },
  {
    name: "Python",
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 24 24">
        <path
          d="M11.9 2c-4.4 0-4.1 1.9-4.1 1.9l.05 2h4.2v.6H5.2S2 6.1 2 10.5s2.8 4.2 2.8 4.2h1.7v-2.4s-.1-2.8 2.8-2.8h4.7s2.7.1 2.7-2.6V4.6S17 2 11.9 2zm-2.4 1.3c.5 0 .9.4.9.9s-.4.9-.9.9-.9-.4-.9-.9.4-.9.9-.9z"
          fill="#3776AB"
        />
        <path
          d="M12.1 22c4.4 0 4.1-1.9 4.1-1.9l-.05-2h-4.2v-.6h6.8s3.2.4 3.2-4-2.8-4.2-2.8-4.2h-1.7v2.4s.1 2.8-2.8 2.8H10s-2.7-.1-2.7 2.6v2.3S7 22 12.1 22zm2.4-1.3c-.5 0-.9-.4-.9-.9s.4-.9.9-.9.9.4.9.9-.4.9-.9.9z"
          fill="#FFD438"
        />
      </svg>
    ),
  },
  {
    name: "AWS",
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none">
        <path
          d="M6.5 12.5c-.3-.2-.7-.4-1.2-.4-1.1 0-1.8.7-1.8 1.8 0 1.2.7 1.9 1.8 1.9.5 0 .9-.2 1.2-.4v-2.9zm.9 4.2h-.9v-.7c-.4.5-1 .8-1.7.8-1.5 0-2.6-1-2.6-2.6 0-1.5 1.1-2.5 2.6-2.5.7 0 1.3.3 1.7.7v-.4c0-.9-.6-1.4-1.5-1.4-.6 0-1.2.2-1.6.5l-.3-.7c.6-.4 1.4-.6 2.1-.6 1.5 0 2.2.9 2.2 2.3v3.9zm5.5-.3l-1.3-4.8h.9l.9 3.7.9-3.7h.9l.9 3.7.9-3.7h.9l-1.3 4.8h-.9l-.9-3.7-.9 3.7h-.9zm8.2-.5c-.4.5-1.1.9-1.8.9-1.2 0-2-.7-2-1.7 0-1.2 1-1.6 2.1-1.6h.8v-.2c0-.7-.4-1.1-1.2-1.1-.6 0-1.2.2-1.6.5l-.3-.7c.6-.4 1.3-.6 2-.6 1.4 0 2 .8 2 2v2.5zm-.9-1.8h-.8c-.6 0-1.2.2-1.2.9 0 .6.4 1 1.2 1 .5 0 .8-.3.8-.7v-1.2z"
          fill="#232F3E"
        />
        <path
          d="M3 18.5c4.5 2.3 10.5 2.3 15.5-.2.4-.2.9.2.5.6-4.5 2.7-11 2.8-16.5.2-.4-.2-.1-.8.5-.6z"
          fill="#FF9900"
        />
        <path d="M19 17.5l1.5 1.2-1.8.6.3-1.8z" fill="#FF9900" />
      </svg>
    ),
  },
  {
    name: "Docker",
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 24 24" fill="#2496ED">
        <path d="M3.5 11.5h2v2h-2zm2.5 0h2v2H6zm2.5 0h2v2h-2zm2.5 0h2v2h-2zm2.5 0h2v2h-2zm-5-2.5h2v2h-2zm2.5 0h2v2h-2zm2.5 0h2v2h-2zm-2.5-2.5h2v2h-2zm9 6.5c-.2-.1-1.3-.5-1.7-.3-.6.3-.9 1-1 1.3-.5-.4-1.3-.6-2.1-.6H2.5C1.7 13.4 1 14.1 1 15c0 3.9 3.1 7 7 7 4.2 0 7.7-2.6 8.7-6.5 1.2 0 2.8-.7 3.3-2.3 0 0-1-.7-2-.7z" />
      </svg>
    ),
  },
  {
    name: "PostgreSQL",
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 24 24" fill="#336791">
        <path d="M12 2C6.5 2 2 6.5 2 12c0 4.2 2.6 7.8 6.4 9.2.2-1.3.5-3.3 1-4.7-1.4-.4-2.5-1.5-2.5-3.2 0-2.3 1.9-3.8 4.2-3.8 1.4 0 2.5.5 3.3 1.4.6-.3 1.3-.7 1.9-1.2-.2.8-.7 1.4-1.4 1.8.6 0 1.2-.2 1.8-.5-.4.6-.9 1.1-1.5 1.5.2 2.5-1.5 5.5-4.4 7.2 1.3.4 2.8.6 4.3.6 5.5 0 10-4.5 10-10S17.5 2 12 2z" />
      </svg>
    ),
  },
  {
    name: "MongoDB",
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none">
        <path
          d="M12 2s-6 5.5-6 11c0 4.5 3.5 7.5 6 9 2.5-1.5 6-4.5 6-9 0-5.5-6-11-6-11z"
          fill="#47A248"
        />
        <path
          d="M12 2v20c.3 0 .6-.1.9-.2 2.1-1.3 5.1-4 5.1-8.3 0-5-5-9.8-5.8-11.2-.1-.1-.2-.2-.2-.3z"
          fill="#4CAF50"
        />
        <path
          d="M12 18.5v3.5c-.4 0-.7-.1-1-.2-2.1-1.3-4.5-3.8-4.5-8.1 0-2.4 1.1-4.9 2.7-7.2.4.9 1.4 2.6 2.8 5v7z"
          fill="#3FA037"
        />
      </svg>
    ),
  },
  {
    name: "OpenAI",
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 24 24" fill="#000000">
        <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1683a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4947zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1683a.0757.0757 0 0 1-.071 0l-4.8303-2.7866A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.6667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.6608zm-12.6401 4.135l-2.02-1.1635a.0804.0804 0 0 1-.038-.0568V6.0747a4.504 4.504 0 0 1 7.371-3.4537l-.142.0805-4.7783 2.7582a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3655l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997z" />
      </svg>
    ),
  },
];

export default function TechnologiesSection() {
  return (
    <section
      id="technologies"
      className="relative w-full bg-white text-zinc-900 py-18 lg:py-24 px-5 sm:px-10 lg:px-16 overflow-hidden border-t border-zinc-200/80"
    >
      <div className="max-w-[1520px] mx-auto">
        {/* ── HEADER ROW ────────────────────────────────────────── */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-14 sm:mb-18 gap-5">
          <div>
            {/* Category tag */}
            <span className="inline-block text-[#0066FF] text-[12px] font-bold tracking-[0.22em] uppercase mb-3">
              TECHNOLOGIES
            </span>
            {/* Main Title */}
            <h2 className="text-[32px] sm:text-[40px] lg:text-[46px] font-extrabold tracking-tight text-zinc-950 leading-[1.12]">
              Modern technologies. <br />
              Powerful solutions.
            </h2>
          </div>

          {/* Right Subtitle */}
          <p className="text-[14px] sm:text-[15px] font-normal leading-relaxed text-zinc-500 max-w-[360px] sm:text-right pb-1">
            We use cutting-edge technologies <br className="hidden sm:inline" />
            to build scalable and future-ready products.
          </p>
        </div>

        {/* ── ALL 12 TECHNOLOGIES (DESKTOP GRID & CONTINUOUS MARQUEE ON MOBILE) ── */}
        
        {/* Desktop / Laptop: Sleek 12-item evenly spaced row */}
        <div className="hidden lg:grid grid-cols-12 gap-2 xl:gap-4 items-center justify-between pt-2 pb-4">
          {technologies.map((tech) => (
            <div
              key={tech.name}
              className="group flex flex-col items-center justify-center gap-3.5 p-3 rounded-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer"
            >
              <div className="flex h-[52px] w-[52px] items-center justify-center transition-transform duration-300 group-hover:scale-115">
                {tech.icon}
              </div>
              <span className="text-[13.5px] font-medium text-zinc-700 transition-colors duration-200 group-hover:text-zinc-950 text-center whitespace-nowrap">
                {tech.name}
              </span>
            </div>
          ))}
        </div>

        {/* Mobile & Tablet: Seamless Continuous Infinite Marquee so it never wraps awkwardly */}
        <div className="lg:hidden relative w-full overflow-hidden pt-2 pb-4">
          {/* Gradient fade masks on sides */}
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-8 z-10 bg-gradient-to-r from-white to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-8 z-10 bg-gradient-to-l from-white to-transparent" />

          <div className="animate-marquee flex items-center gap-8 select-none">
            {/* Track 1 */}
            {technologies.map((tech, i) => (
              <div
                key={`m-track1-${i}`}
                className="flex flex-col items-center justify-center gap-2.5 flex-shrink-0 min-w-[76px] py-1"
              >
                <div className="flex h-[46px] w-[46px] items-center justify-center">
                  {tech.icon}
                </div>
                <span className="text-[12.5px] font-medium text-zinc-700 whitespace-nowrap">
                  {tech.name}
                </span>
              </div>
            ))}

            {/* Track 2 (for seamless loop) */}
            {technologies.map((tech, i) => (
              <div
                key={`m-track2-${i}`}
                className="flex flex-col items-center justify-center gap-2.5 flex-shrink-0 min-w-[76px] py-1"
              >
                <div className="flex h-[46px] w-[46px] items-center justify-center">
                  {tech.icon}
                </div>
                <span className="text-[12.5px] font-medium text-zinc-700 whitespace-nowrap">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
