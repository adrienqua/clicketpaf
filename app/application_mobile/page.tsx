import Image from "next/image"
import { Metadata } from "next"

export const metadata: Metadata = {}

export default function MobileAppPage() {
    return (
        <main className="flex flex-col container mx-auto items-center justify-center min-h-screen max-w-[800px] px-4">
            <section className="rounded-3xl shadow-md bg-amber-100/35 p-8 mb-8">
                <header className="flex flex-col items-center">
                    <h1 className="text-3xl font-bold mb-4">Découvrez notre Application Mobile</h1>
                    <Image
                        src="/img/maquette_phone.png"
                        alt="Maquette de l'application Clicketpaf sur un téléphone"
                        width={400}
                        height={800}
                        className="rounded-lg mb-8"
                    />
                </header>

                <p className="text-center text-xl mb-4 leading-loose">
                    Téléchargez l'application Clicketpaf et profitez d'une expérience de shopping fluide et personnalisée, directement depuis votre smartphone !
                </p>

                <h2 className="text-2xl font-bold mb-4">Les fonctionnalités clés de l'application</h2>
                <ul className="list-disc pl-6 mb-6">
                    <li>Parcourez les collections exclusives et les éditions limitées en avant-première.</li>
                    <li>Recevez des notifications personnalisées sur les nouvelles collections et les promotions.</li>
                    <li>Créez votre profil utilisateur et personnalisez vos préférences shopping.</li>
                    <li>Commandez facilement avec un processus de paiement sécurisé et rapide.</li>
                    <li>Suivez vos commandes et suivez l'historique de vos achats directement depuis l'application.</li>
                </ul>

                <h2 className="text-2xl font-bold mb-4 text-center">Disponible sur iOS et Android</h2>
                <div className="flex justify-center gap-4">
                    <a
                        href="https://apps.apple.com/app/clicketpaf"
                        className="bg-black text-white px-4 py-2 rounded-full shadow-md hover:bg-gray-800 flex items-center gap-2"
                    >
                        Télécharger sur l'App Store
                        <Image
                            src="/img/app_store_logo.png"
                            alt="App Store Apple"
                            width={20}
                            height={20}
                            className="h-5 w-5"
                        />
                    </a>
                    <a
                        href="https://play.google.com/store/apps/details?id=com.clicketpaf"
                        className="bg-green-600 text-white px-4 py-2 rounded-full shadow-md hover:bg-green-700 flex items-center gap-2"
                    >
                        Télécharger sur Google Play
                        <Image
                            src="/img/google_play_store_logo.png"
                            alt="Google Play Store"
                            width={20}
                            height={20}
                            className="h-5 w-5"
                        />
                    </a>
                </div>
            </section>

            <section className="mb-12 p-8 rounded-3xl shadow-md bg-amber-100/35">
                <h2 className="text-2xl font-bold mb-4 text-center">Pourquoi choisir l'application Clicketpaf ?</h2>
                <p className="leading-loose text-center mb-4">
                    L'application Clicketpaf vous permet de rester à la pointe de la mode urbaine, avec des collections limitées disponibles uniquement pour nos utilisateurs mobiles. Soyez le premier à découvrir nos nouveaux produits et à faire partie de la communauté Clicketpaf.
                </p>

                <p className="leading-loose text-center mb-4">
                    Grâce à notre application mobile, vous bénéficiez d'une expérience shopping immersive et rapide, tout en soutenant un projet responsable et éthique.
                </p>
            </section>
        </main>
    )
}
