import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import {
  clearAllProjectErrors,
  getAllProjects,
  resetProjectSlice,
  updateProject,
} from "@/store/slices/projectSlice";
import axios from "axios";
import { Link } from "lucide-react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import SpecialLoadingButton from "./sub-components/SpecialLoadingButton";

const UpdateProject = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [technologies, setTechnologies] = useState("");
  const [stack, setStack] = useState("");
  const [gitRepoLink, setGitRepoLink] = useState("");
  const [deployed, setDeployed] = useState("");
  const [projectLink, setProjectLink] = useState("");
  const [projectBanner, setProjectBanner] = useState("");
  const [projectBannerPreview, setProjectBannerPreview] = useState("");

  const { error, message, loading } = useSelector((state) => state.project);
  const dispatch = useDispatch();
  const { id } = useParams();

  const handleProjectBanner = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setProjectBannerPreview(reader.result);
      setProjectBanner(file);
    };
  };

  useEffect(() => {
    const getProject = async () => {
      await axios
        .get(
          `https://backend-five-neon.vercel.app/api/v1/project/getall${id}`,
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
          setProjectBannerPreview(
            res.data.project.projectBanner && res.data.project.projectBanner.url
          );
        })
        .catch((error) => {
          toast.error(error.response.data.message);
        });
    };
    getProject();

    if (error) {
      toast.error(error);
      dispatch(clearAllProjectErrors());
    }
    if (message) {
      toast.success(message);
      dispatch(resetProjectSlice());
      dispatch(getAllProjects());
    }
  }, [id, message, error]);

  const handleUpdateProject = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("deployed", deployed);
    formData.append("stack", stack);
    formData.append("technologies", technologies);
    formData.append("gitRepoLink", gitRepoLink);
    formData.append("projectLink", projectLink);
    formData.append("projectBanner", projectBanner);
    dispatch(updateProject(id, formData));
  };

  const navigateTo = useNavigate();
  const handleReturnToDashboard = () => {
    navigateTo("/");
  };

  return (
    <>
      <div className="flex justify-center items-center sm:gap-4 mt-7 sm:py-4 min-h-[100vh]">
        <form
          onSubmit={handleUpdateProject}
          className="px-5 pb-5 w-[100%] md:w-[1000px]"
        >
          <div className="space-y-12">
            <div className="border-white/10 pb-12 border-b">
              <div className="flex sm:flex-row flex-col justify-between items-start sm:items-center gap-2">
                <h2 className="font-semibold text-3xl text-white leading-7">
                  UPDATE PROJECT
                </h2>
                <Button
                  className="hover:bg-blue-600 focus:shadow-outline px-4 py-2 rounded font-bold text-white focus:outline-none"
                  onClick={handleReturnToDashboard}
                >
                  Return to Dashboard
                </Button>
              </div>
              <div className="flex flex-col gap-5 mt-10">
                <div className="sm:col-span-4 w-full">
                  <img
                    src={
                      projectBannerPreview
                        ? projectBannerPreview
                        : "/avatarHolder.jpg"
                    }
                    alt="ProjectBanner"
                    className="w-full h-auto"
                  />
                  <div className="relative">
                    <input
                      type="file"
                      onChange={handleProjectBanner}
                      className="mt-4 w-full avatar-update-btn"
                    />
                  </div>
                </div>
                <div className="sm:col-span-4 w-full">
                  <label className="block font-medium text-sm text-white leading-6">
                    Project Title
                  </label>
                  <div className="mt-2">
                    <div className="flex shadow-sm rounded-md ring-1 ring-gray-300 focus-within:ring-2 focus-within:ring-indigo-600 ring-inset focus-within:ring-inset">
                      <input
                        type="text"
                        className="block flex-1 border-0 bg-transparent py-1.5 pl-1 focus:ring-0 text-white placeholder:text-gray-400 sm:text-sm sm:leading-6"
                        placeholder="MERN STACK PORTFOLIO"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
                <div className="sm:col-span-4 w-full">
                  <label className="block font-medium text-sm text-white leading-6">
                    Description
                  </label>
                  <div className="mt-2">
                    <div className="flex shadow-sm rounded-md ring-1 ring-gray-300 focus-within:ring-2 focus-within:ring-indigo-600 ring-inset focus-within:ring-inset">
                      <Textarea
                        placeholder="Feature 1. Feature 2. Feature 3."
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
                <div className="sm:col-span-4 w-full">
                  <label className="block font-medium text-sm text-white leading-6">
                    Technologies Uses In This Project
                  </label>
                  <div className="mt-2">
                    <div className="flex shadow-sm rounded-md ring-1 ring-gray-300 focus-within:ring-2 focus-within:ring-indigo-600 ring-inset focus-within:ring-inset">
                      <Textarea
                        placeholder="HTML, CSS, JAVASCRIPT, REACT"
                        value={technologies}
                        onChange={(e) => setTechnologies(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
                <div className="sm:col-span-4 w-full">
                  <label className="block font-medium text-sm text-white leading-6">
                    Stack
                  </label>
                  <div className="mt-2">
                    <div className="flex shadow-sm rounded-md ring-1 ring-gray-300 focus-within:ring-2 focus-within:ring-indigo-600 ring-inset focus-within:ring-inset">
                      <Select
                        value={stack}
                        onValueChange={(selectedValue) =>
                          setStack(selectedValue)
                        }
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select Project Stack" />
                        </SelectTrigger>
                        <SelectContent className="bg-gray-800">
                          <SelectItem value="Full Stack">Full Stack</SelectItem>
                          <SelectItem value="Mern">MERN</SelectItem>
                          <SelectItem value="Mean">MEAN</SelectItem>
                          <SelectItem value="Next.JS">NEXT.JS</SelectItem>
                          <SelectItem value="React.JS">REACT.JS</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>
                <div className="sm:col-span-4 w-full">
                  <label className="block font-medium text-sm text-white leading-6">
                    Deployed
                  </label>
                  <div className="mt-2">
                    <div className="flex shadow-sm rounded-md ring-1 ring-gray-300 focus-within:ring-2 focus-within:ring-indigo-600 ring-inset focus-within:ring-inset">
                      <Select
                        value={deployed}
                        onValueChange={(selectedValue) =>
                          setDeployed(selectedValue)
                        }
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Is this project deployed?" />
                        </SelectTrigger>
                        <SelectContent className="bg-gray-800">
                          <SelectItem value="Yes">Yes</SelectItem>
                          <SelectItem value="No">No</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>

                <div className="sm:col-span-4 w-full">
                  <label className="block font-medium text-sm text-white leading-6">
                    Github Repository Link
                  </label>
                  <div className="mt-2">
                    <div className="relative flex shadow-sm rounded-md ring-1 ring-gray-300 focus-within:ring-2 focus-within:ring-indigo-600 ring-inset focus-within:ring-inset">
                      <input
                        type="text"
                        className="block flex-1 border-0 bg-transparent py-1.5 pl-8 focus:ring-0 text-white placeholder:text-gray-400 sm:text-sm sm:leading-6"
                        placeholder="Github Repository Link"
                        value={gitRepoLink}
                        onChange={(e) => setGitRepoLink(e.target.value)}
                      />
                      <Link className="top-2 left-1 absolute w-5 h-5" />
                    </div>
                  </div>
                </div>
                <div className="sm:col-span-4 w-full">
                  <label className="block font-medium text-sm text-white leading-6">
                    Project Link
                  </label>
                  <div className="mt-2">
                    <div className="relative flex shadow-sm rounded-md ring-1 ring-gray-300 focus-within:ring-2 focus-within:ring-indigo-600 ring-inset focus-within:ring-inset">
                      <input
                        type="text"
                        className="block flex-1 border-0 bg-transparent py-1.5 pl-8 focus:ring-0 text-white placeholder:text-gray-400 sm:text-sm sm:leading-6"
                        placeholder="Github Repository Link"
                        value={projectLink}
                        onChange={(e) => setProjectLink(e.target.value)}
                      />
                      <Link className="top-2 left-1 absolute w-5 h-5" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-end items-center gap-x-6 mt-6">
            {loading ? (
              <SpecialLoadingButton content={"Updating"} width={"w-52"} />
            ) : (
              <button
                type="submit"
                className="bg-indigo-600 hover:bg-indigo-500 shadow-sm px-3 py-2 rounded-md w-52 font-semibold text-sm text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Update
              </button>
            )}
          </div>
        </form>
      </div>
    </>
  );
};

export default UpdateProject;
