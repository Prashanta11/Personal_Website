import Header from "@/components/Header";
import background from '../assets/background.png';

const Home = () => {
  return (
    <>
      <Header />

       <section className="bg-black text-white py-20">
      <div className="container mx-auto flex flex-col md:flex-row items-center md:items-start justify-between px-6">
        {/* Left Content - Text and Resume Button */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Hi, I'm Prashanta
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-lg py">
            A passionate Full-Stack Developer and Cybersecurity Enthusiast dedicated to building scalable, secure, and user-friendly solutions.
          </p>
          <a
            href="/resume.pdf" // Replace with the actual resume file path
            download
            className="mt-8 inline-block px-8 py-3 bg-white text-blue-800 font-semibold rounded shadow hover:bg-gray-100"
          >
            Download Resume
          </a>
        </div>

        {/* Right Content - Image */}
        <div className="flex-1 mt-10 md:mt-0">
          <div className="relative">
            {/* Background Shape */}
            <div className="absolute inset-0 bg-black rounded-full transform scale-125 blur-3xl opacity-30"></div>
            {/* Main Image */}
            <img
              src={background} //  image path
              alt="Prashanta"
              className="w-full max-w-md mx-auto md:max-w-sm rounded-lg "
            />
          </div>
        </div>
      </div>
    </section>

    </>
  )
}

export default Home