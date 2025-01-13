import { get } from "@/api/api";
import animatedImage from "@/assets/animatedIcon.svg";
import { useEffect, useState } from "react";

const AboutSection = () => {
  const [userData, setUserdata] = useState({});
  useEffect(() => {
    get("user/me/portfolio").then((res) => setUserdata(res.user));
  }, []);

  return (
    <>
      <div className="gap-7 border-2 border-gray-300 grid grid-cols-2 bg-gray-200 hover:bg-bodyColor shadow-gray-400 shadow-sm px-3 py-3 rounded-xl h-full">
        <div className="border-2 border-gray-300 rounded-lg h-full overflow-hidden grow">
          <img
            src="https://www.picsum.photos/800"
            alt="Prashanta"
            className="rounded-lg w-full h-full"
          />
        </div>
        <div className="flex flex-col justify-center py-8 w-full">
          <h1 className="relative pb-6 pl-14 w-max h-max font-bold font-instrumentSans text-6xl text-center italic tracking-widest">
            <img
              src={animatedImage}
              alt="animatedIcon"
              className="inline-block -top-1/2 -left-0 absolute w-16 h-auto rotate-12"
            />
            About Me
          </h1>
          <p className="pt-4 font-semibold text-gray-600 text-justify text-xl italic leading-6 tracking-widest">
            {userData?.aboutMe}
            {/* 
            Hey there! I'm Prashanta, a developer with a deep love for
            technology and problem-solving. I graduated with a BSc in CSIT from
            Tribhuvan University, and I'm passionate about turning ideas into
            impactful solutions. My skills include JavaScript, React.js,
            MongoDB, Node.js, HTML, CSS, Tailwind, Git. Whether I’m designing
            smooth user experiences or building efficient systems, I’m always
            ready to dive in. When I’m not coding, you’ll find me singing and
            spreading good vibes!!
             */}
          </p>

          {/* <div className="flex justify-around pt-7">
            <div className="text-center">
              <h1 className="font-medium text-6xl">20+</h1>
              <p className="italic">Projects Completed</p>
            </div>
            <div className="text-center">
              <h1 className="font-medium text-6xl">20+</h1>
              <p className="italic">Projects Completed</p>
            </div>
            <div className="text-center">
              <h1 className="font-medium text-6xl">20+</h1>
              <p className="italic">Projects Completed</p>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default AboutSection;
