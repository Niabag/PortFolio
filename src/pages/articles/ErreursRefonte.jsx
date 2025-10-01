import React from 'react';
import { useLanguage } from '../../LanguageContext';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import AnimatedBackground from '../../components/AnimatedBackground';

export default function ErreursRefonte() {
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
                  {lang === 'fr' ? 'Refonte Web' : 'Web Redesign'}
                </span>
                <span className="text-gray-400">1 Mars 2025</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                5 erreurs fréquentes à éviter lors de la refonte d'un site internet
              </h1>
              
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=600&fit=crop"
                alt="Erreurs refonte site"
                className="w-full h-64 md:h-96 object-cover rounded-lg mb-8"
              />
            </div>

            <div className="prose prose-invert prose-lg max-w-none">
              <p className="text-gray-300 mb-8 leading-relaxed text-lg">
                La refonte d'un site web est un projet stratégique qui peut transformer votre présence en ligne. 
                Cependant, certaines erreurs peuvent compromettre le succès de votre projet. Voici les 5 pièges 
                les plus courants et comment les éviter.
              </p>

              <h2 className="text-3xl font-bold text-primary-red mb-4">
                Erreur #1 : Ne pas définir d'objectifs clairs
              </h2>
              <p className="text-gray-300 mb-4 leading-relaxed">
                Beaucoup d'entreprises se lancent dans une refonte sans avoir défini précisément leurs objectifs. 
                "Moderniser le design" n'est pas un objectif suffisant.
              </p>
              <p className="text-gray-300 mb-4 leading-relaxed">
                <strong className="text-white">Solution :</strong> Définissez des objectifs SMART :
              </p>
              <ul className="list-disc list-inside text-gray-300 mb-8 space-y-2">
                <li>Augmenter le taux de conversion de X%</li>
                <li>Réduire le taux de rebond de Y%</li>
                <li>Améliorer le temps de chargement à moins de 3 secondes</li>
                <li>Générer Z leads qualifiés par mois</li>
                <li>Améliorer le positionnement SEO sur des mots-clés stratégiques</li>
              </ul>

              <h2 className="text-3xl font-bold text-primary-red mb-4">
                Erreur #2 : Oublier la sauvegarde et la migration des données
              </h2>
              <p className="text-gray-300 mb-4 leading-relaxed">
                Perdre des années de contenu, de données clients ou de configurations peut être catastrophique.
              </p>
              <p className="text-gray-300 mb-4 leading-relaxed">
                <strong className="text-white">Solution :</strong> Plan de migration rigoureux :
              </p>
              <ul className="list-disc list-inside text-gray-300 mb-8 space-y-2">
                <li>Sauvegarde complète de la base de données</li>
                <li>Export de tous les contenus (articles, produits, médias)</li>
                <li>Documentation des configurations techniques</li>
                <li>Test de la migration sur un environnement de staging</li>
                <li>Plan de rollback en cas de problème</li>
              </ul>

              <h2 className="text-3xl font-bold text-primary-red mb-4">
                Erreur #3 : Négliger le référencement SEO existant
              </h2>
              <p className="text-gray-300 mb-4 leading-relaxed">
                Une refonte mal gérée peut faire chuter votre trafic organique de 50% ou plus. 
                Changer les URLs sans redirections appropriées est une erreur fatale.
              </p>
              <p className="text-gray-300 mb-4 leading-relaxed">
                <strong className="text-white">Solution :</strong> Préservez votre capital SEO :
              </p>
              <ul className="list-disc list-inside text-gray-300 mb-8 space-y-2">
                <li>Audit SEO complet avant la refonte</li>
                <li>Mapping de toutes les URLs (anciennes → nouvelles)</li>
                <li>Redirections 301 pour chaque page modifiée</li>
                <li>Conservation de la structure Hn et mots-clés</li>
                <li>Maintien des backlinks de qualité</li>
                <li>Surveillance des positions post-lancement</li>
              </ul>

              <h2 className="text-3xl font-bold text-primary-red mb-4">
                Erreur #4 : Ignorer l'expérience utilisateur (UX)
              </h2>
              <p className="text-gray-300 mb-4 leading-relaxed">
                Un design magnifique mais difficile à utiliser fera fuir vos visiteurs. 
                L'UX doit primer sur l'esthétique pure.
              </p>
              <p className="text-gray-300 mb-4 leading-relaxed">
                <strong className="text-white">Solution :</strong> Approche centrée utilisateur :
              </p>
              <ul className="list-disc list-inside text-gray-300 mb-8 space-y-2">
                <li>Analyse du comportement utilisateur (heatmaps, analytics)</li>
                <li>Tests utilisateurs sur prototypes</li>
                <li>Navigation intuitive et claire</li>
                <li>Temps de chargement optimisé</li>
                <li>Accessibilité (WCAG) respectée</li>
                <li>Parcours d'achat/conversion simplifié</li>
              </ul>

              <h2 className="text-3xl font-bold text-primary-red mb-4">
                Erreur #5 : Ne pas tester avant la mise en ligne
              </h2>
              <p className="text-gray-300 mb-4 leading-relaxed">
                Lancer un site non testé, c'est prendre le risque de bugs critiques, 
                de liens cassés ou de problèmes de compatibilité.
              </p>
              <p className="text-gray-300 mb-4 leading-relaxed">
                <strong className="text-white">Solution :</strong> Phase de tests exhaustive :
              </p>
              <ul className="list-disc list-inside text-gray-300 mb-8 space-y-2">
                <li>Tests sur tous les navigateurs (Chrome, Firefox, Safari, Edge)</li>
                <li>Tests responsive sur mobile, tablette, desktop</li>
                <li>Vérification de tous les formulaires</li>
                <li>Test des paiements (e-commerce)</li>
                <li>Validation W3C du code</li>
                <li>Tests de charge et performance</li>
                <li>Vérification des liens internes et externes</li>
              </ul>

              <h2 className="text-3xl font-bold text-primary-red mb-4">
                Conclusion et bonnes pratiques
              </h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Une refonte réussie nécessite une planification rigoureuse, une exécution méthodique 
                et un suivi post-lancement. Ne précipitez pas le processus et entourez-vous de professionnels 
                expérimentés.
              </p>
              <p className="text-gray-300 mb-8 leading-relaxed">
                <strong className="text-white">Checklist finale :</strong> Objectifs définis ✓ Sauvegarde complète ✓ 
                Plan SEO ✓ UX optimisée ✓ Tests exhaustifs ✓
              </p>

              <div className="bg-gradient-to-r from-primary-red/10 to-red-500/10 border border-primary-red/30 rounded-lg p-8 mt-12">
                <h3 className="text-2xl font-bold mb-4 text-white">
                  Vous envisagez une refonte ?
                </h3>
                <p className="text-gray-300 mb-6">
                  Contactez notre agence pour un accompagnement sur mesure et évitez les pièges courants.
                </p>
                <a
                  href="/index.html#contact"
                  className="inline-block bg-primary-red px-8 py-3 rounded-lg hover:bg-red-700 transition font-semibold"
                >
                  Demander un accompagnement
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
