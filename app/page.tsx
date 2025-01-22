import Image from "next/image"

import type { Metadata } from "next"
import Link from "next/link"
import { articlesDatas } from "@/datas/articles"
import { productsDatas } from "@/datas/products"
import BlogCard from "@/components/blog/BlogCard"
import ProductCard from "@/components/products/ProductCard"

export const metadata: Metadata = {
    keywords: [
        "mode urbaine",
        "édition limitée",
        "vêtements streetwear",
        "tendances mode",
        "Clicketpaf",
        "vêtements tendance",
        "mode responsable",
        "collections exclusives",
        "t-shirts streetwear",
        "sweats streetwear",
        "accessoires mode",
        "mode éthique",
        "vêtements Made in France",
    ],
}

export default function Home() {
    const articles = articlesDatas
    const products = productsDatas.filter((product) => product.isFeatured)

    return (
        <main className="flex flex-col container mx-auto items-center justify-center min-h-screen max-w-[800px] px-4">
            <section className="rounded-3xl shadow-md bg-amber-100/35  p-8 mb-8 ">
                <div className="flex flex-col items-center">
                    <h1 className="text-3xl font-bold mb-2">Clicketpaf</h1>
                    <p className="text-lg font-medium text-gray-600 mb-10">La mode qui bouge au rythme de l’actu !</p>
                    <Image
                        src="/img/clicketpaf_logo_large.jpg"
                        alt="Histoire de Clicketpaf"
                        width={300}
                        height={200}
                        className="rounded-lg mb-8"
                    />
                </div>
                <h2 className="text-2xl font-bold mb-4 ">A propos</h2>
                <p className="mb-4 leading-loose">
                    {`Chez Clicketpaf, on conçoit des vêtements fun et originaux, directement inspirés des tendances et événements marquants. Chaque collection est unique, produite en séries limitées, pour offrir des pièces qui racontent une histoire. Nos créations s’adressent à ceux qui veulent porter du style tout en revendiquant une pointe d’humour et d’audace.`}
                </p>
                <p className="mb-4 leading-loose">
                    {`Notre promesse : qualité française et respect de la planète. Tous nos vêtements sont fabriqués en France, avec un soin particulier pour garantir durabilité et confort. En plus, chaque étape de production est pensée pour minimiser notre impact écologique. On est fiers d’afficher un bilan carbone neutre, parce que la mode ne doit pas coûter cher à la planète.`}
                </p>
                <p className="mb-4 leading-loose mb-4">
                    {`Clicketpaf, c’est une mode engagée et pleine de caractère. Porter nos pièces, c’est affirmer votre style tout en soutenant une démarche locale et responsable. Avec nous, vous ne suivez pas la mode, vous la créez. Alors, prêt à passer au niveau supérieur ?`}
                </p>

                <div className="text-center mt-10 mb-2">
                    <Link
                        className="rounded-2xl border text-indigo-600 border-indigo-600/70 px-3 py-2 hover:text-white hover:bg-indigo-600 font-medium  transition duration-300 hover:scale-110"
                        href="/a-propos"
                    >
                        Voir plus
                    </Link>
                </div>
            </section>

            <section className="w-full mb-12 p-8 rounded-3xl shadow-md bg-amber-100/35">
                <h2 className="text-2xl font-bold mb-4 text-center">Notre dernière collection</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {products.map((product) => (
                        <ProductCard
                            name={product.name}
                            slug={product.slug}
                            price={product.price}
                            imageUrl={product.imageUrl}
                            imageAlt={product.imageAlt}
                            key={product.id}
                        />
                    ))}
                </div>
                <div className="text-center mt-10 mb-2">
                    <Link
                        className="rounded-2xl border text-indigo-600 border-indigo-600/70 px-3 py-2 hover:text-white hover:bg-indigo-600 font-medium  transition duration-300 hover:scale-110"
                        href="/produits"
                    >
                        Tous nos produits
                    </Link>
                </div>
            </section>

            <section className="mb-12 p-8 rounded-3xl shadow-md bg-amber-100/35">
                <h2 className="text-2xl font-bold mb-4 text-center">Nos derniers articles</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {articles.map((article) => (
                        <BlogCard
                            title={article.title}
                            imageUrl={article.mainImg}
                            imageAlt={article.mainImgAlt}
                            slug={article.slug}
                            category={article.category}
                            description={article.content[0]}
                            key={article.id}
                        />
                    ))}
                </div>
                <div className="text-center mt-10 mb-2">
                    <Link
                        className="rounded-2xl border text-indigo-600 border-indigo-600/70 px-3 py-2 hover:text-white hover:bg-indigo-600 font-medium  transition duration-300 hover:scale-110"
                        href="/blog"
                    >
                        Toute l'actualité
                    </Link>
                </div>
            </section>

            <div className="p-8 mb-8 rounded-3xl shadow-md bg-amber-100/35">
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
                    <strong className="font-semibold">{`Pourquoi "Clicketpaf" ?`}</strong>
                    <br />
                    {
                        "Le nom représente la vitesse avec laquelle la mode évolue aujourd'hui et l'impact immédiat qu'un look percutant peut avoir. C’est rapide, c’est net, et ça fait le buzz !"
                    }
                </p>

                <p className="mb-4 leading-loose">
                    <strong className="font-semibold">Où est située la boutique ?</strong> <br />
                    {
                        "On est situés dans le 15ème arrondissement de Paris, mais si vous ne pouvez pas passer, notre site de vente en ligne est là pour vous servir partout, à tout moment."
                    }
                </p>

                <p className="mb-4 leading-loose">
                    <strong className="font-semibold">Que trouve-t-on dans la boutique ?</strong> <br />
                    {
                        "Des pièces exclusives, des créateurs locaux et internationaux, des collaborations de folie, et surtout, des éditions limitées. Chaque collection est pensée pour ceux qui veulent du style, du confort et de l’originalité."
                    }
                </p>

                <p className="mb-4 leading-loose">
                    <strong className="font-semibold">Comment commander sur le site ?</strong> <br />
                    {
                        "C’est simple comme bonjour : choisissez vos articles, ajoutez-les au panier, et passez à la caisse. Livraison rapide, service client au top et surtout, des pièces stylées qui arrivent chez vous en un clin d’œil !"
                    }
                </p>

                <p className="mb-4 leading-loose">
                    <strong className="font-semibold">Est-ce que vous proposez des éditions limitées ?</strong> <br />
                    {
                        "Oui, bien sûr ! Chaque collection en édition limitée est un moyen pour nous de vous offrir des pièces uniques. Dès qu'elles sont en ligne, foncez, car elles partent vite !"
                    }
                </p>

                <p className="mb-4 leading-loose">
                    <strong className="font-semibold">Quels sont vos engagements ?</strong> <br />
                    {
                        "On mise sur la qualité, l’innovation, et une mode urbaine toujours à la pointe des tendances. Et bien sûr, on reste proches de vous avec un service client personnalisé et une expérience d’achat unique."
                    }
                </p>
            </div>

            <section className="mb-8 p-8 rounded-3xl shadow-md bg-amber-100/35">
                <h2 className="text-2xl font-bold mb-4 text-center">Ce que nos clients disent de nous</h2>
                <div className="flex flex-col md:flex-row gap-4 justify-center">
                    <div className="rounded-lg w-full md:w-1/3 ">
                        <blockquote className="italic">
                            {`"J'ai acheté un t-shirt de la dernière collection et je suis tellement content de mon achat
                            ! Qualité au top et design unique."`}
                        </blockquote>
                        <figcaption className="font-semibold mt-2">- Maxime D.</figcaption>
                    </div>
                    <div className="rounded-lg w-full md:w-1/3 ">
                        <blockquote className="italic">
                            {`"La livraison a été rapide, et le service client est super réactif. Je recommande à 100% !"`}
                        </blockquote>
                        <figcaption className="font-semibold mt-2">- Clara M.</figcaption>
                    </div>
                    <div className="rounded-lg w-full md:w-1/3 ">
                        <blockquote className="italic">
                            {`"Les collections en édition limitée sont vraiment top, le t-shirt François Bayrou me fume de rire !!! J'ai hâte de voir les prochaines collabs !"`}
                        </blockquote>
                        <figcaption className="font-semibold mt-2">- Thomas L.</figcaption>
                    </div>
                </div>
            </section>
        </main>
    )
}
