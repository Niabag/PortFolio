import React from 'react';

export default function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-8 text-primary-red">Contact</h2>
        <p className="text-gray-300 mb-6">
          Discutons de vos projets. Envoyez-moi un email à{' '}
          <a href="mailto:gabain.potelet-berry@protonmail.com" className="text-primary-red">
            gabain.potelet-berry@protonmail.com
          </a>
          .
        </p>
      </div>
    </section>
  );
}
