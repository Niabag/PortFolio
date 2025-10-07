import React, { useState } from 'react';
import { useLanguage } from '../LanguageContext.jsx';
import TypingText from './TypingText.jsx';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { t, lang, setLang } = useLanguage();
  const links = [
    { id: 'home', href: '/#accueil', label: t('nav.home') },
    { id: 'skills', href: '/#competences', label: t('nav.skills') },
    { id: 'projects', href: '/#realisations', label: t('nav.projects') },
    { id: 'blog', href: '/blog.html', label: t('nav.blog'), external: true },
    { id: 'faq', href: '/#faq', label: t('nav.faq') },
    { id: 'contact', href: '/#contact', label: t('nav.contact') },
    { id: 'quote', href: '/#contact', label: t('nav.quote'), button: true }
  ];
  const toggle = () => setOpen(!open);
  const close = () => setOpen(false);

  // Animation fluide et luxueuse pour le scroll
  const handleSmoothScroll = (e, href, isExternal) => {
    if (isExternal) return; // Pas d'animation pour le blog

    // Si le lien contient un hash (#)
    if (href.includes('#')) {
      const targetId = href.split('#')[1];
      
      // Vérifier si on est sur la page d'accueil
      const isOnHomePage = window.location.pathname === '/' || window.location.pathname === '/index.html';
      
      if (isOnHomePage) {
        // Sur la page d'accueil : animation smooth scroll
        e.preventDefault();
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
          // Animation de transition élégante
          const startPosition = window.pageYOffset;
          const targetPosition = targetElement.getBoundingClientRect().top + startPosition - 80;
          const distance = targetPosition - startPosition;
          const duration = 1200; // 1.2s pour une animation fluide et luxueuse
          let start = null;

          // Fonction d'easing cubique pour un effet luxueux
          const easeInOutCubic = (t) => {
            return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
          };

          const animation = (currentTime) => {
            if (start === null) start = currentTime;
            const timeElapsed = currentTime - start;
            const progress = Math.min(timeElapsed / duration, 1);
            const ease = easeInOutCubic(progress);
            
            window.scrollTo(0, startPosition + distance * ease);
            
            if (timeElapsed < duration) {
              requestAnimationFrame(animation);
            }
          };

          requestAnimationFrame(animation);
          close();
        }
      }
      // Sinon, laisser le comportement par défaut (navigation vers /#section)
    }
  };

  return (
    <nav className="fixed top-0 w-full bg-black/90 backdrop-blur-md border-b border-primary-red/30 z-[1100]">
      <div className="container mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
        <a href="/" className="flex items-center space-x-3">
          <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-primary-red to-red-500 rounded-lg flex items-center justify-center">
            <TypingText text={"</>"} className="text-white text-sm sm:text-lg" />
          </div>
          <span className="text-xl sm:text-2xl font-bold text-white">SiteOnWeb</span>
        </a>

        <ul className="hidden md:flex space-x-8">
          {links.map((link) => (
            <li key={link.id}>
              {link.button ? (
                <a
                  href={link.href}
                  onClick={(e) => handleSmoothScroll(e, link.href, link.external)}
                  className="bg-primary-red px-4 py-2 rounded-lg hover:bg-red-700 transition"
                >
                  {link.label}
                </a>
              ) : (
                <a
                  href={link.href}
                  onClick={(e) => handleSmoothScroll(e, link.href, link.external)}
                  className="nav-link text-white hover:text-primary-red"
                >
                  {link.label}
                </a>
              )}
            </li>
          ))}
        </ul>

        <div className="flex items-center space-x-4">
          <select
            value={lang}
            onChange={(e) => setLang(e.target.value)}
            className="bg-black text-white border border-primary-red rounded px-2 py-1"
          >
            <option value="fr">Français</option>
            <option value="en">English</option>
          </select>
          <button className="md:hidden text-white z-50" onClick={toggle}>
            <span className="text-xl">{open ? '✖' : '☰'}</span>
          </button>
        </div>
      </div>

      <div
        className={`fixed top-0 left-0 h-screen w-screen bg-black transform transition-transform duration-300 md:hidden ${open ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="pt-20 px-6">
          <div className="mb-6">
            <select
              value={lang}
              onChange={(e) => {
                setLang(e.target.value);
                close();
              }}
              className="w-full bg-black text-white border border-primary-red rounded px-2 py-1"
            >
              <option value="fr">Français</option>
              <option value="en">English</option>
            </select>
          </div>
          <ul className="space-y-6">
            {links.map((link) => (
              <li key={link.id}>
                {link.button ? (
                  <a
                    href={link.href}
                    onClick={(e) => handleSmoothScroll(e, link.href, link.external)}
                    className="block bg-primary-red px-4 py-3 rounded-lg hover:bg-red-700 transition text-center"
                  >
                    {link.label}
                  </a>
                ) : (
                  <a
                    href={link.href}
                    onClick={(e) => handleSmoothScroll(e, link.href, link.external)}
                    className="block text-white hover:text-primary-red text-lg"
                  >
                    {link.label}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
