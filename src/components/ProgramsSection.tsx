import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import {
  Beaker,
  Bot,
  Lightbulb,
  BrainCircuit,
  Code2,
  Plane,
  Users,
  GraduationCap,
  HandMetal,
  Home,
  Award,
} from 'lucide-react';

const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

interface AgeGroup {
  young: string;
  teen: string;
}

interface Program {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
  comingSoon?: boolean;
  ageDetails: AgeGroup;
}

const programs: Program[] = [
  {
    id: 'stem',
    title: 'STEM',
    description: 'Spark curiosity with real science you can see, touch, and test.',
    icon: Beaker,
    ageDetails: {
      young: 'Make-and-learn science: circuits on paper, light projects, simple sensors.',
      teen: 'Apply physics and chemistry to build advanced, testable prototypes.',
    },
  },
  {
    id: 'robotics',
    title: 'Robotics',
    description: 'Build, wire, and debug simple bots that move on command.',
    icon: Bot,
    ageDetails: {
      young: 'Snap-fit bots, line followers with guidance, basics of sensors and motion.',
      teen: 'Program behaviors, integrate sensors, build task-based autonomous bots.',
    },
  },
  {
    id: 'product-design',
    title: 'Product Design',
    description: 'Ideate, 3D model, print, brand, and pitch like young creators.',
    icon: Lightbulb,
    ageDetails: {
      young: 'Sketch ideas, model simple shapes, 3D print, add brand stickers, show-and-tell.',
      teen: 'Full product sprint: problem → 3D CAD → print → test → iterate → mini pitch.',
    },
  },
  {
    id: 'ai',
    title: 'AI',
    description: 'Learn how machines "see" patterns and make smart guesses.',
    icon: BrainCircuit,
    ageDetails: {
      young: 'Pattern games, image vs sound sorting, "teaching" a model through play.',
      teen: 'Intro to datasets, bias, and simple no-code AI demos for real use-cases.',
    },
  },
  {
    id: 'coding',
    title: 'Coding',
    description: 'Create games and logic stories using child-friendly code blocks.',
    icon: Code2,
    comingSoon: true,
    ageDetails: {
      young: 'Block-based games, loops, and events through story-driven challenges.',
      teen: 'Build simple apps and logic flows; think like a programmer.',
    },
  },
  {
    id: 'drone',
    title: 'Drone',
    description: 'Explore flight basics, safety, and assembly with trainer kits.',
    icon: Plane,
    comingSoon: true,
    ageDetails: {
      young: 'Safe flight basics, simulator play, parts exploration, team missions.',
      teen: 'Assembly, safety, simulator to controlled flights, intro to aero principles.',
    },
  },
  {
    id: 'general-skills',
    title: 'General Skills',
    description: 'Present, collaborate, think critically, and solve real problems.',
    icon: Users,
    ageDetails: {
      young: 'Learn to present, share wins, collaborate, and ask better questions.',
      teen: 'Pitching, teamwork sprints, documentation, and design critique.',
    },
  },
];

const proofItems = [
  { icon: GraduationCap, text: 'IIT Bombay SINE incubated' },
  { icon: Users, text: '1500+ parent community' },
  { icon: HandMetal, text: '100% hands-on' },
  { icon: Home, text: 'Take-home projects' },
  { icon: Award, text: 'Certificate included' },
];

