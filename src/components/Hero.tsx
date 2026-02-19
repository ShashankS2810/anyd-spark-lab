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
      <div className="absolute inset-0 gradient-hero" />
      
      {/* Content */}
      <div className="relative mx-auto max-w-7xl px-6 py-20 sm:py-28 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-12 items-center">
          {/* Text content */}
          <div className="animate-fade-in">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 mb-6 border border-white/20">
              <Award className="h-4 w-4 text-[hsl(var(--hero-accent))]" />
              <span className="text-xs font-bold uppercase tracking-widest text-white/90">IIT Bombay SINE Incubated</span>
            </div>
            
            <h1 className="text-5xl font-bold tracking-tight text-white sm:text-7xl mb-5">
              Unlock Future-Ready Skills: <span className="text-[hsl(var(--hero-accent))]">Hands-On STEM</span> for Curious Kids 6–14
            </h1>
            
            <p className="text-xl leading-9 text-white/75 mb-6">
              1500+ Thriving Parents • Build, Print & Take Home Real Projects
            </p>
            
            <div className="flex flex-col sm:flex-row gap-5">
              <Button size="lg" className="bg-[hsl(var(--hero-accent))] text-white shadow-lg hover:bg-[hsl(28,100%,48%)] hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200 text-lg px-10 py-7 font-bold tracking-wide rounded-xl" onClick={() => scrollToSection('programs')}>
                Explore Programs
                <ArrowRight className="ml-2 h-6 w-6" />
              </Button>
              <Button size="lg" className="bg-[hsl(var(--hero-accent))]/90 text-white hover:bg-[hsl(28,100%,48%)] hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200 text-lg px-8 py-6 font-bold rounded-xl shadow-md" onClick={() => scrollToSection('contact')}>
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="relative animate-scale-in">
            <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-elevated border border-white/10">
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
            <div className="absolute -top-4 -right-4 h-24 w-24 rounded-full bg-[hsl(var(--hero-accent))]/20 blur-2xl" />
            <div className="absolute -bottom-4 -left-4 h-32 w-32 rounded-full bg-[hsl(var(--hero-accent))]/10 blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
