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
    name: 'Quality Programs',
    description: 'Comprehensive STEM programs designed by experts from IIT Bombay, tailored for different age groups and skill levels.',
    icon: BookOpen,
  },
  {
    name: 'Innovative Materials',
    description: 'Cutting-edge educational materials and kits that make complex concepts easy to understand and fun to explore.',
    icon: Rocket,
  },
  {
    name: 'Expert Guidance',
    description: 'Learn from experienced educators and researchers who are passionate about nurturing young talent in STEM fields.',
    icon: Users,
  },
  {
    name: 'Proven Results',
    description: 'Join thousands of students who have excelled in science competitions and pursued successful STEM careers.',
    icon: Award,
  },
];

const stats = [
  { label: 'Students Taught', value: '10,000+' },
  { label: 'Programs Offered', value: '25+' },
  { label: 'Expert Educators', value: '50+' },
  { label: 'Success Rate', value: '95%' },
];

const values = [
  {
    icon: Target,
    title: 'Our Mission',
    description: 'To make quality STEM education accessible to all students, fostering innovation, critical thinking, and problem-solving skills that prepare them for the challenges of tomorrow.',
  },
  {
    icon: Eye,
    title: 'Our Vision',
    description: 'To be the leading provider of innovative STEM education in India, creating a generation of scientifically literate citizens and future innovators.',
  },
  {
    icon: Heart,
    title: 'Our Values',
    description: 'Excellence in education, innovation in teaching methods, inclusivity in access, and integrity in all our endeavors. We believe every child deserves the opportunity to explore and excel.',
  },
];

const programs = [
  {
    title: 'Junior Scientists Program',
    description: 'An introductory program for elementary students (Grades 1-5) designed to spark curiosity about the natural world through fun experiments and activities.',
    duration: '8 weeks',
    level: 'Beginner',
    students: '15-20',
    highlights: ['Hands-on experiments', 'Interactive learning', 'Science fair preparation'],
  },
  {
    title: 'Young Engineers Club',
    description: 'Middle school program (Grades 6-8) focusing on engineering principles, robotics, and design thinking to build problem-solving skills.',
    duration: '12 weeks',
    level: 'Intermediate',
    students: '12-15',
    highlights: ['Robotics basics', 'Design projects', 'Team collaboration'],
  },
  {
    title: 'Advanced STEM Academy',
    description: 'Rigorous program for high school students (Grades 9-12) covering advanced topics in physics, chemistry, mathematics, and computer science.',
    duration: '16 weeks',
    level: 'Advanced',
    students: '10-12',
    highlights: ['College-level content', 'Research projects', 'Olympiad preparation'],
  },
  {
    title: 'Coding & AI Bootcamp',
    description: 'Intensive program teaching programming fundamentals, artificial intelligence, and machine learning concepts for students aged 12+.',
    duration: '10 weeks',
    level: 'Intermediate',
    students: '15-18',
    highlights: ['Python programming', 'AI basics', 'Real-world projects'],
  },
  {
    title: 'Science Competition Prep',
    description: 'Specialized coaching for students preparing for national and international science competitions and olympiads.',
    duration: '6 months',
    level: 'Advanced',
    students: '8-10',
    highlights: ['Olympiad training', 'Mock competitions', 'Expert mentoring'],
  },
  {
    title: 'Summer STEM Camp',
    description: 'Intensive summer program offering a mix of science experiments, technology projects, and field trips for students of all ages.',
    duration: '4 weeks',
    level: 'All Levels',
    students: '25-30',
    highlights: ['Outdoor activities', 'Lab visits', 'Guest lectures'],
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
              Why Choose AnyD Materials?
            </h2>
            <p className="text-xl text-muted-foreground">
              We combine academic excellence with practical learning to create transformative educational experiences.
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
              About AnyD Materials
            </h2>
            <p className="text-xl text-muted-foreground">
              Pioneering STEM education with the backing of IIT Bombay's academic excellence and research expertise.
            </p>
          </div>

          {/* Story */}
          <div className="mx-auto max-w-3xl mb-16">
            <h3 className="text-2xl font-bold tracking-tight text-foreground mb-6">Our Story</h3>
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
              <p>
                AnyD Materials was founded with a simple yet powerful vision: to bridge the gap between traditional education and the practical skills needed in today's technology-driven world. Associated with IIT Bombay, one of India's premier engineering institutions, we bring world-class expertise to STEM education.
              </p>
              <p>
                Our team comprises experienced educators, researchers, and industry professionals who are passionate about nurturing young minds. We've developed comprehensive programs that make complex scientific concepts accessible and engaging for students from elementary school through college.
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

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {programs.map((program, index) => (
              <Card key={program.title} className="flex flex-col shadow-card transition-smooth hover:shadow-elevated hover:-translate-y-1 animate-scale-in" style={{ animationDelay: `${index * 100}ms` }}>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary">{program.level}</Badge>
                  </div>
                  <CardTitle className="text-2xl mb-2">{program.title}</CardTitle>
                  <CardDescription className="text-base">{program.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="h-4 w-4 text-accent" />
                      <span>Duration: {program.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Users className="h-4 w-4 text-accent" />
                      <span>Class Size: {program.students} students</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-start gap-2">
                      <Award className="h-4 w-4 text-accent mt-1" />
                      <div>
                        <p className="text-sm font-medium mb-1">Program Highlights:</p>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          {program.highlights.map((highlight) => (
                            <li key={highlight}>• {highlight}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button onClick={() => scrollToSection('contact')} className="w-full gradient-accent">
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
