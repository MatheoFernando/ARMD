import { Timer  } from 'lucide-react'; // Importing icons from Lucide
import img01 from "../assets/Luanda-Angola.webp";
import link02 from "../assets/oms.png"
import link03 from "../assets/iconARMED.svg"
import link04 from "../assets/pnud.png"
import HomePage from "@/routes/Dashboard/HomePage";
import OrdersPage from "@/routes/Dashboard/OrdersPage";
import CustomersPage from "@/routes/Dashboard/CustomersPage";
import AnalyticsPage from "@/routes/Dashboard/AnalyticsPage";
import ProductsPage from "@/routes/Dashboard/ProductsPage";
import servicosInform from "../assets/icones/Informacoes.svg"
import servicosInscr from "../assets/icones/inscricaoOFA-02.svg"


interface CarouselImageContent {
  id: number; // Updated type to number
  img?: string;
  data?: string;
  link?: string;
  title?: string;
   icon?: React.ReactNode
}




export const carouselData: CarouselImageContent[] = [
  {
    id: 1,
    img: img01,
    title: 'Slide 1 Title',
    link: "",
   data: '1/3/2023',
    icon:<Timer  className='size-5 text-primary '/>
  },
  {
    id: 2,
    img: img01,
    title: 'Slide 2 Title',
    link: "",
  data: '1/3/2023',
    icon:<Timer  className='size-5 text-primary'/>
  },
  {
    id: 3,
    img: img01,
    title: 'Slide 3 Title',
    link: "",
    data: '1/3/2023',
    icon:<Timer  className='size-5 text-primary'/>
  },
  {
    id: 4,
    img: img01,
    title: 'Slide 2 Title',
    link: "",
     data: '1/3/2023',
    icon:<Timer  className='size-5 text-primary'/>
  },
  {
    id: 5,
    img: img01,
    title: 'Slide 3 Title',
    link: "",
    data: '1/3/2023',
    icon:<Timer  className='size-5 text-primary'/>
  },
  {
    id: 6,
    img: img01,
    title: 'Slide 2 Title',
    link: "",
 data: '1/3/2023',
    icon:<Timer  className='size-5 text-primary'/>
  },

];
export const Destaque:CarouselImageContent[] = [
   {
    id: 1,
    img: img01,
    title: 'Slide 1 Title',
    link: "",

  },
  {
    id: 2,
    img: img01,
    title: 'Slide 2 Title',
    link: ""

  },
  {
    id: 3,
    img: img01,
    title: 'Slide 3 Title',
    link: ""

  },
  {
    id: 4,
    img: img01,
    title: 'Slide 2 Title',
    link: ""

  },
  {
    id: 5,
    img: img01,
    title: 'Slide 3 Title',
    link: ""
   
  },
  {
    id: 6,
    img: img01,
    title: 'Slide 2 Title',
    link: ""

  },
]

export const itemsServicos = [
  { icon: servicosInform, title: 'Informações', url: 'requisitos-para-inscricao' },
  { icon: servicosInscr, title: 'Inscrição' , url: 'inscricao'},
  { icon: servicosInscr, title: 'Inscrição' , url: 'inscricao'},
 
];
interface ImageDataLinks {
  id: number;
  src: string;
  url:string
 
}
export const imageDataLinks: ImageDataLinks[]  = [
  { id: 1, src: link02 , url: "/"},
  { id: 2, src: link04, url: "/"},
  { id: 3, src: link03, url: "/"},

 
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