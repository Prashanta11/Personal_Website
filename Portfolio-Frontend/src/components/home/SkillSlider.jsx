import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";

const SkillSlider = () => {
  return (
    <div className="py-10">
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
        }}
        extensions={{ AutoScroll }}
      >
        <SplideSlide>
          <div className="flex justify-center items-center border-2 border-gray-300 rounded-xl overflow-hidden">
            <div className="h-20" />
          </div>
        </SplideSlide>
      </Splide>
    </div>
  );
};

export default SkillSlider;
