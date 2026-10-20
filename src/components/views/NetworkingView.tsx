"use client";

import Image from "next/image";
import { communityMemberships } from "@/data/networking";

interface ViewProps {
  onBack: () => void;
}

export function NetworkingView({ onBack }: ViewProps) {
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
          Community &amp; Network
        </h1>

        <div 
          className="relative overflow-hidden bg-stone-50/80 backdrop-blur-md rounded-2xl sm:rounded-3xl md:rounded-[2.5rem] shadow-[0_8px_30px_rgba(0,0,0,0.04)] border-2 border-stone-200 w-full flex flex-col items-center justify-center text-center subview-card-pad"
        >
          <p 
            className="relative z-10 text-center text-sm xs:text-base sm:text-lg md:text-xl text-[var(--text-secondary)] leading-relaxed font-medium max-w-3xl mx-auto"
          >
            Engineering thrives on community, shared knowledge, and collaborative ecosystems. Here are the global fellowships and ambassador leadership programs that shaped my engineering mindset and builder journey.
          </p>
        </div>
      </div>

      {/* ─── RESPONSIVE SPACER ─── */}
      <div className="subview-spacer" />

      {/* ─── GLOBAL FELLOWSHIPS & AMBASSADOR COMMUNITIES (RESPONSIVE GAP) ─── */}
      <div className="w-full max-w-[900px] flex flex-col gap-5 xs:gap-7 sm:gap-9 md:gap-[50px]">
        {communityMemberships.map((comm, idx) => (
          <div
            key={comm.id}
            style={{ 
              animationDelay: `${idx * 0.1}s` 
            }}
            className="flex flex-col md:flex-row items-center md:items-start gap-4 sm:gap-8 bg-white rounded-2xl sm:rounded-3xl md:rounded-[2.5rem] border-2 border-stone-200 shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:border-stone-300 hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] transition-all duration-300 anim-fade-up w-full subview-card-pad"
          >
            {/* LEFT SIDE: OFFICIAL EMBLEM / BADGE CONTAINER (RESPONSIVE) */}
            <div className={`${comm.badgeContainerClass} shrink-0 relative rounded-xl sm:rounded-2xl overflow-hidden border-2 border-stone-200 group flex items-center justify-center p-2 xs:p-2.5 bg-white shadow-sm hover:border-stone-300 transition-colors mx-auto md:mx-0`}>
              <div className="relative w-full h-full transition-transform duration-500 group-hover:scale-105">
                <Image
                  src={comm.badge}
                  alt={`${comm.name} Badge`}
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
                <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 sm:gap-3">
                  <h3 className="text-xl xs:text-2xl sm:text-[1.85rem] font-bold text-[var(--text-primary)] tracking-tight leading-snug">
                    {comm.name}
                  </h3>
                  <span className="px-2.5 sm:px-3.5 py-0.5 sm:py-1 bg-indigo-50 text-indigo-700 text-[0.68rem] sm:text-[0.72rem] font-bold uppercase tracking-wider rounded-full border border-indigo-200">
                    {comm.category}
                  </span>
                </div>
                <p className="text-xs sm:text-[0.95rem] font-semibold text-stone-500 tracking-wide">
                  {comm.role} · {comm.organization} · {comm.period}
                </p>
                {comm.journeyStage && (
                  <div className="pt-0.5">
                    <span className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-0.5 sm:py-1 bg-blue-50/90 text-blue-800 border border-blue-200/80 rounded-full text-[0.72rem] sm:text-[0.78rem] font-bold">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
                      {comm.journeyStage}
                    </span>
                  </div>
                )}
              </div>

              <p className="text-sm sm:text-base md:text-[1.05rem] text-[var(--text-secondary)] leading-relaxed font-normal pt-1">
                {comm.summary}
              </p>

              <div className="flex flex-col gap-1.5 sm:gap-2 pt-2.5 sm:pt-3 mt-1 border-t border-stone-200/70">
                {comm.keyContributions.map((contrib, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs sm:text-[0.95rem] text-stone-600 font-normal">
                    <span className="text-blue-500 font-bold shrink-0 mt-0.5">✦</span>
                    <span>{contrib}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
