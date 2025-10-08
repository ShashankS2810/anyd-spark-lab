import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { FlaskConical, Cpu, Rocket, Microscope, CircuitBoard, Atom } from 'lucide-react';

const materials = [
  {
    title: 'Chemistry Lab Kit',
    description: 'Complete chemistry set with 50+ experiments covering acids, bases, reactions, and chemical analysis. Includes safety equipment and detailed instruction manual.',
    icon: FlaskConical,
    category: 'Chemistry',
    ageRange: '12+ years',
    price: '₹4,999',
  },
  {
    title: 'Robotics Starter Pack',
    description: 'Build and program your own robots with this comprehensive kit featuring motors, sensors, microcontrollers, and easy-to-follow projects.',
    icon: Cpu,
    category: 'Robotics',
    ageRange: '10+ years',
    price: '₹7,499',
  },
  {
    title: 'Physics Mechanics Set',
    description: 'Explore fundamental physics concepts including motion, forces, energy, and momentum through hands-on experiments and demonstrations.',
    icon: Rocket,
    category: 'Physics',
    ageRange: '13+ years',
    price: '₹3,999',
  },
  {
    title: 'Biology Microscope Kit',
    description: 'Professional-grade microscope with prepared slides, specimen collection tools, and comprehensive guide to cellular biology and microbiology.',
    icon: Microscope,
    category: 'Biology',
    ageRange: '11+ years',
    price: '₹5,999',
  },
  {
    title: 'Electronics & Circuits',
    description: 'Learn electronics fundamentals with breadboards, components, and 30+ circuit projects from basic LED circuits to advanced digital logic.',
    icon: CircuitBoard,
    category: 'Electronics',
    ageRange: '12+ years',
    price: '₹4,499',
  },
  {
    title: 'Quantum Science Kit',
    description: 'Advanced kit exploring quantum mechanics, atomic structure, and modern physics through innovative experiments and simulations.',
    icon: Atom,
    category: 'Advanced Physics',
    ageRange: '15+ years',
    price: '₹8,999',
  },
];

export default function Materials() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="gradient-hero py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center animate-fade-in">
            <h1 className="text-4xl font-bold tracking-tight text-primary-foreground sm:text-5xl mb-6">
              Educational Materials
            </h1>
            <p className="text-xl text-primary-foreground/90">
              High-quality STEM kits and materials designed to make learning hands-on, engaging, and effective.
            </p>
          </div>
        </div>
      </section>

      {/* Materials Grid */}
      <section className="py-24 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {materials.map((material, index) => (
              <Card key={material.title} className="flex flex-col shadow-card transition-smooth hover:shadow-elevated hover:-translate-y-1 animate-scale-in" style={{ animationDelay: `${index * 100}ms` }}>
                <CardHeader>
                  <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-accent/10">
                    <material.icon className="h-7 w-7 text-accent" />
                  </div>
                  <div className="flex items-center gap-2 mb-3">
                    <Badge variant="secondary">{material.category}</Badge>
                    <Badge variant="outline">{material.ageRange}</Badge>
                  </div>
                  <CardTitle className="text-2xl mb-2">{material.title}</CardTitle>
                  <CardDescription className="text-base">{material.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="text-3xl font-bold text-primary mb-2">{material.price}</div>
                  <p className="text-sm text-muted-foreground">All materials include comprehensive guides and safety instructions</p>
                </CardContent>
                <CardFooter className="flex gap-2">
                  <Button asChild className="flex-1 gradient-accent">
                    <Link to="/contact">Order Now</Link>
                  </Button>
                  <Button asChild variant="outline" className="flex-1">
                    <Link to="/contact">Learn More</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-secondary">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-4">
              Why Choose Our Materials?
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="text-center">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                <Badge className="gradient-accent border-0 text-lg">✓</Badge>
              </div>
              <h3 className="text-lg font-semibold mb-2">Quality Assured</h3>
              <p className="text-sm text-muted-foreground">All materials tested and approved by IIT Bombay experts</p>
            </div>

            <div className="text-center">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                <Badge className="gradient-accent border-0 text-lg">✓</Badge>
              </div>
              <h3 className="text-lg font-semibold mb-2">Safety First</h3>
              <p className="text-sm text-muted-foreground">Child-safe materials with comprehensive safety guidelines</p>
            </div>

            <div className="text-center">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                <Badge className="gradient-accent border-0 text-lg">✓</Badge>
              </div>
              <h3 className="text-lg font-semibold mb-2">Curriculum Aligned</h3>
              <p className="text-sm text-muted-foreground">Designed to complement school curricula and standards</p>
            </div>

            <div className="text-center">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                <Badge className="gradient-accent border-0 text-lg">✓</Badge>
              </div>
              <h3 className="text-lg font-semibold mb-2">Support Included</h3>
              <p className="text-sm text-muted-foreground">Access to online resources and expert guidance</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold tracking-tight text-foreground mb-4">
            Need Help Choosing the Right Kit?
          </h2>
          <p className="text-lg text-muted-foreground mb-6">
            Our education consultants can recommend the perfect materials based on age, interests, and learning goals.
          </p>
          <Button asChild size="lg" className="gradient-accent shadow-elevated">
            <Link to="/contact">Get Recommendations</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
