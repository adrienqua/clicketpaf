import Image from "next/image";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Blog Click et paf - Des vêtements instantanés inspirés par l'actu en temps réel",
  description:
    "Clicketpaf, la marque qui transforme l'actu en style ! Des vêtements fun, instantanés et ultra-tendances, créés pour vibrer avec le buzz. Porte l'instant, exprime-toi, et fais tourner les têtes avec Clicketpaf !",
  keywords: [
    "clicketpaf",
    "click & paf",
    "click",
    "paf",
    "mode",
    "tendances",
    "style",
    "paf le chien",
  ],
};

export default function Blog() {
  return (
    <main className="flex flex-col container mx-auto items-center justify-center min-h-screen max-w-[800px] px-4">
      <h1 className="text-3xl font-bold mb-4">Blog</h1>
      <article>
        <h1 className="font-bold text-2xl mb-4">
          François Bayrou à Matignon : des t-shirts et mugs exclusifs signés
          Clicketpaf !
        </h1>
        <Image
          src="/img/clicketpaf_collab_francois_bayrou_premier_ministre.jpg"
          alt="Histoire de Clicketpaf"
          width={800}
          height={400}
          className="rounded-lg mb-8"
        />
        <p className="mb-4 leading-loose">
          {`La nouvelle a fait l’effet d’un séisme : François Bayrou, Premier ministre ! Oui, vous avez bien lu.
                    L’homme des Pyrénées, champion du consensus et maestro du Modem, s’installe à Matignon. Et chez
                    Clicketpaf, on ne pouvait pas laisser passer une telle actu sans réagir. Parce que, soyons honnêtes,
                    François Bayrou, c’est un peu le Chuck Norris de la politique française. Toujours là, discret mais
                    incontournable, prêt à sortir son lasso pour ramener tout le monde à la raison.`}
        </p>
        <p className="mb-4 leading-loose">
          {`Pour célébrer ce moment historique, on lance une collection exclusive de
                    t-shirts et de tasses "François Bayrou, Premier ministre". Des designs décalés, un brin vintage,
                    pour afficher votre passion pour la politique avec style. Imaginez-vous au bureau, votre mug "Team
                    Bayrou" à la main, ou en soirée avec un t-shirt "Premier ministre vibes". Clairement, c’est
                    l’attitude gagnante !`}
        </p>
        <p className="mb-4 leading-loose">
          {`Attention, ces éditions limitées risquent de partir aussi vite qu’une réforme express. Alors, click
                    et paf : adoptez François Bayrou dans votre dressing ou votre cuisine, avant qu’il ne soit trop tard
                    !`}
        </p>
      </article>
    </main>
  );
}
