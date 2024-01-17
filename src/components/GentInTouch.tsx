import { Button } from "./ui/button";
import Gentl from "../../public/contact-img.svg"

function GentInTouch() {
  return (
    <section>
      <div className="mt-52 bg-gradient-to-l to-pink-600 from-blue-600 py-2">
        <div className="grid grid-cols-2 max-md:grid-cols-1 pt-12 pb-56">
          <div className="flex items-center mt-20">
            <img src={Gentl} alt="contact" width={600}/>
          </div>
          <div>
            <h1 className="text-white max-md:mt-12 max-md:text-center text-4xl font-bold py-6">
              Get In Touch
            </h1>
            <form action="" className="">
              <div className="grid grid-cols-2 w-[90%] gap-2 max-md:mx-auto ">
                <input
                  type="text"
                  placeholder="First Name"
                  className="text-white bg-white/10
                  p-4 border-2 rounded-2xl"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="text-white bg-white/10  p-4 border-2 rounded-2xl"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="text-white bg-white/10  p-4 border-2 rounded-2xl"
                />
                <input
                  type="number"
                  placeholder="Phone No"
                  className="text-white bg-white/10  p-4 border-2 rounded-2xl"
                />
                <textarea
                  name=""
                  id=""
                  className="col-span-2 text-white bg-white/10  p-4 border-2    rounded-2xl h-[200px]"
                ></textarea>
              </div>
              <div className="mt-12 max-md:flex max-md:justify-center">
                <Button className="text-black bg-white rounded-none px-8 ">
                  Send
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default GentInTouch;
