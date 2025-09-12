import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles, Zap } from 'lucide-react';
import Squares from '@/components/Squares';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">

      {/* 3D Squares background adapted for light theme (no cloudy overlay) */}
      <div className="absolute inset-0">
        <Squares
          speed={0.4}
          squareSize={56}
          direction="diagonal"
          borderColor="rgba(99, 102, 241, 0.18)" /* slightly higher contrast */
          hoverFillColor="rgba(56, 189, 248, 0.12)"
          className=""
        />
      </div>

      {/* No extra floating elements per minimal hero request */}

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex items-center justify-center">
          <div className="fade-in-up animate max-w-3xl text-center">
            <h1 className="text-5xl md:text-7xl mb-4 leading-tight font-orbitron tracking-wide">
              <span className="block bg-gradient-to-r from-primary via-accent to-tertiary bg-clip-text text-transparent font-extrabold">
                CODECRATZ '25
              </span>
            </h1>

            <p className="text-xl md:text-2xl mb-8 max-w-2xl leading-relaxed font-exo2 text-muted-foreground">
              Where Code Meets Creativity
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;