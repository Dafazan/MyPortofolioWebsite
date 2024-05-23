"use client";
import React from "react";
import { useState } from "react";
import Cardsport from "../../components/new/cardsport";
import NavbaryS from "../../components/new/navs";

function GameDev() {
  return (
    <>
      <NavbaryS />
      <div className="md:px-16 px-3 py-10 pt-16">
        <div className=" w-full flex justify-center py-3 mt-8">
          <div
            className={`bgblur duration-100 w-full md:h-16 h-7 rounded-sm border border-[#6e604d] flex justify-between items-center md:px-20 px-3 text-[#e0c49c] `}
          >
            <div className="md:text-xl text-xs font-thin text-center">
              <a
                className="hover:text-[#ffe6c2] text-center"
                href="/portofolio"
              >
                GENERAL 3D
              </a>
            </div>
            <div className="md:text-xl text-xs font-thin text-center">
              <a
                className="hover:text-[#ffe6c2] text-center"
                href="/portofolio/uiux"
              >
                UI/UX DESIGN
              </a>
            </div>
            <div className="md:text-xl text-xs font-thin text-center">
              <a
                className="hover:text-[#ffe6c2] text-center"
                href="/portofolio/webdev"
              >
                WEBSITE DEV
              </a>
            </div>
            <div className="md:text-xl text-xs font-thin text-center">
              <a
                className="bg-[#ffe6c2] text-[#6e604d] px-2 rounded-sm md:py-2 text-center"
                href="/portofolio/gamedev"
              >
                GAME DEV
              </a>
            </div>
          </div>
        </div>

        <div className="w-full flex flex-col gap-3 mt-3">
          <div className="grid md:grid-cols-2 grid-cols-1 gap-7">
            <Cardsport
              image="https://cdna.artstation.com/p/assets/images/images/072/923/394/large/dafazan-keyrender1ex.jpg?1708517799"
              title="WWTP SIM"
              type="3D VISUALIZER"
            />
            <Cardsport
              image="https://cdnb.artstation.com/p/assets/images/images/072/935/135/large/dafazan-grassdesk-01.jpg?1708537199"
              title="VESPA AR 3D"
              type="UNITY DEV"
            />
            <Cardsport
              image="https://cdnb.artstation.com/p/assets/images/images/040/695/679/large/dafazan-wood-clean.jpg?1629639957"
              title="TRASH AR SIM 3D"
              type="UNITY DEV"
            />
            <Cardsport
              image="https://cdnb.artstation.com/p/assets/images/images/072/934/887/large/dafazan-blackhole-c1.jpg?1708536780"
              title="LEARNING GAME"
              type="UNITY DEV"
            />
            <Cardsport
              image="https://cdnb.artstation.com/p/assets/images/images/072/934/797/large/dafazan-cls1.jpg?1708536626"
              title="INSTRUMENT SIM"
              type="UNITY DEV"
            />
            <Cardsport
              image="https://cdnb.artstation.com/p/assets/images/images/072/934/797/large/dafazan-cls1.jpg?1708536626"
              title="VISUAL NOVEL"
              type="UNITY DEV"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default GameDev;
