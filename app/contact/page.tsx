import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Clicketpaf - Nous contacter",
    description:
        "Vous avez une question ou une idée à partager ? L'équipe de Click & Paf est là pour vous répondre. Contactez-nous pour discuter mode, tendances, ou simplement dire bonjour !",
    keywords: ["clicketpaf", "click & paf", "click", "paf", "mode", "tendances", "style", "paf le chien", "contact"],
}

export default function Contact() {
    return (
        <main className="flex flex-col container mx-auto items-center max-w-[800px] p-8 rounded-3xl shadow-md bg-amber-100/35">
            <h2 className="text-3xl font-bold text-center mb-6">Nous contacter</h2>
            <div className="min-w-full sm:min-w-[450px] mx-auto p-6 rounded-lg ">
                <form action="#" method="POST">
                    <div className="space-y-4">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-800">
                                Votre nom
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                required
                                className="mt-1 block w-full px-4 py-2 border   text-white rounded-xl shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-800">
                                Votre adresse email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                className="mt-1 block w-full px-4 py-2 border   text-white rounded-xl shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                            />
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-800">
                                Votre message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                rows={5}
                                required
                                className="mt-1 block w-full px-4 py-2 border   text-white rounded-xl shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                            ></textarea>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="w-full py-2 px-4 border border-indigo-600 text-indigo-600 hover:text-white font-medium rounded-xl hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
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
