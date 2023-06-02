"use client";
import { useState } from 'react';
import Link from 'next/link';

const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="bg-blue-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <div className="flex-shrink-0">
                            <Link href="/">
                                <span className="text-white font-bold">Danny O'Neal.com</span>
                            </Link>
                        </div>
                    </div>
                    <div className="flex">
                        <div className="hidden sm:flex sm:space-x-4">
                            <Link href="/about-me">
                                <span className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">About Me</span>
                            </Link>
                            <Link href="/resume">
                                <span className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Resume</span>
                            </Link>
                            <Link href="/projects">
                                <span className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Projects</span>
                            </Link>
                            <Link href="/contact">
                                <span className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Contact</span>
                            </Link>
                        </div>
                        <div className="sm:hidden">
                            <button
                                onClick={toggleMenu}
                                type="button"
                                className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
                            >
                                {isMenuOpen ? 'Close' : 'Menu'}
                            </button>
                        </div>
                    </div>
                </div>
                {isMenuOpen && (
                    <div className="sm:hidden">
                        <div className="pt-2 pb-3 space-y-1">
                            <Link href="/about">
                                <span className="text-gray-300 hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium">
                                    About
                                </span>
                            </Link>
                            <Link href="/services">
                                <span className="text-gray-300 hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium">
                                    Services
                                </span>
                            </Link>
                            <Link href="/contact">
                                <span className="text-gray-300 hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium">
                                    Contact
                                </span>
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default NavBar;
