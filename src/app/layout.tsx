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
  title: "Deep Soul | 5-\u0434\u043D\u0435\u0432\u043D\u044B\u0439 \u0438\u043D\u0442\u0435\u043D\u0441\u0438\u0432 \u00AB\u0412\u0437\u0440\u043E\u0441\u043B\u044B\u0435 \u0438\u0433\u0440\u044B\u00BB",
  description: "\u041D\u0430\u0443\u0447\u0438\u0441\u044C \u0438\u0441\u043A\u0443\u0441\u0441\u0442\u0432\u0443 \u043E\u0440\u0430\u043B\u044C\u043D\u044B\u0445 \u043B\u0430\u0441\u043A. \u0411\u0435\u0437 \u0431\u043E\u043B\u0438. \u0411\u0435\u0437 \u0441\u0442\u044B\u0434\u0430. \u0421 \u043A\u0430\u0439\u0444\u043E\u043C.",
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
