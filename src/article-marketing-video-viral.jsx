import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { LanguageProvider } from './LanguageContext';
import MarketingVideoViral from './pages/articles/MarketingVideoViral';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <LanguageProvider>
      <MarketingVideoViral />
    </LanguageProvider>
    </BrowserRouter>
  </React.StrictMode>
);
