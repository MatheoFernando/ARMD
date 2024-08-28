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
import logo from "../../src/assets/logoArmed.svg"

export function NavBar() {
  return (
    <header className="bg-primary shadow-md">
      <div className=" mx-auto  flex justify-between items-center h-[5rem]">
        {/* Logo */}
        <div className="text-xl font-bold bg-white w-[168px] h-full flex justify-center items-center"><img src={logo} alt="ddf"  className=" h-12 object-cover bg-white"/></div>

        {/* Navigation Links (centered) */}
        <nav className="hidden md:flex space-x-4">
  {navLinks.map((item, index) => (
    <Link
      key={item.id}
      to={item.path}
      className={`text-white hover:text-primary-foreground transition ${index !== 0 ? 'border-l border-primary-foreground pl-4' : ''}`}
    >
      {item.name}
    </Link>
  ))}
</nav>


        {/* Social Links (right-aligned) */}
        <div className="hidden md:flex space-x-4">
          {socialLinks.map((item) => (
            <a
              key={item.id}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 hover:text-blue-500"
            >
              {item.icon}
            </a>
          ))}
        </div>

        {/* Hamburger Menu for small screens */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Menu className="size-4 cursor-pointer" />
            </SheetTrigger>
            <SheetContent side="left">
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col space-y-4 mt-4">
                {navLinks.map((item) => (
                  <Link key={item.id} to={item.path} className="text-gray-800 hover:text-blue-500">
                    {item.name}
                  </Link>
                ))}
              </nav>
              <div className="flex justify-center space-x-4 mt-8">
                {socialLinks.map((item) => (
                  <a
                    key={item.id}
                    href={item.url}
                    target="_blank"
                    rel="social"
                    className="md:text-white text-slate-700 hover:text-primary-foreground"
                  >
                    {item.icon}
                  </a>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
