import React, { useMemo } from 'react';
import { useLanguage } from '../LanguageContext.jsx';
import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';
import AnimatedBackground from './AnimatedBackground.jsx';
import SocialButtons from './SocialButtons.jsx';

// Reuse the content structure from translations
import { translations } from '../data/translations.js';

function getSlug(str) {
  return str
    .toLowerCase()
    .normalize('NFD').replace(/\p{Diacritic}/gu, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

export default function ServiceDetailPage() {
  const { lang } = useLanguage();
  const params = new URLSearchParams(window.location.search);
  const slug = params.get('slug');

  const service = useMemo(() => {
    const list = translations[lang]?.skills?.categories || [];
    if (!slug) return null;
    return list.find(c => getSlug(c.title) === slug) || null;
  }, [lang, slug]);

  return (
    <>
      <SocialButtons />
      <AnimatedBackground />
      <Navbar />
      <main className="scroll-container">
        {!service ? (
          <section className="snap-section relative z-10">
            <div className="container mx-auto px-6 max-w-[1200px] py-10">
              <h1 className="text-2xl font-bold">Service introuvable</h1>
              <p className="text-gray-400 mt-2">Vérifiez l'URL ou revenez aux services.</p>
              <a href="/#competences" className="inline-block mt-4 text-primary-red underline">Retour aux services</a>
            </div>
          </section>
        ) : (
          <section className="snap-section relative z-10">
            <div className="container mx-auto px-6 sm:px-12 lg:px-16 xl:px-20 max-w-[1200px] py-10">
              <div className="text-center mb-8">
                <div className="mb-4">
                  {service.iconImage ? (
                    <img src={service.iconImage} alt={service.title} className="w-20 h-20 object-contain mx-auto" />
                  ) : (
                    <span className="text-6xl">{service.icon}</span>
                  )}
                </div>
                <h1 className="text-3xl sm:text-4xl font-bold mb-3">{service.title}</h1>
                <p className="text-gray-300 max-w-3xl mx-auto text-lg">{service.detailedDescription}</p>
              </div>

              <div className="mb-10">
                <h2 className="text-2xl font-bold mb-4"><span className="text-primary-red">✓</span> Services inclus</h2>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {service.services.map((s, i) => (
                    <li key={i} className="flex items-start gap-2 bg-gray-800/50 border border-gray-700 rounded-lg p-4">
                      <span className="text-primary-red mt-1">▸</span>
                      <span className="text-gray-300">{s}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {service.benefits && (
                <div className="mb-10">
                  <h2 className="text-2xl font-bold mb-4"><span className="text-primary-red">★</span> Vos avantages</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {service.benefits.map((b, i) => (
                      <div key={i} className="bg-gray-800/50 border border-gray-700 rounded-lg p-4 text-center">
                        <div className="w-10 h-10 rounded-full bg-primary-red text-white flex items-center justify-center mx-auto mb-3">✓</div>
                        <div className="text-gray-300 font-semibold">{b}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {service.process && (
                <div className="mb-10">
                  <h2 className="text-2xl font-bold mb-4"><span className="text-primary-red">→</span> Notre processus</h2>
                  <div className="space-y-3">
                    {service.process.map((p, i) => (
                      <div key={i} className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-lg p-4 border border-gray-700 flex items-start gap-4">
                        <div className="w-8 h-8 rounded-full bg-primary-red text-white flex items-center justify-center font-bold flex-shrink-0">{i+1}</div>
                        <div className="text-gray-300">{p}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="bg-gradient-to-r from-primary-red/10 to-primary-red/5 border-2 border-primary-red rounded-xl p-8 text-center">
                <h3 className="text-2xl font-bold mb-3">Prêt à booster votre présence digitale ?</h3>
                <p className="text-gray-300 mb-6">Contactez-nous pour un devis gratuit et personnalisé. Réponse sous 24h.</p>
                <a href="/#contact" className="inline-flex items-center gap-2 bg-primary-red hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300">
                  Nous contacter
                </a>
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}
