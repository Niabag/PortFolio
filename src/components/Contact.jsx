import React from 'react';

export default function Contact() {
  return (
    <section className="p-8">
      <h2 className="text-2xl font-bold mb-4">Contact</h2>
      <p>
        Vous pouvez me contacter à{' '}
        <a href="mailto:example@example.com" className="text-red-600">
          example@example.com
        </a>
        .
      </p>
    </section>
  );
}
