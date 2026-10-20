# Dinesh Kumar Bingi — Personal Portfolio

A modern, high-performance developer portfolio built with Next.js 16 (Turbopack), React 19, TypeScript, and Tailwind CSS v4. Designed around an innovative interactive **Central Hub** that branches into six focused experiences showcasing engineering work across AI Agents, Cloud, Full-Stack applications, Hackathons, and Open Source.

---

## Overview

This portfolio represents **Dinesh Kumar Bingi** — Computer Science undergraduate, AI Engineer, Full-Stack Developer, and Google Student Ambassador '26.

Visitors can explore:
- **Central Hub**: Interactive six-node digital space with hover micro-interactions, sticker cards, and direct keyboard/touch navigation.
- **About**: Background narrative, technical philosophies, categorized tools & tech stack with vector brand logos, and direct contact options.
- **Projects**: 7 pinned production systems, including AI agent verification platforms, clinical healthcare architectures, agritech price intelligence, and enterprise copilots.
- **Internships**: Industrial engineering experiences spanning Infosys Springboard, Unified Mentor, Bluestock FinTech, and 1M1B Green Skills.
- **Open Source**: Contributions across open-source initiatives including GirlScript Summer of Code (GSSoC '26), Social Summer of Code (SSoC), and Open Source Community India (OSCI).
- **Hackathons**: National-level podiums including 1st Place at the Google Office Grand Finale (AI Agent Builder 2026), DropHack, TechSpark, and Agentic Premier League.
- **Networking & Communities**: Google Student Ambassador initiatives, McKinsey Forward alumni network, and national technology summit key takeaways.
- **Resume & Social Connectivity**: Downloadable curriculum vitae and quick-access social links located on the main hub.

---

## Live Website

- **Status**: Production-Ready / Awaiting Vercel Deployment
- **Target URL**: [https://dineshkumarbingi.dev](https://dineshkumarbingi.dev) *(configurable upon domain DNS setup)*
- **GitHub Repository**: [https://github.com/Dineshkumar2006471/Portfolio.git](https://github.com/Dineshkumar2006471/Portfolio.git)

---

## Key Features

1. **Circular Interactive Central Hub**:
   - 6 custom-styled destination hubs with responsive orbital layouts.
   - Micro-interaction sticker explosions on desktop hover.
   - Seamless transition to and from subviews with zero page reloads.

2. **Isolated Subview Experience**:
   - Clean view states with floating return-to-hub navigation.
   - Dynamic resume pill and social trigger visible exclusively on the main home hub, keeping subview reading experiences distraction-free.

3. **Fully Responsive Across All Viewports**:
   - Mobile-first architecture tested from small screens (<375px) up to 4K desktop displays.
   - Safe-area inset support for notched and curved mobile screens (`env(safe-area-inset-bottom)`).
   - Touch-optimized interaction surfaces with minimum 44px tap targets.

4. **Strict Accessibility Standards**:
   - Full keyboard accessibility with visible focus rings.
   - Comprehensive `aria-label` attributes on all icon-only buttons, back buttons, and social anchors.
   - Support for `prefers-reduced-motion: reduce` across all animations and keyframes.

5. **Deterministic Production Assets**:
   - 100% locally served static assets (logos, project mockups, badges, certificates, resume PDF).
   - Zero broken external image dependencies or hotlinks.

---

## Tech Stack

| Layer | Technology | Version |
|---|---|---|
| **Framework** | Next.js (App Router, Turbopack) | 16.3.6 |
| **Language** | TypeScript | 5.x |
| **UI Library** | React & React DOM | 19.2.8 |
| **Styling** | Tailwind CSS (PostCSS plugin) | 4.x |
| **Typography** | Plus Jakarta Sans & Handwritten font | next/font |
| **Animation** | CSS Keyframes & GSAP | 3.15.0 |
| **Icons & Logos** | Custom SVG Component Library (`TechLogos.tsx`) | Native React |

---

## Project Structure

```text
portfolio-app/
├── public/
│   ├── assets/
│   │   ├── hackathons/        # Hackathon stage & award photos
│   │   ├── logos/             # Tech brand vector marks & employer logos
│   │   ├── networking/        # Community & summit badges
│   │   ├── opensource/        # Open source program emblems
│   │   ├── profile/           # High-resolution profile photography
│   │   └── projects/          # High-fidelity project screenshots & previews
│   ├── DK_Resume.pdf          # Verified curriculum vitae PDF
│   └── favicon.svg            # Custom SVG browser icon
├── src/
│   ├── app/
│   │   ├── globals.css        # Tailwind v4 theme tokens, responsive styles, animations
│   │   ├── layout.tsx         # Root layout with OpenGraph, SEO metadata, fonts
│   │   └── page.tsx           # Hub controller & view state coordinator
│   ├── components/
│   │   ├── hub/
│   │   │   ├── CentralHub.tsx # Interactive 6-destination orbital hub
│   │   │   └── SocialDots.tsx # Floating resume trigger & expandable social links
│   │   ├── views/
│   │   │   ├── AboutView.tsx       # Profile, categorized skills, contact
│   │   │   ├── ProjectsView.tsx    # 7 pinned project cards with live & code links
│   │   │   ├── InternshipsView.tsx # Industrial experience cards & badges
│   │   │   ├── OpenSourceView.tsx  # Open-source program milestones
│   │   │   ├── HackathonsView.tsx  # Competition awards & podium proofs
│   │   │   └── NetworkingView.tsx  # Ambassador, alumni, and summit takeaways
│   │   └── TechLogos.tsx      # Reusable vector SVG tech logo component
│   ├── data/
│   │   ├── hackathons.ts      # Structured hackathon data
│   │   ├── internships.ts     # Internship positions, dates, and descriptions
│   │   ├── networking.ts      # Community memberships & summits
│   │   ├── opensource.ts      # Open-source contributor records
│   │   ├── profile.ts         # Personal details, positioning, and contact links
│   │   ├── projects.ts        # Pinned project records, tech tags, and links
│   │   └── skills.ts          # Categorized technical competencies
│   └── lib/
│       └── fonts.ts           # Google font definitions (Plus Jakarta Sans & Shadows Into Light)
├── scripts/
│   ├── check-assets.js        # Automated script verifying all asset paths exist in public/
│   └── check-reachability.js  # Dead-code and import graph reachability analyzer
├── .env.example               # Environment variable declaration
├── eslint.config.mjs          # Flat ESLint 9 configuration with Next.js & TS rules
├── next.config.ts             # Next.js compiler settings
├── package.json               # Dependencies and execution scripts
├── postcss.config.mjs         # Tailwind v4 PostCSS configuration
├── tsconfig.json              # TypeScript compiler configuration
└── README.md                  # Project documentation
```

---

## Prerequisites

- **Node.js**: `v18.17.0` or higher (tested on Node `v25.6.0`)
- **Package Manager**: `npm` (included with Node.js) or `pnpm`

---

## Installation & Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Dineshkumar2006471/Portfolio.git
   cd Portfolio/portfolio-app
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start local development server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Quality Checks & Verification

Run the full validation suite to verify production readiness:

```bash
# 1. Type check without emitting files
npx tsc --noEmit

# 2. Run ESLint across all source files
npm run lint

# 3. Create optimized production build
npm run build

# 4. Verify all asset paths in src/data exist on disk
node scripts/check-assets.js
```

All 4 checks are verified to pass with **0 errors and 0 warnings**.

---

## Environment Variables

This application is built as a static/client-side portfolio and requires **no private API keys or server secrets** to build or deploy.

Refer to [`.env.example`](.env.example) for optional public variables:
```bash
# Optional base URL configuration:
# NEXT_PUBLIC_SITE_URL=https://dineshkumarbingi.dev
```

---

## Vercel Deployment Guide

To deploy this project to Vercel:

1. **Push to GitHub**:
   Ensure all changes are committed and pushed to the `main` branch:
   ```bash
   git add .
   git commit -m "chore: harden portfolio for production"
   git push -u origin main
   ```

2. **Import to Vercel**:
   - Go to [vercel.com](https://vercel.com) and log in.
   - Click **Add New...** > **Project**.
   - Select the `Portfolio` repository from GitHub.

3. **Configure Project Settings**:
   - **Framework Preset**: Next.js (automatically detected)
   - **Root Directory**: If your repository contains `portfolio-app/` as a subfolder, set Root Directory to `portfolio-app`. If `portfolio-app` is the repository root, leave it as `./`.
   - **Build Command**: `next build` (default)
   - **Output Directory**: `.next` (default)
   - **Install Command**: `npm install` (default)

4. **Deploy**:
   - Click **Deploy**.
   - Vercel will run the Turbopack build and generate a preview deployment URL in ~30 seconds.
   - Add your custom domain under **Project Settings > Domains**.

---

## Updating Content & Assets

All content is decoupled from presentation and stored in type-safe TypeScript files:

| Content | File Path |
|---|---|
| **Bio, Socials & Contact** | `src/data/profile.ts` |
| **Pinned Projects** | `src/data/projects.ts` |
| **Internships** | `src/data/internships.ts` |
| **Open Source** | `src/data/opensource.ts` |
| **Hackathons** | `src/data/hackathons.ts` |
| **Networking & Summits** | `src/data/networking.ts` |
| **Skills & Categorized Tech** | `src/data/skills.ts` |
| **Resume PDF** | `public/DK_Resume.pdf` |
| **Images & Logos** | `public/assets/` |

---

## Contact & Links

- **Name**: Dinesh Kumar Bingi
- **Email**: [bingidineshkumar@gmail.com](mailto:bingidineshkumar@gmail.com)
- **LinkedIn**: [linkedin.com/in/bingidineshkumar18](https://www.linkedin.com/in/bingidineshkumar18)
- **GitHub**: [github.com/Dineshkumar2006471](https://github.com/Dineshkumar2006471)
- **X (Twitter)**: [x.com/Dk814032541](https://x.com/Dk814032541)

---

## License

Personal Portfolio & Architectural Works © 2026 Dinesh Kumar Bingi. All rights reserved.
