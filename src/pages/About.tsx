import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Target, Eye, Heart } from 'lucide-react';

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

export default function About() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="gradient-hero py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center animate-fade-in">
            <h1 className="text-4xl font-bold tracking-tight text-primary-foreground sm:text-5xl mb-6">
              About AnyD Materials
            </h1>
            <p className="text-xl text-primary-foreground/90">
              Pioneering STEM education with the backing of IIT Bombay's academic excellence and research expertise.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight text-foreground mb-8">Our Story</h2>
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
              <p>
                AnyD Materials was founded with a simple yet powerful vision: to bridge the gap between traditional education and the practical skills needed in today's technology-driven world. Associated with IIT Bombay, one of India's premier engineering institutions, we bring world-class expertise to STEM education.
              </p>
              <p>
                Our team comprises experienced educators, researchers, and industry professionals who are passionate about nurturing young minds. We've developed comprehensive programs that make complex scientific concepts accessible and engaging for students from elementary school through college.
              </p>
              <p>
                Over the years, we've helped thousands of students discover their passion for science and technology. Our hands-on approach, combined with rigorous academic standards, has produced remarkable results - from science fair champions to students pursuing successful careers in STEM fields.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-secondary">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-4">
              What Drives Us
            </h2>
            <p className="text-lg text-muted-foreground">
              Our core values shape everything we do and guide our commitment to excellence in STEM education.
            </p>
          </div>

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

      {/* Team Section */}
      <section className="py-24 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-4">
              The Team Behind AnyD Materials
            </h2>
            <p className="text-lg text-muted-foreground mb-12">
              Our team brings together diverse expertise from IIT Bombay's world-renowned faculty, experienced educators, and industry professionals passionate about transforming STEM education.
            </p>
            <p className="text-base text-muted-foreground">
              With decades of combined experience in education, research, and curriculum development, we're committed to providing students with the best possible learning experience. Our educators don't just teach - they inspire, mentor, and guide students on their journey to discovering the wonders of science and technology.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
