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
function ServiceNavbar({ onBookingClick, lang, setLang }) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-dark-bg/80 backdrop-blur-md border-b border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 xl:px-20">
        <div className="flex items-center justify-between h-16 sm:h-20 gap-2 sm:gap-4">
          {/* Logo et retour - responsive */}
          <a 
            href="/" 
            className="flex items-center gap-2 sm:gap-3 text-white hover:text-primary-red transition-colors duration-300 min-w-0"
          >
            <div className="w-7 h-7 sm:w-8 sm:h-8 bg-gradient-to-r from-primary-red to-red-500 rounded-lg flex items-center justify-center flex-shrink-0">
              <span className="text-white text-xs sm:text-sm font-bold">&lt;/&gt;</span>
            </div>
            <span className="text-base sm:text-xl font-bold text-primary-red whitespace-nowrap">SiteOnWeb</span>
            <svg className="w-4 h-4 sm:w-5 sm:h-5 hidden sm:block flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            <span className="font-semibold text-sm sm:text-base hidden md:inline">{lang === 'fr' ? 'Retour' : 'Back'}</span>
          </a>
          
          {/* Actions - responsive */}
          <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
            {/* Sélecteur de langue compact */}
            <select
              value={lang}
              onChange={(e) => setLang(e.target.value)}
              className="bg-black text-white border border-primary-red rounded px-2 py-1.5 sm:px-3 sm:py-2 text-xs sm:text-sm"
              aria-label="Langue"
            >
              <option value="fr">FR</option>
              <option value="en">EN</option>
            </select>
            
            {/* Bouton rendez-vous responsive */}
            <button 
              onClick={onBookingClick}
              className="bg-primary-red hover:bg-red-700 text-white px-3 py-2 sm:px-4 sm:py-2.5 md:px-6 md:py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm md:text-base whitespace-nowrap"
              aria-label={lang === 'fr' ? 'Prendre un rendez-vous' : 'Book an appointment'}
            >
              <img src="/images/icons-competences/marketing.webp" alt="" className="w-4 h-4 sm:w-5 sm:h-5 object-contain flex-shrink-0" />
              <span className="hidden sm:inline">{lang === 'fr' ? 'Rendez-vous' : 'Appointment'}</span>
              <span className="sm:hidden">RDV</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default function ServiceDetailPage() {
  const { lang, setLang } = useLanguage();
  const [showBooking, setShowBooking] = useState(false);
  
  // Extract slug from URL - support both /services/:slug and /service.html?slug=:slug
  const slug = useMemo(() => {
    // First try query parameter
    const params = new URLSearchParams(window.location.search);
    const querySlug = params.get('slug');
    if (querySlug) return querySlug;
    
    // Then try pathname /services/:slug
    const pathMatch = window.location.pathname.match(/\/services\/([^\/]+)/);
    if (pathMatch && pathMatch[1]) {
      return pathMatch[1];
    }
    
    return null;
  }, []);

  const service = useMemo(() => {
    const currentList = translations[lang]?.skills?.categories || [];
    if (!slug) return null;
    
    // First try to find in current language
    let found = currentList.find(c => getSlug(c.title) === slug);
    
    // If not found, try to find in both languages and get the corresponding service by index
    if (!found) {
      const frList = translations.fr?.skills?.categories || [];
      const enList = translations.en?.skills?.categories || [];
      
      const frIndex = frList.findIndex(c => getSlug(c.title) === slug);
      const enIndex = enList.findIndex(c => getSlug(c.title) === slug);
      
      if (frIndex !== -1 && currentList[frIndex]) {
        found = currentList[frIndex];
      } else if (enIndex !== -1 && currentList[enIndex]) {
        found = currentList[enIndex];
      }
    }
    
    return found || null;
  }, [lang, slug]);

  return (
    <>
      <SocialButtons />
      <AnimatedBackground />
      <ServiceNavbar onBookingClick={() => setShowBooking(true)} lang={lang} setLang={setLang} />
      
      <main className="min-h-screen pt-16 sm:pt-20">
        {!service ? (
          <section className="relative z-10 py-12 sm:py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-12 xl:px-20 max-w-[900px]">
              <div className="text-center">
                <h1 className="text-3xl sm:text-4xl font-bold mb-4">{lang === 'fr' ? 'Service introuvable' : 'Service not found'}</h1>
                <p className="text-gray-400 text-base sm:text-lg mb-8">{lang === 'fr' ? 'Vérifiez l\'URL ou revenez aux services.' : 'Check the URL or return to services.'}</p>
                <a href="/#competences" className="inline-flex items-center justify-center w-full sm:w-auto bg-primary-red hover:bg-red-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold transition-all duration-300">
                  {lang === 'fr' ? 'Retour aux services' : 'Back to services'}
                </a>
              </div>
            </div>
          </section>
        ) : (
          <section className="relative z-10 py-8 sm:py-12 md:py-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-12 xl:px-20">
              <div className="max-w-[900px] mx-auto">
                {/* En-tête du service */}
                <div className="text-center mb-12 sm:mb-16">
                  <div className="mb-4 sm:mb-6">
                    {service.iconImage ? (
                      <img src={service.iconImage} alt={service.title} className="w-20 h-20 sm:w-24 sm:h-24 object-contain mx-auto" />
                    ) : (
                      <span className="text-5xl sm:text-6xl md:text-7xl">{service.icon}</span>
                    )}
                  </div>
                  <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 px-2">{service.title}</h1>
                  <p className="text-gray-300 text-base sm:text-lg md:text-xl leading-relaxed px-2">{service.detailedDescription}</p>
                </div>

                {/* Services inclus */}
                <div className="mb-12 sm:mb-16">
                  <div className="flex items-center gap-2 sm:gap-3 mb-6 sm:mb-8">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary-red/10 flex items-center justify-center flex-shrink-0">
                      <span className="text-xl sm:text-2xl text-primary-red">✓</span>
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-bold">{lang === 'fr' ? 'Services inclus' : 'Included services'}</h2>
                  </div>
                  <p className="text-gray-400 mb-6 sm:mb-8 text-base sm:text-lg">{lang === 'fr' ? 'Découvrez tout ce que nous mettons en place pour un résultat concret et mesurable.' : 'Discover everything we put in place for concrete and measurable results.'}</p>
                  <div className="grid grid-cols-1 gap-3 sm:gap-4">
                    {service.services.map((s, i) => (
                      <div key={i} className="flex items-start gap-3 sm:gap-4 bg-gray-800/30 border border-gray-700/50 rounded-xl p-4 sm:p-6 hover:border-primary-red/50 transition-colors duration-300">
                        <span className="text-primary-red text-lg sm:text-xl mt-0.5 sm:mt-1 flex-shrink-0">▸</span>
                        <span className="text-gray-200 text-base sm:text-lg">{s}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Avantages */}
                {service.benefits && (
                  <div className="mb-12 sm:mb-16">
                    <div className="flex items-center gap-2 sm:gap-3 mb-6 sm:mb-8">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary-red/10 flex items-center justify-center flex-shrink-0">
                        <span className="text-xl sm:text-2xl text-primary-red">★</span>
                      </div>
                      <h2 className="text-2xl sm:text-3xl font-bold">{lang === 'fr' ? 'Vos avantages' : 'Your benefits'}</h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                      {service.benefits.map((b, i) => (
                        <div key={i} className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-xl p-5 sm:p-6 hover:border-primary-red/50 transition-all duration-300">
                          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary-red text-white flex items-center justify-center mb-3 sm:mb-4 text-lg sm:text-xl">✓</div>
                          <div className="text-gray-200 font-semibold text-base sm:text-lg">{b}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Processus */}
                {service.process && (
                  <div className="mb-12 sm:mb-16">
                    <div className="flex items-center gap-2 sm:gap-3 mb-6 sm:mb-8">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary-red/10 flex items-center justify-center flex-shrink-0">
                        <span className="text-xl sm:text-2xl text-primary-red">→</span>
                      </div>
                      <h2 className="text-2xl sm:text-3xl font-bold">{lang === 'fr' ? 'Notre processus' : 'Our process'}</h2>
                    </div>
                    <div className="space-y-3 sm:space-y-4">
                      {service.process.map((p, i) => (
                        <div key={i} className="bg-gradient-to-r from-gray-800/40 to-gray-900/40 rounded-xl p-4 sm:p-6 border border-gray-700/50 flex items-start gap-4 sm:gap-6 hover:border-primary-red/50 transition-all duration-300">
                          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary-red text-white flex items-center justify-center font-bold text-base sm:text-lg flex-shrink-0">{i+1}</div>
                          <div className="text-gray-200 text-base sm:text-lg pt-1 sm:pt-2">{p}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* CTA final */}
                <div className="bg-gradient-to-br from-primary-red/20 via-primary-red/10 to-transparent border-2 border-primary-red/50 rounded-2xl p-6 sm:p-8 md:p-10 text-center">
                  <h3 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">{lang === 'fr' ? 'Prêt à booster votre présence digitale ?' : 'Ready to boost your digital presence?'}</h3>
                  <p className="text-gray-300 text-base sm:text-lg mb-6 sm:mb-8 max-w-2xl mx-auto">{lang === 'fr' ? 'Contactez-nous pour un devis gratuit et personnalisé. Réponse sous 24h.' : 'Contact us for a free and personalized quote. Response within 24h.'}</p>
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
                    <a 
                      href="/#contact" 
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 sm:gap-3 bg-primary-red hover:bg-red-700 text-white px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 rounded-xl font-semibold text-base sm:text-lg transition-all duration-300 transform hover:scale-105"
                    >
                      {lang === 'fr' ? 'Nous contacter' : 'Contact us'}
                      <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </a>
                    <button 
                      onClick={() => setShowBooking(true)}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gray-800 hover:bg-gray-700 border border-primary-red/50 hover:border-primary-red text-white px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 rounded-xl font-semibold text-base sm:text-lg transition-all duration-300"
                    >
                      <img src="/images/icons-competences/marketing.webp" alt="" className="w-4 h-4 sm:w-5 sm:h-5 object-contain" />
                      {lang === 'fr' ? 'Prendre rendez-vous' : 'Book appointment'}
                    </button>
                  </div>
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
