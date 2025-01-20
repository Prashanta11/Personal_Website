import { get } from "@/api/api"; // Adjust the import path according to your project structure
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet"; // Use React Helmet for head manipulation

const Timeline = () => {
  const [timelineData, setTimelineData] = useState([]);

  useEffect(() => {
    get("timeline/getall")
      .then((res) => setTimelineData(res.timeline))
      .catch((error) => {
        console.error("Error fetching timeline data:", error);
      });
  }, []);

  return (
    <div id="timeline" className="mt-6 sm:mt-24">
      <Helmet>
        <title>Timeline - Prashanta's Portfolio</title>
        <meta
          name="description"
          content="Explore the professional timeline of Prashanta, showcasing key achievements and milestones."
        />
      </Helmet>
      <div className="border-2 border-gray-300 bg-gray-200 hover:bg-bodyColor shadow-sm px-7 py-5 sm:py-7 rounded-xl">
        <h2 className="pb-5 font-bold font-instrumentSans text-4xl text-center sm:text-6xl italic tracking-widest">
          Timeline
        </h2>
        <ol className="sm:flex items-center" role="list">
          {timelineData?.map((item, index) => (
            <li
              key={index}
              className="relative mb-6 sm:mb-0 w-full"
              role="listitem"
            >
              <div className="flex items-center">
                <div className="z-10 flex justify-center items-center bg-blue-900 rounded-full ring-0 ring-gray-300 sm:ring-8 w-6 h-6 shrink-0">
                  <svg
                    className="w-2.5 h-2.5 text-blue-300"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                  </svg>
                </div>
                <div className="sm:flex hidden bg-gray-300 w-full h-0.5"></div>
              </div>
              <div className="mt-3 sm:pe-8">
                <h3 className="font-semibold text-lg">{item?.title}</h3>
                <time
                  className="block mb-2 font-semibold text-gray-500 text-sm leading-none"
                  dateTime={`${item?.timeline?.from}T00:00:00Z`}
                >
                  {item?.timeline?.from} - {item?.timeline?.to}
                </time>
                <p className="font-normal text-base">{item?.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default Timeline;
