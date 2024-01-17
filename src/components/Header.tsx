import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { Button } from "./ui/button";
import { Typewriter, Cursor } from "react-simple-typewriter";

function Header() {
  const text = Typewriter({
    words: ["Web Designer", "Web Developer"],
    loop: true,
    typeSpeed: 500,
    deleteSpeed: 300,
  });

  return (
    <header className="grid grid-cols-2 w-[90%] mx-auto mt-40 max-md:grid-cols-1 max-md:mt-10">
      <div>
        <Button className="bg-gradient-to-l to-fuchsia-900 from-purple-900 border-2 border-white/20 my-2">
          Welcome to my Portafolio
        </Button>
        <div className="text-white ">
          <h1 className="text-6xl py-6 ">
            Hi! I'm Santiago <span>{text}</span>
            <Cursor />
          </h1>
          <p className="mb-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            sequi possimus odio officiis provident nulla labore, suscipit
            debitis eius, dolorem dolore voluptatem ad fugit, voluptas iste
            asperiores nam sapiente alias! Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Sint ex mole
          </p>
          <a href="#">
            <p className="flex items-center gap-3 text-xl font-bold">Let's Connect <FaRegArrowAltCircleRight /></p>
          </a>


        </div>
      </div>
      <div className="ml-40 mt-14">
        <img
          src="/public/header-img.svg"
          alt="baner"
          width={500}
          className="animate-bounce duration-4000"
        />
      </div>
    </header>
  );
}

export default Header;
