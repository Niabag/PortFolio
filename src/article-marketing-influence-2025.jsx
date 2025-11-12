import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { LanguageProvider } from './LanguageContext';
import MarketingInfluence2025 from './pages/articles/MarketingInfluence2025';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <LanguageProvider>
      <MarketingInfluence2025 />
    </LanguageProvider>
    </BrowserRouter>
  </React.StrictMode>
);
