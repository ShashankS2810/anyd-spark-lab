import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

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

const ReviewsCarousel = () => {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? reviews.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === reviews.length - 1 ? 0 : c + 1));

  const review = reviews[current];

  return (
    <section id="reviews" className="py-16 bg-secondary scroll-mt-20">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl mb-4">
            What Parents Say
          </h2>
          <p className="text-xl text-muted-foreground">
            Trusted by families across India. Here's why they love AnyD.
          </p>
        </div>

        <Card className="bg-white border-2 border-deep-wine/30 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_-8px_hsl(348_70%_24%/0.25)] animate-fade-in" key={current} style={{ boxShadow: '0 4px 20px -6px hsl(348 70% 24% / 0.15)' }}>
          <CardContent className="p-8 md:p-10 text-center">
            <Quote className="h-8 w-8 text-deep-wine/60 mx-auto mb-4" />
            <div className="flex justify-center gap-1 mb-5">
              {Array.from({ length: review.rating }).map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-accent text-accent" />
              ))}
            </div>
            <p className="text-lg text-deep-wine leading-relaxed mb-6">
              "{review.text}"
            </p>
            <div className="border-t border-border pt-5">
              <div className="font-semibold text-deep-wine">{review.name}</div>
              <div className="text-sm text-deep-wine/70">Parent of {review.childAge}</div>
            </div>
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-4 mt-8">
          <Button variant="outline" size="icon" onClick={prev} className="rounded-full">
            <ChevronLeft className="h-5 w-5" />
          </Button>
          <div className="flex gap-2">
            {reviews.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-2.5 rounded-full transition-all duration-300 ${i === current ? 'w-8 bg-deep-wine' : 'w-2.5 bg-border hover:bg-muted-foreground/30'}`}
              />
            ))}
          </div>
          <Button variant="outline" size="icon" onClick={next} className="rounded-full">
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ReviewsCarousel;
