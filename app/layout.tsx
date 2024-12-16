import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";
import Navbar from "@/components/Navbar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Click & Paf - La mode déjantée !",
  description:
    "Bienvenue sur Click & Paf, l'appli où la mode rencontre l'imprévu et l'originalité ! Explorez une plateforme ludique qui révolutionne votre style avec des tendances dingues. À vos clics, prêts et paf !",
  keywords: [
    "clicketpaf",
    "click & paf",
    "click",
    "paf",
    "mode",
    "tendances",
    "style",
    "paf le chien",
  ],
  robots: "index, follow",
  openGraph: {
    title: "Click & Paf - la mode déjantée !",
    description:
      "Bienvenue sur Click & Paf, l'appli où la mode rencontre l'imprévu et l'originalité ! Explorez une plateforme ludique qui révolutionne votre style avec des tendances dingues. À vos clics, prêts et paf !",
    images: [
      {
        url: "/img/clicketpaf_logo_medium.jpg",
        width: 600,
        height: 400,
        alt: "Click & Paf - la mode déjantée !",
      },
    ],
    type: "website",
    url: "https://clicketpaf.store",
  },
  twitter: {
    title: "Click & Paf - la mode déjantée !",
    description:
      "Bienvenue sur Click & Paf, l'appli où la mode rencontre l'imprévu et l'originalité ! Explorez une plateforme ludique qui révolutionne votre style avec des tendances dingues. À vos clics, prêts et paf !",
    images: [
      {
        url: "/img/clicketpaf_logo_medium.jpg",
        width: 600,
        height: 400,
        alt: "My custom alt",
      },
    ],
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
      </body>
      <GoogleAnalytics gaId="G-9MY3MYGXL9" />
    </html>
  );
}
