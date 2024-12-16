import Image from "next/image";

import type { Metadata } from "next";
import ProductCard from "@/components/products/ProductCard";

export const metadata: Metadata = {
  title: "Click & Paf - Nos drops",
  description:
    "Click & Paf, c’est l’histoire d’une mode qui claque : des pièces limitées, un style urbain affûté, et des valeurs qui comptent. De l’actu aux tendances, on capte l’instant pour créer une vibe unique. Prêt à porter du vrai, du rare, du toi ?",
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
  ],
};

export default function Product() {
  return (
    <div className="flex flex-col items-center px-4">
      <h1 className="text-3xl font-bold mb-10">Nos drops en édition limitée</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        <ProductCard
          title="T-shirt françois Bayrou"
          price={24.9}
          imageUrl="/img/clicketpaf_logo_large.jpg"
          imageAlt="Histoire de Clicketpaf"
        />
        <ProductCard
          title="Hoodie françois Bayrou"
          price={59.9}
          imageUrl="/img/clicketpaf_logo_large.jpg"
          imageAlt="Histoire de Clicketpaf"
        />
        <ProductCard
          title="Tasse François Bayrou"
          price={14.9}
          imageUrl="/img/clicketpaf_logo_large.jpg"
          imageAlt="Histoire de Clicketpaf"
        />
        <ProductCard
          title="Produit top cool 4"
          price={59.9}
          imageUrl="/img/clicketpaf_logo_large.jpg"
          imageAlt="Histoire de Clicketpaf"
        />
      </div>
    </div>
  );
}
