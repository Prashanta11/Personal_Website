import { get } from "@/api/api";
import { ExternalLink } from "lucide-react";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async"; // Import Helmet
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

  return (
    <>
      {/* Helmet for dynamic meta tags */}
      <Helmet>
        <title>
          {projectDetail?.title
            ? `${projectDetail.title} - Prashanta Deuja`
            : "Project - Prashanta Deuja"}
        </title>
        <meta
          name="description"
          content={
            projectDetail?.description ||
            "Explore this project to learn more about its technologies and features."
          }
        />
        <meta
          property="og:title"
          content={projectDetail?.title || "Project - Prashanta Deuja"}
        />
        <meta
          property="og:description"
          content={
            projectDetail?.description ||
            "Explore this project to learn more about its technologies and features."
          }
        />
        <meta
          property="og:image"
          content={projectDetail?.projectBanner?.url || "/images/default.jpg"} // Default image if none exists
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content={projectDetail?.title || "Project - Prashanta Deuja"}
        />
        <meta
          name="twitter:description"
          content={
            projectDetail?.description ||
            "Explore this project to learn more about its technologies and features."
          }
        />
        <meta
          name="twitter:image"
          content={projectDetail?.projectBanner?.url || "/images/default.jpg"} // Default image if none exists
        />
      </Helmet>

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
                alt="Project Banner"
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
                  <p>{projectDetail?.technologies}</p>
                </div>
                <div className="flex gap-3">
                  <p className="md:w-1/12 font-medium">Stack:</p>
                  <p>{projectDetail?.stack}</p>
                </div>
              </div>
              <p className="border-gray-300 p-2 pt-4 border border-t w-full">
                {projectDetail?.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectDescription;
