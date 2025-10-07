import React from 'react';

export default function SocialButtons() {
  return (
    <>
      {/* Bouton Facebook flottant */}
      <a
        href="https://www.facebook.com/profile.php?id=61581954327555"
        target="_blank"
        className="facebook-float"
        title="Suivez-nous sur Facebook"
        aria-label="Suivez-nous sur Facebook"
        rel="noopener noreferrer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="w-8 h-8 text-white"
          aria-hidden="true"
          focusable="false"
        >
          <path
            fill="currentColor"
            d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"
          />
        </svg>
      </a>

      {/* Bouton Instagram flottant */}
      <a
        href="https://www.instagram.com/siteonweb/"
        target="_blank"
        className="instagram-float"
        title="Suivez-nous sur Instagram"
        aria-label="Suivez-nous sur Instagram"
        rel="noopener noreferrer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="w-8 h-8 text-white"
          aria-hidden="true"
          focusable="false"
        >
          <path
            fill="currentColor"
            d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm0 2h10c1.654 0 3 1.346 3 3v10c0 1.654-1.346 3-3 3H7c-1.654 0-3-1.346-3-3V7c0-1.654 1.346-3 3-3zm10.5 1a1.5 1.5 0 0 0-1.06 2.56A1.5 1.5 0 1 0 17.5 5zm-5.5 2C9.467 7 7 9.467 7 12.5S9.467 18 12.5 18s5.5-2.467 5.5-5.5S15.533 7 12.5 7zm0 2c1.93 0 3.5 1.57 3.5 3.5S14.43 16 12.5 16 9 14.43 9 12.5 10.57 9 12.5 9z"
          />
        </svg>
      </a>

      {/* Bouton WhatsApp flottant */}
      <a
        href="https://wa.me/33648456937"
        target="_blank"
        className="whatsapp-float"
        title="Contactez-nous sur WhatsApp"
        aria-label="Contactez-nous sur WhatsApp"
        rel="noopener noreferrer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="w-8 h-8 text-white"
          aria-hidden="true"
          focusable="false"
        >
          <path
            fill="currentColor"
            d="M16.7 13.5c-.5-.2-1-.1-1.4.3l-.9.9c-1.6-.8-3-2.1-3.8-3.8l.9-.9c.4-.4.5-.9.3-1.4l-1.1-2.6c-.2-.5-.7-.8-1.2-.8h-2c-.7 0-1.3.6-1.3 1.3 0 7 5.7 12.7 12.7 12.7.7 0 1.3-.6 1.3-1.3v-2c0-.5-.3-1-.8-1.2l-2.7-1.1z"
          />
        </svg>
      </a>
    </>
  );
}
