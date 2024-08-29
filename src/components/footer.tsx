import { FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";
import footerlogo1 from "../assets/logoMinsa.svg";
import footerlogo2 from "../assets/logoArmed.svg";
const Footer = () => {
  return (
    <footer className="w-full bg-[#D8DDE5]  bottom-0 pt-4">
      <div className="p-2 md:container pt-4 md:pb-12  flex flex-col lg:flex-row justify-between items-center gap-6">
        <div className="flex space-x-4 mb-4 md:mb-0">
          <img src={footerlogo1} alt="Image 1" className="h-12  object-cover" />
          <img src={footerlogo2} alt="Image 2" className="h-12  object-cover" />
        </div>
  
        <div className="flex items-center flex-col  justify-end mb-4 md:mb-0 pt-4 px-2">
          <div className="flex items-center space-x-4">
            <div className="flex flex-col items-center space-y-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook className="text-primary text-xl" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="text-primary text-xl" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="text-primary text-xl" />
              </a>
            </div>

            {/* Parágrafo com altura ajustada */}
            <p className="text-sm border-l-2 border-primary pl-4 flex-grow max-w-sm text-primary leading-6">
              Tel. (+244) 945 817 227 | E-mail: armed@cnp.ao |
              expediente@armed.gov.ao www.armed.cnp.ao Rua Cmdt. Che-Guevara N°
              86/86A, Maculusso, Luanda - Angola <br/>
              <a href="#" className="font-bold">Regras, politicas e serviços</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
