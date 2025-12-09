import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';
import anydLogo from '@/assets/anyd-logo.png';

const navigation = {
  main: [
    { name: 'About', href: '/about' },
    { name: 'Programs', href: '/programs' },
    { name: 'Materials', href: '/materials' },
    { name: 'Projects', href: '/projects' },
    { name: 'Contact', href: '/contact' },
  ],
};

export function Footer() {
  return (
    <footer className="bg-card border-t">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Brand */}
          <div>
            <Link to="/" className="inline-block mb-4">
              <img src={anydLogo} alt="AnyD Materials Logo" width="924" height="362" className="h-10 sm:h-12 md:h-14 w-auto" />
            </Link>
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
                  <Link
                    to={item.href}
                    className="text-sm text-muted-foreground hover:text-accent transition-smooth"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4 text-accent" />
                <a href="mailto:info@anydmaterials.com" className="hover:text-accent transition-smooth">
                  info@anydmaterials.com
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4 text-accent" />
                <a href="tel:+911234567890" className="hover:text-accent transition-smooth">
                  +91 123 456 7890
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 text-accent mt-0.5" />
                <span>IIT Bombay, Powai<br />Mumbai, India</span>
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
