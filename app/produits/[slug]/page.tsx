import type { Metadata } from "next"
import Image from "next/image"
import { productsDatas } from "@/datas/products"

export const metadata: Metadata = {
    title: "Clicketpaf - T-shirt François Bayrou",
    description:
        "Affiche ton soutien à François Bayrou avec ce t-shirt 'Premier ministre' ! Un design audacieux pour ceux qui suivent l'actualité de près et aiment porter leur opinion. Confortable, moderne et engagé, il est parfait pour ceux qui veulent marquer l’actualité politique avec style. Soyez au cœur du débat !",
    keywords: [
        "clicketpaf",
        "click & paf",
        "click",
        "paf",
        "mode",
        "tendances",
        "style",
        "paf le chien",
        "drops",
        "produits",
        "édition limitée",
    ],
}

export default async function ProductDetails({ params }: { params: Promise<{ slug: string }> }) {
    const slug = (await params).slug
    const product = productsDatas.find((product) => product.slug === slug)
    return (
        product && (
            <article
                itemScope
                itemType="http://schema.org/Product"
                className="flex flex-col items-center max-w-[1200px] mx-auto "
            >
                <div className="flex  gap-12 rounded-3xl shadow-md bg-amber-100/35  p-8 mb-8">
                    <div className="w-3/5">
                        <Image
                            src="/img/clicketpaf_logo_large.jpg"
                            alt="Histoire de Clicketpaf"
                            width={600}
                            height={400}
                            className="rounded-lg w-full"
                        />
                    </div>
                    <div className="w-2/5">
                        <h1 className="text-3xl font-bold mb-6" itemProp="name">
                            {product.name}
                        </h1>
                        <p className="font-semibold">{product.description}</p>
                        <p className="font-normal text-indigo-600 mt-2 mb-6">{product.price.toFixed(2)} €</p>
                        <a
                            href="/panier"
                            className="w-full py-2 px-4 border border-indigo-600 text-indigo-600 hover:text-white font-medium rounded-xl hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        >
                            Ajouter au panier
                        </a>
                    </div>
                </div>
            </article>
        )
    )
}
