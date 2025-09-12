import { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import AboutCodecratz from '@/components/AboutCodecratz';
import Timeline from '@/components/Timeline';
import PreviousWinners from '@/components/PreviousWinners';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    // Animate elements on scroll
    const animateOnScroll = () => {
      const elements = document.querySelectorAll('.fade-in-up');
      elements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
          element.classList.add('animate');
        }
      });
    };

    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Run once on load

    return () => window.removeEventListener('scroll', animateOnScroll);
  }, []);

  return (
    <div className="min-h-screen relative">
      <Navigation />
      <Hero />
      <AboutCodecratz />
      <Timeline />
      <PreviousWinners />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
