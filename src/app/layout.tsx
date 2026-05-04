import type { Metadata } from "next";
import { Figtree, Monoton } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/global/Navbar";
import Footer from "@/components/global/Footer";
import { sanityFetch } from "@/sanity/lib/fetch";
import { SETTINGS_QUERY } from "@/sanity/lib/queries";
import { Analytics } from "@vercel/analytics/next";

const figtree = Figtree({ subsets: ["latin"], variable: "--font-figtree" });
const monoton = Monoton({ weight: "400", subsets: ["latin"], variable: "--font-monoton" });

export const metadata: Metadata = {
  title: "Israel Oyebọade | Backend & Full Stack Engineer",
  description: "Portfolio of Israel Oyeboade, a Software Engineer specializing in Python, API Development, and Flutter.",
  icons: {
    icon: "/io-logo.ico",
    shortcut: "/io-logo.ico",
    apple: "/io-logo.ico"
  },
  openGraph: {
    title: "Israel Oyebọade | Backend & Full Stack Engineer",
    description: "Portfolio of Israel Oyeboade, a Software Engineer specializing in Python, API Development, and Flutter.",
    url: "https://israel-oye.vercel.app",
    siteName: "Israel Oyebọade",
    images: [
      {
        url: "https://israel-oye.vercel.app/profile-4.jpg",
        width: 1200,
        height: 630
      },
    ],
    type: "website"
  }
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  let resumeUrl = "/resume.pdf"; // Default fallback

  try {
    const settings = await sanityFetch({ query: SETTINGS_QUERY });
    if (settings?.resumeUrl) {
      resumeUrl = settings.resumeUrl;
    }
  } catch (error) {
    console.error("Failed to fetch settings:", error);
  }

  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${figtree.variable} ${monoton.variable} antialiased bg-background text-foreground flex flex-col min-h-screen font-sans`}
      >
        <Navbar resumeUrl={resumeUrl} />
        <main className="flex-1 pt-20">
          {children}
        </main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
