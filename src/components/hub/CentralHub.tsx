"use client";

import { useState } from "react";
import Image from "next/image";
import { profile } from "@/data/profile";

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
  iconSrc?: string;
  color: string;
  bgColor: string;
  preview: string;
}

const destinations: Destination[] = [
  { id: "about", label: "About", emoji: "👤", color: "#E8D5B7", bgColor: "#FFF8EE", preview: "AI Engineer & Full-Stack Builder" },
  { id: "projects", label: "Projects", emoji: "⭐", iconSrc: "/assets/icons/star_3d.png", color: "#B7D4E8", bgColor: "#EAF3FC", preview: "7 Pinned AI & Cloud Systems" },
  { id: "internships", label: "Internships", emoji: "💼", iconSrc: "/assets/icons/briefcase_3d.png", color: "#B7E8D5", bgColor: "#EDF8F2", preview: "Unified Mentor · Bluestock · Infosys · 1M1B" },
  { id: "opensource", label: "Open Source", emoji: "🔀", iconSrc: "/assets/icons/shuffle_3d.png", color: "#D5B7E8", bgColor: "#F0EEFC", preview: "GSSoC · SSoC · OSCI" },
  { id: "hackathons", label: "Hackathons", emoji: "🏆", iconSrc: "/assets/icons/trophy_3d.png", color: "#E8D5B7", bgColor: "#FDF5EA", preview: "1st Place @ Google · 4 Grand Finales" },
  { id: "networking", label: "Networking", emoji: "🌐", iconSrc: "/assets/icons/globe_3d.png", color: "#E8B7C5", bgColor: "#FCEEF3", preview: "Google Ambassador · McKinsey Forward · Summits" },
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
    <div className="relative min-h-[100svh] w-full flex flex-col items-center justify-center px-4 py-8 sm:py-12 select-none overflow-x-hidden">

      {/* ─── GREETING ─── */}
      <div
        className={`flex flex-col items-center transition-all duration-300 ${
          anyHovered ? "opacity-30 blur-[3px]" : "opacity-100 blur-0"
        }`}
      >
        <h1 className="font-hand text-[26px] xs:text-[28px] sm:text-[3.25rem] text-[var(--text-primary)] leading-[1.2] -rotate-1 text-center pb-1 px-2">
          Welcome to my corner<br />
          on the internet :)
        </h1>
      </div>

      {/* Gap between heading & destinations */}
      <div className="h-6 xs:h-7 sm:h-9 md:h-11 w-full shrink-0" />

      {/* ─── 6 DESTINATIONS (3x2 BALANCED GRID ON MOBILE, HORIZONTAL ROW ON DESKTOP) ─── */}
      <div className="relative grid grid-cols-3 md:flex md:flex-wrap justify-items-center justify-center items-center gap-x-3 xs:gap-x-6 sm:gap-x-10 gap-y-4 xs:gap-y-5 md:gap-12 lg:gap-14 max-w-[340px] xs:max-w-md md:max-w-4xl mx-auto z-10 w-full px-2">
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
                  group relative flex flex-col items-center cursor-pointer
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
                {/* CIRCLE ICON */}
                {isAbout ? (
                  <div
                    className="w-[62px] h-[62px] xs:w-20 xs:h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden border-[3px] border-white transition-all duration-300 relative shrink-0"
                    style={{
                      boxShadow: isHovered
                        ? `0 12px 28px ${dest.color}90`
                        : "0 4px 14px rgba(0,0,0,0.08)",
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
                    className="w-[62px] h-[62px] xs:w-20 xs:h-20 sm:w-24 sm:h-24 rounded-full flex items-center justify-center text-2xl xs:text-3xl sm:text-4xl transition-all duration-300 shrink-0 border-[3px] border-white"
                    style={{
                      backgroundColor: dest.bgColor,
                      boxShadow: isHovered
                        ? `0 12px 28px ${dest.color}90`
                        : "0 4px 14px rgba(0,0,0,0.06)",
                    }}
                  >
                    {dest.iconSrc ? (
                      <div className="relative w-8 h-8 xs:w-11 xs:h-11 sm:w-13 sm:h-13">
                        <Image
                          src={dest.iconSrc}
                          alt={dest.label}
                          fill
                          className="object-contain"
                        />
                      </div>
                    ) : (
                      dest.emoji
                    )}
                  </div>
                )}

                {/* LABEL */}
                <div className={`mt-1.5 transition-opacity ${isExploding ? "md:opacity-0" : "opacity-100"}`}>
                  <span className="text-[11.5px] xs:text-xs sm:text-sm font-medium text-stone-700 whitespace-nowrap block text-center">
                    {dest.label}
                  </span>
                </div>
              </button>

              {/* ─── EXPLOSION STICKERS (DESKTOP ONLY) ─── */}
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

      {/* Gap between destinations & bio — measured ~38px in reference */}
      <div className="h-9 xs:h-10 sm:h-11 w-full shrink-0" />

      {/* ─── BIO TEXT ─── */}
      <div
        className={`max-w-[316px] xs:max-w-[380px] sm:max-w-xl text-center transition-all duration-300 z-0 px-1 ${
          anyHovered ? "opacity-30 blur-[3px]" : "opacity-100 blur-0"
        }`}
      >
        <p className="text-[13px] xs:text-[13.5px] sm:text-[15px] text-stone-600 leading-[1.5] font-normal">
          Hey there! I&apos;m <span className="text-stone-900 font-bold">Dinesh</span> — an AI/ML and full-stack builder exploring agents, cloud infrastructure, and human-centric products. I love solving hard problems and occasionally collab with visionaries to bring even more ideas to life.
        </p>
      </div>

      {/* Gap between bio & resume — measured ~50px in reference */}
      <div className="h-11 xs:h-12 sm:h-13 w-full shrink-0" />

      {/* ─── RESUME BUTTON ─── */}
      <div
        className={`transition-all duration-300 z-10 ${
          anyHovered ? "opacity-30 blur-[3px]" : "opacity-100 blur-0"
        }`}
      >
        <a
          href="/DK_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center min-w-[144px] h-[36px] px-7 bg-[#0066FF] hover:bg-blue-600 active:scale-95 text-white text-[15px] font-semibold rounded-full shadow-[0_8px_22px_rgba(0,102,255,0.34)] hover:-translate-y-0.5 transition-all cursor-pointer select-none"
        >
          <span>Resume</span>
          <svg className="w-3.5 h-3.5 ml-1.5 stroke-[2.5]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
            <line x1="7" y1="17" x2="17" y2="7"></line>
            <polyline points="7 7 17 7 17 17"></polyline>
          </svg>
        </a>
      </div>

      {/* Gap between resume & social icons — measured ~46px in reference */}
      <div className="h-11 xs:h-11 sm:h-12 w-full shrink-0" />

      {/* ─── SOCIAL ICONS PILL (OFFICIAL BRAND COLORS & CLEAN DIVIDERS) ─── */}
      <div
        className={`transition-all duration-300 z-10 ${
          anyHovered ? "opacity-30 blur-[3px]" : "opacity-100 blur-0"
        }`}
      >
        <div className="w-[142px] h-[38px] bg-white rounded-full border border-stone-200/80 shadow-[0_2px_10px_rgba(0,0,0,0.05)] flex items-center justify-evenly px-2 transition-all">
          {/* LinkedIn (Official Blue) */}
          <a
            href={profile.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="flex items-center justify-center p-1.5 text-[#0A66C2] active:scale-90 transition-transform"
            title="LinkedIn"
          >
            <svg className="w-4 h-4 shrink-0 fill-[#0A66C2]" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>

          {/* Divider */}
          <span className="h-4 border-r border-stone-200 shrink-0" aria-hidden="true" />

          {/* X (Twitter) (Official Black) */}
          <a
            href={profile.social.twitter}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X (Twitter)"
            className="flex items-center justify-center p-1.5 text-black active:scale-90 transition-transform"
            title="X (Twitter)"
          >
            <svg className="w-3.5 h-3.5 shrink-0 fill-black" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>

          {/* Divider */}
          <span className="h-4 border-r border-stone-200 shrink-0" aria-hidden="true" />

          {/* GitHub (Official Dark) */}
          <a
            href={profile.social.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="flex items-center justify-center p-1.5 text-[#181717] active:scale-90 transition-transform"
            title="GitHub"
          >
            <svg className="w-4 h-4 shrink-0 fill-[#181717]" viewBox="0 0 24 24">
              <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
            </svg>
          </a>
        </div>
      </div>

    </div>
  );
}
