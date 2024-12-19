import type { Metadata } from "next"
import localFont from "next/font/local"
import "./globals.css"
import { GoogleAnalytics } from "@next/third-parties/google"
import Navbar from "@/components/Navbar"

const geistSans = localFont({
    src: "./fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
})
const geistMono = localFont({
    src: "./fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
})

export const metadata: Metadata = {
    title: "Clicketpaf - La mode déjantée !",
    description:
        "Clicketpaf c'est des drops chaque semaine de sapes en édition limitée, inspirées de l’actu. Du style, du collector et des vibes uniques. Tu cliques et paf t'as le look !",
    keywords: ["clicketpaf", "click & paf", "click", "paf", "mode", "tendances", "style", "paf le chien"],
    robots: "index, follow",
    openGraph: {
        title: "Clicketpaf - la mode déjantée !",
        description:
            "Clicketpaf c'est des drops chaque semaine de sapes en édition limitée, inspirées de l’actu. Du style, du collector et des vibes uniques. Tu cliques et paf t'as le look !",
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
        title: "Clicketpaf - la mode déjantée !",
        description:
            "Clicketpaf c'est des drops chaque semaine de sapes en édition limitée, inspirées de l’actu. Du style, du collector et des vibes uniques. Tu cliques et paf t'as le look !",
        images: [
            {
                url: "/img/clicketpaf_logo_medium.jpg",
                width: 600,
                height: 400,
                alt: "Click & Paf - la mode déjantée !",
            },
        ],
        card: "summary_large_image",
    },
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="fr">
            <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
                <Navbar />
                {children}
            </body>
            <GoogleAnalytics gaId="G-9MY3MYGXL9" />
        </html>
    )
}
