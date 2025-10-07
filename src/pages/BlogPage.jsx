import React, { useState, useMemo } from 'react';
import { useLanguage } from '../LanguageContext';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AnimatedBackground from '../components/AnimatedBackground';
import SocialButtons from '../components/SocialButtons';
import { getAllArticles, getCategories } from '../data/blogArticles';

export default function BlogPage() {
  const { lang, t } = useLanguage();
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const articlesPerPage = 6;

  const categories = getCategories(lang);
  const allArticles = getAllArticles(lang);

  // Filtrer les articles par catégorie
  const filteredArticles = useMemo(() => {
    if (selectedCategory === 'all') {
      return allArticles;
    }
    return allArticles.filter(article => article.category === selectedCategory);
  }, [allArticles, selectedCategory]);

  // Calculer les articles pour la page actuelle
  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = filteredArticles.slice(indexOfFirstArticle, indexOfLastArticle);
  const totalPages = Math.ceil(filteredArticles.length / articlesPerPage);

  // Gérer le changement de catégorie
  const handleCategoryChange = (categoryId) => {
    setSelectedCategory(categoryId);
    setCurrentPage(1);
  };

  // Gérer le changement de page
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <SocialButtons />
      <AnimatedBackground />
      <Navbar />

      <main className="min-h-screen pt-24 pb-20">
        <section className="py-20 bg-transparent text-white">
          <div className="container mx-auto px-4">
            {/* En-tête du blog */}
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                <span className="text-white">{t('blog.title.part1')}</span>{' '}
                <span className="text-primary-red">{t('blog.title.part2')}</span>
              </h1>
              <p className="text-gray-400 text-xl max-w-3xl mx-auto">
                {t('blog.subtitle')}
              </p>
            </div>

            {/* Filtres de catégories */}
            <div className="flex justify-center gap-4 mb-12 flex-wrap">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => handleCategoryChange(category.id)}
                  className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-primary-red text-white shadow-lg shadow-primary-red/50'
                      : 'bg-gray-800 text-gray-300 hover:bg-gray-700 border border-gray-700'
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>

            {/* Compteur d'articles */}
            <div className="text-center mb-8">
              <p className="text-gray-400">
                {filteredArticles.length} {lang === 'fr' ? 'article(s)' : 'article(s)'}
              </p>
            </div>

            {/* Grille d'articles */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-12">
              {currentArticles.map((article) => (
                <article
                  key={article.id}
                  className="bg-gray-800/50 backdrop-blur-sm rounded-lg overflow-hidden border border-gray-700 transition-all duration-300 hover:border-primary-red/50 hover:transform hover:scale-105 group"
                >
                  <a href={`/blog/${article.id}.html`} className="block">
                    {/* Image */}
                    <div className="relative h-48 overflow-hidden bg-gradient-to-br from-gray-800 via-gray-700 to-gray-900">
                      {article.image ? (
                        <img
                          src={article.image}
                          alt={article.title}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                          loading="lazy"
                          onError={(e) => {
                            e.target.style.display = 'none';
                          }}
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <svg className="w-16 h-16 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                        </div>
                      )}
                      <div className="absolute top-4 left-4 z-10">
                        <span className="bg-primary-red px-3 py-1 rounded-full text-sm font-semibold">
                          {article.categoryLabel}
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
                        {t('blog.readArticle')}
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

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center gap-2 mt-12">
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                    currentPage === 1
                      ? 'bg-gray-800 text-gray-600 cursor-not-allowed'
                      : 'bg-gray-800 text-white hover:bg-primary-red'
                  }`}
                >
                  {lang === 'fr' ? 'Précédent' : 'Previous'}
                </button>

                {[...Array(totalPages)].map((_, index) => {
                  const pageNumber = index + 1;
                  return (
                    <button
                      key={pageNumber}
                      onClick={() => handlePageChange(pageNumber)}
                      className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                        currentPage === pageNumber
                          ? 'bg-primary-red text-white'
                          : 'bg-gray-800 text-white hover:bg-gray-700'
                      }`}
                    >
                      {pageNumber}
                    </button>
                  );
                })}

                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                    currentPage === totalPages
                      ? 'bg-gray-800 text-gray-600 cursor-not-allowed'
                      : 'bg-gray-800 text-white hover:bg-primary-red'
                  }`}
                >
                  {lang === 'fr' ? 'Suivant' : 'Next'}
                </button>
              </div>
            )}

            {/* CTA */}
            <div className="mt-16 text-center">
              <div className="bg-gradient-to-r from-primary-red/10 to-red-500/10 border border-primary-red/30 rounded-lg p-8 max-w-2xl mx-auto">
                <h2 className="text-2xl font-bold mb-4">
                  {t('blog.needWebsite')}
                </h2>
                <p className="text-gray-400 mb-6">
                  {t('blog.agencySupport')}
                </p>
                <a
                  href="/index.html#contact"
                  className="inline-block bg-primary-red px-8 py-3 rounded-lg hover:bg-red-700 transition font-semibold"
                >
                  {t('blog.requestQuote')}
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
