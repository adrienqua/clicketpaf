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
        <nav className="bg-zinc-800/70 shadow-lg mb-12">
            <div className="container mx-auto px-4">
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
                        <Link href="/" className="text-gray-300 hover:text-white">
                            Accueil
                        </Link>
                        <Link href="/histoire" className="text-gray-300 hover:text-white">
                            Notre histoire
                        </Link>
                        <Link href="/blog" className="text-gray-300 hover:text-white">
                            Blog
                        </Link>
                        <Link href="/contact" className="text-gray-300 hover:text-white">
                            Contact
                        </Link>
                    </div>
                    <div className="md:hidden flex items-center">
                        <button onClick={toggleMenu} className="text-white focus:outline-none">
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
                <div className="md:hidden bg-gray-800 border-t border-gray-700">
                    <Link href="/" className="block px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white">
                        Accueil
                    </Link>
                    <Link href="/histoire" className="block px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white">
                        Notre histoire
                    </Link>
                    <Link href="/blog" className="block px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white">
                        Blog
                    </Link>
                    <Link href="/contact" className="block px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white">
                        Contact
                    </Link>
                </div>
            )}
        </nav>
    )
}

export default Navbar
