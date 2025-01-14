import Footer from "@/components/Footer";
import Header from "@/components/Header";
import AboutSection from "@/components/home/AboutSection";
import ExperienceSection from "@/components/home/ExperienceSection";
import HeroSection from "@/components/home/HeroSection";
import MyApps from "@/components/home/MyApps";
import Projects from "@/components/home/Projects";
import SkillSlider from "@/components/home/SkillSlider";
import Timeline from "@/components/home/Timeline";

const Home = () => {
  return (
    <div className="bg-bodyColor px-5 lg:px-20 xl:px-52">
      <Header />
      <div className="bg-bodyColor pb-10 text-black">
        <div
          style={
            {
              // backgroundImage: "url('https://www.picsum.photos/1920/1080')",
            }
          }
          className="relative bg-cover bg-no-repeat bg-center min-h-[67vh] text-black"
        >
          <HeroSection />
          {/* <div className="absolute inset-0 bg-black/10 pointer-events-none"></div> */}
        </div>
        <div className="bg-bodyColor">
          <SkillSlider />
          <AboutSection />
          <Timeline />
          <Projects />
          <ExperienceSection />
          <MyApps />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Home;
