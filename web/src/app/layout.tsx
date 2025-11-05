import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Prestige Horizon Enclave | Premium Gated Community Plots",
  description:
    "Discover Prestige Horizon Enclave, a VMRDA-approved gated community on NH-16 with ready infrastructure, lush avenues, and unbeatable connectivity to Bhogapuram Airport and Visakhapatnam.",
  openGraph: {
    title: "Prestige Horizon Enclave | Premium Gated Community Plots",
    description:
      "Secure your premium VMRDA-approved plot just minutes from Bhogapuram International Airport and Miracle Software Park. Avenue plantations, 24x7 power, and dedicated security included.",
    url: "https://agentic-69b44253.vercel.app",
    siteName: "Prestige Horizon Enclave",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Prestige Horizon Enclave | Premium Gated Community Plots",
    description:
      "Exclusive gated community plots with NH-16 frontage, lush avenues, and seamless access to Bhogapuram International Airport.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-slate-950 text-slate-100`}
      >
        {children}
      </body>
    </html>
  );
}
