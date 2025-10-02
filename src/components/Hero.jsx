import React from 'react';
import { useLanguage } from '../LanguageContext.jsx';

export default function Hero() {
  const { t } = useLanguage();
  const heroTitle = t('hero.title');
  const heroSubtitle = t('hero.subtitle');
  const heroDescription = t('hero.description');
  const heroTitleWidth = `calc(${Math.max(heroTitle.length, 1)}ch + 0.5ch)`;

  return (
    <section id="accueil" className="min-h-screen flex items-center justify-center relative z-10 px-4">
      <div className="container mx-auto text-center">
        <div className="animate-slide-up">
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold mb-4 sm:mb-6 hero-text leading-tight">

            <span className="typing-text typing-text--animate hero-text__content">
              {t('hero.title')}
            </span>
          </h1>
          <h2 className="text-xl sm:text-3xl md:text-4xl font-light mb-6 sm:mb-8 text-gray-300">
            {heroSubtitle}
          </h2>
          <p className="text-base sm:text-xl text-gray-400 max-w-3xl mx-auto mb-8 sm:mb-12 leading-relaxed px-4">
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
