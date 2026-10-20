"use client";

import { useState, useEffect, useRef } from "react";
import { profile } from "@/data/profile";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
}

/* ─── SVG Icon Components (no emojis) ─── */

function IconBot({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="11" width="18" height="10" rx="2" />
      <circle cx="12" cy="5" r="2" />
      <path d="M12 7v4" />
      <line x1="8" y1="16" x2="8" y2="16" />
      <line x1="16" y1="16" x2="16" y2="16" />
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
  { id: "agents",     label: "AI Agents & Multi-Agent Systems", Icon: IconBot },
  { id: "fullstack",  label: "Full-Stack Web App",              Icon: IconCode },
  { id: "eval",       label: "AI Evaluation & Safety",          Icon: IconShield },
  { id: "cloud",      label: "Cloud Infrastructure (GCP/AWS)",  Icon: IconCloud },
  { id: "mvp",        label: "Rapid MVP / Prototype",           Icon: IconRocket },
  { id: "consulting", label: "Consulting / Freelance",          Icon: IconBriefcase },
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

  // Capture the element that opened the modal for focus restoration
  useEffect(() => {
    if (isOpen) {
      triggerRef.current = document.activeElement as HTMLElement;
    }
  }, [isOpen]);

  // Escape key, scroll lock, focus trap
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
      // Restore focus
      triggerRef.current?.focus();
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

    setIsSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone, service, message }),
      });
      if (!res.ok) {
        // Fallback — still show submitted state
      }
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

  /* ─── Shared input classes ─── */
  const inputBase =
    "w-full h-[46px] px-[14px] text-[15px] text-[var(--text-primary)] bg-white border border-stone-200 rounded-[13px] placeholder:text-stone-400 focus:outline-none focus:border-[var(--accent-blue)] focus:ring-2 focus:ring-[var(--accent-blue)]/12 transition-colors font-[var(--font-body)]";

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 anim-fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-modal-title"
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" aria-hidden="true" />

      {/* Modal */}
      <div
        ref={modalRef}
        onClick={(e) => e.stopPropagation()}
        className="relative z-10 w-full bg-[var(--bg-surface)] border border-stone-200 shadow-[0_24px_64px_-16px_rgba(0,0,0,0.18)] anim-scale-in overflow-hidden flex flex-col"
        style={{
          maxWidth: "min(760px, calc(100vw - 40px))",
          maxHeight: "90svh",
          borderRadius: "26px",
        }}
      >
        {/* ─── Scrollable Content ─── */}
        <div className="overflow-y-auto flex-1 px-6 sm:px-8 pt-7 sm:pt-8 pb-6 sm:pb-8">

          {isSubmitted ? (
            /* ═══ SUCCESS STATE ═══ */
            <div className="flex flex-col items-center text-center py-8 anim-scale-in">
              <div className="w-16 h-16 rounded-full bg-emerald-50 border-2 border-emerald-200 flex items-center justify-center mb-4">
                <svg className="w-7 h-7 text-emerald-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)] mb-2">
                Message sent.
              </h3>
              <p className="text-stone-500 text-sm leading-relaxed max-w-md mb-6">
                Thank you, <strong className="text-[var(--text-primary)]">{name}</strong>. Your inquiry about <strong className="text-[var(--text-primary)]">{service}</strong> has been received. I will follow up at <strong className="text-[var(--text-primary)]">{email}</strong>.
              </p>

              <div className="flex flex-col xs:flex-row gap-3 w-full sm:w-auto">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#25D366] hover:bg-[#20ba5a] active:scale-95 text-white font-semibold text-sm shadow-sm transition-all cursor-pointer"
                >
                  WhatsApp
                </a>
                <a
                  href={mailtoUrl}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white hover:bg-stone-50 active:scale-95 text-[var(--text-primary)] font-semibold text-sm border border-stone-200 transition-all cursor-pointer"
                >
                  Open in Email
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
                className="mt-6 text-sm text-stone-400 hover:text-stone-700 underline cursor-pointer"
              >
                Done
              </button>
            </div>
          ) : (
            /* ═══ FORM STATE ═══ */
            <form onSubmit={handleSubmit} className="flex flex-col">

              {/* ─── Header ─── */}
              <div className="flex items-start justify-between gap-4 mb-6">
                <div>
                  <span className="font-hand text-base text-[var(--accent-blue)] block mb-1 select-none">
                    Say hello :)
                  </span>
                  <h2
                    id="contact-modal-title"
                    className="text-[1.65rem] sm:text-[1.85rem] font-bold text-[var(--text-primary)] tracking-tight leading-tight"
                  >
                    Start a conversation.
                  </h2>
                  <p className="text-sm text-[var(--text-secondary)] mt-1">
                    Share a few details about your project.
                  </p>
                </div>

                {/* Close button */}
                <button
                  onClick={onClose}
                  type="button"
                  aria-label="Close contact form"
                  className="shrink-0 w-9 h-9 rounded-full bg-stone-100 hover:bg-stone-200 active:scale-95 flex items-center justify-center text-stone-500 hover:text-stone-800 transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-[var(--accent-blue)] focus:ring-offset-2"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </button>
              </div>

              {/* Separator */}
              <div className="h-px bg-stone-200/80 mb-6" />

              {error && (
                <div className="mb-5 p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm font-medium">
                  {error}
                </div>
              )}

              {/* ─── Fields ─── */}
              <div className="flex flex-col gap-5">

                {/* Full Name */}
                <div>
                  <label htmlFor="contact-name" className="block text-sm font-semibold text-[var(--text-primary)] mb-1.5">
                    Full name <span className="text-[var(--accent-blue)]">*</span>
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    placeholder="Your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className={inputBase}
                  />
                </div>

                {/* Email & Phone — 2-col on desktop, stacked on mobile */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-email" className="block text-sm font-semibold text-[var(--text-primary)] mb-1.5">
                      Work email <span className="text-[var(--accent-blue)]">*</span>
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      placeholder="you@company.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className={inputBase}
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-phone" className="block text-sm font-semibold text-[var(--text-primary)] mb-1.5">
                      Phone / WhatsApp
                    </label>
                    <input
                      id="contact-phone"
                      type="tel"
                      placeholder="Your number"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className={inputBase}
                    />
                  </div>
                </div>

                {/* ─── Service Selector (2-col grid, no emojis, full labels) ─── */}
                <fieldset>
                  <legend className="block text-sm font-semibold text-[var(--text-primary)] mb-2">
                    What do you need?
                  </legend>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5" role="radiogroup" aria-label="Select a service">
                    {serviceOptions.map((opt) => {
                      const isSelected = service === opt.label;
                      return (
                        <button
                          key={opt.id}
                          type="button"
                          role="radio"
                          aria-checked={isSelected}
                          onClick={() => setService(opt.label)}
                          className={`group flex items-start gap-3 px-4 py-3.5 rounded-[13px] text-left transition-all duration-150 cursor-pointer border focus:outline-none focus:ring-2 focus:ring-[var(--accent-blue)] focus:ring-offset-1 ${
                            isSelected
                              ? "bg-[var(--accent-blue)] text-white border-[var(--accent-blue)] shadow-[0_2px_8px_rgba(0,102,255,0.18)]"
                              : "bg-white text-[var(--text-primary)] border-stone-200 hover:border-stone-300 hover:bg-stone-50/60"
                          }`}
                        >
                          <opt.Icon
                            className={`w-5 h-5 shrink-0 mt-0.5 ${
                              isSelected ? "text-white/90" : "text-[var(--accent-blue)]"
                            }`}
                          />
                          <span className="text-sm font-medium leading-snug">
                            {opt.label}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </fieldset>

                {/* Project Details */}
                <div>
                  <label htmlFor="contact-message" className="block text-sm font-semibold text-[var(--text-primary)] mb-1.5">
                    Project details
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    placeholder="Tell me about your idea, scope, or timeline..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-[14px] py-3 text-[15px] text-[var(--text-primary)] bg-white border border-stone-200 rounded-[13px] placeholder:text-stone-400 focus:outline-none focus:border-[var(--accent-blue)] focus:ring-2 focus:ring-[var(--accent-blue)]/12 transition-colors resize-y min-h-[120px] font-[var(--font-body)]"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-[50px] bg-[var(--accent-blue)] hover:bg-[var(--accent-blue-hover)] active:scale-[0.98] disabled:opacity-60 text-white text-base font-bold rounded-[13px] shadow-[0_2px_10px_rgba(0,102,255,0.18)] transition-all cursor-pointer flex items-center justify-center gap-2 select-none focus:outline-none focus:ring-2 focus:ring-[var(--accent-blue)] focus:ring-offset-2"
                >
                  {isSubmitting ? (
                    <>
                      <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send message
                      <span className="text-lg">&#8594;</span>
                    </>
                  )}
                </button>

                {/* Direct Contact Alternative */}
                <div className="flex items-center justify-center gap-1.5 text-sm text-[var(--text-secondary)]">
                  <IconMail className="w-4 h-4 text-stone-400" />
                  <span>Prefer email?</span>
                  <a
                    href={`mailto:${profile.social.email}?subject=Project%20Inquiry%20via%20Portfolio`}
                    className="text-[var(--accent-blue)] font-medium hover:underline"
                  >
                    Contact me directly.
                  </a>
                </div>

                {/* Privacy note */}
                <div className="flex items-center justify-center gap-1.5 text-xs text-stone-400">
                  <IconLock className="w-3.5 h-3.5" />
                  <span>Your contact details are used only to respond to your inquiry.</span>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
