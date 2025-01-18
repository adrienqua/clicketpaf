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
    title: "Clicketpaf - Vêtements pour Homme et Accessoires de Mode",
    description:
        "Renouvelez votre garde-robe avec style grâce à Clicketpaf. Découvrez nos collaborations exclusives en édition limitée, inspirées de l'actualité et des dernières tendances.",
    keywords: [
        "clicketpaf",
        "click & paf",
        "click",
        "paf",
        "mode",
        "vêtements",
        "garde-robe",
        "prêt-a-porter",
        "t-shirt",
        "sweat",
        "pull",
        "tendances",
        "collection",
        "édition limitée",
        "style",
        "paf le chien",
    ],
    robots: "index, follow",
    openGraph: {
        title: "Clicketpaf - Vêtements pour homme et Accessoires de Mode",
        description:
            "Renouvelez votre garde-robe avec style grâce à Clicketpaf. Découvrez nos collaborations exclusives en édition limitée, inspirées de l'actualité et des dernières tendances.",
        images: [
            {
                url: "/img/clicketpaf_logo_medium.jpg",
                width: 600,
                height: 400,
                alt: "Click & Paf - Vêtements pour homme et accessoires de mode",
            },
        ],
        type: "website",
        url: "https://clicketpaf.store",
    },
    twitter: {
        title: "Clicketpaf - Vêtements pour homme et Accessoires de Mode",
        description:
            "Renouvelez votre garde-robe avec style grâce à Clicketpaf. Découvrez nos collaborations exclusives en édition limitée, inspirées de l'actualité et des dernières tendances.",
        images: [
            {
                url: "/img/clicketpaf_logo_medium.jpg",
                width: 600,
                height: 400,
                alt: "Click & Paf - Vêtements pour homme et accessoires de mode",
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
                className={`${poppins.className} ${montserrat.variable} antialiased bg-amber-50/60 min-h-screen flex flex-col`}
            >
                <Navbar />
                <div className="mt-32 flex-grow">{children}</div>
                <Footer />
            </body>
            <GoogleAnalytics gaId="G-9MY3MYGXL9" />
        </html>
    )
}
