"use client";
import React, { useState } from "react";
import NavbaryS from "../components/new/navs";
import { motion } from "framer-motion";
import Sociallinks from "../components/new/Sociallinks";

function Contacts() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const selectOption = (option: string) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <>
      <NavbaryS />
      <div className=" w-full h-screen md:p-16 p-3 pt-28 text-[#e0c49c] flex flex-col">
        <h3 className="text-[44px] font-extrabold leading-[50px]">
          GOT A PROJECT?
        </h3>
        <form className="flex flex-col md:flex-row mt-10 md:gap-16">
          <div className="md:w-3/6 w-full flex flex-col gap-2">
            <div className="w-full">
              <p className="text-[14px] font-bold">
                WHAT KIND OF SERVICE DO YOU NEED?
              </p>
              <div className="relative">
                <input
                  type="text"
                  className="rounded-sm border-[#e0c49c] text-[16px] bg-transparent w-full h-10 focus:outline-none outnone focus:border-[#e0c49c] cursor-pointer pr-8"
                  placeholder="Select an option..."
                  onClick={toggleDropdown}
                  value={selectedOption}
                  readOnly
                />
                <div
                  className="absolute right-2 top-3 cursor-pointer"
                  onClick={toggleDropdown}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-6 w-6 transition-transform ${
                      isOpen ? "transform rotate-180" : ""
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
                {isOpen && (
                  <motion.div
                    initial={{ scaleY: 0, transformOrigin: "top" }}
                    animate={{ scaleY: 1, transformOrigin: "top" }}
                    exit={{ scaleY: 0, transformOrigin: "top" }}
                    transition={{ duration: 0.2 }}
                    className="absolute z-10 mt-2 bg-[#e0c49c] shadow-lg w-full"
                  >
                    <ul>
                      <li
                        className="px-4 py-1 text-[#6e604d] hover:text-[#e0c49c] hover:bg-[#6e604d] cursor-pointer border-b border-[#6e604d]"
                        onClick={() => selectOption("GENERAL INQUIRY")}
                      >
                        GENERAL
                      </li>
                      <li
                        className="px-4 py-1 text-[#6e604d] hover:text-[#e0c49c] hover:bg-[#6e604d] cursor-pointer border-b border-[#6e604d]"
                        onClick={() =>
                          selectOption(
                            "BUSINESS DIGITAL SOLUTION - SAPTALOKA ERP"
                          )
                        }
                      >
                        3D MODELLING/VISUALIZATION
                      </li>
                      <li
                        className="px-4 py-1 text-[#6e604d] hover:text-[#e0c49c] hover:bg-[#6e604d] cursor-pointer border-b border-[#6e604d]"
                        onClick={() =>
                          selectOption(
                            "BUSINESS DIGITAL SOLUTION - SAPTALOKA MES"
                          )
                        }
                      >
                        UI/UX DESIGNING
                      </li>
                      <li
                        className="px-4 py-1 text-[#6e604d] hover:text-[#e0c49c] hover:bg-[#6e604d] cursor-pointer border-b border-[#6e604d]"
                        onClick={() =>
                          selectOption(
                            "BUSINESS DIGITAL SOLUTION - SAPTALOKA POS"
                          )
                        }
                      >
                        WEBSITE & APP DEVELOPMENT
                      </li>
                      <li
                        className="px-4 py-1 text-[#6e604d] hover:text-[#e0c49c] hover:bg-[#6e604d] cursor-pointer border-b border-[#6e604d]"
                        onClick={() =>
                          selectOption(
                            "IT SOLUTION - SAPTALOKA SOFTWARE DEVELOPMENT"
                          )
                        }
                      >
                        GAME & SIMULATOR DEVELOPMENT
                      </li>
                    </ul>
                  </motion.div>
                )}
              </div>
            </div>
            <div className="w-full">
              <p className="text-[14px] font-bold">NAME</p>
              <input
                required
                type="text"
                className="rounded-sm border-[#e0c49c] text-[16px] bg-transparent w-full h-10 focus:outline-none outnone focus:border-[#e0c49c]"
                placeholder=""
              />
            </div>
            <div className="w-full">
              <p className="text-[14px] font-bold">EMAIL</p>
              <input
                required
                type="text"
                className="rounded-sm border-[#e0c49c] text-[16px] bg-transparent w-full h-10 focus:outline-none outnone focus:border-[#e0c49c]"
                placeholder=""
              />
            </div>
            <div className="w-full">
              <p className="text-[14px] font-bold">PHONE NUMBER</p>
              <input
                type="text"
                className="rounded-sm border-[#e0c49c] text-[16px] bg-transparent w-full h-10 focus:outline-none outnone focus:border-[#e0c49c]"
                placeholder=""
              />
            </div>
          </div>
          <div className="md:w-3/6 w-full flex flex-col gap-2">
            <div className="w-full">
              <p className="text-[14px] font-bold">SUBJECT</p>
              <input
                required
                type="text"
                className="rounded-sm border-[#e0c49c] text-[16px] bg-transparent w-full h-10 focus:outline-none outnone focus:border-[#e0c49c]"
                placeholder=""
              />
            </div>
            <div className="w-full">
              <p className="text-[14px] font-bold">MESSAGE</p>
              <textarea
                required
                rows={4}
                className="rounded-sm border-[#e0c49c] text-[16px] bg-transparent w-full focus:outline-none outnone focus:border-[#e0c49c]"
                placeholder=""
              />
            </div>
            <div className="w-full h-full">
              <button
                type="submit"
                className="w-full h-full bg-[#e0c49c] hover:bg-[#ffe5c1] text-[#6e604d] text-[14px] font-bold flex justify-center items-center gap-2 hover:gap-4 duration-200 py-2"
              >
                <p>SEND MESSAGE</p>
              </button>
            </div>
          </div>
        </form>
        <div className="flex w-full h-full  justify-center items-center">
          <Sociallinks />
        </div>
      </div>
    </>
  );
}

export default Contacts;
