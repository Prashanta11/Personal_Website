import { Button } from "@/components/ui/button";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

const ViewProject = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [technologies, setTechnologies] = useState("");
  const [stack, setStack] = useState("");
  const [gitRepoLink, setGitRepoLink] = useState("");
  const [deployed, setDeployed] = useState("");
  const [projectLink, setProjectLink] = useState("");
  const [projectBanner, setProjectBanner] = useState("");

  const { id } = useParams();

  useEffect(() => {
    const getProject = async () => {
      await axios
        .get(
          `https://backend-five-neon.vercel.app/api/v1/project/getall/${id}`,
          {
            withCredentials: true,
          }
        )
        .then((res) => {
          setTitle(res.data.project.title);
          setDescription(res.data.project.description);
          setStack(res.data.project.stack);
          setDeployed(res.data.project.deployed);
          setTechnologies(res.data.project.technologies);
          setGitRepoLink(res.data.project.gitRepoLink);
          setProjectLink(res.data.project.projectLink);
          setProjectBanner(
            res.data.project.projectBanner && res.data.project.projectBanner.url
          );
        })
        .catch((error) => {
          toast.error(error.response.data.message);
        });
    };
    getProject();
  }, [id]);

  const navigateTo = useNavigate();
  const handleReturnToDashboard = () => {
    navigateTo("/");
  };

  const descriptionList = description.split(". ");
  const technologiesList = technologies.split(", ");

  return (
    <>
      <div className="flex justify-center items-center sm:gap-4 mt-7 sm:py-4 min-h-[100vh]">
        <div className="px-5 pb-5 w-[100%] md:w-[1000px]">
          <div className="space-y-12">
            <div className="border-gray-900/10 pb-12 border-b">
              <div className="flex justify-end">
                <Button onClick={handleReturnToDashboard}>
                  Return to Dashboard
                </Button>
              </div>
              <div className="flex flex-col gap-5 mt-10">
                <div className="sm:col-span-4 w-full">
                  <h1 className="mb-4 font-bold text-2xl">{title}</h1>
                  <img
                    src={projectBanner ? projectBanner : "/avatarHolder.jpg"}
                    alt="projectBanner"
                    className="w-full h-auto"
                  />
                </div>
                <div className="sm:col-span-4 w-full">
                  <p className="mb-2 text-2xl">Description:</p>
                  <ul className="list-disc">
                    {descriptionList.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div className="sm:col-span-4 w-full">
                  <p className="mb-2 text-2xl">Technologies:</p>
                  <ul className="list-disc">
                    {technologiesList.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div className="sm:col-span-4 w-full">
                  <p className="mb-2 text-2xl">Stack:</p>
                  <p>{stack}</p>
                </div>
                <div className="sm:col-span-4 w-full">
                  <p className="mb-2 text-2xl">Deployed:</p>
                  <p>{deployed}</p>
                </div>
                <div className="sm:col-span-4 w-full">
                  <p className="mb-2 text-2xl">Github Repository Link:</p>
                  <Link
                    className="text-sky-700"
                    target="_blank"
                    to={gitRepoLink}
                  >
                    {gitRepoLink}
                  </Link>
                </div>
                <div className="sm:col-span-4 w-full">
                  <p className="mb-2 text-2xl">Project Link:</p>
                  <Link
                    className="text-sky-700"
                    target="_blank"
                    to={projectLink}
                  >
                    {projectLink}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewProject;