export default function ProgramsSection() {
  const [selectedProgram, setSelectedProgram] = useState<Program | null>(null);

  return (
    <section id="programs" className="py-28 bg-background scroll-mt-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center mb-16">
          <Badge variant="secondary" className="mb-4 text-sm px-4 py-1.5">
            What We Teach
          </Badge>
          <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl mb-5">
            Our Programs
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Comprehensive STEM programs designed to inspire, educate, and empower students at every level.
          </p>
        </div>

        {/* Program Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-6">
          {programs.map((program, index) => {
            const Icon = program.icon;

            return (
              <button
                key={program.id}
                onClick={() => setSelectedProgram(program)}
                className="group relative text-left rounded-2xl border p-6 transition-all duration-300 cursor-pointer
                  bg-card border-border shadow-card hover:shadow-elevated hover:-translate-y-1"
                style={{ animationDelay: `${index * 60}ms` }}
              >
                {program.comingSoon && (
                  <Badge className="absolute top-4 right-4 bg-accent text-white text-xs px-2.5 py-0.5">
                    Coming Soon
                  </Badge>
                )}

                <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-xl transition-colors duration-300
                  bg-accent/10 text-accent group-hover:bg-accent/20">
                  <Icon className="h-7 w-7" />
                </div>

                <h3 className="text-xl font-bold text-foreground mb-2">{program.title}</h3>

                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {program.description}
                </p>

                <div className="flex items-center gap-1.5 text-xs font-medium text-accent">
                  <span>View details</span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Modal Detail Panel */}
        <Dialog open={!!selectedProgram} onOpenChange={(open) => !open && setSelectedProgram(null)}>
          <DialogContent className="max-w-2xl max-h-[85vh] overflow-y-auto rounded-2xl border-accent/20 backdrop-blur-sm p-0">
            {selectedProgram && (() => {
              const Icon = selectedProgram.icon;
              return (
                <div className="p-6 md:p-8">
                  {/* Header */}
                  <DialogHeader className="mb-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent text-white">
                        <Icon className="h-6 w-6" />
                      </div>
                      <div>
                        <DialogTitle className="text-2xl font-bold text-foreground flex items-center gap-2">
                          {selectedProgram.title}
                          {selectedProgram.comingSoon && (
                            <Badge className="bg-accent/15 text-accent text-xs">Coming Soon</Badge>
                          )}
                        </DialogTitle>
                      </div>
                    </div>
                    <DialogDescription className="text-base text-muted-foreground">
                      {selectedProgram.description}
                    </DialogDescription>
                  </DialogHeader>

                  {/* Two-column age groups */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                    {/* Age 6-8 */}
                    <div className="rounded-xl bg-secondary p-5 border border-border">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="h-8 w-8 rounded-full bg-accent/15 flex items-center justify-center">
                          <span className="text-xs font-bold text-accent">6–8</span>
                        </div>
                        <h4 className="text-lg font-semibold text-foreground">Age 6–8</h4>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {selectedProgram.comingSoon && (
                          <Badge variant="outline" className="mr-2 text-xs border-accent/30 text-accent mb-1">
                            Coming Soon
                          </Badge>
                        )}
                        {selectedProgram.ageDetails.young}
                      </p>
                    </div>

                    {/* Age 9-14 */}
                    <div className="rounded-xl bg-secondary p-5 border border-border">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="h-8 w-8 rounded-full bg-accent/15 flex items-center justify-center">
                          <span className="text-xs font-bold text-accent">9–14</span>
                        </div>
                        <h4 className="text-lg font-semibold text-foreground">Age 9–14</h4>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {selectedProgram.comingSoon && (
                          <Badge variant="outline" className="mr-2 text-xs border-accent/30 text-accent mb-1">
                            Coming Soon
                          </Badge>
                        )}
                        {selectedProgram.ageDetails.teen}
                      </p>
                    </div>
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3 items-center">
                    <Button
                      variant="outline"
                      className="w-full sm:w-auto border-accent/30 text-accent hover:bg-accent/10 px-6"
                      onClick={() => { setSelectedProgram(null); scrollToSection('contact'); }}
                    >
                      View Projects for 6–8
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full sm:w-auto border-accent/30 text-accent hover:bg-accent/10 px-6"
                      onClick={() => { setSelectedProgram(null); scrollToSection('contact'); }}
                    >
                      View Projects for 9–14
                    </Button>
                    <Button
                      className="w-full sm:w-auto gradient-accent shadow-elevated text-lg px-8 py-5"
                      onClick={() => { setSelectedProgram(null); scrollToSection('contact'); }}
                    >
                      Book a Seat
                    </Button>
                  </div>
                </div>
              );
            })()}
          </DialogContent>
        </Dialog>

        {/* Micro-Proof Strip */}
        <div className="mt-12 rounded-2xl border border-border bg-card shadow-card py-6 px-6 md:px-10">
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
            {proofItems.map((item, index) => {
              const ProofIcon = item.icon;
              return (
                <div key={item.text} className="flex items-center gap-2.5">
                  {index > 0 && (
                    <div className="hidden md:block h-5 w-px bg-border -ml-4 mr-1.5" />
                  )}
                  <div className="h-8 w-8 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <ProofIcon className="h-4 w-4 text-accent" />
                  </div>
                  <span className="text-sm font-medium text-foreground whitespace-nowrap">{item.text}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
