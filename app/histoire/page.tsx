import Image from "next/image"

import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Clicketpaf - Notre histoire",
    description:
        "Click & Paf, c’est l’histoire d’une mode qui claque : des pièces limitées, un style urbain affûté, et des valeurs qui comptent. De l’actu aux tendances, on capte l’instant pour créer une vibe unique. Prêt à porter du vrai, du rare, du toi ?",
    keywords: ["clicketpaf", "click & paf", "click", "paf", "mode", "tendances", "style", "paf le chien", "histoire"],
}

export default function Histoire() {
    return (
        <main className="flex flex-col container mx-auto items-center justify-center min-h-screen max-w-[800px] px-4">
            <article className="p-8 mb-8 rounded-3xl shadow-md bg-amber-100/35">
                <header className="text-center flex flex-col items-center mb-8">
                    <h1 className="text-3xl font-bold mb-4">Notre histoire</h1>
                    <Image
                        src="/img/clicketpaf_logo_large.jpg"
                        alt="Histoire de Clicketpaf"
                        width={300}
                        height={200}
                        className="rounded-lg mb-8"
                    />
                </header>
                <div className="mb-8">
                    <h2 className="text-2xl font-bold mb-4">Notre vibe</h2>
                    <p className="mb-4 leading-loose">
                        {`Fondée en 2022 par Léo et Thomas, deux passionnés de mode street, Clicketpaf, c’est l’histoire d’une idée simple mais percutante : des vêtements en édition limitée, inspirés par l’actu et les tendances les plus fraîches. Notre concept ? Attraper l’essence du moment et la transformer en pièces qui claquent. Le nom "Clicketpaf" dit tout : un clic, et paf, t’as ton look.`}
                    </p>
                    <p className="mb-4 leading-loose">
                        {`Dès le départ, on a misé sur l’originalité à 100%. Collaborations exclusives, pièces uniques, drops inattendus... Chez nous, chaque vêtement raconte une histoire et s’adresse à ceux qui veulent porter quelque chose de vrai, de rare, et surtout qui leur ressemble. On parle aux esprits curieux, aux amateurs de style qui veulent du neuf sans compromis.`}
                    </p>
                    <p className="mb-4 leading-loose">
                        {`Aujourd’hui, Clicketpaf, c’est bien plus qu’une boutique : c’est un mood, une communauté, un rendez-vous pour tous ceux qui aiment se démarquer avec du sens. Avec notre shop en ligne, on touche la vibe d’une génération connectée, sans perdre notre truc : proposer une mode urbaine, qualitative et toujours en mouvement. Chez Clicketpaf, on ne suit pas les tendances, on les crée et on les laisse parler pour toi.`}
                    </p>
                </div>
                <div className="mb-8">
                    <h2 className="text-2xl font-bold mb-4">Nos valeurs</h2>
                    <p className="mb-4 leading-loose">
                        {`Chez Clicketpaf, on ne se contente pas de créer des vêtements, on imagine des pièces qui ont du sens. Loin des productions de masse, on mise sur la qualité, l’authenticité et surtout, le Made in France. Chaque pièce est fabriquée avec soin, pour que tu portes non seulement un style unique, mais aussi un produit qui soutient l’artisanat local et l’économie de notre pays.`}
                    </p>
                    <p className="mb-4 leading-loose">
                        {`On n'oublie pas notre planète. Chez Clicketpaf, on choisit des matières écologiques et durables, parce que la mode doit rimer avec respect de l’environnement. On croit fermement qu’on peut allier style et conscience écologique, sans faire de compromis. Chaque collection est pensée pour réduire notre empreinte tout en restant à la pointe de la tendance.`}
                    </p>
                    <p className="mb-4 leading-loose">
                        {`Mais ce n’est pas tout : une partie de nos bénéfices est reversée à des associations qui font bouger les choses. Parce qu’on veut que notre impact dépasse celui de la mode. En achetant chez Clicketpaf, tu fais partie d’un mouvement qui soutient des causes importantes et qui cherche à rendre le monde un peu meilleur, une pièce à la fois.`}
                    </p>
                </div>
            </article>
        </main>
    )
}
