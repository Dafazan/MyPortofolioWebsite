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
              image="https://firebasestorage.googleapis.com/v0/b/project-insight-fd427.appspot.com/o/DSC02322.JPG?alt=media&token=80ac0f15-e023-40e0-adc3-46a2cceaac5b"
              title="WWTP SIM"
              type="3D VISUALIZER"
            />
            <Cardsport
              image="https://firebasestorage.googleapis.com/v0/b/project-insight-fd427.appspot.com/o/339486725_198567016243678_3687514765136256031_n.jpg?alt=media&token=3b899f92-3687-4920-9feb-0e895a888be5"
              title="VESPA AR 3D"
              type="UNITY DEV"
            />
            <Cardsport
              image="https://firebasestorage.googleapis.com/v0/b/project-insight-fd427.appspot.com/o/339486725_198567016243678_3687514765136256031_n.jpg?alt=media&token=3b899f92-3687-4920-9feb-0e895a888be5"
              title="TRASH AR SIM 3D"
              type="UNITY DEV"
            />
            <Cardsport
              image="https://firebasestorage.googleapis.com/v0/b/project-insight-fd427.appspot.com/o/339486725_198567016243678_3687514765136256031_n.jpg?alt=media&token=3b899f92-3687-4920-9feb-0e895a888be5"
              title="LEARNING GAME"
              type="UNITY DEV"
            />
            <Cardsport
              image="https://firebasestorage.googleapis.com/v0/b/project-insight-fd427.appspot.com/o/339486725_198567016243678_3687514765136256031_n.jpg?alt=media&token=3b899f92-3687-4920-9feb-0e895a888be5"
              title="INSTRUMENT SIM"
              type="UNITY DEV"
            />
            <Cardsport
              image="https://firebasestorage.googleapis.com/v0/b/project-insight-fd427.appspot.com/o/339486725_198567016243678_3687514765136256031_n.jpg?alt=media&token=3b899f92-3687-4920-9feb-0e895a888be5"
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
