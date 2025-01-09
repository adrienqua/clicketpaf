"use client"
import Image from "next/image"
import Link from "next/link"

interface BlogCardProps {
    title: string
    imageUrl: string
    imageAlt?: string
    slug: string
    description: string
}

export default function BlogCard({ title, imageUrl, imageAlt, slug, description }: BlogCardProps) {
    return (
        <Link href={`blog/${slug}`} className="" rel="canonical">
            <Image
                src={imageUrl}
                alt={imageAlt || title}
                width={300}
                height={200}
                className="rounded-lg  w-full object-cover mb-3"
            />
            <div className="">
                <h2 className="font-semibold text-md leading-tight mb-2 leading-relaxed">{title}</h2>
                <p className="line-clamp-3 text-gray-800 text-sm leading-relaxed">{description}</p>
            </div>
        </Link>
    )
}
