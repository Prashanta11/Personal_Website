import React, { useEffect, useState } from "react";
import { get } from "@/api/api"; // Adjust the import path according to your project structure

const Timeline = () => {
  const [timelineData, setTimelineData] = useState([]);

  useEffect(() => {
    // Call the get function from api.js to fetch timeline data
    get("timeline/getall") // Ensure that this endpoint is correct as per your backend
      .then((res) => setTimelineData(res.timeline)) // Adjust based on your API's response structure
      .catch((error) => {
        console.error("Error fetching timeline data:", error);
      });
  }, []);

  return (
    <div className="mx-10 mt-32">
      <div className="border-2 border-gray-300 shadow-sm mx-10 px-7 py-7 rounded-xl">
        <h2 className="pb-5 font-bold font-instrumentSans text-6xl text-center italic tracking-widest">
          Timeline
        </h2>
        <ol className="sm:flex items-center">
          {timelineData.map((item, index) => (
            <li key={index} className="relative mb-6 sm:mb-0">
              <div className="flex items-center">
                <div className="z-10 flex justify-center items-center bg-blue-900 rounded-full ring-0 ring-gray-300 sm:ring-8 w-6 h-6 shrink-0">
                  <svg
                    className="w-2.5 h-2.5 text-blue-300"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 0C4.477 0 0 4.477 0 10s4.477 10 10 10 10-4.477 10-10S15.523 0 10 0zm0 18a8 8 0 110-16 8 8 0 010 16z" />
                  </svg>
                </div>
                <div className="sm:flex hidden bg-gray-200 w-full h-0.5"></div>
              </div>
              <div className="mt-3 sm:pr-8">
                <h3 className="font-semibold text-gray-900 text-lg">
                  {item.title}
                </h3>
                <time className="block mb-2 font-normal text-gray-400 text-sm leading-none">
                  {item.date}
                </time>
                <p className="font-normal text-base text-gray-500">
                  {item.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default Timeline;
