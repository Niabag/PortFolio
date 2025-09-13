import React, { useState, useEffect } from 'react';


export default function TypingText({ text, speed = 200, pause = 5000, className = '' }) {


  const [displayed, setDisplayed] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayed((prev) => prev + text.charAt(index));
        setIndex((prev) => prev + 1);
      }, speed);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setDisplayed('');
        setIndex(0);
      }, pause);
      return () => clearTimeout(timeout);
    }
  }, [index, text, speed, pause]);

  return <span className={`typing ${className}`.trim()}>{displayed}</span>;
}

