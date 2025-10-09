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
      <SocialButtons />
      <AnimatedBackground />
      <Navbar />
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
