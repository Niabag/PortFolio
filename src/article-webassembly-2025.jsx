import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { LanguageProvider } from './LanguageContext';
import WhatsAppButton from './components/WhatsAppButton';
import TawkToChat from './components/TawkToChat';
import WebAssembly2025 from './pages/articles/WebAssembly2025';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <LanguageProvider>
      <WhatsAppButton />
      <TawkToChat />
      <WebAssembly2025 />
    </LanguageProvider>
    </BrowserRouter>
  </React.StrictMode>
);
