import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import { clearAllProjectErrors } from "@/store/slices/projectSlice";
import { clearAllSkillErrors } from "@/store/slices/skillSlice";
import {
  clearAllSoftwareAppErrors,
  deleteSoftwareApplication,
  getAllSoftwareApplications,
  resetSoftwareApplicationSlice,
} from "@/store/slices/softwareApplicationSlice";
import { clearAllTimelineErrors } from "@/store/slices/timelineSlice";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import SpecialLoadingButton from "./SpecialLoadingButton";

const Dashboard = () => {
  const navigateTo = useNavigate();
  const gotoManageSkill = () => {
    navigateTo("/manage/skill");
  };
  const gotoManageTimeline = () => {
    navigateTo("/manage/timeline");
  };
  const gotoManageExperience = () => {
    navigateTo("/manage/experience");
  };
  const gotoManageProjects = () => {
    navigateTo("/manage/projects");
  };

  const { user } = useSelector((state) => state.user);
  const {
    skills,
    loading: skillLoading,
    error: skillError,
    message: skillMessage,
  } = useSelector((state) => state.skill);

  const {
    softwareApplications,
    loading: appLoading,
    error: appError,
    message: appMessage,
  } = useSelector((state) => state.softwareApplications);
  console.log(softwareApplications);
  const {
    timeline,
    loading: timelineLoading,
    error: timelineError,
    message: timelineMessage,
  } = useSelector((state) => state.timeline);

  const {
    experience,
    loading: experienceLoading,
    error: experienceError,
    message: experienceMessage,
  } = useSelector((state) => state.experience);

  const { projects, error: projectError } = useSelector(
    (state) => state.project
  );

  const [appId, setAppId] = useState(null);
  const handleDeleteSoftwareApp = (id) => {
    setAppId(id);
    dispatch(deleteSoftwareApplication(id));
  };

  const dispatch = useDispatch();
  useEffect(() => {
    if (skillError) {
      toast.error(skillError);
      dispatch(clearAllSkillErrors());
    }
    if (appError) {
      toast.error(appError);
      dispatch(clearAllSoftwareAppErrors());
    }
    if (projectError) {
      toast.error(projectError);
      dispatch(clearAllProjectErrors());
    }
    if (appMessage) {
      toast.success(appMessage);
      setAppId(null);
      dispatch(resetSoftwareApplicationSlice());
      dispatch(getAllSoftwareApplications());
    }
    if (timelineError) {
      toast.error(timelineError);
      dispatch(clearAllTimelineErrors());
    }
  }, [
    dispatch,
    skillLoading,
    skillError,
    skillMessage,
    appLoading,
    appError,
    appMessage,
    timelineError,
    timelineLoading,
    timelineMessage,
  ]);

  return (
    <>
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
        <main className="flex-1 items-start gap-4 md:gap-8 grid lg:grid-cols-2 xl:grid-cols-2 sm:px-6 sm:py-0 p-4">
          <div className="items-start gap-4 md:gap-8 grid lg:col-span-2 auto-rows-max">
            <div className="gap-4 grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
              <Card className="sm:col-span-2">
                <CardHeader className="pb-3">
                  <CardDescription className="max-w-lg text-balance leading-relaxed">
                    {user.aboutMe}
                  </CardDescription>
                </CardHeader>
                <CardFooter>
                  <Button className="hover:bg-blue-600 focus:shadow-outline px-4 py-2 rounded font-bold text-white focus:outline-none">
                    Visit Portfolio
                  </Button>
                </CardFooter>
              </Card>
              <Card className="flex flex-col justify-center">
                <CardHeader className="pb-2">
                  <CardTitle>Projects Completed</CardTitle>
                  <CardTitle className="text-6xl">
                    {projects && projects.length}
                  </CardTitle>
                </CardHeader>
                <CardFooter>
                  <Button
                    className="hover:bg-blue-600 focus:shadow-outline px-4 py-2 rounded font-bold text-white focus:outline-none"
                    onClick={gotoManageProjects}
                  >
                    Manage Projects
                  </Button>
                </CardFooter>
              </Card>

              <Card className="flex flex-col justify-center">
                <CardHeader className="pb-2">
                  <CardTitle>Skills</CardTitle>
                  <CardTitle className="text-6xl">
                    {skills && skills.length}
                  </CardTitle>
                </CardHeader>
                <CardFooter>
                  <Button
                    className="hover:bg-blue-600 focus:shadow-outline px-4 py-2 rounded font-bold text-white focus:outline-none"
                    onClick={gotoManageSkill}
                  >
                    Manage Skill
                  </Button>
                </CardFooter>
              </Card>
            </div>
            <Tabs>
              <TabsContent>
                <Card>
                  <CardHeader className="px-7">
                    <CardTitle>Projects</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Title</TableHead>
                          <TableHead className="hidden md:table-cell">
                            Stack
                          </TableHead>
                          <TableHead className="hidden md:table-cell">
                            Deployed
                          </TableHead>
                          <TableHead className="md:table-cell">
                            <span className="pl-4">Update</span>
                          </TableHead>
                          <TableHead className="text-right">
                            <span className="pr-4">Visit</span>
                          </TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {projects && projects.length > 0 ? (
                          projects.map((element) => {
                            return (
                              <TableRow className="bg-accent" key={element._id}>
                                <TableCell>
                                  <div className="font-medium">
                                    {element.title}
                                  </div>
                                </TableCell>
                                <TableCell className="hidden md:table-cell">
                                  {element.stack}
                                </TableCell>
                                <TableCell className="hidden md:table-cell">
                                  <Badge
                                    className="text-xs"
                                    variant="secondary"
                                  >
                                    {element.deployed}
                                  </Badge>
                                </TableCell>
                                <TableCell className="md:table-cell">
                                  <Link to={`/update/project/${element._id}`}>
                                    <Button className="hover:bg-blue-600 focus:shadow-outline px-4 py-2 rounded font-bold text-white focus:outline-none">
                                      Update
                                    </Button>
                                  </Link>
                                </TableCell>
                                <TableCell className="text-right">
                                  <Link
                                    to={element.projectLink}
                                    target="_blank"
                                  >
                                    <Button className="hover:bg-blue-600 focus:shadow-outline px-4 py-2 rounded font-bold text-white focus:outline-none">
                                      Visit
                                    </Button>
                                  </Link>
                                </TableCell>
                              </TableRow>
                            );
                          })
                        ) : (
                          <TableRow>
                            <TableCell className="text-3xl overflow-y-hidden">
                              You have not added any project.
                            </TableCell>
                          </TableRow>
                        )}
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>

            <Tabs>
              <TabsContent>
                <Card>
                  <CardHeader className="gap-3 px-7">
                    <CardTitle>Skills</CardTitle>
                  </CardHeader>
                  <CardContent className="gap-4 grid sm:grid-cols-2">
                    {skills && skills.length > 0 ? (
                      skills.map((element) => {
                        return (
                          <Card key={element._id}>
                            <CardHeader>{element.title}</CardHeader>
                            <CardFooter>
                              <Progress
                                className="bg-white"
                                value={element.proficiency}
                              />
                            </CardFooter>
                          </Card>
                        );
                      })
                    ) : (
                      <p className="text-3xl">You have not added any skill.</p>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>

            <Tabs>
              <TabsContent className="gap-4 grid min-[1050px]:grid-cols-2">
                <Card>
                  <CardHeader className="px-7">
                    <CardTitle>Software Applications</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Name</TableHead>
                          <TableHead className="md:table-cell">Icon</TableHead>
                          <TableHead className="text-center md:table-cell">
                            Action
                          </TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {softwareApplications &&
                        softwareApplications.length > 0 ? (
                          softwareApplications.map((element) => {
                            // console.log(element, "element");
                            return (
                              <TableRow className="bg-accent" key={element._id}>
                                <TableCell className="font-medium">
                                  {element.name}
                                </TableCell>
                                <TableCell className="md:table-cell">
                                  <img
                                    className="w-7 h-7"
                                    src={element.svg && element.svg.url}
                                    alt={element.name}
                                  />
                                </TableCell>
                                <TableCell className="text-center md:table-cell">
                                  {appLoading && appId === element._id ? (
                                    <SpecialLoadingButton
                                      content={"Deleting"}
                                      width={"w-fit"}
                                    />
                                  ) : (
                                    <Button
                                      className="hover:bg-red-600 focus:shadow-outline px-4 py-2 rounded font-bold text-white focus:outline-none"
                                      onClick={() =>
                                        handleDeleteSoftwareApp(element._id)
                                      }
                                    >
                                      Delete
                                    </Button>
                                  )}
                                </TableCell>
                              </TableRow>
                            );
                          })
                        ) : (
                          <TableRow>
                            <TableCell className="text-3xl overflow-y-hidden">
                              You have not added any Applications.
                            </TableCell>
                          </TableRow>
                        )}
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="flex flex-row justify-between items-center px-7">
                    <CardTitle>Experience</CardTitle>
                    <Button
                      className="hover:bg-blue-600 focus:shadow-outline px-4 py-2 rounded font-bold text-white focus:outline-none"
                      onClick={gotoManageExperience}
                    >
                      Manage Experience
                    </Button>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Title</TableHead>
                          <TableHead>Description</TableHead>
                          <TableHead className="md:table-cell">From</TableHead>
                          <TableHead className="text-right md:table-cell">
                            To
                          </TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {experience && experience.length > 0 ? (
                          experience.map((element) => {
                            return (
                              <TableRow className="bg-accent" key={element._id}>
                                <TableCell className="font-medium">
                                  {element.title}
                                </TableCell>
                                <TableCell className="font-medium">
                                  {element.description}
                                </TableCell>
                                <TableCell className="md:table-cell">
                                  {element.date.from}
                                </TableCell>
                                <TableCell className="text-right md:table-cell">
                                  {element.date.to}
                                </TableCell>
                              </TableRow>
                            );
                          })
                        ) : (
                          <TableRow>
                            <TableCell className="text-3xl overflow-y-hidden">
                              You have not added any experience.
                            </TableCell>
                          </TableRow>
                        )}
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row justify-between items-center px-7">
                    <CardTitle>Timeline</CardTitle>
                    <Button
                      className="hover:bg-blue-600 focus:shadow-outline px-4 py-2 rounded font-bold text-white focus:outline-none"
                      onClick={gotoManageTimeline}
                    >
                      Manage Timeline
                    </Button>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Title</TableHead>
                          <TableHead>Description</TableHead>
                          <TableHead className="md:table-cell">From</TableHead>
                          <TableHead className="text-right md:table-cell">
                            To
                          </TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {timeline && timeline.length > 0 ? (
                          timeline.map((element) => {
                            return (
                              <TableRow className="bg-accent" key={element._id}>
                                <TableCell className="font-medium">
                                  {element.title}
                                </TableCell>
                                <TableCell className="font-medium">
                                  {element.description}
                                </TableCell>
                                <TableCell className="md:table-cell">
                                  {element.timeline.from}
                                </TableCell>
                                <TableCell className="text-right md:table-cell">
                                  {element.timeline.to}
                                </TableCell>
                              </TableRow>
                            );
                          })
                        ) : (
                          <TableRow>
                            <TableCell className="text-3xl overflow-y-hidden">
                              You have not added any timeline.
                            </TableCell>
                          </TableRow>
                        )}
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </main>
      </div>
    </>
  );
};

export default Dashboard;
