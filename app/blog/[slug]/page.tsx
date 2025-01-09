import Image from "next/image"

import type { Metadata } from "next"
import { articlesDatas } from "@/datas/articles"

export const metadata: Metadata = {
    title: "Blog Clicketpaf - Des vêtements instantanés inspirés par l'actu en temps réel",
    description:
        "Clicketpaf, la marque qui transforme l'actu en style ! Des vêtements fun, instantanés et ultra-tendances, créés pour vibrer avec le buzz. Porte l'instant, exprime-toi, et fais tourner les têtes avec Clicketpaf !",
    keywords: ["clicketpaf", "click & paf", "click", "paf", "mode", "tendances", "style", "paf le chien"],
}

type ProductParam = {
    slug: string
}

export default async function Product({ params }: { params: Promise<{ slug: string }> }) {
    const slug = (await params).slug
    const article = articlesDatas.find((article) => article.slug === slug)
    return (
        <main className="flex flex-col container mx-auto items-center max-w-[800px] rounded-3xl shadow-md bg-amber-100/35  p-8 mb-8">
            {article && (
                <article>
                    <h1 className="font-bold text-2xl mb-4">{article.title}</h1>
                    <Image
                        src={article.mainImg}
                        alt={article.mainImgAlt}
                        width={800}
                        height={400}
                        className="rounded-lg mb-8"
                    />
                    {article.content.map((content, index) => (
                        <p className="mb-4 leading-loose" key={index}>
                            {content}
                        </p>
                    ))}
                </article>
            )}
        </main>
    )
}
