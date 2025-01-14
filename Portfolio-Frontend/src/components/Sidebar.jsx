import { X } from "lucide-react";
import { useRef } from "react";
import { createPortal } from "react-dom";
import { Link } from "react-scroll";
import { navItems } from "./Header";
const Sidebar = ({ isOpen, onClose }) => {
  const sidebarRef = useRef(null);
  return createPortal(
    <div
      style={{ display: isOpen ? "block" : "none" }}
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
      className="z-50 fixed inset-0 lg:hidden bg-white/20 backdrop-blur-sm"
    >
      <nav
        ref={sidebarRef}
        style={{ transform: isOpen ? "translateX(0)" : "translateX(-100%)" }}
        className="flex flex-col items-center bg-bodyColor shadow-2xl shadow-white pt-2 w-1/2 h-full transition-all"
      >
        <div className="flex mb-4 w-full">
          <button onClick={onClose} className="mr-2 ml-auto text-2xl">
            <X size={30} />
          </button>
        </div>
        <ul className="flex flex-col space-y-6 font-semibold text-lg">
          {navItems.map((item, index) => (
            <li key={index}>
              <Link
                onClick={onClose}
                to={item.link}
                smooth={true}
                offset={-30} // Adjust the offset to center the element
                className="flex items-center gap-4 text-black hover:text-blue-800"
              >
                {item.icon}
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>,
    document.body
  );
};

export default Sidebar;
