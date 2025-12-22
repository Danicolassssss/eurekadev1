import Link from "next/link";
import Image from "next/image";

export default function Services() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Services web complets</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Création, refonte, SEO, maintenance – un seul interlocuteur pour gérer votre présence en ligne.
          </p>
        </div>
      </section>

      {/* Service 1: Creation */}
      <section className="py-20 border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <div className="text-indigo-600 font-bold mb-2 uppercase tracking-wide">Sur mesure</div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Création de site web</h2>
              <p className="text-gray-600 mb-6 text-lg">
                Sites vitrines, portfolios, ou petits e-commerce. Je conçois des sites responsives, rapides et adaptés à votre budget.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-700">
                  <span className="text-indigo-500 mr-2">✓</span> Atelier de définition des besoins
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="text-indigo-500 mr-2">✓</span> Design personnalisé ou intégration
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="text-indigo-500 mr-2">✓</span> Intégration CMS ou développement sur mesure
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="text-indigo-500 mr-2">✓</span> SEO technique de base inclus
                </li>
              </ul>
              <Link href="/contact" className="text-indigo-600 font-semibold hover:text-indigo-800">
                Demander un devis création →
              </Link>
            </div>
            <div className="md:w-1/2 relative h-64 rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/creationdesiteweb.jpeg"
                alt="Création de site web"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Service 2: Redesign */}
      <section className="py-20 border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row-reverse items-center gap-12">
            <div className="md:w-1/2">
              <div className="text-indigo-600 font-bold mb-2 uppercase tracking-wide">Modernisation</div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Refonte de site web</h2>
              <p className="text-gray-600 mb-6 text-lg">
                Votre site est lent, daté ou difficile à modifier ? Une refonte permet de repartir sur des bases saines sans perdre votre référencement.
              </p>
              <div className="bg-orange-50 border-l-4 border-orange-400 p-4 mb-6">
                <p className="text-orange-800 text-sm">
                  <strong>Problèmes typiques résolus :</strong> Design non mobile, chargement lent, bugs d'affichage, administration complexe.
                </p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-700">
                  <span className="text-indigo-500 mr-2">✓</span> Audit technique et SEO de l'existant
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="text-indigo-500 mr-2">✓</span> Nouvelle structure de contenu
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="text-indigo-500 mr-2">✓</span> Migration sécurisée (redirections 301)
                </li>
              </ul>
              <Link href="/contact" className="text-indigo-600 font-semibold hover:text-indigo-800">
                Discuter d'une refonte →
              </Link>
            </div>
            <div className="md:w-1/2 relative h-64 rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/refontedesiteweb.jpeg"
                alt="Refonte de site web"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Service 3: SEO */}
      <section className="py-20 border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <div className="text-indigo-600 font-bold mb-2 uppercase tracking-wide">Visibilité</div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">SEO & Contenu</h2>
              <p className="text-gray-600 mb-6 text-lg">
                Un beau site ne sert à rien si personne ne le trouve. J'optimise votre site pour qu'il plaise à Google et à vos clients.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-700">
                  <span className="text-indigo-500 mr-2">✓</span> Audit SEO complet (technique, contenu, structure)
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="text-indigo-500 mr-2">✓</span> Optimisation on-page (titres, balises, vitesse)
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="text-indigo-500 mr-2">✓</span> Stratégie de contenu (pages services, blog, FAQ)
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="text-indigo-500 mr-2">✓</span> Maillage interne intelligent
                </li>
              </ul>
              <Link href="/contact" className="text-indigo-600 font-semibold hover:text-indigo-800">
                Booster ma visibilité →
              </Link>
            </div>
            <div className="md:w-1/2 relative h-64 rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/seo.jpeg"
                alt="SEO & Contenu"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Service 4: Maintenance */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row-reverse items-center gap-12">
            <div className="md:w-1/2">
              <div className="text-indigo-600 font-bold mb-2 uppercase tracking-wide">Sérénité</div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Maintenance & Support</h2>
              <p className="text-gray-600 mb-6 text-lg">
                Ne laissez pas votre site à l'abandon. J'assure sa sécurité et ses mises à jour pour que vous puissiez vous concentrer sur votre métier.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="bg-gray-50 p-4 rounded border border-gray-200">
                  <h4 className="font-bold text-gray-900 mb-2">Technique</h4>
                  <p className="text-sm text-gray-600">Mises à jour, sauvegardes quotidiennes, monitoring sécurité.</p>
                </div>
                <div className="bg-gray-50 p-4 rounded border border-gray-200">
                  <h4 className="font-bold text-gray-900 mb-2">Évolutive</h4>
                  <p className="text-sm text-gray-600">Ajout de sections, modification de contenu, nouvelles fonctionnalités.</p>
                </div>
              </div>
              <Link href="/contact" className="text-indigo-600 font-semibold hover:text-indigo-800">
                Voir les offres de maintenance →
              </Link>
            </div>
            <div className="md:w-1/2 relative h-64 rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/maintenace.jpeg"
                alt="Maintenance & Support"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-indigo-600 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">Prêt à lancer votre projet ?</h2>
          <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
            Discutons de vos besoins et trouvons la solution adaptée à votre budget.
          </p>
          <Link href="/contact" className="px-8 py-3 bg-white text-indigo-600 font-bold rounded hover:bg-indigo-50 transition-colors inline-block">
            Contactez-moi
          </Link>
        </div>
      </section>
    </div>
  );
}

