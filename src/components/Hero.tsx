import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles, Zap } from 'lucide-react';
import Squares from '@/components/Squares';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* 3D Squares background */}
      <div className="absolute inset-0">
        <Squares
          speed={0.4}
          squareSize={56}
          direction="diagonal"
          borderColor="rgba(99, 102, 241, 0.18)"
          hoverFillColor="rgba(56, 189, 248, 0.12)"
          className=""
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex items-center justify-center">
          <div className="fade-in-up animate max-w-3xl text-center">
            <div className="flex items-center justify-center mb-6">
              <Sparkles className="w-8 h-8 text-accent mr-3" />
              <span className="text-accent font-medium">Next-Gen Technology</span>
              <Zap className="w-8 h-8 text-tertiary ml-3" />
            </div>
            
            <h1 className="text-5xl md:text-7xl mb-6 leading-tight">
              <span className="block bg-gradient-to-r from-primary via-accent to-tertiary bg-clip-text text-transparent font-extrabold tracking-wide">
                CODECRATZ '25
              </span>
            </h1>

            <p className="text-xl md:text-2xl mb-8 max-w-2xl leading-relaxed text-white">
              Join the ultimate coding competition for college students. 
              Showcase your programming skills and compete for exciting prizes!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
              <Button size="lg" className="btn-gradient group">
                Register Now
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;