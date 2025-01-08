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
    <div className="flex justify-between items-center bg-black shadow-stone-300/50 shadow-xl py-2 p-5">
      <div>
        <img src={logo} alt="Logo" className="rounded-full size-20" />
      </div>

      <nav className="mx-auto">
        <ul className="flex space-x-6 font-semibold text-lg">
          {navItems.map((item, index) => (
            <li key={index}>
              <NavLink
                to={item.link}
                className="text-gray-200 hover:text-gray-600"
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
