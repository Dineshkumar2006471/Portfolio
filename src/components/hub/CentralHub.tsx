"use client";

import { useState } from "react";
import Image from "next/image";

export type DestinationId =
  | "about"
  | "projects"
  | "internships"
  | "opensource"
  | "hackathons"
  | "networking";

interface Destination {
  id: DestinationId;
  label: string;
  emoji: string;
  color: string;
  bgColor: string;
  preview: string;
}

const destinations: Destination[] = [
  { id: "about",       label: "About",       emoji: "👤", color: "#E8D5B7", bgColor: "#FFF8EE", preview: "AI Engineer & Full-Stack Builder" },
  { id: "projects",    label: "Projects",    emoji: "⭐", color: "#B7D4E8", bgColor: "#EEF6FF", preview: "7 Pinned AI & Cloud Systems" },
  { id: "internships", label: "Internships", emoji: "💼", color: "#B7E8D5", bgColor: "#EEFFF6", preview: "Unified Mentor · Bluestock · Infosys · 1M1B" },
  { id: "opensource",  label: "Open Source", emoji: "🔀", color: "#D5B7E8", bgColor: "#F6EEFF", preview: "GSSoC · SSoC · OSCI" },
  { id: "hackathons",  label: "Hackathons",  emoji: "🏆", color: "#E8D5B7", bgColor: "#FFF8EE", preview: "1st Place @ Google · 4 Grand Finales" },
  { id: "networking",  label: "Networking",  emoji: "🌐", color: "#E8B7C5", bgColor: "#FFEEF4", preview: "Google Ambassador · McKinsey Forward · Summits" },
];

interface ExplosionConfig {
  buttonLabel: string;
  stickers: {
    topLeft: { text: string; bg: string; textCol?: string; borderCol: string; rotate: string };
    topRight: { text: string; bg: string; textCol?: string; borderCol: string; rotate: string };
    bottomLeft: { text: string; bg: string; textCol?: string; borderCol: string; rotate: string };
    bottomRight: { emoji: string; bg: string; borderCol: string; rotate: string };
  };
}

