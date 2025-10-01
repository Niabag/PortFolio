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
                {lang === 'fr' ? 'Combien coûte un site e-commerce en 2025 ? Décryptage complet' : 'How much does an e-commerce site cost in 2025? Complete breakdown'}
              </h1>
              
              <img
                src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&h=600&fit=crop"
                alt="Coût site e-commerce"
                className="w-full h-64 md:h-96 object-cover rounded-lg mb-8 relative z-10"
              />
            </div>

            <div className="prose prose-invert prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-primary-red mb-4">
                {lang === 'fr' ? 'Les principaux facteurs qui influencent le prix' : 'Main factors that influence the price'}
              </h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                {lang === 'fr' ? "Le coût d'un site e-commerce varie considérablement selon plusieurs critères essentiels :" : 'The cost of an e-commerce website varies significantly depending on several key criteria:'}
              </p>
              <ul className="list-disc list-inside text-gray-300 mb-8 space-y-2">
                <li>{lang === 'fr' ? 'Le nombre de produits à gérer' : 'Number of products to manage'}</li>
                <li>{lang === 'fr' ? 'Les fonctionnalités spécifiques (configurateur, abonnements, multi-devises)' : 'Specific features (configurator, subscriptions, multi-currency)'}</li>
                <li>{lang === 'fr' ? 'Le design personnalisé ou template' : 'Custom design or template'}</li>
                <li>{lang === 'fr' ? 'Les intégrations tierces (ERP, CRM, logistique)' : 'Third-party integrations (ERP, CRM, logistics)'}</li>
                <li>{lang === 'fr' ? 'Le niveau de personnalisation requis' : 'Required level of customization'}</li>
              </ul>

              <h2 className="text-3xl font-bold text-primary-red mb-4">
                {lang === 'fr' ? 'Fourchettes de prix par type de projet' : 'Price ranges by project type'}
              </h2>

              <h3 className="text-2xl font-bold text-white mb-3 mt-6">
                {lang === 'fr' ? 'Boutique simple (WooCommerce/Shopify)' : 'Simple store (WooCommerce/Shopify)'}
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                <strong className="text-primary-red">{lang === 'fr' ? 'Budget : 2 000€ - 8 000€' : 'Budget: €2,000 - €8,000'}</strong><br />
                {lang === 'fr' ? "Idéal pour démarrer avec moins de 100 produits. Inclut un design responsive, paiement sécurisé, gestion des stocks basique et configuration SEO. Solution clé en main avec WooCommerce ou Shopify." : 'Ideal to start with fewer than 100 products. Includes responsive design, secure payment, basic stock management and SEO setup. Turnkey with WooCommerce or Shopify.'}
              </p>

              <h3 className="text-2xl font-bold text-white mb-3">
                {lang === 'fr' ? 'Boutique avancée avec intégrations' : 'Advanced store with integrations'}
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                <strong className="text-primary-red">{lang === 'fr' ? 'Budget : 8 000€ - 25 000€' : 'Budget: €8,000 - €25,000'}</strong><br />
                {lang === 'fr' ? 'Pour 100 à 1000 produits avec fonctionnalités avancées : système de fidélité, multi-langues, intégration ERP/CRM, gestion avancée des stocks, marketplace, personnalisation produits.' : 'For 100 to 1,000 products with advanced features: loyalty system, multi-language, ERP/CRM integration, advanced stock management, marketplace, product customization.'}
              </p>

              <h3 className="text-2xl font-bold text-white mb-3">
                {lang === 'fr' ? 'E-commerce sur mesure' : 'Custom e-commerce'}
              </h3>
              <p className="text-gray-300 mb-8 leading-relaxed">
                <strong className="text-primary-red">{lang === 'fr' ? 'Budget : 25 000€ - 100 000€+' : 'Budget: €25,000 - €100,000+'}</strong><br />
                {lang === 'fr' ? 'Plateforme entièrement personnalisée avec React/Node.js. Fonctionnalités complexes, architecture scalable, performances optimales, intégrations multiples, tableau de bord avancé.' : 'Fully custom platform with React/Node.js. Complex features, scalable architecture, optimal performance, multiple integrations, advanced dashboard.'}
              </p>

              <h2 className="text-3xl font-bold text-primary-red mb-4">
                {lang === 'fr' ? 'Coûts récurrents à prévoir' : 'Recurring costs to expect'}
              </h2>
              <p className="text-gray-300 mb-4 leading-relaxed">
                {lang === 'fr' ? 'Au-delà de la création, anticipez ces dépenses mensuelles/annuelles :' : 'Beyond creation, anticipate these monthly/annual expenses:'}
              </p>
              <ul className="list-disc list-inside text-gray-300 mb-8 space-y-2">
                <li><strong className="text-white">{lang === 'fr' ? 'Hébergement :' : 'Hosting:'}</strong> {lang === 'fr' ? '20€ - 500€/mois selon le trafic' : '€20 - €500/month depending on traffic'}</li>
                <li><strong className="text-white">{lang === 'fr' ? 'Maintenance :' : 'Maintenance:'}</strong> {lang === 'fr' ? '100€ - 1000€/mois' : '€100 - €1,000/month'}</li>
                <li><strong className="text-white">{lang === 'fr' ? 'Sécurité SSL :' : 'SSL Security:'}</strong> {lang === 'fr' ? '0€ - 200€/an' : '€0 - €200/year'}</li>
                <li><strong className="text-white">{lang === 'fr' ? 'Marketing digital :' : 'Digital marketing:'}</strong> {lang === 'fr' ? 'Budget variable selon objectifs' : 'Variable budget depending on goals'}</li>
                <li><strong className="text-white">{lang === 'fr' ? 'Mises à jour :' : 'Updates:'}</strong> {lang === 'fr' ? 'Incluses dans la maintenance' : 'Included in maintenance'}</li>
              </ul>

              <h2 className="text-3xl font-bold text-primary-red mb-4">
                {lang === 'fr' ? 'Comment optimiser son budget pour créer un site e-commerce ?' : 'How to optimize your budget to create an e-commerce site?'}
              </h2>
              <p className="text-gray-300 mb-4 leading-relaxed">
                {lang === 'fr' ? 'Voici nos recommandations pour maîtriser vos coûts :' : 'Here are our recommendations to control your costs:'}
              </p>
              <ol className="list-decimal list-inside text-gray-300 mb-8 space-y-3">
                <li><strong className="text-white">{lang === 'fr' ? 'Commencez simple :' : 'Start simple:'}</strong> {lang === 'fr' ? 'Lancez avec les fonctionnalités essentielles' : 'Launch with essential features'}</li>
                <li><strong className="text-white">{lang === 'fr' ? 'Choisissez la bonne plateforme :' : 'Choose the right platform:'}</strong> {lang === 'fr' ? 'WooCommerce pour la flexibilité, Shopify pour la simplicité' : 'WooCommerce for flexibility, Shopify for simplicity'}</li>
                <li><strong className="text-white">{lang === 'fr' ? 'Priorisez le MVP :' : 'Prioritize the MVP:'}</strong> {lang === 'fr' ? 'Minimum Viable Product avant les fonctionnalités avancées' : 'Minimum Viable Product before advanced features'}</li>
                <li><strong className="text-white">{lang === 'fr' ? 'Investissez dans le SEO :' : 'Invest in SEO:'}</strong> {lang === 'fr' ? 'Trafic organique = économies sur la publicité' : 'Organic traffic = savings on ads'}</li>
                <li><strong className="text-white">{lang === 'fr' ? "Planifiez l'évolution :" : 'Plan for growth:'}</strong> {lang === 'fr' ? 'Architecture évolutive dès le départ' : 'Scalable architecture from the start'}</li>
              </ol>

              <div className="bg-gradient-to-r from-primary-red/10 to-red-500/10 border border-primary-red/30 rounded-lg p-8 mt-12">
                <h3 className="text-2xl font-bold mb-4 text-white">
                  {lang === 'fr' ? "Demandez dès aujourd'hui un devis personnalisé" : 'Request a personalized quote today'}
                </h3>
                <p className="text-gray-300 mb-6">
                  {lang === 'fr' ? 'Notre équipe analyse vos besoins et vous propose une solution e-commerce adaptée à votre budget.' : 'Our team analyzes your needs and proposes an e-commerce solution adapted to your budget.'}
                </p>
                <a
                  href="/index.html#contact"
                  className="inline-block bg-primary-red px-8 py-3 rounded-lg hover:bg-red-700 transition font-semibold"
                >
                  {lang === 'fr' ? 'Obtenir un devis gratuit' : 'Get a free quote'}
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
                {lang === 'fr' ? 'Retour au blog' : 'Back to blog'}
              </a>
            </div>
          </div>
        </article>
      </main>

      <Footer />
    </>
  );
}
