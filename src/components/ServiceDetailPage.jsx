import React, { useMemo, useState } from 'react';
import { useLanguage } from '../LanguageContext.jsx';
import Footer from './Footer.jsx';
import AnimatedBackground from './AnimatedBackground.jsx';
import SocialButtons from './SocialButtons.jsx';
import Booking from './Booking.jsx';

// Reuse the content structure from translations
import { translations } from '../data/translations.js';

function getSlug(str) {
  return str
    .toLowerCase()
    .normalize('NFD').replace(/\p{Diacritic}/gu, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

// Simple navbar pour la page de service
function ServiceNavbar({ onBookingClick }) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-dark-bg/80 backdrop-blur-md border-b border-gray-800">
      <div className="container mx-auto px-6 sm:px-12 lg:px-20 xl:px-32">
        <div className="flex items-center justify-between h-20">
          <a 
            href="/" 
            className="flex items-center gap-2 text-white hover:text-primary-red transition-colors duration-300"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            <span className="font-semibold">Retour au site</span>
          </a>
          
          <button 
            onClick={onBookingClick}
            className="bg-primary-red hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
          >
            Prendre un rendez-vous
          </button>
        </div>
      </div>
    </nav>
  );
}

export default function ServiceDetailPage() {
  const { lang } = useLanguage();
  const params = new URLSearchParams(window.location.search);
  const slug = params.get('slug');
  const [showBooking, setShowBooking] = useState(false);

  const service = useMemo(() => {
    const list = translations[lang]?.skills?.categories || [];
    if (!slug) return null;
    return list.find(c => getSlug(c.title) === slug) || null;
  }, [lang, slug]);

  return (
    <>
      <SocialButtons />
      <AnimatedBackground />
      <ServiceNavbar onBookingClick={() => setShowBooking(true)} />
      
      <main className="min-h-screen pt-20">
        {!service ? (
          <section className="relative z-10 py-20">
            <div className="container mx-auto px-6 sm:px-12 lg:px-20 xl:px-32 max-w-[900px]">
              <div className="text-center">
                <h1 className="text-4xl font-bold mb-4">Service introuvable</h1>
                <p className="text-gray-400 text-lg mb-8">Vérifiez l'URL ou revenez aux services.</p>
                <a href="/#competences" className="inline-block bg-primary-red hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300">
                  Retour aux services
                </a>
              </div>
            </div>
          </section>
        ) : (
          <section className="relative z-10 py-12 sm:py-16">
            <div className="container mx-auto px-6 sm:px-12 lg:px-20 xl:px-32">
              <div className="max-w-[900px] mx-auto">
                {/* En-tête du service */}
                <div className="text-center mb-16">
                  <div className="mb-6">
                    {service.iconImage ? (
                      <img src={service.iconImage} alt={service.title} className="w-24 h-24 object-contain mx-auto" />
                    ) : (
                      <span className="text-7xl">{service.icon}</span>
                    )}
                  </div>
                  <h1 className="text-4xl sm:text-5xl font-bold mb-6">{service.title}</h1>
                  <p className="text-gray-300 text-xl leading-relaxed">{service.detailedDescription}</p>
                </div>

                {/* Services inclus */}
                <div className="mb-16">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-12 h-12 rounded-full bg-primary-red/10 flex items-center justify-center">
                      <span className="text-2xl text-primary-red">✓</span>
                    </div>
                    <h2 className="text-3xl font-bold">Services inclus</h2>
                  </div>
                  <p className="text-gray-400 mb-8 text-lg">Découvrez tout ce que nous mettons en place pour un résultat concret et mesurable.</p>
                  <div className="grid grid-cols-1 gap-4">
                    {service.services.map((s, i) => (
                      <div key={i} className="flex items-start gap-4 bg-gray-800/30 border border-gray-700/50 rounded-xl p-6 hover:border-primary-red/50 transition-colors duration-300">
                        <span className="text-primary-red text-xl mt-1 flex-shrink-0">▸</span>
                        <span className="text-gray-200 text-lg">{s}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Avantages */}
                {service.benefits && (
                  <div className="mb-16">
                    <div className="flex items-center gap-3 mb-8">
                      <div className="w-12 h-12 rounded-full bg-primary-red/10 flex items-center justify-center">
                        <span className="text-2xl text-primary-red">★</span>
                      </div>
                      <h2 className="text-3xl font-bold">Vos avantages</h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {service.benefits.map((b, i) => (
                        <div key={i} className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-xl p-6 hover:border-primary-red/50 transition-all duration-300">
                          <div className="w-12 h-12 rounded-full bg-primary-red text-white flex items-center justify-center mb-4 text-xl">✓</div>
                          <div className="text-gray-200 font-semibold text-lg">{b}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Processus */}
                {service.process && (
                  <div className="mb-16">
                    <div className="flex items-center gap-3 mb-8">
                      <div className="w-12 h-12 rounded-full bg-primary-red/10 flex items-center justify-center">
                        <span className="text-2xl text-primary-red">→</span>
                      </div>
                      <h2 className="text-3xl font-bold">Notre processus</h2>
                    </div>
                    <div className="space-y-4">
                      {service.process.map((p, i) => (
                        <div key={i} className="bg-gradient-to-r from-gray-800/40 to-gray-900/40 rounded-xl p-6 border border-gray-700/50 flex items-start gap-6 hover:border-primary-red/50 transition-all duration-300">
                          <div className="w-12 h-12 rounded-full bg-primary-red text-white flex items-center justify-center font-bold text-lg flex-shrink-0">{i+1}</div>
                          <div className="text-gray-200 text-lg pt-2">{p}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* CTA final */}
                <div className="bg-gradient-to-br from-primary-red/20 via-primary-red/10 to-transparent border-2 border-primary-red/50 rounded-2xl p-10 text-center">
                  <h3 className="text-3xl font-bold mb-4">Prêt à booster votre présence digitale ?</h3>
                  <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">Contactez-nous pour un devis gratuit et personnalisé. Réponse sous 24h.</p>
                  <a href="/#contact" className="inline-flex items-center gap-3 bg-primary-red hover:bg-red-700 text-white px-10 py-5 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105">
                    Nous contacter
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </section>
        )}
      </main>
      
      <Footer />
      {showBooking && <Booking onClose={() => setShowBooking(false)} />}
    </>
  );
}
