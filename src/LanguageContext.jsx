import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations } from './data/translations.js';

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('fr');

  useEffect(() => {
    document.documentElement.lang = lang;
    document.title = translations[lang].title;
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

