import React from 'react';
import { useLanguage } from '../../LanguageContext';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import AnimatedBackground from '../../components/AnimatedBackground';

export default function MetaAdsOptimisation() {
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
                  {lang === 'fr' ? 'Publicité' : 'Advertising'}
                </span>
                <span className="text-gray-400">{lang === 'fr' ? '2 Mars 2025' : 'March 2, 2025'}</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                {lang === 'fr'
                  ? 'Publicité Meta Ads : Optimiser vos campagnes Facebook et Instagram'
                  : 'Meta Ads advertising: Optimize your Facebook and Instagram campaigns'}
              </h1>
              
              <p className="text-xl text-gray-300 mb-8">
                {lang === 'fr'
                  ? 'Ciblage, budget, créatifs, A/B testing : guide complet pour créer des campagnes Meta Ads (Facebook/Instagram) rentables en 2025.'
                  : 'Targeting, budget, creatives, A/B testing: complete guide to creating profitable Meta Ads (Facebook/Instagram) campaigns in 2025.'}
              </p>
              
              <img
                src="/images/articles/meta-ads.webp"
                alt="Meta Ads"
                className="w-full h-64 md:h-96 object-cover rounded-lg mb-8 relative z-10"
              />
            </div>

            <div className="prose prose-invert prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-primary-red mb-4 mt-8">
                {lang === 'fr' ? 'Meta Ads en 2025 : Chiffres clés' : 'Meta Ads in 2025: Key figures'}
              </h2>
              <p className="text-gray-300 mb-8 leading-relaxed">
                {lang === 'fr'
                  ? '3 milliards d\'utilisateurs actifs sur Facebook et Instagram. CPC moyen : 0.50-2€, CPM : 5-15€. ROI moyen : 2-4€ pour 1€ investi. 93% des marketeurs utilisent Facebook Ads. C\'est LA plateforme publicitaire social media.'
                  : '3 billion active users on Facebook and Instagram. Average CPC: €0.50-2, CPM: €5-15. Average ROI: €2-4 for every €1 invested. 93% of marketers use Facebook Ads. It\'s THE social media advertising platform.'}
              </p>

              <h2 className="text-3xl font-bold text-primary-red mb-4 mt-12">
                {lang === 'fr' ? 'Types de campagnes Meta Ads' : 'Meta Ads campaign types'}
              </h2>
              <ul className="list-disc list-inside text-gray-300 mb-8 space-y-2">
                <li><strong className="text-white">{lang === 'fr' ? 'Notoriété :' : 'Awareness:'}</strong> {lang === 'fr' ? 'Portée maximale, CPM bas, bon pour lancement marque' : 'Maximum reach, low CPM, good for brand launch'}</li>
                <li><strong className="text-white">{lang === 'fr' ? 'Trafic :' : 'Traffic:'}</strong> {lang === 'fr' ? 'Visites site web, optimisé pour clics' : 'Website visits, optimized for clicks'}</li>
                <li><strong className="text-white">{lang === 'fr' ? 'Engagement :' : 'Engagement:'}</strong> {lang === 'fr' ? 'Likes, commentaires, partages sur posts' : 'Likes, comments, shares on posts'}</li>
                <li><strong className="text-white">{lang === 'fr' ? 'Génération leads :' : 'Lead generation:'}</strong> {lang === 'fr' ? 'Formulaires intégrés Facebook' : 'Integrated Facebook forms'}</li>
                <li><strong className="text-white">{lang === 'fr' ? 'Conversions :' : 'Conversions:'}</strong> {lang === 'fr' ? 'Ventes, inscriptions (Pixel requis)' : 'Sales, sign-ups (Pixel required)'}</li>
                <li><strong className="text-white">{lang === 'fr' ? 'Messages :' : 'Messages:'}</strong> {lang === 'fr' ? 'Conversations Messenger/Instagram' : 'Messenger/Instagram conversations'}</li>
              </ul>

              <h2 className="text-3xl font-bold text-primary-red mb-4 mt-12">
                {lang === 'fr' ? 'Ciblage : La clé du succès' : 'Targeting: The key to success'}
              </h2>
              
              <h3 className="text-2xl font-bold text-white mb-3 mt-8">
                {lang === 'fr' ? 'Audiences principales' : 'Main audiences'}
              </h3>
              <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
                <li><strong className="text-white">{lang === 'fr' ? 'Démographique :' : 'Demographic:'}</strong> {lang === 'fr' ? 'Âge, sexe, localisation, langue' : 'Age, gender, location, language'}</li>
                <li><strong className="text-white">{lang === 'fr' ? 'Centres d\'intérêt :' : 'Interests:'}</strong> {lang === 'fr' ? 'Basé sur likes et comportements' : 'Based on likes and behaviors'}</li>
                <li><strong className="text-white">{lang === 'fr' ? 'Comportements :' : 'Behaviors:'}</strong> {lang === 'fr' ? 'Achats en ligne, voyages, appareils utilisés' : 'Online purchases, travel, devices used'}</li>
              </ul>

              <h3 className="text-2xl font-bold text-white mb-3 mt-8">
                {lang === 'fr' ? 'Audiences personnalisées (retargeting)' : 'Custom audiences (retargeting)'}
              </h3>
              <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
                <li><strong className="text-white">{lang === 'fr' ? 'Visiteurs site :' : 'Website visitors:'}</strong> {lang === 'fr' ? '80% moins cher que cold audience' : '80% cheaper than cold audience'}</li>
                <li><strong className="text-white">{lang === 'fr' ? 'Liste clients :' : 'Customer list:'}</strong> {lang === 'fr' ? 'Upload emails/téléphones' : 'Upload emails/phones'}</li>
                <li><strong className="text-white">{lang === 'fr' ? 'Engagement :' : 'Engagement:'}</strong> {lang === 'fr' ? 'Vidéo vue, page visitée, formulaire ouvert' : 'Video viewed, page visited, form opened'}</li>
              </ul>

              <h3 className="text-2xl font-bold text-white mb-3 mt-8">
                {lang === 'fr' ? 'Audiences similaires (Lookalike)' : 'Lookalike audiences'}
              </h3>
              <p className="text-gray-300 mb-8 leading-relaxed">
                {lang === 'fr'
                  ? 'Créez une audience similaire à vos meilleurs clients (1-10% de similarité). Stratégie gagnante : Lookalike 1-3% de vos acheteurs.'
                  : 'Create an audience similar to your best customers (1-10% similarity). Winning strategy: Lookalike 1-3% of your buyers.'}
              </p>

              <h2 className="text-3xl font-bold text-primary-red mb-4 mt-12">
                {lang === 'fr' ? 'Créatifs qui convertissent' : 'Creatives that convert'}
              </h2>
              <ul className="list-disc list-inside text-gray-300 mb-8 space-y-2">
                <li><strong className="text-white">{lang === 'fr' ? 'Images :' : 'Images:'}</strong> {lang === 'fr' ? 'Haute qualité, peu de texte (<20%), visages performent' : 'High quality, little text (<20%), faces perform'}</li>
                <li><strong className="text-white">{lang === 'fr' ? 'Vidéos :' : 'Videos:'}</strong> {lang === 'fr' ? '15-60s, hook 3 premières secondes, sous-titres obligatoires' : '15-60s, hook first 3 seconds, mandatory subtitles'}</li>
                <li><strong className="text-white">{lang === 'fr' ? 'Carrousels :' : 'Carousels:'}</strong> {lang === 'fr' ? 'Plusieurs produits, storytelling en slides' : 'Multiple products, storytelling in slides'}</li>
                <li><strong className="text-white">{lang === 'fr' ? 'Collection :' : 'Collection:'}</strong> {lang === 'fr' ? 'Catalogue produits intégré' : 'Integrated product catalog'}</li>
                <li><strong className="text-white">{lang === 'fr' ? 'Texte :' : 'Text:'}</strong> {lang === 'fr' ? 'Accrocheur, bénéfices clairs, CTA fort' : 'Catchy, clear benefits, strong CTA'}</li>
              </ul>

              <h2 className="text-3xl font-bold text-primary-red mb-4 mt-12">
                {lang === 'fr' ? 'Budget et stratégie d\'enchères' : 'Budget and bidding strategy'}
              </h2>
              <ul className="list-disc list-inside text-gray-300 mb-8 space-y-2">
                <li><strong className="text-white">{lang === 'fr' ? 'Budget minimum :' : 'Minimum budget:'}</strong> {lang === 'fr' ? '5€/jour par ensemble de publicités' : '€5/day per ad set'}</li>
                <li><strong className="text-white">{lang === 'fr' ? 'Test initial :' : 'Initial test:'}</strong> {lang === 'fr' ? '300-500€ pour valider audience/créatifs' : '€300-500 to validate audience/creatives'}</li>
                <li><strong className="text-white">{lang === 'fr' ? 'Enchères :' : 'Bidding:'}</strong> {lang === 'fr' ? 'Coût le plus bas (débutants), Cap de coût (avancé)' : 'Lowest cost (beginners), Cost cap (advanced)'}</li>
                <li><strong className="text-white">{lang === 'fr' ? 'Scaling :' : 'Scaling:'}</strong> {lang === 'fr' ? 'Augmentez budget de 20% tous les 3-4 jours si rentable' : 'Increase budget by 20% every 3-4 days if profitable'}</li>
              </ul>

              <h2 className="text-3xl font-bold text-primary-red mb-4 mt-12">
                {lang === 'fr' ? 'A/B Testing : Optimisation continue' : 'A/B Testing: Continuous optimization'}
              </h2>
              <p className="text-gray-300 mb-4 leading-relaxed">
                {lang === 'fr'
                  ? 'Testez une variable à la fois :'
                  : 'Test one variable at a time:'}
              </p>
              <ul className="list-disc list-inside text-gray-300 mb-8 space-y-2">
                <li>{lang === 'fr' ? 'Audiences différentes' : 'Different audiences'}</li>
                <li>{lang === 'fr' ? 'Créatifs (images vs vidéos)' : 'Creatives (images vs videos)'}</li>
                <li>{lang === 'fr' ? 'Placements (Feed vs Stories vs Reels)' : 'Placements (Feed vs Stories vs Reels)'}</li>
                <li>{lang === 'fr' ? 'Textes et accroches' : 'Copy and hooks'}</li>
                <li>{lang === 'fr' ? 'CTA (Acheter vs En savoir plus)' : 'CTA (Buy now vs Learn more)'}</li>
              </ul>

              <h2 className="text-3xl font-bold text-primary-red mb-4 mt-12">
                {lang === 'fr' ? 'Pixel Facebook : Installation obligatoire' : 'Facebook Pixel: Mandatory installation'}
              </h2>
              <p className="text-gray-300 mb-8 leading-relaxed">
                {lang === 'fr'
                  ? 'Le Pixel track les conversions, permet le retargeting et optimise automatiquement vos campagnes. Sans Pixel = campagnes aveugles. Installation : Google Tag Manager ou code direct.'
                  : 'The Pixel tracks conversions, enables retargeting and automatically optimizes your campaigns. Without Pixel = blind campaigns. Installation: Google Tag Manager or direct code.'}
              </p>

              <h2 className="text-3xl font-bold text-primary-red mb-4 mt-12">
                {lang === 'fr' ? 'Métriques à suivre' : 'Metrics to track'}
              </h2>
              <ul className="list-disc list-inside text-gray-300 mb-8 space-y-2">
                <li><strong className="text-white">CTR :</strong> {lang === 'fr' ? '>1% = bon, >2% = excellent' : '>1% = good, >2% = excellent'}</li>
                <li><strong className="text-white">CPC :</strong> {lang === 'fr' ? 'Varie selon secteur, comparez à benchmark' : 'Varies by sector, compare to benchmark'}</li>
                <li><strong className="text-white">CPM :</strong> {lang === 'fr' ? 'Coût pour 1000 impressions' : 'Cost per 1000 impressions'}</li>
                <li><strong className="text-white">{lang === 'fr' ? 'Taux conversion :' : 'Conversion rate:'}</strong> {lang === 'fr' ? 'Achats / clics' : 'Purchases / clicks'}</li>
                <li><strong className="text-white">ROAS :</strong> {lang === 'fr' ? 'Return On Ad Spend, objectif 3-5x minimum' : 'Return On Ad Spend, goal 3-5x minimum'}</li>
              </ul>

              <h2 className="text-3xl font-bold text-primary-red mb-4 mt-12">
                {lang === 'fr' ? 'Erreurs courantes à éviter' : 'Common mistakes to avoid'}
              </h2>
              <ul className="list-disc list-inside text-gray-300 mb-8 space-y-2">
                <li>{lang === 'fr' ? 'Audience trop large (>1M) ou trop petite (<10K)' : 'Audience too large (>1M) or too small (<10K)'}</li>
                <li>{lang === 'fr' ? 'Modifier campagnes trop souvent (laissez 3-7 jours)' : 'Modifying campaigns too often (leave 3-7 days)'}</li>
                <li>{lang === 'fr' ? 'Négliger le mobile (80% du trafic)' : 'Neglecting mobile (80% of traffic)'}</li>
                <li>{lang === 'fr' ? 'Envoyer vers page d\'accueil au lieu de landing page' : 'Sending to homepage instead of landing page'}</li>
                <li>{lang === 'fr' ? 'Pas de retargeting = laisser 97% des visiteurs partir' : 'No retargeting = letting 97% of visitors leave'}</li>
              </ul>

              <h2 className="text-3xl font-bold text-primary-red mb-4 mt-12">
                {lang === 'fr' ? 'Conclusion' : 'Conclusion'}
              </h2>
              <p className="text-gray-300 mb-8 leading-relaxed">
                {lang === 'fr'
                  ? 'Meta Ads reste ultra rentable en 2025 si bien utilisé. Commencez petit, testez, mesurez, optimisez. Focus sur retargeting et lookalikes. Patience : les campagnes mettent 7-14 jours à se stabiliser.'
                  : 'Meta Ads remains highly profitable in 2025 if used well. Start small, test, measure, optimize. Focus on retargeting and lookalikes. Patience: campaigns take 7-14 days to stabilize.'}
              </p>

              <div className="bg-gradient-to-r from-primary-red/10 to-red-500/10 border border-primary-red/30 rounded-lg p-8 mt-12">
                <h3 className="text-2xl font-bold mb-4 text-white">
                  {lang === 'fr' ? 'Besoin d\'aide pour vos campagnes Meta Ads ?' : 'Need help with your Meta Ads campaigns?'}
                </h3>
                <p className="text-gray-300 mb-6">
                  {lang === 'fr' ? 'Notre agence crée et optimise vos campagnes Facebook et Instagram pour maximiser votre ROAS.' : 'Our agency creates and optimizes your Facebook and Instagram campaigns to maximize your ROAS.'}
                </p>
                <a
                  href="/index.html#contact"
                  className="inline-block bg-primary-red px-8 py-3 rounded-lg hover:bg-red-700 transition font-semibold"
                >
                  {lang === 'fr' ? 'Lancer mes campagnes' : 'Launch my campaigns'}
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
