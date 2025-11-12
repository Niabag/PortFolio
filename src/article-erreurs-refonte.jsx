import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { LanguageProvider } from './LanguageContext';
import ErreursRefonte from './pages/articles/ErreursRefonte';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <LanguageProvider>
      <ErreursRefonte />
    </LanguageProvider>
    </BrowserRouter>
  </React.StrictMode>
);
