"use client";

import Image from "next/image";
import { openSourcePrograms } from "@/data/opensource";

interface ViewProps {
  onBack: () => void;
}

export function OpenSourceView({ onBack }: ViewProps) {
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
          Open Source
        </h1>

        <div 
          className="relative overflow-hidden bg-stone-50/80 backdrop-blur-md rounded-2xl sm:rounded-3xl md:rounded-[2.5rem] shadow-[0_8px_30px_rgba(0,0,0,0.04)] border-2 border-stone-200 w-full flex flex-col items-center justify-center text-center subview-card-pad"
        >
          <p className="relative z-10 text-center text-sm xs:text-base sm:text-lg md:text-xl text-[var(--text-secondary)] leading-relaxed font-medium max-w-2xl mx-auto">
            Code isn&apos;t engineered in isolation. Contributing to global <span className="font-bold text-[var(--text-primary)]">open-source initiatives</span> taught me how asynchronous collaboration, code reviews, and community-first architectures build software that scales reliably.
          </p>
        </div>
      </div>

      {/* ─── RESPONSIVE SPACER ─── */}
      <div className="subview-spacer" />

      {/* ─── OPEN SOURCE PROGRAMS LIST (RESPONSIVE GAP BETWEEN BOXES) ─── */}
      <div className="w-full max-w-[900px] flex flex-col gap-5 xs:gap-7 sm:gap-9 md:gap-[50px]">
        {openSourcePrograms.map((program, idx) => (
          <div
            key={program.id}
            style={{ 
              animationDelay: `${idx * 0.1}s` 
            }}
            className="flex flex-col md:flex-row items-center md:items-start gap-4 sm:gap-8 bg-white rounded-2xl sm:rounded-3xl md:rounded-[2.5rem] border-2 border-stone-200 shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:border-stone-300 hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] transition-all duration-300 anim-fade-up w-full subview-card-pad"
          >
            {/* LEFT SIDE: BADGE CONTAINER (RESPONSIVE) */}
            <div className="w-[100px] h-[100px] xs:w-[110px] xs:h-[110px] sm:w-[140px] sm:h-[140px] md:w-[160px] md:h-[160px] shrink-0 relative rounded-xl sm:rounded-2xl overflow-hidden border-2 border-stone-200 group flex items-center justify-center p-2 xs:p-2.5 sm:p-3 bg-gradient-to-br from-stone-50 via-white to-stone-100 shadow-inner mx-auto md:mx-0">
              <div className="relative w-full h-full max-w-[80px] max-h-[80px] xs:max-w-[100px] xs:max-h-[100px] sm:max-w-[130px] sm:max-h-[130px] transition-transform duration-500 group-hover:scale-105">
                <Image
                  src={program.badge}
                  alt={`${program.name} Badge`}
                  fill
                  sizes="160px"
                  className="object-contain"
                  priority={idx < 2}
                />
              </div>
            </div>

            {/* RIGHT SIDE: AUTHENTIC CONTENT */}
            <div className="flex flex-col flex-1 min-w-0 w-full gap-2.5 sm:gap-3 text-center md:text-left">
              <div className="flex flex-col gap-1">
                <h3 className="text-xl xs:text-2xl sm:text-[1.85rem] font-bold text-[var(--text-primary)] tracking-tight leading-snug">
                  {program.role}
                </h3>
                <p className="text-xs sm:text-[0.95rem] font-semibold text-stone-500 tracking-wide">
                  {program.name} · {program.period} · {program.location}
                </p>
              </div>

              <p className="text-sm sm:text-base md:text-[1.05rem] text-[var(--text-secondary)] leading-relaxed font-normal">
                {program.summary}
              </p>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
