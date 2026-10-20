"use client";

import Image from "next/image";
import { pinnedProjects } from "@/data/projects";

interface ViewProps {
  onBack: () => void;
}

export function ProjectsView({ onBack }: ViewProps) {
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
          Featured Work
        </h1>

        <div 
          className="relative overflow-hidden bg-stone-50/80 backdrop-blur-md rounded-2xl sm:rounded-3xl md:rounded-[2.5rem] shadow-[0_8px_30px_rgba(0,0,0,0.04)] border-2 border-stone-200 w-full flex flex-col items-center justify-center text-center subview-card-pad"
        >
          <p 
            className="relative z-10 text-center text-sm xs:text-base sm:text-lg md:text-xl text-[var(--text-secondary)] leading-relaxed font-medium max-w-3xl mx-auto"
          >
            I don&apos;t just build features; I architect <span className="font-bold text-[var(--text-primary)]">end-to-end intelligent systems</span>. Here is a curated selection of autonomous agents, cloud applications, and full-stack platforms I&apos;ve engineered from scratch.
          </p>
        </div>
      </div>
      
      {/* ─── RESPONSIVE SPACER ─── */}
      <div className="subview-spacer" />

      {/* ─── PROJECTS LIST (RESPONSIVE GAP BETWEEN BOXES) ─── */}
      <div className="w-full max-w-[900px] flex flex-col gap-5 xs:gap-7 sm:gap-9 md:gap-[50px]">
        {pinnedProjects.map((project, idx) => (
          <div
            key={project.id}
            style={{ 
              animationDelay: `${idx * 0.1}s` 
            }}
            className="flex flex-col md:flex-row items-stretch md:items-start gap-5 sm:gap-8 bg-white rounded-2xl sm:rounded-3xl md:rounded-[2.5rem] border-2 border-stone-200 shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:border-stone-300 hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] transition-all duration-300 anim-fade-up w-full subview-card-pad"
          >
            {/* LEFT SIDE: IMAGE */}
            <div className="w-full md:w-[280px] h-[180px] xs:h-[200px] sm:h-[220px] md:h-[180px] shrink-0 relative rounded-xl sm:rounded-2xl overflow-hidden border-2 border-stone-200 group shadow-inner">
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(max-width: 768px) 100vw, 280px"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                priority={idx < 2}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            {/* RIGHT SIDE: CONTENT */}
            <div className="flex flex-col flex-1 min-w-0 w-full gap-3 sm:gap-4 text-left">

              {/* Header Info */}
              <div className="flex flex-col gap-1 sm:gap-1.5">
                <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                  <h3 className="text-xl xs:text-2xl sm:text-[1.85rem] font-bold text-[var(--text-primary)] tracking-tight leading-snug">
                    {project.title}
                  </h3>
                  <span className="px-2.5 sm:px-3.5 py-0.5 sm:py-1 bg-blue-50 text-blue-700 text-[0.68rem] sm:text-[0.72rem] font-bold uppercase tracking-wider rounded-full border border-blue-200">
                    {project.category}
                  </span>
                </div>
                <p className="text-xs sm:text-[0.95rem] font-semibold text-stone-500 tracking-wide">
                  {project.role} · {project.year}
                </p>
              </div>

              {/* Description */}
              <p className="text-sm sm:text-base md:text-[1.05rem] text-[var(--text-secondary)] leading-relaxed font-normal">
                {project.whatItIs}
              </p>

              {/* LINKS (FULL WIDTH / CLEAN ON MOBILE) */}
              <div className="flex flex-col xs:flex-row items-stretch xs:items-center gap-2.5 sm:gap-4 pt-1 sm:pt-2 w-full xs:w-auto">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-full xs:w-auto px-5 sm:px-6 py-2.5 sm:py-3 bg-stone-100 hover:bg-stone-200 active:scale-95 text-stone-800 text-xs sm:text-sm font-bold rounded-full transition-all border border-stone-200 shadow-sm"
                  >
                    <svg className="w-4 h-4 mr-2 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                    </svg>
                    GitHub Source
                  </a>
                )}

                {project.liveUrl && project.liveUrl !== "#" && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-full xs:w-auto px-5 sm:px-7 py-2.5 sm:py-3 bg-[#0066FF] hover:bg-blue-600 active:scale-95 text-white text-xs sm:text-sm font-bold rounded-full shadow-[0_4px_16px_rgba(0,102,255,0.25)] transition-all"
                  >
                    Live Deployment
                  </a>
                )}
              </div>

              {/* STACK / TOOLS */}
              <div className="flex flex-wrap gap-1.5 xs:gap-2.5 pt-3 sm:pt-4 mt-1 border-t border-stone-200/70">
                {project.stack.map((tech) => (
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
