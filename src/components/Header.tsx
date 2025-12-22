"use client";

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-indigo-600">
          <img src="/eurekadevlogo.png" alt="Eurekadev" className="h-10 w-auto" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6 items-center">
          <Link href="/" className="text-gray-700 hover:text-indigo-600 transition-colors">
            Accueil
          </Link>
          <Link href="/services" className="text-gray-700 hover:text-indigo-600 transition-colors">
            Services
          </Link>
          <Link href="/realisations" className="text-gray-700 hover:text-indigo-600 transition-colors">
            Réalisations
          </Link>
          <Link href="/a-propos" className="text-gray-700 hover:text-indigo-600 transition-colors">
            À propos
          </Link>
          <Link href="/contact" className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors">
            Contact
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full left-0 shadow-lg">
          <div className="flex flex-col px-4 py-2 space-y-2">
            <Link
              href="/"
              className="block py-2 text-gray-700 hover:text-indigo-600 hover:bg-gray-50 px-2 rounded"
              onClick={() => setIsMenuOpen(false)}
            >
              Accueil
            </Link>
            <Link
              href="/services"
              className="block py-2 text-gray-700 hover:text-indigo-600 hover:bg-gray-50 px-2 rounded"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/realisations"
              className="block py-2 text-gray-700 hover:text-indigo-600 hover:bg-gray-50 px-2 rounded"
              onClick={() => setIsMenuOpen(false)}
            >
              Réalisations
            </Link>
            <Link
              href="/a-propos"
              className="block py-2 text-gray-700 hover:text-indigo-600 hover:bg-gray-50 px-2 rounded"
              onClick={() => setIsMenuOpen(false)}
            >
              À propos
            </Link>
            <Link
              href="/contact"
              className="block py-2 text-indigo-600 font-semibold hover:bg-indigo-50 px-2 rounded"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}



