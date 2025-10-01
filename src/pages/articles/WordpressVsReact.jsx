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
                className="w-full h-64 md:h-96 object-cover rounded-lg mb-8"
              />
            </div>

            {/* Contenu de l'article */}
            <div className="prose prose-invert prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-primary-red mb-4">
                {lang === 'fr' ? 'Qu\'est-ce que WordPress ? Avantages et limites' : 'What is WordPress? Advantages and limitations'}
              </h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                WordPress est le CMS (Content Management System) le plus populaire au monde, alimentant plus de 40% des sites web. 
                Il offre une interface intuitive, des milliers de thèmes et plugins, et ne nécessite pas de connaissances en programmation 
                pour créer un site fonctionnel.
              </p>
              <p className="text-gray-300 mb-6 leading-relaxed">
                <strong className="text-white">Avantages :</strong> Facilité d'utilisation, large communauté, SEO-friendly, 
                coût initial faible, maintenance simplifiée.
              </p>
              <p className="text-gray-300 mb-8 leading-relaxed">
                <strong className="text-white">Limites :</strong> Performances limitées pour des projets complexes, 
                dépendance aux plugins, personnalisation avancée plus difficile.
              </p>

              <h2 className="text-3xl font-bold text-primary-red mb-4">
                Qu'est-ce que React ? Atouts et contraintes
              </h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                React est une bibliothèque JavaScript développée par Facebook, permettant de créer des interfaces utilisateur 
                dynamiques et performantes. C'est la solution idéale pour des applications web complexes et sur mesure.
              </p>
              <p className="text-gray-300 mb-6 leading-relaxed">
                <strong className="text-white">Atouts :</strong> Performances exceptionnelles, flexibilité totale, 
                expérience utilisateur moderne, évolutivité illimitée.
              </p>
              <p className="text-gray-300 mb-8 leading-relaxed">
                <strong className="text-white">Contraintes :</strong> Nécessite des compétences techniques, 
                coût de développement plus élevé, temps de développement plus long.
              </p>

              <h2 className="text-3xl font-bold text-primary-red mb-4">
                Quels critères pour faire votre choix
              </h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Le choix entre WordPress et React dépend de plusieurs facteurs clés :
              </p>
              <ul className="list-disc list-inside text-gray-300 mb-8 space-y-2">
                <li><strong className="text-white">Budget :</strong> WordPress est plus abordable initialement</li>
                <li><strong className="text-white">Complexité :</strong> React pour des fonctionnalités avancées</li>
                <li><strong className="text-white">Évolutivité :</strong> React offre plus de flexibilité à long terme</li>
                <li><strong className="text-white">Maintenance :</strong> WordPress est plus simple à maintenir</li>
                <li><strong className="text-white">Délais :</strong> WordPress permet un lancement plus rapide</li>
              </ul>

              <h2 className="text-3xl font-bold text-primary-red mb-4">
                Exemple concret : WordPress vs React selon les besoins
              </h2>
              
              <h3 className="text-2xl font-bold text-white mb-3 mt-6">
                Pour un site vitrine
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                <strong className="text-primary-red">Recommandation : WordPress</strong><br />
                Un site vitrine classique avec quelques pages (accueil, services, contact) est parfaitement adapté à WordPress. 
                Vous bénéficiez d'une mise en ligne rapide, d'un coût maîtrisé et d'une gestion autonome du contenu.
              </p>

              <h3 className="text-2xl font-bold text-white mb-3">
                Pour un e-commerce
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                <strong className="text-primary-red">Recommandation : WordPress (WooCommerce) ou React selon la complexité</strong><br />
                Pour une boutique standard, WooCommerce est idéal. Pour un e-commerce avec des fonctionnalités spécifiques 
                (configurateur produit, système de réservation complexe), React sera plus approprié.
              </p>

              <h3 className="text-2xl font-bold text-white mb-3">
                Pour un projet complexe sur mesure
              </h3>
              <p className="text-gray-300 mb-8 leading-relaxed">
                <strong className="text-primary-red">Recommandation : React</strong><br />
                Application web, plateforme SaaS, tableau de bord interactif : React excelle dans ces domaines grâce à 
                sa flexibilité et ses performances.
              </p>

              <h2 className="text-3xl font-bold text-primary-red mb-4">
                Conclusion et recommandations
              </h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Il n'y a pas de solution universelle. WordPress convient à 80% des projets web classiques, tandis que React 
                s'impose pour les 20% nécessitant des fonctionnalités avancées ou une expérience utilisateur exceptionnelle.
              </p>
              <p className="text-gray-300 mb-8 leading-relaxed">
                L'essentiel est de bien définir vos besoins, votre budget et vos objectifs à long terme avant de faire votre choix.
              </p>

              {/* CTA */}
              <div className="bg-gradient-to-r from-primary-red/10 to-red-500/10 border border-primary-red/30 rounded-lg p-8 mt-12">
                <h3 className="text-2xl font-bold mb-4 text-white">
                  Besoin d'aide pour choisir la meilleure solution technique ?
                </h3>
                <p className="text-gray-300 mb-6">
                  Contactez notre agence pour un audit gratuit et des recommandations personnalisées.
                </p>
                <a
                  href="/index.html#contact"
                  className="inline-block bg-primary-red px-8 py-3 rounded-lg hover:bg-red-700 transition font-semibold"
                >
                  Demander un audit gratuit
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
