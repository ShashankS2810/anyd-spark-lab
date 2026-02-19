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
  const perPage = 3;
  const totalPages = Math.ceil(reviews.length / perPage);

  const prev = () => setCurrent((c) => (c === 0 ? totalPages - 1 : c - 1));
  const next = () => setCurrent((c) => (c === totalPages - 1 ? 0 : c + 1));

  const visibleReviews = reviews.slice(current * perPage, current * perPage + perPage);

  return (
    <section id="reviews" className="py-16 bg-secondary scroll-mt-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center mb-8">
          <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl mb-4">
            What Parents Say
          </h2>
          <p className="text-xl text-muted-foreground">
            Trusted by families across India. Here's why they love AnyD.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {visibleReviews.map((review, index) => (
              <Card
                key={review.name}
                className="shadow-card hover:shadow-elevated hover:-translate-y-1 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <CardContent className="p-6">
                  <Quote className="h-6 w-6 text-accent/20 mb-3" />
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-accent text-accent" />
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

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <Button variant="outline" size="icon" onClick={prev} className="rounded-full">
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <div className="flex gap-2">
              {Array.from({ length: totalPages }).map((_, i) => (
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
      </div>
    </section>
  );
};

export default ReviewsCarousel;
