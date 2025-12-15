import { useState, useEffect } from 'react';
import { X, Sparkles, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const PromoPopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Show popup after a short delay for better UX
    const timer = setTimeout(() => {
      const hasSeenPopup = sessionStorage.getItem('hasSeenPromoPopup');
      if (!hasSeenPopup) {
        setIsOpen(true);
      }
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    sessionStorage.setItem('hasSeenPromoPopup', 'true');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-fade-in"
        onClick={handleClose}
      />
      
      {/* Popup Content */}
      <div className="relative w-full max-w-md bg-gradient-to-br from-secondary to-background rounded-2xl shadow-2xl border border-primary/20 overflow-hidden animate-scale-in">
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-accent/10 rounded-full translate-y-1/2 -translate-x-1/2" />
        
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-background/80 hover:bg-background text-foreground/70 hover:text-foreground transition-all duration-200 z-10"
          aria-label="Close popup"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Content */}
        <div className="relative p-8 pt-10">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary/15 text-primary rounded-full text-sm font-medium mb-4">
            <Sparkles className="h-4 w-4" />
            <span>New Programs Available</span>
          </div>

          {/* Headline */}
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3 leading-tight">
            Ignite Your Child's <span className="text-primary">STEM Journey</span> Today!
          </h2>

          {/* Description */}
          <p className="text-muted-foreground mb-6 leading-relaxed">
            Discover our exciting hands-on science programs designed to spark curiosity and build future innovators. Limited seats available for upcoming batches!
          </p>

          {/* Features */}
          <div className="flex flex-wrap gap-2 mb-6">
            {['Hands-on Learning', 'IIT Bombay Certified', 'Expert Mentors'].map((feature) => (
              <span 
                key={feature}
                className="px-3 py-1 bg-accent/10 text-accent text-sm rounded-full"
              >
                {feature}
              </span>
            ))}
          </div>

          {/* CTA Button */}
          <Link to="/programs" onClick={handleClose}>
            <Button 
              size="lg" 
              className="w-full group bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
            >
              Know More
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>

          {/* Dismiss Text */}
          <p className="text-center text-sm text-muted-foreground mt-4">
            <button 
              onClick={handleClose}
              className="hover:text-foreground transition-colors underline-offset-2 hover:underline"
            >
              Maybe later
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default PromoPopup;
