import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Eurekadev - Création de sites web modernes et performants",
  description:
    "Agence web indépendante spécialisée dans la création et la refonte de sites web, le SEO et la maintenance pour artisans et TPE/PME.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
    <head>
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
      <link rel="manifest" href="/site.webmanifest"/>
    </head>
    <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
    >
      <GoogleAnalytics gaId="G-YXLWWR34YE" />
    <div className="bg-yellow-400 text-yellow-900 text-center py-2 px-4 font-medium text-sm">
      🚧 Site en construction - Certaines fonctionnalités peuvent être limitées. 🚧
        </div>
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>

    </html>
  );
}
