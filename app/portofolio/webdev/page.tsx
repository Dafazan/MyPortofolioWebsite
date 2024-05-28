"use client";
import React from "react";
import { useState } from "react";
import Cardsport from "../../components/new/cardsport";
import NavbaryS from "../../components/new/navs";

function WebDev() {
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
                className="bg-[#ffe6c2] text-[#6e604d] px-2 rounded-sm md:py-2 text-center"
                href="/portofolio/webdev"
              >
                WEBSITE DEV
              </a>
            </div>
            <div className="md:text-xl text-xs font-thin text-center">
              <a
                className="hover:text-[#ffe6c2] text-center"
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
              image="https://firebasestorage.googleapis.com/v0/b/project-insight-fd427.appspot.com/o/DSC02315.JPG?alt=media&token=4273e535-eb2b-4ab7-81b0-371d8244af96"
              title="SAPTALOKA WEB"
              type="FULLSTACK DEV"
            />
            <Cardsport
              image="https://firebasestorage.googleapis.com/v0/b/project-insight-fd427.appspot.com/o/DSC02310.JPG?alt=media&token=7099400e-f172-4249-ab14-b52ebfd41583"
              title="QUNFILMS WEB"
              type="FRONTEND DEV"
            />
            <Cardsport
              image="https://firebasestorage.googleapis.com/v0/b/project-insight-fd427.appspot.com/o/DSC02320.JPG?alt=media&token=641bfca6-36bb-49f2-86bd-c2ba7e7fbffa"
              title="IBADAHKU WEB"
              type="FRONTEND DEV"
            />
            <Cardsport
              image="https://firebasestorage.googleapis.com/v0/b/project-insight-fd427.appspot.com/o/DSC02312.JPG?alt=media&token=1f9a104b-b171-41b5-9c78-78ef05ac989c"
              title="TYS CONS WEB"
              type="FRONTEND DEV"
            />
            <Cardsport
              image="https://firebasestorage.googleapis.com/v0/b/project-insight-fd427.appspot.com/o/339486725_198567016243678_3687514765136256031_n.jpg?alt=media&token=3b899f92-3687-4920-9feb-0e895a888be5"
              title="DVOTEE WEB"
              type="FULLSTACK DEV"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default WebDev;
