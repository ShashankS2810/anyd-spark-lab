import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Trophy, Star, Lightbulb, Zap } from 'lucide-react';

const projects = [
  {
    title: 'Solar-Powered Water Purification System',
    student: 'Priya Sharma, Grade 11',
    description: 'Developed an innovative solar-powered water purification device that uses UV radiation and solar heat to make contaminated water safe for drinking. Won first place at National Science Fair.',
    achievement: 'National Science Fair Winner',
    category: 'Environmental Science',
    icon: Trophy,
  },
  {
    title: 'AI-Based Plant Disease Detection',
    student: 'Rahul Kumar, Grade 12',
    description: 'Created a machine learning model that identifies plant diseases from leaf images with 94% accuracy, helping farmers detect crop problems early and reduce pesticide use.',
    achievement: 'State Innovation Award',
    category: 'Artificial Intelligence',
    icon: Star,
  },
  {
    title: 'Smart Traffic Management System',
    student: 'Ananya Patel, Grade 10',
    description: 'Designed an IoT-based traffic signal system that adjusts timing based on real-time traffic density, reducing congestion by 30% in simulation tests.',
    achievement: 'Regional Science Exhibition Gold',
    category: 'IoT & Robotics',
    icon: Lightbulb,
  },
  {
    title: 'Biodegradable Plastic Alternative',
    student: 'Arjun Reddy, Grade 11',
    description: 'Developed a completely biodegradable plastic alternative using agricultural waste and natural polymers. Material decomposes in 45 days under composting conditions.',
    achievement: 'Environmental Innovation Prize',
    category: 'Materials Science',
    icon: Zap,
  },
  {
    title: 'Earthquake Early Warning Device',
    student: 'Meera Iyer, Grade 12',
    description: 'Built a low-cost seismic sensor network that can detect P-waves and provide 10-15 seconds of warning before major earthquakes, potentially saving lives.',
    achievement: 'National Young Scientist Award',
    category: 'Geophysics',
    icon: Trophy,
  },
  {
    title: 'Voice-Controlled Wheelchair',
    student: 'Karan Singh, Grade 10',
    description: 'Engineered a voice-controlled wheelchair system for people with limited mobility, using speech recognition and obstacle detection for safe navigation.',
    achievement: 'Innovation for Inclusion Award',
    category: 'Assistive Technology',
    icon: Star,
  },
];

const categories = [
  'All Projects',
  'Environmental Science',
  'Artificial Intelligence',
  'IoT & Robotics',
  'Materials Science',
  'Geophysics',
  'Assistive Technology',
];

export default function Projects() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="gradient-hero py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center animate-fade-in">
            <h1 className="text-4xl font-bold tracking-tight text-primary-foreground sm:text-5xl mb-6">
              Student Projects
            </h1>
            <p className="text-xl text-primary-foreground/90">
              Showcasing the innovative work and achievements of our talented students who are making a real difference.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-secondary">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4 text-center">
            <div className="animate-fade-in">
              <div className="text-4xl font-bold text-primary mb-2">150+</div>
              <div className="text-sm text-muted-foreground">Projects Completed</div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '100ms' }}>
              <div className="text-4xl font-bold text-primary mb-2">45</div>
              <div className="text-sm text-muted-foreground">National Awards</div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '200ms' }}>
              <div className="text-4xl font-bold text-primary mb-2">28</div>
              <div className="text-sm text-muted-foreground">Patents Filed</div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '300ms' }}>
              <div className="text-4xl font-bold text-primary mb-2">12</div>
              <div className="text-sm text-muted-foreground">International Recognition</div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-24 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-4">
              Featured Projects
            </h2>
            <p className="text-lg text-muted-foreground">
              Discover the groundbreaking work of our students across various STEM disciplines.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {projects.map((project, index) => (
              <Card key={project.title} className="shadow-card transition-smooth hover:shadow-elevated hover:-translate-y-1 animate-scale-in" style={{ animationDelay: `${index * 100}ms` }}>
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10">
                      <project.icon className="h-6 w-6 text-accent" />
                    </div>
                    <Badge variant="secondary">{project.category}</Badge>
                  </div>
                  <CardTitle className="text-2xl mb-2">{project.title}</CardTitle>
                  <div className="text-sm font-medium text-accent mb-3">{project.student}</div>
                  <CardDescription className="text-base">{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2 p-3 rounded-lg bg-secondary">
                    <Trophy className="h-5 w-5 text-accent flex-shrink-0" />
                    <span className="text-sm font-semibold text-foreground">{project.achievement}</span>
                  </div>
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
            Ready to Start Your Own Project?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Our programs provide the guidance, resources, and mentorship you need to turn your innovative ideas into award-winning projects.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Badge className="gradient-accent border-0 text-base py-2 px-6">
              Project Mentorship Available
            </Badge>
            <Badge variant="outline" className="text-base py-2 px-6">
              Competition Preparation Support
            </Badge>
          </div>
        </div>
      </section>
    </div>
  );
}
