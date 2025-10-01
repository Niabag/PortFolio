import React, { useState } from 'react';
import { useLanguage } from '../LanguageContext';
import { translations } from '../data/translations';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AnimatedBackground from '../components/AnimatedBackground';

export default function FAQPage() {
  const { t, lang } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(null);
  const faqItems = translations[lang].faq.items;

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      <AnimatedBackground />
      <Navbar />
      
      <main className="min-h-screen pt-24 pb-20">
        <section className="py-20 bg-transparent text-white">
          <div className="container mx-auto px-4">
            {/* En-tête de la page */}
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                <span className="text-primary-red">{t('faq.title.part1')}</span> {t('faq.title.part2')}
              </h1>
              <p className="text-gray-400 text-xl max-w-3xl mx-auto">
                {t('faq.subtitle')}
              </p>
            </div>

            {/* Liste des questions */}
            <div className="max-w-4xl mx-auto">
              <div className="space-y-4">
                {faqItems.map((item, index) => (
                  <div 
                    key={index} 
                    className="bg-gray-800/50 backdrop-blur-sm rounded-lg overflow-hidden border border-gray-700 transition-all duration-300 hover:border-primary-red/50"
                  >
                    <button
                      className={`w-full px-6 py-5 text-left flex justify-between items-center ${
                        activeIndex === index ? 'bg-gray-800/70' : ''
                      } hover:bg-gray-800/70 transition-colors`}
                      onClick={() => toggleAccordion(index)}
                    >
                      <span className="font-semibold text-lg pr-4">{item.question}</span>
                      <svg
                        className={`w-6 h-6 flex-shrink-0 transform transition-transform duration-300 text-primary-red ${
                          activeIndex === index ? 'rotate-180' : ''
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                    {activeIndex === index && (
                      <div className="px-6 py-5 bg-gray-800/70 border-t border-gray-700">
                        <p className="text-gray-300 leading-relaxed">{item.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Call to action */}
            <div className="mt-16 text-center">
              <div className="bg-gradient-to-r from-primary-red/10 to-red-500/10 border border-primary-red/30 rounded-lg p-8 max-w-2xl mx-auto">
                <h2 className="text-2xl font-bold mb-4">
                  {lang === 'fr' ? 'Vous avez d\'autres questions ?' : 'Have more questions?'}
                </h2>
                <p className="text-gray-400 mb-6">
                  {lang === 'fr' 
                    ? 'N\'hésitez pas à nous contacter pour obtenir plus d\'informations sur nos services.'
                    : 'Feel free to contact us for more information about our services.'}
                </p>
                <a
                  href="/index.html#contact"
                  className="inline-block bg-primary-red px-8 py-3 rounded-lg hover:bg-red-700 transition font-semibold"
                >
                  {lang === 'fr' ? 'Nous contacter' : 'Contact us'}
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
