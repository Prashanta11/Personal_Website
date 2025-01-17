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
      <div className="mx-auto px-4 container">
        <h2 className="mb-14 font-bold font-instrumentSans text-6xl text-center italic tracking-widest">
          My Apps
        </h2>
        <div className="flex flex-wrap justify-center gap-20 pb-8">
          {apps?.map((app, index) => (
            <div
              key={index}
              className="hover:shadow-lg rounded-lg transform transition-transform overflow-hidden hover:scale-105 size-20"
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
