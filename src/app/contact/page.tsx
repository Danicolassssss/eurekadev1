"use client";

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    website: '',
    type: '',
    budget: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Une erreur est survenue');
      }

      setStatus('success');
      setFormData({
        name: '',
        email: '',
        website: '',
        type: '',
        budget: '',
        message: ''
      });
    } catch (error) {
      console.error(error);
      setStatus('error');
    }
  };

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
            {status === 'success' ? (
              <div className="bg-green-50 border border-green-200 text-green-800 rounded-lg p-6 text-center">
                <h3 className="text-xl font-bold mb-2">Message envoyé avec succès !</h3>
                <p>Merci de nous avoir contactés. Nous avons bien reçu votre demande et nous reviendrons vers vous très rapidement.</p>
                <button
                  onClick={() => setStatus('idle')}
                  className="mt-4 px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors"
                >
                  Envoyer un autre message
                </button>
              </div>
            ) : (
              <form className="space-y-6" onSubmit={handleSubmit}>
                {status === 'error' && (
                  <div className="bg-red-50 border border-red-200 text-red-800 rounded p-4">
                    Une erreur est survenue lors de l'envoi du message. Veuillez réessayer ou nous contacter directement par email.
                  </div>
                )}

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nom complet</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                      placeholder="Votre nom"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                      placeholder="votre@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="website" className="block text-sm font-medium text-gray-700 mb-1">Site actuel (optionnel)</label>
                  <input
                    type="url"
                    id="website"
                    name="website"
                    value={formData.website}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="https://www.votre-site.com"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="type" className="block text-sm font-medium text-gray-700 mb-1">Type de besoin</label>
                    <select
                      id="type"
                      name="type"
                      value={formData.type}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                    >
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
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                    >
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
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="Décrivez votre projet en quelques mots..."
                  ></textarea>
                </div>

                <div className="bg-indigo-50 p-4 rounded-md text-indigo-800 text-sm mb-6">
                  🔒 Pas de spam, pas de relance agressive. Juste une réponse professionnelle pour avancer sur votre projet.
                </div>

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full md:w-auto px-8 py-3 bg-indigo-600 text-white font-bold rounded hover:bg-indigo-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === 'loading' ? 'Envoi en cours...' : 'Envoyer ma demande'}
                </button>
              </form>
            )}
          </div>

          <div className="mt-12 text-center text-gray-600">
            <p>Ou contactez-moi directement par email : <a href="mailto:contact@eurekadev.fr" className="text-indigo-600 font-semibold hover:underline">contact@eurekadev.fr</a></p>
          </div>
        </div>
      </section>
    </div>
  );
}
