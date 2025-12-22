"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Realisations() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentImages, setCurrentImages] = useState<string[]>([]);

  const lamdpImages = [
    "/lamdp1.png",
    "/lamdp2.png",
    "/lamdp3.png",
    "/lamdp4.png"
  ];

  const ap21Images = [
    "/ap21-1.png",
    "/ap21-2.png",
    "/ap21-3.png",
    "/ap21-4.png"
  ];

  const openLightbox = (images: string[], index: number) => {
    setCurrentImages(images);
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % currentImages.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev - 1 + currentImages.length) % currentImages.length);
  };

  return (
    <div className="bg-white">
      {/* Lightbox */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <button
            className="absolute top-4 right-4 text-white text-4xl hover:text-gray-300 focus:outline-none"
            onClick={closeLightbox}
          >
            &times;
          </button>

          <button
            className="absolute left-4 text-white text-4xl hover:text-gray-300 focus:outline-none hidden md:block"
            onClick={prevImage}
          >
            &#10094;
          </button>

          <div className="relative w-full max-w-5xl h-[80vh]" onClick={(e) => e.stopPropagation()}>
            <Image
              src={currentImages[currentImageIndex]}
              alt={`Image ${currentImageIndex + 1}`}
              fill
              className="object-contain"
            />
          </div>

          <button
            className="absolute right-4 text-white text-4xl hover:text-gray-300 focus:outline-none hidden md:block"
            onClick={nextImage}
          >
            &#10095;
          </button>

          <div className="absolute bottom-4 left-0 right-0 text-center text-white">
            {currentImageIndex + 1} / {currentImages.length}
          </div>
        </div>
      )}

      {/* Intro Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Réalisations & Projets tests</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Les projets ci-dessous sont des cas fictifs, réalisés comme de vrais projets clients pour démontrer mon niveau de qualité et ma méthode de travail.
          </p>
        </div>
      </section>

      {/* Project 1: La Maison des Pains */}
      <section id="maison-des-pains" className="py-20 border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-1/2">
              <div
                className="relative bg-gray-200 rounded-lg aspect-video flex items-center justify-center text-gray-400 mb-4 overflow-hidden shadow-lg cursor-pointer hover:opacity-95 transition-opacity"
                onClick={() => openLightbox(lamdpImages, 0)}
              >
                <Image
                  src="/lamdp1.png"
                  alt="La Maison des Pains - Accueil"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity bg-black bg-opacity-20">
                  <span className="text-white text-lg font-semibold bg-black bg-opacity-50 px-4 py-2 rounded">Agrandir</span>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div
                  className="relative bg-gray-100 rounded h-24 overflow-hidden shadow-sm cursor-pointer hover:opacity-95 transition-opacity"
                  onClick={() => openLightbox(lamdpImages, 1)}
                >
                  <Image src="/lamdp2.png" alt="Détail 1" fill className="object-cover" />
                </div>
                <div
                  className="relative bg-gray-100 rounded h-24 overflow-hidden shadow-sm cursor-pointer hover:opacity-95 transition-opacity"
                  onClick={() => openLightbox(lamdpImages, 2)}
                >
                  <Image src="/lamdp3.png" alt="Détail 2" fill className="object-cover" />
                </div>
                <div
                  className="relative bg-gray-100 rounded h-24 overflow-hidden shadow-sm cursor-pointer hover:opacity-95 transition-opacity"
                  onClick={() => openLightbox(lamdpImages, 3)}
                >
                  <Image src="/lamdp4.png" alt="Détail 3" fill className="object-cover" />
                </div>
              </div>
            </div>
            <div className="lg:w-1/2">

              <div className="inline-block px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm font-semibold mb-4">
                Site Vitrine + Catalogue
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">La Maison des Pains</h2>
              <p className="text-gray-600 mb-6">
                Boulangerie artisanale souhaitant moderniser son image et présenter ses produits phares.
              </p>

              <h3 className="text-xl font-bold text-gray-900 mb-3">Objectifs</h3>
              <ul className="list-disc list-inside text-gray-600 mb-6 space-y-1">
                <li>Mettre en avant le savoir-faire artisanal</li>
                <li>Présenter le catalogue des produits (pains, pâtisseries)</li>
                <li>Faciliter les commandes spéciales (traiteur, événements)</li>
                <li>Améliorer le référencement local</li>
              </ul>

              <h3 className="text-xl font-bold text-gray-900 mb-3">Ce qui a été fait</h3>
              <div className="flex flex-wrap gap-2 mb-8">
                <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded text-sm">Design sur mesure</span>
                <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded text-sm">Catalogue produits</span>
                <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded text-sm">SEO Local</span>
                <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded text-sm">Responsive</span>
              </div>

              <Link href="https://lamaisondupain.netlify.app" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white font-semibold rounded hover:bg-indigo-700 transition-colors">
                Visiter le site (Démo)
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Project 2: Auto Performance 21 */}
      <section id="auto-performance" className="py-20 border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row-reverse gap-12">
            <div className="lg:w-1/2">
              <div
                className="relative bg-gray-200 rounded-lg aspect-video flex items-center justify-center text-gray-400 mb-4 overflow-hidden shadow-lg cursor-pointer hover:opacity-95 transition-opacity"
                onClick={() => openLightbox(ap21Images, 0)}
              >
                <Image
                  src="/ap21-1.png"
                  alt="Auto Performance 21 - Accueil"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity bg-black bg-opacity-20">
                  <span className="text-white text-lg font-semibold bg-black bg-opacity-50 px-4 py-2 rounded">Agrandir</span>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div
                  className="relative bg-gray-100 rounded h-24 overflow-hidden shadow-sm cursor-pointer hover:opacity-95 transition-opacity"
                  onClick={() => openLightbox(ap21Images, 1)}
                >
                  <Image src="/ap21-2.png" alt="Détail 1" fill className="object-cover" />
                </div>
                <div
                  className="relative bg-gray-100 rounded h-24 overflow-hidden shadow-sm cursor-pointer hover:opacity-95 transition-opacity"
                  onClick={() => openLightbox(ap21Images, 2)}
                >
                  <Image src="/ap21-3.png" alt="Détail 2" fill className="object-cover" />
                </div>
                <div
                  className="relative bg-gray-100 rounded h-24 overflow-hidden shadow-sm cursor-pointer hover:opacity-95 transition-opacity"
                  onClick={() => openLightbox(ap21Images, 3)}
                >
                  <Image src="/ap21-4.png" alt="Détail 3" fill className="object-cover" />
                </div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold mb-4">
                Site Vitrine + Prise de RDV
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Auto Performance 21</h2>
              <p className="text-gray-600 mb-6">
                Garage automobile cherchant à rassurer sa clientèle et simplifier la prise de contact.
              </p>

              <h3 className="text-xl font-bold text-gray-900 mb-3">Objectifs</h3>
              <ul className="list-disc list-inside text-gray-600 mb-6 space-y-1">
                <li>Présenter clairement les services (mécanique, diagnostic, etc.)</li>
                <li>Rassurer avec une page équipe et des photos avant/après</li>
                <li>Faciliter la prise de rendez-vous en ligne</li>
              </ul>

              <h3 className="text-xl font-bold text-gray-900 mb-3">Ce qui a été fait</h3>
              <div className="flex flex-wrap gap-2 mb-8">
                <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded text-sm">Page Services détaillée</span>
                <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded text-sm">Galerie photos</span>
                <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded text-sm">Formulaire de contact avancé</span>
              </div>

              <Link href="https://autoperf21.netlify.app" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white font-semibold rounded hover:bg-indigo-700 transition-colors">
                Visiter le site (Démo)
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Project 3: PixelNova Digital */}
      <section id="pixelnova" className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-1/2">
              <div className="bg-gray-200 rounded-lg aspect-video flex items-center justify-center text-gray-400 mb-4">
                Image PixelNova
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-gray-100 rounded h-24"></div>
                <div className="bg-gray-100 rounded h-24"></div>
                <div className="bg-gray-100 rounded h-24"></div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="inline-block px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-semibold mb-4">
                Site Agence B2B
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">PixelNova Digital</h2>
              <p className="text-gray-600 mb-6">
                Agence web fictive. Site orienté services et conversion pour une clientèle B2B.
              </p>

              <h3 className="text-xl font-bold text-gray-900 mb-3">Objectifs</h3>
              <ul className="list-disc list-inside text-gray-600 mb-6 space-y-1">
                <li>Montrer une expertise technique et marketing</li>
                <li>Structurer l'offre de services (Création, Refonte, SEO)</li>
                <li>Générer des leads qualifiés</li>
              </ul>

              <h3 className="text-xl font-bold text-gray-900 mb-3">Ce qui a été fait</h3>
              <div className="flex flex-wrap gap-2 mb-8">
                <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded text-sm">Architecture B2B</span>
                <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded text-sm">Blog SEO</span>
                <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded text-sm">Pages Landing</span>
              </div>

              <Link href="#" className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white font-semibold rounded hover:bg-indigo-700 transition-colors">
                Visiter le site (Démo)
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

