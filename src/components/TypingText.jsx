import React from 'react';

export default function TypingText({ text, className = '', animate = false }) {
  const classes = [
    'typing-text',
    animate ? 'typing-text--animate' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');


  return (
    <span className={classes}>
      <span className="typing-text__inner">{text}</span>
    </span>
  );

}

