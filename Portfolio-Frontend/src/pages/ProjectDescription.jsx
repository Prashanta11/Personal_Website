import { get } from "@/api/api";
import { ExternalLink } from "lucide-react";
import { useEffect, useState } from "react";
import { FaGithub } from "react-icons/fa";
import { Link, useParams } from "react-router";

const ProjectDescription = () => {
  const { id } = useParams();
  const [projectDetail, setProjectDetail] = useState({});
  useEffect(() => {
    get(`project/get/${id}`).then((response) => {
      setProjectDetail(response.project);
    });
  }, [id]);
  console.log(projectDetail);

  console.log(id);
  return (
    <div className="md:px-10 pt-6">
      <div className="border-2 border-gray-300 bg-gray-200 hover:bg-bodyColor shadow-gray-400 shadow-sm mx-2 md:mx-10 px-4 md:px-7 py-6 rounded-xl transition-colors">
        <h2 className="pb-7 font-bold font-instrumentSans text-3xl text-center md:text-6xl italic capitalize tracking-widest">
          {projectDetail?.title}
        </h2>

        <div className="flex flex-col gap-6 rounded-xl overflow-hidden group">
          <div className="flex justify-center items-center w-full">
            <img
              className="rounded-md w-full h-96 overflow-hidden object-contain"
              src={projectDetail?.projectBanner?.url}
              alt=""
            />
          </div>
          <div className="flex justify-center items-center gap-6">
            <Link target="_blank" to={projectDetail?.gitRepoLink}>
              <FaGithub className="text-4xl hover:text-blue-600" />
            </Link>
            <Link target="_blank" to={projectDetail?.projectLink}>
              <ExternalLink className="inline-block font-medium text-6xl hover:text-blue-600" />
            </Link>
          </div>
          <div className="border-gray-300 border rounded-lg">
            <div className="space-y-3 mb-2 px-3 py-2">
              <div className="flex gap-3">
                <p className="md:w-1/12 font-medium">Technologies:</p>
                <p className="">{projectDetail?.technologies}</p>
              </div>
              <div className="flex gap-3">
                <p className="md:w-1/12 font-medium">Stack:</p>
                <p className="">{projectDetail?.stack}</p>
              </div>
            </div>
            <p className="border-gray-300 p-2 pt-4 border border-t w-full">
              {projectDetail?.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDescription;
