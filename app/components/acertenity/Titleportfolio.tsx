import React from "react";
import { FlipWords } from "./flip-words";

export function FlipWordsDemo() {
  const words = ["3D MODELS", "UI/UX DESIGN", "WEBSITE", "GAME"];

  return (
    <div className="flex justify-center items-center px-4">
      <div className="text-[52px] flex mx-auto  text-[#bda27c] dark:text-[#bda27c] font-bold">
        <span className="text-4xl translate-y-5 duration-100 me-2">SOME</span>
        <FlipWords words={words} />
        <span className="text-4xl translate-y-5 duration-100 ms-2">
          I HAVE DONE
        </span>
      </div>
    </div>
  );
}
