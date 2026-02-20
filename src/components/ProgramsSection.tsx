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
import BookingFormModal from '@/components/BookingFormModal';
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
import roboticsImage1 from '@/assets/robotics-design-1.jpeg';
import roboticsImage2 from '@/assets/robotics-design-2.jpeg';
import roboticsImage3 from '@/assets/robotics-design-3.jpeg';
import roboticsImage4 from '@/assets/robotics-design-4.jpeg';
import stemImage1 from '@/assets/stem-design-1.jpeg';
import stemImage2 from '@/assets/stem-design-2.jpeg';
import stemImage3 from '@/assets/stem-design-3.jpeg';
import stemImage4 from '@/assets/stem-design-4.jpeg';
import pdImage1 from '@/assets/pd-design-1.jpeg';
import pdImage2 from '@/assets/pd-design-2.jpeg';
import pdImage3 from '@/assets/pd-design-3.jpeg';
import pdImage4 from '@/assets/pd-design-4.jpeg';
import aiImage1 from '@/assets/ai-design-1.jpeg';
import aiImage2 from '@/assets/ai-design-2.jpeg';
import aiImage3 from '@/assets/ai-design-3.jpeg';
import aiImage4 from '@/assets/ai-design-4.jpeg';
import summerImage1 from '@/assets/summer-design-1.jpeg';
import summerImage2 from '@/assets/summer-design-2.jpeg';
import summerImage3 from '@/assets/summer-design-3.jpeg';
import summerImage4 from '@/assets/summer-design-4.jpeg';
import schoolImage1 from '@/assets/school-design-1.jpeg';
import schoolImage2 from '@/assets/school-design-2.jpeg';
import schoolImage3 from '@/assets/school-design-3.jpeg';
import schoolImage4 from '@/assets/school-design-4.jpeg';

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
    id: 'summer',
    title: 'Summer Program',
    description: 'Intensive hands-on STEM learning during summer break with projects, experiments, and innovation challenges.',
    icon: Beaker,
    ageDetails: {
      young: 'Fun experiments, robotics basics, and creative science projects.',
      teen: 'Advanced robotics, coding, innovation labs, and prototype building.',
    },
  },
  {
    id: 'in-school',
    title: 'In-School Program',
    description: 'Structured STEM curriculum delivered directly inside partner schools.',
    icon: GraduationCap,
    ageDetails: {
      young: 'Interactive science, circuits, creativity labs.',
      teen: 'Robotics, AI exposure, innovation thinking, and real-world problem solving.',
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
    comingSoon: true,
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
  const [bookingProgram, setBookingProgram] = useState<string | null>(null);

  return (
    <section id="programs" className="py-16 bg-background scroll-mt-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center mb-10">
          <Badge variant="secondary" className="mb-3 text-sm px-4 py-1.5">
            What Your Child Will Learn
          </Badge>
          <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl mb-3">
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
                className="group relative text-left rounded-2xl border border-accent/15 p-6 transition-all duration-300 cursor-pointer
                  bg-card shadow-card hover:shadow-elevated hover:-translate-y-1 hover:border-accent/40"
                style={{ animationDelay: `${index * 60}ms`, boxShadow: '0 4px 20px -4px hsl(2 51% 50% / 0.08)' }}
              >
                {program.comingSoon && (
                  <Badge className="absolute top-4 right-4 bg-accent text-white text-xs px-2.5 py-0.5">
                    Coming Soon
                  </Badge>
                )}

                <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-xl transition-colors duration-300 shadow-sm border border-accent/15
                  bg-white text-accent group-hover:bg-accent/10">
                  <Icon className="h-7 w-7" />
                </div>

                <h3 className="text-xl font-extrabold text-deep-wine mb-2">{program.title}</h3>

                <p className="text-sm text-deep-wine/80 leading-relaxed mb-4">
                  {program.description}
                </p>

                <div className="flex items-center gap-1.5 text-xs font-medium text-deep-wine group-hover:text-deep-wine/70 transition-colors">
                  <span>View details</span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Modal Detail Panel */}
        <Dialog open={!!selectedProgram} onOpenChange={(open) => !open && setSelectedProgram(null)}>
          <DialogContent className={`${selectedProgram?.id === 'stem' || selectedProgram?.id === 'robotics' || selectedProgram?.id === 'product-design' || selectedProgram?.id === 'ai' || selectedProgram?.id === 'summer' || selectedProgram?.id === 'in-school' ? 'max-w-5xl' : 'max-w-2xl'} max-h-[85vh] overflow-y-auto rounded-2xl border-accent/20 backdrop-blur-sm p-0`}>
            {selectedProgram && (() => {
              const Icon = selectedProgram.icon;
              const hasImages = selectedProgram.id === 'stem' || selectedProgram.id === 'robotics' || selectedProgram.id === 'product-design' || selectedProgram.id === 'ai' || selectedProgram.id === 'summer' || selectedProgram.id === 'in-school';
              const imageMap: Record<string, { src: string; alt: string }[]> = {
                'stem': [
                  { src: stemImage1, alt: 'Students working on electronics' },
                  { src: stemImage2, alt: 'STEM classroom session' },
                  { src: stemImage3, alt: 'Hands-on learning activity' },
                  { src: stemImage4, alt: 'Kids doing science experiments' },
                ],
                'robotics': [
                  { src: roboticsImage1, alt: 'Robotics club classroom' },
                  { src: roboticsImage2, alt: 'Kids building circuits' },
                  { src: roboticsImage3, alt: 'Students programming robots' },
                  { src: roboticsImage4, alt: 'Robotics team activity' },
                ],
                'product-design': [
                  { src: pdImage1, alt: '3D modeling on laptop' },
                  { src: pdImage2, alt: 'Student-made prototype' },
                  { src: pdImage3, alt: '3D printing process' },
                  { src: pdImage4, alt: 'Kids sketching product ideas' },
                ],
                'ai': [
                  { src: aiImage1, alt: 'Kids coding with AI tools' },
                  { src: aiImage2, alt: 'AI classroom with data screens' },
                  { src: aiImage3, alt: 'Students learning AI concepts' },
                  { src: aiImage4, alt: 'Pattern recognition activity' },
                ],
                'summer': [
                  { src: summerImage1, alt: 'Summer STEM experiments' },
                  { src: summerImage2, alt: 'Kids building robots in summer camp' },
                  { src: summerImage3, alt: 'Innovation challenge activity' },
                  { src: summerImage4, alt: 'Students presenting projects' },
                ],
                'in-school': [
                  { src: schoolImage1, alt: 'In-school STEM session' },
                  { src: schoolImage2, alt: 'Students doing robotics in school' },
                  { src: schoolImage3, alt: 'Creative STEM lab activity' },
                  { src: schoolImage4, alt: 'Collaborative school project' },
                ],
              };
              const sideImages = imageMap[selectedProgram.id] || [];
              return (
                <div className={`${hasImages ? 'flex flex-col md:flex-row' : ''}`}>
                  {hasImages && (
                    <div className="md:w-[45%] flex-shrink-0 p-4 md:p-6 flex items-center">
                      <div className="w-full grid grid-cols-2 gap-3">
                        {sideImages.map((img, i) => (
                          <div
                            key={i}
                            className="rounded-xl overflow-hidden shadow-elevated bg-foreground/5 animate-fade-in"
                            style={{ animationDelay: `${i * 100}ms` }}
                          >
                            <img
                              src={img.src}
                              alt={img.alt}
                              className="w-full h-full object-cover aspect-square"
                              loading="lazy"
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Content column */}
                  <div className={`p-6 md:p-8 ${hasImages ? 'md:w-[55%]' : ''}`}>
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
                    <div className={`grid grid-cols-1 ${hasImages ? '' : 'md:grid-cols-2'} gap-4 mb-8`}>
                      {/* Age 6-8 */}
                      <div className="rounded-xl bg-secondary p-5 border border-border">
                        <h4 className="text-lg font-semibold text-foreground mb-3">Age 6–8</h4>
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
                        <h4 className="text-lg font-semibold text-foreground mb-3">Age 9–14</h4>
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

                    {/* CTA */}
                    <div className="flex justify-center pt-2">
                      <Button
                        className="w-full bg-deep-wine hover:bg-deep-wine/85 text-white text-lg font-bold px-10 py-4 rounded-xl shadow-lg hover:-translate-y-0.5 hover:shadow-[0_8px_24px_-4px_hsl(348_70%_24%/0.35)] transition-all duration-200"
                        onClick={() => { setSelectedProgram(null); setBookingProgram(selectedProgram.title); }}
                      >
                        Book a Seat
                      </Button>
                    </div>
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
                  <div className="h-8 w-8 rounded-lg bg-white flex items-center justify-center flex-shrink-0 shadow-sm border border-accent/15">
                    <ProofIcon className="h-4 w-4 text-accent" />
                  </div>
                  <span className="text-sm font-medium text-foreground whitespace-nowrap">{item.text}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Booking Form Modal */}
        <BookingFormModal
          open={!!bookingProgram}
          onOpenChange={(open) => !open && setBookingProgram(null)}
          programName={bookingProgram || ''}
        />
      </div>
    </section>
  );
}
