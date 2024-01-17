import { FaGithub } from "react-icons/fa";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import ProjectsCarousel from "./ProjectsCarousel";

function Projects() {
  return (
    <section className="mt-56">
      <div className="text-center text-white">
        <h1 className="text-4xl  font-bold">Projects</h1>
        <p className="w-[60%] mx-auto mt-4 max-md:w-[80%]">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate,
          nobis adipisci aliquam eaque quos repellendus mollitia itaque
          assumenda, omnis eveniet odio illo saepe, enim veniam consequatur
          culpa deleniti atque soluta. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Quia, animi sit! Officiis molestiae magnam, fuga
          obcaecati dolor cum excepturi quia harum ullam ipsa laudantium nobis
          explicabo assumenda recusandae soluta itaque!
        </p>
      </div>
      <div className=" mt-12 grid grid-cols-3 max-md:hidden  gap-5 w-[90%] mx-auto">
        <div className="overflow-hidden cursor-pointer rounded-xl relative group">
          <div className="rounded-xl z-50 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute bg-black/90  inset-x-0 -bottom-2 pt-30 text-white flex items-end">
            <div>
              <div className=" p-4 space-y-3 max-md:space-y-0 max-sm:space-y-6 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-10 max-md:pb-4 transform transition duration-300 ease-in-out max-sm:pb-12">
                <div className="font-bold">Proyecto 1</div>

                <div className="opacity-60 text-sm ">
                  <a href="">
                    <FaGithub className="text-4xl " />
                  </a>
                </div>
                <div className="opacity-60 text-sm ">
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Quas, temporibus porro, explicabo culpa mo
                  </p>
                </div>
              </div>
            </div>
          </div>
          <img src="/public/project-img2.png" alt="" />
        </div>
        {/**Proyecto 2 */}
        <div className="overflow-hidden  cursor-pointer rounded-xl relative group">
          <div className="rounded-xl z-50 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute bg-black/90  inset-x-0 -bottom-2 pt-30 text-white flex items-end">
            <div>
              <div className=" p-4 space-y-3 max-md:space-y-0 max-sm:space-y-6 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-10 max-md:pb-4 transform transition duration-300 ease-in-out max-sm:pb-12">
                <div className="font-bold">Proyecto 1</div>

                <div className="opacity-60 text-sm ">
                  <a href="">
                    <FaGithub className="text-4xl " />
                  </a>
                </div>
                <div className="opacity-60 text-sm ">
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Quas, temporibus porro, explicabo culpa mo
                  </p>
                </div>
              </div>
            </div>
          </div>
          <img src="/public/project-img1.png" alt="" />
        </div>
        <div className="overflow-hidden cursor-pointer rounded-xl relative group">
          <div className="rounded-xl z-50 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute bg-black/90  inset-x-0 -bottom-2 pt-30 text-white flex items-end">
            <div>
              <div className=" p-4 space-y-3 max-md:space-y-0 max-sm:space-y-6 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-10 max-md:pb-4 transform transition duration-300 ease-in-out max-sm:pb-12">
                <div className="font-bold">Proyecto 1</div>

                <div className="opacity-60 text-sm ">
                  <a href="">
                    <FaGithub className="text-4xl " />
                  </a>
                </div>
                <div className="opacity-60 text-sm ">
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Quas, temporibus porro, explicabo culpa mo
                  </p>
                </div>
              </div>
            </div>
          </div>
          <img src="/public/project-img2.png" alt="" />
        </div>
        <div className="overflow-hidden  cursor-pointer rounded-xl relative group">
          <div className="rounded-xl z-50 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute bg-black/90  inset-x-0 -bottom-2 pt-30 text-white flex items-end">
            <div>
              <div className=" p-4 space-y-3 max-md:space-y-0 max-sm:space-y-6 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-10 max-md:pb-4 transform transition duration-300 ease-in-out max-sm:pb-12">
                <div className="font-bold">Proyecto 1</div>

                <div className="opacity-60 text-sm ">
                  <a href="">
                    <FaGithub className="text-4xl " />
                  </a>
                </div>
                <div className="opacity-60 text-sm ">
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Quas, temporibus porro, explicabo culpa mo
                  </p>
                </div>
              </div>
            </div>
          </div>
          <img src="/public/project-img1.png" alt="" />
        </div>
        <div className="overflow-hidden cursor-pointer rounded-xl relative group">
          <div className="rounded-xl z-50 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute bg-black/90  inset-x-0 -bottom-2 pt-30 text-white flex items-end">
            <div>
              <div className=" p-4 space-y-3 max-md:space-y-0 max-sm:space-y-6 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-10 max-md:pb-4 transform transition duration-300 ease-in-out max-sm:pb-12">
                <div className="font-bold">Proyecto 1</div>

                <div className="opacity-60 text-sm ">
                  <a href="">
                    <FaGithub className="text-4xl " />
                  </a>
                </div>
                <div className="opacity-60 text-sm ">
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Quas, temporibus porro, explicabo culpa mo
                  </p>
                </div>
              </div>
            </div>
          </div>
          <img src="/public/project-img2.png" alt="" />
        </div>
        <div className="overflow-hidden  cursor-pointer rounded-xl relative group">
          <div className="rounded-xl z-50 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute bg-black/90  inset-x-0 -bottom-2 pt-30 text-white flex items-end">
            <div>
              <div className=" p-4 space-y-3 max-md:space-y-0 max-sm:space-y-6 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-10 max-md:pb-4 transform transition duration-300 ease-in-out max-sm:pb-12">
                <div className="font-bold">Proyecto 1</div>

                <div className="opacity-60 text-sm ">
                  <a href="">
                    <FaGithub className="text-4xl " />
                  </a>
                </div>
                <div className="opacity-60 text-sm ">
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Quas, temporibus porro, explicabo culpa mo
                  </p>
                </div>
              </div>
            </div>
          </div>
          <img src="/public/project-img1.png" alt="" />
        </div>
      </div>
      <div>
        <Carousel className="md:hidden w-[70%] mx-auto mt-14">
          <CarouselPrevious />
          <CarouselContent>
            <CarouselItem>
              <ProjectsCarousel number={1}/>
            </CarouselItem>
            <CarouselItem>
            <ProjectsCarousel number={2}/>
            </CarouselItem>
            <CarouselItem>
            <ProjectsCarousel number={1}/>
            </CarouselItem>
            <CarouselItem>
            <ProjectsCarousel number={2}/>
            </CarouselItem>
            <CarouselItem>
            <ProjectsCarousel number={1}/>
            </CarouselItem>
            <CarouselItem>
            <ProjectsCarousel number={2}/>
            </CarouselItem>
            <CarouselItem>
              <div className="overflow-hidden  cursor-pointer rounded-xl relative group">
                <div className="rounded-xl z-50 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute bg-black/90  inset-x-0 -bottom-2 pt-30 text-white flex items-end">
                  <div>
                    <div className=" p-4 space-y-3 max-md:space-y-0 max-sm:space-y-6 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-10 max-md:pb-4 transform transition duration-300 ease-in-out max-sm:pb-12">
                      <div className="font-bold">Proyecto 1</div>

                      <div className="opacity-60 text-sm ">
                        <a href="">
                          <FaGithub className="text-4xl " />
                        </a>
                      </div>
                      <div className="opacity-60 text-sm ">
                        <p>
                          Lorem ipsum, dolor sit amet consectetur adipisicing
                          elit. Quas, temporibus porro, explicabo culpa mo
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <img src="/public/project-img2.png" alt="" />
              </div>
            </CarouselItem>
          </CarouselContent>
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
}

export default Projects;
