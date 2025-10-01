import React from 'react';
import { useLanguage } from '../LanguageContext';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AnimatedBackground from '../components/AnimatedBackground';

export default function BlogPage() {
  const { lang } = useLanguage();

  const articles = [
    {
      id: 'wordpress-vs-react',
      title: lang === 'fr' 
        ? 'Comment choisir entre WordPress et React pour créer son site web ?' 
        : 'How to choose between WordPress and React for your website?',
      excerpt: lang === 'fr'
        ? 'Découvrez les avantages et limites de WordPress et React pour faire le meilleur choix selon vos besoins et votre budget.'
        : 'Discover the advantages and limitations of WordPress and React to make the best choice for your needs and budget.',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=500&fit=crop',
      date: '15 Mars 2025',
      category: lang === 'fr' ? 'Développement Web' : 'Web Development'
    },
    {
      id: 'cout-site-ecommerce',
      title: lang === 'fr'
        ? 'Combien coûte un site e-commerce en 2025 ? Décryptage complet'
        : 'How much does an e-commerce site cost in 2025? Complete breakdown',
      excerpt: lang === 'fr'
        ? 'Analyse détaillée des coûts de création d\'une boutique en ligne : de la solution simple aux projets sur mesure.'
        : 'Detailed analysis of the costs of creating an online store: from simple solutions to custom projects.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=500&fit=crop',
      date: '10 Mars 2025',
      category: lang === 'fr' ? 'E-commerce' : 'E-commerce'
    },
    {
      id: 'checklist-seo',
      title: lang === 'fr'
        ? 'Checklist SEO technique avant de lancer votre site web'
        : 'Technical SEO checklist before launching your website',
      excerpt: lang === 'fr'
        ? 'Tous les points essentiels à vérifier pour optimiser le référencement de votre site avant sa mise en ligne.'
        : 'All essential points to check to optimize your site\'s SEO before going live.',
      image: 'https://images.unsplash.com/photo-1432888622747-4eb9a8f2c293?w=800&h=500&fit=crop',
      date: '5 Mars 2025',
      category: 'SEO'
    },
    {
      id: 'erreurs-refonte',
      title: lang === 'fr'
        ? '5 erreurs fréquentes à éviter lors de la refonte d\'un site internet'
        : '5 common mistakes to avoid when redesigning a website',
      excerpt: lang === 'fr'
        ? 'Évitez les pièges courants lors de la refonte de votre site web et assurez le succès de votre projet.'
        : 'Avoid common pitfalls when redesigning your website and ensure the success of your project.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop',
      date: '1 Mars 2025',
      category: lang === 'fr' ? 'Refonte Web' : 'Web Redesign'
    },
    {
      id: 'site-responsive',
      title: lang === 'fr'
        ? 'Pourquoi un site web responsive est indispensable en 2025 ?'
        : 'Why is a responsive website essential in 2025?',
      excerpt: lang === 'fr'
        ? 'L\'importance d\'un site adapté aux mobiles et son impact sur le SEO et les conversions en 2025.'
        : 'The importance of a mobile-friendly site and its impact on SEO and conversions in 2025.',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=500&fit=crop',
      date: '25 Février 2025',
      category: lang === 'fr' ? 'Design Web' : 'Web Design'
    }
  ];

  return (
    <>
      <AnimatedBackground />
      <Navbar />
      
      <main className="min-h-screen pt-24 pb-20">
        <section className="py-20 bg-transparent text-white">
          <div className="container mx-auto px-4">
            {/* En-tête du blog */}
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                <span className="text-white">Notre</span> <span className="text-primary-red">Blog</span>
              </h1>
              <p className="text-gray-400 text-xl max-w-3xl mx-auto">
                {lang === 'fr'
                  ? 'Conseils, guides et actualités sur la création de sites web, le développement et le marketing digital'
                  : 'Tips, guides and news about web development, design and digital marketing'}
              </p>
            </div>

            {/* Grille d'articles */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {articles.map((article) => (
                <article
                  key={article.id}
                  className="bg-gray-800/50 backdrop-blur-sm rounded-lg overflow-hidden border border-gray-700 transition-all duration-300 hover:border-primary-red/50 hover:transform hover:scale-105 group"
                >
                  <a href={`/blog/${article.id}.html`} className="block">
                    {/* Image */}
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-primary-red px-3 py-1 rounded-full text-sm font-semibold">
                          {article.category}
                        </span>
                      </div>
                    </div>

                    {/* Contenu */}
                    <div className="p-6">
                      <div className="text-gray-400 text-sm mb-3">
                        {article.date}
                      </div>
                      <h2 className="text-xl font-bold mb-3 text-white group-hover:text-primary-red transition-colors">
                        {article.title}
                      </h2>
                      <p className="text-gray-400 mb-4 line-clamp-3">
                        {article.excerpt}
                      </p>
                      <div className="flex items-center text-primary-red font-semibold">
                        {lang === 'fr' ? 'Lire l\'article' : 'Read article'}
                        <svg
                          className="w-5 h-5 ml-2 transform group-hover:translate-x-2 transition-transform"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                          />
                        </svg>
                      </div>
                    </div>
                  </a>
                </article>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-16 text-center">
              <div className="bg-gradient-to-r from-primary-red/10 to-red-500/10 border border-primary-red/30 rounded-lg p-8 max-w-2xl mx-auto">
                <h2 className="text-2xl font-bold mb-4">
                  {lang === 'fr' ? 'Besoin d\'un site web professionnel ?' : 'Need a professional website?'}
                </h2>
                <p className="text-gray-400 mb-6">
                  {lang === 'fr'
                    ? 'Notre agence vous accompagne dans tous vos projets web : création, refonte, SEO et maintenance.'
                    : 'Our agency supports you in all your web projects: creation, redesign, SEO and maintenance.'}
                </p>
                <a
                  href="/index.html#contact"
                  className="inline-block bg-primary-red px-8 py-3 rounded-lg hover:bg-red-700 transition font-semibold"
                >
                  {lang === 'fr' ? 'Demander un devis gratuit' : 'Request a free quote'}
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
