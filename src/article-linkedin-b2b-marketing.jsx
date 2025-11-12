import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { LanguageProvider } from './LanguageContext';
import LinkedinB2BMarketing from './pages/articles/LinkedinB2BMarketing';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <LanguageProvider>
      <LinkedinB2BMarketing />
    </LanguageProvider>
    </BrowserRouter>
  </React.StrictMode>
);
