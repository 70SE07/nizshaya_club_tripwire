import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Нижча Ліга — перший результат вже на першому стримі",
  description: "Закрите AI ком'юніті практиків. Жодної теорії — готові зв'язки, асистенти та воркфлоу. Береш, копіюєш, заробляєш. Від $50/міс.",
  metadataBase: new URL("https://nizshaya.club"),
  openGraph: {
    title: "Нижча Ліга — перший результат вже на першому стримі",
    description: "Закрите AI ком'юніті практиків. Жодної теорії — готові зв'язки, асистенти та воркфлоу. Береш, копіюєш, заробляєш.",
    url: "https://nizshaya.club",
    siteName: "Нижча Ліга",
    locale: "uk_UA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Нижча Ліга — перший результат вже на першому стримі",
    description: "Закрите AI ком'юніті практиків. Жодної теорії — готові зв'язки, асистенти та воркфлоу. Береш, копіюєш, заробляєш.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk" className="dark">
      <body
        className={`${geistSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
