import React, { useState } from 'react';
import { useLanguage } from '../LanguageContext.jsx';

export default function Competences({ onServiceClick }) {
  const { t } = useLanguage();
  const categories = t('skills.categories');
  const title = t('skills.title');
  const [hoveredCard, setHoveredCard] = useState(null);
  const [expandedCard, setExpandedCard] = useState(null);

  // Debug
  console.log('Competences - onServiceClick defined:', typeof onServiceClick);

  const createBubbles = (cardIndex) => {
    const bubbles = [];
    const bubbleCount = 20;

    for (let i = 0; i < bubbleCount; i++) {
      const delay = Math.random() * 0.7;
      const size = Math.random() * 20 + 10;
      const leftPos = Math.random() * 100;
      const duration = 1.1;

      bubbles.push(
        <div
          key={`bubble-${cardIndex}-${i}`}
          className="skill-bubble"
          style={{
            left: `${leftPos}%`,
            width: `${size}px`,
            height: `${size}px`,
            animationDelay: `${delay}s`,
            animationDuration: `${duration}s`
          }}
        />
      );
    }
    return bubbles;
  };

  const handleCardHover = (index, isHovering) => {
    if (isHovering) {
      setHoveredCard(index);
    } else {
      setTimeout(() => {
        setHoveredCard(current => current === index ? null : current);
      }, 10);
    }
  };

  const toggleExpand = (index, e) => {
    if (e) e.stopPropagation();
    setExpandedCard(expandedCard === index ? null : index);
  };

  const handleCardClick = (index, hasMoreServices, e) => {
    // Ne pas ouvrir la page si on clique sur un bouton ou un de ses enfants
    if (e && (e.target.tagName === 'BUTTON' || e.target.closest('button'))) {
      console.log('Click on button detected, ignoring card click');
      return;
    }
    console.log('Card clicked, opening service:', categories[index].title);
    onServiceClick(categories[index]);
  };

  return (
    <section id="competences" className="snap-section relative z-10">
      <div className="container mx-auto px-6 sm:px-12 lg:px-16 xl:px-20 max-w-[1400px] py-4 sm:py-6">
        <div className="text-center mb-4 sm:mb-6">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3 text-white">
            {title.part1} <span className="text-primary-red">{title.part2}</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary-red to-transparent mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
          {categories.map((category, index) => (
            <div
              key={`skill-${index}-${category.title}`}
              className="skill-card-wrapper relative"
              onMouseEnter={() => handleCardHover(index, true)}
              onMouseLeave={() => handleCardHover(index, false)}
              onClick={(e) => handleCardClick(index, category.services.length > 2, e)}
            >
              <div className={`skill-card relative cursor-pointer ${hoveredCard === index ? 'hovered' : ''}`}>
                <div className="skill-card-gradient"></div>

                <div className="relative z-10 p-4 sm:p-5">
                  <div className="skill-icon-wrapper mb-2">
                    {category.iconImage ? (
                      <img 
                        src={category.iconImage} 
                        alt={category.title}
                        className="w-12 h-12 sm:w-16 sm:h-16 object-contain"
                      />
                    ) : (
                      <span className="text-4xl sm:text-5xl">{category.icon}</span>
                    )}
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold mb-2 text-white">
                    {category.title}
                  </h3>

                  <ul className="space-y-2 text-left">
                    {category.services.map((service, serviceIndex) => {
                      const isVisible = expandedCard === index || serviceIndex < 2;
                      return (
                        <li
                          key={serviceIndex}
                          className={`flex items-start gap-2 text-gray-300 text-sm transition-all duration-300 ${isVisible ? 'opacity-100 max-h-32' : 'opacity-0 max-h-0 overflow-hidden'
                            }`}
                        >
                          <span className="text-primary-red mt-1 flex-shrink-0">▸</span>
                          <span>{service}</span>
                        </li>
                      );
                    })}
                  </ul>

                  {category.services.length > 2 && (
                    <button
                      onClick={(e) => toggleExpand(index, e)}
                      className="mt-4 text-primary-red hover:text-red-400 transition-colors duration-300 text-sm font-semibold flex items-center gap-1 cursor-pointer"
                      type="button"
                    >
                      {expandedCard === index ? '− Voir moins' : '+ Voir plus'}
                    </button>
                  )}

                  {/* Bouton En savoir plus */}
                  <div className="mt-4 pt-4 border-t border-gray-700">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        console.log('Button clicked, category:', category.title);
                        console.log('onServiceClick type:', typeof onServiceClick);
                        if (onServiceClick) {
                          onServiceClick(category);
                          console.log('onServiceClick called successfully');
                        } else {
                          console.error('onServiceClick is not defined!');
                        }
                      }}
                      className="w-full bg-gradient-to-r from-primary-red to-red-600 hover:from-red-600 hover:to-primary-red text-white px-4 py-2 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
                      type="button"
                    >
                      En savoir plus
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </button>
                  </div>
                </div>

                <div className="skill-card-border"></div>
              </div>

              {hoveredCard === index && (
                <div className="skill-bubbles-container" key={`bubbles-${index}`}>
                  {createBubbles(index)}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary-red opacity-5 blur-3xl rounded-full pointer-events-none"></div>
      </div>
    </section>
  );
}
