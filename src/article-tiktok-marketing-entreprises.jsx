import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { LanguageProvider } from './LanguageContext';
import TikTokMarketing from './pages/articles/TikTokMarketing';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <LanguageProvider>
      <TikTokMarketing />
    </LanguageProvider>
    </BrowserRouter>
  </React.StrictMode>
);
