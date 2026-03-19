import type { Metadata } from "next";
import { Inter, Geist } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "PepStack — Peptide Tracking App",
  description:
    "Track doses, log bloodwork, monitor symptoms — all in one beautiful app powered by AI. The smartest way to manage your peptide protocol.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("antialiased", inter.variable, "font-sans", geist.variable)}>
      <body className="min-h-screen bg-[#0A0E1A] text-white font-sans">
        {children}
      </body>
    </html>
  );
}
