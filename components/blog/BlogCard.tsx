"use client";
import Image from "next/image";
import Link from "next/link";

interface BlogCardProps {
  title: string;
  imageUrl: string;
  imageAlt?: string;
  slug: string;
  description: string;
}

export default function BlogCard({
  title,
  imageUrl,
  imageAlt,
  slug,
  description,
}: BlogCardProps) {
  return (
    <Link href={`blog/${slug}`} className="" rel="canonical">
      <Image
        src={imageUrl}
        alt={imageAlt || title}
        width={300}
        height={200}
        className="rounded-lg  w-full object-cover mb-3"
      />
      <div className="mb-2">
        <h2 className="font-semibold text-lg leading-tight mb-2 leading-relaxed">
          {title}
        </h2>
        <p className="line-clamp-3  text-base leading-relaxed">{description}</p>
      </div>
      <Link
        href={`blog/${slug}`}
        className="text-indigo-600 hover:underline"
        rel="canonical"
      >
        Lire plus
      </Link>
    </Link>
  );
}
