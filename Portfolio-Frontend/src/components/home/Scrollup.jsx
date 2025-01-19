import React, { useState, useEffect } from "react";
import { IoArrowUpCircleOutline } from "react-icons/io5";

const ScrollUp = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const handleScrollUp = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    isVisible && (
      <button
        onClick={handleScrollUp}
        className="right-5 bottom-5 z-50 fixed text-5xl text-gray-500 hover:text-gray-700 cursor-pointer"
      >
        <IoArrowUpCircleOutline />
      </button>
    )
  );
};

export default ScrollUp;
