import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { LanguageProvider } from './LanguageContext';
import SocialButtons from './components/SocialButtons';
import WhatsAppButton from './components/WhatsAppButton';
import TawkToChat from './components/TawkToChat';
import ContentMarketingStrategie from './pages/articles/ContentMarketingStrategie';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <LanguageProvider>
      <SocialButtons />
      <WhatsAppButton />
      <TawkToChat />
      <ContentMarketingStrategie />
    </LanguageProvider>
    </BrowserRouter>
  </React.StrictMode>
);
