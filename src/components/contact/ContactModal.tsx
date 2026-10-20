"use client";

import { useState, useEffect, useRef } from "react";
import { profile } from "@/data/profile";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
}

/* ─── SVG Icon Components ─── */

function IconBot({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="11" width="18" height="10" rx="2" />
      <circle cx="12" cy="5" r="2" />
      <path d="M12 7v4" />
      <circle cx="8" cy="16" r="1" />
      <circle cx="16" cy="16" r="1" />
    </svg>
  );
}

function IconCode({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
}

function IconShield({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <polyline points="9 12 11 14 15 10" />
    </svg>
  );
}

function IconCloud({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 10h-1.26A8 8 0 109 20h9a5 5 0 000-10z" />
    </svg>
  );
}

function IconRocket({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 00-2.91-.09z" />
      <path d="M12 15l-3-3a22 22 0 012-3.95A12.88 12.88 0 0122 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 01-4 2z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </svg>
  );
}

function IconBriefcase({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
      <path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16" />
    </svg>
  );
}

function IconMail({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="M22 7l-10 7L2 7" />
    </svg>
  );
}

function IconLock({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0110 0v4" />
    </svg>
  );
}

/* ─── Service Options ─── */

interface ServiceDef {
  id: string;
  label: string;
  Icon: React.ComponentType<{ className?: string }>;
}

export const serviceOptions: ServiceDef[] = [
  { id: "agents",     label: "AI agents",                Icon: IconBot },
  { id: "fullstack",  label: "Full-stack development",   Icon: IconCode },
  { id: "eval",       label: "AI evaluation and safety", Icon: IconShield },
  { id: "cloud",      label: "Cloud infrastructure",     Icon: IconCloud },
  { id: "mvp",        label: "Rapid MVP / Prototype",    Icon: IconRocket },
  { id: "consulting", label: "Consulting / Freelance",   Icon: IconBriefcase },
];

/* ─── Contact Modal ─── */

export function ContactModal({ isOpen, onClose, defaultService }: ContactModalProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState(defaultService || serviceOptions[0].label);
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (isOpen) triggerRef.current = document.activeElement as HTMLElement;
  }, [isOpen]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKey);
    } else {
      document.body.style.overflow = "unset";
      triggerRef.current?.focus();
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKey);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    if (!name.trim()) { setError("Please provide your full name."); return; }
    if (!email.trim() || !email.includes("@")) { setError("Please provide a valid email address."); return; }

    setIsSubmitting(true);
    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone, service, message }),
      });
      setIsSubmitted(true);
    } catch {
      setIsSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const mailtoUrl = `mailto:${profile.social.email}?subject=${encodeURIComponent(
    `Project Inquiry: ${name || "Portfolio Visitor"} — ${service}`
  )}&body=${encodeURIComponent(
    `Hi Dinesh,\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone || "N/A"}\nService: ${service}\n\nDetails:\n${message || "(none)"}`
  )}`;

  const whatsappUrl = `https://wa.me/916303048390?text=${encodeURIComponent(
    `Hi Dinesh! I'm ${name}. I'm interested in ${service}. Reach me at ${email}${phone ? ` / ${phone}` : ""}. ${message || ""}`
  )}`;

  /* Shared input style */
  const inputCls =
    "w-full h-[52px] px-4 text-[15px] text-[var(--text-primary)] bg-white border border-stone-200/80 rounded-xl placeholder:text-stone-400 focus:outline-none focus:border-[var(--accent-blue)] focus:ring-2 focus:ring-[var(--accent-blue)]/10 transition-colors";

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 anim-fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-modal-title"
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/35 backdrop-blur-sm" aria-hidden="true" />

      {/* Modal Panel */}
      <div
        ref={modalRef}
        onClick={(e) => e.stopPropagation()}
        className="relative z-10 w-full flex flex-col anim-scale-in overflow-hidden"
        style={{
          maxWidth: "min(720px, calc(100vw - 40px))",
          maxHeight: "90svh",
          borderRadius: "24px",
          background: "#FAF8F5",
          boxShadow: "0 32px 80px -16px rgba(0,0,0,0.22), 0 0 0 1px rgba(0,0,0,0.04)",
        }}
      >
        {/* Scrollable Inner */}
        <div className="overflow-y-auto flex-1 px-8 sm:px-10 pt-9 sm:pt-10 pb-8 sm:pb-10">

          {isSubmitted ? (
            /* ═══ SUCCESS ═══ */
            <div className="flex flex-col items-center text-center py-10 anim-scale-in">
              <div className="w-16 h-16 rounded-full bg-emerald-50 border-2 border-emerald-200 flex items-center justify-center mb-5">
                <svg className="w-7 h-7 text-emerald-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-stone-900 mb-2">Message sent.</h3>
              <p className="text-stone-500 text-sm leading-relaxed max-w-sm mb-8">
                Thank you, <strong className="text-stone-800">{name}</strong>. I&apos;ll follow up at <strong className="text-stone-800">{email}</strong>.
              </p>
              <div className="flex flex-col xs:flex-row gap-3 w-full sm:w-auto">
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#25D366] hover:bg-[#20ba5a] active:scale-95 text-white font-semibold text-sm shadow-sm transition-all cursor-pointer">
                  WhatsApp
                </a>
                <a href={mailtoUrl}
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-white hover:bg-stone-50 active:scale-95 text-stone-800 font-semibold text-sm border border-stone-200 transition-all cursor-pointer">
                  Open in Email
                </a>
              </div>
              <button onClick={() => { setIsSubmitted(false); setName(""); setEmail(""); setPhone(""); setMessage(""); onClose(); }}
                className="mt-8 text-sm text-stone-400 hover:text-stone-600 underline cursor-pointer">
                Done
              </button>
            </div>
          ) : (
            /* ═══ FORM ═══ */
            <form onSubmit={handleSubmit}>

              {/* ── HEADER ── */}
              <div className="flex items-start justify-between mb-2">
                <div>
                  <span className="font-hand text-[15px] text-[var(--accent-blue)] block mb-1.5 select-none">
                    Say hello :)
                  </span>
                  <h2 id="contact-modal-title" className="text-[1.55rem] sm:text-[1.75rem] font-bold text-stone-900 tracking-tight leading-tight">
                    Start a conversation.
                  </h2>
                  <p className="text-[13px] sm:text-sm text-stone-500 mt-1">
                    Share a few details about your project.
                  </p>
                </div>

                {/* Close */}
                <button onClick={onClose} type="button" aria-label="Close"
                  className="shrink-0 w-9 h-9 rounded-full border border-stone-200 bg-white hover:bg-stone-100 active:scale-90 flex items-center justify-center text-stone-400 hover:text-stone-700 transition-all cursor-pointer mt-1">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </button>
              </div>

              {/* Divider */}
              <div className="h-px bg-stone-200/70 mt-5 mb-7" />

              {error && (
                <div className="mb-6 px-4 py-3 rounded-xl bg-red-50 border border-red-200/80 text-red-700 text-sm font-medium">
                  {error}
                </div>
              )}

              {/* ── FULL NAME ── */}
              <div className="mb-6">
                <label htmlFor="contact-name" className="block text-sm font-semibold text-stone-800 mb-2">
                  Full name <span className="text-[var(--accent-blue)]">*</span>
                </label>
                <input id="contact-name" type="text" required placeholder="Your name"
                  value={name} onChange={(e) => setName(e.target.value)} className={inputCls} />
              </div>

              {/* ── EMAIL & PHONE (2-col) ── */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-7">
                <div>
                  <label htmlFor="contact-email" className="block text-sm font-semibold text-stone-800 mb-2">
                    Work email <span className="text-[var(--accent-blue)]">*</span>
                  </label>
                  <input id="contact-email" type="email" required placeholder="you@company.com"
                    value={email} onChange={(e) => setEmail(e.target.value)} className={inputCls} />
                </div>
                <div>
                  <label htmlFor="contact-phone" className="block text-sm font-semibold text-stone-800 mb-2">
                    Phone / WhatsApp
                  </label>
                  <input id="contact-phone" type="tel" placeholder="Your number"
                    value={phone} onChange={(e) => setPhone(e.target.value)} className={inputCls} />
                </div>
              </div>

              {/* ── SERVICE SELECTOR (2-col vertical cards) ── */}
              <fieldset className="mb-7">
                <legend className="block text-sm font-semibold text-stone-800 mb-3">
                  What do you need?
                </legend>
                <div className="grid grid-cols-2 gap-3" role="radiogroup" aria-label="Select a service">
                  {serviceOptions.map((opt) => {
                    const active = service === opt.label;
                    return (
                      <button
                        key={opt.id}
                        type="button"
                        role="radio"
                        aria-checked={active}
                        onClick={() => setService(opt.label)}
                        className={`
                          flex flex-col items-start gap-2 px-4 pt-4 pb-3.5 rounded-2xl text-left cursor-pointer
                          border transition-all duration-150
                          focus:outline-none focus:ring-2 focus:ring-[var(--accent-blue)] focus:ring-offset-2
                          ${active
                            ? "bg-[var(--accent-blue)] text-white border-[var(--accent-blue)] shadow-[0_4px_16px_rgba(0,102,255,0.20)]"
                            : "bg-white text-stone-700 border-stone-200/80 hover:border-stone-300 hover:shadow-sm"
                          }
                        `}
                      >
                        <opt.Icon className={`w-5 h-5 ${active ? "text-white/90" : "text-[var(--accent-blue)]"}`} />
                        <span className={`text-[13px] sm:text-sm font-medium leading-snug ${active ? "text-white" : "text-stone-700"}`}>
                          {opt.label}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </fieldset>

              {/* ── PROJECT DETAILS ── */}
              <div className="mb-7">
                <label htmlFor="contact-message" className="block text-sm font-semibold text-stone-800 mb-2">
                  Project details
                </label>
                <textarea id="contact-message" rows={5}
                  placeholder="Tell me about your idea, scope, or timeline..."
                  value={message} onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-4 py-3.5 text-[15px] text-[var(--text-primary)] bg-white border border-stone-200/80 rounded-xl placeholder:text-stone-400 focus:outline-none focus:border-[var(--accent-blue)] focus:ring-2 focus:ring-[var(--accent-blue)]/10 transition-colors resize-y min-h-[140px]"
                />
              </div>

              {/* ── SUBMIT BUTTON ── */}
              <button type="submit" disabled={isSubmitting}
                className="w-full h-[54px] bg-[var(--accent-blue)] hover:bg-[var(--accent-blue-hover)] active:scale-[0.98] disabled:opacity-60 text-white text-[15px] font-bold rounded-2xl shadow-[0_4px_16px_rgba(0,102,255,0.22)] transition-all cursor-pointer flex items-center justify-center gap-2 select-none mb-5">
                {isSubmitting ? (
                  <>
                    <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>Send message <span className="text-lg ml-0.5">&rarr;</span></>
                )}
              </button>

              {/* ── PREFER EMAIL ── */}
              <div className="flex items-center justify-center gap-1.5 text-[13px] text-stone-400 mb-1">
                <IconMail className="w-4 h-4" />
                <span>Prefer email?</span>
                <a href={`mailto:${profile.social.email}?subject=Project%20Inquiry%20via%20Portfolio`}
                  className="text-[var(--accent-blue)] font-medium hover:underline">
                  Contact me directly.
                </a>
              </div>

              {/* Privacy */}
              <div className="flex items-center justify-center gap-1 text-[11px] text-stone-400 mt-2">
                <IconLock className="w-3 h-3" />
                <span>Your details are used only to respond to your inquiry.</span>
              </div>

            </form>
          )}
        </div>
      </div>
    </div>
  );
}
