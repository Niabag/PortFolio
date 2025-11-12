import React from 'react';
import { useLanguage } from '../../LanguageContext';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import AnimatedBackground from '../../components/AnimatedBackground';

export default function JamstackVsTraditionnel() {
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
                  {lang === 'fr' ? 'Architecture' : 'Architecture'}
                </span>
                <span className="text-gray-400">{lang === 'fr' ? '16 Mars 2025' : 'March 16, 2025'}</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                {lang === 'fr'
                  ? 'Jamstack vs Architecture traditionnelle : Quel choix en 2025 ?'
                  : 'Jamstack vs Traditional Architecture: Which choice in 2025?'}
              </h1>
              
              <p className="text-xl text-gray-300 mb-8">
                {lang === 'fr'
                  ? 'Comparaison approfondie entre Jamstack et architectures traditionnelles : performances, coûts, SEO et cas d\'usage pour faire le bon choix technique.'
                  : 'In-depth comparison between Jamstack and traditional architectures: performance, costs, SEO and use cases to make the right technical choice.'}
              </p>
              
              <img
                src="/images/articles/jamstack.webp"
                alt="Jamstack architecture"
                className="w-full h-64 md:h-96 object-cover rounded-lg mb-8 relative z-10"
              />
            </div>

            <div className="prose prose-invert prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-primary-red mb-4 mt-8">
                {lang === 'fr' ? 'Qu\'est-ce que le Jamstack ?' : 'What is Jamstack?'}
              </h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                {lang === 'fr' 
                  ? 'Jamstack (JavaScript, APIs, Markup) représente une approche moderne du développement web qui découple complètement le frontend du backend. Contrairement aux architectures monolithiques traditionnelles où le serveur génère les pages à la volée, Jamstack pré-construit toutes les pages statiques lors du build.'
                  : 'Jamstack (JavaScript, APIs, Markup) represents a modern approach to web development that completely decouples frontend from backend. Unlike traditional monolithic architectures where the server generates pages on the fly, Jamstack pre-builds all static pages during build time.'}
              </p>
              <p className="text-gray-300 mb-6 leading-relaxed">
                {lang === 'fr'
                  ? 'Ces pages sont ensuite distribuées via un CDN (Content Delivery Network) global, garantissant des temps de chargement ultra-rapides partout dans le monde. Pour les fonctionnalités dynamiques, Jamstack s\'appuie sur des APIs tierces (headless CMS, services d\'authentification, paiement, etc.) et du JavaScript côté client.'
                  : 'These pages are then distributed via a global CDN (Content Delivery Network), guaranteeing ultra-fast loading times anywhere in the world. For dynamic features, Jamstack relies on third-party APIs (headless CMS, authentication services, payment, etc.) and client-side JavaScript.'}
              </p>
              <p className="text-gray-300 mb-8 leading-relaxed">
                {lang === 'fr'
                  ? 'Des frameworks comme Next.js, Gatsby, Nuxt, et Astro ont popularisé cette approche, offrant des outils puissants pour créer des sites Jamstack performants et évolutifs.'
                  : 'Frameworks like Next.js, Gatsby, Nuxt, and Astro have popularized this approach, offering powerful tools to create performant and scalable Jamstack sites.'}
              </p>

              <h2 className="text-3xl font-bold text-primary-red mb-4 mt-12">
                {lang === 'fr' ? 'Architecture traditionnelle : Le modèle LAMP/MEAN' : 'Traditional Architecture: The LAMP/MEAN model'}
              </h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                {lang === 'fr'
                  ? 'L\'architecture traditionnelle (LAMP : Linux, Apache, MySQL, PHP ou MEAN : MongoDB, Express, Angular, Node) génère les pages HTML côté serveur pour chaque requête. Le serveur interroge la base de données, exécute la logique métier, et retourne une page HTML complète au navigateur.'
                  : 'Traditional architecture (LAMP: Linux, Apache, MySQL, PHP or MEAN: MongoDB, Express, Angular, Node) generates HTML pages server-side for each request. The server queries the database, executes business logic, and returns a complete HTML page to the browser.'}
              </p>
              <p className="text-gray-300 mb-6 leading-relaxed">
                {lang === 'fr'
                  ? 'C\'est l\'approche utilisée par WordPress, Drupal, Magento et la majorité des applications web historiques. Elle offre une grande flexibilité pour le contenu dynamique mais implique une dépendance forte au serveur pour chaque interaction.'
                  : 'This is the approach used by WordPress, Drupal, Magento and most legacy web applications. It offers great flexibility for dynamic content but involves a strong dependency on the server for each interaction.'}
              </p>

              <h2 className="text-3xl font-bold text-primary-red mb-4 mt-12">
                {lang === 'fr' ? 'Comparaison des performances' : 'Performance comparison'}
              </h2>
              
              <h3 className="text-2xl font-bold text-white mb-3 mt-8">
                {lang === 'fr' ? 'Temps de chargement' : 'Loading time'}
              </h3>
              <p className="text-gray-300 mb-4 leading-relaxed">
                {lang === 'fr'
                  ? 'Jamstack excelle avec des temps de chargement inférieurs à 1 seconde grâce au pré-rendu et à la distribution CDN. Les scores Lighthouse atteignent régulièrement 95-100/100. L\'architecture traditionnelle, même optimisée, peine à descendre sous 2-3 secondes à cause du temps de génération serveur et des requêtes base de données.'
                  : 'Jamstack excels with loading times under 1 second thanks to pre-rendering and CDN distribution. Lighthouse scores regularly reach 95-100/100. Traditional architecture, even optimized, struggles to go below 2-3 seconds due to server generation time and database queries.'}
              </p>

              <h3 className="text-2xl font-bold text-white mb-3 mt-8">
                {lang === 'fr' ? 'Scalabilité' : 'Scalability'}
              </h3>
              <p className="text-gray-300 mb-4 leading-relaxed">
                {lang === 'fr'
                  ? 'Jamstack scale infiniment : plus de trafic = plus de requêtes CDN, sans surcharge serveur. L\'architecture traditionnelle nécessite du load balancing, des serveurs additionnels et une gestion complexe de la mise à l\'échelle. Un pic de trafic peut faire tomber un serveur traditionnel, pas un site Jamstack.'
                  : 'Jamstack scales infinitely: more traffic = more CDN requests, without server overload. Traditional architecture requires load balancing, additional servers and complex scaling management. A traffic spike can crash a traditional server, not a Jamstack site.'}
              </p>

              <h3 className="text-2xl font-bold text-white mb-3 mt-8">
                {lang === 'fr' ? 'Core Web Vitals' : 'Core Web Vitals'}
              </h3>
              <ul className="list-disc list-inside text-gray-300 mb-8 space-y-2">
                <li><strong className="text-white">LCP (Largest Contentful Paint) :</strong> {lang === 'fr' ? 'Jamstack < 1s vs Traditionnel 2-4s' : 'Jamstack < 1s vs Traditional 2-4s'}</li>
                <li><strong className="text-white">FID (First Input Delay) :</strong> {lang === 'fr' ? 'Jamstack < 100ms vs Traditionnel 100-300ms' : 'Jamstack < 100ms vs Traditional 100-300ms'}</li>
                <li><strong className="text-white">CLS (Cumulative Layout Shift) :</strong> {lang === 'fr' ? 'Jamstack excellent grâce au SSG' : 'Jamstack excellent thanks to SSG'}</li>
              </ul>

              <h2 className="text-3xl font-bold text-primary-red mb-4 mt-12">
                {lang === 'fr' ? 'Sécurité : Un avantage décisif pour Jamstack' : 'Security: A decisive advantage for Jamstack'}
              </h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                {lang === 'fr'
                  ? 'Jamstack réduit drastiquement la surface d\'attaque. Pas de serveur exposé = pas de vulnérabilités serveur. Pas de base de données accessible = pas d\'injection SQL. Pas de plugins backend = pas de failles de sécurité plugin.'
                  : 'Jamstack drastically reduces the attack surface. No exposed server = no server vulnerabilities. No accessible database = no SQL injection. No backend plugins = no plugin security flaws.'}
              </p>
              <p className="text-gray-300 mb-6 leading-relaxed">
                {lang === 'fr'
                  ? 'Les sites statiques sont intrinsèquement plus sûrs. Les seuls vecteurs d\'attaque sont les APIs tierces (qui ont leurs propres équipes de sécurité) et le JavaScript client (limité par le navigateur).'
                  : 'Static sites are inherently more secure. The only attack vectors are third-party APIs (which have their own security teams) and client JavaScript (limited by the browser).'}
              </p>
              <p className="text-gray-300 mb-8 leading-relaxed">
                {lang === 'fr'
                  ? 'L\'architecture traditionnelle nécessite une maintenance constante : mises à jour serveur, patches de sécurité, monitoring des tentatives d\'intrusion, protection DDoS, sauvegardes base de données. Un site WordPress nécessite en moyenne 10-15h de maintenance sécurité par an.'
                  : 'Traditional architecture requires constant maintenance: server updates, security patches, intrusion attempt monitoring, DDoS protection, database backups. A WordPress site requires an average of 10-15h of security maintenance per year.'}
              </p>

              <h2 className="text-3xl font-bold text-primary-red mb-4 mt-12">
                {lang === 'fr' ? 'Coûts : Analyse détaillée' : 'Costs: Detailed analysis'}
              </h2>
              
              <h3 className="text-2xl font-bold text-white mb-3 mt-8">
                {lang === 'fr' ? 'Hébergement Jamstack' : 'Jamstack hosting'}
              </h3>
              <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
                <li><strong className="text-white">Netlify :</strong> {lang === 'fr' ? 'Gratuit jusqu\'à 100GB bande passante, puis 19€/mois' : 'Free up to 100GB bandwidth, then €19/month'}</li>
                <li><strong className="text-white">Vercel :</strong> {lang === 'fr' ? 'Gratuit jusqu\'à 100GB, puis 20€/mois' : 'Free up to 100GB, then €20/month'}</li>
                <li><strong className="text-white">Cloudflare Pages :</strong> {lang === 'fr' ? 'Gratuit illimité pour la plupart des sites' : 'Free unlimited for most sites'}</li>
              </ul>

              <h3 className="text-2xl font-bold text-white mb-3 mt-8">
                {lang === 'fr' ? 'Hébergement traditionnel' : 'Traditional hosting'}
              </h3>
              <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
                <li><strong className="text-white">{lang === 'fr' ? 'Mutualisé :' : 'Shared:'}</strong> {lang === 'fr' ? '5-20€/mois (performances limitées)' : '€5-20/month (limited performance)'}</li>
                <li><strong className="text-white">VPS :</strong> {lang === 'fr' ? '20-100€/mois selon ressources' : '€20-100/month depending on resources'}</li>
                <li><strong className="text-white">{lang === 'fr' ? 'Dédié :' : 'Dedicated:'}</strong> {lang === 'fr' ? '100-500€/mois pour trafic important' : '€100-500/month for high traffic'}</li>
              </ul>

              <p className="text-gray-300 mb-8 leading-relaxed">
                {lang === 'fr'
                  ? 'Pour un site avec 50 000 visiteurs/mois : Jamstack = 0-20€, Traditionnel = 50-150€. La différence s\'accentue avec le trafic.'
                  : 'For a site with 50,000 visitors/month: Jamstack = €0-20, Traditional = €50-150. The difference increases with traffic.'}
              </p>

              <h2 className="text-3xl font-bold text-primary-red mb-4 mt-12">
                {lang === 'fr' ? 'SEO : Qui gagne en 2025 ?' : 'SEO: Who wins in 2025?'}
              </h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                {lang === 'fr'
                  ? 'Google a clarifié sa position : la vitesse et les Core Web Vitals sont des facteurs de classement majeurs en 2025. Jamstack a un avantage naturel avec ses temps de chargement ultra-rapides et son excellent score mobile.'
                  : 'Google has clarified its position: speed and Core Web Vitals are major ranking factors in 2025. Jamstack has a natural advantage with its ultra-fast loading times and excellent mobile score.'}
              </p>
              <p className="text-gray-300 mb-6 leading-relaxed">
                {lang === 'fr'
                  ? 'Le SSG (Static Site Generation) garantit un HTML parfait pour les crawlers Google, sans JavaScript bloquant le rendu initial. L\'indexation est instantanée et complète.'
                  : 'SSG (Static Site Generation) guarantees perfect HTML for Google crawlers, without JavaScript blocking initial rendering. Indexing is instant and complete.'}
              </p>
              <p className="text-gray-300 mb-8 leading-relaxed">
                {lang === 'fr'
                  ? 'L\'architecture traditionnelle peut être compétitive avec une optimisation poussée (cache Varnish, CDN, lazy loading) mais nécessite plus d\'efforts et de maintenance pour atteindre les mêmes résultats.'
                  : 'Traditional architecture can be competitive with advanced optimization (Varnish cache, CDN, lazy loading) but requires more effort and maintenance to achieve the same results.'}
              </p>

              <h2 className="text-3xl font-bold text-primary-red mb-4 mt-12">
                {lang === 'fr' ? 'Cas d\'usage : Quand choisir quoi ?' : 'Use cases: When to choose what?'}
              </h2>
              
              <h3 className="text-2xl font-bold text-white mb-3 mt-8">
                {lang === 'fr' ? 'Jamstack est idéal pour :' : 'Jamstack is ideal for:'}
              </h3>
              <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
                <li>{lang === 'fr' ? 'Sites vitrines et portfolios (performance maximale)' : 'Showcase sites and portfolios (maximum performance)'}</li>
                <li>{lang === 'fr' ? 'Blogs et sites de contenu (excellent SEO)' : 'Blogs and content sites (excellent SEO)'}</li>
                <li>{lang === 'fr' ? 'Landing pages marketing (conversion optimisée)' : 'Marketing landing pages (optimized conversion)'}</li>
                <li>{lang === 'fr' ? 'E-commerce avec Shopify, Snipcart, Commerce.js' : 'E-commerce with Shopify, Snipcart, Commerce.js'}</li>
                <li>{lang === 'fr' ? 'Documentation technique (Docusaurus, VuePress)' : 'Technical documentation (Docusaurus, VuePress)'}</li>
                <li>{lang === 'fr' ? 'Sites d\'entreprise avec contenu semi-statique' : 'Corporate sites with semi-static content'}</li>
              </ul>

              <h3 className="text-2xl font-bold text-white mb-3 mt-8">
                {lang === 'fr' ? 'Architecture traditionnelle pour :' : 'Traditional architecture for:'}
              </h3>
              <ul className="list-disc list-inside text-gray-300 mb-8 space-y-2">
                <li>{lang === 'fr' ? 'Plateformes collaboratives (forums, réseaux sociaux)' : 'Collaborative platforms (forums, social networks)'}</li>
                <li>{lang === 'fr' ? 'Applications avec contenu temps réel (messagerie, chat)' : 'Applications with real-time content (messaging, chat)'}</li>
                <li>{lang === 'fr' ? 'Sites avec gestion utilisateurs complexe (dashboards, CRM)' : 'Sites with complex user management (dashboards, CRM)'}</li>
                <li>{lang === 'fr' ? 'E-commerce très personnalisé (recommandations temps réel)' : 'Highly personalized e-commerce (real-time recommendations)'}</li>
                <li>{lang === 'fr' ? 'Intranets avec authentification SSO complexe' : 'Intranets with complex SSO authentication)'}</li>
              </ul>

              <h2 className="text-3xl font-bold text-primary-red mb-4 mt-12">
                {lang === 'fr' ? 'Expérience développeur (DX)' : 'Developer Experience (DX)'}
              </h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                {lang === 'fr'
                  ? 'Jamstack offre une excellente DX : déploiements Git automatiques, preview branches pour chaque PR, rollback instantané, environnements de staging infinis. Netlify et Vercel ont révolutionné le workflow développeur.'
                  : 'Jamstack offers excellent DX: automatic Git deployments, preview branches for each PR, instant rollback, infinite staging environments. Netlify and Vercel have revolutionized developer workflow.'}
              </p>
              <p className="text-gray-300 mb-8 leading-relaxed">
                {lang === 'fr'
                  ? 'L\'architecture traditionnelle nécessite plus de configuration : serveurs de dev/staging/prod, déploiements manuels ou CI/CD complexe, gestion des bases de données multiples.'
                  : 'Traditional architecture requires more configuration: dev/staging/prod servers, manual or complex CI/CD deployments, multiple database management.'}
              </p>

              <h2 className="text-3xl font-bold text-primary-red mb-4 mt-12">
                {lang === 'fr' ? 'Limites du Jamstack' : 'Jamstack limitations'}
              </h2>
              <ul className="list-disc list-inside text-gray-300 mb-8 space-y-2">
                <li>{lang === 'fr' ? 'Temps de build pour très gros sites (>10 000 pages)' : 'Build time for very large sites (>10,000 pages)'}</li>
                <li>{lang === 'fr' ? 'Complexité pour contenu personnalisé temps réel' : 'Complexity for real-time personalized content'}</li>
                <li>{lang === 'fr' ? 'Courbe d\'apprentissage pour équipes WordPress habituées' : 'Learning curve for teams used to WordPress'}</li>
                <li>{lang === 'fr' ? 'Dépendance aux services tiers (APIs, CMS headless)' : 'Dependency on third-party services (APIs, headless CMS)'}</li>
              </ul>

              <h2 className="text-3xl font-bold text-primary-red mb-4 mt-12">
                {lang === 'fr' ? 'Conclusion' : 'Conclusion'}
              </h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                {lang === 'fr'
                  ? 'En 2025, Jamstack s\'impose comme le choix préférentiel pour 70-80% des nouveaux projets web. Les avantages en termes de performances, sécurité, coûts et SEO sont indéniables.'
                  : 'In 2025, Jamstack emerges as the preferred choice for 70-80% of new web projects. The advantages in terms of performance, security, costs and SEO are undeniable.'}
              </p>
              <p className="text-gray-300 mb-6 leading-relaxed">
                {lang === 'fr'
                  ? 'L\'architecture traditionnelle reste pertinente pour les applications complexes nécessitant une forte interactivité en temps réel, une personnalisation avancée ou une gestion utilisateur sophistiquée.'
                  : 'Traditional architecture remains relevant for complex applications requiring strong real-time interactivity, advanced personalization or sophisticated user management.'}
              </p>
              <p className="text-gray-300 mb-8 leading-relaxed">
                {lang === 'fr'
                  ? 'La tendance est à l\'hybridation : Next.js et Nuxt permettent de combiner SSG (Jamstack) et SSR (traditionnel) dans un même projet, offrant le meilleur des deux mondes.'
                  : 'The trend is towards hybridization: Next.js and Nuxt allow combining SSG (Jamstack) and SSR (traditional) in the same project, offering the best of both worlds.'}
              </p>

              <div className="bg-gradient-to-r from-primary-red/10 to-red-500/10 border border-primary-red/30 rounded-lg p-8 mt-12">
                <h3 className="text-2xl font-bold mb-4 text-white">
                  {lang === 'fr' ? 'Besoin d\'aide pour choisir votre architecture web ?' : 'Need help choosing your web architecture?'}
                </h3>
                <p className="text-gray-300 mb-6">
                  {lang === 'fr' ? 'Notre agence vous accompagne dans le choix et la mise en œuvre de la meilleure solution technique : Jamstack, traditionnel ou hybride selon vos besoins.' : 'Our agency supports you in choosing and implementing the best technical solution: Jamstack, traditional or hybrid according to your needs.'}
                </p>
                <a
                  href={lang === 'fr' ? '/index.html#contact' : '/en/index.html#contact'}
                  className="inline-block bg-primary-red px-8 py-3 rounded-lg hover:bg-red-700 transition font-semibold"
                >
                  {lang === 'fr' ? 'Discuter de votre projet' : 'Discuss your project'}
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
