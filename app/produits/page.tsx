import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Click & Paf - Nos drops",
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
  const product = {
    title: "T-shirt François Bayrou",
    description:
      "Affiche ton soutien à François Bayrou avec ce t-shirt 'Premier ministre' ! Un design audacieux pour ceux qui suivent l'actualité de près et aiment porter leur opinion. Confortable, moderne et engagé, il est parfait pour ceux qui veulent marquer l’actualité politique avec style. Soyez au cœur du débat !",
    price: 24.9,
  };
  return (
    <div className="flex flex-col items-center px-4">
      <h1 className="text-3xl font-bold mb-10">{product.title}</h1>
      <p className="font-semibold">{product.description}</p>
      <p>{product.price.toFixed(2)}</p>
    </div>
  );
}
