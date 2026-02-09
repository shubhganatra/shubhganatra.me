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
  title: "Shubh Ganatra | Portfolio",
  description: "Full Stack Developer - Portfolio showcasing projects and experience",
  keywords: ["portfolio", "developer", "projects", "experience"],
  authors: [{ name: "Shubh Ganatra" }],
  viewport: "width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900`}
      >
        {children}
      </body>
    </html>
  );
}
