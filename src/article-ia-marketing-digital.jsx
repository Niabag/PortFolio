import React from 'react';
import ReactDOM from 'react-dom/client';
import { LanguageProvider } from './LanguageContext';
import IaMarketingDigital from './pages/articles/IaMarketingDigital';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LanguageProvider>
      <IaMarketingDigital />
    </LanguageProvider>
  </React.StrictMode>
);
