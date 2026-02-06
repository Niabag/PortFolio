// Composant principal de l'application
// Affiche les différentes sections du portfolio
import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Competences from './components/Competences.jsx';
import Projects from './components/Projects.jsx';
import Stats from './components/Stats.jsx';
import FAQ from './components/FAQ.jsx';
import Contact from './components/Contact.jsx';
import Location from './components/Location.jsx';
import Footer from './components/Footer.jsx';
import AnimatedBackground from './components/AnimatedBackground.jsx';
import SocialButtons from './components/SocialButtons.jsx';
import ServiceDetail from './components/ServiceDetail.jsx';
import Booking from './components/Booking.jsx';
import SmartFloatingButton from './components/SmartFloatingButton.jsx';
import TawkToChat from './components/TawkToChat.jsx';
import LeadMagnetPopup from './components/LeadMagnetPopup.jsx';
import ExitIntentPopup from './components/ExitIntentPopup.jsx';

function MainContent() {
  const [selectedService, setSelectedService] = useState(null);
  const [showBooking, setShowBooking] = useState(false);

  useEffect(() => {
    // Smooth scroll pour les liens de navigation
    const links = document.querySelectorAll('a[href^="#"]');

    function handleClick(e) {
      const href = e.currentTarget.getAttribute('href');
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    }

    links.forEach(link => link.addEventListener('click', handleClick));
    return () => links.forEach(link => link.removeEventListener('click', handleClick));
  }, []);

  // Scroll to top when service changes
  useEffect(() => {
    if (selectedService) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [selectedService]);
  if (selectedService) {
    return (
      <>
        <AnimatedBackground />
        <ServiceDetail 
          service={selectedService} 
          onClose={() => {
            setSelectedService(null);
            setShowBooking(false);
          }}
          onBooking={() => setShowBooking(true)}
        />
        {showBooking && <Booking onClose={() => setShowBooking(false)} />}
      </>
    );
  }

  // Sinon, afficher la page d'accueil normale
  return (
    <>
      <SocialButtons />  {/* Facebook/Instagram désactivés - voir SocialButtons.jsx */}
      <AnimatedBackground />
      <Navbar />
      <TawkToChat />  {/* Chat Tawk.to - géré par SmartFloatingButton */}
      <SmartFloatingButton />  {/* Nouveau : Bouton intelligent WhatsApp/Chat */}
      <LeadMagnetPopup />  {/* Popup Lead Magnet : Checklist SEO gratuite */}
      <ExitIntentPopup />  {/* Popup Exit-Intent : Dernière chance de conversion */}
      <main className="scroll-container">
        <Hero />
        <Competences />
        <Projects />
        <Stats />
        <FAQ />
        <Contact />
        <Location />
      </main>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <Routes>
      {/* Routes françaises */}
      <Route path="/" element={<MainContent />} />
      <Route path="/index.html" element={<MainContent />} />

      {/* Routes anglaises */}
      <Route path="/en/*" element={<MainContent />} />
      <Route path="/en/index.html" element={<MainContent />} />
    </Routes>
  );
}
