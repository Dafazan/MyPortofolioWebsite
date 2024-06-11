"use client";
import React, { useState, useRef, useEffect } from "react";

function CardsportH({
  image,
  title,
  type,
  link,
}: {
  image: string;
  title: string;
  type: string;
  link: string;
}) {
  const [hoverstate, setHoverstate] = useState(0);
  return (
    <div
      onMouseEnter={() => setHoverstate(1)}
      onMouseLeave={() => setHoverstate(0)}
      className=" mt-[20vh] mb-[100vh] rounded-sm border border-[#e0c49c] w-full h-[400px] overflow-hidden relative"
    >
      <img
        className="w-full h-full object-cover object-center absolute "
        src={image}
        alt="a"
      />
      <div
        className={`absolute w-full h-full duration-150 ${
          hoverstate == 1 ? "bgblurc" : ""
        }`}
      ></div>
      <div className="absolute w-full h-full p-5 flex flex-col justify-end">
        <div className="bgblur2 w-full rounded-sm border border-[#6e604d] flex justify-between items-center px-2 py-1">
          <p className="md:text-2xl text-xl font-thin">{title}</p>
          <p className="md:text-md text-sm">{type}</p>
        </div>
      </div>
    </div>
  );
}

export default CardsportH;
