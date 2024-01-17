
import { FaGithub } from 'react-icons/fa'

interface ProjectProps{
    number:number
}

function ProjectsCarousel({number}:ProjectProps) {
  return (
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
          <img src={`/public/project-img${number}.png`} alt="" />
        </div>
  )
}

export default ProjectsCarousel