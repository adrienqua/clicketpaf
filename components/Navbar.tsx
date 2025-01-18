"use client"
import Image from "next/image"
import Link from "next/link"
import React, { useState } from "react"

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    return (
        <header role="banner">
            <nav
                className="bg-white backdrop-blur-lg fixed w-full  border-b mb-16 top-0"
                role="navigation"
                aria-label="Main navigation"
            >
                <div className="container max-w-screen-xl mx-auto px-4">
                    <div className="flex justify-between items-center h-16">
                        <div className="flex items-center">
                            <Link href="/" className="text-xl font-bold text-white">
                                <Image
                                    src="/img/clicketpaf_logo_small.jpg"
                                    alt="Clicketpaf logo"
                                    width={65}
                                    height={90}
                                    className="rounded-lg"
                                />
                            </Link>
                        </div>
                        <div className="hidden md:flex space-x-6">
                            <Link href="/" className=" text-gray-800 hover:text-indigo-600 font-medium">
                                Accueil
                            </Link>
                            <Link href="/produits" className=" text-gray-800 hover:text-indigo-600 font-medium">
                                Produits
                            </Link>
                            <Link href="/blog" className=" text-gray-800 hover:text-indigo-600 font-medium">
                                Blog
                            </Link>
                            <Link
                                href="/application_mobile"
                                className=" text-gray-800 hover:text-indigo-600 font-medium"
                            >
                                Application
                            </Link>
                            <Link href="/a-propos" className=" text-gray-800 hover:text-indigo-600 font-medium">
                                A propos
                            </Link>
                            <Link href="/contact" className=" text-gray-800 hover:text-indigo-600 font-medium">
                                Contact
                            </Link>
                        </div>
                        <div className="md:hidden flex items-center">
                            <button
                                onClick={toggleMenu}
                                className="text-gray-800 focus:outline-none"
                                aria-label="Afficher le menu"
                            >
                                <svg
                                    className="w-6 h-6"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16m-7 6h7"
                                    ></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                {isOpen && (
                    <div className="md:hidden border-t border-gray-200">
                        <Link
                            href="/"
                            className="block px-4 py-2  text-gray-800 hover:bg-amber-100 hover:text-gray-800"
                        >
                            Accueil
                        </Link>
                        <Link
                            href="/produits"
                            className="block px-4 py-2  text-gray-800 hover:bg-amber-100 hover:text-gray-800"
                        >
                            Produits
                        </Link>
                        <Link
                            href="/a-propos"
                            className="block px-4 py-2  text-gray-800 hover:bg-amber-100 hover:text-gray-800"
                        >
                            Notre histoire
                        </Link>
                        <Link
                            href="/blog"
                            className="block px-4 py-2  text-gray-800 hover:bg-amber-100 hover:text-gray-800"
                        >
                            Blog
                        </Link>
                        <Link
                            href="/contact"
                            className="block px-4 py-2  text-gray-800 hover:bg-amber-100 hover:text-gray-800"
                        >
                            Contact
                        </Link>
                    </div>
                )}
            </nav>
        </header>
    )
}

export default Navbar
