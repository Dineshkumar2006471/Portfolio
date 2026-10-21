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

interface JourneyCardProps {
  icon: React.ReactNode;
  bg: string;
  title: string;
  description: string;
}

function JourneyCard({ icon, bg, title, description }: JourneyCardProps) {
  return (
    <div className="flex flex-col justify-start w-full text-left py-1">
      <div className="flex items-center gap-2.5 mb-2">
        <div className={`w-8 h-8 rounded-xl ${bg} flex items-center justify-center shrink-0 shadow-2xs`}>
          {icon}
        </div>
        <h3 className="font-bold text-[14px] sm:text-[15px] text-[#1C1917] tracking-tight leading-snug">
          {title}
        </h3>
      </div>
      <p className="text-stone-600 text-[12.5px] sm:text-[13px] leading-relaxed font-normal">
        {description}
      </p>
    </div>
  );
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
        <h2 className="text-center font-hand text-[1.85rem] xs:text-[2.2rem] sm:text-[2.6rem] md:text-[2.85rem] text-[var(--text-primary)] mb-4 sm:mb-6 -rotate-1 px-1">
          A little about my journey
        </h2>

        {/* 3 INDEPENDENT JOURNEY ITEMS (OPEN BORDERLESS LAYOUT) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 w-full">
          <JourneyCard
            icon={
              <svg className="w-4 h-4 text-[#7C3AED]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 3L1 9L12 15L21 10.09V17H23V9M5 13.18V17.18C5 19.94 8.13 22 12 22C15.87 22 19 19.94 19 17.18V13.18L12 17L5 13.18Z" />
              </svg>
            }
            bg="bg-[#F3F0FF]"
            title="Student & AI/ML Builder"
            description="Pursuing my academic journey with a strong focus on AI/ML and full-stack development."
          />
          <JourneyCard
            icon={
              <svg className="w-4 h-4 text-[#DB2777]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
              </svg>
            }
            bg="bg-[#FDF2F8]"
            title="Google Student Ambassador '26"
            description="Building and supporting tech communities, organizing events, and helping peers grow."
          />
          <JourneyCard
            icon={
              <svg className="w-4 h-4 text-[#059669]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z" />
              </svg>
            }
            bg="bg-[#ECFDF5]"
            title="Internships & Open Source"
            description="Hands-on experience through internships, contributions, and real-world projects."
          />
        </div>
      </div>

      {/* ─── RESPONSIVE SPACER ─── */}
      <div className="subview-spacer" />

      {/* ─── WHAT I WORK WITH (SKILLS) ─── */}
      <div className="w-full max-w-[900px] anim-fade-up">
        <h2 className="text-center font-hand text-[2rem] xs:text-[2.5rem] sm:text-[3.5rem] text-[var(--text-primary)] mb-6 sm:mb-8 -rotate-1">
          What I work with
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-8 md:gap-[50px]">
          {skillCategories.map((cat) => (
            <div
              key={cat.name}
              className="bg-white rounded-2xl sm:rounded-3xl md:rounded-[2.5rem] border-2 border-stone-200 shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:border-stone-300 hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 flex flex-col h-full subview-card-pad"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-stone-100 border border-stone-200 flex items-center justify-center text-base sm:text-lg shrink-0">{cat.icon}</span>
                <h3 className="font-bold text-base sm:text-lg md:text-[1.2rem] text-[var(--text-primary)] tracking-tight">{cat.name}</h3>
              </div>
              <div className="flex flex-wrap gap-2 mt-auto w-full">
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

        <div className="bg-[#F0F7FF] rounded-xl sm:rounded-2xl shadow-[0_4px_20px_rgba(0,102,255,0.05)] hover:shadow-[0_12px_36px_rgba(0,102,255,0.08)] transition-all duration-300 min-h-[70px] px-4.5 py-3.5 sm:px-6 sm:py-3.5 flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-5 w-full">
          <div className="hidden sm:flex w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#DBEAFE] items-center justify-center shrink-0 shadow-2xs">
            <svg className="w-5 h-5 sm:w-5.5 sm:h-5.5 text-[#0066FF]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <circle cx="12" cy="12" r="6" />
              <circle cx="12" cy="12" r="2" fill="#0066FF" />
              <line x1="12" y1="2" x2="12" y2="5" />
              <line x1="12" y1="19" x2="12" y2="22" />
              <line x1="2" y1="12" x2="5" y2="12" />
              <line x1="19" y1="12" x2="22" y2="12" />
            </svg>
          </div>
          <p className="flex-1 min-w-0 text-stone-700 text-[12.5px] xs:text-[13px] sm:text-[13.5px] leading-relaxed font-normal text-left">
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
