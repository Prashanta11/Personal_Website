import { get } from "@/api/api";
import { ExternalLinkIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    get("project/getall").then((res) => setProjects(res.projects));
  }, []);
  return (
    <div id="project" className="mt-6 sm:mt-24">
      <div className="border-2 border-gray-300 bg-gray-200 hover:bg-bodyColor shadow-gray-400 shadow-sm px-7 py-7 rounded-xl">
        <h2 className="pb-7 font-bold font-instrumentSans text-4xl text-center sm:text-6xl italic tracking-widest">
          Projects
        </h2>

        <div className="justify-between items-center gap-5 sm:gap-7 grid grid-cols-1 md:grid-cols-3 w-full">
          {projects?.map((project, index) => (
            <div
              key={index}
              className="relative rounded-xl w-full h-full overflow-hidden group"
            >
              <img
                className="object-cover size-full"
                src={project?.projectBanner?.url}
                alt=""
              />
              <div className="absolute inset-0 flex flex-col justify-center items-center gap-2 bg-black/35 transition-transform translate-y-full group-hover:translate-y-0 duration-300">
                <h1 className="font-instrumentSans text-2xl text-white italic tracking-widest">
                  {project.title}
                </h1>
                <Link to={`/project/${project._id}`}>
                  <ExternalLinkIcon className="text-white hover:text-pink-600" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
