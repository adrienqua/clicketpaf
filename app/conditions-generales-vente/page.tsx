import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Clicketpaf - Condition générales de vente",
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

export default function CGV() {
  return (
    <main className="flex flex-col container mx-auto items-center justify-center min-h-screen max-w-[800px] px-4">
      <article className="p-8 mb-8 rounded-3xl shadow-md bg-amber-100/35">
        <h1 className="text-3xl font-bold mb-4">
          Conditions Générales de Vente
        </h1>

        <h2 className="text-2xl font-bold mb-4">1. Objet</h2>
        <p className="mb-4 leading-loose">
          Les présentes Conditions Générales de Vente (CGV) ont pour objet de
          définir les conditions dans lesquelles Clicketpaf Corp vend ses
          produits et services sur le site web www.clicketpaf.store.
        </p>

        <h2 className="text-2xl font-bold mb-4">2. Commandes</h2>
        <p className="mb-4 leading-loose">
          Toute commande passée sur le site web de Clicketpaf est soumise à
          l’acceptation des présentes CGV. L’acheteur confirme sa commande en
          cliquant sur le bouton de validation, ce qui implique une obligation
          de paiement.
        </p>
        <p className="mb-4 leading-loose">
          Clicketpaf Corp se réserve le droit de refuser toute commande pour des
          raisons légales, techniques ou commerciales.
        </p>

        <h2 className="text-2xl font-bold mb-4">3. Prix</h2>
        <p className="mb-4 leading-loose">
          Les prix des produits et services sont indiqués en euros, toutes taxes
          comprises (TTC). Clicketpaf Corp se réserve le droit de modifier les
          prix à tout moment, mais les produits seront facturés au prix en
          vigueur au moment de la commande.
        </p>

        <h2 className="text-2xl font-bold mb-4">4. Paiement</h2>
        <p className="mb-4 leading-loose">
          Le paiement des produits et services doit être effectué par carte
          bancaire, virement bancaire ou tout autre moyen mis à disposition par
          Clicketpaf Corp. La commande ne sera validée qu’après réception du
          paiement complet.
        </p>

        <h2 className="text-2xl font-bold mb-4">5. Livraison</h2>
        <p className="mb-4 leading-loose">
          Les produits sont livrés à l’adresse fournie par l'acheteur au moment
          de la commande. Le délai de livraison est indicatif et peut varier en
          fonction de la disponibilité des produits et du transporteur choisi.
        </p>
        <p className="mb-4 leading-loose">
          Les risques liés à la livraison sont transférés à l'acheteur dès que
          les produits sont remis au transporteur.
        </p>

        <h2 className="text-2xl font-bold mb-4">6. Droit de rétractation</h2>
        <p className="mb-4 leading-loose">
          Conformément à la législation en vigueur, l'acheteur dispose d'un
          droit de rétractation de 14 jours à compter de la réception des
          produits. L'acheteur peut alors demander un échange ou un
          remboursement, sous réserve que les produits soient retournés dans
          leur état d'origine.
        </p>

        <h2 className="text-2xl font-bold mb-4">7. Garanties</h2>
        <p className="mb-4 leading-loose">
          Les produits sont garantis contre les défauts de fabrication, selon
          les conditions prévues par la législation en vigueur. En cas de
          non-conformité ou de défaut avéré, Clicketpaf Corp procédera à
          l'échange ou au remboursement du produit.
        </p>

        <h2 className="text-2xl font-bold mb-4">8. Responsabilité</h2>
        <p className="mb-4 leading-loose">
          Clicketpaf Corp ne pourra être tenue responsable des dommages
          indirects liés à l’utilisation des produits achetés sur le site. La
          responsabilité de Clicketpaf Corp est limitée au montant de la
          commande.
        </p>

        <h2 className="text-2xl font-bold mb-4">
          9. Modifications des Conditions Générales de Vente
        </h2>
        <p className="mb-4 leading-loose">
          Clicketpaf Corp se réserve le droit de modifier ces Conditions
          Générales de Vente à tout moment. Les nouvelles CGV seront accessibles
          sur le site et s'appliqueront à toute nouvelle commande.
        </p>

        <p className="mb-4 leading-loose">
          <strong>Date de dernière mise à jour :</strong> 14/01/2024
        </p>

        <h2 className="text-2xl font-bold mb-4">10. Contact</h2>
        <p className="mb-4 leading-loose">
          Pour toute question relative aux présentes Conditions Générales de
          Vente, vous pouvez nous{" "}
          <Link href="/contact" className="text-indigo-600">
            contacter
          </Link>
          .
        </p>
      </article>
    </main>
  );
}
