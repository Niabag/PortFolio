import React from 'react';
import { useLanguage } from '../LanguageContext.jsx';

const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
const RECIPIENT_EMAIL = 'contact@siteonweb.fr';

export default function Contact() {
  const { t } = useLanguage();
  const title = t('contact.title');
  const [result, setResult] = React.useState('');
  const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY?.trim();

  // Petit log de debug (masqué), à supprimer après test
  if (!accessKey) {
    console.warn("VITE_WEB3FORMS_ACCESS_KEY manquante au build.");
  } else {
    console.debug("Clé Web3Forms présente:", accessKey.slice(0, 8) + "•••");
  }

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult(t('contact.status.sending'));

    if (!accessKey) {
      setResult(t('contact.status.missingKey'));
      return;
    }

    // (Optionnel) Valider le format UUID v4
    const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
    if (!uuidRegex.test(accessKey)) {
      setResult(t('contact.status.invalidKey'));
      return;
    }

    const formData = new FormData(event.target);
    const visitorEmail = formData.get('email');

    if (!visitorEmail || !emailRegex.test(visitorEmail)) {
      setResult(t('contact.invalidEmail'));
      return;
    }

    formData.append('access_key', accessKey);
    formData.set('email', RECIPIENT_EMAIL);
    formData.set('reply_to', visitorEmail);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      });
      const data = await response.json();
      if (data.success) {
        setResult(t('contact.status.success'));
        event.target.reset();
      } else {
        console.log('Error', data);
        setResult(data.message);
      }
    } catch (error) {
      console.error('Network Error', error);
      setResult(t('contact.status.networkError'));
    }
  };

  return (
    <section id="contact" className="snap-section scrollable relative z-10">
      <div className="container mx-auto px-12 sm:px-20 lg:px-[120px] max-w-[1300px]">
        <h2 className="text-3xl sm:text-5xl font-bold text-center mb-12 sm:mb-20 text-white">
          {title.part1} <span className="text-primary-red">{title.part2}</span>
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 xl:gap-20 px-4 sm:px-8 mx-0 lg:mx-[100px]">
          <div className="flex flex-col items-center lg:items-start space-y-8">
            <h3 className="text-2xl sm:text-3xl font-bold text-center lg:text-left text-white">{t('contact.infoTitle')}</h3>
            <div className="space-y-5 w-auto max-w-fit">
              <div className="flex items-center space-x-4 p-4 bg-card-bg/30 rounded-lg hover:bg-card-bg/50 transition-colors">
                <i className="fas fa-envelope text-primary-red text-2xl"></i>
                <a
                  href="mailto:contact@siteonweb.fr"
                  className="text-base sm:text-lg break-all hover:text-primary-red transition font-medium"
                >
                  contact@siteonweb.fr
                </a>
              </div>
              <div className="flex items-center space-x-4 p-4 bg-card-bg/30 rounded-lg hover:bg-card-bg/50 transition-colors">
                <i className="fab fa-whatsapp text-green-500 text-2xl"></i>
                <a
                  href="https://wa.me/33648456937"
                  target="_blank"
                  className="text-base sm:text-lg hover:text-primary-red transition font-medium"
                >
                  {t('contact.whatsapp')}
                </a>
              </div>
              <div className="flex items-center space-x-4 p-4 bg-card-bg/30 rounded-lg">
                <i className="fas fa-map-marker-alt text-primary-red text-2xl"></i>
                <span className="text-base sm:text-lg font-medium">{t('contact.country')}</span>
              </div>
              <div className="flex items-center space-x-4 p-4 bg-card-bg/30 rounded-lg hover:bg-card-bg/50 transition-colors">
                <i className="fab fa-facebook text-blue-600 text-2xl"></i>
                <a
                  href="https://www.facebook.com/profile.php?id=61581954327555"
                  target="_blank"
                  className="text-base sm:text-lg hover:text-primary-red transition font-medium"
                >
                  Facebook
                </a>
              </div>
              <div className="flex items-center space-x-4 p-4 bg-card-bg/30 rounded-lg hover:bg-card-bg/50 transition-colors">
                <i className="fab fa-instagram text-pink-500 text-2xl"></i>
                <a
                  href="https://www.instagram.com/siteonweb/"
                  target="_blank"
                  className="text-base sm:text-lg hover:text-primary-red transition font-medium"
                >
                  Instagram
                </a>
              </div>
              <div className="flex items-center space-x-4 p-4 bg-card-bg/30 rounded-lg hover:bg-card-bg/50 transition-colors">
                <i className="fab fa-linkedin text-blue-500 text-2xl"></i>
                <a
                  href="https://www.linkedin.com/in/gabain-potelet-berry-162aa7257/"
                  target="_blank"
                  className="text-base sm:text-lg hover:text-primary-red transition font-medium"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
          <form className="space-y-6 sm:space-y-8" onSubmit={onSubmit}>
            <div>
              <input
                type="text"
                name="name"
                placeholder={t('contact.namePlaceholder')}
                required
                className="w-full p-5 sm:p-6 bg-card-bg border-2 border-gray-600 rounded-xl text-white text-base sm:text-lg focus:border-primary-red focus:outline-none focus:ring-2 focus:ring-primary-red/50 transition-all"
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                placeholder={t('contact.emailPlaceholder')}
                required
                className="w-full p-5 sm:p-6 bg-card-bg border-2 border-gray-600 rounded-xl text-white text-base sm:text-lg focus:border-primary-red focus:outline-none focus:ring-2 focus:ring-primary-red/50 transition-all"
              />
            </div>
            <div>
              <textarea
                name="message"
                placeholder={t('contact.messagePlaceholder')}
                rows="6"
                required
                className="w-full p-5 sm:p-6 bg-card-bg border-2 border-gray-600 rounded-xl text-white text-base sm:text-lg focus:border-primary-red focus:outline-none focus:ring-2 focus:ring-primary-red/50 resize-none transition-all"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-primary-red py-5 sm:py-6 rounded-xl font-bold text-base sm:text-lg hover:bg-red-700 transition-all hover:scale-[1.02] transform shadow-lg hover:shadow-xl"
            >
              {t('contact.send')}
            </button>
          </form>
        </div>
        {result && (
          <div className="mt-8 text-center">
            <span className="inline-block px-8 py-4 bg-card-bg/50 border-2 border-gray-600 rounded-xl text-base sm:text-lg font-medium shadow-lg">
              {result}
            </span>
          </div>
        )}
      </div>
    </section>
  );
}
