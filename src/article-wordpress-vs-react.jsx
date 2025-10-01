import React from 'react';
import ReactDOM from 'react-dom/client';
import { LanguageProvider } from './LanguageContext';
import WordpressVsReact from './pages/articles/WordpressVsReact';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LanguageProvider>
      <WordpressVsReact />
    </LanguageProvider>
  </React.StrictMode>
);
