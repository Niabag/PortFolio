import React, { useState } from 'react';
import { useLanguage } from '../LanguageContext.jsx';

export default function Location() {
  const { lang } = useLanguage();
  const [mapActive, setMapActive] = useState(false);

  // Vue de la région Centre-Val de Loire
  const googleMapsUrl = `https://www.google.com/maps/embed/v1/view?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&center=47.5,1.5&zoom=8`;

  return (
    <section id="location" className="snap-section bg-black/50 relative z-20">
      <div className="container mx-auto px-6 sm:px-12 lg:px-16 xl:px-20 max-w-[1400px]">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-4 sm:mb-6 text-white">
          {lang === 'fr' ? (
            <>
              Où sommes-nous <span className="text-primary-red">situés ?</span>
            </>
          ) : (
            <>
              Where are we <span className="text-primary-red">located?</span>
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
                    {lang === 'fr' ? 'Région Centre-Val de Loire' : 'Centre-Val de Loire Region'}
                  </p>
                </div>
              </div>
            </div>

            <div 
              className="relative" 
              style={{ paddingBottom: '56.25%', height: 0 }}
              onClick={() => setMapActive(true)}
            >
              <iframe
                src={googleMapsUrl}
                className="absolute top-0 left-0 w-full h-full"
                style={{ border: 0, pointerEvents: mapActive ? 'auto' : 'none' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={lang === 'fr' ? 'Carte de notre emplacement' : 'Map of our location'}
              ></iframe>
              {!mapActive && (
                <div 
                  className="absolute inset-0 cursor-pointer group"
                  onClick={() => setMapActive(true)}
                >
                  <div className="absolute inset-0 bg-transparent group-hover:bg-black/10 transition-colors"></div>
                </div>
              )}
            </div>

            <div className="p-4 sm:p-6 bg-gradient-to-r from-transparent to-primary-red/10">
              <p className="text-gray-300 text-sm sm:text-base text-center">
                {lang === 'fr'
                  ? '🇫🇷 Nous travaillons avec toute la France, principalement en région Centre-Val de Loire'
                  : '🇫🇷 We work with all of France, mainly in the Centre-Val de Loire region'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
