import React, { useEffect } from 'react';
import { useLanguage } from '../LanguageContext';
import Navbar from './Navbar';
import Footer from './Footer';
import AnimatedBackground from './AnimatedBackground';
import SocialButtons from './SocialButtons';

export default function ArticleLayout({ children, title, date, category, image, excerpt }) {
  const { lang, t } = useLanguage();

  // Ajouter Schema.org pour SEO
  useEffect(() => {
    const schemaData = {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "headline": title,
      "image": image || "https://siteonweb.fr/images/og-image.png",
      "datePublished": date,
      "dateModified": date,
      "author": {
        "@type": "Organization",
        "name": "SiteOnWeb - Agence Web et Marketing Digital",
        "url": "https://siteonweb.fr"
      },
      "publisher": {
        "@type": "Organization",
        "name": "SiteOnWeb",
        "logo": {
          "@type": "ImageObject",
          "url": "https://siteonweb.fr/images/logo.svg"
        }
      },
      "description": excerpt || title,
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": window.location.href
      }
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(schemaData);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, [title, date, image, excerpt]);

  return (
    <>
      <SocialButtons />
      <AnimatedBackground />
      <Navbar />

      <main className="min-h-screen pt-24 pb-20">
        <article className="py-12 bg-transparent text-white">
          <div className="container mx-auto px-4 max-w-4xl">
            {/* Breadcrumb */}
            <nav className="mb-8">
              <a 
                href="/blog.html" 
                className="text-primary-red hover:underline inline-flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                {t('blog.backToBlog')}
              </a>
            </nav>

            {/* En-tête de l'article */}
            <header className="mb-12">
              {category && (
                <div className="mb-4">
                  <span className="bg-primary-red px-4 py-2 rounded-full text-sm font-semibold inline-block">
                    {category}
                  </span>
                </div>
              )}
              
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                {title}
              </h1>

              {date && (
                <div className="flex items-center gap-4 text-gray-400">
                  <time dateTime={date}>{date}</time>
                </div>
              )}

              {image && (
                <div className="mt-8 rounded-lg overflow-hidden">
                  <img 
                    src={image} 
                    alt={title}
                    className="w-full h-auto object-cover"
                  />
                </div>
              )}
            </header>

            {/* Contenu de l'article */}
            <div className="prose prose-invert prose-lg max-w-none">
              {children}
            </div>

            {/* CTA en bas d'article */}
            <div className="mt-16 pt-8 border-t border-gray-700">
              <div className="bg-gradient-to-r from-primary-red/10 to-red-500/10 border border-primary-red/30 rounded-lg p-8">
                <h3 className="text-2xl font-bold mb-4 text-white">
                  {t('blog.needWebsite')}
                </h3>
                <p className="text-gray-300 mb-6">
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
        </article>
      </main>

      <Footer />
    </>
  );
}
