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
  title: "Низшая Лига — первый результат уже на первом стриме",
  description: "Закрытое AI комьюнити практиков. Никакой теории — готовые связки, воркфлоу, агенты и боты. Берёшь, копируешь, зарабатываешь. $79/мес.",
  metadataBase: new URL("https://nizshaya.club"),
  openGraph: {
    title: "Низшая Лига — первый результат уже на первом стриме",
    description: "Закрытое AI комьюнити практиков. Никакой теории — готовые связки, воркфлоу, агенты и боты. Берёшь, копируешь, зарабатываешь.",
    url: "https://nizshaya.club",
    siteName: "Низшая Лига",
    locale: "ru_RU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Низшая Лига — первый результат уже на первом стриме",
    description: "Закрытое AI комьюнити практиков. Никакой теории — готовые связки, воркфлоу, агенты и боты. Берёшь, копируешь, зарабатываешь.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
