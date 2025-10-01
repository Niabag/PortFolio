import React from 'react';
import { useLanguage } from '../../LanguageContext';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import AnimatedBackground from '../../components/AnimatedBackground';

export default function CoutSiteEcommerce() {
  const { lang } = useLanguage();

  return (
    <>
      <AnimatedBackground />
      <Navbar />
      
      <main className="min-h-screen pt-24 pb-20">
        <article className="py-20 bg-transparent text-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="mb-12">
              <div className="flex items-center gap-4 mb-6">
                <span className="bg-primary-red px-4 py-2 rounded-full text-sm font-semibold">
                  E-commerce
                </span>
                <span className="text-gray-400">10 Mars 2025</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Combien coûte un site e-commerce en 2025 ? Décryptage complet
              </h1>
              
              <img
                src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&h=600&fit=crop"
                alt="Coût site e-commerce"
                className="w-full h-64 md:h-96 object-cover rounded-lg mb-8"
              />
            </div>

            <div className="prose prose-invert prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-primary-red mb-4">
                Les principaux facteurs qui influencent le prix
              </h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Le coût d'un site e-commerce varie considérablement selon plusieurs critères essentiels :
              </p>
              <ul className="list-disc list-inside text-gray-300 mb-8 space-y-2">
                <li>Le nombre de produits à gérer</li>
                <li>Les fonctionnalités spécifiques (configurateur, abonnements, multi-devises)</li>
                <li>Le design personnalisé ou template</li>
                <li>Les intégrations tierces (ERP, CRM, logistique)</li>
                <li>Le niveau de personnalisation requis</li>
              </ul>

              <h2 className="text-3xl font-bold text-primary-red mb-4">
                Fourchettes de prix par type de projet
              </h2>

              <h3 className="text-2xl font-bold text-white mb-3 mt-6">
                Boutique simple (WooCommerce/Shopify)
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                <strong className="text-primary-red">Budget : 2 000€ - 8 000€</strong><br />
                Idéal pour démarrer avec moins de 100 produits. Inclut un design responsive, paiement sécurisé, 
                gestion des stocks basique et configuration SEO. Solution clé en main avec WooCommerce ou Shopify.
              </p>

              <h3 className="text-2xl font-bold text-white mb-3">
                Boutique avancée avec intégrations
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                <strong className="text-primary-red">Budget : 8 000€ - 25 000€</strong><br />
                Pour 100 à 1000 produits avec fonctionnalités avancées : système de fidélité, multi-langues, 
                intégration ERP/CRM, gestion avancée des stocks, marketplace, personnalisation produits.
              </p>

              <h3 className="text-2xl font-bold text-white mb-3">
                E-commerce sur mesure
              </h3>
              <p className="text-gray-300 mb-8 leading-relaxed">
                <strong className="text-primary-red">Budget : 25 000€ - 100 000€+</strong><br />
                Plateforme entièrement personnalisée avec React/Node.js. Fonctionnalités complexes, 
                architecture scalable, performances optimales, intégrations multiples, tableau de bord avancé.
              </p>

              <h2 className="text-3xl font-bold text-primary-red mb-4">
                Coûts récurrents à prévoir
              </h2>
              <p className="text-gray-300 mb-4 leading-relaxed">
                Au-delà de la création, anticipez ces dépenses mensuelles/annuelles :
              </p>
              <ul className="list-disc list-inside text-gray-300 mb-8 space-y-2">
                <li><strong className="text-white">Hébergement :</strong> 20€ - 500€/mois selon le trafic</li>
                <li><strong className="text-white">Maintenance :</strong> 100€ - 1000€/mois</li>
                <li><strong className="text-white">Sécurité SSL :</strong> 0€ - 200€/an</li>
                <li><strong className="text-white">Marketing digital :</strong> Budget variable selon objectifs</li>
                <li><strong className="text-white">Mises à jour :</strong> Incluses dans la maintenance</li>
              </ul>

              <h2 className="text-3xl font-bold text-primary-red mb-4">
                Comment optimiser son budget pour créer un site e-commerce ?
              </h2>
              <p className="text-gray-300 mb-4 leading-relaxed">
                Voici nos recommandations pour maîtriser vos coûts :
              </p>
              <ol className="list-decimal list-inside text-gray-300 mb-8 space-y-3">
                <li><strong className="text-white">Commencez simple :</strong> Lancez avec les fonctionnalités essentielles</li>
                <li><strong className="text-white">Choisissez la bonne plateforme :</strong> WooCommerce pour la flexibilité, Shopify pour la simplicité</li>
                <li><strong className="text-white">Priorisez le MVP :</strong> Minimum Viable Product avant les fonctionnalités avancées</li>
                <li><strong className="text-white">Investissez dans le SEO :</strong> Trafic organique = économies sur la publicité</li>
                <li><strong className="text-white">Planifiez l'évolution :</strong> Architecture évolutive dès le départ</li>
              </ol>

              <div className="bg-gradient-to-r from-primary-red/10 to-red-500/10 border border-primary-red/30 rounded-lg p-8 mt-12">
                <h3 className="text-2xl font-bold mb-4 text-white">
                  Demandez dès aujourd'hui un devis personnalisé
                </h3>
                <p className="text-gray-300 mb-6">
                  Notre équipe analyse vos besoins et vous propose une solution e-commerce adaptée à votre budget.
                </p>
                <a
                  href="/index.html#contact"
                  className="inline-block bg-primary-red px-8 py-3 rounded-lg hover:bg-red-700 transition font-semibold"
                >
                  Obtenir un devis gratuit
                </a>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-gray-700">
              <a
                href="/blog.html"
                className="inline-flex items-center text-primary-red hover:text-red-400 transition"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Retour au blog
              </a>
            </div>
          </div>
        </article>
      </main>

      <Footer />
    </>
  );
}
