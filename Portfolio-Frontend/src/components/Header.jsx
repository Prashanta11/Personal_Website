import { NavLink } from "react-router";
import logo from "../assets/logo.png";

const Header = () => {
  const navItems = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "About",
      link: "/About",
    },
    {
      name: "Timeline",
      link: "/Timeline",
    },
    {
      name: "Experience",
      link: "/Experience",
    },
    {
      name: "Project",
      link: "/Project",
    },
    {
      name: "Application",
      link: "/Application",
    },
    {
      name: "Contact",
      link: "/Contact",
    },
  ];
  return (
    <div className="top-0 z-50 sticky flex justify-between items-center bg-bodyColor py-5 p-5 sm:">
      <nav className="mx-auto">
        <ul className="flex space-x-6 font-semibold text-lg">
          {navItems.map((item, index) => (
            <li key={index}>
              <NavLink
                to={item.link}
                className="text-black hover:text-blue-800"
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Header;
