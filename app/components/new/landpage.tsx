"use client";
import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { isMobile } from "react-device-detect";
import CursorFollowBox from "./cursorfollowbox";

function Landpage() {
  const [hoverstate, setHoverstate] = useState(0);

  const targetRef = useRef<HTMLDivElement>(null);

  // Handler for the button click to scroll to the target div
  const handleScroll = () => {
    if (targetRef.current) {
      targetRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="w-full h-full relative nocursor">
      <div className="vignette w-screen h-screen absolute">
        {hoverstate == 1 ? (
          <>
            <img
              className="w-full h-full object-cover opacity-50"
              src="/des.png"
              alt="no"
            />
          </>
        ) : hoverstate == 2 ? (
          <>
            <img
              className="w-full h-full object-cover opacity-50"
              src="/dev.png"
              alt="no"
            />
          </>
        ) : (
          <>
            <img
              className="w-full h-full object-cover opacity-50"
              src="/id.png"
              alt="no"
            />
          </>
        )}
      </div>
      <div className=" overflow-x-hidden  text-[#e0c49c]  ">
        <div className="w-full h-full  md:px-16 px-3 py-10">
          <CursorFollowBox />
          {isClient ? (
            <>
              {isMobile ? (
                <>
                  <div className="w-full h-[90vh] mt-16 flex flex-col justify-between z-40 items-center">
                    <div className="w-full flex flex-col md:items-start items-start justify-center">
                      <h1 className="text-[70px] font-semibold">Designer</h1>

                      <a className="font-thin text-2xl" href="/portofolio/uiux">
                        UI/UX Designer
                      </a>
                      <a className="font-thin text-2xl" href="/portofolio/">
                        3D Generalist
                      </a>
                    </div>

                    <div className="w-full flex flex-col md:items-end items-start justify-center">
                      <h1 className="text-[70px] font-semibold">Developer</h1>

                      <a
                        className="font-thin text-2xl"
                        href="/portofolio/webdev"
                      >
                        Web Developer
                      </a>
                      <a
                        className="font-thin text-2xl"
                        href="/portofolio/gamedev"
                      >
                        Unity Developer
                      </a>
                    </div>
                    <div className="px-5 pb-20 h-full flex flex-col justify-end">
                      <div onClick={handleScroll}>
                        <svg
                          width="30"
                          height="60"
                          viewBox="0 0 95 150"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M47.875 146.292L46.3132 148.244L47.875 149.493L49.4367 148.244L47.875 146.292ZM50.375 3C50.375 1.61929 49.2557 0.499998 47.875 0.499998C46.4943 0.499998 45.375 1.61929 45.375 3L50.375 3ZM0.896574 111.91L46.3132 148.244L49.4367 144.339L4.02005 108.006L0.896574 111.91ZM49.4367 148.244L94.8534 111.91L91.7299 108.006L46.3132 144.339L49.4367 148.244ZM50.375 146.292L50.375 3L45.375 3L45.375 146.292L50.375 146.292Z"
                            fill="#E0C49C"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="w-full h-[90vh]  flex md:flex-row flex-col justify-between items-center">
                    <div
                      onMouseEnter={() => setHoverstate(1)}
                      onMouseLeave={() => setHoverstate(0)}
                      className="h-full w-3/6 z-40 flex flex-col md:items-start items-center justify-center"
                    >
                      <motion.h1
                        animate={hoverstate === 1 ? { y: -50 } : { y: 50 }}
                        className="text-[90px] font-semibold"
                      >
                        Designer
                      </motion.h1>

                      <motion.a
                        animate={
                          hoverstate === 1 ? { y: -50, x: 0 } : { x: "-100vw" }
                        }
                        initial={{ x: "-100vw" }}
                        className="font-thin text-3xl hover:text-[#ffe6c2] hover:font-regular"
                        href="/portofolio/uiux"
                      >
                        UI/UX Designer
                      </motion.a>
                      <motion.a
                        animate={
                          hoverstate === 1 ? { y: -50, x: 0 } : { x: "-100vw" }
                        }
                        initial={{ x: "-100vw" }}
                        transition={{ delay: 0.02, duration: 0.5 }}
                        className="font-thin text-3xl hover:text-[#ffe6c2] hover:font-regular"
                        href="/portofolio/"
                      >
                        3D Generalist
                      </motion.a>
                      <div
                        className={`${
                          hoverstate == 1 ? "-rotate-45" : ""
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
                    </div>
                    <div className="px-5 h-full flex flex-col justify-end">
                      <div
                        onMouseEnter={() => setHoverstate(3)}
                        onMouseLeave={() => setHoverstate(0)}
                        onClick={handleScroll}
                        className="z-40"
                      >
                        <motion.svg
                          animate={hoverstate === 3 ? { y: 5 } : { y: -10 }}
                          width="30"
                          height="60"
                          viewBox="0 0 95 150"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M47.875 146.292L46.3132 148.244L47.875 149.493L49.4367 148.244L47.875 146.292ZM50.375 3C50.375 1.61929 49.2557 0.499998 47.875 0.499998C46.4943 0.499998 45.375 1.61929 45.375 3L50.375 3ZM0.896574 111.91L46.3132 148.244L49.4367 144.339L4.02005 108.006L0.896574 111.91ZM49.4367 148.244L94.8534 111.91L91.7299 108.006L46.3132 144.339L49.4367 148.244ZM50.375 146.292L50.375 3L45.375 3L45.375 146.292L50.375 146.292Z"
                            fill="#E0C49C"
                          />
                        </motion.svg>
                      </div>
                    </div>
                    <div
                      onMouseEnter={() => setHoverstate(2)}
                      onMouseLeave={() => setHoverstate(0)}
                      className="h-full w-3/6 z-40 flex flex-col md:items-end items-center justify-center"
                    >
                      <motion.h1
                        animate={hoverstate === 2 ? { y: -50 } : { y: 50 }}
                        className="text-[90px] font-semibold"
                      >
                        Developer
                      </motion.h1>

                      <motion.a
                        animate={
                          hoverstate === 2 ? { y: -50, x: 0 } : { x: "100vw" }
                        }
                        initial={{ x: "100vw" }}
                        className="font-thin text-3xl hover:text-[#ffe6c2] hover:font-regular"
                        href="/portofolio/webdev"
                      >
                        Web Developer
                      </motion.a>
                      <motion.a
                        animate={
                          hoverstate === 2 ? { y: -50, x: 0 } : { x: "100vw" }
                        }
                        initial={{ x: "100vw" }}
                        transition={{ delay: 0.02, duration: 0.5 }}
                        className="font-thin text-3xl hover:text-[#ffe6c2] hover:font-regular"
                        href="/portofolio/gamedev"
                      >
                        Unity Developer
                      </motion.a>
                      <div
                        className={`${
                          hoverstate == 2 ? "rotate-45" : ""
                        } duration-200`}
                      >
                        <svg
                          className=""
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
                    </div>
                  </div>
                </>
              )}
            </>
          ) : (
            <></>
          )}
          <div ref={targetRef} className="w-full mt-32"></div>
        </div>
      </div>
    </div>
  );
}

export default Landpage;
