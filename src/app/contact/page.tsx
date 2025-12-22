export default function Contact() {
  return (
    <div className="bg-white">
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Contactez Eurekadev</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Un projet ? Une question ? Remplissez le formulaire ci-dessous pour recevoir une réponse claire et rapide.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-100">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nom complet</label>
                  <input type="text" id="name" name="name" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500" placeholder="Votre nom" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input type="email" id="email" name="email" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500" placeholder="votre@email.com" />
                </div>
              </div>

              <div>
                <label htmlFor="website" className="block text-sm font-medium text-gray-700 mb-1">Site actuel (optionnel)</label>
                <input type="url" id="website" name="website" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500" placeholder="https://www.votre-site.com" />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="type" className="block text-sm font-medium text-gray-700 mb-1">Type de besoin</label>
                  <select id="type" name="type" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500">
                    <option value="">Sélectionnez une option</option>
                    <option value="creation">Création de site</option>
                    <option value="refonte">Refonte de site</option>
                    <option value="seo">SEO & Visibilité</option>
                    <option value="maintenance">Maintenance</option>
                    <option value="autre">Autre</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-1">Budget approximatif</label>
                  <select id="budget" name="budget" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500">
                    <option value="">Sélectionnez une tranche</option>
                    <option value="small">&lt; 1000€</option>
                    <option value="medium">1000€ - 3000€</option>
                    <option value="large">3000€ - 5000€</option>
                    <option value="xl">&gt; 5000€</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea id="message" name="message" rows={5} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500" placeholder="Décrivez votre projet en quelques mots..."></textarea>
              </div>

              <div className="bg-indigo-50 p-4 rounded-md text-indigo-800 text-sm mb-6">
                🔒 Pas de spam, pas de relance agressive. Juste une réponse professionnelle pour avancer sur votre projet.
              </div>

              <button type="submit" className="w-full md:w-auto px-8 py-3 bg-indigo-600 text-white font-bold rounded hover:bg-indigo-700 transition-colors">
                Envoyer ma demande
              </button>
            </form>
          </div>

          <div className="mt-12 text-center text-gray-600">
            <p>Ou contactez-moi directement par email : <a href="mailto:contact@eurekadev.fr" className="text-indigo-600 font-semibold hover:underline">contact@eurekadev.fr</a></p>
          </div>
        </div>
      </section>
    </div>
  );
}

