
import { EmblaOptionsType } from 'embla-carousel'
import { NavBar } from '@/components/navBar'
import "../styles/embla.css"
import EmblaCarousel from '@/components/carrousel/emblaCarrousel'
import { Servicos } from '@/components/servicos'
import { carouselData, carouselImages } from '@/constants'
import EmblaCarouselContent from '@/components/carrousel/EmblaContent'

const OPTIONS: EmblaOptionsType = { align: 'end', loop: true }

export  function Home() {
  return (
    <div >
     <NavBar/>
     <EmblaCarousel  autoplay={true} slides={carouselImages} options={OPTIONS} />
     <Servicos/>
     <div className="App">
      <h1>My Embla Carousel</h1>
      <EmblaCarouselContent
        slides={carouselData}
        options={OPTIONS}
        autoplay={false} // Enable autoplay
        cardClassName="bg-white rounded-lg shadow-lg m-3 w-12" // Custom styles for cards
      />
    </div>
    </div>
  )
}


