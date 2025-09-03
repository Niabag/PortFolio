import React from 'react';

export default function Footer() {
  return (
    <footer className="p-4 text-center text-sm text-gray-500">
      © {new Date().getFullYear()} Mon Portfolio
    </footer>
  );
}
