import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { LanguageProvider } from './LanguageContext';
import WhatsAppButton from './components/WhatsAppButton';
import TawkToChat from './components/TawkToChat';
import TikTokMarketing from './pages/articles/TikTokMarketing';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <LanguageProvider>
      <WhatsAppButton />
      <TawkToChat />
      <TikTokMarketing />
    </LanguageProvider>
    </BrowserRouter>
  </React.StrictMode>
);
