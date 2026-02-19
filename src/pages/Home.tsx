import { Hero } from '@/components/Hero';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Award, Clock, Mail, Phone, MapPin, X, Check, GraduationCap, Rocket, Brain, Users, Star } from 'lucide-react';
import ProgramsSection from '@/components/ProgramsSection';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { toast } from 'sonner';

import ReviewsCarousel from '@/components/ReviewsCarousel';
import foundersImage from '@/assets/founders.jpeg';
import teamImage from '@/assets/team.jpeg';


const stats = [
  { label: 'Happy Families', value: '1,500+' },
  { label: 'IIT Bombay Experts', value: '10+' },
  { label: 'Hands-On Rate', value: '100%' },
];

const iconBadges = [
  { icon: GraduationCap, text: 'IIT Bombay Researchers' },
  { icon: Rocket, text: 'SINE Incubated' },
  { icon: Brain, text: 'Hands-On Learning' },
  { icon: Users, text: '1500+ Families' },
];

const aboutStats = [
  { value: '1500+', label: 'Parents Trust AnyD' },
  { value: '100%', label: 'Hands-On' },
  { value: '5.0', label: 'Google Rating', icon: Star },
  { value: '6–14', label: 'Age Group' },
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
          <div className="grid grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div key={stat.label} className="text-center animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-base text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tired of Basic STEM Section */}
      <section className="py-16 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-12">
            <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl mb-2">
              Tired of Basic School STEM?
            </h2>
            <p className="text-3xl sm:text-4xl font-bold">
              <span className="text-accent">Your Child Deserves More.</span>
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 max-w-4xl mx-auto mb-14">
            {/* Card 1 */}
            <Card className="bg-white shadow-sm text-center p-6 animate-scale-in border border-border/50">
              <CardContent className="pt-6">
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full border border-destructive/30">
                  <X className="h-5 w-5 text-destructive" strokeWidth={2.5} />
                </div>
                <CardTitle className="text-lg mb-2">Theory Only</CardTitle>
                <p className="text-sm text-muted-foreground">No real projects</p>
              </CardContent>
            </Card>

            {/* Card 2 */}
            <Card className="bg-white shadow-sm text-center p-6 animate-scale-in border border-border/50" style={{ animationDelay: '100ms' }}>
              <CardContent className="pt-6">
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full border border-destructive/30">
                  <X className="h-5 w-5 text-destructive" strokeWidth={2.5} />
                </div>
                <CardTitle className="text-lg mb-2">Boring Classes</CardTitle>
                <p className="text-sm text-muted-foreground">Curiosity fades</p>
              </CardContent>
            </Card>

            {/* Card 3 - Highlight */}
            <Card className="bg-white text-center p-6 border-2 border-deep-wine shadow-md animate-scale-in hover:scale-[1.03] transition-all duration-300" style={{ animationDelay: '200ms' }}>
              <CardContent className="pt-6">
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full border border-green-400/40">
                  <Check className="h-5 w-5 text-green-600" strokeWidth={2.5} />
                </div>
                <CardTitle className="text-xl font-extrabold mb-3 text-deep-wine">AnyD Advantage</CardTitle>
                <ul className="text-sm text-muted-foreground space-y-1.5 text-left">
                  <li className="flex items-center gap-2"><Check className="h-3.5 w-3.5 text-green-600 flex-shrink-0" /> 100% <span className="font-bold text-foreground">Hands-On</span></li>
                  <li className="flex items-center gap-2"><Check className="h-3.5 w-3.5 text-green-600 flex-shrink-0" /> <span className="font-bold text-foreground">IIT Bombay</span> Designed</li>
                  <li className="flex items-center gap-2"><Check className="h-3.5 w-3.5 text-green-600 flex-shrink-0" /> <span className="font-bold text-foreground">Take-Home Projects</span></li>
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-10">
            {/* Left: Text */}
            <div className="animate-fade-in">
              <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl mb-4">
                Pioneered by <span className="text-deep-wine">IIT Bombay</span> Researchers
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                AnyD is <span className="font-medium text-foreground">SINE IIT Bombay incubated</span> – founded by <span className="font-medium text-foreground">Dr. Seema & Dr. Shweta, Professor Parag Bhargava</span>. Mentored by IITians who believe <span className="font-medium text-foreground">curiosity + tech = future-ready kids</span>.
              </p>
            </div>

            {/* Right: Stats Card */}
            <div className="animate-scale-in">
              <div className="rounded-2xl bg-deep-wine p-8 shadow-elevated grid grid-cols-2 gap-6">
                {aboutStats.map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="flex items-center justify-center gap-1.5 mb-1">
                      <span className="text-3xl font-bold text-white">{stat.value}</span>
                      {stat.icon && <stat.icon className="h-5 w-5 fill-[hsl(var(--hero-accent))] text-[hsl(var(--hero-accent))]" />}
                    </div>
                    <div className="text-sm text-white/70">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Innovation Milestone */}
          <div className="mx-auto max-w-3xl mb-10">
            <Card className="border-2 border-deep-wine/30 bg-card hover:scale-[1.01] transition-all duration-300 p-1" style={{ boxShadow: '0 8px 32px -8px hsl(348 70% 24% / 0.2)' }}>
              <CardHeader className="flex flex-row items-start gap-4">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white flex-shrink-0 mt-1 shadow-sm border border-deep-wine/15">
                  <Award className="h-6 w-6 text-deep-wine" />
                </div>
                <div>
                  <Badge variant="secondary" className="w-fit mb-2">Innovation Milestone</Badge>
                  <CardTitle className="text-2xl"><span className="text-deep-wine font-extrabold">India's First</span> <span className="text-deep-wine">Conductive Ink Pen</span></CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  AnyD introduced the concept of <span className="text-foreground font-medium">electricity on paper</span> — making it possible for children to draw circuits that actually work.
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-muted-foreground">
                  {['Simplified complex science into hands-on exploration', 'Introduced electricity on paper for the first time in India', 'Encouraged real-world experimentation from day one', 'A breakthrough born from IIT Bombay research'].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <Award className="h-4 w-4 text-deep-wine mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Founders & Team Images */}
          <div className="mx-auto max-w-4xl mb-10 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col items-center animate-fade-in">
              <img
                src={foundersImage}
                alt="AnyD Founders – Dr. Seema, Dr. Shweta, and Professor Parag Bhargava"
                className="w-full aspect-[4/3] rounded-2xl shadow-elevated object-cover transition-transform duration-300 hover:scale-[1.03]"
              />
              <p className="mt-3 text-sm text-muted-foreground text-center">
                Founders – <span className="font-semibold text-deep-wine">IIT Bombay Researchers</span>
              </p>
            </div>
            <div className="flex flex-col items-center animate-fade-in" style={{ animationDelay: '100ms' }}>
              <img
                src={teamImage}
                alt="AnyD Team"
                className="w-full aspect-[4/3] rounded-2xl shadow-elevated object-cover transition-transform duration-300 hover:scale-[1.03]"
              />
              <p className="mt-3 text-sm text-muted-foreground text-center">
                <span className="font-semibold text-deep-wine">Our Team</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      <ProgramsSection />

      <ReviewsCarousel />

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

                    <Button type="submit" className="w-full gradient-accent shadow-elevated">
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
