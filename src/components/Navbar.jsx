import React, { useState } from 'react';
import { useLanguage } from '../LanguageContext.jsx';
import TypingText from './TypingText.jsx';
import Booking from './Booking.jsx';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [showBooking, setShowBooking] = useState(false);
  const { t, lang, setLang } = useLanguage();

  // Générer les liens en fonction de la langue actuelle
  const basePrefix = lang === 'en' ? '/en' : '';
  const links = [
    { id: 'home', href: `${basePrefix}/#accueil`, label: t('nav.home') },
    { id: 'skills', href: `${basePrefix}/#competences`, label: t('nav.skills') },
    { id: 'projects', href: `${basePrefix}/#realisations`, label: t('nav.projects') },
    { id: 'blog', href: `${basePrefix}/blog.html`, label: t('nav.blog'), external: true },
    { id: 'faq', href: `${basePrefix}/#faq`, label: t('nav.faq') },
    { id: 'contact', href: `${basePrefix}/#contact`, label: t('nav.contact') },
    { id: 'booking', href: '#', label: t('nav.booking'), button: true, onClick: () => setShowBooking(true) }
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
        <a href={basePrefix || '/'} className="flex items-center space-x-3">
          <img src="/images/newlogo.png" alt="SiteOnWeb" className="w-24 h-24 sm:w-28 sm:h-28 object-contain" />
          <span className="text-3xl sm:text-4xl font-bold text-white">S<span className="relative inline-block">ı<span className="absolute top-[0.02em] left-1/2 -translate-x-1/2 w-[0.3em] h-[0.3em] bg-primary-red rounded-full"></span></span>te<span className="text-primary-red">On</span>Web</span>
        </a>

        <ul className="hidden md:flex space-x-8">
          {links.map((link) => (
            <li key={link.id}>
              {link.button ? (
                <button
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    if (link.onClick) {
                      link.onClick();
                    } else {
                      handleSmoothScroll(e, link.href, link.external);
                    }
                  }}
                  className="bg-primary-red px-4 py-2 rounded-lg hover:bg-red-700 transition flex items-center gap-2"
                >
                  <img src="/images/icons-competences/marketing.webp" alt="" className="w-4 h-4 object-contain" />
                  {link.label}
                </button>
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
            className="hidden md:block bg-black text-white border border-primary-red rounded px-2 py-1"
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
        className={`fixed top-0 right-0 h-screen w-screen bg-black transform transition-transform duration-300 md:hidden z-[2000] ${open ? 'translate-x-0' : 'translate-x-full'}`}
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
                  <button
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      if (link.onClick) {
                        link.onClick();
                        close();
                      } else {
                        handleSmoothScroll(e, link.href, link.external);
                      }
                    }}
                    className="block w-full bg-primary-red px-4 py-3 rounded-lg hover:bg-red-700 transition text-center flex items-center justify-center gap-2"
                  >
                    <img src="/images/icons-competences/marketing.webp" alt="" className="w-5 h-5 object-contain" />
                    {link.label}
                  </button>
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

      {showBooking && <Booking onClose={() => setShowBooking(false)} />}
    </nav>
  );
}
