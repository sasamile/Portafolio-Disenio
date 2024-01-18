import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import Logo from "../../public/logo.svg"

function Navbar() {
  return (
    <nav className="w-full left-0 top-0 ">
      <div className="flex justify-between w-[85%] mx-auto pt-12 max-lg:flex-col max-md:space-y-6 py-6">
        <div className="flex items-center max-lg:flex max-lg:justify-center max-lg:pb-6">
          <img src={Logo} alt="logo" width={140} height={50} />
        </div>
        <div className="flex items-center space-x-6 max-md:flex-col max-lg:justify-center max-lg:py-6">
          <div className="flex space-x-12 text-white/70 text-xl">
            <a href="#" className="font-bold text-white">
              Home
            </a>
            <a href="#Skills">Skills</a>
            <a href="#Projects">Projects</a>
          </div>
          <div className="max-md:hidden">
            <ul className="flex space-x-3 max-md:my-6">
              <li className=" flex justify-center items-center w-8 h-8 rounded-full bg-white ">
                <a href="#">
                  <FaLinkedinIn />
                </a>
              </li>
            
              <li className=" flex justify-center items-center w-8 h-8 rounded-full bg-white ">
                <a href="#">
                  <FaFacebookF />
                </a>
              </li>
              <li className=" flex justify-center items-center w-8 h-8 rounded-full bg-white ">
                <a href="#">
                  <FaInstagram />
                </a>
              </li>
            </ul>
          </div>
          <div>
            <Button className="bg-transparent border-2 py-6 px-8 max-md:hidden">
              Let's Connect
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
