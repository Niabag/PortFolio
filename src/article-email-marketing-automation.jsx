import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { LanguageProvider } from './LanguageContext';
import EmailMarketingAutomation from './pages/articles/EmailMarketingAutomation';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <LanguageProvider>
      <EmailMarketingAutomation />
    </LanguageProvider>
    </BrowserRouter>
  </React.StrictMode>
);
