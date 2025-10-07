import React from 'react';
import { useLanguage } from '../../LanguageContext';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import AnimatedBackground from '../../components/AnimatedBackground';

export default function MarketingInfluence2025() {
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
                  {lang === 'fr' ? 'Influence' : 'Influence'}
                </span>
                <span className="text-gray-400">{lang === 'fr' ? '19 Mars 2025' : 'March 19, 2025'}</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                {lang === 'fr'
                  ? 'Marketing d\'influence en 2025 : Comment choisir les bons partenaires'
                  : 'Influencer marketing in 2025: How to choose the right partners'}
              </h1>
              
              <p className="text-xl text-gray-300 mb-8">
                {lang === 'fr'
                  ? 'Micro vs macro-influenceurs : stratégies, coûts, ROI et comment éviter les faux influenceurs. Guide complet pour réussir votre marketing d\'influence.'
                  : 'Micro vs macro-influencers: strategies, costs, ROI and how to avoid fake influencers. Complete guide to succeed in influencer marketing.'}
              </p>
              
              <img
                src="/images/articles/influenceurs.webp"
                alt="Influencer Marketing"
                className="w-full h-64 md:h-96 object-cover rounded-lg mb-8 relative z-10"
              />
            </div>

            <div className="prose prose-invert prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-primary-red mb-4 mt-8">
                {lang === 'fr' ? 'L\'état du marketing d\'influence en 2025' : 'The state of influencer marketing in 2025'}
              </h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                {lang === 'fr'
                  ? 'Le marketing d\'influence pèse désormais 21 milliards de dollars mondialement. 89% des marketeurs affirment que le ROI du marketing d\'influence est équivalent ou supérieur aux autres canaux. En 2025, c\'est devenu une stratégie incontournable, particulièrement pour toucher les 18-35 ans.'
                  : 'Influencer marketing now weighs $21 billion globally. 89% of marketers say that influencer marketing ROI is equivalent to or greater than other channels. In 2025, it has become an essential strategy, particularly to reach 18-35 year olds.'}
              </p>

              <h2 className="text-3xl font-bold text-primary-red mb-4 mt-12">
                {lang === 'fr' ? 'Micro vs Macro vs Mega influenceurs' : 'Micro vs Macro vs Mega influencers'}
              </h2>
              
              <h3 className="text-2xl font-bold text-white mb-3 mt-8">
                {lang === 'fr' ? 'Nano-influenceurs (1K-10K)' : 'Nano-influencers (1K-10K)'}
              </h3>
              <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
                <li><strong className="text-white">{lang === 'fr' ? 'Engagement :' : 'Engagement:'}</strong> {lang === 'fr' ? '8-10% (le plus élevé)' : '8-10% (highest)'}</li>
                <li><strong className="text-white">{lang === 'fr' ? 'Coût :' : 'Cost:'}</strong> {lang === 'fr' ? '50-500€ par post' : '€50-500 per post'}</li>
                <li><strong className="text-white">{lang === 'fr' ? 'Avantage :' : 'Advantage:'}</strong> {lang === 'fr' ? 'Authenticité, communauté engagée, accessible' : 'Authenticity, engaged community, accessible'}</li>
                <li><strong className="text-white">{lang === 'fr' ? 'Inconvénient :' : 'Disadvantage:'}</strong> {lang === 'fr' ? 'Portée limitée, besoin de multiples partenariats' : 'Limited reach, need multiple partnerships'}</li>
              </ul>

              <h3 className="text-2xl font-bold text-white mb-3 mt-8">
                {lang === 'fr' ? 'Micro-influenceurs (10K-100K)' : 'Micro-influencers (10K-100K)'}
              </h3>
              <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
                <li><strong className="text-white">{lang === 'fr' ? 'Engagement :' : 'Engagement:'}</strong> {lang === 'fr' ? '5-8%' : '5-8%'}</li>
                <li><strong className="text-white">{lang === 'fr' ? 'Coût :' : 'Cost:'}</strong> {lang === 'fr' ? '500-5K€ par post' : '€500-5K per post'}</li>
                <li><strong className="text-white">{lang === 'fr' ? 'Avantage :' : 'Advantage:'}</strong> {lang === 'fr' ? 'Excellent rapport qualité/prix, niche expertise' : 'Excellent value for money, niche expertise'}</li>
                <li><strong className="text-white">{lang === 'fr' ? 'Inconvénient :' : 'Disadvantage:'}</strong> {lang === 'fr' ? 'Moins de professionnalisme parfois' : 'Less professionalism sometimes'}</li>
              </ul>

              <h3 className="text-2xl font-bold text-white mb-3 mt-8">
                {lang === 'fr' ? 'Macro-influenceurs (100K-1M)' : 'Macro-influencers (100K-1M)'}
              </h3>
              <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
                <li><strong className="text-white">{lang === 'fr' ? 'Engagement :' : 'Engagement:'}</strong> {lang === 'fr' ? '2-5%' : '2-5%'}</li>
                <li><strong className="text-white">{lang === 'fr' ? 'Coût :' : 'Cost:'}</strong> {lang === 'fr' ? '5K-50K€ par post' : '€5K-50K per post'}</li>
                <li><strong className="text-white">{lang === 'fr' ? 'Avantage :' : 'Advantage:'}</strong> {lang === 'fr' ? 'Large portée, professionnalisme, crédibilité' : 'Wide reach, professionalism, credibility'}</li>
                <li><strong className="text-white">{lang === 'fr' ? 'Inconvénient :' : 'Disadvantage:'}</strong> {lang === 'fr' ? 'Coût élevé, moins d\'authenticité' : 'High cost, less authenticity'}</li>
              </ul>

              <h3 className="text-2xl font-bold text-white mb-3 mt-8">
                {lang === 'fr' ? 'Mega-influenceurs/Célébrités (1M+)' : 'Mega-influencers/Celebrities (1M+)'}
              </h3>
              <ul className="list-disc list-inside text-gray-300 mb-8 space-y-2">
                <li><strong className="text-white">{lang === 'fr' ? 'Engagement :' : 'Engagement:'}</strong> {lang === 'fr' ? '1-3%' : '1-3%'}</li>
                <li><strong className="text-white">{lang === 'fr' ? 'Coût :' : 'Cost:'}</strong> {lang === 'fr' ? '50K-1M€+ par post' : '€50K-1M+ per post'}</li>
                <li><strong className="text-white">{lang === 'fr' ? 'Avantage :' : 'Advantage:'}</strong> {lang === 'fr' ? 'Portée massive, effet de notoriété' : 'Massive reach, awareness effect'}</li>
                <li><strong className="text-white">{lang === 'fr' ? 'Inconvénient :' : 'Disadvantage:'}</strong> {lang === 'fr' ? 'ROI incertain, peu d\'engagement réel' : 'Uncertain ROI, little real engagement'}</li>
              </ul>

              <h2 className="text-3xl font-bold text-primary-red mb-4 mt-12">
                {lang === 'fr' ? 'Comment détecter les faux influenceurs' : 'How to detect fake influencers'}
              </h2>
              <p className="text-gray-300 mb-4 leading-relaxed">
                {lang === 'fr'
                  ? '50% des influenceurs ont des followers frauduleux. Voici comment les identifier :'
                  : '50% of influencers have fraudulent followers. Here\'s how to identify them:'}
              </p>
              <ul className="list-disc list-inside text-gray-300 mb-8 space-y-2">
                <li><strong className="text-white">{lang === 'fr' ? 'Ratio suspect :' : 'Suspicious ratio:'}</strong> {lang === 'fr' ? '100K followers mais 200 likes = suspect' : '100K followers but 200 likes = suspicious'}</li>
                <li><strong className="text-white">{lang === 'fr' ? 'Commentaires génériques :' : 'Generic comments:'}</strong> {lang === 'fr' ? '"Nice pic!", "Cool!" en masse' : '"Nice pic!", "Cool!" in bulk'}</li>
                <li><strong className="text-white">{lang === 'fr' ? 'Croissance anormale :' : 'Abnormal growth:'}</strong> {lang === 'fr' ? 'Pics soudains de followers' : 'Sudden follower spikes'}</li>
                <li><strong className="text-white">{lang === 'fr' ? 'Followers étrangers :' : 'Foreign followers:'}</strong> {lang === 'fr' ? 'Influenceur français avec 80% followers indiens' : 'French influencer with 80% Indian followers'}</li>
                <li><strong className="text-white">{lang === 'fr' ? 'Outils :' : 'Tools:'}</strong> {lang === 'fr' ? 'HypeAuditor, IG Audit, Social Blade' : 'HypeAuditor, IG Audit, Social Blade'}</li>
              </ul>

              <h2 className="text-3xl font-bold text-primary-red mb-4 mt-12">
                {lang === 'fr' ? 'Calculer le ROI du marketing d\'influence' : 'Calculate influencer marketing ROI'}
              </h2>
              <p className="text-gray-300 mb-4 leading-relaxed">
                {lang === 'fr'
                  ? 'ROI = (Revenus générés - Coût campagne) / Coût campagne × 100'
                  : 'ROI = (Generated revenue - Campaign cost) / Campaign cost × 100'}
              </p>
              <ul className="list-disc list-inside text-gray-300 mb-8 space-y-2">
                <li><strong className="text-white">{lang === 'fr' ? 'Métriques à suivre :' : 'Metrics to track:'}</strong> {lang === 'fr' ? 'Portée, engagement, clics, conversions, ventes' : 'Reach, engagement, clicks, conversions, sales'}</li>
                <li><strong className="text-white">{lang === 'fr' ? 'Codes promo :' : 'Promo codes:'}</strong> {lang === 'fr' ? 'Donnez un code unique par influenceur' : 'Give a unique code per influencer'}</li>
                <li><strong className="text-white">{lang === 'fr' ? 'UTM tracking :' : 'UTM tracking:'}</strong> {lang === 'fr' ? 'Suivez précisément le trafic généré' : 'Track generated traffic precisely'}</li>
                <li><strong className="text-white">{lang === 'fr' ? 'Liens affiliés :' : 'Affiliate links:'}</strong> {lang === 'fr' ? 'Commission sur les ventes générées' : 'Commission on generated sales'}</li>
              </ul>

              <h2 className="text-3xl font-bold text-primary-red mb-4 mt-12">
                {lang === 'fr' ? 'Stratégies gagnantes en 2025' : 'Winning strategies in 2025'}
              </h2>
              <ul className="list-disc list-inside text-gray-300 mb-8 space-y-2">
                <li>{lang === 'fr' ? 'Partenariats long-terme vs posts one-shot' : 'Long-term partnerships vs one-shot posts'}</li>
                <li>{lang === 'fr' ? 'Authenticité avant tout : laissez l\'influenceur créatif' : 'Authenticity above all: let the influencer be creative'}</li>
                <li>{lang === 'fr' ? 'Diversifiez les plateformes (Instagram + TikTok + YouTube)' : 'Diversify platforms (Instagram + TikTok + YouTube)'}</li>
                <li>{lang === 'fr' ? 'UGC (User Generated Content) : réutilisez le contenu créé' : 'UGC (User Generated Content): reuse created content'}</li>
                <li>{lang === 'fr' ? 'Misez sur les micro-influenceurs pour meilleur ROI' : 'Focus on micro-influencers for better ROI'}</li>
              </ul>

              <h2 className="text-3xl font-bold text-primary-red mb-4 mt-12">
                {lang === 'fr' ? 'Aspects légaux et transparence' : 'Legal aspects and transparency'}
              </h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                {lang === 'fr'
                  ? 'En France, la loi impose la mention #ad ou #sponsorisé pour toute collaboration rémunérée. L\'ARPP (Autorité de Régulation Professionnelle de la Publicité) veille au respect de ces règles. Non-respect = amendes jusqu\'à 300 000€.'
                  : 'In France, the law requires the mention #ad or #sponsored for any paid collaboration. ARPP (Professional Advertising Regulation Authority) ensures compliance. Non-compliance = fines up to €300,000.'}
              </p>

              <h2 className="text-3xl font-bold text-primary-red mb-4 mt-12">
                {lang === 'fr' ? 'Conclusion' : 'Conclusion'}
              </h2>
              <p className="text-gray-300 mb-8 leading-relaxed">
                {lang === 'fr'
                  ? 'Le marketing d\'influence est efficace quand il est bien fait : choisissez des influenceurs alignés avec vos valeurs, privilégiez l\'authenticité sur la portée, mesurez rigoureusement vos résultats. En 2025, les micro-influenceurs offrent souvent le meilleur ROI pour les PME.'
                  : 'Influencer marketing is effective when done right: choose influencers aligned with your values, prioritize authenticity over reach, rigorously measure your results. In 2025, micro-influencers often offer the best ROI for SMEs.'}
              </p>

              <div className="bg-gradient-to-r from-primary-red/10 to-red-500/10 border border-primary-red/30 rounded-lg p-8 mt-12">
                <h3 className="text-2xl font-bold mb-4 text-white">
                  {lang === 'fr' ? 'Besoin d\'aide pour votre stratégie d\'influence ?' : 'Need help with your influence strategy?'}
                </h3>
                <p className="text-gray-300 mb-6">
                  {lang === 'fr' ? 'Notre agence vous accompagne dans la sélection d\'influenceurs, la négociation et le suivi de vos campagnes d\'influence.' : 'Our agency supports you in influencer selection, negotiation and monitoring of your influence campaigns.'}
                </p>
                <a
                  href="/index.html#contact"
                  className="inline-block bg-primary-red px-8 py-3 rounded-lg hover:bg-red-700 transition font-semibold"
                >
                  {lang === 'fr' ? 'Lancer une campagne d\'influence' : 'Launch an influence campaign'}
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
