"use client";

import { useState, useMemo } from 'react';
import Link from 'next/link';

// --- Données de tarification ---

const PACKS = [
  {
    id: 'essentiel',
    name: 'Pack Essentiel',
    description: 'Site vitrine 3-4 pages, idéal pour démarrer.',
    features: ['3-4 pages', 'Design moderne responsive', 'Formulaire de contact', 'Optimisation mobile', '1 round de modifications'],
    priceMin: 1200,
    priceMax: 1500,
  },
  {
    id: 'pro',
    name: 'Pack Pro',
    description: 'Site 5-6 pages avec blog et fonctionnalités avancées.',
    features: ['5-6 pages', 'Design sur-mesure', 'Blog intégré', 'SEO de base', 'Formulaires avancés', 'Animations', '2 rounds de modifications'],
    priceMin: 2000,
    priceMax: 2800,
    popular: true,
  },
  {
    id: 'premium',
    name: 'Pack Premium',
    description: 'Site complet 6-10 pages avec fonctionnalités sur mesure.',
    features: ['6-10 pages', 'Design unique', 'Fonctionnalités avancées (réservation...)', 'SEO complet', 'Rédaction (8 pages)', 'Formation gestion', '3 rounds de modifications'],
    priceMin: 3500,
    priceMax: 5000,
  },
];

const ADDITIONAL_OPTIONS = [
  { id: 'cms', name: 'Intégration CMS (Gestion autonome simple)', min: 300, max: 500 },
  { id: 'ecommerce', name: 'Module e-commerce simple (max 20 produits)', min: 800, max: 1200 },
  { id: 'multilang', name: 'Multilingue (par langue supplémentaire)', min: 300, max: 500 },
  { id: 'shooting', name: 'Shooting photo produits/locaux', min: 400, max: 800 },
  { id: 'formation', name: 'Formation client supplémentaire (2h)', min: 150, max: 200 },
];

const HOSTING_OPTIONS = [
  { id: 'none', name: 'Je gère mon hébergement', min: 0, max: 0 },
  { id: 'domain', name: 'Nom de domaine seul (.fr, .com)', min: 12, max: 20, period: '/an' },
  { id: 'hosting', name: 'Hébergement performance', min: 60, max: 150, period: '/an' },
  { id: 'pack', name: 'Pack Hébergement + Domaine (géré par nous)', min: 100, max: 180, period: '/an' },
];

const MAINTENANCE_OPTIONS = [
  { id: 'none', name: 'Pas de maintenance', min: 0, max: 0 },
  { id: 'basic', name: 'Maintenance Basique (Tech + Save + 30min)', min: 40, max: 60, period: '/mois' },
  { id: 'standard', name: 'Maintenance Standard (Basique + 1h + Perf)', min: 80, max: 120, period: '/mois' },
  { id: 'premium', name: 'Maintenance Premium (Standard + 2h + 24/7)', min: 150, max: 200, period: '/mois' },
];

const SEO_MARKETING_OPTIONS = [
  { id: 'audit', name: 'Audit SEO initial', min: 300, max: 500, type: 'one-shot' },
  { id: 'seo_full', name: 'Optimisation SEO complète', min: 500, max: 800, type: 'one-shot' },
  { id: 'seo_monthly', name: 'Suivi SEO mensuel', min: 150, max: 300, type: 'monthly' },
  { id: 'blog', name: 'Création contenu blog (4 articles/mois)', min: 300, max: 500, type: 'monthly' },
  { id: 'social', name: 'Gestion réseaux sociaux (basique)', min: 200, max: 400, type: 'monthly' },
];

