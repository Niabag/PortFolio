import React from 'react';

export default function TypingText({ text, className = '', animate = true }) {
  const classes = [
    'typing-text',
    animate ? 'typing-text--animate' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return <span className={classes}>{text}</span>;
}

