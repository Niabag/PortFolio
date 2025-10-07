import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../LanguageContext.jsx';

export default function FAQ() {
  const { t } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(null);
  const [activeCategory, setActiveCategory] = useState('web');
  const sectionRef = useRef(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    setActiveIndex(null);
  };

  // Scroll au début de la section quand elle devient visible
  useEffect(() => {
    const section = sectionRef.current;
    if (section) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              section.scrollTop = 0;
            }
          });
        },
        { threshold: 0.5 }
      );
      observer.observe(section);
      return () => observer.disconnect();
    }
  }, []);

  const categories = t('faq.categories');
  const currentItems = categories[activeCategory]?.items || [];

  return (
    <section id="faq" ref={sectionRef} className="snap-section scrollable relative z-10">
      <div className="container mx-auto px-8 sm:px-16 lg:px-24 xl:px-32 max-w-[1400px]">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-6xl font-bold mb-4 text-white">
            {t('faq.title.part1')} <span className="text-primary-red">{t('faq.title.part2')}</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            {t('faq.subtitle')}
          </p>
        </div>

        {/* Onglets de catégories */}
        <div className="max-w-4xl mx-auto mb-8">
          <div className="flex justify-center gap-4 flex-wrap">
            <button
              onClick={() => handleCategoryChange('web')}
              className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${activeCategory === 'web'
                  ? 'bg-primary-red text-white shadow-lg shadow-primary-red/50'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
            >
              💻 {categories.web?.title || 'Web'}
            </button>
            <button
              onClick={() => handleCategoryChange('marketing')}
              className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${activeCategory === 'marketing'
                  ? 'bg-primary-red text-white shadow-lg shadow-primary-red/50'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
            >
              📊 {categories.marketing?.title || 'Marketing'}
            </button>
          </div>
        </div>

        {/* Questions/Réponses */}
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {currentItems.map((item, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded-lg overflow-hidden border border-gray-700 transition-all duration-300"
              >
                <button
                  className={`w-full px-6 py-4 text-left flex justify-between items-center ${activeIndex === index ? 'bg-gray-750' : ''} hover:bg-gray-750 transition-colors`}
                  onClick={() => toggleAccordion(index)}
                >
                  <span className="font-medium text-lg">{item.question}</span>
                  <svg
                    className={`w-5 h-5 transform transition-transform ${activeIndex === index ? 'rotate-180' : ''}`}
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
                  <div className="px-6 py-4 bg-gray-800">
                    <p className="text-gray-300">{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
