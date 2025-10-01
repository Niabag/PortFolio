import React from 'react';
import { useLanguage } from '../../LanguageContext';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import AnimatedBackground from '../../components/AnimatedBackground';

export default function SiteResponsive() {
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
                  {lang === 'fr' ? 'Design Web' : 'Web Design'}
                </span>
                <span className="text-gray-400">25 Février 2025</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Pourquoi un site web responsive est indispensable en 2025 ?
              </h1>
              
              <img
                src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&h=600&fit=crop"
                alt="Site responsive"
                className="w-full h-64 md:h-96 object-cover rounded-lg mb-8"
              />
            </div>

            <div className="prose prose-invert prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-primary-red mb-4">
                Qu'est-ce qu'un site responsive ?
              </h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Un site web responsive (ou adaptatif) est un site qui s'adapte automatiquement à la taille 
                de l'écran sur lequel il est consulté : smartphone, tablette, ordinateur portable ou écran de bureau.
              </p>
              <p className="text-gray-300 mb-8 leading-relaxed">
                Le design responsive utilise des techniques CSS (media queries, grilles flexibles, images fluides) 
                pour offrir une expérience optimale quel que soit l'appareil utilisé.
              </p>

              <h2 className="text-3xl font-bold text-primary-red mb-4">
                Les statistiques de navigation mobile en 2025
              </h2>
              <p className="text-gray-300 mb-4 leading-relaxed">
                Les chiffres parlent d'eux-mêmes :
              </p>
              <ul className="list-disc list-inside text-gray-300 mb-8 space-y-2">
                <li><strong className="text-white">63% du trafic web mondial</strong> provient des mobiles</li>
                <li><strong className="text-white">85% des utilisateurs</strong> pensent qu'un site mobile doit être aussi bon que la version desktop</li>
                <li><strong className="text-white">57% des utilisateurs</strong> ne recommanderont pas une entreprise avec un site mobile mal conçu</li>
                <li><strong className="text-white">53% des visites mobiles</strong> sont abandonnées si le chargement prend plus de 3 secondes</li>
                <li><strong className="text-white">70% des recherches mobiles</strong> mènent à une action dans l'heure</li>
              </ul>

              <h2 className="text-3xl font-bold text-primary-red mb-4">
                Les avantages SEO d'un site responsive
              </h2>
              <p className="text-gray-300 mb-4 leading-relaxed">
                Google favorise explicitement les sites responsive dans ses résultats de recherche :
              </p>
              <ul className="list-disc list-inside text-gray-300 mb-8 space-y-2">
                <li><strong className="text-white">Mobile-First Indexing :</strong> Google indexe d'abord la version mobile de votre site</li>
                <li><strong className="text-white">Meilleur classement :</strong> Les sites non-responsive sont pénalisés dans les résultats mobiles</li>
                <li><strong className="text-white">Une seule URL :</strong> Pas de contenu dupliqué entre versions mobile et desktop</li>
                <li><strong className="text-white">Taux de rebond réduit :</strong> Meilleure expérience = meilleur signal pour Google</li>
                <li><strong className="text-white">Partage facilité :</strong> Une seule URL à partager sur tous les appareils</li>
              </ul>

              <h2 className="text-3xl font-bold text-primary-red mb-4">
                Impact sur l'expérience utilisateur et les conversions
              </h2>
              <p className="text-gray-300 mb-4 leading-relaxed">
                Un site responsive améliore directement vos résultats business :
              </p>
              <ul className="list-disc list-inside text-gray-300 mb-8 space-y-2">
                <li><strong className="text-white">Taux de conversion augmenté :</strong> +30% en moyenne avec un design responsive</li>
                <li><strong className="text-white">Temps sur site prolongé :</strong> Les utilisateurs restent plus longtemps</li>
                <li><strong className="text-white">Réduction du taux de rebond :</strong> Jusqu'à -40% sur mobile</li>
                <li><strong className="text-white">Crédibilité renforcée :</strong> Un site moderne inspire confiance</li>
                <li><strong className="text-white">Coûts réduits :</strong> Une seule version à maintenir au lieu de deux</li>
              </ul>

              <h2 className="text-3xl font-bold text-primary-red mb-4">
                Comment savoir si mon site est responsive ?
              </h2>
              <p className="text-gray-300 mb-4 leading-relaxed">
                Plusieurs méthodes pour tester votre site :
              </p>
              <ol className="list-decimal list-inside text-gray-300 mb-8 space-y-3">
                <li><strong className="text-white">Test Google Mobile-Friendly :</strong> Outil gratuit de Google</li>
                <li><strong className="text-white">Redimensionnement navigateur :</strong> Réduisez la fenêtre et observez l'adaptation</li>
                <li><strong className="text-white">DevTools :</strong> F12 puis mode responsive (Ctrl+Shift+M)</li>
                <li><strong className="text-white">Test réel :</strong> Consultez votre site sur différents appareils</li>
                <li><strong className="text-white">PageSpeed Insights :</strong> Analyse mobile et desktop</li>
              </ol>

              <h2 className="text-3xl font-bold text-primary-red mb-4">
                Solutions pour rendre son site responsive
              </h2>
              <p className="text-gray-300 mb-4 leading-relaxed">
                Si votre site n'est pas responsive, voici vos options :
              </p>
              <ul className="list-disc list-inside text-gray-300 mb-8 space-y-2">
                <li><strong className="text-white">Refonte complète :</strong> Solution idéale pour moderniser entièrement</li>
                <li><strong className="text-white">Thème responsive :</strong> Pour WordPress, changez de thème</li>
                <li><strong className="text-white">Framework CSS :</strong> Bootstrap, Tailwind pour adaptation rapide</li>
                <li><strong className="text-white">Développement custom :</strong> Media queries CSS personnalisées</li>
                <li><strong className="text-white">Constructeur de pages :</strong> Elementor, Divi (WordPress)</li>
              </ul>

              <p className="text-gray-300 mb-8 leading-relaxed">
                <strong className="text-white">Conclusion :</strong> En 2025, un site non-responsive n'est plus acceptable. 
                Vous perdez du trafic, des conversions et de la crédibilité. C'est un investissement essentiel 
                pour rester compétitif.
              </p>

              <div className="bg-gradient-to-r from-primary-red/10 to-red-500/10 border border-primary-red/30 rounded-lg p-8 mt-12">
                <h3 className="text-2xl font-bold mb-4 text-white">
                  Besoin d'un site adapté à tous les écrans ?
                </h3>
                <p className="text-gray-300 mb-6">
                  Notre agence crée des sites web 100% responsive, optimisés pour tous les appareils.
                </p>
                <a
                  href="/index.html#contact"
                  className="inline-block bg-primary-red px-8 py-3 rounded-lg hover:bg-red-700 transition font-semibold"
                >
                  Demander un devis gratuit
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
