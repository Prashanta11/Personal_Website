import { Home, User2 } from "lucide-react";
import { useMemo, useState } from "react";
import { FaCode, FaPhone } from "react-icons/fa";
import { IoIosApps } from "react-icons/io";
import { MdOutlineMenuBook, MdTimeline } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
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

  const memoizedNavItems = useMemo(() => navItems, []);

  return (
    <>
      <div className="z-50 sticky lg:flex justify-around items-center hidden bg-bodyColor p-5">
        <div className="border-2 border-gray-300 bg-gray-200 hover:bg-bodyColor shadow-gray-400 shadow-sm px-4 py-3 rounded-xl font-instrumentSans font-semibold italic tracking-wider">
          PD
        </div>
        <nav>
          <ul className="flex space-x-6 text-lg">
            {memoizedNavItems.map((item, index) => (
              <li key={index}>
                <Link
                  to={item.link}
                  smooth={true}
                  offset={-window.innerHeight / 4} // Adjust the offset to center the element
                  className="font-[500] font-instrumentSans text-black hover:text-blue-800 italic tracking-wider cursor-pointer"
                  aria-label={`Navigate to ${item.name}`}
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
          <button
            onClick={() => setSidebarOpen(true)}
            className="text-2xl"
            aria-label="Open navigation menu"
          >
            <RxHamburgerMenu size={30} />
          </button>
        </div>
      </div>

      {/* Sidebar */}
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
    </>
  );
};

export default Header;
