/// <reference no-default-lib="true"/>
import { EmblaOptionsType } from "embla-carousel";
import { NavBar } from "@/components/navBar";
import "../styles/embla.css";
import EmblaCarousel from "@/components/carrousel/emblaCarrousel";
import { Servicos } from "@/components/servicos";
import EmblaCarouselContent from "@/components/carrousel/EmblaContent";
import Footer from "@/components/footer";
import { Links } from "@/components/links";
import { Banner } from "@/components/banner";

const OPTIONS: EmblaOptionsType = { align: "end", loop: true };

export function Home(): JSX.Element {
  return (
    <div>
      <NavBar />
      <EmblaCarousel options={OPTIONS} />
      <Servicos />
      <div className="container mx-auto my-8 flex items-center justify-center flex-col">
        <h1 className="font-bold text-2xl z-30 relative my-8">NOTÍCIAS</h1>
        <EmblaCarouselContent options={OPTIONS} />
      </div>

      <Banner />
      <Links />
      <Footer />
    </div>
  );
}
