"use client";

import Image from "next/image";
import { internships } from "@/data/internships";

interface ViewProps {
  onBack: () => void;
}

export function InternshipsView({ onBack }: ViewProps) {
  return (
    <div className="subview-container">

      {/* ─── BACK BUTTON ─── */}
      <button
        onClick={onBack}
        className="fixed top-4 left-4 sm:top-8 sm:left-8 z-50 flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-white/90 backdrop-blur-md rounded-full shadow-[0_4px_16px_rgba(0,0,0,0.08)] border border-stone-200/60 active:scale-95 hover:scale-105 transition-transform cursor-pointer"
        aria-label="Back to home"
      >
        <span className="text-lg sm:text-xl">←</span>
      </button>

      {/* ─── INNOVATIVE HEADER (CENTERED WITH RESPONSIVE PADDING) ─── */}
      <div className="w-full max-w-[900px] flex flex-col items-center text-center anim-fade-up">
        <h1 className="font-hand text-[2.25rem] xs:text-[2.75rem] sm:text-[3.5rem] md:text-[4rem] text-[var(--text-primary)] mb-4 sm:mb-6 -rotate-2">
          Featured Experience
        </h1>

        <div 
          className="relative overflow-hidden bg-stone-50/80 backdrop-blur-md rounded-2xl sm:rounded-3xl md:rounded-[2.5rem] shadow-[0_8px_30px_rgba(0,0,0,0.04)] border-2 border-stone-200 w-full flex flex-col items-center justify-center text-center subview-card-pad"
        >
          <p 
            className="relative z-10 text-center text-sm xs:text-base sm:text-lg md:text-xl text-[var(--text-secondary)] leading-relaxed font-medium max-w-3xl mx-auto"
          >
            Bridging academic theory and industry reality. Here is a curated record of my <span className="font-bold text-[var(--text-primary)]">engineering internships</span> across high-growth fintech, enterprise AI, full-stack systems, and green sustainability initiatives.
          </p>
        </div>
      </div>

      {/* ─── RESPONSIVE SPACER ─── */}
      <div className="subview-spacer" />

      {/* ─── INTERNSHIPS LIST (RESPONSIVE GAP BETWEEN BOXES) ─── */}
      <div className="w-full max-w-[900px] flex flex-col gap-5 xs:gap-7 sm:gap-9 md:gap-[50px]">
        {internships.map((internship, idx) => (
          <div
            key={internship.id}
            style={{ 
              animationDelay: `${idx * 0.1}s` 
            }}
            className="flex flex-col md:flex-row items-center md:items-start gap-5 sm:gap-8 bg-white rounded-2xl sm:rounded-3xl md:rounded-[2.5rem] border-2 border-stone-200 shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:border-stone-300 hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] transition-all duration-300 anim-fade-up w-full subview-card-pad"
          >
            {/* LEFT SIDE: OFFICIAL LOGO (RESPONSIVE, CONSTRAINED ON MOBILE) */}
            <div className={`${internship.logoContainerClass} max-w-[85%] xs:max-w-full shrink-0 relative rounded-xl sm:rounded-2xl overflow-hidden border-2 border-stone-200 group flex items-center justify-center p-2 xs:p-2.5 bg-white shadow-sm hover:border-stone-300 transition-colors mx-auto md:mx-0`}>
              <div className="relative w-full h-full transition-transform duration-500 group-hover:scale-105">
                <Image
                  src={internship.logo}
                  alt={`${internship.company} Official Logo`}
                  fill
                  sizes="(max-width: 475px) 160px, 220px"
                  className="object-contain"
                  priority={idx < 2}
                />
              </div>
            </div>

            {/* RIGHT SIDE: CONTENT WITH RESPONSIVE PADDING */}
            <div className="flex flex-col flex-1 min-w-0 w-full gap-2.5 sm:gap-3 text-center md:text-left">
              <div className="flex flex-col gap-1">
                <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 sm:gap-3">
                  <h3 className="text-xl xs:text-2xl sm:text-[1.85rem] font-bold text-[var(--text-primary)] tracking-tight leading-snug">
                    {internship.role}
                  </h3>
                  <span className="px-2.5 sm:px-3.5 py-0.5 sm:py-1 bg-blue-50 text-blue-700 text-[0.68rem] sm:text-[0.72rem] font-bold uppercase tracking-wider rounded-full border border-blue-200">
                    {internship.category}
                  </span>
                </div>
                <p className="text-xs sm:text-[0.95rem] font-semibold text-stone-500 tracking-wide">
                  {internship.company} · {internship.period} · {internship.location}
                </p>
              </div>

              <p className="text-sm sm:text-base md:text-[1.05rem] text-[var(--text-secondary)] leading-relaxed font-normal">
                {internship.summary}
              </p>

              <div className="flex flex-wrap justify-center md:justify-start gap-1.5 xs:gap-2.5 pt-3 sm:pt-4 mt-1 border-t border-stone-200/70">
                {internship.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-[0.75rem] sm:text-[0.82rem] font-semibold text-stone-700 bg-stone-50 px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-lg border border-stone-200 shadow-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
