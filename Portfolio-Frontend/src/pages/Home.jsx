import Footer from "@/components/Footer";
import Header from "@/components/Header";
import AboutSection from "@/components/home/AboutSection";
import ExperienceSection from "@/components/home/ExperienceSection";
import HeroSection from "@/components/home/HeroSection";
import MyApps from "@/components/home/MyApps";
import Projects from "@/components/home/Projects";
import Scrollup from "@/components/home/Scrollup";
import SkillSlider from "@/components/home/SkillSlider";
import Timeline from "@/components/home/Timeline";
import { Helmet } from "react-helmet-async"; // Import Helmet for dynamic meta tags

const Home = () => {
  return (
    <>
      {/* Helmet for dynamic meta tags */}
      <Helmet>
        <title>Prashanta Deuja - Full-stack Developer Portfolio</title>
        <meta
          name="description"
          content="Portfolio website of Prashanta Deuja, showcasing skills, projects, and professional journey."
        />
        <meta
          name="keywords"
          content="Prashanta Deuja, Full-stack Developer, React.js, Node.js, Web Development, Cybersecurity"
        />
        <meta
          property="og:title"
          content="Prashanta Deuja - Full-stack Developer Portfolio"
        />
        <meta
          property="og:description"
          content="Explore Prashanta Deuja's full-stack projects and professional journey."
        />
        <meta property="og:image" content="/images/preview.jpg" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Prashanta Deuja - Full-stack Developer Portfolio"
        />
        <meta
          name="twitter:description"
          content="Portfolio website of Prashanta Deuja, showcasing skills, projects, and professional journey."
        />
        <meta name="twitter:image" content="/images/preview.jpg" />
      </Helmet>

      <div className="bg-bodyColor px-5 lg:px-20 xl:px-52">
        <Header />
        <Scrollup />
        <div className="bg-bodyColor pb-10 text-black">
          <div
            style={
              {
                // backgroundImage: "url('https://www.picsum.photos/1920/1080')",
              }
            }
            className="relative max-[500px]:flex max-[500px]:justify-center max-[500px]:items-center bg-cover bg-no-repeat bg-center min-h-[67vh] text-black"
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
    </>
  );
};

export default Home;
