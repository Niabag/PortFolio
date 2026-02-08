import { useLanguage } from '../LanguageContext';

export default function SocialProof() {
  const { lang } = useLanguage();

  const translations = {
    fr: {
      sectionTitle: 'Ils nous font confiance',
      sectionSubtitle: 'Résultats concrets pour nos clients',
      stats: [
        {
          number: '50+',
          label: 'Projets Livrés',
          icon: '/images/icons-competences/referencement.webp',
          isImage: true
        },
        {
          number: '98%',
          label: 'Satisfaction Client',
          icon: '⭐'
        },
        {
          number: '3x',
          label: 'ROI Moyen',
          icon: '/images/icons-competences/court.webp',
          isImage: true
        },
        {
          number: '24/7',
          label: 'Support Réactif',
          icon: '💬'
        }
      ],
      testimonials: [
        {
          name: 'Sophie Martin',
          company: 'E-commerce Fashion',
          role: 'CEO',
          image: '👩‍💼',
          rating: 5,
          text: 'Notre boutique en ligne a généré 45 000€ de CA le premier mois. ROI atteint en 2 mois. Équipe ultra-professionnelle !',
          results: '+280% de conversions'
        },
        {
          name: 'Thomas Dubois',
          company: 'Cabinet Avocat',
          role: 'Associé',
          image: '👨‍💼',
          rating: 5,
          text: 'Site vitrine moderne qui nous a fait passer de 5 à 25 demandes de contact par mois. SEO au top, merci !',
          results: '+400% de leads'
        },
        {
          name: 'Marie Lefevre',
          company: 'Restaurant Le Gourmet',
          role: 'Gérante',
          image: '👩‍🍳',
          rating: 5,
          text: 'Site élégant avec réservation en ligne. Nos réservations ont triplé. Design moderne et navigation intuitive.',
          results: '+200% réservations'
        }
      ],
      testimonialsTitle: 'Ce que disent nos clients',
      viewAllReviews: 'Voir tous les avis'
    },
    en: {
      sectionTitle: 'They trust us',
      sectionSubtitle: 'Concrete results for our clients',
      stats: [
        {
          number: '50+',
          label: 'Projects Delivered',
          icon: '/images/icons-competences/referencement.webp',
          isImage: true
        },
        {
          number: '98%',
          label: 'Client Satisfaction',
          icon: '⭐'
        },
        {
          number: '3x',
          label: 'Average ROI',
          icon: '/images/icons-competences/court.webp',
          isImage: true
        },
        {
          number: '24/7',
          label: 'Responsive Support',
          icon: '💬'
        }
      ],
      testimonials: [
        {
          name: 'Sophie Martin',
          company: 'Fashion E-commerce',
          role: 'CEO',
          image: '👩‍💼',
          rating: 5,
          text: 'Our online store generated €45,000 in revenue the first month. ROI achieved in 2 months. Ultra-professional team!',
          results: '+280% conversions'
        },
        {
          name: 'Thomas Dubois',
          company: 'Law Firm',
          role: 'Partner',
          image: '👨‍💼',
          rating: 5,
          text: 'Modern showcase site that took us from 5 to 25 contact requests per month. Top-notch SEO, thank you!',
          results: '+400% leads'
        },
        {
          name: 'Marie Lefevre',
          company: 'Le Gourmet Restaurant',
          role: 'Manager',
          image: '👩‍🍳',
          rating: 5,
          text: 'Elegant site with online booking. Our reservations tripled. Modern design and intuitive navigation.',
          results: '+200% bookings'
        }
      ],
      testimonialsTitle: 'What our clients say',
      viewAllReviews: 'View all reviews'
    }
  };

  const t = translations[lang];

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

        {/* Témoignages */}
        <div className="mb-12">
          <h3 className="text-3xl font-bold text-center mb-12">
            {t.testimonialsTitle}
          </h3>

          <div className="grid md:grid-cols-3 gap-8">
            {t.testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 border border-gray-700 rounded-xl p-6 hover:border-primary-red/50 transition-all duration-300 hover:scale-105 relative"
              >
                {/* Badge résultat */}
                <div className="absolute -top-3 right-4 bg-green-600 text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg">
                  {testimonial.results}
                </div>

                {/* Étoiles */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">⭐</span>
                  ))}
                </div>

                {/* Texte témoignage */}
                <p className="text-gray-300 mb-6 leading-relaxed italic">
                  "{testimonial.text}"
                </p>

                {/* Profil */}
                <div className="flex items-center gap-3 pt-4 border-t border-gray-700">
                  <div className="text-4xl">
                    {testimonial.image}
                  </div>
                  <div>
                    <div className="font-bold text-white">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-gray-400">
                      {testimonial.role} • {testimonial.company}
                    </div>
                  </div>
                </div>
              </div>
            ))}
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
