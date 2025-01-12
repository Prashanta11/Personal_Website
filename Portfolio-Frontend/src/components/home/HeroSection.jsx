import { FaLinkedin } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import { BiLogoGmail } from "react-icons/bi";

const HeroSection = () => {
  return (
    <section className="flex justify-center items-center h-full text-black">
      <div className="grid md:grid-cols-1 mx-auto px-6 container">
        {/* Left Content - Text and Resume Button */}
        <div className="flex flex-col flex-1 justify-center items-center px-7 h-full text-center md:text-left">
          <h1 className="font-bold font-instrumentSans text-6xl text-center md:text-6xl italic leading-tight tracking-widest">
            Hi, I'm Prashanta
          </h1>
          <p className="mt-4 max-w-lg font-semibold text-black text-sm md:text-2xl italic -black">
            —a curious mind crafting code by day and melodies by night. Whether
            coding solutions or singing tunes, I’m all about turning passion
            into joy and exploring what’s next!
          </p>
          <a
            href="/resume.pdf" // Replace with the actual resume file path
            download
            className="inline-block bg-slate-200 hover:bg-slate-50 shadow-black shadow-sm mt-8 px-8 py-3 rounded font-semibold text-black"
          >
            Download Resume
          </a>

          <div className="flex gap-5 mt-4">
            <a
              href=""
              target="_blank"
              rel="noreferrer"
              className="flex items-center mt-4 font-semibold text-black text-xl hover:text-blue-800"
            >
              <FaSquareGithub size={30} />
            </a>
            <a
              href="https://www.facebook.com/prashanta.kc.1"
              target="_blank"
              rel="noreferrer"
              className="flex items-center mt-4 font-semibold text-black text-xl hover:text-blue-800"
            >
              <FaLinkedin size={30} />
            </a>
            <a
              href=""
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
