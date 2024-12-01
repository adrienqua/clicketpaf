import Image from "next/image"

import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Click & Paf, la mode déjantée !",
    description:
        "Bienvenue sur Click & Paf, l'appli où la mode rencontre l'imprévu et l'originalité ! Explorez une plateforme ludique qui révolutionne votre style avec des tendances dingues. À vos clics, prêts... paf !",
    keywords: ["clicketpaf", "click & paf", "click", "paf", "mode", "tendances", "style", "paf le chien"],
    robots: "index, follow",
    openGraph: {
        title: "Click & Paf, la mode déjantée !",
        description:
            "Bienvenue sur Click & Paf, l'appli où la mode rencontre l'imprévu et l'originalité ! Explorez une plateforme ludique qui révolutionne votre style avec des tendances dingues. À vos clics, prêts... paf !",
    },
    twitter: {
        title: "Click & Paf, la mode déjantée !",
        description:
            "Bienvenue sur Click & Paf, l'appli où la mode rencontre l'imprévu et l'originalité ! Explorez une plateforme ludique qui révolutionne votre style avec des tendances dingues. À vos clics, prêts... paf !",
    },
}

export default function Home() {
    return (
        <main className="flex flex-col container mx-auto items-center justify-center min-h-screen max-w-[800px]">
            <h1 className="text-3xl font-bold mb-4">Click & Paf</h1>
            <Image
                src="/img/placeholder.png"
                alt="Histoire de Clicketpaf"
                width={300}
                height={200}
                className="rounded-lg mb-8"
            />
            <div>
                <h2 className="text-2xl font-bold mb-4">Notre histoire</h2>
                <p className="mb-4 leading-loose">
                    {` Click & Paf a été fondée en 2022 par deux entrepreneurs passionnés de mode urbaine, Léo et Thomas.
                    Leur objectif était clair : offrir une sélection de vêtements tendance et de qualité, tout en
                    restant ancrés dans l’univers de la culture street. La boutique, située dans un quartier dynamique
                    de la ville, se distingue par son ambiance moderne et épurée, où chaque détail est pensé pour
                    refléter l’identité de la marque. Le nom "Click & Paf" symbolise à la fois la rapidité de la mode
                    actuelle et l'impact immédiat d'un look percutant.`}
                </p>
                <p className="mb-4 leading-loose">
                    {`Dès son ouverture, Click & Paf s’est rapidement imposée comme une référence grâce à une sélection
                    pointue de créateurs locaux et internationaux. Léo et Thomas ont misé sur des collaborations
                    exclusives, des pièces uniques, et des collections en édition limitée, attirant ainsi une clientèle
                    jeune, exigeante et en quête d'originalité. Leur approche se veut résolument moderne, avec un
                    mélange de confort et d’élégance qui plaît à ceux qui recherchent des pièces à la fois stylées et
                    accessibles.`}
                </p>
                <p className="mb-4 leading-loose">
                    {`Aujourd'hui, Click & Paf continue de se développer, avec un site de vente en ligne qui permet de
                    toucher une clientèle plus large tout en restant fidèle à son ADN : une mode urbaine de qualité,
                    innovante et toujours à la pointe des tendances. La boutique est un lieu où la passion pour la mode
                    se mêle à l’ambition de proposer une expérience d'achat unique et personnalisée.`}
                </p>
            </div>
        </main>
    )
}
