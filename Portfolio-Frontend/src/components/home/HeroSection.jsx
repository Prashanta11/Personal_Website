import { get } from "@/api/api";
import { useEffect, useState } from "react";
import { BiLogoGmail } from "react-icons/bi";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import { ReactTyped } from "react-typed";

const HeroSection = () => {
  const [userData, setUserdata] = useState({});
  useEffect(() => {
    get("user/me/portfolio").then((res) => setUserdata(res.user));
  }, []);

  return (
    <section
      id="home"
      className="flex justify-center items-center bg-gray-200 hover:bg-bodyColor h-full text-black"
    >
      <div className="grid md:grid-cols-1 mx-auto px-6 container">
        {/* Left Content - Text and Resume Button */}
        <div className="flex flex-col flex-1 justify-center items-center px-7 h-full text-center md:text-left">
          <div className="relative mt-24 md:mt-32 w-full lg:h-[3rem]">
            <h1 className="absolute inset-0 flex justify-center items-center w-full font-instrumentSans text-2xl text-center md:text-6xl leading-tight">
              <ReactTyped
                className="font-semibold *:!font-instrumentSans italic tracking-wider"
                showCursor={false}
                strings={["Hi, I'm Prashanta"]}
                typeSpeed={40}
              />
            </h1>
          </div>
          <p className="mt-4 max-w-lg font-medium text-black text-sm md:text-xl italic">
            —a curious mind crafting code by day and melodies by night. Whether
            coding solutions or singing tunes, I’m all about turning passion
            into joy and exploring what’s next!
          </p>
          <a
            href={userData?.resume?.url} // Replace with the actual resume file path
            download
            target="_blank"
            className="inline-block bg-slate-200 hover:bg-slate-50 shadow-black shadow-sm mt-8 px-8 py-3 rounded font-semibold text-black"
          >
            Download Resume
          </a>

          <div className="flex gap-5 mt-4">
            <a
              href={userData?.githubURL} // Replace with the actual GitHub profile link"
              target="_blank"
              rel="noreferrer"
              className="flex items-center mt-4 font-semibold text-black text-xl hover:text-blue-800"
            >
              <FaSquareGithub size={30} />
            </a>
            <a
              href={userData?.linkedinURL} // Replace with the actual LinkedIn profile link
              target="_blank"
              rel="noreferrer"
              className="flex items-center mt-4 font-semibold text-black text-xl hover:text-blue-800"
            >
              <FaLinkedin size={30} />
            </a>
            <a
              href={`mailto:${userData?.email}`} // Replace with the actual email address
              target="_blank"
              rel="noreferrer"
              className="flex items-center mt-4 font-semibold text-black text-xl hover:text-blue-800"
            >
              <BiLogoGmail size={30} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
