import React from 'react';
import { useLanguage } from '../../LanguageContext';
import ArticleLayout from '../../components/ArticleLayout';

export default function SEOLocalStrategies() {
  const { lang } = useLanguage();

  const title = lang === 'fr'
    ? 'SEO local : Dominer les recherches géolocalisées en 2025'
    : 'Local SEO: Dominating geolocated searches in 2025';

  const date = lang === 'fr' ? '11 Mars 2025' : 'March 11, 2025';
  const category = lang === 'fr' ? 'SEO Local' : 'Local SEO';
  const image = '/images/articles/seo-local.webp';
  const excerpt = lang === 'fr' 
    ? 'Google My Business, avis clients, citations locales : le guide complet du référencement local pour attirer plus de clients.'
    : 'Google My Business, customer reviews, local citations: the complete local SEO guide to attract more customers.';

  return (
    <ArticleLayout title={title} date={date} category={category} image={image} excerpt={excerpt}>
      <div className="article-content text-gray-300">
        {lang === 'fr' ? (
          <>
            <p className="lead text-xl mb-8">
              46% des recherches Google ont une intention locale. Si vous avez une entreprise physique ou servez une zone géographique, le SEO local est votre meilleur levier d'acquisition client en 2025.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">📍 Pourquoi le SEO local est crucial</h2>

            <div className="bg-green-900/20 border border-green-600/30 rounded-lg p-6 mb-6">
              <h4 className="text-xl font-bold text-green-400 mb-3">📊 Statistiques clés :</h4>
              <ul className="list-disc list-inside space-y-2">
                <li><strong>76% des recherches locales</strong> aboutissent à une visite en magasin dans les 24h</li>
                <li><strong>28% des recherches "près de moi"</strong> se transforment en achat</li>
                <li><strong>88% des consommateurs</strong> consultent les avis Google avant de visiter</li>
                <li><strong>86% des gens</strong> utilisent Google Maps pour trouver un commerce local</li>
                <li><strong>50% des recherches mobiles</strong> locales mènent à une visite le jour même</li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">🏆 Google My Business : La base du SEO local</h2>

            <h3 className="text-2xl font-bold text-white mt-8 mb-4">1. Configuration optimale de votre fiche GMB</h3>
            
            <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6 mb-6">
              <h4 className="text-xl font-bold text-white mb-4">✅ Checklist complète :</h4>
              <ul className="space-y-2">
                <li>☑️ <strong>Nom exact</strong> : sans mots-clés spammy</li>
                <li>☑️ <strong>Catégorie principale</strong> : la plus précise possible</li>
                <li>☑️ <strong>Catégories secondaires</strong> : 2-3 catégories complémentaires</li>
                <li>☑️ <strong>Adresse complète</strong> : exactement comme sur votre site</li>
                <li>☑️ <strong>Téléphone local</strong> : numéro de votre zone</li>
                <li>☑️ <strong>Site web</strong> : lien vers page locale optimisée</li>
                <li>☑️ <strong>Horaires</strong> : à jour (+ horaires spéciaux fêtes)</li>
                <li>☑️ <strong>Description</strong> : 750 caractères avec mots-clés naturels</li>
                <li>☑️ <strong>Photos</strong> : 10+ photos de qualité (intérieur, extérieur, équipe)</li>
                <li>☑️ <strong>Attributs</strong> : WiFi, parking, accessibilité, etc.</li>
              </ul>
            </div>

            <h3 className="text-2xl font-bold text-white mt-8 mb-4">2. Photos qui convertissent</h3>
            <p className="mb-6">
              Les entreprises avec <strong>photos</strong> reçoivent <strong>42% plus de demandes d'itinéraire</strong> et <strong>35% plus de clics</strong> vers leur site.
            </p>
            <ul className="list-disc list-inside mb-6 space-y-2">
              <li><strong>Photo de couverture</strong> : haute qualité, représentative</li>
              <li><strong>Logo</strong> : fond transparent, format carré</li>
              <li><strong>Intérieur</strong> : showroom, boutique, bureau</li>
              <li><strong>Extérieur</strong> : façade reconnaissable</li>
              <li><strong>Équipe</strong> : humanisez votre entreprise</li>
              <li><strong>Produits/Services</strong> : ce que vous vendez</li>
              <li><strong>Avant/Après</strong> : pour services (coiffeur, rénovation, etc.)</li>
            </ul>

            <h3 className="text-2xl font-bold text-white mt-8 mb-4">3. Google Posts (mini-articles)</h3>
            <p className="mb-6">
              Publiez 2-4 fois/mois des Google Posts pour rester actif :
            </p>
            <ul className="list-disc list-inside mb-6 space-y-2">
              <li>Promotions et offres spéciales</li>
              <li>Nouveaux produits/services</li>
              <li>Événements locaux</li>
              <li>Actualités de l'entreprise</li>
            </ul>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">⭐ Avis clients : Le facteur #1 du SEO local</h2>

            <div className="bg-blue-900/20 border border-blue-600/30 rounded-lg p-6 mb-6">
              <h4 className="text-xl font-bold text-blue-400 mb-3">💡 Impact des avis :</h4>
              <ul className="list-disc list-inside space-y-2">
                <li><strong>Note 4.5+</strong> : +30% de chances d'apparaître dans le "Pack Local"</li>
                <li><strong>Volume d'avis</strong> : plus vous en avez, mieux c'est (objectif : 50+)</li>
                <li><strong>Fraîcheur</strong> : avis récents = signal de confiance</li>
                <li><strong>Réponses</strong> : 100% des avis doivent avoir une réponse</li>
                <li><strong>Mots-clés</strong> : avis contenant vos services = bonus SEO</li>
              </ul>
            </div>

            <h3 className="text-2xl font-bold text-white mt-8 mb-4">Stratégie pour obtenir plus d'avis</h3>

            <div className="space-y-4 mb-6">
              <div className="bg-gray-800/50 border-l-4 border-primary-red p-4">
                <h4 className="font-bold text-white mb-2">1. Demandez au bon moment</h4>
                <p className="text-sm">Juste après l'achat ou la prestation, quand le client est satisfait.</p>
              </div>

              <div className="bg-gray-800/50 border-l-4 border-primary-red p-4">
                <h4 className="font-bold text-white mb-2">2. Facilitez le processus</h4>
                <p className="text-sm">Créez un lien court : g.page/votreentreprise/review</p>
              </div>

              <div className="bg-gray-800/50 border-l-4 border-primary-red p-4">
                <h4 className="font-bold text-white mb-2">3. Email/SMS de suivi</h4>
                <p className="text-sm">Envoyez un message de remerciement avec lien vers avis 48h après.</p>
              </div>

              <div className="bg-gray-800/50 border-l-4 border-primary-red p-4">
                <h4 className="font-bold text-white mb-2">4. QR Code en boutique</h4>
                <p className="text-sm">Affichage visible en caisse ou à la sortie.</p>
              </div>

              <div className="bg-gray-800/50 border-l-4 border-primary-red p-4">
                <h4 className="font-bold text-white mb-2">5. Incitation (légale)</h4>
                <p className="text-sm">Concours/tirage au sort pour clients qui laissent un avis (sans obligation de positivité).</p>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-white mt-8 mb-4">Comment répondre aux avis</h3>

            <div className="bg-green-900/20 border border-green-600/30 rounded-lg p-6 mb-6">
              <h4 className="text-xl font-bold text-green-400 mb-3">✅ Avis positifs :</h4>
              <ul className="list-disc list-inside space-y-2">
                <li>Remerciez personnellement (utilisez le prénom)</li>
                <li>Mentionnez le service/produit spécifique</li>
                <li>Invitez à revenir</li>
                <li>Restez authentique et court (50-100 mots)</li>
              </ul>
            </div>

            <div className="bg-red-900/20 border border-red-600/30 rounded-lg p-6 mb-6">
              <h4 className="text-xl font-bold text-red-400 mb-3">⚠️ Avis négatifs :</h4>
              <ul className="list-disc list-inside space-y-2">
                <li><strong>Répondez rapidement</strong> (moins de 24h)</li>
                <li><strong>Excusez-vous</strong> même si vous n'êtes pas d'accord</li>
                <li><strong>Proposez une solution</strong> concrète</li>
                <li><strong>Invitez offline</strong> pour résoudre le problème</li>
                <li><strong>Restez professionnel</strong> : jamais de conflit public</li>
                <li><strong>Apprenez</strong> : identifiez les problèmes récurrents</li>
              </ul>
              <p className="mt-4 text-sm">
                <strong>Template :</strong> "Bonjour [Prénom], nous sommes désolés de votre expérience. Nous prenons vos retours très au sérieux. Pourriez-vous nous contacter au [téléphone] pour que nous puissions corriger cela ? Merci, [Votre nom]."
              </p>
            </div>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">🔗 Citations locales (NAP)</h2>

            <p className="mb-6">
              Les <strong>citations</strong> sont des mentions de votre entreprise (Nom, Adresse, Téléphone) sur d'autres sites.
            </p>

            <h3 className="text-2xl font-bold text-white mt-8 mb-4">Annuaires prioritaires France</h3>
            <ol className="list-decimal list-inside mb-6 space-y-2">
              <li><strong>PagesJaunes.fr</strong> - Le plus important</li>
              <li><strong>Yelp.fr</strong> - Influence Google</li>
              <li><strong>Facebook Business</strong> - Vérifiez la cohérence</li>
              <li><strong>Bing Places</strong> - Pour Bing/Edge</li>
              <li><strong>Apple Maps</strong> - Pour iPhone</li>
              <li><strong>Waze</strong> - Navigation GPS</li>
              <li><strong>TripAdvisor</strong> (restaurants/hôtels)</li>
              <li><strong>Foursquare</strong></li>
              <li><strong>L'Annuaire</strong></li>
              <li><strong>Annuaires professionnels</strong> de votre secteur</li>
            </ol>

            <div className="bg-yellow-900/20 border border-yellow-600/30 rounded-lg p-6 mb-6">
              <h4 className="text-xl font-bold text-yellow-400 mb-3">⚠️ Règle d'or : Cohérence NAP</h4>
              <p className="mb-3">Votre Nom, Adresse, Téléphone doivent être <strong>100% identiques</strong> partout :</p>
              <ul className="list-disc list-inside space-y-2 text-sm">
                <li>Pas "Rue" sur un site et "R." sur un autre</li>
                <li>Même format de téléphone partout (06 XX XX XX XX)</li>
                <li>Même nom d'entreprise (avec/sans SARL, accent, etc.)</li>
              </ul>
              <p className="mt-3 text-sm">
                Incohérences = confusion pour Google = moins bon classement.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">🌐 SEO On-Page pour le local</h2>

            <h3 className="text-2xl font-bold text-white mt-8 mb-4">1. Pages localisées</h3>
            <p className="mb-6">
              Créez une page dédiée par ville/quartier que vous servez :
            </p>
            <ul className="list-disc list-inside mb-6 space-y-2">
              <li><strong>URL</strong> : /plombier-paris-15</li>
              <li><strong>Title</strong> : "Plombier Paris 15ème | Intervention Rapide 24/7"</li>
              <li><strong>H1</strong> : "Votre Plombier de Confiance dans le 15ème Arrondissement"</li>
              <li><strong>Contenu</strong> : 500+ mots sur vos services dans cette zone</li>
              <li><strong>Landmarks locaux</strong> : mentionnez Tour Eiffel, Parc André Citroën</li>
              <li><strong>Témoignages</strong> : de clients de cette zone</li>
              <li><strong>Carte</strong> : Google Maps embed de votre localisation</li>
            </ul>

            <h3 className="text-2xl font-bold text-white mt-8 mb-4">2. Schema.org LocalBusiness</h3>
            <div className="bg-gray-800 rounded-lg p-6 mb-6">
              <pre className="text-sm overflow-x-auto">
{`<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Votre Entreprise",
  "image": "https://example.com/logo.jpg",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "123 Rue Example",
    "addressLocality": "Paris",
    "postalCode": "75015",
    "addressCountry": "FR"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 48.8566,
    "longitude": 2.3522
  },
  "telephone": "+33612345678",
  "priceRange": "€€",
  "openingHours": "Mo-Fr 09:00-18:00"
}
</script>`}
              </pre>
            </div>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">📱 Mobile-First absolu</h2>
            <p className="mb-6">
              <strong>61% des recherches locales</strong> se font sur mobile. Votre site DOIT être :
            </p>
            <ul className="list-disc list-inside mb-6 space-y-2">
              <li>Rapide (&lt; 3s de chargement)</li>
              <li>Click-to-call évident</li>
              <li>Itinéraire accessible en 1 clic</li>
              <li>Formulaire simple (3-4 champs max)</li>
              <li>WhatsApp Business intégré</li>
            </ul>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">🚀 Checklist SEO Local Complète</h2>

            <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6 mb-6">
              <h4 className="text-xl font-bold text-white mb-4">✅ To-Do List (30 jours) :</h4>
              
              <div className="space-y-3">
                <div>
                  <h5 className="font-bold text-primary-red mb-1">Semaine 1 : Fondations</h5>
                  <ul className="list-disc list-inside text-sm space-y-1">
                    <li>Créer/optimiser Google My Business</li>
                    <li>Vérifier cohérence NAP sur tous les sites</li>
                    <li>Ajouter 10+ photos GMB</li>
                    <li>Installer Schema LocalBusiness</li>
                  </ul>
                </div>

                <div>
                  <h5 className="font-bold text-primary-red mb-1">Semaine 2 : Avis</h5>
                  <ul className="list-disc list-inside text-sm space-y-1">
                    <li>Créer lien court d'avis</li>
                    <li>Mettre QR code en boutique</li>
                    <li>Envoyer email à 50 clients satisfaits</li>
                    <li>Répondre à TOUS les avis existants</li>
                  </ul>
                </div>

                <div>
                  <h5 className="font-bold text-primary-red mb-1">Semaine 3 : Citations</h5>
                  <ul className="list-disc list-inside text-sm space-y-1">
                    <li>S'inscrire sur 10 annuaires majeurs</li>
                    <li>Vérifier cohérence des infos</li>
                    <li>Corriger citations incorrectes</li>
                  </ul>
                </div>

                <div>
                  <h5 className="font-bold text-primary-red mb-1">Semaine 4 : Contenu</h5>
                  <ul className="list-disc list-inside text-sm space-y-1">
                    <li>Créer 3 pages localisées</li>
                    <li>Publier 2 Google Posts</li>
                    <li>Optimiser mobile (test PageSpeed)</li>
                    <li>Ajouter click-to-call partout</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-primary-red/10 border border-primary-red/30 rounded-lg p-6 mt-12">
              <h3 className="text-2xl font-bold text-white mb-4">🎯 Conclusion</h3>
              <p className="mb-4">
                Le SEO local n'est pas optionnel en 2025 : c'est le canal d'acquisition #1 pour les entreprises locales. Avec Google My Business optimisé, une stratégie d'avis solide, et des citations cohérentes, vous dominerez votre marché local.
              </p>
              <p className="mb-0">
                <strong>ROI attendu :</strong> La plupart des entreprises voient +50% de leads qualifiés dans les 3 mois après optimisation SEO local. Commencez aujourd'hui !
              </p>
            </div>
          </>
        ) : (
          <>
            <p className="lead text-xl mb-8">
              46% of Google searches have local intent. If you have a physical business or serve a geographic area, local SEO is your best customer acquisition lever in 2025.
            </p>

            <div className="bg-primary-red/10 border border-primary-red/30 rounded-lg p-6 mt-12">
              <h3 className="text-2xl font-bold text-white mb-4">🎯 Conclusion</h3>
              <p className="mb-4">
                Local SEO is not optional in 2025: it's the #1 acquisition channel for local businesses. With an optimized Google My Business, a solid review strategy, and consistent citations, you'll dominate your local market.
              </p>
              <p className="mb-0">
                <strong>Expected ROI:</strong> Most businesses see +50% qualified leads within 3 months after local SEO optimization. Start today!
              </p>
            </div>
          </>
        )}
      </div>
    </ArticleLayout>
  );
}
