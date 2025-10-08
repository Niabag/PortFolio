import React, { useEffect } from 'react';

export default function ServiceDetail({ service, onClose, onBooking }) {
  // Debug pour vérifier que onBooking est bien défini
  useEffect(() => {
    console.log('ServiceDetail mounted, onBooking:', typeof onBooking);
  }, [onBooking]);

  // Gestion du bouton retour du téléphone
  useEffect(() => {
    // Ajouter un état dans l'historique quand on ouvre la page de service
    window.history.pushState({ serviceDetail: true }, '');
    let historyPushed = true;
    let isClosing = false;

    const handlePopState = (event) => {
      // Ne pas fermer si on est déjà en train de fermer
      if (isClosing) return;
      
      // Ne pas fermer si c'est le booking qui gère son propre popstate
      if (event.state?.modal === 'booking') {
        console.log('Booking popstate detected, keeping ServiceDetail open');
        return;
      }
      
      // Si on appuie sur retour et qu'on n'est plus sur serviceDetail, fermer
      if (!event.state?.serviceDetail) {
        console.log('Closing ServiceDetail due to back button');
        isClosing = true;
        historyPushed = false;
        onClose();
      }
    };

    window.addEventListener('popstate', handlePopState);

    return () => {
      window.removeEventListener('popstate', handlePopState);
      // Nettoyer l'historique si la page se ferme autrement (bouton X, etc.)
      if (!isClosing && historyPushed && window.history.state?.serviceDetail) {
        window.history.back();
      }
    };
  }, [onClose]);

  const handleCloseClick = () => {
    // Retour en arrière dans l'historique avant de fermer
    if (window.history.state?.serviceDetail) {
      window.history.back();
    }
    onClose();
  };

  const handleBookingClick = () => {
    console.log('Button clicked, calling onBooking');
    if (onBooking) {
      onBooking();
    } else {
      console.error('onBooking is not defined!');
    }
  };

  return (
    <div className="fixed inset-0 min-h-screen bg-dark-bg text-white overflow-y-auto z-[9998]">
      {/* Header avec retour */}
      <div className="sticky top-0 z-50 bg-gray-900/95 backdrop-blur-sm border-b border-gray-800">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <button
            onClick={handleCloseClick}
            className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors group"
          >
            <svg className="w-6 h-6 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            <span className="font-semibold">Retour aux services</span>
          </button>
          
          <button
            onClick={handleBookingClick}
            className="bg-primary-red hover:bg-red-700 text-white px-6 py-2 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
          >
            Prendre rendez-vous
          </button>
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
              {service.iconImage ? (
                <img 
                  src={service.iconImage} 
                  alt={service.title}
                  className="w-24 h-24 mx-auto object-contain"
                />
              ) : (
                <span className="text-8xl">{service.icon}</span>
              )}
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              {service.title}
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
              {service.detailedDescription}
            </p>
          </div>
        </div>
      </div>

      {/* Services inclus */}
      <div className="py-16 bg-gray-900/50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
              <span className="text-primary-red">✓</span> Services inclus
            </h2>
            <p className="text-center text-gray-400 text-lg mb-12 max-w-3xl mx-auto">
              Découvrez tout ce que nous mettons en œuvre pour vous garantir des résultats concrets et durables.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {service.services.map((item, index) => (
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
      {service.benefits && (
        <div className="py-16">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                <span className="text-primary-red">★</span> Vos avantages
              </h2>
              <p className="text-center text-gray-400 text-lg mb-12 max-w-3xl mx-auto">
                Les bénéfices concrets que vous obtiendrez en nous confiant votre projet digital.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {service.benefits.map((benefit, index) => (
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
      {service.process && (
        <div className="py-16 bg-gray-900/50">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                <span className="text-primary-red">→</span> Notre processus
              </h2>
              <p className="text-center text-gray-400 text-lg mb-12 max-w-3xl mx-auto">
                Voici comment nous travaillons étape par étape pour transformer votre projet en succès. 
                Chaque phase est pensée pour vous offrir un résultat optimal.
              </p>
              <div className="space-y-6">
                {service.process.map((step, index) => (
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
              🚀 Lancez votre projet dès maintenant !
            </h2>
            <p className="text-xl text-gray-300 mb-4 leading-relaxed">
              Vous avez un projet en tête ? Parlons-en ensemble !
            </p>
            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
              Contactez-nous pour obtenir un devis gratuit et personnalisé. 
              Notre équipe d'experts vous répond sous 24h pour transformer vos idées en réalité digitale.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={handleBookingClick}
                className="inline-flex items-center justify-center gap-2 bg-primary-red hover:bg-red-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg shadow-primary-red/50"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Demander un devis gratuit
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
                Voir tous les services
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
