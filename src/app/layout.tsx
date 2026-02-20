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
  title: "Низшая Лига — AI-клуб, где зарабатывают на нейросетях",
  description: "Закрытый клуб практиков. Рабочие воркфлоу, агенты, боты — всё, что уже приносит результат. Еженедельные стримы, готовые решения, приватное сообщество.",
  metadataBase: new URL("https://nizshaya.club"),
  openGraph: {
    title: "Низшая Лига — AI-клуб, где зарабатывают на нейросетях",
    description: "Закрытый клуб практиков. Рабочие воркфлоу, агенты, боты — всё, что уже приносит результат.",
    url: "https://nizshaya.club",
    siteName: "Низшая Лига",
    locale: "ru_RU",
    type: "website",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Низшая Лига — AI-клуб",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Низшая Лига — AI-клуб, где зарабатывают на нейросетях",
    description: "Закрытый клуб практиков. Рабочие воркфлоу, агенты, боты — всё, что уже приносит результат.",
    images: ["/og.png"],
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
