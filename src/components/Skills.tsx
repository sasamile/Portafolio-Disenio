import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

import skills from "/public/meter1.svg"

function Skills() {
  return (
    <section className="w-[80%] max-md:w-[95%] mx-auto bg-neutral-800 my-28 py-12 px-20  text-center text-white rounded-[50px] space-y-8">
      <h1 className="font-bold text-4xl">Skills</h1>
      <p className="w-[70%] mx-auto">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum culpa
        nam voluptatum tempora sapiente, illum reprehenderit ab quos blanditiis{" "}
      </p>

      <Carousel className="w-[90%] mx-auto  ">
        <CarouselPrevious className="text-black" />
        <CarouselContent className="w-[700px] gap-14 pl-4">
          <CarouselItem className="md:basis-1/2 lg:basis-1/3 max-md:flex max-sm:block">
            <img src={skills} alt="" className="mb-4" />
            <p className="max-md:flex max-md:text-3xl max-md:pl-6  max-md:w-[20%] max-md:items-center">Web Developmet</p>
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3 max-md:flex max-sm:block">
            <img src={skills} alt="" className="mb-4" />
            <p className="max-md:flex max-md:text-3xl  max-md:pl-14 max-md:w-[20%] max-md:items-center">Brand Identify</p>
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3 max-md:flex max-sm:block">
            <img src={skills} alt="" className="mb-4" />
            <p className="max-md:flex max-md:text-3xl max-md:pl-14 max-md:w-[20%] max-md:items-center">Logo Design</p>
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3 max-md:flex max-sm:block">
            <img src={skills} alt="" className="mb-4" />
            <p className="max-md:flex max-md:text-3xl max-md:pl-14 max-md:w-[20%] max-md:items-center">Chess</p>
          </CarouselItem>
        </CarouselContent>
        <CarouselNext className="text-black" />
      </Carousel>
    </section>
  );
}

export default Skills;
