import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { Clock, Users, Award } from 'lucide-react';

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

export default function Programs() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="gradient-hero py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center animate-fade-in">
            <h1 className="text-4xl font-bold tracking-tight text-primary-foreground sm:text-5xl mb-6">
              Our Programs
            </h1>
            <p className="text-xl text-primary-foreground/90">
              Comprehensive STEM programs designed to inspire, educate, and empower students at every level.
            </p>
          </div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-24 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
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
                  <Button asChild className="w-full gradient-accent">
                    <Link to="/contact">Enroll Now</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-secondary">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold tracking-tight text-foreground mb-4">
            Not Sure Which Program is Right for You?
          </h2>
          <p className="text-lg text-muted-foreground mb-6">
            Our team can help you choose the perfect program based on your child's age, interests, and goals.
          </p>
          <Button asChild size="lg" className="gradient-accent shadow-elevated">
            <Link to="/contact">Schedule a Consultation</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
