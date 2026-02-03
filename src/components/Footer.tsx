import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Eurekadev</h3>
            <p className="text-gray-400">
              Des sites web modernes, rapides et bien référencés pour les petites entreprises.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Liens rapides</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-400 hover:text-white transition-colors">Accueil</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-white transition-colors">Services</Link></li>
              <li><Link href="/tarifs" className="text-gray-400 hover:text-white transition-colors">Tarifs</Link></li>
              <li><Link href="/realisations" className="text-gray-400 hover:text-white transition-colors">Réalisations</Link></li>
              <li><Link href="/a-propos" className="text-gray-400 hover:text-white transition-colors">À propos</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <p className="text-gray-400">hello@eurekadev.fr</p>
            <p className="text-gray-400 mt-2">Bourgogne-Franche-Comté / Paris</p>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} Eurekadev. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}
