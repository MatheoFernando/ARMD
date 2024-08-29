/// <reference no-default-lib="true"/>
import { EmblaOptionsType } from "embla-carousel";
import { NavBar } from "@/components/navBar";
import "../styles/embla.css";
import EmblaCarousel from "@/components/carrousel/emblaCarrousel";
import { Servicos } from "@/components/servicos";
import { carouselData, carouselImages, Destaque } from "@/constants";
import EmblaCarouselContent from "@/components/carrousel/EmblaContent";
import { Marcacao } from "@/components/marcacao";
import Footer from "@/components/footer";
import { Links } from "@/components/links";

const OPTIONS: EmblaOptionsType = { align: "end", loop: true };

export function Home(): JSX.Element {
  return (
    <div>
      <NavBar />
      <EmblaCarousel
        autoplay={true}
        slides={carouselImages}
        options={OPTIONS}
      />
      <Servicos />
      <div className="container mx-auto my-8 flex items-center justify-center flex-col">
        <h1 className="font-bold text-2xl z-30 relative my-4">NOTÍCIAS</h1>
        <EmblaCarouselContent slides={carouselData} options={OPTIONS} />
      </div>
      <Marcacao />
      <div className="relative overflow-hidden w-full">
        <div className="absolute inset-0 bg-fixed bg-cover bg-center bg-parallex h-full"></div>
        <div className="relative z-10 bg-gradient-overlay flex items-center justify-center flex-col">
          <h1 className="text-white font-bold text-2xl z-30 relative my-4">
            DESTAQUES
          </h1>
          <div className="container mx-auto mb-6">
            <EmblaCarouselContent slides={Destaque} options={OPTIONS} />
          </div>
        </div>
      </div>
      <Links />
      <Footer />
    </div>
  );
}
