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
                    {` Clicketpaf a été fondée en 2022 par deux entrepreneurs passionnés de mode urbaine, Léo et Thomas.
                    Leur objectif était clair : offrir une sélection de vêtements tendance et de qualité, tout en
                    restant ancrés dans l’univers de la culture street. La boutique, située dans un quartier dynamique
                    de la ville, se distingue par son ambiance moderne et épurée, où chaque détail est pensé pour
                    refléter l’identité de la marque. Le nom "Clicketpaf" symbolise à la fois la rapidité de la mode
                    actuelle et l'impact immédiat d'un look percutant.`}
                </p>
                <p className="mb-4 leading-loose">
                    {`Dès son ouverture, Clicketpaf s’est rapidement imposée comme une référence grâce à une sélection
                    pointue de créateurs locaux et internationaux. Léo et Thomas ont misé sur des collaborations
                    exclusives, des pièces uniques, et des collections en édition limitée, attirant ainsi une clientèle
                    jeune, exigeante et en quête d'originalité. Leur approche se veut résolument moderne, avec un
                    mélange de confort et d’élégance qui plaît à ceux qui recherchent des pièces à la fois stylées et
                    accessibles.`}
                </p>
                <p className="mb-4 leading-loose">
                    {`Aujourd'hui, Clicketpaf continue de se développer, avec un site de vente en ligne qui permet de
                    toucher une clientèle plus large tout en restant fidèle à son ADN : une mode urbaine de qualité,
                    innovante et toujours à la pointe des tendances. La boutique est un lieu où la passion pour la mode
                    se mêle à l’ambition de proposer une expérience d'achat unique et personnalisée.`}
                </p>
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

            <div className="text-center mb-12">
                <Link
                    className="rounded-lg border border-white px-3 py-2 hover:text-black hover:bg-white  transition duration-300 hover:scale-110"
                    href="/histoire"
                >
                    Voir plus
                </Link>
            </div>
        </main>
    )
}
