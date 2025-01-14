import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Clicketpaf - Confidentialité",
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

export default function Confidentialite() {
  return (
    <main className="flex flex-col container mx-auto items-center justify-center min-h-screen max-w-[800px] px-4">
      <article className="p-8 mb-8 rounded-3xl shadow-md bg-amber-100/35">
        <h1 className="text-3xl font-bold mb-4">
          Politique de Confidentialité
        </h1>

        <h2 className="text-2xl font-bold mb-4">1. Introduction</h2>
        <p className="mb-4 leading-loose">
          La présente politique de confidentialité a pour but de vous informer
          de manière transparente sur la collecte, l'utilisation, et la
          protection de vos données personnelles lorsque vous utilisez
          l'application Clicketpaf.
        </p>
        <p className="mb-4 leading-loose">
          En utilisant l'application, vous acceptez la collecte et l'utilisation
          de vos données personnelles conformément à cette politique.
        </p>

        <h2 className="text-2xl font-bold mb-4">2. Informations collectées</h2>
        <p className="mb-4 leading-loose">
          Nous collectons les informations suivantes lorsque vous utilisez
          l'application Clicketpaf :
        </p>
        <ul className="list-disc pl-5 mb-4">
          <li>
            <strong>Informations d'identification personnelle :</strong> Nom,
            adresse e-mail, numéro de téléphone, etc.
          </li>
          <li>
            <strong>Données d'utilisation :</strong> Données relatives à votre
            utilisation de l'application, telles que les pages vues, le temps
            passé sur l'application, etc.
          </li>
          <li>
            <strong>Cookies et technologies similaires :</strong> Nous utilisons
            des cookies pour collecter des informations sur votre appareil et
            vos préférences de navigation.
          </li>
        </ul>

        <h2 className="text-2xl font-bold mb-4">
          3. Utilisation des données personnelles
        </h2>
        <p className="mb-4 leading-loose">
          Les informations que nous collectons sont utilisées pour les finalités
          suivantes :
        </p>
        <ul className="list-disc pl-5 mb-4">
          <li>
            <strong>Améliorer l'expérience utilisateur :</strong> Nous utilisons
            vos données pour personnaliser et améliorer votre expérience sur
            l'application.
          </li>
          <li>
            <strong>Traitement des commandes et demandes :</strong> Nous
            utilisons vos données pour gérer vos commandes et répondre à vos
            demandes de support.
          </li>
          <li>
            <strong>Communication :</strong> Nous pouvons utiliser vos
            coordonnées pour vous envoyer des informations sur des offres
            spéciales, des mises à jour de l'application, ou des notifications
            importantes.
          </li>
        </ul>

        <h2 className="text-2xl font-bold mb-4">4. Partage des données</h2>
        <p className="mb-4 leading-loose">
          Nous ne partageons pas vos données personnelles avec des tiers, sauf
          dans les cas suivants :
        </p>
        <ul className="list-disc pl-5 mb-4">
          <li>
            <strong>Fournisseurs de services tiers :</strong> Nous pouvons
            partager vos données avec des prestataires de services qui nous
            aident à fournir l'application (hébergement, paiement, etc.), sous
            réserve qu'ils respectent la confidentialité de vos données.
          </li>
          <li>
            <strong>Conformité légale :</strong> Nous pouvons divulguer vos
            données si la loi l'exige, notamment pour répondre à des demandes
            légales ou pour protéger nos droits.
          </li>
        </ul>

        <h2 className="text-2xl font-bold mb-4">5. Sécurité des données</h2>
        <p className="mb-4 leading-loose">
          Nous mettons en place des mesures techniques et organisationnelles
          appropriées pour protéger vos données personnelles contre toute perte,
          utilisation abusive, accès non autorisé ou divulgation.
        </p>
        <p className="mb-4 leading-loose">
          Cependant, aucun système de transmission ou de stockage électronique
          n'est totalement sécurisé, et bien que nous fassions de notre mieux
          pour protéger vos informations, nous ne pouvons garantir une sécurité
          absolue.
        </p>

        <h2 className="text-2xl font-bold mb-4">
          6. Vos droits concernant vos données
        </h2>
        <p className="mb-4 leading-loose">
          Conformément à la législation en vigueur, vous disposez des droits
          suivants concernant vos données personnelles :
        </p>
        <ul className="list-disc pl-5 mb-4">
          <li>
            <strong>Droit d'accès :</strong> Vous avez le droit de demander
            l'accès aux données que nous collectons vous concernant.
          </li>
          <li>
            <strong>Droit de rectification :</strong> Vous pouvez demander la
            correction de toute donnée personnelle inexacte ou incomplète.
          </li>
          <li>
            <strong>Droit à l'effacement :</strong> Vous pouvez demander la
            suppression de vos données personnelles dans certaines
            circonstances.
          </li>
          <li>
            <strong>Droit d'opposition :</strong> Vous pouvez vous opposer à
            l'utilisation de vos données personnelles dans certaines situations.
          </li>
          <li>
            <strong>Droit à la portabilité :</strong> Vous pouvez demander la
            transmission de vos données personnelles dans un format structuré,
            couramment utilisé et lisible par machine.
          </li>
        </ul>

        <p className="mb-4 leading-loose">
          Pour exercer vos droits, vous pouvez nous{" "}
          <Link href="/contact" className="text-indigo-600">
            contacter
          </Link>
          .
        </p>

        <h2 className="text-2xl font-bold mb-4">7. Conservation des données</h2>
        <p className="mb-4 leading-loose">
          Nous conservons vos données personnelles pendant la durée nécessaire à
          l'accomplissement des finalités décrites dans cette politique de
          confidentialité, sauf si une période de conservation plus longue est
          exigée ou autorisée par la loi.
        </p>

        <h2 className="text-2xl font-bold mb-4">
          8. Modifications de la politique de confidentialité
        </h2>
        <p className="mb-4 leading-loose">
          Nous nous réservons le droit de modifier cette politique de
          confidentialité à tout moment. Les modifications seront publiées sur
          cette page et entreront en vigueur dès leur publication.
        </p>

        <h2 className="text-2xl font-bold mb-4">9. Contact</h2>
        <p className="mb-4 leading-loose">
          Si vous avez des questions concernant cette politique de
          confidentialité ou si vous souhaitez exercer vos droits, vous pouvez
          nous{" "}
          <Link href="/contact" className="text-indigo-600">
            contacter
          </Link>
          .
        </p>

        <p className="mb-4 leading-loose">
          <strong>Date de dernière mise à jour :</strong> 14/01/2024
        </p>
      </article>
    </main>
  );
}
