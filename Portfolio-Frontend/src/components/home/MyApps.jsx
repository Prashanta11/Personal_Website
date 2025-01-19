import { get } from "@/api/api";
import { useEffect, useState } from "react";

const MyApps = () => {
  const [apps, setApps] = useState([]);
  useEffect(() => {
    get("softwareApplication/getall").then((response) => {
      setApps(response.SoftwareApplication);
    });
  }, []);

  return (
    <section
      id="application"
      className="border-2 border-gray-300 bg-gray-200 hover:bg-bodyColor shadow-gray-400 shadow-sm mt-6 sm:mt-24 px-4 py-3 rounded-xl"
    >
      <div className="flex flex-col gap-5 sm:gap-8 mx-auto px-4 container">
        <h2 className="font-bold font-instrumentSans text-4xl text-center sm:text-6xl italic tracking-widest">
          My Apps
        </h2>
        <div className="sm:flex max-[500px]:flex-col sm:flex-wrap justify-center max-[500px]:items-center gap-8 sm:gap-20 grid grid-cols-2 sm:pb-8">
          {apps?.map((app, index) => (
            <div
              key={index}
              className="hover:shadow-lg rounded-lg max-[500px]:w-full transform transition-transform overflow-hidden hover:scale-105 size-20"
            >
              <img src={app?.svg?.url} className="w-full h-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MyApps;
