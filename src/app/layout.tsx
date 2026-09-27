import type { Metadata, Viewport } from "next";
import { IBM_Plex_Mono, IBM_Plex_Sans, IBM_Plex_Serif } from "next/font/google";
import { site } from "@/content/site";
import "./globals.css";

const plexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-plex-sans",
  weight: ["400", "500"],
});

/** Only the hero's accent phrase uses it: a serif italic from the same family. */
const plexSerif = IBM_Plex_Serif({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-plex-serif",
  weight: ["300"],
  style: ["italic"],
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-plex-mono",
  weight: ["400", "500"],
});

const description =
  "Backend engineer building high-throughput data infrastructure in Rust and Python — log pipelines, document intelligence and AI governance platforms.";

/**
 * Absolute origin for OG/canonical tags. On Vercel this resolves itself from
 * the deployment; set NEXT_PUBLIC_SITE_URL once a custom domain is attached.
 */
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${site.name} — ${site.role}`,
    template: `%s — ${site.name}`,
  },
  description,
  keywords: ["backend engineer", "Rust", "Python", "distributed systems", "Kubernetes", site.name],
  authors: [{ name: site.name, url: site.github }],
  creator: site.name,
  openGraph: {
    type: "profile",
    title: `${site.name} — ${site.role}`,
    description,
    siteName: site.name,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.role}`,
    description,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fbfaf8" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0b" },
  ],
};

/**
 * Runs before first paint so the correct theme is on <html> when the page
 * renders. Without this the page flashes the wrong ground colour on load.
 */
const themeScript = `
(function () {
  try {
    var stored = localStorage.getItem("theme");
    var theme = stored === "light" || stored === "dark"
      ? stored
      : (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    document.documentElement.setAttribute("data-theme", theme);
  } catch (e) {
    document.documentElement.setAttribute("data-theme", "dark");
  }
})();
`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className={`${plexSans.variable} ${plexSerif.variable} ${plexMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
