"use client";
import React, { useState } from "react";
import NavbaryS from "../components/new/navs";
import { motion } from "framer-motion";
import Sociallinks from "../components/new/Sociallinks";
import { sendEmail } from "../../lib/emailjs";

function Contacts() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const [emailSent, setEmailSent] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const selectOption = (option: string) => {
    setSelectedOption(option);
    setIsOpen(false);
  };
  const [formData, setFormData] = useState({
    service: "",
    name: "",
    email: "",
    number: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    sendEmail({ ...formData, service: selectedOption })
      .then(() => {
        setEmailSent(true);
        setFormData({
          service: "",
          name: "",
          email: "",
          number: "",
          subject: "",
          message: "",
        });
        setSelectedOption("");
        setTimeout(() => setEmailSent(false), 5000); // Hide message after 5 seconds
      })
      .catch((error: any) => {
        console.error("Failed to send email:", error);
      });
  };

  return (
    <>

      <div className=" w-full h-screen  text-[#fefefe] flex flex-col">

        <form
          onSubmit={handleSubmit}
          className="flex flex-col md:flex-row mt-10 md:gap-16"
        >
          <div className="md:w-3/6 w-full flex flex-col gap-2">
            <div className="w-full">
              <p className="text-[14px] font-bold">
                WHAT KIND OF SERVICE DO YOU NEED?
              </p>
              <div className="relative">
                <input
                  type="text"
                  name="services"
                  onChange={handleChange}
                  className="rounded-sm border-[#fefefe] text-[16px] bg-transparent w-full h-10 focus:outline-none outnone focus:border-[#fefefe] cursor-pointer pr-8"
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
                    className={`h-6 w-6 transition-transform ${isOpen ? "transform rotate-180" : ""
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
                    className="absolute z-10 mt-2 bg-[#fefefe] shadow-lg w-full"
                  >
                    <ul>
                      <li
                        className="px-4 py-1 text-[#000] hover:text-[#fefefe] hover:bg-[#000] cursor-pointer border-b border-[#ffffff]"
                        onClick={() => selectOption("GENERAL")}
                      >
                        GENERAL
                      </li>
                      <li
                        className="px-4 py-1 text-[#000] hover:text-[#fefefe] hover:bg-[#000] cursor-pointer border-b border-[#ffffff]"
                        onClick={() => selectOption("3D MODELLING")}
                      >
                        3D MODELLING/VISUALIZATION
                      </li>
                      <li
                        className="px-4 py-1 text-[#000] hover:text-[#fefefe] hover:bg-[#000] cursor-pointer border-b border-[#ffffff]"
                        onClick={() => selectOption("UI/UX DESIGN")}
                      >
                        UI/UX DESIGNING
                      </li>
                      <li
                        className="px-4 py-1 text-[#000] hover:text-[#fefefe] hover:bg-[#000] cursor-pointer border-b border-[#ffffff]"
                        onClick={() => selectOption("WEB APP DEV")}
                      >
                        WEBSITE & APP DEVELOPMENT
                      </li>
                      <li
                        className="px-4 py-1 text-[#000] hover:text-[#fefefe] hover:bg-[#000] cursor-pointer border-b border-[#ffffff]"
                        onClick={() => selectOption("GAME DEV")}
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
                className="rounded-sm border-[#fefefe] text-[16px] bg-transparent w-full h-10 focus:outline-none outnone focus:border-[#fefefe]"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="w-full">
              <p className="text-[14px] font-bold">EMAIL</p>
              <input
                required
                type="text"
                className="rounded-sm border-[#fefefe] text-[16px] bg-transparent w-full h-10 focus:outline-none outnone focus:border-[#fefefe]"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="w-full">
              <p className="text-[14px] font-bold">PHONE NUMBER</p>
              <input
                type="text"
                className="rounded-sm border-[#fefefe] text-[16px] bg-transparent w-full h-10 focus:outline-none outnone focus:border-[#fefefe]"
                name="number"
                value={formData.number}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="md:w-3/6 w-full flex flex-col gap-2">
            <div className="w-full">
              <p className="text-[14px] font-bold">SUBJECT</p>
              <input
                required
                type="text"
                className="rounded-sm border-[#fefefe] text-[16px] bg-transparent w-full h-10 focus:outline-none outnone focus:border-[#fefefe]"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
              />
            </div>
            <div className="w-full">
              <p className="text-[14px] font-bold">MESSAGE</p>
              <textarea
                required
                rows={4}
                className="rounded-sm border-[#fefefe] text-[16px] bg-transparent w-full focus:outline-none outnone focus:border-[#fefefe]"
                name="message"
                value={formData.message}
                onChange={handleChange}
              />
            </div>
            <div className="w-full h-full">
              <button
                type="submit"
                className="w-full h-full bg-[#fefefe] hover:bg-[#000000] text-[#000000] hover:text-[#ffffff] hover:border border-white text-[14px] font-bold flex justify-center items-center gap-2 hover:gap-4 duration-200 py-2"
              >
                {emailSent ? (
                  <p>Email successfully sent!</p>
                ) : (
                  <p>SEND MESSAGE</p>
                )}
              </button>
            </div>
          </div>
        </form>
        <div className="flex w-full h-full  justify-center items-center pb-10">
          <Sociallinks />
        </div>
      </div>
    </>
  );
}

export default Contacts;
