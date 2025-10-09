import React, { useState } from 'react';
import { useLanguage } from '../LanguageContext.jsx';

export default function Location() {
  const { lang } = useLanguage();
  const [mapActive, setMapActive] = useState(false);

  const googleMapsUrl = `https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=${encodeURIComponent('Centre-Val de Loire, France')}`;
  return (
    <section id="location" className="snap-section relative z-10">
      <div className="container mx-auto px-6 sm:px-12 lg:px-16 xl:px-20 max-w-[1400px]">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-4 sm:mb-6 text-white">
          {lang === 'fr' ? 'Où sommes-nous situés ?' : 'Where are we located?'}
        </h2>
        
        <div className="max-w-5xl mx-auto">
          <div className="bg-card-bg rounded-xl overflow-hidden border border-gray-700 shadow-2xl">
            <div className="p-4 sm:p-6 bg-gradient-to-r from-primary-red/10 to-transparent border-b border-gray-700">
              <div className="flex items-center space-x-3">
                <i className="fas fa-map-marker-alt text-primary-red text-xl sm:text-2xl"></i>
                <div>
                  <p className="text-white font-bold text-base sm:text-lg">
                    {lang === 'fr' ? 'Notre région' : 'Our Region'}
                  </p>
                  <p className="text-gray-400 text-sm sm:text-base">
                    {lang === 'fr' ? 'Centre-Val de Loire' : 'Centre-Val de-Loire'}
                  </p>
                </div>
              </div>
            </div>

            <div className="relative" style={{ paddingBottom: '56.25%', height: 0 }} onMouseEnter={() => setMapActive(true)} onMouseLeave={() => setMapActive(false)}>
              <iframe
                src={googleMapsUrl}
                className="absolute top-0 left-0 w-full h-full"
                style={{ border: 0, pointerEvents: mapActive ? 'auto' : 'none' }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={lang === 'fr' ? 'Carte de notre région' : 'Our region map'}
              ></iframe>
              {!mapActive && (
                <div className="absolute inset-0 flex items-center justify-center cursor-pointer bg-black/10 text-white text-sm sm:text-base font-semibold">
                  {lang === 'fr' ? 'Survolez pour interagir avec la carte' : 'Hover to interact with the map'}
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
