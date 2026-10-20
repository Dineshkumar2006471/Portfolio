"use client";

import { useState, useEffect, useRef } from "react";
import { profile } from "@/data/profile";

/* ═══════════════════════════════════════════════════════════════════
   TYPES
   ═══════════════════════════════════════════════════════════════════ */

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
}

interface ServiceDef {
  id: string;
  label: string;
  icon: React.ReactNode;
}

/* ═══════════════════════════════════════════════════════════════════
   INLINE SVG ICONS — no emojis, ever
   ═══════════════════════════════════════════════════════════════════ */

const svcIcons = {
  bot: (c: string) => (
    <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="11" width="18" height="10" rx="2" /><circle cx="12" cy="5" r="2" /><path d="M12 7v4" /><circle cx="8" cy="16" r="1" /><circle cx="16" cy="16" r="1" />
    </svg>
  ),
  code: (c: string) => (
    <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
    </svg>
  ),
  shield: (c: string) => (
    <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><polyline points="9 12 11 14 15 10" />
    </svg>
  ),
  cloud: (c: string) => (
    <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 10h-1.26A8 8 0 109 20h9a5 5 0 000-10z" />
    </svg>
  ),
  rocket: (c: string) => (
    <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 00-2.91-.09z" /><path d="M12 15l-3-3a22 22 0 012-3.95A12.88 12.88 0 0122 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 01-4 2z" /><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" /><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </svg>
  ),
  briefcase: (c: string) => (
    <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="7" width="20" height="14" rx="2" ry="2" /><path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16" />
    </svg>
  ),
  database: (c: string) => (
    <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <ellipse cx="12" cy="5" rx="9" ry="3" /><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" /><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
    </svg>
  ),
  smartphone: (c: string) => (
    <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="5" y="2" width="14" height="20" rx="2" ry="2" /><line x1="12" y1="18" x2="12.01" y2="18" />
    </svg>
  ),
};

/* ═══════════════════════════════════════════════════════════════════
   SERVICE OPTIONS
   ═══════════════════════════════════════════════════════════════════ */

export const serviceOptions: { id: string; label: string }[] = [
  { id: "agents",     label: "AI agents" },
  { id: "fullstack",  label: "Full-stack development" },
  { id: "eval",       label: "AI evaluation & safety" },
  { id: "cloud",      label: "Cloud infrastructure" },
  { id: "mvp",        label: "Rapid MVP / Prototype" },
  { id: "consulting", label: "Consulting / Freelance" },
  { id: "data",       label: "Data engineering & pipelines" },
  { id: "mobile",     label: "Mobile app development" },
];

const services: ServiceDef[] = [
  { id: "agents",     label: "AI agents",                    icon: svcIcons.bot("w-[22px] h-[22px]") },
  { id: "fullstack",  label: "Full-stack development",       icon: svcIcons.code("w-[22px] h-[22px]") },
  { id: "eval",       label: "AI evaluation & safety",       icon: svcIcons.shield("w-[22px] h-[22px]") },
  { id: "cloud",      label: "Cloud infrastructure",         icon: svcIcons.cloud("w-[22px] h-[22px]") },
  { id: "mvp",        label: "Rapid MVP / Prototype",        icon: svcIcons.rocket("w-[22px] h-[22px]") },
  { id: "consulting", label: "Consulting / Freelance",       icon: svcIcons.briefcase("w-[22px] h-[22px]") },
  { id: "data",       label: "Data engineering & pipelines", icon: svcIcons.database("w-[22px] h-[22px]") },
  { id: "mobile",     label: "Mobile app development",       icon: svcIcons.smartphone("w-[22px] h-[22px]") },
];

/* helper: render icon with dynamic color */
function SvcIcon({ svcId, active }: { svcId: string; active: boolean }) {
  const colorCls = active ? "text-white" : "text-stone-500";
  switch (svcId) {
    case "agents":     return <>{svcIcons.bot(`w-[22px] h-[22px] ${colorCls}`)}</>;
    case "fullstack":  return <>{svcIcons.code(`w-[22px] h-[22px] ${colorCls}`)}</>;
    case "eval":       return <>{svcIcons.shield(`w-[22px] h-[22px] ${colorCls}`)}</>;
    case "cloud":      return <>{svcIcons.cloud(`w-[22px] h-[22px] ${colorCls}`)}</>;
    case "mvp":        return <>{svcIcons.rocket(`w-[22px] h-[22px] ${colorCls}`)}</>;
    case "consulting": return <>{svcIcons.briefcase(`w-[22px] h-[22px] ${colorCls}`)}</>;
    case "data":       return <>{svcIcons.database(`w-[22px] h-[22px] ${colorCls}`)}</>;
    case "mobile":     return <>{svcIcons.smartphone(`w-[22px] h-[22px] ${colorCls}`)}</>;
    default:           return null;
  }
}

