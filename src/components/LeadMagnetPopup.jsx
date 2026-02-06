import { useState, useEffect } from 'react';
import { useLanguage } from '../LanguageContext';

const LeadMagnetPopup = () => {
  const { lang } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    // Vérifier si le visiteur a déjà vu le popup (mémoire 7 jours)
    const hasSeenPopup = localStorage.getItem('hasSeenLeadMagnet');

    if (!hasSeenPopup) {
      // Afficher le popup après 30 secondes ou après scroll de 50%
      const timer = setTimeout(() => {
        if (!hasTriggered) {
          setIsVisible(true);
          setHasTriggered(true);
        }
      }, 30000); // 30 secondes

      const handleScroll = () => {
        const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
        if (scrollPercent > 50 && !hasSeenPopup && !hasTriggered) {
          setIsVisible(true);
          setHasTriggered(true);
          window.removeEventListener('scroll', handleScroll);
        }
      };

      window.addEventListener('scroll', handleScroll);

      return () => {
        clearTimeout(timer);
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    // Marquer comme vu pour ne plus afficher pendant 7 jours
    const expiryDate = new Date();
    expiryDate.setDate(expiryDate.getDate() + 7);
    localStorage.setItem('hasSeenLeadMagnet', expiryDate.toISOString());

    // Tracking GTM
    if (window.gtag) {
      window.gtag('event', 'lead_magnet_closed', {
        page_location: window.location.href
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    // Validation email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError(lang === 'fr' ? 'Email invalide' : 'Invalid email');
      return;
    }

    // Récupérer la clé API Web3Forms
    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY?.trim();

    if (accessKey) {
      // Envoyer l'email via Web3Forms
      try {
        const formData = new FormData();
        formData.append('access_key', accessKey);
        formData.append('subject', '💰 Nouveau téléchargement : Guide des Prix 2026');
        formData.append('email', 'contact@siteonweb.fr');
        formData.append('visitor_email', email);
        formData.append('message', `Nouveau lead magnet téléchargé !\n\nEmail: ${email}\nLead Magnet: Guide des Prix Site Web 2026\nDate: ${new Date().toLocaleString('fr-FR')}\nLangue: ${lang}`);

        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          body: formData
        });

        const data = await response.json();
        console.log('✅ Email envoyé à Web3Forms:', data.success ? 'Succès' : 'Échec');
      } catch (error) {
        console.error('❌ Erreur envoi Web3Forms:', error);
      }
    } else {
      console.warn('⚠️ Clé Web3Forms non configurée - email non envoyé');
    }

    // Tracking GTM
    if (window.gtag) {
      window.gtag('event', 'lead_magnet_submitted', {
        page_location: window.location.href,
        email_domain: email.split('@')[1]
      });
    }

    // Marquer comme soumis
    setIsSubmitted(true);
    localStorage.setItem('hasSeenLeadMagnet', new Date().toISOString());

    // Déclencher le téléchargement après 1 seconde
    setTimeout(() => {
      window.open('/guide-prix-site-web-2026.pdf', '_blank');
    }, 1000);
  };

  const translations = {
    fr: {
      title: '💰 Cadeau : Guide des Prix 2026',
      subtitle: 'Découvrez VRAIMENT combien coûte un site web (sans langue de bois)',
      benefits: [
        '✅ Grille tarifaire complète par type de site',
        '✅ Comparaison Agence vs Freelance vs Plateforme',
        '✅ Les 7 pièges à éviter absolument',
        '✅ ROI chiffré avec exemples réels'
      ],
      emailPlaceholder: 'Votre adresse email',
      ctaButton: 'Télécharger Gratuitement',
      successTitle: '🎉 Merci !',
      successMessage: 'Votre guide des prix est en cours de téléchargement...',
      successSubMessage: 'Vous allez recevoir également des devis transparents par email.',
      privacy: '🔒 Vos données sont protégées. Pas de spam.',
      closeButton: 'Non merci'
    },
    en: {
      title: '💰 Free Gift: Price Guide 2026',
      subtitle: 'Discover how much a website REALLY costs (no BS)',
      benefits: [
        '✅ Complete pricing grid by website type',
        '✅ Agency vs Freelance vs Platform comparison',
        '✅ 7 traps to avoid at all costs',
        '✅ ROI with real case studies'
      ],
      emailPlaceholder: 'Your email address',
      ctaButton: 'Download For Free',
      successTitle: '🎉 Thank You!',
      successMessage: 'Your price guide is downloading...',
      successSubMessage: 'You will also receive transparent quotes by email.',
      privacy: '🔒 Your data is protected. No spam.',
      closeButton: 'No thanks'
    }
  };

  const t = translations[lang];

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[10000] flex items-center justify-center p-4 animate-fadeIn">
      <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-primary-red/30 animate-slideUp">
        {/* Bouton fermer */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition text-2xl"
          aria-label="Close"
        >
          ×
        </button>

        {!isSubmitted ? (
          <>
            {/* En-tête */}
            <div className="text-center mb-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                {t.title}
              </h2>
              <p className="text-gray-300 text-sm sm:text-base">
                {t.subtitle}
              </p>
            </div>

            {/* Bénéfices */}
            <div className="mb-6 space-y-2">
              {t.benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-2">
                  <span className="text-green-400 text-sm sm:text-base">{benefit}</span>
                </div>
              ))}
            </div>

            {/* Formulaire */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t.emailPlaceholder}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary-red transition"
                  required
                />
                {error && (
                  <p className="text-red-400 text-sm mt-2">{error}</p>
                )}
              </div>

              <button
                type="submit"
                className="w-full bg-primary-red hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg transition transform hover:scale-105 shadow-lg"
              >
                {t.ctaButton}
              </button>

              <p className="text-gray-400 text-xs text-center">
                {t.privacy}
              </p>
            </form>

            {/* Bouton "Non merci" */}
            <button
              onClick={handleClose}
              className="w-full mt-4 text-gray-500 hover:text-gray-300 text-sm underline transition"
            >
              {t.closeButton}
            </button>
          </>
        ) : (
          <>
            {/* Message de succès */}
            <div className="text-center py-8">
              <div className="text-6xl mb-4">🎉</div>
              <h3 className="text-2xl font-bold text-white mb-3">
                {t.successTitle}
              </h3>
              <p className="text-gray-300 mb-2">
                {t.successMessage}
              </p>
              <p className="text-gray-400 text-sm">
                {t.successSubMessage}
              </p>
              <button
                onClick={handleClose}
                className="mt-6 bg-primary-red hover:bg-red-700 text-white font-semibold py-2 px-6 rounded-lg transition"
              >
                {lang === 'fr' ? 'Fermer' : 'Close'}
              </button>
            </div>
          </>
        )}
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }

        .animate-slideUp {
          animation: slideUp 0.4s ease-out;
        }
      `}</style>
    </div>
  );
};

export default LeadMagnetPopup;
