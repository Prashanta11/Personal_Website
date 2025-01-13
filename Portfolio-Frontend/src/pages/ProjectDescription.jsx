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
    <div className="px-10 pt-6">
      <div className="border-2 border-gray-300 bg-gray-200 hover:bg-bodyColor shadow-gray-400 shadow-sm mx-10 px-7 py-6 rounded-xl transition-colors">
        <h2 className="pb-7 font-bold font-instrumentSans text-6xl text-center italic capitalize tracking-widest">
          {projectDetail?.title}
        </h2>

        <div className="flex flex-col gap-6 rounded-xl overflow-hidden group">
          <div className="flex justify-center items-center w-full">
            <img
              className="w-full h-96 object-cover"
              src={projectDetail?.projectBanner?.url}
              alt=""
            />
          </div>
          <div className="flex justify-center items-center gap-6">
            <Link to={projectDetail?.gitRepoLink}>
              <FaGithub className="text-4xl hover:text-blue-600" />
            </Link>
            <Link to={projectDetail?.projectLink}>
              <ExternalLink className="inline-block font-medium text-6xl hover:text-blue-600" />
            </Link>
          </div>
          <div>
            <div className="gap-x-6 grid grid-cols-2 w-max">
              <p className="font-medium">Technologies:</p>
              <p className="">{projectDetail?.technologies}</p>

              <p className="font-medium">Stack:</p>
              <p className="">{projectDetail?.stack}</p>
            </div>
          </div>
          <p className="p-2 border rounded-md w-full">
            {projectDetail?.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectDescription;