export default function TarifsPage() {
  // --- State ---
  const [selectedPack, setSelectedPack] = useState<string | null>(null); // 'essentiel', 'pro', 'premium', or null
  const [extraPages, setExtraPages] = useState(0);
  const [contentPages, setContentPages] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [selectedHosting, setSelectedHosting] = useState('none');
  const [selectedMaintenance, setSelectedMaintenance] = useState('none');
  const [selectedSeo, setSelectedSeo] = useState<string[]>([]);

  // --- Helpers ---
  const toggleOption = (id: string, list: string[], setList: (l: string[]) => void) => {
    if (list.includes(id)) {
      setList(list.filter(item => item !== id));
    } else {
      setList([...list, id]);
    }
  };

  // --- Calculation ---
  const estimate = useMemo(() => {
    let minTotal = 0;
    let maxTotal = 0;
    let minMonthly = 0;
    let maxMonthly = 0;
    let minYearly = 0;
    let maxYearly = 0;

    // 1. Pack Base
    if (selectedPack) {
      const pack = PACKS.find(p => p.id === selectedPack);
      if (pack) {
        minTotal += pack.priceMin;
        maxTotal += pack.priceMax;
      }
    }

    // 2. Extra Pages (150-300 / page)
    minTotal += extraPages * 150;
    maxTotal += extraPages * 300;

    // 3. Content SEO Writing (80-120 / page)
    minTotal += contentPages * 80;
    maxTotal += contentPages * 120;

    // 4. Additional Options
    selectedOptions.forEach(optId => {
      const opt = ADDITIONAL_OPTIONS.find(o => o.id === optId);
      if (opt) {
        minTotal += opt.min;
        maxTotal += opt.max;
      }
    });

    // 5. Hosting (Annual)
    const hosting = HOSTING_OPTIONS.find(h => h.id === selectedHosting);
    if (hosting) {
      minYearly += hosting.min;
      maxYearly += hosting.max;
    }

    // 6. Maintenance (Monthly)
    const maint = MAINTENANCE_OPTIONS.find(m => m.id === selectedMaintenance);
    if (maint) {
      minMonthly += maint.min;
      maxMonthly += maint.max;
    }

    // 7. SEO / Marketing
    selectedSeo.forEach(seoId => {
      const seo = SEO_MARKETING_OPTIONS.find(s => s.id === seoId);
      if (seo) {
        if (seo.type === 'monthly') {
          minMonthly += seo.min;
          maxMonthly += seo.max;
        } else {
          minTotal += seo.min;
          maxTotal += seo.max;
        }
      }
    });

    return { minTotal, maxTotal, minMonthly, maxMonthly, minYearly, maxYearly };
  }, [selectedPack, extraPages, contentPages, selectedOptions, selectedHosting, selectedMaintenance, selectedSeo]);

  const contactUrl = useMemo(() => {
    const params = new URLSearchParams();

    let summary = "Bonjour, je souhaite obtenir un devis basé sur ma simulation :\n\n";

    // 1. Pack
    if (selectedPack) {
      const p = PACKS.find(pk => pk.id === selectedPack);
      summary += `📦 Pack : ${p?.name}\n`;
    } else {
      summary += `📦 Pack : Aucun (Sur mesure)\n`;
    }

    // 2. Pages & Contenu
    if (extraPages > 0) summary += `📄 Pages supplémentaires : ${extraPages}\n`;
    if (contentPages > 0) summary += `✍️ Rédaction SEO : ${contentPages} pages\n`;

    // 3. Options
    if (selectedOptions.length > 0) {
      summary += `⚙️ Options :\n`;
      selectedOptions.forEach(optId => {
        const opt = ADDITIONAL_OPTIONS.find(o => o.id === optId);
        if (opt) summary += `   - ${opt.name}\n`;
      });
    }

    // 4. Hébergement
    if (selectedHosting !== 'none') {
        const h = HOSTING_OPTIONS.find(o => o.id === selectedHosting);
        summary += `☁️ Hébergement : ${h?.name}\n`;
    }

    // 5. Maintenance
    if (selectedMaintenance !== 'none') {
        const m = MAINTENANCE_OPTIONS.find(o => o.id === selectedMaintenance);
        summary += `🛠️ Maintenance : ${m?.name}\n`;
    }

     // 6. SEO
    if (selectedSeo.length > 0) {
      summary += `🚀 Marketing / SEO :\n`;
      selectedSeo.forEach(optId => {
        const opt = SEO_MARKETING_OPTIONS.find(o => o.id === optId);
        if (opt) summary += `   - ${opt.name}\n`;
      });
    }

    // 7. Estimations
    summary += `\n💰 Estimation indicative :\n`;
    summary += `   - Initial : ${estimate.minTotal}€ - ${estimate.maxTotal}€\n`;
    if (estimate.maxMonthly > 0) summary += `   - Mensuel : ${estimate.minMonthly}€ - ${estimate.maxMonthly}€\n`;
    if (estimate.maxYearly > 0) summary += `   - Annuel : ${estimate.minYearly}€ - ${estimate.maxYearly}€\n`;

    summary += "\nMerci de me recontacter pour affiner ce projet.";

    params.set('message', summary);
    params.set('subject', 'Demande de devis suite à simulation'); // Optional, if we want to use it

    // Determine budget category
    const avgPrice = (estimate.minTotal + estimate.maxTotal) / 2;
    let budgetCategory = '';

    if (avgPrice < 1000) budgetCategory = 'small';
    else if (avgPrice < 3000) budgetCategory = 'medium';
    else if (avgPrice < 5000) budgetCategory = 'large';
    else budgetCategory = 'xl';

    if (budgetCategory && estimate.maxTotal > 0) {
      params.set('budget', budgetCategory);
    }

    return `/contact?${params.toString()}`;
  }, [selectedPack, extraPages, contentPages, selectedOptions, selectedHosting, selectedMaintenance, selectedSeo, estimate]);


  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">

        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Investissez dans votre présence en ligne</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Des tarifs transparents et adaptés à vos besoins. Choisissez un pack ou composez votre offre sur mesure.
          </p>
        </div>

        {/* Packs Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {PACKS.map((pack) => (
            <div
              key={pack.id}
              className={`bg-white rounded-2xl shadow-lg border p-8 flex flex-col transition-all duration-300 hover:shadow-xl ${selectedPack === pack.id ? 'border-indigo-600 ring-2 ring-indigo-600 ring-opacity-50' : 'border-gray-100'} ${pack.popular ? 'relative' : ''}`}
              onClick={() => setSelectedPack(pack.id === selectedPack ? null : pack.id)}
            >
              {pack.popular && (
                <div className="absolute top-0 right-0 bg-indigo-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg uppercase tracking-wide">
                  Populaire
                </div>
              )}
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{pack.name}</h3>
              <p className="text-gray-500 mb-6 text-sm">{pack.description}</p>
              <div className="mb-6">
                <span className="text-3xl font-bold text-indigo-600">{pack.priceMin}€ - {pack.priceMax}€</span>
                <span className="text-gray-400 text-sm block mt-1">Paiement unique</span>
              </div>
              <ul className="space-y-3 mb-8 flex-1">
                {pack.features.map((feat, i) => (
                  <li key={i} className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    <span className="text-gray-600 text-sm">{feat}</span>
                  </li>
                ))}
              </ul>
              <button
                className={`w-full py-3 rounded-lg font-semibold transition-colors ${selectedPack === pack.id ? 'bg-indigo-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
              >
                {selectedPack === pack.id ? 'Sélectionné' : 'Choisir ce pack'}
              </button>
            </div>
          ))}
        </div>

        {/* Calculator Section */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
          <div className="bg-indigo-900 p-6 md:p-8 text-white">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">Configurez votre projet sur mesure</h2>
            <p className="text-indigo-200">Sélectionnez les options pour estimer votre budget global.</p>
          </div>

          <div className="p-6 md:p-8 grid grid-cols-1 lg:grid-cols-3 gap-10">

            {/* Options Column */}
            <div className="lg:col-span-2 space-y-10">

              {/* 1. Base */}
              <section>
                <h3 className="text-lg font-bold text-gray-900 mb-4 border-b pb-2">1. Base du projet</h3>
                <div className="bg-blue-50 p-4 rounded-lg text-blue-800 mb-4">
                  {selectedPack ? (
                    <p>Pack sélectionné : <strong>{PACKS.find(p => p.id === selectedPack)?.name}</strong></p>
                  ) : (
                    <p>Veuillez sélectionner un pack ci-dessus ou continuez avec les options pour du sur-mesure.</p>
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Pages supplémentaires (hors pack)</label>
                    <div className="flex items-center">
                      <button onClick={() => setExtraPages(Math.max(0, extraPages - 1))} className="w-8 h-8 rounded-full bg-gray-200 text-gray-600 hover:bg-gray-300 flex items-center justify-center">-</button>
                      <span className="mx-4 font-bold w-6 text-center">{extraPages}</span>
                      <button onClick={() => setExtraPages(extraPages + 1)} className="w-8 h-8 rounded-full bg-gray-200 text-gray-600 hover:bg-gray-300 flex items-center justify-center">+</button>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">150€ - 300€ / page</p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Rédaction contenu SEO</label>
                    <div className="flex items-center">
                      <button onClick={() => setContentPages(Math.max(0, contentPages - 1))} className="w-8 h-8 rounded-full bg-gray-200 text-gray-600 hover:bg-gray-300 flex items-center justify-center">-</button>
                      <span className="mx-4 font-bold w-6 text-center">{contentPages}</span>
                      <button onClick={() => setContentPages(contentPages + 1)} className="w-8 h-8 rounded-full bg-gray-200 text-gray-600 hover:bg-gray-300 flex items-center justify-center">+</button>
                    </div>
                     <p className="text-xs text-gray-500 mt-1">80€ - 120€ / page</p>
                  </div>
                </div>
              </section>

              {/* 2. Fonctionnalités */}
              <section>
                <h3 className="text-lg font-bold text-gray-900 mb-4 border-b pb-2">2. Fonctionnalités & Services</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {ADDITIONAL_OPTIONS.map(opt => (
                    <label key={opt.id} className="flex items-start p-3 border rounded-lg hover:bg-gray-50 cursor-pointer transition-colors">
                      <input
                        type="checkbox"
                        className="mt-1 w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                        checked={selectedOptions.includes(opt.id)}
                        onChange={() => toggleOption(opt.id, selectedOptions, setSelectedOptions)}
                      />
                      <div className="ml-3">
                        <span className="block text-sm font-medium text-gray-900">{opt.name}</span>
                        <span className="block text-xs text-gray-500">{opt.min}€ - {opt.max}€</span>
                      </div>
                    </label>
                  ))}
                </div>
              </section>

              {/* 3. Hébergement & Maintenance */}
              <section>
                <h3 className="text-lg font-bold text-gray-900 mb-4 border-b pb-2">3. Vie du site (Hébergement & Maintenance)</h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-sm font-semibold text-gray-700 mb-3 uppercase tracking-wider">Hébergement (Annuel)</h4>
                    <div className="space-y-2">
                      {HOSTING_OPTIONS.map(opt => (
                        <label key={opt.id} className="flex items-center">
                          <input
                            type="radio"
                            name="hosting"
                            className="text-indigo-600 focus:ring-indigo-500"
                            checked={selectedHosting === opt.id}
                            onChange={() => setSelectedHosting(opt.id)}
                          />
                          <span className="ml-2 text-sm text-gray-700">{opt.name} <span className="text-gray-500 text-xs">({opt.min > 0 ? `${opt.min}€ - ${opt.max}€ ${opt.period}` : 'Aucun'})</span></span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                     <h4 className="text-sm font-semibold text-gray-700 mb-3 uppercase tracking-wider">Maintenance (Mensuel)</h4>
                     <div className="space-y-2">
                      {MAINTENANCE_OPTIONS.map(opt => (
                        <label key={opt.id} className="flex items-center">
                          <input
                            type="radio"
                            name="maintenance"
                            className="text-indigo-600 focus:ring-indigo-500"
                            checked={selectedMaintenance === opt.id}
                            onChange={() => setSelectedMaintenance(opt.id)}
                          />
                          <span className="ml-2 text-sm text-gray-700">{opt.name} <span className="text-gray-500 text-xs">({opt.min > 0 ? `${opt.min}€ - ${opt.max}€ ${opt.period}` : 'Aucune'})</span></span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
              </section>

               {/* 4. Marketing */}
               <section>
                <h3 className="text-lg font-bold text-gray-900 mb-4 border-b pb-2">4. Croissance (SEO & Marketing)</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {SEO_MARKETING_OPTIONS.map(opt => (
                    <label key={opt.id} className="flex items-start p-3 border rounded-lg hover:bg-gray-50 cursor-pointer transition-colors">
                      <input
                        type="checkbox"
                        className="mt-1 w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                        checked={selectedSeo.includes(opt.id)}
                        onChange={() => toggleOption(opt.id, selectedSeo, setSelectedSeo)}
                      />
                      <div className="ml-3">
                        <span className="block text-sm font-medium text-gray-900">{opt.name}</span>
                        <span className="block text-xs text-gray-500">
                          {opt.min}€ - {opt.max}€ {opt.type === 'monthly' ? '/mois' : '(One-shot)'}
                        </span>
                      </div>
                    </label>
                  ))}
                </div>
              </section>

            </div>

            {/* Results Column */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 bg-gray-50 p-6 rounded-xl border border-gray-200 shadow-inner">
                <h3 className="text-xl font-bold text-gray-800 mb-6">Estimation de votre projet</h3>

                <div className="space-y-6">
                  {/* One Shot Cost */}
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <p className="text-sm text-gray-500 mb-1">Coût création (One-shot)</p>
                    <div className="text-3xl font-bold text-indigo-600">
                      {estimate.minTotal.toLocaleString()}€ - {estimate.maxTotal.toLocaleString()}€
                    </div>
                    {(selectedPack || extraPages > 0 || selectedOptions.length > 0) ? (
                      <p className="text-xs text-green-600 mt-2 flex items-center">
                         <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                         Comprend : {selectedPack ? PACKS.find(p=>p.id===selectedPack)?.name : 'Base'} + {selectedOptions.length} option(s)
                      </p>
                    ) : (
                      <p className="text-xs text-gray-400 mt-2">Sélectionnez des options pour voir le prix</p>
                    )}
                  </div>

                  {/* Recurring Monthly Cost */}
                  {(estimate.maxMonthly > 0) && (
                    <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-blue-400">
                      <p className="text-sm text-gray-500 mb-1">Récurrent Mensuel</p>
                      <div className="text-2xl font-bold text-gray-800">
                        {estimate.minMonthly}€ - {estimate.maxMonthly}€ <span className="text-sm font-normal text-gray-500">/mois</span>
                      </div>
                      <p className="text-xs text-gray-400 mt-1">Maintenance, SEO mensuel...</p>
                    </div>
                  )}

                  {/* Recurring Yearly Cost */}
                  {(estimate.maxYearly > 0) && (
                    <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-yellow-400">
                      <p className="text-sm text-gray-500 mb-1">Récurrent Annuel</p>
                      <div className="text-xl font-bold text-gray-800">
                        {estimate.minYearly}€ - {estimate.maxYearly}€ <span className="text-sm font-normal text-gray-500">/an</span>
                      </div>
                       <p className="text-xs text-gray-400 mt-1">Hébergement, domaine...</p>
                    </div>
                  )}
                </div>

                <div className="mt-8">
                  <Link
                    href={contactUrl}
                    className="block w-full text-center py-3 bg-indigo-600 text-white font-bold rounded-lg hover:bg-indigo-700 transition-transform transform active:scale-95 shadow-md hover:shadow-lg"
                  >
                    Demander un devis précis
                  </Link>
                  <p className="text-center text-xs text-gray-400 mt-3">
                    Ces tarifs sont indicatifs. Le devis final dépendra du cahier des charges détaillé.
                  </p>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

