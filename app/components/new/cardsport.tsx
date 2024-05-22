import React from "react";

function Cardsport({
  image,
  title,
  type,
}: {
  image: string;
  title: string;
  type: string;
}) {
  return (
    <div className="rounded-sm border border-[#e0c49c] w-full h-[400px] overflow-hidden relative">
      <img
        className="w-full h-full object-cover object-center absolute opacity-75"
        src={image}
        alt="a"
      />
      <div className="absolute w-full h-full p-5 flex flex-col justify-end">
        <div className="bgblur2 w-full rounded-sm border border-[#6e604d] flex justify-between items-center px-2 py-1">
          <p className="md:text-2xl text-xl font-thin">{title}</p>
          <p className="md:text-md text-sm">{type}</p>
        </div>
      </div>
    </div>
  );
}

export default Cardsport;
