import type { Metadata } from "next"
import "./globals.css"
import { GoogleAnalytics } from "@next/third-parties/google"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { Poppins, Montserrat } from "next/font/google"

const poppins = Poppins({ weight: ["400", "500", "600", "700"], subsets: ["latin"], display: "swap" })
const montserrat = Montserrat({
    weight: ["400", "800"],
    subsets: ["latin"],
    display: "swap",
    variable: "--font-montserrat",
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
            <body
                className={`${poppins.className} ${montserrat.variable} antialiased  #bg-[#0a0a0a] #text-gray-200 #bg-indigo-50/20 #text-black bg-amber-50/25 min-h-screen flex flex-col`}
            >
                <Navbar />
                <main className="mt-32 flex-grow">{children}</main>
                <Footer />
            </body>
            <GoogleAnalytics gaId="G-9MY3MYGXL9" />
        </html>
    )
}
