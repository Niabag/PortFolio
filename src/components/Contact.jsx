import React from 'react';
import { useLanguage } from '../LanguageContext.jsx';

const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

export default function Contact() {
  const { t } = useLanguage();
  const title = t('contact.title');
  const [result, setResult] = React.useState('');
  const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult('Envoi en cours...');

    const formData = new FormData(event.target);
    const email = formData.get('email');

    if (!emailRegex.test(email)) {
      setResult('Adresse e-mail invalide.');
      return;
    }

    formData.append('access_key', accessKey);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      });
      const data = await response.json();
      if (data.success) {
        setResult('Formulaire envoyé avec succès !');
        event.target.reset();
      } else {
        console.log('Error', data);
        setResult(data.message);
      }
    } catch (error) {
      console.error('Network Error', error);
      setResult('Erreur de réseau. Veuillez réessayer plus tard.');
    }
  };

  return (
    <section id="contact" className="py-12 sm:py-20 relative z-10">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="text-3xl sm:text-5xl font-bold text-center mb-8 sm:mb-16 text-white">
          {title.part1} <span className="text-primary-red">{title.part2}</span>
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">{t('contact.infoTitle')}</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <i className="fas fa-envelope text-primary-red text-lg sm:text-xl"></i>
                <span className="text-sm sm:text-base break-all">gabain.potelet-berry@protonmail.com</span>
              </div>
              <div className="flex items-center space-x-4">
                <i className="fas fa-phone text-primary-red text-lg sm:text-xl"></i>
                <span className="text-sm sm:text-base">06 48 45 69 37</span>
              </div>
              <div className="flex items-center space-x-4">
                <i className="fab fa-whatsapp text-primary-red text-lg sm:text-xl"></i>
                <a
                  href="https://wa.me/33648456937"
                  target="_blank"
                  className="text-sm sm:text-base hover:text-primary-red transition"
                >
                  {t('contact.whatsapp')}
                </a>
              </div>
              <div className="flex items-center space-x-4">
                <i className="fas fa-map-marker-alt text-primary-red text-lg sm:text-xl"></i>
                <span className="text-sm sm:text-base">{t('contact.country')}</span>
              </div>
            </div>
          </div>
          <form className="space-y-4 sm:space-y-6" onSubmit={onSubmit}>
            <div>
              <input
                type="text"
                name="name"
                placeholder={t('contact.namePlaceholder')}
                required
                className="w-full p-3 sm:p-4 bg-card-bg border border-gray-600 rounded-lg text-white focus:border-primary-red focus:outline-none text-sm sm:text-base"
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                placeholder={t('contact.emailPlaceholder')}
                required
                className="w-full p-3 sm:p-4 bg-card-bg border border-gray-600 rounded-lg text-white focus:border-primary-red focus:outline-none text-sm sm:text-base"
              />
            </div>
            <div>
              <textarea
                name="message"
                placeholder={t('contact.messagePlaceholder')}
                rows="5"
                required
                className="w-full p-3 sm:p-4 bg-card-bg border border-gray-600 rounded-lg text-white focus:border-primary-red focus:outline-none resize-none text-sm sm:text-base"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-primary-red py-3 sm:py-4 rounded-lg font-semibold hover:bg-red-700 transition text-sm sm:text-base"
            >
              {t('contact.send')}
            </button>
          </form>
          <span className="block mt-4 text-center text-sm sm:text-base">{result}</span>
        </div>
      </div>
    </section>
  );
}
