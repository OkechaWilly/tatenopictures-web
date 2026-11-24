import type { Metadata } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-serif",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Tateno Pictures | Film, Photography & Creative Production",
    template: "%s | Tateno Pictures",
  },
  description: "Tateno Pictures is a Kampala-based creative production studio working across film, photography, music videos, branded content and community-based creative skills development.",
  keywords: ["Tateno Pictures", "Willy Okecha", "Film Production Uganda", "Photography Kampala", "Documentary Filmmaking", "Music Videos Uganda", "Creative Skills Development", "Tateno Film Academy"],
  authors: [{ name: "Willy Okecha" }],
  creator: "Tateno Pictures",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://tatenopictures.com",
    title: "Tateno Pictures | Film, Photography & Creative Production",
    description: "A Kampala-based creative production studio working across film, photography, music videos, branded content and community-based creative skills development.",
    siteName: "Tateno Pictures",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tateno Pictures | Film, Photography & Creative Production",
    description: "Independent creative production in Kampala, Uganda. Explore our film, photography and post-production work.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${jakarta.variable} ${spaceGrotesk.variable}`}>
      <body className="bg-[#060608] text-[#F0EBE3] antialiased selection:bg-[rgba(201,168,76,0.15)] selection:text-[#E2B95A]">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

