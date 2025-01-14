import { Home, User2 } from "lucide-react";
import { useState } from "react";
import { FaCode, FaPhone } from "react-icons/fa";
import { IoIosApps } from "react-icons/io";
import { MdOutlineMenuBook, MdTimeline } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
// import { NavLink } from "react-router";
import { Link } from "react-scroll";
import Sidebar from "./Sidebar";

export const navItems = [
  {
    name: "Home",
    link: "home",
    icon: <Home />,
  },
  {
    name: "About",
    link: "about",
    icon: <User2 />,
  },
  {
    name: "Timeline",
    link: "timeline",
    icon: <MdTimeline />,
  },
  {
    name: "Experience",
    link: "experience",
    icon: <MdOutlineMenuBook />,
  },
  {
    name: "Project",
    link: "project",
    icon: <FaCode />,
  },
  {
    name: "Application",
    link: "application",
    icon: <IoIosApps />,
  },
  {
    name: "Contact",
    link: "contact",
    icon: <FaPhone />,
  },
];
const Header = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <>
      <div className="z-50 sticky lg:flex justify-between items-center hidden bg-bodyColor py-5 p-5">
        <nav className="mx-auto">
          <ul className="flex space-x-6 font-semibold text-lg">
            {navItems.map((item, index) => (
              <li key={index}>
                <Link
                  to={item.link}
                  smooth={true}
                  offset={-window.innerHeight / 4} // Adjust the offset to center the element
                  className="text-black hover:text-blue-800"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="flex lg:hidden">
        <div className="flex justify-between items-center bg-bodyColor py-5 w-full">
          {/* <h1 className="font-bold text-2xl">Portfolio</h1> */}
          <button onClick={() => setSidebarOpen(true)} className="text-2xl">
            <RxHamburgerMenu size={30} />
          </button>
        </div>
      </div>
      {/* sidebar */}
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
    </>
  );
};

export default Header;
