import { useState } from 'react';
import { createPortal } from 'react-dom';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import anydLogo from '@/assets/anyd-logo.png';

const navigation = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Programs', href: '#programs' },
  { name: 'Reviews', href: '#reviews' },
  { name: 'Contact', href: '#contact' },
];

const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
  e.preventDefault();
  if (href === '#home') {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    return;
  }
  const element = document.querySelector(href);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    scrollToSection(e, href);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/60">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <a 
            href="#home" 
            onClick={(e) => scrollToSection(e, '#home')}
            className="-m-1.5 p-1.5 flex items-center group"
          >
            <img src={anydLogo} alt="AnyD Materials Logo" width="924" height="362" className="h-12 sm:h-14 md:h-16 lg:h-20 w-auto transition-smooth group-hover:opacity-80" />
          </a>
        </div>
        
        <div className="flex md:hidden">
          <Button
            variant="ghost"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-foreground"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Menu className="h-6 w-6" aria-hidden="true" />
          </Button>
        </div>
        
        <div className="hidden md:flex md:gap-x-8">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="text-sm font-semibold leading-6 transition-smooth relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:origin-bottom-right after:scale-x-0 after:bg-accent after:transition-transform after:duration-300 hover:after:origin-bottom-left hover:after:scale-x-100 text-foreground hover:text-accent cursor-pointer"
            >
              {item.name}
            </a>
          ))}
        </div>
        
        <div className="hidden md:flex md:flex-1 md:justify-end">
          <Button 
            onClick={() => {
              const element = document.querySelector('#contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="gradient-accent"
          >
            Get Started
          </Button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen &&
        createPortal(
          <div className="fixed inset-0 z-[60] md:hidden" role="dialog" aria-modal="true">
            <div
              className="absolute inset-0 bg-background/80 backdrop-blur-sm"
              onClick={() => setMobileMenuOpen(false)}
            />
            <div className="absolute inset-y-0 right-0 w-full sm:max-w-sm overflow-hidden bg-card text-card-foreground px-6 py-6 ring-1 ring-border animate-slide-in-right flex flex-col shadow-xl">
              <div className="flex items-center justify-between">
                <a 
                  href="#home" 
                  onClick={(e) => handleNavClick(e, '#home')}
                  className="-m-1.5 p-1.5 flex items-center"
                >
                  <img src={anydLogo} alt="AnyD Materials Logo" width="924" height="362" className="h-14 w-auto" />
                </a>
                <Button
                  variant="ghost"
                  className="-m-2.5 rounded-md p-2.5"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <X className="h-6 w-6" aria-hidden="true" />
                </Button>
              </div>

              <nav className="mt-6 flex-1 overflow-y-auto">
                <ul className="space-y-1">
                  {navigation.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        onClick={(e) => handleNavClick(e, item.href)}
                        className="block rounded-lg px-3 py-3 text-base font-semibold leading-7 transition-smooth text-foreground hover:bg-secondary cursor-pointer"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>

              <div className="pt-4 border-t border-border">
                <Button 
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setTimeout(() => {
                      const element = document.querySelector('#contact');
                      if (element) element.scrollIntoView({ behavior: 'smooth' });
                    }, 100);
                  }}
                  className="w-full gradient-accent"
                >
                  Get Started
                </Button>
              </div>
            </div>
          </div>,
          document.body
        )}

    </header>
  );
}
