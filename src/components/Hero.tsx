import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';
import heroImage from '@/assets/hero-image.jpg';

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
              <span className="text-base font-medium text-primary-foreground">Founded by IIT Bombay Researchers</span>
            </div>
            
            <h1 className="text-5xl font-bold tracking-tight text-primary-foreground sm:text-7xl mb-8">
              Where Curiosity Meets{' '}
              <span className="text-accent">Real Learning</span>
            </h1>
            
            <p className="text-xl leading-9 text-primary-foreground/90 mb-10">
              AnyD brings IIT Bombay-designed STEM education to your child — 100% hands-on, beginner-friendly, and built to inspire the innovators of tomorrow.
            </p>
            
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
            <div className="aspect-[16/10] rounded-2xl overflow-hidden shadow-elevated border border-primary-foreground/10">
              <img
                src={heroImage}
                alt="Students engaged in STEM learning activities"
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
