import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 nav-gradient ${
      isScrolled ? 'shadow-md' : ''
    }`}>
      <div className="container mx-auto px-6 py-6 max-w-full">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <div className="text-2xl md:text-3xl font-bold text-primary tracking-wide">
              CODE<span className="text-accent">CRATZ</span> <span className="text-accent">'25</span>
            </div>
            <div className="flex items-center space-x-6">
              <img 
                src="/1.png" 
                alt="Agnel Polytechnic Logo" 
                className="w-24 h-24 object-contain rounded-lg"
              />
              <img 
                src="/2.png" 
                alt="Codecratz Logo" 
                className="w-24 h-24 object-contain rounded-lg"
              />
              <img 
                src="/3.png" 
                alt="Sponsor Logo" 
                className="w-24 h-24 object-contain rounded-lg"
              />
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('what-is-codecratz')}
              className="text-foreground hover:text-primary transition-colors"
            >
              What is Codecratz
            </button>
            <button 
              onClick={() => scrollToSection('timeline')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Timeline
            </button>
            <button 
              onClick={() => scrollToSection('problem-statements')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Problem Statements
            </button>
            <button 
              onClick={() => scrollToSection('rules')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Rules
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-foreground hover:text-primary transition-colors"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Contact
            </button>
          </div>

          <Button className="btn-gradient">
            Register Now
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;