const explosionConfigs: Record<DestinationId, ExplosionConfig> = {
  about: {
    buttonLabel: "Read about me",
    stickers: {
      topLeft: { text: "Deploy Agents ⚡", bg: "#4F46E5", borderCol: "#FFFFFF", rotate: "-rotate-12" },
      topRight: { text: "Can AI reason? 💭", bg: "#7C3AED", borderCol: "#FFFFFF", rotate: "rotate-[8deg]" },
      bottomLeft: { text: "Monitor nodes 💻", bg: "#FFFFFF", textCol: "#1F2937", borderCol: "#93C5FD", rotate: "rotate-6" },
      bottomRight: { emoji: "🙂", bg: "#FBBF24", borderCol: "#FFFFFF", rotate: "rotate-12" },
    },
  },
  internships: {
    buttonLabel: "Explore Internships",
    stickers: {
      topLeft: { text: "Infosys & 1M1B 🏢", bg: "#059669", borderCol: "#FFFFFF", rotate: "-rotate-12" },
      topRight: { text: "Applied AI & Green Skills 🌱", bg: "#0D9488", borderCol: "#FFFFFF", rotate: "rotate-[8deg]" },
      bottomLeft: { text: "FinTech & Full-Stack 📈", bg: "#0052FF", borderCol: "#FFFFFF", rotate: "rotate-6" },
      bottomRight: { emoji: "💼", bg: "#F59E0B", borderCol: "#FFFFFF", rotate: "rotate-12" },
    },
  },
  projects: {
    buttonLabel: "View Projects",
    stickers: {
      topLeft: { text: "7 Live Systems ⚡", bg: "#0066FF", borderCol: "#FFFFFF", rotate: "-rotate-12" },
      topRight: { text: "Autonomous Agents 🤖", bg: "#7C3AED", borderCol: "#FFFFFF", rotate: "rotate-[8deg]" },
      bottomLeft: { text: "Verified Contracts 📜", bg: "#D97706", borderCol: "#FFFFFF", rotate: "rotate-6" },
      bottomRight: { emoji: "⭐", bg: "#3B82F6", borderCol: "#FFFFFF", rotate: "rotate-12" },
    },
  },
  hackathons: {
    buttonLabel: "View Hackathons",
    stickers: {
      topLeft: { text: "1st Place @ Google 🏆", bg: "#D97706", borderCol: "#FFFFFF", rotate: "-rotate-12" },
      topRight: { text: "Grand Finale Winner 🥇", bg: "#4F46E5", borderCol: "#FFFFFF", rotate: "rotate-[8deg]" },
      bottomLeft: { text: "24h Sprints ⚡", bg: "#E11D48", borderCol: "#FFFFFF", rotate: "rotate-6" },
      bottomRight: { emoji: "🎉", bg: "#EC4899", borderCol: "#FFFFFF", rotate: "rotate-12" },
    },
  },
  opensource: {
    buttonLabel: "View Open Source",
    stickers: {
      topLeft: { text: "GSSoC '26 Contributor 🔀", bg: "#9333EA", borderCol: "#FFFFFF", rotate: "-rotate-12" },
      topRight: { text: "PRs Merged 🚀", bg: "#16A34A", borderCol: "#FFFFFF", rotate: "rotate-[8deg]" },
      bottomLeft: { text: "SSoC & OSCI 🌐", bg: "#0891B2", borderCol: "#FFFFFF", rotate: "rotate-6" },
      bottomRight: { emoji: "🐙", bg: "#1F2937", borderCol: "#FFFFFF", rotate: "rotate-12" },
    },
  },
  networking: {
    buttonLabel: "Explore Communities & Network",
    stickers: {
      topLeft: { text: "Google Ambassador '26 🌐", bg: "#4285F4", borderCol: "#FFFFFF", rotate: "-rotate-12" },
      topRight: { text: "McKinsey Forward 🚀", bg: "#0F172A", borderCol: "#FFFFFF", rotate: "rotate-[8deg]" },
      bottomLeft: { text: "Alumni Network 🌟", bg: "#0284C7", borderCol: "#FFFFFF", rotate: "rotate-6" },
      bottomRight: { emoji: "🤝", bg: "#10B981", borderCol: "#FFFFFF", rotate: "rotate-12" },
    },
  },
};

interface CentralHubProps {
  onSelectDestination: (id: DestinationId) => void;
  activeDestination: DestinationId | null;
}

