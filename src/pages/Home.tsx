import { Hero } from '@/components/Hero';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { BookOpen, Rocket, Users, Award, Target, Eye, Heart, Clock, Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';
import PromoPopup from '@/components/PromoPopup';
import Map from '@/components/Map';

const features = [
  {
    name: 'Learn from the Best',
    description: 'Our curriculum is designed by IIT Bombay researchers and professors — the same minds shaping India\'s brightest engineers.',
    icon: Award,
  },
  {
    name: 'SINE-Backed Innovation',
    description: 'Incubated at IIT Bombay\'s SINE — where India\'s most promising startups are built, mentored, and scaled.',
    icon: Rocket,
  },
  {
    name: '100% Hands-On Learning',
    description: 'No rote learning. Every session is project-based, with real materials and mentorship included — children build, not just watch.',
    icon: BookOpen,
  },
  {
    name: 'Loved by 1,500+ Families',
    description: 'A thriving community of parents and children who trust AnyD to keep their kids curious, confident, and future-ready.',
    icon: Users,
  },
];

const stats = [
  { label: 'Happy Families', value: '1,500+' },
  { label: 'Learning Levels', value: '2' },
  { label: 'IIT Bombay Experts', value: '10+' },
  { label: 'Hands-On Rate', value: '100%' },
];

const values = [
  {
    icon: Target,
    title: 'Our Mission',
    description: 'To make world-class STEM education accessible to every child — replacing passive learning with real-world projects that build skills, confidence, and curiosity.',
  },
  {
    icon: Eye,
    title: 'Our Vision',
    description: 'To become India\'s most trusted STEM learning platform — raising a generation of innovators, problem-solvers, and fearless thinkers.',
  },
  {
    icon: Heart,
    title: 'Our Values',
    description: 'Excellence without intimidation. Innovation rooted in research. A beginner-friendly approach that grows with every child — from first spark to limitless mastery.',
  },
];

const programs = [
  {
    title: 'Basic Level Session',
    description: 'Short, beginner-friendly session that focuses mainly on using and understanding the kits provided. Ideal for kids who are starting their STEM learning journey.',
    duration: '45–60 minutes',
    level: 'Beginner',
    icon: Rocket,
    highlights: ['Kit-based learning', 'Fun experiments', 'Perfect for beginners'],
  },
  {
    title: 'Advanced Level Session',
    description: 'Covers advanced STEM concepts and helps students build advanced projects with hands-on, deeper learning experiences.',
    duration: 'Around 2 hours',
    level: 'Advanced',
    icon: BookOpen,
    highlights: ['Advanced concepts', 'Project building', 'Hands-on learning'],
  },
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
      <PromoPopup />
      <Hero />

      {/* Stats Section */}
      <section className="py-24 bg-secondary">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-12 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <div key={stat.label} className="text-center animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="text-5xl font-bold text-primary mb-3">{stat.value}</div>
                <div className="text-base text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-32 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-20">
            <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl mb-6">
              Why Choose AnyD?
            </h2>
            <p className="text-xl text-muted-foreground">
              Built by IIT Bombay researchers. Trusted by 1,500+ families. Designed to make every child fall in love with learning.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <Card key={feature.name} className="shadow-card transition-smooth hover:shadow-elevated hover:-translate-y-1 animate-scale-in p-2" style={{ animationDelay: `${index * 100}ms` }}>
                <CardHeader>
                  <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-lg bg-accent/10">
                    <feature.icon className="h-7 w-7 text-accent" />
                  </div>
                  <CardTitle className="text-2xl">{feature.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-lg leading-relaxed">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-secondary scroll-mt-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl mb-6">
              About AnyD
            </h2>
            <p className="text-xl text-muted-foreground">
              Where IIT Bombay research meets real-world learning — for every young innovator.
            </p>
          </div>

          {/* Story */}
          <div className="mx-auto max-w-3xl mb-16">
            <h3 className="text-2xl font-bold tracking-tight text-foreground mb-6">Our Story</h3>
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
              <p>
                AnyD was founded by IIT Bombay researchers and professors who saw a fundamental gap in how children learn science and technology. Traditional classrooms teach theory — we teach by doing. Every course we offer is rooted in real research, designed to turn curiosity into capability.
              </p>
              <p>
                Incubated at IIT Bombay's SINE, we bring world-class academic rigour to an experience that's fun, beginner-friendly, and genuinely hands-on. With all materials and mentorship included, parents can trust that their children are learning from the very best — while having the time of their lives.
              </p>
            </div>
          </div>

          {/* Values */}
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {values.map((value, index) => (
              <Card key={value.title} className="shadow-card animate-scale-in" style={{ animationDelay: `${index * 100}ms` }}>
                <CardHeader>
                  <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-accent/10">
                    <value.icon className="h-7 w-7 text-accent" />
                  </div>
                  <CardTitle className="text-2xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="py-24 bg-background scroll-mt-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl mb-6">
              Our Programs
            </h2>
            <p className="text-xl text-muted-foreground">
              Comprehensive STEM programs designed to inspire, educate, and empower students at every level.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 max-w-4xl mx-auto">
            {programs.map((program, index) => (
              <Card key={program.title} className="flex flex-col shadow-card transition-smooth hover:shadow-elevated hover:-translate-y-1 animate-scale-in overflow-hidden" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="bg-accent/10 p-6 flex items-center justify-center">
                  <div className="h-20 w-20 rounded-full bg-accent/20 flex items-center justify-center">
                    <program.icon className="h-10 w-10 text-accent" />
                  </div>
                </div>
                <CardHeader className="text-center">
                  <Badge variant="secondary" className="w-fit mx-auto mb-2">{program.level}</Badge>
                  <CardTitle className="text-2xl mb-2">{program.title}</CardTitle>
                  <CardDescription className="text-base">{program.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground mb-4">
                    <Clock className="h-4 w-4 text-accent" />
                    <span>Duration: {program.duration}</span>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-center mb-2">What you'll learn:</p>
                    <ul className="text-sm text-muted-foreground space-y-1 text-center">
                      {program.highlights.map((highlight) => (
                        <li key={highlight} className="flex items-center justify-center gap-2">
                          <Award className="h-3 w-3 text-accent" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
                <CardFooter className="pt-4">
                  <Button onClick={() => scrollToSection('contact')} className="w-full gradient-accent text-lg py-6">
                    Enroll Now
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-secondary scroll-mt-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl mb-6">
              Get in Touch
            </h2>
            <p className="text-xl text-muted-foreground">
              Have questions about our programs? We're here to help you start your STEM journey.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            {/* Contact Form */}
            <div className="animate-fade-in">
              <Card className="shadow-elevated">
                <CardHeader>
                  <CardTitle className="text-2xl">Send Us a Message</CardTitle>
                  <CardDescription>
                    Fill out the form below and we'll respond within 24 hours.
                  </CardDescription>
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
                    <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 flex-shrink-0">
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
                    <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 flex-shrink-0">
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
                    <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 flex-shrink-0">
                      <MapPin className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <div className="font-semibold mb-1">Address</div>
                      <p className="text-muted-foreground">
                        IIT Bombay Campus<br />
                        Powai, Mumbai 400076<br />
                        Maharashtra, India
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 flex-shrink-0">
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

              <Card className="shadow-card bg-card border-0">
                <CardHeader>
                  <CardTitle className="text-xl">Visit Our Campus</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Schedule a campus visit to see our facilities, meet our educators, and learn more about our programs.
                  </p>
                  <Button variant="outline" className="w-full">
                    Schedule a Visit
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="rounded-2xl overflow-hidden shadow-elevated">
            <div className="h-[500px]">
              <Map />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