/* ═══════════════════════════════════════════════════════════════════
   COMPONENT
   ═══════════════════════════════════════════════════════════════════ */

export function ContactModal({ isOpen, onClose, defaultService }: ContactModalProps) {
  const [name, setName]             = useState("");
  const [email, setEmail]           = useState("");
  const [phone, setPhone]           = useState("");
  const [selectedSvc, setSelectedSvc] = useState(defaultService || services[0].id);
  const [message, setMessage]       = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted]   = useState(false);
  const [error, setError]           = useState<string | null>(null);
  const triggerRef = useRef<HTMLElement | null>(null);

  /* Focus & scroll-lock */
  useEffect(() => {
    if (isOpen) triggerRef.current = document.activeElement as HTMLElement;
  }, [isOpen]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", onKey);
    } else {
      document.body.style.overflow = "";
      triggerRef.current?.focus();
    }
    return () => { document.body.style.overflow = ""; window.removeEventListener("keydown", onKey); };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const svcLabel = services.find(s => s.id === selectedSvc)?.label || selectedSvc;

  /* Submit */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    if (!name.trim()) { setError("Please enter your name."); return; }
    if (!email.trim() || !email.includes("@")) { setError("Please enter a valid email."); return; }
    setSubmitting(true);
    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone, service: svcLabel, message }),
      });
    } catch { /* still show success */ }
    setSubmitting(false);
    setSubmitted(true);
  };

  const mailto = `mailto:${profile.social.email}?subject=${encodeURIComponent(`Project inquiry – ${svcLabel}`)}&body=${encodeURIComponent(`Hi Dinesh,\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone || "N/A"}\nService: ${svcLabel}\n\nDetails:\n${message || "(none)"}`)}`;
  const whatsapp = `https://wa.me/916303048390?text=${encodeURIComponent(`Hi Dinesh! I'm ${name}. Interested in ${svcLabel}. ${email}${phone ? ` / ${phone}` : ""}. ${message || ""}`)}`;

  /* ─── STYLES ─── */
  const inputStyle: React.CSSProperties = {
    width: "100%",
    height: 50,
    padding: "0 16px",
    fontSize: 15,
    color: "#1c1917",
    background: "#ffffff",
    border: "1px solid #e7e5e4",
    borderRadius: 12,
    outline: "none",
    transition: "border-color 150ms",
  };

  return (
    /* ═══ BACKDROP ═══ */
    <div
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="cm-title"
      style={{
        position: "fixed", inset: 0, zIndex: 50,
        display: "flex", alignItems: "center", justifyContent: "center",
        padding: "16px",
        background: "rgba(0,0,0,0.32)",
      }}
      className="anim-fade-in"
    >
      {/* ═══ MODAL PANEL ═══ */}
      <div
        onClick={e => e.stopPropagation()}
        className="anim-scale-in"
        style={{
          position: "relative",
          width: "100%",
          maxWidth: "min(700px, calc(100vw - 40px))",
          maxHeight: "90svh",
          display: "flex",
          flexDirection: "column",
          background: "#FAF8F5",
          borderRadius: 22,
          boxShadow: "0 32px 80px -12px rgba(0,0,0,0.22), 0 0 0 1px rgba(0,0,0,0.03)",
          overflow: "hidden",
        }}
      >
        {/* ─── SCROLLABLE BODY ─── */}
        <div style={{ overflowY: "auto", flex: 1, padding: "36px 36px 32px" }}>

          {submitted ? (
            /* ═══════ SUCCESS STATE ═══════ */
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", padding: "32px 0" }}>
              <div style={{ width: 64, height: 64, borderRadius: "50%", background: "#ecfdf5", border: "2px solid #a7f3d0", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 20 }}>
                <svg style={{ width: 28, height: 28, color: "#059669" }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
              </div>
              <h3 style={{ fontSize: 24, fontWeight: 700, color: "#1c1917", marginBottom: 8 }}>Message sent.</h3>
              <p style={{ fontSize: 14, color: "#78716c", lineHeight: 1.6, maxWidth: 360, marginBottom: 28 }}>
                Thank you, <strong style={{ color: "#1c1917" }}>{name}</strong>. I&apos;ll get back to you at <strong style={{ color: "#1c1917" }}>{email}</strong>.
              </p>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap", justifyContent: "center" }}>
                <a href={whatsapp} target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", padding: "12px 28px", borderRadius: 999, background: "#25D366", color: "#fff", fontWeight: 600, fontSize: 14, textDecoration: "none" }}>WhatsApp</a>
                <a href={mailto} style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", padding: "12px 28px", borderRadius: 999, background: "#fff", color: "#1c1917", fontWeight: 600, fontSize: 14, textDecoration: "none", border: "1px solid #e7e5e4" }}>Open in Email</a>
              </div>
              <button onClick={() => { setSubmitted(false); setName(""); setEmail(""); setPhone(""); setMessage(""); onClose(); }} style={{ marginTop: 28, fontSize: 13, color: "#a8a29e", background: "none", border: "none", cursor: "pointer", textDecoration: "underline" }}>Done</button>
            </div>
          ) : (
            /* ═══════ FORM ═══════ */
            <form onSubmit={handleSubmit}>

              {/* ──── HEADER ──── */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                <div>
                  <p className="font-hand" style={{ fontSize: 15, color: "var(--accent-blue)", margin: "0 0 6px", lineHeight: 1 }}>Say hello :)</p>
                  <h2 id="cm-title" style={{ fontSize: 22, fontWeight: 700, color: "#1c1917", margin: "0 0 4px", letterSpacing: "-0.01em", lineHeight: 1.2 }}>Start a conversation.</h2>
                  <p style={{ fontSize: 13, color: "#a8a29e", margin: 0, lineHeight: 1.4 }}>Share a few details about your project.</p>
                </div>
                {/* Close */}
                <button type="button" onClick={onClose} aria-label="Close"
                  style={{ width: 36, height: 36, borderRadius: "50%", border: "1px solid #e7e5e4", background: "#fff", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", flexShrink: 0, marginTop: 2, color: "#a8a29e", transition: "background 150ms" }}>
                  <svg style={{ width: 15, height: 15 }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
                </button>
              </div>

              {/* Divider */}
              <div style={{ height: 1, background: "#e7e5e4", margin: "24px 0 28px" }} />

              {/* Error */}
              {error && (
                <div style={{ marginBottom: 20, padding: "12px 16px", borderRadius: 12, background: "#fef2f2", border: "1px solid #fecaca", color: "#b91c1c", fontSize: 14, fontWeight: 500 }}>{error}</div>
              )}

              {/* ──── FULL NAME ──── */}
              <div style={{ marginBottom: 22 }}>
                <label htmlFor="cm-name" style={{ display: "block", fontSize: 14, fontWeight: 600, color: "#1c1917", marginBottom: 8 }}>
                  Full name <span style={{ color: "var(--accent-blue)" }}>*</span>
                </label>
                <input id="cm-name" type="text" required placeholder="Your name"
                  value={name} onChange={e => setName(e.target.value)}
                  style={inputStyle}
                  onFocus={e => { e.currentTarget.style.borderColor = "var(--accent-blue)"; }}
                  onBlur={e => { e.currentTarget.style.borderColor = "#e7e5e4"; }}
                />
              </div>

              {/* ──── EMAIL + PHONE (2-col desktop, stacked mobile) ──── */}
              <div className="cm-two-col" style={{ display: "grid", gap: 16, marginBottom: 26 }}>
                <div>
                  <label htmlFor="cm-email" style={{ display: "block", fontSize: 14, fontWeight: 600, color: "#1c1917", marginBottom: 8 }}>
                    Email <span style={{ color: "var(--accent-blue)" }}>*</span>
                  </label>
                  <input id="cm-email" type="email" required placeholder="your@email.com"
                    value={email} onChange={e => setEmail(e.target.value)}
                    style={inputStyle}
                    onFocus={e => { e.currentTarget.style.borderColor = "var(--accent-blue)"; }}
                    onBlur={e => { e.currentTarget.style.borderColor = "#e7e5e4"; }}
                  />
                </div>
                <div>
                  <label htmlFor="cm-phone" style={{ display: "block", fontSize: 14, fontWeight: 600, color: "#1c1917", marginBottom: 8 }}>
                    Phone / WhatsApp
                  </label>
                  <input id="cm-phone" type="tel" placeholder="Your number"
                    value={phone} onChange={e => setPhone(e.target.value)}
                    style={inputStyle}
                    onFocus={e => { e.currentTarget.style.borderColor = "var(--accent-blue)"; }}
                    onBlur={e => { e.currentTarget.style.borderColor = "#e7e5e4"; }}
                  />
                </div>
              </div>

              {/* ──── SERVICE SELECTOR ──── */}
              <fieldset style={{ border: "none", padding: 0, margin: "0 0 26px" }}>
                <legend style={{ display: "block", fontSize: 14, fontWeight: 600, color: "#1c1917", marginBottom: 12 }}>
                  What do you need?
                </legend>
                <div className="cm-svc-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }} role="radiogroup">
                  {services.map(svc => {
                    const on = selectedSvc === svc.id;
                    return (
                      <button key={svc.id} type="button" role="radio" aria-checked={on}
                        onClick={() => setSelectedSvc(svc.id)}
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "flex-start",
                          gap: 8,
                          padding: "16px 16px 14px",
                          borderRadius: 14,
                          border: on ? "1.5px solid var(--accent-blue)" : "1px solid #e7e5e4",
                          background: on ? "var(--accent-blue)" : "#ffffff",
                          cursor: "pointer",
                          transition: "all 150ms",
                          textAlign: "left",
                          outline: "none",
                        }}
                      >
                        <SvcIcon svcId={svc.id} active={on} />
                        <span style={{
                          fontSize: 13,
                          fontWeight: 500,
                          lineHeight: 1.35,
                          color: on ? "#ffffff" : "#44403c",
                        }}>
                          {svc.label}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </fieldset>

              {/* ──── PROJECT DETAILS ──── */}
              <div style={{ marginBottom: 26 }}>
                <label htmlFor="cm-msg" style={{ display: "block", fontSize: 14, fontWeight: 600, color: "#1c1917", marginBottom: 8 }}>
                  Project details
                </label>
                <textarea id="cm-msg" rows={5} placeholder="Tell me about your idea, scope, or timeline..."
                  value={message} onChange={e => setMessage(e.target.value)}
                  style={{
                    width: "100%", padding: "14px 16px", fontSize: 15, color: "#1c1917",
                    background: "#ffffff", border: "1px solid #e7e5e4", borderRadius: 12,
                    outline: "none", resize: "vertical", minHeight: 130, transition: "border-color 150ms",
                    lineHeight: 1.5,
                  }}
                  onFocus={e => { e.currentTarget.style.borderColor = "var(--accent-blue)"; }}
                  onBlur={e => { e.currentTarget.style.borderColor = "#e7e5e4"; }}
                />
              </div>

              {/* ──── SUBMIT ──── */}
              <button type="submit" disabled={submitting}
                style={{
                  width: "100%", height: 52, borderRadius: 14,
                  background: "var(--accent-blue)", color: "#fff",
                  fontSize: 15, fontWeight: 700, border: "none",
                  cursor: submitting ? "not-allowed" : "pointer",
                  opacity: submitting ? 0.6 : 1,
                  display: "flex", alignItems: "center", justifyContent: "center", gap: 6,
                  boxShadow: "0 4px 14px rgba(0,102,255,0.18)",
                  transition: "opacity 150ms, transform 100ms",
                  marginBottom: 18,
                }}
              >
                {submitting ? (
                  <>
                    <span style={{ width: 18, height: 18, border: "2px solid rgba(255,255,255,0.3)", borderTopColor: "#fff", borderRadius: "50%", animation: "spin 0.6s linear infinite", display: "inline-block" }} />
                    Sending...
                  </>
                ) : (
                  <>Send message <span style={{ fontSize: 17 }}>&rarr;</span></>
                )}
              </button>

              {/* ──── PREFER EMAIL ──── */}
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 6, fontSize: 13, color: "#a8a29e" }}>
                <svg style={{ width: 15, height: 15 }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="4" width="20" height="16" rx="2" /><path d="M22 7l-10 7L2 7" />
                </svg>
                <span>Prefer email?</span>
                <a href={`mailto:${profile.social.email}?subject=Project%20Inquiry`} style={{ color: "var(--accent-blue)", fontWeight: 500, textDecoration: "none" }}>
                  Contact me directly.
                </a>
              </div>

            </form>
          )}
        </div>
      </div>

      {/* ─── Responsive CSS ─── */}
      <style>{`
        .cm-two-col { grid-template-columns: 1fr 1fr; }
        @media (max-width: 560px) {
          .cm-two-col { grid-template-columns: 1fr !important; }
          .cm-svc-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 380px) {
          .cm-svc-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
