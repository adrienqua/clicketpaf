import Image from "next/image"
import { productsDatas } from "@/datas/products"
import ProductCard from "@/components/products/ProductCard"
import { Metadata } from "next"

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const slug = (await params).slug
    const product = productsDatas.find((product) => product.slug === slug)
    if (!product) {
        return { title: "Produit non trouvé" }
    }
    return {
        title: `${product.name} - Clicketpaf`,
        description: product.description,
        openGraph: {
            title: `${product.name} - Clicketpaf`,
            description: product.description,
            images: [
                {
                    url: product.imageUrl,
                    width: 600,
                    height: 400,
                    alt: product.imageAlt || product.name,
                },
            ],
        },
        twitter: {
            title: `${product.name} - Clicketpaf`,
            description: product.description,
            images: [
                {
                    url: product.imageUrl,
                    width: 600,
                    height: 400,
                    alt: product.imageAlt || product.name,
                },
            ],
            card: "summary_large_image",
        },
    }
}

export default async function ProductDetails({ params }: { params: Promise<{ slug: string }> }) {
    const slug = (await params).slug
    const product = productsDatas.find((product) => product.slug === slug)
    const products = productsDatas.filter((product) => product.slug !== slug).slice(0, 3)

    return (
        product &&
        products && (
            <>
                <article
                    itemScope
                    itemType="http://schema.org/Product"
                    className="flex flex-col items-center max-w-[1200px] mx-auto "
                >
                    <div className="flex flex-col md:flex-row  gap-12 rounded-3xl shadow-md bg-amber-100/35  p-8 mb-8">
                        <div className="w-full md:w-3/5">
                            <Image
                                src={product.imageUrl}
                                alt={product.imageAlt || product.name}
                                width={600}
                                height={400}
                                className="rounded-lg w-full"
                            />
                        </div>
                        <div className="w-full md:w-2/5">
                            <h1 className="text-3xl font-bold mb-6" itemProp="name">
                                {product.name}
                            </h1>
                            <p className="font-semibold">{product.description}</p>
                            <p className="font-normal text-indigo-600 mt-2 mb-6">{product.price.toFixed(2)} €</p>
                            <a
                                href="/panier"
                                className="w-full py-2 px-4 border transition-all duration-300 border-indigo-600 text-indigo-600 hover:text-white font-medium rounded-xl hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                            >
                                Ajouter au panier
                            </a>
                        </div>
                    </div>
                </article>
                <section className="w-full mb-12 p-8 rounded-3xl shadow-md bg-amber-100/35 flex flex-col items-center max-w-[1200px] mx-auto">
                    <h2 className="text-2xl font-bold mb-4 text-center">Les clients ont aussi regardés</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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
                </section>
            </>
        )
    )
}
