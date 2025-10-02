import React from 'react';

export default function TypingText({ text, className = '', animate = false }) {
  const classes = [
    'typing-text',
    animate ? 'typing-text--animate' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const style = animate
    ? { '--typing-target-width': `calc(${Math.max(text.length, 1)}ch + 0.5ch)` }
    : undefined;

  return (
    <span className={classes} style={style}>
      {text}
    </span>
  );
}

