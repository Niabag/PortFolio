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
                {lang === 'fr' ? "5 erreurs fréquentes à éviter lors de la refonte d'un site internet" : '5 common mistakes to avoid when redesigning a website'}
              </h1>
              
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=600&fit=crop"
                alt="Erreurs refonte site"
                className="w-full h-64 md:h-96 object-cover rounded-lg mb-8 relative z-10"
              />
            </div>

            <div className="prose prose-invert prose-lg max-w-none">
              <p className="text-gray-300 mb-8 leading-relaxed text-lg">
                {lang === 'fr' 
                  ? "La refonte d'un site web est un projet stratégique qui peut transformer votre présence en ligne. Cependant, certaines erreurs peuvent compromettre le succès de votre projet. Voici les 5 pièges les plus courants et comment les éviter."
                  : 'A website redesign is a strategic project that can transform your online presence. However, certain mistakes can compromise your success. Here are the 5 most common pitfalls and how to avoid them.'}
              </p>

              <h2 className="text-3xl font-bold text-primary-red mb-4">
                {lang === 'fr' ? "Erreur #1 : Ne pas définir d'objectifs clairs" : 'Mistake #1: Not defining clear objectives'}
              </h2>
              <p className="text-gray-300 mb-4 leading-relaxed">
                {lang === 'fr' ? "Beaucoup d'entreprises se lancent dans une refonte sans avoir défini précisément leurs objectifs. \"Moderniser le design\" n'est pas un objectif suffisant." : 'Many companies start a redesign without clearly defining their goals. "Modernizing the design" is not sufficient.'}
              </p>
              <p className="text-gray-300 mb-4 leading-relaxed">
                <strong className="text-white">{lang === 'fr' ? 'Solution :' : 'Solution:'}</strong> {lang === 'fr' ? 'Définissez des objectifs SMART :' : 'Define SMART goals:'}
              </p>
              <ul className="list-disc list-inside text-gray-300 mb-8 space-y-2">
                <li>{lang === 'fr' ? 'Augmenter le taux de conversion de X%' : 'Increase conversion rate by X%'}</li>
                <li>{lang === 'fr' ? 'Réduire le taux de rebond de Y%' : 'Reduce bounce rate by Y%'}</li>
                <li>{lang === 'fr' ? 'Améliorer le temps de chargement à moins de 3 secondes' : 'Improve load time to under 3 seconds'}</li>
                <li>{lang === 'fr' ? 'Générer Z leads qualifiés par mois' : 'Generate Z qualified leads per month'}</li>
                <li>{lang === 'fr' ? 'Améliorer le positionnement SEO sur des mots-clés stratégiques' : 'Improve SEO rankings on strategic keywords'}</li>
              </ul>

              <h2 className="text-3xl font-bold text-primary-red mb-4">
                {lang === 'fr' ? 'Erreur #2 : Oublier la sauvegarde et la migration des données' : 'Mistake #2: Forgetting backup and data migration'}
              </h2>
              <p className="text-gray-300 mb-4 leading-relaxed">
                {lang === 'fr' ? 'Perdre des années de contenu, de données clients ou de configurations peut être catastrophique.' : 'Losing years of content, customer data or configurations can be catastrophic.'}
              </p>
              <p className="text-gray-300 mb-4 leading-relaxed">
                <strong className="text-white">{lang === 'fr' ? 'Solution :' : 'Solution:'}</strong> {lang === 'fr' ? 'Plan de migration rigoureux :' : 'A rigorous migration plan:'}
              </p>
              <ul className="list-disc list-inside text-gray-300 mb-8 space-y-2">
                <li>{lang === 'fr' ? 'Sauvegarde complète de la base de données' : 'Full database backup'}</li>
                <li>{lang === 'fr' ? 'Export de tous les contenus (articles, produits, médias)' : 'Export all content (posts, products, media)'}</li>
                <li>{lang === 'fr' ? 'Documentation des configurations techniques' : 'Document technical configurations'}</li>
                <li>{lang === 'fr' ? 'Test de la migration sur un environnement de staging' : 'Test migration on a staging environment'}</li>
                <li>{lang === 'fr' ? 'Plan de rollback en cas de problème' : 'Rollback plan in case of issues'}</li>
              </ul>

              <h2 className="text-3xl font-bold text-primary-red mb-4">
                {lang === 'fr' ? 'Erreur #3 : Négliger le référencement SEO existant' : 'Mistake #3: Neglecting existing SEO'}
              </h2>
              <p className="text-gray-300 mb-4 leading-relaxed">
                {lang === 'fr' ? 'Une refonte mal gérée peut faire chuter votre trafic organique de 50% ou plus. Changer les URLs sans redirections appropriées est une erreur fatale.' : 'A poorly managed redesign can drop your organic traffic by 50% or more. Changing URLs without proper redirects is a fatal mistake.'}
              </p>
              <p className="text-gray-300 mb-4 leading-relaxed">
                <strong className="text-white">{lang === 'fr' ? 'Solution :' : 'Solution:'}</strong> {lang === 'fr' ? 'Préservez votre capital SEO :' : 'Preserve your SEO equity:'}
              </p>
              <ul className="list-disc list-inside text-gray-300 mb-8 space-y-2">
                <li>{lang === 'fr' ? 'Audit SEO complet avant la refonte' : 'Full SEO audit before redesign'}</li>
                <li>{lang === 'fr' ? 'Mapping de toutes les URLs (anciennes → nouvelles)' : 'Map all URLs (old → new)'}</li>
                <li>{lang === 'fr' ? 'Redirections 301 pour chaque page modifiée' : '301 redirects for every changed page'}</li>
                <li>{lang === 'fr' ? 'Conservation de la structure Hn et mots-clés' : 'Keep Hn structure and keywords'}</li>
                <li>{lang === 'fr' ? 'Maintien des backlinks de qualité' : 'Keep quality backlinks'}</li>
                <li>{lang === 'fr' ? 'Surveillance des positions post-lancement' : 'Monitor rankings after launch'}</li>
              </ul>

              <h2 className="text-3xl font-bold text-primary-red mb-4">
                {lang === 'fr' ? "Erreur #4 : Ignorer l'expérience utilisateur (UX)" : 'Mistake #4: Ignoring user experience (UX)'}
              </h2>
              <p className="text-gray-300 mb-4 leading-relaxed">
                {lang === 'fr' ? "Un design magnifique mais difficile à utiliser fera fuir vos visiteurs. L'UX doit primer sur l'esthétique pure." : 'A beautiful design that is hard to use will drive visitors away. UX must come before pure aesthetics.'}
              </p>
              <p className="text-gray-300 mb-4 leading-relaxed">
                <strong className="text-white">{lang === 'fr' ? 'Solution :' : 'Solution:'}</strong> {lang === 'fr' ? 'Approche centrée utilisateur :' : 'User-centered approach:'}
              </p>
              <ul className="list-disc list-inside text-gray-300 mb-8 space-y-2">
                <li>{lang === 'fr' ? 'Analyse du comportement utilisateur (heatmaps, analytics)' : 'Analyze user behavior (heatmaps, analytics)'}</li>
                <li>{lang === 'fr' ? 'Tests utilisateurs sur prototypes' : 'User testing on prototypes'}</li>
                <li>{lang === 'fr' ? 'Navigation intuitive et claire' : 'Clear and intuitive navigation'}</li>
                <li>{lang === 'fr' ? 'Temps de chargement optimisé' : 'Optimized load times'}</li>
                <li>{lang === 'fr' ? 'Accessibilité (WCAG) respectée' : 'Accessibility (WCAG) respected'}</li>
                <li>{lang === 'fr' ? "Parcours d'achat/conversion simplifié" : 'Simplified purchase/conversion journey'}</li>
              </ul>

              <h2 className="text-3xl font-bold text-primary-red mb-4">
                {lang === 'fr' ? 'Erreur #5 : Ne pas tester avant la mise en ligne' : 'Mistake #5: Not testing before going live'}
              </h2>
              <p className="text-gray-300 mb-4 leading-relaxed">
                {lang === 'fr' ? "Lancer un site non testé, c'est prendre le risque de bugs critiques, de liens cassés ou de problèmes de compatibilité." : 'Launching an untested site risks critical bugs, broken links, or compatibility issues.'}
              </p>
              <p className="text-gray-300 mb-4 leading-relaxed">
                <strong className="text-white">{lang === 'fr' ? 'Solution :' : 'Solution:'}</strong> {lang === 'fr' ? 'Phase de tests exhaustive :' : 'Exhaustive testing phase:'}
              </p>
              <ul className="list-disc list-inside text-gray-300 mb-8 space-y-2">
                <li>{lang === 'fr' ? 'Tests sur tous les navigateurs (Chrome, Firefox, Safari, Edge)' : 'Cross-browser testing (Chrome, Firefox, Safari, Edge)'}</li>
                <li>{lang === 'fr' ? 'Tests responsive sur mobile, tablette, desktop' : 'Responsive tests on mobile, tablet, desktop'}</li>
                <li>{lang === 'fr' ? 'Vérification de tous les formulaires' : 'Check all forms'}</li>
                <li>{lang === 'fr' ? 'Test des paiements (e-commerce)' : 'Test payments (e-commerce)'}</li>
                <li>{lang === 'fr' ? 'Validation W3C du code' : 'W3C code validation'}</li>
                <li>{lang === 'fr' ? 'Tests de charge et performance' : 'Load and performance testing'}</li>
                <li>{lang === 'fr' ? 'Vérification des liens internes et externes' : 'Check internal and external links'}</li>
              </ul>

              <h2 className="text-3xl font-bold text-primary-red mb-4">
                {lang === 'fr' ? 'Conclusion et bonnes pratiques' : 'Conclusion and best practices'}
              </h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                {lang === 'fr' ? 'Une refonte réussie nécessite une planification rigoureuse, une exécution méthodique et un suivi post-lancement. Ne précipitez pas le processus et entourez-vous de professionnels expérimentés.' : 'A successful redesign requires rigorous planning, methodical execution and post-launch monitoring. Do not rush the process and surround yourself with experienced professionals.'}
              </p>
              <p className="text-gray-300 mb-8 leading-relaxed">
                <strong className="text-white">{lang === 'fr' ? 'Checklist finale :' : 'Final checklist:'}</strong> {lang === 'fr' ? 'Objectifs définis ✓ Sauvegarde complète ✓ Plan SEO ✓ UX optimisée ✓ Tests exhaustifs ✓' : 'Goals defined ✓ Full backup ✓ SEO plan ✓ Optimized UX ✓ Exhaustive tests ✓'}
              </p>

              <div className="bg-gradient-to-r from-primary-red/10 to-red-500/10 border border-primary-red/30 rounded-lg p-8 mt-12">
                <h3 className="text-2xl font-bold mb-4 text-white">
                  {lang === 'fr' ? 'Vous envisagez une refonte ?' : 'Planning a redesign?'}
                </h3>
                <p className="text-gray-300 mb-6">
                  {lang === 'fr' ? 'Contactez notre agence pour un accompagnement sur mesure et évitez les pièges courants.' : 'Contact our agency for tailored support and avoid common pitfalls.'}
                </p>
                <a
                  href="/index.html#contact"
                  className="inline-block bg-primary-red px-8 py-3 rounded-lg hover:bg-red-700 transition font-semibold"
                >
                  {lang === 'fr' ? 'Demander un accompagnement' : 'Request assistance'}
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
