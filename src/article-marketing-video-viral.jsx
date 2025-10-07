import React from 'react';
import ReactDOM from 'react-dom/client';
import { LanguageProvider } from './LanguageContext';
import MarketingVideoViral from './pages/articles/MarketingVideoViral';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LanguageProvider>
      <MarketingVideoViral />
    </LanguageProvider>
  </React.StrictMode>
);
