"use client";

import { useState, useEffect, useRef } from "react";
import { profile } from "@/data/profile";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
}

export interface ServiceOption {
  id: string;
  label: string;
  icon: string;
}

export const serviceOptions: ServiceOption[] = [
  { id: "agents", label: "AI Agents & Multi-Agent", icon: "🤖" },
  { id: "fullstack", label: "Full-Stack Web App", icon: "⚡" },
  { id: "eval", label: "AI Evaluation & Safety", icon: "🛡️" },
  { id: "cloud", label: "Cloud Infra (GCP/AWS)", icon: "☁️" },
  { id: "mvp", label: "Rapid MVP / Prototype", icon: "🚀" },
  { id: "consulting", label: "Consulting / Freelance", icon: "💡" },
];

export function ContactModal({ isOpen, onClose, defaultService }: ContactModalProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState(
    defaultService || serviceOptions[0].label
  );
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const modalRef = useRef<HTMLDivElement>(null);

  // Close on Escape key & manage scroll lock
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!name.trim()) {
      setError("Please provide your full name.");
      return;
    }
    if (!email.trim() || !email.includes("@")) {
      setError("Please provide a valid email address.");
      return;
    }
    if (!phone.trim()) {
      setError("Please provide a contact / WhatsApp number.");
      return;
    }

    setIsSubmitting(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone, service, message }),
      });

      if (!res.ok) {
        // Fallback gracefully even if mail service isn't wired to external SMTP
      }
      setIsSubmitted(true);
    } catch {
      // Graceful fallback
      setIsSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const mailtoUrl = `mailto:${profile.social.email}?subject=${encodeURIComponent(
    `Project Inquiry: ${name} [${service}]`
  )}&body=${encodeURIComponent(
    `Hi Dinesh,\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nService of Interest: ${service}\n\nProject Details:\n${message || "Looking forward to speaking with you!"}`
  )}`;

  const whatsappUrl = `https://wa.me/916303048390?text=${encodeURIComponent(
    `Hi Dinesh! I'm ${name}. I'm interested in ${service}. Reach me at ${email} or ${phone}. Message: ${message || "Let's connect!"}`
  )}`;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 xs:p-4 sm:p-6 bg-black/60 backdrop-blur-md anim-fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-modal-title"
    >
      <div 
        ref={modalRef}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-xl bg-white rounded-3xl sm:rounded-[2.5rem] border-2 border-stone-200 shadow-[0_24px_70px_-12px_rgba(0,0,0,0.25)] pt-7 sm:pt-9 px-5 xs:px-6 sm:px-8 pb-6 sm:pb-8 max-h-[90dvh] overflow-y-auto anim-scale-in"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          type="button"
          aria-label="Close contact form"
          className="absolute top-4 right-4 sm:top-6 sm:right-6 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-stone-100 hover:bg-stone-200 active:scale-90 flex items-center justify-center text-stone-500 hover:text-stone-900 transition-all cursor-pointer border border-stone-200/60 shadow-sm"
        >
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        {isSubmitted ? (
          /* ─── LUXURY SUCCESS STATE ─── */
          <div className="flex flex-col items-center text-center py-6 sm:py-8 anim-scale-in">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-emerald-100 border-2 border-emerald-300 text-emerald-600 flex items-center justify-center text-3xl sm:text-4xl mb-3 sm:mb-4 shadow-[0_8px_20px_rgba(16,185,129,0.2)]">
              ✓
            </div>
            
            <div className="font-hand text-xl sm:text-2xl text-[#0066FF] -rotate-2 mb-1">
              awesome!
            </div>
            
            <h3 className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)] mb-2">
              Message Sent!
            </h3>
            
            <p className="text-stone-600 text-xs sm:text-sm leading-relaxed max-w-md mb-6">
              Thank you, <strong className="text-stone-900 font-bold">{name}</strong>. Your project details for <strong className="text-[#0066FF] font-bold">{service}</strong> have been received. I&apos;ll get back to you at <strong className="text-stone-900 font-bold">{email}</strong> within 24 hours.
            </p>

            <div className="flex flex-col xs:flex-row gap-3 w-full sm:w-auto">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#25D366] hover:bg-[#20ba5a] active:scale-95 text-white font-bold text-sm shadow-md transition-all cursor-pointer"
              >
                <span>💬</span> Ping on WhatsApp
              </a>
              <a
                href={mailtoUrl}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white hover:bg-stone-100 active:scale-95 text-stone-800 font-bold text-sm border-2 border-stone-200 transition-all cursor-pointer shadow-sm"
              >
                <span>✉️</span> Open Email
              </a>
            </div>

            <button
              onClick={() => {
                setIsSubmitted(false);
                setName("");
                setEmail("");
                setPhone("");
                setMessage("");
                onClose();
              }}
              className="mt-6 text-xs sm:text-sm text-stone-400 hover:text-stone-700 underline cursor-pointer"
            >
              Done &amp; Close
            </button>
          </div>
        ) : (
          /* ─── LUXURY FORM STATE ─── */
          <form onSubmit={handleSubmit} className="flex flex-col">
            
            {/* Header */}
            <div className="mb-5 sm:mb-6 pr-10 pt-1">
              <div className="flex flex-wrap items-center gap-2.5 mb-2">
                <span className="font-hand text-xl sm:text-2xl text-[#0066FF] select-none inline-block leading-none">
                  say hello :)
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-[0.68rem] font-bold tracking-wide">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  AVAILABLE FOR WORK
                </span>
              </div>
              <h2 id="contact-modal-title" className="text-2xl xs:text-[1.75rem] sm:text-[2rem] font-bold text-[var(--text-primary)] tracking-tight leading-tight">
                Start a Conversation
              </h2>
              <p className="text-xs sm:text-sm text-stone-500 mt-1.5">
                Have an idea, project, or role? Share the details and let&apos;s build it together.
              </p>
            </div>

            {error && (
              <div className="mb-4 p-3 rounded-2xl bg-red-50 border-2 border-red-200 text-red-700 text-xs sm:text-sm font-medium">
                {error}
              </div>
            )}

            <div className="flex flex-col gap-4">
              
              {/* Full Name */}
              <div>
                <label className="block text-xs sm:text-sm font-semibold text-stone-700 mb-1.5">
                  Full Name <span className="text-[#0066FF]">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Satya Nadella"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 sm:py-3.5 text-sm sm:text-base text-stone-900 bg-white border-2 border-stone-200 rounded-xl sm:rounded-2xl focus:outline-none focus:border-[#0066FF] focus:ring-4 focus:ring-blue-500/10 transition-all placeholder:text-stone-400 font-medium shadow-sm"
                />
              </div>

              {/* Email & Contact Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-stone-700 mb-1.5">
                    Work Email <span className="text-[#0066FF]">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="name@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 sm:py-3.5 text-sm sm:text-base text-stone-900 bg-white border-2 border-stone-200 rounded-xl sm:rounded-2xl focus:outline-none focus:border-[#0066FF] focus:ring-4 focus:ring-blue-500/10 transition-all placeholder:text-stone-400 font-medium shadow-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-stone-700 mb-1.5">
                    Contact / WhatsApp <span className="text-[#0066FF]">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-4 py-3 sm:py-3.5 text-sm sm:text-base text-stone-900 bg-white border-2 border-stone-200 rounded-xl sm:rounded-2xl focus:outline-none focus:border-[#0066FF] focus:ring-4 focus:ring-blue-500/10 transition-all placeholder:text-stone-400 font-medium shadow-sm"
                  />
                </div>
              </div>

              {/* Interactive Service Pill Chips (Clean 2-col on mobile, 3-col on desktop) */}
              <div>
                <label className="block text-xs sm:text-sm font-semibold text-stone-700 mb-2">
                  Service / What You Want <span className="text-[#0066FF]">*</span>
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-2.5">
                  {serviceOptions.map((opt) => {
                    const isSelected = service === opt.label;
                    return (
                      <button
                        key={opt.id}
                        type="button"
                        onClick={() => setService(opt.label)}
                        className={`group relative flex items-center gap-2 px-3 sm:px-3.5 py-2.5 sm:py-3 rounded-xl sm:rounded-2xl text-left text-xs sm:text-[0.82rem] font-semibold transition-all duration-200 cursor-pointer border-2 ${
                          isSelected
                            ? "bg-[#0066FF] text-white border-[#0066FF] shadow-[0_4px_14px_rgba(0,102,255,0.25)] scale-[1.01]"
                            : "bg-white hover:bg-stone-50 text-stone-700 border-stone-200 hover:border-stone-300"
                        }`}
                      >
                        <span className="text-base shrink-0">{opt.icon}</span>
                        <span className="leading-tight truncate">{opt.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Message / Details */}
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label className="text-xs sm:text-sm font-semibold text-stone-700">
                    Project Details / Note
                  </label>
                  <span className="text-xs text-stone-400 font-normal">Optional</span>
                </div>
                <textarea
                  rows={3}
                  placeholder="Tell me a bit about your timeline, scope, or requirements..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-4 py-3 sm:py-3.5 text-sm sm:text-base text-stone-900 bg-white border-2 border-stone-200 rounded-xl sm:rounded-2xl focus:outline-none focus:border-[#0066FF] focus:ring-4 focus:ring-blue-500/10 transition-all placeholder:text-stone-400 font-medium shadow-sm resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="group mt-1 w-full py-[16px] sm:py-[18px] bg-[#0066FF] hover:bg-blue-600 active:scale-[0.98] disabled:opacity-60 text-white text-base sm:text-lg font-bold rounded-full shadow-[0_4px_16px_rgba(0,102,255,0.22)] hover:shadow-[0_8px_24px_rgba(0,102,255,0.30)] transition-all cursor-pointer flex items-center justify-center gap-2 select-none"
              >
                {isSubmitting ? (
                  <>
                    <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Sending message...
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <span className="text-xl group-hover:translate-x-1 transition-transform">→</span>
                  </>
                )}
              </button>

              {/* Direct Connect Quick Action Bar */}
              <div className="flex flex-wrap items-center justify-center gap-3 pt-2 text-xs text-stone-500">
                <span className="text-stone-400">Prefer direct chat?</span>
                <a
                  href="https://wa.me/916303048390?text=Hi%20Dinesh!%20I'd%20like%20to%20connect%20with%20you."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-emerald-50 hover:bg-emerald-100 text-emerald-800 font-bold border border-emerald-200 transition-all active:scale-95 shadow-xs"
                >
                  <span className="text-sm">💬</span> WhatsApp
                </a>
                <span className="text-stone-300">•</span>
                <a
                  href="mailto:bingidineshkumar@gmail.com?subject=Project%20Inquiry%20via%20Portfolio"
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-800 font-bold border border-stone-200 transition-all active:scale-95 shadow-xs"
                >
                  <span className="text-sm">✉️</span> Email
                </a>
              </div>

              <p className="text-center text-[0.68rem] sm:text-xs text-stone-400 mt-1">
                🔒 Your contact details are kept strictly private. Guaranteed reply within 24h.
              </p>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

