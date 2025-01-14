"use client";
import Image from "next/image";
import Link from "next/link";

interface ProductCardProps {
  name: string;
  slug: string;
  price: number;
  imageUrl: string;
  imageAlt?: string;
}

export default function ProductCard({
  name,
  slug,
  price,
  imageUrl,
  imageAlt,
}: ProductCardProps) {
  return (
    <Link href={`/produits/${slug}`} className="">
      <Image
        src={imageUrl}
        alt={imageAlt || name}
        width={300}
        height={200}
        className="rounded-lg mb-2 w-full"
      />
      <div className="px-2">
        <h2 className="font-semibold text-lg leading-tight">{name}</h2>
        <p className="text-indigo-600 font-normal">{price.toFixed(2)} €</p>
      </div>
    </Link>
  );
}
