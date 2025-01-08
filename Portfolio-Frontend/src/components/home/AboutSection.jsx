const AboutSection = () => {
  return (
    <>
      <div className="flex gap-7 border-2 border-gray-600 shadow-gray-400 shadow-sm mx-10 px-4 py-3 rounded-xl">
        <div className="border-2 border-gray-600 rounded-lg w-6/12 overflow-hidden">
          <img
            src="https://www.picsum.photos/800"
            alt="Prashanta"
            className="rounded-lg w-full h-full max-h-96"
          />
        </div>
        <div className="flex flex-col justify-between py-4 w-full">
          <h1 className="pb-6 h-max font-bold font-instrumentSans text-6xl text-center italic tracking-widest overflow-y-hidden">
            About Me
          </h1>
          <p className="pt-4 font-light text-gray-300 text-justify italic leading-6">
            Hi there! I'm Prashanta, a passionate and dedicated full-stack
            developer with a strong foundation in computer science and
            information technology. I hold a BSc in CSIT from Tribhuvan
            University, and my journey in the tech world has been driven by a
            deep love for problem-solving, technology, and creating impactful
            solutions. My skills include a versatile stack of JavaScript,
            React.js, MongoDB, Node.js, HTML, CSS, Tailwind, Git, and Postman.
            Whether it's designing intuitive user interfaces or building
            efficient backend systems, I thrive on turning ideas into functional
            and visually appealing web applications.
          </p>

          <div className="flex justify-around pt-7">
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
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutSection;
