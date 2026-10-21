"use client";

import { useState } from "react";
import Image from "next/image";
import { profile } from "@/data/profile";
import { skillCategories } from "@/data/skills";
import { TechLogo, getLogoSlug } from "@/components/TechLogos";
import { ContactModal } from "@/components/contact/ContactModal";

interface AboutViewProps {
  onBack: () => void;
}

export function AboutView({ onBack }: AboutViewProps) {
  const [isContactOpen, setIsContactOpen] = useState(false);
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

      <div className="w-full max-w-[900px] flex flex-col items-center text-center">

        {/* ─── AVATAR (CIRCLE) ─── */}
        <div className="relative w-32 h-32 xs:w-40 xs:h-40 sm:w-48 sm:h-48 mb-6 sm:mb-8 anim-scale-in">
          <div className="absolute inset-0 rounded-full bg-white p-1.5 shadow-[0_8px_30px_rgba(0,0,0,0.12)] z-10 transition-transform duration-500 hover:scale-105 border-2 border-stone-200">
            <div className="relative w-full h-full rounded-full overflow-hidden">
              <Image
                src="/assets/profile/DP.jpeg"
                alt="Dinesh"
                fill
                sizes="(max-width: 640px) 160px, 192px"
                className="object-cover object-top"
                priority
              />
            </div>
          </div>
        </div>

        {/* ─── INTRO TEXT (NORMALIZED FONT) ─── */}
        <h1 className="text-[1.15rem] xs:text-[1.3rem] sm:text-[1.5rem] md:text-[1.75rem] text-[var(--text-primary)] leading-[1.45] sm:leading-[1.5] font-medium tracking-tight anim-fade-up delay-2 max-w-2xl px-2">
          I&apos;m Dinesh. I build systems that serve a purpose and solve real problems. I simplify complex AI architectures, craft intelligent agents, and build full-stack experiences that scale.
        </h1>

        {/* ─── EXACT 10PX SPACE BETWEEN PROFILE SUMMARY & REACH OUT BUTTON ─── */}
        <div style={{ height: "10px", minHeight: "10px", width: "100%", flexShrink: 0 }} aria-hidden="true" />

        {/* ─── REACH OUT BUTTON (MATCHING HOMEPAGE RESUME BUTTON EXACTLY) ─── */}
        <button
          onClick={() => setIsContactOpen(true)}
          className="inline-flex items-center justify-center min-w-[144px] h-[38px] px-8 bg-[#0066FF] hover:bg-blue-600 active:scale-95 text-white text-[15px] font-semibold rounded-full shadow-[0_8px_22px_rgba(0,102,255,0.34)] hover:-translate-y-0.5 transition-all anim-fade-up cursor-pointer select-none"
        >
          <span>Reach out</span>
          <svg className="w-3.5 h-3.5 ml-1.5 stroke-[2.5]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
            <line x1="7" y1="17" x2="17" y2="7"></line>
            <polyline points="7 7 17 7 17 17"></polyline>
          </svg>
        </button>
      </div>

      {/* ─── RESPONSIVE SPACER ─── */}
      <div className="subview-spacer" />

      {/* ─── A LITTLE ABOUT MY JOURNEY (ABOVE SKILLS) ─── */}
      <div className="w-full max-w-[900px] anim-fade-up">
        <h2 className="text-left font-hand text-[1.85rem] xs:text-[2.2rem] sm:text-[2.6rem] md:text-[2.85rem] text-[var(--text-primary)] mb-4 sm:mb-6 -rotate-1 px-1">
          A little about my journey
        </h2>

        {/* 3 SEPARATE SQUARE/CARD BOXES (BORDERLESS WITH CLEAN PADDING & SOFT SHADOW) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 xs:gap-5 sm:gap-6 md:gap-6">
          {/* Card 1: Student & AI/ML Builder */}
          <div className="bg-white rounded-2xl sm:rounded-3xl shadow-[0_4px_20px_rgba(0,0,0,0.06)] hover:shadow-[0_12px_36px_rgba(0,0,0,0.1)] hover:-translate-y-1 transition-all duration-300 flex flex-col p-7 sm:p-8 h-full text-left">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#F3F0FF] flex items-center justify-center mb-4 sm:mb-5 shrink-0 shadow-xs">
              <svg className="w-6 h-6 sm:w-7 sm:h-7 text-[#7C3AED]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 3L1 9L12 15L21 10.09V17H23V9M5 13.18V17.18C5 19.94 8.13 22 12 22C15.87 22 19 19.94 19 17.18V13.18L12 17L5 13.18Z" />
              </svg>
            </div>
            <h3 className="font-bold text-[17px] sm:text-[18px] text-[#1C1917] tracking-tight mb-2.5 leading-snug">
              Student &amp; AI/ML Builder
            </h3>
            <p className="text-stone-600 text-[13.5px] sm:text-[14px] leading-relaxed font-normal">
              Pursuing my academic journey with a strong focus on AI/ML and full-stack development.
            </p>
          </div>

          {/* Card 2: Google Student Ambassador '26 */}
          <div className="bg-white rounded-2xl sm:rounded-3xl shadow-[0_4px_20px_rgba(0,0,0,0.06)] hover:shadow-[0_12px_36px_rgba(0,0,0,0.1)] hover:-translate-y-1 transition-all duration-300 flex flex-col p-7 sm:p-8 h-full text-left">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#FDF2F8] flex items-center justify-center mb-4 sm:mb-5 shrink-0 shadow-xs">
              <svg className="w-6 h-6 sm:w-7 sm:h-7 text-[#DB2777]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
              </svg>
            </div>
            <h3 className="font-bold text-[17px] sm:text-[18px] text-[#1C1917] tracking-tight mb-2.5 leading-snug">
              Google Student Ambassador &apos;26
            </h3>
            <p className="text-stone-600 text-[13.5px] sm:text-[14px] leading-relaxed font-normal">
              Building and supporting tech communities, organizing events, and helping peers grow.
            </p>
          </div>

          {/* Card 3: Internships & Open Source */}
          <div className="bg-white rounded-2xl sm:rounded-3xl shadow-[0_4px_20px_rgba(0,0,0,0.06)] hover:shadow-[0_12px_36px_rgba(0,0,0,0.1)] hover:-translate-y-1 transition-all duration-300 flex flex-col p-7 sm:p-8 h-full text-left">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#ECFDF5] flex items-center justify-center mb-4 sm:mb-5 shrink-0 shadow-xs">
              <svg className="w-6 h-6 sm:w-7 sm:h-7 text-[#059669]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z" />
              </svg>
            </div>
            <h3 className="font-bold text-[17px] sm:text-[18px] text-[#1C1917] tracking-tight mb-2.5 leading-snug">
              Internships &amp; Open Source
            </h3>
            <p className="text-stone-600 text-[13.5px] sm:text-[14px] leading-relaxed font-normal">
              Hands-on experience through internships, contributions, and real-world projects.
            </p>
          </div>
        </div>
      </div>

      {/* ─── RESPONSIVE SPACER ─── */}
      <div className="subview-spacer" />

      {/* ─── WHAT I WORK WITH (SKILLS) ─── */}
      <div className="w-full max-w-[900px] anim-fade-up">
        <h2 className="text-center font-hand text-[2rem] xs:text-[2.5rem] sm:text-[3.5rem] text-[var(--text-primary)] mb-6 sm:mb-8 -rotate-1">
          What I work with
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 xs:gap-6 sm:gap-8 md:gap-[50px]">
          {skillCategories.map((cat) => (
            <div
              key={cat.name}
              className="bg-white rounded-2xl sm:rounded-3xl md:rounded-[2.5rem] border-2 border-stone-200 shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:border-stone-300 hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 flex flex-col h-full subview-card-pad"
            >
              <div className="flex items-center gap-3 mb-4 sm:mb-6">
                <span className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-stone-100 border border-stone-200 flex items-center justify-center text-base sm:text-lg shrink-0">{cat.icon}</span>
                <h3 className="font-bold text-base sm:text-lg md:text-[1.2rem] text-[var(--text-primary)] tracking-tight">{cat.name}</h3>
              </div>
              <div className="flex flex-wrap gap-1.5 xs:gap-2 mt-auto">
                {cat.skills.map((skill) => (
                  <span
                    key={skill.name}
                    className="flex items-center gap-1.5 xs:gap-2 px-2.5 xs:px-3.5 py-1.5 xs:py-2 bg-stone-50 border border-stone-200 rounded-lg xs:rounded-xl text-xs xs:text-sm font-semibold text-[var(--text-secondary)] hover:bg-stone-100 transition-colors cursor-default shadow-sm"
                  >
                    <TechLogo slug={getLogoSlug(skill.name) || skill.name} size={15} />
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ─── RESPONSIVE SPACER ─── */}
      <div className="subview-spacer" />

      {/* ─── WHAT I'M EXPLORING NOW (AFTER SKILLS) ─── */}
      <div className="w-full max-w-[900px] anim-fade-up">
        <h2 className="text-left font-hand text-[1.85rem] xs:text-[2.2rem] sm:text-[2.6rem] md:text-[2.85rem] text-[var(--text-primary)] mb-4 sm:mb-6 -rotate-1 px-1">
          What I&apos;m exploring now
        </h2>

        <div className="bg-[#F0F7FF] rounded-2xl sm:rounded-3xl shadow-[0_4px_24px_rgba(0,102,255,0.06)] hover:shadow-[0_12px_36px_rgba(0,102,255,0.1)] transition-all duration-300 p-6 xs:p-7 sm:p-8 md:p-9 flex flex-col sm:flex-row items-start sm:items-center gap-0 sm:gap-6 md:gap-7">
          <div className="hidden sm:flex w-16 h-16 rounded-full bg-[#DBEAFE] items-center justify-center shrink-0 shadow-xs">
            <svg className="w-7 h-7 sm:w-8 sm:h-8 text-[#0066FF]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <circle cx="12" cy="12" r="6" />
              <circle cx="12" cy="12" r="2" fill="#0066FF" />
              <line x1="12" y1="2" x2="12" y2="5" />
              <line x1="12" y1="19" x2="12" y2="22" />
              <line x1="2" y1="12" x2="5" y2="12" />
              <line x1="19" y1="12" x2="22" y2="12" />
            </svg>
          </div>
          <p className="flex-1 min-w-0 text-stone-700 text-[14px] xs:text-[14.5px] sm:text-[15.5px] md:text-[16px] leading-relaxed font-normal text-left">
            I&apos;m currently exploring more advanced AI agents, evaluation and safety, full-stack AI products, and scalable cloud infrastructure. I love working on ideas that combine AI with real user impact and I&apos;m always eager to learn, build, and collaborate on meaningful projects.
          </p>
        </div>
      </div>

      {/* ─── RESPONSIVE SPACER ─── */}
      <div className="subview-spacer" />

      {/* ─── LET'S CONNECT CARD ─── */}
      <div className="w-full max-w-[900px] mb-12 sm:mb-16 anim-fade-up flex flex-col items-center">
        <div
          className="bg-white rounded-2xl sm:rounded-3xl md:rounded-[2.5rem] text-center shadow-[0_20px_60px_-15px_rgba(0,0,0,0.08)] border-2 border-stone-200 flex flex-col items-center justify-center w-full max-w-[700px] subview-card-pad"
        >
          <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto bg-blue-50 rounded-xl sm:rounded-2xl flex items-center justify-center text-2xl sm:text-3xl mb-4 sm:mb-6 border border-blue-100">
            📅
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)] tracking-tight mb-3 sm:mb-4">
            Let&apos;s connect
          </h2>
          <p className="text-[var(--text-secondary)] text-sm sm:text-base md:text-lg leading-relaxed font-normal mb-6 sm:mb-8 max-w-md mx-auto">
            I&apos;m always open to discussing new ideas, AI architectures, or full-stack roles. Reach out below to start the convo.
          </p>
          <button
            onClick={() => setIsContactOpen(true)}
            className="inline-flex items-center justify-center min-w-[144px] h-[38px] px-8 bg-[#0066FF] hover:bg-blue-600 active:scale-95 text-white text-[15px] font-semibold rounded-full shadow-[0_8px_22px_rgba(0,102,255,0.34)] hover:-translate-y-0.5 transition-all cursor-pointer select-none"
          >
            <span>Reach out</span>
            <svg className="w-3.5 h-3.5 ml-1.5 stroke-[2.5]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
              <line x1="7" y1="17" x2="17" y2="7"></line>
              <polyline points="7 7 17 7 17 17"></polyline>
            </svg>
          </button>
        </div>

        <div className="text-center mt-6 sm:mt-10 text-xs sm:text-sm md:text-base text-[var(--text-secondary)] font-medium">
          <p>I&apos;m located in India timezone (IST).</p>
          <p>I&apos;ll get back to you as soon as I can.</p>
        </div>
      </div>

      {/* ─── SIGNATURE ─── */}
      <div className="w-full text-center pb-16 sm:pb-20 anim-fade-up delay-1">
        <p className="font-hand text-[2rem] sm:text-[2.5rem] text-[var(--text-secondary)] -rotate-3">
          Cheers,<br />
          {profile.firstName} {profile.lastName}
        </p>
      </div>

      {/* ─── PROFESSIONAL CONTACT MODAL ─── */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />

    </div>
  );
}
