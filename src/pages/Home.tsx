import { Hero } from '@/components/Hero';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { BookOpen, Rocket, Users, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import PromoPopup from '@/components/PromoPopup';

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

      {/* CTA Section */}
      <section className="py-32 bg-card border-y">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl mb-8">
            Ready to Start Your STEM Journey?
          </h2>
          <p className="text-xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed">
            Join our community of learners and discover the exciting world of science, technology, engineering, and mathematics.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <Button asChild size="lg" className="gradient-accent shadow-elevated text-lg px-8 py-6">
              <Link to="/programs">View Programs</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-lg px-8 py-6">
              <Link to="/contact">Schedule a Demo</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
