import { Button } from "./ui/button";

function Subcribe() {
  return (
    <section className="absolute">
      <div className="w-[80%] mx-auto bg-white -mt-32 max-md:-mt-48 rounded-3xl grid grid-cols-3 max-md:grid-cols-2 gap-12 max-md:gap-0">
        <div className="flex items-center ml-24  w-full py-12 max-md:pt-12 max-md:pb-0">
          <p className="font-bold text-2xl ">Subscrite to our Newsletter & Never miss latest Updates</p>
        </div>
        <div className="col-span-2" >
          <div className="flex justify-end max-md:justify-center items-center w-[60%] mx-auto max-md:w-[80%] ">
            <input type="text" className="w-full p-4
             border-2 border-purple-700 rounded-2xl my-20" placeholder="Email Address" />
            <Button className="-ml-32 px-8 bg-gradient-to-l to-fuchsia-700 from-blue-900">
                Submit
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Subcribe;
