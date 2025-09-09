import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles, Zap } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-purple-50/30 to-teal-50/50"></div>
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full floating"></div>
      <div className="absolute top-40 right-20 w-16 h-16 bg-accent/10 rounded-full floating-delayed"></div>
      <div className="absolute bottom-40 left-20 w-12 h-12 bg-tertiary/10 rounded-full floating"></div>
      <div className="absolute bottom-20 right-10 w-24 h-24 bg-primary/5 rounded-full floating-delayed"></div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="fade-in-up animate max-w-4xl mx-auto">
          <div className="flex items-center justify-center mb-6">
            <Sparkles className="w-8 h-8 text-accent mr-3" />
            <span className="text-accent font-medium">Next-Gen Technology</span>
            <Zap className="w-8 h-8 text-tertiary ml-3" />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Building the
            <span className="block bg-gradient-to-r from-primary via-accent to-tertiary bg-clip-text text-transparent">
              Future of Tech
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Empowering entrepreneurs and innovators with cutting-edge technology solutions 
            that transform ideas into reality.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="btn-gradient group">
              Explore Solutions
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="btn-outline-gradient">
              Watch Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;