import { Hero } from '@/components/Hero';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Award, Clock, Mail, Phone, MapPin, X, Check, GraduationCap, Rocket, Brain, Users } from 'lucide-react';
import ProgramsSection from '@/components/ProgramsSection';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { toast } from 'sonner';

import ReviewsCarousel from '@/components/ReviewsCarousel';
import WhyNowSection from '@/components/WhyNowSection';


const stats = [
  { label: 'Happy Families', value: '1,500+' },
  { label: 'Researchers from IIT Bombay', value: '20+' },
  { label: 'Hands-On Rate', value: '100%' },
];

const iconBadges = [
  { icon: GraduationCap, text: 'IIT Bombay Researchers' },
  { icon: Rocket, text: 'SINE Incubated' },
  { icon: Brain, text: 'Hands-On Learning' },
  { icon: Users, text: '1500+ Families' },
];



const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

export default function Home() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast.success('Thank you! We will get back to you soon.', {
      description: 'Your message has been sent successfully.',
    });
    (e.target as HTMLFormElement).reset();
  };

  return (
    <div className="flex flex-col">
      
      <Hero />

      {/* Stats Section */}
      <section className="py-14 bg-secondary">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-8">
            {stats.map((stat, index) => (
              <div key={stat.label} className="text-center animate-fade-in px-4 sm:px-0" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="text-4xl font-bold text-primary mb-3">{stat.value}</div>
                <div className="text-base text-muted-foreground leading-relaxed max-w-[200px] mx-auto">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tired of Basic STEM Section */}
      <section className="py-16 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-12">
            <h2 className="text-4xl font-bold tracking-tight text-deep-wine sm:text-5xl mb-2">
              Tired of Basic School STEM?
            </h2>
            <p className="text-3xl sm:text-4xl font-bold text-[hsl(var(--hero-accent))]">
              Your Child Deserves More.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-3 max-w-3xl mx-auto mb-14">
            {/* Card 1 – Theory Only */}
            <Card className="bg-white shadow-sm text-center rounded-2xl border-none animate-scale-in transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
              <CardContent className="p-5 pt-7">
                <div className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-full bg-red-50 border border-red-200/50">
                  <X className="h-5 w-5 text-red-400" strokeWidth={1.6} />
                </div>
                <CardTitle className="text-base mb-1.5 text-deep-wine">Theory Only</CardTitle>
                <p className="text-sm text-deep-wine/70">No real projects</p>
              </CardContent>
            </Card>

            {/* Card 2 – Boring Classes */}
            <Card className="bg-white shadow-sm text-center rounded-2xl border-none animate-scale-in transition-all duration-300 hover:-translate-y-1 hover:shadow-md" style={{ animationDelay: '100ms' }}>
              <CardContent className="p-5 pt-7">
                <div className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-full bg-red-50 border border-red-200/50">
                  <X className="h-5 w-5 text-red-400" strokeWidth={1.6} />
                </div>
                <CardTitle className="text-base mb-1.5 text-deep-wine">Boring Classes</CardTitle>
                <p className="text-sm text-deep-wine/70">Curiosity fades</p>
              </CardContent>
            </Card>

            {/* Card 3 – AnyD Advantage (Highlighted) */}
            <Card
              className="bg-white text-center rounded-2xl border-2 border-deep-wine animate-scale-in transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_-8px_hsl(348_70%_24%/0.3)]"
              style={{ animationDelay: '200ms', boxShadow: '0 4px 24px -6px hsl(348 70% 24% / 0.18)' }}
            >
              <CardContent className="p-5 pt-7">
                <div className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-full bg-green-50 border border-green-300/50">
                  <Check className="h-5 w-5 text-green-500" strokeWidth={1.6} />
                </div>
                <CardTitle className="text-lg font-extrabold mb-3 text-deep-wine">AnyD Advantage</CardTitle>
                <ul className="text-sm text-deep-wine/80 space-y-2 text-left">
                  <li className="flex items-center gap-2">
                    <Check className="h-3.5 w-3.5 text-green-500 flex-shrink-0" strokeWidth={2} />
                    100% <span className="font-bold text-[hsl(var(--hero-accent))]">Hands-On</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-3.5 w-3.5 text-green-500 flex-shrink-0" strokeWidth={2} />
                    <span className="font-bold text-[hsl(var(--hero-accent))]">IIT Bombay</span> Designed
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-3.5 w-3.5 text-green-500 flex-shrink-0" strokeWidth={2} />
                    <span className="font-bold text-[hsl(var(--hero-accent))]">Take-Home Projects</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Icon Badges */}
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
            {iconBadges.map((badge, index) => (
              <div key={badge.text} className="flex items-center gap-2.5 bg-deep-wine/10 border border-deep-wine/20 rounded-full px-5 py-2.5 animate-fade-in" style={{ animationDelay: `${index * 80}ms` }}>
                <badge.icon className="h-5 w-5 text-deep-wine" />
                <span className="text-sm font-semibold text-foreground">{badge.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-secondary scroll-mt-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Two-column: Text + Stats Card */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start mb-12">
            {/* Left: Text */}
            <div className="animate-fade-in">
              <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-3">About Us</p>
              <h2 className="text-4xl font-bold tracking-tight sm:text-5xl mb-5 text-deep-wine">
              Pioneered by <span className="text-[hsl(var(--hero-accent))] font-bold">IIT Bombay</span> Researchers
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-xl mb-8">
                AnyD is <span className="font-semibold text-foreground">SINE IIT Bombay incubated</span> – founded by IIT Profs <span className="font-semibold text-foreground">Dr. Seema & Dr. Shweta, Dr. Parag Bhargava</span>. Mentored by IITians who believe <em>curiosity + tech = future-ready kids</em>.
              </p>

              {/* Milestone mini-cards */}
              <div className="space-y-4">
                <div className="flex items-start gap-4 bg-white rounded-xl p-5 border-2 border-deep-wine/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_-8px_hsl(348_70%_24%/0.25)]" style={{ boxShadow: '0 4px 20px -6px hsl(348 70% 24% / 0.15)' }}>
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white flex-shrink-0 shadow-sm border border-deep-wine/15">
                    <Award className="h-5 w-5 text-deep-wine" />
                  </div>
                  <div>
                    <p className="font-bold text-accent">India's 1st Conductive Ink Pen</p>
                    <p className="text-sm text-muted-foreground">Electricity on Paper – invented right here at AnyD.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 bg-white rounded-xl p-5 border-2 border-deep-wine/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_-8px_hsl(348_70%_24%/0.25)]" style={{ boxShadow: '0 4px 20px -6px hsl(348 70% 24% / 0.15)' }}>
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white flex-shrink-0 shadow-sm border border-deep-wine/15">
                    <Award className="h-5 w-5 text-deep-wine" />
                  </div>
                  <div>
                    <p className="font-bold text-accent">SINE IIT Bombay Certified</p>
                    <p className="text-sm text-muted-foreground">Where India's top startups are born and thrive.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Stats Card */}
            <div className="animate-scale-in flex items-center justify-center lg:justify-end">
              <div className="rounded-2xl bg-deep-wine p-10 shadow-elevated w-full max-w-md">
                <div className="text-center mb-8">
                  <div className="text-6xl sm:text-7xl font-extrabold text-white mb-2">1500+</div>
                  <div className="text-base text-white/80">Parents Trust AnyD</div>
                </div>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-3xl sm:text-4xl font-extrabold text-[hsl(var(--hero-accent))]">100%</div>
                    <div className="text-sm text-white/70 mt-1">Hands-On</div>
                  </div>
                  <div>
                    <div className="text-3xl sm:text-4xl font-extrabold text-[hsl(var(--hero-accent))]">5.0</div>
                    <div className="text-sm text-white/70 mt-1">Google Rating</div>
                  </div>
                  <div>
                    <div className="text-3xl sm:text-4xl font-extrabold text-[hsl(var(--hero-accent))]">6–14</div>
                    <div className="text-sm text-white/70 mt-1">Age Group</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ProgramsSection />

      <ReviewsCarousel />

      <WhyNowSection />

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-secondary scroll-mt-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-10">
            <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl mb-4">
              Get in Touch
            </h2>
            <p className="text-xl text-muted-foreground">
              Have questions about our programs? We're here to help you start your STEM journey.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {/* Contact Form */}
            <div className="animate-fade-in">
              <Card className="shadow-elevated">
                <CardHeader>
                  <CardTitle className="text-2xl">Send Us a Message</CardTitle>
                  <p className="text-sm text-muted-foreground">
                    Fill out the form below and we'll respond within 24 hours.
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name</Label>
                        <Input id="firstName" name="firstName" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input id="lastName" name="lastName" required />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" name="email" type="email" required />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" name="phone" type="tel" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="age">Age</Label>
                      <Select name="age" required>
                        <SelectTrigger>
                          <SelectValue placeholder="Select Age Group" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="6-8">6–8 years</SelectItem>
                          <SelectItem value="9-14">9–14 years</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="interest">I'm Interested In</Label>
                      <Input id="interest" name="interest" placeholder="e.g., Junior Scientists Program" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Tell us about your questions or interests..."
                        rows={5}
                        required
                      />
                    </div>

                    <Button type="submit" className="w-full bg-deep-wine hover:bg-deep-wine/85 text-white font-bold rounded-xl shadow-lg hover:-translate-y-0.5 transition-all duration-200">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Info */}
            <div className="space-y-6 animate-scale-in">
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="text-xl">Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white flex-shrink-0 shadow-sm border border-accent/15">
                      <Mail className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <div className="font-semibold mb-1">Email</div>
                      <a href="mailto:info@anydmaterials.com" className="text-muted-foreground hover:text-accent transition-smooth">
                        info@anydmaterials.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white flex-shrink-0 shadow-sm border border-accent/15">
                      <Phone className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <div className="font-semibold mb-1">Phone</div>
                      <a href="tel:+911234567890" className="text-muted-foreground hover:text-accent transition-smooth">
                        +91 123 456 7890
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white flex-shrink-0 shadow-sm border border-accent/15">
                      <MapPin className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <div className="font-semibold mb-1">Address</div>
                      <a href="https://maps.google.com/?q=IIT+Bombay+Campus+Powai+Mumbai+400076" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition-smooth">
                        IIT Bombay Campus<br />
                        Powai, Mumbai 400076<br />
                        Maharashtra, India
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white flex-shrink-0 shadow-sm border border-accent/15">
                      <Clock className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <div className="font-semibold mb-1">Office Hours</div>
                      <p className="text-muted-foreground">
                        Monday - Friday: 9:00 AM - 6:00 PM<br />
                        Saturday: 10:00 AM - 4:00 PM<br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
