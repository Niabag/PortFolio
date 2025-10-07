import React from 'react';
import ReactDOM from 'react-dom/client';
import { LanguageProvider } from './LanguageContext';
import TikTokMarketing from './pages/articles/TikTokMarketing';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LanguageProvider>
      <TikTokMarketing />
    </LanguageProvider>
  </React.StrictMode>
);
