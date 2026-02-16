import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles, Award } from 'lucide-react';
import heroVideo from '@/assets/hero-video.mp4';

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 gradient-hero opacity-95" />
      
      {/* Content */}
      <div className="relative mx-auto max-w-7xl px-6 py-32 sm:py-40 lg:px-8">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-12 items-center">
          {/* Text content */}
          <div className="animate-fade-in">
            <div className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-5 py-2.5 mb-8 border border-accent/20">
              <Sparkles className="h-5 w-5 text-accent" />
              <span className="text-base font-medium text-primary-foreground">Hands-On STEM Education for Young Innovators</span>
            </div>
            
            <h1 className="text-5xl font-bold tracking-tight text-primary-foreground sm:text-7xl mb-8">
              Why is '<span className="text-accent">Why</span>' important?
            </h1>
            
            <p className="text-xl leading-9 text-primary-foreground/90 mb-8">
              At AnyD Materials, we believe every '<span className="font-semibold text-accent">Why</span>' ignites curiosity, turning questions into hands-on learning and creative discovery.
            </p>

            <div className="inline-flex items-center gap-2.5 rounded-full bg-primary-foreground/10 backdrop-blur-sm px-5 py-2.5 mb-8 border border-primary-foreground/15 shadow-sm">
              <Award className="h-5 w-5 text-accent" />
              <span className="text-base font-semibold text-primary-foreground">
                Founded by <span className="text-accent">IIT Bombay</span> Researchers
              </span>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-5">
              <Button asChild size="lg" className="gradient-accent shadow-elevated text-lg px-8 py-6">
                <Link to="/programs">
                  Explore Programs
                  <ArrowRight className="ml-2 h-6 w-6" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-card/10 border-primary-foreground/20 text-primary-foreground hover:bg-card/20 backdrop-blur text-lg px-8 py-6">
                <Link to="/contact">Get in Touch</Link>
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
