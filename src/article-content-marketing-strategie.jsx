import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { LanguageProvider } from './LanguageContext';
import ContentMarketingStrategie from './pages/articles/ContentMarketingStrategie';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <LanguageProvider>
      <ContentMarketingStrategie />
    </LanguageProvider>
    </BrowserRouter>
  </React.StrictMode>
);
