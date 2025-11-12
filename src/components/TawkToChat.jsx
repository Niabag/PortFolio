import { useEffect } from 'react';
import { useLanguage } from '../LanguageContext';

export default function TawkToChat() {
  const { lang } = useLanguage();

  useEffect(() => {
    // Configuration Tawk.to
    // REMPLACEZ CES VALEURS PAR VOS VRAIS IDs
    const TAWK_PROPERTY_ID = '6914cac9bb284b195b338a4c'; // Ex: '5f9a1b2c3d4e5f6g7h8i9j0k'
    const TAWK_WIDGET_ID = '1j9sjg91g';     // Ex: 'default' ou '1a2b3c4d5e6f'

    // Ne charger que si les IDs sont configurés
    if (TAWK_PROPERTY_ID === 'YOUR_PROPERTY_ID') {
      console.log('⚠️ Tawk.to non configuré. Ajoutez vos Property ID et Widget ID dans TawkToChat.jsx');
      return;
    }

    // Initialiser Tawk_API
    window.Tawk_API = window.Tawk_API || {};
    window.Tawk_LoadStart = new Date();

    // Charger le script Tawk.to
    (function() {
      const s1 = document.createElement("script");
      const s0 = document.getElementsByTagName("script")[0];
      s1.async = true;
      s1.src = `https://embed.tawk.to/${TAWK_PROPERTY_ID}/${TAWK_WIDGET_ID}`;
      s1.charset = 'UTF-8';
      s1.setAttribute('crossorigin', '*');
      s0.parentNode.insertBefore(s1, s0);
    })();

    // Configuration personnalisée du widget
    window.Tawk_API.onLoad = function() {
      // Messages de bienvenue selon la langue
      const welcomeMessages = {
        fr: {
          greeting: 'Bonjour! 👋 Comment puis-je vous aider?',
          offline: 'Nous sommes actuellement hors ligne. Laissez-nous un message!'
        },
        en: {
          greeting: 'Hello! 👋 How can I help you?',
          offline: 'We are currently offline. Leave us a message!'
        }
      };

      // Personnaliser l'apparence du widget - collé au bord droit avec les autres boutons
      window.Tawk_API.customStyle = {
        visibility: {
          desktop: {
            position: 'br', // bottom-right
            xOffset: 20,
            yOffset: 110 // En dessous de Facebook, au-dessus de WhatsApp
          },
          mobile: {
            position: 'br',
            xOffset: 10,
            yOffset: 100 // Monté plus haut sur mobile
          }
        }
      };
    };

    // Quand le chat s'ouvre
    window.Tawk_API.onChatMaximized = function() {
      console.log('Chat Tawk.to ouvert');
    };

    // Quand le chat se ferme
    window.Tawk_API.onChatMinimized = function() {
      console.log('Chat Tawk.to fermé');
    };

    // Cleanup au démontage du composant
    return () => {
      // Retirer les event listeners si nécessaire
      if (window.Tawk_API) {
        window.Tawk_API.onLoad = null;
        window.Tawk_API.onChatMaximized = null;
        window.Tawk_API.onChatMinimized = null;
      }
    };
  }, [lang]);

  return null; // Ce composant n'affiche rien, il charge juste le script
}
