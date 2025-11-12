import { useEffect } from 'react';

export default function TawkToChat() {
  useEffect(() => {
    // Charger le script Tawk.to
    var Tawk_API = Tawk_API || {};
    var Tawk_LoadStart = new Date();

    (function() {
      var s1 = document.createElement("script");
      var s0 = document.getElementsByTagName("script")[0];
      s1.async = true;
      // REMPLACEZ CE LIEN PAR VOTRE LIEN TAWK.TO
      s1.src = 'https://embed.tawk.to/YOUR_PROPERTY_ID/YOUR_WIDGET_ID';
      s1.charset = 'UTF-8';
      s1.setAttribute('crossorigin', '*');
      s0.parentNode.insertBefore(s1, s0);
    })();

    // Configuration du widget
    window.Tawk_API = window.Tawk_API || {};

    // Personnalisation des messages
    window.Tawk_API.onLoad = function() {
      // Détecter la langue
      const lang = window.location.pathname.startsWith('/en') ? 'en' : 'fr';

      // Messages personnalisés selon la langue
      if (lang === 'fr') {
        window.Tawk_API.setAttributes({
          'name': '',
          'email': '',
          'hash': ''
        }, function(error) {});
      }
    };
  }, []);

  return null; // Ce composant n'affiche rien, il charge juste le script
}
