import { get } from "@/api/api";
import { useEffect, useState } from "react";

// const experiences = [
//   {
//     role: "Computer Teacher",
//     company: "XYZ School",
//     duration: "Jan 2021 - Dec 2022",
//     description:
//       "Taught computer science basics and programming to high school students.",
//   },
//   {
//     role: "Intern",
//     company: "ABC Telecom",
//     duration: "June 2020 - Aug 2020",
//     description: "Assisted in network troubleshooting and documentation tasks.",
//   },
// ];

const ExperienceSection = () => {
  const [experiencesData, setExperienceData] = useState([]);
  useEffect(() => {
    get("experience/getall").then((res) => setExperienceData(res.experience));
  }, []);
  console.log(experiencesData);

  return (
    <section
      id="experience"
      className="border-2 border-gray-300 bg-gray-200 hover:bg-bodyColor shadow-gray-400 shadow-sm mt-6 sm:mt-24 px-4 py-3 rounded-xl"
    >
      <div className="flex flex-col gap-5 sm:gap-8 mx-auto container">
        <h2 className="font-bold font-instrumentSans text-4xl text-center sm:text-6xl italic tracking-widest">
          Experience
        </h2>
        <div className="gap-5 sm:gap-8 grid grid-cols-1 md:grid-cols-2">
          {experiencesData?.length > 0 &&
            experiencesData?.map((exp, index) => (
              <div
                key={index}
                className="bg-cardColor p-4 md:p-6 rounded-lg w-full"
              >
                <h3 className="pb-2 font-inter font-semibold text-xl italic sm:tracking-widest">
                  {exp.title}
                </h3>
                <div className="text-xl italic">
                  <p className="text-gray-800">{exp?.description} </p>
                  <p className="text-sm">{exp.duration}</p>
                  <p className="mt-4 font-semibold">
                    {exp?.date?.from} - {exp?.date?.to}
                  </p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
