import React from 'react';
import { useLanguage } from '../LanguageContext.jsx';

export default function Hero() {
  const { t } = useLanguage();
  const heroTitle = t('hero.title');
  const heroSubtitle = t('hero.subtitle');
  const heroDescription = t('hero.description');


  return (
    <section id="accueil" className="snap-section relative z-10">
      <div className="container mx-auto text-center">
        <div className="animate-slide-up">

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
            <a
              href="#realisations"
              className="bg-primary-red px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold hover:bg-red-700 transition transform hover:scale-105"
            >
              {t('hero.viewProjects')}
            </a>
            <a
              href="#contact"
              className="border-2 border-primary-red px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold hover:bg-primary-red transition transform hover:scale-105"
            >
              {t('hero.contactMe')}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
