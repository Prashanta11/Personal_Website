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
    <div id="project" className="mt-32">
      <div className="border-2 border-gray-300 bg-gray-200 hover:bg-bodyColor shadow-gray-400 shadow-sm px-7 py-7 rounded-xl">
        <h2 className="pb-7 font-bold font-instrumentSans text-6xl text-center italic tracking-widest">
          Projects
        </h2>

        <div className="flex flex-wrap justify-around items-center gap-y-6">
          {projects?.map((project, index) => (
            <div
              key={index}
              className="relative rounded-xl overflow-hidden group"
            >
              <img
                className="w-64 h-72"
                src={project?.projectBanner?.url}
                alt=""
              />
              <div className="absolute inset-0 flex flex-col justify-center items-center gap-2 bg-black/20 transition-transform translate-y-full group-hover:translate-y-0 duration-300">
                <h1 className="font-instrumentSans text-2xl italic tracking-widest">
                  {project.title}
                </h1>
                <Link to={`/project/${project._id}`}>
                  <ExternalLinkIcon className="hover:text-pink-600" />
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
