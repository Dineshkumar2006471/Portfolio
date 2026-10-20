import type { Metadata } from "next";
import { sans, handwritten } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dinesh Kumar Bingi — AI/ML · Full-Stack · Cloud · AI Agents",
  description:
    "CSE undergrad, AI Engineer, and Full-Stack Developer building multi-agent systems, AI evaluation infrastructure, and scalable cloud products. Google Student Ambassador '26.",
  keywords: [
    "Dinesh Kumar Bingi",
    "AI Engineer",
    "Full-Stack Developer",
    "Google Student Ambassador",
    "AI Agents",
    "Machine Learning",
    "Cloud",
    "Portfolio",
  ],
  authors: [{ name: "Dinesh Kumar Bingi" }],
  creator: "Dinesh Kumar Bingi",
  openGraph: {
    type: "website",
    title: "Dinesh Kumar Bingi — AI/ML · Full-Stack · Cloud · AI Agents",
    description:
      "CSE undergrad, AI Engineer, Full-Stack Developer building multi-agent systems and scalable cloud products.",
    url: "https://dineshkumarbingi.dev",
    siteName: "Dinesh Kumar Bingi",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dinesh Kumar Bingi — AI/ML · Full-Stack · Cloud · AI Agents",
    description:
      "CSE undergrad, AI Engineer, Full-Stack Developer building multi-agent systems and scalable cloud products.",
    creator: "@Dk814032541",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${sans.variable} ${handwritten.variable}`}
    >
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
