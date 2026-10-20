"use client";

/* 
 * Official tech logos — 100% pure inline SVGs for zero latency, 
 * zero broken images, and 100% deterministic offline rendering.
 */

interface TechLogoProps {
  slug: string;
  size?: number;
  className?: string;
  showLabel?: boolean;
}

export function TechLogo({ slug, size = 20, className = "", showLabel = false }: TechLogoProps) {
  const s = slug.toLowerCase().replace(/[\s./-]/g, "");

  // 1. GitHub
  if (s === "github" || s === "gitgithub") {
    return (
      <span className={`inline-flex items-center gap-2 shrink-0 ${className}`} title="GitHub">
        <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
          <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
        </svg>
        {showLabel && <span className="text-sm font-medium">GitHub</span>}
      </span>
    );
  }

  // 2. LinkedIn
  if (s === "linkedin") {
    return (
      <span className={`inline-flex items-center gap-2 shrink-0 ${className}`} title="LinkedIn">
        <svg width={size} height={size} viewBox="0 0 24 24" fill="#0A66C2">
          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
        </svg>
        {showLabel && <span className="text-sm font-medium">LinkedIn</span>}
      </span>
    );
  }

  // 3. X (Twitter)
  if (s === "x" || s === "twitter") {
    return (
      <span className={`inline-flex items-center gap-2 shrink-0 ${className}`} title="X">
        <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
        {showLabel && <span className="text-sm font-medium">X</span>}
      </span>
    );
  }

  // 4. Google
  if (s === "google") {
    return (
      <span className={`inline-flex items-center gap-2 shrink-0 ${className}`} title="Google">
        <svg width={size} height={size} viewBox="0 0 24 24">
          <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
          <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
          <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05"/>
          <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335"/>
        </svg>
        {showLabel && <span className="text-sm font-medium">Google</span>}
      </span>
    );
  }

  // 5. OpenAI / AI Agents
  if (s === "openai" || s === "aiagents" || s === "aiml" || s === "machinelearning") {
    return (
      <span className={`inline-flex items-center gap-2 shrink-0 ${className}`} title="AI Agents">
        <svg width={size} height={size} viewBox="0 0 24 24" fill="#10A37F">
          <path d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073zM13.26 22.43a4.476 4.476 0 0 1-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 0 0 .392-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494zM3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085 4.783 2.759a.771.771 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.033.062L9.74 19.95a4.5 4.5 0 0 1-6.14-1.646zM2.34 7.896a4.485 4.485 0 0 1 2.366-1.973V11.6a.766.766 0 0 0 .388.677l5.815 3.355-2.02 1.168a.076.076 0 0 1-.071 0l-4.83-2.786A4.504 4.504 0 0 1 2.34 7.872zm16.597 3.855l-5.833-3.387L15.119 7.2a.076.076 0 0 1 .071 0l4.83 2.791a4.494 4.494 0 0 1-.676 8.105v-5.678a.79.79 0 0 0-.407-.667zm2.01-3.023l-.141-.085-4.774-2.782a.776.776 0 0 0-.785 0L9.409 9.23V6.897a.066.066 0 0 1 .028-.061l4.83-2.787a4.5 4.5 0 0 1 6.68 4.66zm-12.64 4.135l-2.02-1.164a.08.08 0 0 1-.038-.057V6.075a4.5 4.5 0 0 1 7.375-3.453l-.142.08L8.704 5.46a.795.795 0 0 0-.393.681zm1.097-2.365l2.602-1.5 2.607 1.5v2.999l-2.597 1.5-2.607-1.5z"/>
        </svg>
        {showLabel && <span className="text-sm font-medium">AI Agents</span>}
      </span>
    );
  }

  // 6. Gemini
  if (s === "gemini") {
    return (
      <span className={`inline-flex items-center gap-2 shrink-0 ${className}`} title="Gemini">
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
          <path d="M12 0C12 6.627 6.627 12 0 12c6.627 0 12 5.373 12 12 0-6.627 5.373-12 12-12-6.627 0-12-5.373-12-12z" fill="url(#gemini-grad)"/>
          <defs>
            <linearGradient id="gemini-grad" x1="0" y1="0" x2="24" y2="24">
              <stop stopColor="#1A73E8"/>
              <stop offset="0.5" stopColor="#8AB4F8"/>
              <stop offset="1" stopColor="#D93025"/>
            </linearGradient>
          </defs>
        </svg>
        {showLabel && <span className="text-sm font-medium">Gemini</span>}
      </span>
    );
  }

  // 7. Claude
  if (s === "claude") {
    return (
      <span className={`inline-flex items-center gap-2 shrink-0 ${className}`} title="Anthropic Claude">
        <svg width={size} height={size} viewBox="0 0 24 24" fill="#D97757">
          <path d="M17.41 18.57L12 3.86 6.59 18.57h2.24l1.32-3.83h3.7l1.32 3.83h2.24zm-6.52-5.75L12 9.42l1.11 3.4h-2.22z"/>
          <circle cx="12" cy="12" r="11" stroke="#D97757" strokeWidth="1.5" fill="none"/>
        </svg>
        {showLabel && <span className="text-sm font-medium">Claude</span>}
      </span>
    );
  }

  // 8. React
  if (s === "react") {
    return (
      <span className={`inline-flex items-center gap-2 shrink-0 ${className}`} title="React">
        <svg width={size} height={size} viewBox="-11.5 -10.232 23 20.463" fill="none">
          <circle cx="0" cy="0" r="2.05" fill="#61DAFB"/>
          <g stroke="#61DAFB" strokeWidth="1">
            <ellipse rx="11" ry="4.2"/>
            <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
            <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
          </g>
        </svg>
        {showLabel && <span className="text-sm font-medium">React</span>}
      </span>
    );
  }

  // 9. Next.js
  if (s === "nextjs") {
    return (
      <span className={`inline-flex items-center gap-2 shrink-0 ${className}`} title="Next.js">
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="11" fill="currentColor"/>
          <path d="M15.5 17.5L8.5 7.5H6.5V16.5H8.2V9.8L14.4 18.2C14.8 18 15.2 17.7 15.5 17.5Z" fill="#FFFFFF"/>
          <rect x="14.5" y="7.5" width="1.7" height="9" fill="#FFFFFF"/>
        </svg>
        {showLabel && <span className="text-sm font-medium">Next.js</span>}
      </span>
    );
  }

  // 10. TypeScript
  if (s === "typescript") {
    return (
      <span className={`inline-flex items-center gap-2 shrink-0 ${className}`} title="TypeScript">
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
          <rect width="24" height="24" rx="4" fill="#3178C6"/>
          <path d="M12 8H7v2h1.5v6.5h2V10H12V8zm2.5 5.5c.3.3.8.5 1.4.5.6 0 1-.2 1-.6 0-.3-.2-.5-.8-.7l-.8-.3c-1.1-.4-1.7-1-1.7-2 0-1.2 1-2 2.4-2 1 0 1.7.3 2.1.6l-.6 1.5c-.4-.3-.9-.5-1.5-.5-.6 0-.9.2-.9.5 0 .3.2.5.7.7l.8.3c1.2.4 1.8 1.1 1.8 2.1 0 1.3-1 2.1-2.6 2.1-1.1 0-2-.3-2.5-.8l.6-1.5z" fill="#FFFFFF"/>
        </svg>
        {showLabel && <span className="text-sm font-medium">TypeScript</span>}
      </span>
    );
  }

  // 11. JavaScript
  if (s === "javascript") {
    return (
      <span className={`inline-flex items-center gap-2 shrink-0 ${className}`} title="JavaScript">
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
          <rect width="24" height="24" rx="4" fill="#F7DF1E"/>
          <path d="M7.5 15.8c.4.6 1 .9 1.8.9 1 0 1.6-.5 1.6-1.8v-4.2h1.6v4.2c0 2-1.2 3.1-3.2 3.1-1.4 0-2.3-.6-2.8-1.6l1-.6zm6.8-.2c.4.6 1.1 1.1 2 1.1.9 0 1.5-.4 1.5-1 0-.7-.5-1-1.4-1.3l-.5-.2c-1.4-.5-2.2-1.3-2.2-2.8 0-1.5 1.1-2.6 2.8-2.6 1.2 0 2.1.4 2.7 1.4l-1.2.7c-.3-.5-.8-.8-1.5-.8-.7 0-1.2.4-1.2 1 0 .6.4.9 1.2 1.2l.5.2c1.6.6 2.5 1.4 2.5 2.9 0 1.7-1.3 2.8-3.1 2.8-1.7 0-2.8-.7-3.3-1.8l1.2-.6z" fill="#000000"/>
        </svg>
        {showLabel && <span className="text-sm font-medium">JavaScript</span>}
      </span>
    );
  }

  // 12. Tailwind CSS
  if (s === "tailwindcss") {
    return (
      <span className={`inline-flex items-center gap-2 shrink-0 ${className}`} title="Tailwind CSS">
        <svg width={size} height={size} viewBox="0 0 24 24" fill="#06B6D4">
          <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.335 6.182 14.975 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.335 13.382 8.975 12 6.001 12z"/>
        </svg>
        {showLabel && <span className="text-sm font-medium">Tailwind CSS</span>}
      </span>
    );
  }

  // 13. HTML / CSS
  if (s === "htmlcss" || s === "html" || s === "html5" || s === "css" || s === "css3") {
    return (
      <span className={`inline-flex items-center gap-2 shrink-0 ${className}`} title="HTML / CSS">
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
          <path d="M4 2l1.6 18 6.4 1.8 6.4-1.8L20 2H4z" fill="#E34F26"/>
          <path d="M12 3.6v16.5l4.8-1.3L18.2 3.6H12z" fill="#EF652A"/>
          <path d="M7.7 6.4h8.6l-.2 2.2H12v2.2h3.9l-.4 4.5-3.5 1-3.5-1-.2-2.6H6.6l.4 4.3 5 1.4 5-1.4.6-7H7.5l.2-3.6z" fill="#FFFFFF"/>
        </svg>
        {showLabel && <span className="text-sm font-medium">HTML / CSS</span>}
      </span>
    );
  }

  // 14. Node.js
  if (s === "nodejs") {
    return (
      <span className={`inline-flex items-center gap-2 shrink-0 ${className}`} title="Node.js">
        <svg width={size} height={size} viewBox="0 0 24 24" fill="#339933">
          <path d="M12 2l8.66 5v10L12 22l-8.66-5V7L12 2zm0 2.3L5.34 8.15v7.7L12 19.7l6.66-3.85v-7.7L12 4.3z"/>
          <circle cx="12" cy="12" r="3" fill="#339933"/>
        </svg>
        {showLabel && <span className="text-sm font-medium">Node.js</span>}
      </span>
    );
  }

  // 15. Express
  if (s === "express") {
    return (
      <span className={`inline-flex items-center gap-2 shrink-0 ${className}`} title="Express">
        <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14.5h-4v-1.5h4v1.5zm2.5-3.5h-6.5V7h6.5v1.5h-4.5v1.5h4v1.5h-4v1.5h4.5V13z"/>
        </svg>
        {showLabel && <span className="text-sm font-medium">Express</span>}
      </span>
    );
  }

  // 16. Python
  if (s === "python") {
    return (
      <span className={`inline-flex items-center gap-2 shrink-0 ${className}`} title="Python">
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
          <path d="M11.9 2c-3.1 0-5.1.5-5.1 2.6v2.1h5.3v.8H4.6C2.5 7.5 2 9.5 2 12.6c0 3.3.6 5.1 2.6 5.1h1.5v-2.3c0-2.3 2-4.2 4.3-4.2h5.3v-.8H8.8c-.5 0-.8-.3-.8-.8v-5c0-1.4 1.4-2.6 3.9-2.6h4.5c.5 0 .8.3.8.8v2.1h-5.3v-2.8z" fill="#3776AB"/>
          <path d="M12.1 22c3.1 0 5.1-.5 5.1-2.6v-2.1h-5.3v-.8h7.5c2.1 0 2.6-2 2.6-5.1 0-3.3-.6-5.1-2.6-5.1h-1.5v2.3c0 2.3-2 4.2-4.3 4.2H8.3v.8h6.9c.5 0 .8.3.8.8v5c0 1.4-1.4 2.6-3.9 2.6H7.6c-.5 0-.8-.3-.8-.8v-2.1h5.3V22z" fill="#FFD43B"/>
          <circle cx="8.5" cy="4.5" r=".7" fill="#FFFFFF"/>
          <circle cx="15.5" cy="19.5" r=".7" fill="#FFFFFF"/>
        </svg>
        {showLabel && <span className="text-sm font-medium">Python</span>}
      </span>
    );
  }

  // 17. FastAPI
  if (s === "fastapi") {
    return (
      <span className={`inline-flex items-center gap-2 shrink-0 ${className}`} title="FastAPI">
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="10" fill="#009688"/>
          <path d="M13 4L6 14h5l-1 6 7-10h-5l1-6z" fill="#FFFFFF"/>
        </svg>
        {showLabel && <span className="text-sm font-medium">FastAPI</span>}
      </span>
    );
  }

  // 18. Google Cloud / Vertex AI
  if (s === "googlecloud" || s === "vertexai") {
    return (
      <span className={`inline-flex items-center gap-2 shrink-0 ${className}`} title="Google Cloud">
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
          <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z" fill="#4285F4"/>
          <circle cx="9" cy="13" r="1.5" fill="#34A853"/>
          <circle cx="15" cy="13" r="1.5" fill="#FBBC05"/>
          <circle cx="12" cy="10" r="1.5" fill="#EA4335"/>
        </svg>
        {showLabel && <span className="text-sm font-medium">Google Cloud</span>}
      </span>
    );
  }

  // 19. AWS (Amazon Web Services)
  if (s === "aws" || s === "amazonwebservices") {
    return (
      <span className={`inline-flex items-center gap-2 shrink-0 ${className}`} title="AWS">
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
          <path d="M6.8 11.5L5.4 7h1.6l.8 3.1.8-3.1h1.5l-1.4 4.5H6.8zm4.5 0L10 7.8 8.7 11.5H7.3l2-5.5h1.5l2 5.5h-1.5zm6.5 0l-1-4.2-1 4.2h-1.3l-1.3-5.5h1.4l.7 3.8.9-3.8h1.2l.9 3.8.7-3.8h1.4l-1.3 5.5h-1.2z" fill="#232F3E"/>
          <path d="M4 14.5c4.5 3 11.5 3 16 0" stroke="#FF9900" strokeWidth="2" strokeLinecap="round"/>
          <path d="M19 13.5l1.5 1-1 1.5" fill="#FF9900"/>
        </svg>
        {showLabel && <span className="text-sm font-medium">AWS</span>}
      </span>
    );
  }

  // 20. Azure (Microsoft Azure)
  if (s === "azure" || s === "microsoftazure") {
    return (
      <span className={`inline-flex items-center gap-2 shrink-0 ${className}`} title="Microsoft Azure">
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
          <path d="M13.05 3.5L5.4 17.15l4.8 3.35h8.4L13.05 3.5z" fill="#0089D6"/>
          <path d="M13.05 3.5L8.2 13.8l5.95 4.3 4.45-2.4-5.55-12.2z" fill="#0078D4"/>
          <path d="M14.15 18.1L5.4 17.15 4 19.6l6.2 1.9 3.95-3.4z" fill="#005BA1"/>
        </svg>
        {showLabel && <span className="text-sm font-medium">Azure</span>}
      </span>
    );
  }

  // 21. Cloud Run
  if (s === "cloudrun") {
    return (
      <span className={`inline-flex items-center gap-2 shrink-0 ${className}`} title="Cloud Run">
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
          <rect x="3" y="6" width="18" height="12" rx="2" stroke="#4285F4" strokeWidth="2" fill="none"/>
          <path d="M8 12l3-3v2h5v2h-5v2l-3-3z" fill="#4285F4"/>
        </svg>
        {showLabel && <span className="text-sm font-medium">Cloud Run</span>}
      </span>
    );
  }

  // 22. Firebase / Firestore
  if (s === "firebase" || s === "firestore" || s === "firebasefirestore") {
    return (
      <span className={`inline-flex items-center gap-2 shrink-0 ${className}`} title="Firebase">
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
          <path d="M4.6 17.4L7.5 3.2c.1-.5.7-.7 1.1-.3l3.5 6.6-7.5 7.9z" fill="#FFA000"/>
          <path d="M14.5 8.2l-2.4-4.6c-.3-.5-1-.5-1.3 0L4.6 17.4l9.9-9.2z" fill="#F57C00"/>
          <path d="M12.4 21.6c4.6 0 8.1-3.3 8.1-7.8 0-1.8-.7-3.4-1.8-4.7l-8.6 12.5h2.3z" fill="#FFCA28"/>
        </svg>
        {showLabel && <span className="text-sm font-medium">Firebase</span>}
      </span>
    );
  }

  // 23. NLP (Natural Language Processing)
  if (s === "nlp") {
    return (
      <span className={`inline-flex items-center gap-2 shrink-0 ${className}`} title="NLP">
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
          <rect width="24" height="24" rx="4" fill="#0284C7"/>
          <path d="M5 12h2m2 0h2m2-4v8m4-6v4m2-3v2" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round"/>
          <path d="M7 8l5 4 5-4" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M7 16l5-4 5 4" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        {showLabel && <span className="text-sm font-medium">NLP</span>}
      </span>
    );
  }

  // 24. Computer Vision
  if (s === "computervision") {
    return (
      <span className={`inline-flex items-center gap-2 shrink-0 ${className}`} title="Computer Vision">
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="6.5" r="3.5" stroke="#EE3124" strokeWidth="2" fill="none"/>
          <circle cx="7" cy="15.5" r="3.5" stroke="#009E49" strokeWidth="2" fill="none"/>
          <circle cx="17" cy="15.5" r="3.5" stroke="#0067A5" strokeWidth="2" fill="none"/>
        </svg>
        {showLabel && <span className="text-sm font-medium">Computer Vision</span>}
      </span>
    );
  }

  // 25. Docker
  if (s === "docker") {
    return (
      <span className={`inline-flex items-center gap-2 shrink-0 ${className}`} title="Docker">
        <svg width={size} height={size} viewBox="0 0 24 24" fill="#2496ED">
          <path d="M22.5 10.5c-.3 0-1.2.1-1.8.5-.6-.9-1.6-1.5-2.8-1.5-.1 0-.3 0-.4.1C16.8 8.1 15 7.3 13 7.3H12V9h7.5c.3 0 .5.2.5.5s-.2.5-.5.5H1v2.5c0 4.4 3.6 8 8 8 5.3 0 9.8-3.6 10.8-8.5.8-.1 1.7-.6 2.2-1.5zm-14-3h2v2h-2V7.5zm-3 0h2v2h-2V7.5zm-3 0h2v2H2.5V7.5zm9-3h2v2h-2V4.5zm-3 0h2v2h-2V4.5zm-3 0h2v2h-2V4.5zm9 3h2v2h-2V7.5z"/>
        </svg>
        {showLabel && <span className="text-sm font-medium">Docker</span>}
      </span>
    );
  }

  // 26. Git
  if (s === "git") {
    return (
      <span className={`inline-flex items-center gap-2 shrink-0 ${className}`} title="Git">
        <svg width={size} height={size} viewBox="0 0 24 24" fill="#F05032">
          <path d="M21.7 10.7l-8.4-8.4c-.9-.9-2.4-.9-3.3 0L7.7 4.6l3.5 3.5c.8-.3 1.8-.1 2.4.5.6.6.8 1.6.5 2.4l3.4 3.4c.8-.3 1.8-.1 2.4.5.9.9.9 2.4 0 3.3s-2.4.9-3.3 0c-.7-.7-.9-1.8-.5-2.6l-3.2-3.2v5.8c.4.3.7.8.7 1.4 0 1.1-.9 2-2 2s-2-.9-2-2c0-.6.3-1.1.7-1.4V9.8c-.4-.3-.7-.8-.7-1.4 0-.7.4-1.3 1-1.7L6.6 3.5 2.3 7.8c-.9.9-.9 2.4 0 3.3l8.4 8.4c.9.9 2.4.9 3.3 0l7.7-7.7c.9-1 .9-2.4 0-3.3z"/>
        </svg>
        {showLabel && <span className="text-sm font-medium">Git</span>}
      </span>
    );
  }

  // 27. CI/CD
  if (s === "cicd") {
    return (
      <span className={`inline-flex items-center gap-2 shrink-0 ${className}`} title="CI/CD">
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
          <circle cx="6" cy="12" r="3" fill="#2088FF"/>
          <circle cx="18" cy="6" r="3" fill="#10B981"/>
          <circle cx="18" cy="18" r="3" fill="#F59E0B"/>
          <path d="M9 12h3m0 0l3-5m-3 5l3 5" stroke="#2088FF" strokeWidth="2" strokeLinecap="round"/>
        </svg>
        {showLabel && <span className="text-sm font-medium">CI/CD</span>}
      </span>
    );
  }

  // 28. PostgreSQL
  if (s === "postgresql") {
    return (
      <span className={`inline-flex items-center gap-2 shrink-0 ${className}`} title="PostgreSQL">
        <svg width={size} height={size} viewBox="0 0 24 24" fill="#336791">
          <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c2.3 0 4.4-.8 6.1-2.1l-2.4-3.2c-.7.3-1.5.5-2.3.5-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6c0 .8-.2 1.6-.5 2.3l3.2 2.4C21.2 16.4 22 14.3 22 12c0-5.5-4.5-10-10-10zm-1 6.5c1.4 0 2.5 1.1 2.5 2.5S12.4 13.5 11 13.5 8.5 12.4 8.5 11s1.1-2.5 2.5-2.5z"/>
        </svg>
        {showLabel && <span className="text-sm font-medium">PostgreSQL</span>}
      </span>
    );
  }

  // 29. MongoDB
  if (s === "mongodb") {
    return (
      <span className={`inline-flex items-center gap-2 shrink-0 ${className}`} title="MongoDB">
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
          <path d="M12 2C11.5 3 6 8.5 6 14.5c0 4 3 7.5 6 7.5s6-3.5 6-7.5C18 8.5 12.5 3 12 2z" fill="#47A248"/>
          <path d="M12 2v20c3 0 6-3.5 6-7.5C18 8.5 12.5 3 12 2z" fill="#13AA52"/>
        </svg>
        {showLabel && <span className="text-sm font-medium">MongoDB</span>}
      </span>
    );
  }

  // 30. Supabase
  if (s === "supabase") {
    return (
      <span className={`inline-flex items-center gap-2 shrink-0 ${className}`} title="Supabase">
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
          <path d="M13.5 2L3 14.5h8L9.5 22 21 9.5h-8.5L13.5 2z" fill="#3ECF8E"/>
        </svg>
        {showLabel && <span className="text-sm font-medium">Supabase</span>}
      </span>
    );
  }

  // 31. BigQuery
  if (s === "bigquery") {
    return (
      <span className={`inline-flex items-center gap-2 shrink-0 ${className}`} title="BigQuery">
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
          <path d="M18 10c0-3.3-2.7-6-6-6-2.6 0-4.8 1.7-5.6 4.1C4 8.6 2 10.6 2 13c0 2.8 2.2 5 5 5h11c2.2 0 4-1.8 4-4 0-2.1-1.6-3.8-3.7-4-.1-.3-.2-.7-.3-1z" fill="#4285F4"/>
          <circle cx="12" cy="12" r="3.5" stroke="#FFFFFF" strokeWidth="1.5" fill="none"/>
          <path d="M15 15l3 3" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round"/>
        </svg>
        {showLabel && <span className="text-sm font-medium">BigQuery</span>}
      </span>
    );
  }

  // 32. Figma
  if (s === "figma") {
    return (
      <span className={`inline-flex items-center gap-2 shrink-0 ${className}`} title="Figma">
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
          <path d="M8 2h4v5H8a2.5 2.5 0 0 1 0-5z" fill="#F24E1E"/>
          <path d="M12 2h4a2.5 2.5 0 0 1 0 5h-4V2z" fill="#FF7262"/>
          <path d="M8 7h4v5H8a2.5 2.5 0 0 1 0-5z" fill="#A259FF"/>
          <path d="M12 7h4a2.5 2.5 0 0 1 0 5h-4V7z" fill="#1ABCFE"/>
          <path d="M8 12h4v5a2.5 2.5 0 0 1-4-2.5V12z" fill="#0ACF83"/>
        </svg>
        {showLabel && <span className="text-sm font-medium">Figma</span>}
      </span>
    );
  }

  // 33. VS Code
  if (s === "vscode" || s === "visualstudiocode") {
    return (
      <span className={`inline-flex items-center gap-2 shrink-0 ${className}`} title="VS Code">
        <svg width={size} height={size} viewBox="0 0 24 24" fill="#007ACC">
          <path d="M17.5 2.2L9.2 9.8 4.5 6.2 2 7.7l4.3 3.9L2 15.5l2.5 1.5 4.7-3.6 8.3 7.6 4.5-2.2V4.4L17.5 2.2zm0 4.8v9.2l-5.5-4.6 5.5-4.6z"/>
        </svg>
        {showLabel && <span className="text-sm font-medium">VS Code</span>}
      </span>
    );
  }

  // 34. Postman
  if (s === "postman") {
    return (
      <span className={`inline-flex items-center gap-2 shrink-0 ${className}`} title="Postman">
        <svg width={size} height={size} viewBox="0 0 24 24" fill="#FF6C37">
          <circle cx="12" cy="12" r="10"/>
          <path d="M12 6c-2.2 0-4 1.8-4 4 0 1.2.5 2.3 1.4 3l-1.4 3.5 3-1.2c.3.1.7.2 1 .2 2.2 0 4-1.8 4-4s-1.8-4-4-4zm-1.5 5a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm3 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" fill="#FFFFFF"/>
        </svg>
        {showLabel && <span className="text-sm font-medium">Postman</span>}
      </span>
    );
  }

  // 35. Infosys
  if (s === "infosys") {
    return (
      <span className={`inline-flex items-center gap-2 shrink-0 ${className}`} title="Infosys">
        <span style={{ fontSize: size * 0.7, fontWeight: 800, color: "#007CC3", fontFamily: "sans-serif" }}>Infosys</span>
        {showLabel && <span className="text-sm font-medium">Infosys</span>}
      </span>
    );
  }

  // Fallback: minimal clean dot
  return (
    <span className={`inline-flex items-center justify-center shrink-0 ${className}`} style={{ width: size, height: size }}>
      <span className="w-2 h-2 rounded-full bg-blue-500/80" />
      {showLabel && <span className="text-sm font-medium">{slug}</span>}
    </span>
  );
}

