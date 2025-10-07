import React from 'react';
import { useLanguage } from '../LanguageContext.jsx';

export default function Location() {
  const { lang } = useLanguage();

  // Vue du monde entier
  const googleMapsUrl = `https://www.google.com/maps/embed/v1/view?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&center=20,0&zoom=2`;

  return (
    <section id="location" className="py-12 sm:py-20 bg-black/50 relative z-20">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="text-3xl sm:text-5xl font-bold text-center mb-8 sm:mb-16 text-white">
          {lang === 'fr' ? (
            <>
              Avec qui <span className="text-primary-red">Travaillons-nous</span>
            </>
          ) : (
            <>
              Who We <span className="text-primary-red">Work With</span>
            </>
          )}
        </h2>

        <div className="max-w-5xl mx-auto">
          <div className="bg-card-bg rounded-xl overflow-hidden border border-gray-700 shadow-xl">
            <div className="p-4 sm:p-6 bg-gradient-to-r from-primary-red/10 to-transparent border-b border-gray-700">
              <div className="flex items-center space-x-3">
                <i className="fas fa-globe text-primary-red text-xl sm:text-2xl"></i>
                <div>
                  <p className="text-white font-bold text-base sm:text-lg">
                    {lang === 'fr' ? 'Notre portée' : 'Our Reach'}
                  </p>
                  <p className="text-gray-400 text-sm sm:text-base">
                    {lang === 'fr' ? 'Monde entier' : 'Worldwide'}
                  </p>
                </div>
              </div>
            </div>

            <div className="relative" style={{ paddingBottom: '56.25%', height: 0 }}>
              <iframe
                src={googleMapsUrl}
                className="absolute top-0 left-0 w-full h-full"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={lang === 'fr' ? 'Carte de notre emplacement' : 'Map of our location'}
              ></iframe>
            </div>

            <div className="p-4 sm:p-6 bg-gradient-to-r from-transparent to-primary-red/10">
              <p className="text-gray-300 text-sm sm:text-base text-center">
                {lang === 'fr'
                  ? '🌍 Nous collaborons avec des clients partout dans le monde'
                  : '🌍 We collaborate with clients worldwide'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
