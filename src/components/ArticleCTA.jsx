import { useState } from 'react';
import { useLanguage } from '../LanguageContext';
import PriceCalculator from './PriceCalculator';
import SEOAuditQuiz from './SEOAuditQuiz';

/**
 * CTA contextuel pour articles de blog
 * S'adapte au sujet de l'article et à sa position
 *
 * @param {string} category - Catégorie de l'article: 'seo', 'ecommerce', 'dev', 'marketing'
 * @param {string} position - Position dans l'article: 'top', 'middle', 'bottom'
 */
export default function ArticleCTA({ category = 'seo', position = 'middle' }) {
  const { lang } = useLanguage();
  const [showCalculator, setShowCalculator] = useState(false);
  const [showSEOQuiz, setShowSEOQuiz] = useState(false);

  // Configuration des CTAs par catégorie
  const ctaConfig = {
    seo: {
      icon: '🔍',
      action: 'seo-audit',
      translations: {
        fr: {
          title: 'Audit SEO Gratuit',
          subtitle: 'Évaluez la performance SEO de votre site en 2 minutes',
          benefits: [
            '✅ 10 questions ciblées',
            '✅ Score détaillé 0-100',
            '✅ Recommandations personnalisées',
            '✅ 100% gratuit, sans engagement'
          ],
          button: 'Lancer l\'audit SEO'
        },
        en: {
          title: 'Free SEO Audit',
          subtitle: 'Evaluate your website SEO performance in 2 minutes',
          benefits: [
            '✅ 10 targeted questions',
            '✅ Detailed score 0-100',
            '✅ Personalized recommendations',
            '✅ 100% free, no commitment'
          ],
          button: 'Start SEO Audit'
        }
      }
    },
    ecommerce: {
      icon: '💰',
      action: 'price-calculator',
      translations: {
        fr: {
          title: 'Combien coûte votre projet e-commerce ?',
          subtitle: 'Estimez le prix de votre boutique en ligne en quelques clics',
          benefits: [
            '✅ Estimation personnalisée',
            '✅ Fourchette de prix réaliste',
            '✅ Comparaison des options',
            '✅ Devis détaillé par email'
          ],
          button: 'Estimer mon projet'
        },
        en: {
          title: 'How much does your e-commerce project cost?',
          subtitle: 'Estimate your online store price in a few clicks',
          benefits: [
            '✅ Personalized estimate',
            '✅ Realistic price range',
            '✅ Compare options',
            '✅ Detailed quote by email'
          ],
          button: 'Estimate My Project'
        }
      }
    },
    dev: {
      icon: '⚡',
      action: 'price-calculator',
      translations: {
        fr: {
          title: 'Calculez le prix de votre site web',
          subtitle: 'Obtenez une estimation précise selon vos besoins',
          benefits: [
            '✅ Tous types de sites',
            '✅ Options personnalisables',
            '✅ Prix transparents 2026',
            '✅ Devis instantané'
          ],
          button: 'Calculer le prix'
        },
        en: {
          title: 'Calculate your website price',
          subtitle: 'Get an accurate estimate based on your needs',
          benefits: [
            '✅ All website types',
            '✅ Customizable options',
            '✅ Transparent 2026 prices',
            '✅ Instant quote'
          ],
          button: 'Calculate Price'
        }
      }
    },
    marketing: {
      icon: '📈',
      action: 'contact',
      translations: {
        fr: {
          title: 'Boostez votre stratégie marketing',
          subtitle: 'Discutons de vos objectifs et défis marketing',
          benefits: [
            '✅ Consultation gratuite 30 min',
            '✅ Analyse de votre situation',
            '✅ Recommandations stratégiques',
            '✅ Plan d\'action concret'
          ],
          button: 'Demander une consultation'
        },
        en: {
          title: 'Boost your marketing strategy',
          subtitle: 'Let\'s discuss your marketing goals and challenges',
          benefits: [
            '✅ Free 30-min consultation',
            '✅ Situation analysis',
            '✅ Strategic recommendations',
            '✅ Concrete action plan'
          ],
          button: 'Request Consultation'
        }
      }
    }
  };

  const config = ctaConfig[category] || ctaConfig.seo;
  const t = config.translations[lang];

  // Styles selon la position
  const positionStyles = {
    top: 'mb-12',
    middle: 'my-12',
    bottom: 'mt-12'
  };

  const handleAction = () => {
    if (config.action === 'seo-audit') {
      setShowSEOQuiz(true);
      // GTM tracking
      if (window.gtag) {
        window.gtag('event', 'article_cta_clicked', {
          cta_type: 'seo_audit',
          cta_position: position,
          article_category: category
        });
      }
    } else if (config.action === 'price-calculator') {
      setShowCalculator(true);
      // GTM tracking
      if (window.gtag) {
        window.gtag('event', 'article_cta_clicked', {
          cta_type: 'price_calculator',
          cta_position: position,
          article_category: category
        });
      }
    } else if (config.action === 'contact') {
      // GTM tracking
      if (window.gtag) {
        window.gtag('event', 'article_cta_clicked', {
          cta_type: 'contact',
          cta_position: position,
          article_category: category
        });
      }
      window.location.href = lang === 'fr' ? '/index.html#contact' : '/en/index.html#contact';
    }
  };

  return (
    <>
      <div className={`bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 border-2 border-primary-red/40 rounded-2xl p-6 md:p-8 shadow-2xl hover:border-primary-red/70 transition-all duration-300 ${positionStyles[position]}`}>
        <div className="flex flex-col md:flex-row gap-6 items-start">
          {/* Icône */}
          <div className="text-6xl flex-shrink-0">
            {config.icon}
          </div>

          {/* Contenu */}
          <div className="flex-grow">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
              {t.title}
            </h3>
            <p className="text-gray-300 mb-4 text-base md:text-lg">
              {t.subtitle}
            </p>

            {/* Bénéfices */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
              {t.benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-2">
                  <span className="text-green-400 text-sm">{benefit}</span>
                </div>
              ))}
            </div>

            {/* Bouton CTA */}
            <button
              onClick={handleAction}
              className="bg-primary-red hover:bg-red-700 text-white font-bold py-3 px-8 rounded-lg transition transform hover:scale-105 shadow-lg inline-flex items-center gap-2"
            >
              <span>{t.button}</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Modals */}
      {showCalculator && (
        <PriceCalculator onClose={() => setShowCalculator(false)} />
      )}

      {showSEOQuiz && (
        <SEOAuditQuiz onClose={() => setShowSEOQuiz(false)} />
      )}
    </>
  );
}
