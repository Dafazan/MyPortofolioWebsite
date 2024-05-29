"use client";
import React from "react";
import { useState } from "react";
import Cardsport from "../components/new/cardsport";
import NavbaryS from "../components/new/navs";

function Portofolio() {
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
                className="bg-[#ffe6c2] text-[#6e604d] px-2 rounded-sm md:py-2 text-center"
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
              image="https://cdna.artstation.com/p/assets/images/images/072/923/394/large/dafazan-keyrender1ex.jpg?1708517799"
              title="Morning, Writers!"
              type="3D ILLUSTRATION"
            />
            <Cardsport
              image="https://cdna.artstation.com/p/assets/images/images/053/506/046/large/dafazan-6.jpg?1662385090"
              title="Honda Civic"
              type="3D ASSETS"
            />
            <Cardsport
              image="https://cdnb.artstation.com/p/assets/images/images/072/935/135/large/dafazan-grassdesk-01.jpg?1708537199"
              title="Hill Of Past"
              type="3D ILLUSTRATION"
            />
            <Cardsport
              image="https://firebasestorage.googleapis.com/v0/b/project-insight-fd427.appspot.com/o/Preview1.png?alt=media&token=6c2fada1-fc14-41aa-8870-71a9f6e9e0c0"
              title="Drum Set"
              type="3D ASSETS"
            />
            <Cardsport
              image="https://cdnb.artstation.com/p/assets/images/images/040/695/679/large/dafazan-wood-clean.jpg?1629639957"
              title="Just Another Sunset"
              type="3D ILLUSTRATION"
            />
            <Cardsport
              image="https://firebasestorage.googleapis.com/v0/b/project-insight-fd427.appspot.com/o/epiano.png?alt=media&token=a5be5f87-0922-4b84-9b9c-115c2a1f946d"
              title="Electric Piano"
              type="3D ASSETS"
            />
            <Cardsport
              image="https://cdnb.artstation.com/p/assets/images/images/072/934/887/large/dafazan-blackhole-c1.jpg?1708536780"
              title="Gargantuan"
              type="3D ILLUSTRATION"
            />
            <Cardsport
              image="https://cdna.artstation.com/p/assets/images/images/039/968/002/large/dafazan-w-moon-c2.jpg?1627470927"
              title="Earth and Moon"
              type="3D ILLUSTRATION"
            />
            <Cardsport
              image="https://firebasestorage.googleapis.com/v0/b/project-insight-fd427.appspot.com/o/cam.png?alt=media&token=3cab29b7-4fbb-4ec9-9a10-e14fdfcb4b4d"
              title="CAMERA"
              type="3D ASSETS"
            />
            <Cardsport
              image="https://cdna.artstation.com/p/assets/images/images/040/695/712/large/dafazan-mini-city-compnonwm.jpg?1629640055"
              title="At Night"
              type="3D ILLUSTRATION"
            />
            <Cardsport
              image="https://cdnb.artstation.com/p/assets/images/images/072/934/797/large/dafazan-cls1.jpg?1708536626"
              title="The Class"
              type="3D ISOMETRIC"
            />
            <Cardsport
              image="https://cdnb.artstation.com/p/assets/images/images/034/721/305/large/dafazan-arc1.jpg?1613042583"
              title="Stark's Ark Reactor"
              type="3D ASSETS"
            />
            <Cardsport
              image="https://cdna.artstation.com/p/assets/images/images/039/971/138/large/dafazan-comp.jpg?1627478459"
              title="The Bridge"
              type="3D ISOMETRIC"
            />
            <Cardsport
              image="https://firebasestorage.googleapis.com/v0/b/project-insight-fd427.appspot.com/o/3upload.png?alt=media&token=8c1fa092-a5a1-499f-bfdf-edda33bc59d3"
              title="Table Design"
              type="3D ASSETS"
            />
            <Cardsport
              image="https://firebasestorage.googleapis.com/v0/b/project-insight-fd427.appspot.com/o/tv1bl2.png?alt=media&token=779c0efb-fe2b-419a-8d2d-ee1bf1bd5526"
              title="Table Design"
              type="3D ASSETS"
            />
            <Cardsport
              image="https://firebasestorage.googleapis.com/v0/b/project-insight-fd427.appspot.com/o/sh3.png?alt=media&token=e6d61171-ff3f-4b45-80d8-f2970bc3c377"
              title="Captain America's Shield"
              type="3D ASSETS"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Portofolio;
