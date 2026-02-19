import { TrendingUp, Brain, Sparkles } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const cards = [
  {
    icon: TrendingUp,
    content: (
      <p className="text-muted-foreground leading-relaxed">
        <span className="font-bold text-accent">85 million</span> jobs displaced by 2030 — World Economic Forum.{' '}
        <span className="font-bold text-accent">STEM skills</span> are non-negotiable.
      </p>
    ),
  },
  {
    icon: Brain,
    content: (
      <p className="text-muted-foreground leading-relaxed">
        <span className="font-bold text-accent">NEP 2020</span> demands{' '}
        <span className="font-bold text-accent">experiential learning</span>. AnyD's curriculum is fully aligned.
      </p>
    ),
  },
  {
    icon: Sparkles,
    content: (
      <p className="text-muted-foreground leading-relaxed">
        Keep kids <span className="font-bold text-accent">curious</span>,{' '}
        <span className="font-bold text-accent">confident</span>, and{' '}
        <span className="font-bold text-accent">creative</span> — not just test-takers.
      </p>
    ),
  },
];

const WhyNowSection = () => {
  return (
    <section className="py-16 bg-secondary scroll-mt-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center mb-12">
          <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-3">
            WHY NOW
          </p>
          <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Why Early STEM Exposure <span className="text-accent">Wins</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {cards.map((card, index) => (
            <Card
              key={index}
              className="bg-white shadow-sm border border-border/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-md animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6 flex items-start gap-4">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-accent/10 flex-shrink-0">
                  <card.icon className="h-5 w-5 text-accent" />
                </div>
                <div className="pt-0.5">{card.content}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyNowSection;
