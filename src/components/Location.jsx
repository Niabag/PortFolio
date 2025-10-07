import React from 'react';
import { useLanguage } from '../LanguageContext.jsx';

export default function Location() {
  const { lang } = useLanguage();

  // Adresse à Blois centre-ville sans numéro
  const address = "Rue Denis Papin, 41000 Blois, France";
  const googleMapsUrl = `https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=${encodeURIComponent(address)}&zoom=15`;

  return (
    <section id="location" className="py-12 sm:py-20 bg-black/50 relative z-20">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="text-3xl sm:text-5xl font-bold text-center mb-8 sm:mb-16 text-white">
          {lang === 'fr' ? (
            <>
              Où <span className="text-primary-red">Sommes-nous</span>
            </>
          ) : (
            <>
              Where <span className="text-primary-red">We Are</span>
            </>
          )}
        </h2>

        <div className="max-w-5xl mx-auto">
          <div className="bg-card-bg rounded-xl overflow-hidden border border-gray-700 shadow-xl">
            <div className="p-4 sm:p-6 bg-gradient-to-r from-primary-red/10 to-transparent border-b border-gray-700">
              <div className="flex items-center space-x-3">
                <i className="fas fa-map-marker-alt text-primary-red text-xl sm:text-2xl"></i>
                <div>
                  <p className="text-white font-bold text-base sm:text-lg">
                    {lang === 'fr' ? 'Notre emplacement' : 'Our Location'}
                  </p>
                  <p className="text-gray-400 text-sm sm:text-base">
                    {lang === 'fr' ? 'Secteur de Blois, France' : 'Blois area, France'}
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
                  ? '📍 Nous sommes situés dans le secteur de Blois, en région Centre-Val de Loire'
                  : '📍 We are located in the Blois area, in the Centre-Val de Loire region'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
