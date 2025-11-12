import React from 'react';
import { useLanguage } from '../../LanguageContext';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import AnimatedBackground from '../../components/AnimatedBackground';

export default function AccessibiliteWCAG() {
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
                  {lang === 'fr' ? 'Accessibilité' : 'Accessibility'}
                </span>
                <span className="text-gray-400">{lang === 'fr' ? '14 Mars 2025' : 'March 14, 2025'}</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                {lang === 'fr'
                  ? 'Accessibilité web (WCAG 2.2) : Guide complet pour des sites inclusifs'
                  : 'Web Accessibility (WCAG 2.2): Complete guide for inclusive websites'}
              </h1>
              
              <p className="text-xl text-gray-300 mb-8">
                {lang === 'fr'
                  ? 'Découvrez comment rendre votre site accessible à tous avec les normes WCAG 2.2 : techniques, outils et bonnes pratiques pour un web inclusif.'
                  : 'Discover how to make your site accessible to everyone with WCAG 2.2 standards: techniques, tools and best practices for an inclusive web.'}
              </p>
              
              <img
                src="/images/articles/accessibilite.webp"
                alt="Web Accessibility"
                className="w-full h-64 md:h-96 object-cover rounded-lg mb-8 relative z-10"
              />
            </div>

            <div className="prose prose-invert prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-primary-red mb-4 mt-8">
                {lang === 'fr' ? 'Pourquoi l\'accessibilité web est cruciale en 2025' : 'Why web accessibility is crucial in 2025'}
              </h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                {lang === 'fr' 
                  ? 'L\'accessibilité web n\'est plus une option en 2025. Avec plus de 15% de la population mondiale vivant avec un handicap (soit plus d\'1 milliard de personnes), rendre votre site accessible est devenu un impératif à la fois éthique, légal et commercial.'
                  : 'Web accessibility is no longer an option in 2025. With more than 15% of the world\'s population living with a disability (over 1 billion people), making your site accessible has become an ethical, legal and commercial imperative.'}
              </p>
              <p className="text-gray-300 mb-6 leading-relaxed">
                {lang === 'fr'
                  ? 'En France, la loi impose aux services publics numériques d\'être conformes au RGAA (Référentiel Général d\'Amélioration de l\'Accessibilité), basé sur les normes WCAG. Les entreprises privées sont également concernées, sous peine de sanctions pouvant atteindre 25 000€ par an.'
                  : 'In France, the law requires digital public services to comply with RGAA (General Accessibility Improvement Framework), based on WCAG standards. Private companies are also affected, with penalties of up to €25,000 per year.'}
              </p>
              <p className="text-gray-300 mb-8 leading-relaxed">
                {lang === 'fr'
                  ? 'Au-delà de l\'aspect légal, l\'accessibilité améliore l\'expérience utilisateur pour tous : navigation au clavier pour les power users, sous-titres pour les vidéos consultées dans les transports, meilleur contraste pour les personnes âgées. C\'est aussi un avantage SEO : Google privilégie les sites bien structurés et accessibles.'
                  : 'Beyond the legal aspect, accessibility improves user experience for everyone: keyboard navigation for power users, subtitles for videos viewed in transit, better contrast for the elderly. It\'s also an SEO advantage: Google favors well-structured and accessible sites.'}
              </p>

              <h2 className="text-3xl font-bold text-primary-red mb-4 mt-12">
                {lang === 'fr' ? 'Comprendre les WCAG 2.2 : Les 4 principes fondamentaux' : 'Understanding WCAG 2.2: The 4 fundamental principles'}
              </h2>
              
              <h3 className="text-2xl font-bold text-white mb-3 mt-8">
                {lang === 'fr' ? '1. Perceptible' : '1. Perceivable'}
              </h3>
              <p className="text-gray-300 mb-4 leading-relaxed">
                {lang === 'fr'
                  ? 'Les utilisateurs doivent pouvoir percevoir toutes les informations présentées. Cela signifie :'
                  : 'Users must be able to perceive all presented information. This means:'}
              </p>
              <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
                <li><strong className="text-white">{lang === 'fr' ? 'Textes alternatifs :' : 'Alternative texts:'}</strong> {lang === 'fr' ? 'Chaque image doit avoir un attribut alt descriptif' : 'Every image must have a descriptive alt attribute'}</li>
                <li><strong className="text-white">{lang === 'fr' ? 'Sous-titres vidéo :' : 'Video captions:'}</strong> {lang === 'fr' ? 'Toutes les vidéos doivent proposer des sous-titres' : 'All videos must offer subtitles'}</li>
                <li><strong className="text-white">{lang === 'fr' ? 'Contraste des couleurs :' : 'Color contrast:'}</strong> {lang === 'fr' ? 'Ratio minimum de 4.5:1 pour le texte normal, 3:1 pour le texte large' : 'Minimum ratio of 4.5:1 for normal text, 3:1 for large text'}</li>
                <li><strong className="text-white">{lang === 'fr' ? 'Information non-couleur :' : 'Non-color information:'}</strong> {lang === 'fr' ? 'Ne pas utiliser uniquement la couleur pour transmettre l\'information' : 'Do not use color alone to convey information'}</li>
              </ul>

              <h3 className="text-2xl font-bold text-white mb-3 mt-8">
                {lang === 'fr' ? '2. Utilisable' : '2. Operable'}
              </h3>
              <p className="text-gray-300 mb-4 leading-relaxed">
                {lang === 'fr'
                  ? 'Tous les composants de l\'interface doivent être utilisables par tous :'
                  : 'All interface components must be usable by everyone:'}
              </p>
              <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
                <li><strong className="text-white">{lang === 'fr' ? 'Navigation au clavier :' : 'Keyboard navigation:'}</strong> {lang === 'fr' ? 'Tout doit être accessible avec Tab, Entrée et les flèches' : 'Everything must be accessible with Tab, Enter and arrows'}</li>
                <li><strong className="text-white">{lang === 'fr' ? 'Temps suffisant :' : 'Sufficient time:'}</strong> {lang === 'fr' ? 'Permettre de désactiver ou prolonger les limites de temps' : 'Allow disabling or extending time limits'}</li>
                <li><strong className="text-white">{lang === 'fr' ? 'Prévention des crises :' : 'Seizure prevention:'}</strong> {lang === 'fr' ? 'Éviter les flashs lumineux (max 3 par seconde)' : 'Avoid light flashes (max 3 per second)'}</li>
                <li><strong className="text-white">{lang === 'fr' ? 'Navigation cohérente :' : 'Consistent navigation:'}</strong> {lang === 'fr' ? 'Menus et structures identiques sur toutes les pages' : 'Identical menus and structures on all pages'}</li>
              </ul>

              <h3 className="text-2xl font-bold text-white mb-3 mt-8">
                {lang === 'fr' ? '3. Compréhensible' : '3. Understandable'}
              </h3>
              <p className="text-gray-300 mb-4 leading-relaxed">
                {lang === 'fr'
                  ? 'Le contenu et l\'interface doivent être compréhensibles par tous :'
                  : 'Content and interface must be understandable by everyone:'}
              </p>
              <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
                <li><strong className="text-white">{lang === 'fr' ? 'Langue déclarée :' : 'Declared language:'}</strong> {lang === 'fr' ? 'Balise lang="fr" pour indiquer la langue du contenu' : 'lang="fr" tag to indicate content language'}</li>
                <li><strong className="text-white">{lang === 'fr' ? 'Labels explicites :' : 'Explicit labels:'}</strong> {lang === 'fr' ? 'Champs de formulaire clairement identifiés' : 'Clearly identified form fields'}</li>
                <li><strong className="text-white">{lang === 'fr' ? 'Messages d\'erreur :' : 'Error messages:'}</strong> {lang === 'fr' ? 'Indiquer clairement les erreurs et comment les corriger' : 'Clearly indicate errors and how to correct them'}</li>
                <li><strong className="text-white">{lang === 'fr' ? 'Instructions claires :' : 'Clear instructions:'}</strong> {lang === 'fr' ? 'Guider l\'utilisateur dans les tâches complexes' : 'Guide users through complex tasks'}</li>
              </ul>

              <h3 className="text-2xl font-bold text-white mb-3 mt-8">
                {lang === 'fr' ? '4. Robuste' : '4. Robust'}
              </h3>
              <p className="text-gray-300 mb-4 leading-relaxed">
                {lang === 'fr'
                  ? 'Le contenu doit être compatible avec les technologies d\'assistance :'
                  : 'Content must be compatible with assistive technologies:'}
              </p>
              <ul className="list-disc list-inside text-gray-300 mb-8 space-y-2">
                <li><strong className="text-white">{lang === 'fr' ? 'HTML valide :' : 'Valid HTML:'}</strong> {lang === 'fr' ? 'Code conforme aux standards W3C' : 'Code compliant with W3C standards'}</li>
                <li><strong className="text-white">ARIA :</strong> {lang === 'fr' ? 'Utiliser les attributs ARIA pour enrichir la sémantique' : 'Use ARIA attributes to enrich semantics'}</li>
                <li><strong className="text-white">{lang === 'fr' ? 'Compatibilité :' : 'Compatibility:'}</strong> {lang === 'fr' ? 'Tester avec NVDA, JAWS, VoiceOver' : 'Test with NVDA, JAWS, VoiceOver'}</li>
              </ul>

              <h2 className="text-3xl font-bold text-primary-red mb-4 mt-12">
                {lang === 'fr' ? 'Techniques d\'implémentation pratiques' : 'Practical implementation techniques'}
              </h2>
              
              <h3 className="text-2xl font-bold text-white mb-3 mt-8">
                {lang === 'fr' ? 'HTML sémantique' : 'Semantic HTML'}
              </h3>
              <p className="text-gray-300 mb-4 leading-relaxed">
                {lang === 'fr'
                  ? 'Utilisez les bonnes balises HTML5 pour structurer votre contenu : <header>, <nav>, <main>, <article>, <aside>, <footer>. Les lecteurs d\'écran s\'appuient sur cette structure pour permettre une navigation rapide.'
                  : 'Use the right HTML5 tags to structure your content: <header>, <nav>, <main>, <article>, <aside>, <footer>. Screen readers rely on this structure to enable quick navigation.'}
              </p>

              <h3 className="text-2xl font-bold text-white mb-3 mt-8">
                {lang === 'fr' ? 'Navigation au clavier' : 'Keyboard navigation'}
              </h3>
              <p className="text-gray-300 mb-4 leading-relaxed">
                {lang === 'fr'
                  ? 'Testez votre site uniquement au clavier : Tab pour naviguer, Entrée pour activer, Échap pour fermer. Assurez-vous que le focus est toujours visible (outline CSS) et que l\'ordre de tabulation est logique.'
                  : 'Test your site with keyboard only: Tab to navigate, Enter to activate, Escape to close. Ensure focus is always visible (CSS outline) and tab order is logical.'}
              </p>

              <h3 className="text-2xl font-bold text-white mb-3 mt-8">
                {lang === 'fr' ? 'Contraste et couleurs' : 'Contrast and colors'}
              </h3>
              <p className="text-gray-300 mb-4 leading-relaxed">
                {lang === 'fr'
                  ? 'Utilisez des outils comme WebAIM Contrast Checker pour vérifier vos contrastes. Pour le niveau AA : 4.5:1 minimum pour le texte normal, 3:1 pour le texte large (18pt+). Pour le niveau AAA : 7:1 et 4.5:1 respectivement.'
                  : 'Use tools like WebAIM Contrast Checker to verify your contrasts. For AA level: 4.5:1 minimum for normal text, 3:1 for large text (18pt+). For AAA level: 7:1 and 4.5:1 respectively.'}
              </p>

              <h3 className="text-2xl font-bold text-white mb-3 mt-8">
                {lang === 'fr' ? 'Formulaires accessibles' : 'Accessible forms'}
              </h3>
              <p className="text-gray-300 mb-4 leading-relaxed">
                {lang === 'fr'
                  ? 'Chaque champ doit avoir un <label> associé, des messages d\'erreur explicites avec aria-describedby, et une validation accessible. Groupez les champs liés avec <fieldset> et <legend>.'
                  : 'Each field must have an associated <label>, explicit error messages with aria-describedby, and accessible validation. Group related fields with <fieldset> and <legend>.'}
              </p>

              <h2 className="text-3xl font-bold text-primary-red mb-4 mt-12">
                {lang === 'fr' ? 'Outils de test et audit' : 'Testing and audit tools'}
              </h2>
              <p className="text-gray-300 mb-4 leading-relaxed">
                {lang === 'fr'
                  ? 'Pour auditer l\'accessibilité de votre site, utilisez ces outils :'
                  : 'To audit your site\'s accessibility, use these tools:'}
              </p>
              <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
                <li><strong className="text-white">axe DevTools :</strong> {lang === 'fr' ? 'Extension Chrome/Firefox pour détecter automatiquement les problèmes' : 'Chrome/Firefox extension to automatically detect issues'}</li>
                <li><strong className="text-white">WAVE :</strong> {lang === 'fr' ? 'Analyse visuelle des problèmes d\'accessibilité' : 'Visual analysis of accessibility issues'}</li>
                <li><strong className="text-white">Lighthouse :</strong> {lang === 'fr' ? 'Audit intégré à Chrome DevTools' : 'Audit integrated in Chrome DevTools'}</li>
                <li><strong className="text-white">NVDA/JAWS :</strong> {lang === 'fr' ? 'Lecteurs d\'écran pour tests réels' : 'Screen readers for real testing'}</li>
                <li><strong className="text-white">Tanaguru :</strong> {lang === 'fr' ? 'Solution française pour audits RGAA complets' : 'French solution for complete RGAA audits'}</li>
              </ul>

              <h2 className="text-3xl font-bold text-primary-red mb-4 mt-12">
                {lang === 'fr' ? 'Impact SEO de l\'accessibilité' : 'SEO impact of accessibility'}
              </h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                {lang === 'fr'
                  ? 'L\'accessibilité et le SEO sont intimement liés. Les pratiques d\'accessibilité améliorent naturellement le référencement : HTML sémantique, textes alternatifs, structure claire, temps de chargement optimisé. Google utilise ces mêmes critères pour évaluer la qualité d\'un site.'
                  : 'Accessibility and SEO are closely linked. Accessibility practices naturally improve SEO: semantic HTML, alternative texts, clear structure, optimized loading time. Google uses these same criteria to evaluate a site\'s quality.'}
              </p>
              <p className="text-gray-300 mb-8 leading-relaxed">
                {lang === 'fr'
                  ? 'Un site accessible bénéficie généralement d\'un meilleur taux de rebond, d\'une durée de session plus longue et d\'un taux de conversion supérieur - tous des signaux positifs pour Google.'
                  : 'An accessible site generally benefits from a better bounce rate, longer session duration and higher conversion rate - all positive signals for Google.'}
              </p>

              <h2 className="text-3xl font-bold text-primary-red mb-4 mt-12">
                {lang === 'fr' ? 'Erreurs courantes à éviter' : 'Common mistakes to avoid'}
              </h2>
              <ul className="list-disc list-inside text-gray-300 mb-8 space-y-2">
                <li>{lang === 'fr' ? 'Textes alternatifs génériques ("image", "photo")' : 'Generic alternative texts ("image", "photo")'}</li>
                <li>{lang === 'fr' ? 'Liens "Cliquez ici" sans contexte' : '"Click here" links without context'}</li>
                <li>{lang === 'fr' ? 'Suppression de l\'outline du focus pour l\'esthétique' : 'Removing focus outline for aesthetics'}</li>
                <li>{lang === 'fr' ? 'Contenu uniquement en images/PDF non accessibles' : 'Content only in inaccessible images/PDFs'}</li>
                <li>{lang === 'fr' ? 'Captchas sans alternative audio' : 'Captchas without audio alternative'}</li>
                <li>{lang === 'fr' ? 'Vidéos sans transcription ni sous-titres' : 'Videos without transcription or subtitles'}</li>
              </ul>

              <h2 className="text-3xl font-bold text-primary-red mb-4 mt-12">
                {lang === 'fr' ? 'Conclusion' : 'Conclusion'}
              </h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                {lang === 'fr'
                  ? 'L\'accessibilité web n\'est pas un luxe mais une nécessité en 2025. Au-delà des obligations légales, c\'est une opportunité d\'élargir votre audience, d\'améliorer votre SEO et de démontrer votre engagement envers l\'inclusion.'
                  : 'Web accessibility is not a luxury but a necessity in 2025. Beyond legal obligations, it\'s an opportunity to expand your audience, improve your SEO and demonstrate your commitment to inclusion.'}
              </p>
              <p className="text-gray-300 mb-8 leading-relaxed">
                {lang === 'fr'
                  ? 'Commencez dès aujourd\'hui : auditez votre site, corrigez les problèmes critiques, formez vos équipes et intégrez l\'accessibilité dans votre processus de développement. Un web accessible est un web meilleur pour tous.'
                  : 'Start today: audit your site, fix critical issues, train your teams and integrate accessibility into your development process. An accessible web is a better web for everyone.'}
              </p>

              <div className="bg-gradient-to-r from-primary-red/10 to-red-500/10 border border-primary-red/30 rounded-lg p-8 mt-12">
                <h3 className="text-2xl font-bold mb-4 text-white">
                  {lang === 'fr' ? 'Besoin d\'un audit d\'accessibilité WCAG 2.2 ?' : 'Need a WCAG 2.2 accessibility audit?'}
                </h3>
                <p className="text-gray-300 mb-6">
                  {lang === 'fr' ? 'Notre agence vous accompagne pour rendre votre site conforme aux normes WCAG 2.2 et RGAA. Audit complet, recommandations et mise en conformité.' : 'Our agency supports you in making your site compliant with WCAG 2.2 and RGAA standards. Complete audit, recommendations and compliance implementation.'}
                </p>
                <a
                  href={lang === 'fr' ? '/index.html#contact' : '/en/index.html#contact'}
                  className="inline-block bg-primary-red px-8 py-3 rounded-lg hover:bg-red-700 transition font-semibold"
                >
                  {lang === 'fr' ? 'Demander un audit gratuit' : 'Request a free audit'}
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
