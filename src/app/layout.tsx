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
    default: "Tateno Pictures | Cinematic Storytelling & Film Academy",
    template: "%s | Tateno Pictures",
  },
  description: "Kampala-based production studio specializing in high-end cinematography, documentaries, music videos, commercials, and professional film training.",
  keywords: ["Tateno Pictures", "Willy Okecha", "Cinematography Uganda", "Film Production Kampala", "Documentary Filmmaking", "Music Videos East Africa", "Film Academy Uganda", "DaVinci Resolve Color Grading"],
  authors: [{ name: "Willy Okecha" }],
  creator: "Tateno Pictures",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://tatenopictures.com",
    title: "Tateno Pictures | Cinematic Storytelling & Film Academy",
    description: "Kampala-based production studio specializing in high-end cinematography, documentaries, music videos, commercials, and professional film training.",
    siteName: "Tateno Pictures",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tateno Pictures | Cinematic Storytelling & Film Academy",
    description: "Kampala-based production studio specializing in high-end cinematography, documentaries, music videos, commercials, and professional film training.",
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
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

