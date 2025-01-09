const experiences = [
  {
    role: "Computer Teacher",
    company: "XYZ School",
    duration: "Jan 2021 - Dec 2022",
    description:
      "Taught computer science basics and programming to high school students.",
  },
  {
    role: "Intern",
    company: "ABC Telecom",
    duration: "June 2020 - Aug 2020",
    description: "Assisted in network troubleshooting and documentation tasks.",
  },
];

const ExperienceSection = () => {
  return (
    <section className="border-2 border-gray-300 shadow-gray-400 shadow-sm mx-10 mt-32 px-4 py-3 rounded-xl">
      <div className="mx-auto px-4 container">
        <h2 className="mb-8 font-bold font-instrumentSans text-6xl text-center italic tracking-widest">
          Experience
        </h2>
        <div className="gap-8 grid sm:grid-cols-1 md:grid-cols-2">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-cardColor p-6 rounded-lg">
              <h3 className="font-light text-2xl italic tracking-widest">
                {exp.role}
              </h3>
              <div className="font-light text-xl italic">
                <p className="font-medium text-gray-400">{exp.company}</p>
                <p className="text-sm">{exp.duration}</p>
                <p className="mt-4">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
