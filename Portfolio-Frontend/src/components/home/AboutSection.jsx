const AboutSection = () => {
  return (
    <>
      <div className="flex gap-7 border-2 border-gray-300 shadow-gray-400 shadow-sm mx-20 px-4 py-3 rounded-xl">
        <div className="border-2 border-gray-300 rounded-lg w-6/12 overflow-hidden">
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
          <p className="pt-4 font-semibold text-2xl text-black text-justify italic leading-6 tracking-widest">
            Hey there! I'm Prashanta, a developer with a deep love for
            technology and problem-solving. I graduated with a BSc in CSIT from
            Tribhuvan University, and I'm passionate about turning ideas into
            impactful solutions. My skills include JavaScript, React.js,
            MongoDB, Node.js, HTML, CSS, Tailwind, Git. Whether I’m designing
            smooth user experiences or building efficient systems, I’m always
            ready to dive in. When I’m not coding, you’ll find me singing and
            spreading good vibes!!
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
