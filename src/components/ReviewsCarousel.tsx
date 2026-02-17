import { Card, CardContent } from '@/components/ui/card';
import { Star, Users, Trophy, Quote, TrendingUp, BookOpen, Lightbulb, Wrench } from 'lucide-react';

const reviews = [
  {
    name: 'Priya Sharma',
    childAge: '8-year-old',
    rating: 5,
    text: 'My daughter absolutely loves the hands-on sessions. She went from being shy about science to building her own circuits. The IIT Bombay mentors are incredibly patient and inspiring.',
  },
  {
    name: 'Rahul Mehta',
    childAge: '10-year-old',
    rating: 5,
    text: 'The quality of teaching is unmatched. You can clearly see the research-backed approach in every session. My son looks forward to every class and talks about it all week.',
  },
  {
    name: 'Anita Desai',
    childAge: '7-year-old',
    rating: 5,
    text: 'What sets AnyD apart is that they provide all the materials. No last-minute shopping for supplies — just drop your child and watch them create amazing things.',
  },
  {
    name: 'Vikram Patel',
    childAge: '12-year-old',
    rating: 5,
    text: 'The Advanced Level sessions are truly impressive. My son built a working project that he proudly showed off at his school science fair. Worth every minute.',
  },
  {
    name: 'Sneha Kulkarni',
    childAge: '9-year-old',
    rating: 5,
    text: 'I was looking for something beyond regular tuitions, and AnyD delivered. The curiosity-led approach has made my daughter more confident and creative.',
  },
  {
    name: 'Amit Joshi',
    childAge: '11-year-old',
    rating: 5,
    text: 'Being incubated at IIT Bombay SINE gives me immense confidence in AnyD. The founders genuinely care about every child\'s learning journey.',
  },
];

const stats = [
  { icon: Users, value: '1500+', label: 'Happy Families' },
  { icon: Star, value: '5.0', label: 'Star Rating' },
  { icon: Trophy, value: '100%', label: 'Hands-on Success' },
];

const whyNowCards = [
  {
    icon: TrendingUp,
    text: (
      <>
        <span className="font-bold text-neon-blue">85 million jobs</span> may change or disappear by 2030 (World Economic Forum). Children who build problem-solving and STEM skills early adapt faster.
      </>
    ),
  },
  {
    icon: BookOpen,
    text: (
      <>
        <span className="font-bold text-neon-purple">NEP 2020</span> emphasizes experiential and hands-on learning. AnyD follows this approach so children learn by doing, not memorizing.
      </>
    ),
  },
  {
    icon: Lightbulb,
    text: 'Hands-on STEM builds curiosity, confidence, and real-world thinking — skills exams alone cannot develop.',
  },
  {
    icon: Wrench,
    text: 'When children build, test, and experiment themselves, learning becomes fun, memorable, and meaningful.',
  },
];

const ReviewsCarousel = () => {
  return (
    <section id="reviews" className="py-16 bg-card scroll-mt-20 relative overflow-hidden">
      <div className="absolute inset-0 animated-grid opacity-20" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

        {/* Testimonials Header */}
        <div className="mx-auto max-w-3xl text-center mb-8">
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">
            <span className="bg-gradient-to-r from-neon-pink to-neon-purple bg-clip-text text-transparent">What Parents Say</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Trusted by families across India. Here's why they love AnyD.
          </p>
        </div>

        {/* Stats Strip */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mb-10">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className="flex items-center gap-3 rounded-2xl glass px-5 py-3"
              >
                <div className="h-10 w-10 rounded-xl bg-neon-blue/10 flex items-center justify-center flex-shrink-0">
                  <Icon className="h-5 w-5 text-neon-blue" />
                </div>
                <div>
                  <div className="text-xl font-bold text-foreground leading-tight">{stat.value}</div>
                  <div className="text-xs text-muted-foreground">{stat.label}</div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
          {reviews.map((review, index) => (
            <Card
              key={review.name}
              className="glass border-border/50 hover:shadow-glow-purple hover:-translate-y-1 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <CardContent className="p-6">
                <Quote className="h-6 w-6 text-neon-purple/30 mb-3" />
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-neon-blue text-neon-blue" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                  "{review.text}"
                </p>
                <div className="border-t border-border pt-4">
                  <div className="font-semibold text-foreground text-sm">{review.name}</div>
                  <div className="text-xs text-muted-foreground">Parent of {review.childAge}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Why Now Sub-section */}
        <div className="mx-auto max-w-3xl text-center mb-10">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-neon-green mb-2">Why Now</span>
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl mb-3">
            <span className="bg-gradient-to-r from-neon-green to-neon-blue bg-clip-text text-transparent">Why Early STEM Exposure Matters</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            The world is changing fast. The skills children build today shape the opportunities they'll have tomorrow.
          </p>
        </div>

        <div className="mx-auto max-w-2xl space-y-4">
          {whyNowCards.map((card, index) => {
            const Icon = card.icon;
            return (
              <Card
                key={index}
                className="glass border-border/50 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="flex items-start gap-4 p-5">
                  <div className="h-10 w-10 rounded-xl bg-neon-green/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon className="h-5 w-5 text-neon-green" />
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{card.text}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default ReviewsCarousel;
