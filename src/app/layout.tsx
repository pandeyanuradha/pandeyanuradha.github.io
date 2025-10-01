import type { Metadata } from "next";
import { Geist, Geist_Mono, Noto_Serif, PT_Serif } from "next/font/google";
import "./globals.css";
import { aboutMe } from "@/data/aboutme";
import { customMetadata } from "@/data/title-description";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const notoSerif = Noto_Serif({
  variable: "--font-noto-serif",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const ptSerif = PT_Serif({
  variable: "--font-pt-serif",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: customMetadata.title || "A. Pandey",
  description: customMetadata.description || aboutMe.description,
  icons: {
    icon: "/favicon.png",
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
        className={`${geistSans.variable} ${geistMono.variable} ${notoSerif.variable} ${ptSerif.variable} antialiased`}
      >
        <main className="">{children}</main>
        <div className="border-t border-zinc-900 px-8 py-2">
          <p className="text-center text-xs text-zinc-500">
            © Copyright 2025 Anuradha Pandey • Inspired by{" "}
            <a
              href="https://github.com/tovacinni/research-website-template"
              className="hover:text-zinc-700 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              research-website-template
            </a>
          </p>
        </div>
      </body>
    </html>
  );
}
