import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Click & Paf - Nous contacter",
    description:
        "Vous avez une question ou une idée à partager ? L'équipe de Click & Paf est là pour vous répondre. Contactez-nous pour discuter mode, tendances, ou simplement dire bonjour !",
    keywords: ["clicketpaf", "click & paf", "click", "paf", "mode", "tendances", "style", "paf le chien", "contact"],
    robots: "index, follow",
    openGraph: {
        title: "Click & Paf, la mode déjantée !",
        description:
            "Vous avez une question ou une idée à partager ? L'équipe de Click & Paf est là pour vous répondre. Contactez-nous pour discuter mode, tendances, ou simplement dire bonjour !",
        images: ["/img/clicketpaf_logo_medium.jpg"],
        type: "website",
        url: "https://clicketpaf.store/contact",
    },
    twitter: {
        title: "Click & Paf, la mode déjantée !",
        description:
            "Vous avez une question ou une idée à partager ? L'équipe de Click & Paf est là pour vous répondre. Contactez-nous pour discuter mode, tendances, ou simplement dire bonjour !",
        images: ["/img/clicketpaf_logo_medium.jpg"],
        card: "summary_large_image",
    },
}

export default function Contact() {
    return (
        <main className="flex flex-col container mx-auto items-center justify-center min-h-screen max-w-[800px]">
            <h2 className="text-3xl font-semibold text-center text-white mb-6">Nous contacter</h2>
            <div className="min-w-full sm:min-w-[450px] mx-auto p-6 rounded-lg shadow-md">
                <form action="#" method="POST">
                    <div className="space-y-4">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-300">
                                Votre nom
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                required
                                className="mt-1 block w-full px-4 py-2 border border-gray-600 bg-gray-700 text-white rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                                Votre adresse email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                className="mt-1 block w-full px-4 py-2 border border-gray-600 bg-gray-700 text-white rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                            />
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-300">
                                Votre message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                rows={5}
                                required
                                className="mt-1 block w-full px-4 py-2 border border-gray-600 bg-gray-700 text-white rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                            ></textarea>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                            >
                                Envoyer le Message
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </main>
    )
}
