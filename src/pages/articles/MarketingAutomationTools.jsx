import React from 'react';
import { useLanguage } from '../../LanguageContext';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import AnimatedBackground from '../../components/AnimatedBackground';

export default function MarketingAutomationTools() {
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
                  {lang === 'fr' ? 'Automation' : 'Automation'}
                </span>
                <span className="text-gray-400">{lang === 'fr' ? '7 Mars 2025' : 'March 7, 2025'}</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                {lang === 'fr'
                  ? 'Marketing automation : Les meilleurs outils en 2025'
                  : 'Marketing automation: The best tools in 2025'}
              </h1>
              
              <p className="text-xl text-gray-300 mb-8">
                {lang === 'fr'
                  ? 'Comparatif complet des meilleures plateformes de marketing automation : HubSpot, Mailchimp, ActiveCampaign, Brevo. Fonctionnalités, prix et comment choisir.'
                  : 'Complete comparison of the best marketing automation platforms: HubSpot, Mailchimp, ActiveCampaign, Brevo. Features, pricing and how to choose.'}
              </p>
              
              <img
                src="/images/articles/automation-tools.webp"
                alt="Marketing Automation Tools"
                className="w-full h-64 md:h-96 object-cover rounded-lg mb-8 relative z-10"
              />
            </div>

            <div className="prose prose-invert prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-primary-red mb-4 mt-8">
                {lang === 'fr' ? 'Pourquoi le marketing automation en 2025 ?' : 'Why marketing automation in 2025?'}
              </h2>
              <p className="text-gray-300 mb-8 leading-relaxed">
                {lang === 'fr'
                  ? 'Le marketing automation permet d\'automatiser les tâches répétitives : emails, segmentation, scoring, nurturing. Résultat : 14.5% d\'augmentation de productivité et 12.2% de réduction des coûts marketing. 67% des entreprises utilisent déjà une plateforme d\'automation.'
                  : 'Marketing automation allows automating repetitive tasks: emails, segmentation, scoring, nurturing. Result: 14.5% increase in productivity and 12.2% reduction in marketing costs. 67% of companies already use an automation platform.'}
              </p>

              <h2 className="text-3xl font-bold text-primary-red mb-4 mt-12">
                {lang === 'fr' ? 'Comparatif des meilleurs outils' : 'Comparison of the best tools'}
              </h2>
              
              <h3 className="text-2xl font-bold text-white mb-3 mt-8">
                {lang === 'fr' ? '1. HubSpot' : '1. HubSpot'}
              </h3>
              <p className="text-gray-300 mb-4 leading-relaxed">
                <strong className="text-white">{lang === 'fr' ? 'Pour qui :' : 'For whom:'}</strong> {lang === 'fr' ? 'PME et grandes entreprises B2B' : 'SMEs and large B2B companies'}
              </p>
              <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
                <li><strong className="text-white">Prix :</strong> {lang === 'fr' ? 'Gratuit (limité) puis 45-3200€/mois' : 'Free (limited) then €45-3200/month'}</li>
                <li><strong className="text-white">{lang === 'fr' ? 'Points forts :' : 'Strengths:'}</strong> {lang === 'fr' ? 'CRM intégré, interface intuitive, écosystème complet' : 'Integrated CRM, intuitive interface, complete ecosystem'}</li>
                <li><strong className="text-white">{lang === 'fr' ? 'Points faibles :' : 'Weaknesses:'}</strong> {lang === 'fr' ? 'Prix élevé pour fonctionnalités avancées' : 'High price for advanced features'}</li>
                <li><strong className="text-white">{lang === 'fr' ? 'Note :' : 'Rating:'}</strong> 9/10</li>
              </ul>

              <h3 className="text-2xl font-bold text-white mb-3 mt-8">
                {lang === 'fr' ? '2. ActiveCampaign' : '2. ActiveCampaign'}
              </h3>
              <p className="text-gray-300 mb-4 leading-relaxed">
                <strong className="text-white">{lang === 'fr' ? 'Pour qui :' : 'For whom:'}</strong> {lang === 'fr' ? 'PME cherchant automation puissante' : 'SMEs looking for powerful automation'}
              </p>
              <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
                <li><strong className="text-white">Prix :</strong> {lang === 'fr' ? '29-259€/mois selon contacts' : '€29-259/month depending on contacts'}</li>
                <li><strong className="text-white">{lang === 'fr' ? 'Points forts :' : 'Strengths:'}</strong> {lang === 'fr' ? 'Automation visuelle puissante, excellent rapport qualité/prix' : 'Powerful visual automation, excellent value for money'}</li>
                <li><strong className="text-white">{lang === 'fr' ? 'Points faibles :' : 'Weaknesses:'}</strong> {lang === 'fr' ? 'Interface moins intuitive que concurrents' : 'Less intuitive interface than competitors'}</li>
                <li><strong className="text-white">{lang === 'fr' ? 'Note :' : 'Rating:'}</strong> 8.5/10</li>
              </ul>

              <h3 className="text-2xl font-bold text-white mb-3 mt-8">
                {lang === 'fr' ? '3. Brevo (ex-Sendinblue)' : '3. Brevo (formerly Sendinblue)'}
              </h3>
              <p className="text-gray-300 mb-4 leading-relaxed">
                <strong className="text-white">{lang === 'fr' ? 'Pour qui :' : 'For whom:'}</strong> {lang === 'fr' ? 'TPE/PME, débutants' : 'VSEs/SMEs, beginners'}
              </p>
              <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
                <li><strong className="text-white">Prix :</strong> {lang === 'fr' ? 'Gratuit jusqu\'à 300 emails/jour, puis 19-69€/mois' : 'Free up to 300 emails/day, then €19-69/month'}</li>
                <li><strong className="text-white">{lang === 'fr' ? 'Points forts :' : 'Strengths:'}</strong> {lang === 'fr' ? 'Solution française, excellent gratuit, SMS inclus' : 'French solution, excellent free tier, SMS included'}</li>
                <li><strong className="text-white">{lang === 'fr' ? 'Points faibles :' : 'Weaknesses:'}</strong> {lang === 'fr' ? 'Automation moins avancée que ActiveCampaign' : 'Less advanced automation than ActiveCampaign'}</li>
                <li><strong className="text-white">{lang === 'fr' ? 'Note :' : 'Rating:'}</strong> 8/10</li>
              </ul>

              <h3 className="text-2xl font-bold text-white mb-3 mt-8">
                {lang === 'fr' ? '4. Mailchimp' : '4. Mailchimp'}
              </h3>
              <p className="text-gray-300 mb-4 leading-relaxed">
                <strong className="text-white">{lang === 'fr' ? 'Pour qui :' : 'For whom:'}</strong> {lang === 'fr' ? 'Débutants, e-commerce' : 'Beginners, e-commerce'}
              </p>
              <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
                <li><strong className="text-white">Prix :</strong> {lang === 'fr' ? 'Gratuit jusqu\'à 500 contacts, puis 13-350€/mois' : 'Free up to 500 contacts, then €13-350/month'}</li>
                <li><strong className="text-white">{lang === 'fr' ? 'Points forts :' : 'Strengths:'}</strong> {lang === 'fr' ? 'Interface simple, templates magnifiques, intégrations e-commerce' : 'Simple interface, beautiful templates, e-commerce integrations'}</li>
                <li><strong className="text-white">{lang === 'fr' ? 'Points faibles :' : 'Weaknesses:'}</strong> {lang === 'fr' ? 'Prix augmente vite, support moyen' : 'Price increases quickly, average support'}</li>
                <li><strong className="text-white">{lang === 'fr' ? 'Note :' : 'Rating:'}</strong> 7.5/10</li>
              </ul>

              <h3 className="text-2xl font-bold text-white mb-3 mt-8">
                {lang === 'fr' ? '5. Klaviyo' : '5. Klaviyo'}
              </h3>
              <p className="text-gray-300 mb-4 leading-relaxed">
                <strong className="text-white">{lang === 'fr' ? 'Pour qui :' : 'For whom:'}</strong> {lang === 'fr' ? 'E-commerce exclusivement' : 'E-commerce exclusively'}
              </p>
              <ul className="list-disc list-inside text-gray-300 mb-8 space-y-2">
                <li><strong className="text-white">Prix :</strong> {lang === 'fr' ? '45-1700€/mois selon contacts' : '€45-1700/month depending on contacts'}</li>
                <li><strong className="text-white">{lang === 'fr' ? 'Points forts :' : 'Strengths:'}</strong> {lang === 'fr' ? 'Spécialisé e-commerce, segmentation avancée, ROI excellent' : 'E-commerce specialist, advanced segmentation, excellent ROI'}</li>
                <li><strong className="text-white">{lang === 'fr' ? 'Points faibles :' : 'Weaknesses:'}</strong> {lang === 'fr' ? 'Prix élevé, courbe d\'apprentissage' : 'High price, learning curve'}</li>
                <li><strong className="text-white">{lang === 'fr' ? 'Note :' : 'Rating:'}</strong> 8.5/10 (e-commerce)</li>
              </ul>

              <h2 className="text-3xl font-bold text-primary-red mb-4 mt-12">
                {lang === 'fr' ? 'Comment choisir votre outil ?' : 'How to choose your tool?'}
              </h2>
              <ul className="list-disc list-inside text-gray-300 mb-8 space-y-2">
                <li><strong className="text-white">{lang === 'fr' ? 'Budget limité :' : 'Limited budget:'}</strong> {lang === 'fr' ? 'Brevo ou Mailchimp gratuit' : 'Brevo or free Mailchimp'}</li>
                <li><strong className="text-white">{lang === 'fr' ? 'E-commerce :' : 'E-commerce:'}</strong> {lang === 'fr' ? 'Klaviyo (premium) ou Mailchimp (budget serré)' : 'Klaviyo (premium) or Mailchimp (tight budget)'}</li>
                <li><strong className="text-white">{lang === 'fr' ? 'B2B complexe :' : 'Complex B2B:'}</strong> {lang === 'fr' ? 'HubSpot ou ActiveCampaign' : 'HubSpot or ActiveCampaign'}</li>
                <li><strong className="text-white">{lang === 'fr' ? 'Meilleur rapport qualité/prix :' : 'Best value for money:'}</strong> {lang === 'fr' ? 'ActiveCampaign' : 'ActiveCampaign'}</li>
                <li><strong className="text-white">{lang === 'fr' ? 'Solution française :' : 'French solution:'}</strong> {lang === 'fr' ? 'Brevo (RGPD facilité)' : 'Brevo (GDPR facilitated)'}</li>
              </ul>

              <h2 className="text-3xl font-bold text-primary-red mb-4 mt-12">
                {lang === 'fr' ? 'Fonctionnalités essentielles' : 'Essential features'}
              </h2>
              <ul className="list-disc list-inside text-gray-300 mb-8 space-y-2">
                <li>{lang === 'fr' ? 'Email automation (welcome, abandon panier, nurturing)' : 'Email automation (welcome, cart abandonment, nurturing)'}</li>
                <li>{lang === 'fr' ? 'Segmentation avancée' : 'Advanced segmentation'}</li>
                <li>{lang === 'fr' ? 'Lead scoring' : 'Lead scoring'}</li>
                <li>{lang === 'fr' ? 'A/B testing' : 'A/B testing'}</li>
                <li>{lang === 'fr' ? 'Landing pages et formulaires' : 'Landing pages and forms'}</li>
                <li>{lang === 'fr' ? 'Reporting et analytics' : 'Reporting and analytics'}</li>
                <li>{lang === 'fr' ? 'Intégrations (CRM, e-commerce, CMS)' : 'Integrations (CRM, e-commerce, CMS)'}</li>
              </ul>

              <h2 className="text-3xl font-bold text-primary-red mb-4 mt-12">
                {lang === 'fr' ? 'Conclusion' : 'Conclusion'}
              </h2>
              <p className="text-gray-300 mb-8 leading-relaxed">
                {lang === 'fr'
                  ? 'Le meilleur outil dépend de vos besoins. Commencez avec une version gratuite (Brevo/Mailchimp), testez, puis passez à ActiveCampaign ou HubSpot si vous avez besoin de plus de puissance. L\'important : utiliser l\'outil, pas le collectionner.'
                  : 'The best tool depends on your needs. Start with a free version (Brevo/Mailchimp), test, then move to ActiveCampaign or HubSpot if you need more power. The important thing: use the tool, don\'t collect it.'}
              </p>

              <div className="bg-gradient-to-r from-primary-red/10 to-red-500/10 border border-primary-red/30 rounded-lg p-8 mt-12">
                <h3 className="text-2xl font-bold mb-4 text-white">
                  {lang === 'fr' ? 'Besoin d\'aide pour choisir et configurer votre outil ?' : 'Need help choosing and configuring your tool?'}
                </h3>
                <p className="text-gray-300 mb-6">
                  {lang === 'fr' ? 'Notre agence vous accompagne dans le choix, la configuration et l\'optimisation de votre plateforme de marketing automation.' : 'Our agency supports you in choosing, configuring and optimizing your marketing automation platform.'}
                </p>
                <a
                  href="/index.html#contact"
                  className="inline-block bg-primary-red px-8 py-3 rounded-lg hover:bg-red-700 transition font-semibold"
                >
                  {lang === 'fr' ? 'Démarrer avec l\'automation' : 'Start with automation'}
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
