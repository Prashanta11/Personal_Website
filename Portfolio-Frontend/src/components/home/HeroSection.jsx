import background from "../../assets/background.png";

const HeroSection = () => {
  return (
    <section className="py-20 text-white">
      <div className="grid md:grid-cols-2 mx-auto px-6 container">
        {/* Left Content - Text and Resume Button */}
        <div className="flex flex-col flex-1 justify-center items-center px-7 h-full text-center md:text-left">
          <h1 className="font-bold font-instrumentSans text-6xl text-center md:text-6xl italic leading-tight tracking-widest">
            Hi, I'm Prashanta
          </h1>
          <p className="mt-4 max-w-lg font-light text-sm text-white md:text-xl italic -white">
            A passionate Full-Stack Developer and Cybersecurity Enthusiast
            dedicated to building scalable, secure, and user-friendly solutions.
          </p>
          <a
            href="/resume.pdf" // Replace with the actual resume file path
            download
            className="inline-block bg-slate-200 hover:bg-slate-50 shadow-sm shadow-white mt-8 px-8 py-3 rounded font-semibold text-black"
          >
            Download Resume
          </a>
        </div>

        {/* Right Content - Image */}
        <div className="flex-1 mt-10 md:mt-0">
          <div className="relative overflow-hidden">
            {/* Background Shape */}
            <div className="absolute inset-0 bg-black opacity-30 blur-3xl rounded-full transform scale-125"></div>
            {/* Main Image */}
            <img
              src={background} //  image path
              alt="Prashanta"
              className="mx-auto rounded-lg w-full max-w-md md:max-w-sm"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
