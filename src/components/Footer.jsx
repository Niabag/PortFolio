import React from 'react';

export default function Footer() {
  return (
    <footer className="py-6 text-center bg-card-bg text-gray-400">
      © {new Date().getFullYear()} Gabain Potelet-Berry. Tous droits réservés.
    </footer>
  );
}
