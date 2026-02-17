import { Mail, Phone, MapPin } from 'lucide-react';
import anydLogo from '@/assets/anyd-logo.png';

const navigation = {
  main: [
    { name: 'About', href: '#about' },
    { name: 'Programs', href: '#programs' },
    { name: 'Contact', href: '#contact' },
  ],
};

const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
  e.preventDefault();
  const element = document.querySelector(href);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

export function Footer() {
  return (
    <footer className="relative border-t border-border bg-card">
      {/* Subtle glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[2px] bg-gradient-to-r from-transparent via-neon-blue/50 to-transparent" />
      
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Brand */}
          <div>
            <a 
              href="#home" 
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="inline-block mb-4"
            >
              <img src={anydLogo} alt="AnyD Materials Logo" width="924" height="362" className="h-14 sm:h-16 md:h-20 w-auto" />
            </a>
            <p className="text-sm text-muted-foreground max-w-xs">
              Empowering the next generation through innovative STEM education. Associated with IIT Bombay.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {navigation.main.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    onClick={(e) => scrollToSection(e, item.href)}
                    className="text-sm text-muted-foreground hover:text-neon-blue transition-smooth cursor-pointer"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4 text-neon-blue" />
                <a href="mailto:info@anydmaterials.com" className="hover:text-neon-blue transition-smooth">
                  info@anydmaterials.com
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4 text-neon-blue" />
                <a href="tel:+911234567890" className="hover:text-neon-blue transition-smooth">
                  +91 123 456 7890
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 text-neon-blue mt-0.5" />
                <a href="https://maps.google.com/?q=IIT+Bombay+Campus+Powai+Mumbai" target="_blank" rel="noopener noreferrer" className="hover:text-neon-blue transition-smooth">IIT Bombay, Powai<br />Mumbai, India</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-border pt-8">
          <p className="text-xs text-center text-muted-foreground">
            &copy; {new Date().getFullYear()} AnyD Materials. All rights reserved. Associated with IIT Bombay.
          </p>
        </div>
      </div>
    </footer>
  );
}
