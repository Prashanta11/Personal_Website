const HeroSection = () => {
  return (
    <section className="flex justify-center items-center h-full text-black">
      <div className="grid md:grid-cols-1 mx-auto px-6 container">
        {/* Left Content - Text and Resume Button */}
        <div className="flex flex-col flex-1 justify-center items-center px-7 h-full text-center md:text-left">
          <h1 className="font-bold font-instrumentSans text-6xl text-center md:text-6xl italic leading-tight tracking-widest">
            Hi, I'm Prashanta
          </h1>
          <p className="mt-4 max-w-lg font-semibold text-black text-sm md:text-xl italic -black">
            A passionate Full-Stack Developer and Cybersecurity Enthusiast
            dedicated to building scalable, secure, and user-friendly solutions.
          </p>
          <a
            href="/resume.pdf" // Replace with the actual resume file path
            download
            className="inline-block bg-slate-200 hover:bg-slate-50 shadow-black shadow-sm mt-8 px-8 py-3 rounded font-semibold text-black"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
