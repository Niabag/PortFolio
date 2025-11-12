import React from 'react';
import { useLanguage } from '../../LanguageContext';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import AnimatedBackground from '../../components/AnimatedBackground';

export default function ContentMarketingStrategie() {
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
                  {lang === 'fr' ? 'Content Marketing' : 'Content Marketing'}
                </span>
                <span className="text-gray-400">{lang === 'fr' ? '4 Mars 2025' : 'March 4, 2025'}</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                {lang === 'fr'
                  ? 'Content Marketing : Créer une stratégie de contenu performante'
                  : 'Content Marketing: Creating a high-performance content strategy'}
              </h1>
              
              <p className="text-xl text-gray-300 mb-8">
                {lang === 'fr'
                  ? 'De la recherche de mots-clés à la création : guide complet pour élaborer une stratégie de content marketing qui génère du trafic et des conversions.'
                  : 'From keyword research to creation: complete guide to developing a content marketing strategy that generates traffic and conversions.'}
              </p>
              
              <img
                src="/images/articles/content-marketing.webp"
                alt="Content Marketing"
                className="w-full h-64 md:h-96 object-cover rounded-lg mb-8 relative z-10"
              />
            </div>

            <div className="prose prose-invert prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-primary-red mb-4 mt-8">
                {lang === 'fr' ? 'Pourquoi le content marketing fonctionne' : 'Why content marketing works'}
              </h2>
              <p className="text-gray-300 mb-8 leading-relaxed">
                {lang === 'fr'
                  ? 'Le content marketing génère 3x plus de leads que la publicité traditionnelle pour 62% moins cher. 70% des consommateurs préfèrent découvrir une entreprise via du contenu plutôt que de la pub. C\'est l\'inbound marketing par excellence.'
                  : 'Content marketing generates 3x more leads than traditional advertising for 62% less. 70% of consumers prefer to discover a company through content rather than ads. It\'s inbound marketing par excellence.'}
              </p>

              <h2 className="text-3xl font-bold text-primary-red mb-4 mt-12">
                {lang === 'fr' ? 'Les 7 étapes d\'une stratégie content marketing' : 'The 7 steps of a content marketing strategy'}
              </h2>
              
              <h3 className="text-2xl font-bold text-white mb-3 mt-8">
                {lang === 'fr' ? '1. Définir vos personas' : '1. Define your personas'}
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                {lang === 'fr'
                  ? 'Qui sont vos clients idéaux ? Démographie, problèmes, objectifs, comportements. Créez 2-3 personas détaillés. Le contenu sera ensuite adapté à chacun.'
                  : 'Who are your ideal customers? Demographics, problems, goals, behaviors. Create 2-3 detailed personas. Content will then be adapted to each.'}
              </p>

              <h3 className="text-2xl font-bold text-white mb-3 mt-8">
                {lang === 'fr' ? '2. Recherche de mots-clés' : '2. Keyword research'}
              </h3>
              <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
                <li><strong className="text-white">{lang === 'fr' ? 'Outils :' : 'Tools:'}</strong> {lang === 'fr' ? 'Semrush, Ahrefs, Ubersuggest, Google Keyword Planner' : 'Semrush, Ahrefs, Ubersuggest, Google Keyword Planner'}</li>
                <li><strong className="text-white">{lang === 'fr' ? 'Ciblez :' : 'Target:'}</strong> {lang === 'fr' ? 'Mots-clés longue traîne (faible volume, forte intention)' : 'Long-tail keywords (low volume, high intent)'}</li>
                <li><strong className="text-white">{lang === 'fr' ? 'Analysez :' : 'Analyze:'}</strong> {lang === 'fr' ? 'Volume, difficulté, intention de recherche' : 'Volume, difficulty, search intent'}</li>
              </ul>

              <h3 className="text-2xl font-bold text-white mb-3 mt-8">
                {lang === 'fr' ? '3. Analyse de la concurrence' : '3. Competitor analysis'}
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                {lang === 'fr'
                  ? 'Identifiez les contenus qui fonctionnent chez vos concurrents. Outils : BuzzSumo, Semrush. Faites mieux : plus complet, plus récent, meilleur design.'
                  : 'Identify content that works for your competitors. Tools: BuzzSumo, Semrush. Do better: more complete, more recent, better design.'}
              </p>

              <h3 className="text-2xl font-bold text-white mb-3 mt-8">
                {lang === 'fr' ? '4. Créer un calendrier éditorial' : '4. Create an editorial calendar'}
              </h3>
              <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
                <li>{lang === 'fr' ? 'Planifiez 3 mois à l\'avance minimum' : 'Plan at least 3 months ahead'}</li>
                <li>{lang === 'fr' ? 'Variez les formats : articles, vidéos, infographies, podcasts' : 'Vary formats: articles, videos, infographics, podcasts'}</li>
                <li>{lang === 'fr' ? 'Rythme : 2-4 publications/semaine selon ressources' : 'Pace: 2-4 publications/week depending on resources'}</li>
                <li>{lang === 'fr' ? 'Outil : Notion, Trello, Asana, Google Sheets' : 'Tool: Notion, Trello, Asana, Google Sheets'}</li>
              </ul>

              <h3 className="text-2xl font-bold text-white mb-3 mt-8">
                {lang === 'fr' ? '5. Créer du contenu de qualité' : '5. Create quality content'}
              </h3>
              <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
                <li><strong className="text-white">{lang === 'fr' ? 'Profondeur :' : 'Depth:'}</strong> {lang === 'fr' ? 'Articles longs (1500-3000 mots) rankent mieux' : 'Long articles (1500-3000 words) rank better'}</li>
                <li><strong className="text-white">{lang === 'fr' ? 'Structure :' : 'Structure:'}</strong> {lang === 'fr' ? 'H1, H2, H3, listes, images' : 'H1, H2, H3, lists, images'}</li>
                <li><strong className="text-white">{lang === 'fr' ? 'Valeur :' : 'Value:'}</strong> {lang === 'fr' ? 'Résolvez un problème concret' : 'Solve a concrete problem'}</li>
                <li><strong className="text-white">{lang === 'fr' ? 'Originalité :' : 'Originality:'}</strong> {lang === 'fr' ? 'Apportez un angle unique' : 'Bring a unique angle'}</li>
              </ul>

              <h3 className="text-2xl font-bold text-white mb-3 mt-8">
                {lang === 'fr' ? '6. Optimiser pour le SEO' : '6. Optimize for SEO'}
              </h3>
              <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
                <li>{lang === 'fr' ? 'Mot-clé dans titre, H1, H2, premier paragraphe' : 'Keyword in title, H1, H2, first paragraph'}</li>
                <li>{lang === 'fr' ? 'Meta description attrayante (155 caractères)' : 'Attractive meta description (155 characters)'}</li>
                <li>{lang === 'fr' ? 'URL courte et descriptive' : 'Short and descriptive URL'}</li>
                <li>{lang === 'fr' ? 'Liens internes vers autres articles' : 'Internal links to other articles'}</li>
                <li>{lang === 'fr' ? 'Images optimisées (alt text, compression)' : 'Optimized images (alt text, compression)'}</li>
              </ul>

              <h3 className="text-2xl font-bold text-white mb-3 mt-8">
                {lang === 'fr' ? '7. Promouvoir et distribuer' : '7. Promote and distribute'}
              </h3>
              <ul className="list-disc list-inside text-gray-300 mb-8 space-y-2">
                <li>{lang === 'fr' ? 'Réseaux sociaux (LinkedIn, Facebook, Twitter)' : 'Social media (LinkedIn, Facebook, Twitter)'}</li>
                <li>{lang === 'fr' ? 'Newsletter email à vos abonnés' : 'Email newsletter to your subscribers'}</li>
                <li>{lang === 'fr' ? 'Groupes et forums pertinents' : 'Relevant groups and forums'}</li>
                <li>{lang === 'fr' ? 'Republication (Medium, LinkedIn Articles)' : 'Republication (Medium, LinkedIn Articles)'}</li>
              </ul>

              <h2 className="text-3xl font-bold text-primary-red mb-4 mt-12">
                {lang === 'fr' ? 'Types de contenu qui performent' : 'Content types that perform'}
              </h2>
              <ul className="list-disc list-inside text-gray-300 mb-8 space-y-2">
                <li><strong className="text-white">{lang === 'fr' ? 'Guides ultimes :' : 'Ultimate guides:'}</strong> {lang === 'fr' ? 'Ressources complètes sur un sujet (3000+ mots)' : 'Complete resources on a topic (3000+ words)'}</li>
                <li><strong className="text-white">{lang === 'fr' ? 'Listes :' : 'Lists:'}</strong> {lang === 'fr' ? '"10 outils pour...", "5 erreurs à éviter..."' : '"10 tools for...", "5 mistakes to avoid..."'}</li>
                <li><strong className="text-white">{lang === 'fr' ? 'Études de cas :' : 'Case studies:'}</strong> {lang === 'fr' ? 'Résultats concrets de clients' : 'Concrete client results'}</li>
                <li><strong className="text-white">{lang === 'fr' ? 'Tutoriels :' : 'Tutorials:'}</strong> {lang === 'fr' ? 'Pas à pas avec captures d\'écran' : 'Step by step with screenshots'}</li>
                <li><strong className="text-white">{lang === 'fr' ? 'Infographies :' : 'Infographics:'}</strong> {lang === 'fr' ? 'Visuelles et partageables' : 'Visual and shareable'}</li>
                <li><strong className="text-white">{lang === 'fr' ? 'Templates :' : 'Templates:'}</strong> {lang === 'fr' ? 'Ressources téléchargeables' : 'Downloadable resources'}</li>
              </ul>

              <h2 className="text-3xl font-bold text-primary-red mb-4 mt-12">
                {lang === 'fr' ? 'Mesurer les performances' : 'Measure performance'}
              </h2>
              <ul className="list-disc list-inside text-gray-300 mb-8 space-y-2">
                <li><strong className="text-white">{lang === 'fr' ? 'Trafic organique :' : 'Organic traffic:'}</strong> {lang === 'fr' ? 'Google Analytics' : 'Google Analytics'}</li>
                <li><strong className="text-white">{lang === 'fr' ? 'Positions SEO :' : 'SEO positions:'}</strong> {lang === 'fr' ? 'Google Search Console, Semrush' : 'Google Search Console, Semrush'}</li>
                <li><strong className="text-white">{lang === 'fr' ? 'Engagement :' : 'Engagement:'}</strong> {lang === 'fr' ? 'Temps sur page, taux rebond' : 'Time on page, bounce rate'}</li>
                <li><strong className="text-white">{lang === 'fr' ? 'Conversions :' : 'Conversions:'}</strong> {lang === 'fr' ? 'Leads générés, ventes' : 'Generated leads, sales'}</li>
                <li><strong className="text-white">{lang === 'fr' ? 'Social shares :' : 'Social shares:'}</strong> {lang === 'fr' ? 'Partages sociaux' : 'Social shares'}</li>
              </ul>

              <h2 className="text-3xl font-bold text-primary-red mb-4 mt-12">
                {lang === 'fr' ? 'Conclusion' : 'Conclusion'}
              </h2>
              <p className="text-gray-300 mb-8 leading-relaxed">
                {lang === 'fr'
                  ? 'Une stratégie content marketing réussie demande du temps et de la constance. Publiez régulièrement, mesurez, ajustez. Les résultats arrivent après 6-12 mois. Patience et qualité paient toujours.'
                  : 'A successful content marketing strategy requires time and consistency. Publish regularly, measure, adjust. Results come after 6-12 months. Patience and quality always pay off.'}
              </p>

              <div className="bg-gradient-to-r from-primary-red/10 to-red-500/10 border border-primary-red/30 rounded-lg p-8 mt-12">
                <h3 className="text-2xl font-bold mb-4 text-white">
                  {lang === 'fr' ? 'Besoin d\'une stratégie de contenu sur mesure ?' : 'Need a custom content strategy?'}
                </h3>
                <p className="text-gray-300 mb-6">
                  {lang === 'fr' ? 'Notre agence crée et exécute votre stratégie content marketing de A à Z pour générer du trafic qualifié.' : 'Our agency creates and executes your content marketing strategy from A to Z to generate qualified traffic.'}
                </p>
                <a
                  href={lang === 'fr' ? '/index.html#contact' : '/en/index.html#contact'}
                  className="inline-block bg-primary-red px-8 py-3 rounded-lg hover:bg-red-700 transition font-semibold"
                >
                  {lang === 'fr' ? 'Créer ma stratégie' : 'Create my strategy'}
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
