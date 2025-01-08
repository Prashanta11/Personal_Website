import Header from "@/components/Header";
import AboutSection from "@/components/home/AboutSection";
import HeroSection from "@/components/home/HeroSection";
import Projects from "@/components/home/Projects";
import SkillSlider from "@/components/home/SkillSlider";
import Timeline from "@/components/home/Timeline";

const Home = () => {
  return (
    <>
      <Header />
      <div className="bg-black text-white">
        <HeroSection />
        <SkillSlider />
        <AboutSection />
        <Timeline />
        <Projects />
      </div>
    </>
  );
};

export default Home;
