import Image from "next/image"

import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {}

export default function Home() {
    return (
        <main className="flex flex-col container mx-auto items-center justify-center min-h-screen max-w-[800px] px-4">
            <h1 className="text-3xl font-bold mb-4">ClicketPaf</h1>
            <Image
                src="/img/clicketpaf_logo_large.jpg"
                alt="Histoire de Clicketpaf"
                width={300}
                height={200}
                className="rounded-lg mb-8"
            />
            <div>
                <h2 className="text-2xl font-bold mb-4">Notre histoire</h2>
                <p className="mb-4 leading-loose">
                    {`Fondée en 2022 par Léo et Thomas, deux passionnés de mode street, Clicketpaf, c’est l’histoire d’une idée simple mais percutante : des vêtements en édition limitée, inspirés par l’actu et les tendances les plus fraîches. Notre concept ? Attraper l’essence du moment et la transformer en pièces qui claquent. Le nom "Clicketpaf" dit tout : un clic, et paf, t’as ton look.`}
                </p>
                <p className="mb-4 leading-loose">
                    {`Dès le départ, on a misé sur l’originalité à 100%. Collaborations exclusives, pièces uniques, drops inattendus... Chez nous, chaque vêtement raconte une histoire et s’adresse à ceux qui veulent porter quelque chose de vrai, de rare, et surtout qui leur ressemble. On parle aux esprits curieux, aux amateurs de style qui veulent du neuf sans compromis.`}
                </p>
                <p className="mb-4 leading-loose">
                    {`Aujourd’hui, Clicketpaf, c’est bien plus qu’une boutique : c’est un mood, une communauté, un rendez-vous pour tous ceux qui aiment se démarquer avec du sens. Avec notre shop en ligne, on touche la vibe d’une génération connectée, sans perdre notre truc : proposer une mode urbaine, qualitative et toujours en mouvement. Chez Clicketpaf, on ne suit pas les tendances, on les crée et on les laisse parler pour toi.`}
                </p>

                <div className="text-center mb-12">
                    <Link
                        rel="canonical"
                        className="rounded-lg border border-white px-3 py-2 hover:text-black hover:bg-white  transition duration-300 hover:scale-110"
                        href="/histoire"
                    >
                        Voir plus
                    </Link>
                </div>

                <div className="rounded-lg bg-black p-4 mb-8">
                    <h2 className="text-2xl font-bold mb-4 text-center">Articles</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="rounded-lg shadow-lg p-4 bg-black border-2 border-gray-400">
                            <Image
                                src="/img/clicketpaf_collab_francois_bayrou_premier_ministre.jpg"
                                alt="Bayrou Premier ministre"
                                width={800}
                                height={400}
                                className="pointer-events-none rounded-lg mb-4 w-full h-56"
                            />
                            <h3 className="text-lg font-bold mb-2 text-gray-300">Francois Bayrou premier ministre</h3>
                            <p className="mb-2 text-gray-300 leading-loose">
                                {`Clicketpaf lance une collection décalée de t-shirts et mugs exclusifs pour célébrer la nomination de François Bayrou comme Premier ministre. 
                                Avec des designs funs et vintage, la marque transforme l’actualité en mode, pour afficher son humour et son style.`}
                            </p>
                            <Link href="/blog/article1" className="text-blue-500 hover:underline">
                                Lire plus
                            </Link>
                        </div>
                        <div className="rounded-lg shadow-lg p-4 bg-black border-2 border-gray-400">
                            <Image
                                src="/img/macron_dauphin_seine.jpg"
                                alt="Macron fait du dauphin sur la Seine"
                                width={800}
                                height={400}
                                className="pointer-events-none rounded-lg mb-4 w-full h-56"
                            />
                            <h3 className="text-lg font-bold mb-2 text-gray-300">
                                Macron fait du dauphin sur la Seine
                            </h3>
                            <p className="mb-2 text-gray-300 leading-loose">
                                {
                                    "Clicketpaf lance une collection exclusive inspirée d'Emmanuel Macron faisant du dauphin sur la Seine, avec des t-shirts, mugs et tote bags en édition limitée. Des produits fun et stylés pour adopter la vibe présidentielle avec originalité !"
                                }
                            </p>
                            <Link href="/blog/article2" className="text-blue-500 hover:underline">
                                Lire plus
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="rounded-lg bg-black p-4 mb-8">
                <h1 className="font-bold text-2xl mb-4 text-center">
                    FAQ – Tout ce que vous devez savoir sur Clicketpaf !
                </h1>

                <p className="mb-4 leading-loose">
                    <strong className="font-bold">Qui sommes-nous ?</strong> <br />
                    {
                        "Clicketpaf, c’est Léo et Thomas, deux passionnés de mode urbaine. Depuis 2022, on vous propose des vêtements tendance, stylés, et de qualité. Notre objectif ? Vous offrir des pièces uniques qui envoient du lourd, toujours à la pointe de la culture street !"
                    }
                </p>

                <p className="mb-4 leading-loose">
                    <strong className="font-bold">{`Pourquoi "Clicketpaf" ?`}</strong>
                    <br />
                    {
                        "Le nom représente la vitesse avec laquelle la mode évolue aujourd'hui et l'impact immédiat qu'un look percutant peut avoir. C’est rapide, c’est net, et ça fait le buzz !"
                    }
                </p>

                <p className="mb-4 leading-loose">
                    <strong className="font-bold">Où est située la boutique ?</strong> <br />
                    {
                        "On est situés dans le 15ème arrondissement de Paris, mais si vous ne pouvez pas passer, notre site de vente en ligne est là pour vous servir partout, à tout moment."
                    }
                </p>

                <p className="mb-4 leading-loose">
                    <strong className="font-bold">Que trouve-t-on dans la boutique ?</strong> <br />
                    {
                        "Des pièces exclusives, des créateurs locaux et internationaux, des collaborations de folie, et surtout, des éditions limitées. Chaque collection est pensée pour ceux qui veulent du style, du confort et de l’originalité."
                    }
                </p>

                <p className="mb-4 leading-loose">
                    <strong className="font-bold">Comment commander sur le site ?</strong> <br />
                    {
                        "C’est simple comme bonjour : choisissez vos articles, ajoutez-les au panier, et passez à la caisse. Livraison rapide, service client au top et surtout, des pièces stylées qui arrivent chez vous en un clin d’œil !"
                    }
                </p>

                <p className="mb-4 leading-loose">
                    <strong className="font-bold">Est-ce que vous proposez des éditions limitées ?</strong> <br />
                    {
                        "Oui, bien sûr ! Chaque collection en édition limitée est un moyen pour nous de vous offrir des pièces uniques. Dès qu'elles sont en ligne, foncez, car elles partent vite !"
                    }
                </p>

                <p className="mb-4 leading-loose">
                    <strong className="font-bold">Quels sont vos engagements ?</strong> <br />
                    {
                        "On mise sur la qualité, l’innovation, et une mode urbaine toujours à la pointe des tendances. Et bien sûr, on reste proches de vous avec un service client personnalisé et une expérience d’achat unique."
                    }
                </p>
            </div>

            <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4 text-center">Ce que nos clients disent de nous</h2>
                <div className="flex flex-col md:flex-row gap-4 justify-center">
                    <div className="bg-black p-4 rounded-lg w-full md:w-1/3 border-2 border-gray-400">
                        <p className="italic">
                            {`"J'ai acheté un t-shirt de la dernière collection et je suis tellement content de mon achat
                            ! Qualité au top et design unique."`}
                        </p>
                        <p className="font-semibold mt-2">- Maxime D.</p>
                    </div>
                    <div className="bg-black p-4 rounded-lg w-full md:w-1/3 border-2 border-gray-400">
                        <p className="italic">
                            {`"La livraison a été rapide, et le service client est super réactif. Je recommande à 100% !"`}
                        </p>
                        <p className="font-semibold mt-2">- Clara M.</p>
                    </div>
                    <div className="bg-black p-4 rounded-lg w-full md:w-1/3 border-2 border-gray-400">
                        <p className="italic">
                            {`"Les collections en édition limitée sont vraiment cool, j'ai hâte de voir les prochaines !"`}
                        </p>
                        <p className="font-semibold mt-2">- Thomas L.</p>
                    </div>
                </div>
            </section>
        </main>
    )
}
