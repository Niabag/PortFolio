// Composant principal de l'application
// Affiche les différentes sections du portfolio
import React, { useEffect } from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Competences from './components/Competences.jsx';
import Projects from './components/Projects.jsx';
import FAQ from './components/FAQ.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import AnimatedBackground from './components/AnimatedBackground.jsx';

export default function App() {
  useEffect(() => {
    const links = document.querySelectorAll('a[href^="#"]');

    function smoothScroll(target) {
      const startY = window.pageYOffset;
      const targetY = target.getBoundingClientRect().top + startY;
      const distance = targetY - startY;
      const duration = 800;
      let startTime = null;

      function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const progress = Math.min(timeElapsed / duration, 1);
        const easing = progress * progress;
        window.scrollTo(0, startY + distance * easing);
        if (timeElapsed < duration) requestAnimationFrame(animation);
      }

      requestAnimationFrame(animation);
    }

    function handleClick(e) {
      const href = e.currentTarget.getAttribute('href');
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        smoothScroll(target);
      }
    }

    links.forEach(link => link.addEventListener('click', handleClick));
    return () => links.forEach(link => link.removeEventListener('click', handleClick));
  }, []);

  return (
    <>
      <AnimatedBackground />
      <Navbar />
      <Hero />
      <Competences />
      <Projects />
      <FAQ />
      <Contact />
      <Footer />
    </>
  );
}
