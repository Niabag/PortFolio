import React from 'react';
import { useLanguage } from '../../LanguageContext';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import AnimatedBackground from '../../components/AnimatedBackground';

export default function EmailMarketingAutomation() {
  const { lang } = useLanguage();

  return (
    <>
      <AnimatedBackground />
      <Navbar />
      
      <main className="min-h-screen pt-24 pb-20">
        <article className="py-20 bg-transparent text-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="mb-12">
              <div className="flex items-center gap-4 mb-6">
                <span className="bg-primary-red px-4 py-2 rounded-full text-sm font-semibold">
                  {lang === 'fr' ? 'Email Marketing' : 'Email Marketing'}
                </span>
                <span className="text-gray-400">{lang === 'fr' ? '17 Mars 2025' : 'March 17, 2025'}</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                {lang === 'fr'
                  ? 'Email marketing automation : Séquences qui convertissent en 2025'
                  : 'Email marketing automation: Sequences that convert in 2025'}
              </h1>
              
              <p className="text-xl text-gray-300 mb-8">
                {lang === 'fr'
                  ? 'Créez des séquences d\'emails automatisées performantes : welcome series, abandon de panier, lead nurturing. Stratégies, outils et exemples concrets.'
                  : 'Create high-performing automated email sequences: welcome series, cart abandonment, lead nurturing. Strategies, tools and concrete examples.'}
              </p>
              
              <img
                src="/images/articles/email-marketing.webp"
                alt="Email Marketing Automation"
                className="w-full h-64 md:h-96 object-cover rounded-lg mb-8 relative z-10"
              />
            </div>

            <div className="prose prose-invert prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-primary-red mb-4 mt-8">
                {lang === 'fr' ? 'Pourquoi l\'email marketing reste ROI #1 en 2025' : 'Why email marketing remains ROI #1 in 2025'}
              </h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                {lang === 'fr'
                  ? 'L\'email marketing génère en moyenne 42€ de revenus pour 1€ investi (ROI de 4200%). C\'est le canal digital le plus rentable, devant les réseaux sociaux (28€) et le SEO (22€). En 2025, avec l\'automation, vous pouvez démultiplier ces résultats.'
                  : 'Email marketing generates an average of €42 in revenue for every €1 invested (ROI of 4200%). It\'s the most profitable digital channel, ahead of social media (€28) and SEO (€22). In 2025, with automation, you can multiply these results.'}
              </p>

              <h2 className="text-3xl font-bold text-primary-red mb-4 mt-12">
                {lang === 'fr' ? 'Les 7 séquences d\'emails automatisées essentielles' : 'The 7 essential automated email sequences'}
              </h2>
              
              <h3 className="text-2xl font-bold text-white mb-3 mt-8">
                {lang === 'fr' ? '1. Welcome Series (Bienvenue)' : '1. Welcome Series'}
              </h3>
              <p className="text-gray-300 mb-4 leading-relaxed">
                {lang === 'fr'
                  ? 'Première impression cruciale : 3-5 emails sur 7-10 jours. Email 1 : Bienvenue + cadeau, Email 2 : Votre histoire/valeurs, Email 3 : Best-sellers, Email 4 : Témoignages, Email 5 : Offre spéciale. Taux d\'ouverture moyen : 50-60%.'
                  : 'Crucial first impression: 3-5 emails over 7-10 days. Email 1: Welcome + gift, Email 2: Your story/values, Email 3: Best-sellers, Email 4: Testimonials, Email 5: Special offer. Average open rate: 50-60%.'}
              </p>

              <h3 className="text-2xl font-bold text-white mb-3 mt-8">
                {lang === 'fr' ? '2. Abandon de panier' : '2. Cart Abandonment'}
              </h3>
              <p className="text-gray-300 mb-4 leading-relaxed">
                {lang === 'fr'
                  ? '70% des paniers sont abandonnés. Séquence : Email 1 (1h après) : Rappel simple, Email 2 (24h) : Urgence + bénéfices, Email 3 (48h) : Réduction 10%. Récupère 15-30% des paniers abandonnés = plusieurs milliers d\'euros/mois.'
                  : '70% of carts are abandoned. Sequence: Email 1 (1h after): Simple reminder, Email 2 (24h): Urgency + benefits, Email 3 (48h): 10% discount. Recovers 15-30% of abandoned carts = several thousand euros/month.'}
              </p>

              <h3 className="text-2xl font-bold text-white mb-3 mt-8">
                {lang === 'fr' ? '3. Lead Nurturing (Maturation)' : '3. Lead Nurturing'}
              </h3>
              <p className="text-gray-300 mb-4 leading-relaxed">
                {lang === 'fr'
                  ? 'Pour prospects B2B : 6-12 emails sur 2-3 mois. Alternez contenu éducatif (80%) et commercial (20%). Partagez études de cas, guides, webinaires. Augmente les conversions de 50%.'
                  : 'For B2B prospects: 6-12 emails over 2-3 months. Alternate educational content (80%) and commercial (20%). Share case studies, guides, webinars. Increases conversions by 50%.'}
              </p>

              <h3 className="text-2xl font-bold text-white mb-3 mt-8">
                {lang === 'fr' ? '4. Post-achat' : '4. Post-Purchase'}
              </h3>
              <p className="text-gray-300 mb-4 leading-relaxed">
                {lang === 'fr'
                  ? 'Confirmation commande, suivi livraison, demande d\'avis (7 jours après réception), cross-sell/upsell (14 jours), réengagement (30 jours). Fidélise et génère des achats récurrents.'
                  : 'Order confirmation, delivery tracking, review request (7 days after receipt), cross-sell/upsell (14 days), re-engagement (30 days). Builds loyalty and generates recurring purchases.'}
              </p>

              <ul className="list-disc list-inside text-gray-300 mb-8 space-y-2">
                <li><strong className="text-white">{lang === 'fr' ? '5. Réactivation :' : '5. Re-engagement:'}</strong> {lang === 'fr' ? 'Clients inactifs 60-90 jours, offre "On vous a manqué ?"' : 'Inactive customers 60-90 days, "We missed you?" offer'}</li>
                <li><strong className="text-white">{lang === 'fr' ? '6. Anniversaire/Birthday :' : '6. Birthday:'}</strong> {lang === 'fr' ? 'Cadeau ou réduction = taux ouverture 60%+' : 'Gift or discount = 60%+ open rate'}</li>
                <li><strong className="text-white">{lang === 'fr' ? '7. VIP/Fidélité :' : '7. VIP/Loyalty:'}</strong> {lang === 'fr' ? 'Récompenses pour meilleurs clients' : 'Rewards for best customers'}</li>
              </ul>

              <h2 className="text-3xl font-bold text-primary-red mb-4 mt-12">
                {lang === 'fr' ? 'Bonnes pratiques pour maximiser les conversions' : 'Best practices to maximize conversions'}
              </h2>
              <ul className="list-disc list-inside text-gray-300 mb-8 space-y-2">
                <li><strong className="text-white">{lang === 'fr' ? 'Objet percutant :' : 'Impactful subject:'}</strong> {lang === 'fr' ? '40% du succès, 40-60 caractères max' : '40% of success, 40-60 characters max'}</li>
                <li><strong className="text-white">{lang === 'fr' ? 'Personnalisation :' : 'Personalization:'}</strong> {lang === 'fr' ? 'Prénom, historique, comportement = +26% ouvertures' : 'First name, history, behavior = +26% opens'}</li>
                <li><strong className="text-white">{lang === 'fr' ? 'Mobile-first :' : 'Mobile-first:'}</strong> {lang === 'fr' ? '60% des emails lus sur mobile' : '60% of emails read on mobile'}</li>
                <li><strong className="text-white">{lang === 'fr' ? 'CTA clair :' : 'Clear CTA:'}</strong> {lang === 'fr' ? 'Un seul objectif par email' : 'One objective per email'}</li>
                <li><strong className="text-white">{lang === 'fr' ? 'A/B testing :' : 'A/B testing:'}</strong> {lang === 'fr' ? 'Testez objet, horaire, contenu' : 'Test subject, timing, content'}</li>
                <li><strong className="text-white">{lang === 'fr' ? 'Timing optimal :' : 'Optimal timing:'}</strong> {lang === 'fr' ? 'Mardi-jeudi 10h-11h ou 14h-15h' : 'Tuesday-Thursday 10am-11am or 2pm-3pm'}</li>
              </ul>

              <h2 className="text-3xl font-bold text-primary-red mb-4 mt-12">
                {lang === 'fr' ? 'Meilleurs outils d\'email automation 2025' : 'Best email automation tools 2025'}
              </h2>
              <ul className="list-disc list-inside text-gray-300 mb-8 space-y-2">
                <li><strong className="text-white">Mailchimp :</strong> {lang === 'fr' ? 'Gratuit jusqu\'à 500 contacts, idéal débutants' : 'Free up to 500 contacts, ideal for beginners'}</li>
                <li><strong className="text-white">Brevo (Sendinblue) :</strong> {lang === 'fr' ? 'Solution française, excellent rapport qualité/prix' : 'French solution, excellent value for money'}</li>
                <li><strong className="text-white">ActiveCampaign :</strong> {lang === 'fr' ? 'Le plus puissant pour automation complexe' : 'Most powerful for complex automation'}</li>
                <li><strong className="text-white">HubSpot :</strong> {lang === 'fr' ? 'CRM + email, parfait B2B' : 'CRM + email, perfect for B2B'}</li>
                <li><strong className="text-white">Klaviyo :</strong> {lang === 'fr' ? 'Spécialisé e-commerce' : 'E-commerce specialist'}</li>
              </ul>

              <h2 className="text-3xl font-bold text-primary-red mb-4 mt-12">
                {lang === 'fr' ? 'Métriques à suivre' : 'Metrics to track'}
              </h2>
              <ul className="list-disc list-inside text-gray-300 mb-8 space-y-2">
                <li><strong className="text-white">{lang === 'fr' ? 'Taux d\'ouverture :' : 'Open rate:'}</strong> {lang === 'fr' ? '15-25% = bon, 25%+ = excellent' : '15-25% = good, 25%+ = excellent'}</li>
                <li><strong className="text-white">{lang === 'fr' ? 'Taux de clic (CTR) :' : 'Click rate (CTR):'}</strong> {lang === 'fr' ? '2-5% = bon' : '2-5% = good'}</li>
                <li><strong className="text-white">{lang === 'fr' ? 'Taux de conversion :' : 'Conversion rate:'}</strong> {lang === 'fr' ? 'Ventes / emails envoyés' : 'Sales / emails sent'}</li>
                <li><strong className="text-white">{lang === 'fr' ? 'Désabonnements :' : 'Unsubscribes:'}</strong> {lang === 'fr' ? '<0.5% = OK' : '<0.5% = OK'}</li>
                <li><strong className="text-white">ROI :</strong> {lang === 'fr' ? 'Revenus générés / coût total' : 'Generated revenue / total cost'}</li>
              </ul>

              <h2 className="text-3xl font-bold text-primary-red mb-4 mt-12">
                {lang === 'fr' ? 'Conclusion' : 'Conclusion'}
              </h2>
              <p className="text-gray-300 mb-8 leading-relaxed">
                {lang === 'fr'
                  ? 'L\'email marketing automation est un levier de croissance puissant et rentable. Commencez par une welcome series et un abandon de panier, puis développez progressivement vos séquences. Testez, mesurez, optimisez. Les résultats viendront.'
                  : 'Email marketing automation is a powerful and profitable growth lever. Start with a welcome series and cart abandonment, then gradually develop your sequences. Test, measure, optimize. Results will come.'}
              </p>

              <div className="bg-gradient-to-r from-primary-red/10 to-red-500/10 border border-primary-red/30 rounded-lg p-8 mt-12">
                <h3 className="text-2xl font-bold mb-4 text-white">
                  {lang === 'fr' ? 'Besoin d\'aide pour vos séquences emails ?' : 'Need help with your email sequences?'}
                </h3>
                <p className="text-gray-300 mb-6">
                  {lang === 'fr' ? 'Notre agence crée et optimise vos séquences d\'emails automatisées pour maximiser vos conversions et votre ROI.' : 'Our agency creates and optimizes your automated email sequences to maximize your conversions and ROI.'}
                </p>
                <a
                  href="/index.html#contact"
                  className="inline-block bg-primary-red px-8 py-3 rounded-lg hover:bg-red-700 transition font-semibold"
                >
                  {lang === 'fr' ? 'Optimiser mes emails' : 'Optimize my emails'}
                </a>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-gray-700">
              <a
                href="/blog.html"
                className="inline-flex items-center text-primary-red hover:text-red-400 transition"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                {lang === 'fr' ? 'Retour au blog' : 'Back to blog'}
              </a>
            </div>
          </div>
        </article>
      </main>

      <Footer />
    </>
  );
}
