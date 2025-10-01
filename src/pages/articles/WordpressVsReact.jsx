import React from 'react';
import { useLanguage } from '../../LanguageContext';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import AnimatedBackground from '../../components/AnimatedBackground';

export default function WordpressVsReact() {
  const { lang } = useLanguage();

  return (
    <>
      <AnimatedBackground />
      <Navbar />
      
      <main className="min-h-screen pt-24 pb-20">
        <article className="py-20 bg-transparent text-white">
          <div className="container mx-auto px-4 max-w-4xl">
            {/* En-tête de l'article */}
            <div className="mb-12">
              <div className="flex items-center gap-4 mb-6">
                <span className="bg-primary-red px-4 py-2 rounded-full text-sm font-semibold">
                  {lang === 'fr' ? 'Développement Web' : 'Web Development'}
                </span>
                <span className="text-gray-400">15 Mars 2025</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                {lang === 'fr'
                  ? 'Comment choisir entre WordPress et React pour créer son site web ?'
                  : 'How to choose between WordPress and React for your website?'}
              </h1>
              
              <img
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&h=600&fit=crop"
                alt="WordPress vs React"
                className="w-full h-64 md:h-96 object-cover rounded-lg mb-8 relative z-10"
              />
            </div>

            {/* Contenu de l'article */}
            <div className="prose prose-invert prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-primary-red mb-4">
                {lang === 'fr' ? 'Qu\'est-ce que WordPress ? Avantages et limites' : 'What is WordPress? Advantages and limitations'}
              </h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                {lang === 'fr' 
                  ? 'WordPress est le CMS (Content Management System) le plus populaire au monde, alimentant plus de 40% des sites web. Il offre une interface intuitive, des milliers de thèmes et plugins, et ne nécessite pas de connaissances en programmation pour créer un site fonctionnel.'
                  : 'WordPress is the world\'s most popular CMS (Content Management System), powering over 40% of websites. It offers an intuitive interface, thousands of themes and plugins, and requires no programming knowledge to create a functional website.'}
              </p>
              <p className="text-gray-300 mb-6 leading-relaxed">
                <strong className="text-white">{lang === 'fr' ? 'Avantages :' : 'Advantages:'}</strong> {lang === 'fr' 
                  ? 'Facilité d\'utilisation, large communauté, SEO-friendly, coût initial faible, maintenance simplifiée.'
                  : 'Ease of use, large community, SEO-friendly, low initial cost, simplified maintenance.'}
              </p>
              <p className="text-gray-300 mb-8 leading-relaxed">
                <strong className="text-white">{lang === 'fr' ? 'Limites :' : 'Limitations:'}</strong> {lang === 'fr'
                  ? 'Performances limitées pour des projets complexes, dépendance aux plugins, personnalisation avancée plus difficile.'
                  : 'Limited performance for complex projects, plugin dependency, more difficult advanced customization.'}
              </p>

              <h2 className="text-3xl font-bold text-primary-red mb-4">
                {lang === 'fr' ? 'Qu\'est-ce que React ? Atouts et contraintes' : 'What is React? Advantages and constraints'}
              </h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                {lang === 'fr'
                  ? 'React est une bibliothèque JavaScript développée par Facebook, permettant de créer des interfaces utilisateur dynamiques et performantes. C\'est la solution idéale pour des applications web complexes et sur mesure.'
                  : 'React is a JavaScript library developed by Facebook that enables the creation of dynamic and high-performance user interfaces. It\'s the ideal solution for complex and custom web applications.'}
              </p>
              <p className="text-gray-300 mb-6 leading-relaxed">
                <strong className="text-white">{lang === 'fr' ? 'Atouts :' : 'Advantages:'}</strong> {lang === 'fr'
                  ? 'Performances exceptionnelles, flexibilité totale, expérience utilisateur moderne, évolutivité illimitée.'
                  : 'Exceptional performance, total flexibility, modern user experience, unlimited scalability.'}
              </p>
              <p className="text-gray-300 mb-8 leading-relaxed">
                <strong className="text-white">{lang === 'fr' ? 'Contraintes :' : 'Constraints:'}</strong> {lang === 'fr'
                  ? 'Nécessite des compétences techniques, coût de développement plus élevé, temps de développement plus long.'
                  : 'Requires technical skills, higher development cost, longer development time.'}
              </p>

              <h2 className="text-3xl font-bold text-primary-red mb-4">
                {lang === 'fr' ? 'Quels critères pour faire votre choix' : 'What criteria to make your choice'}
              </h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                {lang === 'fr'
                  ? 'Le choix entre WordPress et React dépend de plusieurs facteurs clés :'
                  : 'The choice between WordPress and React depends on several key factors:'}
              </p>
              <ul className="list-disc list-inside text-gray-300 mb-8 space-y-2">
                <li><strong className="text-white">{lang === 'fr' ? 'Budget :' : 'Budget:'}</strong> {lang === 'fr' ? 'WordPress est plus abordable initialement' : 'WordPress is more affordable initially'}</li>
                <li><strong className="text-white">{lang === 'fr' ? 'Complexité :' : 'Complexity:'}</strong> {lang === 'fr' ? 'React pour des fonctionnalités avancées' : 'React for advanced features'}</li>
                <li><strong className="text-white">{lang === 'fr' ? 'Évolutivité :' : 'Scalability:'}</strong> {lang === 'fr' ? 'React offre plus de flexibilité à long terme' : 'React offers more flexibility in the long term'}</li>
                <li><strong className="text-white">{lang === 'fr' ? 'Maintenance :' : 'Maintenance:'}</strong> {lang === 'fr' ? 'WordPress est plus simple à maintenir' : 'WordPress is easier to maintain'}</li>
                <li><strong className="text-white">{lang === 'fr' ? 'Délais :' : 'Timeline:'}</strong> {lang === 'fr' ? 'WordPress permet un lancement plus rapide' : 'WordPress allows faster launch'}</li>
              </ul>

              <h2 className="text-3xl font-bold text-primary-red mb-4">
                {lang === 'fr' ? 'Exemple concret : WordPress vs React selon les besoins' : 'Concrete example: WordPress vs React according to needs'}
              </h2>
              
              <h3 className="text-2xl font-bold text-white mb-3 mt-6">
                {lang === 'fr' ? 'Pour un site vitrine' : 'For a showcase website'}
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                <strong className="text-primary-red">{lang === 'fr' ? 'Recommandation : WordPress' : 'Recommendation: WordPress'}</strong><br />
                {lang === 'fr'
                  ? 'Un site vitrine classique avec quelques pages (accueil, services, contact) est parfaitement adapté à WordPress. Vous bénéficiez d\'une mise en ligne rapide, d\'un coût maîtrisé et d\'une gestion autonome du contenu.'
                  : 'A classic showcase website with a few pages (home, services, contact) is perfectly suited to WordPress. You benefit from quick deployment, controlled costs, and autonomous content management.'}
              </p>

              <h3 className="text-2xl font-bold text-white mb-3">
                {lang === 'fr' ? 'Pour un e-commerce' : 'For an e-commerce'}
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                <strong className="text-primary-red">{lang === 'fr' ? 'Recommandation : WordPress (WooCommerce) ou React selon la complexité' : 'Recommendation: WordPress (WooCommerce) or React depending on complexity'}</strong><br />
                {lang === 'fr' 
                  ? 'Pour une boutique standard, WooCommerce est idéal. Pour un e-commerce avec des fonctionnalités spécifiques (configurateur produit, système de réservation complexe), React sera plus approprié.'
                  : 'For a standard store, WooCommerce is ideal. For an e-commerce with specific features (product configurator, complex booking system), React will be more appropriate.'}
              </p>

              <h3 className="text-2xl font-bold text-white mb-3">
                {lang === 'fr' ? 'Pour un projet complexe sur mesure' : 'For a complex custom project'}
              </h3>
              <p className="text-gray-300 mb-8 leading-relaxed">
                <strong className="text-primary-red">{lang === 'fr' ? 'Recommandation : React' : 'Recommendation: React'}</strong><br />
                {lang === 'fr' 
                  ? 'Application web, plateforme SaaS, tableau de bord interactif : React excelle dans ces domaines grâce à sa flexibilité et ses performances.'
                  : 'Web application, SaaS platform, interactive dashboard: React excels in these areas thanks to its flexibility and performance.'}
              </p>

              <h2 className="text-3xl font-bold text-primary-red mb-4">
                {lang === 'fr' ? 'Conclusion et recommandations' : 'Conclusion and recommendations'}
              </h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                {lang === 'fr' 
                  ? "Il n'y a pas de solution universelle. WordPress convient à 80% des projets web classiques, tandis que React s'impose pour les 20% nécessitant des fonctionnalités avancées ou une expérience utilisateur exceptionnelle."
                  : 'There is no universal solution. WordPress fits 80% of standard web projects, while React is best for the remaining 20% that require advanced features or exceptional user experience.'}
              </p>
              <p className="text-gray-300 mb-8 leading-relaxed">
                {lang === 'fr' 
                  ? "L'essentiel est de bien définir vos besoins, votre budget et vos objectifs à long terme avant de faire votre choix."
                  : 'The key is to clearly define your needs, budget, and long-term goals before making your choice.'}
              </p>

              {/* CTA */}
              <div className="bg-gradient-to-r from-primary-red/10 to-red-500/10 border border-primary-red/30 rounded-lg p-8 mt-12">
                <h3 className="text-2xl font-bold mb-4 text-white">
                  {lang === 'fr' ? "Besoin d'aide pour choisir la meilleure solution technique ?" : 'Need help choosing the best technical solution?'}
                </h3>
                <p className="text-gray-300 mb-6">
                  {lang === 'fr' ? 'Contactez notre agence pour un audit gratuit et des recommandations personnalisées.' : 'Contact our agency for a free audit and personalized recommendations.'}
                </p>
                <a
                  href="/index.html#contact"
                  className="inline-block bg-primary-red px-8 py-3 rounded-lg hover:bg-red-700 transition font-semibold"
                >
                  {lang === 'fr' ? 'Demander un audit gratuit' : 'Request a free audit'}
                </a>
              </div>
            </div>

            {/* Navigation */}
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
