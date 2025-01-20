import React, { useState, useEffect } from "react";
import { IoArrowUpCircleOutline } from "react-icons/io5";

// Throttling function to limit the number of times handleScroll is called
const throttle = (func, delay) => {
  let lastCall = 0;
  return (...args) => {
    const now = new Date().getTime();
    if (now - lastCall < delay) return;
    lastCall = now;
    return func(...args);
  };
};

const ScrollUp = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = throttle(() => {
    if (window.scrollY > 200) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }, 200); // Throttle the scroll event to every 200ms

  const handleScrollUp = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return (
    isVisible && (
      <button
        onClick={handleScrollUp}
        aria-label="Scroll to top"
        className="right-5 bottom-5 z-50 fixed text-5xl text-gray-500 hover:text-gray-700 cursor-pointer"
      >
        <IoArrowUpCircleOutline />
      </button>
    )
  );
};

export default ScrollUp;
