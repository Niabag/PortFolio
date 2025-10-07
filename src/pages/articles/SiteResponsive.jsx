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
                {lang === 'fr' ? 'Pourquoi un site web responsive est indispensable en 2025 ?' : 'Why a responsive website is essential in 2025?'}
              </h1>
              
              <img
                src="/images/articles/responsive.webp"
                alt="Site responsive"
                className="w-full h-64 md:h-96 object-cover rounded-lg mb-8 relative z-10"
              />
            </div>

            <div className="prose prose-invert prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-primary-red mb-4">
                {lang === 'fr' ? "Qu'est-ce qu'un site responsive ?" : 'What is a responsive website?'}
              </h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                {lang === 'fr' 
                  ? "Un site web responsive (ou adaptatif) est un site qui s'adapte automatiquement à la taille de l'écran sur lequel il est consulté : smartphone, tablette, ordinateur portable ou écran de bureau."
                  : 'A responsive (adaptive) website automatically adjusts to the screen size it is viewed on: smartphone, tablet, laptop or desktop.'}
              </p>
              <p className="text-gray-300 mb-8 leading-relaxed">
                {lang === 'fr' 
                  ? "Le design responsive utilise des techniques CSS (media queries, grilles flexibles, images fluides) pour offrir une expérience optimale quel que soit l'appareil utilisé."
                  : 'Responsive design uses CSS techniques (media queries, flexible grids, fluid images) to provide an optimal experience on any device.'}
              </p>

              <h2 className="text-3xl font-bold text-primary-red mb-4">
                {lang === 'fr' ? 'Les statistiques de navigation mobile en 2025' : 'Mobile browsing statistics in 2025'}
              </h2>
              <p className="text-gray-300 mb-4 leading-relaxed">
                {lang === 'fr' ? "Les chiffres parlent d'eux-mêmes :" : 'The numbers speak for themselves:'}
              </p>
              <ul className="list-disc list-inside text-gray-300 mb-8 space-y-2">
                <li><strong className="text-white">{lang === 'fr' ? '63% du trafic web mondial' : '63% of global web traffic'}</strong> {lang === 'fr' ? 'provient des mobiles' : 'comes from mobile devices'}</li>
                <li><strong className="text-white">85%</strong> {lang === 'fr' ? 'des utilisateurs pensent qu\'un site mobile doit être aussi bon que la version desktop' : 'of users think a mobile site should be as good as the desktop version'}</li>
                <li><strong className="text-white">57%</strong> {lang === 'fr' ? 'des utilisateurs ne recommanderont pas une entreprise avec un site mobile mal conçu' : 'of users will not recommend a business with a poorly designed mobile site'}</li>
                <li><strong className="text-white">53%</strong> {lang === 'fr' ? 'des visites mobiles sont abandonnées si le chargement prend plus de 3 secondes' : 'of mobile visits are abandoned if loading takes more than 3 seconds'}</li>
                <li><strong className="text-white">70%</strong> {lang === 'fr' ? 'des recherches mobiles mènent à une action dans l\'heure' : 'of mobile searches lead to action within an hour'}</li>
              </ul>

              <h2 className="text-3xl font-bold text-primary-red mb-4">
                {lang === 'fr' ? "Les avantages SEO d'un site responsive" : 'SEO benefits of a responsive site'}
              </h2>
              <p className="text-gray-300 mb-4 leading-relaxed">
                {lang === 'fr' ? 'Google favorise explicitement les sites responsive dans ses résultats de recherche :' : 'Google explicitly favors responsive sites in its search results:'}
              </p>
              <ul className="list-disc list-inside text-gray-300 mb-8 space-y-2">
                <li><strong className="text-white">{lang === 'fr' ? 'Mobile-First Indexing :' : 'Mobile-First Indexing:'}</strong> {lang === 'fr' ? 'Google indexe d\'abord la version mobile de votre site' : 'Google indexes your mobile site first'}</li>
                <li><strong className="text-white">{lang === 'fr' ? 'Meilleur classement :' : 'Better ranking:'}</strong> {lang === 'fr' ? 'Les sites non-responsive sont pénalisés dans les résultats mobiles' : 'Non-responsive sites are penalized on mobile results'}</li>
                <li><strong className="text-white">{lang === 'fr' ? 'Une seule URL :' : 'Single URL:'}</strong> {lang === 'fr' ? 'Pas de contenu dupliqué entre versions mobile et desktop' : 'No duplicate content between mobile and desktop versions'}</li>
                <li><strong className="text-white">{lang === 'fr' ? 'Taux de rebond réduit :' : 'Reduced bounce rate:'}</strong> {lang === 'fr' ? 'Meilleure expérience = meilleur signal pour Google' : 'Better experience = better signal for Google'}</li>
                <li><strong className="text-white">{lang === 'fr' ? 'Partage facilité :' : 'Easier sharing:'}</strong> {lang === 'fr' ? 'Une seule URL à partager sur tous les appareils' : 'One single URL to share across devices'}</li>
              </ul>

              <h2 className="text-3xl font-bold text-primary-red mb-4">
                {lang === 'fr' ? "Impact sur l'expérience utilisateur et les conversions" : 'Impact on user experience and conversions'}
              </h2>
              <p className="text-gray-300 mb-4 leading-relaxed">
                {lang === 'fr' ? 'Un site responsive améliore directement vos résultats business :' : 'A responsive site directly improves your business results:'}
              </p>
              <ul className="list-disc list-inside text-gray-300 mb-8 space-y-2">
                <li><strong className="text-white">{lang === 'fr' ? 'Taux de conversion augmenté :' : 'Higher conversion rate:'}</strong> {lang === 'fr' ? '+30% en moyenne avec un design responsive' : '+30% on average with responsive design'}</li>
                <li><strong className="text-white">{lang === 'fr' ? 'Temps sur site prolongé :' : 'Longer time on site:'}</strong> {lang === 'fr' ? 'Les utilisateurs restent plus longtemps' : 'Users stay longer'}</li>
                <li><strong className="text-white">{lang === 'fr' ? 'Réduction du taux de rebond :' : 'Reduced bounce rate:'}</strong> {lang === 'fr' ? "Jusqu'à -40% sur mobile" : 'Up to -40% on mobile'}</li>
                <li><strong className="text-white">{lang === 'fr' ? 'Crédibilité renforcée :' : 'Increased credibility:'}</strong> {lang === 'fr' ? 'Un site moderne inspire confiance' : 'A modern site inspires trust'}</li>
                <li><strong className="text-white">{lang === 'fr' ? 'Coûts réduits :' : 'Reduced costs:'}</strong> {lang === 'fr' ? 'Une seule version à maintenir au lieu de deux' : 'One version to maintain instead of two'}</li>
              </ul>

              <h2 className="text-3xl font-bold text-primary-red mb-4">
                {lang === 'fr' ? 'Comment savoir si mon site est responsive ?' : 'How do I know if my site is responsive?'}
              </h2>
              <p className="text-gray-300 mb-4 leading-relaxed">
                {lang === 'fr' ? 'Plusieurs méthodes pour tester votre site :' : 'Several methods to test your site:'}
              </p>
              <ol className="list-decimal list-inside text-gray-300 mb-8 space-y-3">
                <li><strong className="text-white">{lang === 'fr' ? 'Test Google Mobile-Friendly :' : 'Google Mobile-Friendly Test:'}</strong> {lang === 'fr' ? 'Outil gratuit de Google' : 'Free tool from Google'}</li>
                <li><strong className="text-white">{lang === 'fr' ? 'Redimensionnement navigateur :' : 'Browser resizing:'}</strong> {lang === 'fr' ? 'Réduisez la fenêtre et observez l\'adaptation' : 'Resize the window and observe the adaptation'}</li>
                <li><strong className="text-white">DevTools:</strong> {lang === 'fr' ? 'F12 puis mode responsive (Ctrl+Shift+M)' : 'F12 then responsive mode (Ctrl+Shift+M)'}</li>
                <li><strong className="text-white">{lang === 'fr' ? 'Test réel :' : 'Real test:'}</strong> {lang === 'fr' ? 'Consultez votre site sur différents appareils' : 'Check your site on different devices'}</li>
                <li><strong className="text-white">PageSpeed Insights:</strong> {lang === 'fr' ? 'Analyse mobile et desktop' : 'Mobile and desktop analysis'}</li>
              </ol>

              <h2 className="text-3xl font-bold text-primary-red mb-4">
                {lang === 'fr' ? 'Solutions pour rendre son site responsive' : 'Solutions to make your site responsive'}
              </h2>
              <p className="text-gray-300 mb-4 leading-relaxed">
                {lang === 'fr' ? "Si votre site n'est pas responsive, voici vos options :" : 'If your site is not responsive, here are your options:'}
              </p>
              <ul className="list-disc list-inside text-gray-300 mb-8 space-y-2">
                <li><strong className="text-white">{lang === 'fr' ? 'Refonte complète :' : 'Complete redesign:'}</strong> {lang === 'fr' ? 'Solution idéale pour moderniser entièrement' : 'Ideal solution for a complete modernization'}</li>
                <li><strong className="text-white">{lang === 'fr' ? 'Thème responsive :' : 'Responsive theme:'}</strong> {lang === 'fr' ? 'Pour WordPress, changez de thème' : 'For WordPress, change your theme'}</li>
                <li><strong className="text-white">{lang === 'fr' ? 'Framework CSS :' : 'CSS Framework:'}</strong> {lang === 'fr' ? 'Bootstrap, Tailwind pour adaptation rapide' : 'Bootstrap, Tailwind for quick adaptation'}</li>
                <li><strong className="text-white">{lang === 'fr' ? 'Développement custom :' : 'Custom development:'}</strong> {lang === 'fr' ? 'Media queries CSS personnalisées' : 'Custom CSS media queries'}</li>
                <li><strong className="text-white">{lang === 'fr' ? 'Constructeur de pages :' : 'Page builders:'}</strong> {lang === 'fr' ? 'Elementor, Divi (WordPress)' : 'Elementor, Divi (WordPress)'}</li>
              </ul>

              <p className="text-gray-300 mb-8 leading-relaxed" 
                 dangerouslySetInnerHTML={{ 
                   __html: lang === 'fr' 
                     ? "<strong class='text-white'>Conclusion :</strong> En 2025, un site non-responsive n'est plus acceptable. Vous perdez du trafic, des conversions et de la crédibilité. C'est un investissement essentiel pour rester compétitif."
                     : "<strong class='text-white'>Conclusion:</strong> In 2025, a non-responsive site is no longer acceptable. You lose traffic, conversions and credibility. It's an essential investment to stay competitive."
                 }} 
              />

              <div className="bg-gradient-to-r from-primary-red/10 to-red-500/10 border border-primary-red/30 rounded-lg p-8 mt-12">
                <h3 className="text-2xl font-bold mb-4 text-white">
                  {lang === 'fr' ? "Besoin d'un site adapté à tous les écrans ?" : 'Need a site that fits all screens?'}
                </h3>
                <p className="text-gray-300 mb-6">
                  {lang === 'fr' ? 'Notre agence web et marketing crée des sites web 100% responsive, optimisés pour tous les appareils et le référencement.' : 'Our web and marketing agency creates 100% responsive websites, optimized for all devices and SEO.'}
                </p>
                <a
                  href="/index.html#contact"
                  className="inline-block bg-primary-red px-8 py-3 rounded-lg hover:bg-red-700 transition font-semibold"
                >
                  {lang === 'fr' ? 'Demander un devis gratuit' : 'Request a free quote'}
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
