import { useState } from 'react';
import { useLanguage } from '../LanguageContext';

const SEOAuditQuiz = ({ onClose }) => {
  const { lang } = useLanguage();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const translations = {
    fr: {
      title: '🔍 Audit SEO Gratuit',
      subtitle: 'Évaluez le référencement de votre site en 2 minutes',
      question: 'Question',
      of: 'sur',
      yes: 'Oui',
      no: 'Non',
      notSure: 'Je ne sais pas',
      next: 'Suivant',
      previous: 'Précédent',
      finish: 'Voir mes résultats',

      // Questions
      questions: [
        {
          question: 'Votre site est-il en HTTPS ?',
          description: 'Le protocole HTTPS sécurise les données et améliore le SEO'
        },
        {
          question: 'Avez-vous un sitemap.xml ?',
          description: 'Le sitemap aide Google à indexer toutes vos pages'
        },
        {
          question: 'Votre site se charge en moins de 3 secondes ?',
          description: 'La vitesse de chargement est un facteur SEO majeur'
        },
        {
          question: 'Votre site est-il mobile-friendly ?',
          description: 'Plus de 60% du trafic web vient du mobile'
        },
        {
          question: 'Vos balises meta (titre, description) sont-elles optimisées ?',
          description: 'Les balises meta influencent le taux de clic dans Google'
        },
        {
          question: 'Vos images ont-elles des balises alt et sont-elles compressées ?',
          description: 'Les images optimisées améliorent vitesse et accessibilité'
        },
        {
          question: 'Votre contenu est-il unique et de qualité ?',
          description: 'Le contenu dupliqué ou pauvre pénalise votre SEO'
        },
        {
          question: 'Avez-vous des backlinks de qualité ?',
          description: 'Les liens entrants renforcent votre autorité de domaine'
        },
        {
          question: 'Avez-vous configuré Google Business Profile ?',
          description: 'Essentiel pour le référencement local'
        },
        {
          question: 'Google Analytics et Search Console sont-ils installés ?',
          description: 'Indispensables pour mesurer vos performances'
        }
      ],

      // Results
      results_title: '📊 Votre Score SEO',
      results_score: 'Score',
      results_level_critical: '🔴 SEO Critique',
      results_level_medium: '🟡 SEO Moyen',
      results_level_good: '🟢 SEO Excellent',
      results_analysis: 'Analyse détaillée',

      analysis_critical: 'Votre site nécessite une optimisation SEO urgente. Plusieurs éléments essentiels sont manquants, ce qui limite fortement votre visibilité sur Google.',
      analysis_medium: 'Votre site a de bonnes bases SEO, mais plusieurs améliorations sont nécessaires pour maximiser votre visibilité et votre trafic organique.',
      analysis_good: 'Excellent travail ! Votre site respecte les meilleures pratiques SEO. Continuez à produire du contenu de qualité et à obtenir des backlinks.',

      recommendations_title: 'Recommandations prioritaires',
      email_title: 'Recevez votre rapport détaillé',
      email_subtitle: 'Nous vous enverrons un audit complet avec un plan d\'action personnalisé',
      emailPlaceholder: 'votre@email.com',
      submit: 'Recevoir mon audit gratuit',
      successTitle: '✅ Audit envoyé !',
      successMessage: 'Nous vous avons envoyé votre rapport détaillé. Nous vous contacterons sous 24h avec des recommandations personnalisées.',
      close: 'Fermer'
    },
    en: {
      title: '🔍 Free SEO Audit',
      subtitle: 'Evaluate your website SEO in 2 minutes',
      question: 'Question',
      of: 'of',
      yes: 'Yes',
      no: 'No',
      notSure: 'Not sure',
      next: 'Next',
      previous: 'Previous',
      finish: 'View Results',

      // Questions
      questions: [
        {
          question: 'Is your site HTTPS secured?',
          description: 'HTTPS protocol secures data and improves SEO'
        },
        {
          question: 'Do you have a sitemap.xml?',
          description: 'Sitemap helps Google index all your pages'
        },
        {
          question: 'Does your site load in less than 3 seconds?',
          description: 'Loading speed is a major SEO factor'
        },
        {
          question: 'Is your site mobile-friendly?',
          description: 'Over 60% of web traffic comes from mobile'
        },
        {
          question: 'Are your meta tags (title, description) optimized?',
          description: 'Meta tags influence click-through rate in Google'
        },
        {
          question: 'Do your images have alt tags and are they compressed?',
          description: 'Optimized images improve speed and accessibility'
        },
        {
          question: 'Is your content unique and high quality?',
          description: 'Duplicate or poor content penalizes your SEO'
        },
        {
          question: 'Do you have quality backlinks?',
          description: 'Inbound links strengthen your domain authority'
        },
        {
          question: 'Have you set up Google Business Profile?',
          description: 'Essential for local SEO'
        },
        {
          question: 'Are Google Analytics and Search Console installed?',
          description: 'Essential to measure your performance'
        }
      ],

      // Results
      results_title: '📊 Your SEO Score',
      results_score: 'Score',
      results_level_critical: '🔴 Critical SEO',
      results_level_medium: '🟡 Average SEO',
      results_level_good: '🟢 Excellent SEO',
      results_analysis: 'Detailed Analysis',

      analysis_critical: 'Your site needs urgent SEO optimization. Several essential elements are missing, severely limiting your visibility on Google.',
      analysis_medium: 'Your site has good SEO foundations, but several improvements are needed to maximize your visibility and organic traffic.',
      analysis_good: 'Excellent work! Your site follows SEO best practices. Keep producing quality content and acquiring backlinks.',

      recommendations_title: 'Priority Recommendations',
      email_title: 'Get Your Detailed Report',
      email_subtitle: 'We will send you a complete audit with a personalized action plan',
      emailPlaceholder: 'your@email.com',
      submit: 'Get My Free Audit',
      successTitle: '✅ Audit Sent!',
      successMessage: 'We sent you your detailed report. We will contact you within 24h with personalized recommendations.',
      close: 'Close'
    }
  };

  const t = translations[lang];
  const questions = t.questions;

  const calculateScore = () => {
    const yesCount = Object.values(answers).filter(a => a === 'yes').length;
    return (yesCount / questions.length) * 100;
  };

  const getScoreLevel = (score) => {
    if (score <= 40) return 'critical';
    if (score <= 70) return 'medium';
    return 'good';
  };

  const getRecommendations = () => {
    const recs = [];
    questions.forEach((q, index) => {
      if (answers[index] !== 'yes') {
        recs.push({
          question: q.question,
          description: q.description
        });
      }
    });
    return recs.slice(0, 5); // Top 5 priorités
  };

  const handleAnswer = (answer) => {
    setAnswers(prev => ({ ...prev, [currentQuestion]: answer }));

    if (currentQuestion < questions.length - 1) {
      setTimeout(() => setCurrentQuestion(currentQuestion + 1), 300);
    } else {
      setTimeout(() => setShowResults(true), 300);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
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

    const score = calculateScore();
    const level = getScoreLevel(score);
    const recommendations = getRecommendations();

    // Envoyer via Web3Forms
    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY?.trim();

    if (accessKey) {
      try {
        const formData = new FormData();
        formData.append('access_key', accessKey);
        formData.append('subject', '🔍 Nouveau Quiz SEO - Audit demandé');
        formData.append('email', 'contact@siteonweb.fr');
        formData.append('visitor_email', email);
        formData.append('message', `
Nouveau quiz SEO complété !

📧 Email: ${email}
📊 Score SEO: ${Math.round(score)}/100 (${level})

Réponses:
${questions.map((q, i) => `${i + 1}. ${q.question}: ${answers[i] || 'non répondu'}`).join('\n')}

Recommandations prioritaires:
${recommendations.map((r, i) => `${i + 1}. ${r.question}`).join('\n')}

Date: ${new Date().toLocaleString('fr-FR')}
Langue: ${lang}
        `);

        await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          body: formData
        });

        console.log('✅ Audit SEO envoyé à Web3Forms');
      } catch (error) {
        console.error('❌ Erreur envoi Web3Forms:', error);
      }
    }

    // Tracking GTM
    if (window.gtag) {
      window.gtag('event', 'seo_audit_completed', {
        page_location: window.location.href,
        email_domain: email.split('@')[1],
        seo_score: Math.round(score),
        seo_level: level
      });
    }

    setIsSubmitted(true);
  };

  const score = showResults ? calculateScore() : 0;
  const level = showResults ? getScoreLevel(score) : '';
  const recommendations = showResults ? getRecommendations() : [];

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
              {!showResults && (
                <div className="mt-4 text-sm text-gray-400">
                  {t.question} {currentQuestion + 1} {t.of} {questions.length}
                </div>
              )}
            </div>

            {/* Progress bar */}
            {!showResults && (
              <div className="w-full bg-gray-700 rounded-full h-2 mb-8">
                <div
                  className="bg-primary-red h-2 rounded-full transition-all duration-300"
                  style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                />
              </div>
            )}

            {/* Question */}
            {!showResults && (
              <div className="space-y-6">
                <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {questions[currentQuestion].question}
                  </h3>
                  <p className="text-sm text-gray-400 mb-6">
                    {questions[currentQuestion].description}
                  </p>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <button
                      onClick={() => handleAnswer('yes')}
                      className={`flex-1 py-4 px-6 rounded-lg font-semibold transition ${
                        answers[currentQuestion] === 'yes'
                          ? 'bg-green-600 text-white'
                          : 'bg-gray-700 text-white hover:bg-green-600/50'
                      }`}
                    >
                      ✅ {t.yes}
                    </button>
                    <button
                      onClick={() => handleAnswer('no')}
                      className={`flex-1 py-4 px-6 rounded-lg font-semibold transition ${
                        answers[currentQuestion] === 'no'
                          ? 'bg-red-600 text-white'
                          : 'bg-gray-700 text-white hover:bg-red-600/50'
                      }`}
                    >
                      ❌ {t.no}
                    </button>
                    <button
                      onClick={() => handleAnswer('not_sure')}
                      className={`flex-1 py-4 px-6 rounded-lg font-semibold transition ${
                        answers[currentQuestion] === 'not_sure'
                          ? 'bg-yellow-600 text-white'
                          : 'bg-gray-700 text-white hover:bg-yellow-600/50'
                      }`}
                    >
                      ❓ {t.notSure}
                    </button>
                  </div>
                </div>

                {/* Navigation */}
                {currentQuestion > 0 && (
                  <button
                    onClick={handlePrevious}
                    className="w-full bg-gray-700 hover:bg-gray-600 text-white font-semibold py-3 px-6 rounded-lg transition"
                  >
                    {t.previous}
                  </button>
                )}
              </div>
            )}

            {/* Results */}
            {showResults && !isSubmitted && (
              <div className="space-y-6">
                {/* Score */}
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-white mb-4">{t.results_title}</h3>
                  <div className="bg-gradient-to-r from-primary-red/20 to-primary-red/10 border border-primary-red/30 rounded-xl p-6 mb-4">
                    <div className="text-sm text-gray-400 mb-2">{t.results_score}</div>
                    <div className="text-5xl font-bold text-white mb-2">
                      {Math.round(score)}/100
                    </div>
                    <div className="text-lg font-semibold">
                      {level === 'critical' && t.results_level_critical}
                      {level === 'medium' && t.results_level_medium}
                      {level === 'good' && t.results_level_good}
                    </div>
                  </div>
                </div>

                {/* Analysis */}
                <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
                  <h4 className="text-lg font-semibold text-white mb-3">{t.results_analysis}</h4>
                  <p className="text-gray-300 mb-4">
                    {level === 'critical' && t.analysis_critical}
                    {level === 'medium' && t.analysis_medium}
                    {level === 'good' && t.analysis_good}
                  </p>

                  {recommendations.length > 0 && (
                    <>
                      <h5 className="font-semibold text-white mb-2">{t.recommendations_title}</h5>
                      <ul className="space-y-2">
                        {recommendations.map((rec, index) => (
                          <li key={index} className="text-sm text-gray-400 flex items-start gap-2">
                            <span className="text-primary-red">•</span>
                            <span>{rec.question}</span>
                          </li>
                        ))}
                      </ul>
                    </>
                  )}
                </div>

                {/* Email Form */}
                <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
                  <h4 className="text-lg font-semibold text-white mb-2">{t.email_title}</h4>
                  <p className="text-sm text-gray-400 mb-4">{t.email_subtitle}</p>

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
          </>
        ) : (
          /* Success */
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

export default SEOAuditQuiz;
