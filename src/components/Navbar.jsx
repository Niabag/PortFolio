import React, { useState } from 'react';
import { useLanguage } from '../LanguageContext.jsx';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { t, lang, setLang } = useLanguage();
  const links = [
    { href: '#accueil', label: t('nav.home') },
    { href: '#competences', label: t('nav.skills') },
    { href: '#realisations', label: t('nav.projects') },
    { href: '#contact', label: t('nav.contact') },
    { href: '#devis', label: t('nav.quote'), button: true }
  ];
  const toggle = () => setOpen(!open);
  const close = () => setOpen(false);

  return (
    <nav className="fixed top-0 w-full bg-black/90 backdrop-blur-md border-b border-primary-red/30 z-[1100]">
      <div className="container mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
        <a href="#accueil" className="flex items-center space-x-3">
          <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-primary-red to-red-500 rounded-lg flex items-center justify-center">
            <i className="fas fa-code text-white text-sm sm:text-lg"></i>
          </div>
          <span className="text-xl sm:text-2xl font-bold text-white">SiteOnWeb</span>
        </a>

        <ul className="hidden md:flex space-x-8">
          {links.map((link) => (
            <li key={link.href}>
              {link.button ? (
                <a
                  href={link.href}
                  className="bg-primary-red px-4 py-2 rounded-lg hover:bg-red-700 transition"
                >
                  {link.label}
                </a>
              ) : (
                <a
                  href={link.href}
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
            <option value="fr">FR</option>
            <option value="en">EN</option>
          </select>
          <button className="md:hidden text-white z-50" onClick={toggle}>
            <i className={`fas ${open ? 'fa-times' : 'fa-bars'} text-xl`}></i>
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
              <option value="fr">FR</option>
              <option value="en">EN</option>
            </select>
          </div>
          <ul className="space-y-6">
            {links.map((link) => (
              <li key={link.href}>
                {link.button ? (
                  <a
                    href={link.href}
                    className="block bg-primary-red px-4 py-3 rounded-lg hover:bg-red-700 transition text-center"
                    onClick={close}
                  >
                    {link.label}
                  </a>
                ) : (
                  <a
                    href={link.href}
                    className="block text-white hover:text-primary-red text-lg"
                    onClick={close}
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
