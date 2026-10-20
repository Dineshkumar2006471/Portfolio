"use client";

import { useState } from "react";
import { profile } from "@/data/profile";

export function SocialDots() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="fixed bottom-7 xs:bottom-8 sm:bottom-12 left-1/2 -translate-x-1/2 z-50 flex flex-col items-center pointer-events-none select-none">

      {/* ─── RESUME BUTTON ─── */}
      <div className="pointer-events-auto mb-4 xs:mb-5 sm:mb-6">
        <a
          href="/DK_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center min-w-[155px] sm:min-w-[185px] px-8 sm:px-10 py-[17px] sm:py-[21px] bg-[#0066FF] hover:bg-blue-600 active:scale-95 text-white text-base sm:text-lg font-bold rounded-full shadow-[0_8px_24px_rgba(0,102,255,0.32)] hover:-translate-y-1 transition-all cursor-pointer select-none"
        >
          Resume
        </a>
      </div>

      {/* ─── 3 DOTS (STATIC, HOVER ON DESKTOP & TAP ON MOBILE EXPANDS SOCIAL ICONS) ─── */}
      <div
        className="pointer-events-auto relative flex items-center justify-center min-h-[44px]"
        onMouseEnter={() => setExpanded(true)}
        onMouseLeave={() => setExpanded(false)}
      >
        {expanded && (
          <div 
            role="button"
            tabIndex={0}
            aria-label="Dismiss social links"
            className="fixed inset-0 z-40 pointer-events-auto cursor-default"
            onClick={() => setExpanded(false)}
            onKeyDown={(e) => { if (e.key === 'Escape' || e.key === 'Enter') setExpanded(false); }}
          />
        )}

        {expanded ? (
          <div 
            className="relative z-50 flex items-center gap-3.5 sm:gap-4 px-4 sm:px-5 py-2 sm:py-2.5 bg-white/95 backdrop-blur-md border border-stone-200 rounded-full shadow-lg transition-all anim-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            {/* LinkedIn */}
            <a
              href={profile.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Dinesh Kumar Bingi on LinkedIn"
              className="group flex items-center justify-center w-8 h-8 rounded-full bg-stone-50 hover:bg-[#0A66C2] active:scale-90 transition-all"
              title="LinkedIn"
            >
              <svg className="w-4 h-4 text-stone-500 group-hover:text-white transition-colors" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>

            {/* X (Twitter) */}
            <a
              href={profile.social.twitter}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Dinesh Kumar Bingi on X"
              className="group flex items-center justify-center w-8 h-8 rounded-full bg-stone-50 hover:bg-black active:scale-90 transition-all"
              title="X (Twitter)"
            >
              <svg className="w-3.5 h-3.5 text-stone-500 group-hover:text-white transition-colors" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>

            {/* GitHub */}
            <a
              href={profile.social.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Dinesh Kumar Bingi on GitHub"
              className="group flex items-center justify-center w-8 h-8 rounded-full bg-stone-50 hover:bg-stone-900 active:scale-90 transition-all"
              title="GitHub"
            >
              <svg className="w-4 h-4 text-stone-500 group-hover:text-white transition-colors" viewBox="0 0 24 24" fill="currentColor">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
              </svg>
            </a>
          </div>
        ) : (
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setExpanded(true);
            }}
            className="flex items-center gap-[6px] px-5 py-3 rounded-full cursor-pointer transition-all duration-300 bg-stone-100/80 hover:bg-stone-200/90 active:scale-95 border border-stone-200/60 shadow-sm"
            aria-label="Show social links"
          >
            <span className="w-[6px] h-[6px] rounded-full bg-stone-400" />
            <span className="w-[6px] h-[6px] rounded-full bg-stone-400" />
            <span className="w-[6px] h-[6px] rounded-full bg-stone-400" />
          </button>
        )}
      </div>

    </div>
  );
}
