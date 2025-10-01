import React, { useState } from 'react';
import { useLanguage } from '../LanguageContext';
import { translations } from '../data/translations';

export default function FAQ() {
  const { t, lang } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(null);
  const faqItems = translations[lang].faq.items;

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-primary-red">{t('faq.title.part1')}</span> {t('faq.title.part2')}
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            {t('faq.subtitle')}
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqItems.map((item, index) => (
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