export function CentralHub({ onSelectDestination }: CentralHubProps) {
  const [hoveredId, setHoveredId] = useState<DestinationId | null>(null);

  const anyHovered = hoveredId !== null;

  return (
    <div className="relative flex flex-col items-center justify-center min-h-dvh w-full px-4 xs:px-6 sm:px-8 pt-10 sm:pt-16 pb-36 sm:pb-32 select-none overflow-x-hidden">

      {/* ─── GREETING ─── */}
      <div 
        className={`flex flex-col items-center transition-all duration-500 ${
          anyHovered ? "opacity-30 blur-[3px]" : "opacity-100 blur-0"
        }`}
      >
        <h1 className="font-hand text-[1.85rem] xs:text-[2.25rem] sm:text-[3rem] md:text-[3.5rem] text-[var(--text-primary)] leading-[1.15] -rotate-2 text-center pb-2 px-2">
          Welcome to my corner<br />
          on the internet :)
        </h1>
      </div>

      {/* Responsive gap */}
      <div className="h-6 xs:h-8 sm:h-12 md:h-[50px] w-full shrink-0" />

      {/* ─── FLOATING DESTINATIONS (3-COL BALANCED GRID ON MOBILE, FLEX ON DESKTOP) ─── */}
      <div className="relative grid grid-cols-3 md:flex md:flex-wrap justify-items-center justify-center items-center gap-3 xs:gap-6 sm:gap-10 md:gap-14 max-w-4xl mx-auto z-10 w-full xs:w-auto px-2">
        {destinations.map((dest) => {
          const isHovered = hoveredId === dest.id;
          const isAbout = dest.id === "about";
          const isExploding = isHovered;
          const exp = explosionConfigs[dest.id];

          return (
            <div key={dest.id} className="relative flex flex-col items-center">
              <button
                type="button"
                onMouseEnter={() => setHoveredId(dest.id)}
                onMouseLeave={() => setHoveredId(null)}
                onClick={() => onSelectDestination(dest.id)}
                className={`
                  group relative flex flex-col items-center gap-2 xs:gap-3 sm:gap-4 cursor-pointer
                  transition-all duration-300 ease-out active:scale-95
                  focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-blue)] focus-visible:ring-offset-4 rounded-2xl
                  ${isExploding ? "md:scale-110 z-50" : ""}
                  ${!isExploding && isHovered
                    ? "md:scale-110 z-20"
                    : !isExploding && anyHovered
                    ? "opacity-30 blur-[4px] md:scale-95"
                    : "opacity-100 blur-0 scale-100"
                  }
                `}
                aria-label={`View ${dest.label}`}
              >
                {/* OBJECT */}
                {isAbout ? (
                  <div
                    className="w-16 h-16 xs:w-20 xs:h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden border-[3px] transition-all duration-300 relative shrink-0"
                    style={{
                      borderColor: "white",
                      boxShadow: isHovered
                        ? `0 12px 30px ${dest.color}80`
                        : "0 4px 12px rgba(0,0,0,0.08)",
                    }}
                  >
                    <Image
                      src="/assets/profile/DP.jpeg"
                      alt="Dinesh Kumar Bingi"
                      fill
                      className="object-cover object-top"
                      sizes="(max-width: 640px) 80px, 96px"
                      priority
                    />
                  </div>
                ) : (
                  <div
                    className="w-16 h-16 xs:w-20 xs:h-20 sm:w-24 sm:h-24 rounded-full flex items-center justify-center text-2xl xs:text-3xl sm:text-4xl transition-all duration-300 shrink-0 border-[3px] border-white"
                    style={{
                      backgroundColor: dest.bgColor,
                      boxShadow: isHovered
                        ? `0 12px 30px ${dest.color}90`
                        : "0 4px 12px rgba(0,0,0,0.06)",
                    }}
                  >
                    {dest.emoji}
                  </div>
                )}

                {/* LABEL */}
                <div className={`px-2.5 xs:px-4 py-1 xs:py-1.5 bg-stone-100/90 rounded-full border border-black/5 mt-0.5 sm:mt-1 transition-opacity ${isExploding ? "md:opacity-0" : "opacity-100"}`}>
                  <span className="text-[0.68rem] xs:text-[0.78rem] sm:text-sm font-semibold text-[var(--text-secondary)] whitespace-nowrap block">
                    {dest.label}
                  </span>
                </div>
              </button>

              {/* ─── EXPLOSION STICKERS (DESKTOP ONLY TO AVOID MOBILE OVERFLOWS) ─── */}
              {isExploding && exp && (
                <div 
                  className="hidden md:block absolute inset-0 pointer-events-none z-40"
                  onMouseEnter={() => setHoveredId(dest.id)}
                  onMouseLeave={() => setHoveredId(null)}
                >
                  {/* Top-Left Sticker */}
                  <div 
                    className={`absolute -top-10 -left-20 sm:-left-24 w-max px-4 sm:px-5 py-2 sm:py-2.5 text-xs sm:text-sm font-bold rounded-xl border-[3px] shadow-xl ${exp.stickers.topLeft.rotate} anim-scale-in flex items-center justify-center`} 
                    style={{ 
                      backgroundColor: exp.stickers.topLeft.bg,
                      borderColor: exp.stickers.topLeft.borderCol,
                      color: exp.stickers.topLeft.textCol || "#FFFFFF",
                      animationDuration: '0.4s' 
                    }}
                  >
                    {exp.stickers.topLeft.text}
                  </div>

                  {/* Top-Right Sticker */}
                  <div 
                    className={`absolute top-2 -right-24 sm:-right-28 w-max px-4 sm:px-5 py-2 sm:py-2.5 text-xs sm:text-sm font-bold rounded-xl border-[3px] shadow-xl ${exp.stickers.topRight.rotate} anim-scale-in flex items-center justify-center`} 
                    style={{ 
                      backgroundColor: exp.stickers.topRight.bg,
                      borderColor: exp.stickers.topRight.borderCol,
                      color: exp.stickers.topRight.textCol || "#FFFFFF",
                      animationDelay: '0.1s', 
                      animationDuration: '0.4s' 
                    }}
                  >
                    {exp.stickers.topRight.text}
                  </div>

                  {/* Bottom-Left Sticker */}
                  <div 
                    className={`absolute -bottom-6 -left-20 sm:-left-24 w-max px-4 sm:px-5 py-2 sm:py-2.5 text-xs sm:text-sm font-bold rounded-xl border-[3px] shadow-xl ${exp.stickers.bottomLeft.rotate} anim-scale-in flex items-center justify-center`} 
                    style={{ 
                      backgroundColor: exp.stickers.bottomLeft.bg,
                      borderColor: exp.stickers.bottomLeft.borderCol,
                      color: exp.stickers.bottomLeft.textCol || "#FFFFFF",
                      animationDelay: '0.2s', 
                      animationDuration: '0.4s' 
                    }}
                  >
                    {exp.stickers.bottomLeft.text}
                  </div>

                  {/* Bottom-Right Emoji Badge */}
                  <div 
                    className={`absolute -bottom-10 -right-6 w-12 h-12 sm:w-14 sm:h-14 border-[3px] rounded-full flex items-center justify-center text-2xl sm:text-3xl shadow-xl ${exp.stickers.bottomRight.rotate} anim-scale-in`} 
                    style={{ 
                      backgroundColor: exp.stickers.bottomRight.bg,
                      borderColor: exp.stickers.bottomRight.borderCol,
                      animationDelay: '0.3s', 
                      animationDuration: '0.4s' 
                    }}
                  >
                    {exp.stickers.bottomRight.emoji}
                  </div>
                  
                  {/* Action Button */}
                  <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-max pointer-events-auto">
                    <button 
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        onSelectDestination(dest.id);
                      }}
                      className="px-6 py-2.5 bg-[#E5E7EB] hover:bg-[#D1D5DB] text-[#1F2937] text-sm font-bold rounded-full shadow-lg transition-all anim-scale-in cursor-pointer hover:scale-105 active:scale-95"
                      style={{ animationDelay: '0.35s', animationDuration: '0.4s' }}
                    >
                      {exp.buttonLabel}
                    </button>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Responsive gap */}
      <div className="h-6 xs:h-8 sm:h-12 md:h-[50px] w-full shrink-0" />

      {/* ─── INTRO ─── */}
      <div
        className={`max-w-xl text-center transition-all duration-500 z-0 px-2 sm:px-0 ${
          anyHovered ? "opacity-30 blur-[3px]" : "opacity-100 blur-0"
        }`}
      >
        <p className="text-xs xs:text-sm sm:text-[0.95rem] text-[var(--text-secondary)] leading-relaxed font-medium">
          Hey there! I&apos;m <span className="text-[var(--text-primary)] font-bold">Dinesh</span> — an AI/ML and full-stack builder exploring agents, cloud infrastructure, and human-centric products. I love solving hard problems and occasionally collab with visionaries to bring even more ideas to life.
        </p>
      </div>

      
    </div>
  );
}
