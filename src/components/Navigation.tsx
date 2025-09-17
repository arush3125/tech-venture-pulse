import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

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
      <div className="container mx-auto px-6 py-3 max-w-full">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <div className="text-2xl md:text-3xl font-bold text-primary tracking-wide">
              CODE<span className="text-accent">CRATZ</span> <span className="text-accent">'25</span>
            </div>
            <div className="flex items-center space-x-6">
              <img 
                src="/1.png" 
                alt="Agnel Polytechnic Logo" 
                className="w-20 h-20 object-contain logo-attractive hover:scale-110 transition-transform duration-300"
              />
              <img 
                src="/2.png" 
                alt="Codecratz Logo" 
                className="w-20 h-20 object-contain logo-attractive hover:scale-110 transition-transform duration-300"
              />
              <img 
                src="/3.png" 
                alt="Sponsor Logo" 
                className="w-20 h-20 object-contain logo-attractive hover:scale-110 transition-transform duration-300"
              />
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-12">
            <Link 
              to="/"
              className="text-foreground hover:text-primary transition-colors text-lg font-medium"
            >
              Home
            </Link>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-foreground hover:text-primary transition-colors text-lg font-medium"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-foreground hover:text-primary transition-colors text-lg font-medium"
            >
              Contact
            </button>
          </div>

          <Button 
            className="btn-gradient"
            onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSdjxl9o80DBheWdYoDXvGJSRJ5JmgcX7QadAJA2denXll1Ntg/viewform?usp=sharing&ouid=106879828477687512783', '_blank')}
          >
            Register Now
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;