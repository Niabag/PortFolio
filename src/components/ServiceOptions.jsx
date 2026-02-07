import { useLanguage } from '../LanguageContext';

export default function ServiceOptions() {
  const { lang } = useLanguage();

  const translations = {
    fr: {
      sectionTitle: 'Comment créer votre site web ?',
      sectionSubtitle: '3 options, des résultats différents',
      compareTitle: 'Comparaison détaillée',
      ctaButton: 'Demander un devis gratuit',

      options: [
        {
          title: '🏢 Agence Web',
          price: '5 000€ - 50 000€+',
          duration: '2-6 mois',
          best: 'Projets complexes, grandes entreprises',
          pros: [
            '✅ Équipe complète (design, dev, marketing)',
            '✅ Expertise technique avancée',
            '✅ Support & maintenance inclus',
            '✅ Garantie de résultat',
            '✅ Processus professionnel structuré'
          ],
          cons: [
            '❌ Prix élevé',
            '❌ Délais plus longs',
            '❌ Moins de flexibilité',
            '❌ Communication par intermédiaires'
          ],
          color: 'from-blue-600 to-blue-800'
        },
        {
          title: '👨‍💻 Freelance',
          price: '1 500€ - 15 000€',
          duration: '2 semaines - 3 mois',
          best: 'PME, startups, budgets moyens',
          pros: [
            '✅ Prix compétitifs (30-50% moins cher)',
            '✅ Contact direct & réactif',
            '✅ Flexibilité maximale',
            '✅ Personnalisation sur mesure',
            '✅ Délais souvent plus courts'
          ],
          cons: [
            '❌ Ressources limitées (une personne)',
            '❌ Disponibilité variable',
            '❌ Moins de garanties légales',
            '❌ Dépendance à une seule personne'
          ],
          color: 'from-primary-red to-red-700',
          featured: true
        },
        {
          title: '🛠️ CMS (Wix, Shopify)',
          price: '0€ - 500€',
          duration: '1-7 jours',
          best: 'Sites simples, petits budgets',
          pros: [
            '✅ Prix très bas ou gratuit',
            '✅ Mise en ligne rapide',
            '✅ Interface facile (glisser-déposer)',
            '✅ Templates prêts à l\'emploi',
            '✅ Pas besoin de compétences techniques'
          ],
          cons: [
            '❌ Limitations techniques importantes',
            '❌ Design générique',
            '❌ Frais mensuels récurrents (20-80€/mois)',
            '❌ SEO limité',
            '❌ Vous ne possédez pas vraiment votre site'
          ],
          color: 'from-purple-600 to-purple-800'
        }
      ],

      comparison: {
        rows: [
          { label: 'Prix initial', agency: '5K-50K€', freelance: '1.5K-15K€', cms: '0-500€' },
          { label: 'Coûts mensuels', agency: '100-500€', freelance: '0-200€', cms: '20-80€' },
          { label: 'Délai de livraison', agency: '2-6 mois', freelance: '2 sem-3 mois', cms: '1-7 jours' },
          { label: 'Personnalisation', agency: '⭐⭐⭐⭐⭐', freelance: '⭐⭐⭐⭐⭐', cms: '⭐⭐' },
          { label: 'Performance SEO', agency: '⭐⭐⭐⭐⭐', freelance: '⭐⭐⭐⭐', cms: '⭐⭐' },
          { label: 'Support technique', agency: '24/7', freelance: 'Sur demande', cms: 'Email uniquement' },
          { label: 'Évolutivité', agency: '⭐⭐⭐⭐⭐', freelance: '⭐⭐⭐⭐', cms: '⭐⭐' },
          { label: 'Propriété du code', agency: '✅ Vous', freelance: '✅ Vous', cms: '❌ Plateforme' }
        ]
      }
    },
    en: {
      sectionTitle: 'How to create your website?',
      sectionSubtitle: '3 options, different results',
      compareTitle: 'Detailed comparison',
      ctaButton: 'Request free quote',

      options: [
        {
          title: '🏢 Web Agency',
          price: '€5,000 - €50,000+',
          duration: '2-6 months',
          best: 'Complex projects, large companies',
          pros: [
            '✅ Full team (design, dev, marketing)',
            '✅ Advanced technical expertise',
            '✅ Support & maintenance included',
            '✅ Result guarantee',
            '✅ Structured professional process'
          ],
          cons: [
            '❌ High price',
            '❌ Longer delays',
            '❌ Less flexibility',
            '❌ Communication through intermediaries'
          ],
          color: 'from-blue-600 to-blue-800'
        },
        {
          title: '👨‍💻 Freelancer',
          price: '€1,500 - €15,000',
          duration: '2 weeks - 3 months',
          best: 'SMEs, startups, medium budgets',
          pros: [
            '✅ Competitive prices (30-50% cheaper)',
            '✅ Direct & responsive contact',
            '✅ Maximum flexibility',
            '✅ Custom personalization',
            '✅ Often shorter deadlines'
          ],
          cons: [
            '❌ Limited resources (one person)',
            '❌ Variable availability',
            '❌ Fewer legal guarantees',
            '❌ Dependency on one person'
          ],
          color: 'from-primary-red to-red-700',
          featured: true
        },
        {
          title: '🛠️ CMS (Wix, Shopify)',
          price: '€0 - €500',
          duration: '1-7 days',
          best: 'Simple sites, small budgets',
          pros: [
            '✅ Very low or free price',
            '✅ Fast launch',
            '✅ Easy interface (drag & drop)',
            '✅ Ready-to-use templates',
            '✅ No technical skills needed'
          ],
          cons: [
            '❌ Significant technical limitations',
            '❌ Generic design',
            '❌ Recurring monthly fees (€20-80/month)',
            '❌ Limited SEO',
            '❌ You don\'t really own your site'
          ],
          color: 'from-purple-600 to-purple-800'
        }
      ],

      comparison: {
        rows: [
          { label: 'Initial price', agency: '€5K-50K', freelance: '€1.5K-15K', cms: '€0-500' },
          { label: 'Monthly costs', agency: '€100-500', freelance: '€0-200', cms: '€20-80' },
          { label: 'Delivery time', agency: '2-6 months', freelance: '2 wks-3 mo', cms: '1-7 days' },
          { label: 'Customization', agency: '⭐⭐⭐⭐⭐', freelance: '⭐⭐⭐⭐⭐', cms: '⭐⭐' },
          { label: 'SEO performance', agency: '⭐⭐⭐⭐⭐', freelance: '⭐⭐⭐⭐', cms: '⭐⭐' },
          { label: 'Technical support', agency: '24/7', freelance: 'On demand', cms: 'Email only' },
          { label: 'Scalability', agency: '⭐⭐⭐⭐⭐', freelance: '⭐⭐⭐⭐', cms: '⭐⭐' },
          { label: 'Code ownership', agency: '✅ You', freelance: '✅ You', cms: '❌ Platform' }
        ]
      }
    }
  };

  const t = translations[lang];

  return (
    <section className="py-20 bg-transparent relative z-10">
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

        {/* Grille des 3 options */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {t.options.map((option, index) => (
            <div
              key={index}
              className={`relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 border ${
                option.featured ? 'border-primary-red ring-2 ring-primary-red' : 'border-gray-700'
              } rounded-xl p-6 hover:scale-105 transition-all duration-300`}
            >
              {/* Badge recommandé */}
              {option.featured && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary-red px-4 py-1 rounded-full text-sm font-bold">
                  {lang === 'fr' ? '⭐ Recommandé' : '⭐ Recommended'}
                </div>
              )}

              {/* En-tête carte */}
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {option.title}
                </h3>
                <div className={`bg-gradient-to-r ${option.color} text-white px-4 py-2 rounded-lg font-bold text-lg mb-2`}>
                  {option.price}
                </div>
                <div className="text-gray-400 text-sm mb-2">
                  ⏱️ {option.duration}
                </div>
                <div className="text-green-400 text-sm font-semibold">
                  👍 {option.best}
                </div>
              </div>

              {/* Avantages */}
              <div className="mb-4">
                <h4 className="font-bold text-white mb-2 text-sm uppercase">
                  {lang === 'fr' ? 'Avantages' : 'Pros'}
                </h4>
                <ul className="space-y-1">
                  {option.pros.map((pro, i) => (
                    <li key={i} className="text-sm text-gray-300">{pro}</li>
                  ))}
                </ul>
              </div>

              {/* Inconvénients */}
              <div>
                <h4 className="font-bold text-white mb-2 text-sm uppercase">
                  {lang === 'fr' ? 'Inconvénients' : 'Cons'}
                </h4>
                <ul className="space-y-1">
                  {option.cons.map((con, i) => (
                    <li key={i} className="text-sm text-gray-400">{con}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Tableau comparatif */}
        <div className="mb-12">
          <h3 className="text-3xl font-bold text-center mb-8 text-white">
            {t.compareTitle}
          </h3>

          <div className="overflow-x-auto">
            <table className="w-full bg-gray-900 border border-gray-700 rounded-lg">
              <thead>
                <tr className="bg-gray-800">
                  <th className="p-4 text-left text-white font-bold border-b border-gray-700">
                    {lang === 'fr' ? 'Critère' : 'Criteria'}
                  </th>
                  <th className="p-4 text-center text-white font-bold border-b border-gray-700">
                    🏢 Agence
                  </th>
                  <th className="p-4 text-center text-primary-red font-bold border-b border-gray-700 bg-primary-red/10">
                    👨‍💻 Freelance
                  </th>
                  <th className="p-4 text-center text-white font-bold border-b border-gray-700">
                    🛠️ CMS
                  </th>
                </tr>
              </thead>
              <tbody>
                {t.comparison.rows.map((row, index) => (
                  <tr key={index} className="border-b border-gray-800 hover:bg-gray-800/50 transition">
                    <td className="p-4 text-gray-300 font-semibold">{row.label}</td>
                    <td className="p-4 text-center text-gray-400">{row.agency}</td>
                    <td className="p-4 text-center text-white bg-primary-red/5">{row.freelance}</td>
                    <td className="p-4 text-center text-gray-400">{row.cms}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* CTA final */}
        <div className="text-center">
          <a
            href="#contact"
            className="inline-block bg-primary-red hover:bg-red-700 text-white font-bold py-4 px-8 rounded-lg transition transform hover:scale-105 shadow-lg"
          >
            {t.ctaButton}
          </a>
        </div>
      </div>
    </section>
  );
}
