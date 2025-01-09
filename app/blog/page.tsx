import Image from "next/image"

import type { Metadata } from "next"
import BlogCard from "@/components/blog/BlogCard"
import { articlesDatas } from "@/datas/articles"

export const metadata: Metadata = {
    title: "Blog Clicketpaf - Des vêtements instantanés inspirés par l'actu en temps réel",
    description:
        "Clicketpaf, la marque qui transforme l'actu en style ! Des vêtements fun, instantanés et ultra-tendances, créés pour vibrer avec le buzz. Porte l'instant, exprime-toi, et fais tourner les têtes avec Clicketpaf !",
    keywords: ["clicketpaf", "click & paf", "click", "paf", "mode", "tendances", "style", "paf le chien"],
}

export default function Blog() {
    const articles = articlesDatas
    return (
        <main className="flex flex-col items-center max-w-[1200px] mx-auto ">
            <div className="flex flex-col items-center rounded-3xl shadow-md bg-amber-100/35  p-8 mb-8">
                <h1 className="text-3xl font-bold mb-2">Blog</h1>
                <h2 className="text-lg font-medium text-gray-600 mb-10">Suivez l'actualité et nos partenariats </h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    {articles.map((article) => (
                        <BlogCard
                            title={article.title}
                            imageUrl={article.mainImg}
                            imageAlt={article.mainImgAlt}
                            slug={article.slug}
                            description={article.content[0]}
                        />
                    ))}
                </div>
            </div>
        </main>
    )
}
