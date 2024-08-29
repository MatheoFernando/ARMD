import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { navLinks, socialLinks } from "@/constants";
import { Menu } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../../src/assets/logoArmed.svg";

export function NavBar() {
  return (
    <header className="bg-primary shadow-lg">
      <div className="flex justify-between items-center h-[5rem]">
        {/* Logo */}
        <div className="text-xl font-bold bg-white w-[168px] h-full flex justify-center items-center">
          <img src={logo} alt="logo" className="h-12 object-cover bg-white" />
        </div>

        {/* Navigation Links (centered) */}
        <nav className="hidden md:flex space-x-4">
          {navLinks.map((item, index) => (
            <Link
              key={item.id}
              to={item.path}
              className={`text-white hover:text-primary-foreground transition text-base ${index !== 0 ? 'border-l-[1.5px] border-primary-foreground pl-4' : ''}`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Social Links (right-aligned) */}
        <div className="hidden md:flex space-x-4 mr-6 md:items-center">
          <Link to="/login" className="text-white hover:text-blue-500 border-b-2 border-primary">Login</Link>
          {socialLinks.map((item) => (
            <a
              key={item.id}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-secondary text-xl md:text-2xl "
            >
              {item.icon}
            </a>
          ))}
        </div>

        {/* Hamburger Menu for small screens */}
        <div className="lg:hidden mr-4 flex gap-4 items-center justify-center ">
          <div className="flex justify-center space-x-4 ">
                
                {socialLinks.map((item) => (
                  <a
                    key={item.id}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-secondary transition duration-150 ease-out hover:ease-in"
                  >
                    {item.icon}
                  </a>
                ))}
             
              </div>
          <div>
            <Sheet  >
            <SheetTrigger asChild>
              <Menu className="size-6 cursor-pointer text-white" />
            </SheetTrigger>
            <SheetContent side="top" className="bg-primary">
          
              <nav className="flex flex-col space-y-4 mt-4">
                {navLinks.map((item) => (
                  <Link
                    key={item.id}
                    to={item.path}
                    className="text-white hover:text-secondary transition duration-150 ease-out hover:ease-in"
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
              
            </SheetContent>
          </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
