import React, { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { translations } from './data/translations.js';

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const navigate = useNavigate();
  const location = useLocation();

  // Déterminer la langue depuis l'URL
  const getLangFromPath = () => {
    if (location.pathname.startsWith('/en')) return 'en';
    return 'fr';
  };

  const [lang, setLang] = useState(() => {
    // Priorité 1: URL
    const urlLang = getLangFromPath();
    if (urlLang) return urlLang;

    // Priorité 2: localStorage
    try {
      const saved = localStorage.getItem('lang');
      if (saved === 'fr' || saved === 'en') return saved;
    } catch {}

    // Priorité 3: langue du navigateur
    return navigator.language?.toLowerCase().startsWith('en') ? 'en' : 'fr';
  });

  // Synchroniser la langue avec l'URL quand l'URL change
  useEffect(() => {
    const urlLang = getLangFromPath();
    if (urlLang !== lang) {
      setLang(urlLang);
    }
  }, [location.pathname]);

  // Mettre à jour le document quand la langue change
  useEffect(() => {
    document.documentElement.lang = lang;
    document.title = translations[lang].title;
    try {
      localStorage.setItem('lang', lang);
    } catch {}
  }, [lang]);

  // Fonction pour changer de langue avec navigation
  const changeLang = (newLang) => {
    if (newLang === lang) return;

    const currentPath = location.pathname;
    let newPath;

    if (newLang === 'en') {
      // Passage au français -> anglais
      newPath = currentPath.startsWith('/en') ? currentPath : `/en${currentPath}`;
    } else {
      // Passage à l'anglais -> français
      newPath = currentPath.replace(/^\/en/, '') || '/';
    }

    navigate(newPath);
    setLang(newLang);
  };

  const t = (path) => {
    return path.split('.').reduce((obj, key) => (obj && obj[key] !== undefined ? obj[key] : path), translations[lang]);
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang: changeLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}

