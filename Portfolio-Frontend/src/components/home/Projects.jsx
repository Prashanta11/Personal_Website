import { ExternalLinkIcon } from "lucide-react";

const Projects = () => {
  return (
    <div className="mx-10 mt-32">
      <div className="border-2 border-gray-300 shadow-gray-400 shadow-sm mx-10 px-7 py-7 rounded-xl">
        <h2 className="pb-7 font-bold font-instrumentSans text-6xl text-center italic tracking-widest">
          Projects
        </h2>

        <div className="flex justify-around items-center">
          <div className="relative rounded-xl overflow-hidden group">
            <img
              className="w-64 h-72"
              src="https://www.picsum.photos/800"
              alt=""
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center gap-2 bg-black/20 transition-transform translate-y-full group-hover:translate-y-0 duration-300">
              <h1 className="font-instrumentSans text-2xl italic tracking-widest">
                Project-1
              </h1>
              <ExternalLinkIcon className="hover:text-pink-600" />
            </div>
          </div>

          <div className="relative rounded-xl overflow-hidden group">
            <img
              className="w-64 h-72"
              src="https://www.picsum.photos/800"
              alt=""
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center gap-2 bg-black/20 transition-transform translate-y-full group-hover:translate-y-0 duration-300">
              <h1 className="font-instrumentSans text-2xl italic tracking-widest">
                Project-1
              </h1>
              <ExternalLinkIcon className="hover:text-pink-600" />
            </div>
          </div>
          <div className="relative rounded-xl overflow-hidden group">
            <img
              className="w-64 h-72"
              src="https://www.picsum.photos/800"
              alt=""
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center gap-2 bg-black/20 transition-transform translate-y-full group-hover:translate-y-0 duration-300">
              <h1 className="font-instrumentSans text-2xl italic tracking-widest">
                Project-1
              </h1>
              <ExternalLinkIcon className="hover:text-pink-600" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
