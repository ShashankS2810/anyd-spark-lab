import { Button } from '@/components/ui/button';
import { ArrowRight, Award } from 'lucide-react';
import heroVideo from '@/assets/hero-video.mp4';
import FloatingShapes from '@/components/FloatingShapes';

const scrollToSection = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
};

export function Hero() {
  return (
    <section className="relative overflow-hidden min-h-[90vh] flex items-center">
      {/* Animated grid background */}
      <div className="absolute inset-0 animated-grid" />
      <div className="absolute inset-0 gradient-hero" />
      
      {/* Floating shapes */}
      <FloatingShapes />

      {/* Top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-neon-blue/10 rounded-full blur-[100px]" />
      
      {/* Content */}
      <div className="relative mx-auto max-w-7xl px-6 py-20 sm:py-28 lg:px-8 w-full">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-12 items-center">
          {/* Text content */}
          <div className="animate-fade-in">
            <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 mb-6">
              <Award className="h-4 w-4 text-neon-blue" />
              <span className="text-xs font-bold uppercase tracking-widest text-neon-blue">IIT Bombay SINE Incubated</span>
            </div>
            
            <h1 className="text-5xl font-extrabold tracking-tight sm:text-7xl mb-5 leading-[1.1]">
              <span className="bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink bg-clip-text text-transparent">
                Unlock Future-Ready Skills:
              </span>{' '}
              <span className="text-foreground">Hands-On STEM</span>{' '}
              <span className="text-muted-foreground">for Curious Kids 6–14</span>
            </h1>
            
            <p className="text-xl leading-9 text-muted-foreground mb-8">
              1500+ Thriving Parents • Build, Print & Take Home Real Projects
            </p>
            
            <div className="flex flex-col sm:flex-row gap-5">
              <Button 
                size="lg" 
                className="gradient-accent shadow-glow-blue text-lg px-10 py-7 font-bold tracking-wide hover:scale-105 transition-transform duration-200 text-white border-0" 
                onClick={() => scrollToSection('programs')}
              >
                Explore Programs
                <ArrowRight className="ml-2 h-6 w-6 animate-bounce" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="glass text-foreground hover:bg-neon-blue/10 text-lg px-8 py-6 border-neon-blue/30" 
                onClick={() => scrollToSection('contact')}
              >
                Get in Touch
              </Button>
            </div>
          </div>

          {/* Video */}
          <div className="relative animate-scale-in">
            <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-glow-purple border border-neon-purple/20">
              <video
                src={heroVideo}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                className="h-full w-full object-cover"
              />
            </div>
            {/* Glow effects */}
            <div className="absolute -top-4 -right-4 h-32 w-32 rounded-full bg-neon-blue/15 blur-3xl animate-pulse-glow" />
            <div className="absolute -bottom-4 -left-4 h-40 w-40 rounded-full bg-neon-purple/10 blur-3xl animate-pulse-glow" style={{ animationDelay: '1s' }} />
          </div>
        </div>
      </div>
    </section>
  );
}
