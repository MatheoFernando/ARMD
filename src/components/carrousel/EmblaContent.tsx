import React from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import { DotButton, useDotButton } from './EmblaCarouselDotButton'
import useEmblaCarousel from 'embla-carousel-react'
import "../../styles/emblaCont.css"

type Slide = {
  img?: string
  title?: string
  text?: string
  icon?: React.ReactNode
}

type PropType = {
  slides: Slide[]
  options?: EmblaOptionsType
  containerClassName?: string
  viewportClassName?: string
  slidesContainerClassName?: string // Renamed for clarity
  slideClassName?: string
  controlsClassName?: string
  dotsClassName?: string
}

const EmblaCarouselContent: React.FC<PropType> = (props) => {
  const {
    slides,
    options,
    containerClassName = "",
    viewportClassName = "",
    slidesContainerClassName = "",
    slideClassName = "",
    controlsClassName = "",
    dotsClassName = ""
  } = props

  const [emblaRef, emblaApi] = useEmblaCarousel(options)

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi)

  return (
    <div className={`container ${containerClassName}`}>
      <section className="emblap">
        <div className={`embla__viewport ${viewportClassName}`} ref={emblaRef}>
          <div className={`embla__container h-full ${slidesContainerClassName}`}>
            {slides.map((slide, index) => (
              <div className={`embla__slide1 ${slideClassName}`} key={index}>
                <div className="embla__slide__content rounded-md mb-4">
                  <div className="overflow-hidden w-72 h-44  relative">
                    <img
                      src={slide.img}
                      alt={slide.title || 'Slide image'}
                      className="w-full h-full object-cover transform transition duration-500 ease-in-out hover:scale-110"
                    />
                  </div>
                  <div className="p-4">
                    {slide.title && <h3 className="text-lg font-bold mb-2">{slide.title}</h3>}
                    <div className="flex gap-1">
                      {slide.icon && <div className="mb-2">{slide.icon}</div>}
                      {slide.data && <p className="text-sm">{slide.data}</p>}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className={`embla__controls ${controlsClassName}`}>
          <div className={`embla__dots ${dotsClassName}`}>
            {scrollSnaps.map((_, index) => (
              <DotButton
                key={index}
                onClick={() => onDotButtonClick(index)}
                className={'embla__dot'.concat(
                  index === selectedIndex ? ' embla__dot--selected' : ''
                )}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default EmblaCarouselContent
