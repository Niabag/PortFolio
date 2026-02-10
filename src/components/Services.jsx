import React, { useState, useMemo } from 'react';
import { useLanguage } from '../LanguageContext.jsx';

export default function Services() {
  const { t } = useLanguage();
  const categories = t('skills.categories');
  const title = t('skills.title');
  const [hoveredCard, setHoveredCard] = useState(null);
  const [expandedCard, setExpandedCard] = useState(null);

  // Pré-calculer les bulles une seule fois
  const allBubbles = useMemo(() => {
    const result = {};
    for (let cardIndex = 0; cardIndex < 10; cardIndex++) {
      const bubbles = [];
      for (let i = 0; i < 8; i++) {
        bubbles.push({
          key: `bubble-${cardIndex}-${i}`,
          left: `${Math.random() * 100}%`,
          width: `${Math.random() * 20 + 10}px`,
          height: `${Math.random() * 20 + 10}px`,
          animationDelay: `${Math.random() * 0.7}s`,
          animationDuration: '1.1s'
        });
      }
      result[cardIndex] = bubbles;
    }
    return result;
  }, []);

  const handleCardHover = (index, isHovering) => {
    if (isHovering) {
      setHoveredCard(index);
    } else {
      setHoveredCard(current => current === index ? null : current);
    }
  };

  const toggleExpand = (index, e) => {
    e.stopPropagation();
    setExpandedCard(expandedCard === index ? null : index);
  };

  return (
    <section id="services" className="py-16 sm:py-24 relative z-10 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-20">
          <h2 className="text-4xl sm:text-6xl font-bold mb-4 text-white">
            {title.part1} <span className="text-primary-red">{title.part2}</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary-red to-transparent mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {categories.map((category, index) => (
            <div
              key={`skill-${index}-${category.title}`}
              className="skill-card-wrapper relative"
              onMouseEnter={() => handleCardHover(index, true)}
              onMouseLeave={() => handleCardHover(index, false)}
            >
              <div className={`skill-card relative ${hoveredCard === index ? 'hovered' : ''}`}>
                <div className="skill-card-gradient"></div>

                <div className="relative z-10 p-6 sm:p-8">
                  <div className="skill-icon-wrapper mb-4">
                    {category.iconImage ? (
                      <img src={category.iconImage} alt={category.title} className="w-14 h-14 sm:w-16 sm:h-16 object-contain" />
                    ) : (
                      <span className="text-5xl sm:text-6xl">{category.icon}</span>
                    )}
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold mb-4 text-white">
                    {category.title}
                  </h3>

                  <ul className="space-y-3 text-left">
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
                </div>

                <div className="skill-card-border"></div>
              </div>

              {hoveredCard === index && allBubbles[index] && (
                <div className="skill-bubbles-container" key={`bubbles-${index}`}>
                  {allBubbles[index].map(b => (
                    <div key={b.key} className="skill-bubble" style={{ left: b.left, width: b.width, height: b.height, animationDelay: b.animationDelay, animationDuration: b.animationDuration }} />
                  ))}
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
