import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Info, Calendar, RefreshCcw, CheckCircle, Timer  } from 'lucide-react'; // Importing icons from Lucide
import img01 from "../assets/Luanda-Angola.webp";
import link01 from "../assets/of.png"
import link02 from "../assets/oms.png"
import link03 from "../assets/anvisa.png"
import link04 from "../assets/pnud.png"
import link05 from "../assets/thewordbank.png"
import link06 from "../assets/inis.png"
import link07 from "../assets/ofa.svg"
import link08 from "../assets/infarmed.png"
import HomePage from "@/routes/Dashboard/HomePage";
import OrdersPage from "@/routes/Dashboard/OrdersPage";
import CustomersPage from "@/routes/Dashboard/CustomersPage";
import AnalyticsPage from "@/routes/Dashboard/AnalyticsPage";
import ProductsPage from "@/routes/Dashboard/ProductsPage";
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
  img?: string;
  data?: string;
  title?: string;
   icon?: React.ReactNode
}


interface CarouselImage {
  id: number; // Updated type to number
  img: string;
  titulo?:string
}

export const navLinks: NavLink[] = [
  { id: "1", name: "Home", path: "/" },
  { id: "2", name: "Sobre Nós", path: "/Sobre-Nós" },
  { id: "3", name: "Farmacovigilância", path: "/Farmacovigilância" },
  { id: "4", name: "Legislação e Documentos", path: "/Legislação-Documentos" },
  { id: "5", name: "Contactos", path: "/Contactos" },
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
    
  },
    {
    id: 3,
    img: img01,
  
  },
  {
    id: 4,
    img: img01,
  
  }
];

export const carouselData: CarouselImageContent[] = [
  {
    id: 1,
    img: img01,
    title: 'Slide 1 Title',
   data: '1/3/2023',
    icon:<Timer  className='size-5 text-primary '/>
  },
  {
    id: 2,
    img: img01,
    title: 'Slide 2 Title',
  data: '1/3/2023',
    icon:<Timer  className='size-5 text-primary'/>
  },
  {
    id: 3,
    img: img01,
    title: 'Slide 3 Title',
    data: '1/3/2023',
    icon:<Timer  className='size-5 text-primary'/>
  },
  {
    id: 4,
    img: img01,
    title: 'Slide 2 Title',
     data: '1/3/2023',
    icon:<Timer  className='size-5 text-primary'/>
  },
  {
    id: 5,
    img: img01,
    title: 'Slide 3 Title',
    data: '1/3/2023',
    icon:<Timer  className='size-5 text-primary'/>
  },
  {
    id: 6,
    img: img01,
    title: 'Slide 2 Title',
 data: '1/3/2023',
    icon:<Timer  className='size-5 text-primary'/>
  },

];
export const Destaque:CarouselImageContent[] = [
   {
    id: 1,
    img: img01,
    title: 'Slide 1 Title',

  },
  {
    id: 2,
    img: img01,
    title: 'Slide 2 Title',

  },
  {
    id: 3,
    img: img01,
    title: 'Slide 3 Title',

  },
  {
    id: 4,
    img: img01,
    title: 'Slide 2 Title',

  },
  {
    id: 5,
    img: img01,
    title: 'Slide 3 Title',
   
  },
  {
    id: 6,
    img: img01,
    title: 'Slide 2 Title',

  },
]

export const itemsServicos = [
  { icon: <Info className="size-12 md:size-14 text-primary" />, title: 'Informações' },
  { icon: <Calendar className="size-12 md:size-14 text-primary" />, title: 'Marcação de Agenda' },
  { icon: <RefreshCcw className="size-12 md:size-14 text-primary" />, title: 'Renovação da Autorização' },
  { icon: <CheckCircle className="size-12 md:size-14 text-primary" />, title: 'Autorizados' },
];
interface ImageDataLinks {
  id: number;
  src: string;
 
}
export const imageDataLinks: ImageDataLinks[]  = [
  { id: 1, src: link01 },
  { id: 2, src: link02},
  { id: 3, src: link03},
  { id: 4, src: link04},
  { id: 5, src: link05  },
  { id: 6, src: link06},
  { id: 7, src: link07 },
  { id: 8, src: link08 },
 
];

export const menuItemsDash = [
  { path: '/dashboard', label: 'Dashboard' },
  { path: '/orders', label: 'Orders' },
  { path: '/products', label: 'Products' },
  { path: '/customers', label: 'Customers' },
  { path: '/settings', label: 'Settings' }
];
// types.ts

type Route = {
  path: string;
  title: string;
  element: React.ReactNode;
};

export const routesAdmin:Route[] = [
  { path: "admin", element: <HomePage />, title: "Dashboard" },
  { path: "orders", element: <OrdersPage />, title: "Orders" },
  { path: "products", element: <ProductsPage />, title: "Products" },
  { path: "customers", element: <CustomersPage />, title: "Customers" },
  { path: "analytics", element: <AnalyticsPage />, title: "Analytics" }
];