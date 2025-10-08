// Composant principal de l'application
// Affiche les différentes sections du portfolio
import React, { useEffect, useState } from 'react';
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

export default function App() {
  const [selectedService, setSelectedService] = useState(null);
  const [showBooking, setShowBooking] = useState(false);

  // Debug - Log when selectedService changes
  useEffect(() => {
    console.log('App - selectedService changed:', selectedService?.title || 'null');
  }, [selectedService]);

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

  // Réinitialiser booking quand on change de service
  useEffect(() => {
    setShowBooking(false);
  }, [selectedService]);

  // Si un service est sélectionné, afficher la page de détail
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
          onBooking={() => {
            console.log('onBooking called, showBooking was:', showBooking); // Debug
            setShowBooking(true);
            console.log('onBooking called, showBooking now:', true); // Debug
          }}
        />
        {showBooking && (
          <>
            <div style={{ position: 'relative', zIndex: 9999 }}>
              <Booking onClose={() => {
                console.log('Booking onClose called');
                setShowBooking(false);
              }} />
            </div>
          </>
        )}
      </>
    );
  }

  // Sinon, afficher la page d'accueil normale
  return (
    <>
      <SocialButtons />
      <AnimatedBackground />
      <Navbar />
      <main className="scroll-container">
        <Hero />
        <Competences onServiceClick={setSelectedService} />
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
