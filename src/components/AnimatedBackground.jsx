import React, { useState } from 'react';

export default function AnimatedBackground() {
  const initialBubbles = [
    { size: 'w-16 h-16', left: '10%', delay: '0s', id: 1 },
    { size: 'w-24 h-24', left: '20%', delay: '3s', id: 2 },
    { size: 'w-12 h-12', left: '30%', delay: '6s', id: 3 },
    { size: 'w-20 h-20', left: '40%', delay: '9s', id: 4 },
    { size: 'w-16 h-16', left: '60%', delay: '12s', id: 5 },
    { size: 'w-28 h-28', left: '70%', delay: '15s', id: 6 },
    { size: 'w-14 h-14', left: '80%', delay: '18s', id: 7 },
    { size: 'w-18 h-18', left: '90%', delay: '21s', id: 8 }
  ];

  const [bubbles, setBubbles] = useState(initialBubbles);
  const [explosions, setExplosions] = useState([]);

  const handleBubbleClick = (e, bubble) => {
    e.stopPropagation();
    const rect = e.currentTarget.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;

    // Retirer la bulle cliquée
    setBubbles(prev => prev.filter(b => b.id !== bubble.id));

    // Créer l'explosion de petites bulles
    const smallBubbles = [];
    const numSmallBubbles = 8;
    
    for (let i = 0; i < numSmallBubbles; i++) {
      const angle = (Math.PI * 2 * i) / numSmallBubbles;
      const distance = 50 + Math.random() * 50;
      const size = 8 + Math.random() * 16;
      
      smallBubbles.push({
        id: `${bubble.id}-${i}-${Date.now()}`,
        x,
        y,
        angle,
        distance,
        size
      });
    }

    setExplosions(prev => [...prev, ...smallBubbles]);

    // Recréer la bulle après 3 secondes
    setTimeout(() => {
      setBubbles(prev => [...prev, bubble]);
    }, 3000);

    // Nettoyer les explosions après l'animation
    setTimeout(() => {
      setExplosions(prev => 
        prev.filter(exp => !smallBubbles.find(sb => sb.id === exp.id))
      );
    }, 1000);
  };

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 9998 }}>
      {/* Bulles principales */}
      {bubbles.map((b) => (
        <div
          key={b.id}
          className={`bubble ${b.size} cursor-pointer`}
          style={{ 
            left: b.left, 
            animationDelay: b.delay,
            pointerEvents: 'auto'
          }}
          onClick={(e) => handleBubbleClick(e, b)}
          onTouchStart={(e) => handleBubbleClick(e, b)}
        />
      ))}
      
      {/* Petites bulles d'explosion */}
      {explosions.map((exp) => (
        <div
          key={exp.id}
          className="small-bubble-explosion"
          style={{
            left: `${exp.x}px`,
            top: `${exp.y}px`,
            width: `${exp.size}px`,
            height: `${exp.size}px`,
            '--angle': `${exp.angle}rad`,
            '--distance': `${exp.distance}px`
          }}
        />
      ))}
    </div>
  );
}
