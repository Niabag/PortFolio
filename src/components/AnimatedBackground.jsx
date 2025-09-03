import React from 'react';

export default function AnimatedBackground() {
  const bubbles = [
    { size: 'w-16 h-16', left: '10%', delay: '0s' },
    { size: 'w-24 h-24', left: '20%', delay: '3s' },
    { size: 'w-12 h-12', left: '30%', delay: '6s' },
    { size: 'w-20 h-20', left: '40%', delay: '9s' },
    { size: 'w-16 h-16', left: '60%', delay: '12s' },
    { size: 'w-28 h-28', left: '70%', delay: '15s' },
    { size: 'w-14 h-14', left: '80%', delay: '18s' },
    { size: 'w-18 h-18', left: '90%', delay: '21s' }
  ];

  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      {bubbles.map((b, i) => (
        <div
          key={i}
          className={`bubble ${b.size}`}
          style={{ left: b.left, animationDelay: b.delay }}
        />
      ))}
    </div>
  );
}
