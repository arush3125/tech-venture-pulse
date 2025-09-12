import { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import WhatIsCodecratz from '@/components/WhatIsCodecratz';
import Timeline from '@/components/Timeline';
import Services from '@/components/Services';
import Rules from '@/components/Rules';
import About from '@/components/About';
import MapLocation from '@/components/MapLocation';
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
      <WhatIsCodecratz />
      <Timeline />
      <Services />
      <Rules />
      <About />
      <MapLocation />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
