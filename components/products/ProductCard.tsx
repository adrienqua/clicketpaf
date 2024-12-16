"use client";
import Image from "next/image";

interface ProductCardProps {
  title: string;
  price: number;
  imageUrl: string;
  imageAlt?: string;
}

export default function ProductCard({
  title,
  price,
  imageUrl,
  imageAlt,
}: ProductCardProps) {
  return (
    <div className="">
      <Image
        src={imageUrl}
        alt={imageAlt || title}
        width={300}
        height={200}
        className="rounded-lg mb-2"
      />
      <div className="px-2">
        <h2 className="font-semibold text-lg leading-tight">{title}</h2>
        <p className="text-gray-300 font-">{price.toFixed(2)} €</p>
      </div>
    </div>
  );
}
