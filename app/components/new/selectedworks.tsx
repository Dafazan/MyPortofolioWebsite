"use client";
import React, { useEffect, useState } from "react";
import CardsportH from "./cardsportH";
import { FlipWordsDemo } from "../acertenity/Titleportfolio";

function Selectedworks() {
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
  const [hoverstate, setHoverstate] = useState(false);

  function hoverinmore() {
    setHoverstate(true);
  }
  function hoverinmorex() {
    setHoverstate(false);
  }
  return (
    <>
      <div className="w-full flex flex-col gap-3 ">
        <div className="w-full flex justify-center opacity-100 z-40">
          <FlipWordsDemo />
        </div>
        <div className="grid grid-cols-1 gap-7 ">
          <div className="h-[55vh] w-full flex gap-7 sticky top-0 ">
            <div
              className={`w-full ${
                scrollLocation >= 1360
                  ? "scale-90"
                  : scrollLocation >= 1750
                  ? "scale-70"
                  : ""
              } duration-300`}
            >
              <CardsportH
                link="www.saptalokadigital.com"
                image="https://cdna.artstation.com/p/assets/images/images/072/923/394/large/dafazan-keyrender1ex.jpg?1708517799"
                title="Morning, Writers!"
                type="3D ILLUSTRATION"
              />
            </div>
            <div
              className={`w-full ${
                scrollLocation >= 1360
                  ? "scale-90"
                  : scrollLocation >= 1750
                  ? "scale-70"
                  : ""
              } duration-300`}
            >
              <CardsportH
                link="www.saptalokadigital.com"
                image="https://cdna.artstation.com/p/assets/images/images/053/506/046/large/dafazan-6.jpg?1662385090"
                title="Honda Civic"
                type="3D ASSETS"
              />
            </div>
          </div>
          <div className="h-[55vh] w-full flex gap-7 sticky top-5 ">
            <div className={`w-full  duration-300`}>
              <CardsportH
                link="www.saptalokadigital.com"
                image="https://firebasestorage.googleapis.com/v0/b/project-insight-fd427.appspot.com/o/DSC02323.JPG?alt=media&token=f4cf98e2-70e1-4ab3-aecf-c0ddc492c5c2"
                title="TELKOM INFRA INVENTORY"
                type="UI/UX REDESIGN"
              />
            </div>
            <div className={`w-full  duration-300`}>
              <CardsportH
                link="www.saptalokadigital.com"
                image="https://firebasestorage.googleapis.com/v0/b/project-insight-fd427.appspot.com/o/DSC02324.JPG?alt=media&token=b1ba1a42-b263-4b84-83fb-a0f9f506315a"
                title="CBL ERP MANUFATURE"
                type="UI/UX DESIGN"
              />
            </div>
          </div>
          <div className="h-[55vh] w-full flex gap-7 sticky top-2 ">
            <CardsportH
              link="www.saptalokadigital.com"
              image="https://firebasestorage.googleapis.com/v0/b/project-insight-fd427.appspot.com/o/DSC02322.JPG?alt=media&token=80ac0f15-e023-40e0-adc3-46a2cceaac5b"
              title="WWTP SIM"
              type="3D VISUALIZER"
            />
            <CardsportH
              link="www.saptalokadigital.com"
              image="https://firebasestorage.googleapis.com/v0/b/project-insight-fd427.appspot.com/o/339486725_198567016243678_3687514765136256031_n.jpg?alt=media&token=3b899f92-3687-4920-9feb-0e895a888be5"
              title="VESPA AR 3D"
              type="UNITY DEV"
            />
          </div>
        </div>
        <div className="h-[20vh]"></div>
        <div className="flex justify-end items-center text-4xl font-normal z-40">
          <a
            href="/portofolio"
            onMouseEnter={hoverinmore}
            onMouseLeave={hoverinmorex}
            className={`flex justify-end items-center ${
              hoverstate == true ? "" : "gap-3"
            } duration-300`}
          >
            <p>SEE MORE</p>
            <div
              className={`${
                hoverstate == true ? "" : "-rotate-45"
              } duration-200`}
            >
              <svg
                className="rotate-180"
                width="100"
                height="100"
                viewBox="0 0 218 218"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M72.6667 171.931C83.7134 178.309 96.2444 181.667 109 181.667C121.756 181.667 134.287 178.309 145.333 171.931C156.38 165.553 165.553 156.38 171.931 145.333C178.309 134.287 181.667 121.756 181.667 109C181.667 96.2443 178.309 83.7134 171.931 72.6667C165.553 61.6199 156.38 52.4466 145.333 46.0688C134.287 39.691 121.756 36.3333 109 36.3333C96.2444 36.3333 83.7134 39.691 72.6667 46.0688"
                  stroke="#E0C49C"
                  stroke-width="5"
                />
                <path
                  d="M18.1667 109L16.2145 107.438L14.9651 109L16.2145 110.562L18.1667 109ZM99.9167 111.5C101.297 111.5 102.417 110.381 102.417 109C102.417 107.619 101.297 106.5 99.9167 106.5V111.5ZM52.5478 62.0216L16.2145 107.438L20.1188 110.562L56.4522 65.1451L52.5478 62.0216ZM16.2145 110.562L52.5478 155.978L56.4522 152.855L20.1188 107.438L16.2145 110.562ZM18.1667 111.5H99.9167V106.5H18.1667V111.5Z"
                  fill="#E0C49C"
                />
              </svg>
            </div>
          </a>
        </div>
      </div>
    </>
  );
}

export default Selectedworks;
