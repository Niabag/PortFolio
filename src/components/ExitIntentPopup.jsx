import { useState, useEffect } from 'react';
import { useLanguage } from '../LanguageContext';

const ExitIntentPopup = () => {
  const { lang } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    // Vérifier si l'utilisateur a déjà vu le popup exit-intent
    const hasSeenExitIntent = localStorage.getItem('hasSeenExitIntent');

    if (hasSeenExitIntent) {
      setHasShown(true);
      return;
    }

    // Fonction pour détecter l'exit intent (mouvement souris vers le haut)
    const handleMouseLeave = (e) => {
      // Détecter si la souris sort par le haut de la page
      if (e.clientY <= 0 && !hasShown) {
        setIsVisible(true);
        setHasShown(true);

        // Marquer comme vu dans localStorage
        localStorage.setItem('hasSeenExitIntent', new Date().toISOString());

        // Tracking GTM
        if (window.gtag) {
          window.gtag('event', 'exit_intent_triggered', {
            page_location: window.location.href
          });
        }
      }
    };

    // Ajouter l'event listener après 5 secondes (pour éviter trigger immédiat)
    const timer = setTimeout(() => {
      document.addEventListener('mouseout', handleMouseLeave);
    }, 5000);

    return () => {
      clearTimeout(timer);
      document.removeEventListener('mouseout', handleMouseLeave);
    };
  }, [hasShown]);

  const handleClose = () => {
    setIsVisible(false);

    // Tracking GTM
    if (window.gtag) {
      window.gtag('event', 'exit_intent_closed', {
        page_location: window.location.href
      });
    }
  };

  const handleCTA = () => {
    // Tracking GTM
    if (window.gtag) {
      window.gtag('event', 'exit_intent_cta_click', {
        page_location: window.location.href,
        cta_type: 'audit_gratuit'
      });
    }

    // Rediriger vers la section contact
    window.location.href = '#contact';
    setIsVisible(false);
  };

  const translations = {
    fr: {
      title: '⏰ Attendez ! Ne partez pas sans votre audit gratuit',
      subtitle: 'Vous êtes à 1 clic de transformer votre présence en ligne',
      benefits: [
        {
          icon: '🎯',
          title: 'Audit Gratuit 15 min',
          description: 'Analyse personnalisée de votre projet'
        },
        {
          icon: '💰',
          title: 'Devis Gratuit 24h',
          description: 'Réponse détaillée sous 24 heures'
        },
        {
          icon: '🚀',
          title: 'Sans Engagement',
          description: 'Aucune obligation, juste des conseils'
        }
      ],
      urgency: '🔥 Offre limitée : 3 places disponibles ce mois-ci',
      ctaButton: 'Réserver Mon Audit Gratuit',
      secondaryCTA: 'Obtenir Mon Devis Maintenant',
      closeButton: 'Non, je préfère passer à côté de cette opportunité',
      guarantee: '✅ 100% Gratuit • ✅ Sans Engagement • ✅ Réponse Rapide'
    },
    en: {
      title: '⏰ Wait! Don\'t Leave Without Your Free Audit',
      subtitle: 'You\'re 1 click away from transforming your online presence',
      benefits: [
        {
          icon: '🎯',
          title: 'Free 15-min Audit',
          description: 'Personalized analysis of your project'
        },
        {
          icon: '💰',
          title: 'Free Quote in 24h',
          description: 'Detailed response within 24 hours'
        },
        {
          icon: '🚀',
          title: 'No Commitment',
          description: 'No obligation, just expert advice'
        }
      ],
      urgency: '🔥 Limited offer: 3 spots available this month',
      ctaButton: 'Book My Free Audit',
      secondaryCTA: 'Get My Quote Now',
      closeButton: 'No, I prefer to miss this opportunity',
      guarantee: '✅ 100% Free • ✅ No Commitment • ✅ Fast Response'
    }
  };

  const t = translations[lang];

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black/90 backdrop-blur-md z-[10001] flex items-center justify-center p-4 animate-fadeIn">
      <div className="relative bg-gradient-to-br from-gray-900 via-red-950/30 to-gray-900 rounded-2xl max-w-2xl w-full p-6 sm:p-10 shadow-2xl border-2 border-primary-red/40 animate-slideDown">

        {/* Badge urgence */}
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <div className="bg-primary-red px-6 py-2 rounded-full text-white font-bold text-sm shadow-lg animate-pulse">
            {t.urgency}
          </div>
        </div>

        {/* Bouton fermer */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition text-3xl font-light"
          aria-label="Close"
        >
          ×
        </button>

        {/* En-tête */}
        <div className="text-center mb-8 mt-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 leading-tight">
            {t.title}
          </h2>
          <p className="text-gray-300 text-base sm:text-lg">
            {t.subtitle}
          </p>
        </div>

        {/* Bénéfices */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          {t.benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-gray-800/50 p-4 rounded-lg border border-gray-700 hover:border-primary-red/50 transition text-center"
            >
              <div className="text-4xl mb-2">{benefit.icon}</div>
              <h3 className="text-white font-bold mb-1 text-sm sm:text-base">
                {benefit.title}
              </h3>
              <p className="text-gray-400 text-xs sm:text-sm">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div className="space-y-3 mb-4">
          {/* CTA Principal */}
          <button
            onClick={handleCTA}
            className="w-full bg-primary-red hover:bg-red-600 text-white font-bold py-4 px-6 rounded-lg transition transform hover:scale-105 shadow-lg text-base sm:text-lg"
          >
            {t.ctaButton} 🎯
          </button>

          {/* CTA Secondaire */}
          <a
            href="#contact"
            onClick={() => {
              if (window.gtag) {
                window.gtag('event', 'exit_intent_secondary_cta_click', {
                  page_location: window.location.href,
                  cta_type: 'devis'
                });
              }
              setIsVisible(false);
            }}
            className="block w-full bg-gray-800 hover:bg-gray-700 text-white font-semibold py-3 px-6 rounded-lg transition text-center border border-gray-600"
          >
            {t.secondaryCTA}
          </a>
        </div>

        {/* Garantie */}
        <p className="text-center text-green-400 text-sm font-semibold mb-3">
          {t.guarantee}
        </p>

        {/* Bouton "Non merci" discret */}
        <button
          onClick={handleClose}
          className="w-full text-gray-500 hover:text-gray-400 text-xs underline transition"
        >
          {t.closeButton}
        </button>

        {/* Social Proof (optionnel) */}
        <div className="mt-6 pt-6 border-t border-gray-700 flex items-center justify-center gap-8 text-center">
          <div>
            <div className="text-2xl font-bold text-primary-red">50+</div>
            <div className="text-gray-400 text-xs">
              {lang === 'fr' ? 'Clients Satisfaits' : 'Happy Clients'}
            </div>
          </div>
          <div>
            <div className="text-2xl font-bold text-primary-red">4.9/5</div>
            <div className="text-gray-400 text-xs">
              {lang === 'fr' ? 'Note Moyenne' : 'Average Rating'}
            </div>
          </div>
          <div>
            <div className="text-2xl font-bold text-primary-red">24h</div>
            <div className="text-gray-400 text-xs">
              {lang === 'fr' ? 'Temps de Réponse' : 'Response Time'}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }

        .animate-slideDown {
          animation: slideDown 0.4s ease-out;
        }
      `}</style>
    </div>
  );
};

export default ExitIntentPopup;
