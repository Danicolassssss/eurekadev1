import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gray-50 py-20 lg:py-32 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 lg:pr-12 mb-10 lg:mb-0">
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
                Création et refonte de sites web qui travaillent pour votre activité.
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Je conçois des sites rapides, SEO-friendly et faciles à gérer pour artisans, indépendants et petites entreprises.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/realisations" className="px-8 py-3 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 transition-colors text-center">
                  Voir les réalisations
                </Link>
                <Link href="/contact" className="px-8 py-3 bg-white text-indigo-600 font-semibold rounded-md border border-indigo-600 hover:bg-indigo-50 transition-colors text-center">
                  Parler de votre projet
                </Link>
              </div>
            </div>
            <div className="lg:w-1/2 relative">
              <div className="bg-white p-4 rounded-lg shadow-xl border border-gray-100 transform rotate-2 hover:rotate-0 transition-transform duration-500">
                {/* Hero Image */}
                <div className="aspect-video bg-gray-200 rounded flex items-center justify-center text-gray-400 overflow-hidden relative">
                  <Image
                    src="/sitemoderne.jpeg"
                    alt="Aperçu site moderne"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Ce que je propose</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Des solutions complètes pour votre présence en ligne, de la conception à la maintenance.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Création de site web",
                desc: "Sites vitrines, e-commerce léger, landing pages. Modernes et performants.",
                icon: "💻"
              },
              {
                title: "Refonte de site",
                desc: "Modernisation design, passage en mobile-first, nettoyage technique.",
                icon: "🔁"
              },
              {
                title: "SEO & contenu",
                desc: "Audit, optimisation technique, structure, contenu optimisé pour Google.",
                icon: "🔎"
              },
              {
                title: "Maintenance",
                desc: "Mises à jour, sauvegardes, sécurité, petites évolutions régulières.",
                icon: "🔧"
              }
            ].map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Projets tests, qualité réelle</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Je suis en phase de lancement. Les projets présentés ci-dessous sont fictifs, mais traités comme de vrais mandats clients : cahier des charges, maquettes, développement, SEO, performance.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "La Maison des Pains",
                type: "Boulangerie Artisanale",
                desc: "Site vitrine + catalogue produits. Mise en avant du savoir-faire et des produits phares.",
                link: "/realisations#maison-des-pains",
                image: "/lamdp1.png"
              },
              {
                title: "Auto Performance 21",
                type: "Garage Automobile",
                desc: "Site vitrine + services + prise de RDV. Présentation des prestations et équipe.",
                link: "/realisations#auto-performance",
                image: "/ap21-1.png"
              },
              {
                title: "Les Petits Liens",
                type: "Micro-crèche",
                desc: "Site vitrine pour micro-crèche. Présentation du projet pédagogique et informations pratiques.",
                link: "/realisations#les-petits-liens",
                image: "/lpl1.png"
              }
            ].map((project, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow flex flex-col">
                <div className="h-48 bg-gray-200 flex items-center justify-center text-gray-400 relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <div className="text-sm text-indigo-600 font-semibold mb-2">{project.type}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4 flex-grow">{project.desc}</p>
                  <Link href={project.link} className="text-indigo-600 font-semibold hover:text-indigo-800 inline-flex items-center">
                    Voir le projet <span className="ml-1">→</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Mon process en 4 étapes</h2>
            <p className="text-lg text-gray-600">Simple, transparent et efficace.</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8 relative">
            {/* Connecting line for desktop */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-200 -z-10 transform -translate-y-1/2"></div>

            {[
              { step: "1", title: "Découverte & Audit", desc: "Appel, compréhension du métier, analyse de l'existant." },
              { step: "2", title: "Structure & Maquettes", desc: "Arborescence, wireframes, validation du design." },
              { step: "3", title: "Développement", desc: "Code propre (Next.js/WP), performance & SEO intégrés." },
              { step: "4", title: "Mise en ligne", desc: "Recette, mise en production, suivi et maintenance." }
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg border border-gray-100 text-center">
                <div className="w-12 h-12 bg-indigo-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4 shadow-lg relative z-10">
                  {item.step}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="py-20 bg-indigo-900 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h2 className="text-3xl font-bold mb-6">Pourquoi travailler avec un dev indépendant ?</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-green-400 mr-3">✓</span>
                  <div>
                    <strong className="block text-lg">Interlocuteur unique</strong>
                    <span className="text-indigo-200">Celui qui comprend votre besoin est celui qui code.</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-3">✓</span>
                  <div>
                    <strong className="block text-lg">Tech moderne</strong>
                    <span className="text-indigo-200">Next.js, solutions sur mesure, pas de thèmes lourds.</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-3">✓</span>
                  <div>
                    <strong className="block text-lg">Transparence totale</strong>
                    <span className="text-indigo-200">Devis clair, explications simples, pas de jargon inutile.</span>
                  </div>
                </li>
              </ul>
            </div>
            <div className="md:w-1/3 bg-indigo-800 p-8 rounded-lg shadow-2xl">
              <h3 className="text-xl font-bold mb-4">Un projet en tête ?</h3>
              <p className="text-indigo-200 mb-6">
                Expliquez en 2 minutes ce que vous faites, vous recevez une première piste de solution.
              </p>
              <Link href="/contact" className="block w-full py-3 bg-white text-indigo-900 font-bold text-center rounded hover:bg-indigo-50 transition-colors">
                Décrire mon projet
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
