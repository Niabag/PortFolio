# 💻 Exemples de Code - Composants à Créer

> **Exemples de code prêts à l'emploi pour les principaux composants**

---

## 📋 Table des Matières

1. [Boutons Flottants Intelligents](#boutons-flottants-intelligents)
2. [Composant Témoignages](#composant-témoignages)
3. [Popup Exit-Intent](#popup-exit-intent)
4. [Calculateur de Prix](#calculateur-de-prix)
5. [CTAs Contextuels Blog](#ctas-contextuels-blog)
6. [Section Social Proof](#section-social-proof)
7. [Événements GTM](#événements-gtm)

---

## 🔘 Boutons Flottants Intelligents

### `src/components/FloatingButtons.jsx`

```jsx
import React, { useState, useEffect } from 'react';
import { FaWhatsapp, FaComments } from 'react-icons/fa';

const FloatingButtons = () => {
  const [activeButton, setActiveButton] = useState('whatsapp');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Logique intelligente pour afficher le bon bouton
    const determineButton = () => {
      const timeOnPage = performance.now() / 1000; // secondes
      const isMobile = window.innerWidth < 768;
      const isNewVisitor = !localStorage.getItem('returning_visitor');
      const scrollDepth = (window.scrollY / document.body.scrollHeight) * 100;

      // Visiteur nouveau + < 30 secondes → Chat
      if (isNewVisitor && timeOnPage < 30) {
        setActiveButton('tawk');
      }
      // Mobile ou scroll > 50% → WhatsApp
      else if (isMobile || scrollDepth > 50) {
        setActiveButton('whatsapp');
      }
      // Pendant heures de bureau → Booking
      else {
        const hour = new Date().getHours();
        if (hour >= 9 && hour <= 17) {
          setActiveButton('booking');
        } else {
          setActiveButton('whatsapp');
        }
      }
    };

    // Afficher après 5 secondes
    const timer = setTimeout(() => {
      setIsVisible(true);
      determineButton();
    }, 5000);

    // Réévaluer toutes les 10 secondes
    const interval = setInterval(determineButton, 10000);

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, []);

  const handleWhatsAppClick = () => {
    // Tracking GTM
    if (window.gtag) {
      window.gtag('event', 'whatsapp_click', {
        button_location: 'floating',
        page_location: window.location.href
      });
    }

    const message = encodeURIComponent(
      "Bonjour, je souhaite discuter d'un projet web."
    );
    window.open(`https://wa.me/33648456937?text=${message}`, '_blank');
  };

  const handleTawkClick = () => {
    // Tracking GTM
    if (window.gtag) {
      window.gtag('event', 'chat_click', {
        button_location: 'floating',
        page_location: window.location.href
      });
    }

    // Ouvrir Tawk.to
    if (window.Tawk_API) {
      window.Tawk_API.maximize();
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      {activeButton === 'whatsapp' && (
        <button
          onClick={handleWhatsAppClick}
          className="group relative bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 animate-pulse-slow"
          aria-label="Contact WhatsApp"
        >
          <FaWhatsapp className="text-3xl" />

          {/* Tooltip */}
          <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white text-sm px-3 py-2 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            Discutons de votre projet 📱
          </span>
        </button>
      )}

      {activeButton === 'tawk' && (
        <button
          onClick={handleTawkClick}
          className="group relative bg-blue-500 hover:bg-blue-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
          aria-label="Chat en direct"
        >
          <FaComments className="text-3xl" />

          {/* Tooltip */}
          <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white text-sm px-3 py-2 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            Une question ? Je réponds en 2 min 💬
          </span>
        </button>
      )}
    </div>
  );
};

export default FloatingButtons;
```

### CSS additionnel (si nécessaire)

```css
/* src/index.css ou styles.css */

@keyframes pulse-slow {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
}

.animate-pulse-slow {
  animation: pulse-slow 2s ease-in-out infinite;
}
```

---

## ⭐ Composant Témoignages

### `src/components/Testimonials.jsx`

```jsx
import React, { useState } from 'react';
import { FaStar, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sophie Martin",
      company: "Boutique Bio Nature",
      role: "Fondatrice",
      image: "/images/testimonials/sophie.jpg", // À ajouter
      rating: 5,
      text: "SiteOnWeb a transformé notre présence en ligne. Notre site e-commerce a généré +150% de ventes en 3 mois ! L'équipe est professionnelle et réactive.",
      project: "Site E-commerce + SEO",
      result: "+150% de ventes"
    },
    {
      id: 2,
      name: "Thomas Dubois",
      company: "Cabinet Avocat TD",
      role: "Avocat",
      image: "/images/testimonials/thomas.jpg",
      rating: 5,
      text: "Site professionnel livré en 3 semaines. Design moderne, rapide et optimisé. Je reçois maintenant 10+ demandes par mois via le formulaire de contact.",
      project: "Site Vitrine + Booking",
      result: "10+ leads/mois"
    },
    {
      id: 3,
      name: "Marie Lefebvre",
      company: "Restaurant Le Gourmet",
      role: "Gérante",
      image: "/images/testimonials/marie.jpg",
      rating: 5,
      text: "Le système de réservation en ligne a changé notre façon de travailler. Fini les appels téléphoniques manqués ! Très satisfaite du résultat.",
      project: "Site + Réservation en ligne",
      result: "Gain de temps énorme"
    },
    {
      id: 4,
      name: "Pierre Rousseau",
      company: "Agence Immobilière PR",
      role: "Directeur",
      image: "/images/testimonials/pierre.jpg",
      rating: 5,
      text: "Notre référencement a explosé grâce au travail SEO de SiteOnWeb. Nous sommes maintenant en première page Google sur nos mots-clés principaux.",
      project: "Refonte site + SEO",
      result: "1ère page Google"
    },
    {
      id: 5,
      name: "Nathalie Blanc",
      company: "Naturopathe",
      role: "Praticienne",
      image: "/images/testimonials/nathalie.jpg",
      rating: 5,
      text: "Site élégant, facile à mettre à jour, et qui convertit ! J'ai triplé mes prises de rendez-vous depuis le lancement. Merci beaucoup !",
      project: "Site WordPress + Blog",
      result: "3x plus de RDV"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50" id="testimonials">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* En-tête */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            💼 Ils Nous Ont Fait Confiance
          </h2>
          <p className="text-xl text-gray-600">
            Découvrez ce que nos clients disent de leur expérience
          </p>

          {/* Stats rapides */}
          <div className="flex justify-center gap-8 mt-8 flex-wrap">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">50+</div>
              <div className="text-sm text-gray-600">Clients satisfaits</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">4.9/5</div>
              <div className="text-sm text-gray-600">Note moyenne</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">100+</div>
              <div className="text-sm text-gray-600">Projets livrés</div>
            </div>
          </div>
        </div>

        {/* Carousel de témoignages */}
        <div className="relative bg-white rounded-2xl shadow-xl p-8 md:p-12">
          {/* Étoiles */}
          <div className="flex justify-center mb-6">
            {[...Array(currentTestimonial.rating)].map((_, i) => (
              <FaStar key={i} className="text-yellow-400 text-2xl mx-1" />
            ))}
          </div>

          {/* Texte du témoignage */}
          <blockquote className="text-xl text-gray-700 text-center mb-8 italic leading-relaxed">
            "{currentTestimonial.text}"
          </blockquote>

          {/* Résultat mis en avant */}
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-8 text-center">
            <p className="text-lg font-semibold text-blue-700">
              📊 Résultat : {currentTestimonial.result}
            </p>
          </div>

          {/* Auteur */}
          <div className="flex items-center justify-center gap-4">
            <img
              src={currentTestimonial.image}
              alt={currentTestimonial.name}
              className="w-16 h-16 rounded-full object-cover"
              onError={(e) => {
                e.target.src = 'https://via.placeholder.com/64?text=Client';
              }}
            />
            <div className="text-left">
              <div className="font-bold text-lg text-gray-800">
                {currentTestimonial.name}
              </div>
              <div className="text-gray-600">
                {currentTestimonial.role} - {currentTestimonial.company}
              </div>
              <div className="text-sm text-blue-600 mt-1">
                Projet : {currentTestimonial.project}
              </div>
            </div>
          </div>

          {/* Boutons de navigation */}
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={prevTestimonial}
              className="bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-full transition-colors"
              aria-label="Témoignage précédent"
            >
              <FaChevronLeft />
            </button>
            <button
              onClick={nextTestimonial}
              className="bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-full transition-colors"
              aria-label="Témoignage suivant"
            >
              <FaChevronRight />
            </button>
          </div>

          {/* Indicateurs */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-blue-600' : 'bg-gray-300'
                }`}
                aria-label={`Aller au témoignage ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* CTA après témoignages */}
        <div className="text-center mt-12">
          <p className="text-lg text-gray-700 mb-6">
            Rejoignez nos clients satisfaits et transformez votre présence en ligne
          </p>
          <a
            href="#contact"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors"
            onClick={() => {
              if (window.gtag) {
                window.gtag('event', 'cta_click', {
                  cta_location: 'testimonials',
                  cta_text: 'Recevez votre devis en 24h'
                });
              }
            }}
          >
            🚀 Recevez votre devis en 24h
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
```

---

## 🚪 Popup Exit-Intent

### `src/components/ExitIntentPopup.jsx`

```jsx
import React, { useState, useEffect } from 'react';
import { FaTimes } from 'react-icons/fa';

const ExitIntentPopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    // Ne pas afficher si déjà vu dans les 7 derniers jours
    const lastShown = localStorage.getItem('exit_popup_shown');
    if (lastShown) {
      const daysSince = (Date.now() - parseInt(lastShown)) / (1000 * 60 * 60 * 24);
      if (daysSince < 7) return;
    }

    // Détecter l'intention de sortie
    const handleMouseLeave = (e) => {
      // Si la souris sort par le haut de la page
      if (e.clientY <= 0 && !isVisible) {
        setIsVisible(true);
        localStorage.setItem('exit_popup_shown', Date.now().toString());

        // Tracking GTM
        if (window.gtag) {
          window.gtag('event', 'popup_shown', {
            popup_type: 'exit_intent',
            page_location: window.location.href
          });
        }
      }
    };

    // Attendre 10 secondes avant d'activer la détection
    const timer = setTimeout(() => {
      document.addEventListener('mouseleave', handleMouseLeave);
    }, 10000);

    return () => {
      clearTimeout(timer);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isVisible]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY,
          email: email,
          subject: 'Nouveau téléchargement - Checklist SEO 2026',
          from_name: 'SiteOnWeb - Lead Magnet',
          lead_magnet: 'Checklist SEO 2026',
          source: 'Exit Intent Popup'
        })
      });

      if (response.ok) {
        setIsSuccess(true);

        // Tracking GTM
        if (window.gtag) {
          window.gtag('event', 'lead_magnet_download', {
            magnet_type: 'checklist_seo',
            source: 'exit_intent_popup'
          });
        }

        // Télécharger le PDF
        setTimeout(() => {
          window.open('/downloads/checklist-seo-2026.pdf', '_blank');
          setTimeout(() => {
            setIsVisible(false);
          }, 2000);
        }, 1000);
      }
    } catch (error) {
      console.error('Erreur:', error);
      alert('Une erreur est survenue. Veuillez réessayer.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    setIsVisible(false);

    // Tracking GTM
    if (window.gtag) {
      window.gtag('event', 'popup_closed', {
        popup_type: 'exit_intent',
        converted: isSuccess
      });
    }
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50 z-[9998] animate-fade-in"
        onClick={handleClose}
      />

      {/* Popup */}
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[9999] w-full max-w-lg mx-4 animate-slide-up">
        <div className="bg-white rounded-2xl shadow-2xl p-8 relative">
          {/* Bouton fermer */}
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
            aria-label="Fermer"
          >
            <FaTimes className="text-2xl" />
          </button>

          {!isSuccess ? (
            <>
              {/* Emoji + Titre */}
              <div className="text-center mb-6">
                <div className="text-6xl mb-4">🎁</div>
                <h3 className="text-3xl font-bold text-gray-800 mb-2">
                  Attendez !
                </h3>
                <p className="text-xl text-gray-600">
                  Avant de partir, recevez notre cadeau gratuit
                </p>
              </div>

              {/* Contenu */}
              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
                <h4 className="font-bold text-lg text-blue-800 mb-2">
                  📋 Checklist SEO 2026 (Gratuit)
                </h4>
                <ul className="text-sm text-blue-700 space-y-1">
                  <li>✅ 30 points à vérifier pour un SEO parfait</li>
                  <li>✅ Techniques 2026 à jour</li>
                  <li>✅ Format PDF imprimable</li>
                  <li>✅ Bonus : 5 outils SEO gratuits</li>
                </ul>
              </div>

              {/* Formulaire */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Votre email professionnel"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition-colors disabled:opacity-50"
                >
                  {isSubmitting ? '⏳ Envoi...' : '📥 Télécharger Maintenant'}
                </button>
              </form>

              {/* Confiance */}
              <p className="text-xs text-gray-500 text-center mt-4">
                🔒 Pas de spam. Désinscription en 1 clic. Vos données sont protégées.
              </p>
            </>
          ) : (
            <div className="text-center py-8">
              <div className="text-6xl mb-4">✅</div>
              <h3 className="text-2xl font-bold text-green-600 mb-2">
                C'est envoyé !
              </h3>
              <p className="text-gray-600">
                Consultez votre boîte email et téléchargez votre checklist.
              </p>
              <p className="text-sm text-gray-500 mt-4">
                Le téléchargement va démarrer automatiquement...
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ExitIntentPopup;
```

### CSS pour les animations

```css
/* src/index.css */

@keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes slide-up {
  from {
    opacity: 0;
    transform: translate(-50%, -40%);
  }
  to {
    opacity: 1;
    transform: translate(-50%, -50%);
  }
}

.animate-fade-in {
  animation: fade-in 0.3s ease-out;
}

.animate-slide-up {
  animation: slide-up 0.4s ease-out;
}
```

---

## 💰 Calculateur de Prix

### `src/pages/PriceCalculator.jsx`

```jsx
import React, { useState } from 'react';
import { FaCheck, FaArrowRight, FaArrowLeft } from 'react-icons/fa';

const PriceCalculator = () => {
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState({
    siteType: '',
    pages: '',
    features: [],
    design: '',
    deadline: '',
    email: ''
  });
  const [price, setPrice] = useState({ min: 0, max: 0 });

  const questions = {
    1: {
      question: "Quel type de site web souhaitez-vous ?",
      options: [
        { value: 'vitrine', label: '🏠 Site Vitrine', price: [800, 2000] },
        { value: 'ecommerce', label: '🛒 Site E-commerce', price: [2500, 8000] },
        { value: 'application', label: '💻 Application Web', price: [5000, 20000] }
      ]
    },
    2: {
      question: "Combien de pages prévoyez-vous ?",
      options: [
        { value: '1-5', label: '1-5 pages', multiplier: 1 },
        { value: '6-15', label: '6-15 pages', multiplier: 1.3 },
        { value: '16+', label: '16+ pages', multiplier: 1.6 }
      ]
    },
    3: {
      question: "Quelles fonctionnalités souhaitez-vous ?",
      multiple: true,
      options: [
        { value: 'blog', label: '📝 Blog', price: 300 },
        { value: 'booking', label: '📅 Système de réservation', price: 500 },
        { value: 'payment', label: '💳 Paiement en ligne', price: 800 },
        { value: 'member', label: '👤 Espace membre', price: 1200 },
        { value: 'multilang', label: '🌍 Multilingue', price: 400 },
        { value: 'custom', label: '⚙️ Fonctionnalité custom', price: 1000 }
      ]
    },
    4: {
      question: "Quel niveau de design ?",
      options: [
        { value: 'template', label: '📄 Template adapté', multiplier: 1 },
        { value: 'semi-custom', label: '🎨 Semi-personnalisé', multiplier: 1.4 },
        { value: 'custom', label: '✨ Design 100% unique', multiplier: 2 }
      ]
    },
    5: {
      question: "Quel est votre délai ?",
      options: [
        { value: 'urgent', label: '⚡ Urgent (< 2 semaines)', multiplier: 1.5 },
        { value: 'normal', label: '📅 Normal (1-2 mois)', multiplier: 1 },
        { value: 'flexible', label: '🕐 Flexible (2+ mois)', multiplier: 0.9 }
      ]
    }
  };

  const handleAnswer = (questionKey, value) => {
    if (questions[step].multiple) {
      // Multi-select
      const current = answers[questionKey] || [];
      if (current.includes(value)) {
        setAnswers({ ...answers, [questionKey]: current.filter(v => v !== value) });
      } else {
        setAnswers({ ...answers, [questionKey]: [...current, value] });
      }
    } else {
      // Single select
      setAnswers({ ...answers, [questionKey]: value });
    }
  };

  const calculatePrice = () => {
    let baseMin = 0;
    let baseMax = 0;

    // Type de site
    const siteTypeOption = questions[1].options.find(opt => opt.value === answers.siteType);
    if (siteTypeOption) {
      [baseMin, baseMax] = siteTypeOption.price;
    }

    // Nombre de pages
    const pagesOption = questions[2].options.find(opt => opt.value === answers.pages);
    if (pagesOption) {
      baseMin *= pagesOption.multiplier;
      baseMax *= pagesOption.multiplier;
    }

    // Fonctionnalités
    if (answers.features && answers.features.length > 0) {
      const featuresPrice = answers.features.reduce((sum, feature) => {
        const opt = questions[3].options.find(o => o.value === feature);
        return sum + (opt?.price || 0);
      }, 0);
      baseMin += featuresPrice;
      baseMax += featuresPrice;
    }

    // Design
    const designOption = questions[4].options.find(opt => opt.value === answers.design);
    if (designOption) {
      baseMin *= designOption.multiplier;
      baseMax *= designOption.multiplier;
    }

    // Délai
    const deadlineOption = questions[5].options.find(opt => opt.value === answers.deadline);
    if (deadlineOption) {
      baseMin *= deadlineOption.multiplier;
      baseMax *= deadlineOption.multiplier;
    }

    setPrice({
      min: Math.round(baseMin),
      max: Math.round(baseMax)
    });
  };

  const handleNext = () => {
    const questionKey = Object.keys(questions[step].options[0])[0];

    if (step === 5) {
      calculatePrice();
    }

    setStep(step + 1);
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  const handleSubmitEmail = async (e) => {
    e.preventDefault();

    try {
      await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY,
          email: answers.email,
          subject: `Demande de devis - Estimation ${price.min}€-${price.max}€`,
          from_name: 'Calculateur de Prix',
          ...answers,
          estimated_price: `${price.min}€ - ${price.max}€`
        })
      });

      // Tracking
      if (window.gtag) {
        window.gtag('event', 'calculator_completed', {
          estimated_price_min: price.min,
          estimated_price_max: price.max,
          site_type: answers.siteType
        });
      }

      setStep(7);
    } catch (error) {
      console.error('Erreur:', error);
    }
  };

  const isStepComplete = () => {
    switch(step) {
      case 1: return !!answers.siteType;
      case 2: return !!answers.pages;
      case 3: return true; // Optional
      case 4: return !!answers.design;
      case 5: return !!answers.deadline;
      case 6: return !!answers.email;
      default: return false;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 py-12 px-4">
      <div className="container mx-auto max-w-3xl">
        {/* Progress bar */}
        {step <= 5 && (
          <div className="mb-8">
            <div className="flex justify-between text-sm text-gray-600 mb-2">
              <span>Question {step}/5</span>
              <span>{Math.round((step / 5) * 100)}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div
                className="bg-blue-600 h-3 rounded-full transition-all duration-300"
                style={{ width: `${(step / 5) * 100}%` }}
              />
            </div>
          </div>
        )}

        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          {step <= 5 && (
            <>
              <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
                {questions[step].question}
              </h2>

              <div className="space-y-4 mb-8">
                {questions[step].options.map((option) => {
                  const questionKey = step === 1 ? 'siteType' :
                                     step === 2 ? 'pages' :
                                     step === 3 ? 'features' :
                                     step === 4 ? 'design' : 'deadline';

                  const isSelected = questions[step].multiple
                    ? (answers[questionKey] || []).includes(option.value)
                    : answers[questionKey] === option.value;

                  return (
                    <button
                      key={option.value}
                      onClick={() => handleAnswer(questionKey, option.value)}
                      className={`w-full p-6 rounded-xl border-2 transition-all text-left ${
                        isSelected
                          ? 'border-blue-600 bg-blue-50'
                          : 'border-gray-200 hover:border-blue-300'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-lg font-medium">{option.label}</span>
                        {isSelected && <FaCheck className="text-blue-600" />}
                      </div>
                    </button>
                  );
                })}
              </div>

              <div className="flex gap-4">
                {step > 1 && (
                  <button
                    onClick={handleBack}
                    className="flex items-center gap-2 px-6 py-3 border-2 border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <FaArrowLeft /> Retour
                  </button>
                )}

                <button
                  onClick={handleNext}
                  disabled={!isStepComplete()}
                  className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {step === 5 ? 'Calculer le prix' : 'Suivant'} <FaArrowRight />
                </button>
              </div>
            </>
          )}

          {step === 6 && (
            <>
              <div className="text-center mb-8">
                <div className="text-6xl mb-4">🎉</div>
                <h2 className="text-3xl font-bold text-gray-800 mb-4">
                  Estimation de votre projet
                </h2>

                <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-2xl p-8 my-8">
                  <div className="text-5xl font-bold mb-2">
                    {price.min.toLocaleString()}€ - {price.max.toLocaleString()}€
                  </div>
                  <div className="text-lg opacity-90">
                    Prix estimé pour votre projet
                  </div>
                </div>

                <p className="text-gray-600 mb-6">
                  Recevez un devis détaillé et personnalisé gratuitement
                </p>
              </div>

              <form onSubmit={handleSubmitEmail} className="space-y-4">
                <input
                  type="email"
                  value={answers.email}
                  onChange={(e) => setAnswers({ ...answers, email: e.target.value })}
                  placeholder="Votre email professionnel"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                />

                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-lg transition-colors"
                >
                  📧 Recevoir mon devis détaillé
                </button>
              </form>
            </>
          )}

          {step === 7 && (
            <div className="text-center py-8">
              <div className="text-6xl mb-4">✅</div>
              <h2 className="text-3xl font-bold text-green-600 mb-4">
                Devis envoyé !
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Vous recevrez votre devis détaillé sous 24h.
              </p>
              <a
                href="/"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors"
              >
                Retour à l'accueil
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PriceCalculator;
```

---

## 📊 Événements GTM (Google Tag Manager)

### `src/utils/analytics.js`

```javascript
// Fonction helper pour envoyer des événements GTM
export const trackEvent = (eventName, params = {}) => {
  if (window.gtag) {
    window.gtag('event', eventName, {
      ...params,
      page_location: window.location.href,
      page_title: document.title,
      timestamp: new Date().toISOString()
    });
  }

  // Debug en développement
  if (import.meta.env.DEV) {
    console.log('📊 GTM Event:', eventName, params);
  }
};

// Événements pré-définis

// Scroll depth
export const trackScrollDepth = (depth) => {
  trackEvent('scroll_depth', {
    depth_percentage: depth,
    depth_label: `${depth}%`
  });
};

// CTA clicks
export const trackCTAClick = (ctaText, ctaLocation) => {
  trackEvent('cta_click', {
    cta_text: ctaText,
    cta_location: ctaLocation
  });
};

// Form submissions
export const trackFormSubmit = (formType, success = true) => {
  trackEvent('form_submit', {
    form_type: formType,
    success: success
  });
};

// Lead magnet downloads
export const trackLeadMagnet = (magnetType, source) => {
  trackEvent('lead_magnet_download', {
    magnet_type: magnetType,
    source: source
  });
};

// Project modal opens
export const trackProjectView = (projectName) => {
  trackEvent('project_modal_open', {
    project_name: projectName
  });
};

// Service page views
export const trackServiceView = (serviceType) => {
  trackEvent('service_page_view', {
    service_type: serviceType
  });
};

// WhatsApp clicks
export const trackWhatsAppClick = (source, serviceType = '') => {
  trackEvent('whatsapp_click', {
    button_location: source,
    service_type: serviceType
  });
};

// Booking confirmations
export const trackBookingConfirmed = (date, time, service) => {
  trackEvent('booking_confirmed', {
    booking_date: date,
    booking_time: time,
    service_type: service
  });
};

// Calculator events
export const trackCalculatorStart = () => {
  trackEvent('calculator_start', {
    calculator_type: 'price'
  });
};

export const trackCalculatorComplete = (estimatedPrice, siteType) => {
  trackEvent('calculator_complete', {
    estimated_price: estimatedPrice,
    site_type: siteType
  });
};

// Scroll tracking (automatic)
export const initScrollTracking = () => {
  let tracked = {
    25: false,
    50: false,
    75: false,
    100: false
  };

  const handleScroll = () => {
    const scrollPercentage = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;

    Object.keys(tracked).forEach(threshold => {
      if (!tracked[threshold] && scrollPercentage >= parseInt(threshold)) {
        tracked[threshold] = true;
        trackScrollDepth(threshold);
      }
    });
  };

  window.addEventListener('scroll', handleScroll, { passive: true });

  return () => window.removeEventListener('scroll', handleScroll);
};

// Reading time tracking
export const trackReadingTime = (articleId, readingTime) => {
  trackEvent('blog_article_read', {
    article_id: articleId,
    reading_time: readingTime
  });
};
```

### Utilisation dans les composants

```jsx
// Exemple dans un bouton CTA
import { trackCTAClick } from '../utils/analytics';

<button
  onClick={() => {
    trackCTAClick('Recevez votre devis en 24h', 'hero_section');
    // Reste du code...
  }}
>
  Recevez votre devis en 24h
</button>

// Exemple dans App.jsx pour le scroll tracking
import { useEffect } from 'react';
import { initScrollTracking } from './utils/analytics';

function App() {
  useEffect(() => {
    const cleanup = initScrollTracking();
    return cleanup;
  }, []);

  return (
    // ...
  );
}
```

---

## 🎨 Section Social Proof

### `src/components/SocialProof.jsx`

```jsx
import React, { useEffect, useState } from 'react';
import { FaStar } from 'react-icons/fa';

const SocialProof = () => {
  const [counts, setCounts] = useState({
    clients: 0,
    projects: 0,
    years: 0
  });

  // Animation des chiffres
  useEffect(() => {
    const targets = { clients: 50, projects: 100, years: 5 };
    const duration = 2000; // 2 secondes
    const steps = 50;
    const interval = duration / steps;

    const timer = setInterval(() => {
      setCounts(prev => {
        const newCounts = {};
        let allDone = true;

        Object.keys(targets).forEach(key => {
          if (prev[key] < targets[key]) {
            newCounts[key] = Math.min(
              prev[key] + Math.ceil(targets[key] / steps),
              targets[key]
            );
            allDone = false;
          } else {
            newCounts[key] = targets[key];
          }
        });

        if (allDone) clearInterval(timer);
        return newCounts;
      });
    }, interval);

    return () => clearInterval(timer);
  }, []);

  const clientLogos = [
    { name: 'Gold Assurance', logo: '/images/clients/gold-assurance.png' },
    { name: 'Nathalie Allemand', logo: '/images/clients/nathalie.png' },
    { name: 'JF Donny', logo: '/images/clients/jf-donny.png' },
    // Ajoutez d'autres logos
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="text-center">
            <div className="text-5xl font-bold text-blue-600 mb-2">
              {counts.clients}+
            </div>
            <div className="text-gray-600 text-lg">Clients satisfaits</div>
          </div>

          <div className="text-center">
            <div className="text-5xl font-bold text-blue-600 mb-2">
              {counts.projects}+
            </div>
            <div className="text-gray-600 text-lg">Projets livrés</div>
          </div>

          <div className="text-center">
            <div className="text-5xl font-bold text-blue-600 mb-2">
              {counts.years}+
            </div>
            <div className="text-gray-600 text-lg">Années d'expérience</div>
          </div>
        </div>

        {/* Note moyenne */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-3">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} className="text-yellow-400 text-3xl mx-1" />
            ))}
          </div>
          <div className="text-2xl font-bold text-gray-800 mb-1">
            4.9/5
          </div>
          <div className="text-gray-600">
            Basé sur 50+ avis clients
          </div>
        </div>

        {/* Logos clients */}
        <div>
          <h3 className="text-2xl font-bold text-center text-gray-800 mb-8">
            Ils nous ont fait confiance
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all">
            {clientLogos.map((client) => (
              <div key={client.name} className="flex items-center justify-center">
                <img
                  src={client.logo}
                  alt={client.name}
                  className="max-h-16 w-auto"
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/150x60?text=' + client.name;
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
```

---

## 📌 Intégration dans App.jsx

```jsx
// src/App.jsx
import FloatingButtons from './components/FloatingButtons';
import Testimonials from './components/Testimonials';
import ExitIntentPopup from './components/ExitIntentPopup';
import SocialProof from './components/SocialProof';
import { initScrollTracking } from './utils/analytics';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    // Init scroll tracking
    const cleanup = initScrollTracking();
    return cleanup;
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <Competences />
      <Realisations />

      {/* Nouvelle section Social Proof */}
      <SocialProof />

      {/* Nouvelle section Témoignages */}
      <Testimonials />

      <FAQ />
      <Contact />
      <Footer />

      {/* Composants flottants */}
      <FloatingButtons />
      <ExitIntentPopup />
    </>
  );
}

export default App;
```

---

**Ces exemples sont prêts à être intégrés dans votre projet. N'hésitez pas à les adapter selon vos besoins spécifiques !** 🚀
