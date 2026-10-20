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
        <h1 className="text-[1.15rem] xs:text-[1.3rem] sm:text-[1.5rem] md:text-[1.75rem] text-[var(--text-primary)] leading-[1.45] sm:leading-[1.5] font-medium tracking-tight mb-6 sm:mb-8 anim-fade-up delay-2 max-w-2xl px-2">
          I&apos;m Dinesh. I build systems that serve a purpose and solve real problems. I simplify complex AI architectures, craft intelligent agents, and build full-stack experiences that scale.
        </h1>

        <button 
          onClick={() => setIsContactOpen(true)}
          className="inline-flex items-center justify-center min-w-[155px] sm:min-w-[185px] px-8 sm:px-10 py-[16px] sm:py-[20px] bg-[#0066FF] hover:bg-blue-600 active:scale-95 text-white text-base sm:text-lg font-bold rounded-full shadow-[0_8px_24px_rgba(0,102,255,0.30)] hover:-translate-y-1 transition-all anim-fade-up delay-3 cursor-pointer"
        >
          Reach out
        </button>
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
            className="inline-flex items-center justify-center min-w-[155px] sm:min-w-[185px] px-8 sm:px-10 py-[16px] sm:py-[20px] bg-[#0066FF] hover:bg-blue-600 active:scale-95 text-white text-base sm:text-lg font-bold rounded-full shadow-[0_8px_24px_rgba(0,102,255,0.30)] hover:-translate-y-1 transition-all cursor-pointer"
          >
            Reach out
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
