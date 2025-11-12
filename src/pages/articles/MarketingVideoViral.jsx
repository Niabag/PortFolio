import React from 'react';
import { useLanguage } from '../../LanguageContext';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import AnimatedBackground from '../../components/AnimatedBackground';

export default function MarketingVideoViral() {
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
                  {lang === 'fr' ? 'Vidéo' : 'Video'}
                </span>
                <span className="text-gray-400">{lang === 'fr' ? '13 Mars 2025' : 'March 13, 2025'}</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                {lang === 'fr'
                  ? 'Marketing vidéo : Créer du contenu viral sur les réseaux sociaux'
                  : 'Video marketing: Creating viral content on social media'}
              </h1>
              
              <p className="text-xl text-gray-300 mb-8">
                {lang === 'fr'
                  ? 'Découvrez les secrets pour créer des vidéos qui cartonnent sur YouTube, Instagram Reels, TikTok et Facebook. Formats, hooks, montage et distribution.'
                  : 'Discover the secrets to creating videos that blow up on YouTube, Instagram Reels, TikTok and Facebook. Formats, hooks, editing and distribution.'}
              </p>
              
              <img
                src="/images/articles/video-marketing.webp"
                alt="Video Marketing"
                className="w-full h-64 md:h-96 object-cover rounded-lg mb-8 relative z-10"
              />
            </div>

            <div className="prose prose-invert prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-primary-red mb-4 mt-8">
                {lang === 'fr' ? 'La vidéo domine les réseaux sociaux en 2025' : 'Video dominates social media in 2025'}
              </h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                {lang === 'fr'
                  ? '82% du trafic internet mondial est de la vidéo. Les vidéos génèrent 1200% plus de partages que texte et image combinés. Sur les réseaux sociaux, les vidéos obtiennent 48% d\'engagement en plus. C\'est LE format à maîtriser.'
                  : '82% of global internet traffic is video. Videos generate 1200% more shares than text and images combined. On social media, videos get 48% more engagement. It\'s THE format to master.'}
              </p>

              <h2 className="text-3xl font-bold text-primary-red mb-4 mt-12">
                {lang === 'fr' ? 'Les formats vidéo qui fonctionnent' : 'Video formats that work'}
              </h2>
              
              <h3 className="text-2xl font-bold text-white mb-3 mt-8">
                {lang === 'fr' ? 'TikTok / Instagram Reels (15-60s)' : 'TikTok / Instagram Reels (15-60s)'}
              </h3>
              <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
                <li><strong className="text-white">{lang === 'fr' ? 'Hook 3 secondes :' : '3-second hook:'}</strong> {lang === 'fr' ? 'Captez l\'attention immédiatement' : 'Capture attention immediately'}</li>
                <li><strong className="text-white">{lang === 'fr' ? 'Sous-titres obligatoires :' : 'Mandatory subtitles:'}</strong> {lang === 'fr' ? '85% regardent sans son' : '85% watch without sound'}</li>
                <li><strong className="text-white">{lang === 'fr' ? 'Tendances/sons :' : 'Trends/sounds:'}</strong> {lang === 'fr' ? 'Utilisez les sons populaires' : 'Use popular sounds'}</li>
                <li><strong className="text-white">{lang === 'fr' ? 'Format vertical :' : 'Vertical format:'}</strong> {lang === 'fr' ? '9:16 optimisé mobile' : '9:16 mobile optimized'}</li>
              </ul>

              <h3 className="text-2xl font-bold text-white mb-3 mt-8">
                {lang === 'fr' ? 'YouTube (8-15 minutes)' : 'YouTube (8-15 minutes)'}
              </h3>
              <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
                <li><strong className="text-white">{lang === 'fr' ? 'Miniature percutante :' : 'Impactful thumbnail:'}</strong> {lang === 'fr' ? '90% du succès, visage + texte + couleurs vives' : '90% of success, face + text + bright colors'}</li>
                <li><strong className="text-white">{lang === 'fr' ? 'Titre SEO :' : 'SEO title:'}</strong> {lang === 'fr' ? 'Mots-clés + bénéfice clair' : 'Keywords + clear benefit'}</li>
                <li><strong className="text-white">{lang === 'fr' ? 'Structure :' : 'Structure:'}</strong> {lang === 'fr' ? 'Intro (10s) > Contenu > CTA' : 'Intro (10s) > Content > CTA'}</li>
                <li><strong className="text-white">{lang === 'fr' ? 'Durée optimale :' : 'Optimal duration:'}</strong> {lang === 'fr' ? '8-15min pour monétisation' : '8-15min for monetization'}</li>
              </ul>

              <h3 className="text-2xl font-bold text-white mb-3 mt-8">
                {lang === 'fr' ? 'YouTube Shorts / Facebook Reels' : 'YouTube Shorts / Facebook Reels'}
              </h3>
              <p className="text-gray-300 mb-8 leading-relaxed">
                {lang === 'fr'
                  ? 'Même stratégie que TikTok : court, percutant, vertical. Recyclez vos TikToks sur ces plateformes pour multiplier la portée.'
                  : 'Same strategy as TikTok: short, impactful, vertical. Recycle your TikToks on these platforms to multiply reach.'}
              </p>

              <h2 className="text-3xl font-bold text-primary-red mb-4 mt-12">
                {lang === 'fr' ? 'Anatomie d\'une vidéo virale' : 'Anatomy of a viral video'}
              </h2>
              <ul className="list-disc list-inside text-gray-300 mb-8 space-y-2">
                <li><strong className="text-white">{lang === 'fr' ? '1. Hook puissant (3s) :' : '1. Powerful hook (3s):'}</strong> {lang === 'fr' ? 'Question, chiffre choc, problème relatable' : 'Question, shocking number, relatable problem'}</li>
                <li><strong className="text-white">{lang === 'fr' ? '2. Pattern interrupt :' : '2. Pattern interrupt:'}</strong> {lang === 'fr' ? 'Changez de plan toutes les 3-5s' : 'Change shot every 3-5s'}</li>
                <li><strong className="text-white">{lang === 'fr' ? '3. Valeur/divertissement :' : '3. Value/entertainment:'}</strong> {lang === 'fr' ? 'Éduquez OU divertissez' : 'Educate OR entertain'}</li>
                <li><strong className="text-white">{lang === 'fr' ? '4. Émotions :' : '4. Emotions:'}</strong> {lang === 'fr' ? 'Rire, surprise, inspiration, colère' : 'Laughter, surprise, inspiration, anger'}</li>
                <li><strong className="text-white">{lang === 'fr' ? '5. CTA clair :' : '5. Clear CTA:'}</strong> {lang === 'fr' ? 'Like, partage, commentaire, lien bio' : 'Like, share, comment, link in bio'}</li>
              </ul>

              <h2 className="text-3xl font-bold text-primary-red mb-4 mt-12">
                {lang === 'fr' ? 'Outils de montage et création' : 'Editing and creation tools'}
              </h2>
              <ul className="list-disc list-inside text-gray-300 mb-8 space-y-2">
                <li><strong className="text-white">CapCut :</strong> {lang === 'fr' ? 'Gratuit, idéal TikTok/Reels, templates' : 'Free, ideal for TikTok/Reels, templates'}</li>
                <li><strong className="text-white">DaVinci Resolve :</strong> {lang === 'fr' ? 'Gratuit, professionnel pour YouTube' : 'Free, professional for YouTube'}</li>
                <li><strong className="text-white">Adobe Premiere :</strong> {lang === 'fr' ? 'Standard industrie, payant' : 'Industry standard, paid'}</li>
                <li><strong className="text-white">Canva Video :</strong> {lang === 'fr' ? 'Simple pour débutants' : 'Simple for beginners'}</li>
                <li><strong className="text-white">Descript :</strong> {lang === 'fr' ? 'Édition par texte, génial pour podcasts' : 'Text-based editing, great for podcasts'}</li>
              </ul>

              <h2 className="text-3xl font-bold text-primary-red mb-4 mt-12">
                {lang === 'fr' ? 'Stratégie de distribution' : 'Distribution strategy'}
              </h2>
              <ul className="list-disc list-inside text-gray-300 mb-8 space-y-2">
                <li>{lang === 'fr' ? 'Postez aux heures de pointe (12h, 18h-21h)' : 'Post at peak hours (12pm, 6pm-9pm)'}</li>
                <li>{lang === 'fr' ? 'Répondez aux commentaires (algorithme++)' : 'Reply to comments (algorithm++)'}</li>
                <li>{lang === 'fr' ? 'Hashtags pertinents (5-10 max)' : 'Relevant hashtags (5-10 max)'}</li>
                <li>{lang === 'fr' ? 'Cross-posting intelligent (adaptez par plateforme)' : 'Smart cross-posting (adapt per platform)'}</li>
                <li>{lang === 'fr' ? 'Collaborations avec créateurs similaires' : 'Collaborations with similar creators'}</li>
              </ul>

              <h2 className="text-3xl font-bold text-primary-red mb-4 mt-12">
                {lang === 'fr' ? 'Métriques à suivre' : 'Metrics to track'}
              </h2>
              <ul className="list-disc list-inside text-gray-300 mb-8 space-y-2">
                <li><strong className="text-white">{lang === 'fr' ? 'Taux de rétention :' : 'Retention rate:'}</strong> {lang === 'fr' ? '>50% = excellent' : '>50% = excellent'}</li>
                <li><strong className="text-white">{lang === 'fr' ? 'Watch time :' : 'Watch time:'}</strong> {lang === 'fr' ? 'Durée moyenne visionnée' : 'Average watch time'}</li>
                <li><strong className="text-white">{lang === 'fr' ? 'Engagement :' : 'Engagement:'}</strong> {lang === 'fr' ? 'Likes + comments + partages' : 'Likes + comments + shares'}</li>
                <li><strong className="text-white">{lang === 'fr' ? 'CTR :' : 'CTR:'}</strong> {lang === 'fr' ? 'Clics sur vos liens' : 'Clicks on your links'}</li>
              </ul>

              <h2 className="text-3xl font-bold text-primary-red mb-4 mt-12">
                {lang === 'fr' ? 'Conclusion' : 'Conclusion'}
              </h2>
              <p className="text-gray-300 mb-8 leading-relaxed">
                {lang === 'fr'
                  ? 'La vidéo virale n\'est pas magique : c\'est une science. Hook puissant, montage dynamique, émotions, valeur. Testez, analysez, itérez. Postez régulièrement. Les algorithmes récompensent la constance.'
                  : 'Viral video isn\'t magic: it\'s a science. Powerful hook, dynamic editing, emotions, value. Test, analyze, iterate. Post regularly. Algorithms reward consistency.'}
              </p>

              <div className="bg-gradient-to-r from-primary-red/10 to-red-500/10 border border-primary-red/30 rounded-lg p-8 mt-12">
                <h3 className="text-2xl font-bold mb-4 text-white">
                  {lang === 'fr' ? 'Besoin d\'aide pour votre stratégie vidéo ?' : 'Need help with your video strategy?'}
                </h3>
                <p className="text-gray-300 mb-6">
                  {lang === 'fr' ? 'Notre agence crée et optimise vos contenus vidéo pour maximiser leur viralité et votre engagement.' : 'Our agency creates and optimizes your video content to maximize virality and engagement.'}
                </p>
                <a
                  href={lang === 'fr' ? '/index.html#contact' : '/en/index.html#contact'}
                  className="inline-block bg-primary-red px-8 py-3 rounded-lg hover:bg-red-700 transition font-semibold"
                >
                  {lang === 'fr' ? 'Créer des vidéos virales' : 'Create viral videos'}
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
