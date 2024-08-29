// src/components/EmblaCarousel.tsx
import React, { useCallback } from 'react';
import { EmblaOptionsType, EmblaCarouselType } from 'embla-carousel';
import { DotButton, useDotButton } from './EmblaCarouselDotButton';
import Autoplay from 'embla-carousel-autoplay';
import useEmblaCarousel from 'embla-carousel-react';
export type CarouselImage = {
  id: number;
  img: string;
  titulo: string;
};
type EmblaCarouselProps = {
  slides: CarouselImage[];
  options?: EmblaOptionsType;
};

const EmblaCarousel: React.FC<EmblaCarouselProps> = ({ slides, options }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay()]);

  const onNavButtonClick = useCallback((emblaApi: EmblaCarouselType) => {
    const autoplay = emblaApi?.plugins()?.autoplay;
    if (!autoplay) return;

    const resetOrStop =
      autoplay.options.stopOnInteraction === false
        ? autoplay.reset
        : autoplay.stop;

    resetOrStop();
  }, []);

  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(
    emblaApi,
    onNavButtonClick
  );

  return (
    <section className="embla bg-slate-400 relative w-full">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((item) => (
            <div className="embla__slide" key={item.id}>
              <div className="h-96 relative">
                <img
                  src={item.img}
                  alt={item.titulo}
                  className="object-cover w-full h-full"
                />
                <p className="absolute left-0 top-1/2 transform -translate-y-1/2 text-3xl font-semibold text-white pl-4">
                  {item.titulo}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="embla__controls absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        <div className="embla__dots flex space-x-2">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={`embla__dot ${
                index === selectedIndex ? 'embla__dot--selected' : ''
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EmblaCarousel;
