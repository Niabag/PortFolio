import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { LanguageProvider } from './LanguageContext';
import WordpressVsReact from './pages/articles/WordpressVsReact';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <LanguageProvider>
      <WordpressVsReact />
    </LanguageProvider>
    </BrowserRouter>
  </React.StrictMode>
);
