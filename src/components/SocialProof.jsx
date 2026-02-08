import { useState, useEffect } from 'react';
import { useLanguage } from '../LanguageContext';

export default function SocialProof() {
  const { lang } = useLanguage();
  const [googleReviews, setGoogleReviews] = useState(null);

  const GOOGLE_REVIEW_URL = 'https://g.page/r/CRuQuLcM0M3rEBM/review';

  // Avis par défaut (affichés tant que l'API Google n'est pas configurée)
  const fallbackReviews = {
    fr: [
      {
        name: 'Sophie Martin',
        rating: 5,
        text: 'Notre boutique en ligne a généré 45 000€ de CA le premier mois. ROI atteint en 2 mois. Équipe ultra-professionnelle !',
        results: '+280% de conversions',
        timeAgo: 'il y a 2 semaines'
      },
      {
        name: 'Thomas Dubois',
        rating: 5,
        text: 'Site vitrine moderne qui nous a fait passer de 5 à 25 demandes de contact par mois. SEO au top, merci !',
        results: '+400% de leads',
        timeAgo: 'il y a 1 mois'
      },
      {
        name: 'Marie Lefevre',
        rating: 5,
        text: 'Site élégant avec réservation en ligne. Nos réservations ont triplé. Design moderne et navigation intuitive.',
        results: '+200% réservations',
        timeAgo: 'il y a 3 semaines'
      }
    ],
    en: [
      {
        name: 'Sophie Martin',
        rating: 5,
        text: 'Our online store generated €45,000 in revenue the first month. ROI achieved in 2 months. Ultra-professional team!',
        results: '+280% conversions',
        timeAgo: '2 weeks ago'
      },
      {
        name: 'Thomas Dubois',
        rating: 5,
        text: 'Modern showcase site that took us from 5 to 25 contact requests per month. Top-notch SEO, thank you!',
        results: '+400% leads',
        timeAgo: '1 month ago'
      },
      {
        name: 'Marie Lefevre',
        rating: 5,
        text: 'Elegant site with online booking. Our reservations tripled. Modern design and intuitive navigation.',
        results: '+200% bookings',
        timeAgo: '3 weeks ago'
      }
    ]
  };

  // Récupérer les avis Google depuis l'API serverless
  useEffect(() => {
    fetch('/api/google-reviews')
      .then(res => res.json())
      .then(data => {
        if (data.reviews && data.reviews.length > 0) {
          setGoogleReviews(data);
        }
      })
      .catch(() => {
        // Silencieux — on utilise les avis par défaut
      });
  }, []);

  const translations = {
    fr: {
      sectionTitle: 'Ils nous font confiance',
      sectionSubtitle: 'Résultats concrets pour nos clients',
      stats: [
        { number: '50+', label: 'Projets Livrés', icon: '/images/icons-competences/referencement.webp', isImage: true },
        { number: '98%', label: 'Satisfaction Client', icon: '⭐' },
        { number: '3x', label: 'ROI Moyen', icon: '/images/icons-competences/court.webp', isImage: true },
        { number: '24/7', label: 'Support Réactif', icon: '💬' }
      ],
      testimonialsTitle: 'Avis Google',
      viewAllReviews: 'Voir tous les avis sur Google',
      leaveReview: 'Laisser un avis',
      basedOn: 'Basé sur',
      reviews: 'avis'
    },
    en: {
      sectionTitle: 'They trust us',
      sectionSubtitle: 'Concrete results for our clients',
      stats: [
        { number: '50+', label: 'Projects Delivered', icon: '/images/icons-competences/referencement.webp', isImage: true },
        { number: '98%', label: 'Client Satisfaction', icon: '⭐' },
        { number: '3x', label: 'Average ROI', icon: '/images/icons-competences/court.webp', isImage: true },
        { number: '24/7', label: 'Responsive Support', icon: '💬' }
      ],
      testimonialsTitle: 'Google Reviews',
      viewAllReviews: 'View all reviews on Google',
      leaveReview: 'Leave a review',
      basedOn: 'Based on',
      reviews: 'reviews'
    }
  };

  const t = translations[lang];

  // Utiliser les vrais avis Google si disponibles, sinon le fallback
  const reviews = googleReviews ? googleReviews.reviews : fallbackReviews[lang];
  const avgRating = googleReviews
    ? googleReviews.averageRating.toFixed(1)
    : (reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length).toFixed(1);
  const totalReviews = googleReviews ? googleReviews.totalReviews : reviews.length;

  return (
    <section className="py-20 mt-20 bg-transparent relative z-10">
      <div className="container mx-auto px-4">
        {/* En-tête */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {t.sectionTitle}
          </h2>
          <p className="text-xl text-gray-400">
            {t.sectionSubtitle}
          </p>
        </div>

        {/* Statistiques */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {t.stats.map((stat, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 border border-primary-red/30 rounded-xl p-6 text-center hover:border-primary-red/60 transition-all duration-300 hover:scale-105"
            >
              <div className="text-5xl mb-3">
                {stat.isImage ? (
                  <img src={stat.icon} alt={stat.label} className="w-12 h-12 object-contain mx-auto" />
                ) : (
                  stat.icon
                )}
              </div>
              <div className="text-4xl md:text-5xl font-bold text-primary-red mb-2">
                {stat.number}
              </div>
              <div className="text-gray-400 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Google Reviews Header */}
        <div className="mb-12">
          <div className="flex flex-col sm:flex-row items-center justify-between mb-8 gap-4">
            <div className="flex items-center gap-4">
              <svg viewBox="0 0 24 24" className="w-10 h-10 flex-shrink-0" aria-hidden="true">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white">
                  {t.testimonialsTitle}
                </h3>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-2xl font-bold text-white">{avgRating}</span>
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className={`w-5 h-5 ${i < Math.round(parseFloat(avgRating)) ? 'text-yellow-400' : 'text-gray-600'}`} fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                      </svg>
                    ))}
                  </div>
                  <span className="text-gray-400 text-sm">
                    {t.basedOn} {totalReviews} {t.reviews}
                  </span>
                </div>
              </div>
            </div>
            <a
              href={GOOGLE_REVIEW_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary-red hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 hover:scale-105 text-sm sm:text-base"
              onClick={() => {
                if (window.gtag) {
                  window.gtag('event', 'google_review_cta_click', {
                    page_location: window.location.href
                  });
                }
              }}
            >
              {t.leaveReview}
            </a>
          </div>

          {/* Review Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 border border-gray-700 rounded-xl p-6 hover:border-primary-red/50 transition-all duration-300 hover:scale-105 relative"
              >
                {/* Badge résultat (uniquement pour les avis fallback) */}
                {review.results && (
                  <div className="absolute -top-3 right-4 bg-green-600 text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg">
                    {review.results}
                  </div>
                )}

                {/* Profil + date */}
                <div className="flex items-center gap-3 mb-4">
                  {review.profilePhoto ? (
                    <img
                      src={review.profilePhoto}
                      alt={review.name}
                      className="w-10 h-10 rounded-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  ) : (
                    <div className="w-10 h-10 rounded-full bg-primary-red flex items-center justify-center text-white font-bold text-lg">
                      {review.name.charAt(0)}
                    </div>
                  )}
                  <div>
                    <div className="font-bold text-white text-sm">
                      {review.name}
                    </div>
                    <div className="text-xs text-gray-500">
                      {review.timeAgo}
                    </div>
                  </div>
                </div>

                {/* Étoiles */}
                <div className="flex gap-0.5 mb-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                  ))}
                </div>

                {/* Texte témoignage */}
                <p className="text-gray-300 mb-4 leading-relaxed text-sm">
                  &ldquo;{review.text}&rdquo;
                </p>

                {/* Rôle & entreprise (fallback) ou logo Google (API) */}
                <div className="flex items-center justify-between pt-3 border-t border-gray-700">
                  {review.results ? (
                    <span className="text-xs text-gray-500">{review.role} • {review.company}</span>
                  ) : (
                    <span className="text-xs text-gray-500">Google Review</span>
                  )}
                  <svg viewBox="0 0 24 24" className="w-4 h-4 opacity-40" aria-hidden="true">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                  </svg>
                </div>
              </div>
            ))}
          </div>

          {/* Lien vers tous les avis Google */}
          <div className="text-center mt-8">
            <a
              href={GOOGLE_REVIEW_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300 text-sm"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5" aria-hidden="true">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              {t.viewAllReviews}
            </a>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 border border-primary-red/20 rounded-2xl p-8 text-center">
          <div className="flex flex-wrap justify-center items-center gap-8 text-gray-400">
            <div className="flex items-center gap-2">
              <span className="text-2xl">✅</span>
              <span className="font-semibold">{lang === 'fr' ? 'Paiement Sécurisé' : 'Secure Payment'}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">🔒</span>
              <span className="font-semibold">{lang === 'fr' ? 'Données Protégées' : 'Data Protected'}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">🏆</span>
              <span className="font-semibold">{lang === 'fr' ? 'Satisfaction Garantie' : 'Satisfaction Guaranteed'}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">⚡</span>
              <span className="font-semibold">{lang === 'fr' ? 'Livraison Rapide' : 'Fast Delivery'}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
