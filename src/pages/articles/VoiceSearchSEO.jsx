import React from 'react';
import { useLanguage } from '../../LanguageContext';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import AnimatedBackground from '../../components/AnimatedBackground';

export default function VoiceSearchSEO() {
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
                  {lang === 'fr' ? 'SEO Vocal' : 'Voice SEO'}
                </span>
                <span className="text-gray-400">{lang === 'fr' ? '28 Février 2025' : 'February 28, 2025'}</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                {lang === 'fr'
                  ? 'Voice Search SEO : Optimiser pour la recherche vocale en 2025'
                  : 'Voice Search SEO: Optimizing for voice search in 2025'}
              </h1>
              
              <p className="text-xl text-gray-300 mb-8">
                {lang === 'fr'
                  ? 'Avec Alexa, Siri et Google Assistant, la recherche vocale explose. Découvrez comment optimiser votre contenu pour ces requêtes conversationnelles.'
                  : 'With Alexa, Siri and Google Assistant, voice search is exploding. Discover how to optimize your content for these conversational queries.'}
              </p>
              
              <img
                src="/images/articles/voice-search.webp"
                alt="Voice Search SEO"
                className="w-full h-64 md:h-96 object-cover rounded-lg mb-8 relative z-10"
              />
            </div>

            <div className="prose prose-invert prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-primary-red mb-4 mt-8">
                {lang === 'fr' ? 'La révolution de la recherche vocale' : 'The voice search revolution'}
              </h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                {lang === 'fr'
                  ? '58% des consommateurs utilisent la recherche vocale pour trouver des infos locales. 71% des 18-29 ans l\'utilisent quotidiennement. D\'ici 2026, 75% des foyers auront un assistant vocal. La recherche vocale représente déjà 20% des recherches Google sur mobile.'
                  : '58% of consumers use voice search to find local information. 71% of 18-29 year olds use it daily. By 2026, 75% of households will have a voice assistant. Voice search already represents 20% of mobile Google searches.'}
              </p>

              <h2 className="text-3xl font-bold text-primary-red mb-4 mt-12">
                {lang === 'fr' ? 'Différences entre recherche vocale et textuelle' : 'Differences between voice and text search'}
              </h2>
              <ul className="list-disc list-inside text-gray-300 mb-8 space-y-2">
                <li><strong className="text-white">{lang === 'fr' ? 'Longueur :' : 'Length:'}</strong> {lang === 'fr' ? 'Vocal = 29 mots en moyenne vs Texte = 2-3 mots' : 'Voice = 29 words average vs Text = 2-3 words'}</li>
                <li><strong className="text-white">{lang === 'fr' ? 'Format :' : 'Format:'}</strong> {lang === 'fr' ? 'Questions complètes vs mots-clés' : 'Complete questions vs keywords'}</li>
                <li><strong className="text-white">{lang === 'fr' ? 'Intention :' : 'Intent:'}</strong> {lang === 'fr' ? '22% vocal = action immédiate vs 8% texte' : '22% voice = immediate action vs 8% text'}</li>
                <li><strong className="text-white">{lang === 'fr' ? 'Contexte :' : 'Context:'}</strong> {lang === 'fr' ? 'Conversationnel, langage naturel' : 'Conversational, natural language'}</li>
              </ul>

              <h2 className="text-3xl font-bold text-primary-red mb-4 mt-12">
                {lang === 'fr' ? 'Les 5W1H : Questions dominantes' : 'The 5W1H: Dominant questions'}
              </h2>
              <p className="text-gray-300 mb-4 leading-relaxed">
                {lang === 'fr'
                  ? 'Les recherches vocales suivent le schéma des questions :'
                  : 'Voice searches follow the question pattern:'}
              </p>
              <ul className="list-disc list-inside text-gray-300 mb-8 space-y-2">
                <li><strong className="text-white">Qui :</strong> {lang === 'fr' ? '"Qui est le meilleur développeur web à Paris ?"' : '"Who is the best web developer in Paris?"'}</li>
                <li><strong className="text-white">Quoi :</strong> {lang === 'fr' ? '"Qu\'est-ce que le SEO vocal ?"' : '"What is voice SEO?"'}</li>
                <li><strong className="text-white">Où :</strong> {lang === 'fr' ? '"Où trouver un restaurant italien près de moi ?"' : '"Where to find an Italian restaurant near me?"'}</li>
                <li><strong className="text-white">Quand :</strong> {lang === 'fr' ? '"Quand ouvre la boulangerie ?"' : '"When does the bakery open?"'}</li>
                <li><strong className="text-white">Pourquoi :</strong> {lang === 'fr' ? '"Pourquoi mon site est lent ?"' : '"Why is my site slow?"'}</li>
                <li><strong className="text-white">Comment :</strong> {lang === 'fr' ? '"Comment créer un site web ?"' : '"How to create a website?"'}</li>
              </ul>

              <h2 className="text-3xl font-bold text-primary-red mb-4 mt-12">
                {lang === 'fr' ? 'Stratégies d\'optimisation voice search' : 'Voice search optimization strategies'}
              </h2>
              
              <h3 className="text-2xl font-bold text-white mb-3 mt-8">
                {lang === 'fr' ? '1. Cibler les Featured Snippets' : '1. Target Featured Snippets'}
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                {lang === 'fr'
                  ? '40% des réponses vocales viennent des Featured Snippets (position 0). Formatez vos réponses en listes, tableaux, paragraphes concis (40-60 mots). Répondez directement à la question dans les premiers 100 mots.'
                  : '40% of voice responses come from Featured Snippets (position 0). Format your answers as lists, tables, concise paragraphs (40-60 words). Answer the question directly in the first 100 words.'}
              </p>

              <h3 className="text-2xl font-bold text-white mb-3 mt-8">
                {lang === 'fr' ? '2. Langage conversationnel' : '2. Conversational language'}
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                {lang === 'fr'
                  ? 'Écrivez comme vous parlez. Utilisez « vous », questions-réponses (FAQ), ton naturel. Exemple : « Comment optimiser mon SEO ? » plutôt que « optimisation SEO méthodes ».'
                  : 'Write as you speak. Use "you", questions-answers (FAQ), natural tone. Example: "How to optimize my SEO?" rather than "SEO optimization methods".'}
              </p>

              <h3 className="text-2xl font-bold text-white mb-3 mt-8">
                {lang === 'fr' ? '3. Longue traîne conversationnelle' : '3. Conversational long tail'}
              </h3>
              <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
                <li>{lang === 'fr' ? 'Mots-clés longue traîne naturels' : 'Natural long-tail keywords'}</li>
                <li>{lang === 'fr' ? 'Questions complètes dans H2/H3' : 'Complete questions in H2/H3'}</li>
                <li>{lang === 'fr' ? 'Synonymes et variations' : 'Synonyms and variations'}</li>
                <li>{lang === 'fr' ? 'Contexte local ("près de moi", ville)' : 'Local context ("near me", city)'}</li>
              </ul>

              <h3 className="text-2xl font-bold text-white mb-3 mt-8">
                {lang === 'fr' ? '4. SEO local optimisé' : '4. Optimized local SEO'}
              </h3>
              <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
                <li><strong className="text-white">Google Business Profile :</strong> {lang === 'fr' ? 'Complété à 100%' : 'Completed at 100%'}</li>
                <li><strong className="text-white">{lang === 'fr' ? 'Avis clients :' : 'Customer reviews:'}</strong> {lang === 'fr' ? 'Minimum 50+, répondez à tous' : 'Minimum 50+, respond to all'}</li>
                <li><strong className="text-white">NAP :</strong> {lang === 'fr' ? 'Name, Address, Phone cohérents partout' : 'Name, Address, Phone consistent everywhere'}</li>
                <li><strong className="text-white">{lang === 'fr' ? 'Contenu local :' : 'Local content:'}</strong> {lang === 'fr' ? 'Mentionnez quartiers, villes, régions' : 'Mention neighborhoods, cities, regions'}</li>
              </ul>

              <h3 className="text-2xl font-bold text-white mb-3 mt-8">
                {lang === 'fr' ? '5. Page FAQ structurée' : '5. Structured FAQ page'}
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                {lang === 'fr'
                  ? 'Créez une FAQ complète avec Schema.org FAQPage. Chaque question = H2 ou H3. Réponses concises 40-60 mots. Couvrez toutes les questions "Comment, Pourquoi, Où, Quand".'
                  : 'Create a complete FAQ with Schema.org FAQPage. Each question = H2 or H3. Concise answers 40-60 words. Cover all "How, Why, Where, When" questions.'}
              </p>

              <h3 className="text-2xl font-bold text-white mb-3 mt-8">
                {lang === 'fr' ? '6. Vitesse et mobile-first' : '6. Speed and mobile-first'}
              </h3>
              <ul className="list-disc list-inside text-gray-300 mb-8 space-y-2">
                <li><strong className="text-white">{lang === 'fr' ? 'Temps chargement :' : 'Loading time:'}</strong> {lang === 'fr' ? '<3 secondes obligatoire' : '<3 seconds mandatory'}</li>
                <li><strong className="text-white">{lang === 'fr' ? 'Mobile-responsive :' : 'Mobile-responsive:'}</strong> {lang === 'fr' ? '100% des recherches vocales sont mobile' : '100% of voice searches are mobile'}</li>
                <li><strong className="text-white">HTTPS :</strong> {lang === 'fr' ? 'Sécurité essentielle' : 'Essential security'}</li>
              </ul>

              <h2 className="text-3xl font-bold text-primary-red mb-4 mt-12">
                {lang === 'fr' ? 'Schema markup pour voice search' : 'Schema markup for voice search'}
              </h2>
              <ul className="list-disc list-inside text-gray-300 mb-8 space-y-2">
                <li><strong className="text-white">FAQPage :</strong> {lang === 'fr' ? 'Questions-réponses' : 'Questions-answers'}</li>
                <li><strong className="text-white">LocalBusiness :</strong> {lang === 'fr' ? 'Infos entreprise locale' : 'Local business info'}</li>
                <li><strong className="text-white">HowTo :</strong> {lang === 'fr' ? 'Tutoriels étape par étape' : 'Step-by-step tutorials'}</li>
                <li><strong className="text-white">Speakable :</strong> {lang === 'fr' ? 'Sections lisibles par assistants vocaux' : 'Sections readable by voice assistants'}</li>
              </ul>

              <h2 className="text-3xl font-bold text-primary-red mb-4 mt-12">
                {lang === 'fr' ? 'Outils d\'optimisation' : 'Optimization tools'}
              </h2>
              <ul className="list-disc list-inside text-gray-300 mb-8 space-y-2">
                <li><strong className="text-white">AnswerThePublic :</strong> {lang === 'fr' ? 'Questions populaires' : 'Popular questions'}</li>
                <li><strong className="text-white">AlsoAsked :</strong> {lang === 'fr' ? 'Questions liées Google' : 'Related Google questions'}</li>
                <li><strong className="text-white">SEMrush :</strong> {lang === 'fr' ? 'Recherche questions longue traîne' : 'Long-tail question research'}</li>
                <li><strong className="text-white">Google Search Console :</strong> {lang === 'fr' ? 'Requêtes conversationnelles' : 'Conversational queries'}</li>
              </ul>

              <h2 className="text-3xl font-bold text-primary-red mb-4 mt-12">
                {lang === 'fr' ? 'Exemples d\'optimisation' : 'Optimization examples'}
              </h2>
              <p className="text-gray-300 mb-4 leading-relaxed">
                <strong className="text-white">{lang === 'fr' ? 'Avant :' : 'Before:'}</strong> {lang === 'fr' ? '"Création site web Paris"' : '"Website creation Paris"'}
              </p>
              <p className="text-gray-300 mb-4 leading-relaxed">
                <strong className="text-white">{lang === 'fr' ? 'Après :' : 'After:'}</strong> {lang === 'fr' ? '"Comment créer un site web professionnel à Paris ?" + réponse complète en 50 mots' : '"How to create a professional website in Paris?" + complete answer in 50 words'}
              </p>

              <h2 className="text-3xl font-bold text-primary-red mb-4 mt-12">
                {lang === 'fr' ? 'Conclusion' : 'Conclusion'}
              </h2>
              <p className="text-gray-300 mb-8 leading-relaxed">
                {lang === 'fr'
                  ? 'La recherche vocale change le SEO. Adaptez votre contenu : langage naturel, questions-réponses, Featured Snippets, SEO local, vitesse. Ceux qui optimisent maintenant domineront demain.'
                  : 'Voice search is changing SEO. Adapt your content: natural language, questions-answers, Featured Snippets, local SEO, speed. Those who optimize now will dominate tomorrow.'}
              </p>

              <div className="bg-gradient-to-r from-primary-red/10 to-red-500/10 border border-primary-red/30 rounded-lg p-8 mt-12">
                <h3 className="text-2xl font-bold mb-4 text-white">
                  {lang === 'fr' ? 'Besoin d\'optimiser votre SEO vocal ?' : 'Need to optimize your voice SEO?'}
                </h3>
                <p className="text-gray-300 mb-6">
                  {lang === 'fr' ? 'Notre agence optimise votre contenu pour la recherche vocale et vous positionne sur les Featured Snippets.' : 'Our agency optimizes your content for voice search and positions you on Featured Snippets.'}
                </p>
                <a
                  href="/index.html#contact"
                  className="inline-block bg-primary-red px-8 py-3 rounded-lg hover:bg-red-700 transition font-semibold"
                >
                  {lang === 'fr' ? 'Optimiser mon SEO vocal' : 'Optimize my voice SEO'}
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
