import React, { useCallback } from 'react';
import { EmblaOptionsType, EmblaCarouselType } from 'embla-carousel';
import { DotButton, useDotButton } from './EmblaCarouselDotButton';
import Autoplay from 'embla-carousel-autoplay';
import useEmblaCarousel from 'embla-carousel-react';

type CardData = {
  id: number;
  img: string;
  text?: string; // Optional text
  title?: string; // Optional title
};

type PropType = {
  slides: CardData[];
  options?: EmblaOptionsType;
  autoplay?: boolean; // Optional autoplay
  cardClassName?: string; // Optional class for styling cards
};

const EmblaCarouselContent: React.FC<PropType> = ({ slides, options, autoplay = false, cardClassName }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options, autoplay ? [Autoplay()] : []);

  const onNavButtonClick = useCallback((emblaApi: EmblaCarouselType) => {
    const autoplayPlugin = emblaApi?.plugins()?.autoplay;
    if (!autoplayPlugin) return;

    const resetOrStop =
      autoplayPlugin.options.stopOnInteraction === false
        ? autoplayPlugin.reset
        : autoplayPlugin.stop;

    resetOrStop();
  }, []);

  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(
    emblaApi,
    onNavButtonClick
  );

  return (
    <section className="embla bg-slate-400 relative">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((item) => (
            <div className={`embla__slide ${cardClassName}`} key={item.id}>
              <div className="h-96 relative">
                <img src={item.img} alt={item.title || 'Slide image'} className="object-cover w-full h-full" />
                {item.title && <h3 className="absolute bottom-4 left-4 text-white text-lg font-bold">{item.title}</h3>}
                {item.text && <p className="absolute bottom-2 left-4 text-white text-sm">{item.text}</p>}
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

export default EmblaCarouselContent;
