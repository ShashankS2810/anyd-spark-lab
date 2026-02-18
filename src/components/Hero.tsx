import { Button } from '@/components/ui/button';
import { ArrowRight, Award } from 'lucide-react';
import heroVideo from '@/assets/hero-video.mp4';

const scrollToSection = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
};

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 gradient-hero opacity-95" />
      
      {/* Content */}
      <div className="relative mx-auto max-w-7xl px-6 py-20 sm:py-28 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-12 items-center">
          {/* Text content */}
          <div className="animate-fade-in">
            <div className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-1.5 mb-6 border border-accent/20">
              <Award className="h-4 w-4 text-accent" />
              <span className="text-xs font-bold uppercase tracking-widest text-primary-foreground">IIT Bombay SINE Incubated</span>
            </div>
            
            <h1 className="text-5xl font-bold tracking-tight text-primary-foreground sm:text-7xl mb-5">
              Unlock Future-Ready Skills: <span className="text-accent">Hands-On STEM</span> for Curious Kids 6–14
            </h1>
            
            <p className="text-xl leading-9 text-primary-foreground/90 mb-6">
              1500+ Thriving Parents • Build, Print & Take Home Real Projects
            </p>
            
            <div className="flex flex-col sm:flex-row gap-5">
              <Button size="lg" className="bg-deep-wine text-white shadow-lg hover:shadow-[0_0_20px_hsl(var(--deep-wine-glow))] hover:scale-105 transition-all duration-200 text-lg px-10 py-7 font-bold tracking-wide rounded-xl" onClick={() => scrollToSection('programs')}>
                Explore Programs
                <ArrowRight className="ml-2 h-6 w-6 animate-bounce" />
              </Button>
              <Button size="lg" className="bg-deep-wine/80 text-white hover:bg-deep-wine hover:shadow-[0_0_20px_hsl(var(--deep-wine-glow))] backdrop-blur transition-all duration-200 text-lg px-8 py-6 rounded-xl" onClick={() => scrollToSection('contact')}>
                Get Started
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="relative animate-scale-in">
            <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-elevated border border-primary-foreground/10">
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
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 h-24 w-24 rounded-full bg-accent/20 blur-2xl" />
            <div className="absolute -bottom-4 -left-4 h-32 w-32 rounded-full bg-accent/10 blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
