import { useEffect } from 'react';

export const useSnapScroll = () => {
  useEffect(() => {
    // Désactiver sur mobile et tablette
    if (window.innerWidth <= 1024) return;

    let isScrolling = false;
    let scrollTimeout;
    let scrollAccumulator = 0;
    const SCROLL_THRESHOLD = 50; // Seuil pour déclencher le changement de section

    const handleWheel = (e) => {
      // Désactiver sur mobile et tablette
      if (window.innerWidth <= 1024) return;

      const sections = document.querySelectorAll('.snap-section');
      if (sections.length === 0) return;

      // Trouver la section actuelle
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      let currentIndex = -1;
      let currentSection = null;

      sections.forEach((section, index) => {
        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;
        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          currentIndex = index;
          currentSection = section;
        }
      });

      // Si on n'est pas dans une section snap, permettre le scroll normal
      if (currentIndex === -1) return;

      // Vérifier si la section actuelle est scrollable
      const isScrollableSection = currentSection && currentSection.classList.contains('scrollable');

      if (isScrollableSection) {
        // Vérifier si on peut encore scroller dans la section
        const sectionScrollTop = currentSection.scrollTop;
        const sectionScrollHeight = currentSection.scrollHeight;
        const sectionClientHeight = currentSection.clientHeight;
        
        const isAtTop = sectionScrollTop === 0;
        const isAtBottom = Math.ceil(sectionScrollTop + sectionClientHeight) >= sectionScrollHeight;

        // Si on scroll vers le bas et qu'on n'est pas en bas, laisser scroller
        if (e.deltaY > 0 && !isAtBottom) {
          return; // Permettre le scroll interne
        }

        // Si on scroll vers le haut et qu'on n'est pas en haut, laisser scroller
        if (e.deltaY < 0 && !isAtTop) {
          return; // Permettre le scroll interne
        }
      }

      // Si déjà en train de scroller entre sections, bloquer
      if (isScrolling) {
        e.preventDefault();
        return;
      }

      // Accumuler le scroll
      scrollAccumulator += e.deltaY;

      // Vérifier si on a atteint le seuil
      if (Math.abs(scrollAccumulator) < SCROLL_THRESHOLD) {
        e.preventDefault();
        return;
      }

      // Reset l'accumulateur
      const scrollDirection = scrollAccumulator > 0 ? 1 : -1;
      scrollAccumulator = 0;

      // Déterminer la section cible
      let targetIndex = currentIndex;

      if (scrollDirection > 0 && currentIndex < sections.length - 1) {
        // Scroll vers le bas
        targetIndex = currentIndex + 1;
      } else if (scrollDirection < 0 && currentIndex > 0) {
        // Scroll vers le haut
        targetIndex = currentIndex - 1;
      } else {
        return; // Pas de changement
      }

      // Bloquer le scroll par défaut
      e.preventDefault();

      // Marquer comme en cours de scroll
      isScrolling = true;

      // Scroller vers la section cible
      sections[targetIndex].scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });

      // Débloquer après 800ms
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        isScrolling = false;
      }, 800);
    };

    // Ajouter l'écouteur
    window.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      window.removeEventListener('wheel', handleWheel);
      clearTimeout(scrollTimeout);
    };
  }, []);
};
