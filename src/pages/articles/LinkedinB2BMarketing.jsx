import React from 'react';
import { useLanguage } from '../../LanguageContext';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import AnimatedBackground from '../../components/AnimatedBackground';
import ArticleCTA from '../../components/ArticleCTA';

export default function LinkedinB2BMarketing() {
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
                  {lang === 'fr' ? 'LinkedIn' : 'LinkedIn'}
                </span>
                <span className="text-gray-400">{lang === 'fr' ? '9 Mars 2025' : 'March 9, 2025'}</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                {lang === 'fr'
                  ? 'LinkedIn B2B Marketing : Stratégies pour générer des leads qualifiés'
                  : 'LinkedIn B2B Marketing: Strategies to generate qualified leads'}
              </h1>
              
              <p className="text-xl text-gray-300 mb-8">
                {lang === 'fr'
                  ? 'Maîtrisez LinkedIn pour le B2B : optimisation profil, content strategy, LinkedIn Ads, Sales Navigator et prospection efficace.'
                  : 'Master LinkedIn for B2B: profile optimization, content strategy, LinkedIn Ads, Sales Navigator and effective prospecting.'}
              </p>
              
              <img
                src="/images/articles/linkedin-b2b.webp"
                alt="LinkedIn B2B Marketing"
                className="w-full h-64 md:h-96 object-cover rounded-lg mb-8 relative z-10"
              />
            </div>

            <div className="prose prose-invert prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-primary-red mb-4 mt-8">
                {lang === 'fr' ? 'Pourquoi LinkedIn domine le B2B en 2025' : 'Why LinkedIn dominates B2B in 2025'}
              </h2>
              <p className="text-gray-300 mb-8 leading-relaxed">
                {lang === 'fr'
                  ? '80% des leads B2B proviennent de LinkedIn. C\'est LA plateforme professionnelle avec 900 millions d\'utilisateurs dont 67 millions de décideurs. 4 personnes sur 5 influencent les décisions d\'achat depuis LinkedIn.'
                  : '80% of B2B leads come from LinkedIn. It\'s THE professional platform with 900 million users including 67 million decision-makers. 4 out of 5 people influence purchasing decisions from LinkedIn.'}
              </p>

              {/* CTA Top */}
              <ArticleCTA category="marketing" position="top" />

              <h2 className="text-3xl font-bold text-primary-red mb-4 mt-12">
                {lang === 'fr' ? 'Optimiser votre profil LinkedIn' : 'Optimize your LinkedIn profile'}
              </h2>
              <ul className="list-disc list-inside text-gray-300 mb-8 space-y-2">
                <li><strong className="text-white">{lang === 'fr' ? 'Photo professionnelle :' : 'Professional photo:'}</strong> {lang === 'fr' ? 'Fond neutre, sourire, cadrage buste' : 'Neutral background, smile, chest framing'}</li>
                <li><strong className="text-white">{lang === 'fr' ? 'Titre accrocheur :' : 'Catchy title:'}</strong> {lang === 'fr' ? 'Pas juste "CEO" mais "J\'aide les PME à doubler leur CA avec le digital"' : 'Not just "CEO" but "I help SMEs double their revenue with digital"'}</li>
                <li><strong className="text-white">{lang === 'fr' ? 'Résumé orienté valeur :' : 'Value-oriented summary:'}</strong> {lang === 'fr' ? 'Parlez des problèmes que vous résolvez' : 'Talk about problems you solve'}</li>
                <li><strong className="text-white">{lang === 'fr' ? 'URL personnalisée :' : 'Custom URL:'}</strong> {lang === 'fr' ? 'linkedin.com/in/votrenom' : 'linkedin.com/in/yourname'}</li>
                <li><strong className="text-white">{lang === 'fr' ? 'Recommandations :' : 'Recommendations:'}</strong> {lang === 'fr' ? 'Minimum 10 témoignages clients' : 'Minimum 10 client testimonials'}</li>
              </ul>

              <h2 className="text-3xl font-bold text-primary-red mb-4 mt-12">
                {lang === 'fr' ? 'Stratégie de contenu LinkedIn' : 'LinkedIn content strategy'}
              </h2>
              <p className="text-gray-300 mb-4 leading-relaxed">
                {lang === 'fr'
                  ? 'Publiez 3-5 fois par semaine, mix de formats :'
                  : 'Post 3-5 times per week, mix of formats:'}
              </p>
              <ul className="list-disc list-inside text-gray-300 mb-8 space-y-2">
                <li><strong className="text-white">{lang === 'fr' ? 'Posts texte :' : 'Text posts:'}</strong> {lang === 'fr' ? 'Insights, leçons apprises, storytelling' : 'Insights, lessons learned, storytelling'}</li>
                <li><strong className="text-white">{lang === 'fr' ? 'Carrousels PDF :' : 'PDF carousels:'}</strong> {lang === 'fr' ? 'Guides, checklists, frameworks (engagement++)' : 'Guides, checklists, frameworks (engagement++)'}</li>
                <li><strong className="text-white">{lang === 'fr' ? 'Vidéos natives :' : 'Native videos:'}</strong> {lang === 'fr' ? '1-3 minutes, sous-titres obligatoires' : '1-3 minutes, mandatory subtitles'}</li>
                <li><strong className="text-white">{lang === 'fr' ? 'Articles longs :' : 'Long articles:'}</strong> {lang === 'fr' ? 'Expertise approfondie, boost SEO LinkedIn' : 'In-depth expertise, LinkedIn SEO boost'}</li>
                <li><strong className="text-white">{lang === 'fr' ? 'Polls :' : 'Polls:'}</strong> {lang === 'fr' ? 'Engagent facilement votre audience' : 'Easily engage your audience'}</li>
              </ul>

              <h2 className="text-3xl font-bold text-primary-red mb-4 mt-12">
                {lang === 'fr' ? 'LinkedIn Ads : Types de campagnes' : 'LinkedIn Ads: Campaign types'}
              </h2>
              <ul className="list-disc list-inside text-gray-300 mb-8 space-y-2">
                <li><strong className="text-white">{lang === 'fr' ? 'Sponsored Content :' : 'Sponsored Content:'}</strong> {lang === 'fr' ? 'Posts sponsorisés dans le fil, idéal notoriété' : 'Sponsored posts in feed, ideal for awareness'}</li>
                <li><strong className="text-white">{lang === 'fr' ? 'Message Ads :' : 'Message Ads:'}</strong> {lang === 'fr' ? 'Messages directs, taux ouverture 50%+' : 'Direct messages, 50%+ open rate'}</li>
                <li><strong className="text-white">{lang === 'fr' ? 'Lead Gen Forms :' : 'Lead Gen Forms:'}</strong> {lang === 'fr' ? 'Formulaires pré-remplis, conversion optimale' : 'Pre-filled forms, optimal conversion'}</li>
                <li><strong className="text-white">{lang === 'fr' ? 'Text Ads :' : 'Text Ads:'}</strong> {lang === 'fr' ? 'Petites annonces sidebar, budget serré' : 'Small sidebar ads, tight budget'}</li>
                <li><strong className="text-white">{lang === 'fr' ? 'Coût :' : 'Cost:'}</strong> {lang === 'fr' ? '50-150€ CPM, budget minimum 1000€/mois' : '€50-150 CPM, minimum budget €1000/month'}</li>
              </ul>

              <h2 className="text-3xl font-bold text-primary-red mb-4 mt-12">
                {lang === 'fr' ? 'Sales Navigator : L\'arme secrète B2B' : 'Sales Navigator: The B2B secret weapon'}
              </h2>
              <p className="text-gray-300 mb-4 leading-relaxed">
                {lang === 'fr'
                  ? '80€/mois mais indispensable pour prospection sérieuse :'
                  : '€80/month but essential for serious prospecting:'}
              </p>
              <ul className="list-disc list-inside text-gray-300 mb-8 space-y-2">
                <li>{lang === 'fr' ? 'Recherches avancées par poste, entreprise, secteur' : 'Advanced searches by position, company, sector'}</li>
                <li>{lang === 'fr' ? 'Lead Lists sauvegardées et alertes automatiques' : 'Saved Lead Lists and automatic alerts'}</li>
                <li>{lang === 'fr' ? 'InMail illimités vers prospects' : 'Unlimited InMail to prospects'}</li>
                <li>{lang === 'fr' ? 'Intégration CRM (HubSpot, Salesforce)' : 'CRM integration (HubSpot, Salesforce)'}</li>
              </ul>

              {/* CTA Middle */}
              <ArticleCTA category="marketing" position="middle" />

              <h2 className="text-3xl font-bold text-primary-red mb-4 mt-12">
                {lang === 'fr' ? 'Prospection LinkedIn : La méthode qui fonctionne' : 'LinkedIn prospecting: The method that works'}
              </h2>
              <ul className="list-disc list-inside text-gray-300 mb-8 space-y-2">
                <li><strong className="text-white">{lang === 'fr' ? 'Étape 1 :' : 'Step 1:'}</strong> {lang === 'fr' ? 'Identifiez votre ICP (Ideal Customer Profile)' : 'Identify your ICP (Ideal Customer Profile)'}</li>
                <li><strong className="text-white">{lang === 'fr' ? 'Étape 2 :' : 'Step 2:'}</strong> {lang === 'fr' ? 'Recherche avancée Sales Navigator' : 'Advanced Sales Navigator search'}</li>
                <li><strong className="text-white">{lang === 'fr' ? 'Étape 3 :' : 'Step 3:'}</strong> {lang === 'fr' ? 'Demande de connexion personnalisée (pas de pitch)' : 'Personalized connection request (no pitch)'}</li>
                <li><strong className="text-white">{lang === 'fr' ? 'Étape 4 :' : 'Step 4:'}</strong> {lang === 'fr' ? 'Engagez sur leurs posts pendant 1 semaine' : 'Engage on their posts for 1 week'}</li>
                <li><strong className="text-white">{lang === 'fr' ? 'Étape 5 :' : 'Step 5:'}</strong> {lang === 'fr' ? 'Message de valeur (pas de vente directe)' : 'Value message (no direct sales)'}</li>
                <li><strong className="text-white">{lang === 'fr' ? 'Étape 6 :' : 'Step 6:'}</strong> {lang === 'fr' ? 'Proposez un call si intéressé' : 'Propose a call if interested'}</li>
              </ul>

              <h2 className="text-3xl font-bold text-primary-red mb-4 mt-12">
                {lang === 'fr' ? 'Erreurs à éviter absolument' : 'Mistakes to absolutely avoid'}
              </h2>
              <ul className="list-disc list-inside text-gray-300 mb-8 space-y-2">
                <li>{lang === 'fr' ? 'Spam : Pitch de vente dès la connexion = blocked' : 'Spam: Sales pitch right after connection = blocked'}</li>
                <li>{lang === 'fr' ? 'Profil incomplet : Réduit crédibilité de 70%' : 'Incomplete profile: Reduces credibility by 70%'}</li>
                <li>{lang === 'fr' ? 'Contenu trop commercial : Partagez de la valeur avant de vendre' : 'Too commercial content: Share value before selling'}</li>
                <li>{lang === 'fr' ? 'Négliger les commentaires : L\'algorithme valorise l\'engagement' : 'Neglecting comments: Algorithm values engagement'}</li>
              </ul>

              <h2 className="text-3xl font-bold text-primary-red mb-4 mt-12">
                {lang === 'fr' ? 'Métriques LinkedIn à suivre' : 'LinkedIn metrics to track'}
              </h2>
              <ul className="list-disc list-inside text-gray-300 mb-8 space-y-2">
                <li><strong className="text-white">SSI (Social Selling Index) :</strong> {lang === 'fr' ? 'Score 0-100, visez 70+' : 'Score 0-100, aim for 70+'}</li>
                <li><strong className="text-white">{lang === 'fr' ? 'Taux d\'acceptation :' : 'Acceptance rate:'}</strong> {lang === 'fr' ? '>40% = bon ciblage' : '>40% = good targeting'}</li>
                <li><strong className="text-white">{lang === 'fr' ? 'Taux réponse :' : 'Response rate:'}</strong> {lang === 'fr' ? '15-25% = excellent message' : '15-25% = excellent message'}</li>
                <li><strong className="text-white">{lang === 'fr' ? 'Leads générés :' : 'Generated leads:'}</strong> {lang === 'fr' ? 'Objectif 10-50 leads qualifiés/mois' : 'Goal 10-50 qualified leads/month'}</li>
              </ul>

              <h2 className="text-3xl font-bold text-primary-red mb-4 mt-12">
                {lang === 'fr' ? 'Conclusion' : 'Conclusion'}
              </h2>
              <p className="text-gray-300 mb-8 leading-relaxed">
                {lang === 'fr'
                  ? 'LinkedIn est LA plateforme B2B incontournable. Optimisez votre profil, publiez régulièrement, prospectez intelligemment avec Sales Navigator. La constance paie : 6-12 mois pour voir de vrais résultats.'
                  : 'LinkedIn is THE essential B2B platform. Optimize your profile, post regularly, prospect intelligently with Sales Navigator. Consistency pays off: 6-12 months to see real results.'}
              </p>

              <div className="bg-gradient-to-r from-primary-red/10 to-red-500/10 border border-primary-red/30 rounded-lg p-8 mt-12">
                <h3 className="text-2xl font-bold mb-4 text-white">
                  {lang === 'fr' ? 'Besoin d\'aide pour votre stratégie LinkedIn B2B ?' : 'Need help with your LinkedIn B2B strategy?'}
                </h3>
                <p className="text-gray-300 mb-6">
                  {lang === 'fr' ? 'Notre agence optimise votre présence LinkedIn et gère vos campagnes de prospection B2B.' : 'Our agency optimizes your LinkedIn presence and manages your B2B prospecting campaigns.'}
                </p>
                <a
                  href={lang === 'fr' ? '/index.html#contact' : '/en/index.html#contact'}
                  className="inline-block bg-primary-red px-8 py-3 rounded-lg hover:bg-red-700 transition font-semibold"
                >
                  {lang === 'fr' ? 'Générer des leads B2B' : 'Generate B2B leads'}
                </a>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-gray-700">
              <a
                href={lang === 'fr' ? '/blog.html' : '/en/blog.html'}
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
