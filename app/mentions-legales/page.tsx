import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Clicketpaf - Mentions légales",
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
    "histoire",
  ],
};

export default function MentionsLegales() {
  return (
    <main className="flex flex-col container mx-auto items-center justify-center min-h-screen max-w-[800px] px-4">
      <article className="p-8 mb-8 rounded-3xl shadow-md bg-amber-100/35">
        <h1 className="text-3xl font-bold mb-4">Mentions Légales</h1>

        <h2 className="text-2xl font-bold mb-4">1. Informations légales</h2>
        <p className="mb-4 leading-loose">
          Le présent site web est édité par :
        </p>
        <ul className="list-disc pl-5 mb-4">
          <li>
            <strong>Nom de l'entreprise :</strong> Clicketpaf
          </li>
          <li>
            <strong>Forme juridique :</strong> Corporation
          </li>
          <li>
            <strong>Capital social :</strong> 5 000 €
          </li>
          <li>
            <strong>Numéro d’immatriculation :</strong> 0123456789
          </li>
          <li>
            <strong>Numéro de TVA intracommunautaire :</strong> 012345678912345
          </li>
          <li>
            <strong>Adresse du siège social :</strong> 24 rue du Paf, 75012,
            Paris
          </li>
          <li>
            <strong>Téléphone :</strong> 0643218765
          </li>
          <li>
            <strong>E-mail :</strong> contact@clicketpaf.store
          </li>
        </ul>
        <p className="mb-4 leading-loose">
          Le directeur de la publication est : Léo Dupont
          <br />
          L'hébergement du site est assuré par :
        </p>
        <ul className="list-disc pl-5 mb-4">
          <li>
            <strong>Hébergeur :</strong> Vercel Inc.
          </li>
          <li>
            <strong>Adresse de l'hébergeur :</strong> 340 S Lemon Ave #4133
            Walnut, CA 91789 USA
          </li>
          <li>
            <strong>Téléphone de l'hébergeur :</strong> (559) 288-7060
          </li>
        </ul>

        <h2 className="text-2xl font-bold mb-4">2. Propriété intellectuelle</h2>
        <p className="mb-4 leading-loose">
          Tous les éléments du site, notamment les textes, graphiques, logos,
          images, vidéos, sons, ainsi que la structure du site, sont la
          propriété exclusive de Clicketpaf Corp, sauf mention contraire. Toute
          reproduction ou représentation, totale ou partielle, de ce site, sans
          autorisation expresse, est interdite et constituerait une contrefaçon
          sanctionnée par le Code de la propriété intellectuelle.
        </p>

        <h2 className="text-2xl font-bold mb-4">3. Données personnelles</h2>
        <p className="mb-4 leading-loose">
          En tant que responsable du traitement des données personnelles, [Nom
          de l'entreprise] s'engage à respecter la législation en vigueur en
          matière de protection des données personnelles, notamment le Règlement
          Général sur la Protection des Données (RGPD).
        </p>
        <p className="mb-4 leading-loose">
          Les informations collectées via le site Clicketpaf sont utilisées pour
          le traitement des commandes, l'envoi de newsletters, ainsi que pour
          répondre aux demandes des utilisateurs. Aucune donnée personnelle ne
          sera cédée à des tiers sans votre consentement préalable.
        </p>
        <p className="mb-4 leading-loose">
          Vous disposez d'un droit d'accès, de rectification, d'opposition et de
          suppression de vos données personnelles, que vous pouvez exercer en
          contactant Clicketpaf Corp à l'adresse suivante :
          contact@clicketpaf.fr.
        </p>

        <h2 className="text-2xl font-bold mb-4">4. Cookies</h2>
        <p className="mb-4 leading-loose">
          Le site utilise des cookies pour améliorer l'expérience utilisateur et
          réaliser des statistiques de visites. En poursuivant votre navigation
          sur ce site, vous acceptez l’utilisation de ces cookies. Vous pouvez à
          tout moment configurer votre navigateur pour refuser les cookies.
        </p>

        <h2 className="text-2xl font-bold mb-4">5. Responsabilité</h2>
        <p className="mb-4 leading-loose">
          Les informations contenues sur ce site sont données à titre indicatif.
          Clicketpaf Corp s’efforce de garantir leur exactitude, mais ne pourra
          être tenue responsable des erreurs ou omissions qui pourraient y
          figurer. De même, Clicketpaf Corp ne peut être tenue responsable des
          conséquences de l’utilisation des informations ou produits disponibles
          sur ce site.
        </p>

        <h2 className="text-2xl font-bold mb-4">
          6. Loi applicable et juridiction compétente
        </h2>
        <p className="mb-4 leading-loose">
          Les présentes mentions légales sont régies par la législation
          française. En cas de litige, les tribunaux compétents seront ceux du
          ressort du siège social de l’entreprise, sauf disposition contraire.
        </p>

        <h2 className="text-2xl font-bold mb-4">
          7. Conditions Générales de Vente (CGV)
        </h2>
        <p className="mb-4 leading-loose">
          Les conditions générales de vente sont disponibles sur le lien suivant
          :{" "}
          <Link href="/contact" className="text-indigo-600">
            [URL vers les CGV]
          </Link>
          .
        </p>

        <h2 className="text-2xl font-bold mb-4">
          8. Modification des mentions légales
        </h2>
        <p className="mb-4 leading-loose">
          Clicketpaf Corp se réserve le droit de modifier ces mentions légales à
          tout moment. Les utilisateurs seront informés de ces changements par
          la mise à jour de cette page.
        </p>

        <p className="mb-4 leading-loose">
          <strong>Date de dernière mise à jour :</strong> 14/01/2024
        </p>

        <h2 className="text-2xl font-bold mb-4">Contact</h2>
        <p className="mb-4 leading-loose">
          Si vous avez des questions concernant ces mentions légales, n’hésitez
          pas à nous{" "}
          <Link href="/contact" className="text-indigo-600">
            contacter
          </Link>
          .
        </p>
      </article>
    </main>
  );
}
