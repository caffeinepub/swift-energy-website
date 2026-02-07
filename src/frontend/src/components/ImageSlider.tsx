import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { useEffect, useCallback } from 'react';
import type { CarouselApi } from '@/components/ui/carousel';

interface ImageSliderProps {
  images: {
    src: string;
    alt: string;
  }[];
}

export default function ImageSlider({ images }: ImageSliderProps) {
  const [api, setApi] = React.useState<CarouselApi>();
  const [isHovered, setIsHovered] = React.useState(false);

  const scrollNext = useCallback(() => {
    if (api && !isHovered) {
      api.scrollNext();
    }
  }, [api, isHovered]);

  useEffect(() => {
    if (!api) return;

    const intervalId = setInterval(() => {
      scrollNext();
    }, 4000);

    return () => clearInterval(intervalId);
  }, [api, scrollNext]);

  return (
    <section className="relative w-full overflow-hidden border-b border-border/40">
      <Carousel
        opts={{
          align: 'start',
          loop: true,
        }}
        setApi={setApi}
        className="w-full"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index}>
              <div className="relative w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] overflow-hidden bg-gradient-to-br from-primary/10 via-accent/5 to-background">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-2 sm:left-4 md:left-6 lg:left-8 h-10 w-10 sm:h-12 sm:w-12" />
        <CarouselNext className="right-2 sm:right-4 md:right-6 lg:right-8 h-10 w-10 sm:h-12 sm:w-12" />
      </Carousel>
    </section>
  );
}

// Add React import at the top
import * as React from 'react';
