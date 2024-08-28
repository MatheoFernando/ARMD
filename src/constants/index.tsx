import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Info, Calendar, RefreshCcw, CheckCircle } from 'lucide-react'; // Importing icons from Lucide
import img01 from "../assets/Luanda-Angola.webp";

interface NavLink {
  id: string;
  name: string;
  path: string;
}

interface SocialLink {
  id: string;
  icon: JSX.Element;
  url: string;
}

interface CarouselImageContent {
  id: number; // Updated type to number
  img: string;
  text: string;
  title: string;
}

interface CarouselImage {
  id: number; // Updated type to number
  img: string;
}

export const navLinks: NavLink[] = [
  { id: "1", name: "Home", path: "/" },
  { id: "2", name: "Contacto", path: "/contacto" },
  { id: "3", name: "Endereço", path: "/endereco" },
  { id: "4", name: "Pesquisas", path: "/pesquisas" },
];

export const socialLinks: SocialLink[] = [
  { id: "1", icon: <FaFacebook />, url: 'https://facebook.com' },
  { id: "2", icon: <FaInstagram />, url: 'https://instagram.com' },
  { id: "3", icon: <FaLinkedin />, url: 'https://linkedin.com' },
];

export const carouselImages: CarouselImage[] = [
  {
    id: 1,
    img: img01,
  },
  {
    id: 2,
    img: img01,
  }
];

export const carouselData: CarouselImageContent[] = [
  {
    id: 1,
    img: img01,
    title: 'Slide 1 Title',
    text: 'This is some description for slide 1',
  },
  {
    id: 2,
    img: img01,
    title: 'Slide 2 Title',
    text: 'This is some description for slide 2',
  },
  {
    id: 3,
    img: img01,
    title: 'Slide 3 Title',
    text: 'This is some description for slide 3',
  },
];

export const itemsServicos = [
  { icon: <Info className="size-12 md:size-14 text-primary" />, title: 'Informações' },
  { icon: <Calendar className="size-12 md:size-14 text-primary" />, title: 'Marcação de Agenda' },
  { icon: <RefreshCcw className="size-12 md:size-14 text-primary" />, title: 'Renovação da Autorização' },
  { icon: <CheckCircle className="size-12 md:size-14 text-primary" />, title: 'Autorizados' },
];
