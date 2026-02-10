import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { useLanguage } from '../LanguageContext.jsx';
import PriceCalculator from './PriceCalculator.jsx';
import SEOAuditQuiz from './SEOAuditQuiz.jsx';

export default function Hero() {
  const { t, lang } = useLanguage();
  const [showCalculator, setShowCalculator] = useState(false);
  const [showSEOQuiz, setShowSEOQuiz] = useState(false);

  const heroTitle = t('hero.title');
  const heroSubtitle = t('hero.subtitle');
  const heroDescription = t('hero.description');


  return (
    <section id="accueil" className="snap-section relative z-10 pt-20 sm:pt-36">
      <div className="container mx-auto text-center">
        <div className="animate-slide-up">

          <div className="flex justify-center mb-4 sm:mb-6">
            <picture>
              <source srcSet="/images/newlogo.webp" type="image/webp" />
              <img src="/images/newlogo.png" alt="SiteOnWeb" className="w-32 h-32 sm:w-48 sm:h-48 md:w-56 md:h-56 object-contain" fetchpriority="high" decoding="async" />
            </picture>
          </div>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-3 sm:mb-4 leading-tight">
            <span className="typing-text typing-text--animate typing-text--hero">
              <span className="typing-text__inner hero-text__content">{heroTitle}</span>

            </span>
          </h1>
          <h2 className="text-lg sm:text-2xl md:text-3xl font-light mb-4 sm:mb-5 text-gray-300">
            {heroSubtitle}
          </h2>
          <p className="text-sm sm:text-base text-gray-400 max-w-3xl mx-auto mb-6 sm:mb-8 leading-relaxed px-4">
            {heroDescription}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
            <button
              onClick={() => {
                // Tracking GTM - Calculator opened
                if (window.dataLayer) {
                  window.dataLayer.push({
                    event: 'calculator_opened',
                    page_location: window.location.href
                  });
                }
                setShowCalculator(true);
              }}
              className="bg-gradient-to-r from-primary-red to-red-600 px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold hover:from-red-700 hover:to-red-800 transition transform hover:scale-105 shadow-lg"
            >
              💰 {lang === 'fr' ? 'Estimez votre site' : 'Estimate Your Site'}
            </button>
            <button
              onClick={() => {
                // Tracking GTM - SEO Quiz started
                if (window.dataLayer) {
                  window.dataLayer.push({
                    event: 'seo_quiz_opened',
                    page_location: window.location.href
                  });
                }
                setShowSEOQuiz(true);
              }}
              className="bg-gradient-to-r from-blue-600 to-blue-700 px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition transform hover:scale-105 shadow-lg"
            >
              🔍 {lang === 'fr' ? 'Audit SEO gratuit' : 'Free SEO Audit'}
            </button>
            <a
              href="#realisations"
              className="border-2 border-primary-red px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold hover:bg-primary-red transition transform hover:scale-105"
            >
              {t('hero.viewProjects')}
            </a>
          </div>
        </div>
      </div>

      {/* Calculateur de Prix - Rendu via Portal */}
      {showCalculator && createPortal(
        <PriceCalculator onClose={() => setShowCalculator(false)} />,
        document.body
      )}

      {/* Quiz Audit SEO - Rendu via Portal */}
      {showSEOQuiz && createPortal(
        <SEOAuditQuiz onClose={() => setShowSEOQuiz(false)} />,
        document.body
      )}
    </section>
  );
}
