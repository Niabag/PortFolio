import React from 'react';

export default function Hero() {
  return (
    <section id="accueil" className="min-h-screen flex items-center justify-center relative z-10 px-4">
      <div className="container mx-auto text-center">
        <div className="animate-slide-up">
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold mb-4 sm:mb-6 hero-text leading-tight">
            Développeur Web
          </h1>
          <h2 className="text-xl sm:text-3xl md:text-4xl font-light mb-6 sm:mb-8 text-gray-300">
            Fullstack Professionnel
          </h2>
          <p className="text-base sm:text-xl text-gray-400 max-w-3xl mx-auto mb-8 sm:mb-12 leading-relaxed px-4">
            Spécialisé dans la création de sites web performants et modernes. WordPress, React, Node.js,
            CMS personnalisés. Plus de 10 réalisations avec respect strict des deadlines.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
            <a
              href="#realisations"
              className="bg-primary-red px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold hover:bg-red-700 transition transform hover:scale-105"
            >
              Voir mes réalisations
            </a>
            <a
              href="#contact"
              className="border-2 border-primary-red px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold hover:bg-primary-red transition transform hover:scale-105"
            >
              Me contacter
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
