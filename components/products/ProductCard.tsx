"use client"
import Image from "next/image"
import Link from "next/link"

interface ProductCardProps {
    title: string
    price: number
    imageUrl: string
    imageAlt?: string
}

export default function ProductCard({ title, price, imageUrl, imageAlt }: ProductCardProps) {
    return (
        <Link href="/produits/t-shirt-bayrou" className="">
            <Image src={imageUrl} alt={imageAlt || title} width={300} height={200} className="rounded-lg mb-2" />
            <div className="px-2">
                <h2 className="font-semibold text-lg leading-tight">{title}</h2>
                <p className="text-indigo-600 font-normal">{price.toFixed(2)} €</p>
            </div>
        </Link>
    )
}
