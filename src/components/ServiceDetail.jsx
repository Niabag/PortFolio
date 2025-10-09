import React, { useEffect, useMemo } from 'react';
import { useLanguage } from '../LanguageContext';
import { translations } from '../data/translations';

export default function ServiceDetail({ service, onClose, onBooking }) {
  const { lang, setLang } = useLanguage();
  
  // Get the service in the current language by matching the index
  const currentService = useMemo(() => {
    if (!service) return null;
    
    // Find the index of the service in both languages
    const frList = translations.fr?.skills?.categories || [];
    const enList = translations.en?.skills?.categories || [];
    const currentList = translations[lang]?.skills?.categories || [];
    
    // Try to find the service index in French list
    let index = frList.findIndex(s => s.title === service.title);
    
    // If not found, try in English list
    if (index === -1) {
      index = enList.findIndex(s => s.title === service.title);
    }
    
    // Return the service at the same index in the current language
    return index !== -1 && currentList[index] ? currentList[index] : service;
  }, [service, lang]);
  // Gestion du bouton retour du téléphone
  useEffect(() => {
    // Ajouter un état dans l'historique quand on ouvre la page de service (éviter double push en StrictMode)
    if (!window.history.state || window.history.state.serviceDetail !== true) {
      window.history.pushState({ serviceDetail: true }, '');
    }

    const handlePopState = (event) => {
      if (event.state?.modal === 'booking') {
        return;
      }
      
      if (!event.state?.serviceDetail) {
        onClose();
      }
    };

    window.addEventListener('popstate', handlePopState);

    return () => {
      // Important: ne pas faire history.back() ici (StrictMode appelle les cleanups)
      window.removeEventListener('popstate', handlePopState);
    };
  }, [onClose]);

  const handleCloseClick = () => {
    // Si l'entrée serviceDetail est présente, revenir en arrière pour restaurer l'accueil
    if (window.history.state?.serviceDetail) {
      window.history.back();
    } else {
      onClose();
    }
  };

  const handleBookingClick = () => {
    if (onBooking) {
      onBooking();
    }
  };

  return (
    <div className="fixed inset-0 min-h-screen bg-dark-bg text-white overflow-y-auto z-[9998]">
      {/* Header avec retour */}
      <div className="sticky top-0 z-50 bg-gray-900/95 backdrop-blur-sm border-b border-gray-800">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <button
            onClick={handleCloseClick}
            className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors group"
          >
            <div className="w-8 h-8 bg-gradient-to-r from-primary-red to-red-500 rounded-lg flex items-center justify-center">
              <span className="text-white text-sm font-bold">&lt;/&gt;</span>
            </div>
            <span className="text-xl font-bold text-primary-red">SiteOnWeb</span>
            <svg className="w-6 h-6 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            <span className="font-semibold">{lang === 'fr' ? 'Retour aux services' : 'Back to services'}</span>
          </button>
          
          <div className="flex items-center gap-4">
            <select
              value={lang}
              onChange={(e) => setLang(e.target.value)}
              className="bg-black text-white border border-primary-red rounded px-3 py-2"
            >
              <option value="fr">Français</option>
              <option value="en">English</option>
            </select>
            
            <button
              onClick={handleBookingClick}
              className="bg-primary-red hover:bg-red-700 text-white px-6 py-2 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
            >
              <img src="/images/icons-competences/marketing.webp" alt="" className="w-5 h-5 object-contain" />
              {lang === 'fr' ? 'Prendre rendez-vous' : 'Book an appointment'}
            </button>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative bg-gradient-to-b from-gray-900 to-black py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary-red blur-3xl rounded-full"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-6">
              {currentService.iconImage ? (
                <img 
                  src={currentService.iconImage} 
                  alt={currentService.title}
                  className="w-24 h-24 mx-auto object-contain"
                />
              ) : (
                <span className="text-8xl">{currentService.icon}</span>
              )}
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              {currentService.title}
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
              {currentService.detailedDescription}
            </p>
          </div>
        </div>
      </div>

      {/* Services inclus */}
      <div className="py-16 bg-gray-900/50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
              <span className="text-primary-red">✓</span> {lang === 'fr' ? 'Services inclus' : 'Included services'}
            </h2>
            <p className="text-center text-gray-400 text-lg mb-12 max-w-3xl mx-auto">
              {lang === 'fr' ? 'Découvrez tout ce que nous mettons en œuvre pour vous garantir des résultats concrets et durables.' : 'Discover everything we implement to guarantee you concrete and lasting results.'}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {currentService.services.map((item, index) => (
                <div key={index} className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-primary-red transition-all duration-300 transform hover:scale-105">
                  <div className="flex items-start gap-4">
                    <span className="flex-shrink-0 w-8 h-8 bg-primary-red rounded-full flex items-center justify-center text-white font-bold">
                      {index + 1}
                    </span>
                    <p className="text-gray-300 text-lg pt-1">{item}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Avantages */}
      {currentService.benefits && (
        <div className="py-16">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                <span className="text-primary-red">★</span> {lang === 'fr' ? 'Vos avantages' : 'Your benefits'}
              </h2>
              <p className="text-center text-gray-400 text-lg mb-12 max-w-3xl mx-auto">
                {lang === 'fr' ? 'Les bénéfices concrets que vous obtiendrez en nous confiant votre projet digital.' : 'The concrete benefits you will get by entrusting us with your digital project.'}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {currentService.benefits.map((benefit, index) => (
                  <div key={index} className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 border border-gray-700 text-center hover:border-primary-red transition-all duration-300">
                    <div className="w-12 h-12 bg-primary-red rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-white text-2xl font-bold">✓</span>
                    </div>
                    <p className="text-gray-300 font-semibold">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Notre processus */}
      {currentService.process && (
        <div className="py-16 bg-gray-900/50">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                <span className="text-primary-red">→</span> {lang === 'fr' ? 'Notre processus' : 'Our process'}
              </h2>
              <p className="text-center text-gray-400 text-lg mb-12 max-w-3xl mx-auto">
                {lang === 'fr' ? 'Voici comment nous travaillons étape par étape pour transformer votre projet en succès. Chaque phase est pensée pour vous offrir un résultat optimal.' : 'Here is how we work step by step to transform your project into success. Each phase is designed to provide you with an optimal result.'}
              </p>
              <div className="space-y-6">
                {currentService.process.map((step, index) => (
                  <div key={index} className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl p-6 border border-gray-700 hover:border-primary-red transition-all duration-300">
                    <div className="flex items-start gap-6">
                      <span className="flex-shrink-0 w-12 h-12 bg-primary-red rounded-full flex items-center justify-center text-white text-xl font-bold">
                        {index + 1}
                      </span>
                      <div className="flex-1 pt-2">
                        <p className="text-gray-300 text-lg">{step}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CTA final */}
      <div className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-primary-red/20 to-primary-red/10 border-2 border-primary-red rounded-2xl p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {lang === 'fr' ? '🚀 Lancez votre projet dès maintenant !' : '🚀 Launch your project now!'}
            </h2>
            <p className="text-xl text-gray-300 mb-4 leading-relaxed">
              {lang === 'fr' ? 'Vous avez un projet en tête ? Parlons-en ensemble !' : 'Do you have a project in mind? Let\'s talk about it together!'}
            </p>
            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
              {lang === 'fr' ? 'Contactez-nous dès maintenant pour discuter de votre projet et obtenir un devis gratuit et personnalisé. Notre équipe d\'experts vous répond sous 24h pour transformer vos idées en réalité digitale.' : 'Contact us now to discuss your project and get a free personalized quote. Our team of experts will respond within 24 hours to transform your ideas into digital reality.'}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={handleBookingClick}
                className="inline-flex items-center justify-center gap-2 bg-primary-red hover:bg-red-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg shadow-primary-red/50"
              >
                <img src="/images/icons-competences/marketing.webp" alt="" className="w-6 h-6 object-contain" />
                {lang === 'fr' ? 'Demander un devis gratuit' : 'Request a free quote'}
              </button>
              <button
                onClick={() => {
                  handleCloseClick();
                  setTimeout(() => {
                    const servicesSection = document.querySelector('#competences');
                    if (servicesSection) {
                      servicesSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                  }, 100);
                }}
                className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300"
              >
                {lang === 'fr' ? 'Voir tous les services' : 'See all services'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
