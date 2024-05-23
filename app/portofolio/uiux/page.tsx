"use client";
import React from "react";
import { useState } from "react";
import Cardsport from "../../components/new/cardsport";
import NavbaryS from "../../components/new/navs";

function UiUx() {
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
                className="bg-[#ffe6c2] text-[#6e604d] px-2 rounded-sm md:py-2 text-center"
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
              type="UI/UX REDESIGN"
            />
            <Cardsport
              image="https://firebasestorage.googleapis.com/v0/b/project-insight-fd427.appspot.com/o/DSC02323.JPG?alt=media&token=f4cf98e2-70e1-4ab3-aecf-c0ddc492c5c2"
              title="TELKOM INFRA INVENTORY"
              type="UI/UX REDESIGN"
            />
            <Cardsport
              image="https://firebasestorage.googleapis.com/v0/b/project-insight-fd427.appspot.com/o/DSC02324.JPG?alt=media&token=b1ba1a42-b263-4b84-83fb-a0f9f506315a"
              title="CBL ERP MANUFATURE"
              type="UI/UX DESIGN"
            />
            <Cardsport
              image="https://firebasestorage.googleapis.com/v0/b/project-insight-fd427.appspot.com/o/DSC02320.JPG?alt=media&token=641bfca6-36bb-49f2-86bd-c2ba7e7fbffa"
              title="IBADAHKU"
              type="UI/UX REDESIGN"
            />
            <Cardsport
              image="https://firebasestorage.googleapis.com/v0/b/project-insight-fd427.appspot.com/o/DSC02322.JPG?alt=media&token=80ac0f15-e023-40e0-adc3-46a2cceaac5b"
              title="WWTP SIM"
              type="GUI DESIGN"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default UiUx;
