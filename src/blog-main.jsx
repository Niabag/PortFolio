import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { LanguageProvider } from './LanguageContext';
import BlogPage from './pages/BlogPage';
import WhatsAppButton from './components/WhatsAppButton';
import TawkToChat from './components/TawkToChat';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <LanguageProvider>
        <WhatsAppButton />
        <TawkToChat />
        <BlogPage />
      </LanguageProvider>
    </BrowserRouter>
  </React.StrictMode>
);
