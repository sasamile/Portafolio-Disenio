import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import Logo from "../../public/logo.svg"

function Footer() {
  return (
    <footer className="bg-footer bg-cover pt-[260px] pb-12">
      <div className="flex justify-between w-[90%] mx-auto max-md:flex-col max-md:justify-center max-md:items-center max-md:gap-8">
        <div>
          <img src={Logo} alt="logo" width={150} />
        </div>
        <div className="flex flex-col justify-center items-end gap-2 max-md:items-center">
          <ul className="flex space-x-3  ">
            <li className=" flex justify-center items-center w-8 h-8 rounded-full bg-white hover:bg-white/30 hover:text-white">
              <a href="#">
                <FaLinkedinIn />
              </a>
            </li>

            <li className=" flex justify-center items-center w-8 h-8 rounded-full bg-white hover:bg-white/30 hover:text-white">
              <a href="#">
                <FaFacebookF />
              </a>
            </li>
            <li className=" flex justify-center items-center w-8 h-8 rounded-full bg-white hover:bg-white/30 hover:text-white">
              <a href="#">
                <FaInstagram />
              </a>
            </li>
          </ul>
          <p className="text-white">Copy right 2024 All Rights Reserved </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
