import type { Metadata } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://tatenopictures-web.vercel.app";

const cormorant = Cormorant_Garamond({ subsets: ["latin"], weight: ["300", "400", "500", "600"], variable: "--font-serif", display: "swap" });
const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700"], variable: "--font-sans", display: "swap" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-mono", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "Tateno Pictures | Film, Photography & Creative Production", template: "%s | Tateno Pictures" },
  description: "Independent creative production in Kampala, Uganda. Film, photography, cinematography, editing and colour grading.",
  keywords: ["Tateno Pictures", "Film Production Uganda", "Photography Kampala", "Documentary Filmmaking", "Music Videos Uganda"],
  authors: [{ name: "Tateno Pictures" }],
  creator: "Tateno Pictures",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_UG",
    url: siteUrl,
    title: "Tateno Pictures | Film, Photography & Creative Production",
    description: "Independent creative production in Kampala, Uganda. Film, photography and post-production.",
    siteName: "Tateno Pictures",
  },
  twitter: { card: "summary_large_image", title: "Tateno Pictures", description: "Film, photography and post-production from Kampala, Uganda." },
  robots: { index: true, follow: true },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Tateno Pictures",
  url: siteUrl,
  description: "Independent creative production studio working across film, photography and post-production.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Kampala",
    addressCountry: "UG",
  },
  areaServed: {
    "@type": "Country",
    name: "Uganda",
  },
  knowsAbout: [
    "Film production",
    "Documentary filmmaking",
    "Cinematography",
    "Photography",
    "Video editing",
    "Colour grading",
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${jakarta.variable} ${spaceGrotesk.variable}`}>
      <body className="bg-[var(--paper)] text-[var(--ink)] antialiased">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
