import type { Metadata } from "next";
import ProductCard from "@/components/products/ProductCard";
import { productsDatas } from "@/datas/products";

export const metadata: Metadata = {
  title: "Clicketpaf - Nos drops",
  description:
    "Découvrez nos vêtements en édition limitée, inspirés par l'actu et les tendances du moment. Style unique, engagé et audacieux pour une jeunesse qui ose se démarquer. Ne manquez pas nos créations exclusives, disponibles pour un temps limité !",
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
};

export default function Product() {
  const products = productsDatas;
  return (
    <main className="flex flex-col items-center max-w-[1200px] mx-auto ">
      <div className="flex flex-col items-center rounded-3xl shadow-md bg-amber-100/35  p-8 mb-8">
        <h1 className="text-3xl font-bold mb-2">Nos produits</h1>
        <h2 className="text-lg font-medium text-gray-600 mb-10">
          Découvrez nos drops et nos collaborations en édition limitée
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
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
      </div>
    </main>
  );
}
