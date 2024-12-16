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

export default function ProductDetails() {
  return (
    <div className="flex flex-col items-center px-4">
      <h1 className="text-3xl font-bold mb-10">Produit</h1>
    </div>
  );
}
