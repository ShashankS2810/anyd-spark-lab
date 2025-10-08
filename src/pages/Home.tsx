import { Hero } from '@/components/Hero';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { BookOpen, Rocket, Users, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

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

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />

      {/* Stats Section */}
      <section className="py-16 bg-secondary">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <div key={stat.label} className="text-center animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-4">
              Why Choose AnyD Materials?
            </h2>
            <p className="text-lg text-muted-foreground">
              We combine academic excellence with practical learning to create transformative educational experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <Card key={feature.name} className="shadow-card transition-smooth hover:shadow-elevated hover:-translate-y-1 animate-scale-in" style={{ animationDelay: `${index * 100}ms` }}>
                <CardHeader>
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                    <feature.icon className="h-6 w-6 text-accent" />
                  </div>
                  <CardTitle className="text-xl">{feature.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-card border-y">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-6">
            Ready to Start Your STEM Journey?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join our community of learners and discover the exciting world of science, technology, engineering, and mathematics.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="gradient-accent shadow-elevated">
              <Link to="/programs">View Programs</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/contact">Schedule a Demo</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
