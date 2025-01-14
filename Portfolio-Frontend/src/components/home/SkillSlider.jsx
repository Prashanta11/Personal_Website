import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import { useEffect, useState } from "react";
import { get } from "../../api/api";

const SkillSlider = () => {
  const [skills, setSkills] = useState([]);
  useEffect(() => {
    get("skill/getall").then((res) => setSkills(res.skill));
  }, []);
  console.log(skills);

  return (
    <div id="skills" className="py-10">
      <Splide
        options={{
          type: "loop",
          perPage: 6,
          perMove: 1,
          gap: "1rem",
          autoScroll: {
            speed: 1,
          },
          autoplay: false,
          pauseOnHover: false,
          arrows: false,
          drag: "free",
          pagination: false,
        }}
        extensions={{ AutoScroll }}
      >
        {skills?.map((skill, index) => (
          <SplideSlide
            className="flex flex-col justify-center items-center bg-gray-200 hover:bg-bodyColor min-w-32"
            key={index}
          >
            <img
              src={skill.svg?.url}
              alt={skill.title}
              className="object-contain size-20"
            />
            <p className="text-center">{skill.title}</p>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export default SkillSlider;
