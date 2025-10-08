import React from 'react';
import { useLanguage } from '../LanguageContext.jsx';

export default function Stats() {
  const { t } = useLanguage();

  const stats = [
    {
      number: '50+',
      label: t('stats.clients')
    },
    {
      number: '100%',
      label: t('stats.satisfaction')
    },
    {
      number: '24h',
      label: t('stats.response')
    }
  ];

  return (
    <section className="snap-section stats-section relative z-10 bg-gradient-to-b from-black/50 to-transparent overflow-hidden">
      <div className="container mx-auto px-8 sm:px-16 lg:px-24 xl:px-32 max-w-[1400px] flex items-center justify-center min-h-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
          {/* Statistiques */}
          <div className="grid grid-cols-3 gap-8 sm:gap-12">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-red mb-1 sm:mb-2">
                  {stat.number}
                </div>
                <div className="text-sm sm:text-base lg:text-lg text-gray-400 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Texte et CTA */}
          <div className="text-center lg:text-left">
            <p className="text-gray-400 text-sm sm:text-base mb-4">
              {t('stats.tagline')}
            </p>
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-4 sm:mb-5 leading-tight">
              {t('stats.title')}
            </h3>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-transparent border-2 border-primary-red text-primary-red px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold hover:bg-primary-red hover:text-white transition-all duration-300 transform hover:scale-105"
            >
              {t('stats.cta')}
              <svg 
                className="w-5 h-5" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M14 5l7 7m0 0l-7 7m7-7H3" 
                />
              </svg>
            </a>
          </div>
        </div>

        {/* Effet de fond */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-red opacity-5 blur-3xl rounded-full pointer-events-none"></div>
      </div>
    </section>
  );
}
