import { useState } from 'react';
import { useLanguage } from '../LanguageContext';

const PriceCalculator = ({ onClose }) => {
  const { lang } = useLanguage();
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState({
    siteType: '',
    pageCount: '',
    features: [],
    designLevel: '',
    timeline: ''
  });
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const translations = {
    fr: {
      title: '💰 Calculateur de Prix',
      subtitle: 'Estimez le coût de votre projet en 2 minutes',
      step: 'Étape',
      of: 'sur',
      next: 'Suivant',
      previous: 'Précédent',
      getQuote: 'Obtenir mon estimation',

      // Step 1
      step1_question: 'Quel type de site web voulez-vous ?',
      siteType_vitrine: 'Site Vitrine',
      siteType_vitrine_desc: 'Présentation de votre entreprise',
      siteType_ecommerce: 'E-commerce',
      siteType_ecommerce_desc: 'Boutique en ligne avec paiement',
      siteType_app: 'Application Web',
      siteType_app_desc: 'Plateforme interactive complexe',
      siteType_landing: 'Landing Page',
      siteType_landing_desc: 'Page unique de conversion',

      // Step 2
      step2_question: 'Combien de pages prévoyez-vous ?',
      pages_1_5: '1-5 pages',
      pages_1_5_desc: 'Site simple et concis',
      pages_5_10: '5-10 pages',
      pages_5_10_desc: 'Site standard',
      pages_10_20: '10-20 pages',
      pages_10_20_desc: 'Site complet',
      pages_20_plus: '20+ pages',
      pages_20_plus_desc: 'Site complexe',

      // Step 3
      step3_question: 'Quelles fonctionnalités souhaitez-vous ?',
      step3_subtitle: 'Sélectionnez toutes les options qui vous intéressent',
      feature_blog: 'Blog intégré',
      feature_payment: 'Paiement en ligne',
      feature_members: 'Espace membre',
      feature_booking: 'Système de réservation',
      feature_multilingual: 'Multilingue',
      feature_seo: 'Optimisation SEO avancée',
      feature_none: 'Aucune fonctionnalité spéciale',

      // Step 4
      step4_question: 'Quel niveau de design désirez-vous ?',
      design_template: 'Template modifié',
      design_template_desc: 'Rapide et économique',
      design_semi: 'Semi-personnalisé',
      design_semi_desc: 'Mix template + custom',
      design_custom: '100% sur mesure',
      design_custom_desc: 'Design unique premium',

      // Step 5
      step5_question: 'Quel est votre délai souhaité ?',
      timeline_urgent: 'Urgent (2-3 semaines)',
      timeline_urgent_desc: 'Livraison express',
      timeline_normal: 'Normal (1-2 mois)',
      timeline_normal_desc: 'Délai standard',
      timeline_flexible: 'Flexible (2-3 mois)',
      timeline_flexible_desc: 'Meilleur rapport qualité/prix',

      // Result
      result_title: '🎉 Votre estimation personnalisée',
      result_range: 'Fourchette de prix estimée',
      result_disclaimer: 'Cette estimation est indicative. Le prix final dépendra de vos besoins spécifiques.',
      result_email_title: 'Recevez votre devis détaillé',
      result_email_subtitle: 'Entrez votre email pour recevoir une estimation complète et des conseils personnalisés',
      emailPlaceholder: 'votre@email.com',
      submit: 'Recevoir mon devis gratuit',
      successTitle: '✅ Devis envoyé !',
      successMessage: 'Nous vous avons envoyé une estimation détaillée. Nous vous contacterons sous 24h.',
      close: 'Fermer'
    },
    en: {
      title: '💰 Price Calculator',
      subtitle: 'Estimate your project cost in 2 minutes',
      step: 'Step',
      of: 'of',
      next: 'Next',
      previous: 'Previous',
      getQuote: 'Get My Estimate',

      // Step 1
      step1_question: 'What type of website do you want?',
      siteType_vitrine: 'Business Website',
      siteType_vitrine_desc: 'Showcase your company',
      siteType_ecommerce: 'E-commerce',
      siteType_ecommerce_desc: 'Online store with payment',
      siteType_app: 'Web Application',
      siteType_app_desc: 'Complex interactive platform',
      siteType_landing: 'Landing Page',
      siteType_landing_desc: 'Single conversion page',

      // Step 2
      step2_question: 'How many pages do you need?',
      pages_1_5: '1-5 pages',
      pages_1_5_desc: 'Simple and concise',
      pages_5_10: '5-10 pages',
      pages_5_10_desc: 'Standard website',
      pages_10_20: '10-20 pages',
      pages_10_20_desc: 'Complete website',
      pages_20_plus: '20+ pages',
      pages_20_plus_desc: 'Complex website',

      // Step 3
      step3_question: 'Which features do you need?',
      step3_subtitle: 'Select all that apply',
      feature_blog: 'Integrated blog',
      feature_payment: 'Online payment',
      feature_members: 'Member area',
      feature_booking: 'Booking system',
      feature_multilingual: 'Multilingual',
      feature_seo: 'Advanced SEO',
      feature_none: 'No special features',

      // Step 4
      step4_question: 'What design level do you want?',
      design_template: 'Modified template',
      design_template_desc: 'Fast and affordable',
      design_semi: 'Semi-custom',
      design_semi_desc: 'Mix template + custom',
      design_custom: '100% custom',
      design_custom_desc: 'Unique premium design',

      // Step 5
      step5_question: 'What is your desired timeline?',
      timeline_urgent: 'Urgent (2-3 weeks)',
      timeline_urgent_desc: 'Express delivery',
      timeline_normal: 'Normal (1-2 months)',
      timeline_normal_desc: 'Standard timeline',
      timeline_flexible: 'Flexible (2-3 months)',
      timeline_flexible_desc: 'Best value',

      // Result
      result_title: '🎉 Your Personalized Estimate',
      result_range: 'Estimated price range',
      result_disclaimer: 'This estimate is indicative. Final price will depend on your specific needs.',
      result_email_title: 'Get Your Detailed Quote',
      result_email_subtitle: 'Enter your email to receive a complete estimate and personalized advice',
      emailPlaceholder: 'your@email.com',
      submit: 'Get My Free Quote',
      successTitle: '✅ Quote Sent!',
      successMessage: 'We sent you a detailed estimate. We will contact you within 24h.',
      close: 'Close'
    }
  };

  const t = translations[lang];

  // Prix de base selon le type de site
  const basePrices = {
    vitrine: 1500,
    ecommerce: 3500,
    app: 8000,
    landing: 800
  };

  // Multiplicateurs
  const pageMultipliers = {
    '1-5': 1,
    '5-10': 1.3,
    '10-20': 1.7,
    '20+': 2.2
  };

  const featurePrices = {
    blog: 300,
    payment: 500,
    members: 800,
    booking: 600,
    multilingual: 400,
    seo: 500
  };

  const designMultipliers = {
    template: 1,
    semi: 1.4,
    custom: 2
  };

  const timelineMultipliers = {
    urgent: 1.3,
    normal: 1,
    flexible: 0.85
  };

  const calculatePrice = () => {
    let basePrice = basePrices[answers.siteType] || 0;
    let pageMultiplier = pageMultipliers[answers.pageCount] || 1;

    // Ajouter les fonctionnalités
    let featuresPrice = 0;
    answers.features.forEach(feature => {
      if (feature !== 'none') {
        featuresPrice += featurePrices[feature] || 0;
      }
    });

    let designMultiplier = designMultipliers[answers.designLevel] || 1;
    let timelineMultiplier = timelineMultipliers[answers.timeline] || 1;

    const totalMin = Math.round((basePrice * pageMultiplier * designMultiplier + featuresPrice) * timelineMultiplier);
    const totalMax = Math.round(totalMin * 1.4); // +40% pour la fourchette haute

    return { min: totalMin, max: totalMax };
  };

  const handleSelect = (field, value) => {
    setAnswers(prev => ({ ...prev, [field]: value }));
  };

  const handleFeatureToggle = (feature) => {
    setAnswers(prev => {
      const features = [...prev.features];
      if (feature === 'none') {
        return { ...prev, features: ['none'] };
      }

      const index = features.indexOf(feature);
      if (index > -1) {
        features.splice(index, 1);
      } else {
        features.push(feature);
        // Retirer "none" si on sélectionne autre chose
        const noneIndex = features.indexOf('none');
        if (noneIndex > -1) {
          features.splice(noneIndex, 1);
        }
      }
      return { ...prev, features };
    });
  };

  const handleNext = () => {
    if (step < 5) setStep(step + 1);
    else if (step === 5) setStep(6); // Afficher le résultat
  };

  const handlePrevious = () => {
    if (step > 1) setStep(step - 1);
  };

  const canProceed = () => {
    switch(step) {
      case 1: return answers.siteType !== '';
      case 2: return answers.pageCount !== '';
      case 3: return answers.features.length > 0;
      case 4: return answers.designLevel !== '';
      case 5: return answers.timeline !== '';
      default: return false;
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

    const price = calculatePrice();

    // Envoyer via Web3Forms
    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY?.trim();

    if (accessKey) {
      try {
        const formData = new FormData();
        formData.append('access_key', accessKey);
        formData.append('subject', '💰 Nouveau calcul de prix - Calculateur');
        formData.append('email', 'contact@siteonweb.fr');
        formData.append('visitor_email', email);
        formData.append('message', `
Nouvelle estimation de prix via le calculateur !

📧 Email: ${email}
💰 Prix estimé: ${price.min}€ - ${price.max}€

Détails du projet:
- Type de site: ${answers.siteType}
- Nombre de pages: ${answers.pageCount}
- Fonctionnalités: ${answers.features.join(', ')}
- Niveau de design: ${answers.designLevel}
- Délai: ${answers.timeline}

Date: ${new Date().toLocaleString('fr-FR')}
Langue: ${lang}
        `);

        await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          body: formData
        });

        console.log('✅ Estimation envoyée à Web3Forms');
      } catch (error) {
        console.error('❌ Erreur envoi Web3Forms:', error);
      }
    }

    // Tracking GTM
    if (window.gtag) {
      window.gtag('event', 'price_calculator_submitted', {
        page_location: window.location.href,
        email_domain: email.split('@')[1],
        estimated_price_min: price.min,
        estimated_price_max: price.max,
        site_type: answers.siteType
      });
    }

    setIsSubmitted(true);
  };

  const OptionCard = ({ value, title, description, selected, onClick }) => (
    <button
      type="button"
      onClick={onClick}
      className={`w-full p-4 rounded-lg border-2 transition text-left ${
        selected
          ? 'border-primary-red bg-primary-red/10'
          : 'border-gray-700 bg-gray-800/50 hover:border-primary-red/50'
      }`}
    >
      <div className="font-semibold text-white mb-1">{title}</div>
      <div className="text-sm text-gray-400">{description}</div>
    </button>
  );

  const FeatureCheckbox = ({ value, label, checked, onChange }) => (
    <label className="flex items-center gap-3 p-3 rounded-lg border border-gray-700 hover:border-primary-red/50 transition cursor-pointer">
      <input
        type="checkbox"
        checked={checked}
        onChange={() => onChange(value)}
        className="w-5 h-5 accent-primary-red"
      />
      <span className="text-white">{label}</span>
    </label>
  );

  const price = step === 6 ? calculatePrice() : null;

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[10001] flex items-center justify-center p-4 animate-fadeIn">
      <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-primary-red/30 animate-slideUp max-h-[90vh] overflow-y-auto">
        {/* Bouton fermer */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition text-2xl z-10"
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
              {step <= 5 && (
                <div className="mt-4 text-sm text-gray-400">
                  {t.step} {step} {t.of} 5
                </div>
              )}
            </div>

            {/* Progress bar */}
            {step <= 5 && (
              <div className="w-full bg-gray-700 rounded-full h-2 mb-8">
                <div
                  className="bg-primary-red h-2 rounded-full transition-all duration-300"
                  style={{ width: `${(step / 5) * 100}%` }}
                />
              </div>
            )}

            {/* Questions */}
            <div className="space-y-6">
              {/* Step 1: Type de site */}
              {step === 1 && (
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">{t.step1_question}</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <OptionCard
                      value="vitrine"
                      title={t.siteType_vitrine}
                      description={t.siteType_vitrine_desc}
                      selected={answers.siteType === 'vitrine'}
                      onClick={() => handleSelect('siteType', 'vitrine')}
                    />
                    <OptionCard
                      value="ecommerce"
                      title={t.siteType_ecommerce}
                      description={t.siteType_ecommerce_desc}
                      selected={answers.siteType === 'ecommerce'}
                      onClick={() => handleSelect('siteType', 'ecommerce')}
                    />
                    <OptionCard
                      value="app"
                      title={t.siteType_app}
                      description={t.siteType_app_desc}
                      selected={answers.siteType === 'app'}
                      onClick={() => handleSelect('siteType', 'app')}
                    />
                    <OptionCard
                      value="landing"
                      title={t.siteType_landing}
                      description={t.siteType_landing_desc}
                      selected={answers.siteType === 'landing'}
                      onClick={() => handleSelect('siteType', 'landing')}
                    />
                  </div>
                </div>
              )}

              {/* Step 2: Nombre de pages */}
              {step === 2 && (
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">{t.step2_question}</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <OptionCard
                      value="1-5"
                      title={t.pages_1_5}
                      description={t.pages_1_5_desc}
                      selected={answers.pageCount === '1-5'}
                      onClick={() => handleSelect('pageCount', '1-5')}
                    />
                    <OptionCard
                      value="5-10"
                      title={t.pages_5_10}
                      description={t.pages_5_10_desc}
                      selected={answers.pageCount === '5-10'}
                      onClick={() => handleSelect('pageCount', '5-10')}
                    />
                    <OptionCard
                      value="10-20"
                      title={t.pages_10_20}
                      description={t.pages_10_20_desc}
                      selected={answers.pageCount === '10-20'}
                      onClick={() => handleSelect('pageCount', '10-20')}
                    />
                    <OptionCard
                      value="20+"
                      title={t.pages_20_plus}
                      description={t.pages_20_plus_desc}
                      selected={answers.pageCount === '20+'}
                      onClick={() => handleSelect('pageCount', '20+')}
                    />
                  </div>
                </div>
              )}

              {/* Step 3: Fonctionnalités */}
              {step === 3 && (
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">{t.step3_question}</h3>
                  <p className="text-sm text-gray-400 mb-4">{t.step3_subtitle}</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <FeatureCheckbox
                      value="blog"
                      label={t.feature_blog}
                      checked={answers.features.includes('blog')}
                      onChange={handleFeatureToggle}
                    />
                    <FeatureCheckbox
                      value="payment"
                      label={t.feature_payment}
                      checked={answers.features.includes('payment')}
                      onChange={handleFeatureToggle}
                    />
                    <FeatureCheckbox
                      value="members"
                      label={t.feature_members}
                      checked={answers.features.includes('members')}
                      onChange={handleFeatureToggle}
                    />
                    <FeatureCheckbox
                      value="booking"
                      label={t.feature_booking}
                      checked={answers.features.includes('booking')}
                      onChange={handleFeatureToggle}
                    />
                    <FeatureCheckbox
                      value="multilingual"
                      label={t.feature_multilingual}
                      checked={answers.features.includes('multilingual')}
                      onChange={handleFeatureToggle}
                    />
                    <FeatureCheckbox
                      value="seo"
                      label={t.feature_seo}
                      checked={answers.features.includes('seo')}
                      onChange={handleFeatureToggle}
                    />
                    <FeatureCheckbox
                      value="none"
                      label={t.feature_none}
                      checked={answers.features.includes('none')}
                      onChange={handleFeatureToggle}
                    />
                  </div>
                </div>
              )}

              {/* Step 4: Design */}
              {step === 4 && (
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">{t.step4_question}</h3>
                  <div className="space-y-3">
                    <OptionCard
                      value="template"
                      title={t.design_template}
                      description={t.design_template_desc}
                      selected={answers.designLevel === 'template'}
                      onClick={() => handleSelect('designLevel', 'template')}
                    />
                    <OptionCard
                      value="semi"
                      title={t.design_semi}
                      description={t.design_semi_desc}
                      selected={answers.designLevel === 'semi'}
                      onClick={() => handleSelect('designLevel', 'semi')}
                    />
                    <OptionCard
                      value="custom"
                      title={t.design_custom}
                      description={t.design_custom_desc}
                      selected={answers.designLevel === 'custom'}
                      onClick={() => handleSelect('designLevel', 'custom')}
                    />
                  </div>
                </div>
              )}

              {/* Step 5: Délai */}
              {step === 5 && (
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">{t.step5_question}</h3>
                  <div className="space-y-3">
                    <OptionCard
                      value="urgent"
                      title={t.timeline_urgent}
                      description={t.timeline_urgent_desc}
                      selected={answers.timeline === 'urgent'}
                      onClick={() => handleSelect('timeline', 'urgent')}
                    />
                    <OptionCard
                      value="normal"
                      title={t.timeline_normal}
                      description={t.timeline_normal_desc}
                      selected={answers.timeline === 'normal'}
                      onClick={() => handleSelect('timeline', 'normal')}
                    />
                    <OptionCard
                      value="flexible"
                      title={t.timeline_flexible}
                      description={t.timeline_flexible_desc}
                      selected={answers.timeline === 'flexible'}
                      onClick={() => handleSelect('timeline', 'flexible')}
                    />
                  </div>
                </div>
              )}

              {/* Step 6: Résultat + Email */}
              {step === 6 && price && (
                <div>
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-4">{t.result_title}</h3>
                    <div className="bg-gradient-to-r from-primary-red/20 to-primary-red/10 border border-primary-red/30 rounded-xl p-6 mb-4">
                      <div className="text-sm text-gray-400 mb-2">{t.result_range}</div>
                      <div className="text-4xl font-bold text-white">
                        {price.min.toLocaleString()}€ - {price.max.toLocaleString()}€
                      </div>
                    </div>
                    <p className="text-sm text-gray-400">{t.result_disclaimer}</p>
                  </div>

                  <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
                    <h4 className="text-lg font-semibold text-white mb-2">{t.result_email_title}</h4>
                    <p className="text-sm text-gray-400 mb-4">{t.result_email_subtitle}</p>

                    <form onSubmit={handleSubmit}>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder={t.emailPlaceholder}
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary-red transition mb-3"
                        required
                      />
                      {error && (
                        <p className="text-red-400 text-sm mb-3">{error}</p>
                      )}
                      <button
                        type="submit"
                        className="w-full bg-primary-red hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg transition transform hover:scale-105"
                      >
                        {t.submit}
                      </button>
                    </form>
                  </div>
                </div>
              )}
            </div>

            {/* Navigation buttons */}
            {step <= 5 && (
              <div className="flex gap-3 mt-6">
                {step > 1 && (
                  <button
                    onClick={handlePrevious}
                    className="flex-1 bg-gray-700 hover:bg-gray-600 text-white font-semibold py-3 px-6 rounded-lg transition"
                  >
                    {t.previous}
                  </button>
                )}
                <button
                  onClick={handleNext}
                  disabled={!canProceed()}
                  className={`flex-1 font-semibold py-3 px-6 rounded-lg transition ${
                    canProceed()
                      ? 'bg-primary-red hover:bg-red-700 text-white'
                      : 'bg-gray-700 text-gray-500 cursor-not-allowed'
                  }`}
                >
                  {step === 5 ? t.getQuote : t.next}
                </button>
              </div>
            )}
          </>
        ) : (
          /* Message de succès */
          <div className="text-center py-8">
            <div className="text-6xl mb-4">🎉</div>
            <h3 className="text-2xl font-bold text-white mb-3">
              {t.successTitle}
            </h3>
            <p className="text-gray-300 mb-6">
              {t.successMessage}
            </p>
            <button
              onClick={onClose}
              className="bg-primary-red hover:bg-red-700 text-white font-semibold py-2 px-6 rounded-lg transition"
            >
              {t.close}
            </button>
          </div>
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

export default PriceCalculator;