/* Map skill names and project technologies → logo slugs */
export function getLogoSlug(skillName: string): string | null {
  const map: Record<string, string> = {
    // Frontend
    "React": "react",
    "Next.js": "nextjs",
    "TypeScript": "typescript",
    "JavaScript": "javascript",
    "Tailwind CSS": "tailwindcss",
    "HTML / CSS": "htmlcss",
    "HTML5": "htmlcss",
    "CSS3": "htmlcss",

    // Backend
    "Node.js": "nodejs",
    "Express": "express",
    "Python": "python",
    "FastAPI": "fastapi",

    // Cloud & Infra
    "Google Cloud": "googlecloud",
    "AWS": "aws",
    "Azure": "azure",
    "Cloud Run": "cloudrun",
    "Firebase / Firestore": "firebase",
    "Firebase": "firebase",
    "Docker": "docker",

    // DevOps & Tools
    "Git / GitHub": "github",
    "Git": "git",
    "GitHub": "github",
    "CI/CD": "cicd",
    "Figma": "figma",
    "VS Code": "vscode",
    "Postman": "postman",

    // Databases
    "PostgreSQL": "postgresql",
    "MongoDB": "mongodb",
    "Supabase": "supabase",
    "BigQuery": "bigquery",

    // AI/ML
    "AI Agents": "aiagents",
    "Gemini": "gemini",
    "Anthropic Claude": "claude",
    "Vertex AI": "vertexai",
    "NLP": "nlp",
    "Computer Vision": "computervision",
    "AI/ML": "aiagents",
    "Machine Learning": "aiagents",

    // Social & Partners
    "LinkedIn": "linkedin",
    "X": "x",
    "Twitter": "x",
    "Google": "google",
    "Infosys": "infosys",
  };
  return map[skillName] || map[skillName.trim()] || null;
}
