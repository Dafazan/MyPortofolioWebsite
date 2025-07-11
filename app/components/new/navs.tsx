"use client";
import React, { useState, useEffect } from "react";

function NavbaryS() {
  const [isSidebar, setIsSidebar] = useState(false);

  const [linkhover, setLinkhover] = useState(0);

  const [xbutton, setXbutton] = useState(false);
  const handleX = () => {
    // Set xbutton to true after 0.3 seconds
    setTimeout(() => {
      setXbutton(true);
    }, 300);
  };

  const [isMenuHover, setIsMenuHover] = useState(false);
  const [scrollLocation, setScrollLocation] = useState(0);
  const [prevScrollLocation, setPrevScrollLocation] = useState(0);
  const [scrollDirection, setScrollDirection] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollLocation = window.scrollY;
      setScrollLocation(currentScrollLocation);

      // Check if scrollLocation is decreasing
      if (currentScrollLocation < prevScrollLocation) {
        // Scroll location is decreasing
        setScrollDirection("up");
      } else if (currentScrollLocation > prevScrollLocation) {
        // Scroll location is increasing
        setScrollDirection("down");
      }

      // Update prevScrollLocation with currentScrollLocation
      setPrevScrollLocation(currentScrollLocation);
    };

    // Add event listener when component mounts
    window.addEventListener("scroll", handleScroll);

    // Remove event listener when component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollLocation]);

  return (
    <div className="fixed w-full flex justify-center py-3 md:px-16 px-3 z-50">
      <div
        className={`bgblur duration-100 w-full h-16 rounded-sm border border-[#6e604d] flex justify-between items-center px-3 text-[#e0c49c]  `}
      >
        <div className="md:text-4xl text-xl font-thin">
          <a className="hover:text-[#ffe6c2]" href="/#">
            DAFAZAN
          </a>
        </div>
        <div className="flex md:gap-4 gap-3 h-full md:p-2 py-3 md:py-2 items-center font-thin">
          <a className="hover:text-[#ffe6c2]" href="/portofolio">
            WORK
          </a>
          <a className="hover:text-[#ffe6c2]" href="/about">
            ABOUT ME
          </a>

          <a
            className="bg-[#e0c49c] hover:bg-transparent hover:text-[#e0c49c] border border-[#e0c49c] text-[#6e604d] h-full rounded-sm md:px-3 px-2 flex justify-center items-center"
            href="/contacts"
          >
            LET&rsquo;S TALK
          </a>
        </div>
      </div>
    </div>
  );
}

export default NavbaryS;
