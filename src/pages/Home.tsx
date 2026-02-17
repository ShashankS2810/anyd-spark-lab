import { Hero } from '@/components/Hero';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { BookOpen, Rocket, Users, Award, Clock, Mail, Phone, MapPin } from 'lucide-react';
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
import FloatingShapes from '@/components/FloatingShapes';

const features = [
  {
    name: 'Learn from the Best',
    description: 'Our curriculum is designed by IIT Bombay researchers and professors — the same minds shaping India\'s brightest engineers.',
    icon: Award,
    color: 'neon-blue',
  },
  {
    name: 'SINE-Backed Innovation',
    description: 'Incubated at IIT Bombay\'s SINE — where India\'s most promising startups are built, mentored, and scaled.',
    icon: Rocket,
    color: 'neon-purple',
  },
  {
    name: '100% Hands-On Learning',
    description: 'No rote learning. Every session is project-based, with real materials and mentorship included — children build, not just watch.',
    icon: BookOpen,
    color: 'neon-pink',
  },
  {
    name: 'Loved by 1,500+ Families',
    description: 'A thriving community of parents and children who trust AnyD to keep their kids curious, confident, and future-ready.',
    icon: Users,
    color: 'neon-green',
  },
];

const stats = [
  { label: 'Happy Families', value: '1,500+' },
  { label: 'Learning Levels', value: '2' },
  { label: 'IIT Bombay Experts', value: '10+' },
  { label: 'Hands-On Rate', value: '100%' },
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
      <section className="py-14 relative overflow-hidden">
        <div className="absolute inset-0 bg-card" />
        <div className="absolute inset-0 animated-grid opacity-50" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <div key={stat.label} className="text-center animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="text-4xl font-bold bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent mb-2">{stat.value}</div>
                <div className="text-base text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-background" />
        <FloatingShapes />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-12">
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">
              <span className="bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent">Why Choose AnyD?</span>
            </h2>
            <p className="text-xl md:text-2xl font-semibold text-foreground mb-3">
              Tired of basic school STEM and theory-only learning?<br />
              <span className="text-neon-blue glow-text-blue">Your child deserves</span> hands-on experiences that build real skills, confidence, and creativity.
            </p>
            <p className="text-sm text-muted-foreground tracking-wide">
              Built by IIT Bombay researchers • Trusted by 1,500+ families • Designed to make every child fall in love with learning
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => {
              const colorMap: Record<string, string> = {
                'neon-blue': 'text-neon-blue bg-neon-blue/10 border-neon-blue/20',
                'neon-purple': 'text-neon-purple bg-neon-purple/10 border-neon-purple/20',
                'neon-pink': 'text-neon-pink bg-neon-pink/10 border-neon-pink/20',
                'neon-green': 'text-neon-green bg-neon-green/10 border-neon-green/20',
              };
              const colors = colorMap[feature.color] || colorMap['neon-blue'];
              const [textColor, bgColor, borderColor] = colors.split(' ');
              
              return (
                <Card key={feature.name} className="glass transition-smooth hover:shadow-glow-blue hover:-translate-y-1 animate-scale-in p-2 border-border/50" style={{ animationDelay: `${index * 100}ms` }}>
                  <CardHeader>
                    <div className={`mb-3 inline-flex h-12 w-12 items-center justify-center rounded-xl ${bgColor}`}>
                      <feature.icon className={`h-6 w-6 ${textColor}`} />
                    </div>
                    <CardTitle className="text-xl text-foreground">{feature.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base leading-relaxed text-muted-foreground">{feature.description}</CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-card scroll-mt-20 relative overflow-hidden">
        <div className="absolute inset-0 animated-grid opacity-30" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-10">
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">
              <span className="bg-gradient-to-r from-neon-purple to-neon-pink bg-clip-text text-transparent">About AnyD</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Where IIT Bombay research meets real-world learning — for every young innovator.
            </p>
          </div>

          {/* Story */}
          <div className="mx-auto max-w-3xl mb-10">
            <h3 className="text-2xl font-bold tracking-tight text-foreground mb-4">Our Story</h3>
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
              <p>
                AnyD was born from a simple but powerful conviction: <span className="text-neon-blue font-medium">curiosity is the foundation of lifelong learning</span>. Founded by <span className="text-foreground font-medium">Dr. Seema, Dr. Shweta, and Dr. Parag Bhargawa</span> — IIT Bombay researchers and professors — AnyD exists to close the gap between what children are taught and what they truly need to thrive in a technology-driven world.
              </p>
              <p>
                Incubated at <span className="text-neon-purple font-medium">SINE, IIT Bombay</span>, and mentored by a network of IITians, we bring research-grade rigour to every session — while keeping the experience fun, accessible, and genuinely hands-on. Our founders believe that early exposure to technology doesn't just prepare children for the future — it empowers them to shape it.
              </p>
            </div>
          </div>

          {/* Founders Image */}
          <div className="mx-auto max-w-4xl mb-10 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col items-center animate-fade-in">
              <img
                src={foundersImage}
                alt="AnyD Founders – Dr. Seema, Dr. Shweta, and Dr. Parag Bhargawa"
                className="w-full aspect-[4/3] rounded-2xl shadow-glow-blue object-cover transition-transform duration-300 hover:scale-[1.03] border border-neon-blue/20"
              />
              <p className="mt-3 text-sm text-muted-foreground text-center">
                Founders – <span className="font-semibold text-neon-blue">IIT Bombay Researchers</span>
              </p>
            </div>
            <div className="flex flex-col items-center animate-fade-in" style={{ animationDelay: '100ms' }}>
              <img
                src={teamImage}
                alt="AnyD Team"
                className="w-full aspect-[4/3] rounded-2xl shadow-glow-purple object-cover transition-transform duration-300 hover:scale-[1.03] border border-neon-purple/20"
              />
              <p className="mt-3 text-sm text-muted-foreground text-center">
                <span className="font-semibold text-neon-purple">Our Team</span>
              </p>
            </div>
          </div>

          {/* Innovation Milestone */}
          <div className="mx-auto max-w-3xl mb-10">
            <Card className="glass border-neon-blue/20">
              <CardHeader>
                <Badge className="w-fit mb-2 bg-neon-blue/15 text-neon-blue border-neon-blue/30">Innovation Milestone</Badge>
                <CardTitle className="text-2xl text-foreground">India's First Conductive Ink Pen</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  AnyD introduced the concept of <span className="text-neon-blue font-medium">electricity on paper</span> — making it possible for children to draw circuits that actually work.
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-muted-foreground">
                  {['Simplified complex science into hands-on exploration', 'Introduced electricity on paper for the first time in India', 'Encouraged real-world experimentation from day one', 'A breakthrough born from IIT Bombay research'].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <Award className="h-4 w-4 text-neon-green mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Closing Line */}
          <div className="mt-10 text-center">
            <p className="text-2xl font-bold tracking-tight sm:text-3xl bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink bg-clip-text text-transparent">
              Research-driven. Hands-on. Future-ready.
            </p>
          </div>
        </div>
      </section>

      <ProgramsSection />

      <ReviewsCarousel />

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-card scroll-mt-20 relative overflow-hidden">
        <div className="absolute inset-0 animated-grid opacity-30" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-10">
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">
              <span className="bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent">Get in Touch</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Have questions about our programs? We're here to help you start your STEM journey.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {/* Contact Form */}
            <div className="animate-fade-in">
              <Card className="glass border-border/50">
                <CardHeader>
                  <CardTitle className="text-2xl text-foreground">Send Us a Message</CardTitle>
                  <CardDescription>
                    Fill out the form below and we'll respond within 24 hours.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name</Label>
                        <Input id="firstName" name="firstName" required className="bg-muted/50 border-border" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input id="lastName" name="lastName" required className="bg-muted/50 border-border" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" name="email" type="email" required className="bg-muted/50 border-border" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" name="phone" type="tel" className="bg-muted/50 border-border" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="age">Age</Label>
                      <Select name="age" required>
                        <SelectTrigger className="bg-muted/50 border-border">
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
                      <Input id="interest" name="interest" placeholder="e.g., Junior Scientists Program" className="bg-muted/50 border-border" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Tell us about your questions or interests..."
                        rows={5}
                        required
                        className="bg-muted/50 border-border"
                      />
                    </div>

                    <Button type="submit" className="w-full gradient-accent text-white border-0 shadow-glow-blue hover:scale-[1.02] transition-transform">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Info */}
            <div className="space-y-6 animate-scale-in">
              <Card className="glass border-border/50">
                <CardHeader>
                  <CardTitle className="text-xl text-foreground">Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-neon-blue/10 flex-shrink-0">
                      <Mail className="h-5 w-5 text-neon-blue" />
                    </div>
                    <div>
                      <div className="font-semibold mb-1 text-foreground">Email</div>
                      <a href="mailto:info@anydmaterials.com" className="text-muted-foreground hover:text-neon-blue transition-smooth">
                        info@anydmaterials.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-neon-purple/10 flex-shrink-0">
                      <Phone className="h-5 w-5 text-neon-purple" />
                    </div>
                    <div>
                      <div className="font-semibold mb-1 text-foreground">Phone</div>
                      <a href="tel:+911234567890" className="text-muted-foreground hover:text-neon-purple transition-smooth">
                        +91 123 456 7890
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-neon-pink/10 flex-shrink-0">
                      <MapPin className="h-5 w-5 text-neon-pink" />
                    </div>
                    <div>
                      <div className="font-semibold mb-1 text-foreground">Address</div>
                      <a href="https://maps.google.com/?q=IIT+Bombay+Campus+Powai+Mumbai+400076" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-neon-pink transition-smooth">
                        IIT Bombay Campus<br />
                        Powai, Mumbai 400076<br />
                        Maharashtra, India
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-neon-green/10 flex-shrink-0">
                      <Clock className="h-5 w-5 text-neon-green" />
                    </div>
                    <div>
                      <div className="font-semibold mb-1 text-foreground">Office Hours</div>
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
