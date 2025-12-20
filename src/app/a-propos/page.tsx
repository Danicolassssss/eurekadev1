import Link from "next/link";
import Image from "next/image";

export default function About() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">À propos d'Eurekadev</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Plus qu'une agence web, un partenaire technique pour votre réussite en ligne.
          </p>
        </div>
      </section>

      {/* Profile Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/3">
              <div className="relative aspect-square rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/pp.jpeg"
                  alt="Photo de profil Eurekadev"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="md:w-2/3">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Qui suis-je ?</h2>
              <p className="text-gray-600 mb-4 text-lg">
                Bonjour ! Je suis développeur web indépendant, passionné par la création de solutions numériques utiles et performantes.
              </p>
              <p className="text-gray-600 mb-4">
                Après plusieurs années à développer des compétences techniques solides (Next.js, React, Node.js), j'ai créé Eurekadev pour mettre ce savoir-faire au service des artisans, indépendants et TPE/PME.
              </p>
              <p className="text-gray-600 mb-6">
                Mon objectif n'est pas seulement de vous livrer un site "joli", mais un outil qui travaille pour vous : qui attire des clients, qui est rapide, et qui ne vous lâche pas au premier bug.
              </p>

              <div className="grid grid-cols-2 gap-4 mt-8">
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Mes outils de prédilection</h4>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>Next.js / React</li>
                    <li>TypeScript</li>
                    <li>Tailwind CSS</li>
                    <li>Node.js</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Pourquoi ces choix ?</h4>
                  <p className="text-gray-600 text-sm">
                    Pour la performance, la sécurité et la maintenabilité à long terme. Pas de bricolage, que du solide.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-indigo-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Ce qui change pour vous</h2>
            <p className="text-indigo-200 max-w-2xl mx-auto">
              Travailler avec Eurekadev, c'est choisir une approche différente des grosses agences ou des plateformes automatisées.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-indigo-800 p-8 rounded-lg">
              <div className="text-4xl mb-4">🗣️</div>
              <h3 className="text-xl font-bold mb-3">Pas de jargon</h3>
              <p className="text-indigo-200">
                Je parle votre langue. Pas de termes techniques obscurs pour justifier des prix élevés. Tout est expliqué clairement.
              </p>
            </div>
            <div className="bg-indigo-800 p-8 rounded-lg">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold mb-3">Focus Utilité</h3>
              <p className="text-indigo-200">
                On ne fait pas de la technique pour la technique. Chaque fonctionnalité doit servir votre business et vos clients.
              </p>
            </div>
            <div className="bg-indigo-800 p-8 rounded-lg">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-bold mb-3">Relation Long Terme</h3>
              <p className="text-indigo-200">
                Je ne disparais pas après la mise en ligne. Je reste disponible pour la maintenance et les évolutions de votre site.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Envie d'en savoir plus ?</h2>
          <Link href="/contact" className="px-8 py-3 bg-indigo-600 text-white font-bold rounded hover:bg-indigo-700 transition-colors inline-block">
            Contactez-moi
          </Link>
        </div>
      </section>
    </div>
  );
}
