import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations } from './data/translations.js';

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    try {
      const saved = localStorage.getItem('lang');
      if (saved === 'fr' || saved === 'en') return saved;
      // Default based on browser language
      return navigator.language?.toLowerCase().startsWith('en') ? 'en' : 'fr';
    } catch {
      return 'fr';
    }
  });

  useEffect(() => {
    document.documentElement.lang = lang;
    document.title = translations[lang].title;
    try {
      localStorage.setItem('lang', lang);
    } catch {}
  }, [lang]);

  const t = (path) => {
    return path.split('.').reduce((obj, key) => (obj && obj[key] !== undefined ? obj[key] : path), translations[lang]);
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}

